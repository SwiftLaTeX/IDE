/* eslint-disable @typescript-eslint/tslint/config */
/********************************************************************************
 * Copyright (C) 2019 Gerald Weber and Elliott Wen.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 ********************************************************************************/
import { injectable, inject } from 'inversify';
import * as S3 from 'aws-sdk/clients/s3';
import * as JSZIP from 'jszip';
import * as path from 'path';
import { FileSystemWatcherServer } from '../common/filesystem-watcher-protocol';
/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * Minio can not end a file with '/', we need a marker, this client is designed only for Minio
 * For s3, a conflicted solution is needed to tell whether a file is a dir or file.
 * For S3, a more work is needed. Do not use it in S3 right now. A possible solution is to use ETag
 * for directory distinguish
 */
const ROOT_MARKER = '__D1r__Ro0t__';

function GenerateRandomID(): string {
    // From http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

/**
 * Configuration options for file system.
 */
export class S3StorageSystemOptions {
    // The name of this file system. You can have multiple IndexedDB file systems operating
    // at once, but each must have a different name.
    bucket: string = 'swiftlatex';
    prefix: string = '';
    // The Key, Secret, Token
    apiKey: string = '';
    apiSecret: string = '';
    sessionToken: string = '';
    endpoint: string = '';
    expiry: number = 0;
    // The size of the inode cache. Defaults to 100. A size of 0 or below disables caching.
}

interface MetaDictionary<T> {
    [key: string]: T;
}

interface DirectoryInode {
    node_id: string;
    is_dir: boolean;
}

interface Directory {
    [key: string]: DirectoryInode;
}

interface DirectoryWalkResult {
    uri: string;
    node_id: string;
}

/**
 * FileStat
 */
export class S3Object {
    public modifiedTime: Date = new Date();
    public ETag: string = '';
    public size: number = 0;
    public meta: MetaDictionary<string> = {};
    public data: Uint8Array | string | undefined = undefined;

    /* For upper application layer */
    public key: string = '';
    public uri: string = '';
    public isDir: boolean = false;
}

/**
 * Configuration options for file system. All APIs do not accpet parameter ends with '/'
 */
@injectable()
export class S3StorageSystem {
    private s3: S3 | undefined = undefined;

    public opts: S3StorageSystemOptions = new S3StorageSystemOptions();

    private s3lock: boolean = false;

    @inject(FileSystemWatcherServer)
    private readonly fileSystemWatcherServer: FileSystemWatcherServer;

    constructor() {
        this._init_fs().catch(e => {
            throw e;
        });
    }

    private async _init_fs() {
        const rootnode = await this._headObject(ROOT_MARKER);
        if (!rootnode) {
            const empty_list: MetaDictionary<MetaDictionary<string>> = {};
            const obj = new S3Object();
            obj.data = JSON.stringify(empty_list);
            await this._putObject(ROOT_MARKER, obj);
        }
    }

    /* Query a path to its node id */
    public async _resolvePath(p: string): Promise<DirectoryInode | undefined> {
        if (!p || p === '.') {
            return undefined;
        }
        if (p === '/') {
            return { node_id: ROOT_MARKER, is_dir: true };
        } else {
            const parent = await this._resolvePath(path.dirname(p));
            if (!parent) {
                return undefined;
            }
            const parent_nodeid = parent.node_id;
            const dirListObj = await this._getObject(parent_nodeid);
            if (!dirListObj) {
                return undefined;
            }
            const jsonList: Directory = JSON.parse(dirListObj.data!.toString());
            const node: DirectoryInode = jsonList[path.basename(p)];
            return node;
        }
        return undefined;
    }

    public async ensureDirExist(p: string): Promise<void> {
        /* To prevent endless recursive */
        if (p === '/' || p === '.' || p === '') {
            return;
        }
        const s3stat = await this._resolvePath(p);
        if (s3stat) {
            return;
        }
        const parentDir = path.dirname(p);
        await this.ensureDirExist(parentDir);
        await this.mkdir(p);
    }

    /* Stat a file or dir, one API turnaround*/
    public async stat(p: string): Promise<S3Object | undefined> {
        // console.log('stat ' + p);
        /* Base Case */
        const node = await this._resolvePath(p);

        if (!node) {
            return undefined;
        }

        const obj = await this._headObject(node.node_id);
        if (obj) {
            obj.uri = p;
            obj.isDir = node.is_dir;
        }
        return obj;
    }

    /* Read dir, one api turnaround , a little bit hack to reduce the turnaround */
    public async readdir(p: string): Promise<S3Object[]> {

        const node = await this._resolvePath(p);

        if (!node || !node.is_dir) {
            throw Error(`Directory ${p} no exists`);
        }

        const obj = await this._getObject(node.node_id);

        if (!obj) {
            throw Error(`Url ${p} does not exists due to filesystem corruption`);
        }

        const jsonList: Directory = JSON.parse(obj.data!.toString());

        const objs: S3Object[] = [];

        for (const name in jsonList) {
            if (jsonList.hasOwnProperty(name)) {
                const robj = new S3Object();
                robj.uri = (p === '/' ? '/' : p + '/') + name;
                robj.isDir = jsonList[name].is_dir;
                robj.key = jsonList[name].node_id;
                objs.push(robj);
            }
        }

        return objs;
    }

    public async mkdir(p: string): Promise<void> {
        if (!p || p === '/') {
            throw Error(`Directory ${p} already exists`);
        }

        const parent_node = await this._resolvePath(path.dirname(p));
        if (!parent_node || !parent_node.is_dir) {
            throw Error(`Directory ${p} cannot be made because its parent is missing`);
        }

        const parent_obj = await this._getObject(parent_node.node_id);

        if (!parent_obj) {
            throw Error(`Directory ${p} cannot be made due to filesystem corruption`);
        }

        const jsonList: Directory = JSON.parse(parent_obj.data!.toString());

        const basename = path.basename(p);

        if (basename in jsonList) {
            throw Error(`Directory ${p} already exists`);
        }

        /* Make the obj first */
        const new_id = GenerateRandomID();
        const new_obj = new S3Object();
        new_obj.data = '{}';
        await this._putObject(new_id, new_obj);

        /* Update the parent */
        jsonList[basename] = { node_id: new_id, is_dir: true };
        parent_obj.data = JSON.stringify(jsonList);
        await this._putObject(parent_node.node_id, parent_obj);

        (<any>this.fileSystemWatcherServer).kernel_notify(p, 1);
    }

    /* Two turn around */
    public async writeFile(p: string, data: string | Uint8Array): Promise<void> {
        if (!p || p === '/') {
            throw Error(`Directory ${p} not writable`);
        }

        const parent_node = await this._resolvePath(path.dirname(p));

        if (!parent_node || !parent_node.is_dir) {
            throw Error(`File ${p} cannot be write because its parent is missing`);
        }

        const parent_obj = await this._getObject(parent_node.node_id);

        if (!parent_obj) {
            throw Error(`Directory ${p} cannot be made due to filesystem corruption`);
        }

        const jsonList: Directory = JSON.parse(parent_obj.data!.toString());

        const basename = path.basename(p);

        if (basename in jsonList) {
            const old_node = jsonList[basename];
            if (old_node.is_dir) {
                throw Error(` ${p} is a directory`);
            }
            const old_id = jsonList[basename].node_id;
            const new_obj = new S3Object();
            new_obj.data = data;
            await this._putObject(old_id, new_obj);
            (<any>this.fileSystemWatcherServer).kernel_notify(p, 0);
        } else {
            /* Make the obj first */
            const new_id = GenerateRandomID();
            const new_obj = new S3Object();
            new_obj.data = data;
            await this._putObject(new_id, new_obj);
            /* Update the parent */
            jsonList[basename] = { node_id: new_id, is_dir: false };
            parent_obj.data = JSON.stringify(jsonList);
            await this._putObject(parent_node.node_id, parent_obj);
            (<any>this.fileSystemWatcherServer).kernel_notify(p, 1);
        }
    }

    /* Delete file three turnaround, very rarely used, so no optimization */
    public async delete(p: string): Promise<void> {
        if (!p || p === '/') {
            throw Error(`Directory ${p} not deletable`);
        }

        const parent_node = await this._resolvePath(path.dirname(p));

        if (!parent_node || !parent_node.is_dir) {
            throw Error(`File ${p} cannot be deleted because its parent is missing`);
        }

        const parent_obj = await this._getObject(parent_node.node_id);

        if (!parent_obj) {
            throw Error(`Directory ${p} cannot be made due to filesystem corruption`);
        }

        const jsonList: Directory = JSON.parse(parent_obj.data!.toString());

        const basename = path.basename(p);

        if (basename in jsonList) {
            delete jsonList[basename];
            parent_obj.data = JSON.stringify(jsonList);
            await this._putObject(parent_node.node_id, parent_obj);
            (<any>this.fileSystemWatcherServer).kernel_notify(p, 2);
        } else {
            throw Error(`Stuff ${p} does not exist`);
        }
    }

    public async zipDir(p: string): Promise<Uint8Array> {
        const walkResults = await this._walkdir(p);
        const zipobj = new JSZIP();
        for (let j = 0; j < walkResults.length; j++) {
            const s3obj = await this._getObject(walkResults[j].node_id);
            if (!s3obj) {
                continue;
            }
            zipobj.file(walkResults[j].uri, s3obj.data!);
        }
        const buf = await zipobj.generateAsync({ type: 'uint8array' });
        return buf;
    }

    public async copyFile(p: string, newPath: string): Promise<void> {
        const self_node = await this._resolvePath(p);
        if (!self_node) {
            throw Error(`Stuff ${p} does not exist`);
        }

        if (self_node.is_dir) {
            throw Error(`Stuff ${p} is a directory`);
        }

        /* Check Dst */
        const dstParentPath = path.dirname(newPath);
        const dstParentNode = await this._resolvePath(dstParentPath);
        if (!dstParentNode) {
            throw Error(`Directory ${dstParentPath} does no exists`);
        }

        const dstParentObj = await this._getObject(dstParentNode.node_id);
        if (!dstParentObj) {
            throw Error(`Directory ${dstParentPath} does no exists due to filesystem corruption`);
        }
        const dstJsonList: Directory = JSON.parse(dstParentObj.data!.toString());
        const dstBasename = path.basename(newPath);

        if (dstBasename in dstJsonList && dstJsonList[dstBasename].is_dir !== self_node.is_dir) {
            throw Error('Cannot overwrite a dir with a file');
        }

        const new_object_id = GenerateRandomID();
        await this._copyObject(self_node.node_id, new_object_id);

        dstJsonList[dstBasename] = { node_id: new_object_id, is_dir: false };
        dstParentObj.data = JSON.stringify(dstJsonList);
        await this._putObject(dstParentNode.node_id, dstParentObj);

        (<any>this.fileSystemWatcherServer).kernel_notify(newPath, 1);
    }

    public async copyFolder(p: string, newPath: string): Promise<void> {
        const self_node = await this._resolvePath(p);
        if (!self_node) {
            throw Error(`Stuff ${p} does not exist`);
        }

        if (!self_node.is_dir) {
            throw Error(`Stuff ${p} is a file`);
        }

        /* Check Dst */
        const dstParentPath = path.dirname(newPath);
        const dstParentNode = await this._resolvePath(dstParentPath);
        if (!dstParentNode) {
            throw Error(`Directory ${dstParentPath} does no exists`);
        }

        const dstParentObj = await this._getObject(dstParentNode.node_id);
        if (!dstParentObj) {
            throw Error(`Directory ${dstParentPath} does no exists due to filesystem corruption`);
        }
        const dstJsonList: Directory = JSON.parse(dstParentObj.data!.toString());
        const dstBasename = path.basename(newPath);

        if (dstBasename in dstJsonList) {
            if (dstJsonList[dstBasename].is_dir !== self_node.is_dir) {
                throw Error('Cannot overwrite a dir with a file');
            }
        }

        /* Do magic work */
        const walk = await this._walkdir(p);
        for (let j = 0; j < walk.length; j++) {
            const uri = walk[j].uri;
            const dst = newPath + uri.substring(p.length);
            await this.ensureDirExist(path.dirname(dst));
            await this.copyFile(uri, dst);
        }

    }

    private async _walkdir(p: string): Promise<DirectoryWalkResult[]> {
        if (!p) {
            return [];
        }
        let results: DirectoryWalkResult[] = [];
        const objs = await this.readdir(p);
        for (let j = 0; j < objs.length; j++) {
            const obj = objs[j];
            if (obj.isDir) {
                const inner_results = await this._walkdir(obj.uri);
                results = results.concat(inner_results);
            } else {
                results.push({ uri: obj.uri, node_id: obj.key });
            }
        }
        return results;
    }


    public async rename(p: string, newPath: string): Promise<void> {
        if (!p || p === '/') {
            throw Error('cannot rename/copy root folder /');
        }

        if (p === newPath) {
            throw Error('Src and Dst are the same');
        }

        /* Check the src */
        const srcParentPath = path.dirname(p);
        const srcParentNode = await this._resolvePath(srcParentPath);
        if (!srcParentNode) {
            throw Error(`File or Directory ${p} does not exists`);
        }
        const srcParentObj = await this._getObject(srcParentNode.node_id);
        if (!srcParentObj) {
            throw Error(`File or Directory ${p} does not exists`);
        }
        const srcJsonList: Directory = JSON.parse(srcParentObj.data!.toString());
        const srcBasename: string = path.basename(p);
        if (!(srcBasename in srcJsonList)) {
            throw Error(`File or Directory ${p} does not exists`);
        }

        /* Check the dst */
        const dstParentPath = path.dirname(newPath);
        const dstBasename = path.basename(newPath);
        if (srcParentPath === dstParentPath) {
            /* Fast routine */
            if (dstBasename in srcJsonList && srcJsonList[dstBasename].is_dir !== srcJsonList[srcBasename].is_dir) {
                throw Error('Cannot overwrite a dir with a file');
            }
            srcJsonList[dstBasename] = srcJsonList[srcBasename];
            delete srcJsonList[srcBasename];
            srcParentObj.data = JSON.stringify(srcJsonList);
            await this._putObject(srcParentNode.node_id, srcParentObj);
            (<any>this.fileSystemWatcherServer).kernel_notify(p, 2);
            (<any>this.fileSystemWatcherServer).kernel_notify(newPath, 1);
            return;
        }

        /* We need to check the dst */

        const dstParentNode = await this._resolvePath(dstParentPath);
        if (!dstParentNode) {
            throw Error(`Directory ${dstParentPath} does no exists`);
        }

        const dstParentObj = await this._getObject(dstParentNode.node_id);
        if (!dstParentObj) {
            throw Error(`Directory ${dstParentPath} does no exists due to filesystem corruption`);
        }
        const dstJsonList: Directory = JSON.parse(dstParentObj.data!.toString());

        if (dstBasename in dstJsonList && dstJsonList[dstBasename].is_dir !== srcJsonList[srcBasename].is_dir) {
            throw Error('Cannot overwrite a dir with a file');
        }
        dstJsonList[dstBasename] = srcJsonList[srcBasename];

        /* Write */
        delete srcJsonList[srcBasename];
        srcParentObj.data = JSON.stringify(srcJsonList);
        await this._putObject(srcParentNode.node_id, srcParentObj);

        /* Update Dst */
        dstParentObj.data = JSON.stringify(dstJsonList);
        await this._putObject(dstParentNode.node_id, dstParentObj);
        (<any>this.fileSystemWatcherServer).kernel_notify(p, 2);
        (<any>this.fileSystemWatcherServer).kernel_notify(newPath, 1);
    }

    /* Optimized for fast read, two turn around */
    public async readFile(p: string): Promise<Uint8Array> {
        const self_node = await this._resolvePath(p);
        if (!self_node) {
            throw Error(`File ${p} not exists`);
        }

        if (self_node.is_dir) {
            throw Error(`File ${p} is directory`);
        }

        const self_obj = await this._getObject(self_node.node_id);

        if (!self_obj) {
            throw Error(`File ${p} cannot be made read to filesystem corruption`);
        }

        return <Uint8Array>self_obj.data;
    }

    /* Check whether it is key available */
    public async _headObject(key: string): Promise<S3Object | undefined> {
        await this._lock();
        try {
            // // console.log('s3heading ' + key);
            const headResult = await this.s3!.headObject({
                Bucket: this.opts.bucket,
                Key: this.opts.prefix + key,
            }).promise();
            const filestat = new S3Object();
            filestat.meta = headResult.Metadata || {};
            filestat.ETag = headResult.ETag!;
            filestat.size = headResult.ContentLength!;
            filestat.modifiedTime = headResult.LastModified!;
            filestat.key = key;
            return filestat;
        } catch (err) {
            if (err.code === 'NotFound') {
                return undefined;
            }
            throw err;
        } finally {
            this._unlock();
        }
    }

    /* Get object */
    public async _getObject(key: string): Promise<S3Object | undefined> {
        await this._lock();
        try {
            const getResult = await this.s3!.getObject({
                Bucket: this.opts.bucket,
                Key: this.opts.prefix + key,
            }).promise();
            const obj = new S3Object();
            obj.size = getResult.ContentLength!;
            obj.ETag = getResult.ETag!;
            obj.data = <Uint8Array>getResult.Body!;
            obj.modifiedTime = getResult.LastModified!;
            obj.meta = getResult.Metadata || {};
            obj.key = key;
            return obj;
        } catch (err) {
            if (err.code === 'NotFound') {
                return undefined;
            }
            throw err;
        } finally {
            this._unlock();
        }
    }

    /* Put object */
    public async _putObject(key: string, obj: S3Object): Promise<void> {
        await this._lock();
        try {
            const s3CompatMeta: MetaDictionary<string> = {};
            if (obj.meta) {
                for (const metaKey in obj.meta) {
                    if (obj.meta.hasOwnProperty(metaKey)) {
                        s3CompatMeta['x-amz-meta-' + metaKey] = obj.meta[metaKey];
                    }
                }
            }
            await this.s3!.putObject({
                Body: obj.data,
                Bucket: this.opts.bucket,
                Key: this.opts.prefix + key,
                Metadata: s3CompatMeta,
            }).promise();
        } catch (e) {
            throw e;
        } finally {
            this._unlock();
        }
    }

    public async _copyObject(srcKey: string, dstKey: string): Promise<void> {
        await this._lock();
        try {
            await this.s3!.copyObject({
                Bucket: this.opts.bucket,
                CopySource: this.opts.bucket + '/' + this.opts.prefix + srcKey,
                Key: this.opts.prefix + dstKey,
            }).promise();
        } catch (e) {
            throw e;
        } finally {
            this._unlock();
        }
    }

    private async _lock(): Promise<void> {
        while (this.s3lock) {
            await new Promise(r => setTimeout(r, 10));
        }
        this.s3lock = true;
        await this._prepareLocked();
    }

    private _unlock(): void {
        this.s3lock = false;
    }

    /* Assume Lock */
    private async _prepareLocked(): Promise<void> {
        if (Date.now() > this.opts.expiry) {
            /* Need to renew */
            this.s3 = undefined;
            const creds = await fetch('/key');
            const json_creds = await creds.json();
            this.opts.apiKey = json_creds['_APIKEY'];
            this.opts.apiSecret = json_creds['_APISECRET'];
            this.opts.sessionToken = json_creds['_SESSIONTOKEN'];
            this.opts.prefix = json_creds['_PREFIX'];
            this.opts.bucket = json_creds['_BUCKET'];
            this.opts.expiry = json_creds['_EXPIRY'] * 1000;
            this.opts.endpoint = json_creds['_ENDPOINT'];
            if (!this.opts.apiKey) {
                throw Error('Failed to obtain an api key');
            }
            if (!this.opts.prefix || !this.opts.prefix.endsWith('/')) {
                throw Error('Prefix should not be empty or endwith a slash.');
            }
            if (this.opts.expiry < Date.now()) {
                /* Unlikely to happen for https */
                throw Error('Please sync the time. ');
            }

            /* Have a new client */
            this.s3 = new S3({
                accessKeyId: this.opts.apiKey,
                secretAccessKey: this.opts.apiSecret,
                sessionToken: this.opts.sessionToken,
                endpoint: this.opts.endpoint,
                s3ForcePathStyle: true,
                signatureVersion: 'v4',
            });
        }
    }
}


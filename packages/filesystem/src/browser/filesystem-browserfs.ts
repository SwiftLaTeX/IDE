/********************************************************************************
 * Copyright (C) 2019 Elliott Wen and Gerald Weber.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { injectable, inject, optional } from 'inversify';
import { TextDocument } from 'vscode-languageserver-types';
import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import URI from '@theia/core/lib/common/uri';
import Uri from 'vscode-uri';
import { TextDocumentContentChangeDelta } from '@theia/core/lib/common/lsp-types';
import { FileStat, FileSystem, FileSystemClient, FileSystemError, FileMoveOptions, FileDeleteOptions, FileAccess } from '../common/filesystem';
import { S3StorageSystem, S3Object } from './s3storagesystem';

@injectable()
export class FileSystemBrowserOptions {

    encoding: string;
    recursive: boolean;
    overwrite: boolean;
    moveToTrash: boolean;

    public static DEFAULT: FileSystemBrowserOptions = {
        encoding: 'utf8',
        overwrite: false,
        recursive: true,
        moveToTrash: false
    };

}

/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace FileUriLite {
    export function create(fsPath_: string): URI {
        return new URI(Uri.file(fsPath_));
    }

    export function fsPath(uri: URI | string): string {
        if (typeof uri === 'string') {
            return fsPath(new URI(uri));
        } else {
            const fsPathFromVsCodeUri = (uri as any).codeUri.fsPath;
            return fsPathFromVsCodeUri;
        }
    }
}

@injectable()
export class BrowserFileSystem implements FileSystem {
    // private _s3fs_lock: boolean;
    constructor(
        @inject(FileSystemBrowserOptions) @optional() protected readonly options: FileSystemBrowserOptions = FileSystemBrowserOptions.DEFAULT,
        @inject(S3StorageSystem) protected readonly _s3fs: S3StorageSystem
    ) {
    }

    protected client: FileSystemClient | undefined;
    setClient(client: FileSystemClient | undefined): void {
        this.client = client;
    }

    async getFileStat(uri: string): Promise<FileStat | undefined> {
        const uri_ = new URI(uri);
        const stat = await this.doGetStat(uri_, 1);
        return stat;
    }

    async exists(uri: string): Promise<boolean> {
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            return false;
        }
        return true;
    }

    async resolveContent(uri: string, options?: { encoding?: string }): Promise<{ stat: FileStat, content: string }> {
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(uri);
        }
        if (stat.isDirectory) {
            throw FileSystemError.FileIsDirectory(uri, 'Cannot resolve the content.');
        }
        const encoding = this.doGetEncoding(options);
        if (encoding !== 'utf8') {
            throw FileSystemError.FileExists(_uri, 'Unsupported File Encoding. ' + encoding);
        }
        const contentBuffer = await this._s3fs.readFile(FileUriLite.fsPath(_uri));
        const content = contentBuffer.toString();
        return { stat, content };
    }

    async setContent(file: FileStat, content: string, options?: { encoding?: string }): Promise<FileStat> {
        const _uri = new URI(file.uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(file.uri);
        }
        if (stat.isDirectory) {
            throw FileSystemError.FileIsDirectory(file.uri, 'Cannot set the content.');
        }
        const encoding = this.doGetEncoding(options);
        if (encoding !== 'utf8') {
            throw FileSystemError.FileExists(_uri, 'Unsupported File Encoding. ' + encoding);
        }
        // const encodedContent = iconv.encode(content, encoding);
        await this._s3fs.writeFile(FileUriLite.fsPath(_uri), content);
        const newStat = await this.doGetStat(_uri, 1);
        if (newStat) {
            return newStat;
        }
        // this.fileSystemWatcherServer.kernel_notify(file.uri);
        throw FileSystemError.FileNotFound(file.uri, 'Error occurred while writing file content.');
    }

    async updateContent(file: FileStat, contentChanges: TextDocumentContentChangeEvent[], options?: { encoding?: string, overwriteEncoding?: string }): Promise<FileStat> {
        const _uri = new URI(file.uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(file.uri);
        }
        if (stat.isDirectory) {
            throw FileSystemError.FileIsDirectory(file.uri, 'Cannot set the content.');
        }
        if (contentChanges.length === 0 && !(options && options.overwriteEncoding)) {
            return stat;
        }
        const encoding = this.doGetEncoding(options);
        if (encoding !== 'utf8') {
            throw FileSystemError.FileExists(_uri, 'Unsupported File Encoding. ' + encoding);
        }
        const contentBuffer = await this._s3fs.readFile(FileUriLite.fsPath(_uri));
        const content = contentBuffer.toString();
        const newContent = this.applyContentChanges(content, contentChanges);
        await this._s3fs.writeFile(FileUriLite.fsPath(_uri), newContent);
        const newStat = await this.doGetStat(_uri, 1);
        if (newStat) {
            return newStat;
        }
        // this.fileSystemWatcherServer.kernel_notify(file.uri);
        throw FileSystemError.FileNotFound(file.uri, 'Error occurred while writing file content.');
    }

    protected applyContentChanges(content: string, contentChanges: TextDocumentContentChangeEvent[]): string {
        let document = TextDocument.create('', '', 1, content);
        for (const change of contentChanges) {
            let newContent: string;
            if (TextDocumentContentChangeDelta.is(change)) {
                const start = document.offsetAt(change.range.start);
                const end = document.offsetAt(change.range.end);
                newContent = document.getText().substr(0, start) + change.text + document.getText().substr(end);
            } else {
                newContent = change.text;
            }
            document = TextDocument.create(document.uri, document.languageId, document.version, newContent);
        }
        return document.getText();
    }

    async move(sourceUri: string, targetUri: string, options?: FileMoveOptions): Promise<FileStat> {
        if (this.client) {
            this.client.willMove(sourceUri, targetUri);
        }
        const result = await this.doMove(sourceUri, targetUri, options);
        if (this.client) {
            this.client.didMove(sourceUri, targetUri, false);
        }
        return result;
    }
    protected async doMove(sourceUri: string, targetUri: string, options?: FileMoveOptions): Promise<FileStat> {
        const _sourceUri = new URI(sourceUri);
        const _targetUri = new URI(targetUri);
        const overwrite = this.doGetOverwrite(options);
        const [sourceStat, targetStat] = await Promise.all([this.doGetStat(_sourceUri, 1), this.doGetStat(_targetUri, 1)]);
        if (!sourceStat) {
            throw FileSystemError.FileNotFound(sourceUri);
        }
        if (targetStat && !overwrite) {
            throw FileSystemError.FileExists(targetUri, "Did you set the 'overwrite' flag to true?");
        }
        // Different types. Files <-> Directory.
        if (targetStat && sourceStat.isDirectory !== targetStat.isDirectory) {
            if (targetStat.isDirectory) {
                throw FileSystemError.FileIsDirectory(targetStat.uri, `Cannot move '${sourceStat.uri}' file to an existing location.`);
            }
            throw FileSystemError.FileNotDirectory(targetStat.uri, `Cannot move '${sourceStat.uri}' directory to an existing location.`);
        }
        await this._s3fs.ensureDirExist(FileUriLite.fsPath(_targetUri.parent));
        await this._s3fs.rename(FileUriLite.fsPath(_sourceUri), FileUriLite.fsPath(_targetUri));
        const stats = await this.doGetStat(_targetUri, 1);
        if (stats) {
            return stats;
        }
        throw FileSystemError.FileNotFound(_targetUri, `Error occurred when doing recursive move '${sourceUri}' to '${targetUri}'.`);
    }

    async copy(sourceUri: string, targetUri: string, options?: { overwrite?: boolean, recursive?: boolean }): Promise<FileStat> {
        // throw FileSystemError.FileExists(targetUri, 'Not implemented copy ');
        const _sourceUri = new URI(sourceUri);
        const _targetUri = new URI(targetUri);
        const recursive = this.doGetRecursive(options);
        const overwrite = this.doGetOverwrite(options);
        const [sourceStat, targetStat] = await Promise.all([
            this.doGetStat(_sourceUri, 0),
            this.doGetStat(_targetUri, 0),
        ]);
        if (!sourceStat) {
            throw FileSystemError.FileNotFound(sourceUri);
        }
        if (targetStat && !overwrite) {
            throw FileSystemError.FileExists(targetUri, "Did you set the 'overwrite' flag to true?");
        }
        if (targetStat && targetStat.uri === sourceStat.uri) {
            throw FileSystemError.FileExists(targetUri, 'Cannot perform copy, source and destination are the same.');
        }
        if (targetStat && !targetStat.isDirectory && sourceStat.isDirectory) {
            throw FileSystemError.FileExists(targetUri, 'Cannot perform copy, source is directory and destination is a file.');
        }

        // await this.doCopyFile(_sourceUri, _targetUri, overwrite, recursive);
        if (!recursive && sourceStat.isDirectory) {
            throw FileSystemError.FileExists(targetUri, 'Cannot perform copy directory when recursive is off');
        }
        await this._s3fs.ensureDirExist(FileUriLite.fsPath(_targetUri.parent));
        // await this.doMkdirRecursive(_targetUri.parent);
        // await this.getLock();
        if (sourceStat.isDirectory) {
            await this._s3fs.copyFolder(FileUriLite.fsPath(_sourceUri), FileUriLite.fsPath(_targetUri));
        } else {
            await this._s3fs.copyFile(FileUriLite.fsPath(_sourceUri), FileUriLite.fsPath(_targetUri));
        }

        const newStat = await this.doGetStat(_targetUri, 1);
        if (newStat) {
            return newStat;
        }
        throw FileSystemError.FileNotFound(targetUri, `Error occurred while copying ${sourceUri} to ${targetUri}.`);
    }

    async createFile(uri: string, options?: { content?: string, encoding?: string }): Promise<FileStat> {
        const _uri = new URI(uri);
        const parentUri = _uri.parent;
        const [stat, parentStat] = await Promise.all([this.doGetStat(_uri, 0), this.doGetStat(parentUri, 0)]);
        if (stat) {
            throw FileSystemError.FileExists(uri, 'Error occurred while creating the file.');
        }
        if (!parentStat) {
            await this._s3fs.ensureDirExist(FileUriLite.fsPath(parentUri));
            // await this.doMkdirRecursive(parentUri);
        }
        const content = this.doGetContent(options);
        const encoding = this.doGetEncoding(options);
        if (encoding !== 'utf8') {
            throw FileSystemError.FileExists(uri, 'Unsupported File Encoding. ' + encoding);
        }
        // const encodedNewContent = iconv.encode(content, encoding);
        await this._s3fs.writeFile(FileUriLite.fsPath(_uri), content);
        const newStat = await this.doGetStat(_uri, 1);
        if (newStat) {
            return newStat;
        }
        throw FileSystemError.FileNotFound(uri, 'Error occurred while creating the file.');
    }

    async createFolder(uri: string): Promise<FileStat> {
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (stat) {
            if (stat.isDirectory) {
                return stat;
            }
            throw FileSystemError.FileExists(uri, 'Error occurred while creating the directory: path is a file.');
        }
        await this._s3fs.ensureDirExist(FileUriLite.fsPath(_uri));
        // await this.doMkdirRecursive(_uri);
        const newStat = await this.doGetStat(_uri, 1);
        if (newStat) {
            return newStat;
        }
        throw FileSystemError.FileNotFound(uri, 'Error occurred while creating the directory.');
    }

    public async touchFile(uri: string): Promise<FileStat> {
        throw FileSystemError.FileExists(uri, 'Touchfile not implemented delete');
    }

    public async delete(uri: string, options?: FileDeleteOptions): Promise<void> {
        // throw FileSystemError.FileExists(uri, 'Not implemented delete');
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(uri);
        }
        await this._s3fs.delete(FileUriLite.fsPath(_uri));
    }

    public async getEncoding(uri: string): Promise<string> {
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(uri);
        }
        if (stat.isDirectory) {
            throw FileSystemError.FileIsDirectory(uri, 'Cannot get the encoding.');
        }
        return this.options.encoding;
    }

    public async guessEncoding(uri: string): Promise<string | undefined> {
        console.log('guessEncoding is dummy: ' + uri);
        return 'utf8';
    }

    public async getRoots(): Promise<FileStat[]> {
        const cwdRoot = '/';
        const rootUri = FileUriLite.create(cwdRoot);
        const root = await this.doGetStat(rootUri, 1);
        if (root) {
            return [root];
        }
        return [];
    }

    public async getCurrentUserHome(): Promise<FileStat | undefined> {
        return this.getFileStat(FileUriLite.create('/').toString());
    }

    public getDrives(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => { resolve(['/']); });
    }

    dispose(): void {
        // NOOP
    }

    public async access(uri: string, mode: number = FileAccess.Constants.F_OK): Promise<boolean> {
        // Same as exists
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            return false;
        }
        return true;
    }

    public async getFsPath(uri: string): Promise<string | undefined> {
        if (!uri.startsWith('file:/')) {
            return undefined;
        } else {
            return FileUriLite.fsPath(uri);
        }
    }


    protected async doGetStat(uri: URI, depth: number): Promise<FileStat | undefined> {
        const s3obj = await this._s3fs.stat(FileUriLite.fsPath(uri));
        if (s3obj) {
            if (s3obj.isDir) {
                return this.doCreateDirectoryStat(uri, s3obj, depth);
            } else {
                return this.doCreateFileStat(uri, s3obj);
            }
        } else {
            return undefined;
        }
    }

    protected doCreateFileStat(uri: URI, stat: S3Object): FileStat {
        return {
            uri: uri.toString(),
            lastModification: stat.modifiedTime.getTime(),
            isDirectory: stat.isDir,
            size: stat.size
        };
    }

    protected async doCreateDirectoryStat(uri: URI, stat: S3Object, depth: number): Promise<FileStat> {
        const children = depth > 0 ? await this.doGetChildren(uri, depth) : [];
        return {
            uri: uri.toString(),
            lastModification: stat.modifiedTime.getTime(),
            isDirectory: true,
            children
        };
    }

    protected async doGetChildren(uri: URI, depth: number): Promise<FileStat[]> {
        const files = await this._s3fs.readdir(FileUriLite.fsPath(uri));
        // console.log('readdir ' + FileUriLite.fsPath(uri) + ' ' + files.length);
        const children: FileStat[] = [];
        files.forEach(v => {
            // console.log(v.uri);
            const _uri = new URI(v.uri);
            // console.log(v.uri);
            // console.log(v.isDir);
            children.push(this.doCreateFileStat(_uri, v));
        });
        return children;
    }

    protected doGetEncoding(option?: { encoding?: string }): string {
        return option && typeof (option.encoding) !== 'undefined'
            ? option.encoding
            : this.options.encoding;
    }

    protected doGetOverwrite(option?: { overwrite?: boolean }): boolean {
        return option && typeof (option.overwrite) !== 'undefined'
            ? option.overwrite
            : this.options.overwrite;
    }

    protected doGetRecursive(option?: { recursive?: boolean }): boolean {
        return option && typeof (option.recursive) !== 'undefined'
            ? option.recursive
            : this.options.recursive;
    }

    protected doGetContent(option?: { content?: string }): string {
        return (option && option.content) || '';
    }

}


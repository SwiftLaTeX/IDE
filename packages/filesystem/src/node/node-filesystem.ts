/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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

import * as mv from 'mv';
import * as trash from 'trash';
import * as paths from 'path';
import * as fs from 'fs-extra';
import { v4 } from 'uuid';
import * as os from 'os';
import * as touch from 'touch';
import * as drivelist from 'drivelist';
import { injectable, inject, optional } from 'inversify';
import { TextDocument } from 'vscode-languageserver-types';
import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import URI from '@theia/core/lib/common/uri';
import { TextDocumentContentChangeDelta } from '@theia/core/lib/common/lsp-types';
import { FileUri } from '@theia/core/lib/node/file-uri';
import { FileStat, FileSystem, FileSystemClient, FileSystemError, FileMoveOptions, FileDeleteOptions, FileAccess } from '../common/filesystem';
import * as iconv from 'iconv-lite';
import { EncodingUtil } from './encoding-util';

@injectable()
export class FileSystemNodeOptions {

    encoding: string;
    recursive: boolean;
    overwrite: boolean;
    moveToTrash: boolean;

    public static DEFAULT: FileSystemNodeOptions = {
        encoding: 'utf8',
        overwrite: false,
        recursive: true,
        moveToTrash: true
    };

}

@injectable()
export class FileSystemNode implements FileSystem {

    private seq: number;
    constructor(
        @inject(FileSystemNodeOptions) @optional() protected readonly options: FileSystemNodeOptions = FileSystemNodeOptions.DEFAULT
    ) {
        this.seq = 0;
    }

    protected client: FileSystemClient | undefined;
    setClient(client: FileSystemClient | undefined): void {
        this.client = client;
    }

    async getFileStat(uri: string): Promise<FileStat | undefined> {
        // console.log('GetFileStat ' + uri);
        const uri_ = new URI(uri);
        const stat = await this.doGetStat(uri_, 1);
        return stat;
    }

    async exists(uri: string): Promise<boolean> {
        console.log('Exists ' + uri);
        return fs.pathExists(FileUri.fsPath(new URI(uri)));
    }

    async resolveContent(uri: string, options?: { encoding?: string }): Promise<{ stat: FileStat, content: string }> {
        const myseq = this.seq++;
        console.log('resolveContent ' + uri + ' ' + myseq);
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(uri);
        }
        if (stat.isDirectory) {
            throw FileSystemError.FileIsDirectory(uri, 'Cannot resolve the content.');
        }
        const encoding = await this.doGetEncoding(options);
        const contentBuffer = await fs.readFile(FileUri.fsPath(_uri));
        const content = iconv.decode(contentBuffer, encoding);
        console.log('resolveContent Done' + uri + ' ' + myseq);
        return { stat, content };
    }

    async setContent(file: FileStat, content: string, options?: { encoding?: string }): Promise<FileStat> {
        const myseq = this.seq++;
        console.log('setContent ' + file.uri + ' ' + myseq);
        const _uri = new URI(file.uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(file.uri);
        }
        if (stat.isDirectory) {
            throw FileSystemError.FileIsDirectory(file.uri, 'Cannot set the content.');
        }
        if (!(await this.isInSync(file, stat))) {
            throw this.createOutOfSyncError(file, stat);
        }
        const encoding = await this.doGetEncoding(options);
        const encodedContent = iconv.encode(content, encoding);
        await fs.writeFile(FileUri.fsPath(_uri), encodedContent);
        const newStat = await this.doGetStat(_uri, 1);
        console.log('setContent Done' + file.uri + ' ' + myseq);
        if (newStat) {
            return newStat;
        }
        throw FileSystemError.FileNotFound(file.uri, 'Error occurred while writing file content.');
    }

    async updateContent(file: FileStat, contentChanges: TextDocumentContentChangeEvent[], options?: { encoding?: string, overwriteEncoding?: string }): Promise<FileStat> {
        const myseq = this.seq++;
        console.log('updateContent ' + file.uri + ' ' + myseq);
        const _uri = new URI(file.uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(file.uri);
        }
        if (stat.isDirectory) {
            throw FileSystemError.FileIsDirectory(file.uri, 'Cannot set the content.');
        }
        if (!this.checkInSync(file, stat)) {
            throw this.createOutOfSyncError(file, stat);
        }
        if (contentChanges.length === 0 && !(options && options.overwriteEncoding)) {
            return stat;
        }
        const encoding = await this.doGetEncoding(options);
        const contentBuffer = await fs.readFile(FileUri.fsPath(_uri));
        const content = iconv.decode(contentBuffer, encoding);
        const newContent = this.applyContentChanges(content, contentChanges);
        const writeEncoding = options && options.overwriteEncoding ? options.overwriteEncoding : encoding;
        const encodedNewContent = iconv.encode(newContent, writeEncoding);
        await fs.writeFile(FileUri.fsPath(_uri), encodedNewContent);
        const newStat = await this.doGetStat(_uri, 1);
        console.log('updateContentDone ' + file.uri + ' ' + myseq);
        if (newStat) {
            return newStat;
        }
        throw FileSystemError.FileNotFound(file.uri, 'Error occurred while writing file content.');
    }

    protected applyContentChanges(content: string, contentChanges: TextDocumentContentChangeEvent[]): string {
        console.log('applyContentChanges ');
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

    protected async isInSync(file: FileStat, stat: FileStat): Promise<boolean> {
        if (this.checkInSync(file, stat)) {
            return true;
        }
        return this.client ? this.client.shouldOverwrite(file, stat) : false;
    }

    protected checkInSync(file: FileStat, stat: FileStat): boolean {
        return stat.lastModification === file.lastModification && stat.size === file.size;
    }

    protected createOutOfSyncError(file: FileStat, stat: FileStat): Error {
        return FileSystemError.FileIsOutOfSync(file, stat);
    }

    async move(sourceUri: string, targetUri: string, options?: FileMoveOptions): Promise<FileStat> {
        console.log('move ' + sourceUri);
        if (this.client) {
            await this.client.willMove(sourceUri, targetUri);
        }
        let result: FileStat;
        let failed = false;
        try {
            result = await this.doMove(sourceUri, targetUri, options);
        } catch (e) {
            failed = true;
            throw e;
        } finally {
            if (this.client) {
                await this.client.didMove(sourceUri, targetUri, failed);
            }
        }
        return result;
    }
    protected async doMove(sourceUri: string, targetUri: string, options?: FileMoveOptions): Promise<FileStat> {
        const _sourceUri = new URI(sourceUri);
        const _targetUri = new URI(targetUri);
        const [sourceStat, targetStat, overwrite] = await Promise.all([this.doGetStat(_sourceUri, 1), this.doGetStat(_targetUri, 1), this.doGetOverwrite(options)]);
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
        const [sourceMightHaveChildren, targetMightHaveChildren] = await Promise.all([this.mayHaveChildren(_sourceUri), this.mayHaveChildren(_targetUri)]);
        // Handling special Windows case when source and target resources are empty folders.
        // Source should be deleted and target should be touched.
        if (overwrite && targetStat && targetStat.isDirectory && sourceStat.isDirectory && !sourceMightHaveChildren && !targetMightHaveChildren) {
            // The value should be a Unix timestamp in seconds.
            // For example, `Date.now()` returns milliseconds, so it should be divided by `1000` before passing it in.
            const now = Date.now() / 1000;
            await fs.utimes(FileUri.fsPath(_targetUri), now, now);
            await fs.rmdir(FileUri.fsPath(_sourceUri));
            const newStat = await this.doGetStat(_targetUri, 1);
            if (newStat) {
                return newStat;
            }
            throw FileSystemError.FileNotFound(targetUri, `Error occurred when moving resource from '${sourceUri}' to '${targetUri}'.`);
        } else if (overwrite && targetStat && targetStat.isDirectory && sourceStat.isDirectory && !targetMightHaveChildren && sourceMightHaveChildren) {
            // Copy source to target, since target is empty. Then wipe the source content.
            const newStat = await this.copy(sourceUri, targetUri, { overwrite });
            await this.delete(sourceUri);
            return newStat;
        } else {
            return new Promise<FileStat>((resolve, reject) => {
                mv(FileUri.fsPath(_sourceUri), FileUri.fsPath(_targetUri), { mkdirp: true, clobber: overwrite }, async error => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(await this.doGetStat(_targetUri, 1));
                });
            });
        }
    }

    async copy(sourceUri: string, targetUri: string, options?: { overwrite?: boolean, recursive?: boolean }): Promise<FileStat> {
        console.log('copy ' + sourceUri);
        const _sourceUri = new URI(sourceUri);
        const _targetUri = new URI(targetUri);
        const [sourceStat, targetStat, overwrite, recursive] = await Promise.all([
            this.doGetStat(_sourceUri, 0),
            this.doGetStat(_targetUri, 0),
            this.doGetOverwrite(options),
            this.doGetRecursive(options)
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
        await fs.copy(FileUri.fsPath(_sourceUri), FileUri.fsPath(_targetUri), { overwrite, recursive });
        const newStat = await this.doGetStat(_targetUri, 1);
        if (newStat) {
            return newStat;
        }
        throw FileSystemError.FileNotFound(targetUri, `Error occurred while copying ${sourceUri} to ${targetUri}.`);
    }

    async createFile(uri: string, options?: { content?: string, encoding?: string }): Promise<FileStat> {
        console.log('createFile ' + uri);
        const _uri = new URI(uri);
        const parentUri = _uri.parent;
        const [stat, parentStat] = await Promise.all([this.doGetStat(_uri, 0), this.doGetStat(parentUri, 0)]);
        if (stat) {
            throw FileSystemError.FileExists(uri, 'Error occurred while creating the file.');
        }
        if (!parentStat) {
            await fs.mkdirs(FileUri.fsPath(parentUri));
        }
        const content = await this.doGetContent(options);
        const encoding = await this.doGetEncoding(options);
        const encodedNewContent = iconv.encode(content, encoding);
        await fs.writeFile(FileUri.fsPath(_uri), encodedNewContent);
        const newStat = await this.doGetStat(_uri, 1);
        if (newStat) {
            return newStat;
        }
        throw FileSystemError.FileNotFound(uri, 'Error occurred while creating the file.');
    }

    async createFolder(uri: string): Promise<FileStat> {
        console.log('createFolder ' + uri);
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (stat) {
            if (stat.isDirectory) {
                return stat;
            }
            throw FileSystemError.FileExists(uri, 'Error occurred while creating the directory: path is a file.');
        }
        await fs.mkdirs(FileUri.fsPath(_uri));
        const newStat = await this.doGetStat(_uri, 1);
        if (newStat) {
            return newStat;
        }
        throw FileSystemError.FileNotFound(uri, 'Error occurred while creating the directory.');
    }

    async touchFile(uri: string): Promise<FileStat> {
        console.log('touchFile ' + uri);
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            return this.createFile(uri);
        } else {
            return new Promise<FileStat>((resolve, reject) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                touch(FileUri.fsPath(_uri), async (error: any) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(await this.doGetStat(_uri, 1));
                });
            });
        }
    }

    async delete(uri: string, options?: FileDeleteOptions): Promise<void> {
        if (this.client) {
            await this.client.willDelete(uri);
        }
        let failed = false;
        try {
            await this.doDelete(uri, options);
        } catch (e) {
            failed = true;
            throw e;
        } finally {
            if (this.client) {
                await this.client.didDelete(uri, failed);
            }
        }
    }

    protected async doDelete(uri: string, options?: FileDeleteOptions): Promise<void> {
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(uri);
        }
        // Windows 10.
        // Deleting an empty directory throws `EPERM error` instead of `unlinkDir`.
        // https://github.com/paulmillr/chokidar/issues/566
        const moveToTrash = await this.doGetMoveToTrash(options);
        if (moveToTrash) {
            return trash([FileUri.fsPath(_uri)]);
        } else {
            const filePath = FileUri.fsPath(_uri);
            const outputRootPath = paths.join(os.tmpdir(), v4());
            try {
                await new Promise((resolve, reject) => mv(filePath, outputRootPath, { mkdirp: true, clobber: true }, async error => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(undefined);
                }));
                // There is no reason for the promise returned by this function not to resolve
                // as soon as the move is complete.  Clearing up the temporary files can be
                // done in the background.
                fs.remove(outputRootPath);
            } catch (error) {
                return fs.remove(filePath);
            }
        }
    }

    async getEncoding(uri: string): Promise<string> {
        console.log('getEncoding ' + uri);
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

    async guessEncoding(uri: string): Promise<string | undefined> {
        console.log('guessEncoding ' + uri);
        const _uri = new URI(uri);
        const stat = await this.doGetStat(_uri, 0);
        if (!stat) {
            throw FileSystemError.FileNotFound(uri);
        }
        if (stat.isDirectory) {
            throw FileSystemError.FileIsDirectory(uri, 'Cannot guess the encoding.');
        }
        return EncodingUtil.guessEncodingByBuffer(await fs.readFile(FileUri.fsPath(_uri)));
    }

    async getRoots(): Promise<FileStat[]> {
        console.log('getRoots ');
        const cwdRoot = paths.parse(process.cwd()).root;
        const rootUri = FileUri.create(cwdRoot);
        const root = await this.doGetStat(rootUri, 1);
        if (root) {
            return [root];
        }
        return [];
    }

    async getCurrentUserHome(): Promise<FileStat | undefined> {
        console.log('getCurrentUserHome ');
        return this.getFileStat(FileUri.create(os.homedir()).toString());
    }

    getDrives(): Promise<string[]> {
        console.log('getDrives ');
        return new Promise<string[]>((resolve, reject) => {
            drivelist.list((error: Error, drives: { readonly mountpoints: { readonly path: string; }[] }[]) => {
                if (error) {
                    reject(error);
                    return;
                }

                const uris = drives
                    .map(drive => drive.mountpoints)
                    .reduce((prev, curr) => prev.concat(curr), [])
                    .map(mountpoint => mountpoint.path)
                    .filter(this.filterMountpointPath.bind(this))
                    .map(path => FileUri.create(path))
                    .map(uri => uri.toString());

                resolve(uris);
            });
        });
    }

    /**
     * Filters hidden and system partitions.
     */
    protected filterMountpointPath(path: string): boolean {
        // OS X: This is your sleep-image. When your Mac goes to sleep it writes the contents of its memory to the hard disk. (https://bit.ly/2R6cztl)
        if (path === '/private/var/vm') {
            return false;
        }
        // Ubuntu: This system partition is simply the boot partition created when the computers mother board runs UEFI rather than BIOS. (https://bit.ly/2N5duHr)
        if (path === '/boot/efi') {
            return false;
        }
        return true;
    }

    dispose(): void {
        // NOOP
    }

    async access(uri: string, mode: number = FileAccess.Constants.F_OK): Promise<boolean> {
        console.log('access ' + uri);
        try {
            await fs.access(FileUri.fsPath(uri), mode);
            return true;
        } catch {
            return false;
        }
    }

    async getFsPath(uri: string): Promise<string | undefined> {
        console.log('getFspath ' + uri);
        if (!uri.startsWith('file:/')) {
            return undefined;
        } else {
            return FileUri.fsPath(uri);
        }
    }

    protected async doGetStat(uri: URI, depth: number): Promise<FileStat | undefined> {
        // console.log('doGetStat ' + FileUri.fsPath(uri));
        try {
            const stats = await fs.stat(FileUri.fsPath(uri));
            if (stats.isDirectory()) {
                return this.doCreateDirectoryStat(uri, stats, depth);
            }
            return this.doCreateFileStat(uri, stats);
        } catch (error) {
            if (isErrnoException(error)) {
                if (error.code === 'ENOENT' || error.code === 'EACCES' || error.code === 'EBUSY' || error.code === 'EPERM') {
                    return undefined;
                }
            }
            throw error;
        }
    }

    protected async doCreateFileStat(uri: URI, stat: fs.Stats): Promise<FileStat> {
        return {
            uri: uri.toString(),
            lastModification: stat.mtime.getTime(),
            isDirectory: false,
            size: stat.size
        };
    }

    protected async doCreateDirectoryStat(uri: URI, stat: fs.Stats, depth: number): Promise<FileStat> {
        const children = depth > 0 ? await this.doGetChildren(uri, depth) : [];
        return {
            uri: uri.toString(),
            lastModification: stat.mtime.getTime(),
            isDirectory: true,
            children
        };
    }

    protected async doGetChildren(uri: URI, depth: number): Promise<FileStat[]> {
        const files = await fs.readdir(FileUri.fsPath(uri));
        const children = await Promise.all(files.map(fileName => uri.resolve(fileName)).map(childUri => this.doGetStat(childUri, depth - 1)));
        return children.filter(notEmpty);
    }

    /**
     * Return `true` if it's possible for this URI to have children.
     * It might not be possible to be certain because of permission problems or other filesystem errors.
     */
    protected async mayHaveChildren(uri: URI): Promise<boolean> {
        /* If there's a problem reading the root directory. Assume it's not empty to avoid overwriting anything.  */
        try {
            const rootStat = await this.doGetStat(uri, 0);
            if (rootStat === undefined) {
                return true;
            }
            /* Not a directory.  */
            if (rootStat !== undefined && rootStat.isDirectory === false) {
                return false;
            }
        } catch {
            return true;
        }

        /* If there's a problem with it's children then the directory must not be empty.  */
        try {
            const stat = await this.doGetStat(uri, 1);
            if (stat !== undefined && stat.children !== undefined) {
                return stat.children.length > 0;
            } else {
                return true;
            }
        } catch {
            return true;
        }
    }

    protected async doGetEncoding(option?: { encoding?: string }): Promise<string> {
        return option && typeof (option.encoding) !== 'undefined'
            ? option.encoding
            : this.options.encoding;
    }

    protected async doGetOverwrite(option?: { overwrite?: boolean }): Promise<boolean> {
        return option && typeof (option.overwrite) !== 'undefined'
            ? option.overwrite
            : this.options.overwrite;
    }

    protected async doGetRecursive(option?: { recursive?: boolean }): Promise<boolean> {
        return option && typeof (option.recursive) !== 'undefined'
            ? option.recursive
            : this.options.recursive;
    }

    protected async doGetMoveToTrash(option?: { moveToTrash?: boolean }): Promise<boolean> {
        return option && typeof (option.moveToTrash) !== 'undefined'
            ? option.moveToTrash
            : this.options.moveToTrash;
    }

    protected async doGetContent(option?: { content?: string }): Promise<string> {
        return (option && option.content) || '';
    }

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isErrnoException(error: any | NodeJS.ErrnoException): error is NodeJS.ErrnoException {
    return (<NodeJS.ErrnoException>error).code !== undefined && (<NodeJS.ErrnoException>error).errno !== undefined;
}

function notEmpty<T>(value: T | undefined): value is T {
    return value !== undefined;
}

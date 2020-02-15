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
/// <reference types="node" />
import * as fs from 'fs-extra';
import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import URI from '@theia/core/lib/common/uri';
import { FileStat, FileSystem, FileSystemClient, FileMoveOptions, FileDeleteOptions } from '../common/filesystem';
export declare class FileSystemNodeOptions {
    encoding: string;
    recursive: boolean;
    overwrite: boolean;
    moveToTrash: boolean;
    static DEFAULT: FileSystemNodeOptions;
}
export declare class FileSystemNode implements FileSystem {
    protected readonly options: FileSystemNodeOptions;
    private seq;
    constructor(options?: FileSystemNodeOptions);
    protected client: FileSystemClient | undefined;
    setClient(client: FileSystemClient | undefined): void;
    getFileStat(uri: string): Promise<FileStat | undefined>;
    exists(uri: string): Promise<boolean>;
    resolveContent(uri: string, options?: {
        encoding?: string;
    }): Promise<{
        stat: FileStat;
        content: string;
    }>;
    setContent(file: FileStat, content: string, options?: {
        encoding?: string;
    }): Promise<FileStat>;
    updateContent(file: FileStat, contentChanges: TextDocumentContentChangeEvent[], options?: {
        encoding?: string;
        overwriteEncoding?: string;
    }): Promise<FileStat>;
    protected applyContentChanges(content: string, contentChanges: TextDocumentContentChangeEvent[]): string;
    protected isInSync(file: FileStat, stat: FileStat): Promise<boolean>;
    protected checkInSync(file: FileStat, stat: FileStat): boolean;
    protected createOutOfSyncError(file: FileStat, stat: FileStat): Error;
    move(sourceUri: string, targetUri: string, options?: FileMoveOptions): Promise<FileStat>;
    protected doMove(sourceUri: string, targetUri: string, options?: FileMoveOptions): Promise<FileStat>;
    copy(sourceUri: string, targetUri: string, options?: {
        overwrite?: boolean;
        recursive?: boolean;
    }): Promise<FileStat>;
    createFile(uri: string, options?: {
        content?: string;
        encoding?: string;
    }): Promise<FileStat>;
    createFolder(uri: string): Promise<FileStat>;
    touchFile(uri: string): Promise<FileStat>;
    delete(uri: string, options?: FileDeleteOptions): Promise<void>;
    getEncoding(uri: string): Promise<string>;
    guessEncoding(uri: string): Promise<string | undefined>;
    getRoots(): Promise<FileStat[]>;
    getCurrentUserHome(): Promise<FileStat | undefined>;
    getDrives(): Promise<string[]>;
    /**
     * Filters hidden and system partitions.
     */
    protected filterMountpointPath(path: string): boolean;
    dispose(): void;
    access(uri: string, mode?: number): Promise<boolean>;
    getFsPath(uri: string): Promise<string | undefined>;
    protected doGetStat(uri: URI, depth: number): Promise<FileStat | undefined>;
    protected doCreateFileStat(uri: URI, stat: fs.Stats): Promise<FileStat>;
    protected doCreateDirectoryStat(uri: URI, stat: fs.Stats, depth: number): Promise<FileStat>;
    protected doGetChildren(uri: URI, depth: number): Promise<FileStat[]>;
    /**
     * Return `true` if it's possible for this URI to have children.
     * It might not be possible to be certain because of permission problems or other filesystem errors.
     */
    protected mayHaveChildren(uri: URI): Promise<boolean>;
    protected doGetEncoding(option?: {
        encoding?: string;
    }): Promise<string>;
    protected doGetOverwrite(option?: {
        overwrite?: boolean;
    }): Promise<boolean>;
    protected doGetRecursive(option?: {
        recursive?: boolean;
    }): Promise<boolean>;
    protected doGetMoveToTrash(option?: {
        moveToTrash?: boolean;
    }): Promise<boolean>;
    protected doGetContent(option?: {
        content?: string;
    }): Promise<string>;
}
//# sourceMappingURL=node-filesystem.d.ts.map
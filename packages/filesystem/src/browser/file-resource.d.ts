/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import { Resource, ResourceResolver, Emitter, Event, DisposableCollection } from '@theia/core';
import URI from '@theia/core/lib/common/uri';
import { FileSystem, FileStat } from '../common/filesystem';
import { FileSystemWatcher } from './filesystem-watcher';
export declare class FileResource implements Resource {
    readonly uri: URI;
    protected readonly fileSystem: FileSystem;
    protected readonly fileSystemWatcher: FileSystemWatcher;
    protected readonly toDispose: DisposableCollection;
    protected readonly onDidChangeContentsEmitter: Emitter<void>;
    readonly onDidChangeContents: Event<void>;
    protected stat: FileStat | undefined;
    protected uriString: string;
    constructor(uri: URI, fileSystem: FileSystem, fileSystemWatcher: FileSystemWatcher);
    init(): Promise<void>;
    dispose(): void;
    readContents(options?: {
        encoding?: string;
    }): Promise<string>;
    saveContents(content: string, options?: {
        encoding?: string;
        overwriteEncoding?: string;
    }): Promise<void>;
    protected doSaveContents(content: string, options?: {
        encoding?: string;
    }): Promise<FileStat>;
    saveContentChanges(changes: TextDocumentContentChangeEvent[], options?: {
        encoding?: string;
        overwriteEncoding?: string;
    }): Promise<void>;
    guessEncoding(): Promise<string | undefined>;
    protected sync(): Promise<void>;
    protected isInSync(current: FileStat | undefined): Promise<boolean>;
    protected getFileStat(): Promise<FileStat | undefined>;
}
export declare class FileResourceResolver implements ResourceResolver {
    protected readonly fileSystem: FileSystem;
    protected readonly fileSystemWatcher: FileSystemWatcher;
    resolve(uri: URI): Promise<FileResource>;
}
//# sourceMappingURL=file-resource.d.ts.map
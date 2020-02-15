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
import { Disposable, DisposableCollection, Emitter, Event } from '@theia/core/lib/common';
import URI from '@theia/core/lib/common/uri';
import { FileSystem, FileShouldOverwrite } from '../common/filesystem';
import { DidFilesChangedParams, FileChangeType, FileSystemWatcherServer, WatchOptions } from '../common/filesystem-watcher-protocol';
import { FileSystemPreferences } from './filesystem-preferences';
export { FileChangeType };
export interface FileChange {
    uri: URI;
    type: FileChangeType;
}
export declare namespace FileChange {
    function isUpdated(change: FileChange, uri: URI): boolean;
    function isAdded(change: FileChange, uri: URI): boolean;
    function isDeleted(change: FileChange, uri: URI): boolean;
    function isAffected(change: FileChange, uri: URI): boolean;
    function isChanged(change: FileChange, uri: URI): boolean;
}
export declare type FileChangeEvent = FileChange[];
export declare namespace FileChangeEvent {
    function isUpdated(event: FileChangeEvent, uri: URI): boolean;
    function isAdded(event: FileChangeEvent, uri: URI): boolean;
    function isDeleted(event: FileChangeEvent, uri: URI): boolean;
    function isAffected(event: FileChangeEvent, uri: URI): boolean;
    function isChanged(event: FileChangeEvent, uri: URI): boolean;
}
export interface FileMoveEvent {
    sourceUri: URI;
    targetUri: URI;
}
export declare namespace FileMoveEvent {
    function isRename({ sourceUri, targetUri }: FileMoveEvent): boolean;
}
export interface FileWillMoveEvent {
    sourceUri: URI;
    targetUri: URI;
}
export declare class FileSystemWatcher implements Disposable {
    protected readonly toDispose: DisposableCollection;
    protected readonly toRestartAll: DisposableCollection;
    protected readonly onFileChangedEmitter: Emitter<FileChangeEvent>;
    readonly onFilesChanged: Event<FileChangeEvent>;
    protected readonly onDidMoveEmitter: Emitter<FileMoveEvent>;
    readonly onDidMove: Event<FileMoveEvent>;
    protected readonly onWillMoveEmitter: Emitter<FileWillMoveEvent>;
    readonly onWillMove: Event<FileWillMoveEvent>;
    protected readonly server: FileSystemWatcherServer;
    protected readonly preferences: FileSystemPreferences;
    protected readonly filesystem: FileSystem;
    protected readonly shouldOverwrite: FileShouldOverwrite;
    protected init(): void;
    /**
     * Stop watching.
     */
    dispose(): void;
    protected onDidFilesChanged(event: DidFilesChangedParams): void;
    /**
     * Start file watching under the given uri.
     *
     * Resolve when watching is started.
     * Return a disposable to stop file watching under the given uri.
     */
    watchFileChanges(uri: URI): Promise<Disposable>;
    protected createWatchOptions(uri: string): Promise<WatchOptions>;
    protected getIgnored(uri: string): Promise<string[]>;
    protected fireDidMove(sourceUri: string, targetUri: string): void;
    protected fireWillMove(sourceUri: string, targetUri: string): void;
}
//# sourceMappingURL=filesystem-watcher.d.ts.map
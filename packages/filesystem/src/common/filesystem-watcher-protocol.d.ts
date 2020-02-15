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
import { JsonRpcServer, JsonRpcProxy } from '@theia/core';
export declare const fileSystemWatcherPath = "/services/fs-watcher";
export declare const FileSystemWatcherServer: unique symbol;
export interface FileSystemWatcherServer extends JsonRpcServer<FileSystemWatcherClient> {
    /**
     * Start file watching for the given param.
     * Resolve when watching is started.
     * Return a watcher id.
     */
    watchFileChanges(uri: string, options?: WatchOptions): Promise<number>;
    /**
     * Stop file watching for the given id.
     * Resolve when watching is stopped.
     */
    unwatchFileChanges(watcher: number): Promise<void>;
}
export interface FileSystemWatcherClient {
    /**
     * Notify when files under watched uris are changed.
     */
    onDidFilesChanged(event: DidFilesChangedParams): void;
}
export interface WatchOptions {
    ignored: string[];
}
export interface DidFilesChangedParams {
    changes: FileChange[];
}
export interface FileChange {
    uri: string;
    type: FileChangeType;
}
export declare enum FileChangeType {
    UPDATED = 0,
    ADDED = 1,
    DELETED = 2
}
export declare const FileSystemWatcherServerProxy: unique symbol;
export declare type FileSystemWatcherServerProxy = JsonRpcProxy<FileSystemWatcherServer>;
export declare class ReconnectingFileSystemWatcherServer implements FileSystemWatcherServer {
    protected readonly proxy: FileSystemWatcherServerProxy;
    protected watcherSequence: number;
    protected readonly watchParams: Map<number, {
        uri: string;
        options?: WatchOptions | undefined;
    }>;
    protected readonly localToRemoteWatcher: Map<number, number>;
    constructor(proxy: FileSystemWatcherServerProxy);
    protected reconnect(): void;
    dispose(): void;
    watchFileChanges(uri: string, options?: WatchOptions): Promise<number>;
    protected doWatchFileChanges(watcher: number, uri: string, options?: WatchOptions): Promise<number>;
    unwatchFileChanges(watcher: number): Promise<void>;
    setClient(client: FileSystemWatcherClient | undefined): void;
}
//# sourceMappingURL=filesystem-watcher-protocol.d.ts.map
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
import { JsonRpcProxyFactory, ILogger, DisposableCollection, Disposable } from '@theia/core';
import { IPCConnectionProvider } from '@theia/core/lib/node/messaging';
import { FileSystemWatcherServer, WatchOptions, FileSystemWatcherClient, ReconnectingFileSystemWatcherServer } from '../common/filesystem-watcher-protocol';
export declare const NSFW_WATCHER = "nsfw-watcher";
export declare class FileSystemWatcherServerClient implements FileSystemWatcherServer {
    protected readonly logger: ILogger;
    protected readonly ipcConnectionProvider: IPCConnectionProvider;
    protected readonly proxyFactory: JsonRpcProxyFactory<FileSystemWatcherServer>;
    protected readonly remote: ReconnectingFileSystemWatcherServer;
    protected readonly toDispose: DisposableCollection;
    constructor(logger: ILogger, ipcConnectionProvider: IPCConnectionProvider);
    dispose(): void;
    watchFileChanges(uri: string, options?: WatchOptions): Promise<number>;
    unwatchFileChanges(watcher: number): Promise<void>;
    protected client: FileSystemWatcherClient | undefined;
    setClient(client: FileSystemWatcherClient | undefined): void;
    protected listen(): Disposable;
}
//# sourceMappingURL=filesystem-watcher-client.d.ts.map
/********************************************************************************
 * Copyright (C) 2017-2018 TypeFox and others.
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
import { IMinimatch } from 'minimatch';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { FileChangeType, FileSystemWatcherClient, FileSystemWatcherServer, WatchOptions } from '../../common/filesystem-watcher-protocol';
import { FileChangeCollection } from '../file-change-collection';
export interface WatcherOptions {
    ignored: IMinimatch[];
}
export declare class NsfwFileSystemWatcherServer implements FileSystemWatcherServer {
    protected client: FileSystemWatcherClient | undefined;
    protected watcherSequence: number;
    protected readonly watchers: Map<number, Disposable>;
    protected readonly watcherOptions: Map<number, WatcherOptions>;
    protected readonly toDispose: DisposableCollection;
    protected changes: FileChangeCollection;
    protected readonly options: {
        verbose: boolean;
        info: (message: string, ...args: any[]) => void;
        error: (message: string, ...args: any[]) => void;
    };
    constructor(options?: {
        verbose?: boolean;
        info?: (message: string, ...args: any[]) => void;
        error?: (message: string, ...args: any[]) => void;
    });
    dispose(): void;
    watchFileChanges(uri: string, options?: WatchOptions): Promise<number>;
    protected start(watcherId: number, basePath: string, rawOptions: WatchOptions | undefined, toDisposeWatcher: DisposableCollection): Promise<void>;
    unwatchFileChanges(watcherId: number): Promise<void>;
    setClient(client: FileSystemWatcherClient | undefined): void;
    protected pushAdded(watcherId: number, path: string): void;
    protected pushUpdated(watcherId: number, path: string): void;
    protected pushDeleted(watcherId: number, path: string): void;
    protected pushFileChange(watcherId: number, path: string, type: FileChangeType): void;
    protected resolvePath(directory: string, file: string): string;
    /**
     * Fires file changes to clients.
     * It is debounced in the case if the filesystem is spamming to avoid overwhelming clients with events.
     */
    protected readonly fireDidFilesChanged: () => void;
    protected doFireDidFilesChanged(): void;
    protected isIgnored(watcherId: number, path: string): boolean;
    protected debug(message: string, ...params: any[]): void;
}
//# sourceMappingURL=nsfw-filesystem-watcher.d.ts.map
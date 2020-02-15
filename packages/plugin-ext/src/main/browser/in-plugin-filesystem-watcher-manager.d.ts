/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { FileChangeEvent, FileMoveEvent, FileWillMoveEvent } from '@theia/filesystem/lib/browser/filesystem-watcher';
import { WorkspaceExt } from '../../common/plugin-api-rpc';
import { FileWatcherSubscriberOptions } from '../../common/plugin-api-rpc-model';
/**
 * Actual implementation of file watching system of the plugin API.
 * Holds subscriptions (with its settings) from within plugins
 * and process all file system events in all workspace roots whether they matches to any subscription.
 * Only if event matches it will be sent into plugin side to specific subscriber.
 */
export declare class InPluginFileSystemWatcherManager {
    private readonly subscribers;
    private nextSubscriberId;
    private readonly fileSystemWatcher;
    protected init(): void;
    protected onFilesChangedEventHandler(changes: FileChangeEvent): void;
    protected onDidMoveEventHandler(change: FileMoveEvent): void;
    protected onWillMoveEventHandler(change: FileWillMoveEvent): void;
    private uriMatches;
    /**
     * Registers new file system events subscriber.
     *
     * @param options subscription options
     * @returns generated subscriber id
     */
    registerFileWatchSubscription(options: FileWatcherSubscriberOptions, proxy: WorkspaceExt): string;
    unregisterFileWatchSubscription(subscriptionId: string): void;
    private getNextId;
}
//# sourceMappingURL=in-plugin-filesystem-watcher-manager.d.ts.map
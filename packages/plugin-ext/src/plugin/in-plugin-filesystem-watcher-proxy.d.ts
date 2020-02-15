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
import * as theia from '@theia/plugin';
import { WorkspaceMain } from '../common/plugin-api-rpc';
import { FileChangeEventType } from '../common/plugin-api-rpc-model';
import URI from 'vscode-uri';
/**
 * This class is responsible for file watchers subscription registering and file system events proxying.
 * It contains no logic, only communicates with main side to add / remove subscription and
 * delivers file system events to corresponding subscribers.
 */
export declare class InPluginFileSystemWatcherProxy {
    private proxy;
    private subscribers;
    constructor(proxy: WorkspaceMain);
    createFileSystemWatcher(globPattern: theia.GlobPattern, ignoreCreateEvents?: boolean, ignoreChangeEvents?: boolean, ignoreDeleteEvents?: boolean): theia.FileSystemWatcher;
    onFileSystemEvent(id: string, uri: URI, type: FileChangeEventType): void;
}
//# sourceMappingURL=in-plugin-filesystem-watcher-proxy.d.ts.map
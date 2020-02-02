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
import { injectable } from 'inversify';
import { FileSystemWatcherServer, WatchOptions, FileSystemWatcherClient } from '../common/filesystem-watcher-protocol';

@injectable()
export class WorkspaceBrowserFileSystemWatcher implements FileSystemWatcherServer {
    /**
     * Start file watching for the given param.
     * Resolve when watching is started.
     * Return a watcher id.
     */

    private files2Watch: Map<string, number> = new Map<string, number>();
    async watchFileChanges(uri: string, options?: WatchOptions): Promise<number> {
        if (!this.files2Watch.has(uri)) {
            const currentItemCount = this.files2Watch.size + 1;
            console.log(`Start watching ${uri} with ID ${currentItemCount}`);
            this.files2Watch.set(uri, currentItemCount);
            return currentItemCount;
        } else {
            console.log(`Already watching ${uri}`);
            return this.files2Watch.get(uri)!;
        }
    }

    /**
     * Stop file watching for the given id.
     * Resolve when watching is stopped.
     */
    async unwatchFileChanges(watcher: number): Promise<void> {
        for (const key of this.files2Watch.keys()) {
            if (this.files2Watch.get(key) === watcher) {
                console.log(`Unwatch ${key} with ID ${watcher}`);
                this.files2Watch.delete(key);
                break;
            }
        }
    }

    async kernel_notify(path: string, changeType: number = 0): Promise<void> {
        // console.log(`Notify coming ${path}`);
        if (!this.client) {
            return;
        }

        if (!path.startsWith('file://')) {
            path = 'file://' + path;
        }

        const changes: {uri: string, type: number}[] = [];
        for (const key of this.files2Watch.keys()) {
            if (path.startsWith(key)) {
                if (changeType !== 0) {
                    /* Notify Unconditionally */
                    changes.push({uri: key, type: changeType});
                } else {
                    /* Only Notify Non-Root One, Notify root will cause full refresh */
                    if (key !== 'file:///') {
                        changes.push({uri: key, type: changeType});
                    }
                }
                // console.log(key);
            }
        }

        changes.push({uri: path, type: changeType});
        const thatClient = this.client;
        setTimeout(() => {
            thatClient.onDidFilesChanged({
                changes: changes
            });
        }, 100);
    }

    protected client: FileSystemWatcherClient | undefined;
    setClient(client: FileSystemWatcherClient | undefined): void {
        this.client = client;
    }

    dispose(): void {
        this.files2Watch.clear();
    }
}

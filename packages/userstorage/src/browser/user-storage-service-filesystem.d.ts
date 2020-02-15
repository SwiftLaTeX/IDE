/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
import { DisposableCollection, ILogger, Emitter, Event } from '@theia/core/lib/common';
import { UserStorageChangeEvent, UserStorageService } from './user-storage-service';
import { FileSystemWatcher, FileChangeEvent } from '@theia/filesystem/lib/browser/filesystem-watcher';
import { FileSystem } from '@theia/filesystem/lib/common';
import URI from '@theia/core/lib/common/uri';
export declare const THEIA_USER_STORAGE_FOLDER = ".swiftlatex";
export declare class UserStorageServiceFilesystemImpl implements UserStorageService {
    protected readonly fileSystem: FileSystem;
    protected readonly watcher: FileSystemWatcher;
    protected readonly logger: ILogger;
    protected readonly toDispose: DisposableCollection;
    protected readonly onUserStorageChangedEmitter: Emitter<UserStorageChangeEvent>;
    protected readonly userStorageFolder: Promise<URI | undefined>;
    constructor(fileSystem: FileSystem, watcher: FileSystemWatcher, logger: ILogger);
    dispose(): void;
    protected onDidFilesChanged(event: FileChangeEvent): void;
    readContents(uri: URI): Promise<string>;
    saveContents(uri: URI, content: string): Promise<void>;
    get onUserStorageChanged(): Event<UserStorageChangeEvent>;
    /**
     * Creates a new user storage URI from the filesystem URI.
     * @param userStorageFolderUri User storage folder URI
     * @param fsPath The filesystem URI
     */
    static toUserStorageUri(userStorageFolderUri: URI, rawUri: URI): URI;
    /**
     * Returns the path relative to the user storage filesystem uri i.e if the user storage root is
     * 'file://home/user/.theia' and the fileUri is 'file://home/user.theia/keymaps.json' it will return 'keymaps.json'
     * @param userStorageFolderUri User storage folder URI
     * @param fileUri User storage
     */
    private static getRelativeUserStoragePath;
    /**
     * Returns the associated filesystem URI relative to the user storage folder passed as argument.
     * @param userStorageFolderUri User storage folder URI
     * @param userStorageUri User storage URI to be converted in filesystem URI
     */
    static toFilesystemURI(userStorageFolderUri: URI, userStorageUri: URI): URI;
}
//# sourceMappingURL=user-storage-service-filesystem.d.ts.map
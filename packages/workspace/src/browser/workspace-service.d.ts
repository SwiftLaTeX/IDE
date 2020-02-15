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
import URI from '@theia/core/lib/common/uri';
import { FileSystem, FileStat } from '@theia/filesystem/lib/common';
import { FileSystemWatcher } from '@theia/filesystem/lib/browser/filesystem-watcher';
import { WorkspaceServer } from '../common';
import { WindowService } from '@theia/core/lib/browser/window/window-service';
import { FrontendApplicationContribution, PreferenceServiceImpl, PreferenceSchemaProvider } from '@theia/core/lib/browser';
import { ILogger, Disposable, DisposableCollection, Emitter, Event, MaybePromise } from '@theia/core';
import { WorkspacePreferences } from './workspace-preferences';
/**
 * The workspace service.
 */
export declare class WorkspaceService implements FrontendApplicationContribution {
    private _workspace;
    private _roots;
    private deferredRoots;
    protected readonly fileSystem: FileSystem;
    protected readonly watcher: FileSystemWatcher;
    protected readonly server: WorkspaceServer;
    protected readonly windowService: WindowService;
    protected logger: ILogger;
    protected preferences: WorkspacePreferences;
    protected readonly preferenceImpl: PreferenceServiceImpl;
    protected readonly schemaProvider: PreferenceSchemaProvider;
    protected applicationName: string;
    protected init(): Promise<void>;
    /**
     * Resolves to the default workspace URI as string.
     *
     * The default implementation tries to extract the default workspace location
     * from the `window.location.hash`, then falls-back to the most recently
     * used workspace root from the server.
     *
     * It is not ensured that the resolved workspace URI is valid, it can point
     * to a non-existing location.
     */
    protected getDefaultWorkspaceUri(): MaybePromise<string | undefined>;
    /**
     * Get the path of the workspace to use initially.
     * @deprecated use `WorkspaceService#getDefaultWorkspaceUri` instead.
     */
    protected getDefaultWorkspacePath(): MaybePromise<string | undefined>;
    /**
     * Set the URL fragment to the given workspace path.
     */
    protected setURLFragment(workspacePath: string): void;
    get roots(): Promise<FileStat[]>;
    tryGetRoots(): FileStat[];
    get workspace(): FileStat | undefined;
    protected readonly onWorkspaceChangeEmitter: Emitter<FileStat[]>;
    get onWorkspaceChanged(): Event<FileStat[]>;
    protected readonly onWorkspaceLocationChangedEmitter: Emitter<FileStat | undefined>;
    get onWorkspaceLocationChanged(): Event<FileStat | undefined>;
    protected readonly toDisposeOnWorkspace: DisposableCollection;
    protected setWorkspace(workspaceStat: FileStat | undefined): Promise<void>;
    protected updateWorkspace(): Promise<void>;
    protected updateRoots(): Promise<void>;
    protected computeRoots(): Promise<FileStat[]>;
    protected getWorkspaceDataFromFile(): Promise<WorkspaceData | undefined>;
    protected formatTitle(title?: string): string;
    protected updateTitle(): void;
    /**
     * on unload, we set our workspace root as the last recently used on the backend.
     */
    onStop(): void;
    recentWorkspaces(): Promise<string[]>;
    /**
     * Returns `true` if theia has an opened workspace or folder
     * @returns {boolean}
     */
    get opened(): boolean;
    /**
     * Returns `true` if a multiple-root workspace is currently open.
     * @returns {boolean}
     */
    get isMultiRootWorkspaceOpened(): boolean;
    /**
     * Returns `true` if there is an opened workspace, and multi root workspace support is enabled.
     * @returns {boolean}
     */
    get isMultiRootWorkspaceEnabled(): boolean;
    /**
     * Opens directory, or recreates a workspace from the file that `uri` points to.
     */
    open(uri: URI, options?: WorkspaceInput): void;
    protected doOpen(uri: URI, options?: WorkspaceInput): Promise<void>;
    /**
     * Adds a root folder to the workspace
     * @param uri URI of the root folder being added
     */
    addRoot(uri: URI): Promise<void>;
    /**
     * Removes root folder(s) from workspace.
     */
    removeRoots(uris: URI[]): Promise<void>;
    spliceRoots(start: number, deleteCount?: number, ...rootsToAdd: URI[]): Promise<URI[]>;
    protected getUntitledWorkspace(): Promise<URI | undefined>;
    private writeWorkspaceFile;
    /**
     * Clears current workspace root.
     */
    close(): Promise<void>;
    /**
     * returns a FileStat if the argument URI points to an existing directory. Otherwise, `undefined`.
     */
    protected toValidRoot(uri: URI | string | undefined): Promise<FileStat | undefined>;
    /**
     * returns a FileStat if the argument URI points to a file or directory. Otherwise, `undefined`.
     */
    protected toFileStat(uri: URI | string | undefined): Promise<FileStat | undefined>;
    protected openWindow(uri: FileStat, options?: WorkspaceInput): void;
    protected reloadWindow(): void;
    protected openNewWindow(workspacePath: string): void;
    protected shouldPreserveWindow(options?: WorkspaceInput): boolean;
    /**
     * Return true if one of the paths in paths array is present in the workspace
     * NOTE: You should always explicitly use `/` as the separator between the path segments.
     */
    containsSome(paths: string[]): Promise<boolean>;
    get saved(): boolean;
    /**
     * Save workspace data into a file
     * @param uri URI or FileStat of the workspace file
     */
    save(uri: URI | FileStat): Promise<void>;
    protected readonly rootWatchers: Map<string, Disposable>;
    protected watchRoots(): Promise<void>;
    protected watchRoot(root: FileStat): Promise<void>;
    /**
     * Returns the workspace root uri that the given file belongs to.
     * In case that the file is found in more than one workspace roots, returns the root that is closest to the file.
     * If the file is not from the current workspace, returns `undefined`.
     * @param uri URI of the file
     */
    getWorkspaceRootUri(uri: URI | undefined): URI | undefined;
    areWorkspaceRoots(uris: URI[]): boolean;
}
export interface WorkspaceInput {
    /**
     * Tests whether the same window should be used or a new one has to be opened after setting the workspace root. By default it is `false`.
     */
    preserveWindow?: boolean;
}
export interface WorkspaceData {
    folders: Array<{
        path: string;
        name?: string;
    }>;
    settings?: {
        [id: string]: any;
    };
}
export declare namespace WorkspaceData {
    function is(data: any): data is WorkspaceData;
    function buildWorkspaceData(folders: string[] | FileStat[], settings: {
        [id: string]: any;
    } | undefined): WorkspaceData;
    function transformToRelative(data: WorkspaceData, workspaceFile?: FileStat): WorkspaceData;
    function transformToAbsolute(data: WorkspaceData, workspaceFile?: FileStat): WorkspaceData;
}
//# sourceMappingURL=workspace-service.d.ts.map
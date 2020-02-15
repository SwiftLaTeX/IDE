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
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, SelectionService } from '@theia/core/lib/common';
import { OS } from '@theia/core';
import { OpenerService, StorageService, LabelProvider, KeybindingRegistry, KeybindingContribution } from '@theia/core/lib/browser';
import { FileDialogService, OpenFileDialogProps, FileDialogTreeFilters } from '@theia/filesystem/lib/browser';
import { FileSystem } from '@theia/filesystem/lib/common';
import { ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import { WorkspaceService } from './workspace-service';
import { QuickOpenWorkspace } from './quick-open-workspace';
import { WorkspacePreferences } from './workspace-preferences';
import URI from '@theia/core/lib/common/uri';
export declare class WorkspaceFrontendContribution implements CommandContribution, KeybindingContribution, MenuContribution {
    protected readonly fileSystem: FileSystem;
    protected readonly openerService: OpenerService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly workspaceStorage: StorageService;
    protected readonly labelProvider: LabelProvider;
    protected readonly quickOpenWorkspace: QuickOpenWorkspace;
    protected readonly fileDialogService: FileDialogService;
    protected preferences: WorkspacePreferences;
    protected readonly selectionService: SelectionService;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly contextKeyService: ContextKeyService;
    protected init(): void;
    protected initWorkspaceContextKeys(): void;
    protected updateStyles(): void;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    /**
     * This is the generic `Open` method. Opens files and directories too. Resolves to the opened URI.
     * Except when you are on either Windows or Linux `AND` running in electron. If so, it opens a file.
     */
    protected doOpen(): Promise<URI | undefined>;
    /**
     * Opens a file after prompting the `Open File` dialog. Resolves to `undefined`, if
     *  - the workspace root is not set,
     *  - the file to open does not exist, or
     *  - it was not a file, but a directory.
     *
     * Otherwise, resolves to the URI of the file.
     */
    protected doOpenFile(): Promise<URI | undefined>;
    /**
     * Opens a folder after prompting the `Open Folder` dialog. Resolves to `undefined`, if
     *  - the workspace root is not set,
     *  - the folder to open does not exist, or
     *  - it was not a directory, but a file resource.
     *
     * Otherwise, resolves to the URI of the folder.
     */
    protected doOpenFolder(): Promise<URI | undefined>;
    /**
     * Opens a workspace after raising the `Open Workspace` dialog. Resolves to the URI of the recently opened workspace,
     * if it was successful. Otherwise, resolves to `undefined`.
     *
     * **Caveat**: this behaves differently on different platforms, the `workspace.supportMultiRootWorkspace` preference value **does** matter,
     * and `electron`/`browser` version has impact too. See [here](https://github.com/eclipse-theia/theia/pull/3202#issuecomment-430884195) for more details.
     *
     * Legend:
     *  - `workspace.supportMultiRootWorkspace` is `false`: => `N`
     *  - `workspace.supportMultiRootWorkspace` is `true`: => `Y`
     *  - Folders only: => `F`
     *  - Workspace files only: => `W`
     *  - Folders and workspace files: => `FW`
     *
     * -----
     *
     * |---------|-----------|-----------|------------|------------|
     * |         | browser Y | browser N | electron Y | electron N |
     * |---------|-----------|-----------|------------|------------|
     * | Linux   |     FW    |     F     |     W      |     F      |
     * | Windows |     FW    |     F     |     W      |     F      |
     * | OS X    |     FW    |     F     |     FW     |     FW     |
     * |---------|-----------|-----------|------------|------------|
     *
     */
    protected doOpenWorkspace(): Promise<URI | undefined>;
    protected openWorkspaceOpenFileDialogProps(): Promise<OpenFileDialogProps>;
    protected closeWorkspace(): Promise<void>;
    protected saveWorkspaceAs(): Promise<void>;
    /**
     * Save source `URI` to target.
     *
     * @param uri the source `URI`.
     */
    protected saveAs(uri: URI): Promise<void>;
    private confirmOverwrite;
    private isElectron;
    /**
     * Get the current workspace URI.
     *
     * @returns the current workspace URI.
     */
    private getCurrentWorkspaceUri;
}
export declare namespace WorkspaceFrontendContribution {
    /**
     * File filter for all Theia and VS Code workspace file types.
     */
    const DEFAULT_FILE_FILTER: FileDialogTreeFilters;
    /**
     * Returns with an `OpenFileDialogProps` for opening the `Open Workspace` dialog.
     */
    function createOpenWorkspaceOpenFileDialogProps(options: Readonly<{
        type: OS.Type;
        electron: boolean;
        supportMultiRootWorkspace: boolean;
    }>): OpenFileDialogProps;
}
//# sourceMappingURL=workspace-frontend-contribution.d.ts.map
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
import { AbstractViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { Widget, KeybindingRegistry, OpenerService, FrontendApplicationContribution, FrontendApplication } from '@theia/core/lib/browser';
import { CommandRegistry, MenuModelRegistry, MenuPath, Command, Mutable } from '@theia/core/lib/common';
import { WorkspaceService, WorkspacePreferences } from '@theia/workspace/lib/browser';
import { FileNavigatorWidget } from './navigator-widget';
import { FileNavigatorPreferences } from './navigator-preferences';
import { FileNavigatorFilter } from './navigator-filter';
import { NavigatorContextKeyService } from './navigator-context-key-service';
import { TabBarToolbarContribution, TabBarToolbarRegistry, TabBarToolbarItem } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { NavigatorDiff } from './navigator-diff';
import { PreferenceService } from '@theia/core/lib/browser';
export declare namespace FileNavigatorCommands {
    const REVEAL_IN_NAVIGATOR: Command;
    const TOGGLE_HIDDEN_FILES: Command;
    const TOGGLE_AUTO_REVEAL: Command;
    const REFRESH_NAVIGATOR: Command;
    const COLLAPSE_ALL: Command;
    const ADD_ROOT_FOLDER: Command;
}
/**
 * Navigator `More Actions...` toolbar item groups.
 * Used in order to group items present in the toolbar.
 */
export declare namespace NavigatorMoreToolbarGroups {
    const NEW_OPEN = "1_navigator_new_open";
    const TOOLS = "2_navigator_tools";
    const WORKSPACE = "3_navigator_workspace";
}
export declare const NAVIGATOR_CONTEXT_MENU: MenuPath;
/**
 * Navigator context menu default groups should be aligned
 * with VS Code default groups: https://code.visualstudio.com/api/references/contribution-points#contributes.menus
 */
export declare namespace NavigatorContextMenu {
    const NAVIGATION: string[];
    /** @deprecated use NAVIGATION */
    const OPEN: string[];
    /** @deprecated use NAVIGATION */
    const NEW: string[];
    const WORKSPACE: string[];
    const COMPARE: string[];
    /** @deprecated use COMPARE */
    const DIFF: string[];
    const SEARCH: string[];
    const CLIPBOARD: string[];
    const MODIFICATION: string[];
    /** @deprecated use MODIFICATION */
    const MOVE: string[];
    /** @deprecated use MODIFICATION */
    const ACTIONS: string[];
    const OPEN_WITH: string[];
}
export declare class FileNavigatorContribution extends AbstractViewContribution<FileNavigatorWidget> implements FrontendApplicationContribution, TabBarToolbarContribution {
    protected readonly fileNavigatorPreferences: FileNavigatorPreferences;
    protected readonly openerService: OpenerService;
    protected readonly fileNavigatorFilter: FileNavigatorFilter;
    protected readonly workspaceService: WorkspaceService;
    protected readonly workspacePreferences: WorkspacePreferences;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly tabbarToolbarRegistry: TabBarToolbarRegistry;
    protected readonly contextKeyService: NavigatorContextKeyService;
    protected readonly menuRegistry: MenuModelRegistry;
    protected readonly navigatorDiff: NavigatorDiff;
    protected readonly preferenceService: PreferenceService;
    constructor(fileNavigatorPreferences: FileNavigatorPreferences, openerService: OpenerService, fileNavigatorFilter: FileNavigatorFilter, workspaceService: WorkspaceService, workspacePreferences: WorkspacePreferences);
    protected init(): Promise<void>;
    onStart(app: FrontendApplication): Promise<void>;
    initializeLayout(app: FrontendApplication): Promise<void>;
    registerCommands(registry: CommandRegistry): void;
    protected withWidget<T>(widget: Widget | undefined, cb: (navigator: FileNavigatorWidget) => T): T | false;
    registerMenus(registry: MenuModelRegistry): void;
    registerKeybindings(registry: KeybindingRegistry): void;
    registerToolbarItems(toolbarRegistry: TabBarToolbarRegistry): Promise<void>;
    /**
     * Register commands to the `More Actions...` navigator toolbar item.
     */
    registerMoreToolbarItem: (item: Mutable<TabBarToolbarItem>) => void;
    /**
     * Reveals and selects node in the file navigator to which given widget is related.
     * Does nothing if given widget undefined or doesn't have related resource.
     *
     * @param widget widget file resource of which should be revealed and selected
     */
    selectWidgetFileNode(widget: Widget | undefined): Promise<void>;
    protected onCurrentWidgetChangedHandler(): void;
    /**
     * Collapse file navigator nodes and set focus on first visible node
     * - single root workspace: collapse all nodes except root
     * - multiple root workspace: collapse all nodes, even roots
     */
    collapseFileNavigatorTree(): Promise<void>;
    /**
     * force refresh workspace in navigator
     */
    refreshWorkspace(): Promise<void>;
    private readonly toDisposeAddRemoveFolderActions;
    private updateAddRemoveFolderActions;
}
//# sourceMappingURL=navigator-contribution.d.ts.map
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { AbstractViewContribution, KeybindingRegistry, LabelProvider, FrontendApplication, FrontendApplicationContribution } from '@theia/core/lib/browser';
import { SearchInWorkspaceWidget } from './search-in-workspace-widget';
import { CommandRegistry, MenuModelRegistry, SelectionService, Command } from '@theia/core';
import { Widget } from '@theia/core/lib/browser/widgets';
import { UriCommandHandler, UriAwareCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import URI from '@theia/core/lib/common/uri';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { FileSystem } from '@theia/filesystem/lib/common';
import { SearchInWorkspaceContextKeyService } from './search-in-workspace-context-key-service';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { EditorManager } from '@theia/editor/lib/browser/editor-manager';
export declare namespace SearchInWorkspaceCommands {
    const TOGGLE_SIW_WIDGET: {
        id: string;
    };
    const OPEN_SIW_WIDGET: Command;
    const FIND_IN_FOLDER: Command;
    const REFRESH_RESULTS: Command;
    const CANCEL_SEARCH: Command;
    const COLLAPSE_ALL: Command;
    const CLEAR_ALL: Command;
}
export declare class SearchInWorkspaceFrontendContribution extends AbstractViewContribution<SearchInWorkspaceWidget> implements FrontendApplicationContribution, TabBarToolbarContribution {
    protected readonly selectionService: SelectionService;
    protected readonly labelProvider: LabelProvider;
    protected readonly workspaceService: WorkspaceService;
    protected readonly fileSystem: FileSystem;
    protected readonly editorManager: EditorManager;
    protected readonly contextKeyService: SearchInWorkspaceContextKeyService;
    constructor();
    protected init(): void;
    initializeLayout(app: FrontendApplication): Promise<void>;
    registerCommands(commands: CommandRegistry): Promise<void>;
    protected withWidget<T>(widget: Widget | undefined, fn: (widget: SearchInWorkspaceWidget) => T): T | false;
    /**
     * Get the search term based on current editor selection.
     * @returns the selection if available.
     */
    protected getSearchTerm(): string;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerToolbarItems(toolbarRegistry: TabBarToolbarRegistry): Promise<void>;
    protected newUriAwareCommandHandler(handler: UriCommandHandler<URI>): UriAwareCommandHandler<URI>;
    protected newMultiUriAwareCommandHandler(handler: UriCommandHandler<URI[]>): UriAwareCommandHandler<URI[]>;
}
//# sourceMappingURL=search-in-workspace-frontend-contribution.d.ts.map
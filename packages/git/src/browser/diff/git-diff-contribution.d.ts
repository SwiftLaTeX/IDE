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
import { CommandRegistry, Command, MenuModelRegistry, SelectionService, MessageService } from '@theia/core/lib/common';
import { FrontendApplication, AbstractViewContribution } from '@theia/core/lib/browser';
import { WidgetManager } from '@theia/core/lib/browser/widget-manager';
import { GitDiffWidget } from './git-diff-widget';
import { OpenerService } from '@theia/core/lib/browser';
import { FileNavigatorContribution } from '@theia/navigator/lib/browser/navigator-contribution';
import { UriCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import { GitQuickOpenService } from '../git-quick-open-service';
import { FileSystem } from '@theia/filesystem/lib/common';
import URI from '@theia/core/lib/common/uri';
import { Git } from '../../common';
import { GitRepositoryProvider } from '../git-repository-provider';
import { WorkspaceRootUriAwareCommandHandler } from '@theia/workspace/lib/browser/workspace-commands';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
export declare namespace GitDiffCommands {
    const OPEN_FILE_DIFF: Command;
}
export declare namespace ScmNavigatorMoreToolbarGroups {
    const SCM = "3_navigator_scm";
}
export declare class GitDiffContribution extends AbstractViewContribution<GitDiffWidget> implements TabBarToolbarContribution {
    protected readonly selectionService: SelectionService;
    protected readonly widgetManager: WidgetManager;
    protected readonly app: FrontendApplication;
    protected readonly quickOpenService: GitQuickOpenService;
    protected readonly fileSystem: FileSystem;
    protected openerService: OpenerService;
    protected readonly notifications: MessageService;
    protected readonly repositoryProvider: GitRepositoryProvider;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly fileNavigatorContribution: FileNavigatorContribution;
    protected readonly workspaceService: WorkspaceService;
    constructor(selectionService: SelectionService, widgetManager: WidgetManager, app: FrontendApplication, quickOpenService: GitQuickOpenService, fileSystem: FileSystem, openerService: OpenerService, notifications: MessageService, repositoryProvider: GitRepositoryProvider);
    registerMenus(menus: MenuModelRegistry): void;
    registerCommands(commands: CommandRegistry): void;
    registerToolbarItems(registry: TabBarToolbarRegistry): void;
    showWidget(options: Git.Options.Diff): Promise<GitDiffWidget>;
    protected newWorkspaceRootUriAwareCommandHandler(handler: UriCommandHandler<URI>): WorkspaceRootUriAwareCommandHandler;
}
//# sourceMappingURL=git-diff-contribution.d.ts.map
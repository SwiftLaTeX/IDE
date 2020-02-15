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
import { Command, CommandContribution, CommandRegistry, ResourceProvider } from '@theia/core';
import { ApplicationShell, OpenerService, PrefixQuickOpenService } from '@theia/core/lib/browser';
import { ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import { ApplicationShellMouseTracker } from '@theia/core/lib/browser/shell/application-shell-mouse-tracker';
import { CommandService } from '@theia/core/lib/common/command';
import { EditorManager } from '@theia/editor/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { DiffService } from '@theia/workspace/lib/browser/diff-service';
export declare namespace VscodeCommands {
    const OPEN: Command;
    const OPEN_FOLDER: Command;
    const DIFF: Command;
    const SET_CONTEXT: Command;
}
export declare class PluginVscodeCommandsContribution implements CommandContribution {
    protected readonly commandService: CommandService;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly editorManager: EditorManager;
    protected readonly shell: ApplicationShell;
    protected readonly resources: ResourceProvider;
    protected readonly diffService: DiffService;
    protected readonly openerService: OpenerService;
    protected readonly mouseTracker: ApplicationShellMouseTracker;
    protected readonly quickOpen: PrefixQuickOpenService;
    protected readonly workspaceService: WorkspaceService;
    registerCommands(commands: CommandRegistry): void;
}
//# sourceMappingURL=plugin-vscode-commands-contribution.d.ts.map
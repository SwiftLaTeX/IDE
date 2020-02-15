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
import { MenuModelRegistry, Command, CommandRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution, OpenViewArguments, KeybindingRegistry } from '@theia/core/lib/browser';
import { CallHierarchyTreeWidget } from './callhierarchy-tree/callhierarchy-tree-widget';
import { CurrentEditorAccess } from './current-editor-access';
import { CallHierarchyServiceProvider } from './callhierarchy-service';
export declare const CALL_HIERARCHY_TOGGLE_COMMAND_ID = "callhierachy:toggle";
export declare const CALL_HIERARCHY_LABEL = "Call Hierarchy";
export declare namespace CallHierarchyCommands {
    const OPEN: Command;
}
export declare class CallHierarchyContribution extends AbstractViewContribution<CallHierarchyTreeWidget> {
    protected readonly editorAccess: CurrentEditorAccess;
    protected readonly callHierarchyServiceProvider: CallHierarchyServiceProvider;
    constructor();
    protected isCallHierarchyAvailable(): boolean;
    openView(args?: Partial<OpenViewArguments>): Promise<CallHierarchyTreeWidget>;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
}
//# sourceMappingURL=callhierarchy-contribution.d.ts.map
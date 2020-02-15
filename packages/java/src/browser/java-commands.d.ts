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
import { CommandContribution, CommandRegistry, Command, MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import { EditorManager, EditorWidget } from '@theia/editor/lib/browser';
import { KeybindingContribution, KeybindingRegistry, PreferenceService, OpenerService } from '@theia/core/lib/browser';
import { Workspace } from '@theia/languages/lib/browser';
import { JavaClientContribution } from './java-client-contribution';
/**
 * Show Java references
 */
export declare const SHOW_JAVA_REFERENCES: Command;
/**
 * Apply Workspace Edit
 */
export declare const APPLY_WORKSPACE_EDIT: Command;
/**
 * Organize Imports
 */
export declare const JAVA_ORGANIZE_IMPORTS: Command;
export declare const JAVA_COMPILE_WORKSPACE: Command;
export declare const JAVA_IGNORE_INCOMPLETE_CLASSPATH: Command;
export declare const JAVA_IGNORE_INCOMPLETE_CLASSPATH_HELP: Command;
export declare class JavaCommandContribution implements CommandContribution, MenuContribution, KeybindingContribution {
    protected readonly workspace: Workspace;
    protected readonly editorManager: EditorManager;
    protected readonly javaClientContribution: JavaClientContribution;
    protected readonly preferencesService: PreferenceService;
    protected readonly openerService: OpenerService;
    registerCommands(commands: CommandRegistry): void;
    get currentEditor(): EditorWidget | undefined;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
}
//# sourceMappingURL=java-commands.d.ts.map
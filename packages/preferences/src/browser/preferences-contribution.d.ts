/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { MenuModelRegistry, CommandRegistry } from '@theia/core';
import { PreferenceScope, AbstractViewContribution, KeybindingRegistry } from '@theia/core/lib/browser';
import { WorkspacePreferenceProvider } from './workspace-preference-provider';
import { FileSystem } from '@theia/filesystem/lib/common';
import { UserStorageService } from '@theia/userstorage/lib/browser';
import { PreferencesContainer } from './preferences-tree-widget';
import { EditorManager } from '@theia/editor/lib/browser';
export declare class PreferencesContribution extends AbstractViewContribution<PreferencesContainer> {
    protected readonly userStorageService: UserStorageService;
    protected readonly workspacePreferenceProvider: WorkspacePreferenceProvider;
    protected readonly filesystem: FileSystem;
    protected readonly editorManager: EditorManager;
    constructor();
    registerCommands(commands: CommandRegistry): Promise<void>;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    protected openPreferences(preferenceScope: PreferenceScope): Promise<void>;
}
//# sourceMappingURL=preferences-contribution.d.ts.map
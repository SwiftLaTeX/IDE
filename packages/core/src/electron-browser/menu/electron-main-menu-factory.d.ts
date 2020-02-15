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
import { CommandRegistry, CompositeMenuNode, MenuModelRegistry, MenuPath } from '../../common';
import { PreferenceService, KeybindingRegistry, Keybinding } from '../../browser';
import { ContextKeyService } from '../../browser/context-key-service';
import { ContextMenuContext } from '../../browser/menu/context-menu-context';
export declare class ElectronMainMenuFactory {
    protected readonly commandRegistry: CommandRegistry;
    protected readonly preferencesService: PreferenceService;
    protected readonly menuProvider: MenuModelRegistry;
    protected readonly keybindingRegistry: KeybindingRegistry;
    protected _menu: Electron.Menu | undefined;
    protected _toggledCommands: Set<string>;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly context: ContextMenuContext;
    constructor(commandRegistry: CommandRegistry, preferencesService: PreferenceService, menuProvider: MenuModelRegistry, keybindingRegistry: KeybindingRegistry);
    createMenuBar(): Electron.Menu;
    createContextMenu(menuPath: MenuPath, args?: any[]): Electron.Menu;
    protected fillMenuTemplate(items: Electron.MenuItemConstructorOptions[], menuModel: CompositeMenuNode, args?: any[]): Electron.MenuItemConstructorOptions[];
    /**
     * Return a user visible representation of a keybinding.
     */
    protected acceleratorFor(keybinding: Keybinding): string;
    protected execute(command: string, args: any[]): Promise<void>;
    protected createOSXMenu(): Electron.MenuItemConstructorOptions;
}
//# sourceMappingURL=electron-main-menu-factory.d.ts.map
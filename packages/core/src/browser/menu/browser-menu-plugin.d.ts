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
import { MenuBar, Menu as MenuWidget, Widget } from '@phosphor/widgets';
import { CommandRegistry as PhosphorCommandRegistry } from '@phosphor/commands';
import { CommandRegistry, ActionMenuNode, CompositeMenuNode, MenuModelRegistry, MenuPath, ILogger } from '../../common';
import { KeybindingRegistry } from '../keybinding';
import { FrontendApplicationContribution, FrontendApplication } from '../frontend-application';
import { ContextKeyService } from '../context-key-service';
import { ContextMenuContext } from './context-menu-context';
import { ApplicationShell } from '../shell';
export declare abstract class MenuBarWidget extends MenuBar {
    abstract activateMenu(label: string, ...labels: string[]): Promise<MenuWidget>;
    abstract triggerMenuItem(label: string, ...labels: string[]): Promise<MenuWidget.IItem>;
}
export declare class BrowserMainMenuFactory {
    protected readonly commandRegistry: CommandRegistry;
    protected readonly keybindingRegistry: KeybindingRegistry;
    protected readonly menuProvider: MenuModelRegistry;
    protected readonly logger: ILogger;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly context: ContextMenuContext;
    constructor(commandRegistry: CommandRegistry, keybindingRegistry: KeybindingRegistry, menuProvider: MenuModelRegistry);
    createMenuBar(): MenuBarWidget;
    protected fillMenuBar(menuBar: MenuBarWidget): void;
    createContextMenu(path: MenuPath, args?: any[]): MenuWidget;
    protected createPhosphorCommands(menu: CompositeMenuNode, args?: any[]): PhosphorCommandRegistry;
    protected addPhosphorCommands(commands: PhosphorCommandRegistry, menu: CompositeMenuNode, args: any[]): void;
    protected addPhosphorCommand(commands: PhosphorCommandRegistry, menu: ActionMenuNode, args: any[]): void;
}
export declare class BrowserMenuBarContribution implements FrontendApplicationContribution {
    protected readonly factory: BrowserMainMenuFactory;
    protected readonly shell: ApplicationShell;
    constructor(factory: BrowserMainMenuFactory);
    onStart(app: FrontendApplication): void;
    get menuBar(): MenuBarWidget | undefined;
    protected createLogo(): Widget;
}
//# sourceMappingURL=browser-menu-plugin.d.ts.map
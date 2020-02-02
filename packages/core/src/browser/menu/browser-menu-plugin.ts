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

/* eslint-disable @typescript-eslint/no-explicit-any */

import { injectable, inject } from 'inversify';
import { MenuBar, Menu as MenuWidget, Widget } from '@phosphor/widgets';
import { CommandRegistry as PhosphorCommandRegistry } from '@phosphor/commands';
import {
    CommandRegistry, ActionMenuNode, CompositeMenuNode,
    MenuModelRegistry, MAIN_MENU_BAR, MenuPath, ILogger
} from '../../common';
import { KeybindingRegistry } from '../keybinding';
import { FrontendApplicationContribution, FrontendApplication } from '../frontend-application';
import { ContextKeyService } from '../context-key-service';
import { ContextMenuContext } from './context-menu-context';
import { waitForRevealed } from '../widgets';
import { ApplicationShell } from '../shell';

export abstract class MenuBarWidget extends MenuBar {
    abstract activateMenu(label: string, ...labels: string[]): Promise<MenuWidget>;
    abstract triggerMenuItem(label: string, ...labels: string[]): Promise<MenuWidget.IItem>;
}

@injectable()
export class BrowserMainMenuFactory {

    @inject(ILogger)
    protected readonly logger: ILogger;

    @inject(ContextKeyService)
    protected readonly contextKeyService: ContextKeyService;

    @inject(ContextMenuContext)
    protected readonly context: ContextMenuContext;

    constructor(
        @inject(CommandRegistry) protected readonly commandRegistry: CommandRegistry,
        @inject(KeybindingRegistry) protected readonly keybindingRegistry: KeybindingRegistry,
        @inject(MenuModelRegistry) protected readonly menuProvider: MenuModelRegistry
    ) { }

    createMenuBar(): MenuBarWidget {
        const menuBar = new DynamicMenuBarWidget();
        menuBar.id = 'theia:menubar';
        this.fillMenuBar(menuBar);
        const listener = this.keybindingRegistry.onKeybindingsChanged(() => {
            menuBar.clearMenus();
            this.fillMenuBar(menuBar);
        });
        menuBar.disposed.connect(() => listener.dispose());
        return menuBar;
    }

    protected fillMenuBar(menuBar: MenuBarWidget): void {
        const menuModel = this.menuProvider.getMenu(MAIN_MENU_BAR);
        const phosphorCommands = this.createPhosphorCommands(menuModel);
        // for the main menu we want all items to be visible.
        phosphorCommands.isVisible = () => true;

        for (const menu of menuModel.children) {
            if (menu instanceof CompositeMenuNode) {
                const menuWidget = new DynamicMenuWidget(menu, { commands: phosphorCommands }, this.contextKeyService, this.context);
                menuBar.addMenu(menuWidget);
            }
        }
    }

    createContextMenu(path: MenuPath, args?: any[]): MenuWidget {
        const menuModel = this.menuProvider.getMenu(path);
        const phosphorCommands = this.createPhosphorCommands(menuModel, args);

        const contextMenu = new DynamicMenuWidget(menuModel, { commands: phosphorCommands }, this.contextKeyService, this.context);
        return contextMenu;
    }

    protected createPhosphorCommands(menu: CompositeMenuNode, args: any[] = []): PhosphorCommandRegistry {
        const commands = new PhosphorCommandRegistry();
        this.addPhosphorCommands(commands, menu, args);
        return commands;
    }

    protected addPhosphorCommands(commands: PhosphorCommandRegistry, menu: CompositeMenuNode, args: any[]): void {
        for (const child of menu.children) {
            if (child instanceof ActionMenuNode) {
                this.addPhosphorCommand(commands, child, args);
                if (child.altNode) {
                    this.addPhosphorCommand(commands, child.altNode, args);
                }
            } else if (child instanceof CompositeMenuNode) {
                this.addPhosphorCommands(commands, child, args);
            }
        }
    }

    protected addPhosphorCommand(commands: PhosphorCommandRegistry, menu: ActionMenuNode, args: any[]): void {
        const command = this.commandRegistry.getCommand(menu.action.commandId);
        if (!command) {
            return;
        }
        if (commands.hasCommand(command.id)) {
            // several menu items can be registered for the same command in different contexts
            return;
        }
        commands.addCommand(command.id, {
            execute: () => this.commandRegistry.executeCommand(command.id, ...args),
            label: menu.label,
            icon: menu.icon,
            isEnabled: () => this.commandRegistry.isEnabled(command.id, ...args),
            isVisible: () => this.commandRegistry.isVisible(command.id, ...args),
            isToggled: () => this.commandRegistry.isToggled(command.id, ...args)
        });

        const bindings = this.keybindingRegistry.getKeybindingsForCommand(command.id);

        /* Only consider the first keybinding. */
        if (bindings.length > 0) {
            const binding = bindings[0];
            const keys = this.keybindingRegistry.acceleratorFor(binding);
            commands.addKeyBinding({
                command: command.id,
                keys,
                selector: '.p-Widget' // We have the Phosphor.JS dependency anyway.
            });
        }
    }
}

class DynamicMenuBarWidget extends MenuBarWidget {

    constructor() {
        super();
        // HACK we need to hook in on private method _openChildMenu. Don't do this at home!
        DynamicMenuBarWidget.prototype['_openChildMenu'] = () => {
            if (this.activeMenu instanceof DynamicMenuWidget) {
                this.activeMenu.aboutToShow();
            }
            super['_openChildMenu']();
        };
    }

    async activateMenu(label: string, ...labels: string[]): Promise<MenuWidget> {
        const menu = this.menus.find(m => m.title.label === label);
        if (!menu) {
            throw new Error(`could not find '${label}' menu`);
        }
        this.activeMenu = menu;
        this.openActiveMenu();
        await waitForRevealed(menu);

        const menuPath = [label];

        let current = menu;
        for (const itemLabel of labels) {
            const item = current.items.find(i => i.label === itemLabel);
            if (!item || !item.submenu) {
                throw new Error(`could not find '${label}' submenu in ${menuPath.map(l => "'" + l + "'").join(' -> ')} menu`);
            }
            current.activeItem = item;
            current.triggerActiveItem();
            current = item.submenu;
            await waitForRevealed(current);
        }
        return current;
    }

    async triggerMenuItem(label: string, ...labels: string[]): Promise<MenuWidget.IItem> {
        if (!labels.length) {
            throw new Error('menu item label is not specified');
        }
        const menuPath = [label, ...labels.slice(0, labels.length - 1)];
        const menu = await this.activateMenu(menuPath[0], ...menuPath.slice(1));
        const item = menu.items.find(i => i.label === labels[labels.length - 1]);
        if (!item) {
            throw new Error(`could not find '${label}' item in ${menuPath.map(l => "'" + l + "'").join(' -> ')} menu`);
        }
        menu.activeItem = item;
        menu.triggerActiveItem();
        return item;
    }

}
/**
 * A menu widget that would recompute its items on update
 */
class DynamicMenuWidget extends MenuWidget {

    constructor(
        protected menu: CompositeMenuNode,
        protected options: MenuWidget.IOptions,
        protected readonly contextKeyService: ContextKeyService,
        protected readonly context: ContextMenuContext
    ) {
        super(options);
        if (menu.label) {
            this.title.label = menu.label;
        }
        this.updateSubMenus(this, this.menu, this.options.commands);
    }

    public aboutToShow(): void {
        this.clearItems();
        this.updateSubMenus(this, this.menu, this.options.commands);
    }

    public open(x: number, y: number, options?: MenuWidget.IOpenOptions): void {
        // we want to restore the focus after the menu closes.
        const previouslyActive = window.document.activeElement as HTMLElement;
        const cb = () => {
            previouslyActive.focus({ preventScroll: true });
            this.aboutToClose.disconnect(cb);
        };
        this.aboutToClose.connect(cb);
        super.open(x, y, options);
    }

    private updateSubMenus(
        parent: MenuWidget,
        menu: CompositeMenuNode,
        commands: PhosphorCommandRegistry
    ): void {
        const items = this.buildSubMenus([], menu, commands);
        for (const item of items) {
            parent.addItem(item);
        }
    }

    private buildSubMenus(
        items: MenuWidget.IItemOptions[],
        menu: CompositeMenuNode,
        commands: PhosphorCommandRegistry
    ): MenuWidget.IItemOptions[] {
        for (const item of menu.children) {
            if (item instanceof CompositeMenuNode) {
                if (item.children.length > 0) {
                    // do not render empty nodes

                    if (item.isSubmenu) { // submenu node
                        const submenu = new DynamicMenuWidget(item, this.options, this.contextKeyService, this.context);
                        if (submenu.items.length === 0) {
                            continue;
                        }

                        items.push({
                            type: 'submenu',
                            submenu,
                        });

                    } else { // group node

                        const submenu = this.buildSubMenus([], item, commands);
                        if (submenu.length === 0) {
                            continue;
                        }

                        if (items.length > 0) {
                            // do not put a separator above the first group

                            items.push({
                                type: 'separator'
                            });
                        }

                        // render children
                        items.push(...submenu);
                    }
                }
            } else if (item instanceof ActionMenuNode) {
                const node = item.altNode && this.context.altPressed ? item.altNode : item;
                const { when } = node.action;
                if (!(commands.isVisible(node.action.commandId) && (!when || this.contextKeyService.match(when)))) {
                    continue;
                }

                items.push({
                    command: node.action.commandId,
                    type: 'command'
                });
            }
        }
        return items;
    }

}

@injectable()
export class BrowserMenuBarContribution implements FrontendApplicationContribution {

    @inject(ApplicationShell)
    protected readonly shell: ApplicationShell;

    constructor(
        @inject(BrowserMainMenuFactory) protected readonly factory: BrowserMainMenuFactory
    ) { }

    onStart(app: FrontendApplication): void {
        const logo = this.createLogo();
        app.shell.addWidget(logo, { area: 'top' });
        const menu = this.factory.createMenuBar();
        app.shell.addWidget(menu, { area: 'top' });
    }

    get menuBar(): MenuBarWidget | undefined {
        return this.shell.topPanel.widgets.find(w => w instanceof MenuBarWidget) as MenuBarWidget | undefined;
    }

    protected createLogo(): Widget {
        const logo = new Widget();
        logo.id = 'theia:icon';
        logo.addClass('theia-icon');
        return logo;
    }
}

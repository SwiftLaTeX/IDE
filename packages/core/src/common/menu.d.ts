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
import { Disposable } from './disposable';
import { CommandRegistry, Command } from './command';
import { ContributionProvider } from './contribution-provider';
export interface MenuAction {
    commandId: string;
    /**
     * In addition to the mandatory command property, an alternative command can be defined.
     * It will be shown and invoked when pressing Alt while opening a menu.
     */
    alt?: string;
    label?: string;
    icon?: string;
    order?: string;
    when?: string;
}
export declare namespace MenuAction {
    function is(arg: MenuAction | any): arg is MenuAction;
}
export interface SubMenuOptions {
    iconClass: string;
}
export declare type MenuPath = string[];
export declare const MAIN_MENU_BAR: MenuPath;
export declare const MenuContribution: unique symbol;
/**
 * Representation of a menu contribution.
 */
export interface MenuContribution {
    /**
     * Registers menus.
     * @param menus the menu model registry.
     */
    registerMenus(menus: MenuModelRegistry): void;
}
export declare class MenuModelRegistry {
    protected readonly contributions: ContributionProvider<MenuContribution>;
    protected readonly commands: CommandRegistry;
    protected readonly root: CompositeMenuNode;
    constructor(contributions: ContributionProvider<MenuContribution>, commands: CommandRegistry);
    onStart(): void;
    registerMenuAction(menuPath: MenuPath, item: MenuAction): Disposable;
    registerSubmenu(menuPath: MenuPath, label: string, options?: SubMenuOptions): Disposable;
    /**
     * Unregister menu item from the registry
     *
     * @param item
     */
    unregisterMenuAction(item: MenuAction, menuPath?: MenuPath): void;
    /**
     * Unregister menu item from the registry
     *
     * @param command
     */
    unregisterMenuAction(command: Command, menuPath?: MenuPath): void;
    /**
     * Unregister menu item from the registry
     *
     * @param id
     */
    unregisterMenuAction(id: string, menuPath?: MenuPath): void;
    protected findGroup(menuPath: MenuPath): CompositeMenuNode;
    protected findSubMenu(current: CompositeMenuNode, menuId: string): CompositeMenuNode;
    getMenu(menuPath?: MenuPath): CompositeMenuNode;
}
export interface MenuNode {
    readonly label?: string;
    /**
     * technical identifier
     */
    readonly id: string;
    readonly sortString: string;
}
export declare class CompositeMenuNode implements MenuNode {
    readonly id: string;
    label?: string | undefined;
    iconClass?: string | undefined;
    protected readonly _children: MenuNode[];
    constructor(id: string, label?: string | undefined, iconClass?: string | undefined);
    get children(): ReadonlyArray<MenuNode>;
    addNode(node: MenuNode): Disposable;
    removeNode(id: string): void;
    get sortString(): string;
    get isSubmenu(): boolean;
    static isNavigationGroup(node: MenuNode): node is CompositeMenuNode;
}
export declare class ActionMenuNode implements MenuNode {
    readonly action: MenuAction;
    protected readonly commands: CommandRegistry;
    readonly altNode: ActionMenuNode | undefined;
    constructor(action: MenuAction, commands: CommandRegistry);
    get id(): string;
    get label(): string;
    get icon(): string | undefined;
    get sortString(): string;
}
//# sourceMappingURL=menu.d.ts.map
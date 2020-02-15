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
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, CommandHandler } from '@theia/core';
import { FrontendApplicationContribution, KeybindingContribution, KeybindingRegistry } from '@theia/core/lib/browser';
import { ConsoleManager } from './console-manager';
import { ConsoleWidget } from './console-widget';
export declare namespace ConsoleCommands {
    const SELECT_ALL: Command;
    const COLLAPSE_ALL: Command;
    const CLEAR: Command;
    const EXECUTE: Command;
    const NAVIGATE_BACK: Command;
    const NAVIGATE_FORWARD: Command;
}
export declare namespace ConsoleContextMenu {
    const CLIPBOARD: string[];
    const CLEAR: string[];
}
export declare class ConsoleContribution implements FrontendApplicationContribution, CommandContribution, KeybindingContribution, MenuContribution {
    protected readonly manager: ConsoleManager;
    initialize(): void;
    registerCommands(commands: CommandRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    protected newCommandHandler(execute: ConsoleExecuteFunction): ConsoleCommandHandler;
}
export declare type ConsoleExecuteFunction = (console: ConsoleWidget, ...args: any[]) => any;
export declare class ConsoleCommandHandler implements CommandHandler {
    protected readonly manager: ConsoleManager;
    protected readonly doExecute: ConsoleExecuteFunction;
    constructor(manager: ConsoleManager, doExecute: ConsoleExecuteFunction);
    isEnabled(): boolean;
    isVisible(): boolean;
    execute(...args: any[]): any;
}
//# sourceMappingURL=console-contribution.d.ts.map
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
import { Command, CommandRegistry, CommandContribution, MenuContribution, MenuModelRegistry } from '../../common';
import { KeybindingRegistry, KeybindingContribution } from '../keybinding';
import { PrefixQuickOpenService, QuickOpenHandlerRegistry } from './prefix-quick-open-service';
export declare const quickCommand: Command;
export declare const CLEAR_COMMAND_HISTORY: Command;
export declare class QuickCommandFrontendContribution implements CommandContribution, KeybindingContribution, MenuContribution {
    protected readonly quickOpenService: PrefixQuickOpenService;
    protected readonly quickOpenHandlerRegistry: QuickOpenHandlerRegistry;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
}
//# sourceMappingURL=quick-command-contribution.d.ts.map
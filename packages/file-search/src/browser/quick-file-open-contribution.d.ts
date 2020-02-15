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
import { QuickFileOpenService } from './quick-file-open';
import { CommandRegistry, CommandContribution } from '@theia/core/lib/common';
import { KeybindingRegistry, KeybindingContribution, QuickOpenContribution, QuickOpenHandlerRegistry } from '@theia/core/lib/browser';
export declare class QuickFileOpenFrontendContribution implements CommandContribution, KeybindingContribution, QuickOpenContribution {
    protected readonly quickFileOpenService: QuickFileOpenService;
    registerCommands(commands: CommandRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
}
//# sourceMappingURL=quick-file-open-contribution.d.ts.map
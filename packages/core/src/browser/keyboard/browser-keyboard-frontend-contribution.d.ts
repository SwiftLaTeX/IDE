/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { CommandContribution, CommandRegistry, Command } from '../../common/command';
import { QuickPickService, QuickPickItem } from '../../common/quick-pick-service';
import { BrowserKeyboardLayoutProvider, KeyboardLayoutData } from './browser-keyboard-layout-provider';
export declare namespace KeyboardCommands {
    const CHOOSE_KEYBOARD_LAYOUT: Command;
}
export declare class BrowserKeyboardFrontendContribution implements CommandContribution {
    protected readonly layoutProvider: BrowserKeyboardLayoutProvider;
    protected readonly quickPickService: QuickPickService;
    registerCommands(commandRegistry: CommandRegistry): void;
    protected chooseLayout(): Promise<KeyboardLayoutData | undefined>;
    protected toQuickPickValue(layout: KeyboardLayoutData, isCurrent: boolean): QuickPickItem<KeyboardLayoutData>;
}
//# sourceMappingURL=browser-keyboard-frontend-contribution.d.ts.map
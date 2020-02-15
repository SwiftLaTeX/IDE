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
import { FrontendApplicationContribution, StatusBar, FrontendApplication, KeybindingContribution, KeybindingRegistry, KeybindingContext } from '@theia/core/lib/browser';
import { Keybinding } from '@theia/core/lib/common/keybinding';
import { CommandContribution, CommandRegistry } from '@theia/core';
import { NotificationManager } from './notifications-manager';
import { NotificationsRenderer } from './notifications-renderer';
import { ColorContribution } from '@theia/core/lib/browser/color-application-contribution';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
export declare class NotificationsContribution implements FrontendApplicationContribution, CommandContribution, KeybindingContribution, ColorContribution {
    protected readonly id = "theia-notification-center";
    protected readonly manager: NotificationManager;
    protected readonly notificationsRenderer: NotificationsRenderer;
    protected readonly statusBar: StatusBar;
    onStart(_app: FrontendApplication): void;
    protected createStatusBarItem(): void;
    protected updateStatusBarItem(count?: number): void;
    protected getStatusBarItemText(count: number): string;
    protected getStatusBarItemTooltip(count: number): string;
    registerCommands(commands: CommandRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    registerColors(colors: ColorRegistry): void;
}
export declare class NotificationsKeybindingContext implements KeybindingContext {
    protected readonly manager: NotificationManager;
    readonly id = "notificationsVisible";
    isEnabled(_arg: Keybinding): boolean;
}
export declare namespace NotificationsKeybindingContext {
    const notificationsVisible = "notificationsVisible";
}
//# sourceMappingURL=notifications-contribution.d.ts.map
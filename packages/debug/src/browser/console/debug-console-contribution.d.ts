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
import { ConsoleOptions, ConsoleWidget } from '@theia/console/lib/browser/console-widget';
import { AbstractViewContribution, Widget } from '@theia/core/lib/browser';
import { ContextKey } from '@theia/core/lib/browser/context-key-service';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { Command, CommandRegistry } from '@theia/core/lib/common/command';
import { interfaces } from 'inversify';
import * as React from 'react';
import { DebugConsoleSession } from './debug-console-session';
export declare type InDebugReplContextKey = ContextKey<boolean>;
export declare const InDebugReplContextKey: unique symbol;
export declare namespace DebugConsoleCommands {
    const CLEAR: Command;
}
export declare class DebugConsoleContribution extends AbstractViewContribution<ConsoleWidget> implements TabBarToolbarContribution {
    protected debugConsoleSession: DebugConsoleSession;
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerToolbarItems(toolbarRegistry: TabBarToolbarRegistry): Promise<void>;
    static options: ConsoleOptions;
    static create(parent: interfaces.Container): ConsoleWidget;
    static bindContribution(bind: interfaces.Bind): void;
    protected renderSeveritySelector(widget: Widget | undefined): React.ReactNode;
    protected changeSeverity: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    protected withWidget<T>(widget: Widget | undefined, fn: (widget: ConsoleWidget) => T): T | false;
    /**
     * Clear the console widget.
     */
    protected clearConsole(): Promise<void>;
}
//# sourceMappingURL=debug-console-contribution.d.ts.map
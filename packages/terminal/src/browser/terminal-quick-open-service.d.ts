/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { QuickOpenModel, QuickOpenGroupItem, QuickOpenHandler, QuickOpenOptions, QuickOpenItemOptions, QuickOpenMode, PrefixQuickOpenService, QuickOpenContribution, QuickOpenHandlerRegistry } from '@theia/core/lib/browser';
import { CommandContribution, CommandRegistry, CommandService } from '@theia/core/lib/common';
import { TerminalWidget } from './base/terminal-widget';
import { TerminalService } from './base/terminal-service';
export declare class TerminalQuickOpenService implements QuickOpenModel, QuickOpenHandler {
    protected readonly prefixQuickOpenService: PrefixQuickOpenService;
    protected readonly commandService: CommandService;
    protected readonly terminalService: TerminalService;
    readonly prefix: string;
    get description(): string;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    open(): void;
    onType(lookFor: string, acceptor: (items: QuickOpenGroupItem[]) => void): Promise<void>;
    /**
     * Compare two terminal widgets by label. If labels are identical, compare by the widget id.
     * @param a `TerminalWidget` for comparison
     * @param b `TerminalWidget` for comparison
     */
    protected compareItems(a: TerminalWidget, b: TerminalWidget): number;
    /**
     * Get the function that can create a new terminal.
     * @param {TerminalWidget} widget - the terminal widget to be opened.
     * @returns Function that would create a new terminal if mode === QuickOpenMode.OPEN.
     */
    protected doCreateNewTerminal(): (mode: QuickOpenMode) => boolean;
    /**
     * Convert the terminal widget to the quick open item.
     * @param {TerminalWidget} widget - the terminal widget.
     * @returns The quick open group item.
     */
    protected toItem(widget: TerminalWidget): Promise<QuickOpenGroupItem<QuickOpenItemOptions>>;
    /**
     * Get the function that can open the editor file.
     * @param {TerminalWidget} widget - the terminal widget to be opened.
     * @returns Function that would open the terminal if mode === QuickOpenMode.OPEN.
     */
    protected getRunFunction(widget: TerminalWidget): (mode: QuickOpenMode) => boolean;
}
/**
 * TODO: merge it to TerminalFrontendContribution.
 */
export declare class TerminalQuickOpenContribution implements CommandContribution, QuickOpenContribution {
    protected readonly terminalQuickOpenService: TerminalQuickOpenService;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
    registerCommands(commands: CommandRegistry): void;
}
//# sourceMappingURL=terminal-quick-open-service.d.ts.map
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
import { CommandContribution, Command, CommandRegistry, MenuContribution, MenuModelRegistry, SelectionService, Emitter, Event } from '@theia/core/lib/common';
import { QuickPickService } from '@theia/core/lib/common/quick-pick-service';
import { ApplicationShell, KeybindingContribution, KeybindingRegistry, Widget, LabelProvider, WidgetOpenerOptions } from '@theia/core/lib/browser';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { WidgetManager } from '@theia/core/lib/browser';
import { TerminalService } from './base/terminal-service';
import { TerminalWidgetOptions, TerminalWidget } from './base/terminal-widget';
import { FileSystem } from '@theia/filesystem/lib/common';
import { ShellTerminalServerProxy } from '../common/shell-terminal-protocol';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import { ColorContribution } from '@theia/core/lib/browser/color-application-contribution';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
export declare namespace TerminalMenus {
    const TERMINAL: string[];
    const TERMINAL_NEW: string[];
    const TERMINAL_TASKS: string[];
    const TERMINAL_TASKS_INFO: string[];
    const TERMINAL_TASKS_CONFIG: string[];
    const TERMINAL_NAVIGATOR_CONTEXT_MENU: string[];
}
export declare namespace TerminalCommands {
    const NEW: Command;
    const NEW_ACTIVE_WORKSPACE: Command;
    const TERMINAL_CLEAR: Command;
    const TERMINAL_CONTEXT: Command;
    const SPLIT: Command;
    /**
     * Command that displays all terminals that are currently opened
     */
    const SHOW_ALL_OPENED_TERMINALS: Command;
}
export declare class TerminalFrontendContribution implements TerminalService, CommandContribution, MenuContribution, KeybindingContribution, TabBarToolbarContribution, ColorContribution {
    protected readonly shell: ApplicationShell;
    protected readonly shellTerminalServer: ShellTerminalServerProxy;
    protected readonly widgetManager: WidgetManager;
    protected readonly fileSystem: FileSystem;
    protected readonly selectionService: SelectionService;
    constructor(shell: ApplicationShell, shellTerminalServer: ShellTerminalServerProxy, widgetManager: WidgetManager, fileSystem: FileSystem, selectionService: SelectionService);
    protected readonly labelProvider: LabelProvider;
    protected readonly quickPick: QuickPickService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly onDidCreateTerminalEmitter: Emitter<TerminalWidget>;
    readonly onDidCreateTerminal: Event<TerminalWidget>;
    protected readonly onDidChangeCurrentTerminalEmitter: Emitter<TerminalWidget | undefined>;
    readonly onDidChangeCurrentTerminal: Event<TerminalWidget | undefined>;
    protected readonly contextKeyService: ContextKeyService;
    protected init(): void;
    protected _currentTerminal: TerminalWidget | undefined;
    get currentTerminal(): TerminalWidget | undefined;
    protected setCurrentTerminal(current: TerminalWidget | undefined): void;
    protected updateCurrentTerminal(): void;
    get all(): TerminalWidget[];
    getById(id: string): TerminalWidget | undefined;
    getDefaultShell(): Promise<string>;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerToolbarItems(toolbar: TabBarToolbarRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    newTerminal(options: TerminalWidgetOptions): Promise<TerminalWidget>;
    activateTerminal(widget: TerminalWidget, widgetOptions?: ApplicationShell.WidgetOptions): void;
    open(widget: TerminalWidget, options?: WidgetOpenerOptions): void;
    protected selectTerminalCwd(): Promise<string | undefined>;
    protected splitTerminal(widget?: Widget): Promise<void>;
    protected getTerminalRef(widget?: Widget): TerminalWidget | undefined;
    protected openTerminal(options?: ApplicationShell.WidgetOptions): Promise<void>;
    protected openActiveWorkspaceTerminal(options?: ApplicationShell.WidgetOptions): Promise<void>;
    /**
     * It should be aligned with https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     */
    registerColors(colors: ColorRegistry): void;
}
//# sourceMappingURL=terminal-frontend-contribution.d.ts.map
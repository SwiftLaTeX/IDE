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
import * as Xterm from 'xterm';
import { ContributionProvider, Event, Emitter, ILogger, DisposableCollection } from '@theia/core';
import { Widget, Message, WebSocketConnectionProvider, StatefulWidget } from '@theia/core/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { ShellTerminalServerProxy } from '../common/shell-terminal-protocol';
import { TerminalWatcher } from '../common/terminal-watcher';
import { TerminalWidgetOptions, TerminalWidget } from './base/terminal-widget';
import { MessageConnection } from 'vscode-jsonrpc';
import { Deferred } from '@theia/core/lib/common/promise-util';
import { TerminalPreferences } from './terminal-preferences';
import { TerminalContribution } from './terminal-contribution';
import URI from '@theia/core/lib/common/uri';
import { TerminalService } from './base/terminal-service';
import { TerminalCopyOnSelectionHandler } from './terminal-copy-on-selection-handler';
import { TerminalThemeService } from './terminal-theme-service';
export declare const TERMINAL_WIDGET_FACTORY_ID = "terminal";
export interface TerminalWidgetFactoryOptions extends Partial<TerminalWidgetOptions> {
    created: string;
}
export declare class TerminalWidgetImpl extends TerminalWidget implements StatefulWidget {
    private readonly TERMINAL;
    protected readonly onTermDidClose: Emitter<TerminalWidget>;
    protected terminalId: number;
    protected term: Xterm.Terminal;
    protected restored: boolean;
    protected closeOnDispose: boolean;
    protected waitForConnection: Deferred<MessageConnection> | undefined;
    protected hoverMessage: HTMLDivElement;
    protected lastTouchEnd: TouchEvent | undefined;
    protected readonly workspaceService: WorkspaceService;
    protected readonly webSocketConnectionProvider: WebSocketConnectionProvider;
    options: TerminalWidgetOptions;
    protected readonly shellTerminalServer: ShellTerminalServerProxy;
    protected readonly terminalWatcher: TerminalWatcher;
    protected readonly logger: ILogger;
    readonly id: string;
    protected readonly preferences: TerminalPreferences;
    protected readonly terminalContributionProvider: ContributionProvider<TerminalContribution>;
    protected readonly terminalService: TerminalService;
    protected readonly copyOnSelectionHandler: TerminalCopyOnSelectionHandler;
    protected readonly themeService: TerminalThemeService;
    protected readonly onDidOpenEmitter: Emitter<void>;
    readonly onDidOpen: Event<void>;
    protected readonly toDisposeOnConnect: DisposableCollection;
    protected init(): void;
    /**
     * Returns given renderer type if it is valid and supported or default renderer otherwise.
     *
     * @param terminalRendererType desired terminal renderer type
     */
    private getTerminalRendererType;
    showHoverMessage(x: number, y: number, message: string): void;
    hideHover(): void;
    getTerminal(): Xterm.Terminal;
    get cwd(): Promise<URI>;
    get processId(): Promise<number>;
    get lastTouchEndEvent(): TouchEvent | undefined;
    onDispose(onDispose: () => void): void;
    clearOutput(): void;
    hasChildProcesses(): Promise<boolean>;
    storeState(): object;
    restoreState(oldState: object): void;
    /**
     * Create a new shell terminal in the back-end and attach it to a
     * new terminal widget.
     * If id is provided attach to the terminal for this id.
     */
    start(id?: number): Promise<number>;
    protected attachTerminal(id: number): Promise<number>;
    protected createTerminal(): Promise<number>;
    processMessage(msg: Message): void;
    protected onFitRequest(msg: Message): void;
    protected onActivateRequest(msg: Message): void;
    protected onAfterShow(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
    protected onResize(msg: Widget.ResizeMessage): void;
    protected needsResize: boolean;
    protected onUpdateRequest(msg: Message): void;
    protected readonly deviceStatusCodes: Set<string>;
    protected connectTerminalProcess(): void;
    protected reconnectTerminalProcess(): Promise<void>;
    protected termOpened: boolean;
    protected initialData: string;
    protected open(): void;
    protected write(data: string): void;
    sendText(text: string): void;
    get onTerminalDidClose(): Event<TerminalWidget>;
    dispose(): void;
    protected resizeTerminal(): void;
    protected resizeTerminalProcess(): void;
    protected get enableCopy(): boolean;
    protected get enablePaste(): boolean;
    protected customKeyHandler(event: KeyboardEvent): boolean;
    protected get copyOnSelection(): boolean;
    protected attachCustomKeyEventHandler(): void;
}
//# sourceMappingURL=terminal-widget-impl.d.ts.map
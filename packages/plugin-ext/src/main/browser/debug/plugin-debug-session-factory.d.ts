/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { DefaultDebugSessionFactory } from '@theia/debug/lib/browser/debug-session-contribution';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';
import { EditorManager } from '@theia/editor/lib/browser/editor-manager';
import { BreakpointManager } from '@theia/debug/lib/browser/breakpoint/breakpoint-manager';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
import { MessageClient } from '@theia/core/lib/common/message-service-protocol';
import { OutputChannelManager } from '@theia/output/lib/common/output-channel';
import { DebugPreferences } from '@theia/debug/lib/browser/debug-preferences';
import { DebugSessionOptions } from '@theia/debug/lib/browser/debug-session-options';
import { DebugSession } from '@theia/debug/lib/browser/debug-session';
import { DebugSessionConnection } from '@theia/debug/lib/browser/debug-session-connection';
import { IWebSocket } from 'vscode-ws-jsonrpc/lib/socket/socket';
import { FileSystem } from '@theia/filesystem/lib/common';
import { TerminalWidgetOptions, TerminalWidget } from '@theia/terminal/lib/browser/base/terminal-widget';
import { TerminalOptionsExt } from '../../../common/plugin-api-rpc';
export declare class PluginDebugSession extends DebugSession {
    readonly id: string;
    readonly options: DebugSessionOptions;
    protected readonly connection: DebugSessionConnection;
    protected readonly terminalServer: TerminalService;
    protected readonly editorManager: EditorManager;
    protected readonly breakpoints: BreakpointManager;
    protected readonly labelProvider: LabelProvider;
    protected readonly messages: MessageClient;
    protected readonly fileSystem: FileSystem;
    protected readonly terminalOptionsExt: TerminalOptionsExt | undefined;
    constructor(id: string, options: DebugSessionOptions, connection: DebugSessionConnection, terminalServer: TerminalService, editorManager: EditorManager, breakpoints: BreakpointManager, labelProvider: LabelProvider, messages: MessageClient, fileSystem: FileSystem, terminalOptionsExt: TerminalOptionsExt | undefined);
    protected doCreateTerminal(terminalWidgetOptions: TerminalWidgetOptions): Promise<TerminalWidget>;
}
/**
 * Session factory for a client debug session that communicates with debug adapter contributed as plugin.
 * The main difference is to use a connection factory that creates [IWebSocket](#IWebSocket) over Rpc channel.
 */
export declare class PluginDebugSessionFactory extends DefaultDebugSessionFactory {
    protected readonly terminalService: TerminalService;
    protected readonly editorManager: EditorManager;
    protected readonly breakpoints: BreakpointManager;
    protected readonly labelProvider: LabelProvider;
    protected readonly messages: MessageClient;
    protected readonly outputChannelManager: OutputChannelManager;
    protected readonly debugPreferences: DebugPreferences;
    protected readonly connectionFactory: (sessionId: string) => Promise<IWebSocket>;
    protected readonly fileSystem: FileSystem;
    protected readonly terminalOptionsExt: TerminalOptionsExt | undefined;
    constructor(terminalService: TerminalService, editorManager: EditorManager, breakpoints: BreakpointManager, labelProvider: LabelProvider, messages: MessageClient, outputChannelManager: OutputChannelManager, debugPreferences: DebugPreferences, connectionFactory: (sessionId: string) => Promise<IWebSocket>, fileSystem: FileSystem, terminalOptionsExt: TerminalOptionsExt | undefined);
    get(sessionId: string, options: DebugSessionOptions): DebugSession;
}
//# sourceMappingURL=plugin-debug-session-factory.d.ts.map
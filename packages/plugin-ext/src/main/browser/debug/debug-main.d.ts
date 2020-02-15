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
import { interfaces } from 'inversify';
import { RPCProtocol } from '../../../common/rpc-protocol';
import { DebugMain } from '../../../common/plugin-api-rpc';
import { Breakpoint, WorkspaceFolder } from '../../../common/plugin-api-rpc-model';
import { DebugConfiguration } from '@theia/debug/lib/common/debug-configuration';
import { ConnectionMainImpl } from '../connection-main';
import { DebuggerDescription } from '@theia/debug/lib/common/debug-service';
import { DebugProtocol } from 'vscode-debugprotocol';
import { Disposable } from '@theia/core/lib/common/disposable';
export declare class DebugMainImpl implements DebugMain, Disposable {
    readonly connectionMain: ConnectionMainImpl;
    private readonly debugExt;
    private readonly sessionManager;
    private readonly labelProvider;
    private readonly editorManager;
    private readonly breakpointsManager;
    private readonly debugConsoleSession;
    private readonly configurationManager;
    private readonly terminalService;
    private readonly messages;
    private readonly outputChannelManager;
    private readonly debugPreferences;
    private readonly sessionContributionRegistrator;
    private readonly adapterContributionRegistrator;
    private readonly fileSystem;
    private readonly pluginService;
    private readonly debuggerContributions;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, connectionMain: ConnectionMainImpl, container: interfaces.Container);
    dispose(): void;
    $appendToDebugConsole(value: string): Promise<void>;
    $appendLineToDebugConsole(value: string): Promise<void>;
    $registerDebuggerContribution(description: DebuggerDescription): Promise<void>;
    $unregisterDebuggerConfiguration(debugType: string): Promise<void>;
    $addBreakpoints(breakpoints: Breakpoint[]): Promise<void>;
    $removeBreakpoints(breakpoints: string[]): Promise<void>;
    $customRequest(sessionId: string, command: string, args?: any): Promise<DebugProtocol.Response>;
    $startDebugging(folder: WorkspaceFolder | undefined, nameOrConfiguration: string | DebugConfiguration): Promise<boolean>;
    private toTheiaPluginApiBreakpoints;
    private toTheiaPluginApiBreakpoint;
}
//# sourceMappingURL=debug-main.d.ts.map
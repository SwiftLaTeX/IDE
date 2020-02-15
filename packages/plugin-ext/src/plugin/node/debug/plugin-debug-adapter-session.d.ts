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
import { CommunicationProvider } from '@theia/debug/lib/common/debug-model';
import { DebugAdapterSessionImpl } from '@theia/debug/lib/node/debug-adapter-session';
import * as theia from '@theia/plugin';
import { IWebSocket } from 'vscode-ws-jsonrpc/lib/socket/socket';
/**
 * Server debug adapter session.
 */
export declare class PluginDebugAdapterSession extends DebugAdapterSessionImpl implements theia.DebugSession {
    protected readonly communicationProvider: CommunicationProvider;
    protected readonly tracker: theia.DebugAdapterTracker;
    protected readonly theiaSession: theia.DebugSession;
    readonly type: string;
    readonly name: string;
    readonly configuration: theia.DebugConfiguration;
    constructor(communicationProvider: CommunicationProvider, tracker: theia.DebugAdapterTracker, theiaSession: theia.DebugSession);
    start(channel: IWebSocket): Promise<void>;
    stop(): Promise<void>;
    customRequest(command: string, args?: any): Promise<any>;
    protected onDebugAdapterError(error: Error): void;
    protected send(message: string): void;
    protected write(message: string): void;
    protected onDebugAdapterExit(exitCode: number, signal: string | undefined): void;
}
//# sourceMappingURL=plugin-debug-adapter-session.d.ts.map
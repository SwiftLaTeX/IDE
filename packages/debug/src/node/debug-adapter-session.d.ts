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
/// <reference types="node" />
import { CommunicationProvider, DebugAdapterSession } from '../common/debug-model';
import { IWebSocket } from 'vscode-ws-jsonrpc/lib/socket/socket';
/**
 * [DebugAdapterSession](#DebugAdapterSession) implementation.
 */
export declare class DebugAdapterSessionImpl implements DebugAdapterSession {
    readonly id: string;
    protected readonly communicationProvider: CommunicationProvider;
    private static TWO_CRLF;
    private static CONTENT_LENGTH;
    private readonly toDispose;
    private channel;
    private contentLength;
    private buffer;
    constructor(id: string, communicationProvider: CommunicationProvider);
    start(channel: IWebSocket): Promise<void>;
    protected onDebugAdapterExit(exitCode: number, signal: string | undefined): void;
    protected onDebugAdapterError(error: Error): void;
    protected handleData(data: Buffer): void;
    protected send(message: string): void;
    protected write(message: string): void;
    stop(): Promise<void>;
}
//# sourceMappingURL=debug-adapter-session.d.ts.map
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
/// <reference types="node" />
import * as net from 'net';
import * as cp from 'child_process';
import { Message } from 'vscode-ws-jsonrpc';
import { IConnection } from 'vscode-ws-jsonrpc/lib/server';
import { MaybePromise } from '@theia/core/lib/common';
import { LanguageContribution } from '../common';
import { RawProcess, RawProcessFactory } from '@theia/process/lib/node/raw-process';
import { ProcessManager } from '@theia/process/lib/node/process-manager';
import { ProcessErrorEvent } from '@theia/process/lib/node/process';
export { LanguageContribution, IConnection, Message };
export interface LanguageServerStartOptions {
    sessionId: string;
    parameters?: any;
}
export declare const LanguageServerContribution: unique symbol;
export interface LanguageServerContribution extends LanguageContribution {
    start(clientConnection: IConnection, options: LanguageServerStartOptions): MaybePromise<void>;
}
export declare abstract class BaseLanguageServerContribution implements LanguageServerContribution {
    abstract readonly id: string;
    abstract readonly name: string;
    protected readonly processFactory: RawProcessFactory;
    protected readonly processManager: ProcessManager;
    abstract start(clientConnection: IConnection, options: LanguageServerStartOptions): void;
    protected forward(clientConnection: IConnection, serverConnection: IConnection): void;
    protected map(message: Message): Message;
    protected createProcessSocketConnection(outSocket: MaybePromise<net.Socket>, inSocket: MaybePromise<net.Socket>, command: string, args?: string[], options?: cp.SpawnOptions): Promise<IConnection>;
    /**
     * @deprecated use `createProcessStreamConnectionAsync` instead.
     * Otherwise, the backend cannot notify the client if the LS has failed at start-up.
     */
    protected createProcessStreamConnection(command: string, args?: string[], options?: cp.SpawnOptions): IConnection;
    protected createProcessStreamConnectionAsync(command: string, args?: string[], options?: cp.SpawnOptions): Promise<IConnection>;
    /**
     * @deprecated use `spawnProcessAsync` instead.
     */
    protected spawnProcess(command: string, args?: string[], options?: cp.SpawnOptions): RawProcess;
    protected spawnProcessAsync(command: string, args?: string[], options?: cp.SpawnOptions): Promise<RawProcess>;
    protected onDidFailSpawnProcess(error: Error | ProcessErrorEvent): void;
    protected logError(data: string | Buffer): void;
    protected logInfo(data: string | Buffer): void;
    protected startSocketServer(): Promise<net.Server>;
    protected accept(server: net.Server): Promise<net.Socket>;
}
//# sourceMappingURL=language-server-contribution.d.ts.map
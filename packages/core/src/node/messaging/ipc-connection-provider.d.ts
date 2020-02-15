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
import * as cp from 'child_process';
import { MessageConnection } from 'vscode-jsonrpc';
import { ILogger, ConnectionErrorHandler, Disposable } from '../../common';
export interface ResolvedIPCConnectionOptions {
    readonly serverName: string;
    readonly entryPoint: string;
    readonly logger: ILogger;
    readonly args: string[];
    readonly errorHandler?: ConnectionErrorHandler;
    readonly env?: NodeJS.ProcessEnv;
}
export declare type IPCConnectionOptions = Partial<ResolvedIPCConnectionOptions> & {
    readonly serverName: string;
    readonly entryPoint: string;
};
export declare class IPCConnectionProvider {
    protected readonly logger: ILogger;
    listen(options: IPCConnectionOptions, acceptor: (connection: MessageConnection) => void): Disposable;
    protected doListen(options: ResolvedIPCConnectionOptions, acceptor: (connection: MessageConnection) => void): Disposable;
    protected createConnection(childProcess: cp.ChildProcess, options: ResolvedIPCConnectionOptions): MessageConnection;
    protected fork(options: ResolvedIPCConnectionOptions): cp.ChildProcess;
}
//# sourceMappingURL=ipc-connection-provider.d.ts.map
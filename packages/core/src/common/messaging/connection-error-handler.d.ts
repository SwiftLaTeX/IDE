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
import { Message } from 'vscode-jsonrpc';
import { ILogger } from '../../common';
export interface ResolvedConnectionErrorHandlerOptions {
    readonly serverName: string;
    readonly logger: ILogger;
    /**
     * The maximum amount of errors allowed before stopping the server.
     */
    readonly maxErrors: number;
    /**
     * The minimum amount of restarts allowed in the restart interval.
     */
    readonly maxRestarts: number;
    /**
     * In minutes.
     */
    readonly restartInterval: number;
}
export declare type ConnectionErrorHandlerOptions = Partial<ResolvedConnectionErrorHandlerOptions> & {
    readonly serverName: string;
    readonly logger: ILogger;
};
export declare class ConnectionErrorHandler {
    protected readonly options: ResolvedConnectionErrorHandlerOptions;
    constructor(options: ConnectionErrorHandlerOptions);
    shouldStop(error: Error, message?: Message, count?: number): boolean;
    protected readonly restarts: number[];
    shouldRestart(): boolean;
}
//# sourceMappingURL=connection-error-handler.d.ts.map
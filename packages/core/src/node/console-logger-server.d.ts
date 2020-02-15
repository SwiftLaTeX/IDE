/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
import { LoggerWatcher } from '../common/logger-watcher';
import { LogLevelCliContribution } from './logger-cli-contribution';
import { ILoggerServer, ILoggerClient } from '../common/logger-protocol';
export declare class ConsoleLoggerServer implements ILoggerServer {
    protected client: ILoggerClient | undefined;
    protected watcher: LoggerWatcher;
    protected cli: LogLevelCliContribution;
    protected init(): void;
    setLogLevel(name: string, newLogLevel: number): Promise<void>;
    getLogLevel(name: string): Promise<number>;
    log(name: string, logLevel: number, message: string, params: any[]): Promise<void>;
    child(name: string): Promise<void>;
    dispose(): void;
    setClient(client: ILoggerClient | undefined): void;
}
//# sourceMappingURL=console-logger-server.d.ts.map
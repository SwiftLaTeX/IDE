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
import { ILogger, Loggable } from '../logger';
export declare class MockLogger implements ILogger {
    setLogLevel(logLevel: number): Promise<void>;
    getLogLevel(): Promise<number>;
    isEnabled(logLevel: number): Promise<boolean>;
    ifEnabled(logLevel: number): Promise<void>;
    log(logLevel: number, arg2: string | Loggable | Error, ...params: any[]): Promise<void>;
    isTrace(): Promise<boolean>;
    ifTrace(): Promise<void>;
    trace(arg: string | Loggable, ...params: any[]): Promise<void>;
    isDebug(): Promise<boolean>;
    ifDebug(): Promise<void>;
    debug(arg: string | Loggable, ...params: any[]): Promise<void>;
    isInfo(): Promise<boolean>;
    ifInfo(): Promise<void>;
    info(arg: string | Loggable, ...params: any[]): Promise<void>;
    isWarn(): Promise<boolean>;
    ifWarn(): Promise<void>;
    warn(arg: string | Loggable, ...params: any[]): Promise<void>;
    isError(): Promise<boolean>;
    ifError(): Promise<void>;
    error(arg: string | Loggable | Error, ...params: any[]): Promise<void>;
    isFatal(): Promise<boolean>;
    ifFatal(): Promise<void>;
    fatal(arg: string | Loggable, ...params: any[]): Promise<void>;
    child(obj: Object): ILogger;
}
//# sourceMappingURL=mock-logger.d.ts.map
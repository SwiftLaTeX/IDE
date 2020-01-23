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

import { ILoggerServer, LogLevel, ILoggerClient, ConsoleLogger } from '../common/logger-protocol';
import { injectable } from 'inversify';

@injectable()
export class LoggerDummyServer implements ILoggerServer {
    private children: Map<string, number>;

    constructor() {
        this.children = new Map<string, number>();
    }

    setLogLevel(name: string, logLevel: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.children.set(name, logLevel);
            resolve();
        });
    }

    getLogLevel(name: string): Promise<number> {
        return new Promise((resolve, reject) => {
            let level = LogLevel.INFO;
            if (this.children.has(name)) {
                level = this.children.get(name)!;
            }
            resolve(level);
        });
    }
    // tslint:disable-next-line:no-any
    log(name: string, logLevel: number, message: any, params: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            let configuredLevel = LogLevel.INFO;
            if (this.children.has(name)) {
                configuredLevel = this.children.get(name)!;
            }
            if (logLevel >= configuredLevel) {
                ConsoleLogger.log(name, logLevel, message, params);
            }
            resolve();
        });
    }

    child(name: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.children.set(name, LogLevel.INFO);
            resolve();
        });
    }

    setClient(client: ILoggerClient | undefined): void {}

    dispose(): void { }
}

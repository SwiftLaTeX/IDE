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
import { ILogger } from '@theia/core/lib/common/logger';
import { ITerminalServer, ITerminalServerOptions } from '../common/terminal-protocol';
import { BaseTerminalServer } from './base-terminal-server';
import { TerminalProcessFactory, ProcessManager } from '@theia/process/lib/node';
export declare class TerminalServer extends BaseTerminalServer implements ITerminalServer {
    protected readonly terminalFactory: TerminalProcessFactory;
    protected readonly processManager: ProcessManager;
    protected readonly logger: ILogger;
    constructor(terminalFactory: TerminalProcessFactory, processManager: ProcessManager, logger: ILogger);
    create(options: ITerminalServerOptions): Promise<number>;
}
//# sourceMappingURL=terminal-server.d.ts.map
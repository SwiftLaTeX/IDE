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
import { IShellTerminalServerOptions } from '../common/shell-terminal-protocol';
import { BaseTerminalServer } from '../node/base-terminal-server';
import { ShellProcessFactory } from '../node/shell-process';
import { ProcessManager } from '@theia/process/lib/node';
export declare class ShellTerminalServer extends BaseTerminalServer {
    protected readonly shellFactory: ShellProcessFactory;
    constructor(shellFactory: ShellProcessFactory, processManager: ProcessManager, logger: ILogger);
    create(options: IShellTerminalServerOptions): Promise<number>;
    private spawnAsPromised;
    hasChildProcesses(processId: number | undefined): Promise<boolean>;
}
//# sourceMappingURL=shell-terminal-server.d.ts.map
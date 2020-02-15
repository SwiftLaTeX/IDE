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
import { ILogger, DisposableCollection } from '@theia/core/lib/common';
import { IBaseTerminalServer, IBaseTerminalServerOptions, IBaseTerminalClient } from '../common/base-terminal-protocol';
import { TerminalProcess, ProcessManager } from '@theia/process/lib/node';
export declare abstract class BaseTerminalServer implements IBaseTerminalServer {
    protected readonly processManager: ProcessManager;
    protected readonly logger: ILogger;
    protected client: IBaseTerminalClient | undefined;
    protected terminalToDispose: Map<number, DisposableCollection>;
    constructor(processManager: ProcessManager, logger: ILogger);
    abstract create(options: IBaseTerminalServerOptions): Promise<number>;
    attach(id: number): Promise<number>;
    getProcessId(id: number): Promise<number>;
    getCwdURI(id: number): Promise<string>;
    close(id: number): Promise<void>;
    getDefaultShell(): Promise<string>;
    dispose(): void;
    resize(id: number, cols: number, rows: number): Promise<void>;
    setClient(client: IBaseTerminalClient | undefined): void;
    protected postCreate(term: TerminalProcess): void;
}
//# sourceMappingURL=base-terminal-server.d.ts.map
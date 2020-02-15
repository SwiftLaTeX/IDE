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
import { TerminalProcess, ProcessManager, MultiRingBuffer } from '@theia/process/lib/node';
export declare const ShellProcessFactory: unique symbol;
export declare type ShellProcessFactory = (options: ShellProcessOptions) => ShellProcess;
export declare const ShellProcessOptions: unique symbol;
export interface ShellProcessOptions {
    shell?: string;
    args?: string[];
    rootURI?: string;
    cols?: number;
    rows?: number;
    env?: {
        [key: string]: string | null;
    };
}
export declare class ShellProcess extends TerminalProcess {
    protected static defaultCols: number;
    protected static defaultRows: number;
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    options: ShellProcessOptions, processManager: ProcessManager, ringBuffer: MultiRingBuffer, logger: ILogger);
    static getShellExecutablePath(): string;
    static getShellExecutableArgs(): string[];
}
//# sourceMappingURL=shell-process.d.ts.map
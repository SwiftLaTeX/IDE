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
/// <reference types="node" />
import { ProcessManager } from './process-manager';
import { ILogger } from '@theia/core/lib/common';
import { Process, ProcessOptions, ForkOptions } from './process';
import { ChildProcess } from 'child_process';
import * as stream from 'stream';
export { DevNullStream } from './dev-null-stream';
export declare const RawProcessOptions: unique symbol;
/**
 * Options to spawn a new process (`spawn`).
 *
 * For more information please refer to the spawn function of Node's
 * child_process module:
 *
 *   https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
 */
export interface RawProcessOptions extends ProcessOptions {
}
/**
 * Options to fork a new process using the current Node interpreter (`fork`).
 *
 * For more information please refer to the fork function of Node's
 * `child_process` module:
 *
 *   https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options
 */
export interface RawForkOptions extends ForkOptions {
}
export declare const RawProcessFactory: unique symbol;
export interface RawProcessFactory {
    (options: RawProcessOptions | RawForkOptions): RawProcess;
}
export declare class RawProcess extends Process {
    /**
     * @deprecated use `inputStream` instead.
     */
    get input(): stream.Writable;
    /**
     * @deprecated use `outputStream` instead.
     */
    get output(): stream.Readable;
    /**
     * @deprecated use `errorStream` instead.
     */
    get errorOutput(): stream.Readable;
    /**
     * If the process fails to launch, it will be undefined.
     */
    readonly process: ChildProcess | undefined;
    readonly outputStream: stream.Readable;
    readonly errorStream: stream.Readable;
    readonly inputStream: stream.Writable;
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    options: RawProcessOptions | RawForkOptions, processManager: ProcessManager, logger: ILogger);
    get pid(): number;
    kill(signal?: string): void;
}
//# sourceMappingURL=raw-process.d.ts.map
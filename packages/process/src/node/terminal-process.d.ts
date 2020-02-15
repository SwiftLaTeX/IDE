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
import { ILogger } from '@theia/core/lib/common';
import { Process, ProcessOptions } from './process';
import { RawProcessOptions } from './raw-process';
import { ProcessManager } from './process-manager';
import { IPty } from '@theia/node-pty';
import { MultiRingBuffer, MultiRingBufferReadableStream } from './multi-ring-buffer';
import { DevNullStream } from './dev-null-stream';
import { Writable } from 'stream';
export declare type QuotingType = 'escaped' | 'strong' | 'weak';
/**
 * A `RuntimeQuotingType` represents the different ways to quote
 * and escape a value in a given runtime (`sh`, `cmd`, etc...).
 */
export declare type RuntimeQuotingTypes = {
    [key in QuotingType]: string;
} & {
    shouldBeEscaped?: string[];
};
export declare const ShellQuoting: RuntimeQuotingTypes;
/**
 * Map of `Runtime (string) -> ShellQuoting`, trying to cover the
 * different ways in which each runtime manages quoting and escaping.
 */
export declare const RuntimeQuotingMap: {
    [key in string]: RuntimeQuotingTypes | undefined;
};
/**
 * Struct describing how a string should be quoted.
 * To be used when sanitizing arguments for a shell task.
 */
export interface QuotedString {
    value: string;
    quoting: QuotingType;
}
export declare const TerminalProcessOptions: unique symbol;
export interface TerminalProcessOptions extends ProcessOptions<string | QuotedString> {
    options?: {
        shell?: {
            executable: string;
            args: string[];
        } | boolean;
    };
}
export declare const TerminalProcessFactory: unique symbol;
export interface TerminalProcessFactory {
    (options: TerminalProcessOptions): TerminalProcess;
}
export declare class TerminalProcess extends Process {
    protected readonly ringBuffer: MultiRingBuffer;
    /**
     * Resolve the exec options based on type (shell/process).
     *
     * @param options
     */
    protected static resolveExecOptions(options: TerminalProcessOptions): RawProcessOptions;
    /**
     * Terminal options accept a special argument format when executing in a shell:
     * Arguments can be of the form: { value: string, quoting: string }, specifying
     * how the arg should be quoted/escaped in the shell command.
     *
     * @param options
     */
    protected static normalizeProcessOptions(options: TerminalProcessOptions): RawProcessOptions;
    /**
     * Build the shell execution options (`runtime ...exec-argv "command ...argv"`).
     *
     * @param options
     */
    protected static createShellOptions(options: TerminalProcessOptions): RawProcessOptions;
    protected readonly terminal: IPty | undefined;
    readonly outputStream: MultiRingBufferReadableStream;
    readonly errorStream: DevNullStream;
    readonly inputStream: Writable;
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    options: TerminalProcessOptions, processManager: ProcessManager, ringBuffer: MultiRingBuffer, logger: ILogger);
    createOutputStream(): MultiRingBufferReadableStream;
    get pid(): number;
    kill(signal?: string): void;
    resize(cols: number, rows: number): void;
    write(data: string): void;
    protected checkTerminal(): void | never;
}
//# sourceMappingURL=terminal-process.d.ts.map
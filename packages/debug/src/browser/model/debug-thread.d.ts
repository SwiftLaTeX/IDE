/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import * as React from 'react';
import { Event, Emitter } from '@theia/core';
import { DebugProtocol } from 'vscode-debugprotocol/lib/debugProtocol';
import { TreeElement } from '@theia/core/lib/browser/source-tree';
import { DebugStackFrame } from './debug-stack-frame';
import { DebugSession } from '../debug-session';
export declare type StoppedDetails = DebugProtocol.StoppedEvent['body'] & {
    framesErrorMessage?: string;
    totalFrames?: number;
};
export declare class DebugThreadData {
    readonly raw: DebugProtocol.Thread;
    readonly stoppedDetails: StoppedDetails | undefined;
}
export interface DebugExceptionInfo {
    id?: string;
    description?: string;
    details?: DebugProtocol.ExceptionDetails;
}
export declare class DebugThread extends DebugThreadData implements TreeElement {
    readonly session: DebugSession;
    protected readonly onDidChangedEmitter: Emitter<void>;
    readonly onDidChanged: Event<void>;
    constructor(session: DebugSession);
    get id(): string;
    protected _currentFrame: DebugStackFrame | undefined;
    get currentFrame(): DebugStackFrame | undefined;
    set currentFrame(frame: DebugStackFrame | undefined);
    get stopped(): boolean;
    update(data: Partial<DebugThreadData>): void;
    clear(): void;
    continue(): Promise<DebugProtocol.ContinueResponse>;
    stepOver(): Promise<DebugProtocol.NextResponse>;
    stepIn(): Promise<DebugProtocol.StepInResponse>;
    stepOut(): Promise<DebugProtocol.StepOutResponse>;
    pause(): Promise<DebugProtocol.PauseResponse>;
    getExceptionInfo(): Promise<DebugExceptionInfo | undefined>;
    get supportsTerminate(): boolean;
    terminate(): Promise<void>;
    protected readonly _frames: Map<number, DebugStackFrame>;
    get frames(): IterableIterator<DebugStackFrame>;
    get topFrame(): DebugStackFrame | undefined;
    get frameCount(): number;
    protected pendingFetch: Promise<DebugStackFrame[]>;
    fetchFrames(levels?: number): Promise<DebugStackFrame[]>;
    protected doFetchFrames(startFrame: number, levels: number): Promise<DebugProtocol.StackFrame[]>;
    protected doUpdateFrames(frames: DebugProtocol.StackFrame[]): DebugStackFrame[];
    protected clearFrames(): void;
    protected updateCurrentFrame(): void;
    protected toArgs<T extends object>(arg?: T): {
        threadId: number;
    } & T;
    render(): React.ReactNode;
}
//# sourceMappingURL=debug-thread.d.ts.map
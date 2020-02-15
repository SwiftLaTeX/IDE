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
import { Disposable, DisposableCollection, Event, Emitter } from '@theia/core/lib/common';
import URI from '@theia/core/lib/common/uri';
import { DebugSession, DebugState } from '../debug-session';
import { DebugSessionManager } from '../debug-session-manager';
import { DebugThread } from '../model/debug-thread';
import { DebugStackFrame } from '../model/debug-stack-frame';
import { DebugSourceBreakpoint } from '../model/debug-source-breakpoint';
import { DebugWatchExpression } from './debug-watch-expression';
import { DebugWatchManager } from '../debug-watch-manager';
import { DebugFunctionBreakpoint } from '../model/debug-function-breakpoint';
export declare const DebugViewOptions: unique symbol;
export interface DebugViewOptions {
    session?: DebugSession;
}
export declare class DebugViewModel implements Disposable {
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: Event<void>;
    protected fireDidChange(): void;
    protected readonly onDidChangeBreakpointsEmitter: Emitter<URI>;
    readonly onDidChangeBreakpoints: Event<URI>;
    protected fireDidChangeBreakpoints(uri: URI): void;
    protected readonly _watchExpressions: Map<number, DebugWatchExpression>;
    protected readonly onDidChangeWatchExpressionsEmitter: Emitter<void>;
    readonly onDidChangeWatchExpressions: Event<void>;
    protected fireDidChangeWatchExpressions(): void;
    protected readonly toDispose: DisposableCollection;
    protected readonly options: DebugViewOptions;
    protected readonly manager: DebugSessionManager;
    protected readonly watch: DebugWatchManager;
    protected readonly _sessions: Set<DebugSession>;
    get sessions(): IterableIterator<DebugSession>;
    get sessionCount(): number;
    push(session: DebugSession): void;
    delete(session: DebugSession): boolean;
    get session(): DebugSession | undefined;
    get id(): string;
    get label(): string;
    has(session: DebugSession | undefined): session is DebugSession;
    protected init(): void;
    dispose(): void;
    get currentSession(): DebugSession | undefined;
    set currentSession(currentSession: DebugSession | undefined);
    get state(): DebugState;
    get currentThread(): DebugThread | undefined;
    get currentFrame(): DebugStackFrame | undefined;
    get breakpoints(): DebugSourceBreakpoint[];
    get functionBreakpoints(): DebugFunctionBreakpoint[];
    start(): Promise<void>;
    restart(): Promise<void>;
    get watchExpressions(): IterableIterator<DebugWatchExpression>;
    addWatchExpression(expression?: string): Promise<DebugWatchExpression | undefined>;
    removeWatchExpressions(): void;
    removeWatchExpression(expression: DebugWatchExpression): void;
    protected updateWatchExpressions(): void;
    protected refreshWatchExpressionsQueue: Promise<void>;
    protected refreshWatchExpressions: () => Promise<void>;
}
//# sourceMappingURL=debug-view-model.d.ts.map
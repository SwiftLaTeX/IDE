/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { DisposableCollection, Emitter, Event, MessageService, ProgressService, WaitUntilEvent } from '@theia/core';
import { LabelProvider } from '@theia/core/lib/browser';
import { ContextKey, ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import URI from '@theia/core/lib/common/uri';
import { EditorManager } from '@theia/editor/lib/browser';
import { QuickOpenTask } from '@theia/task/lib/browser/quick-open-task';
import { TaskService } from '@theia/task/lib/browser/task-service';
import { VariableResolverService } from '@theia/variable-resolver/lib/browser';
import { DebugConfiguration } from '../common/debug-common';
import { DebugService } from '../common/debug-service';
import { BreakpointManager } from './breakpoint/breakpoint-manager';
import { DebugConfigurationManager } from './debug-configuration-manager';
import { DebugSession, DebugState } from './debug-session';
import { DebugSessionContributionRegistry, DebugSessionFactory } from './debug-session-contribution';
import { DebugSessionOptions, InternalDebugSessionOptions } from './debug-session-options';
import { DebugStackFrame } from './model/debug-stack-frame';
import { DebugThread } from './model/debug-thread';
import { TaskIdentifier } from '@theia/task/lib/common';
import { DebugSourceBreakpoint } from './model/debug-source-breakpoint';
import { DebugFunctionBreakpoint } from './model/debug-function-breakpoint';
export interface WillStartDebugSession extends WaitUntilEvent {
}
export interface WillResolveDebugConfiguration extends WaitUntilEvent {
    debugType: string;
}
export interface DidChangeActiveDebugSession {
    previous: DebugSession | undefined;
    current: DebugSession | undefined;
}
export interface DidChangeBreakpointsEvent {
    session?: DebugSession;
    uri: URI;
}
export interface DebugSessionCustomEvent {
    readonly body?: any;
    readonly event: string;
    readonly session: DebugSession;
}
export declare class DebugSessionManager {
    protected readonly _sessions: Map<string, DebugSession>;
    protected readonly onWillStartDebugSessionEmitter: Emitter<WillStartDebugSession>;
    readonly onWillStartDebugSession: Event<WillStartDebugSession>;
    protected readonly onWillResolveDebugConfigurationEmitter: Emitter<WillResolveDebugConfiguration>;
    readonly onWillResolveDebugConfiguration: Event<WillResolveDebugConfiguration>;
    protected readonly onDidCreateDebugSessionEmitter: Emitter<DebugSession>;
    readonly onDidCreateDebugSession: Event<DebugSession>;
    protected readonly onDidStartDebugSessionEmitter: Emitter<DebugSession>;
    readonly onDidStartDebugSession: Event<DebugSession>;
    protected readonly onDidStopDebugSessionEmitter: Emitter<DebugSession>;
    readonly onDidStopDebugSession: Event<DebugSession>;
    protected readonly onDidChangeActiveDebugSessionEmitter: Emitter<DidChangeActiveDebugSession>;
    readonly onDidChangeActiveDebugSession: Event<DidChangeActiveDebugSession>;
    protected readonly onDidDestroyDebugSessionEmitter: Emitter<DebugSession>;
    readonly onDidDestroyDebugSession: Event<DebugSession>;
    protected readonly onDidReceiveDebugSessionCustomEventEmitter: Emitter<DebugSessionCustomEvent>;
    readonly onDidReceiveDebugSessionCustomEvent: Event<DebugSessionCustomEvent>;
    protected readonly onDidChangeBreakpointsEmitter: Emitter<DidChangeBreakpointsEvent>;
    readonly onDidChangeBreakpoints: Event<DidChangeBreakpointsEvent>;
    protected fireDidChangeBreakpoints(event: DidChangeBreakpointsEvent): void;
    protected readonly onDidChangeEmitter: Emitter<DebugSession | undefined>;
    readonly onDidChange: Event<DebugSession | undefined>;
    protected fireDidChange(current: DebugSession | undefined): void;
    protected readonly debugSessionFactory: DebugSessionFactory;
    protected readonly debug: DebugService;
    protected readonly labelProvider: LabelProvider;
    protected readonly editorManager: EditorManager;
    protected readonly breakpoints: BreakpointManager;
    protected readonly variableResolver: VariableResolverService;
    protected readonly sessionContributionRegistry: DebugSessionContributionRegistry;
    protected readonly messageService: MessageService;
    protected readonly progressService: ProgressService;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly taskService: TaskService;
    protected readonly debugConfigurationManager: DebugConfigurationManager;
    protected readonly quickOpenTask: QuickOpenTask;
    protected debugTypeKey: ContextKey<string>;
    protected inDebugModeKey: ContextKey<boolean>;
    protected init(): void;
    get inDebugMode(): boolean;
    start(options: DebugSessionOptions): Promise<DebugSession | undefined>;
    protected fireWillStartDebugSession(): Promise<void>;
    protected configurationIds: Map<string, number>;
    protected resolveConfiguration(options: Readonly<DebugSessionOptions>): Promise<InternalDebugSessionOptions>;
    protected resolveDebugConfiguration(configuration: DebugConfiguration, workspaceFolderUri: string | undefined): Promise<DebugConfiguration>;
    protected fireWillResolveDebugConfiguration(debugType: string): Promise<void>;
    protected doStart(sessionId: string, options: DebugSessionOptions): Promise<DebugSession>;
    restart(): Promise<DebugSession | undefined>;
    restart(session: DebugSession): Promise<DebugSession>;
    protected doRestart(session: DebugSession, restart?: any): Promise<DebugSession | undefined>;
    protected remove(sessionId: string): void;
    getSession(sessionId: string): DebugSession | undefined;
    get sessions(): DebugSession[];
    protected _currentSession: DebugSession | undefined;
    protected readonly toDisposeOnCurrentSession: DisposableCollection;
    get currentSession(): DebugSession | undefined;
    set currentSession(current: DebugSession | undefined);
    open(): void;
    protected updateBreakpoints(previous: DebugSession | undefined, current: DebugSession | undefined): void;
    protected updateCurrentSession(session: DebugSession | undefined): void;
    get currentThread(): DebugThread | undefined;
    get state(): DebugState;
    get currentFrame(): DebugStackFrame | undefined;
    get topFrame(): DebugStackFrame | undefined;
    /**
     * Destroy the debug session. If session identifier isn't provided then
     * all active debug session will be destroyed.
     * @param sessionId The session identifier
     */
    destroy(sessionId?: string): void;
    private doDestroy;
    getFunctionBreakpoints(session?: DebugSession | undefined): DebugFunctionBreakpoint[];
    getBreakpoints(session?: DebugSession): DebugSourceBreakpoint[];
    getBreakpoints(uri: URI, session?: DebugSession): DebugSourceBreakpoint[];
    getLineBreakpoints(uri: URI, line: number): DebugSourceBreakpoint[];
    getInlineBreakpoint(uri: URI, line: number, column: number): DebugSourceBreakpoint | undefined;
    /**
     * Runs the given tasks.
     * @param taskName the task name to run, see [TaskNameResolver](#TaskNameResolver)
     * @return true if it allowed to continue debugging otherwise it returns false
     */
    protected runTask(workspaceFolderUri: string | undefined, taskName: string | TaskIdentifier | undefined, checkErrors?: boolean): Promise<boolean>;
    protected doPostTaskAction(errorMessage: string): Promise<boolean>;
}
//# sourceMappingURL=debug-session-manager.d.ts.map
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
import { DebugProtocol } from 'vscode-debugprotocol';
import { Event, Emitter, DisposableCollection, Disposable } from '@theia/core';
import { OutputChannel } from '@theia/output/lib/common/output-channel';
import { IWebSocket } from 'vscode-ws-jsonrpc/lib/socket/socket';
export interface DebugExitEvent {
    code?: number;
    reason?: string | Error;
}
export declare type DebugRequestHandler = (request: DebugProtocol.Request) => any;
export interface DebugRequestTypes {
    'attach': [DebugProtocol.AttachRequestArguments, DebugProtocol.AttachResponse];
    'completions': [DebugProtocol.CompletionsArguments, DebugProtocol.CompletionsResponse];
    'configurationDone': [DebugProtocol.ConfigurationDoneArguments, DebugProtocol.ConfigurationDoneResponse];
    'continue': [DebugProtocol.ContinueArguments, DebugProtocol.ContinueResponse];
    'disconnect': [DebugProtocol.DisconnectArguments, DebugProtocol.DisconnectResponse];
    'evaluate': [DebugProtocol.EvaluateArguments, DebugProtocol.EvaluateResponse];
    'exceptionInfo': [DebugProtocol.ExceptionInfoArguments, DebugProtocol.ExceptionInfoResponse];
    'goto': [DebugProtocol.GotoArguments, DebugProtocol.GotoResponse];
    'gotoTargets': [DebugProtocol.GotoTargetsArguments, DebugProtocol.GotoTargetsResponse];
    'initialize': [DebugProtocol.InitializeRequestArguments, DebugProtocol.InitializeResponse];
    'launch': [DebugProtocol.LaunchRequestArguments, DebugProtocol.LaunchResponse];
    'loadedSources': [DebugProtocol.LoadedSourcesArguments, DebugProtocol.LoadedSourcesResponse];
    'modules': [DebugProtocol.ModulesArguments, DebugProtocol.ModulesResponse];
    'next': [DebugProtocol.NextArguments, DebugProtocol.NextResponse];
    'pause': [DebugProtocol.PauseArguments, DebugProtocol.PauseResponse];
    'restart': [DebugProtocol.RestartArguments, DebugProtocol.RestartResponse];
    'restartFrame': [DebugProtocol.RestartFrameArguments, DebugProtocol.RestartFrameResponse];
    'reverseContinue': [DebugProtocol.ReverseContinueArguments, DebugProtocol.ReverseContinueResponse];
    'scopes': [DebugProtocol.ScopesArguments, DebugProtocol.ScopesResponse];
    'setBreakpoints': [DebugProtocol.SetBreakpointsArguments, DebugProtocol.SetBreakpointsResponse];
    'setExceptionBreakpoints': [DebugProtocol.SetExceptionBreakpointsArguments, DebugProtocol.SetExceptionBreakpointsResponse];
    'setExpression': [DebugProtocol.SetExpressionArguments, DebugProtocol.SetExpressionResponse];
    'setFunctionBreakpoints': [DebugProtocol.SetFunctionBreakpointsArguments, DebugProtocol.SetFunctionBreakpointsResponse];
    'setVariable': [DebugProtocol.SetVariableArguments, DebugProtocol.SetVariableResponse];
    'source': [DebugProtocol.SourceArguments, DebugProtocol.SourceResponse];
    'stackTrace': [DebugProtocol.StackTraceArguments, DebugProtocol.StackTraceResponse];
    'stepBack': [DebugProtocol.StepBackArguments, DebugProtocol.StepBackResponse];
    'stepIn': [DebugProtocol.StepInArguments, DebugProtocol.StepInResponse];
    'stepInTargets': [DebugProtocol.StepInTargetsArguments, DebugProtocol.StepInTargetsResponse];
    'stepOut': [DebugProtocol.StepOutArguments, DebugProtocol.StepOutResponse];
    'terminate': [DebugProtocol.TerminateArguments, DebugProtocol.TerminateResponse];
    'terminateThreads': [DebugProtocol.TerminateThreadsArguments, DebugProtocol.TerminateThreadsResponse];
    'threads': [{}, DebugProtocol.ThreadsResponse];
    'variables': [DebugProtocol.VariablesArguments, DebugProtocol.VariablesResponse];
}
export interface DebugEventTypes {
    'breakpoint': DebugProtocol.BreakpointEvent;
    'capabilities': DebugProtocol.CapabilitiesEvent;
    'continued': DebugProtocol.ContinuedEvent;
    'exited': DebugExitEvent;
    'initialized': DebugProtocol.InitializedEvent;
    'loadedSource': DebugProtocol.LoadedSourceEvent;
    'module': DebugProtocol.ModuleEvent;
    'output': DebugProtocol.OutputEvent;
    'process': DebugProtocol.ProcessEvent;
    'stopped': DebugProtocol.StoppedEvent;
    'terminated': DebugProtocol.TerminatedEvent;
    'thread': DebugProtocol.ThreadEvent;
}
export declare class DebugSessionConnection implements Disposable {
    readonly sessionId: string;
    protected readonly connectionFactory: (sessionId: string) => Promise<IWebSocket>;
    protected readonly traceOutputChannel: OutputChannel | undefined;
    private sequence;
    protected readonly pendingRequests: Map<number, (response: DebugProtocol.Response) => void>;
    protected readonly connection: Promise<IWebSocket>;
    protected readonly requestHandlers: Map<string, DebugRequestHandler>;
    protected readonly onDidCustomEventEmitter: Emitter<DebugProtocol.Event>;
    readonly onDidCustomEvent: Event<DebugProtocol.Event>;
    protected readonly toDispose: DisposableCollection;
    constructor(sessionId: string, connectionFactory: (sessionId: string) => Promise<IWebSocket>, traceOutputChannel: OutputChannel | undefined);
    get disposed(): boolean;
    protected checkDisposed(): void;
    dispose(): void;
    protected createConnection(): Promise<IWebSocket>;
    protected allThreadsContinued: boolean;
    sendRequest<K extends keyof DebugRequestTypes>(command: K, args: DebugRequestTypes[K][0]): Promise<DebugRequestTypes[K][1]>;
    sendCustomRequest<T extends DebugProtocol.Response>(command: string, args?: any): Promise<T>;
    protected doSendRequest<K extends DebugProtocol.Response>(command: string, args?: any): Promise<K>;
    protected send(message: DebugProtocol.ProtocolMessage): Promise<void>;
    protected handleMessage(data: string): void;
    protected handleResponse(response: DebugProtocol.Response): void;
    onRequest(command: string, handler: DebugRequestHandler): void;
    protected handleRequest(request: DebugProtocol.Request): Promise<void>;
    protected handleEvent(event: DebugProtocol.Event): void;
    protected readonly emitters: Map<string, Emitter<DebugExitEvent | DebugProtocol.Event>>;
    on<K extends keyof DebugEventTypes>(kind: K, listener: (e: DebugEventTypes[K]) => any): Disposable;
    protected fire<K extends keyof DebugEventTypes>(kind: K, e: DebugEventTypes[K]): void;
    protected doFire(kind: string, e: DebugProtocol.Event | DebugExitEvent): void;
    protected getEmitter(kind: string): Emitter<DebugProtocol.Event | DebugExitEvent>;
    protected newEmitter(): Emitter<DebugProtocol.Event | DebugExitEvent>;
    protected fireContinuedEvent(threadId: number, allThreadsContinued?: boolean): void;
}
//# sourceMappingURL=debug-session-connection.d.ts.map
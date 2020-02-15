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
import * as React from 'react';
import { LabelProvider } from '@theia/core/lib/browser';
import { DebugProtocol } from 'vscode-debugprotocol';
import { Emitter, Event, DisposableCollection, Disposable, MessageClient } from '@theia/core/lib/common';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';
import { EditorManager } from '@theia/editor/lib/browser';
import { CompositeTreeElement } from '@theia/core/lib/browser/source-tree';
import { DebugSessionConnection, DebugRequestTypes, DebugEventTypes } from './debug-session-connection';
import { DebugThread, StoppedDetails } from './model/debug-thread';
import { DebugScope } from './console/debug-console-items';
import { DebugStackFrame } from './model/debug-stack-frame';
import { DebugSource } from './model/debug-source';
import { DebugBreakpoint, DebugBreakpointOptions } from './model/debug-breakpoint';
import { DebugSourceBreakpoint } from './model/debug-source-breakpoint';
import URI from '@theia/core/lib/common/uri';
import { BreakpointManager } from './breakpoint/breakpoint-manager';
import { DebugSessionOptions } from './debug-session-options';
import { DebugConfiguration } from '../common/debug-common';
import { FileSystem } from '@theia/filesystem/lib/common';
import { TerminalWidgetOptions, TerminalWidget } from '@theia/terminal/lib/browser/base/terminal-widget';
import { DebugFunctionBreakpoint } from './model/debug-function-breakpoint';
export declare enum DebugState {
    Inactive = 0,
    Initializing = 1,
    Running = 2,
    Stopped = 3
}
export declare class DebugSession implements CompositeTreeElement {
    readonly id: string;
    readonly options: DebugSessionOptions;
    protected readonly connection: DebugSessionConnection;
    protected readonly terminalServer: TerminalService;
    protected readonly editorManager: EditorManager;
    protected readonly breakpoints: BreakpointManager;
    protected readonly labelProvider: LabelProvider;
    protected readonly messages: MessageClient;
    protected readonly fileSystem: FileSystem;
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: Event<void>;
    protected fireDidChange(): void;
    protected readonly onDidChangeBreakpointsEmitter: Emitter<URI>;
    readonly onDidChangeBreakpoints: Event<URI>;
    protected fireDidChangeBreakpoints(uri: URI): void;
    protected readonly toDispose: DisposableCollection;
    constructor(id: string, options: DebugSessionOptions, connection: DebugSessionConnection, terminalServer: TerminalService, editorManager: EditorManager, breakpoints: BreakpointManager, labelProvider: LabelProvider, messages: MessageClient, fileSystem: FileSystem);
    dispose(): void;
    get configuration(): DebugConfiguration;
    protected _capabilities: DebugProtocol.Capabilities;
    get capabilities(): DebugProtocol.Capabilities;
    protected readonly sources: Map<string, DebugSource>;
    getSource(raw: DebugProtocol.Source): DebugSource;
    getSourceForUri(uri: URI): DebugSource | undefined;
    toSource(uri: URI): Promise<DebugSource>;
    toDebugSource(uri: URI): Promise<DebugProtocol.Source>;
    protected _threads: Map<number, DebugThread>;
    get threads(): IterableIterator<DebugThread>;
    get threadCount(): number;
    getThreads(filter: (thread: DebugThread) => boolean): IterableIterator<DebugThread>;
    get runningThreads(): IterableIterator<DebugThread>;
    get stoppedThreads(): IterableIterator<DebugThread>;
    pauseAll(): Promise<void>;
    continueAll(): Promise<void>;
    get currentFrame(): DebugStackFrame | undefined;
    protected _currentThread: DebugThread | undefined;
    protected readonly toDisposeOnCurrentThread: DisposableCollection;
    get currentThread(): DebugThread | undefined;
    set currentThread(thread: DebugThread | undefined);
    get state(): DebugState;
    getScopes(): Promise<DebugScope[]>;
    start(): Promise<void>;
    protected initialize(): Promise<void>;
    protected launchOrAttach(): Promise<void>;
    protected initialized: boolean;
    protected configure(): Promise<void>;
    protected terminated: boolean;
    terminate(restart?: boolean): Promise<void>;
    protected disconnect(restart?: boolean): Promise<void>;
    protected fireExited(reason?: Error): void;
    protected exited(timeout: number): Promise<boolean>;
    restart(): Promise<boolean>;
    completions(text: string, column: number, line: number): Promise<DebugProtocol.CompletionItem[]>;
    evaluate(expression: string, context?: string): Promise<DebugProtocol.EvaluateResponse['body']>;
    sendRequest<K extends keyof DebugRequestTypes>(command: K, args: DebugRequestTypes[K][0]): Promise<DebugRequestTypes[K][1]>;
    sendCustomRequest<T extends DebugProtocol.Response>(command: string, args?: any): Promise<T>;
    on<K extends keyof DebugEventTypes>(kind: K, listener: (e: DebugEventTypes[K]) => any): Disposable;
    get onDidCustomEvent(): Event<DebugProtocol.Event>;
    protected runInTerminal({ arguments: { title, cwd, args, env } }: DebugProtocol.RunInTerminalRequest): Promise<DebugProtocol.RunInTerminalResponse['body']>;
    protected doCreateTerminal(options: TerminalWidgetOptions): Promise<TerminalWidget>;
    protected clearThreads(): void;
    protected clearThread(threadId: number): void;
    protected readonly scheduleUpdateThreads: () => Promise<void>;
    protected pendingThreads: Promise<void>;
    updateThreads(stoppedDetails: StoppedDetails | undefined): Promise<void>;
    protected doUpdateThreads(threads: DebugProtocol.Thread[], stoppedDetails?: StoppedDetails): void;
    protected updateCurrentThread(stoppedDetails?: StoppedDetails): void;
    protected updateFrames(): Promise<void>;
    protected updateCapabilities(capabilities: DebugProtocol.Capabilities): void;
    protected readonly _breakpoints: Map<string, DebugBreakpoint<import("./breakpoint/breakpoint-marker").BaseBreakpoint>[]>;
    get breakpointUris(): IterableIterator<string>;
    getSourceBreakpoints(uri?: URI): DebugSourceBreakpoint[];
    getFunctionBreakpoints(): DebugFunctionBreakpoint[];
    getBreakpoints(uri?: URI): DebugBreakpoint[];
    protected clearBreakpoints(): void;
    protected updatingBreakpoints: boolean;
    protected updateBreakpoint(body: DebugProtocol.BreakpointEvent['body']): void;
    protected findBreakpoint(match: (breakpoint: DebugBreakpoint) => boolean): DebugBreakpoint | undefined;
    protected updateBreakpoints(options: {
        uri?: URI;
        sourceModified: boolean;
    }): Promise<void>;
    protected sendExceptionBreakpoints(): Promise<void>;
    protected sendFunctionBreakpoints(affectedUri: URI): Promise<void>;
    protected sendSourceBreakpoints(affectedUri: URI, sourceModified?: boolean): Promise<void>;
    protected setBreakpoints(uri: URI, breakpoints: DebugBreakpoint[]): void;
    protected setSourceBreakpoints(uri: URI, breakpoints: DebugSourceBreakpoint[]): void;
    protected dedupSourceBreakpoints(all: DebugSourceBreakpoint[]): DebugSourceBreakpoint[];
    protected getAffectedUris(uri?: URI): IterableIterator<URI>;
    protected asDebugBreakpointOptions(): DebugBreakpointOptions;
    get label(): string;
    get visible(): boolean;
    render(): React.ReactNode;
    getElements(): IterableIterator<DebugThread>;
}
//# sourceMappingURL=debug-session.d.ts.map
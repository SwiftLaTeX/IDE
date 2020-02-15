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
import { MessageClient } from '@theia/core/lib/common';
import { LabelProvider } from '@theia/core/lib/browser';
import { EditorManager } from '@theia/editor/lib/browser';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';
import { WebSocketConnectionProvider } from '@theia/core/lib/browser/messaging/ws-connection-provider';
import { DebugSession } from './debug-session';
import { BreakpointManager } from './breakpoint/breakpoint-manager';
import { DebugSessionOptions } from './debug-session-options';
import { OutputChannelManager, OutputChannel } from '@theia/output/lib/common/output-channel';
import { DebugPreferences } from './debug-preferences';
import { ContributionProvider } from '@theia/core/lib/common/contribution-provider';
import { FileSystem } from '@theia/filesystem/lib/common';
/**
 * DebugSessionContribution symbol for DI.
 */
export declare const DebugSessionContribution: unique symbol;
/**
 * The [debug session](#DebugSession) contribution.
 * Can be used to instantiate a specific debug sessions.
 */
export interface DebugSessionContribution {
    /**
     * The debug type.
     */
    debugType: string;
    /**
     * The [debug session](#DebugSession) factory.
     */
    debugSessionFactory(): DebugSessionFactory;
}
/**
 * DebugSessionContributionRegistry symbol for DI.
 */
export declare const DebugSessionContributionRegistry: unique symbol;
/**
 * Debug session contribution registry.
 */
export interface DebugSessionContributionRegistry {
    get(debugType: string): DebugSessionContribution | undefined;
}
export declare class DebugSessionContributionRegistryImpl implements DebugSessionContributionRegistry {
    protected readonly contribs: Map<string, DebugSessionContribution>;
    protected readonly contributions: ContributionProvider<DebugSessionContribution>;
    protected init(): void;
    get(debugType: string): DebugSessionContribution | undefined;
}
/**
 * DebugSessionFactory symbol for DI.
 */
export declare const DebugSessionFactory: unique symbol;
/**
 * The [debug session](#DebugSession) factory.
 */
export interface DebugSessionFactory {
    get(sessionId: string, options: DebugSessionOptions): DebugSession;
}
export declare class DefaultDebugSessionFactory implements DebugSessionFactory {
    protected readonly connectionProvider: WebSocketConnectionProvider;
    protected readonly terminalService: TerminalService;
    protected readonly editorManager: EditorManager;
    protected readonly breakpoints: BreakpointManager;
    protected readonly labelProvider: LabelProvider;
    protected readonly messages: MessageClient;
    protected readonly outputChannelManager: OutputChannelManager;
    protected readonly debugPreferences: DebugPreferences;
    protected readonly fileSystem: FileSystem;
    get(sessionId: string, options: DebugSessionOptions): DebugSession;
    protected getTraceOutputChannel(): OutputChannel | undefined;
}
//# sourceMappingURL=debug-session-contribution.d.ts.map
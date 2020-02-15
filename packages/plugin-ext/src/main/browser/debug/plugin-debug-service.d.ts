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
import { DebugService, DebuggerDescription } from '@theia/debug/lib/common/debug-service';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { DebugConfiguration } from '@theia/debug/lib/common/debug-configuration';
import { IJSONSchema, IJSONSchemaSnippet } from '@theia/core/lib/common/json-schema';
import { PluginDebugAdapterContribution } from './plugin-debug-adapter-contribution';
import { WebSocketConnectionProvider } from '@theia/core/lib/browser/messaging/ws-connection-provider';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { DebuggerContribution } from '../../../common/plugin-protocol';
/**
 * Debug adapter contribution registrator.
 */
export interface PluginDebugAdapterContributionRegistrator {
    /**
     * Registers [PluginDebugAdapterContribution](#PluginDebugAdapterContribution).
     * @param contrib contribution
     */
    registerDebugAdapterContribution(contrib: PluginDebugAdapterContribution): Disposable;
    /**
     * Unregisters [PluginDebugAdapterContribution](#PluginDebugAdapterContribution).
     * @param debugType the debug type
     */
    unregisterDebugAdapterContribution(debugType: string): void;
}
/**
 * Debug service to work with plugin and extension contributions.
 */
export declare class PluginDebugService implements DebugService, PluginDebugAdapterContributionRegistrator {
    protected readonly debuggers: DebuggerContribution[];
    protected readonly contributors: Map<string, PluginDebugAdapterContribution>;
    protected readonly toDispose: DisposableCollection;
    protected readonly sessionId2contrib: Map<string, PluginDebugAdapterContribution>;
    protected delegated: DebugService;
    protected readonly connectionProvider: WebSocketConnectionProvider;
    protected readonly workspaceService: WorkspaceService;
    protected init(): void;
    registerDebugAdapterContribution(contrib: PluginDebugAdapterContribution): Disposable;
    unregisterDebugAdapterContribution(debugType: string): void;
    debugTypes(): Promise<string[]>;
    provideDebugConfigurations(debugType: string, workspaceFolderUri: string | undefined): Promise<DebugConfiguration[]>;
    resolveDebugConfiguration(config: DebugConfiguration, workspaceFolderUri: string | undefined): Promise<DebugConfiguration>;
    registerDebugger(contribution: DebuggerContribution): Disposable;
    getDebuggersForLanguage(language: string): Promise<DebuggerDescription[]>;
    getSchemaAttributes(debugType: string): Promise<IJSONSchema[]>;
    getConfigurationSnippets(): Promise<IJSONSchemaSnippet[]>;
    createDebugSession(config: DebugConfiguration): Promise<string>;
    terminateDebugSession(sessionId: string): Promise<void>;
    dispose(): void;
}
//# sourceMappingURL=plugin-debug-service.d.ts.map
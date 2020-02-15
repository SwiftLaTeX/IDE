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
/// <reference types="lodash" />
import { interfaces } from 'inversify';
import { PluginMetadata, DeployedPlugin } from '../../common/plugin-protocol';
import { PluginManagerExt } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { DisposableCollection, ILogger, ContributionProvider, CommandRegistry, WillExecuteCommandEvent, ProgressService } from '@theia/core';
import { PreferenceProviderProvider } from '@theia/core/lib/browser/preferences';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { MainPluginApiProvider } from '../../common/plugin-ext-api-contribution';
import { PluginServer } from '../../common/plugin-protocol';
import { DebugSessionManager } from '@theia/debug/lib/browser/debug-session-manager';
import { DebugConfigurationManager } from '@theia/debug/lib/browser/debug-configuration-manager';
import { WaitUntilEvent } from '@theia/core/lib/common/event';
import { FileSearchService } from '@theia/file-search/lib/common/file-search-service';
import { Emitter } from '@theia/core';
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { PluginViewRegistry } from '../../main/browser/view/plugin-view-registry';
import { TaskProviderRegistry, TaskResolverRegistry } from '@theia/task/lib/browser/task-contribution';
import { WebviewEnvironment } from '../../main/browser/webview/webview-environment';
import { WebviewWidget } from '../../main/browser/webview/webview';
import { WidgetManager } from '@theia/core/lib/browser/widget-manager';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';
export declare type PluginHost = 'frontend' | string;
export declare type DebugActivationEvent = 'onDebugResolve' | 'onDebugInitialConfigurations' | 'onDebugAdapterProtocolTracker';
export declare const PluginProgressLocation = "plugin";
export declare class HostedPluginSupport {
    protected readonly clientId: string;
    protected container: interfaces.Container;
    protected readonly logger: ILogger;
    private readonly server;
    private readonly watcher;
    private readonly contributionHandler;
    protected readonly mainPluginApiProviders: ContributionProvider<MainPluginApiProvider>;
    protected readonly pluginServer: PluginServer;
    protected readonly preferenceProviderProvider: PreferenceProviderProvider;
    private readonly preferenceServiceImpl;
    private readonly pluginPathsService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly commands: CommandRegistry;
    protected readonly debugSessionManager: DebugSessionManager;
    protected readonly debugConfigurationManager: DebugConfigurationManager;
    protected readonly fileSearchService: FileSearchService;
    protected readonly appState: FrontendApplicationStateService;
    protected readonly viewRegistry: PluginViewRegistry;
    protected readonly taskProviderRegistry: TaskProviderRegistry;
    protected readonly taskResolverRegistry: TaskResolverRegistry;
    protected readonly progressService: ProgressService;
    protected readonly webviewEnvironment: WebviewEnvironment;
    protected readonly widgets: WidgetManager;
    protected readonly terminalService: TerminalService;
    private theiaReadyPromise;
    protected readonly managers: Map<string, PluginManagerExt>;
    private readonly contributions;
    protected readonly activationEvents: Set<string>;
    protected readonly onDidChangePluginsEmitter: Emitter<void>;
    readonly onDidChangePlugins: import("@theia/core").Event<void>;
    protected init(): void;
    get plugins(): PluginMetadata[];
    /** do not call it, except from the plugin frontend contribution */
    onStart(container: interfaces.Container): void;
    protected loadQueue: Promise<void>;
    load: (() => Promise<void>) & import("lodash").Cancelable;
    protected doLoad(): Promise<void>;
    /**
     * Sync loaded and deployed plugins:
     * - undeployed plugins are unloaded
     * - newly deployed plugins are initialized
     */
    protected syncPlugins(): Promise<void>;
    /**
     * Always synchronous in order to simplify handling disconnections.
     * @throws never
     */
    protected loadContributions(toDisconnect: DisposableCollection): Map<PluginHost, PluginContributions[]>;
    protected startPlugins(contributionsByHost: Map<PluginHost, PluginContributions[]>, toDisconnect: DisposableCollection): Promise<void>;
    protected obtainManager(host: string, hostContributions: PluginContributions[], toDisconnect: DisposableCollection): Promise<PluginManagerExt | undefined>;
    protected initRpc(host: PluginHost, pluginId: string): RPCProtocol;
    private createServerRpc;
    private updateStoragePath;
    protected getStoragePath(): Promise<string | undefined>;
    activateByEvent(activationEvent: string): Promise<void>;
    activateByView(viewId: string): Promise<void>;
    activateByLanguage(languageId: string): Promise<void>;
    activateByCommand(commandId: string): Promise<void>;
    protected ensureCommandHandlerRegistration(event: WillExecuteCommandEvent): void;
    protected ensureTaskActivation(event: WaitUntilEvent): void;
    protected ensureDebugActivation(event: WaitUntilEvent, activationEvent?: DebugActivationEvent, debugType?: string): void;
    activateByDebug(activationEvent?: DebugActivationEvent, debugType?: string): Promise<void>;
    protected activateByWorkspaceContains(manager: PluginManagerExt, plugin: DeployedPlugin): Promise<void>;
    protected createMeasurement(name: string): () => number;
    protected logMeasurement(prefix: string, count: number, measurement: () => number): void;
    protected readonly webviewsToRestore: Set<WebviewWidget>;
    protected readonly webviewRevivers: Map<string, (webview: WebviewWidget) => Promise<void>>;
    registerWebviewReviver(viewType: string, reviver: (webview: WebviewWidget) => Promise<void>): void;
    unregisterWebviewReviver(viewType: string): void;
    protected preserveWebviews(): void;
    protected preserveWebview(webview: WebviewWidget): void;
    protected restoreWebviews(): void;
    protected restoreWebview(webview: WebviewWidget): Promise<void>;
    protected getDeserializationFailedContents(message: string): string;
}
export declare class PluginContributions extends DisposableCollection {
    readonly plugin: DeployedPlugin;
    constructor(plugin: DeployedPlugin);
    state: PluginContributions.State;
}
export declare namespace PluginContributions {
    enum State {
        INITIALIZING = 0,
        LOADING = 1,
        LOADED = 2,
        STARTING = 3,
        STARTED = 4
    }
}
//# sourceMappingURL=hosted-plugin.d.ts.map
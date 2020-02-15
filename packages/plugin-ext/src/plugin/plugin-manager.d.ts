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
import { PluginManagerExt, PluginManager, Plugin, PluginAPI, ConfigStorage, PluginManagerInitializeParams, PluginManagerStartParams } from '../common/plugin-api-rpc';
import { PluginMetadata } from '../common/plugin-protocol';
import * as theia from '@theia/plugin';
import { EnvExtImpl } from './env';
import { PreferenceRegistryExtImpl } from './preference-registry';
import { KeyValueStorageProxy } from './plugin-storage';
import { ExtPluginApi } from '../common/plugin-ext-api-contribution';
import { RPCProtocol } from '../common/rpc-protocol';
import { WebviewsExtImpl } from './webviews';
export interface PluginHost {
    loadPlugin(plugin: Plugin): any;
    init(data: PluginMetadata[]): Promise<[Plugin[], Plugin[]]> | [Plugin[], Plugin[]];
    initExtApi(extApi: ExtPluginApi[]): void;
    loadTests?(): Promise<void>;
}
interface StopFn {
    (): void;
}
declare class ActivatedPlugin {
    readonly pluginContext: theia.PluginContext;
    readonly exports?: PluginAPI | undefined;
    readonly stopFn?: StopFn | undefined;
    constructor(pluginContext: theia.PluginContext, exports?: PluginAPI | undefined, stopFn?: StopFn | undefined);
}
export declare class PluginManagerExtImpl implements PluginManagerExt, PluginManager {
    private readonly host;
    private readonly envExt;
    private readonly storageProxy;
    private readonly preferencesManager;
    private readonly webview;
    private readonly rpc;
    static SUPPORTED_ACTIVATION_EVENTS: Set<string>;
    private readonly registry;
    private readonly activations;
    /** promises to whether loading each plugin has been successful */
    private readonly loadedPlugins;
    private readonly activatedPlugins;
    private readonly pluginActivationPromises;
    private readonly pluginContextsMap;
    private onDidChangeEmitter;
    private messageRegistryProxy;
    private notificationMain;
    protected fireOnDidChange(): void;
    constructor(host: PluginHost, envExt: EnvExtImpl, storageProxy: KeyValueStorageProxy, preferencesManager: PreferenceRegistryExtImpl, webview: WebviewsExtImpl, rpc: RPCProtocol);
    $stop(pluginId?: string): Promise<void>;
    protected stopAll(): void;
    protected stopPlugin(plugin: ActivatedPlugin): void;
    $init(params: PluginManagerInitializeParams): Promise<void>;
    $start(params: PluginManagerStartParams): Promise<void>;
    protected registerPlugin(plugin: Plugin, configStorage: ConfigStorage): void;
    protected setActivation(activationEvent: string, activation: () => Promise<void>): void;
    protected loadPlugin(plugin: Plugin, configStorage: ConfigStorage, visited?: Set<string>): Promise<boolean>;
    $updateStoragePath(path: string | undefined): Promise<void>;
    $activateByEvent(activationEvent: string): Promise<void>;
    private startPlugin;
    getAllPlugins(): Plugin[];
    getPluginExport(pluginId: string): PluginAPI | undefined;
    getPluginById(pluginId: string): Plugin | undefined;
    isRunning(pluginId: string): boolean;
    isActive(pluginId: string): boolean;
    activatePlugin(pluginId: string): PromiseLike<void>;
    get onDidChange(): theia.Event<void>;
}
export {};
//# sourceMappingURL=plugin-manager.d.ts.map
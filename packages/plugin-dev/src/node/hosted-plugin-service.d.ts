/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { HostedPluginServer, DebugConfiguration, HostedPluginClient } from '../common/plugin-dev-protocol';
import { HostedInstanceManager } from './hosted-instance-manager';
import { PluginMetadata } from '@theia/plugin-ext/lib/common/plugin-protocol';
import URI from '@theia/core/lib/common/uri';
import { HostedPluginsManager } from './hosted-plugins-manager';
export declare class HostedPluginServerImpl implements HostedPluginServer {
    protected readonly hostedPluginsManager: HostedPluginsManager;
    protected readonly hostedInstanceManager: HostedInstanceManager;
    private readonly reader;
    private readonly hostedPlugin;
    dispose(): void;
    setClient(client: HostedPluginClient): void;
    getHostedPlugin(): Promise<PluginMetadata | undefined>;
    isPluginValid(uri: string): Promise<boolean>;
    runHostedPluginInstance(uri: string): Promise<string>;
    runDebugHostedPluginInstance(uri: string, debugConfig: DebugConfiguration): Promise<string>;
    terminateHostedPluginInstance(): Promise<void>;
    isHostedPluginInstanceRunning(): Promise<boolean>;
    getHostedPluginInstanceURI(): Promise<string>;
    getHostedPluginURI(): Promise<string>;
    protected uriToStrPromise(promise: Promise<URI>): Promise<string>;
    runWatchCompilation(path: string): Promise<void>;
    stopWatchCompilation(path: string): Promise<void>;
    isWatchCompilationRunning(path: string): Promise<boolean>;
}
//# sourceMappingURL=hosted-plugin-service.d.ts.map
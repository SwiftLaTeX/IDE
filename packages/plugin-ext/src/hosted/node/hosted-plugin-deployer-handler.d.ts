/********************************************************************************
 * Copyright (C) 2019 RedHat and others.
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
import { ILogger } from '@theia/core';
import { PluginDeployerHandler, PluginDeployerEntry, PluginEntryPoint, DeployedPlugin, PluginDependencies } from '../../common/plugin-protocol';
export declare class HostedPluginDeployerHandler implements PluginDeployerHandler {
    protected readonly logger: ILogger;
    private readonly reader;
    /**
     * Managed plugin metadata backend entries.
     */
    private readonly deployedBackendPlugins;
    /**
     * Managed plugin metadata frontend entries.
     */
    private readonly deployedFrontendPlugins;
    private backendPluginsMetadataDeferred;
    private frontendPluginsMetadataDeferred;
    getDeployedFrontendPluginIds(): Promise<string[]>;
    getDeployedBackendPluginIds(): Promise<string[]>;
    getDeployedPlugin(pluginId: string): DeployedPlugin | undefined;
    /**
     * @throws never! in order to isolate plugin deployment
     */
    getPluginDependencies(entry: PluginDeployerEntry): Promise<PluginDependencies | undefined>;
    deployFrontendPlugins(frontendPlugins: PluginDeployerEntry[]): Promise<void>;
    deployBackendPlugins(backendPlugins: PluginDeployerEntry[]): Promise<void>;
    /**
     * @throws never! in order to isolate plugin deployment
     */
    protected deployPlugin(entry: PluginDeployerEntry, entryPoint: keyof PluginEntryPoint): Promise<void>;
}
//# sourceMappingURL=hosted-plugin-deployer-handler.d.ts.map
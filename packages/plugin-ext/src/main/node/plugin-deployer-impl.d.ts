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
import { PluginDeployerEntry, PluginDeployer, PluginDeployerHandler } from '../../common/plugin-protocol';
import { ILogger, Emitter } from '@theia/core';
import { PluginCliContribution } from './plugin-cli-contribution';
export declare class PluginDeployerImpl implements PluginDeployer {
    protected readonly onDidDeployEmitter: Emitter<void>;
    readonly onDidDeploy: import("@theia/core").Event<void>;
    protected readonly logger: ILogger;
    protected readonly pluginDeployerHandler: PluginDeployerHandler;
    protected readonly cliContribution: PluginCliContribution;
    /**
     * Inject all plugin resolvers found at runtime.
     */
    private pluginResolvers;
    /**
     * Inject all file handler for local resolved plugins.
     */
    private pluginDeployerFileHandlers;
    /**
     * Inject all directory handler for local resolved plugins.
     */
    private pluginDeployerDirectoryHandlers;
    start(): void;
    initResolvers(): Promise<Array<void>>;
    protected doStart(): Promise<void>;
    deploy(pluginEntry: string): Promise<void>;
    protected deployMultipleEntries(pluginEntries: ReadonlyArray<string>): Promise<void>;
    /**
     * deploy all plugins that have been accepted
     */
    deployPlugins(pluginsToDeploy: PluginDeployerEntry[]): Promise<any>;
    /**
     * If there are some single files, try to see if we can work on these files (like unpacking it, etc)
     */
    applyFileHandlers(pluginDeployerEntries: PluginDeployerEntry[]): Promise<any>;
    /**
     * Check for all registered directories to see if there are some plugins that can be accepted to be deployed.
     */
    applyDirectoryFileHandlers(pluginDeployerEntries: PluginDeployerEntry[]): Promise<any>;
    /**
     * Check a plugin ID see if there are some resolvers that can handle it. If there is a matching resolver, then we resolve the plugin
     */
    resolvePlugin(pluginId: string): Promise<PluginDeployerEntry[]>;
    protected logMeasurement(prefix: string, startTime: number): void;
}
//# sourceMappingURL=plugin-deployer-impl.d.ts.map
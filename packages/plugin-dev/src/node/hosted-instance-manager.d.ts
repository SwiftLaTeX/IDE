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
/// <reference types="node" />
import * as cp from 'child_process';
import URI from '@theia/core/lib/common/uri';
import { ContributionProvider } from '@theia/core/lib/common/contribution-provider';
import { HostedPluginUriPostProcessor } from './hosted-plugin-uri-postprocessor';
import { DebugConfiguration } from '../common';
import { HostedPluginSupport } from '@theia/plugin-ext/lib/hosted/node/hosted-plugin';
import { MetadataScanner } from '@theia/plugin-ext/lib/hosted/node/metadata-scanner';
export declare const HostedInstanceManager: unique symbol;
/**
 * Is responsible for running and handling separate Theia instance with given plugin.
 */
export interface HostedInstanceManager {
    /**
     * Checks whether hosted instance is run.
     */
    isRunning(): boolean;
    /**
     * Runs specified by the given uri plugin in separate Theia instance.
     *
     * @param pluginUri uri to the plugin source location
     * @param port port on which new instance of Theia should be run. Optional.
     * @returns uri where new Theia instance is run
     */
    run(pluginUri: URI, port?: number): Promise<URI>;
    /**
     * Runs specified by the given uri plugin  with debug in separate Theia instance.
     * @param pluginUri uri to the plugin source location
     * @param debugConfig debug configuration
     * @returns uri where new Theia instance is run
     */
    debug(pluginUri: URI, debugConfig: DebugConfiguration): Promise<URI>;
    /**
     * Terminates hosted plugin instance.
     * Throws error if instance is not running.
     */
    terminate(): void;
    /**
     * Returns uri where hosted instance is run.
     * Throws error if instance is not running.
     */
    getInstanceURI(): URI;
    /**
     * Returns uri where plugin loaded into hosted instance is located.
     * Throws error if instance is not running.
     */
    getPluginURI(): URI;
    /**
     * Checks whether given uri points to a valid plugin.
     *
     * @param uri uri to the plugin source location
     */
    isPluginValid(uri: URI): boolean;
}
export declare abstract class AbstractHostedInstanceManager implements HostedInstanceManager {
    protected hostedInstanceProcess: cp.ChildProcess;
    protected isPluginRunning: boolean;
    protected instanceUri: URI;
    protected pluginUri: URI;
    protected instanceOptions: object;
    protected readonly hostedPluginSupport: HostedPluginSupport;
    protected readonly metadata: MetadataScanner;
    isRunning(): boolean;
    run(pluginUri: URI, port?: number): Promise<URI>;
    debug(pluginUri: URI, debugConfig: DebugConfiguration): Promise<URI>;
    private doRun;
    terminate(): void;
    getInstanceURI(): URI;
    getPluginURI(): URI;
    /**
     * Checks that the `instanceUri` is responding before exiting method
     */
    checkInstanceUriReady(): Promise<void>;
    /**
     * Start a loop to ping, if ping is OK return immediately, else start a new ping after 1second. We iterate for the given amount of loops provided in remainingCount
     * @param remainingCount the number of occurrence to check
     * @param resolve resolve function if ok
     * @param reject reject function if error
     */
    private pingLoop;
    /**
     * Ping the plugin URI (checking status of the head)
     */
    private ping;
    isPluginValid(uri: URI): boolean;
    protected getStartCommand(port?: number, debugConfig?: DebugConfiguration): Promise<string[]>;
    protected postProcessInstanceUri(uri: URI): Promise<URI>;
    protected postProcessInstanceOptions(options: object): Promise<object>;
    protected runHostedPluginTheiaInstance(command: string[], options: cp.SpawnOptions): Promise<URI>;
    protected validatePort(port: number): Promise<void>;
    protected isPortFree(port: number): Promise<boolean>;
}
export declare class NodeHostedPluginRunner extends AbstractHostedInstanceManager {
    protected readonly uriPostProcessors: ContributionProvider<HostedPluginUriPostProcessor>;
    protected postProcessInstanceUri(uri: URI): Promise<URI>;
    protected postProcessInstanceOptions(options: object): Promise<object>;
    protected getStartCommand(port?: number, config?: DebugConfiguration): Promise<string[]>;
}
export declare class ElectronNodeHostedPluginRunner extends AbstractHostedInstanceManager {
}
//# sourceMappingURL=hosted-instance-manager.d.ts.map
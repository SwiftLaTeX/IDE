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
import { ILogger, ConnectionErrorHandler } from '@theia/core/lib/common';
import { HostedPluginClient, PluginModel, DeployedPlugin } from '../../common/plugin-protocol';
import { LogPart } from '../../common/types';
import { HostedPluginProcess } from './hosted-plugin-process';
export interface IPCConnectionOptions {
    readonly serverName: string;
    readonly logger: ILogger;
    readonly args: string[];
    readonly errorHandler?: ConnectionErrorHandler;
}
export declare class HostedPluginSupport {
    private client;
    protected readonly logger: ILogger;
    protected readonly hostedPluginProcess: HostedPluginProcess;
    private isPluginProcessRunning;
    /**
     * Optional runners to delegate some work
     */
    private readonly pluginRunners;
    protected init(): void;
    setClient(client: HostedPluginClient): void;
    clientClosed(): void;
    runPlugin(plugin: PluginModel): void;
    onMessage(message: string): void;
    private terminatePluginServer;
    runPluginServer(): void;
    /**
     * Provides additional plugin ids.
     */
    getExtraDeployedPluginIds(): Promise<string[]>;
    /**
     * Provides additional deployed plugins.
     */
    getExtraDeployedPlugins(): Promise<DeployedPlugin[]>;
    sendLog(logPart: LogPart): void;
}
//# sourceMappingURL=hosted-plugin.d.ts.map
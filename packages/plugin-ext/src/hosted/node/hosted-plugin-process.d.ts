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
import { ILogger, ConnectionErrorHandler, ContributionProvider, MessageService } from '@theia/core/lib/common';
import { HostedPluginClient, ServerPluginRunner, PluginHostEnvironmentVariable, DeployedPlugin } from '../../common/plugin-protocol';
import { HostedPluginCliContribution } from './hosted-plugin-cli-contribution';
export interface IPCConnectionOptions {
    readonly serverName: string;
    readonly logger: ILogger;
    readonly args: string[];
    readonly errorHandler?: ConnectionErrorHandler;
}
export declare class HostedPluginProcess implements ServerPluginRunner {
    protected readonly logger: ILogger;
    protected readonly cli: HostedPluginCliContribution;
    protected readonly pluginHostEnvironmentVariables: ContributionProvider<PluginHostEnvironmentVariable>;
    protected readonly messageService: MessageService;
    private childProcess;
    private client;
    private terminatingPluginServer;
    setClient(client: HostedPluginClient): void;
    clientClosed(): void;
    setDefault(defaultRunner: ServerPluginRunner): void;
    acceptMessage(jsonMessage: any): boolean;
    onMessage(jsonMessage: any): void;
    terminatePluginServer(): void;
    private killProcessTree;
    runPluginServer(): void;
    readonly HOSTED_PLUGIN_ENV_REGEXP_EXCLUSION: RegExp;
    private fork;
    private onChildProcessExit;
    private onChildProcessError;
    /**
     * Provides additional plugin ids.
     */
    getExtraDeployedPluginIds(): Promise<string[]>;
    /**
     * Provides additional deployed plugins.
     */
    getExtraDeployedPlugins(): Promise<DeployedPlugin[]>;
}
//# sourceMappingURL=hosted-plugin-process.d.ts.map
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
import { StatusBar } from '@theia/core/lib/browser/status-bar/status-bar';
import { FrontendApplicationContribution, PreferenceServiceImpl, PreferenceChange } from '@theia/core/lib/browser';
import { MessageService } from '@theia/core/lib/common';
import { CommandRegistry } from '@phosphor/commands';
import { Menu } from '@phosphor/widgets';
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { ConnectionStatusService } from '@theia/core/lib/browser/connection-status-service';
import { HostedPluginServer } from '../common/plugin-dev-protocol';
import { HostedPluginManagerClient, HostedInstanceData } from './hosted-plugin-manager-client';
import { HostedPluginLogViewer } from './hosted-plugin-log-viewer';
import { HostedPluginPreferences } from './hosted-plugin-preferences';
/**
 * Adds a status bar element displaying the state of secondary Theia instance with hosted plugin and
 * allows controlling the instance by simple clicking on the status bar element.
 */
export declare class HostedPluginController implements FrontendApplicationContribution {
    static readonly HOSTED_PLUGIN = "hosted-plugin";
    static readonly HOSTED_PLUGIN_OFFLINE = "hosted-plugin-offline";
    static readonly HOSTED_PLUGIN_FAILED = "hosted-plugin-failed";
    protected readonly statusBar: StatusBar;
    protected readonly frontendApplicationStateService: FrontendApplicationStateService;
    protected readonly hostedPluginServer: HostedPluginServer;
    protected readonly hostedPluginManagerClient: HostedPluginManagerClient;
    protected readonly connectionStatusService: ConnectionStatusService;
    protected readonly hostedPluginLogViewer: HostedPluginLogViewer;
    protected readonly hostedPluginPreferences: HostedPluginPreferences;
    protected readonly preferenceService: PreferenceServiceImpl;
    protected readonly messageService: MessageService;
    private pluginState;
    private watcherSuccess;
    private entry;
    initialize(): void;
    /**
     * Display status bar element for stopped plugin.
     */
    protected onHostedPluginStopped(): Promise<void>;
    /**
     * Display status bar element for starting plugin.
     */
    protected onHostedPluginStarting(): Promise<void>;
    /**
     * Display status bar element for running plugin.
     */
    protected onHostedPluginRunning(): Promise<void>;
    /**
     * Display status bar element for failed plugin.
     */
    protected onHostedPluginFailed(): Promise<void>;
    protected onPreferencesChanged(preference: PreferenceChange): Promise<void>;
    /**
     * Starts / stops watchers on hosted instance state change.
     *
     * @param event hosted instance state change event
     */
    protected handleWatchers(event: HostedInstanceData): Promise<void>;
    private runWatchCompilation;
    private getErrorMessage;
    /**
     * Updaing status bar element when changing connection status.
     */
    private onConnectionStatusChanged;
    /**
     * Show menu containing actions to start/stop/restart hosted plugin.
     */
    protected showMenu(x: number, y: number): void;
    /**
     * Adds commands to the menu for running plugin.
     */
    protected addCommandsForRunningPlugin(commands: CommandRegistry, menu: Menu): void;
    /**
     * Adds command to the menu for stopped plugin.
     */
    protected addCommandsForStoppedPlugin(commands: CommandRegistry, menu: Menu): void;
}
//# sourceMappingURL=hosted-plugin-controller.d.ts.map
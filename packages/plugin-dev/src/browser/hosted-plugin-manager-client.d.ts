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
import URI from '@theia/core/lib/common/uri';
import { MessageService, Command, Emitter, Event } from '@theia/core/lib/common';
import { LabelProvider } from '@theia/core/lib/browser';
import { WindowService } from '@theia/core/lib/browser/window/window-service';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { FileSystem } from '@theia/filesystem/lib/common';
import { OpenFileDialogFactory } from '@theia/filesystem/lib/browser';
import { HostedPluginServer } from '../common/plugin-dev-protocol';
import { DebugConfiguration as HostedDebugConfig } from '../common';
import { DebugSessionManager } from '@theia/debug/lib/browser/debug-session-manager';
import { HostedPluginPreferences } from './hosted-plugin-preferences';
/**
 * Commands to control Hosted plugin instances.
 */
export declare namespace HostedPluginCommands {
    const START: Command;
    const DEBUG: Command;
    const STOP: Command;
    const RESTART: Command;
    const SELECT_PATH: Command;
}
/**
 * Available states of hosted plugin instance.
 */
export declare enum HostedInstanceState {
    STOPPED = "stopped",
    STARTING = "starting",
    RUNNING = "running",
    STOPPING = "stopping",
    FAILED = "failed"
}
export interface HostedInstanceData {
    state: HostedInstanceState;
    pluginLocation: URI;
}
/**
 * Responsible for UI to set up and control Hosted Plugin Instance.
 */
export declare class HostedPluginManagerClient {
    private openNewTabAskDialog;
    protected pluginLocation: URI | undefined;
    protected pluginInstanceURL: string | undefined;
    protected isDebug: boolean;
    protected readonly stateChanged: Emitter<HostedInstanceData>;
    get onStateChanged(): Event<HostedInstanceData>;
    protected readonly hostedPluginServer: HostedPluginServer;
    protected readonly messageService: MessageService;
    protected readonly openFileDialogFactory: OpenFileDialogFactory;
    protected readonly labelProvider: LabelProvider;
    protected readonly windowService: WindowService;
    protected readonly fileSystem: FileSystem;
    protected readonly workspaceService: WorkspaceService;
    protected readonly debugSessionManager: DebugSessionManager;
    protected readonly hostedPluginPreferences: HostedPluginPreferences;
    protected init(): Promise<void>;
    get lastPluginLocation(): string | undefined;
    start(debugConfig?: HostedDebugConfig): Promise<void>;
    debug(): Promise<void>;
    startDebugSessionManager(): Promise<void>;
    stop(checkRunning?: boolean): Promise<void>;
    restart(): Promise<void>;
    /**
     * Creates directory choose dialog and set selected folder into pluginLocation field.
     */
    selectPluginPath(): Promise<void>;
    /**
     * Opens window with URL to the running plugin instance.
     */
    protected openPluginWindow(): Promise<void>;
    protected getErrorMessage(error: Error): string;
}
//# sourceMappingURL=hosted-plugin-manager-client.d.ts.map
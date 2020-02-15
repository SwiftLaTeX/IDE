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
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { HostedPluginServer } from '../common/plugin-dev-protocol';
import { ConnectionStatusService } from '@theia/core/lib/browser/connection-status-service';
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
/**
 * Informs the user whether Theia is running with hosted plugin.
 * Adds 'Development Host' status bar element and appends the same prefix to window title.
 */
export declare class HostedPluginInformer implements FrontendApplicationContribution {
    static readonly DEVELOPMENT_HOST_TITLE = "Development Host";
    static readonly DEVELOPMENT_HOST = "development-host";
    static readonly DEVELOPMENT_HOST_OFFLINE = "development-host-offline";
    private entry;
    protected readonly statusBar: StatusBar;
    protected readonly workspaceService: WorkspaceService;
    protected readonly hostedPluginServer: HostedPluginServer;
    protected readonly connectionStatusService: ConnectionStatusService;
    protected readonly frontendApplicationStateService: FrontendApplicationStateService;
    initialize(): void;
    private updateStatusBarElement;
    private updateTitle;
}
//# sourceMappingURL=hosted-plugin-informer.d.ts.map
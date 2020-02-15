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
/// <reference types="lodash" />
import { interfaces } from 'inversify';
import { WebviewsMain } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { WebviewOptions, WebviewPanelOptions, WebviewPanelShowOptions } from '@theia/plugin';
import { ApplicationShell } from '@theia/core/lib/browser/shell/application-shell';
import { WebviewWidget } from './webview/webview';
import { Disposable } from '@theia/core/lib/common/disposable';
import { ViewColumnService } from './view-column-service';
import { WidgetManager } from '@theia/core/lib/browser/widget-manager';
import { HostedPluginSupport } from '../../hosted/browser/hosted-plugin';
import { IconUrl } from '../../common/plugin-protocol';
export declare class WebviewsMainImpl implements WebviewsMain, Disposable {
    private readonly proxy;
    protected readonly shell: ApplicationShell;
    protected readonly widgets: WidgetManager;
    protected readonly pluginService: HostedPluginSupport;
    protected readonly viewColumnService: ViewColumnService;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    $createWebviewPanel(panelId: string, viewType: string, title: string, showOptions: WebviewPanelShowOptions, options: WebviewPanelOptions & WebviewOptions): Promise<void>;
    protected hookWebview(view: WebviewWidget): void;
    private addOrReattachWidget;
    $disposeWebview(handle: string): Promise<void>;
    $reveal(handle: string, showOptions: WebviewPanelShowOptions): Promise<void>;
    $setTitle(handle: string, value: string): Promise<void>;
    $setIconPath(handle: string, iconUrl: IconUrl | undefined): Promise<void>;
    $setHtml(handle: string, value: string): Promise<void>;
    $setOptions(handle: string, options: WebviewOptions): Promise<void>;
    $postMessage(handle: string, value: any): Promise<boolean>;
    $registerSerializer(viewType: string): void;
    $unregisterSerializer(viewType: string): void;
    protected restoreWidget(widget: WebviewWidget): Promise<void>;
    protected readonly updateViewStates: (() => void) & import("lodash").Cancelable;
    private updateViewState;
    private getWebview;
    private tryGetWebview;
}
//# sourceMappingURL=webviews-main.d.ts.map
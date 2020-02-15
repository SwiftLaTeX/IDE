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
import { ApplicationShell, ViewContainer as ViewContainerWidget, WidgetManager, ViewContainerIdentifier, ViewContainerTitleOptions, Widget, FrontendApplicationContribution, StatefulWidget, BaseWidget } from '@theia/core/lib/browser';
import { ViewContainer, View } from '../../../common';
import { PluginSharedStyle } from '../plugin-shared-style';
import { PluginViewWidget, PluginViewWidgetIdentifier } from './plugin-view-widget';
import { ScmContribution } from '@theia/scm/lib/browser/scm-contribution';
import { FileNavigatorContribution } from '@theia/navigator/lib/browser/navigator-contribution';
import { DebugFrontendApplicationContribution } from '@theia/debug/lib/browser/debug-frontend-application-contribution';
import { Disposable } from '@theia/core/lib/common/disposable';
import { CommandRegistry } from '@theia/core/lib/common/command';
import { MenuModelRegistry } from '@theia/core/lib/common/menu';
import { QuickViewService } from '@theia/core/lib/browser/quick-view-service';
import { Emitter } from '@theia/core/lib/common/event';
import { ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import { ViewContextKeyService } from './view-context-key-service';
export declare const PLUGIN_VIEW_FACTORY_ID = "plugin-view";
export declare const PLUGIN_VIEW_CONTAINER_FACTORY_ID = "plugin-view-container";
export declare const PLUGIN_VIEW_DATA_FACTORY_ID = "plugin-view-data";
export declare type ViewDataProvider = (params: {
    state?: object;
    viewInfo: View;
}) => Promise<Widget>;
export declare class PluginViewRegistry implements FrontendApplicationContribution {
    protected readonly shell: ApplicationShell;
    protected readonly style: PluginSharedStyle;
    protected readonly widgetManager: WidgetManager;
    protected readonly scm: ScmContribution;
    protected readonly explorer: FileNavigatorContribution;
    protected readonly debug: DebugFrontendApplicationContribution;
    protected readonly commands: CommandRegistry;
    protected readonly menus: MenuModelRegistry;
    protected readonly quickView: QuickViewService;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly viewContextKeys: ViewContextKeyService;
    protected readonly onDidExpandViewEmitter: Emitter<string>;
    readonly onDidExpandView: import("@theia/core/src/common/event").Event<string>;
    private readonly views;
    private readonly viewContainers;
    private readonly containerViews;
    private readonly viewClauseContexts;
    private readonly viewDataProviders;
    private readonly viewDataState;
    protected init(): void;
    protected updateViewVisibility(viewId: string): Promise<void>;
    protected isViewVisible(viewId: string): boolean;
    registerViewContainer(location: string, viewContainer: ViewContainer): Disposable;
    protected doRegisterViewContainer(id: string, location: string, options: ViewContainerTitleOptions): Disposable;
    registerView(viewContainerId: string, view: View): Disposable;
    getView(viewId: string): Promise<PluginViewWidget | undefined>;
    openView(viewId: string): Promise<PluginViewWidget | undefined>;
    protected prepareView(widget: PluginViewWidget): Promise<void>;
    openViewContainer(containerId: string): Promise<ViewContainerWidget | undefined>;
    protected prepareViewContainer(viewContainerId: string, containerWidget: ViewContainerWidget): Promise<void>;
    protected getPluginViewContainer(viewContainerId: string): Promise<ViewContainerWidget | undefined>;
    initWidgets(): Promise<void>;
    removeStaleWidgets(): Promise<void>;
    protected toViewContainerIdentifier(viewContainerId: string): ViewContainerIdentifier;
    protected toViewContainerId(identifier: ViewContainerIdentifier): string;
    protected toPluginViewWidgetIdentifier(viewId: string): PluginViewWidgetIdentifier;
    protected toViewId(identifier: PluginViewWidgetIdentifier): string;
    /**
     * retrieve restored layout state from previous user session but close widgets
     * widgets should be opened only when view data providers are registered
     */
    onDidInitializeLayout(): void;
    registerViewDataProvider(viewId: string, provider: ViewDataProvider): Disposable;
    protected createViewDataWidget(viewId: string): Promise<Widget | undefined>;
    protected storeViewDataStateOnDispose(viewId: string, widget: Widget & StatefulWidget): void;
    protected trackVisibleWidget(factoryId: string, view: PluginViewRegistry.VisibleView): void;
    protected doTrackVisibleWidget(widget: Widget | undefined, view: PluginViewRegistry.VisibleView): void;
    protected readonly visiblePanels: Set<string>;
    protected readonly visibleViewlets: Set<string>;
    protected updateVisibleWidget(widget: BaseWidget, view: PluginViewRegistry.VisibleView): void;
    protected isVisibleWidget(widget: BaseWidget, view: PluginViewRegistry.VisibleView): boolean;
    protected updateFocusedView(): void;
}
export declare namespace PluginViewRegistry {
    type VisibleView = ({
        viewletId: string;
    } | {
        panelId: string;
    }) & {
        /** `undefined` means any area */
        sideArea?: boolean;
    };
}
//# sourceMappingURL=plugin-view-registry.d.ts.map
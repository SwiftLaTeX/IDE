/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { Widget } from '@phosphor/widgets';
import URI from '@theia/core/lib/common/uri';
import { MaybePromise } from '@theia/core/lib/common/types';
import { QuickInputService } from '@theia/core/lib/browser';
import { ApplicationShell } from '@theia/core/lib/browser/shell';
import { Command, CommandContribution, CommandRegistry } from '@theia/core/lib/common/command';
import { MenuContribution, MenuModelRegistry } from '@theia/core/lib/common/menu';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { NavigatableWidget, NavigatableWidgetOpenHandler } from '@theia/core/lib/browser/navigatable';
import { OpenerService } from '@theia/core/lib/browser/opener-service';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
import { FrontendApplicationContribution } from '@theia/core/lib/browser/frontend-application';
import { WidgetOpenerOptions } from '@theia/core/lib/browser/widget-open-handler';
import { MiniBrowserService } from '../common/mini-browser-service';
import { MiniBrowser, MiniBrowserProps } from './mini-browser';
import { LocationMapperService } from './location-mapper-service';
export declare namespace MiniBrowserCommands {
    const PREVIEW: Command;
    const OPEN_SOURCE: Command;
    const OPEN_URL: Command;
}
/**
 * Further options for opening a new `Mini Browser` widget.
 */
export interface MiniBrowserOpenerOptions extends WidgetOpenerOptions, MiniBrowserProps {
}
export declare class MiniBrowserOpenHandler extends NavigatableWidgetOpenHandler<MiniBrowser> implements FrontendApplicationContribution, CommandContribution, MenuContribution, TabBarToolbarContribution {
    static PREVIEW_URI: URI;
    /**
     * Instead of going to the backend with each file URI to ask whether it can handle the current file or not,
     * we have this map of extension and priority pairs that we populate at application startup.
     * The real advantage of this approach is the following: [Phosphor cannot run async code when invoking `isEnabled`/`isVisible`
     * for the command handlers](https://github.com/eclipse-theia/theia/issues/1958#issuecomment-392829371)
     * so the menu item would be always visible for the user even if the file type cannot be handled eventually.
     * Hopefully, we could get rid of this hack once we have migrated the existing Phosphor code to [React](https://github.com/eclipse-theia/theia/issues/1915).
     */
    protected readonly supportedExtensions: Map<string, number>;
    readonly id: string;
    readonly label = "Preview";
    protected readonly openerService: OpenerService;
    protected readonly labelProvider: LabelProvider;
    protected readonly quickInputService: QuickInputService;
    protected readonly miniBrowserService: MiniBrowserService;
    protected readonly locationMapperService: LocationMapperService;
    onStart(): void;
    canHandle(uri: URI): number;
    open(uri: URI, options?: MiniBrowserOpenerOptions): Promise<MiniBrowser>;
    protected getOrCreateWidget(uri: URI, options?: MiniBrowserOpenerOptions): Promise<MiniBrowser>;
    protected options(uri?: URI, options?: MiniBrowserOpenerOptions): Promise<MiniBrowserOpenerOptions & {
        widgetOptions: ApplicationShell.WidgetOptions;
    }>;
    protected resetBackground(uri: URI): MaybePromise<boolean>;
    protected defaultOptions(): Promise<MiniBrowserOpenerOptions & {
        widgetOptions: ApplicationShell.WidgetOptions;
    }>;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerToolbarItems(toolbar: TabBarToolbarRegistry): void;
    protected canPreviewWidget(widget?: Widget): boolean;
    protected getUriToPreview(widget?: Widget): URI | undefined;
    protected getWidgetToPreview(widget?: Widget): NavigatableWidget | undefined;
    protected preview(widget?: Widget): Promise<void>;
    protected openSource(ref?: Widget): Promise<void>;
    protected getSourceUri(ref?: Widget): URI | undefined;
    protected openUrl(arg?: string): Promise<void>;
    openPreview(startPage: string): Promise<MiniBrowser>;
    protected getOpenPreviewProps(startPage: string): Promise<MiniBrowserOpenerOptions>;
}
//# sourceMappingURL=mini-browser-open-handler.d.ts.map
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
import { WebviewPanelOptions, WebviewPortMapping } from '@theia/plugin';
import { BaseWidget, Message } from '@theia/core/lib/browser/widgets/widget';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { ApplicationShellMouseTracker } from '@theia/core/lib/browser/shell/application-shell-mouse-tracker';
import { StatefulWidget } from '@theia/core/lib/browser/shell/shell-layout-restorer';
import { WebviewPanelViewState } from '../../../common/plugin-api-rpc';
import { IconUrl } from '../../../common/plugin-protocol';
import { Deferred } from '@theia/core/lib/common/promise-util';
import { WebviewEnvironment } from './webview-environment';
import URI from '@theia/core/lib/common/uri';
import { Emitter } from '@theia/core/lib/common/event';
import { OpenerService } from '@theia/core/lib/browser/opener-service';
import { KeybindingRegistry } from '@theia/core/lib/browser/keybinding';
import { PluginSharedStyle } from '../plugin-shared-style';
import { WebviewThemeDataProvider } from './webview-theme-data-provider';
import { ExternalUriService } from '@theia/core/lib/browser/external-uri-service';
import { OutputChannelManager } from '@theia/output/lib/common/output-channel';
import { WebviewPreferences } from './webview-preferences';
import { WebviewResourceLoader } from '../../common/webview-protocol';
import { WebviewResourceCache } from './webview-resource-cache';
export declare const enum WebviewMessageChannels {
    onmessage = "onmessage",
    didClickLink = "did-click-link",
    didFocus = "did-focus",
    didBlur = "did-blur",
    doUpdateState = "do-update-state",
    doReload = "do-reload",
    loadResource = "load-resource",
    loadLocalhost = "load-localhost",
    webviewReady = "webview-ready",
    didKeydown = "did-keydown"
}
export interface WebviewContentOptions {
    readonly allowScripts?: boolean;
    readonly localResourceRoots?: ReadonlyArray<string>;
    readonly portMapping?: ReadonlyArray<WebviewPortMapping>;
    readonly enableCommandUris?: boolean;
}
export declare class WebviewWidgetIdentifier {
    id: string;
}
export declare const WebviewWidgetExternalEndpoint: unique symbol;
export declare class WebviewWidget extends BaseWidget implements StatefulWidget {
    private static readonly standardSupportedLinkSchemes;
    static FACTORY_ID: string;
    protected element: HTMLIFrameElement | undefined;
    protected transparentOverlay: HTMLElement;
    readonly identifier: WebviewWidgetIdentifier;
    readonly externalEndpoint: string;
    protected readonly mouseTracker: ApplicationShellMouseTracker;
    protected readonly environment: WebviewEnvironment;
    protected readonly openerService: OpenerService;
    protected readonly keybindings: KeybindingRegistry;
    protected readonly sharedStyle: PluginSharedStyle;
    protected readonly themeDataProvider: WebviewThemeDataProvider;
    protected readonly externalUriService: ExternalUriService;
    protected readonly outputManager: OutputChannelManager;
    protected readonly preferences: WebviewPreferences;
    protected readonly resourceLoader: WebviewResourceLoader;
    protected readonly resourceCache: WebviewResourceCache;
    viewState: WebviewPanelViewState;
    protected html: string;
    protected _contentOptions: WebviewContentOptions;
    get contentOptions(): WebviewContentOptions;
    protected _state: string | undefined;
    get state(): string | undefined;
    viewType: string;
    options: WebviewPanelOptions;
    protected ready: Deferred<void>;
    protected readonly onMessageEmitter: Emitter<any>;
    readonly onMessage: import("@theia/core/src/common/event").Event<any>;
    protected readonly pendingMessages: any[];
    protected readonly toHide: DisposableCollection;
    protected hideTimeout: any | number | undefined;
    protected init(): void;
    protected onBeforeAttach(msg: Message): void;
    protected onBeforeShow(msg: Message): void;
    protected onAfterHide(msg: Message): void;
    protected doHide(): void;
    protected forceHide(): void;
    protected doShow(): void;
    protected loadLocalhost(origin: string): Promise<void>;
    protected getRedirect(url: string): Promise<string | undefined>;
    protected toRemoteUrl(localUri: URI): Promise<string>;
    setContentOptions(contentOptions: WebviewContentOptions): void;
    protected iconUrl: IconUrl | undefined;
    protected readonly toDisposeOnIcon: DisposableCollection;
    setIconUrl(iconUrl: IconUrl | undefined): void;
    setHTML(value: string): void;
    protected preprocessHtml(value: string): string;
    protected onActivateRequest(msg: Message): void;
    focus(): void;
    reload(): void;
    protected style(): void;
    protected dispatchKeyDown(event: KeyboardEventInit): void;
    protected openLink(link: URI): void;
    protected toSupportedLink(link: URI): URI | undefined;
    protected loadResource(requestPath: string): Promise<void>;
    protected normalizeRequestUri(requestPath: string): URI;
    sendMessage(data: any): void;
    protected doUpdateContent(): void;
    storeState(): WebviewWidget.State;
    restoreState(oldState: WebviewWidget.State): void;
    protected doSend(channel: string, data?: any): Promise<void>;
    protected postMessage(channel: string, data?: any): void;
    protected on<T = unknown>(channel: WebviewMessageChannels, handler: (data: T) => void): Disposable;
    protected trace(kind: 'in' | 'out', channel: string, data?: any): void;
}
export declare namespace WebviewWidget {
    namespace Styles {
        const WEBVIEW = "theia-webview";
    }
    interface State {
        viewType: string;
        title: string;
        iconUrl?: IconUrl;
        options: WebviewPanelOptions;
        contentOptions: WebviewContentOptions;
        state?: string;
    }
}
//# sourceMappingURL=webview.d.ts.map
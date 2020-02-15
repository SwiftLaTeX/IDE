"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../src/browser/style/index.css");
require('../../src/browser/style/materialcolors.css').use();
require("font-awesome/css/font-awesome.min.css");
require("file-icons-js/css/style.css");
var inversify_1 = require("inversify");
var common_1 = require("../common");
var keybinding_1 = require("./keybinding");
var frontend_application_1 = require("./frontend-application");
var opener_service_1 = require("./opener-service");
var http_open_handler_1 = require("./http-open-handler");
var common_frontend_contribution_1 = require("./common-frontend-contribution");
var quick_open_1 = require("./quick-open");
var storage_service_1 = require("./storage-service");
var widget_manager_1 = require("./widget-manager");
var shell_1 = require("./shell");
var status_bar_1 = require("./status-bar/status-bar");
var label_parser_1 = require("./label-parser");
var label_provider_1 = require("./label-provider");
var preferences_1 = require("./preferences");
var context_menu_renderer_1 = require("./context-menu-renderer");
var theming_1 = require("./theming");
var connection_status_service_1 = require("./connection-status-service");
var diff_uris_1 = require("./diff-uris");
var application_protocol_1 = require("../common/application-protocol");
// import { WebSocketConnectionProvider } from './messaging';
var about_dialog_1 = require("./about-dialog");
var env_variables_1 = require("./../common/env-variables");
var EnvVariablesDummyServer_1 = require("./EnvVariablesDummyServer");
var frontend_application_state_1 = require("./frontend-application-state");
var json_schema_store_1 = require("./json-schema-store");
var tab_bar_toolbar_1 = require("./shell/tab-bar-toolbar");
var core_preferences_1 = require("./core-preferences");
var quick_pick_service_impl_1 = require("./quick-open/quick-pick-service-impl");
var quick_pick_service_1 = require("../common/quick-pick-service");
var context_key_service_1 = require("./context-key-service");
var resource_context_key_1 = require("./resource-context-key");
var keyboard_layout_service_1 = require("./keyboard/keyboard-layout-service");
var mime_service_1 = require("./mime-service");
var application_shell_mouse_tracker_1 = require("./shell/application-shell-mouse-tracker");
var view_container_1 = require("./view-container");
var quick_view_service_1 = require("./quick-view-service");
var quick_title_bar_1 = require("./quick-open/quick-title-bar");
var dialogs_1 = require("./dialogs");
var progress_location_service_1 = require("./progress-location-service");
var progress_service_protocol_1 = require("../common/progress-service-protocol");
var progress_service_1 = require("../common/progress-service");
var progress_client_1 = require("./progress-client");
var progress_status_bar_item_1 = require("./progress-status-bar-item");
var tab_bar_decorator_1 = require("./shell/tab-bar-decorator");
var context_menu_context_1 = require("./menu/context-menu-context");
var frontend_application_bindings_1 = require("./frontend-application-bindings");
exports.bindResourceProvider = frontend_application_bindings_1.bindResourceProvider;
exports.bindMessageService = frontend_application_bindings_1.bindMessageService;
exports.bindPreferenceService = frontend_application_bindings_1.bindPreferenceService;
var color_registry_1 = require("./color-registry");
var color_application_contribution_1 = require("./color-application-contribution");
var external_uri_service_1 = require("./external-uri-service");
var icon_theme_service_1 = require("./icon-theme-service");
var icon_theme_contribution_1 = require("./icon-theme-contribution");
var tree_label_provider_1 = require("./tree/tree-label-provider");
var application_dummy_server_1 = require("./application-dummy-server");
color_application_contribution_1.ColorApplicationContribution.initBackground();
exports.frontendApplicationModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    var themeService = theming_1.ThemeService.get();
    themeService.register.apply(themeService, __spread(theming_1.BuiltinThemeProvider.themes));
    themeService.startupTheme();
    bind(icon_theme_service_1.NoneIconTheme).toSelf().inSingletonScope();
    bind(label_provider_1.LabelProviderContribution).toService(icon_theme_service_1.NoneIconTheme);
    bind(icon_theme_service_1.IconThemeService).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, icon_theme_contribution_1.IconThemeContribution);
    bind(icon_theme_contribution_1.DefaultFileIconThemeContribution).toSelf().inSingletonScope();
    bind(icon_theme_contribution_1.IconThemeContribution).toService(icon_theme_contribution_1.DefaultFileIconThemeContribution);
    bind(icon_theme_contribution_1.IconThemeApplicationContribution).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(icon_theme_contribution_1.IconThemeApplicationContribution);
    bind(color_registry_1.ColorRegistry).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, color_application_contribution_1.ColorContribution);
    bind(color_application_contribution_1.ColorApplicationContribution).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(color_application_contribution_1.ColorApplicationContribution);
    bind(frontend_application_1.FrontendApplication).toSelf().inSingletonScope();
    bind(frontend_application_state_1.FrontendApplicationStateService).toSelf().inSingletonScope();
    bind(frontend_application_1.DefaultFrontendApplicationContribution).toSelf();
    common_1.bindContributionProvider(bind, frontend_application_1.FrontendApplicationContribution);
    bind(shell_1.ApplicationShellOptions).toConstantValue({});
    bind(shell_1.ApplicationShell).toSelf().inSingletonScope();
    bind(shell_1.SidePanelHandlerFactory).toAutoFactory(shell_1.SidePanelHandler);
    bind(shell_1.SidePanelHandler).toSelf();
    bind(shell_1.SplitPositionHandler).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, tab_bar_toolbar_1.TabBarToolbarContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarRegistry).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(tab_bar_toolbar_1.TabBarToolbarRegistry);
    bind(tab_bar_toolbar_1.TabBarToolbarFactory).toFactory(function (context) { return function () {
        var container = context.container.createChild();
        container.bind(tab_bar_toolbar_1.TabBarToolbar).toSelf().inSingletonScope();
        return container.get(tab_bar_toolbar_1.TabBarToolbar);
    }; });
    bind(shell_1.DockPanelRendererFactory).toFactory(function (context) { return function () {
        var container = context.container;
        var tabBarToolbarRegistry = container.get(tab_bar_toolbar_1.TabBarToolbarRegistry);
        var tabBarRendererFactory = container.get(shell_1.TabBarRendererFactory);
        var tabBarToolbarFactory = container.get(tab_bar_toolbar_1.TabBarToolbarFactory);
        return new shell_1.DockPanelRenderer(tabBarRendererFactory, tabBarToolbarRegistry, tabBarToolbarFactory);
    }; });
    bind(shell_1.DockPanelRenderer).toSelf();
    bind(shell_1.TabBarRendererFactory).toFactory(function (context) { return function () {
        var contextMenuRenderer = context.container.get(context_menu_renderer_1.ContextMenuRenderer);
        var decoratorService = context.container.get(tab_bar_decorator_1.TabBarDecoratorService);
        var iconThemeService = context.container.get(icon_theme_service_1.IconThemeService);
        return new shell_1.TabBarRenderer(contextMenuRenderer, decoratorService, iconThemeService);
    }; });
    common_1.bindContributionProvider(bind, tab_bar_decorator_1.TabBarDecorator);
    bind(tab_bar_decorator_1.TabBarDecoratorService).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, opener_service_1.OpenHandler);
    bind(opener_service_1.DefaultOpenerService).toSelf().inSingletonScope();
    bind(opener_service_1.OpenerService).toService(opener_service_1.DefaultOpenerService);
    bind(external_uri_service_1.ExternalUriService).toSelf().inSingletonScope();
    bind(http_open_handler_1.HttpOpenHandler).toSelf().inSingletonScope();
    bind(opener_service_1.OpenHandler).toService(http_open_handler_1.HttpOpenHandler);
    common_1.bindContributionProvider(bind, shell_1.ApplicationShellLayoutMigration);
    bind(shell_1.ApplicationShellLayoutMigration).toConstantValue({
        layoutVersion: 2.0,
        onWillInflateLayout: function (_a) {
            var layoutVersion = _a.layoutVersion;
            throw shell_1.ApplicationShellLayoutMigrationError.create("It is not possible to migrate layout of version " + layoutVersion + " to version " + this.layoutVersion + ".");
        }
    });
    common_1.bindContributionProvider(bind, widget_manager_1.WidgetFactory);
    bind(widget_manager_1.WidgetManager).toSelf().inSingletonScope();
    bind(shell_1.ShellLayoutRestorer).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(shell_1.ShellLayoutRestorer);
    frontend_application_bindings_1.bindResourceProvider(bind);
    bind(common_1.InMemoryResources).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(common_1.InMemoryResources);
    bind(common_1.SelectionService).toSelf().inSingletonScope();
    bind(common_1.CommandRegistry).toSelf().inSingletonScope();
    // .onActivation(({ container }, registry) => {
    //     WebSocketConnectionProvider.createProxy(container, commandServicePath, registry);
    //     return registry;
    // });
    bind(common_1.CommandService).toService(common_1.CommandRegistry);
    common_1.bindContributionProvider(bind, common_1.CommandContribution);
    bind(quick_open_1.QuickOpenContribution).to(quick_open_1.CommandQuickOpenContribution);
    bind(context_key_service_1.ContextKeyService).toSelf().inSingletonScope();
    bind(common_1.MenuModelRegistry).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, common_1.MenuContribution);
    bind(keyboard_layout_service_1.KeyboardLayoutService).toSelf().inSingletonScope();
    bind(keybinding_1.KeybindingRegistry).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, keybinding_1.KeybindingContext);
    common_1.bindContributionProvider(bind, keybinding_1.KeybindingContribution);
    frontend_application_bindings_1.bindMessageService(bind);
    // .onActivation(({ container }, messages) => {
    //     const client = container.get(MessageClient);
    //     WebSocketConnectionProvider.createProxy(container, messageServicePath, client);
    //     return messages;
    // });
    bind(resource_context_key_1.ResourceContextKey).toSelf().inSingletonScope();
    bind(common_frontend_contribution_1.CommonFrontendContribution).toSelf().inSingletonScope();
    [frontend_application_1.FrontendApplicationContribution, common_1.CommandContribution, keybinding_1.KeybindingContribution, common_1.MenuContribution, color_application_contribution_1.ColorContribution].forEach(function (serviceIdentifier) {
        return bind(serviceIdentifier).toService(common_frontend_contribution_1.CommonFrontendContribution);
    });
    bind(quick_open_1.QuickOpenService).toSelf().inSingletonScope();
    bind(quick_open_1.QuickInputService).toSelf().inSingletonScope();
    bind(quick_title_bar_1.QuickTitleBar).toSelf().inSingletonScope();
    bind(quick_open_1.QuickCommandService).toSelf().inSingletonScope();
    bind(quick_open_1.QuickCommandFrontendContribution).toSelf().inSingletonScope();
    [common_1.CommandContribution, keybinding_1.KeybindingContribution, common_1.MenuContribution].forEach(function (serviceIdentifier) {
        return bind(serviceIdentifier).toService(quick_open_1.QuickCommandFrontendContribution);
    });
    bind(quick_pick_service_1.QuickPickService).to(quick_pick_service_impl_1.QuickPickServiceImpl).inSingletonScope();
    // .onActivation(({ container }, quickPickService: QuickPickService) => {
    //     WebSocketConnectionProvider.createProxy(container, quickPickServicePath, quickPickService);
    //     return quickPickService;
    // });
    bind(quick_open_1.PrefixQuickOpenService).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, quick_open_1.QuickOpenContribution);
    bind(quick_open_1.QuickOpenHandlerRegistry).toSelf().inSingletonScope();
    bind(quick_open_1.QuickOpenFrontendContribution).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(quick_open_1.QuickOpenFrontendContribution);
    bind(quick_open_1.HelpQuickOpenHandler).toSelf().inSingletonScope();
    bind(quick_open_1.QuickOpenContribution).toService(quick_open_1.HelpQuickOpenHandler);
    bind(storage_service_1.LocalStorageService).toSelf().inSingletonScope();
    bind(storage_service_1.StorageService).toService(storage_service_1.LocalStorageService);
    bind(status_bar_1.StatusBarImpl).toSelf().inSingletonScope();
    bind(status_bar_1.StatusBar).toService(status_bar_1.StatusBarImpl);
    bind(label_parser_1.LabelParser).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, label_provider_1.LabelProviderContribution);
    bind(label_provider_1.LabelProvider).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(label_provider_1.LabelProvider);
    bind(label_provider_1.LabelProviderContribution).to(label_provider_1.DefaultUriLabelProviderContribution).inSingletonScope();
    bind(label_provider_1.LabelProviderContribution).to(diff_uris_1.DiffUriLabelProviderContribution).inSingletonScope();
    bind(tree_label_provider_1.TreeLabelProvider).toSelf().inSingletonScope();
    bind(label_provider_1.LabelProviderContribution).toService(tree_label_provider_1.TreeLabelProvider);
    frontend_application_bindings_1.bindPreferenceService(bind);
    bind(frontend_application_1.FrontendApplicationContribution).toService(preferences_1.PreferenceService);
    bind(json_schema_store_1.JsonSchemaStore).toSelf().inSingletonScope();
    bind(connection_status_service_1.PingService).toDynamicValue(function (ctx) {
        /* Suppress Linter Error */
        console.log('Using SwiftLaTeX portal for PingService.');
        return {
            ping: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fetch('/ping')];
                            case 1:
                                response = _a.sent();
                                if (!response.ok) {
                                    throw Error('Unable to ping SwiftLaTeX server.');
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            }
        };
    });
    bind(connection_status_service_1.FrontendConnectionStatusService).toSelf().inSingletonScope();
    bind(connection_status_service_1.ConnectionStatusService).toService(connection_status_service_1.FrontendConnectionStatusService);
    bind(frontend_application_1.FrontendApplicationContribution).toService(connection_status_service_1.FrontendConnectionStatusService);
    bind(connection_status_service_1.ApplicationConnectionStatusContribution).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(connection_status_service_1.ApplicationConnectionStatusContribution);
    bind(application_protocol_1.ApplicationServer).to(application_dummy_server_1.DummyApplicationServerImpl).inSingletonScope();
    // bind(ApplicationServer).toDynamicValue(ctx => {
    //     const provider = ctx.container.get(WebSocketConnectionProvider);
    //     return provider.createProxy<ApplicationServer>(applicationPath);
    // }).inSingletonScope();
    bind(about_dialog_1.AboutDialog).toSelf().inSingletonScope();
    bind(about_dialog_1.AboutDialogProps).toConstantValue({ title: 'Theia' });
    bind(env_variables_1.EnvVariablesServer).to(EnvVariablesDummyServer_1.EnvVariablesDummyServer).inSingletonScope();
    //     toDynamicValue(ctx => {
    //     const connection = ctx.container.get(WebSocketConnectionProvider);
    //     return connection.createProxy<EnvVariablesServer>(envVariablesPath);
    // }).inSingletonScope();
    bind(theming_1.ThemeService).toDynamicValue(function () { return theming_1.ThemeService.get(); });
    core_preferences_1.bindCorePreferences(bind);
    bind(mime_service_1.MimeService).toSelf().inSingletonScope();
    bind(application_shell_mouse_tracker_1.ApplicationShellMouseTracker).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(application_shell_mouse_tracker_1.ApplicationShellMouseTracker);
    bind(view_container_1.ViewContainer.Factory).toFactory(function (context) { return function (options) {
        var container = context.container.createChild();
        container.bind(view_container_1.ViewContainerIdentifier).toConstantValue(options);
        container.bind(view_container_1.ViewContainer).toSelf().inSingletonScope();
        return container.get(view_container_1.ViewContainer);
    }; });
    bind(quick_view_service_1.QuickViewService).toSelf().inSingletonScope();
    bind(quick_open_1.QuickOpenContribution).toService(quick_view_service_1.QuickViewService);
    bind(dialogs_1.DialogOverlayService).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(dialogs_1.DialogOverlayService);
    bind(progress_client_1.DispatchingProgressClient).toSelf().inSingletonScope();
    bind(progress_location_service_1.ProgressLocationService).toSelf().inSingletonScope();
    bind(progress_status_bar_item_1.ProgressStatusBarItem).toSelf().inSingletonScope();
    bind(progress_service_protocol_1.ProgressClient).toService(progress_client_1.DispatchingProgressClient);
    bind(progress_service_1.ProgressService).toSelf().inSingletonScope();
    bind(context_menu_context_1.ContextMenuContext).toSelf().inSingletonScope();
});
//# sourceMappingURL=frontend-application-module.js.map
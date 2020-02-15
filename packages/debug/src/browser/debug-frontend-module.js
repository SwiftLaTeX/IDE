"use strict";
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var debug_configuration_manager_1 = require("./debug-configuration-manager");
var debug_widget_1 = require("./view/debug-widget");
var debug_service_1 = require("../common/debug-service");
var browser_1 = require("@theia/core/lib/browser");
var debug_session_manager_1 = require("./debug-session-manager");
var debug_resource_1 = require("./debug-resource");
var debug_session_contribution_1 = require("./debug-session-contribution");
var core_1 = require("@theia/core");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var debug_frontend_application_contribution_1 = require("./debug-frontend-application-contribution");
var debug_console_contribution_1 = require("./console/debug-console-contribution");
var breakpoint_manager_1 = require("./breakpoint/breakpoint-manager");
var debug_editor_service_1 = require("./editor/debug-editor-service");
var debug_session_widget_1 = require("./view/debug-session-widget");
var debug_keybinding_contexts_1 = require("./debug-keybinding-contexts");
var debug_editor_model_1 = require("./editor/debug-editor-model");
require("./debug-monaco-contribution");
var debug_preferences_1 = require("./debug-preferences");
var debug_schema_updater_1 = require("./debug-schema-updater");
var debug_call_stack_item_type_key_1 = require("./debug-call-stack-item-type-key");
var launch_preferences_1 = require("./preferences/launch-preferences");
var debug_prefix_configuration_1 = require("./debug-prefix-configuration");
var command_1 = require("@theia/core/lib/common/command");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var color_application_contribution_1 = require("@theia/core/lib/browser/color-application-contribution");
var debug_watch_manager_1 = require("./debug-watch-manager");
var monaco_editor_service_1 = require("@theia/monaco/lib/browser/monaco-editor-service");
var debug_breakpoint_widget_1 = require("./editor/debug-breakpoint-widget");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a;
    bind(debug_call_stack_item_type_key_1.DebugCallStackItemTypeKey).toDynamicValue(function (_a) {
        var container = _a.container;
        return container.get(context_key_service_1.ContextKeyService).createKey('callStackItemType', undefined);
    }).inSingletonScope();
    core_1.bindContributionProvider(bind, debug_session_contribution_1.DebugSessionContribution);
    bind(debug_session_contribution_1.DebugSessionFactory).to(debug_session_contribution_1.DefaultDebugSessionFactory).inSingletonScope();
    bind(debug_session_manager_1.DebugSessionManager).toSelf().inSingletonScope();
    bind(breakpoint_manager_1.BreakpointManager).toSelf().inSingletonScope();
    bind(debug_editor_model_1.DebugEditorModelFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return (function (editor) {
            return debug_editor_model_1.DebugEditorModel.createModel(container, editor);
        });
    }).inSingletonScope();
    bind(debug_editor_service_1.DebugEditorService).toSelf().inSingletonScope().onActivation(function (context, service) {
        context.container.get(monaco_editor_service_1.MonacoEditorService).registerDecorationType(debug_breakpoint_widget_1.DebugBreakpointWidget.PLACEHOLDER_DECORATION, {});
        return service;
    });
    bind(debug_session_widget_1.DebugSessionWidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return function (options) { return debug_session_widget_1.DebugSessionWidget.createWidget(container, options); };
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: debug_widget_1.DebugWidget.ID,
            createWidget: function () { return debug_widget_1.DebugWidget.createWidget(container); }
        });
    }).inSingletonScope();
    debug_console_contribution_1.DebugConsoleContribution.bindContribution(bind);
    bind(debug_schema_updater_1.DebugSchemaUpdater).toSelf().inSingletonScope();
    bind(debug_configuration_manager_1.DebugConfigurationManager).toSelf().inSingletonScope();
    bind(debug_service_1.DebugService).toDynamicValue(function (context) { return browser_1.WebSocketConnectionProvider.createProxy(context.container, debug_service_1.DebugPath); }).inSingletonScope();
    bind(debug_resource_1.DebugResourceResolver).toSelf().inSingletonScope();
    bind(core_1.ResourceResolver).toService(debug_resource_1.DebugResourceResolver);
    bind(browser_1.KeybindingContext).to(debug_keybinding_contexts_1.InDebugModeContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(debug_keybinding_contexts_1.BreakpointWidgetInputFocusContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(debug_keybinding_contexts_1.BreakpointWidgetInputStrictFocusContext).inSingletonScope();
    browser_1.bindViewContribution(bind, debug_frontend_application_contribution_1.DebugFrontendApplicationContribution);
    bind(browser_1.FrontendApplicationContribution).toService(debug_frontend_application_contribution_1.DebugFrontendApplicationContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(debug_frontend_application_contribution_1.DebugFrontendApplicationContribution);
    bind(color_application_contribution_1.ColorContribution).toService(debug_frontend_application_contribution_1.DebugFrontendApplicationContribution);
    bind(debug_session_contribution_1.DebugSessionContributionRegistryImpl).toSelf().inSingletonScope();
    bind(debug_session_contribution_1.DebugSessionContributionRegistry).toService(debug_session_contribution_1.DebugSessionContributionRegistryImpl);
    bind(debug_prefix_configuration_1.DebugPrefixConfiguration).toSelf().inSingletonScope();
    try {
        for (var _b = __values([command_1.CommandContribution, browser_1.QuickOpenContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var identifier = _c.value;
            bind(identifier).toService(debug_prefix_configuration_1.DebugPrefixConfiguration);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    debug_preferences_1.bindDebugPreferences(bind);
    launch_preferences_1.bindLaunchPreferences(bind);
    bind(debug_watch_manager_1.DebugWatchManager).toSelf().inSingletonScope();
});
//# sourceMappingURL=debug-frontend-module.js.map
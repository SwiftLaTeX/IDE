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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
require("../../src/browser/terminal.css");
require("xterm/lib/xterm.css");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var terminal_frontend_contribution_1 = require("./terminal-frontend-contribution");
var terminal_widget_impl_1 = require("./terminal-widget-impl");
var terminal_widget_1 = require("./base/terminal-widget");
var terminal_protocol_1 = require("../common/terminal-protocol");
var terminal_watcher_1 = require("../common/terminal-watcher");
var shell_terminal_protocol_1 = require("../common/shell-terminal-protocol");
var terminal_keybinding_contexts_1 = require("./terminal-keybinding-contexts");
var terminal_common_module_1 = require("../common/terminal-common-module");
var terminal_service_1 = require("./base/terminal-service");
var terminal_preferences_1 = require("./terminal-preferences");
var terminal_linkmatcher_1 = require("./terminal-linkmatcher");
var terminal_contribution_1 = require("./terminal-contribution");
var terminal_linkmatcher_files_1 = require("./terminal-linkmatcher-files");
var terminal_linkmatcher_diff_1 = require("./terminal-linkmatcher-diff");
var terminal_quick_open_service_1 = require("./terminal-quick-open-service");
var terminal_copy_on_selection_handler_1 = require("./terminal-copy-on-selection-handler");
var color_application_contribution_1 = require("@theia/core/lib/browser/color-application-contribution");
var terminal_theme_service_1 = require("./terminal-theme-service");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a, e_2, _b;
    terminal_preferences_1.bindTerminalPreferences(bind);
    bind(browser_1.KeybindingContext).to(terminal_keybinding_contexts_1.TerminalActiveContext).inSingletonScope();
    bind(terminal_widget_1.TerminalWidget).to(terminal_widget_impl_1.TerminalWidgetImpl).inTransientScope();
    bind(terminal_watcher_1.TerminalWatcher).toSelf().inSingletonScope();
    var terminalNum = 0;
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID,
        createWidget: function (options) {
            var child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = ctx.container;
            var counter = terminalNum++;
            var domId = options.id || 'terminal-' + counter;
            var widgetOptions = __assign({ title: 'Terminal ' + counter, useServerTitle: true, destroyTermOnClose: true }, options);
            child.bind(terminal_widget_1.TerminalWidgetOptions).toConstantValue(widgetOptions);
            child.bind('terminal-dom-id').toConstantValue(domId);
            return child.get(terminal_widget_1.TerminalWidget);
        }
    }); });
    bind(terminal_quick_open_service_1.TerminalQuickOpenService).toSelf().inSingletonScope();
    bind(terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler).toSelf().inSingletonScope();
    bind(terminal_quick_open_service_1.TerminalQuickOpenContribution).toSelf().inSingletonScope();
    try {
        for (var _c = __values([common_1.CommandContribution, browser_1.QuickOpenContribution]), _d = _c.next(); !_d.done; _d = _c.next()) {
            var identifier = _d.value;
            bind(identifier).toService(terminal_quick_open_service_1.TerminalQuickOpenContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(terminal_theme_service_1.TerminalThemeService).toSelf().inSingletonScope();
    bind(terminal_frontend_contribution_1.TerminalFrontendContribution).toSelf().inSingletonScope();
    bind(terminal_service_1.TerminalService).toService(terminal_frontend_contribution_1.TerminalFrontendContribution);
    try {
        for (var _e = __values([common_1.CommandContribution, common_1.MenuContribution, browser_1.KeybindingContribution, tab_bar_toolbar_1.TabBarToolbarContribution, color_application_contribution_1.ColorContribution]), _f = _e.next(); !_f.done; _f = _e.next()) {
            var identifier = _f.value;
            bind(identifier).toService(terminal_frontend_contribution_1.TerminalFrontendContribution);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    bind(terminal_protocol_1.ITerminalServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var terminalWatcher = ctx.container.get(terminal_watcher_1.TerminalWatcher);
        return connection.createProxy(terminal_protocol_1.terminalPath, terminalWatcher.getTerminalClient());
    }).inSingletonScope();
    bind(shell_terminal_protocol_1.ShellTerminalServerProxy).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var terminalWatcher = ctx.container.get(terminal_watcher_1.TerminalWatcher);
        return connection.createProxy(shell_terminal_protocol_1.shellTerminalPath, terminalWatcher.getTerminalClient());
    }).inSingletonScope();
    bind(shell_terminal_protocol_1.IShellTerminalServer).toService(shell_terminal_protocol_1.ShellTerminalServerProxy);
    terminal_common_module_1.createCommonBindings(bind);
    // link matchers
    core_1.bindContributionProvider(bind, terminal_contribution_1.TerminalContribution);
    bind(terminal_linkmatcher_1.URLMatcher).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_1.URLMatcher);
    bind(terminal_linkmatcher_1.LocalhostMatcher).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_1.LocalhostMatcher);
    bind(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles);
    bind(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPre).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPre);
    bind(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPost).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPost);
});
//# sourceMappingURL=terminal-frontend-module.js.map
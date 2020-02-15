"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var keymaps_service_1 = require("./keymaps-service");
var keymaps_frontend_contribution_1 = require("./keymaps-frontend-contribution");
var common_1 = require("@theia/core/lib/common");
var keybinding_1 = require("@theia/core/lib/browser/keybinding");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
require("./keymaps-monaco-contribution");
var browser_1 = require("@theia/core/lib/browser");
var keybindings_widget_1 = require("./keybindings-widget");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(keymaps_service_1.KeymapsService).toSelf().inSingletonScope();
    bind(keymaps_frontend_contribution_1.KeymapsFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(keymaps_frontend_contribution_1.KeymapsFrontendContribution);
    bind(keybinding_1.KeybindingContribution).toService(keymaps_frontend_contribution_1.KeymapsFrontendContribution);
    bind(common_1.MenuContribution).toService(keymaps_frontend_contribution_1.KeymapsFrontendContribution);
    bind(keybindings_widget_1.KeybindingWidget).toSelf();
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(keymaps_frontend_contribution_1.KeymapsFrontendContribution);
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: keybindings_widget_1.KeybindingWidget.ID,
        createWidget: function () { return context.container.get(keybindings_widget_1.KeybindingWidget); },
    }); }).inSingletonScope();
});
//# sourceMappingURL=keymaps-frontend-module.js.map
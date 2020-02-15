"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var output_widget_1 = require("./output-widget");
var browser_1 = require("@theia/core/lib/browser");
var output_contribution_1 = require("./output-contribution");
var output_toolbar_contribution_1 = require("./output-toolbar-contribution");
var output_channel_1 = require("../common/output-channel");
var output_preferences_1 = require("../common/output-preferences");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    output_preferences_1.bindOutputPreferences(bind);
    bind(output_widget_1.OutputWidget).toSelf();
    bind(output_channel_1.OutputChannelManager).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: output_widget_1.OUTPUT_WIDGET_KIND,
        createWidget: function () { return context.container.get(output_widget_1.OutputWidget); }
    }); });
    browser_1.bindViewContribution(bind, output_contribution_1.OutputContribution);
    bind(output_toolbar_contribution_1.OutputToolbarContribution).toSelf().inSingletonScope();
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(output_toolbar_contribution_1.OutputToolbarContribution);
});
//# sourceMappingURL=output-frontend-module.js.map
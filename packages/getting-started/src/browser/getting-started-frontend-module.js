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
var getting_started_contribution_1 = require("./getting-started-contribution");
var inversify_1 = require("inversify");
var getting_started_widget_1 = require("./getting-started-widget");
var browser_1 = require("@theia/core/lib/browser");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    browser_1.bindViewContribution(bind, getting_started_contribution_1.GettingStartedContribution);
    bind(browser_1.FrontendApplicationContribution).toService(getting_started_contribution_1.GettingStartedContribution);
    bind(getting_started_widget_1.GettingStartedWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: getting_started_widget_1.GettingStartedWidget.ID,
        createWidget: function () { return context.container.get(getting_started_widget_1.GettingStartedWidget); },
    }); }).inSingletonScope();
});
//# sourceMappingURL=getting-started-frontend-module.js.map
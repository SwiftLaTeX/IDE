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
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var problem_widget_1 = require("./problem-widget");
var problem_contribution_1 = require("./problem-contribution");
var problem_container_1 = require("./problem-container");
var browser_1 = require("@theia/core/lib/browser");
var problem_manager_1 = require("./problem-manager");
var widget_manager_1 = require("@theia/core/lib/browser/widget-manager");
var navigator_decorator_service_1 = require("@theia/navigator/lib/browser/navigator-decorator-service");
var problem_decorator_1 = require("./problem-decorator");
var problem_tabbar_decorator_1 = require("./problem-tabbar-decorator");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var problem_layout_migrations_1 = require("./problem-layout-migrations");
var tab_bar_decorator_1 = require("@theia/core/lib/browser/shell/tab-bar-decorator");
var problem_preferences_1 = require("./problem-preferences");
var marker_tree_label_provider_1 = require("../marker-tree-label-provider");
exports.default = new inversify_1.ContainerModule(function (bind) {
    problem_preferences_1.bindProblemPreferences(bind);
    bind(problem_manager_1.ProblemManager).toSelf().inSingletonScope();
    bind(problem_widget_1.ProblemWidget).toDynamicValue(function (ctx) {
        return problem_container_1.createProblemWidget(ctx.container);
    });
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: problem_widget_1.PROBLEMS_WIDGET_ID,
        createWidget: function () { return context.container.get(problem_widget_1.ProblemWidget); }
    }); });
    bind(browser_1.ApplicationShellLayoutMigration).to(problem_layout_migrations_1.ProblemLayoutVersion3Migration).inSingletonScope();
    browser_1.bindViewContribution(bind, problem_contribution_1.ProblemContribution);
    bind(browser_1.FrontendApplicationContribution).toService(problem_contribution_1.ProblemContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(problem_contribution_1.ProblemContribution);
    bind(problem_decorator_1.ProblemDecorator).toSelf().inSingletonScope();
    bind(navigator_decorator_service_1.NavigatorTreeDecorator).toService(problem_decorator_1.ProblemDecorator);
    bind(problem_tabbar_decorator_1.ProblemTabBarDecorator).toSelf().inSingletonScope();
    bind(tab_bar_decorator_1.TabBarDecorator).toService(problem_tabbar_decorator_1.ProblemTabBarDecorator);
    bind(marker_tree_label_provider_1.MarkerTreeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(marker_tree_label_provider_1.MarkerTreeLabelProvider);
});
//# sourceMappingURL=problem-frontend-module.js.map
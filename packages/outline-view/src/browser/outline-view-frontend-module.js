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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var outline_view_service_1 = require("./outline-view-service");
var outline_view_contribution_1 = require("./outline-view-contribution");
var widget_manager_1 = require("@theia/core/lib/browser/widget-manager");
var browser_1 = require("@theia/core/lib/browser");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var outline_view_widget_1 = require("./outline-view-widget");
require("../../src/browser/styles/index.css");
var contribution_provider_1 = require("@theia/core/lib/common/contribution-provider");
var outline_decorator_service_1 = require("./outline-decorator-service");
var outline_view_tree_1 = require("./outline-view-tree");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(outline_view_widget_1.OutlineViewWidgetFactory).toFactory(function (ctx) {
        return function () { return createOutlineViewWidget(ctx.container); };
    });
    bind(outline_view_service_1.OutlineViewService).toSelf().inSingletonScope();
    bind(widget_manager_1.WidgetFactory).toService(outline_view_service_1.OutlineViewService);
    browser_1.bindViewContribution(bind, outline_view_contribution_1.OutlineViewContribution);
    bind(browser_1.FrontendApplicationContribution).toService(outline_view_contribution_1.OutlineViewContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(outline_view_contribution_1.OutlineViewContribution);
});
/**
 * Create an `OutlineViewWidget`.
 * - The creation of the `OutlineViewWidget` includes:
 *  - The creation of the tree widget itself with it's own customized props.
 *  - The binding of necessary components into the container.
 * @param parent the Inversify container.
 *
 * @returns the `OutlineViewWidget`.
 */
function createOutlineViewWidget(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.rebind(browser_1.TreeProps).toConstantValue(__assign(__assign({}, browser_1.defaultTreeProps), { search: true }));
    child.unbind(browser_1.TreeWidget);
    child.bind(outline_view_widget_1.OutlineViewWidget).toSelf();
    child.unbind(browser_1.TreeModelImpl);
    child.bind(outline_view_tree_1.OutlineViewTreeModel).toSelf();
    child.rebind(browser_1.TreeModel).toService(outline_view_tree_1.OutlineViewTreeModel);
    child.bind(outline_decorator_service_1.OutlineDecoratorService).toSelf().inSingletonScope();
    child.rebind(browser_1.TreeDecoratorService).toDynamicValue(function (ctx) { return ctx.container.get(outline_decorator_service_1.OutlineDecoratorService); }).inSingletonScope();
    contribution_provider_1.bindContributionProvider(child, outline_decorator_service_1.OutlineTreeDecorator);
    return child.get(outline_view_widget_1.OutlineViewWidget);
}
//# sourceMappingURL=outline-view-frontend-module.js.map
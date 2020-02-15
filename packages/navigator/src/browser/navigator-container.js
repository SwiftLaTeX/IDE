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
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/filesystem/lib/browser");
var contribution_provider_1 = require("@theia/core/lib/common/contribution-provider");
var navigator_tree_1 = require("./navigator-tree");
var navigator_model_1 = require("./navigator-model");
var navigator_widget_1 = require("./navigator-widget");
var navigator_contribution_1 = require("./navigator-contribution");
var navigator_decorator_service_1 = require("./navigator-decorator-service");
exports.FILE_NAVIGATOR_PROPS = __assign(__assign({}, browser_1.defaultTreeProps), { contextMenuPath: navigator_contribution_1.NAVIGATOR_CONTEXT_MENU, multiSelect: true, search: true, globalSelection: true });
function createFileNavigatorContainer(parent) {
    var child = browser_2.createFileTreeContainer(parent);
    child.unbind(browser_2.FileTree);
    child.bind(navigator_tree_1.FileNavigatorTree).toSelf();
    child.rebind(browser_1.Tree).toService(navigator_tree_1.FileNavigatorTree);
    child.unbind(browser_2.FileTreeModel);
    child.bind(navigator_model_1.FileNavigatorModel).toSelf();
    child.rebind(browser_1.TreeModel).toService(navigator_model_1.FileNavigatorModel);
    child.unbind(browser_2.FileTreeWidget);
    child.bind(navigator_widget_1.FileNavigatorWidget).toSelf();
    child.rebind(browser_1.TreeProps).toConstantValue(exports.FILE_NAVIGATOR_PROPS);
    child.bind(navigator_decorator_service_1.NavigatorDecoratorService).toSelf().inSingletonScope();
    child.rebind(browser_1.TreeDecoratorService).toService(navigator_decorator_service_1.NavigatorDecoratorService);
    contribution_provider_1.bindContributionProvider(child, navigator_decorator_service_1.NavigatorTreeDecorator);
    return child;
}
exports.createFileNavigatorContainer = createFileNavigatorContainer;
function createFileNavigatorWidget(parent) {
    return createFileNavigatorContainer(parent).get(navigator_widget_1.FileNavigatorWidget);
}
exports.createFileNavigatorWidget = createFileNavigatorWidget;
//# sourceMappingURL=navigator-container.js.map
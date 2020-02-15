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
var preferences_decorator_1 = require("./preferences-decorator");
var preferences_decorator_service_1 = require("./preferences-decorator-service");
var browser_1 = require("@theia/core/lib/browser");
var preferences_tree_widget_1 = require("./preferences-tree-widget");
function createPreferencesTreeWidget(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.bind(preferences_tree_widget_1.PreferencesTreeWidget).toSelf();
    child.rebind(browser_1.TreeProps).toConstantValue(__assign(__assign({}, browser_1.defaultTreeProps), { search: true }));
    child.rebind(browser_1.TreeWidget).toService(preferences_tree_widget_1.PreferencesTreeWidget);
    bindPreferencesDecorator(child);
    return child.get(preferences_tree_widget_1.PreferencesTreeWidget);
}
exports.createPreferencesTreeWidget = createPreferencesTreeWidget;
function bindPreferencesDecorator(parent) {
    parent.bind(preferences_decorator_1.PreferencesDecorator).toSelf().inSingletonScope();
    parent.bind(preferences_decorator_service_1.PreferencesDecoratorService).toSelf().inSingletonScope();
    parent.rebind(browser_1.TreeDecoratorService).toService(preferences_decorator_service_1.PreferencesDecoratorService);
}
//# sourceMappingURL=preference-tree-container.js.map
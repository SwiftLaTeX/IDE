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
var marker_tree_1 = require("../marker-tree");
var problem_widget_1 = require("./problem-widget");
var problem_tree_model_1 = require("./problem-tree-model");
var browser_1 = require("@theia/core/lib/browser");
var problem_marker_1 = require("../../common/problem-marker");
exports.PROBLEM_TREE_PROPS = __assign(__assign({}, browser_1.defaultTreeProps), { contextMenuPath: [problem_marker_1.PROBLEM_KIND], globalSelection: true });
exports.PROBLEM_OPTIONS = {
    kind: 'problem'
};
function createProblemTreeContainer(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.unbind(browser_1.TreeImpl);
    child.bind(problem_tree_model_1.ProblemTree).toSelf();
    child.rebind(browser_1.Tree).toService(problem_tree_model_1.ProblemTree);
    child.unbind(browser_1.TreeWidget);
    child.bind(problem_widget_1.ProblemWidget).toSelf();
    child.unbind(browser_1.TreeModelImpl);
    child.bind(problem_tree_model_1.ProblemTreeModel).toSelf();
    child.rebind(browser_1.TreeModel).toService(problem_tree_model_1.ProblemTreeModel);
    child.rebind(browser_1.TreeProps).toConstantValue(exports.PROBLEM_TREE_PROPS);
    child.bind(marker_tree_1.MarkerOptions).toConstantValue(exports.PROBLEM_OPTIONS);
    return child;
}
exports.createProblemTreeContainer = createProblemTreeContainer;
function createProblemWidget(parent) {
    return createProblemTreeContainer(parent).get(problem_widget_1.ProblemWidget);
}
exports.createProblemWidget = createProblemWidget;
//# sourceMappingURL=problem-container.js.map
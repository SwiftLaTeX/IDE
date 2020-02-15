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
var browser_1 = require("@theia/core/lib/browser");
var callhierarchy_tree_1 = require("./callhierarchy-tree");
var callhierarchy_tree_model_1 = require("./callhierarchy-tree-model");
var callhierarchy_tree_widget_1 = require("./callhierarchy-tree-widget");
function createHierarchyTreeContainer(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.unbind(browser_1.TreeImpl);
    child.bind(callhierarchy_tree_1.CallHierarchyTree).toSelf();
    child.rebind(browser_1.Tree).toService(callhierarchy_tree_1.CallHierarchyTree);
    child.unbind(browser_1.TreeModelImpl);
    child.bind(callhierarchy_tree_model_1.CallHierarchyTreeModel).toSelf();
    child.rebind(browser_1.TreeModel).toService(callhierarchy_tree_model_1.CallHierarchyTreeModel);
    child.bind(callhierarchy_tree_widget_1.CallHierarchyTreeWidget).toSelf();
    child.rebind(browser_1.TreeWidget).toService(callhierarchy_tree_widget_1.CallHierarchyTreeWidget);
    return child;
}
function createHierarchyTreeWidget(parent) {
    return createHierarchyTreeContainer(parent).get(callhierarchy_tree_widget_1.CallHierarchyTreeWidget);
}
exports.createHierarchyTreeWidget = createHierarchyTreeWidget;
//# sourceMappingURL=callhierarchy-tree-container.js.map
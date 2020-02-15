"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var tree_1 = require("@theia/core/lib/browser/tree");
var typehierarchy_tree_1 = require("./typehierarchy-tree");
var typehierarchy_tree_model_1 = require("./typehierarchy-tree-model");
var typehierarchy_tree_widget_1 = require("./typehierarchy-tree-widget");
function createHierarchyTreeContainer(parent) {
    var child = tree_1.createTreeContainer(parent);
    child.unbind(tree_1.TreeImpl);
    child.bind(typehierarchy_tree_1.TypeHierarchyTree).toSelf();
    child.rebind(tree_1.Tree).toService(typehierarchy_tree_1.TypeHierarchyTree);
    child.unbind(tree_1.TreeModelImpl);
    child.bind(typehierarchy_tree_model_1.TypeHierarchyTreeModel).toSelf();
    child.rebind(tree_1.TreeModel).toService(typehierarchy_tree_model_1.TypeHierarchyTreeModel);
    child.bind(typehierarchy_tree_widget_1.TypeHierarchyTreeWidget).toSelf();
    child.rebind(tree_1.TreeWidget).toService(typehierarchy_tree_widget_1.TypeHierarchyTreeWidget);
    return child;
}
function createHierarchyTreeWidget(parent) {
    return createHierarchyTreeContainer(parent).get(typehierarchy_tree_widget_1.TypeHierarchyTreeWidget);
}
exports.createHierarchyTreeWidget = createHierarchyTreeWidget;
//# sourceMappingURL=typehierarchy-tree-container.js.map
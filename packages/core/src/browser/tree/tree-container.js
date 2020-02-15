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
var tree_widget_1 = require("./tree-widget");
var tree_model_1 = require("./tree-model");
var tree_1 = require("./tree");
var tree_selection_1 = require("./tree-selection");
var tree_selection_impl_1 = require("./tree-selection-impl");
var tree_expansion_1 = require("./tree-expansion");
var tree_navigation_1 = require("./tree-navigation");
var tree_decorator_1 = require("./tree-decorator");
var tree_search_1 = require("./tree-search");
var fuzzy_search_1 = require("./fuzzy-search");
var search_box_1 = require("./search-box");
var search_box_debounce_1 = require("./search-box-debounce");
function createTreeContainer(parent, props) {
    var child = new inversify_1.Container({ defaultScope: 'Singleton' });
    child.parent = parent;
    child.bind(tree_1.TreeImpl).toSelf();
    child.bind(tree_1.Tree).toService(tree_1.TreeImpl);
    child.bind(tree_selection_impl_1.TreeSelectionServiceImpl).toSelf();
    child.bind(tree_selection_1.TreeSelectionService).toService(tree_selection_impl_1.TreeSelectionServiceImpl);
    child.bind(tree_expansion_1.TreeExpansionServiceImpl).toSelf();
    child.bind(tree_expansion_1.TreeExpansionService).toService(tree_expansion_1.TreeExpansionServiceImpl);
    child.bind(tree_navigation_1.TreeNavigationService).toSelf();
    child.bind(tree_model_1.TreeModelImpl).toSelf();
    child.bind(tree_model_1.TreeModel).toService(tree_model_1.TreeModelImpl);
    child.bind(tree_widget_1.TreeWidget).toSelf();
    child.bind(tree_widget_1.TreeProps).toConstantValue(__assign(__assign({}, tree_widget_1.defaultTreeProps), props));
    child.bind(tree_search_1.TreeSearch).toSelf().inSingletonScope();
    child.bind(fuzzy_search_1.FuzzySearch).toSelf().inSingletonScope();
    child.bind(search_box_1.SearchBoxFactory).toFactory(function (context) {
        return function (options) {
            var debounce = new search_box_debounce_1.SearchBoxDebounce(options);
            return new search_box_1.SearchBox(options, debounce);
        };
    });
    child.bind(tree_decorator_1.TreeDecoratorService).to(tree_decorator_1.NoopTreeDecoratorService).inSingletonScope();
    return child;
}
exports.createTreeContainer = createTreeContainer;
//# sourceMappingURL=tree-container.js.map
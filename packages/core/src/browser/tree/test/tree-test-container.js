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
var tree_1 = require("../tree");
var tree_model_1 = require("../tree-model");
var inversify_1 = require("inversify");
var tree_selection_impl_1 = require("../tree-selection-impl");
var tree_selection_1 = require("../tree-selection");
var tree_expansion_1 = require("../tree-expansion");
var tree_navigation_1 = require("../tree-navigation");
var tree_search_1 = require("../tree-search");
var fuzzy_search_1 = require("../fuzzy-search");
var mock_logger_1 = require("../../../common/test/mock-logger");
var common_1 = require("../../../common");
var label_provider_1 = require("../../label-provider");
function createTreeTestContainer() {
    var container = new inversify_1.Container({ defaultScope: 'Singleton' });
    container.bind(tree_1.TreeImpl).toSelf();
    container.bind(tree_1.Tree).toService(tree_1.TreeImpl);
    container.bind(tree_selection_impl_1.TreeSelectionServiceImpl).toSelf();
    container.bind(tree_selection_1.TreeSelectionService).toService(tree_selection_impl_1.TreeSelectionServiceImpl);
    container.bind(tree_expansion_1.TreeExpansionServiceImpl).toSelf();
    container.bind(tree_expansion_1.TreeExpansionService).toService(tree_expansion_1.TreeExpansionServiceImpl);
    container.bind(tree_navigation_1.TreeNavigationService).toSelf();
    container.bind(tree_model_1.TreeModelImpl).toSelf();
    container.bind(tree_model_1.TreeModel).toService(tree_model_1.TreeModelImpl);
    container.bind(tree_search_1.TreeSearch).toSelf();
    container.bind(fuzzy_search_1.FuzzySearch).toSelf();
    container.bind(mock_logger_1.MockLogger).toSelf();
    container.bind(common_1.ILogger).to(mock_logger_1.MockLogger);
    common_1.bindContributionProvider(container, label_provider_1.LabelProviderContribution);
    container.bind(label_provider_1.LabelProvider).toSelf().inSingletonScope();
    return container;
}
exports.createTreeTestContainer = createTreeTestContainer;
//# sourceMappingURL=tree-test-container.js.map
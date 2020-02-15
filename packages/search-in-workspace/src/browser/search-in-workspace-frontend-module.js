"use strict";
/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
require("../../src/browser/styles/index.css");
var inversify_1 = require("inversify");
var search_in_workspace_service_1 = require("./search-in-workspace-service");
var search_in_workspace_interface_1 = require("../common/search-in-workspace-interface");
var browser_1 = require("@theia/core/lib/browser");
var core_1 = require("@theia/core");
var search_in_workspace_widget_1 = require("./search-in-workspace-widget");
var search_in_workspace_result_tree_widget_1 = require("./search-in-workspace-result-tree-widget");
var search_in_workspace_frontend_contribution_1 = require("./search-in-workspace-frontend-contribution");
var in_memory_text_resource_1 = require("./in-memory-text-resource");
var search_in_workspace_context_key_service_1 = require("./search-in-workspace-context-key-service");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var search_in_workspace_preferences_1 = require("./search-in-workspace-preferences");
var search_in_workspace_label_provider_1 = require("./search-in-workspace-label-provider");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService).toSelf().inSingletonScope();
    bind(search_in_workspace_widget_1.SearchInWorkspaceWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: search_in_workspace_widget_1.SearchInWorkspaceWidget.ID,
        createWidget: function () { return ctx.container.get(search_in_workspace_widget_1.SearchInWorkspaceWidget); }
    }); });
    bind(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget).toDynamicValue(function (ctx) { return createSearchTreeWidget(ctx.container); });
    browser_1.bindViewContribution(bind, search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    // The object that gets notified of search results.
    bind(search_in_workspace_service_1.SearchInWorkspaceClientImpl).toSelf().inSingletonScope();
    bind(search_in_workspace_service_1.SearchInWorkspaceService).toSelf().inSingletonScope();
    // The object to call methods on the backend.
    bind(search_in_workspace_interface_1.SearchInWorkspaceServer).toDynamicValue(function (ctx) {
        var client = ctx.container.get(search_in_workspace_service_1.SearchInWorkspaceClientImpl);
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, search_in_workspace_interface_1.SIW_WS_PATH, client);
    }).inSingletonScope();
    bind(in_memory_text_resource_1.InMemoryTextResourceResolver).toSelf().inSingletonScope();
    bind(core_1.ResourceResolver).toService(in_memory_text_resource_1.InMemoryTextResourceResolver);
    search_in_workspace_preferences_1.bindSearchInWorkspacePreferences(bind);
    bind(search_in_workspace_label_provider_1.SearchInWorkspaceLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(search_in_workspace_label_provider_1.SearchInWorkspaceLabelProvider);
});
function createSearchTreeWidget(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.unbind(browser_1.TreeWidget);
    child.bind(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget).toSelf();
    return child.get(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget);
}
exports.createSearchTreeWidget = createSearchTreeWidget;
//# sourceMappingURL=search-in-workspace-frontend-module.js.map
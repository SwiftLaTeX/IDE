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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var search_in_workspace_result_tree_widget_1 = require("./search-in-workspace-result-tree-widget");
var uri_1 = require("@theia/core/lib/common/uri");
var SearchInWorkspaceLabelProvider = /** @class */ (function () {
    function SearchInWorkspaceLabelProvider() {
    }
    SearchInWorkspaceLabelProvider.prototype.canHandle = function (element) {
        return search_in_workspace_result_tree_widget_1.SearchInWorkspaceRootFolderNode.is(element) || search_in_workspace_result_tree_widget_1.SearchInWorkspaceFileNode.is(element) ? 100 : 0;
    };
    SearchInWorkspaceLabelProvider.prototype.getIcon = function (node) {
        if (search_in_workspace_result_tree_widget_1.SearchInWorkspaceFileNode.is(node)) {
            return this.labelProvider.getIcon(new uri_1.default(node.fileUri).withScheme('file'));
        }
        return this.labelProvider.folderIcon;
    };
    SearchInWorkspaceLabelProvider.prototype.getName = function (node) {
        var uri = search_in_workspace_result_tree_widget_1.SearchInWorkspaceFileNode.is(node) ? node.fileUri : node.folderUri;
        return new uri_1.default(uri).displayName;
    };
    SearchInWorkspaceLabelProvider.prototype.affects = function (node, event) {
        return search_in_workspace_result_tree_widget_1.SearchInWorkspaceFileNode.is(node) && event.affects(new uri_1.default(node.fileUri).withScheme('file'));
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], SearchInWorkspaceLabelProvider.prototype, "labelProvider", void 0);
    SearchInWorkspaceLabelProvider = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceLabelProvider);
    return SearchInWorkspaceLabelProvider;
}());
exports.SearchInWorkspaceLabelProvider = SearchInWorkspaceLabelProvider;
//# sourceMappingURL=search-in-workspace-label-provider.js.map
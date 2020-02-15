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
var file_tree_1 = require("./file-tree");
var tree_label_provider_1 = require("@theia/core/lib/browser/tree/tree-label-provider");
var FileTreeLabelProvider = /** @class */ (function () {
    function FileTreeLabelProvider() {
    }
    FileTreeLabelProvider.prototype.canHandle = function (element) {
        return file_tree_1.FileStatNode.is(element) ?
            this.treeLabelProvider.canHandle(element) + 1 :
            0;
    };
    FileTreeLabelProvider.prototype.getIcon = function (node) {
        return this.labelProvider.getIcon(node.fileStat);
    };
    FileTreeLabelProvider.prototype.getName = function (node) {
        return this.labelProvider.getName(node.fileStat);
    };
    FileTreeLabelProvider.prototype.getDescription = function (node) {
        return this.labelProvider.getLongName(node.fileStat);
    };
    FileTreeLabelProvider.prototype.affects = function (node, event) {
        return event.affects(node.fileStat);
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], FileTreeLabelProvider.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(tree_label_provider_1.TreeLabelProvider),
        __metadata("design:type", tree_label_provider_1.TreeLabelProvider)
    ], FileTreeLabelProvider.prototype, "treeLabelProvider", void 0);
    FileTreeLabelProvider = __decorate([
        inversify_1.injectable()
    ], FileTreeLabelProvider);
    return FileTreeLabelProvider;
}());
exports.FileTreeLabelProvider = FileTreeLabelProvider;
//# sourceMappingURL=file-tree-label-provider.js.map
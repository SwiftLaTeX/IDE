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
var git_file_change_node_1 = require("./git-file-change-node");
var uri_1 = require("@theia/core/lib/common/uri");
var git_repository_provider_1 = require("./git-repository-provider");
var common_1 = require("../common");
var GitFileChangeLabelProvider = /** @class */ (function () {
    function GitFileChangeLabelProvider() {
    }
    GitFileChangeLabelProvider.prototype.canHandle = function (element) {
        return git_file_change_node_1.GitFileChangeNode.is(element) ? 100 : 0;
    };
    GitFileChangeLabelProvider.prototype.getIcon = function (node) {
        return this.labelProvider.getIcon(new uri_1.default(node.uri));
    };
    GitFileChangeLabelProvider.prototype.getName = function (node) {
        return this.labelProvider.getName(new uri_1.default(node.uri));
    };
    GitFileChangeLabelProvider.prototype.getDescription = function (node) {
        return this.relativePath(new uri_1.default(node.uri).parent);
    };
    GitFileChangeLabelProvider.prototype.affects = function (node, event) {
        return event.affects(new uri_1.default(node.uri));
    };
    GitFileChangeLabelProvider.prototype.getCaption = function (fileChange) {
        var result = this.relativePath(fileChange.uri) + " - " + this.getStatusCaption(fileChange.status, true);
        if (fileChange.oldUri) {
            result = this.relativePath(fileChange.oldUri) + " -> " + result;
        }
        return result;
    };
    GitFileChangeLabelProvider.prototype.relativePath = function (uri) {
        var parsedUri = typeof uri === 'string' ? new uri_1.default(uri) : uri;
        var repo = this.repositoryProvider.findRepository(parsedUri);
        var relativePath = repo && common_1.Repository.relativePath(repo, parsedUri);
        if (relativePath) {
            return relativePath.toString();
        }
        return this.labelProvider.getLongName(parsedUri);
    };
    GitFileChangeLabelProvider.prototype.getStatusCaption = function (status, staged) {
        return common_1.GitFileStatus.toString(status, staged);
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], GitFileChangeLabelProvider.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(git_repository_provider_1.GitRepositoryProvider),
        __metadata("design:type", git_repository_provider_1.GitRepositoryProvider)
    ], GitFileChangeLabelProvider.prototype, "repositoryProvider", void 0);
    GitFileChangeLabelProvider = __decorate([
        inversify_1.injectable()
    ], GitFileChangeLabelProvider);
    return GitFileChangeLabelProvider;
}());
exports.GitFileChangeLabelProvider = GitFileChangeLabelProvider;
//# sourceMappingURL=git-file-change-label-provider.js.map
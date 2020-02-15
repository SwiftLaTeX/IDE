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
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var SearchInWorkspaceContextKeyService = /** @class */ (function () {
    function SearchInWorkspaceContextKeyService() {
    }
    Object.defineProperty(SearchInWorkspaceContextKeyService.prototype, "searchViewletVisible", {
        get: function () {
            return this._searchViewletVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceContextKeyService.prototype, "searchViewletFocus", {
        get: function () {
            return this._searchViewletFocus;
        },
        enumerable: true,
        configurable: true
    });
    SearchInWorkspaceContextKeyService.prototype.setSearchInputBoxFocus = function (searchInputBoxFocus) {
        this.searchInputBoxFocus.set(searchInputBoxFocus);
        this.updateInputBoxFocus();
    };
    SearchInWorkspaceContextKeyService.prototype.setReplaceInputBoxFocus = function (replaceInputBoxFocus) {
        this.replaceInputBoxFocus.set(replaceInputBoxFocus);
        this.updateInputBoxFocus();
    };
    SearchInWorkspaceContextKeyService.prototype.setPatternIncludesInputBoxFocus = function (patternIncludesInputBoxFocus) {
        this.patternIncludesInputBoxFocus.set(patternIncludesInputBoxFocus);
        this.updateInputBoxFocus();
    };
    SearchInWorkspaceContextKeyService.prototype.setPatternExcludesInputBoxFocus = function (patternExcludesInputBoxFocus) {
        this.patternExcludesInputBoxFocus.set(patternExcludesInputBoxFocus);
        this.updateInputBoxFocus();
    };
    SearchInWorkspaceContextKeyService.prototype.updateInputBoxFocus = function () {
        this.inputBoxFocus.set(this.searchInputBoxFocus.get() ||
            this.replaceInputBoxFocus.get() ||
            this.patternIncludesInputBoxFocus.get() ||
            this.patternExcludesInputBoxFocus.get());
    };
    Object.defineProperty(SearchInWorkspaceContextKeyService.prototype, "replaceActive", {
        get: function () {
            return this._replaceActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceContextKeyService.prototype, "hasSearchResult", {
        get: function () {
            return this._hasSearchResult;
        },
        enumerable: true,
        configurable: true
    });
    SearchInWorkspaceContextKeyService.prototype.init = function () {
        this._searchViewletVisible = this.contextKeyService.createKey('searchViewletVisible', false);
        this._searchViewletFocus = this.contextKeyService.createKey('searchViewletFocus', false);
        this.inputBoxFocus = this.contextKeyService.createKey('inputBoxFocus', false);
        this.searchInputBoxFocus = this.contextKeyService.createKey('searchInputBoxFocus', false);
        this.replaceInputBoxFocus = this.contextKeyService.createKey('replaceInputBoxFocus', false);
        this.patternIncludesInputBoxFocus = this.contextKeyService.createKey('patternIncludesInputBoxFocus', false);
        this.patternExcludesInputBoxFocus = this.contextKeyService.createKey('patternExcludesInputBoxFocus', false);
        this._replaceActive = this.contextKeyService.createKey('replaceActive', false);
        this._hasSearchResult = this.contextKeyService.createKey('hasSearchResult', false);
    };
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], SearchInWorkspaceContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceContextKeyService.prototype, "init", null);
    SearchInWorkspaceContextKeyService = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceContextKeyService);
    return SearchInWorkspaceContextKeyService;
}());
exports.SearchInWorkspaceContextKeyService = SearchInWorkspaceContextKeyService;
//# sourceMappingURL=search-in-workspace-context-key-service.js.map
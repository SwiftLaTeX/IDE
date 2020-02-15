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
var NavigatorContextKeyService = /** @class */ (function () {
    function NavigatorContextKeyService() {
    }
    Object.defineProperty(NavigatorContextKeyService.prototype, "explorerViewletVisible", {
        get: function () {
            return this._explorerViewletVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigatorContextKeyService.prototype, "explorerViewletFocus", {
        /** True if Explorer view has keyboard focus. */
        get: function () {
            return this._explorerViewletFocus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigatorContextKeyService.prototype, "filesExplorerFocus", {
        /** True if File Explorer section has keyboard focus. */
        get: function () {
            return this._filesExplorerFocus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigatorContextKeyService.prototype, "explorerResourceIsFolder", {
        get: function () {
            return this._explorerResourceIsFolder;
        },
        enumerable: true,
        configurable: true
    });
    NavigatorContextKeyService.prototype.init = function () {
        this._explorerViewletVisible = this.contextKeyService.createKey('explorerViewletVisible', false);
        this._explorerViewletFocus = this.contextKeyService.createKey('explorerViewletFocus', false);
        this._filesExplorerFocus = this.contextKeyService.createKey('filesExplorerFocus', false);
        this._explorerResourceIsFolder = this.contextKeyService.createKey('explorerResourceIsFolder', false);
    };
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], NavigatorContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigatorContextKeyService.prototype, "init", null);
    NavigatorContextKeyService = __decorate([
        inversify_1.injectable()
    ], NavigatorContextKeyService);
    return NavigatorContextKeyService;
}());
exports.NavigatorContextKeyService = NavigatorContextKeyService;
//# sourceMappingURL=navigator-context-key-service.js.map
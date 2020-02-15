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
var common_1 = require("@theia/core/lib/common");
var language_selector_1 = require("@theia/languages/lib/common/language-selector");
exports.CallHierarchyService = Symbol('CallHierarchyService');
var CallHierarchyServiceProvider = /** @class */ (function () {
    function CallHierarchyServiceProvider() {
        this.services = [];
    }
    CallHierarchyServiceProvider.prototype.init = function () {
        this.services = this.services.concat(this.contributions.getContributions());
    };
    CallHierarchyServiceProvider.prototype.get = function (languageId, uri) {
        return this.services.sort(function (left, right) {
            return language_selector_1.score(right.selector, uri.scheme, uri.path.toString(), languageId, true) - language_selector_1.score(left.selector, uri.scheme, uri.path.toString(), languageId, true);
        })[0];
    };
    CallHierarchyServiceProvider.prototype.add = function (service) {
        this.services.push(service);
        var that = this;
        return {
            dispose: function () {
                that.remove(service);
            }
        };
    };
    CallHierarchyServiceProvider.prototype.remove = function (service) {
        var length = this.services.length;
        this.services = this.services.filter(function (value) { return value !== service; });
        return length !== this.services.length;
    };
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(exports.CallHierarchyService),
        __metadata("design:type", Object)
    ], CallHierarchyServiceProvider.prototype, "contributions", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CallHierarchyServiceProvider.prototype, "init", null);
    CallHierarchyServiceProvider = __decorate([
        inversify_1.injectable()
    ], CallHierarchyServiceProvider);
    return CallHierarchyServiceProvider;
}());
exports.CallHierarchyServiceProvider = CallHierarchyServiceProvider;
//# sourceMappingURL=callhierarchy-service.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var user_storage_service_1 = require("./user-storage-service");
var user_storage_uri_1 = require("./user-storage-uri");
var UserStorageResource = /** @class */ (function () {
    function UserStorageResource(uri, service) {
        var _this = this;
        this.uri = uri;
        this.service = service;
        this.onDidChangeContentsEmitter = new common_1.Emitter();
        this.toDispose = new common_1.DisposableCollection();
        this.toDispose.push(this.service.onUserStorageChanged(function (e) {
            var e_1, _a;
            try {
                for (var _b = __values(e.uris), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var changedUri = _c.value;
                    if (changedUri.toString() === _this.uri.toString()) {
                        _this.onDidChangeContentsEmitter.fire(undefined);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }));
        this.toDispose.push(this.onDidChangeContentsEmitter);
    }
    UserStorageResource.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    UserStorageResource.prototype.readContents = function (options) {
        return this.service.readContents(this.uri);
    };
    UserStorageResource.prototype.saveContents = function (content) {
        return this.service.saveContents(this.uri, content);
    };
    Object.defineProperty(UserStorageResource.prototype, "onDidChangeContents", {
        get: function () {
            return this.onDidChangeContentsEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    return UserStorageResource;
}());
exports.UserStorageResource = UserStorageResource;
var UserStorageResolver = /** @class */ (function () {
    function UserStorageResolver(service) {
        this.service = service;
    }
    UserStorageResolver.prototype.resolve = function (uri) {
        if (uri.scheme !== user_storage_uri_1.UserStorageUri.SCHEME) {
            throw new Error('The given uri is not a user storage uri: ' + uri);
        }
        return new UserStorageResource(uri, this.service);
    };
    UserStorageResolver = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(user_storage_service_1.UserStorageService)),
        __metadata("design:paramtypes", [Object])
    ], UserStorageResolver);
    return UserStorageResolver;
}());
exports.UserStorageResolver = UserStorageResolver;
//# sourceMappingURL=user-storage-resource.js.map
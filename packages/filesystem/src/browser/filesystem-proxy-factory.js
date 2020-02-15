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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var proxy_factory_1 = require("@theia/core/lib/common/messaging/proxy-factory");
var filesystem_preferences_1 = require("./filesystem-preferences");
var FileSystemProxyFactory = /** @class */ (function (_super) {
    __extends(FileSystemProxyFactory, _super);
    function FileSystemProxyFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileSystemProxyFactory.prototype.get = function (target, propertyKey, receiver) {
        var _this = this;
        var property = _super.prototype.get.call(this, target, propertyKey, receiver);
        if (propertyKey !== 'delete') {
            return property;
        }
        var deleteFn = function (uri, options) {
            var opt = __assign({}, options);
            if (opt.moveToTrash === undefined) {
                opt.moveToTrash = _this.preferences['files.enableTrash'];
            }
            return property(uri, opt);
        };
        return deleteFn;
    };
    __decorate([
        inversify_1.inject(filesystem_preferences_1.FileSystemPreferences),
        __metadata("design:type", Object)
    ], FileSystemProxyFactory.prototype, "preferences", void 0);
    FileSystemProxyFactory = __decorate([
        inversify_1.injectable()
    ], FileSystemProxyFactory);
    return FileSystemProxyFactory;
}(proxy_factory_1.JsonRpcProxyFactory));
exports.FileSystemProxyFactory = FileSystemProxyFactory;
//# sourceMappingURL=filesystem-proxy-factory.js.map
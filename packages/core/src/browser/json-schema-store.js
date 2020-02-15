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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var debounce = require("lodash.debounce");
var inversify_1 = require("inversify");
var resource_1 = require("../common/resource");
var disposable_1 = require("../common/disposable");
var event_1 = require("../common/event");
var uri_1 = require("../common/uri");
var JsonSchemaStore = /** @class */ (function () {
    function JsonSchemaStore() {
        var _this = this;
        this.schemas = [];
        this.onSchemasChangedEmitter = new event_1.Emitter();
        this.onSchemasChanged = this.onSchemasChangedEmitter.event;
        this.onDidChangeSchemaEmitter = new event_1.Emitter();
        this.onDidChangeSchema = this.onDidChangeSchemaEmitter.event;
        this.notifyChanged = debounce(function () {
            _this.onSchemasChangedEmitter.fire(undefined);
        }, 500);
    }
    JsonSchemaStore.prototype.registerSchema = function (config) {
        var _this = this;
        var toDispose = new disposable_1.DisposableCollection();
        var uri = new uri_1.default(config.url);
        if (uri.scheme === 'vscode') {
            var resource = this.inMemoryResources.resolve(new uri_1.default(config.url));
            if (resource && resource.onDidChangeContents) {
                toDispose.push(resource.onDidChangeContents(function () {
                    _this.onDidChangeSchemaEmitter.fire(uri);
                    _this.notifyChanged();
                }));
            }
        }
        this.schemas.push(config);
        toDispose.push(disposable_1.Disposable.create(function () {
            var idx = _this.schemas.indexOf(config);
            if (idx > -1) {
                _this.schemas.splice(idx, 1);
                _this.onDidChangeSchemaEmitter.fire(uri);
                _this.notifyChanged();
            }
        }));
        this.onDidChangeSchemaEmitter.fire(uri);
        this.notifyChanged();
        return toDispose;
    };
    JsonSchemaStore.prototype.getJsonSchemaConfigurations = function () {
        return __spread(this.schemas);
    };
    __decorate([
        inversify_1.inject(resource_1.InMemoryResources),
        __metadata("design:type", resource_1.InMemoryResources)
    ], JsonSchemaStore.prototype, "inMemoryResources", void 0);
    JsonSchemaStore = __decorate([
        inversify_1.injectable()
    ], JsonSchemaStore);
    return JsonSchemaStore;
}());
exports.JsonSchemaStore = JsonSchemaStore;
//# sourceMappingURL=json-schema-store.js.map
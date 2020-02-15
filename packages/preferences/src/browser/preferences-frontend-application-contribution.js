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
var browser_1 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var core_1 = require("@theia/core");
var json_schema_store_1 = require("@theia/core/lib/browser/json-schema-store");
var user_preference_provider_1 = require("./user-preference-provider");
var PreferencesFrontendApplicationContribution = /** @class */ (function () {
    function PreferencesFrontendApplicationContribution() {
    }
    PreferencesFrontendApplicationContribution.prototype.onStart = function () {
        var _this = this;
        var serializeSchema = function () { return JSON.stringify(_this.schemaProvider.getCombinedSchema()); };
        var uri = new uri_1.default('vscode://schemas/settings/user');
        this.inmemoryResources.add(uri, serializeSchema());
        this.jsonSchemaStore.registerSchema({
            fileMatch: ['settings.json', user_preference_provider_1.USER_PREFERENCE_URI.toString()],
            url: uri.toString()
        });
        this.schemaProvider.onDidPreferenceSchemaChanged(function () {
            return _this.inmemoryResources.update(uri, serializeSchema());
        });
    };
    __decorate([
        inversify_1.inject(json_schema_store_1.JsonSchemaStore),
        __metadata("design:type", json_schema_store_1.JsonSchemaStore)
    ], PreferencesFrontendApplicationContribution.prototype, "jsonSchemaStore", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], PreferencesFrontendApplicationContribution.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(core_1.InMemoryResources),
        __metadata("design:type", core_1.InMemoryResources)
    ], PreferencesFrontendApplicationContribution.prototype, "inmemoryResources", void 0);
    PreferencesFrontendApplicationContribution = __decorate([
        inversify_1.injectable()
    ], PreferencesFrontendApplicationContribution);
    return PreferencesFrontendApplicationContribution;
}());
exports.PreferencesFrontendApplicationContribution = PreferencesFrontendApplicationContribution;
//# sourceMappingURL=preferences-frontend-application-contribution.js.map
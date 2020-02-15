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
var contribution_provider_1 = require("../../common/contribution-provider");
exports.PreferenceConfiguration = Symbol('PreferenceConfiguration');
function bindPreferenceConfigurations(bind) {
    contribution_provider_1.bindContributionProvider(bind, exports.PreferenceConfiguration);
    bind(PreferenceConfigurations).toSelf().inSingletonScope();
}
exports.bindPreferenceConfigurations = bindPreferenceConfigurations;
var PreferenceConfigurations = /** @class */ (function () {
    function PreferenceConfigurations() {
    }
    /* prefer Theia over VS Code by default */
    PreferenceConfigurations.prototype.getPaths = function () {
        return ['.theia'];
    };
    PreferenceConfigurations.prototype.getConfigName = function () {
        return 'settings';
    };
    PreferenceConfigurations.prototype.getSectionNames = function () {
        if (!this.sectionNames) {
            this.sectionNames = this.provider.getContributions().map(function (p) { return p.name; });
        }
        return this.sectionNames;
    };
    PreferenceConfigurations.prototype.isSectionName = function (name) {
        return this.getSectionNames().indexOf(name) !== -1;
    };
    PreferenceConfigurations.prototype.isSectionUri = function (configUri) {
        return !!configUri && this.isSectionName(this.getName(configUri));
    };
    PreferenceConfigurations.prototype.isConfigUri = function (configUri) {
        return !!configUri && this.getName(configUri) === this.getConfigName();
    };
    PreferenceConfigurations.prototype.getName = function (configUri) {
        return configUri.path.name;
    };
    PreferenceConfigurations.prototype.getPath = function (configUri) {
        return configUri.parent.path.base;
    };
    PreferenceConfigurations.prototype.createUri = function (folder, configPath, configName) {
        if (configPath === void 0) { configPath = this.getPaths()[0]; }
        if (configName === void 0) { configName = this.getConfigName(); }
        return folder.resolve(configPath).resolve(configName + '.json');
    };
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider), inversify_1.named(exports.PreferenceConfiguration),
        __metadata("design:type", Object)
    ], PreferenceConfigurations.prototype, "provider", void 0);
    PreferenceConfigurations = __decorate([
        inversify_1.injectable()
    ], PreferenceConfigurations);
    return PreferenceConfigurations;
}());
exports.PreferenceConfigurations = PreferenceConfigurations;
//# sourceMappingURL=preference-configurations.js.map
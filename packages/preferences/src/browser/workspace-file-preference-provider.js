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
var preferences_1 = require("@theia/core/lib/browser/preferences");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var abstract_resource_preference_provider_1 = require("./abstract-resource-preference-provider");
var WorkspaceFilePreferenceProviderOptions = /** @class */ (function () {
    function WorkspaceFilePreferenceProviderOptions() {
    }
    WorkspaceFilePreferenceProviderOptions = __decorate([
        inversify_1.injectable()
    ], WorkspaceFilePreferenceProviderOptions);
    return WorkspaceFilePreferenceProviderOptions;
}());
exports.WorkspaceFilePreferenceProviderOptions = WorkspaceFilePreferenceProviderOptions;
exports.WorkspaceFilePreferenceProviderFactory = Symbol('WorkspaceFilePreferenceProviderFactory');
var WorkspaceFilePreferenceProvider = /** @class */ (function (_super) {
    __extends(WorkspaceFilePreferenceProvider, _super);
    function WorkspaceFilePreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceFilePreferenceProvider.prototype.getUri = function () {
        return this.options.workspaceUri;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WorkspaceFilePreferenceProvider.prototype.parse = function (content) {
        var data = _super.prototype.parse.call(this, content);
        if (workspace_service_1.WorkspaceData.is(data)) {
            return data.settings || {};
        }
        return {};
    };
    WorkspaceFilePreferenceProvider.prototype.getPath = function (preferenceName) {
        return ['settings', preferenceName];
    };
    WorkspaceFilePreferenceProvider.prototype.getScope = function () {
        return preferences_1.PreferenceScope.Workspace;
    };
    WorkspaceFilePreferenceProvider.prototype.getDomain = function () {
        // workspace file is treated as part of the workspace
        return this.workspaceService.tryGetRoots().map(function (r) { return r.uri; }).concat([this.options.workspaceUri.toString()]);
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspaceFilePreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(WorkspaceFilePreferenceProviderOptions),
        __metadata("design:type", WorkspaceFilePreferenceProviderOptions)
    ], WorkspaceFilePreferenceProvider.prototype, "options", void 0);
    WorkspaceFilePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], WorkspaceFilePreferenceProvider);
    return WorkspaceFilePreferenceProvider;
}(abstract_resource_preference_provider_1.AbstractResourcePreferenceProvider));
exports.WorkspaceFilePreferenceProvider = WorkspaceFilePreferenceProvider;
//# sourceMappingURL=workspace-file-preference-provider.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var disposable_1 = require("@theia/core/lib/common/disposable");
var preferences_1 = require("@theia/core/lib/browser/preferences");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var workspace_file_preference_provider_1 = require("./workspace-file-preference-provider");
var WorkspacePreferenceProvider = /** @class */ (function (_super) {
    __extends(WorkspacePreferenceProvider, _super);
    function WorkspacePreferenceProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDisposeOnEnsureDelegateUpToDate = new disposable_1.DisposableCollection();
        return _this;
    }
    WorkspacePreferenceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._ready.resolve();
                this.ensureDelegateUpToDate();
                this.workspaceService.onWorkspaceLocationChanged(function () { return _this.ensureDelegateUpToDate(); });
                return [2 /*return*/];
            });
        });
    };
    WorkspacePreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate && delegate.getConfigUri(resourceUri);
    };
    Object.defineProperty(WorkspacePreferenceProvider.prototype, "delegate", {
        get: function () {
            if (!this._delegate) {
                this.ensureDelegateUpToDate();
            }
            return this._delegate;
        },
        enumerable: true,
        configurable: true
    });
    WorkspacePreferenceProvider.prototype.ensureDelegateUpToDate = function () {
        var _this = this;
        var delegate = this.createDelegate();
        if (this._delegate !== delegate) {
            this.toDisposeOnEnsureDelegateUpToDate.dispose();
            this.toDispose.push(this.toDisposeOnEnsureDelegateUpToDate);
            this._delegate = delegate;
            if (delegate instanceof workspace_file_preference_provider_1.WorkspaceFilePreferenceProvider) {
                this.toDisposeOnEnsureDelegateUpToDate.pushAll([
                    delegate,
                    delegate.onDidPreferencesChanged(function (changes) { return _this.onDidPreferencesChangedEmitter.fire(changes); })
                ]);
            }
        }
    };
    WorkspacePreferenceProvider.prototype.createDelegate = function () {
        var workspace = this.workspaceService.workspace;
        if (!workspace) {
            return undefined;
        }
        if (!this.workspaceService.isMultiRootWorkspaceOpened) {
            return this.folderPreferenceProvider;
        }
        return this.workspaceFileProviderFactory({
            workspaceUri: new uri_1.default(workspace.uri)
        });
    };
    WorkspacePreferenceProvider.prototype.get = function (preferenceName, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.get(preferenceName, resourceUri) : undefined;
    };
    WorkspacePreferenceProvider.prototype.resolve = function (preferenceName, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.resolve(preferenceName, resourceUri) : {};
    };
    WorkspacePreferenceProvider.prototype.getPreferences = function (resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.getPreferences(resourceUri) : {};
    };
    WorkspacePreferenceProvider.prototype.setPreference = function (preferenceName, value, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        return __awaiter(this, void 0, void 0, function () {
            var delegate;
            return __generator(this, function (_a) {
                delegate = this.delegate;
                if (delegate) {
                    return [2 /*return*/, delegate.setPreference(preferenceName, value, resourceUri)];
                }
                return [2 /*return*/, false];
            });
        });
    };
    WorkspacePreferenceProvider.prototype.ensureResourceUri = function () {
        if (this.workspaceService.workspace && !this.workspaceService.isMultiRootWorkspaceOpened) {
            return this.workspaceService.workspace.uri;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspacePreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(workspace_file_preference_provider_1.WorkspaceFilePreferenceProviderFactory),
        __metadata("design:type", Function)
    ], WorkspacePreferenceProvider.prototype, "workspaceFileProviderFactory", void 0);
    __decorate([
        inversify_1.inject(preferences_1.PreferenceProvider), inversify_1.named(preferences_1.PreferenceScope.Folder),
        __metadata("design:type", preferences_1.PreferenceProvider)
    ], WorkspacePreferenceProvider.prototype, "folderPreferenceProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WorkspacePreferenceProvider.prototype, "init", null);
    WorkspacePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], WorkspacePreferenceProvider);
    return WorkspacePreferenceProvider;
}(preferences_1.PreferenceProvider));
exports.WorkspacePreferenceProvider = WorkspacePreferenceProvider;
//# sourceMappingURL=workspace-preference-provider.js.map
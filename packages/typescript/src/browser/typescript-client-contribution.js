"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var event_1 = require("@theia/core/lib/common/event");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var preferences_1 = require("@theia/core/lib/browser/preferences");
var browser_1 = require("@theia/languages/lib/browser");
var browser_2 = require("@theia/workspace/lib/browser");
var workspace_variable_contribution_1 = require("@theia/workspace/lib/browser/workspace-variable-contribution");
var common_1 = require("../common");
var typescript_preferences_1 = require("./typescript-preferences");
var typescript_version_service_1 = require("../common/typescript-version-service");
var TypeScriptClientContribution = /** @class */ (function (_super) {
    __extends(TypeScriptClientContribution, _super);
    function TypeScriptClientContribution(workspace, languages, languageClientFactory) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.workspace = workspace;
        _this.languages = languages;
        _this.languageClientFactory = languageClientFactory;
        _this.id = common_1.TYPESCRIPT_LANGUAGE_ID;
        _this.name = common_1.TYPESCRIPT_LANGUAGE_NAME;
        _this.onDidChangeVersionEmitter = new event_1.Emitter();
        _this.onDidChangeVersion = _this.onDidChangeVersionEmitter.event;
        _this.restored = new promise_util_1.Deferred();
        return _this;
    }
    TypeScriptClientContribution.prototype.init = function () {
        var _this = this;
        this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'typescript.server.log') {
                _this.restart();
            }
        });
        this.onDidChangeVersion(function () { return _this.restart(); });
    };
    Object.defineProperty(TypeScriptClientContribution.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptClientContribution.prototype.setVersion = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var version, tsdkPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateVersion(raw)];
                    case 1:
                        version = _a.sent();
                        if (typescript_version_service_1.TypescriptVersion.equals(this._version, version)) {
                            return [2 /*return*/];
                        }
                        this._version = version;
                        if (version && version.qualifier === 'Workspace') {
                            tsdkPath = this.workspaceVariables.getWorkspaceRelativePath(new uri_1.default(version.uri));
                            if (tsdkPath) {
                                this.preferenceService.set('typescript.tsdk', tsdkPath, preferences_1.PreferenceScope.Workspace);
                            }
                        }
                        this.onDidChangeVersionEmitter.fire(this._version);
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptClientContribution.prototype.getStartParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restored.promise];
                    case 1:
                        _a.sent();
                        version = this.version;
                        return [4 /*yield*/, this.setVersion(version)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { version: version }];
                }
            });
        });
    };
    Object.defineProperty(TypeScriptClientContribution.prototype, "documentSelector", {
        get: function () {
            return [
                common_1.TYPESCRIPT_LANGUAGE_ID,
                common_1.TYPESCRIPT_REACT_LANGUAGE_ID,
                common_1.JAVASCRIPT_LANGUAGE_ID,
                common_1.JAVASCRIPT_REACT_LANGUAGE_ID
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptClientContribution.prototype, "workspaceContains", {
        get: function () {
            // FIXME requires https://github.com/eclipse-theia/theia/issues/2359
            // return [
            //     "**/tsconfig.json",
            //     "**/jsconfig.json",
            //     "**/tsconfig.*.json",
            //     "**/jsconfig.*.json"
            // ];
            return [
                'tsconfig.json',
                'jsconfig.json'
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptClientContribution.prototype, "initializationOptions", {
        get: function () {
            var options = {};
            var logVerbosity = this.preferences['typescript.server.log'];
            if (logVerbosity !== 'off') {
                options.logVerbosity = logVerbosity;
            }
            return options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptClientContribution.prototype, "logFileUri", {
        get: function () {
            return this._logFileUri;
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptClientContribution.prototype.onReady = function (languageClient) {
        var _this = this;
        if (languageClient.initializeResult) {
            var initializeResult = languageClient.initializeResult;
            this._logFileUri = initializeResult.logFileUri !== undefined ? new uri_1.default(initializeResult.logFileUri) : undefined;
        }
        languageClient.onDidChangeState(function (_a) {
            var newState = _a.newState;
            if (newState === browser_1.State.Stopped) {
                _this._logFileUri = undefined;
            }
        });
        _super.prototype.onReady.call(this, languageClient);
    };
    TypeScriptClientContribution.prototype.validateVersion = function (candidate) {
        return __awaiter(this, void 0, void 0, function () {
            var versions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVersions()];
                    case 1:
                        versions = _a.sent();
                        if (candidate && versions.some(function (version) { return typescript_version_service_1.TypescriptVersion.equals(candidate, version); })) {
                            return [2 /*return*/, candidate];
                        }
                        return [2 /*return*/, versions.find(function (version) { return version.qualifier === 'Workspace'; }) || versions[0]];
                }
            });
        });
    };
    TypeScriptClientContribution.prototype.getVersions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([this.preferences.ready, this.workspace.ready])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.versionService.getVersions(this.versionOptions)];
                }
            });
        });
    };
    Object.defineProperty(TypeScriptClientContribution.prototype, "versionOptions", {
        get: function () {
            return {
                workspaceFolders: this.workspaceService.tryGetRoots().map(function (_a) {
                    var uri = _a.uri;
                    return uri;
                }),
                localTsdk: this.preferences['typescript.tsdk']
            };
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptClientContribution.prototype.store = function () {
        return {
            version: this._version
        };
    };
    TypeScriptClientContribution.prototype.restore = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 3, 4]);
                        if (!!this._version) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setVersion(data && data.version)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        this.restored.resolve();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TypeScriptClientContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(workspace_variable_contribution_1.WorkspaceVariableContribution),
        __metadata("design:type", workspace_variable_contribution_1.WorkspaceVariableContribution)
    ], TypeScriptClientContribution.prototype, "workspaceVariables", void 0);
    __decorate([
        inversify_1.inject(typescript_preferences_1.TypescriptPreferences),
        __metadata("design:type", Object)
    ], TypeScriptClientContribution.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(preferences_1.PreferenceService),
        __metadata("design:type", Object)
    ], TypeScriptClientContribution.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(typescript_version_service_1.TypescriptVersionService),
        __metadata("design:type", Object)
    ], TypeScriptClientContribution.prototype, "versionService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeScriptClientContribution.prototype, "init", null);
    TypeScriptClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.Workspace)),
        __param(1, inversify_1.inject(browser_1.Languages)),
        __param(2, inversify_1.inject(browser_1.LanguageClientFactory)),
        __metadata("design:paramtypes", [Object, Object, browser_1.LanguageClientFactory])
    ], TypeScriptClientContribution);
    return TypeScriptClientContribution;
}(browser_1.BaseLanguageClientContribution));
exports.TypeScriptClientContribution = TypeScriptClientContribution;
//# sourceMappingURL=typescript-client-contribution.js.map
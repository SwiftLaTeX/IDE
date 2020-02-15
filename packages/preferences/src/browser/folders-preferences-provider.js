"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var preference_provider_1 = require("@theia/core/lib/browser/preferences/preference-provider");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var folder_preference_provider_1 = require("./folder-preference-provider");
var FoldersPreferencesProvider = /** @class */ (function (_super) {
    __extends(FoldersPreferencesProvider, _super);
    function FoldersPreferencesProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.providers = new Map();
        return _this;
    }
    FoldersPreferencesProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readyPromises, _a, _b, provider;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _d.sent();
                        this.updateProviders();
                        this.workspaceService.onWorkspaceChanged(function () { return _this.updateProviders(); });
                        readyPromises = [];
                        try {
                            for (_a = __values(this.providers.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                provider = _b.value;
                                readyPromises.push(provider.ready.catch(function (e) { return console.error(e); }));
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        Promise.all(readyPromises).then(function () { return _this._ready.resolve(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    FoldersPreferencesProvider.prototype.updateProviders = function () {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
        var roots = this.workspaceService.tryGetRoots();
        var toDelete = new Set(this.providers.keys());
        try {
            for (var roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                var folder = roots_1_1.value;
                try {
                    for (var _e = (e_3 = void 0, __values(this.configurations.getPaths())), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var configPath = _f.value;
                        try {
                            for (var _g = (e_4 = void 0, __values(__spread(this.configurations.getSectionNames(), [this.configurations.getConfigName()]))), _h = _g.next(); !_h.done; _h = _g.next()) {
                                var configName = _h.value;
                                var configUri = this.configurations.createUri(new uri_1.default(folder.uri), configPath, configName);
                                var key = configUri.toString();
                                toDelete.delete(key);
                                if (!this.providers.has(key)) {
                                    var provider = this.createProvider({ folder: folder, configUri: configUri });
                                    this.providers.set(key, provider);
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var toDelete_1 = __values(toDelete), toDelete_1_1 = toDelete_1.next(); !toDelete_1_1.done; toDelete_1_1 = toDelete_1.next()) {
                var key = toDelete_1_1.value;
                var provider = this.providers.get(key);
                if (provider) {
                    this.providers.delete(key);
                    provider.dispose();
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (toDelete_1_1 && !toDelete_1_1.done && (_d = toDelete_1.return)) _d.call(toDelete_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    FoldersPreferencesProvider.prototype.getConfigUri = function (resourceUri) {
        var e_6, _a;
        try {
            for (var _b = __values(this.getFolderProviders(resourceUri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var configUri = provider.getConfigUri(resourceUri);
                if (this.configurations.isConfigUri(configUri)) {
                    return configUri;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return undefined;
    };
    FoldersPreferencesProvider.prototype.getContainingConfigUri = function (resourceUri) {
        var e_7, _a;
        try {
            for (var _b = __values(this.getFolderProviders(resourceUri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var configUri = provider.getConfigUri();
                if (this.configurations.isConfigUri(configUri) && provider.contains(resourceUri)) {
                    return configUri;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return undefined;
    };
    FoldersPreferencesProvider.prototype.getDomain = function () {
        return this.workspaceService.tryGetRoots().map(function (root) { return root.uri; });
    };
    FoldersPreferencesProvider.prototype.resolve = function (preferenceName, resourceUri) {
        var e_8, _a, e_9, _b;
        var result = {};
        var groups = this.groupProvidersByConfigName(resourceUri);
        try {
            for (var _c = __values(groups.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var group = _d.value;
                try {
                    for (var group_1 = (e_9 = void 0, __values(group)), group_1_1 = group_1.next(); !group_1_1.done; group_1_1 = group_1.next()) {
                        var provider = group_1_1.value;
                        var _e = provider.resolve(preferenceName, resourceUri), value = _e.value, configUri = _e.configUri;
                        if (configUri && value !== undefined) {
                            result.configUri = configUri;
                            result.value = preference_provider_1.PreferenceProvider.merge(result.value, value);
                            break;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (group_1_1 && !group_1_1.done && (_b = group_1.return)) _b.call(group_1);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return result;
    };
    FoldersPreferencesProvider.prototype.getPreferences = function (resourceUri) {
        var e_10, _a, e_11, _b;
        var result = {};
        var groups = this.groupProvidersByConfigName(resourceUri);
        try {
            for (var _c = __values(groups.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var group = _d.value;
                try {
                    for (var group_2 = (e_11 = void 0, __values(group)), group_2_1 = group_2.next(); !group_2_1.done; group_2_1 = group_2.next()) {
                        var provider = group_2_1.value;
                        if (provider.getConfigUri(resourceUri)) {
                            var preferences = provider.getPreferences();
                            result = preference_provider_1.PreferenceProvider.merge(result, preferences);
                            break;
                        }
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (group_2_1 && !group_2_1.done && (_b = group_2.return)) _b.call(group_2);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return result;
    };
    FoldersPreferencesProvider.prototype.setPreference = function (preferenceName, value, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var sectionName, configName, providers, configPath, iterator, _loop_1, this_1, providers_1, providers_1_1, provider, next, provider;
            var e_12, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sectionName = preferenceName.split('.', 1)[0];
                        configName = this.configurations.isSectionName(sectionName) ? sectionName : this.configurations.getConfigName();
                        providers = this.getFolderProviders(resourceUri);
                        iterator = [];
                        _loop_1 = function (provider) {
                            if (configPath === undefined) {
                                var configUri = provider.getConfigUri(resourceUri);
                                if (configUri) {
                                    configPath = this_1.configurations.getPath(configUri);
                                }
                            }
                            if (this_1.configurations.getName(provider.getConfigUri()) === configName) {
                                iterator.push(function () {
                                    if (provider.getConfigUri(resourceUri)) {
                                        return provider;
                                    }
                                    iterator.push(function () {
                                        if (_this.configurations.getPath(provider.getConfigUri()) === configPath) {
                                            return provider;
                                        }
                                        iterator.push(function () { return provider; });
                                    });
                                });
                            }
                        };
                        this_1 = this;
                        try {
                            for (providers_1 = __values(providers), providers_1_1 = providers_1.next(); !providers_1_1.done; providers_1_1 = providers_1.next()) {
                                provider = providers_1_1.value;
                                _loop_1(provider);
                            }
                        }
                        catch (e_12_1) { e_12 = { error: e_12_1 }; }
                        finally {
                            try {
                                if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
                            }
                            finally { if (e_12) throw e_12.error; }
                        }
                        next = iterator.shift();
                        _b.label = 1;
                    case 1:
                        if (!next) return [3 /*break*/, 4];
                        provider = next();
                        if (!provider) return [3 /*break*/, 3];
                        return [4 /*yield*/, provider.setPreference(preferenceName, value, resourceUri)];
                    case 2:
                        if (_b.sent()) {
                            return [2 /*return*/, true];
                        }
                        _b.label = 3;
                    case 3:
                        next = iterator.shift();
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    FoldersPreferencesProvider.prototype.groupProvidersByConfigName = function (resourceUri) {
        var e_13, _a, e_14, _b;
        var groups = new Map();
        var providers = this.getFolderProviders(resourceUri);
        try {
            for (var _c = __values(__spread([this.configurations.getConfigName()], this.configurations.getSectionNames())), _d = _c.next(); !_d.done; _d = _c.next()) {
                var configName = _d.value;
                var group = [];
                try {
                    for (var providers_2 = (e_14 = void 0, __values(providers)), providers_2_1 = providers_2.next(); !providers_2_1.done; providers_2_1 = providers_2.next()) {
                        var provider = providers_2_1.value;
                        if (this.configurations.getName(provider.getConfigUri()) === configName) {
                            group.push(provider);
                        }
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (providers_2_1 && !providers_2_1.done && (_b = providers_2.return)) _b.call(providers_2);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
                groups.set(configName, group);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return groups;
    };
    FoldersPreferencesProvider.prototype.getFolderProviders = function (resourceUri) {
        var e_15, _a;
        if (!resourceUri) {
            return [];
        }
        var resourcePath = new uri_1.default(resourceUri).path;
        var folder = { relativity: Number.MAX_SAFE_INTEGER };
        var providers = new Map();
        try {
            for (var _b = __values(this.providers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var uri = provider.folderUri.toString();
                var folderProviders = (providers.get(uri) || []);
                folderProviders.push(provider);
                providers.set(uri, folderProviders);
                var relativity = provider.folderUri.path.relativity(resourcePath);
                if (relativity >= 0 && folder.relativity > relativity) {
                    folder = { relativity: relativity, uri: uri };
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return folder.uri && providers.get(folder.uri) || [];
    };
    FoldersPreferencesProvider.prototype.createProvider = function (options) {
        var _this = this;
        var provider = this.folderPreferenceProviderFactory(options);
        this.toDispose.push(provider);
        this.toDispose.push(provider.onDidPreferencesChanged(function (change) { return _this.onDidPreferencesChangedEmitter.fire(change); }));
        return provider;
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], FoldersPreferencesProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(folder_preference_provider_1.FolderPreferenceProviderFactory),
        __metadata("design:type", Function)
    ], FoldersPreferencesProvider.prototype, "folderPreferenceProviderFactory", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], FoldersPreferencesProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FoldersPreferencesProvider.prototype, "init", null);
    FoldersPreferencesProvider = __decorate([
        inversify_1.injectable()
    ], FoldersPreferencesProvider);
    return FoldersPreferencesProvider;
}(preference_provider_1.PreferenceProvider));
exports.FoldersPreferencesProvider = FoldersPreferencesProvider;
//# sourceMappingURL=folders-preferences-provider.js.map
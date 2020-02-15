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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var common_1 = require("../../common");
var promise_util_1 = require("../../common/promise-util");
var preference_provider_1 = require("./preference-provider");
var preference_contribution_1 = require("./preference-contribution");
var uri_1 = require("../../common/uri");
var preference_scope_1 = require("./preference-scope");
exports.PreferenceScope = preference_scope_1.PreferenceScope;
var preference_configurations_1 = require("./preference-configurations");
var PreferenceChangeImpl = /** @class */ (function () {
    function PreferenceChangeImpl(change) {
        this.change = change;
    }
    Object.defineProperty(PreferenceChangeImpl.prototype, "preferenceName", {
        get: function () {
            return this.change.preferenceName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferenceChangeImpl.prototype, "newValue", {
        get: function () {
            return this.change.newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferenceChangeImpl.prototype, "oldValue", {
        get: function () {
            return this.change.oldValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferenceChangeImpl.prototype, "scope", {
        get: function () {
            return this.change.scope;
        },
        enumerable: true,
        configurable: true
    });
    // TODO add tests
    PreferenceChangeImpl.prototype.affects = function (resourceUri) {
        var resourcePath = resourceUri && new uri_1.default(resourceUri).path;
        var domain = this.change.domain;
        return !resourcePath || !domain || domain.some(function (uri) { return new uri_1.default(uri).path.relativity(resourcePath) >= 0; });
    };
    return PreferenceChangeImpl;
}());
exports.PreferenceChangeImpl = PreferenceChangeImpl;
exports.PreferenceService = Symbol('PreferenceService');
/**
 * We cannot load providers directly in the case if they depend on `PreferenceService` somehow.
 * It allows to load them lazilly after DI is configured.
 */
exports.PreferenceProviderProvider = Symbol('PreferenceProviderProvider');
var PreferenceServiceImpl = /** @class */ (function () {
    function PreferenceServiceImpl() {
        this.onPreferenceChangedEmitter = new common_1.Emitter();
        this.onPreferenceChanged = this.onPreferenceChangedEmitter.event;
        this.onPreferencesChangedEmitter = new common_1.Emitter();
        this.onPreferencesChanged = this.onPreferencesChangedEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onPreferenceChangedEmitter, this.onPreferencesChangedEmitter);
        this.preferenceProviders = new Map();
        this._ready = new promise_util_1.Deferred();
    }
    PreferenceServiceImpl.prototype.initializeProviders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, scope, provider, e_1_1, e_2;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 9, , 10]);
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(preference_scope_1.PreferenceScope.getScopes()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        scope = _b.value;
                        provider = this.providerProvider(scope);
                        this.preferenceProviders.set(scope, provider);
                        this.toDispose.push(provider.onDidPreferencesChanged(function (changes) {
                            return _this.reconcilePreferences(changes);
                        }));
                        return [4 /*yield*/, provider.ready];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        this._ready.resolve();
                        return [3 /*break*/, 10];
                    case 9:
                        e_2 = _d.sent();
                        this._ready.reject(e_2);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    PreferenceServiceImpl.prototype.init = function () {
        var _this = this;
        this.toDispose.push(common_1.Disposable.create(function () { return _this._ready.reject(new Error('preference service is disposed')); }));
        this.onPreferenceChanged.maxListeners = 64;
        this.onPreferencesChanged.maxListeners = 64;
        this.initializeProviders();
    };
    PreferenceServiceImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(PreferenceServiceImpl.prototype, "ready", {
        get: function () {
            return this._ready.promise;
        },
        enumerable: true,
        configurable: true
    });
    PreferenceServiceImpl.prototype.reconcilePreferences = function (changes) {
        var e_3, _a, e_4, _b;
        var _this = this;
        var changesToEmit = {};
        var acceptChange = function (change) {
            return _this.getAffectedPreferenceNames(change, function (preferenceName) {
                return changesToEmit[preferenceName] = new PreferenceChangeImpl(__assign(__assign({}, change), { preferenceName: preferenceName }));
            });
        };
        try {
            for (var _c = __values(Object.keys(changes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var preferenceName = _d.value;
                var change = changes[preferenceName];
                if (change.newValue === undefined) {
                    var overridden = this.overriddenPreferenceName(change.preferenceName);
                    if (overridden) {
                        change = __assign(__assign({}, change), { newValue: this.doGet(overridden.preferenceName) });
                    }
                }
                if (this.schema.isValidInScope(preferenceName, preference_scope_1.PreferenceScope.Folder)) {
                    acceptChange(change);
                    continue;
                }
                try {
                    for (var _e = (e_4 = void 0, __values(preference_scope_1.PreferenceScope.getReversedScopes())), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var scope = _f.value;
                        if (this.schema.isValidInScope(preferenceName, scope)) {
                            var provider = this.getProvider(scope);
                            if (provider) {
                                var value = provider.get(preferenceName);
                                if (scope > change.scope && value !== undefined) {
                                    // preference defined in a more specific scope
                                    break;
                                }
                                else if (scope === change.scope && change.newValue !== undefined) {
                                    // preference is changed into something other than `undefined`
                                    acceptChange(change);
                                }
                                else if (scope < change.scope && change.newValue === undefined && value !== undefined) {
                                    // preference is changed to `undefined`, use the value from a more general scope
                                    change = __assign(__assign({}, change), { newValue: value, scope: scope });
                                    acceptChange(change);
                                }
                            }
                        }
                        else if (change.newValue === undefined && change.scope === preference_scope_1.PreferenceScope.Default) {
                            // preference is removed
                            acceptChange(change);
                            break;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // emit the changes
        var changedPreferenceNames = Object.keys(changesToEmit);
        if (changedPreferenceNames.length > 0) {
            this.onPreferencesChangedEmitter.fire(changesToEmit);
        }
        changedPreferenceNames.forEach(function (preferenceName) { return _this.onPreferenceChangedEmitter.fire(changesToEmit[preferenceName]); });
    };
    PreferenceServiceImpl.prototype.getAffectedPreferenceNames = function (change, accept) {
        var e_5, _a;
        accept(change.preferenceName);
        try {
            for (var _b = __values(this.schema.getOverridePreferenceNames(change.preferenceName)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var overridePreferenceName = _c.value;
                if (!this.doHas(overridePreferenceName)) {
                    accept(overridePreferenceName);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    PreferenceServiceImpl.prototype.getProvider = function (scope) {
        return this.preferenceProviders.get(scope);
    };
    PreferenceServiceImpl.prototype.has = function (preferenceName, resourceUri) {
        return this.get(preferenceName, undefined, resourceUri) !== undefined;
    };
    PreferenceServiceImpl.prototype.get = function (preferenceName, defaultValue, resourceUri) {
        return this.resolve(preferenceName, defaultValue, resourceUri).value;
    };
    PreferenceServiceImpl.prototype.resolve = function (preferenceName, defaultValue, resourceUri) {
        var _a = this.doResolve(preferenceName, defaultValue, resourceUri), value = _a.value, configUri = _a.configUri;
        if (value === undefined) {
            var overridden = this.overriddenPreferenceName(preferenceName);
            if (overridden) {
                return this.doResolve(overridden.preferenceName, defaultValue, resourceUri);
            }
        }
        return { value: value, configUri: configUri };
    };
    PreferenceServiceImpl.prototype.set = function (preferenceName, value, scope, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var resolvedScope, provider, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        resolvedScope = scope !== undefined ? scope : (!resourceUri ? preference_scope_1.PreferenceScope.Workspace : preference_scope_1.PreferenceScope.Folder);
                        if (resolvedScope === preference_scope_1.PreferenceScope.User && this.configurations.isSectionName(preferenceName.split('.', 1)[0])) {
                            throw new Error("Unable to write to User Settings because " + preferenceName + " does not support for global scope.");
                        }
                        if (resolvedScope === preference_scope_1.PreferenceScope.Folder && !resourceUri) {
                            throw new Error('Unable to write to Folder Settings because no resource is provided.');
                        }
                        provider = this.getProvider(resolvedScope);
                        _a = provider;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, provider.setPreference(preferenceName, value, resourceUri)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            return [2 /*return*/];
                        }
                        throw new Error("Unable to write to " + preference_scope_1.PreferenceScope.getScopeNames(resolvedScope)[0] + " Settings.");
                }
            });
        });
    };
    PreferenceServiceImpl.prototype.getBoolean = function (preferenceName, defaultValue, resourceUri) {
        var value = resourceUri ? this.get(preferenceName, defaultValue, resourceUri) : this.get(preferenceName, defaultValue);
        // eslint-disable-next-line no-null/no-null
        return value !== null && value !== undefined ? !!value : defaultValue;
    };
    PreferenceServiceImpl.prototype.getString = function (preferenceName, defaultValue, resourceUri) {
        var value = resourceUri ? this.get(preferenceName, defaultValue, resourceUri) : this.get(preferenceName, defaultValue);
        // eslint-disable-next-line no-null/no-null
        if (value === null || value === undefined) {
            return defaultValue;
        }
        return value.toString();
    };
    PreferenceServiceImpl.prototype.getNumber = function (preferenceName, defaultValue, resourceUri) {
        var value = resourceUri ? this.get(preferenceName, defaultValue, resourceUri) : this.get(preferenceName, defaultValue);
        // eslint-disable-next-line no-null/no-null
        if (value === null || value === undefined) {
            return defaultValue;
        }
        if (typeof value === 'number') {
            return value;
        }
        return Number(value);
    };
    PreferenceServiceImpl.prototype.inspect = function (preferenceName, resourceUri) {
        var defaultValue = this.inspectInScope(preferenceName, preference_scope_1.PreferenceScope.Default, resourceUri);
        var globalValue = this.inspectInScope(preferenceName, preference_scope_1.PreferenceScope.User, resourceUri);
        var workspaceValue = this.inspectInScope(preferenceName, preference_scope_1.PreferenceScope.Workspace, resourceUri);
        var workspaceFolderValue = this.inspectInScope(preferenceName, preference_scope_1.PreferenceScope.Folder, resourceUri);
        return { preferenceName: preferenceName, defaultValue: defaultValue, globalValue: globalValue, workspaceValue: workspaceValue, workspaceFolderValue: workspaceFolderValue };
    };
    PreferenceServiceImpl.prototype.inspectInScope = function (preferenceName, scope, resourceUri) {
        var value = this.doInspectInScope(preferenceName, scope, resourceUri);
        if (value === undefined) {
            var overridden = this.overriddenPreferenceName(preferenceName);
            if (overridden) {
                return this.doInspectInScope(overridden.preferenceName, scope, resourceUri);
            }
        }
        return value;
    };
    PreferenceServiceImpl.prototype.overridePreferenceName = function (options) {
        return this.schema.overridePreferenceName(options);
    };
    PreferenceServiceImpl.prototype.overriddenPreferenceName = function (preferenceName) {
        return this.schema.overriddenPreferenceName(preferenceName);
    };
    PreferenceServiceImpl.prototype.doHas = function (preferenceName, resourceUri) {
        return this.doGet(preferenceName, undefined, resourceUri) !== undefined;
    };
    PreferenceServiceImpl.prototype.doInspectInScope = function (preferenceName, scope, resourceUri) {
        var provider = this.getProvider(scope);
        return provider && provider.get(preferenceName, resourceUri);
    };
    PreferenceServiceImpl.prototype.doGet = function (preferenceName, defaultValue, resourceUri) {
        return this.doResolve(preferenceName, defaultValue, resourceUri).value;
    };
    PreferenceServiceImpl.prototype.doResolve = function (preferenceName, defaultValue, resourceUri) {
        var e_6, _a;
        var result = {};
        try {
            for (var _b = __values(preference_scope_1.PreferenceScope.getScopes()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var scope = _c.value;
                if (this.schema.isValidInScope(preferenceName, scope)) {
                    var provider = this.getProvider(scope);
                    if (provider) {
                        var _d = provider.resolve(preferenceName, resourceUri), configUri = _d.configUri, value = _d.value;
                        if (value !== undefined) {
                            result.configUri = configUri;
                            result.value = preference_provider_1.PreferenceProvider.merge(result.value, value);
                        }
                    }
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
        return {
            configUri: result.configUri,
            value: result.value !== undefined ? common_1.deepFreeze(result.value) : defaultValue
        };
    };
    __decorate([
        inversify_1.inject(preference_contribution_1.PreferenceSchemaProvider),
        __metadata("design:type", preference_contribution_1.PreferenceSchemaProvider)
    ], PreferenceServiceImpl.prototype, "schema", void 0);
    __decorate([
        inversify_1.inject(exports.PreferenceProviderProvider),
        __metadata("design:type", Function)
    ], PreferenceServiceImpl.prototype, "providerProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferenceServiceImpl.prototype, "configurations", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferenceServiceImpl.prototype, "init", null);
    PreferenceServiceImpl = __decorate([
        inversify_1.injectable()
    ], PreferenceServiceImpl);
    return PreferenceServiceImpl;
}());
exports.PreferenceServiceImpl = PreferenceServiceImpl;
//# sourceMappingURL=preference-service.js.map
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var disposable_1 = require("@theia/core/lib/common/disposable");
var TextmateRegistry = /** @class */ (function () {
    function TextmateRegistry() {
        this.scopeToProvider = new Map();
        this.languageToConfig = new Map();
        this.languageIdToScope = new Map();
    }
    Object.defineProperty(TextmateRegistry.prototype, "languages", {
        get: function () {
            return this.languageIdToScope.keys();
        },
        enumerable: true,
        configurable: true
    });
    TextmateRegistry.prototype.registerTextmateGrammarScope = function (scope, provider) {
        var providers = this.scopeToProvider.get(scope) || [];
        var existingProvider = providers[0];
        if (existingProvider) {
            Promise.all([existingProvider.getGrammarDefinition(), provider.getGrammarDefinition()]).then(function (_a) {
                var _b = __read(_a, 2), a = _b[0], b = _b[1];
                if (a.location !== b.location || !a.location && !b.location) {
                    console.warn(new Error("a registered grammar provider for '" + scope + "' scope is overridden"));
                }
            });
        }
        providers.unshift(provider);
        this.scopeToProvider.set(scope, providers);
        return disposable_1.Disposable.create(function () {
            var index = providers.indexOf(provider);
            if (index !== -1) {
                providers.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getProvider = function (scope) {
        var providers = this.scopeToProvider.get(scope);
        return providers && providers[0];
    };
    TextmateRegistry.prototype.mapLanguageIdToTextmateGrammar = function (languageId, scope) {
        var scopes = this.languageIdToScope.get(languageId) || [];
        var existingScope = scopes[0];
        if (typeof existingScope === 'string') {
            console.warn(new Error("'" + languageId + "' language is remapped from '" + existingScope + "' to '" + scope + "' scope"));
        }
        scopes.unshift(scope);
        this.languageIdToScope.set(languageId, scopes);
        return disposable_1.Disposable.create(function () {
            var index = scopes.indexOf(scope);
            if (index !== -1) {
                scopes.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getScope = function (languageId) {
        var scopes = this.languageIdToScope.get(languageId);
        return scopes && scopes[0];
    };
    TextmateRegistry.prototype.getLanguageId = function (scope) {
        var e_1, _a;
        try {
            for (var _b = __values(this.languageIdToScope.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var languageId = _c.value;
                if (this.getScope(languageId) === scope) {
                    return languageId;
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
        return undefined;
    };
    TextmateRegistry.prototype.registerGrammarConfiguration = function (languageId, config) {
        var configs = this.languageToConfig.get(languageId) || [];
        var existingConfig = configs[0];
        if (existingConfig) {
            console.warn(new Error("a registered grammar configuration for '" + languageId + "' language is overridden"));
        }
        configs.unshift(config);
        this.languageToConfig.set(languageId, configs);
        return disposable_1.Disposable.create(function () {
            var index = configs.indexOf(config);
            if (index !== -1) {
                configs.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getGrammarConfiguration = function (languageId) {
        var configs = this.languageToConfig.get(languageId);
        return configs && configs[0] || {};
    };
    TextmateRegistry = __decorate([
        inversify_1.injectable()
    ], TextmateRegistry);
    return TextmateRegistry;
}());
exports.TextmateRegistry = TextmateRegistry;
//# sourceMappingURL=textmate-registry.js.map
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var json_1 = require("@phosphor/coreutils/lib/json");
var common_1 = require("../../common");
var promise_util_1 = require("../../common/promise-util");
var PreferenceProvider = /** @class */ (function () {
    function PreferenceProvider() {
        this.onDidPreferencesChangedEmitter = new common_1.Emitter();
        this.onDidPreferencesChanged = this.onDidPreferencesChangedEmitter.event;
        this.toDispose = new common_1.DisposableCollection();
        this._ready = new promise_util_1.Deferred();
        this.toDispose.push(this.onDidPreferencesChangedEmitter);
    }
    PreferenceProvider.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /**
     * Informs the listeners that one or more preferences of this provider are changed.
     * The listeners are able to find what was changed from the emitted event.
     */
    PreferenceProvider.prototype.emitPreferencesChangedEvent = function (changes) {
        var e_1, _a;
        if (Array.isArray(changes)) {
            var prefChanges = {};
            try {
                for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                    var change = changes_1_1.value;
                    prefChanges[change.preferenceName] = change;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.onDidPreferencesChangedEmitter.fire(prefChanges);
        }
        else {
            this.onDidPreferencesChangedEmitter.fire(changes);
        }
    };
    PreferenceProvider.prototype.get = function (preferenceName, resourceUri) {
        return this.resolve(preferenceName, resourceUri).value;
    };
    PreferenceProvider.prototype.resolve = function (preferenceName, resourceUri) {
        var value = this.getPreferences(resourceUri)[preferenceName];
        if (value !== undefined) {
            return {
                value: value,
                configUri: this.getConfigUri(resourceUri)
            };
        }
        return {};
    };
    Object.defineProperty(PreferenceProvider.prototype, "ready", {
        /**
         * Resolved when the preference provider is ready to provide preferences
         * It should be resolved by subclasses.
         */
        get: function () {
            return this._ready.promise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * undefined if all belongs
     */
    PreferenceProvider.prototype.getDomain = function () {
        return undefined;
    };
    /**
     * undefined if cannot be provided for the given resource uri
     */
    PreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        return undefined;
    };
    PreferenceProvider.merge = function (source, target) {
        var e_2, _a;
        if (source === undefined || !json_1.JSONExt.isObject(source)) {
            return json_1.JSONExt.deepCopy(target);
        }
        if (json_1.JSONExt.isPrimitive(target)) {
            return {};
        }
        try {
            for (var _b = __values(Object.keys(target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = target[key];
                if (key in source) {
                    if (json_1.JSONExt.isObject(source[key]) && json_1.JSONExt.isObject(value)) {
                        this.merge(source[key], value);
                        continue;
                    }
                }
                source[key] = json_1.JSONExt.deepCopy(value);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return source;
    };
    PreferenceProvider = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PreferenceProvider);
    return PreferenceProvider;
}());
exports.PreferenceProvider = PreferenceProvider;
//# sourceMappingURL=preference-provider.js.map
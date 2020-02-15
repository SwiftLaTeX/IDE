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
var preference_contribution_1 = require("./preference-contribution");
var preference_scope_1 = require("./preference-scope");
function createPreferenceProxy(preferences, schema, options) {
    var opts = options || {};
    var prefix = opts.prefix || '';
    var style = opts.style || 'flat';
    var isDeep = style === 'deep' || style === 'both';
    var isFlat = style === 'both' || style === 'flat';
    var onPreferenceChanged = function (listener, thisArgs, disposables) { return preferences.onPreferencesChanged(function (changes) {
        var e_1, _a;
        var _loop_1 = function (key) {
            var e = changes[key];
            var overridden = preferences.overriddenPreferenceName(e.preferenceName);
            var preferenceName = overridden ? overridden.preferenceName : e.preferenceName;
            if (preferenceName.startsWith(prefix) && (!overridden || !opts.overrideIdentifier || overridden.overrideIdentifier === opts.overrideIdentifier)) {
                if (schema.properties[preferenceName]) {
                    var newValue = e.newValue, oldValue = e.oldValue;
                    listener({
                        newValue: newValue, oldValue: oldValue, preferenceName: preferenceName,
                        affects: function (resourceUri, overrideIdentifier) {
                            if (overrideIdentifier !== undefined) {
                                if (overridden && overridden.overrideIdentifier !== overrideIdentifier) {
                                    return false;
                                }
                            }
                            return e.affects(resourceUri);
                        }
                    });
                }
            }
        };
        try {
            for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }, thisArgs, disposables); };
    var unsupportedOperation = function (_, __) {
        throw new Error('Unsupported operation');
    };
    var getValue = function (arg, defaultValue, resourceUri) {
        var preferenceName = preference_contribution_1.OverridePreferenceName.is(arg) ?
            preferences.overridePreferenceName(arg) :
            arg;
        return preferences.get(preferenceName, defaultValue, resourceUri || opts.resourceUri);
    };
    var ownKeys = function () {
        var e_2, _a;
        var properties = [];
        try {
            for (var _b = __values(Object.keys(schema.properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var p = _c.value;
                if (p.startsWith(prefix)) {
                    var idx = p.indexOf('.', prefix.length);
                    if (idx !== -1 && isDeep) {
                        var pre = p.substr(prefix.length, idx - prefix.length);
                        if (properties.indexOf(pre) === -1) {
                            properties.push(pre);
                        }
                    }
                    var prop = p.substr(prefix.length);
                    if (isFlat || prop.indexOf('.') === -1) {
                        properties.push(prop);
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return properties;
    };
    var set = function (_, property, value) {
        var e_3, _a, e_4, _b;
        if (typeof property !== 'string') {
            throw new Error("unexpected property: " + String(property));
        }
        if (style === 'deep' && property.indexOf('.') !== -1) {
            return false;
        }
        var fullProperty = prefix ? prefix + property : property;
        if (schema.properties[fullProperty]) {
            preferences.set(fullProperty, value, preference_scope_1.PreferenceScope.Default);
            return true;
        }
        var newPrefix = fullProperty + '.';
        try {
            for (var _c = __values(Object.keys(schema.properties)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var p = _d.value;
                if (p.startsWith(newPrefix)) {
                    var subProxy = createPreferenceProxy(preferences, schema, {
                        prefix: newPrefix,
                        resourceUri: opts.resourceUri,
                        overrideIdentifier: opts.overrideIdentifier,
                        style: style
                    });
                    try {
                        for (var _e = (e_4 = void 0, __values(Object.keys(value))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var k = _f.value;
                            subProxy[k] = value[k];
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
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    };
    var get = function (_, property) {
        var e_5, _a;
        if (typeof property !== 'string') {
            throw new Error("unexpected property: " + String(property));
        }
        var fullProperty = prefix ? prefix + property : property;
        if (isFlat || property.indexOf('.') === -1) {
            if (schema.properties[fullProperty]) {
                var value = void 0;
                if (opts.overrideIdentifier) {
                    value = preferences.get(preferences.overridePreferenceName({
                        overrideIdentifier: opts.overrideIdentifier,
                        preferenceName: fullProperty
                    }), undefined, opts.resourceUri);
                }
                if (value === undefined) {
                    value = preferences.get(fullProperty, undefined, opts.resourceUri);
                }
                return value;
            }
        }
        if (property === 'onPreferenceChanged') {
            return onPreferenceChanged;
        }
        if (property === 'dispose') {
            return function () { };
        }
        if (property === 'ready') {
            return preferences.ready;
        }
        if (property === 'get') {
            return getValue;
        }
        if (property === 'toJSON') {
            return toJSON();
        }
        if (isDeep) {
            var newPrefix = fullProperty + '.';
            try {
                for (var _b = __values(Object.keys(schema.properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var p = _c.value;
                    if (p.startsWith(newPrefix)) {
                        return createPreferenceProxy(preferences, schema, { prefix: newPrefix, resourceUri: opts.resourceUri, overrideIdentifier: opts.overrideIdentifier, style: style });
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
        }
        return undefined;
    };
    var toJSON = function () {
        var e_6, _a;
        var result = {};
        try {
            for (var _b = __values(ownKeys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var k = _c.value;
                result[k] = get(undefined, k);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return result;
    };
    return new Proxy({}, {
        get: get,
        ownKeys: ownKeys,
        getOwnPropertyDescriptor: function (_, property) {
            if (ownKeys().indexOf(property) !== -1) {
                return {
                    enumerable: true,
                    configurable: true
                };
            }
            return {};
        },
        set: set,
        deleteProperty: unsupportedOperation,
        defineProperty: unsupportedOperation
    });
}
exports.createPreferenceProxy = createPreferenceProxy;
//# sourceMappingURL=preference-proxy.js.map
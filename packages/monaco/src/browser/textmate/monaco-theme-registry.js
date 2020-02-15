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
var vscode_textmate_1 = require("vscode-textmate");
var MonacoThemeRegistry = /** @class */ (function () {
    function MonacoThemeRegistry() {
    }
    MonacoThemeRegistry.prototype.getThemeData = function (name) {
        var theme = this.doGetTheme(name);
        return theme && theme.themeData;
    };
    MonacoThemeRegistry.prototype.getTheme = function (name) {
        return this.doGetTheme(name);
    };
    MonacoThemeRegistry.prototype.doGetTheme = function (name) {
        var standaloneThemeService = monaco.services.StaticServices.standaloneThemeService.get();
        var theme = !name ? standaloneThemeService.getTheme() : standaloneThemeService._knownThemes.get(name);
        return theme;
    };
    MonacoThemeRegistry.prototype.setTheme = function (name, data) {
        // monaco auto refrehes a theme with new data
        monaco.editor.defineTheme(name, data);
    };
    /**
     * Register VS Code compatible themes
     */
    MonacoThemeRegistry.prototype.register = function (json, includes, givenName, monacoBase) {
        var _a, _b, e_1, _c, e_2, _d;
        var name = givenName || json.name;
        var result = {
            name: name,
            base: monacoBase || 'vs',
            inherit: true,
            colors: {},
            rules: [],
            settings: []
        };
        if (typeof json.include !== 'undefined') {
            if (!includes || !includes[json.include]) {
                console.error("Couldn't resolve includes theme " + json.include + ".");
            }
            else {
                var parentTheme = this.register(includes[json.include], includes);
                Object.assign(result.colors, parentTheme.colors);
                (_a = result.rules).push.apply(_a, __spread(parentTheme.rules));
                (_b = result.settings).push.apply(_b, __spread(parentTheme.settings));
            }
        }
        var tokenColors = json.tokenColors;
        if (Array.isArray(tokenColors)) {
            try {
                for (var tokenColors_1 = __values(tokenColors), tokenColors_1_1 = tokenColors_1.next(); !tokenColors_1_1.done; tokenColors_1_1 = tokenColors_1.next()) {
                    var tokenColor = tokenColors_1_1.value;
                    if (tokenColor.scope && tokenColor.settings) {
                        result.settings.push({
                            scope: tokenColor.scope,
                            settings: {
                                foreground: this.normalizeColor(tokenColor.settings.foreground),
                                background: this.normalizeColor(tokenColor.settings.background),
                                fontStyle: tokenColor.settings.fontStyle
                            }
                        });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tokenColors_1_1 && !tokenColors_1_1.done && (_c = tokenColors_1.return)) _c.call(tokenColors_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (json.colors) {
            Object.assign(result.colors, json.colors);
            result.encodedTokensColors = Object.keys(result.colors).map(function (key) { return result.colors[key]; });
        }
        if (monacoBase && givenName) {
            try {
                for (var _e = __values(result.settings), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var setting = _f.value;
                    this.transform(setting, function (rule) { return result.rules.push(rule); });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // the default rule (scope empty) is always the first rule. Ignore all other default rules.
            var defaultTheme = monaco.services.StaticServices.standaloneThemeService.get()._knownThemes.get(result.base);
            var foreground = result.colors['editor.foreground'] || defaultTheme.getColor('editor.foreground');
            var background = result.colors['editor.background'] || defaultTheme.getColor('editor.background');
            result.settings.unshift({
                settings: {
                    foreground: this.normalizeColor(foreground),
                    background: this.normalizeColor(background)
                }
            });
            var reg = new vscode_textmate_1.Registry();
            reg.setTheme(result);
            result.encodedTokensColors = reg.getColorMap();
            // index 0 has to be set to null as it is 'undefined' by default, but monaco code expects it to be null
            // eslint-disable-next-line no-null/no-null
            result.encodedTokensColors[0] = null;
            this.setTheme(givenName, result);
        }
        return result;
    };
    MonacoThemeRegistry.prototype.transform = function (tokenColor, acceptor) {
        var e_3, _a;
        if (typeof tokenColor.scope === 'undefined') {
            tokenColor.scope = [''];
        }
        else if (typeof tokenColor.scope === 'string') {
            tokenColor.scope = tokenColor.scope.split(',').map(function (scope) { return scope.trim(); });
        }
        try {
            for (var _b = __values(tokenColor.scope), _c = _b.next(); !_c.done; _c = _b.next()) {
                var scope = _c.value;
                acceptor(__assign(__assign({}, tokenColor.settings), { token: scope }));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    MonacoThemeRegistry.prototype.normalizeColor = function (color) {
        if (!color) {
            return undefined;
        }
        var normalized = String(color).replace(/^\#/, '').slice(0, 6);
        if (normalized.length < 6) {
            // ignoring not normalized colors to avoid breaking token color indexes between monaco and vscode-textmate
            console.error("Color '" + normalized + "' is NOT normalized, it must have 6 positions.");
            return undefined;
        }
        return '#' + normalized;
    };
    MonacoThemeRegistry = __decorate([
        inversify_1.injectable()
    ], MonacoThemeRegistry);
    return MonacoThemeRegistry;
}());
exports.MonacoThemeRegistry = MonacoThemeRegistry;
(function (MonacoThemeRegistry) {
    MonacoThemeRegistry.SINGLETON = new MonacoThemeRegistry();
    MonacoThemeRegistry.DARK_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(require('../../../data/monaco-themes/vscode/dark_theia.json'), {
        './dark_defaults.json': require('../../../data/monaco-themes/vscode/dark_defaults.json'),
        './dark_vs.json': require('../../../data/monaco-themes/vscode/dark_vs.json'),
        './dark_plus.json': require('../../../data/monaco-themes/vscode/dark_plus.json')
    }, 'dark-theia', 'vs-dark').name;
    MonacoThemeRegistry.LIGHT_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(require('../../../data/monaco-themes/vscode/light_theia.json'), {
        './light_defaults.json': require('../../../data/monaco-themes/vscode/light_defaults.json'),
        './light_vs.json': require('../../../data/monaco-themes/vscode/light_vs.json'),
        './light_plus.json': require('../../../data/monaco-themes/vscode/light_plus.json'),
    }, 'light-theia', 'vs').name;
    MonacoThemeRegistry.HC_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(require('../../../data/monaco-themes/vscode/hc_theia.json'), {
        './hc_black_defaults.json': require('../../../data/monaco-themes/vscode/hc_black_defaults.json'),
        './hc_black.json': require('../../../data/monaco-themes/vscode/hc_black.json')
    }, 'hc-theia', 'hc-black').name;
})(MonacoThemeRegistry = exports.MonacoThemeRegistry || (exports.MonacoThemeRegistry = {}));
exports.MonacoThemeRegistry = MonacoThemeRegistry;
//# sourceMappingURL=monaco-theme-registry.js.map
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
var event_1 = require("../common/event");
var disposable_1 = require("../common/disposable");
var frontend_application_config_provider_1 = require("./frontend-application-config-provider");
exports.ThemeServiceSymbol = Symbol('ThemeService');
var ThemeService = /** @class */ (function () {
    function ThemeService(_defaultTheme, fallbackTheme) {
        if (_defaultTheme === void 0) { _defaultTheme = frontend_application_config_provider_1.FrontendApplicationConfigProvider.get().defaultTheme; }
        if (fallbackTheme === void 0) { fallbackTheme = 'dark'; }
        this._defaultTheme = _defaultTheme;
        this.fallbackTheme = fallbackTheme;
        this.themes = {};
        this.themeChange = new event_1.Emitter();
        this.onThemeChange = this.themeChange.event;
        var global = window; // eslint-disable-line @typescript-eslint/no-explicit-any
        global[exports.ThemeServiceSymbol] = this;
    }
    ThemeService.get = function () {
        var global = window; // eslint-disable-line @typescript-eslint/no-explicit-any
        return global[exports.ThemeServiceSymbol] || new ThemeService();
    };
    ThemeService.prototype.register = function () {
        var e_1, _a;
        var _this = this;
        var themes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            themes[_i] = arguments[_i];
        }
        try {
            for (var themes_1 = __values(themes), themes_1_1 = themes_1.next(); !themes_1_1.done; themes_1_1 = themes_1.next()) {
                var theme = themes_1_1.value;
                this.themes[theme.id] = theme;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (themes_1_1 && !themes_1_1.done && (_a = themes_1.return)) _a.call(themes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.validateActiveTheme();
        return disposable_1.Disposable.create(function () {
            var e_2, _a;
            try {
                for (var themes_2 = __values(themes), themes_2_1 = themes_2.next(); !themes_2_1.done; themes_2_1 = themes_2.next()) {
                    var theme = themes_2_1.value;
                    delete _this.themes[theme.id];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (themes_2_1 && !themes_2_1.done && (_a = themes_2.return)) _a.call(themes_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.validateActiveTheme();
        });
    };
    ThemeService.prototype.validateActiveTheme = function () {
        if (!this.activeTheme) {
            return;
        }
        var theme = this.themes[this.activeTheme.id];
        if (!theme) {
            this.loadUserTheme();
        }
        else if (theme !== this.activeTheme) {
            this.activeTheme = undefined;
            this.setCurrentTheme(theme.id);
        }
    };
    ThemeService.prototype.getThemes = function () {
        var result = [];
        for (var o in this.themes) {
            if (this.themes.hasOwnProperty(o)) {
                result.push(this.themes[o]);
            }
        }
        return result;
    };
    ThemeService.prototype.getTheme = function (themeId) {
        return this.themes[themeId] || this.defaultTheme;
    };
    ThemeService.prototype.startupTheme = function () {
        var theme = this.getCurrentTheme();
        theme.activate();
    };
    ThemeService.prototype.loadUserTheme = function () {
        var theme = this.getCurrentTheme();
        this.setCurrentTheme(theme.id);
    };
    ThemeService.prototype.setCurrentTheme = function (themeId) {
        var newTheme = this.getTheme(themeId);
        var oldTheme = this.activeTheme;
        if (oldTheme) {
            if (oldTheme.id === newTheme.id) {
                return;
            }
            oldTheme.deactivate();
        }
        newTheme.activate();
        this.activeTheme = newTheme;
        window.localStorage.setItem('theme', themeId);
        this.themeChange.fire({
            newTheme: newTheme, oldTheme: oldTheme
        });
    };
    ThemeService.prototype.getCurrentTheme = function () {
        var themeId = window.localStorage.getItem('theme') || this.defaultTheme.id;
        return this.getTheme(themeId);
    };
    Object.defineProperty(ThemeService.prototype, "defaultTheme", {
        /**
         * The default theme. If that is not applicable, returns with the fallback theme.
         */
        get: function () {
            return this.themes[this._defaultTheme || this.fallbackTheme] || this.themes[this.fallbackTheme];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the state to the user's default, or to the fallback theme. Also discards any persisted state in the local storage.
     */
    ThemeService.prototype.reset = function () {
        this.setCurrentTheme(this.defaultTheme.id);
    };
    return ThemeService;
}());
exports.ThemeService = ThemeService;
var BuiltinThemeProvider = /** @class */ (function () {
    function BuiltinThemeProvider() {
    }
    // Webpack converts these `require` in some Javascript object that wraps the `.css` files
    BuiltinThemeProvider.darkCss = require('../../src/browser/style/variables-dark.useable.css');
    BuiltinThemeProvider.lightCss = require('../../src/browser/style/variables-bright.useable.css');
    BuiltinThemeProvider.darkTheme = {
        id: 'dark',
        type: 'dark',
        label: 'Dark (Theia)',
        editorTheme: 'dark-theia',
        activate: function () {
            BuiltinThemeProvider.darkCss.use();
        },
        deactivate: function () {
            BuiltinThemeProvider.darkCss.unuse();
        }
    };
    BuiltinThemeProvider.lightTheme = {
        id: 'light',
        type: 'light',
        label: 'Light (Theia)',
        editorTheme: 'light-theia',
        activate: function () {
            BuiltinThemeProvider.lightCss.use();
        },
        deactivate: function () {
            BuiltinThemeProvider.lightCss.unuse();
        }
    };
    BuiltinThemeProvider.hcTheme = {
        id: 'hc-theia',
        type: 'hc',
        label: 'High Contrast (Theia)',
        editorTheme: 'hc-theia',
        activate: function () {
            BuiltinThemeProvider.darkCss.use();
        },
        deactivate: function () {
            BuiltinThemeProvider.darkCss.unuse();
        }
    };
    BuiltinThemeProvider.themes = [
        BuiltinThemeProvider.darkTheme,
        BuiltinThemeProvider.lightTheme,
        BuiltinThemeProvider.hcTheme
    ];
    return BuiltinThemeProvider;
}());
exports.BuiltinThemeProvider = BuiltinThemeProvider;
//# sourceMappingURL=theming.js.map
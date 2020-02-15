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
var jsoncparser = require("jsonc-parser");
var plistparser = require("fast-plist");
var theming_1 = require("@theia/core/lib/browser/theming");
var uri_1 = require("@theia/core/lib/common/uri");
var disposable_1 = require("@theia/core/lib/common/disposable");
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var monaco_theme_registry_1 = require("./textmate/monaco-theme-registry");
var monaco_indexed_db_1 = require("./monaco-indexed-db");
var MonacoThemingService = /** @class */ (function () {
    function MonacoThemingService() {
    }
    MonacoThemingService_1 = MonacoThemingService;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoThemingService.prototype.register = function (theme, pending) {
        if (pending === void 0) { pending = {}; }
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        this.doRegister(theme, pending, toDispose);
        return toDispose;
    };
    MonacoThemingService.prototype.doRegister = function (theme, pending, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var includes, json, label, id, description, uiTheme, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        includes = {};
                        return [4 /*yield*/, this.loadTheme(theme.uri, includes, pending, toDispose)];
                    case 1:
                        json = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        label = theme.label || new uri_1.default(theme.uri).path.base;
                        id = theme.id, description = theme.description, uiTheme = theme.uiTheme;
                        toDispose.push(MonacoThemingService_1.register({ id: id, label: label, description: description, uiTheme: uiTheme, json: json, includes: includes }));
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error('Failed to load theme from ' + theme.uri, e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoThemingService.prototype.loadTheme = function (uri, includes, pending, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var content, themeUri, value, json, value, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.resolveContent(uri)];
                    case 1:
                        content = (_c.sent()).content;
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        themeUri = new uri_1.default(uri);
                        if (themeUri.path.ext !== '.json') {
                            value = plistparser.parse(content);
                            if (value && 'settings' in value && Array.isArray(value.settings)) {
                                return [2 /*return*/, { tokenColors: value.settings }];
                            }
                            throw new Error("Problem parsing tmTheme file: " + uri + ". 'settings' is not array.");
                        }
                        json = jsoncparser.parse(content, undefined, { disallowComments: false });
                        if (!('tokenColors' in json && typeof json.tokenColors === 'string')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.doLoadTheme(themeUri, json.tokenColors, includes, pending, toDispose)];
                    case 2:
                        value = _c.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        json.tokenColors = value.tokenColors;
                        _c.label = 3;
                    case 3:
                        if (!json.include) return [3 /*break*/, 5];
                        _a = includes;
                        _b = json.include;
                        return [4 /*yield*/, this.doLoadTheme(themeUri, json.include, includes, pending, toDispose)];
                    case 4:
                        _a[_b] = _c.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        _c.label = 5;
                    case 5: return [2 /*return*/, json];
                }
            });
        });
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    MonacoThemingService.prototype.doLoadTheme = function (themeUri, referencedPath, includes, pending, toDispose) {
        var referencedUri = themeUri.parent.resolve(referencedPath).toString();
        if (!pending[referencedUri]) {
            pending[referencedUri] = this.loadTheme(referencedUri, includes, pending, toDispose);
        }
        return pending[referencedUri];
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    MonacoThemingService.init = function () {
        var _this = this;
        this.updateBodyUiTheme();
        theming_1.ThemeService.get().onThemeChange(function () { return _this.updateBodyUiTheme(); });
        this.restore();
    };
    MonacoThemingService.register = function (theme) {
        var uiTheme = theme.uiTheme || 'vs-dark';
        var label = theme.label, description = theme.description, json = theme.json, includes = theme.includes;
        var id = theme.id || label;
        var cssSelector = MonacoThemingService_1.toCssSelector(id);
        var data = monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON.register(json, includes, cssSelector, uiTheme);
        return MonacoThemingService_1.doRegister({ id: id, label: label, description: description, uiTheme: uiTheme, data: data });
    };
    MonacoThemingService.updateBodyUiTheme = function () {
        this.toUpdateUiTheme.dispose();
        var type = theming_1.ThemeService.get().getCurrentTheme().type;
        var uiTheme = type === 'hc' ? 'hc-black' : type === 'light' ? 'vs' : 'vs-dark';
        document.body.classList.add(uiTheme);
        this.toUpdateUiTheme.push(disposable_1.Disposable.create(function () { return document.body.classList.remove(uiTheme); }));
    };
    MonacoThemingService.doRegister = function (state) {
        var id = state.id, label = state.label, description = state.description, uiTheme = state.uiTheme, data = state.data;
        var type = uiTheme === 'vs' ? 'light' : uiTheme === 'vs-dark' ? 'dark' : 'hc';
        var builtInTheme = uiTheme === 'vs' ? theming_1.BuiltinThemeProvider.lightCss : theming_1.BuiltinThemeProvider.darkCss;
        return new disposable_1.DisposableCollection(theming_1.ThemeService.get().register({
            type: type,
            id: id,
            label: label,
            description: description,
            editorTheme: data.name,
            activate: function () {
                builtInTheme.use();
            },
            deactivate: function () {
                builtInTheme.unuse();
            }
        }), monaco_indexed_db_1.putTheme(state));
    };
    MonacoThemingService.restore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var themes, themes_1, themes_1_1, state, e_2;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, monaco_indexed_db_1.getThemes()];
                    case 1:
                        themes = _b.sent();
                        try {
                            for (themes_1 = __values(themes), themes_1_1 = themes_1.next(); !themes_1_1.done; themes_1_1 = themes_1.next()) {
                                state = themes_1_1.value;
                                monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON.setTheme(state.data.name, state.data);
                                MonacoThemingService_1.doRegister(state);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (themes_1_1 && !themes_1_1.done && (_a = themes_1.return)) _a.call(themes_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _b.sent();
                        console.error('Failed to restore monaco themes', e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* remove all characters that are not allowed in css */
    MonacoThemingService.toCssSelector = function (str) {
        str = str.replace(/[^\-a-zA-Z0-9]/g, '-');
        if (str.charAt(0).match(/[0-9\-]/)) {
            str = '-' + str;
        }
        return str;
    };
    var MonacoThemingService_1;
    MonacoThemingService.toUpdateUiTheme = new disposable_1.DisposableCollection();
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], MonacoThemingService.prototype, "fileSystem", void 0);
    MonacoThemingService = MonacoThemingService_1 = __decorate([
        inversify_1.injectable()
    ], MonacoThemingService);
    return MonacoThemingService;
}());
exports.MonacoThemingService = MonacoThemingService;
//# sourceMappingURL=monaco-theming-service.js.map
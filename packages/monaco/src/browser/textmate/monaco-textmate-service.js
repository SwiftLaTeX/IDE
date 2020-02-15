"use strict";
/********************************************************************************
 * Copyright (C) 2018 Redhat, Ericsson and others.
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
var inversify_1 = require("inversify");
var vscode_textmate_1 = require("vscode-textmate");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var theming_1 = require("@theia/core/lib/browser/theming");
var textmate_contribution_1 = require("./textmate-contribution");
var textmate_tokenizer_1 = require("./textmate-tokenizer");
var textmate_registry_1 = require("./textmate-registry");
var monaco_theme_registry_1 = require("./monaco-theme-registry");
exports.OnigasmPromise = Symbol('OnigasmPromise');
var MonacoTextmateService = /** @class */ (function () {
    function MonacoTextmateService() {
        this._activatedLanguages = new Set();
        this.toDisposeOnUpdateTheme = new core_1.DisposableCollection();
    }
    MonacoTextmateService.prototype.initialize = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (!browser_1.isBasicWasmSupported) {
            console.log('Textmate support deactivated because WebAssembly is not detected.');
            return;
        }
        try {
            for (var _c = __values(this.grammarProviders.getContributions()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var grammarProvider = _d.value;
                try {
                    grammarProvider.registerTextmateLanguage(this.textmateRegistry);
                }
                catch (err) {
                    console.error(err);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.grammarRegistry = new vscode_textmate_1.Registry({
            getOnigLib: function () { return _this.onigasmPromise; },
            theme: this.monacoThemeRegistry.getThemeData(this.currentEditorTheme),
            loadGrammar: function (scopeName) { return __awaiter(_this, void 0, void 0, function () {
                var provider, definition, rawGrammar;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            provider = this.textmateRegistry.getProvider(scopeName);
                            if (!provider) return [3 /*break*/, 2];
                            return [4 /*yield*/, provider.getGrammarDefinition()];
                        case 1:
                            definition = _a.sent();
                            rawGrammar = void 0;
                            if (typeof definition.content === 'string') {
                                rawGrammar = vscode_textmate_1.parseRawGrammar(definition.content, definition.format === 'json' ? 'grammar.json' : 'grammar.plist');
                            }
                            else {
                                rawGrammar = definition.content;
                            }
                            return [2 /*return*/, rawGrammar];
                        case 2: return [2 /*return*/, undefined];
                    }
                });
            }); },
            getInjections: function (scopeName) {
                var provider = _this.textmateRegistry.getProvider(scopeName);
                if (provider && provider.getInjections) {
                    return provider.getInjections(scopeName);
                }
                return [];
            }
        });
        this.updateTheme();
        this.themeService.onThemeChange(function () { return _this.updateTheme(); });
        try {
            for (var _e = __values(this.textmateRegistry.languages), _f = _e.next(); !_f.done; _f = _e.next()) {
                var id = _f.value;
                this.activateLanguage(id);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoTextmateService.prototype.updateTheme = function () {
        this.toDisposeOnUpdateTheme.dispose();
        var currentEditorTheme = this.currentEditorTheme;
        document.body.classList.add(currentEditorTheme);
        this.toDisposeOnUpdateTheme.push(core_1.Disposable.create(function () { return document.body.classList.remove(currentEditorTheme); }));
        // first update registry to run tokenization with the proper theme
        var theme = this.monacoThemeRegistry.getThemeData(currentEditorTheme);
        if (theme) {
            this.grammarRegistry.setTheme(theme);
        }
        // then trigger tokenization by setting monaco theme
        monaco.editor.setTheme(currentEditorTheme);
    };
    Object.defineProperty(MonacoTextmateService.prototype, "currentEditorTheme", {
        get: function () {
            return this.themeService.getCurrentTheme().editorTheme || monaco_theme_registry_1.MonacoThemeRegistry.DARK_DEFAULT_THEME;
        },
        enumerable: true,
        configurable: true
    });
    MonacoTextmateService.prototype.activateLanguage = function (language) {
        var _this = this;
        var toDispose = new core_1.DisposableCollection(core_1.Disposable.create(function () { }));
        toDispose.push(this.waitForLanguage(language, function () {
            return _this.doActivateLanguage(language, toDispose);
        }));
        return toDispose;
    };
    MonacoTextmateService.prototype.doActivateLanguage = function (languageId, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var scopeName, provider, configuration, initialLanguage, grammar, options, tokenizer, support, themeService, languageIdentifier, adapter, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._activatedLanguages.has(languageId)) {
                            return [2 /*return*/];
                        }
                        this._activatedLanguages.add(languageId);
                        toDispose.push(core_1.Disposable.create(function () { return _this._activatedLanguages.delete(languageId); }));
                        scopeName = this.textmateRegistry.getScope(languageId);
                        if (!scopeName) {
                            return [2 /*return*/];
                        }
                        provider = this.textmateRegistry.getProvider(scopeName);
                        if (!provider) {
                            return [2 /*return*/];
                        }
                        configuration = this.textmateRegistry.getGrammarConfiguration(languageId);
                        initialLanguage = textmate_contribution_1.getEncodedLanguageId(languageId);
                        return [4 /*yield*/, this.onigasmPromise];
                    case 1:
                        _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.grammarRegistry.loadGrammarWithConfiguration(scopeName, initialLanguage, configuration)];
                    case 3:
                        grammar = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        if (!grammar) {
                            throw new Error("no grammar for " + scopeName + ", " + initialLanguage + ", " + JSON.stringify(configuration));
                        }
                        options = configuration.tokenizerOption ? configuration.tokenizerOption : textmate_tokenizer_1.TokenizerOption.DEFAULT;
                        tokenizer = textmate_tokenizer_1.createTextmateTokenizer(grammar, options);
                        toDispose.push(monaco.languages.setTokensProvider(languageId, tokenizer));
                        support = monaco.modes.TokenizationRegistry.get(languageId);
                        themeService = monaco.services.StaticServices.standaloneThemeService.get();
                        languageIdentifier = monaco.services.StaticServices.modeService.get().getLanguageIdentifier(languageId);
                        adapter = new monaco.services.TokenizationSupport2Adapter(themeService, languageIdentifier, tokenizer);
                        support.tokenize = adapter.tokenize.bind(adapter);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.logger.warn('No grammar for this language id', languageId, error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MonacoTextmateService.prototype.waitForLanguage = function (language, cb) {
        var e_3, _a;
        var modeService = monaco.services.StaticServices.modeService.get();
        try {
            for (var _b = __values(Object.keys(modeService['_instantiatedModes'])), _c = _b.next(); !_c.done; _c = _b.next()) {
                var modeId = _c.value;
                var mode = modeService['_instantiatedModes'][modeId];
                if (mode.getId() === language) {
                    cb();
                    return core_1.Disposable.NULL;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return monaco.languages.onLanguage(language, cb);
    };
    __decorate([
        inversify_1.inject(core_1.ContributionProvider), inversify_1.named(textmate_contribution_1.LanguageGrammarDefinitionContribution),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "grammarProviders", void 0);
    __decorate([
        inversify_1.inject(textmate_registry_1.TextmateRegistry),
        __metadata("design:type", textmate_registry_1.TextmateRegistry)
    ], MonacoTextmateService.prototype, "textmateRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(exports.OnigasmPromise),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "onigasmPromise", void 0);
    __decorate([
        inversify_1.inject(theming_1.ThemeService),
        __metadata("design:type", theming_1.ThemeService)
    ], MonacoTextmateService.prototype, "themeService", void 0);
    __decorate([
        inversify_1.inject(monaco_theme_registry_1.MonacoThemeRegistry),
        __metadata("design:type", monaco_theme_registry_1.MonacoThemeRegistry)
    ], MonacoTextmateService.prototype, "monacoThemeRegistry", void 0);
    MonacoTextmateService = __decorate([
        inversify_1.injectable()
    ], MonacoTextmateService);
    return MonacoTextmateService;
}());
exports.MonacoTextmateService = MonacoTextmateService;
//# sourceMappingURL=monaco-textmate-service.js.map
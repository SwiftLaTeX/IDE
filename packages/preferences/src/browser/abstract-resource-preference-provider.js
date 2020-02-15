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
/* eslint-disable no-null/no-null */
var jsoncparser = require("jsonc-parser");
var json_1 = require("@phosphor/coreutils/lib/json");
var inversify_1 = require("inversify");
var message_service_1 = require("@theia/core/lib/common/message-service");
var disposable_1 = require("@theia/core/lib/common/disposable");
var browser_1 = require("@theia/core/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var monaco_text_model_service_1 = require("@theia/monaco/lib/browser/monaco-text-model-service");
var monaco_workspace_1 = require("@theia/monaco/lib/browser/monaco-workspace");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var AbstractResourcePreferenceProvider = /** @class */ (function (_super) {
    __extends(AbstractResourcePreferenceProvider, _super);
    function AbstractResourcePreferenceProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preferences = {};
        _this.loading = new promise_util_1.Deferred();
        return _this;
    }
    AbstractResourcePreferenceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, reference;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.getUri();
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.loading.reject(new Error("preference provider for '" + uri + "' was disposed")); }));
                        this._ready.resolve();
                        return [4 /*yield*/, this.textModelService.createModelReference(uri)];
                    case 1:
                        reference = _a.sent();
                        if (this.toDispose.disposed) {
                            reference.dispose();
                            return [2 /*return*/];
                        }
                        this.model = reference.object;
                        this.loading.resolve();
                        this.toDispose.push(reference);
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.model = undefined; }));
                        this.readPreferences();
                        this.toDispose.push(this.model.onDidChangeContent(function () { return _this.readPreferences(); }));
                        this.toDispose.push(this.model.onDirtyChanged(function () { return _this.readPreferences(); }));
                        this.toDispose.push(this.model.onDidChangeValid(function () { return _this.readPreferences(); }));
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.reset(); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AbstractResourcePreferenceProvider.prototype, "valid", {
        get: function () {
            return this.model && this.model.valid || false;
        },
        enumerable: true,
        configurable: true
    });
    AbstractResourcePreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        if (!resourceUri) {
            return this.getUri();
        }
        return this.valid && this.contains(resourceUri) ? this.getUri() : undefined;
    };
    AbstractResourcePreferenceProvider.prototype.contains = function (resourceUri) {
        if (!resourceUri) {
            return true;
        }
        var domain = this.getDomain();
        if (!domain) {
            return true;
        }
        var resourcePath = new uri_1.default(resourceUri).path;
        return domain.some(function (uri) { return new uri_1.default(uri).path.relativity(resourcePath) >= 0; });
    };
    AbstractResourcePreferenceProvider.prototype.getPreferences = function (resourceUri) {
        return this.valid && this.contains(resourceUri) ? this.preferences : {};
    };
    AbstractResourcePreferenceProvider.prototype.setPreference = function (key, value, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var path, content, textModel, editOperations, _a, insertSpaces, tabSize, defaultEOL, _b, _c, edit, start, end, e_1, message;
            var e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.loading.promise];
                    case 1:
                        _e.sent();
                        if (!this.model) {
                            return [2 /*return*/, false];
                        }
                        if (!this.contains(resourceUri)) {
                            return [2 /*return*/, false];
                        }
                        path = this.getPath(key);
                        if (!path) {
                            return [2 /*return*/, false];
                        }
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 4, , 5]);
                        content = this.model.getText().trim();
                        if (!content && value === undefined) {
                            return [2 /*return*/, true];
                        }
                        textModel = this.model.textEditorModel;
                        editOperations = [];
                        if (path.length || value !== undefined) {
                            _a = textModel.getOptions(), insertSpaces = _a.insertSpaces, tabSize = _a.tabSize, defaultEOL = _a.defaultEOL;
                            try {
                                for (_b = __values(jsoncparser.modify(content, path, value, {
                                    formattingOptions: {
                                        insertSpaces: insertSpaces,
                                        tabSize: tabSize,
                                        eol: defaultEOL === monaco.editor.DefaultEndOfLine.LF ? '\n' : '\r\n'
                                    }
                                })), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    edit = _c.value;
                                    start = textModel.getPositionAt(edit.offset);
                                    end = textModel.getPositionAt(edit.offset + edit.length);
                                    editOperations.push({
                                        range: monaco.Range.fromPositions(start, end),
                                        text: edit.content || null,
                                        forceMoveMarkers: false
                                    });
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        else {
                            editOperations.push({
                                range: textModel.getFullModelRange(),
                                text: null,
                                forceMoveMarkers: false
                            });
                        }
                        return [4 /*yield*/, this.workspace.applyBackgroundEdit(this.model, editOperations)];
                    case 3:
                        _e.sent();
                        return [2 /*return*/, true];
                    case 4:
                        e_1 = _e.sent();
                        message = "Failed to update the value of '" + key + "' in '" + this.getUri() + "'.";
                        this.messageService.error(message + " Please check if it is corrupted.");
                        console.error("" + message, e_1);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AbstractResourcePreferenceProvider.prototype.getPath = function (preferenceName) {
        return [preferenceName];
    };
    /**
     * It HAS to be sync to ensure that `setPreference` returns only when values are updated
     * or any other operation modifying the monaco model content.
     */
    AbstractResourcePreferenceProvider.prototype.readPreferences = function () {
        var model = this.model;
        if (!model || model.dirty) {
            return;
        }
        try {
            var preferences = void 0;
            if (model.valid) {
                var content = model.getText();
                preferences = this.getParsedContent(content);
            }
            else {
                preferences = {};
            }
            this.handlePreferenceChanges(preferences);
        }
        catch (e) {
            console.error("Failed to load preferences from '" + this.getUri() + "'.", e);
        }
    };
    AbstractResourcePreferenceProvider.prototype.getParsedContent = function (content) {
        var jsonData = this.parse(content);
        var preferences = {};
        if (typeof jsonData !== 'object') {
            return preferences;
        }
        // eslint-disable-next-line guard-for-in
        for (var preferenceName in jsonData) {
            var preferenceValue = jsonData[preferenceName];
            if (this.schemaProvider.testOverrideValue(preferenceName, preferenceValue)) {
                // eslint-disable-next-line guard-for-in
                for (var overriddenPreferenceName in preferenceValue) {
                    var overriddenValue = preferenceValue[overriddenPreferenceName];
                    preferences[preferenceName + "." + overriddenPreferenceName] = overriddenValue;
                }
            }
            else {
                preferences[preferenceName] = preferenceValue;
            }
        }
        return preferences;
    };
    AbstractResourcePreferenceProvider.prototype.parse = function (content) {
        content = content.trim();
        if (!content) {
            return undefined;
        }
        var strippedContent = jsoncparser.stripComments(content);
        return jsoncparser.parse(strippedContent);
    };
    AbstractResourcePreferenceProvider.prototype.handlePreferenceChanges = function (newPrefs) {
        var e_3, _a;
        var oldPrefs = Object.assign({}, this.preferences);
        this.preferences = newPrefs;
        var prefNames = new Set(__spread(Object.keys(oldPrefs), Object.keys(newPrefs)));
        var prefChanges = [];
        var uri = this.getUri();
        try {
            for (var _b = __values(prefNames.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var prefName = _c.value;
                var oldValue = oldPrefs[prefName];
                var newValue = newPrefs[prefName];
                var schemaProperties = this.schemaProvider.getCombinedSchema().properties[prefName];
                if (schemaProperties) {
                    var scope = schemaProperties.scope;
                    // do not emit the change event if the change is made out of the defined preference scope
                    if (!this.schemaProvider.isValidInScope(prefName, this.getScope())) {
                        console.warn("Preference " + prefName + " in " + uri + " can only be defined in scopes: " + browser_1.PreferenceScope.getScopeNames(scope).join(', ') + ".");
                        continue;
                    }
                }
                if (newValue === undefined && oldValue !== newValue
                    || oldValue === undefined && newValue !== oldValue // JSONExt.deepEqual() does not support handling `undefined`
                    || !json_1.JSONExt.deepEqual(oldValue, newValue)) {
                    prefChanges.push({
                        preferenceName: prefName, newValue: newValue, oldValue: oldValue, scope: this.getScope(), domain: this.getDomain()
                    });
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
        if (prefChanges.length > 0) { // do not emit the change event if the pref value is not changed
            this.emitPreferencesChangedEvent(prefChanges);
        }
    };
    AbstractResourcePreferenceProvider.prototype.reset = function () {
        var e_4, _a;
        var preferences = this.preferences;
        this.preferences = {};
        var changes = [];
        try {
            for (var _b = __values(Object.keys(preferences)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var prefName = _c.value;
                var value = preferences[prefName];
                if (value !== undefined) {
                    changes.push({
                        preferenceName: prefName, newValue: undefined, oldValue: value, scope: this.getScope(), domain: this.getDomain()
                    });
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (changes.length > 0) {
            this.emitPreferencesChangedEvent(changes);
        }
    };
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], AbstractResourcePreferenceProvider.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], AbstractResourcePreferenceProvider.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], AbstractResourcePreferenceProvider.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], AbstractResourcePreferenceProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], AbstractResourcePreferenceProvider.prototype, "textModelService", void 0);
    __decorate([
        inversify_1.inject(monaco_workspace_1.MonacoWorkspace),
        __metadata("design:type", monaco_workspace_1.MonacoWorkspace)
    ], AbstractResourcePreferenceProvider.prototype, "workspace", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AbstractResourcePreferenceProvider.prototype, "init", null);
    AbstractResourcePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], AbstractResourcePreferenceProvider);
    return AbstractResourcePreferenceProvider;
}(browser_1.PreferenceProvider));
exports.AbstractResourcePreferenceProvider = AbstractResourcePreferenceProvider;
//# sourceMappingURL=abstract-resource-preference-provider.js.map
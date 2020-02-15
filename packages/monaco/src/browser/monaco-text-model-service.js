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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var monaco_languageclient_1 = require("monaco-languageclient");
var uri_1 = require("@theia/core/lib/common/uri");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/editor/lib/browser");
var monaco_editor_model_1 = require("./monaco-editor-model");
var MonacoTextModelService = /** @class */ (function () {
    function MonacoTextModelService() {
        var _this = this;
        this._models = new core_1.ReferenceCollection(function (uri) { return _this.loadModel(new uri_1.default(uri)); });
        this.modelOptions = {
            'editor.tabSize': 'tabSize',
            'editor.insertSpaces': 'insertSpaces'
        };
    }
    Object.defineProperty(MonacoTextModelService.prototype, "models", {
        get: function () {
            return this._models.values();
        },
        enumerable: true,
        configurable: true
    });
    MonacoTextModelService.prototype.get = function (uri) {
        return this._models.get(uri);
    };
    Object.defineProperty(MonacoTextModelService.prototype, "onDidCreate", {
        get: function () {
            return this._models.onDidCreate;
        },
        enumerable: true,
        configurable: true
    });
    MonacoTextModelService.prototype.createModelReference = function (raw) {
        return this._models.acquire(raw.toString());
    };
    MonacoTextModelService.prototype.loadModel = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, model, disposable;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorPreferences.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.resourceProvider(uri)];
                    case 2:
                        resource = _a.sent();
                        return [4 /*yield*/, (new monaco_editor_model_1.MonacoEditorModel(resource, this.m2p, this.p2m, { encoding: this.editorPreferences.get('files.encoding') }).load())];
                    case 3:
                        model = _a.sent();
                        this.updateModel(model);
                        model.textEditorModel.onDidChangeLanguage(function () { return _this.updateModel(model); });
                        disposable = this.editorPreferences.onPreferenceChanged(function (change) { return _this.updateModel(model, change); });
                        model.onDispose(function () { return disposable.dispose(); });
                        return [2 /*return*/, model];
                }
            });
        });
    };
    MonacoTextModelService.prototype.updateModel = function (model, change) {
        if (change) {
            if (!change.affects(model.uri, model.languageId)) {
                return;
            }
            if (change.preferenceName === 'editor.autoSave') {
                model.autoSave = this.editorPreferences.get('editor.autoSave', undefined, model.uri);
            }
            if (change.preferenceName === 'editor.autoSaveDelay') {
                model.autoSaveDelay = this.editorPreferences.get('editor.autoSaveDelay', undefined, model.uri);
            }
            var modelOption = this.modelOptions[change.preferenceName];
            if (modelOption) {
                var options = {};
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options[modelOption] = change.newValue;
                model.textEditorModel.updateOptions(options);
            }
        }
        else {
            model.autoSave = this.editorPreferences.get('editor.autoSave', undefined, model.uri);
            model.autoSaveDelay = this.editorPreferences.get('editor.autoSaveDelay', undefined, model.uri);
            model.textEditorModel.updateOptions(this.getModelOptions(model));
        }
    };
    MonacoTextModelService.prototype.getModelOptions = function (arg) {
        var uri = typeof arg === 'string' ? arg : arg.uri;
        var overrideIdentifier = typeof arg === 'string' ? undefined : arg.languageId;
        return {
            tabSize: this.editorPreferences.get({ preferenceName: 'editor.tabSize', overrideIdentifier: overrideIdentifier }, undefined, uri),
            insertSpaces: this.editorPreferences.get({ preferenceName: 'editor.insertSpaces', overrideIdentifier: overrideIdentifier }, undefined, uri)
        };
    };
    MonacoTextModelService.prototype.registerTextModelContentProvider = function (scheme, provider) {
        return {
            dispose: function () {
                // no-op
            }
        };
    };
    __decorate([
        inversify_1.inject(core_1.ResourceProvider),
        __metadata("design:type", Function)
    ], MonacoTextModelService.prototype, "resourceProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorPreferences),
        __metadata("design:type", Object)
    ], MonacoTextModelService.prototype, "editorPreferences", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoTextModelService.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter),
        __metadata("design:type", monaco_languageclient_1.ProtocolToMonacoConverter)
    ], MonacoTextModelService.prototype, "p2m", void 0);
    MonacoTextModelService = __decorate([
        inversify_1.injectable()
    ], MonacoTextModelService);
    return MonacoTextModelService;
}());
exports.MonacoTextModelService = MonacoTextModelService;
//# sourceMappingURL=monaco-text-model-service.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
var debounce = require("p-debounce");
var jsonc_parser_1 = require("jsonc-parser");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var event_1 = require("@theia/core/lib/common/event");
var browser_1 = require("@theia/editor/lib/browser");
var monaco_editor_1 = require("@theia/monaco/lib/browser/monaco-editor");
var browser_2 = require("@theia/core/lib/browser");
var quick_pick_service_1 = require("@theia/core/lib/common/quick-pick-service");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var debug_configuration_model_1 = require("./debug-configuration-model");
var debug_service_1 = require("../common/debug-service");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var workspace_variable_contribution_1 = require("@theia/workspace/lib/browser/workspace-variable-contribution");
var common_1 = require("@theia/filesystem/lib/common");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var DebugConfigurationManager = /** @class */ (function () {
    function DebugConfigurationManager() {
        var _this = this;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onWillProvideDebugConfigurationEmitter = new event_1.Emitter();
        this.onWillProvideDebugConfiguration = this.onWillProvideDebugConfigurationEmitter.event;
        this.models = new Map();
        this.updateModels = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var roots, toDelete, _loop_1, this_1, roots_1, roots_1_1, rootStat, toDelete_1, toDelete_1_1, uri, model;
            var e_1, _a, e_2, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _c.sent();
                        toDelete = new Set(this.models.keys());
                        _loop_1 = function (rootStat) {
                            var key = rootStat.uri;
                            toDelete.delete(key);
                            if (!this_1.models.has(key)) {
                                var model = new debug_configuration_model_1.DebugConfigurationModel(key, this_1.preferences);
                                model.onDidChange(function () { return _this.updateCurrent(); });
                                model.onDispose(function () { return _this.models.delete(key); });
                                this_1.models.set(key, model);
                            }
                        };
                        this_1 = this;
                        try {
                            for (roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                                rootStat = roots_1_1.value;
                                _loop_1(rootStat);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        try {
                            for (toDelete_1 = __values(toDelete), toDelete_1_1 = toDelete_1.next(); !toDelete_1_1.done; toDelete_1_1 = toDelete_1.next()) {
                                uri = toDelete_1_1.value;
                                model = this.models.get(uri);
                                if (model) {
                                    model.dispose();
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (toDelete_1_1 && !toDelete_1_1.done && (_b = toDelete_1.return)) _b.call(toDelete_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        this.updateCurrent();
                        return [2 /*return*/];
                }
            });
        }); }, 500);
    }
    DebugConfigurationManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.debugConfigurationTypeKey = this.contextKeyService.createKey('debugConfigurationType', undefined);
                this.initialized = this.updateModels();
                this.preferences.onPreferenceChanged(function (e) {
                    if (e.preferenceName === 'launch') {
                        _this.updateModels();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(DebugConfigurationManager.prototype, "all", {
        get: function () {
            return this.getAll();
        },
        enumerable: true,
        configurable: true
    });
    DebugConfigurationManager.prototype.getAll = function () {
        var _a, _b, model, _c, _d, configuration, e_3_1, e_4_1;
        var e_4, _e, e_3, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 11, 12, 13]);
                    _a = __values(this.models.values()), _b = _a.next();
                    _g.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 10];
                    model = _b.value;
                    _g.label = 2;
                case 2:
                    _g.trys.push([2, 7, 8, 9]);
                    _c = (e_3 = void 0, __values(model.configurations)), _d = _c.next();
                    _g.label = 3;
                case 3:
                    if (!!_d.done) return [3 /*break*/, 6];
                    configuration = _d.value;
                    return [4 /*yield*/, {
                            configuration: configuration,
                            workspaceFolderUri: model.workspaceFolderUri
                        }];
                case 4:
                    _g.sent();
                    _g.label = 5;
                case 5:
                    _d = _c.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_3_1 = _g.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 9:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_4_1 = _g.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(DebugConfigurationManager.prototype, "supported", {
        get: function () {
            return this.getSupported();
        },
        enumerable: true,
        configurable: true
    });
    DebugConfigurationManager.prototype.getSupported = function () {
        return __awaiter(this, void 0, void 0, function () {
            var debugTypes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialized];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.debug.debugTypes()];
                    case 2:
                        debugTypes = _a.sent();
                        return [2 /*return*/, this.doGetSupported(new Set(debugTypes))];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.doGetSupported = function (debugTypes) {
        var _a, _b, options, e_5_1;
        var e_5, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this.getAll()), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    options = _b.value;
                    if (!debugTypes.has(options.configuration.type)) return [3 /*break*/, 3];
                    return [4 /*yield*/, options];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_5_1 = _d.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(DebugConfigurationManager.prototype, "current", {
        get: function () {
            return this._currentOptions;
        },
        set: function (option) {
            this.updateCurrent(option);
        },
        enumerable: true,
        configurable: true
    });
    DebugConfigurationManager.prototype.updateCurrent = function (options) {
        if (options === void 0) { options = this._currentOptions; }
        this._currentOptions = options
            && this.find(options.configuration.name, options.workspaceFolderUri);
        if (!this._currentOptions) {
            var model = this.model;
            if (model) {
                var configuration = model.configurations[0];
                if (configuration) {
                    this._currentOptions = {
                        configuration: configuration,
                        workspaceFolderUri: model.workspaceFolderUri
                    };
                }
            }
        }
        this.debugConfigurationTypeKey.set(this.current && this.current.configuration.type);
        this.onDidChangeEmitter.fire(undefined);
    };
    DebugConfigurationManager.prototype.find = function (name, workspaceFolderUri) {
        var e_6, _a, e_7, _b;
        try {
            for (var _c = __values(this.models.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var model = _d.value;
                if (model.workspaceFolderUri === workspaceFolderUri) {
                    try {
                        for (var _e = (e_7 = void 0, __values(model.configurations)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var configuration = _f.value;
                            if (configuration.name === name) {
                                return {
                                    configuration: configuration,
                                    workspaceFolderUri: workspaceFolderUri
                                };
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return undefined;
    };
    DebugConfigurationManager.prototype.openConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = this.model;
                        if (!model) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doOpen(model)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.addConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model, widget, editor, commandService, position, depthInArray, lastProperty;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = this.model;
                        if (!model) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.doOpen(model)];
                    case 1:
                        widget = _a.sent();
                        if (!(widget.editor instanceof monaco_editor_1.MonacoEditor)) {
                            return [2 /*return*/];
                        }
                        editor = widget.editor.getControl();
                        commandService = widget.editor.commandService;
                        depthInArray = 0;
                        lastProperty = '';
                        jsonc_parser_1.visit(editor.getValue(), {
                            onObjectProperty: function (property) {
                                lastProperty = property;
                            },
                            onArrayBegin: function (offset) {
                                if (lastProperty === 'configurations' && depthInArray === 0) {
                                    position = editor.getModel().getPositionAt(offset + 1);
                                }
                                depthInArray++;
                            },
                            onArrayEnd: function () {
                                depthInArray--;
                            }
                        });
                        if (!position) {
                            return [2 /*return*/];
                        }
                        // Check if there are more characters on a line after a "configurations": [, if yes enter a newline
                        if (editor.getModel().getLineLastNonWhitespaceColumn(position.lineNumber) > position.column) {
                            editor.setPosition(position);
                            editor.trigger('debug', 'lineBreakInsert', undefined);
                        }
                        if (!(editor.getModel().getLineLastNonWhitespaceColumn(position.lineNumber + 1) === 0)) return [3 /*break*/, 3];
                        editor.setPosition({ lineNumber: position.lineNumber + 1, column: 1 << 30 });
                        return [4 /*yield*/, commandService.executeCommand('editor.action.deleteLines')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        editor.setPosition(position);
                        return [4 /*yield*/, commandService.executeCommand('editor.action.insertLineAfter')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, commandService.executeCommand('editor.action.triggerSuggest')];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugConfigurationManager.prototype, "model", {
        get: function () {
            var e_8, _a, e_9, _b;
            var workspaceFolderUri = this.workspaceVariables.getWorkspaceRootUri();
            if (workspaceFolderUri) {
                var key = workspaceFolderUri.toString();
                try {
                    for (var _c = __values(this.models.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var model = _d.value;
                        if (model.workspaceFolderUri === key) {
                            return model;
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
            try {
                for (var _e = __values(this.models.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var model = _f.value;
                    if (model.uri) {
                        return model;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_9) throw e_9.error; }
            }
            return this.models.values().next().value;
        },
        enumerable: true,
        configurable: true
    });
    DebugConfigurationManager.prototype.doOpen = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = model.uri;
                        if (!!uri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doCreate(model)];
                    case 1:
                        uri = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.editorManager.open(uri, {
                            mode: 'activate'
                        })];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.doCreate = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var configUri, uri, debugType, configurations, _a, content, fileStat, e_10;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.preferences.set('launch', {})];
                    case 1:
                        _b.sent(); // create dummy launch.json in the correct place
                        configUri = this.preferences.resolve('launch').configUri;
                        if (configUri && configUri.path.base === 'launch.json') {
                            uri = configUri;
                        }
                        else { // fallback
                            uri = new uri_1.default(model.workspaceFolderUri).resolve(this.preferenceConfigurations.getPaths()[0] + "/launch.json");
                        }
                        return [4 /*yield*/, this.selectDebugType()];
                    case 2:
                        debugType = _b.sent();
                        if (!debugType) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.provideDebugConfigurations(debugType, model.workspaceFolderUri)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = [];
                        _b.label = 5;
                    case 5:
                        configurations = _a;
                        content = this.getInitialConfigurationContent(configurations);
                        return [4 /*yield*/, this.filesystem.getFileStat(uri.toString())];
                    case 6:
                        fileStat = _b.sent();
                        if (!fileStat) {
                            throw new Error("file not found: " + uri.toString());
                        }
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, this.filesystem.setContent(fileStat, content)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_10 = _b.sent();
                        if (!common_1.FileSystemError.FileExists.is(e_10)) {
                            throw e_10;
                        }
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/, uri];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.provideDebugConfigurations = function (debugType, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireWillProvideDebugConfiguration()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.debug.provideDebugConfigurations(debugType, workspaceFolderUri)];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.fireWillProvideDebugConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillProvideDebugConfigurationEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.getInitialConfigurationContent = function (initialConfigurations) {
        return "{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  \"version\": \"0.2.0\",\n  \"configurations\": " + JSON.stringify(initialConfigurations, undefined, '  ').split('\n').map(function (line) { return '  ' + line; }).join('\n').trim() + "\n}\n";
    };
    DebugConfigurationManager.prototype.selectDebugType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var widget, languageId, debuggers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = this.editorManager.currentEditor;
                        if (!widget) {
                            return [2 /*return*/, undefined];
                        }
                        languageId = widget.editor.document.languageId;
                        return [4 /*yield*/, this.debug.getDebuggersForLanguage(languageId)];
                    case 1:
                        debuggers = _a.sent();
                        return [2 /*return*/, this.quickPick.show(debuggers.map(function (_a) {
                                var label = _a.label, type = _a.type;
                                return ({ label: label, value: type });
                            }, { placeholder: 'Select Environment' }))];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialized];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.getData('debug.configurations', {})];
                    case 2:
                        data = _a.sent();
                        if (data.current) {
                            this.current = this.find(data.current.name, data.current.workspaceFolderUri);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.save = function () {
        var data = {};
        var current = this.current;
        if (current) {
            data.current = {
                name: current.configuration.name,
                workspaceFolderUri: current.workspaceFolderUri
            };
        }
        this.storage.setData('debug.configurations', data);
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], DebugConfigurationManager.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], DebugConfigurationManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(debug_service_1.DebugService),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "debug", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], DebugConfigurationManager.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.PreferenceService),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], DebugConfigurationManager.prototype, "preferenceConfigurations", void 0);
    __decorate([
        inversify_1.inject(workspace_variable_contribution_1.WorkspaceVariableContribution),
        __metadata("design:type", workspace_variable_contribution_1.WorkspaceVariableContribution)
    ], DebugConfigurationManager.prototype, "workspaceVariables", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DebugConfigurationManager.prototype, "init", null);
    __decorate([
        inversify_1.inject(browser_2.StorageService),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "storage", void 0);
    DebugConfigurationManager = __decorate([
        inversify_1.injectable()
    ], DebugConfigurationManager);
    return DebugConfigurationManager;
}());
exports.DebugConfigurationManager = DebugConfigurationManager;
//# sourceMappingURL=debug-configuration-manager.js.map
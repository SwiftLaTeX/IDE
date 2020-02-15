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
var inversify_1 = require("inversify");
var commands_1 = require("typescript-language-server/lib/commands");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/languages/lib/browser");
var browser_3 = require("@theia/filesystem/lib/browser");
var browser_4 = require("@theia/editor/lib/browser");
var common_1 = require("@theia/core/lib/common");
var monaco_editor_1 = require("@theia/monaco/lib/browser/monaco-editor");
var common_2 = require("../common");
var typescript_client_contribution_1 = require("./typescript-client-contribution");
var typescript_keybinding_contexts_1 = require("./typescript-keybinding-contexts");
var typescript_version_service_1 = require("../common/typescript-version-service");
var uri_1 = require("@theia/core/lib/common/uri");
var TypeScriptCommands;
(function (TypeScriptCommands) {
    TypeScriptCommands.applyCompletionCodeAction = {
        id: commands_1.Commands.APPLY_COMPLETION_CODE_ACTION
    };
    // TODO: get rid of me when https://github.com/TypeFox/monaco-languageclient/issues/104 is resolved
    TypeScriptCommands.organizeImports = {
        category: 'TypeScript',
        label: 'Organize Imports',
        id: 'typescript.edit.organizeImports'
    };
    TypeScriptCommands.openServerLog = {
        category: 'TypeScript',
        label: 'Open Server Log',
        id: 'typescript.server.openLog'
    };
    TypeScriptCommands.selectVersion = {
        category: 'TypeScript',
        label: 'Select Version',
        id: 'typescript.selectVersion'
    };
})(TypeScriptCommands = exports.TypeScriptCommands || (exports.TypeScriptCommands = {}));
var TypeScriptFrontendContribution = /** @class */ (function () {
    function TypeScriptFrontendContribution() {
        this.storageKey = 'typescript.contribution';
        this.toDisposeOnCurrentEditorChanged = new common_1.DisposableCollection();
    }
    TypeScriptFrontendContribution.prototype.init = function () {
        var _this = this;
        this.fileSystemWatcher.onDidMove(function (event) { return _this.renameFile(event); });
    };
    TypeScriptFrontendContribution.prototype.onStart = function () {
        var _this = this;
        this.restore();
        this.updateStatusBar();
        this.editorManager.onCurrentEditorChanged(function () { return _this.updateStatusBar(); });
        this.clientContribution.onDidChangeVersion(function () { return _this.updateStatusBar(); });
    };
    TypeScriptFrontendContribution.prototype.onStop = function () {
        this.store();
    };
    TypeScriptFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(TypeScriptCommands.applyCompletionCodeAction, {
            execute: function (file, codeActions) { return __awaiter(_this, void 0, void 0, function () {
                var codeAction;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.pickCodeAction(codeActions)];
                        case 1:
                            codeAction = _a.sent();
                            return [2 /*return*/, codeAction && this.applyCodeAction(codeAction)];
                    }
                });
            }); }
        });
        commands.registerCommand(TypeScriptCommands.organizeImports, {
            execute: function () { return _this.organizeImports(); },
            isEnabled: function () { return !!_this.currentEditor; },
            isVisible: function () { return !!_this.currentEditor; }
        });
        commands.registerCommand(TypeScriptCommands.openServerLog, {
            execute: function () { return _this.openServerLog(); },
            isEnabled: function () { return !!_this.clientContribution.logFileUri; },
            isVisible: function () { return !!_this.clientContribution.logFileUri; }
        });
        commands.registerCommand(TypeScriptCommands.selectVersion, {
            execute: function () { return _this.selectVersion(); }
        });
    };
    TypeScriptFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(__spread(browser_4.EDITOR_CONTEXT_MENU, ['1_modification']), {
            commandId: TypeScriptCommands.organizeImports.id,
            label: 'Organize Imports'
        });
    };
    TypeScriptFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: TypeScriptCommands.organizeImports.id,
            context: typescript_keybinding_contexts_1.TypeScriptKeybindingContexts.typescriptEditorTextFocus,
            keybinding: 'shift+alt+o'
        });
    };
    TypeScriptFrontendContribution.prototype.openServerLog = function () {
        var logFileUri = this.clientContribution.logFileUri;
        if (logFileUri) {
            this.editorManager.open(logFileUri);
        }
    };
    TypeScriptFrontendContribution.prototype.organizeImports = function () {
        var editor = monaco_editor_1.MonacoEditor.get(this.currentEditor);
        if (editor) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var action = editor.getControl().getAction('editor.action.organizeImports');
            // workaround isSupported check
            action._run();
        }
    };
    Object.defineProperty(TypeScriptFrontendContribution.prototype, "currentEditor", {
        get: function () {
            var currentEditor = this.editorManager.currentEditor;
            if (currentEditor && currentEditor.editor.document.languageId === common_2.TYPESCRIPT_LANGUAGE_ID) {
                return currentEditor;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptFrontendContribution.prototype.pickCodeAction = function (codeActions) {
        return this.quickPickService.show(codeActions.map(function (value) { return ({
            label: value.description,
            value: value
        }); }, {
            placeholder: 'Select code action to apply'
        }));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TypeScriptFrontendContribution.prototype.applyCodeAction = function (codeAction) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        client = _a.sent();
                        return [2 /*return*/, client.sendRequest(browser_2.ExecuteCommandRequest.type, {
                                command: commands_1.Commands.APPLY_CODE_ACTION,
                                arguments: [codeAction]
                            })];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.renameFile = function (_a) {
        var sourceUri = _a.sourceUri, targetUri = _a.targetUri;
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        client = _b.sent();
                        return [2 /*return*/, client.sendRequest(browser_2.ExecuteCommandRequest.type, {
                                command: commands_1.Commands.APPLY_RENAME_FILE,
                                arguments: [{
                                        sourceUri: sourceUri.toString(),
                                        targetUri: targetUri.toString()
                                    }]
                            })];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.selectVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items, currentVersion, currentItem, _a, _b, version, item, e_1_1, selectedVersion;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        items = [];
                        currentVersion = this.clientContribution.version;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, this.clientContribution.getVersions()];
                    case 2:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 5];
                        version = _b.value;
                        item = {
                            label: "Use " + version.qualifier + " Version",
                            description: version.version,
                            detail: this.labelProvider.getLongName(new uri_1.default(version.uri)),
                            value: version
                        };
                        if (!currentItem && typescript_version_service_1.TypescriptVersion.equals(version, currentVersion)) {
                            currentItem = item;
                        }
                        items.push(item);
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        if (!currentItem) {
                            currentItem = items[0];
                        }
                        if (currentItem) {
                            currentItem.label = '• ' + currentItem.label;
                        }
                        return [4 /*yield*/, this.quickPickService.show(items, {
                                placeholder: 'Select the TypeScript version used for JavaScript and TypeScript language features'
                            })];
                    case 9:
                        selectedVersion = _d.sent();
                        if (selectedVersion) {
                            this.clientContribution.setVersion(selectedVersion);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.restore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getData(this.storageKey)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.clientContribution.restore(data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.store = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.clientContribution.store();
                        return [4 /*yield*/, this.storage.setData(this.storageKey, data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.updateStatusBar = function () {
        var _this = this;
        this.toDisposeOnCurrentEditorChanged.dispose();
        var widget = this.editorManager.currentEditor;
        var editor = widget && widget.editor;
        this.updateVersionStatus(editor);
        if (editor) {
            this.toDisposeOnCurrentEditorChanged.push(editor.onLanguageChanged(function () { return _this.updateVersionStatus(editor); }));
        }
    };
    TypeScriptFrontendContribution.prototype.updateVersionStatus = function (editor) {
        var version = this.clientContribution.version;
        var languageId = editor && editor.document.languageId;
        if (!languageId || !common_2.TS_JS_LANGUAGES.has(languageId) || !version) {
            this.statusBar.removeElement('editor-ts-version');
            return;
        }
        this.statusBar.setElement('editor-ts-version', {
            text: version.version,
            alignment: browser_1.StatusBarAlignment.RIGHT,
            priority: 0.9,
            command: TypeScriptCommands.selectVersion.id
        });
    };
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], TypeScriptFrontendContribution.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(browser_4.EditorManager),
        __metadata("design:type", browser_4.EditorManager)
    ], TypeScriptFrontendContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickPickService),
        __metadata("design:type", Object)
    ], TypeScriptFrontendContribution.prototype, "quickPickService", void 0);
    __decorate([
        inversify_1.inject(typescript_client_contribution_1.TypeScriptClientContribution),
        __metadata("design:type", typescript_client_contribution_1.TypeScriptClientContribution)
    ], TypeScriptFrontendContribution.prototype, "clientContribution", void 0);
    __decorate([
        inversify_1.inject(browser_3.FileSystemWatcher),
        __metadata("design:type", browser_3.FileSystemWatcher)
    ], TypeScriptFrontendContribution.prototype, "fileSystemWatcher", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], TypeScriptFrontendContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], TypeScriptFrontendContribution.prototype, "storage", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeScriptFrontendContribution.prototype, "init", null);
    TypeScriptFrontendContribution = __decorate([
        inversify_1.injectable()
    ], TypeScriptFrontendContribution);
    return TypeScriptFrontendContribution;
}());
exports.TypeScriptFrontendContribution = TypeScriptFrontendContribution;
//# sourceMappingURL=typescript-frontend-contribution.js.map
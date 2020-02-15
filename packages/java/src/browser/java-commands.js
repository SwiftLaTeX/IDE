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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var lib_1 = require("monaco-languageclient/lib");
var browser_1 = require("@theia/editor/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var browser_3 = require("@theia/languages/lib/browser");
var common_1 = require("../common");
var java_client_contribution_1 = require("./java-client-contribution");
var java_keybinding_contexts_1 = require("./java-keybinding-contexts");
var java_protocol_1 = require("./java-protocol");
var uri_1 = require("@theia/core/lib/common/uri");
/**
 * Show Java references
 */
exports.SHOW_JAVA_REFERENCES = {
    id: 'java.show.references'
};
/**
 * Apply Workspace Edit
 */
exports.APPLY_WORKSPACE_EDIT = {
    id: 'java.apply.workspaceEdit'
};
/**
 * Organize Imports
 */
exports.JAVA_ORGANIZE_IMPORTS = {
    id: 'java.edit.organizeImports',
    category: 'Java',
    label: 'Organize Imports',
};
exports.JAVA_COMPILE_WORKSPACE = {
    id: 'java.workspace.compile'
};
exports.JAVA_IGNORE_INCOMPLETE_CLASSPATH = {
    id: 'java.ignoreIncompleteClasspath'
};
exports.JAVA_IGNORE_INCOMPLETE_CLASSPATH_HELP = {
    id: 'java.ignoreIncompleteClasspath.help'
};
var JavaCommandContribution = /** @class */ (function () {
    function JavaCommandContribution() {
    }
    JavaCommandContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(exports.SHOW_JAVA_REFERENCES, {
            execute: function (uri, position, locations) {
                return commands.executeCommand(browser_1.EditorCommands.SHOW_REFERENCES.id, uri, position, locations);
            }
        });
        commands.registerCommand(exports.APPLY_WORKSPACE_EDIT, {
            execute: function (changes) {
                return !!_this.workspace.applyEdit && _this.workspace.applyEdit(changes);
            }
        });
        commands.registerCommand(exports.JAVA_ORGANIZE_IMPORTS, {
            execute: function (changes) { return __awaiter(_this, void 0, void 0, function () {
                var editor, uri, client, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            editor = this.currentEditor;
                            if (!editor) {
                                return [2 /*return*/, false];
                            }
                            uri = editor.editor.uri.toString();
                            return [4 /*yield*/, this.javaClientContribution.languageClient];
                        case 1:
                            client = _a.sent();
                            return [4 /*yield*/, client.sendRequest(lib_1.ExecuteCommandRequest.type, {
                                    command: exports.JAVA_ORGANIZE_IMPORTS.id,
                                    arguments: [
                                        uri
                                    ]
                                })];
                        case 2:
                            result = _a.sent();
                            if (browser_3.WorkspaceEdit.is(result) && this.workspace.applyEdit) {
                                return [2 /*return*/, this.workspace.applyEdit(result)];
                            }
                            else {
                                return [2 /*return*/, false];
                            }
                            return [2 /*return*/];
                    }
                });
            }); },
            isVisible: function () { return !!_this.currentEditor; },
            isEnabled: function () { return !!_this.currentEditor; }
        });
        commands.registerCommand(exports.JAVA_COMPILE_WORKSPACE, {
            execute: function (fullCompile) { return __awaiter(_this, void 0, void 0, function () {
                var languageClient, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.javaClientContribution.languageClient];
                        case 1:
                            languageClient = _a.sent();
                            return [4 /*yield*/, languageClient.sendRequest(java_protocol_1.CompileWorkspaceRequest.type, fullCompile)];
                        case 2:
                            result = _a.sent();
                            if (result === java_protocol_1.CompileWorkspaceStatus.SUCCEED) {
                                return [2 /*return*/];
                            }
                            throw new Error('Failed to build');
                    }
                });
            }); },
            isEnabled: function () { return _this.javaClientContribution.running; }
        });
        commands.registerCommand(exports.JAVA_IGNORE_INCOMPLETE_CLASSPATH, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.preferencesService.set('java.errors.incompleteClasspath.severity', 'ignore')];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        commands.registerCommand(exports.JAVA_IGNORE_INCOMPLETE_CLASSPATH_HELP, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var uri, opener;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            uri = new uri_1.default('https://github.com/redhat-developer/vscode-java/wiki/%22Classpath-is-incomplete%22-warning');
                            return [4 /*yield*/, this.openerService.getOpener(uri)];
                        case 1:
                            opener = _a.sent();
                            return [4 /*yield*/, opener.open(uri)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        });
    };
    Object.defineProperty(JavaCommandContribution.prototype, "currentEditor", {
        get: function () {
            var currentEditor = this.editorManager.currentEditor;
            if (currentEditor && currentEditor.editor.document.languageId === common_1.JAVA_LANGUAGE_ID) {
                return currentEditor;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    JavaCommandContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(__spread(browser_1.EDITOR_CONTEXT_MENU, ['1_modification']), {
            commandId: exports.JAVA_ORGANIZE_IMPORTS.id,
            label: 'Organize Imports'
        });
    };
    JavaCommandContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: exports.JAVA_ORGANIZE_IMPORTS.id,
            context: java_keybinding_contexts_1.JavaKeybindingContexts.javaEditorTextFocus,
            keybinding: 'shift+alt+o'
        });
    };
    __decorate([
        inversify_1.inject(browser_3.Workspace),
        __metadata("design:type", Object)
    ], JavaCommandContribution.prototype, "workspace", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], JavaCommandContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(java_client_contribution_1.JavaClientContribution),
        __metadata("design:type", java_client_contribution_1.JavaClientContribution)
    ], JavaCommandContribution.prototype, "javaClientContribution", void 0);
    __decorate([
        inversify_1.inject(browser_2.PreferenceService),
        __metadata("design:type", Object)
    ], JavaCommandContribution.prototype, "preferencesService", void 0);
    __decorate([
        inversify_1.inject(browser_2.OpenerService),
        __metadata("design:type", Object)
    ], JavaCommandContribution.prototype, "openerService", void 0);
    JavaCommandContribution = __decorate([
        inversify_1.injectable()
    ], JavaCommandContribution);
    return JavaCommandContribution;
}());
exports.JavaCommandContribution = JavaCommandContribution;
//# sourceMappingURL=java-commands.js.map
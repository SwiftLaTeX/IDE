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
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var application_shell_mouse_tracker_1 = require("@theia/core/lib/browser/shell/application-shell-mouse-tracker");
var command_1 = require("@theia/core/lib/common/command");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_2 = require("@theia/editor/lib/browser");
var menus_contribution_handler_1 = require("@theia/plugin-ext/lib/main/browser/menus/menus-contribution-handler");
var documents_main_1 = require("@theia/plugin-ext/lib/main/browser/documents-main");
var untitled_resource_1 = require("@theia/plugin-ext/lib/main/browser/editor/untitled-resource");
var type_converters_1 = require("@theia/plugin-ext/lib/plugin/type-converters");
var browser_3 = require("@theia/workspace/lib/browser");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var diff_service_1 = require("@theia/workspace/lib/browser/diff-service");
var monaco_editor_1 = require("@theia/monaco/lib/browser/monaco-editor");
var inversify_1 = require("inversify");
var vscode_uri_1 = require("vscode-uri");
var VscodeCommands;
(function (VscodeCommands) {
    VscodeCommands.OPEN = {
        id: 'vscode.open'
    };
    VscodeCommands.OPEN_FOLDER = {
        id: 'vscode.openFolder'
    };
    VscodeCommands.DIFF = {
        id: 'vscode.diff'
    };
    VscodeCommands.SET_CONTEXT = {
        id: 'setContext'
    };
})(VscodeCommands = exports.VscodeCommands || (exports.VscodeCommands = {}));
var PluginVscodeCommandsContribution = /** @class */ (function () {
    function PluginVscodeCommandsContribution() {
    }
    PluginVscodeCommandsContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(VscodeCommands.OPEN, {
            isVisible: function () { return false; },
            execute: function (resource, columnOrOptions) { return __awaiter(_this, void 0, void 0, function () {
                var options, editorOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!resource) {
                                throw new Error(VscodeCommands.OPEN.id + " command requires at least URI argument.");
                            }
                            if (!vscode_uri_1.default.isUri(resource)) {
                                throw new Error("Invalid argument for " + VscodeCommands.OPEN.id + " command with URI argument. Found " + resource);
                            }
                            if (typeof columnOrOptions === 'number') {
                                options = {
                                    viewColumn: columnOrOptions
                                };
                            }
                            else if (columnOrOptions) {
                                options = __assign({}, columnOrOptions);
                            }
                            editorOptions = documents_main_1.DocumentsMainImpl.toEditorOpenerOptions(this.shell, options);
                            return [4 /*yield*/, browser_1.open(this.openerService, new uri_1.default(resource), editorOptions)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        commands.registerCommand(VscodeCommands.OPEN_FOLDER, {
            isVisible: function () { return false; },
            execute: function (resource, arg) {
                if (arg === void 0) { arg = {}; }
                return __awaiter(_this, void 0, void 0, function () {
                    var options;
                    return __generator(this, function (_a) {
                        if (!resource) {
                            return [2 /*return*/, commands.executeCommand(browser_3.WorkspaceCommands.OPEN_WORKSPACE.id)];
                        }
                        if (!vscode_uri_1.default.isUri(resource)) {
                            throw new Error("Invalid argument for " + VscodeCommands.OPEN_FOLDER.id + " command with URI argument. Found " + resource);
                        }
                        if (typeof arg === 'boolean') {
                            options = { preserveWindow: !arg };
                        }
                        else {
                            options = { preserveWindow: !arg.forceNewWindow };
                        }
                        this.workspaceService.open(new uri_1.default(resource), options);
                        return [2 /*return*/];
                    });
                });
            }
        });
        commands.registerCommand(VscodeCommands.DIFF, {
            isVisible: function () { return false; },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function (left, right, label, options) { return __awaiter(_this, void 0, void 0, function () {
                var leftURI, editorOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!left || !right) {
                                throw new Error(VscodeCommands.DIFF + " command requires at least two URI arguments. Found left=" + left + ", right=" + right + " as arguments");
                            }
                            if (!vscode_uri_1.default.isUri(left)) {
                                throw new Error("Invalid argument for " + VscodeCommands.DIFF.id + " command with left argument. Expecting URI left type but found " + left);
                            }
                            if (!vscode_uri_1.default.isUri(right)) {
                                throw new Error("Invalid argument for " + VscodeCommands.DIFF.id + " command with right argument. Expecting URI right type but found " + right);
                            }
                            leftURI = new uri_1.default(left);
                            editorOptions = documents_main_1.DocumentsMainImpl.toEditorOpenerOptions(this.shell, options);
                            return [4 /*yield*/, this.diffService.openDiffEditor(leftURI, new uri_1.default(right), label, editorOptions)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        commands.registerCommand(VscodeCommands.SET_CONTEXT, {
            isVisible: function () { return false; },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function (contextKey, contextValue) {
                _this.contextKeyService.createKey(String(contextKey), contextValue);
            }
        });
        // https://code.visualstudio.com/docs/getstarted/keybindings#_navigation
        /*
         * internally, in VS Code, any widget opened in the main area is represented as an editor
         * operations below apply to them, but not to side-bar widgets, like the explorer
         *
         * in Theia, there are not such difference and any widget can be put in any area
         * because of it we filter out editors from views based on `NavigatableWidget.is`
         * and apply actions only to them
         */
        commands.registerCommand({ id: 'workbench.action.files.newUntitledFile' }, {
            execute: function () { return browser_1.open(_this.openerService, untitled_resource_1.createUntitledResource().uri); }
        });
        commands.registerCommand({ id: 'workbench.action.files.openFile' }, {
            execute: function () { return commands.executeCommand(browser_3.WorkspaceCommands.OPEN_FILE.id); }
        });
        commands.registerCommand({ id: 'workbench.action.files.openFolder' }, {
            execute: function () { return commands.executeCommand(browser_3.WorkspaceCommands.OPEN_FOLDER.id); }
        });
        commands.registerCommand({ id: 'workbench.action.gotoLine' }, {
            execute: function () { return commands.executeCommand('editor.action.gotoLine'); }
        });
        commands.registerCommand({ id: 'actions.find' }, {
            execute: function () { return commands.executeCommand(browser_1.CommonCommands.FIND.id); }
        });
        commands.registerCommand({ id: 'undo' }, {
            execute: function () { return commands.executeCommand(browser_1.CommonCommands.UNDO.id); }
        });
        commands.registerCommand({ id: 'editor.action.startFindReplaceAction' }, {
            execute: function () { return commands.executeCommand(browser_1.CommonCommands.REPLACE.id); }
        });
        commands.registerCommand({ id: 'workbench.action.quickOpen' }, {
            execute: function () { return _this.quickOpen.open(''); }
        });
        commands.registerCommand({ id: 'default:type' }, {
            execute: function (args) {
                var editor = monaco_editor_1.MonacoEditor.getCurrent(_this.editorManager);
                if (editor) {
                    editor.trigger('keyboard', 'type', args);
                }
            }
        });
        commands.registerCommand({ id: 'workbench.action.files.save', }, {
            execute: function (uri) {
                if (uri) {
                    var uriString_1 = uri.toString();
                    var widget = _this.shell.widgets.find(function (w) {
                        var resourceUri = browser_1.Saveable.is(w) && browser_1.NavigatableWidget.is(w) && w.getResourceUri();
                        return (resourceUri && resourceUri.toString()) === uriString_1;
                    });
                    if (browser_1.Saveable.is(widget)) {
                        browser_1.Saveable.save(widget);
                    }
                }
                else {
                    _this.shell.save();
                }
            }
        });
        commands.registerCommand({ id: 'workbench.action.files.saveAll', }, {
            execute: function () { return _this.shell.saveAll(); }
        });
        commands.registerCommand({ id: 'workbench.action.closeActiveEditor' }, {
            execute: function (uri) {
                var widget = _this.editorManager.currentEditor || _this.shell.currentWidget;
                if (uri) {
                    var uriString_2 = uri.toString();
                    widget = _this.shell.widgets.find(function (w) {
                        var resourceUri = browser_1.NavigatableWidget.is(w) && w.getResourceUri();
                        return (resourceUri && resourceUri.toString()) === uriString_2;
                    });
                }
                if (menus_contribution_handler_1.CodeEditorWidget.is(widget)) {
                    widget.close();
                }
            }
        });
        commands.registerCommand({ id: 'workbench.action.closeOtherEditors' }, {
            execute: function (uri) {
                var e_1, _a;
                var editor = _this.editorManager.currentEditor || _this.shell.currentWidget;
                if (uri) {
                    var uriString_3 = uri.toString();
                    editor = _this.editorManager.all.find(function (e) {
                        var resourceUri = e.getResourceUri();
                        return (resourceUri && resourceUri.toString()) === uriString_3;
                    });
                }
                try {
                    for (var _b = __values(_this.shell.widgets), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var widget = _c.value;
                        if (menus_contribution_handler_1.CodeEditorWidget.is(widget) && widget !== editor) {
                            widget.close();
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
        commands.registerCommand({ id: 'workbench.action.closeEditorsInGroup' }, {
            execute: function (uri) {
                var editor = _this.editorManager.currentEditor || _this.shell.currentWidget;
                if (uri) {
                    var uriString_4 = uri.toString();
                    editor = _this.editorManager.all.find(function (e) {
                        var resourceUri = e.getResourceUri();
                        return (resourceUri && resourceUri.toString()) === uriString_4;
                    });
                }
                if (editor) {
                    var tabBar = _this.shell.getTabBarFor(editor);
                    if (tabBar) {
                        _this.shell.closeTabs(tabBar, function (_a) {
                            var owner = _a.owner;
                            return menus_contribution_handler_1.CodeEditorWidget.is(owner);
                        });
                    }
                }
            }
        });
        commands.registerCommand({ id: 'workbench.action.closeEditorsInOtherGroups' }, {
            execute: function () {
                var e_2, _a;
                var editor = _this.editorManager.currentEditor || _this.shell.currentWidget;
                if (editor) {
                    var editorTabBar = _this.shell.getTabBarFor(editor);
                    try {
                        for (var _b = __values(_this.shell.allTabBars), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var tabBar = _c.value;
                            if (tabBar !== editorTabBar) {
                                _this.shell.closeTabs(tabBar, function (_a) {
                                    var owner = _a.owner;
                                    return menus_contribution_handler_1.CodeEditorWidget.is(owner);
                                });
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
                }
            }
        });
        commands.registerCommand({ id: 'workbench.action.closeEditorsToTheLeft' }, {
            execute: function () {
                var editor = _this.editorManager.currentEditor || _this.shell.currentWidget;
                if (editor) {
                    var tabBar = _this.shell.getTabBarFor(editor);
                    if (tabBar) {
                        var left_1 = true;
                        _this.shell.closeTabs(tabBar, function (_a) {
                            var owner = _a.owner;
                            if (owner === editor) {
                                left_1 = false;
                                return false;
                            }
                            return left_1 && menus_contribution_handler_1.CodeEditorWidget.is(owner);
                        });
                    }
                }
            }
        });
        commands.registerCommand({ id: 'workbench.action.closeEditorsToTheRight' }, {
            execute: function () {
                var editor = _this.editorManager.currentEditor || _this.shell.currentWidget;
                if (editor) {
                    var tabBar = _this.shell.getTabBarFor(editor);
                    if (tabBar) {
                        var left_2 = true;
                        _this.shell.closeTabs(tabBar, function (_a) {
                            var owner = _a.owner;
                            if (owner === editor) {
                                left_2 = false;
                                return false;
                            }
                            return !left_2 && menus_contribution_handler_1.CodeEditorWidget.is(owner);
                        });
                    }
                }
            }
        });
        commands.registerCommand({ id: 'workbench.action.closeAllEditors' }, {
            execute: function () {
                var e_3, _a;
                try {
                    for (var _b = __values(_this.shell.widgets), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var widget = _c.value;
                        if (menus_contribution_handler_1.CodeEditorWidget.is(widget)) {
                            widget.close();
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
            }
        });
        commands.registerCommand({ id: 'workbench.action.reloadWindow' }, {
            execute: function () {
                window.location.reload();
            }
        });
        /**
         * TODO:
         * Keep Open	workbench.action.keepEditor
         * Open Next	workbench.action.openNextRecentlyUsedEditorInGroup
         * Open Previous	workbench.action.openPreviousRecentlyUsedEditorInGroup
         * Copy Path of Active File	workbench.action.files.copyPathOfActiveFile
         * Reveal Active File in Windows	workbench.action.files.revealActiveFileInWindows
         * Show Opened File in New Window	workbench.action.files.showOpenedFileInNewWindow
         * Compare Opened File With	workbench.files.action.compareFileWith
         */
        // Register built-in language service commands
        // see https://code.visualstudio.com/api/references/commands
        /* eslint-disable @typescript-eslint/no-explicit-any */
        commands.registerCommand({
            id: 'vscode.executeDocumentSymbolProvider'
        }, {
            execute: function (resource) { return commands.executeCommand('_executeDocumentSymbolProvider', { resource: monaco.Uri.parse(resource.toString()) }).then(function (value) {
                if (!Array.isArray(value) || value === undefined) {
                    return undefined;
                }
                return value.map(function (loc) { return type_converters_1.toDocumentSymbol(loc); });
            }); }
        });
        // TODO register other `vscode.execute...` commands.
        // see https://github.com/microsoft/vscode/blob/master/src/vs/workbench/api/common/extHostApiCommands.ts
    };
    __decorate([
        inversify_1.inject(command_1.CommandService),
        __metadata("design:type", Object)
    ], PluginVscodeCommandsContribution.prototype, "commandService", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], PluginVscodeCommandsContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], PluginVscodeCommandsContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], PluginVscodeCommandsContribution.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(core_1.ResourceProvider),
        __metadata("design:type", Function)
    ], PluginVscodeCommandsContribution.prototype, "resources", void 0);
    __decorate([
        inversify_1.inject(diff_service_1.DiffService),
        __metadata("design:type", diff_service_1.DiffService)
    ], PluginVscodeCommandsContribution.prototype, "diffService", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], PluginVscodeCommandsContribution.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(application_shell_mouse_tracker_1.ApplicationShellMouseTracker),
        __metadata("design:type", application_shell_mouse_tracker_1.ApplicationShellMouseTracker)
    ], PluginVscodeCommandsContribution.prototype, "mouseTracker", void 0);
    __decorate([
        inversify_1.inject(browser_1.PrefixQuickOpenService),
        __metadata("design:type", browser_1.PrefixQuickOpenService)
    ], PluginVscodeCommandsContribution.prototype, "quickOpen", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], PluginVscodeCommandsContribution.prototype, "workspaceService", void 0);
    PluginVscodeCommandsContribution = __decorate([
        inversify_1.injectable()
    ], PluginVscodeCommandsContribution);
    return PluginVscodeCommandsContribution;
}());
exports.PluginVscodeCommandsContribution = PluginVscodeCommandsContribution;
//# sourceMappingURL=plugin-vscode-commands-contribution.js.map
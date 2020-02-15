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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/filesystem/lib/browser");
var common_2 = require("@theia/filesystem/lib/common");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var workspace_service_1 = require("./workspace-service");
var common_3 = require("../common");
var workspace_commands_1 = require("./workspace-commands");
var quick_open_workspace_1 = require("./quick-open-workspace");
var workspace_preferences_1 = require("./workspace-preferences");
var uri_1 = require("@theia/core/lib/common/uri");
var uri_command_handler_1 = require("@theia/core/lib/common/uri-command-handler");
var WorkspaceFrontendContribution = /** @class */ (function () {
    function WorkspaceFrontendContribution() {
    }
    WorkspaceFrontendContribution_1 = WorkspaceFrontendContribution;
    WorkspaceFrontendContribution.prototype.init = function () {
        this.initWorkspaceContextKeys();
    };
    WorkspaceFrontendContribution.prototype.initWorkspaceContextKeys = function () {
        var _this = this;
        var workspaceFolderCountKey = this.contextKeyService.createKey('workspaceFolderCount', 0);
        var updateWorkspaceFolderCountKey = function () { return workspaceFolderCountKey.set(_this.workspaceService.tryGetRoots().length); };
        updateWorkspaceFolderCountKey();
        this.updateStyles();
        this.workspaceService.onWorkspaceChanged(function () {
            updateWorkspaceFolderCountKey();
            _this.updateStyles();
        });
    };
    WorkspaceFrontendContribution.prototype.updateStyles = function () {
        document.body.classList.remove('theia-no-open-workspace');
        if (!this.workspaceService.tryGetRoots().length) {
            document.body.classList.add('theia-no-open-workspace');
        }
    };
    WorkspaceFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        // Not visible/enabled on Windows/Linux in electron.
        commands.registerCommand(workspace_commands_1.WorkspaceCommands.OPEN, {
            isEnabled: function () { return core_1.isOSX || !_this.isElectron(); },
            isVisible: function () { return core_1.isOSX || !_this.isElectron(); },
            execute: function () { return _this.doOpen(); }
        });
        // Visible/enabled only on Windows/Linux in electron.
        commands.registerCommand(workspace_commands_1.WorkspaceCommands.OPEN_FILE, {
            isEnabled: function () { return true; },
            execute: function () { return _this.doOpenFile(); }
        });
        // Visible/enabled only on Windows/Linux in electron.
        commands.registerCommand(workspace_commands_1.WorkspaceCommands.OPEN_FOLDER, {
            isEnabled: function () { return true; },
            execute: function () { return _this.doOpenFolder(); }
        });
        // commands.registerCommand(WorkspaceCommands.OPEN_WORKSPACE, {
        //     isEnabled: () => true,
        //     execute: () => this.doOpenWorkspace()
        // });
        commands.registerCommand(workspace_commands_1.WorkspaceCommands.CLOSE, {
            isEnabled: function () { return _this.workspaceService.opened; },
            execute: function () { return _this.closeWorkspace(); }
        });
        // commands.registerCommand(WorkspaceCommands.OPEN_RECENT_WORKSPACE, {
        //     execute: () => this.quickOpenWorkspace.select()
        // });
        commands.registerCommand(workspace_commands_1.WorkspaceCommands.SAVE_WORKSPACE_AS, {
            isEnabled: function () { return _this.workspaceService.isMultiRootWorkspaceEnabled; },
            execute: function () { return _this.saveWorkspaceAs(); }
        });
        commands.registerCommand(workspace_commands_1.WorkspaceCommands.SAVE_AS, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            execute: function (uri) { return _this.saveAs(uri); },
        }));
    };
    WorkspaceFrontendContribution.prototype.registerMenus = function (menus) {
        if (core_1.isOSX || !this.isElectron()) {
            menus.registerMenuAction(browser_1.CommonMenus.FILE_OPEN, {
                commandId: workspace_commands_1.WorkspaceCommands.OPEN.id,
                order: 'a00'
            });
        }
        if (!core_1.isOSX && this.isElectron()) {
            menus.registerMenuAction(browser_1.CommonMenus.FILE_OPEN, {
                commandId: workspace_commands_1.WorkspaceCommands.OPEN_FILE.id,
                label: workspace_commands_1.WorkspaceCommands.OPEN_FILE.dialogLabel + "...",
                order: 'a01'
            });
            menus.registerMenuAction(browser_1.CommonMenus.FILE_OPEN, {
                commandId: workspace_commands_1.WorkspaceCommands.OPEN_FOLDER.id,
                label: workspace_commands_1.WorkspaceCommands.OPEN_FOLDER.dialogLabel + "...",
                order: 'a02'
            });
        }
        // menus.registerMenuAction(CommonMenus.FILE_OPEN, {
        //     commandId: WorkspaceCommands.OPEN_WORKSPACE.id,
        //     order: 'a10'
        // });
        // menus.registerMenuAction(CommonMenus.FILE_OPEN, {
        //     commandId: WorkspaceCommands.OPEN_RECENT_WORKSPACE.id,
        //     order: 'a20'
        // });
        menus.registerMenuAction(browser_1.CommonMenus.FILE_OPEN, {
            commandId: workspace_commands_1.WorkspaceCommands.SAVE_WORKSPACE_AS.id,
            order: 'a30'
        });
        menus.registerMenuAction(browser_1.CommonMenus.FILE_CLOSE, {
            commandId: workspace_commands_1.WorkspaceCommands.CLOSE.id
        });
        menus.registerMenuAction(browser_1.CommonMenus.FILE_SAVE, {
            commandId: workspace_commands_1.WorkspaceCommands.SAVE_AS.id,
        });
    };
    WorkspaceFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: workspace_commands_1.WorkspaceCommands.NEW_FILE.id,
            keybinding: this.isElectron() ? 'ctrlcmd+n' : 'alt+n',
        });
        keybindings.registerKeybinding({
            command: core_1.isOSX || !this.isElectron() ? workspace_commands_1.WorkspaceCommands.OPEN.id : workspace_commands_1.WorkspaceCommands.OPEN_FILE.id,
            keybinding: this.isElectron() ? 'ctrlcmd+o' : 'ctrlcmd+alt+o',
        });
        if (!core_1.isOSX && this.isElectron()) {
            keybindings.registerKeybinding({
                command: workspace_commands_1.WorkspaceCommands.OPEN_FOLDER.id,
                keybinding: 'ctrl+k ctrl+o',
            });
        }
        // keybindings.registerKeybinding({
        //     command: WorkspaceCommands.OPEN_WORKSPACE.id,
        //     keybinding: 'ctrlcmd+alt+w',
        // });
        // keybindings.registerKeybinding({
        //     command: WorkspaceCommands.OPEN_RECENT_WORKSPACE.id,
        //     keybinding: 'ctrlcmd+alt+r',
        // });
        keybindings.registerKeybinding({
            command: workspace_commands_1.WorkspaceCommands.SAVE_AS.id,
            keybinding: 'ctrlcmd+shift+s',
        });
    };
    /**
     * This is the generic `Open` method. Opens files and directories too. Resolves to the opened URI.
     * Except when you are on either Windows or Linux `AND` running in electron. If so, it opens a file.
     */
    WorkspaceFrontendContribution.prototype.doOpen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, rootStat, destinationUri, destination;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!core_1.isOSX && this.isElectron()) {
                            return [2 /*return*/, this.doOpenFile()];
                        }
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), rootStat = _a[0];
                        return [4 /*yield*/, this.fileDialogService.showOpenDialog({
                                title: workspace_commands_1.WorkspaceCommands.OPEN.dialogLabel,
                                canSelectFolders: true,
                                canSelectFiles: true
                            }, rootStat)];
                    case 2:
                        destinationUri = _b.sent();
                        if (!(destinationUri && this.getCurrentWorkspaceUri().toString() !== destinationUri.toString())) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.fileSystem.getFileStat(destinationUri.toString())];
                    case 3:
                        destination = _b.sent();
                        if (!destination) return [3 /*break*/, 7];
                        if (!destination.isDirectory) return [3 /*break*/, 4];
                        this.workspaceService.open(destinationUri);
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, browser_1.open(this.openerService, destinationUri)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/, destinationUri];
                    case 7: return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Opens a file after prompting the `Open File` dialog. Resolves to `undefined`, if
     *  - the workspace root is not set,
     *  - the file to open does not exist, or
     *  - it was not a file, but a directory.
     *
     * Otherwise, resolves to the URI of the file.
     */
    WorkspaceFrontendContribution.prototype.doOpenFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var props, _a, rootStat, destinationFileUri, destinationFile;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        props = {
                            title: workspace_commands_1.WorkspaceCommands.OPEN_FILE.dialogLabel,
                            canSelectFolders: false,
                            canSelectFiles: true
                        };
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), rootStat = _a[0];
                        return [4 /*yield*/, this.fileDialogService.showOpenDialog(props, rootStat)];
                    case 2:
                        destinationFileUri = _b.sent();
                        if (!destinationFileUri) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.fileSystem.getFileStat(destinationFileUri.toString())];
                    case 3:
                        destinationFile = _b.sent();
                        if (!(destinationFile && !destinationFile.isDirectory)) return [3 /*break*/, 5];
                        return [4 /*yield*/, browser_1.open(this.openerService, destinationFileUri)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, destinationFileUri];
                    case 5: return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Opens a folder after prompting the `Open Folder` dialog. Resolves to `undefined`, if
     *  - the workspace root is not set,
     *  - the folder to open does not exist, or
     *  - it was not a directory, but a file resource.
     *
     * Otherwise, resolves to the URI of the folder.
     */
    WorkspaceFrontendContribution.prototype.doOpenFolder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var props, _a, rootStat, destinationFolderUri, destinationFolder;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        props = {
                            title: workspace_commands_1.WorkspaceCommands.OPEN_FOLDER.dialogLabel,
                            canSelectFolders: true,
                            canSelectFiles: false
                        };
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), rootStat = _a[0];
                        return [4 /*yield*/, this.fileDialogService.showOpenDialog(props, rootStat)];
                    case 2:
                        destinationFolderUri = _b.sent();
                        if (!(destinationFolderUri &&
                            this.getCurrentWorkspaceUri().toString() !== destinationFolderUri.toString())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fileSystem.getFileStat(destinationFolderUri.toString())];
                    case 3:
                        destinationFolder = _b.sent();
                        if (destinationFolder && destinationFolder.isDirectory) {
                            this.workspaceService.open(destinationFolderUri);
                            return [2 /*return*/, destinationFolderUri];
                        }
                        _b.label = 4;
                    case 4: return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Opens a workspace after raising the `Open Workspace` dialog. Resolves to the URI of the recently opened workspace,
     * if it was successful. Otherwise, resolves to `undefined`.
     *
     * **Caveat**: this behaves differently on different platforms, the `workspace.supportMultiRootWorkspace` preference value **does** matter,
     * and `electron`/`browser` version has impact too. See [here](https://github.com/eclipse-theia/theia/pull/3202#issuecomment-430884195) for more details.
     *
     * Legend:
     *  - `workspace.supportMultiRootWorkspace` is `false`: => `N`
     *  - `workspace.supportMultiRootWorkspace` is `true`: => `Y`
     *  - Folders only: => `F`
     *  - Workspace files only: => `W`
     *  - Folders and workspace files: => `FW`
     *
     * -----
     *
     * |---------|-----------|-----------|------------|------------|
     * |         | browser Y | browser N | electron Y | electron N |
     * |---------|-----------|-----------|------------|------------|
     * | Linux   |     FW    |     F     |     W      |     F      |
     * | Windows |     FW    |     F     |     W      |     F      |
     * | OS X    |     FW    |     F     |     FW     |     FW     |
     * |---------|-----------|-----------|------------|------------|
     *
     */
    WorkspaceFrontendContribution.prototype.doOpenWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var props, _a, rootStat, workspaceFolderOrWorkspaceFileUri, destinationFolder;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.openWorkspaceOpenFileDialogProps()];
                    case 1:
                        props = _b.sent();
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 1]), rootStat = _a[0];
                        return [4 /*yield*/, this.fileDialogService.showOpenDialog(props, rootStat)];
                    case 3:
                        workspaceFolderOrWorkspaceFileUri = _b.sent();
                        if (!(workspaceFolderOrWorkspaceFileUri &&
                            this.getCurrentWorkspaceUri().toString() !== workspaceFolderOrWorkspaceFileUri.toString())) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.fileSystem.getFileStat(workspaceFolderOrWorkspaceFileUri.toString())];
                    case 4:
                        destinationFolder = _b.sent();
                        if (destinationFolder) {
                            this.workspaceService.open(workspaceFolderOrWorkspaceFileUri);
                            return [2 /*return*/, workspaceFolderOrWorkspaceFileUri];
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, undefined];
                }
            });
        });
    };
    WorkspaceFrontendContribution.prototype.openWorkspaceOpenFileDialogProps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var supportMultiRootWorkspace, type, electron;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.preferences.ready];
                    case 1:
                        _a.sent();
                        supportMultiRootWorkspace = this.preferences['workspace.supportMultiRootWorkspace'];
                        type = core_1.OS.type();
                        electron = this.isElectron();
                        return [2 /*return*/, WorkspaceFrontendContribution_1.createOpenWorkspaceOpenFileDialogProps({
                                type: type,
                                electron: electron,
                                supportMultiRootWorkspace: supportMultiRootWorkspace
                            })];
                }
            });
        });
    };
    WorkspaceFrontendContribution.prototype.closeWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = new browser_1.ConfirmDialog({
                            title: workspace_commands_1.WorkspaceCommands.CLOSE.label,
                            msg: 'Do you really want to close the workspace?'
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.workspaceService.close()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceFrontendContribution.prototype.saveWorkspaceAs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var exist, overwrite, selected, displayName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        exist = false;
                        overwrite = false;
                        _a.label = 1;
                    case 1: return [4 /*yield*/, this.fileDialogService.showSaveDialog({
                            title: workspace_commands_1.WorkspaceCommands.SAVE_WORKSPACE_AS.label,
                            filters: WorkspaceFrontendContribution_1.DEFAULT_FILE_FILTER
                        })];
                    case 2:
                        selected = _a.sent();
                        if (!selected) return [3 /*break*/, 5];
                        displayName = selected.displayName;
                        if (!displayName.endsWith("." + common_3.THEIA_EXT) && !displayName.endsWith("." + common_3.VSCODE_EXT)) {
                            selected = selected.parent.resolve(displayName + "." + common_3.THEIA_EXT);
                        }
                        return [4 /*yield*/, this.fileSystem.exists(selected.toString())];
                    case 3:
                        exist = _a.sent();
                        if (!exist) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.confirmOverwrite(selected)];
                    case 4:
                        overwrite = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (selected && exist && !overwrite) return [3 /*break*/, 1];
                        _a.label = 6;
                    case 6:
                        if (selected) {
                            this.workspaceService.save(selected);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Save source `URI` to target.
     *
     * @param uri the source `URI`.
     */
    WorkspaceFrontendContribution.prototype.saveAs = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var exist, overwrite, selected, stat, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        exist = false;
                        overwrite = false;
                        return [4 /*yield*/, this.fileSystem.getFileStat(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.fileDialogService.showSaveDialog({
                            title: workspace_commands_1.WorkspaceCommands.SAVE_AS.label,
                            filters: {},
                            inputValue: uri.path.base
                        }, stat)];
                    case 3:
                        selected = _a.sent();
                        if (!selected) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.fileSystem.exists(selected.toString())];
                    case 4:
                        exist = _a.sent();
                        if (!exist) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.confirmOverwrite(selected)];
                    case 5:
                        overwrite = _a.sent();
                        _a.label = 6;
                    case 6:
                        if (selected && exist && !overwrite) return [3 /*break*/, 2];
                        _a.label = 7;
                    case 7:
                        if (!selected) return [3 /*break*/, 12];
                        _a.label = 8;
                    case 8:
                        _a.trys.push([8, 11, , 12]);
                        return [4 /*yield*/, this.commandRegistry.executeCommand(browser_1.CommonCommands.SAVE.id)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.fileSystem.copy(uri.toString(), selected.toString(), { overwrite: overwrite })];
                    case 10:
                        _a.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        e_1 = _a.sent();
                        console.warn(e_1);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceFrontendContribution.prototype.confirmOverwrite = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Electron already handles the confirmation so do not prompt again.
                        if (this.isElectron()) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, new browser_1.ConfirmDialog({
                                title: 'Overwrite',
                                msg: "Do you really want to overwrite \"" + uri.toString() + "\"?"
                            }).open()];
                    case 1:
                        confirmed = _a.sent();
                        return [2 /*return*/, !!confirmed];
                }
            });
        });
    };
    WorkspaceFrontendContribution.prototype.isElectron = function () {
        return core_1.environment.electron.is();
    };
    /**
     * Get the current workspace URI.
     *
     * @returns the current workspace URI.
     */
    WorkspaceFrontendContribution.prototype.getCurrentWorkspaceUri = function () {
        return new uri_1.default(this.workspaceService.workspace && this.workspaceService.workspace.uri);
    };
    var WorkspaceFrontendContribution_1;
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], WorkspaceFrontendContribution.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], WorkspaceFrontendContribution.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspaceFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], WorkspaceFrontendContribution.prototype, "workspaceStorage", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], WorkspaceFrontendContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(quick_open_workspace_1.QuickOpenWorkspace),
        __metadata("design:type", quick_open_workspace_1.QuickOpenWorkspace)
    ], WorkspaceFrontendContribution.prototype, "quickOpenWorkspace", void 0);
    __decorate([
        inversify_1.inject(browser_2.FileDialogService),
        __metadata("design:type", Object)
    ], WorkspaceFrontendContribution.prototype, "fileDialogService", void 0);
    __decorate([
        inversify_1.inject(workspace_preferences_1.WorkspacePreferences),
        __metadata("design:type", Object)
    ], WorkspaceFrontendContribution.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(common_1.SelectionService),
        __metadata("design:type", common_1.SelectionService)
    ], WorkspaceFrontendContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], WorkspaceFrontendContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], WorkspaceFrontendContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WorkspaceFrontendContribution.prototype, "init", null);
    WorkspaceFrontendContribution = WorkspaceFrontendContribution_1 = __decorate([
        inversify_1.injectable()
    ], WorkspaceFrontendContribution);
    return WorkspaceFrontendContribution;
}());
exports.WorkspaceFrontendContribution = WorkspaceFrontendContribution;
(function (WorkspaceFrontendContribution) {
    /**
     * File filter for all Theia and VS Code workspace file types.
     */
    WorkspaceFrontendContribution.DEFAULT_FILE_FILTER = {
        'Theia Workspace (*.theia-workspace)': [common_3.THEIA_EXT],
        'VS Code Workspace (*.code-workspace)': [common_3.VSCODE_EXT]
    };
    /**
     * Returns with an `OpenFileDialogProps` for opening the `Open Workspace` dialog.
     */
    function createOpenWorkspaceOpenFileDialogProps(options) {
        var electron = options.electron, type = options.type, supportMultiRootWorkspace = options.supportMultiRootWorkspace;
        var title = workspace_commands_1.WorkspaceCommands.OPEN_WORKSPACE.dialogLabel;
        // If browser
        if (!electron) {
            // and multi-root workspace is supported, it is always folder + workspace files.
            if (supportMultiRootWorkspace) {
                return {
                    title: title,
                    canSelectFiles: true,
                    canSelectFolders: true,
                    filters: WorkspaceFrontendContribution.DEFAULT_FILE_FILTER
                };
            }
            else {
                // otherwise, it is always folders. No files at all.
                return {
                    title: title,
                    canSelectFiles: false,
                    canSelectFolders: true
                };
            }
        }
        // If electron
        if (core_1.OS.Type.OSX === type) {
            // `Finder` can select folders and files at the same time. We allow folders and workspace files.
            return {
                title: title,
                canSelectFiles: true,
                canSelectFolders: true,
                filters: WorkspaceFrontendContribution.DEFAULT_FILE_FILTER
            };
        }
        // In electron, only workspace files can be selected when the multi-root workspace feature is enabled.
        if (supportMultiRootWorkspace) {
            return {
                title: title,
                canSelectFiles: true,
                canSelectFolders: false,
                filters: WorkspaceFrontendContribution.DEFAULT_FILE_FILTER
            };
        }
        // Otherwise, it is always a folder.
        return {
            title: title,
            canSelectFiles: false,
            canSelectFolders: true
        };
    }
    WorkspaceFrontendContribution.createOpenWorkspaceOpenFileDialogProps = createOpenWorkspaceOpenFileDialogProps;
})(WorkspaceFrontendContribution = exports.WorkspaceFrontendContribution || (exports.WorkspaceFrontendContribution = {}));
exports.WorkspaceFrontendContribution = WorkspaceFrontendContribution;
//# sourceMappingURL=workspace-frontend-contribution.js.map
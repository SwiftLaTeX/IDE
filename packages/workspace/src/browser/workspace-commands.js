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
var uri_1 = require("@theia/core/lib/common/uri");
var selection_service_1 = require("@theia/core/lib/common/selection-service");
var common_frontend_contribution_1 = require("@theia/core/lib/browser/common-frontend-contribution");
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var browser_1 = require("@theia/filesystem/lib/browser");
var dialogs_1 = require("@theia/core/lib/browser/dialogs");
var browser_2 = require("@theia/core/lib/browser");
var uri_command_handler_1 = require("@theia/core/lib/common/uri-command-handler");
var workspace_service_1 = require("./workspace-service");
var message_service_1 = require("@theia/core/lib/common/message-service");
var workspace_preferences_1 = require("./workspace-preferences");
var workspace_delete_handler_1 = require("./workspace-delete-handler");
var workspace_duplicate_handler_1 = require("./workspace-duplicate-handler");
var common_1 = require("@theia/filesystem/lib/common");
var workspace_compare_handler_1 = require("./workspace-compare-handler");
var file_download_command_contribution_1 = require("@theia/filesystem/lib/browser/download/file-download-command-contribution");
var filesystem_frontend_contribution_1 = require("@theia/filesystem/lib/browser/filesystem-frontend-contribution");
var workspace_input_dialog_1 = require("./workspace-input-dialog");
var validFilename = require('valid-filename');
var WorkspaceCommands;
(function (WorkspaceCommands) {
    var WORKSPACE_CATEGORY = 'Workspace';
    var FILE_CATEGORY = 'File';
    // On Linux and Windows, both files and folders cannot be opened at the same time in electron.
    // `OPEN_FILE` and `OPEN_FOLDER` must be available only on Linux and Windows in electron.
    // `OPEN` must *not* be available on Windows and Linux in electron.
    // VS Code does the same. See: https://github.com/eclipse-theia/theia/pull/3202#issuecomment-430585357
    WorkspaceCommands.OPEN = {
        id: 'workspace:open',
        category: FILE_CATEGORY,
        label: 'Open...',
        dialogLabel: 'Open'
    };
    // No `label`. Otherwise, it shows up in the `Command Palette`.
    WorkspaceCommands.OPEN_FILE = {
        id: 'workspace:openFile',
        category: FILE_CATEGORY,
        dialogLabel: 'Open File'
    };
    WorkspaceCommands.OPEN_FOLDER = {
        id: 'workspace:openFolder',
        dialogLabel: 'Open Folder' // No `label`. Otherwise, it shows up in the `Command Palette`.
    };
    WorkspaceCommands.OPEN_WORKSPACE = {
        id: 'workspace:openWorkspace',
        category: FILE_CATEGORY,
        label: 'Open Workspace...',
        dialogLabel: 'Open Workspace'
    };
    WorkspaceCommands.OPEN_RECENT_WORKSPACE = {
        id: 'workspace:openRecent',
        category: FILE_CATEGORY,
        label: 'Open Recent Workspace...'
    };
    WorkspaceCommands.CLOSE = {
        id: 'workspace:close',
        category: WORKSPACE_CATEGORY,
        label: 'Close Workspace'
    };
    WorkspaceCommands.NEW_FILE = {
        id: 'file.newFile',
        category: FILE_CATEGORY,
        label: 'New File'
    };
    WorkspaceCommands.NEW_FOLDER = {
        id: 'file.newFolder',
        category: FILE_CATEGORY,
        label: 'New Folder'
    };
    WorkspaceCommands.FILE_OPEN_WITH = function (opener) { return ({
        id: "file.openWith." + opener.id
    }); };
    WorkspaceCommands.FILE_RENAME = {
        id: 'file.rename',
        category: FILE_CATEGORY,
        label: 'Rename'
    };
    WorkspaceCommands.FILE_DELETE = {
        id: 'file.delete',
        category: FILE_CATEGORY,
        label: 'Delete'
    };
    WorkspaceCommands.FILE_DUPLICATE = {
        id: 'file.duplicate',
        category: FILE_CATEGORY,
        label: 'Duplicate'
    };
    WorkspaceCommands.FILE_COMPARE = {
        id: 'file.compare',
        category: FILE_CATEGORY,
        label: 'Compare with Each Other'
    };
    WorkspaceCommands.ADD_FOLDER = {
        id: 'workspace:addFolder',
        category: WORKSPACE_CATEGORY,
        label: 'Add Folder to Workspace...'
    };
    WorkspaceCommands.REMOVE_FOLDER = {
        id: 'workspace:removeFolder',
        category: WORKSPACE_CATEGORY,
        label: 'Remove Folder from Workspace'
    };
    WorkspaceCommands.SAVE_WORKSPACE_AS = {
        id: 'workspace:saveAs',
        category: WORKSPACE_CATEGORY,
        label: 'Save Workspace As...'
    };
    WorkspaceCommands.SAVE_AS = {
        id: 'file.saveAs',
        category: 'File',
        label: 'Save As...',
    };
})(WorkspaceCommands = exports.WorkspaceCommands || (exports.WorkspaceCommands = {}));
var FileMenuContribution = /** @class */ (function () {
    function FileMenuContribution() {
    }
    FileMenuContribution.prototype.registerMenus = function (registry) {
        registry.registerMenuAction(common_frontend_contribution_1.CommonMenus.FILE_NEW, {
            commandId: WorkspaceCommands.NEW_FILE.id
        });
        registry.registerMenuAction(common_frontend_contribution_1.CommonMenus.FILE_NEW, {
            commandId: WorkspaceCommands.NEW_FOLDER.id
        });
        var downloadUploadMenu = __spread(common_frontend_contribution_1.CommonMenus.FILE, ['4_downloadupload']);
        registry.registerMenuAction(downloadUploadMenu, {
            commandId: filesystem_frontend_contribution_1.FileSystemCommands.UPLOAD.id,
            order: 'a'
        });
        registry.registerMenuAction(downloadUploadMenu, {
            commandId: file_download_command_contribution_1.FileDownloadCommands.DOWNLOAD.id,
            order: 'b'
        });
    };
    FileMenuContribution = __decorate([
        inversify_1.injectable()
    ], FileMenuContribution);
    return FileMenuContribution;
}());
exports.FileMenuContribution = FileMenuContribution;
var EditMenuContribution = /** @class */ (function () {
    function EditMenuContribution() {
    }
    EditMenuContribution.prototype.registerMenus = function (registry) {
        registry.registerMenuAction(common_frontend_contribution_1.CommonMenus.EDIT_CLIPBOARD, {
            commandId: file_download_command_contribution_1.FileDownloadCommands.COPY_DOWNLOAD_LINK.id,
            order: '9999'
        });
    };
    EditMenuContribution = __decorate([
        inversify_1.injectable()
    ], EditMenuContribution);
    return EditMenuContribution;
}());
exports.EditMenuContribution = EditMenuContribution;
var WorkspaceCommandContribution = /** @class */ (function () {
    function WorkspaceCommandContribution() {
    }
    WorkspaceCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        this.openerService.getOpeners().then(function (openers) {
            var e_1, _a;
            var _loop_1 = function (opener_1) {
                var openWithCommand = WorkspaceCommands.FILE_OPEN_WITH(opener_1);
                registry.registerCommand(openWithCommand, _this.newUriAwareCommandHandler({
                    execute: function (uri) { return opener_1.open(uri); },
                    isEnabled: function (uri) { return opener_1.canHandle(uri) > 0; },
                    isVisible: function (uri) { return opener_1.canHandle(uri) > 0 && _this.areMultipleOpenHandlersPresent(openers, uri); }
                }));
            };
            try {
                for (var openers_1 = __values(openers), openers_1_1 = openers_1.next(); !openers_1_1.done; openers_1_1 = openers_1.next()) {
                    var opener_1 = openers_1_1.value;
                    _loop_1(opener_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (openers_1_1 && !openers_1_1.done && (_a = openers_1.return)) _a.call(openers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        registry.registerCommand(WorkspaceCommands.NEW_FILE, this.newWorkspaceRootUriAwareCommandHandler({
            execute: function (uri) { return _this.getDirectory(uri).then(function (parent) {
                if (parent) {
                    var parentUri_1 = new uri_1.default(parent.uri);
                    var _a = _this.getDefaultFileConfig(), fileName = _a.fileName, fileExtension = _a.fileExtension;
                    var vacantChildUri = common_1.FileSystemUtils.generateUniqueResourceURI(parentUri_1, parent, fileName, fileExtension);
                    var dialog = new workspace_input_dialog_1.WorkspaceInputDialog({
                        title: 'New File',
                        parentUri: parentUri_1,
                        initialValue: vacantChildUri.path.base,
                        validate: function (name) { return _this.validateFileName(name, parent, true); }
                    }, _this.labelProvider);
                    dialog.open().then(function (name) {
                        if (name) {
                            var fileUri_1 = parentUri_1.resolve(name);
                            _this.fileSystem.createFile(fileUri_1.toString()).then(function () {
                                browser_2.open(_this.openerService, fileUri_1);
                            });
                        }
                    });
                }
            }); }
        }));
        registry.registerCommand(WorkspaceCommands.NEW_FOLDER, this.newWorkspaceRootUriAwareCommandHandler({
            execute: function (uri) { return _this.getDirectory(uri).then(function (parent) {
                if (parent) {
                    var parentUri_2 = new uri_1.default(parent.uri);
                    var vacantChildUri = common_1.FileSystemUtils.generateUniqueResourceURI(parentUri_2, parent, 'Untitled');
                    var dialog = new workspace_input_dialog_1.WorkspaceInputDialog({
                        title: 'New Folder',
                        parentUri: parentUri_2,
                        initialValue: vacantChildUri.path.base,
                        validate: function (name) { return _this.validateFileName(name, parent, true); }
                    }, _this.labelProvider);
                    dialog.open().then(function (name) {
                        if (name) {
                            _this.fileSystem.createFolder(parentUri_2.resolve(name).toString());
                        }
                    });
                }
            }); }
        }));
        registry.registerCommand(WorkspaceCommands.FILE_RENAME, this.newMultiUriAwareCommandHandler({
            isEnabled: function (uris) { return uris.some(function (uri) { return !_this.isWorkspaceRoot(uri); }) && uris.length === 1; },
            isVisible: function (uris) { return uris.some(function (uri) { return !_this.isWorkspaceRoot(uri); }) && uris.length === 1; },
            execute: function (uris) { return uris.forEach(function (uri) {
                _this.getParent(uri).then(function (parent) { return __awaiter(_this, void 0, void 0, function () {
                    var initialValue_1, stat, fileType, titleStr, dialog;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!parent) return [3 /*break*/, 2];
                                initialValue_1 = uri.path.base;
                                return [4 /*yield*/, this.fileSystem.getFileStat(uri.toString())];
                            case 1:
                                stat = _a.sent();
                                if (stat === undefined) {
                                    throw new Error("Unexpected error occurred when renaming. File does not exist. URI: " + uri.toString(true) + ".");
                                }
                                fileType = stat.isDirectory ? 'Directory' : 'File';
                                titleStr = "Rename " + fileType;
                                dialog = new dialogs_1.SingleTextInputDialog({
                                    title: titleStr,
                                    initialValue: initialValue_1,
                                    initialSelectionRange: {
                                        start: 0,
                                        end: uri.path.name.length
                                    },
                                    validate: function (name, mode) {
                                        if (initialValue_1 === name && mode === 'preview') {
                                            return false;
                                        }
                                        return _this.validateFileName(name, parent, false);
                                    }
                                });
                                dialog.open().then(function (name) {
                                    if (name) {
                                        _this.fileSystem.move(uri.toString(), uri.parent.resolve(name).toString(), { overwrite: true });
                                    }
                                });
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
            }); }
        }));
        registry.registerCommand(WorkspaceCommands.FILE_DUPLICATE, this.newMultiUriAwareCommandHandler(this.duplicateHandler));
        registry.registerCommand(WorkspaceCommands.FILE_DELETE, this.newMultiUriAwareCommandHandler(this.deleteHandler));
        registry.registerCommand(WorkspaceCommands.FILE_COMPARE, this.newMultiUriAwareCommandHandler(this.compareHandler));
        this.preferences.ready.then(function () {
            registry.registerCommand(WorkspaceCommands.ADD_FOLDER, {
                isEnabled: function () { return _this.workspaceService.isMultiRootWorkspaceEnabled; },
                isVisible: function () { return _this.workspaceService.isMultiRootWorkspaceEnabled; },
                execute: function () { return __awaiter(_this, void 0, void 0, function () {
                    var uri, workspaceSavedBeforeAdding, saveCommand, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.fileDialogService.showOpenDialog({
                                    title: WorkspaceCommands.ADD_FOLDER.label,
                                    canSelectFiles: false,
                                    canSelectFolders: true
                                })];
                            case 1:
                                uri = _b.sent();
                                if (!uri) {
                                    return [2 /*return*/];
                                }
                                workspaceSavedBeforeAdding = this.workspaceService.saved;
                                return [4 /*yield*/, this.addFolderToWorkspace(uri)];
                            case 2:
                                _b.sent();
                                if (!!workspaceSavedBeforeAdding) return [3 /*break*/, 5];
                                saveCommand = registry.getCommand(WorkspaceCommands.SAVE_WORKSPACE_AS.id);
                                _a = saveCommand;
                                if (!_a) return [3 /*break*/, 4];
                                return [4 /*yield*/, new dialogs_1.ConfirmDialog({
                                        title: 'Folder added to Workspace',
                                        msg: 'A workspace with multiple roots was created. Do you want to save your workspace configuration as a file?',
                                        ok: 'Yes',
                                        cancel: 'No'
                                    }).open()];
                            case 3:
                                _a = (_b.sent());
                                _b.label = 4;
                            case 4:
                                if (_a) {
                                    registry.executeCommand(saveCommand.id);
                                }
                                _b.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); }
            });
            registry.registerCommand(WorkspaceCommands.REMOVE_FOLDER, _this.newMultiUriAwareCommandHandler({
                execute: function (uris) { return _this.removeFolderFromWorkspace(uris); },
                isEnabled: function () { return _this.workspaceService.isMultiRootWorkspaceEnabled; },
                isVisible: function (uris) { return _this.areWorkspaceRoots(uris) && _this.workspaceService.saved; }
            }));
        });
    };
    WorkspaceCommandContribution.prototype.newUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler);
    };
    WorkspaceCommandContribution.prototype.newMultiUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler, { multi: true });
    };
    WorkspaceCommandContribution.prototype.newWorkspaceRootUriAwareCommandHandler = function (handler) {
        return new WorkspaceRootUriAwareCommandHandler(this.workspaceService, this.selectionService, handler);
    };
    /**
     * Returns an error message if the file name is invalid. Otherwise, an empty string.
     *
     * @param name the simple file name of the file to validate.
     * @param parent the parent directory's file stat.
     * @param recursive allow file or folder creation using recursive path
     */
    WorkspaceCommandContribution.prototype.validateFileName = function (name, parent, recursive) {
        if (recursive === void 0) { recursive = false; }
        return __awaiter(this, void 0, void 0, function () {
            var childUri, exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!name) {
                            return [2 /*return*/, ''];
                        }
                        // do not allow recursive rename
                        if (!recursive && !validFilename(name)) {
                            return [2 /*return*/, 'Invalid file or folder name'];
                        }
                        if (name.startsWith('/')) {
                            return [2 /*return*/, 'Absolute paths or names that starts with / are not allowed'];
                        }
                        else if (name.startsWith(' ') || name.endsWith(' ')) {
                            return [2 /*return*/, 'Names with leading or trailing whitespaces are not allowed'];
                        }
                        // check and validate each sub-paths
                        if (name.split(/[\\/]/).some(function (file) { return !file || !validFilename(file) || /^\s+$/.test(file); })) {
                            return [2 /*return*/, "The name \"" + this.trimFileName(name) + "\" is not a valid file or folder name."];
                        }
                        childUri = new uri_1.default(parent.uri).resolve(name).toString();
                        return [4 /*yield*/, this.fileSystem.exists(childUri)];
                    case 1:
                        exists = _a.sent();
                        if (exists) {
                            return [2 /*return*/, "A file or folder \"" + this.trimFileName(name) + "\" already exists at this location."];
                        }
                        return [2 /*return*/, ''];
                }
            });
        });
    };
    WorkspaceCommandContribution.prototype.trimFileName = function (name) {
        if (name && name.length > 30) {
            return name.substr(0, 30) + "...";
        }
        return name;
    };
    WorkspaceCommandContribution.prototype.getDirectory = function (candidate) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.getFileStat(candidate.toString())];
                    case 1:
                        stat = _a.sent();
                        if (stat && stat.isDirectory) {
                            return [2 /*return*/, stat];
                        }
                        return [2 /*return*/, this.getParent(candidate)];
                }
            });
        });
    };
    WorkspaceCommandContribution.prototype.getParent = function (candidate) {
        return this.fileSystem.getFileStat(candidate.parent.toString());
    };
    WorkspaceCommandContribution.prototype.addFolderToWorkspace = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!uri) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileSystem.getFileStat(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        if (!(stat && stat.isDirectory)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.workspaceService.addRoot(uri)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceCommandContribution.prototype.areWorkspaceRoots = function (uris) {
        return this.workspaceService.areWorkspaceRoots(uris);
    };
    WorkspaceCommandContribution.prototype.isWorkspaceRoot = function (uri) {
        var rootUris = new Set(this.workspaceService.tryGetRoots().map(function (root) { return root.uri; }));
        return rootUris.has(uri.toString());
    };
    WorkspaceCommandContribution.prototype.getDefaultFileConfig = function () {
        return {
            fileName: 'Untitled',
            fileExtension: '.txt'
        };
    };
    WorkspaceCommandContribution.prototype.removeFolderFromWorkspace = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            var roots, toRemove, messageContainer, list_1, dialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        roots = new Set(this.workspaceService.tryGetRoots().map(function (r) { return r.uri; }));
                        toRemove = uris.filter(function (u) { return roots.has(u.toString()); });
                        if (!(toRemove.length > 0)) return [3 /*break*/, 3];
                        messageContainer = document.createElement('div');
                        messageContainer.textContent = 'Remove the following folders from workspace? (note: nothing will be erased from disk)';
                        list_1 = document.createElement('ul');
                        list_1.style.listStyleType = 'none';
                        toRemove.forEach(function (u) {
                            var listItem = document.createElement('li');
                            listItem.textContent = u.displayName;
                            list_1.appendChild(listItem);
                        });
                        messageContainer.appendChild(list_1);
                        dialog = new dialogs_1.ConfirmDialog({
                            title: 'Remove Folder from Workspace',
                            msg: messageContainer
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.workspaceService.removeRoots(toRemove)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceCommandContribution.prototype.areMultipleOpenHandlersPresent = function (openers, uri) {
        var e_2, _a;
        var count = 0;
        try {
            for (var openers_2 = __values(openers), openers_2_1 = openers_2.next(); !openers_2_1.done; openers_2_1 = openers_2.next()) {
                var opener_2 = openers_2_1.value;
                if (opener_2.canHandle(uri) > 0) {
                    count++;
                }
                if (count > 1) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (openers_2_1 && !openers_2_1.done && (_a = openers_2.return)) _a.call(openers_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    __decorate([
        inversify_1.inject(browser_2.LabelProvider),
        __metadata("design:type", browser_2.LabelProvider)
    ], WorkspaceCommandContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], WorkspaceCommandContribution.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspaceCommandContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(selection_service_1.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], WorkspaceCommandContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(browser_2.OpenerService),
        __metadata("design:type", Object)
    ], WorkspaceCommandContribution.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(browser_2.FrontendApplication),
        __metadata("design:type", browser_2.FrontendApplication)
    ], WorkspaceCommandContribution.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], WorkspaceCommandContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(workspace_preferences_1.WorkspacePreferences),
        __metadata("design:type", Object)
    ], WorkspaceCommandContribution.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(browser_1.FileDialogService),
        __metadata("design:type", Object)
    ], WorkspaceCommandContribution.prototype, "fileDialogService", void 0);
    __decorate([
        inversify_1.inject(workspace_delete_handler_1.WorkspaceDeleteHandler),
        __metadata("design:type", workspace_delete_handler_1.WorkspaceDeleteHandler)
    ], WorkspaceCommandContribution.prototype, "deleteHandler", void 0);
    __decorate([
        inversify_1.inject(workspace_duplicate_handler_1.WorkspaceDuplicateHandler),
        __metadata("design:type", workspace_duplicate_handler_1.WorkspaceDuplicateHandler)
    ], WorkspaceCommandContribution.prototype, "duplicateHandler", void 0);
    __decorate([
        inversify_1.inject(workspace_compare_handler_1.WorkspaceCompareHandler),
        __metadata("design:type", workspace_compare_handler_1.WorkspaceCompareHandler)
    ], WorkspaceCommandContribution.prototype, "compareHandler", void 0);
    WorkspaceCommandContribution = __decorate([
        inversify_1.injectable()
    ], WorkspaceCommandContribution);
    return WorkspaceCommandContribution;
}());
exports.WorkspaceCommandContribution = WorkspaceCommandContribution;
var WorkspaceRootUriAwareCommandHandler = /** @class */ (function (_super) {
    __extends(WorkspaceRootUriAwareCommandHandler, _super);
    function WorkspaceRootUriAwareCommandHandler(workspaceService, selectionService, handler) {
        var _this = _super.call(this, selectionService, handler) || this;
        _this.workspaceService = workspaceService;
        _this.selectionService = selectionService;
        _this.handler = handler;
        return _this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WorkspaceRootUriAwareCommandHandler.prototype.isEnabled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.prototype.isEnabled.apply(this, __spread(args)) && !!this.workspaceService.tryGetRoots().length;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WorkspaceRootUriAwareCommandHandler.prototype.isVisible = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.prototype.isVisible.apply(this, __spread(args)) && !!this.workspaceService.tryGetRoots().length;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WorkspaceRootUriAwareCommandHandler.prototype.getUri = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var uri = _super.prototype.getUri.apply(this, __spread(args));
        // If the URI is available, return it immediately.
        if (uri) {
            return uri;
        }
        // Return the first root if available.
        if (!!this.workspaceService.tryGetRoots().length) {
            return new uri_1.default(this.workspaceService.tryGetRoots()[0].uri);
        }
    };
    return WorkspaceRootUriAwareCommandHandler;
}(uri_command_handler_1.UriAwareCommandHandler));
exports.WorkspaceRootUriAwareCommandHandler = WorkspaceRootUriAwareCommandHandler;
//# sourceMappingURL=workspace-commands.js.map
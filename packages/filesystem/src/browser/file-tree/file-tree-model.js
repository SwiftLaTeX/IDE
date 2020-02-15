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
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("../../common");
var filesystem_watcher_1 = require("../filesystem-watcher");
var file_tree_1 = require("./file-tree");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var FileTreeModel = /** @class */ (function (_super) {
    __extends(FileTreeModel, _super);
    function FileTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileTreeModel.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.toDispose.push(this.watcher.onFilesChanged(function (changes) { return _this.onFilesChanged(changes); }));
        this.toDispose.push(this.watcher.onDidMove(function (move) { return _this.onDidMove(move); }));
    };
    Object.defineProperty(FileTreeModel.prototype, "location", {
        get: function () {
            var root = this.root;
            if (file_tree_1.FileStatNode.is(root)) {
                return root.uri;
            }
            return undefined;
        },
        set: function (uri) {
            var _this = this;
            if (uri) {
                this.fileSystem.getFileStat(uri.toString()).then(function (fileStat) { return __awaiter(_this, void 0, void 0, function () {
                    var node;
                    return __generator(this, function (_a) {
                        if (fileStat) {
                            node = file_tree_1.DirNode.createRoot(fileStat);
                            this.navigateTo(node);
                        }
                        return [2 /*return*/];
                    });
                }); });
            }
            else {
                this.navigateTo(undefined);
            }
        },
        enumerable: true,
        configurable: true
    });
    FileTreeModel.prototype.drives = function () {
        return __awaiter(this, void 0, void 0, function () {
            var drives, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileSystem.getDrives()];
                    case 1:
                        drives = _a.sent();
                        return [2 /*return*/, drives.map(function (uri) { return new uri_1.default(uri); })];
                    case 2:
                        e_1 = _a.sent();
                        this.logger.error('Error when loading drives.', e_1);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(FileTreeModel.prototype, "selectedFileStatNodes", {
        get: function () {
            return this.selectedNodes.filter(file_tree_1.FileStatNode.is);
        },
        enumerable: true,
        configurable: true
    });
    FileTreeModel.prototype.getNodesByUri = function (uri) {
        var node;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    node = this.getNode(uri.toString());
                    if (!node) return [3 /*break*/, 2];
                    return [4 /*yield*/, node];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    };
    /**
     * to workaround https://github.com/Axosoft/nsfw/issues/42
     */
    FileTreeModel.prototype.onDidMove = function (move) {
        if (filesystem_watcher_1.FileMoveEvent.isRename(move)) {
            return;
        }
        this.refreshAffectedNodes([
            move.sourceUri,
            move.targetUri
        ]);
    };
    FileTreeModel.prototype.onFilesChanged = function (changes) {
        if (!this.refreshAffectedNodes(this.getAffectedUris(changes)) && this.isRootAffected(changes)) {
            this.refresh();
        }
    };
    FileTreeModel.prototype.isRootAffected = function (changes) {
        var root = this.root;
        if (file_tree_1.FileStatNode.is(root)) {
            return changes.some(function (change) {
                return change.type < filesystem_watcher_1.FileChangeType.DELETED && change.uri.toString() === root.uri.toString();
            });
        }
        return false;
    };
    FileTreeModel.prototype.getAffectedUris = function (changes) {
        var _this = this;
        return changes.filter(function (change) { return !_this.isFileContentChanged(change); }).map(function (change) { return change.uri; });
    };
    FileTreeModel.prototype.isFileContentChanged = function (change) {
        return change.type === filesystem_watcher_1.FileChangeType.UPDATED && file_tree_1.FileNode.is(this.getNodesByUri(change.uri).next().value);
    };
    FileTreeModel.prototype.refreshAffectedNodes = function (uris) {
        var e_2, _a;
        var nodes = this.getAffectedNodes(uris);
        try {
            for (var _b = __values(nodes.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var node = _c.value;
                this.refresh(node);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return nodes.size !== 0;
    };
    FileTreeModel.prototype.getAffectedNodes = function (uris) {
        var e_3, _a, e_4, _b;
        var nodes = new Map();
        try {
            for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                var uri = uris_1_1.value;
                try {
                    for (var _c = (e_4 = void 0, __values(this.getNodesByUri(uri.parent))), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var node = _d.value;
                        if (file_tree_1.DirNode.is(node) && node.expanded) {
                            nodes.set(node.id, node);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return nodes;
    };
    FileTreeModel.prototype.copy = function (uri) {
        if (uri.scheme !== 'file') {
            return false;
        }
        var node = this.selectedFileStatNodes[0];
        if (!node) {
            return false;
        }
        var targetUri = node.uri.resolve(uri.path.base);
        /* Check if the folder is copied on itself */
        var sourcePath = uri.path.toString();
        var targetPath = node.uri.path.toString();
        if (sourcePath === targetPath) {
            return false;
        }
        this.fileSystem.copy(uri.toString(), targetUri.toString());
        return true;
    };
    /**
     * Move the given source file or directory to the given target directory.
     */
    FileTreeModel.prototype.move = function (source, target) {
        return __awaiter(this, void 0, void 0, function () {
            var sourceUri, name_1, targetUri, fileExistsInTarget, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(file_tree_1.DirNode.is(target) && file_tree_1.FileStatNode.is(source))) return [3 /*break*/, 5];
                        sourceUri = source.uri.toString();
                        if (target.uri.toString() === sourceUri) { /*  Folder on itself */
                            return [2 /*return*/];
                        }
                        name_1 = source.uri.displayName;
                        targetUri = target.uri.resolve(name_1).toString();
                        if (!(sourceUri !== targetUri)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.fileSystem.exists(targetUri)];
                    case 1:
                        fileExistsInTarget = _b.sent();
                        _a = !fileExistsInTarget;
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.shouldReplace(name_1)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (!_a) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.fileSystem.move(sourceUri, targetUri, { overwrite: true })];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FileTreeModel.prototype.shouldReplace = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var dialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = new browser_1.ConfirmDialog({
                            title: 'Replace file',
                            msg: "File '" + fileName + "' already exists in the destination folder. Do you want to replace it?",
                            ok: 'Yes',
                            cancel: 'No'
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], FileTreeModel.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], FileTreeModel.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(filesystem_watcher_1.FileSystemWatcher),
        __metadata("design:type", filesystem_watcher_1.FileSystemWatcher)
    ], FileTreeModel.prototype, "watcher", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileTreeModel.prototype, "init", null);
    FileTreeModel = __decorate([
        inversify_1.injectable()
    ], FileTreeModel);
    return FileTreeModel;
}(browser_1.TreeModelImpl));
exports.FileTreeModel = FileTreeModel;
//# sourceMappingURL=file-tree-model.js.map
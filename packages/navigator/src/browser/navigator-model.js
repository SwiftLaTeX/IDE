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
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/filesystem/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var navigator_tree_1 = require("./navigator-tree");
var browser_3 = require("@theia/workspace/lib/browser");
var frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
var FileNavigatorModel = /** @class */ (function (_super) {
    __extends(FileNavigatorModel, _super);
    function FileNavigatorModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileNavigatorModel.prototype.init = function () {
        _super.prototype.init.call(this);
        this.initializeRoot();
    };
    FileNavigatorModel.prototype.initializeRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var root, child;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.applicationState.reachedState('initialized_layout'),
                            this.workspaceService.roots
                        ])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateRoot()];
                    case 2:
                        _a.sent();
                        if (this.toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        this.toDispose.push(this.workspaceService.onWorkspaceChanged(function () { return _this.updateRoot(); }));
                        this.toDispose.push(this.workspaceService.onWorkspaceLocationChanged(function () { return _this.updateRoot(); }));
                        if (this.selectedNodes.length) {
                            return [2 /*return*/];
                        }
                        root = this.root;
                        if (browser_2.CompositeTreeNode.is(root) && root.children.length === 1) {
                            child = root.children[0];
                            if (browser_2.SelectableTreeNode.is(child) && !child.selected && browser_2.ExpandableTreeNode.is(child)) {
                                this.selectNode(child);
                                this.expandNode(child);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorModel.prototype.previewNode = function (node) {
        if (browser_1.FileNode.is(node)) {
            browser_2.open(this.openerService, node.uri, { mode: 'reveal', preview: true });
        }
    };
    FileNavigatorModel.prototype.doOpenNode = function (node) {
        if (browser_1.FileNode.is(node)) {
            browser_2.open(this.openerService, node.uri);
        }
        else {
            _super.prototype.doOpenNode.call(this, node);
        }
    };
    FileNavigatorModel.prototype.getNodesByUri = function (uri) {
        var workspace, _a, _b, root, id, node, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    workspace = this.root;
                    if (!navigator_tree_1.WorkspaceNode.is(workspace)) return [3 /*break*/, 8];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    _a = __values(workspace.children), _b = _a.next();
                    _d.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    root = _b.value;
                    id = this.tree.createId(root, uri);
                    node = this.getNode(id);
                    if (!node) return [3 /*break*/, 4];
                    return [4 /*yield*/, node];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
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
                case 8: return [2 /*return*/];
            }
        });
    };
    FileNavigatorModel.prototype.updateRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.createRoot()];
                    case 1:
                        _a.root = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorModel.prototype.createRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stat, isMulti, workspaceNode, roots, roots_1, roots_1_1, root, _a, _b, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.workspaceService.opened) return [3 /*break*/, 10];
                        stat = this.workspaceService.workspace;
                        isMulti = (stat) ? !stat.isDirectory : false;
                        workspaceNode = isMulti
                            ? this.createMultipleRootNode()
                            : navigator_tree_1.WorkspaceNode.createRoot();
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        roots_1 = __values(roots), roots_1_1 = roots_1.next();
                        _d.label = 3;
                    case 3:
                        if (!!roots_1_1.done) return [3 /*break*/, 6];
                        root = roots_1_1.value;
                        _b = (_a = workspaceNode.children).push;
                        return [4 /*yield*/, this.tree.createWorkspaceRoot(root, workspaceNode)];
                    case 4:
                        _b.apply(_a, [_d.sent()]);
                        _d.label = 5;
                    case 5:
                        roots_1_1 = roots_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (roots_1_1 && !roots_1_1.done && (_c = roots_1.return)) _c.call(roots_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, workspaceNode];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create multiple root node used to display
     * the multiple root workspace name.
     *
     * @returns `WorkspaceNode`
     */
    FileNavigatorModel.prototype.createMultipleRootNode = function () {
        var workspace = this.workspaceService.workspace;
        var name = workspace
            ? new uri_1.default(workspace.uri).path.name
            : 'untitled';
        name += ' (Workspace)';
        return navigator_tree_1.WorkspaceNode.createRoot(name);
    };
    /**
     * Move the given source file or directory to the given target directory.
     */
    FileNavigatorModel.prototype.move = function (source, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (source.parent && navigator_tree_1.WorkspaceRootNode.is(source)) {
                            // do not support moving a root folder
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, _super.prototype.move.call(this, source, target)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reveals node in the navigator by given file uri.
     *
     * @param uri uri to file which should be revealed in the navigator
     * @returns file tree node if the file with given uri was revealed, undefined otherwise
     */
    FileNavigatorModel.prototype.revealFile = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!uri.path.isAbsolute) {
                            return [2 /*return*/, undefined];
                        }
                        node = this.getNodeClosestToRootByUri(uri);
                        if (!navigator_tree_1.WorkspaceRootNode.is(node)) return [3 /*break*/, 4];
                        if (!browser_2.ExpandableTreeNode.is(node)) return [3 /*break*/, 3];
                        if (!!node.expanded) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.expandNode(node)];
                    case 1:
                        node = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, node];
                    case 3: 
                    // shouldn't happen, root node is always directory, i.e. expandable
                    return [2 /*return*/, undefined];
                    case 4:
                        // fail stop condition
                        if (uri.path.isRoot) {
                            // file system root is reached but workspace root wasn't found, it means that
                            // given uri is not in workspace root folder or points to not existing file.
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.revealFile(uri.parent)];
                    case 5:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        if (node === undefined) {
                            // get node if it wasn't mounted into navigator tree before expansion
                            node = this.getNodeClosestToRootByUri(uri);
                        }
                        if (!(browser_2.ExpandableTreeNode.is(node) && !node.expanded)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.expandNode(node)];
                    case 6:
                        node = _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/, node];
                    case 8: return [2 /*return*/, undefined];
                }
            });
        });
    };
    FileNavigatorModel.prototype.getNodeClosestToRootByUri = function (uri) {
        var nodes = __spread(this.getNodesByUri(uri));
        return nodes.length > 0
            ? nodes.reduce(function (node1, node2) {
                return node1.id.length >= node2.id.length ? node1 : node2;
            }) : undefined;
    };
    __decorate([
        inversify_1.inject(browser_2.OpenerService),
        __metadata("design:type", Object)
    ], FileNavigatorModel.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(navigator_tree_1.FileNavigatorTree),
        __metadata("design:type", navigator_tree_1.FileNavigatorTree)
    ], FileNavigatorModel.prototype, "tree", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], FileNavigatorModel.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], FileNavigatorModel.prototype, "applicationState", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileNavigatorModel.prototype, "init", null);
    FileNavigatorModel = __decorate([
        inversify_1.injectable()
    ], FileNavigatorModel);
    return FileNavigatorModel;
}(browser_1.FileTreeModel));
exports.FileNavigatorModel = FileNavigatorModel;
//# sourceMappingURL=navigator-model.js.map
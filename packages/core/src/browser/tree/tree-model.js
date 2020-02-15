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
var common_1 = require("../../common");
var tree_1 = require("./tree");
var tree_selection_1 = require("./tree-selection");
var tree_expansion_1 = require("./tree-expansion");
var tree_navigation_1 = require("./tree-navigation");
var tree_iterator_1 = require("./tree-iterator");
var tree_search_1 = require("./tree-search");
/**
 * The tree model.
 */
exports.TreeModel = Symbol('TreeModel');
var TreeModelImpl = /** @class */ (function () {
    function TreeModelImpl() {
        this.onChangedEmitter = new common_1.Emitter();
        this.onOpenNodeEmitter = new common_1.Emitter();
        this.toDispose = new common_1.DisposableCollection();
    }
    TreeModelImpl.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.tree);
        this.toDispose.push(this.tree.onChanged(function () { return _this.fireChanged(); }));
        this.toDispose.push(this.selectionService);
        this.toDispose.push(this.expansionService);
        this.toDispose.push(this.expansionService.onExpansionChanged(function (node) {
            _this.fireChanged();
            _this.handleExpansion(node);
        }));
        this.toDispose.push(this.onOpenNodeEmitter);
        this.toDispose.push(this.onChangedEmitter);
        this.toDispose.push(this.treeSearch);
    };
    TreeModelImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    TreeModelImpl.prototype.handleExpansion = function (node) {
        this.selectIfAncestorOfSelected(node);
    };
    /**
     * Select the given node if it is the ancestor of a selected node.
     */
    TreeModelImpl.prototype.selectIfAncestorOfSelected = function (node) {
        if (!node.expanded && __spread(this.selectedNodes).some(function (selectedNode) { return tree_1.CompositeTreeNode.isAncestor(node, selectedNode); })) {
            if (tree_selection_1.SelectableTreeNode.isVisible(node)) {
                this.selectNode(node);
            }
        }
    };
    Object.defineProperty(TreeModelImpl.prototype, "root", {
        get: function () {
            return this.tree.root;
        },
        set: function (root) {
            this.tree.root = root;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModelImpl.prototype, "onChanged", {
        get: function () {
            return this.onChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModelImpl.prototype, "onOpenNode", {
        get: function () {
            return this.onOpenNodeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    TreeModelImpl.prototype.fireChanged = function () {
        this.onChangedEmitter.fire(undefined);
    };
    Object.defineProperty(TreeModelImpl.prototype, "onNodeRefreshed", {
        get: function () {
            return this.tree.onNodeRefreshed;
        },
        enumerable: true,
        configurable: true
    });
    TreeModelImpl.prototype.getNode = function (id) {
        return this.tree.getNode(id);
    };
    TreeModelImpl.prototype.validateNode = function (node) {
        return this.tree.validateNode(node);
    };
    TreeModelImpl.prototype.refresh = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (parent) {
                    return [2 /*return*/, this.tree.refresh(parent)];
                }
                return [2 /*return*/, this.tree.refresh()];
            });
        });
    };
    Object.defineProperty(TreeModelImpl.prototype, "selectedNodes", {
        // tslint:disable-next-line:typedef
        get: function () {
            return this.selectionService.selectedNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModelImpl.prototype, "onSelectionChanged", {
        // tslint:disable-next-line:typedef
        get: function () {
            return this.selectionService.onSelectionChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModelImpl.prototype, "onExpansionChanged", {
        get: function () {
            return this.expansionService.onExpansionChanged;
        },
        enumerable: true,
        configurable: true
    });
    TreeModelImpl.prototype.expandNode = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, node;
            var e_1, _c;
            return __generator(this, function (_d) {
                try {
                    for (_a = __values(raw ? [raw] : this.selectedNodes), _b = _a.next(); !_b.done; _b = _a.next()) {
                        node = _b.value;
                        if (tree_expansion_1.ExpandableTreeNode.is(node)) {
                            return [2 /*return*/, this.expansionService.expandNode(node)];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/, undefined];
            });
        });
    };
    TreeModelImpl.prototype.collapseNode = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, node;
            var e_2, _c;
            return __generator(this, function (_d) {
                try {
                    for (_a = __values(raw ? [raw] : this.selectedNodes), _b = _a.next(); !_b.done; _b = _a.next()) {
                        node = _b.value;
                        if (tree_expansion_1.ExpandableTreeNode.is(node)) {
                            return [2 /*return*/, this.expansionService.collapseNode(node)];
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return [2 /*return*/, false];
            });
        });
    };
    TreeModelImpl.prototype.collapseAll = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                node = raw || this.selectedNodes[0];
                if (tree_selection_1.SelectableTreeNode.is(node)) {
                    this.selectNode(node);
                }
                if (tree_1.CompositeTreeNode.is(node)) {
                    return [2 /*return*/, this.expansionService.collapseAll(node)];
                }
                return [2 /*return*/, false];
            });
        });
    };
    TreeModelImpl.prototype.toggleNodeExpansion = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, node, e_3_1;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(raw ? [raw] : this.selectedNodes), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        node = _b.value;
                        if (!tree_expansion_1.ExpandableTreeNode.is(node)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.expansionService.toggleNodeExpansion(node)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/];
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TreeModelImpl.prototype.selectPrevNode = function (type) {
        if (type === void 0) { type = tree_selection_1.TreeSelection.SelectionType.DEFAULT; }
        var node = this.getPrevSelectableNode();
        if (node) {
            this.addSelection({ node: node, type: type });
        }
    };
    TreeModelImpl.prototype.getPrevSelectableNode = function (node) {
        if (node === void 0) { node = this.selectedNodes[0]; }
        var iterator = this.createBackwardIterator(node);
        return iterator && this.doGetNextNode(iterator);
    };
    TreeModelImpl.prototype.selectNextNode = function (type) {
        if (type === void 0) { type = tree_selection_1.TreeSelection.SelectionType.DEFAULT; }
        var node = this.getNextSelectableNode();
        if (node) {
            this.addSelection({ node: node, type: type });
        }
    };
    TreeModelImpl.prototype.getNextSelectableNode = function (node) {
        if (node === void 0) { node = this.selectedNodes[0]; }
        var iterator = this.createIterator(node);
        return iterator && this.doGetNextNode(iterator);
    };
    TreeModelImpl.prototype.doGetNextNode = function (iterator) {
        // Skip the first item. // TODO: clean this up, and skip the first item in a different way without loading everything.
        iterator.next();
        var result = iterator.next();
        while (!result.done && !tree_selection_1.SelectableTreeNode.isVisible(result.value)) {
            result = iterator.next();
        }
        var node = result.value;
        if (tree_selection_1.SelectableTreeNode.isVisible(node)) {
            return node;
        }
        return undefined;
    };
    TreeModelImpl.prototype.createBackwardIterator = function (node) {
        var filteredNodes = this.treeSearch.filteredNodes;
        if (filteredNodes.length === 0) {
            return node ? new tree_iterator_1.BottomUpTreeIterator(node, { pruneCollapsed: true }) : undefined;
        }
        if (node && filteredNodes.indexOf(node) === -1) {
            return undefined;
        }
        return tree_iterator_1.Iterators.cycle(filteredNodes.slice().reverse(), node);
    };
    TreeModelImpl.prototype.createIterator = function (node) {
        var filteredNodes = this.treeSearch.filteredNodes;
        if (filteredNodes.length === 0) {
            return node ? new tree_iterator_1.TopDownTreeIterator(node, { pruneCollapsed: true }) : undefined;
        }
        if (node && filteredNodes.indexOf(node) === -1) {
            return undefined;
        }
        return tree_iterator_1.Iterators.cycle(filteredNodes, node);
    };
    TreeModelImpl.prototype.openNode = function (raw) {
        var node = raw || this.selectedNodes[0];
        if (node) {
            this.doOpenNode(node);
            this.onOpenNodeEmitter.fire(node);
        }
    };
    TreeModelImpl.prototype.doOpenNode = function (node) {
        if (tree_expansion_1.ExpandableTreeNode.is(node)) {
            this.toggleNodeExpansion(node);
        }
    };
    TreeModelImpl.prototype.selectParent = function () {
        if (this.selectedNodes.length === 1) {
            var node = this.selectedNodes[0];
            var parent_1 = tree_selection_1.SelectableTreeNode.getVisibleParent(node);
            if (parent_1) {
                this.selectNode(parent_1);
            }
        }
    };
    TreeModelImpl.prototype.navigateTo = function (nodeOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!nodeOrId) return [3 /*break*/, 2];
                        node = typeof nodeOrId === 'string' ? this.getNode(nodeOrId) : nodeOrId;
                        if (!node) return [3 /*break*/, 2];
                        this.navigationService.push(node);
                        return [4 /*yield*/, this.doNavigate(node)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, node];
                    case 2: return [2 /*return*/, undefined];
                }
            });
        });
    };
    TreeModelImpl.prototype.canNavigateForward = function () {
        return !!this.navigationService.next;
    };
    TreeModelImpl.prototype.canNavigateBackward = function () {
        return !!this.navigationService.prev;
    };
    TreeModelImpl.prototype.navigateForward = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node = this.navigationService.advance();
                        if (!node) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doNavigate(node)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TreeModelImpl.prototype.navigateBackward = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node = this.navigationService.retreat();
                        if (!node) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doNavigate(node)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TreeModelImpl.prototype.doNavigate = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tree.root = node;
                        if (!tree_expansion_1.ExpandableTreeNode.is(node)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.expandNode(node)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (tree_selection_1.SelectableTreeNode.is(node)) {
                            this.selectNode(node);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeModelImpl.prototype.addSelection = function (selectionOrTreeNode) {
        this.selectionService.addSelection(selectionOrTreeNode);
    };
    TreeModelImpl.prototype.selectNode = function (node) {
        this.addSelection(node);
    };
    TreeModelImpl.prototype.toggleNode = function (node) {
        this.addSelection({ node: node, type: tree_selection_1.TreeSelection.SelectionType.TOGGLE });
    };
    TreeModelImpl.prototype.selectRange = function (node) {
        this.addSelection({ node: node, type: tree_selection_1.TreeSelection.SelectionType.RANGE });
    };
    TreeModelImpl.prototype.storeState = function () {
        return {
            selection: this.selectionService.storeState()
        };
    };
    TreeModelImpl.prototype.restoreState = function (state) {
        if (state.selection) {
            this.selectionService.restoreState(state.selection);
        }
    };
    __decorate([
        inversify_1.inject(common_1.ILogger),
        __metadata("design:type", Object)
    ], TreeModelImpl.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(tree_1.Tree),
        __metadata("design:type", Object)
    ], TreeModelImpl.prototype, "tree", void 0);
    __decorate([
        inversify_1.inject(tree_selection_1.TreeSelectionService),
        __metadata("design:type", Object)
    ], TreeModelImpl.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(tree_expansion_1.TreeExpansionService),
        __metadata("design:type", Object)
    ], TreeModelImpl.prototype, "expansionService", void 0);
    __decorate([
        inversify_1.inject(tree_navigation_1.TreeNavigationService),
        __metadata("design:type", tree_navigation_1.TreeNavigationService)
    ], TreeModelImpl.prototype, "navigationService", void 0);
    __decorate([
        inversify_1.inject(tree_search_1.TreeSearch),
        __metadata("design:type", tree_search_1.TreeSearch)
    ], TreeModelImpl.prototype, "treeSearch", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModelImpl.prototype, "init", null);
    TreeModelImpl = __decorate([
        inversify_1.injectable()
    ], TreeModelImpl);
    return TreeModelImpl;
}());
exports.TreeModelImpl = TreeModelImpl;
//# sourceMappingURL=tree-model.js.map
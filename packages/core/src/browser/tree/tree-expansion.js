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
exports.TreeExpansionService = Symbol('TreeExpansionService');
var ExpandableTreeNode;
(function (ExpandableTreeNode) {
    function is(node) {
        return !!node && tree_1.CompositeTreeNode.is(node) && 'expanded' in node;
    }
    ExpandableTreeNode.is = is;
    function isExpanded(node) {
        return ExpandableTreeNode.is(node) && node.expanded;
    }
    ExpandableTreeNode.isExpanded = isExpanded;
    function isCollapsed(node) {
        return ExpandableTreeNode.is(node) && !node.expanded;
    }
    ExpandableTreeNode.isCollapsed = isCollapsed;
})(ExpandableTreeNode = exports.ExpandableTreeNode || (exports.ExpandableTreeNode = {}));
var TreeExpansionServiceImpl = /** @class */ (function () {
    function TreeExpansionServiceImpl() {
        this.onExpansionChangedEmitter = new common_1.Emitter();
    }
    TreeExpansionServiceImpl.prototype.init = function () {
        var _this = this;
        this.tree.onNodeRefreshed(function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    if (ExpandableTreeNode.isExpanded(child)) {
                        node.waitUntil(_this.tree.refresh(child));
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
        });
    };
    TreeExpansionServiceImpl.prototype.dispose = function () {
        this.onExpansionChangedEmitter.dispose();
    };
    Object.defineProperty(TreeExpansionServiceImpl.prototype, "onExpansionChanged", {
        get: function () {
            return this.onExpansionChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    TreeExpansionServiceImpl.prototype.fireExpansionChanged = function (node) {
        this.onExpansionChangedEmitter.fire(node);
    };
    TreeExpansionServiceImpl.prototype.expandNode = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                node = this.tree.validateNode(raw);
                if (ExpandableTreeNode.isCollapsed(node)) {
                    return [2 /*return*/, this.doExpandNode(node)];
                }
                return [2 /*return*/, undefined];
            });
        });
    };
    TreeExpansionServiceImpl.prototype.doExpandNode = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var refreshed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node.expanded = true;
                        return [4 /*yield*/, this.tree.refresh(node)];
                    case 1:
                        refreshed = _a.sent();
                        if (ExpandableTreeNode.isExpanded(refreshed)) {
                            this.fireExpansionChanged(refreshed);
                            return [2 /*return*/, refreshed];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    TreeExpansionServiceImpl.prototype.collapseNode = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                node = this.tree.validateNode(raw);
                return [2 /*return*/, this.doCollapseNode(node)];
            });
        });
    };
    TreeExpansionServiceImpl.prototype.collapseAll = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                node = this.tree.validateNode(raw);
                return [2 /*return*/, this.doCollapseAll(node)];
            });
        });
    };
    TreeExpansionServiceImpl.prototype.doCollapseAll = function (node) {
        var e_2, _a;
        var result = false;
        if (tree_1.CompositeTreeNode.is(node)) {
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    result = this.doCollapseAll(child) || result;
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
        return this.doCollapseNode(node) || result;
    };
    TreeExpansionServiceImpl.prototype.doCollapseNode = function (node) {
        if (!ExpandableTreeNode.isExpanded(node)) {
            return false;
        }
        node.expanded = false;
        this.fireExpansionChanged(node);
        return true;
    };
    TreeExpansionServiceImpl.prototype.toggleNodeExpansion = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!node.expanded) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.collapseNode(node)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.expandNode(node)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(tree_1.Tree),
        __metadata("design:type", Object)
    ], TreeExpansionServiceImpl.prototype, "tree", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeExpansionServiceImpl.prototype, "init", null);
    TreeExpansionServiceImpl = __decorate([
        inversify_1.injectable()
    ], TreeExpansionServiceImpl);
    return TreeExpansionServiceImpl;
}());
exports.TreeExpansionServiceImpl = TreeExpansionServiceImpl;
//# sourceMappingURL=tree-expansion.js.map
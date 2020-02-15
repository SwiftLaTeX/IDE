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
exports.Tree = Symbol('Tree');
var TreeNode;
(function (TreeNode) {
    function is(node) {
        return !!node && typeof node === 'object' && 'id' in node && 'parent' in node;
    }
    TreeNode.is = is;
    function equals(left, right) {
        return left === right || (!!left && !!right && left.id === right.id);
    }
    TreeNode.equals = equals;
    function isVisible(node) {
        return !!node && (node.visible === undefined || node.visible);
    }
    TreeNode.isVisible = isVisible;
})(TreeNode = exports.TreeNode || (exports.TreeNode = {}));
var CompositeTreeNode;
(function (CompositeTreeNode) {
    function is(node) {
        return !!node && 'children' in node;
    }
    CompositeTreeNode.is = is;
    function getFirstChild(parent) {
        return parent.children[0];
    }
    CompositeTreeNode.getFirstChild = getFirstChild;
    function getLastChild(parent) {
        return parent.children[parent.children.length - 1];
    }
    CompositeTreeNode.getLastChild = getLastChild;
    function isAncestor(parent, child) {
        if (!child) {
            return false;
        }
        if (TreeNode.equals(parent, child.parent)) {
            return true;
        }
        return isAncestor(parent, child.parent);
    }
    CompositeTreeNode.isAncestor = isAncestor;
    function indexOf(parent, node) {
        if (!node) {
            return -1;
        }
        return parent.children.findIndex(function (child) { return TreeNode.equals(node, child); });
    }
    CompositeTreeNode.indexOf = indexOf;
    function addChildren(parent, children) {
        var e_1, _a;
        try {
            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                addChild(parent, child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return parent;
    }
    CompositeTreeNode.addChildren = addChildren;
    function addChild(parent, child) {
        var children = parent.children;
        var index = children.findIndex(function (value) { return value.id === child.id; });
        if (index !== -1) {
            children.splice(index, 1, child);
            setParent(child, index, parent);
        }
        else {
            children.push(child);
            setParent(child, parent.children.length - 1, parent);
        }
        return parent;
    }
    CompositeTreeNode.addChild = addChild;
    function removeChild(parent, child) {
        var children = parent.children;
        var index = children.findIndex(function (value) { return value.id === child.id; });
        if (index === -1) {
            return;
        }
        children.splice(index, 1);
        var previousSibling = child.previousSibling, nextSibling = child.nextSibling;
        if (previousSibling) {
            Object.assign(previousSibling, { nextSibling: nextSibling });
        }
        if (nextSibling) {
            Object.assign(nextSibling, { previousSibling: previousSibling });
        }
    }
    CompositeTreeNode.removeChild = removeChild;
    function setParent(child, index, parent) {
        var previousSibling = parent.children[index - 1];
        var nextSibling = parent.children[index + 1];
        Object.assign(child, { parent: parent, previousSibling: previousSibling, nextSibling: nextSibling });
        if (previousSibling) {
            Object.assign(previousSibling, { nextSibling: child });
        }
        if (nextSibling) {
            Object.assign(nextSibling, { previousSibling: child });
        }
    }
    CompositeTreeNode.setParent = setParent;
})(CompositeTreeNode = exports.CompositeTreeNode || (exports.CompositeTreeNode = {}));
/**
 * A default implementation of the tree.
 */
var TreeImpl = /** @class */ (function () {
    function TreeImpl() {
        this.onChangedEmitter = new common_1.Emitter();
        this.onNodeRefreshedEmitter = new common_1.Emitter();
        this.toDispose = new common_1.DisposableCollection();
        this.nodes = {};
        this.toDispose.push(this.onChangedEmitter);
        this.toDispose.push(this.onNodeRefreshedEmitter);
    }
    TreeImpl.prototype.dispose = function () {
        this.nodes = {};
        this.toDispose.dispose();
    };
    Object.defineProperty(TreeImpl.prototype, "root", {
        get: function () {
            return this._root;
        },
        set: function (root) {
            this.nodes = {};
            this._root = root;
            this.addNode(root);
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeImpl.prototype, "onChanged", {
        get: function () {
            return this.onChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    TreeImpl.prototype.fireChanged = function () {
        this.onChangedEmitter.fire(undefined);
    };
    Object.defineProperty(TreeImpl.prototype, "onNodeRefreshed", {
        get: function () {
            return this.onNodeRefreshedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    TreeImpl.prototype.fireNodeRefreshed = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, common_1.WaitUntilEvent.fire(this.onNodeRefreshedEmitter, parent)];
                    case 1:
                        _a.sent();
                        this.fireChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeImpl.prototype.getNode = function (id) {
        return id !== undefined ? this.nodes[id] : undefined;
    };
    TreeImpl.prototype.validateNode = function (node) {
        var id = !!node ? node.id : undefined;
        return this.getNode(id);
    };
    TreeImpl.prototype.refresh = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var parent, result, children;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parent = !raw ? this._root : this.validateNode(raw);
                        if (!CompositeTreeNode.is(parent)) return [3 /*break*/, 3];
                        result = parent;
                        return [4 /*yield*/, this.resolveChildren(parent)];
                    case 1:
                        children = _a.sent();
                        return [4 /*yield*/, this.setChildren(parent, children)];
                    case 2:
                        result = _a.sent();
                        _a.label = 3;
                    case 3:
                        this.fireChanged();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    TreeImpl.prototype.resolveChildren = function (parent) {
        return Promise.resolve(Array.from(parent.children));
    };
    TreeImpl.prototype.setChildren = function (parent, children) {
        return __awaiter(this, void 0, void 0, function () {
            var root;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        root = this.getRootNode(parent);
                        if (this.nodes[root.id] && this.nodes[root.id] !== root) {
                            console.error("Child node '" + parent.id + "' does not belong to this '" + root.id + "' tree.");
                            return [2 /*return*/, undefined];
                        }
                        this.removeNode(parent);
                        parent.children = children;
                        this.addNode(parent);
                        return [4 /*yield*/, this.fireNodeRefreshed(parent)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, parent];
                }
            });
        });
    };
    TreeImpl.prototype.removeNode = function (node) {
        var _this = this;
        if (CompositeTreeNode.is(node)) {
            node.children.forEach(function (child) { return _this.removeNode(child); });
        }
        if (node) {
            delete this.nodes[node.id];
        }
    };
    TreeImpl.prototype.getRootNode = function (node) {
        if (node.parent === undefined) {
            return node;
        }
        else {
            return this.getRootNode(node.parent);
        }
    };
    TreeImpl.prototype.addNode = function (node) {
        var _this = this;
        if (node) {
            this.nodes[node.id] = node;
        }
        if (CompositeTreeNode.is(node)) {
            var children = node.children;
            children.forEach(function (child, index) {
                CompositeTreeNode.setParent(child, index, node);
                _this.addNode(child);
            });
        }
    };
    TreeImpl = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], TreeImpl);
    return TreeImpl;
}());
exports.TreeImpl = TreeImpl;
//# sourceMappingURL=tree.js.map
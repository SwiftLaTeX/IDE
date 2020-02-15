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
var tree_1 = require("./tree");
var tree_expansion_1 = require("./tree-expansion");
var TreeIterator;
(function (TreeIterator) {
    TreeIterator.DEFAULT_OPTIONS = {
        pruneCollapsed: false,
        pruneSiblings: false
    };
})(TreeIterator = exports.TreeIterator || (exports.TreeIterator = {}));
var AbstractTreeIterator = /** @class */ (function () {
    function AbstractTreeIterator(root, options) {
        this.root = root;
        this.options = __assign(__assign({}, TreeIterator.DEFAULT_OPTIONS), options);
        this.delegate = this.iterator(this.root);
    }
    // tslint:disable-next-line:typedef
    AbstractTreeIterator.prototype[Symbol.iterator] = function () {
        return this.delegate;
    };
    AbstractTreeIterator.prototype.next = function () {
        return this.delegate.next();
    };
    AbstractTreeIterator.prototype.children = function (node) {
        if (!tree_1.CompositeTreeNode.is(node)) {
            return undefined;
        }
        if (this.options.pruneCollapsed && this.isCollapsed(node)) {
            return undefined;
        }
        return node.children.slice();
    };
    AbstractTreeIterator.prototype.isCollapsed = function (node) {
        return tree_expansion_1.ExpandableTreeNode.isCollapsed(node);
    };
    AbstractTreeIterator.prototype.isEmpty = function (nodes) {
        return nodes === undefined || nodes.length === 0;
    };
    return AbstractTreeIterator;
}());
exports.AbstractTreeIterator = AbstractTreeIterator;
var DepthFirstTreeIterator = /** @class */ (function (_super) {
    __extends(DepthFirstTreeIterator, _super);
    function DepthFirstTreeIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DepthFirstTreeIterator.prototype.iterator = function (root) {
        return Iterators.depthFirst(root, this.children.bind(this));
    };
    return DepthFirstTreeIterator;
}(AbstractTreeIterator));
exports.DepthFirstTreeIterator = DepthFirstTreeIterator;
var BreadthFirstTreeIterator = /** @class */ (function (_super) {
    __extends(BreadthFirstTreeIterator, _super);
    function BreadthFirstTreeIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadthFirstTreeIterator.prototype.iterator = function (root) {
        return Iterators.breadthFirst(root, this.children.bind(this));
    };
    return BreadthFirstTreeIterator;
}(AbstractTreeIterator));
exports.BreadthFirstTreeIterator = BreadthFirstTreeIterator;
/**
 * This tree iterator visits all nodes from top to bottom considering the following rules.
 *
 * Let assume the following tree:
 * ```
 *   R
 *   |
 *   +---1
 *   |   |
 *   |   +---1.1
 *   |   |
 *   |   +---1.2
 *   |   |
 *   |   +---1.3
 *   |   |    |
 *   |   |    +---1.3.1
 *   |   |    |
 *   |   |    +---1.3.2
 *   |   |
 *   |   +---1.4
 *   |
 *   +---2
 *       |
 *       +---2.1
 * ```
 * When selecting `1.2` as the root, the normal `DepthFirstTreeIterator` would stop on `1.2` as it does not have children,
 * but this iterator will visit the next sibling (`1.3` and `1.4` but **not** `1.1`) nodes. So the expected traversal order will be
 * `1.2`, `1.3`, `1.3.1`, `1.3.2`,  and `1.4` then jumps to `2` and continues with `2.1`.
 */
var TopDownTreeIterator = /** @class */ (function (_super) {
    __extends(TopDownTreeIterator, _super);
    function TopDownTreeIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopDownTreeIterator.prototype.iterator = function (root) {
        var doNext = this.doNext.bind(this);
        return (function () {
            var next;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        next = root;
                        _a.label = 1;
                    case 1:
                        if (!next) return [3 /*break*/, 3];
                        return [4 /*yield*/, next];
                    case 2:
                        _a.sent();
                        next = doNext(next);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        }).bind(this)();
    };
    TopDownTreeIterator.prototype.doNext = function (node) {
        return this.findFirstChild(node) || this.findNextSibling(node);
    };
    TopDownTreeIterator.prototype.findFirstChild = function (node) {
        return (this.children(node) || [])[0];
    };
    TopDownTreeIterator.prototype.findNextSibling = function (node) {
        if (!node) {
            return undefined;
        }
        if (this.options.pruneSiblings && node === this.root) {
            return undefined;
        }
        if (node.nextSibling) {
            return node.nextSibling;
        }
        return this.findNextSibling(node.parent);
    };
    return TopDownTreeIterator;
}(AbstractTreeIterator));
exports.TopDownTreeIterator = TopDownTreeIterator;
/**
 * Unlike other tree iterators, this does not visit all the nodes, it stops once it reaches the root node
 * while traversing up the tree hierarchy in an inverse pre-order fashion. This is the counterpart of the `TopDownTreeIterator`.
 */
var BottomUpTreeIterator = /** @class */ (function (_super) {
    __extends(BottomUpTreeIterator, _super);
    function BottomUpTreeIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BottomUpTreeIterator.prototype.iterator = function (root) {
        var doNext = this.doNext.bind(this);
        return (function () {
            var next;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        next = root;
                        _a.label = 1;
                    case 1:
                        if (!next) return [3 /*break*/, 3];
                        return [4 /*yield*/, next];
                    case 2:
                        _a.sent();
                        next = doNext(next);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        }).bind(this)();
    };
    BottomUpTreeIterator.prototype.doNext = function (node) {
        var previousSibling = node.previousSibling;
        var lastChild = this.lastChild(previousSibling);
        return lastChild || node.parent;
    };
    BottomUpTreeIterator.prototype.lastChild = function (node) {
        var children = node ? this.children(node) : [];
        if (this.isEmpty(children)) {
            return node;
        }
        if (tree_1.CompositeTreeNode.is(node)) {
            var lastChild = tree_1.CompositeTreeNode.getLastChild(node);
            return this.lastChild(lastChild);
        }
        return undefined;
    };
    return BottomUpTreeIterator;
}(AbstractTreeIterator));
exports.BottomUpTreeIterator = BottomUpTreeIterator;
var Iterators;
(function (Iterators) {
    /**
     * Generator for depth first, pre-order tree traversal iteration.
     */
    function depthFirst(root, children, include) {
        var stack, top_1;
        if (include === void 0) { include = function () { return true; }; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stack = [];
                    stack.push(root);
                    _a.label = 1;
                case 1:
                    if (!(stack.length > 0)) return [3 /*break*/, 3];
                    top_1 = stack.pop();
                    return [4 /*yield*/, top_1];
                case 2:
                    _a.sent();
                    stack.push.apply(stack, __spread((children(top_1) || []).filter(include).reverse()));
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    }
    Iterators.depthFirst = depthFirst;
    /**
     * Generator for breadth first tree traversal iteration.
     */
    function breadthFirst(root, children, include) {
        var queue, head;
        if (include === void 0) { include = function () { return true; }; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queue = [];
                    queue.push(root);
                    _a.label = 1;
                case 1:
                    if (!(queue.length > 0)) return [3 /*break*/, 3];
                    head = queue.shift();
                    return [4 /*yield*/, head];
                case 2:
                    _a.sent();
                    queue.push.apply(queue, __spread((children(head) || []).filter(include)));
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    }
    Iterators.breadthFirst = breadthFirst;
    /**
     * Returns with the iterator of the argument.
     */
    function asIterator(elements) {
        return elements.slice()[Symbol.iterator]();
    }
    Iterators.asIterator = asIterator;
    /**
     * Returns an iterator that cycles indefinitely over the elements of iterable.
     *  - If `start` is given it starts the iteration from that element. Otherwise, it starts with the first element of the array.
     *  - If `start` is given, it must contain by the `elements` array. Otherwise, an error will be thrown.
     *
     * **Warning**: Typical uses of the resulting iterator may produce an infinite loop. You should use an explicit break.
     */
    function cycle(elements, start) {
        var copy, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    copy = elements.slice();
                    index = !!start ? copy.indexOf(start) : 0;
                    if (index === -1) {
                        throw new Error(start + " is not contained in " + copy + ".");
                    }
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, copy[index]];
                case 2:
                    _a.sent();
                    index++;
                    if (index === copy.length) {
                        index = 0;
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    }
    Iterators.cycle = cycle;
})(Iterators = exports.Iterators || (exports.Iterators = {}));
//# sourceMappingURL=tree-iterator.js.map
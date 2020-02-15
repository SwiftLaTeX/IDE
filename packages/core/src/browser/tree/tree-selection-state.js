"use strict";
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var tree_iterator_1 = require("./tree-iterator");
var tree_selection_1 = require("./tree-selection");
var FocusableTreeSelection;
(function (FocusableTreeSelection) {
    /**
     * `true` if the argument is a focusable tree selection. Otherwise, `false`.
     */
    function is(arg) {
        return tree_selection_1.TreeSelection.is(arg) && 'focus' in arg;
    }
    FocusableTreeSelection.is = is;
    /**
     * Returns with the tree node that has the focus if the argument is a focusable tree selection.
     * Otherwise, returns `undefined`.
     */
    function focus(arg) {
        return is(arg) ? arg.focus : undefined;
    }
    FocusableTreeSelection.focus = focus;
})(FocusableTreeSelection = exports.FocusableTreeSelection || (exports.FocusableTreeSelection = {}));
/**
 * Class for representing and managing the selection state and the focus of a tree.
 */
var TreeSelectionState = /** @class */ (function () {
    function TreeSelectionState(tree, selectionStack) {
        if (selectionStack === void 0) { selectionStack = []; }
        this.tree = tree;
        this.selectionStack = selectionStack;
    }
    TreeSelectionState.prototype.nextState = function (selection) {
        var _a = __assign({ type: tree_selection_1.TreeSelection.SelectionType.DEFAULT }, selection), node = _a.node, type = _a.type;
        switch (type) {
            case tree_selection_1.TreeSelection.SelectionType.DEFAULT: return this.handleDefault(this, node);
            case tree_selection_1.TreeSelection.SelectionType.TOGGLE: return this.handleToggle(this, node);
            case tree_selection_1.TreeSelection.SelectionType.RANGE: return this.handleRange(this, node);
            default: throw new Error("Unexpected tree selection type: " + type + ".");
        }
    };
    TreeSelectionState.prototype.selection = function () {
        var e_1, _a;
        var _this = this;
        var copy = this.checkNoDefaultSelection(this.selectionStack);
        var nodeIds = new Set();
        for (var i = 0; i < copy.length; i++) {
            var _b = copy[i], node = _b.node, type = _b.type;
            if (tree_selection_1.TreeSelection.isRange(type)) {
                var selection = copy[i];
                try {
                    for (var _c = (e_1 = void 0, __values(this.selectionRange(selection).map(function (n) { return n.id; }))), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var id = _d.value;
                        nodeIds.add(id);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else if (tree_selection_1.TreeSelection.isToggle(type)) {
                if (nodeIds.has(node.id)) {
                    nodeIds.delete(node.id);
                }
                else {
                    nodeIds.add(node.id);
                }
            }
        }
        return Array.from(nodeIds.keys()).map(function (id) { return _this.tree.getNode(id); }).filter(tree_selection_1.SelectableTreeNode.is).reverse();
    };
    Object.defineProperty(TreeSelectionState.prototype, "focus", {
        get: function () {
            var copy = this.checkNoDefaultSelection(this.selectionStack);
            var candidate = copy[copy.length - 1].focus;
            return this.toSelectableTreeNode(candidate);
        },
        enumerable: true,
        configurable: true
    });
    TreeSelectionState.prototype.handleDefault = function (state, node) {
        var tree = state.tree;
        return new TreeSelectionState(tree, [{
                node: node,
                type: tree_selection_1.TreeSelection.SelectionType.TOGGLE,
                focus: node
            }]);
    };
    TreeSelectionState.prototype.handleToggle = function (state, node) {
        var _this = this;
        var tree = state.tree, selectionStack = state.selectionStack;
        var copy = this.checkNoDefaultSelection(selectionStack).slice();
        var focus = (function () {
            var allRanges = copy.filter(function (selection) { return tree_selection_1.TreeSelection.isRange(selection); });
            for (var i = allRanges.length - 1; i >= 0; i--) {
                var latestRangeIndex = copy.indexOf(allRanges[i]);
                var latestRangeSelection = copy[latestRangeIndex];
                var latestRange = latestRangeSelection && latestRangeSelection.focus ? _this.selectionRange(latestRangeSelection) : [];
                if (latestRange.indexOf(node) !== -1) {
                    if (_this.focus === latestRangeSelection.focus) {
                        return latestRangeSelection.focus || node;
                    }
                    else {
                        return _this.focus;
                    }
                }
            }
            return node;
        })();
        return new TreeSelectionState(tree, __spread(copy, [{
                node: node,
                type: tree_selection_1.TreeSelection.SelectionType.TOGGLE,
                focus: focus
            }]));
    };
    TreeSelectionState.prototype.handleRange = function (state, node) {
        var tree = state.tree, selectionStack = state.selectionStack;
        var copy = this.checkNoDefaultSelection(selectionStack).slice();
        var focus = FocusableTreeSelection.focus(copy[copy.length - 1]);
        // Drop the previous range when we are trying to modify that.
        if (tree_selection_1.TreeSelection.isRange(copy[copy.length - 1])) {
            var range = this.selectionRange(copy.pop());
            // And we drop all preceding individual nodes that were contained in the range we are dropping.
            // That means, anytime we cover individual nodes with a range, they will belong to the range so we need to drop them now.
            for (var i = copy.length - 1; i >= 0; i--) {
                if (range.indexOf(copy[i].node) !== -1) {
                    // Make sure to keep a reference to the focus while we are discarding previous elements. Otherwise, we lose this information.
                    focus = copy[i].focus;
                    copy.splice(i, 1);
                }
            }
        }
        return new TreeSelectionState(tree, __spread(copy, [{
                node: node,
                type: tree_selection_1.TreeSelection.SelectionType.RANGE,
                focus: focus
            }]));
    };
    /**
     * Returns with an array of items representing the selection range. The from node is the `focus` the to node
     * is the selected node itself on the tree selection. Both the `from` node and the `to` node are inclusive.
     */
    TreeSelectionState.prototype.selectionRange = function (selection) {
        var e_2, _a;
        var fromNode = selection.focus;
        var toNode = selection.node;
        if (fromNode === undefined) {
            return [];
        }
        if (toNode === fromNode) {
            return [toNode];
        }
        var root = this.tree.root;
        if (root === undefined) {
            return [];
        }
        var to = this.tree.validateNode(toNode);
        if (to === undefined) {
            return [];
        }
        var from = this.tree.validateNode(fromNode);
        if (from === undefined) {
            return [];
        }
        var started = false;
        var finished = false;
        var range = [];
        try {
            for (var _b = __values(new tree_iterator_1.DepthFirstTreeIterator(root, { pruneCollapsed: true })), _c = _b.next(); !_c.done; _c = _b.next()) {
                var node = _c.value;
                if (finished) {
                    break;
                }
                // Only collect items which are between (inclusive) the `from` node and the `to` node.
                if (node === from || node === to) {
                    if (started) {
                        finished = true;
                    }
                    else {
                        started = true;
                    }
                }
                if (started) {
                    range.push(node);
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
        // We need to reverse the selection range order.
        if (range.indexOf(from) > range.indexOf(to)) {
            range.reverse();
        }
        return range.filter(tree_selection_1.SelectableTreeNode.is);
    };
    TreeSelectionState.prototype.toSelectableTreeNode = function (node) {
        if (!!node) {
            var candidate = this.tree.getNode(node.id);
            if (!!candidate) {
                if (tree_selection_1.SelectableTreeNode.is(candidate)) {
                    return candidate;
                }
                else {
                    console.warn("Could not map to a selectable tree node. Node with ID: " + node.id + " is not a selectable node.");
                }
            }
            else {
                console.warn("Could not map to a selectable tree node. Node does not exist with ID: " + node.id + ".");
            }
        }
        return undefined;
    };
    /**
     * Checks whether the argument contains any `DEFAULT` tree selection type. If yes, throws an error, otherwise returns with a reference the argument.
     */
    TreeSelectionState.prototype.checkNoDefaultSelection = function (selections) {
        if (selections.some(function (selection) { return selection.type === undefined || selection.type === tree_selection_1.TreeSelection.SelectionType.DEFAULT; })) {
            throw new Error("Unexpected DEFAULT selection type. [" + selections.map(function (selection) { return "ID: " + selection.node.id + " | " + selection.type; }).join(', ') + "]");
        }
        return selections;
    };
    return TreeSelectionState;
}());
exports.TreeSelectionState = TreeSelectionState;
//# sourceMappingURL=tree-selection-state.js.map
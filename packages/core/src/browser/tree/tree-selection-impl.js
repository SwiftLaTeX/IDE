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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var tree_1 = require("./tree");
var common_1 = require("../../common");
var tree_selection_state_1 = require("./tree-selection-state");
var tree_selection_1 = require("./tree-selection");
var TreeSelectionServiceImpl = /** @class */ (function () {
    function TreeSelectionServiceImpl() {
        this.onSelectionChangedEmitter = new common_1.Emitter();
    }
    TreeSelectionServiceImpl.prototype.init = function () {
        this.state = new tree_selection_state_1.TreeSelectionState(this.tree);
    };
    TreeSelectionServiceImpl.prototype.dispose = function () {
        this.onSelectionChangedEmitter.dispose();
    };
    Object.defineProperty(TreeSelectionServiceImpl.prototype, "selectedNodes", {
        get: function () {
            return this.state.selection();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeSelectionServiceImpl.prototype, "onSelectionChanged", {
        get: function () {
            return this.onSelectionChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    TreeSelectionServiceImpl.prototype.fireSelectionChanged = function () {
        this.onSelectionChangedEmitter.fire(this.state.selection());
    };
    TreeSelectionServiceImpl.prototype.addSelection = function (selectionOrTreeNode) {
        var selection = (function (arg) {
            var type = tree_selection_1.TreeSelection.SelectionType.DEFAULT;
            if (tree_selection_1.TreeSelection.is(arg)) {
                return __assign({ type: type }, arg);
            }
            return {
                type: type,
                node: arg
            };
        })(selectionOrTreeNode);
        var node = this.validateNode(selection.node);
        if (node === undefined) {
            return;
        }
        Object.assign(selection, { node: node });
        var newState = this.state.nextState(selection);
        this.transiteTo(newState);
    };
    TreeSelectionServiceImpl.prototype.transiteTo = function (newState) {
        var oldNodes = this.state.selection();
        var newNodes = newState.selection();
        var toUnselect = this.difference(oldNodes, newNodes);
        var toSelect = this.difference(newNodes, oldNodes);
        this.unselect(toUnselect);
        this.select(toSelect);
        this.removeFocus(oldNodes, newNodes);
        this.addFocus(newState.focus);
        this.state = newState;
        this.fireSelectionChanged();
    };
    TreeSelectionServiceImpl.prototype.unselect = function (nodes) {
        nodes.forEach(function (node) { return node.selected = false; });
    };
    TreeSelectionServiceImpl.prototype.select = function (nodes) {
        nodes.forEach(function (node) { return node.selected = true; });
    };
    TreeSelectionServiceImpl.prototype.removeFocus = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        nodes.forEach(function (node) { return node.forEach(function (n) { return n.focus = false; }); });
    };
    TreeSelectionServiceImpl.prototype.addFocus = function (node) {
        if (node) {
            node.focus = true;
        }
    };
    /**
     * Returns an array of the difference of two arrays. The returned array contains all elements that are contained by
     * `left` and not contained by `right`. `right` may also contain elements not present in `left`: these are simply ignored.
     */
    TreeSelectionServiceImpl.prototype.difference = function (left, right) {
        return left.filter(function (item) { return right.indexOf(item) === -1; });
    };
    /**
     * Returns a reference to the argument if the node exists in the tree. Otherwise, `undefined`.
     */
    TreeSelectionServiceImpl.prototype.validateNode = function (node) {
        var result = this.tree.validateNode(node);
        return tree_selection_1.SelectableTreeNode.is(result) ? result : undefined;
    };
    TreeSelectionServiceImpl.prototype.storeState = function () {
        return {
            selectionStack: this.state.selectionStack.map(function (s) { return ({
                focus: s.focus && s.focus.id || undefined,
                node: s.node && s.node.id || undefined,
                type: s.type
            }); })
        };
    };
    TreeSelectionServiceImpl.prototype.restoreState = function (state) {
        var e_1, _a;
        var selectionStack = [];
        try {
            for (var _b = __values(state.selectionStack), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selection = _c.value;
                var node = selection.node && this.tree.getNode(selection.node) || undefined;
                if (!tree_selection_1.SelectableTreeNode.is(node)) {
                    break;
                }
                var focus_1 = selection.focus && this.tree.getNode(selection.focus) || undefined;
                selectionStack.push({
                    node: node,
                    focus: tree_selection_1.SelectableTreeNode.is(focus_1) && focus_1 || undefined,
                    type: selection.type
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (selectionStack.length) {
            this.transiteTo(new tree_selection_state_1.TreeSelectionState(this.tree, selectionStack));
        }
    };
    __decorate([
        inversify_1.inject(tree_1.Tree),
        __metadata("design:type", Object)
    ], TreeSelectionServiceImpl.prototype, "tree", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeSelectionServiceImpl.prototype, "init", null);
    TreeSelectionServiceImpl = __decorate([
        inversify_1.injectable()
    ], TreeSelectionServiceImpl);
    return TreeSelectionServiceImpl;
}());
exports.TreeSelectionServiceImpl = TreeSelectionServiceImpl;
//# sourceMappingURL=tree-selection-impl.js.map
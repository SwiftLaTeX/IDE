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
var chai_1 = require("chai");
var objects_1 = require("../../common/objects");
var mock_tree_model_1 = require("./test/mock-tree-model");
var tree_model_1 = require("./tree-model");
var tree_iterator_1 = require("./tree-iterator");
var tree_test_container_1 = require("./test/tree-test-container");
var tree_expansion_1 = require("./tree-expansion");
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
describe('tree-iterator', function () {
    var model = createTreeModel();
    var findNode = function (id) { return model.getNode(id); };
    beforeEach(function () {
        model.root = mock_tree_model_1.MockTreeModel.HIERARCHICAL_MOCK_ROOT();
    });
    it('should include root', function () {
        var expected = ['1'];
        var actual = __spread(new tree_iterator_1.BottomUpTreeIterator(findNode('1'))).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    it('should return `undefined` after consuming the iterator', function () {
        var itr = new tree_iterator_1.BottomUpTreeIterator(findNode('1'));
        var next = itr.next();
        while (!next.done) {
            chai_1.expect(next.value).to.be.not.undefined;
            next = itr.next();
        }
        chai_1.expect(next.done).to.be.true;
        chai_1.expect(next.value).to.be.undefined;
    });
    it('depth-first (no collapsed nodes)', function () {
        var expected = ['1', '1.1', '1.1.1', '1.1.2', '1.2', '1.2.1', '1.2.1.1', '1.2.1.2', '1.2.2', '1.2.3', '1.3'];
        var actual = __spread(new tree_iterator_1.DepthFirstTreeIterator(model.root)).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    it('depth-first (with collapsed nodes)', function () {
        collapseNode('1.1', '1.2.1');
        var expected = ['1', '1.1', '1.2', '1.2.1', '1.2.2', '1.2.3', '1.3'];
        var actual = __spread(new tree_iterator_1.DepthFirstTreeIterator(model.root, { pruneCollapsed: true })).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    it('breadth-first (no collapsed nodes)', function () {
        var expected = ['1', '1.1', '1.2', '1.3', '1.1.1', '1.1.2', '1.2.1', '1.2.2', '1.2.3', '1.2.1.1', '1.2.1.2'];
        var actual = __spread(new tree_iterator_1.BreadthFirstTreeIterator(model.root)).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    it('breadth-first (with collapsed nodes)', function () {
        collapseNode('1.1', '1.2.1');
        var expected = ['1', '1.1', '1.2', '1.3', '1.2.1', '1.2.2', '1.2.3'];
        var actual = __spread(new tree_iterator_1.BreadthFirstTreeIterator(model.root, { pruneCollapsed: true })).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    it('bottom-up (no collapsed nodes)', function () {
        var expected = ['1.2.2', '1.2.1.2', '1.2.1.1', '1.2.1', '1.2', '1.1.2', '1.1.1', '1.1', '1'];
        var actual = __spread(new tree_iterator_1.BottomUpTreeIterator(findNode('1.2.2'))).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    it('bottom-up (with collapsed nodes)', function () {
        collapseNode('1.1', '1.2.1');
        var expected = ['1.2.2', '1.2.1', '1.2', '1.1', '1'];
        var actual = __spread(new tree_iterator_1.BottomUpTreeIterator(findNode('1.2.2'), { pruneCollapsed: true })).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    it('top-down (no collapsed nodes)', function () {
        var expected = ['1.1.2', '1.2', '1.2.1', '1.2.1.1', '1.2.1.2', '1.2.2', '1.2.3', '1.3'];
        var actual = __spread(new tree_iterator_1.TopDownTreeIterator(findNode('1.1.2'))).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    it('top-down (with collapsed nodes)', function () {
        collapseNode('1.2.1');
        var expected = ['1.1.2', '1.2', '1.2.1', '1.2.2', '1.2.3', '1.3'];
        var actual = __spread(new tree_iterator_1.TopDownTreeIterator(findNode('1.1.2'), { pruneCollapsed: true })).map(function (node) { return node.id; });
        chai_1.expect(expected).to.be.deep.equal(actual);
    });
    function collapseNode() {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        ids.map(findNode).filter(objects_1.notEmpty).filter(tree_expansion_1.ExpandableTreeNode.is).forEach(function (node) {
            model.collapseNode(node);
            chai_1.expect(node).to.have.property('expanded', false);
        });
    }
    function createTreeModel() {
        return tree_test_container_1.createTreeTestContainer().get(tree_model_1.TreeModel);
    }
});
describe('iterators', function () {
    it('as-iterator', function () {
        var array = [1, 2, 3, 4];
        var itr = tree_iterator_1.Iterators.asIterator(array);
        var next = itr.next();
        while (!next.done) {
            var value = next.value;
            chai_1.expect(value).to.be.not.undefined;
            var index = array.indexOf(value);
            chai_1.expect(index).to.be.not.equal(-1);
            array.splice(index, 1);
            next = itr.next();
        }
        chai_1.expect(array).to.be.empty;
    });
    it('cycle - without start', function () {
        this.timeout(1000);
        var array = [1, 2, 3, 4];
        var itr = tree_iterator_1.Iterators.cycle(array);
        var visitedItems = new Set();
        var next = itr.next();
        while (!next.done) {
            var value = next.value;
            chai_1.expect(value).to.be.not.undefined;
            if (visitedItems.has(value)) {
                chai_1.expect(Array.from(visitedItems).sort()).to.be.deep.equal(array.sort());
                break;
            }
            visitedItems.add(value);
            next = itr.next();
        }
    });
    it('cycle - with start', function () {
        this.timeout(1000);
        var array = [1, 2, 3, 4];
        var itr = tree_iterator_1.Iterators.cycle(array, 2);
        var visitedItems = new Set();
        var next = itr.next();
        chai_1.expect(next.value).to.be.equal(2);
        while (!next.done) {
            var value = next.value;
            chai_1.expect(value).to.be.not.undefined;
            if (visitedItems.has(value)) {
                chai_1.expect(Array.from(visitedItems).sort()).to.be.deep.equal(array.sort());
                break;
            }
            visitedItems.add(value);
            next = itr.next();
        }
    });
});
//# sourceMappingURL=tree-iterator.spec.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var tree_1 = require("./tree");
var tree_model_1 = require("./tree-model");
var mock_tree_model_1 = require("./test/mock-tree-model");
var chai_1 = require("chai");
var tree_test_container_1 = require("./test/tree-test-container");
/* eslint-disable no-unused-expressions */
describe('Tree', function () {
    it('addChildren', function () {
        assertTreeNode("{\n  \"id\": \"parent\",\n  \"name\": \"parent\",\n  \"children\": [\n    {\n      \"id\": \"foo\",\n      \"name\": \"foo\",\n      \"parent\": \"parent\",\n      \"nextSibling\": \"bar\"\n    },\n    {\n      \"id\": \"bar\",\n      \"name\": \"bar\",\n      \"parent\": \"parent\",\n      \"previousSibling\": \"foo\",\n      \"nextSibling\": \"baz\"\n    },\n    {\n      \"id\": \"baz\",\n      \"name\": \"baz\",\n      \"parent\": \"parent\",\n      \"previousSibling\": \"bar\"\n    }\n  ]\n}", getNode());
    });
    it('removeChild - first', function () {
        var node = getNode();
        tree_1.CompositeTreeNode.removeChild(node, node.children[0]);
        assertTreeNode("{\n  \"id\": \"parent\",\n  \"name\": \"parent\",\n  \"children\": [\n    {\n      \"id\": \"bar\",\n      \"name\": \"bar\",\n      \"parent\": \"parent\",\n      \"nextSibling\": \"baz\"\n    },\n    {\n      \"id\": \"baz\",\n      \"name\": \"baz\",\n      \"parent\": \"parent\",\n      \"previousSibling\": \"bar\"\n    }\n  ]\n}", node);
    });
    it('removeChild - second', function () {
        var node = getNode();
        tree_1.CompositeTreeNode.removeChild(node, node.children[1]);
        assertTreeNode("{\n  \"id\": \"parent\",\n  \"name\": \"parent\",\n  \"children\": [\n    {\n      \"id\": \"foo\",\n      \"name\": \"foo\",\n      \"parent\": \"parent\",\n      \"nextSibling\": \"baz\"\n    },\n    {\n      \"id\": \"baz\",\n      \"name\": \"baz\",\n      \"parent\": \"parent\",\n      \"previousSibling\": \"foo\"\n    }\n  ]\n}", node);
    });
    it('removeChild - third', function () {
        var node = getNode();
        tree_1.CompositeTreeNode.removeChild(node, node.children[2]);
        assertTreeNode("{\n  \"id\": \"parent\",\n  \"name\": \"parent\",\n  \"children\": [\n    {\n      \"id\": \"foo\",\n      \"name\": \"foo\",\n      \"parent\": \"parent\",\n      \"nextSibling\": \"bar\"\n    },\n    {\n      \"id\": \"bar\",\n      \"name\": \"bar\",\n      \"parent\": \"parent\",\n      \"previousSibling\": \"foo\"\n    }\n  ]\n}", node);
    });
    var model;
    beforeEach(function () {
        model = createTreeModel();
        model.root = mock_tree_model_1.MockTreeModel.HIERARCHICAL_MOCK_ROOT();
    });
    describe('getNode', function () {
        it('returns undefined for undefined nodes', function (done) {
            chai_1.expect(model.getNode(undefined)).to.be.undefined;
            done();
        });
        it('returns undefined for a non-existing id', function (done) {
            chai_1.expect(model.getNode('10')).to.be.undefined;
            done();
        });
        it('returns a valid node for existing an id', function (done) {
            chai_1.expect(model.getNode('1.1')).not.to.be.undefined;
            done();
        });
    });
    describe('validateNode', function () {
        it('returns undefined for undefined nodes', function (done) {
            chai_1.expect(model.validateNode(undefined)).to.be.undefined;
            done();
        });
        it('returns undefined for non-existing nodes', function (done) {
            chai_1.expect(model.validateNode(mock_tree_model_1.MockTreeModel.Node.toTreeNode({ 'id': '10' }))).to.be.undefined;
            done();
        });
        it('returns a valid node for an existing node', function (done) {
            chai_1.expect(model.validateNode(retrieveNode('1.1'))).not.to.be.undefined;
            done();
        });
    });
    describe('refresh', function () {
        it('refreshes all composite nodes starting with the root', function (done) {
            var result = true;
            var expectedRefreshedNodes = new Set([
                retrieveNode('1'),
                retrieveNode('1.1'),
                retrieveNode('1.2'),
                retrieveNode('1.2.1')
            ]);
            model.onNodeRefreshed(function (e) {
                result = result && expectedRefreshedNodes.has(e);
                expectedRefreshedNodes.delete(e);
            });
            model.refresh().then(function () {
                chai_1.expect(result).to.be.true;
                chai_1.expect(expectedRefreshedNodes.size).to.be.equal(0);
                done();
            });
        });
    });
    describe('refresh(parent: Readonly<CompositeTreeNode>)', function () {
        it('refreshes all composite nodes starting with the provided node', function (done) {
            var result = true;
            var expectedRefreshedNodes = new Set([
                retrieveNode('1.2'),
                retrieveNode('1.2.1')
            ]);
            model.onNodeRefreshed(function (e) {
                result = result && expectedRefreshedNodes.has(e);
                expectedRefreshedNodes.delete(e);
            });
            model.refresh(retrieveNode('1.2')).then(function () {
                chai_1.expect(result).to.be.true;
                chai_1.expect(expectedRefreshedNodes.size).to.be.equal(0);
                done();
            });
        });
    });
    function getNode() {
        return tree_1.CompositeTreeNode.addChildren({
            id: 'parent',
            name: 'parent',
            children: [],
            parent: undefined
        }, [{
                id: 'foo',
                name: 'foo',
                parent: undefined
            }, {
                id: 'bar',
                name: 'bar',
                parent: undefined
            }, {
                id: 'baz',
                name: 'baz',
                parent: undefined
            }]);
    }
    function assertTreeNode(expectation, node) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.deepStrictEqual(expectation, JSON.stringify(node, function (key, value) {
            if (key === 'parent' || key === 'previousSibling' || key === 'nextSibling') {
                return value && value.id;
            }
            return value;
        }, 2));
    }
    function createTreeModel() {
        var container = tree_test_container_1.createTreeTestContainer();
        return container.get(tree_model_1.TreeModel);
    }
    function retrieveNode(id) {
        var readonlyNode = model.getNode(id);
        return readonlyNode;
    }
});
//# sourceMappingURL=tree.spec.js.map
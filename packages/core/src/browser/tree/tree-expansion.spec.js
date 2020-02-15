"use strict";
/********************************************************************************
 * Copyright (C) 2019 Thomas Drosdzoll.
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
var chai_1 = require("chai");
var mock_tree_model_1 = require("./test/mock-tree-model");
var tree_model_1 = require("./tree-model");
var tree_test_container_1 = require("./test/tree-test-container");
/* eslint-disable no-unused-expressions */
describe('TreeExpansionService', function () {
    var model;
    beforeEach(function () {
        model = createTreeModel();
        model.root = mock_tree_model_1.MockTreeModel.HIERARCHICAL_MOCK_ROOT();
    });
    describe('expandNode', function () {
        it("won't expand an already expanded node", function (done) {
            var node = retrieveNode('1');
            model.expandNode(node).then(function (result) {
                chai_1.expect(result).to.be.undefined;
                done();
            });
        });
        it('will expand a collapsed node', function (done) {
            var node = retrieveNode('1');
            model.collapseNode(node).then(function () {
                model.expandNode(node).then(function (result) {
                    chai_1.expect(result).to.be.eq(result);
                    done();
                });
            });
        });
        it("won't expand an undefined node", function (done) {
            model.expandNode(undefined).then(function (result) {
                chai_1.expect(result).to.be.undefined;
                done();
            });
        });
    });
    describe('collapseNode', function () {
        it('will collapse an expanded node', function (done) {
            var node = retrieveNode('1');
            model.collapseNode(node).then(function (result) {
                chai_1.expect(result).to.be.eq(result);
                done();
            });
        });
        it("won't collapse an already collapsed node", function (done) {
            var node = retrieveNode('1');
            model.collapseNode(node).then(function () {
                model.collapseNode(node).then(function (result) {
                    chai_1.expect(result).to.be.false;
                    done();
                });
            });
        });
        it('cannot collapse a leaf node', function (done) {
            var node = retrieveNode('1.1.2');
            model.collapseNode(node).then(function (result) {
                chai_1.expect(result).to.be.false;
                done();
            });
        });
    });
    describe('collapseAll', function () {
        it('will collapse all nodes recursively', function (done) {
            model.collapseAll(retrieveNode('1')).then(function (result) {
                chai_1.expect(result).to.be.eq(result);
                done();
            });
        });
        it("won't collapse nodes recursively if the root node is collapsed already", function (done) {
            model.collapseNode(retrieveNode('1')).then(function () {
                model.collapseAll(retrieveNode('1')).then(function (result) {
                    chai_1.expect(result).to.be.eq(result);
                    done();
                });
            });
        });
    });
    describe('toggleNodeExpansion', function () {
        it('changes the expansion state from expanded to collapsed', function (done) {
            var node = retrieveNode('1');
            model.onExpansionChanged(function (e) {
                chai_1.expect(e).to.be.equal(node);
                chai_1.expect(e.expanded).to.be.false;
            });
            model.toggleNodeExpansion(node).then(function () {
                done();
            });
        });
        it('changes the expansion state from collapsed to expanded', function (done) {
            var node = retrieveNode('1');
            model.collapseNode(node).then(function () {
            });
            model.onExpansionChanged(function (e) {
                chai_1.expect(e).to.be.equal(node);
                chai_1.expect(e.expanded).to.be.true;
            });
            model.toggleNodeExpansion(node).then(function () {
                done();
            });
        });
    });
    function createTreeModel() {
        var container = tree_test_container_1.createTreeTestContainer();
        return container.get(tree_model_1.TreeModel);
    }
    function retrieveNode(id) {
        var readonlyNode = model.getNode(id);
        return readonlyNode;
    }
});
//# sourceMappingURL=tree-expansion.spec.js.map
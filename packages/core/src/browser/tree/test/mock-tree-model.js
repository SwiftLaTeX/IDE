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
var MockTreeModel;
(function (MockTreeModel) {
    var Node;
    (function (Node) {
        function toTreeNode(root, parent) {
            var id = root.id;
            var name = id;
            var selected = false;
            var focus = false;
            var expanded = true;
            var node = {
                id: id,
                name: name,
                selected: selected,
                focus: focus,
                parent: parent,
                children: []
            };
            var children = (root.children || []).map(function (child) { return Node.toTreeNode(child, node); });
            if (children.length === 0) {
                return node;
            }
            else {
                node.children = children;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                node.expanded = expanded;
                return node;
            }
        }
        Node.toTreeNode = toTreeNode;
    })(Node = MockTreeModel.Node || (MockTreeModel.Node = {}));
    MockTreeModel.HIERARCHICAL_MOCK_ROOT = function () { return Node.toTreeNode({
        'id': '1',
        'children': [
            {
                'id': '1.1',
                'children': [
                    {
                        'id': '1.1.1'
                    },
                    {
                        'id': '1.1.2'
                    }
                ]
            },
            {
                'id': '1.2',
                'children': [
                    {
                        'id': '1.2.1',
                        'children': [
                            {
                                'id': '1.2.1.1'
                            },
                            {
                                'id': '1.2.1.2'
                            }
                        ]
                    },
                    {
                        'id': '1.2.2'
                    },
                    {
                        'id': '1.2.3'
                    }
                ]
            },
            {
                'id': '1.3'
            }
        ]
    }); };
    MockTreeModel.FLAT_MOCK_ROOT = function () { return Node.toTreeNode({
        'id': 'ROOT',
        'children': [
            {
                'id': '1'
            },
            {
                'id': '2'
            },
            {
                'id': '3'
            },
            {
                'id': '4'
            },
            {
                'id': '5'
            },
            {
                'id': '6'
            },
            {
                'id': '7'
            },
            {
                'id': '8'
            },
            {
                'id': '9'
            },
            {
                'id': '10'
            },
            {
                'id': '11'
            }
        ]
    }); };
})(MockTreeModel = exports.MockTreeModel || (exports.MockTreeModel = {}));
//# sourceMappingURL=mock-tree-model.js.map
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
import { MaybePromise } from '../../common/types';
import { TreeImpl, CompositeTreeNode, TreeNode, SelectableTreeNode, ExpandableTreeNode } from '../tree';
import { TreeElement, CompositeTreeElement, TreeSource } from './tree-source';
export declare class SourceTree extends TreeImpl {
    resolveChildren(parent: TreeElementNodeParent): Promise<TreeNode[]>;
    protected resolveElements(parent: TreeElementNodeParent): MaybePromise<IterableIterator<TreeElement>>;
    protected toNode(element: TreeElement, index: number, parent: TreeElementNodeParent): TreeElementNode;
}
export declare type TreeElementNodeParent = CompositeTreeElementNode | TreeSourceNode;
export interface TreeElementNode extends TreeNode, SelectableTreeNode {
    element: TreeElement;
    parent: TreeElementNodeParent;
}
export declare namespace TreeElementNode {
    function is(node: TreeNode | undefined): node is TreeElementNode;
}
export interface CompositeTreeElementNode extends TreeElementNode, CompositeTreeNode, ExpandableTreeNode {
    element: CompositeTreeElement;
    children: TreeElementNode[];
    parent: TreeElementNodeParent;
}
export declare namespace CompositeTreeElementNode {
    function is(node: TreeNode | undefined): node is CompositeTreeElementNode;
}
export interface TreeSourceNode extends CompositeTreeNode, SelectableTreeNode {
    visible: false;
    children: TreeElementNode[];
    parent: undefined;
    source: TreeSource;
}
export declare namespace TreeSourceNode {
    function is(node: TreeNode | undefined): node is TreeSourceNode;
    function to(source: undefined): undefined;
    function to(source: TreeSource): TreeSourceNode;
    function to(source: TreeSource | undefined): TreeSourceNode | undefined;
}
//# sourceMappingURL=source-tree.d.ts.map
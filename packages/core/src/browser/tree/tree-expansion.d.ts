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
import { Emitter, Event, Disposable } from '../../common';
import { CompositeTreeNode, TreeNode, Tree } from './tree';
export declare const TreeExpansionService: unique symbol;
/**
 * The tree expandable service.
 */
export interface TreeExpansionService extends Disposable {
    /**
     * Emit when the node is expanded or collapsed.
     */
    readonly onExpansionChanged: Event<Readonly<ExpandableTreeNode>>;
    /**
     * Expand a node for the given node id if it is valid and collapsed.
     * Expanding a node refreshes all its children.
     *
     * Return a valid expanded refreshed node or `undefined` if such does not exist.
     */
    expandNode(node: Readonly<ExpandableTreeNode>): Promise<Readonly<ExpandableTreeNode> | undefined>;
    /**
     * If the given node is valid and expanded then collapse it.
     *
     * Return true if a node has been collapsed; otherwise false.
     */
    collapseNode(node: Readonly<ExpandableTreeNode>): Promise<boolean>;
    /**
     * If the given node is valid then collapse it recursively.
     *
     * Return true if a node has been collapsed; otherwise false.
     */
    collapseAll(node: Readonly<CompositeTreeNode>): Promise<boolean>;
    /**
     * If the given node is invalid then does nothing.
     * If the given node is collapsed then expand it; otherwise collapse it.
     */
    toggleNodeExpansion(node: Readonly<ExpandableTreeNode>): Promise<void>;
}
/**
 * The expandable tree node.
 */
export interface ExpandableTreeNode extends CompositeTreeNode {
    /**
     * Test whether this tree node is expanded.
     */
    expanded: boolean;
}
export declare namespace ExpandableTreeNode {
    function is(node: Object | undefined): node is ExpandableTreeNode;
    function isExpanded(node: Object | undefined): node is ExpandableTreeNode;
    function isCollapsed(node: Object | undefined): node is ExpandableTreeNode;
}
export declare class TreeExpansionServiceImpl implements TreeExpansionService {
    protected readonly tree: Tree;
    protected readonly onExpansionChangedEmitter: Emitter<ExpandableTreeNode>;
    protected init(): void;
    dispose(): void;
    get onExpansionChanged(): Event<ExpandableTreeNode>;
    protected fireExpansionChanged(node: ExpandableTreeNode): void;
    expandNode(raw: ExpandableTreeNode): Promise<ExpandableTreeNode | undefined>;
    protected doExpandNode(node: ExpandableTreeNode): Promise<ExpandableTreeNode | undefined>;
    collapseNode(raw: ExpandableTreeNode): Promise<boolean>;
    collapseAll(raw: CompositeTreeNode): Promise<boolean>;
    protected doCollapseAll(node: TreeNode | undefined): boolean;
    protected doCollapseNode(node: TreeNode | undefined): boolean;
    toggleNodeExpansion(node: ExpandableTreeNode): Promise<void>;
}
//# sourceMappingURL=tree-expansion.d.ts.map
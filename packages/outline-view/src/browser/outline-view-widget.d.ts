/********************************************************************************
 * Copyright (C) 2017-2018 TypeFox and others.
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
import { TreeWidget, TreeNode, NodeProps, SelectableTreeNode, TreeProps, ContextMenuRenderer, TreeModel, ExpandableTreeNode } from '@theia/core/lib/browser';
import { OutlineViewTreeModel } from './outline-view-tree';
import { Message } from '@phosphor/messaging';
import { Emitter } from '@theia/core';
import { CompositeTreeNode } from '@theia/core/lib/browser';
import * as React from 'react';
/**
 * Representation of an outline symbol information node.
 */
export interface OutlineSymbolInformationNode extends CompositeTreeNode, SelectableTreeNode, ExpandableTreeNode {
    /**
     * The `iconClass` for the given tree node.
     */
    iconClass: string;
}
/**
 * Collection of outline symbol information node functions.
 */
export declare namespace OutlineSymbolInformationNode {
    /**
     * Determine if the given tree node is an `OutlineSymbolInformationNode`.
     * - The tree node is an `OutlineSymbolInformationNode` if:
     *  - The node exists.
     *  - The node is selectable.
     *  - The node contains a defined `iconClass` property.
     * @param node the tree node.
     *
     * @returns `true` if the given node is an `OutlineSymbolInformationNode`.
     */
    function is(node: TreeNode): node is OutlineSymbolInformationNode;
}
export declare type OutlineViewWidgetFactory = () => OutlineViewWidget;
export declare const OutlineViewWidgetFactory: unique symbol;
export declare class OutlineViewWidget extends TreeWidget {
    protected readonly treeProps: TreeProps;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    readonly onDidChangeOpenStateEmitter: Emitter<boolean>;
    constructor(treeProps: TreeProps, model: OutlineViewTreeModel, contextMenuRenderer: ContextMenuRenderer);
    /**
     * Set the outline tree with the list of `OutlineSymbolInformationNode`.
     * @param roots the list of `OutlineSymbolInformationNode`.
     */
    setOutlineTree(roots: OutlineSymbolInformationNode[]): void;
    /**
     * Reconcile the outline tree state, gathering all available nodes.
     * @param nodes the list of `TreeNode`.
     *
     * @returns the list of tree nodes.
     */
    protected reconcileTreeState(nodes: TreeNode[]): TreeNode[];
    protected onAfterHide(msg: Message): void;
    protected onAfterShow(msg: Message): void;
    renderIcon(node: TreeNode, props: NodeProps): React.ReactNode;
    protected createNodeAttributes(node: TreeNode, props: NodeProps): React.Attributes & React.HTMLAttributes<HTMLElement>;
    /**
     * Get the tooltip for the given tree node.
     * - The tooltip is discovered when hovering over a tree node.
     * - If available, the tooltip is the concatenation of the node name, and it's type.
     * @param node the tree node.
     *
     * @returns the tooltip for the tree node if available, else `undefined`.
     */
    protected getNodeTooltip(node: TreeNode): string | undefined;
    protected isExpandable(node: TreeNode): node is ExpandableTreeNode;
    protected renderTree(model: TreeModel): React.ReactNode;
}
//# sourceMappingURL=outline-view-widget.d.ts.map
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
import { TreeNode } from './tree';
import { Event, Disposable, SelectionProvider } from '../../common';
/**
 * The tree selection service.
 */
export declare const TreeSelectionService: unique symbol;
export interface TreeSelectionService extends Disposable, SelectionProvider<ReadonlyArray<Readonly<SelectableTreeNode>>> {
    /**
     * The tree selection, representing the selected nodes from the tree. If nothing is selected, the
     * result will be empty.
     */
    readonly selectedNodes: ReadonlyArray<Readonly<SelectableTreeNode>>;
    /**
     * Emitted when the selection has changed in the tree.
     */
    readonly onSelectionChanged: Event<ReadonlyArray<Readonly<SelectableTreeNode>>>;
    /**
     * Registers the given selection into the tree selection service. If the selection state changes after adding the
     * `selectionOrTreeNode` argument, a selection changed event will be fired. If the argument is a tree node,
     * a it will be treated as a tree selection with the default selection type.
     */
    addSelection(selectionOrTreeNode: TreeSelection | Readonly<SelectableTreeNode>): void;
    /**
     * Store selection state.
     */
    storeState(): object;
    /**
     * Restore selection state.
     */
    restoreState(state: object): void;
}
/**
 * Representation of a tree selection.
 */
export interface TreeSelection {
    /**
     * The actual item that has been selected.
     */
    readonly node: Readonly<SelectableTreeNode>;
    /**
     * The optional tree selection type. Defaults to `SelectionType.DEFAULT`;
     */
    readonly type?: TreeSelection.SelectionType;
}
export declare namespace TreeSelection {
    /**
     * Enumeration of selection types.
     */
    enum SelectionType {
        DEFAULT = 0,
        TOGGLE = 1,
        RANGE = 2
    }
    function is(arg: Object | undefined): arg is TreeSelection;
    function isRange(arg: TreeSelection | SelectionType | undefined): boolean;
    function isToggle(arg: TreeSelection | SelectionType | undefined): boolean;
}
/**
 * A selectable tree node.
 */
export interface SelectableTreeNode extends TreeNode {
    /**
     * `true` if the tree node is selected. Otherwise, `false`.
     */
    selected: boolean;
    /**
     * `true` if the tree node has the focus. Otherwise, `false`. Defaults to `false`.
     */
    focus?: boolean;
}
export declare namespace SelectableTreeNode {
    function is(node: TreeNode | undefined): node is SelectableTreeNode;
    function isSelected(node: TreeNode | undefined): node is SelectableTreeNode;
    function hasFocus(node: TreeNode | undefined): boolean;
    function isVisible(node: TreeNode | undefined): node is SelectableTreeNode;
    function getVisibleParent(node: TreeNode | undefined): SelectableTreeNode | undefined;
}
//# sourceMappingURL=tree-selection.d.ts.map
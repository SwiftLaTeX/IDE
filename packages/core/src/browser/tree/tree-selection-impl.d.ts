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
import { Tree, TreeNode } from './tree';
import { Event, Emitter } from '../../common';
import { TreeSelectionState } from './tree-selection-state';
import { TreeSelectionService, SelectableTreeNode, TreeSelection } from './tree-selection';
export declare class TreeSelectionServiceImpl implements TreeSelectionService {
    protected readonly tree: Tree;
    protected readonly onSelectionChangedEmitter: Emitter<readonly Readonly<SelectableTreeNode>[]>;
    protected state: TreeSelectionState;
    protected init(): void;
    dispose(): void;
    get selectedNodes(): ReadonlyArray<Readonly<SelectableTreeNode>>;
    get onSelectionChanged(): Event<ReadonlyArray<Readonly<SelectableTreeNode>>>;
    protected fireSelectionChanged(): void;
    addSelection(selectionOrTreeNode: TreeSelection | Readonly<SelectableTreeNode>): void;
    protected transiteTo(newState: TreeSelectionState): void;
    protected unselect(nodes: ReadonlyArray<SelectableTreeNode>): void;
    protected select(nodes: ReadonlyArray<SelectableTreeNode>): void;
    protected removeFocus(...nodes: ReadonlyArray<SelectableTreeNode>[]): void;
    protected addFocus(node: SelectableTreeNode | undefined): void;
    /**
     * Returns an array of the difference of two arrays. The returned array contains all elements that are contained by
     * `left` and not contained by `right`. `right` may also contain elements not present in `left`: these are simply ignored.
     */
    protected difference<T>(left: ReadonlyArray<T>, right: ReadonlyArray<T>): ReadonlyArray<T>;
    /**
     * Returns a reference to the argument if the node exists in the tree. Otherwise, `undefined`.
     */
    protected validateNode(node: Readonly<TreeNode>): Readonly<TreeNode> | undefined;
    storeState(): TreeSelectionServiceImpl.State;
    restoreState(state: TreeSelectionServiceImpl.State): void;
}
export declare namespace TreeSelectionServiceImpl {
    interface State {
        selectionStack: ReadonlyArray<FocusableTreeSelectionState>;
    }
    interface FocusableTreeSelectionState {
        focus?: string;
        node?: string;
        type?: TreeSelection.SelectionType;
    }
}
//# sourceMappingURL=tree-selection-impl.d.ts.map
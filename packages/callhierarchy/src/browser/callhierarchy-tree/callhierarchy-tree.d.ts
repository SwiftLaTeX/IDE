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
import { TreeNode, CompositeTreeNode, SelectableTreeNode, ExpandableTreeNode, TreeImpl } from '@theia/core/lib/browser';
import { Definition, Caller } from '../callhierarchy';
import { CallHierarchyService } from '../callhierarchy-service';
export declare class CallHierarchyTree extends TreeImpl {
    protected _callHierarchyService: CallHierarchyService | undefined;
    set callHierarchyService(callHierarchyService: CallHierarchyService | undefined);
    get callHierarchyService(): CallHierarchyService | undefined;
    resolveChildren(parent: CompositeTreeNode): Promise<TreeNode[]>;
    protected toNodes(callers: Caller[], parent: CompositeTreeNode): TreeNode[];
    protected toNode(caller: Caller, parent: CompositeTreeNode | undefined): TreeNode;
}
export interface DefinitionNode extends SelectableTreeNode, ExpandableTreeNode {
    definition: Definition;
}
export declare namespace DefinitionNode {
    function is(node: TreeNode | undefined): node is DefinitionNode;
    function create(definition: Definition, parent: TreeNode | undefined): DefinitionNode;
}
export interface CallerNode extends SelectableTreeNode, ExpandableTreeNode {
    caller: Caller;
}
export declare namespace CallerNode {
    function is(node: TreeNode | undefined): node is CallerNode;
    function create(caller: Caller, parent: TreeNode | undefined): CallerNode;
}
//# sourceMappingURL=callhierarchy-tree.d.ts.map
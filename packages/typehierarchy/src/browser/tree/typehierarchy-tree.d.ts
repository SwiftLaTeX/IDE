/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { Location } from '@theia/editor/lib/browser/editor';
import { DecoratedTreeNode } from '@theia/core/lib/browser/tree/tree-decorator';
import { TreeImpl, TreeNode, CompositeTreeNode, ExpandableTreeNode, SelectableTreeNode } from '@theia/core/lib/browser/tree';
import { TypeHierarchyItem } from '@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol';
import { TypeHierarchyDirection } from '@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol';
import { TypeHierarchyService } from '../typehierarchy-service';
export declare class TypeHierarchyTree extends TreeImpl {
    service: TypeHierarchyService | undefined;
    resolveChildren(parent: CompositeTreeNode): Promise<TreeNode[]>;
    /**
     * Returns with the direction of the type hierarchy attached to the root node. `undefined` if the root is not set.
     */
    protected get direction(): TypeHierarchyDirection | undefined;
    /**
     * Makes sure, the node and its children are resolved. Resolves it on demand.
     */
    protected ensureResolved(node: TypeHierarchyTree.Node): Promise<void>;
}
export declare namespace TypeHierarchyTree {
    interface InitOptions {
        readonly direction: TypeHierarchyDirection;
        readonly location: Location | undefined;
        readonly languageId: string | undefined;
    }
    interface RootNode extends Node {
        readonly direction: TypeHierarchyDirection;
    }
    namespace RootNode {
        function is(node: TreeNode | undefined): node is RootNode;
        function create(item: TypeHierarchyItem, direction: TypeHierarchyDirection): RootNode;
    }
    interface Node extends CompositeTreeNode, ExpandableTreeNode, SelectableTreeNode, DecoratedTreeNode {
        readonly item: TypeHierarchyItem;
        resolved: boolean;
    }
    namespace Node {
        function is(node: TreeNode | undefined): node is Node;
        function create(item: TypeHierarchyItem, direction: TypeHierarchyDirection, resolved?: boolean): Node;
    }
}
//# sourceMappingURL=typehierarchy-tree.d.ts.map
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
import { TreeNode } from '@theia/core/lib/browser/tree/tree';
import { TreeModelImpl } from '@theia/core/lib/browser/tree/tree-model';
import { TypeHierarchyServiceProvider } from '../typehierarchy-service';
import { TypeHierarchyTree } from './typehierarchy-tree';
export declare class TypeHierarchyTreeModel extends TreeModelImpl {
    protected readonly typeHierarchyServiceProvider: TypeHierarchyServiceProvider;
    protected doOpenNode(node: TreeNode): void;
    /**
     * Initializes the tree by calculating and setting a new tree root node.
     */
    initialize(options: TypeHierarchyTree.InitOptions): Promise<void>;
    /**
     * If the tree root is set, it resets it with the inverse type hierarchy direction.
     */
    flipDirection(): Promise<void>;
}
//# sourceMappingURL=typehierarchy-tree-model.d.ts.map
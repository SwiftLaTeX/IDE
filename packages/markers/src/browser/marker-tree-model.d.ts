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
import { MarkerNode } from './marker-tree';
import { TreeModelImpl, OpenerService, TreeNode, OpenerOptions } from '@theia/core/lib/browser';
export declare class MarkerTreeModel extends TreeModelImpl {
    protected readonly openerService: OpenerService;
    protected doOpenNode(node: TreeNode): void;
    protected getOpenerOptionsByMarker(node: MarkerNode): OpenerOptions | undefined;
    /**
     * Reveal the corresponding node at the marker.
     * @param node {TreeNode} the tree node.
     */
    revealNode(node: TreeNode): void;
}
//# sourceMappingURL=marker-tree-model.d.ts.map
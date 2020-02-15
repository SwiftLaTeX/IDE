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
import { FileTree, DirNode } from '@theia/filesystem/lib/browser';
import { FileStat } from '@theia/filesystem/lib/common';
import URI from '@theia/core/lib/common/uri';
import { TreeNode, CompositeTreeNode, SelectableTreeNode } from '@theia/core/lib/browser';
import { FileNavigatorFilter } from './navigator-filter';
export declare class FileNavigatorTree extends FileTree {
    protected readonly filter: FileNavigatorFilter;
    protected init(): void;
    resolveChildren(parent: CompositeTreeNode): Promise<TreeNode[]>;
    protected toNodeId(uri: URI, parent: CompositeTreeNode): string;
    createId(root: WorkspaceRootNode, uri: URI): string;
    createWorkspaceRoot(rootFolder: FileStat, workspaceNode: WorkspaceNode): Promise<WorkspaceRootNode>;
}
export interface WorkspaceNode extends CompositeTreeNode, SelectableTreeNode {
    children: WorkspaceRootNode[];
}
export declare namespace WorkspaceNode {
    const id = "WorkspaceNodeId";
    const name = "WorkspaceNode";
    function is(node: TreeNode | undefined): node is WorkspaceNode;
    function createRoot(multiRootName?: string): WorkspaceNode;
}
export interface WorkspaceRootNode extends DirNode {
    parent: WorkspaceNode;
}
export declare namespace WorkspaceRootNode {
    function is(node: Object | undefined): node is WorkspaceRootNode;
    function find(node: TreeNode | undefined): WorkspaceRootNode | undefined;
}
//# sourceMappingURL=navigator-tree.d.ts.map
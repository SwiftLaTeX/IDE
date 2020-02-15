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
import URI from '@theia/core/lib/common/uri';
import { TreeNode, CompositeTreeNode, SelectableTreeNode, ExpandableTreeNode, TreeImpl } from '@theia/core/lib/browser';
import { FileSystem, FileStat } from '../../common';
import { UriSelection } from '@theia/core/lib/common/selection';
import { FileSelection } from '../file-selection';
export declare class FileTree extends TreeImpl {
    protected readonly fileSystem: FileSystem;
    resolveChildren(parent: CompositeTreeNode): Promise<TreeNode[]>;
    protected resolveFileStat(node: FileStatNode): Promise<FileStat | undefined>;
    protected toNodes(fileStat: FileStat, parent: CompositeTreeNode): Promise<TreeNode[]>;
    protected toNode(fileStat: FileStat, parent: CompositeTreeNode): FileNode | DirNode;
    protected toNodeId(uri: URI, parent: CompositeTreeNode): string;
}
export interface FileStatNode extends SelectableTreeNode, UriSelection, FileSelection {
}
export declare namespace FileStatNode {
    function is(node: object | undefined): node is FileStatNode;
    function getUri(node: TreeNode | undefined): string | undefined;
}
export declare type FileNode = FileStatNode;
export declare namespace FileNode {
    function is(node: Object | undefined): node is FileNode;
}
export declare type DirNode = FileStatNode & ExpandableTreeNode;
export declare namespace DirNode {
    function is(node: Object | undefined): node is DirNode;
    function compare(node: TreeNode, node2: TreeNode): number;
    function uriCompare(node: TreeNode, node2: TreeNode): number;
    function dirCompare(node: TreeNode, node2: TreeNode): number;
    function createRoot(fileStat: FileStat): DirNode;
    function getContainingDir(node: TreeNode | undefined): DirNode | undefined;
}
//# sourceMappingURL=file-tree.d.ts.map
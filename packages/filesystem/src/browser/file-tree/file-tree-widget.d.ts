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
import * as React from 'react';
import { DisposableCollection } from '@theia/core/lib/common';
import { ContextMenuRenderer, NodeProps, TreeProps, TreeNode, TreeWidget } from '@theia/core/lib/browser';
import { FileUploadService } from '../file-upload-service';
import { DirNode } from './file-tree';
import { FileTreeModel } from './file-tree-model';
import { IconThemeService } from '@theia/core/lib/browser/icon-theme-service';
export declare const FILE_TREE_CLASS = "theia-FileTree";
export declare const FILE_STAT_NODE_CLASS = "theia-FileStatNode";
export declare const DIR_NODE_CLASS = "theia-DirNode";
export declare const FILE_STAT_ICON_CLASS = "theia-FileStatIcon";
export declare class FileTreeWidget extends TreeWidget {
    readonly props: TreeProps;
    readonly model: FileTreeModel;
    protected readonly toCancelNodeExpansion: DisposableCollection;
    protected readonly uploadService: FileUploadService;
    protected readonly iconThemeService: IconThemeService;
    constructor(props: TreeProps, model: FileTreeModel, contextMenuRenderer: ContextMenuRenderer);
    protected createNodeClassNames(node: TreeNode, props: NodeProps): string[];
    protected renderIcon(node: TreeNode, props: NodeProps): React.ReactNode;
    protected createContainerAttributes(): React.HTMLAttributes<HTMLElement>;
    protected createNodeAttributes(node: TreeNode, props: NodeProps): React.Attributes & React.HTMLAttributes<HTMLElement>;
    protected getNodeTooltip(node: TreeNode): string | undefined;
    protected handleDragStartEvent(node: TreeNode, event: React.DragEvent): void;
    protected handleDragEnterEvent(node: TreeNode | undefined, event: React.DragEvent): void;
    protected handleDragOverEvent(node: TreeNode | undefined, event: React.DragEvent): void;
    protected handleDragLeaveEvent(node: TreeNode | undefined, event: React.DragEvent): void;
    protected handleDropEvent(node: TreeNode | undefined, event: React.DragEvent): Promise<void>;
    protected getDropTargetDirNode(node: TreeNode | undefined): DirNode | undefined;
    protected setTreeNodeAsData(data: DataTransfer, node: TreeNode): void;
    protected setSelectedTreeNodesAsData(data: DataTransfer, sourceNode: TreeNode, relatedNodes: TreeNode[]): void;
    protected getTreeNodeFromData(data: DataTransfer): TreeNode | undefined;
    protected getSelectedTreeNodesFromData(data: DataTransfer): TreeNode[];
    protected get hidesExplorerArrows(): boolean;
    protected renderExpansionToggle(node: TreeNode, props: NodeProps): React.ReactNode;
    protected getPaddingLeft(node: TreeNode, props: NodeProps): number;
    protected needsExpansionTogglePadding(node: TreeNode): boolean;
}
//# sourceMappingURL=file-tree-widget.d.ts.map
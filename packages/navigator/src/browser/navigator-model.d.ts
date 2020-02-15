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
import { FileTreeModel } from '@theia/filesystem/lib/browser';
import { OpenerService, TreeNode } from '@theia/core/lib/browser';
import { FileNavigatorTree, WorkspaceNode } from './navigator-tree';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
export declare class FileNavigatorModel extends FileTreeModel {
    protected readonly openerService: OpenerService;
    protected readonly tree: FileNavigatorTree;
    protected readonly workspaceService: WorkspaceService;
    protected readonly applicationState: FrontendApplicationStateService;
    protected init(): void;
    protected initializeRoot(): Promise<void>;
    previewNode(node: TreeNode): void;
    protected doOpenNode(node: TreeNode): void;
    getNodesByUri(uri: URI): IterableIterator<TreeNode>;
    protected updateRoot(): Promise<void>;
    protected createRoot(): Promise<TreeNode | undefined>;
    /**
     * Create multiple root node used to display
     * the multiple root workspace name.
     *
     * @returns `WorkspaceNode`
     */
    protected createMultipleRootNode(): WorkspaceNode;
    /**
     * Move the given source file or directory to the given target directory.
     */
    move(source: TreeNode, target: TreeNode): Promise<void>;
    /**
     * Reveals node in the navigator by given file uri.
     *
     * @param uri uri to file which should be revealed in the navigator
     * @returns file tree node if the file with given uri was revealed, undefined otherwise
     */
    revealFile(uri: URI): Promise<TreeNode | undefined>;
    protected getNodeClosestToRootByUri(uri: URI): TreeNode | undefined;
}
//# sourceMappingURL=navigator-model.d.ts.map
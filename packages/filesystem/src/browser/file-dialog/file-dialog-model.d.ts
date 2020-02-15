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
import { Emitter, Event } from '@theia/core/lib/common';
import { TreeNode, SelectableTreeNode } from '@theia/core/lib/browser';
import { FileTreeModel } from '../file-tree';
import { FileDialogTree } from './file-dialog-tree';
export declare class FileDialogModel extends FileTreeModel {
    readonly tree: FileDialogTree;
    protected readonly onDidOpenFileEmitter: Emitter<void>;
    protected _initialLocation: URI | undefined;
    private _disableFileSelection;
    protected init(): void;
    /**
     * Returns the first valid location that was set by calling the `navigateTo` method. Once the initial location has a defined value, it will not change.
     * Can be `undefined`.
     */
    get initialLocation(): URI | undefined;
    set disableFileSelection(isSelectable: boolean);
    navigateTo(nodeOrId: TreeNode | string | undefined): Promise<TreeNode | undefined>;
    get onDidOpenFile(): Event<void>;
    protected doOpenNode(node: TreeNode): void;
    getNextSelectableNode(node?: SelectableTreeNode): SelectableTreeNode | undefined;
    getPrevSelectableNode(node?: SelectableTreeNode): SelectableTreeNode | undefined;
    private isFileStatNodeSelectable;
}
//# sourceMappingURL=file-dialog-model.d.ts.map
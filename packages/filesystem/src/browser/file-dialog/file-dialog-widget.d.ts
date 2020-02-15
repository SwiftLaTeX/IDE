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
/// <reference types="react" />
import { ContextMenuRenderer, NodeProps, TreeProps, TreeNode } from '@theia/core/lib/browser';
import { FileTreeWidget } from '../file-tree';
import { FileDialogModel } from './file-dialog-model';
export declare const FILE_DIALOG_CLASS = "theia-FileDialog";
export declare const NOT_SELECTABLE_CLASS = "theia-mod-not-selectable";
export declare class FileDialogWidget extends FileTreeWidget {
    readonly props: TreeProps;
    readonly model: FileDialogModel;
    private _disableFileSelection;
    constructor(props: TreeProps, model: FileDialogModel, contextMenuRenderer: ContextMenuRenderer);
    set disableFileSelection(isSelectable: boolean);
    protected createNodeAttributes(node: TreeNode, props: NodeProps): React.Attributes & React.HTMLAttributes<HTMLElement>;
    protected createNodeClassNames(node: TreeNode, props: NodeProps): string[];
    protected shouldDisableSelection(node: TreeNode): boolean;
}
//# sourceMappingURL=file-dialog-widget.d.ts.map
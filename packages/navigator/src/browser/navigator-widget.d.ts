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
import { Message } from '@phosphor/messaging';
import { CommandService, SelectionService } from '@theia/core/lib/common';
import { CorePreferences, ViewContainerTitleOptions } from '@theia/core/lib/browser';
import { ContextMenuRenderer, TreeProps, TreeModel, TreeNode } from '@theia/core/lib/browser';
import { FileTreeWidget } from '@theia/filesystem/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { ApplicationShell } from '@theia/core/lib/browser/shell/application-shell';
import { FileNavigatorModel } from './navigator-model';
import { FileSystem } from '@theia/filesystem/lib/common/filesystem';
import * as React from 'react';
import { NavigatorContextKeyService } from './navigator-context-key-service';
export declare const FILE_NAVIGATOR_ID = "files";
export declare const EXPLORER_VIEW_CONTAINER_ID = "explorer-view-container";
export declare const EXPLORER_VIEW_CONTAINER_TITLE_OPTIONS: ViewContainerTitleOptions;
export declare const LABEL = "No folder opened";
export declare const CLASS = "theia-Files";
export declare class FileNavigatorWidget extends FileTreeWidget {
    readonly props: TreeProps;
    readonly model: FileNavigatorModel;
    protected readonly commandService: CommandService;
    protected readonly selectionService: SelectionService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly shell: ApplicationShell;
    protected readonly fileSystem: FileSystem;
    protected readonly corePreferences: CorePreferences;
    protected readonly contextKeyService: NavigatorContextKeyService;
    constructor(props: TreeProps, model: FileNavigatorModel, contextMenuRenderer: ContextMenuRenderer, commandService: CommandService, selectionService: SelectionService, workspaceService: WorkspaceService, shell: ApplicationShell, fileSystem: FileSystem);
    protected init(): void;
    protected doUpdateRows(): void;
    protected enableDndOnMainPanel(): void;
    protected getContainerTreeNode(): TreeNode | undefined;
    protected deflateForStorage(node: TreeNode): object;
    protected inflateFromStorage(node: any, parent?: TreeNode): TreeNode;
    protected renderTree(model: TreeModel): React.ReactNode;
    protected onAfterAttach(msg: Message): void;
    protected handleCopy(event: ClipboardEvent): void;
    protected handlePaste(event: ClipboardEvent): void;
    protected canOpenWorkspaceFileAndFolder: boolean;
    protected readonly openWorkspace: () => void;
    protected doOpenWorkspace(): void;
    protected readonly openFolder: () => void;
    protected doOpenFolder(): void;
    protected readonly keyUpHandler: (e: React.KeyboardEvent<Element>) => void;
    /**
     * Instead of rendering the file resources from the workspace, we render a placeholder
     * button when the workspace root is not yet set.
     */
    protected renderOpenWorkspaceDiv(): React.ReactNode;
    protected handleClickEvent(node: TreeNode | undefined, event: React.MouseEvent<HTMLElement>): void;
    protected onAfterShow(msg: Message): void;
    protected onAfterHide(msg: Message): void;
    protected updateSelectionContextKeys(): void;
}
//# sourceMappingURL=navigator-widget.d.ts.map
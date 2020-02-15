/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { TreeWidget, CompositeTreeNode, ContextMenuRenderer, ExpandableTreeNode, SelectableTreeNode, TreeModel, TreeNode, NodeProps, TreeProps, TreeExpansionService, ApplicationShell } from '@theia/core/lib/browser';
import { CancellationTokenSource, Emitter, Event } from '@theia/core';
import { EditorManager, EditorDecoration, EditorWidget } from '@theia/editor/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { FileResourceResolver } from '@theia/filesystem/lib/browser';
import { SearchInWorkspaceResult, SearchInWorkspaceOptions, SearchMatch } from '../common/search-in-workspace-interface';
import { SearchInWorkspaceService } from './search-in-workspace-service';
import URI from '@theia/core/lib/common/uri';
import * as React from 'react';
import { SearchInWorkspacePreferences } from './search-in-workspace-preferences';
import { ProgressService } from '@theia/core';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
export interface SearchInWorkspaceRoot extends CompositeTreeNode {
    children: SearchInWorkspaceRootFolderNode[];
}
export declare namespace SearchInWorkspaceRoot {
    function is(node: any): node is SearchInWorkspaceRoot;
}
export interface SearchInWorkspaceRootFolderNode extends ExpandableTreeNode, SelectableTreeNode {
    name?: undefined;
    icon?: undefined;
    children: SearchInWorkspaceFileNode[];
    parent: SearchInWorkspaceRoot;
    path: string;
    folderUri: string;
}
export declare namespace SearchInWorkspaceRootFolderNode {
    function is(node: any): node is SearchInWorkspaceRootFolderNode;
}
export interface SearchInWorkspaceFileNode extends ExpandableTreeNode, SelectableTreeNode {
    name?: undefined;
    icon?: undefined;
    children: SearchInWorkspaceResultLineNode[];
    parent: SearchInWorkspaceRootFolderNode;
    path: string;
    fileUri: string;
}
export declare namespace SearchInWorkspaceFileNode {
    function is(node: any): node is SearchInWorkspaceFileNode;
}
export interface SearchInWorkspaceResultLineNode extends SelectableTreeNode, SearchInWorkspaceResult, SearchMatch {
    parent: SearchInWorkspaceFileNode;
}
export declare namespace SearchInWorkspaceResultLineNode {
    function is(node: any): node is SearchInWorkspaceResultLineNode;
}
export declare class SearchInWorkspaceResultTreeWidget extends TreeWidget {
    readonly props: TreeProps;
    readonly model: TreeModel;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    protected resultTree: Map<string, SearchInWorkspaceRootFolderNode>;
    protected _showReplaceButtons: boolean;
    protected _replaceTerm: string;
    protected searchTerm: string;
    protected appliedDecorations: Map<string, string[]>;
    cancelIndicator?: CancellationTokenSource;
    protected changeEmitter: Emitter<Map<string, SearchInWorkspaceRootFolderNode>>;
    protected focusInputEmitter: Emitter<any>;
    protected readonly searchService: SearchInWorkspaceService;
    protected readonly editorManager: EditorManager;
    protected readonly fileResourceResolver: FileResourceResolver;
    protected readonly shell: ApplicationShell;
    protected readonly workspaceService: WorkspaceService;
    protected readonly expansionService: TreeExpansionService;
    protected readonly searchInWorkspacePreferences: SearchInWorkspacePreferences;
    protected readonly progressService: ProgressService;
    protected readonly colorRegistry: ColorRegistry;
    constructor(props: TreeProps, model: TreeModel, contextMenuRenderer: ContextMenuRenderer);
    protected init(): void;
    get fileNumber(): number;
    set showReplaceButtons(srb: boolean);
    set replaceTerm(rt: string);
    get onChange(): Event<Map<string, SearchInWorkspaceRootFolderNode>>;
    get onFocusInput(): Event<void>;
    collapseAll(): void;
    search(searchTerm: string, searchOptions: SearchInWorkspaceOptions): Promise<void>;
    focusFirstResult(): void;
    /**
     * Collapse the search-in-workspace file node
     * based on the preference value.
     */
    protected collapseFileNode(node: SearchInWorkspaceFileNode, preferenceValue: string): void;
    protected handleUp(event: KeyboardEvent): void;
    protected refreshModelChildren(): Promise<void>;
    protected updateCurrentEditorDecorations(): void;
    protected createRootFolderNode(rootUri: string): SearchInWorkspaceRootFolderNode;
    protected createFileNode(rootUri: string, path: string, fileUri: string, parent: SearchInWorkspaceRootFolderNode): SearchInWorkspaceFileNode;
    protected createResultLineNode(result: SearchInWorkspaceResult, match: SearchMatch, fileNode: SearchInWorkspaceFileNode): SearchInWorkspaceResultLineNode;
    protected getFileNodesByUri(uri: URI): SearchInWorkspaceFileNode[];
    protected filenameAndPath(rootUriStr: string, uriStr: string): {
        name: string;
        path: string;
    };
    protected renderCaption(node: TreeNode, props: NodeProps): React.ReactNode;
    protected renderTailDecorations(node: TreeNode, props: NodeProps): React.ReactNode;
    protected doReplace(node: TreeNode, e: React.MouseEvent<HTMLElement>): void;
    protected renderReplaceButton(node: TreeNode): React.ReactNode;
    protected getFileCount(node: TreeNode): number;
    protected getResultCount(node: TreeNode): number;
    /**
     * Replace results under the node passed into the function. If node is undefined, replace all results.
     * @param node Node in the tree widget where the "replace all" operation is performed
     */
    replace(node: TreeNode | undefined): Promise<void>;
    protected confirmReplaceAll(resultNumber: number, fileNumber: number): Promise<boolean | undefined>;
    protected updateRightResults(node: SearchInWorkspaceResultLineNode): void;
    /**
     * Replace text either in all search matches under a node or in all search matches, and save the changes.
     * @param node - node in the tree widget in which the "replace all" is performed.
     * @param {boolean} replaceOne - whether the function is to replace all matches under a node. If it is false, replace all.
     */
    protected replaceResult(node: TreeNode, replaceOne: boolean): Promise<void>;
    protected readonly remove: (node: TreeNode, e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    protected doRemove(node: TreeNode, e: React.MouseEvent<HTMLElement>): void;
    protected renderRemoveButton(node: TreeNode): React.ReactNode;
    protected removeNode(node: TreeNode): void;
    private removeRootFolderNode;
    private removeFileNode;
    private removeResultLineNode;
    protected renderRootFolderNode(node: SearchInWorkspaceRootFolderNode): React.ReactNode;
    protected renderFileNode(node: SearchInWorkspaceFileNode): React.ReactNode;
    protected renderResultLineNode(node: SearchInWorkspaceResultLineNode): React.ReactNode;
    protected renderMatchLinePart(node: SearchInWorkspaceResultLineNode): React.ReactNode;
    /**
     * Get the editor widget by the node.
     * @param {SearchInWorkspaceResultLineNode} node - the node representing a match in the search results.
     * @returns The editor widget to which the text replace will be done.
     */
    protected doGetWidget(node: SearchInWorkspaceResultLineNode): Promise<EditorWidget>;
    protected doOpen(node: SearchInWorkspaceResultLineNode, preview?: boolean): Promise<EditorWidget>;
    protected createReplacePreview(node: SearchInWorkspaceFileNode): Promise<URI>;
    protected decorateEditor(node: SearchInWorkspaceFileNode | undefined, editorWidget: EditorWidget): void;
    protected createEditorDecorations(resultNode: SearchInWorkspaceFileNode | undefined): EditorDecoration[];
    /**
     * Compare two normalized strings.
     *
     * @param a {string} the first string.
     * @param b {string} the second string.
     */
    private compare;
}
//# sourceMappingURL=search-in-workspace-result-tree-widget.d.ts.map
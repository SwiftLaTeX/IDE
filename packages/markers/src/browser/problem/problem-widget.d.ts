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
import { ProblemManager } from './problem-manager';
import { ProblemTreeModel } from './problem-tree-model';
import { MarkerInfoNode, MarkerNode } from '../marker-tree';
import { TreeWidget, TreeProps, ContextMenuRenderer, TreeNode, NodeProps, TreeModel } from '@theia/core/lib/browser';
import { DiagnosticSeverity } from 'vscode-languageserver-types';
import * as React from 'react';
export declare const PROBLEMS_WIDGET_ID = "problems";
export declare class ProblemWidget extends TreeWidget {
    protected readonly problemManager: ProblemManager;
    readonly treeProps: TreeProps;
    readonly model: ProblemTreeModel;
    readonly contextMenuRenderer: ContextMenuRenderer;
    constructor(problemManager: ProblemManager, treeProps: TreeProps, model: ProblemTreeModel, contextMenuRenderer: ContextMenuRenderer);
    storeState(): object;
    protected superStoreState(): object;
    restoreState(state: object): void;
    protected superRestoreState(state: object): void;
    protected handleClickEvent(node: TreeNode | undefined, event: React.MouseEvent<HTMLElement>): void;
    protected handleCopy(event: ClipboardEvent): void;
    protected handleDown(event: KeyboardEvent): void;
    protected handleUp(event: KeyboardEvent): void;
    protected renderTree(model: TreeModel): React.ReactNode;
    protected renderCaption(node: TreeNode, props: NodeProps): React.ReactNode;
    protected renderTailDecorations(node: TreeNode, props: NodeProps): JSX.Element;
    protected renderRemoveButton(node: TreeNode): React.ReactNode;
    protected decorateMarkerNode(node: MarkerNode): React.ReactNode;
    protected getSeverityClass(severity: DiagnosticSeverity): string;
    protected decorateMarkerFileNode(node: MarkerInfoNode): React.ReactNode;
}
export declare class ProblemMarkerRemoveButton extends React.Component<{
    model: ProblemTreeModel;
    node: TreeNode;
}> {
    render(): React.ReactNode;
    protected readonly remove: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    protected doRemove(e: React.MouseEvent<HTMLElement>): void;
}
//# sourceMappingURL=problem-widget.d.ts.map
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
import { ContextMenuRenderer, TreeWidget, NodeProps, TreeProps, TreeNode, TreeModel } from '@theia/core/lib/browser';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
import { CallHierarchyTreeModel } from './callhierarchy-tree-model';
import { Definition, Caller } from '../callhierarchy';
import { Location } from 'vscode-languageserver-types';
import { EditorManager } from '@theia/editor/lib/browser';
import * as React from 'react';
export declare const HIERARCHY_TREE_CLASS = "theia-CallHierarchyTree";
export declare const DEFINITION_NODE_CLASS = "theia-CallHierarchyTreeNode";
export declare const DEFINITION_ICON_CLASS = "theia-CallHierarchyTreeNodeIcon";
export declare class CallHierarchyTreeWidget extends TreeWidget {
    readonly props: TreeProps;
    readonly model: CallHierarchyTreeModel;
    protected readonly labelProvider: LabelProvider;
    readonly editorManager: EditorManager;
    constructor(props: TreeProps, model: CallHierarchyTreeModel, contextMenuRenderer: ContextMenuRenderer, labelProvider: LabelProvider, editorManager: EditorManager);
    initializeModel(selection: Location | undefined, languageId: string | undefined): void;
    protected createNodeClassNames(node: TreeNode, props: NodeProps): string[];
    protected createNodeAttributes(node: TreeNode, props: NodeProps): React.Attributes & React.HTMLAttributes<HTMLElement>;
    protected renderTree(model: TreeModel): React.ReactNode;
    protected renderCaption(node: TreeNode, props: NodeProps): React.ReactNode;
    protected decorateDefinitionCaption(definition: Definition): React.ReactNode;
    protected decorateCallerCaption(caller: Caller): React.ReactNode;
    protected toIconClass(symbolKind: number): "boolean" | "array" | "number" | "string" | "function" | "unknown" | "file" | "package" | "method" | "enum" | "module" | "namespace" | "class" | "property" | "field" | "constructor" | "interface" | "variable" | "constant";
    private openEditor;
    private doOpenEditor;
    storeState(): object;
    restoreState(oldState: object): void;
}
//# sourceMappingURL=callhierarchy-tree-widget.d.ts.map
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { TreeNode } from '@theia/core/lib/browser/tree/tree';
import { EditorManager } from '@theia/editor/lib/browser/editor-manager';
import { ContextMenuRenderer } from '@theia/core/lib/browser/context-menu-renderer';
import { TreeWidget, TreeProps } from '@theia/core/lib/browser/tree/tree-widget';
import { TypeHierarchyTreeModel } from './typehierarchy-tree-model';
import { TypeHierarchyTree } from './typehierarchy-tree';
export declare class TypeHierarchyTreeWidget extends TreeWidget {
    readonly props: TreeProps;
    readonly model: TypeHierarchyTreeModel;
    readonly contextMenuRenderer: ContextMenuRenderer;
    readonly editorManager: EditorManager;
    protected readonly icons: Map<number, string>;
    constructor(props: TreeProps, model: TypeHierarchyTreeModel, contextMenuRenderer: ContextMenuRenderer, editorManager: EditorManager);
    /**
     * Initializes the widget with the new input.
     */
    initialize(options: TypeHierarchyTree.InitOptions): Promise<void>;
    /**
     * See: `TreeWidget#renderIcon`.
     */
    protected renderIcon(node: TreeNode): React.ReactNode;
    /**
     * Opens up the node in the editor. On demand (`keepFocus`) it reveals the location in the editor.
     */
    protected openEditor(node: TreeNode, keepFocus?: boolean): Promise<void>;
}
export declare namespace TypeHierarchyTreeWidget {
    const WIDGET_ID = "theia-typehierarchy";
    const WIDGET_LABEL = "Type Hierarchy";
    /**
     * CSS styles for the `Type Hierarchy` widget.
     */
    namespace Styles {
        const TYPE_HIERARCHY_TREE_CLASS = "theia-type-hierarchy-tree";
    }
}
//# sourceMappingURL=typehierarchy-tree-widget.d.ts.map
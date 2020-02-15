/********************************************************************************
 * Copyright (C) 2018-2019 Red Hat, Inc. and others.
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
import { TreeViewsExt, TreeViewSelection } from '../../../common/plugin-api-rpc';
import { Command } from '../../../common/plugin-api-rpc-model';
import { TreeWidget, TreeNode, NodeProps, SelectableTreeNode, ExpandableTreeNode, CompositeTreeNode, TreeImpl, TreeModelImpl } from '@theia/core/lib/browser';
import { TreeViewItem } from '../../../common/plugin-api-rpc';
import { MenuPath, MenuModelRegistry, ActionMenuNode } from '@theia/core/lib/common/menu';
import * as React from 'react';
import { PluginSharedStyle } from '../plugin-shared-style';
import { ViewContextKeyService } from './view-context-key-service';
import { Widget } from '@theia/core/lib/browser/widgets/widget';
import { CommandRegistry } from '@theia/core/lib/common/command';
import { Emitter } from '@theia/core/lib/common/event';
import { MessageService } from '@theia/core/lib/common/message-service';
import { View } from '../../../common/plugin-protocol';
export declare const TREE_NODE_HYPERLINK = "theia-TreeNodeHyperlink";
export declare const VIEW_ITEM_CONTEXT_MENU: MenuPath;
export declare const VIEW_ITEM_INLINE_MNUE: MenuPath;
export interface SelectionEventHandler {
    readonly node: SelectableTreeNode;
    readonly contextSelection: boolean;
}
export interface TreeViewNode extends SelectableTreeNode {
    contextValue?: string;
    command?: Command;
    resourceUri?: string;
    themeIconId?: 'folder' | 'file';
    tooltip?: string;
    description?: string | boolean | any;
}
export declare namespace TreeViewNode {
    function is(arg: TreeNode | undefined): arg is TreeViewNode;
}
export interface CompositeTreeViewNode extends TreeViewNode, ExpandableTreeNode, CompositeTreeNode {
    description?: string | boolean | any;
}
export declare namespace CompositeTreeViewNode {
    function is(arg: TreeNode | undefined): arg is CompositeTreeViewNode;
}
export declare class TreeViewWidgetIdentifier {
    id: string;
}
export declare class PluginTree extends TreeImpl {
    protected readonly sharedStyle: PluginSharedStyle;
    protected readonly identifier: TreeViewWidgetIdentifier;
    protected readonly notification: MessageService;
    private _proxy;
    private _viewInfo;
    set proxy(proxy: TreeViewsExt | undefined);
    set viewInfo(viewInfo: View);
    protected resolveChildren(parent: CompositeTreeNode): Promise<TreeNode[]>;
    protected fetchChildren(proxy: TreeViewsExt, parent: CompositeTreeNode): Promise<TreeViewItem[]>;
    protected createTreeNode(item: TreeViewItem, parent: CompositeTreeNode): TreeNode;
    protected toIconClass(item: TreeViewItem): string | undefined;
}
export declare class PluginTreeModel extends TreeModelImpl {
    protected readonly tree: PluginTree;
    set proxy(proxy: TreeViewsExt | undefined);
    set viewInfo(viewInfo: View);
}
export declare class TreeViewWidget extends TreeWidget {
    protected _contextSelection: boolean;
    protected readonly menus: MenuModelRegistry;
    protected readonly commands: CommandRegistry;
    protected readonly contextKeys: ViewContextKeyService;
    readonly identifier: TreeViewWidgetIdentifier;
    readonly model: PluginTreeModel;
    protected readonly onDidChangeVisibilityEmitter: Emitter<boolean>;
    readonly onDidChangeVisibility: import("@theia/core/src/common/event").Event<boolean>;
    protected init(): void;
    protected renderIcon(node: TreeNode, props: NodeProps): React.ReactNode;
    protected renderCaption(node: TreeViewNode, props: NodeProps): React.ReactNode;
    protected getCaption(node: TreeNode): React.ReactNode[];
    protected renderTailDecorations(node: TreeViewNode, props: NodeProps): React.ReactNode;
    toTreeViewSelection(node: TreeNode): TreeViewSelection;
    protected renderInlineCommand(node: ActionMenuNode, index: number, arg: any): React.ReactNode;
    protected hoverNodeId: string | undefined;
    protected setHoverNodeId(hoverNodeId: string | undefined): void;
    protected createNodeAttributes(node: TreeNode, props: NodeProps): React.Attributes & React.HTMLAttributes<HTMLElement>;
    protected toContextMenuArgs(node: SelectableTreeNode): [TreeViewSelection];
    setFlag(flag: Widget.Flag): void;
    clearFlag(flag: Widget.Flag): void;
    handleEnter(event: KeyboardEvent): void;
    handleClickEvent(node: TreeNode, event: React.MouseEvent<HTMLElement>): void;
    protected tryExecuteCommand(node?: TreeNode): void;
}
//# sourceMappingURL=tree-view-widget.d.ts.map
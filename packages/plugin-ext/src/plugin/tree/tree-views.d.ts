/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { TreeDataProvider, TreeView } from '@theia/plugin';
import { Disposable as PluginDisposable } from '../types-impl';
import { Plugin, TreeViewsExt, TreeViewItem } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { CommandRegistryImpl } from '../command-registry';
export declare class TreeViewsExtImpl implements TreeViewsExt {
    readonly commandRegistry: CommandRegistryImpl;
    private proxy;
    private treeViews;
    constructor(rpc: RPCProtocol, commandRegistry: CommandRegistryImpl);
    registerTreeDataProvider<T>(plugin: Plugin, treeViewId: string, treeDataProvider: TreeDataProvider<T>): PluginDisposable;
    createTreeView<T>(plugin: Plugin, treeViewId: string, options: {
        treeDataProvider: TreeDataProvider<T>;
    }): TreeView<T>;
    $getChildren(treeViewId: string, treeItemId: string): Promise<TreeViewItem[] | undefined>;
    $setExpanded(treeViewId: string, treeItemId: string, expanded: boolean): Promise<any>;
    $setSelection(treeViewId: string, treeItemIds: string[]): Promise<void>;
    $setVisible(treeViewId: string, isVisible: boolean): Promise<void>;
}
//# sourceMappingURL=tree-views.d.ts.map
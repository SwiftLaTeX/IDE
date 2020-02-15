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
import { interfaces } from 'inversify';
import { TreeViewsMain } from '../../../common/plugin-api-rpc';
import { RPCProtocol } from '../../../common/rpc-protocol';
import { Disposable } from '@theia/core';
import { TreeViewWidget } from './tree-view-widget';
export declare class TreeViewsMainImpl implements TreeViewsMain, Disposable {
    private container;
    private readonly proxy;
    private readonly viewRegistry;
    private readonly contextKeys;
    private readonly widgetManager;
    private readonly treeViewProviders;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    $registerTreeDataProvider(treeViewId: string): Promise<void>;
    $unregisterTreeDataProvider(treeViewId: string): Promise<void>;
    $refresh(treeViewId: string): Promise<void>;
    $reveal(treeViewId: string, treeItemId: string): Promise<any>;
    protected handleTreeEvents(treeViewId: string, treeViewWidget: TreeViewWidget): void;
}
//# sourceMappingURL=tree-views-main.d.ts.map
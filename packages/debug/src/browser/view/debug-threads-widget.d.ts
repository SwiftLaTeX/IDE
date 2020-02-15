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
/// <reference types="react" />
import { interfaces, Container } from 'inversify';
import { MenuPath } from '@theia/core';
import { TreeNode, NodeProps, SelectableTreeNode } from '@theia/core/lib/browser';
import { SourceTreeWidget } from '@theia/core/lib/browser/source-tree';
import { DebugThreadsSource } from './debug-threads-source';
import { DebugViewModel } from '../view/debug-view-model';
import { DebugCallStackItemTypeKey } from '../debug-call-stack-item-type-key';
export declare class DebugThreadsWidget extends SourceTreeWidget {
    static CONTEXT_MENU: MenuPath;
    static CONTROL_MENU: string[];
    static TERMINATE_MENU: string[];
    static OPEN_MENU: string[];
    static createContainer(parent: interfaces.Container): Container;
    static createWidget(parent: interfaces.Container): DebugThreadsWidget;
    protected readonly threads: DebugThreadsSource;
    protected readonly viewModel: DebugViewModel;
    protected readonly debugCallStackItemTypeKey: DebugCallStackItemTypeKey;
    protected init(): void;
    protected updatingSelection: boolean;
    protected updateWidgetSelection(): void;
    protected updateModelSelection(): void;
    protected toContextMenuArgs(node: SelectableTreeNode): [number] | undefined;
    protected getDefaultNodeStyle(node: TreeNode, props: NodeProps): React.CSSProperties | undefined;
}
//# sourceMappingURL=debug-threads-widget.d.ts.map
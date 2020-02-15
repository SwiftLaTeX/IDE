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
import { MenuPath } from '@theia/core/lib/common';
import { TreeNode, NodeProps } from '@theia/core/lib/browser';
import { SourceTreeWidget } from '@theia/core/lib/browser/source-tree';
import { DebugBreakpointsSource } from './debug-breakpoints-source';
import { BreakpointManager } from '../breakpoint/breakpoint-manager';
import { DebugViewModel } from './debug-view-model';
export declare class DebugBreakpointsWidget extends SourceTreeWidget {
    static CONTEXT_MENU: MenuPath;
    static EDIT_MENU: string[];
    static REMOVE_MENU: string[];
    static ENABLE_MENU: string[];
    static createContainer(parent: interfaces.Container): Container;
    static createWidget(parent: interfaces.Container): DebugBreakpointsWidget;
    protected readonly viewModel: DebugViewModel;
    protected readonly breakpoints: BreakpointManager;
    protected readonly breakpointsSource: DebugBreakpointsSource;
    protected init(): void;
    protected getDefaultNodeStyle(node: TreeNode, props: NodeProps): React.CSSProperties | undefined;
}
//# sourceMappingURL=debug-breakpoints-widget.d.ts.map
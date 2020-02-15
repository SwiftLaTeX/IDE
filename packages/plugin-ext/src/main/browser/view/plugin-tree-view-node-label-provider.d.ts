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
import { LabelProviderContribution, LabelProvider } from '@theia/core/lib/browser/label-provider';
import { TreeLabelProvider } from '@theia/core/lib/browser/tree/tree-label-provider';
import { TreeViewNode } from './tree-view-widget';
export declare class PluginTreeViewNodeLabelProvider implements LabelProviderContribution {
    protected readonly labelProvider: LabelProvider;
    protected readonly treeLabelProvider: TreeLabelProvider;
    canHandle(element: TreeViewNode | any): number;
    getIcon(node: TreeViewNode): string | undefined;
    getName(node: TreeViewNode): string | undefined;
    getLongName(node: TreeViewNode): string | undefined;
}
//# sourceMappingURL=plugin-tree-view-node-label-provider.d.ts.map
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
import { LabelProvider, LabelProviderContribution, DidChangeLabelEvent } from '@theia/core/lib/browser/label-provider';
import { MarkerInfoNode } from './marker-tree';
import { TreeLabelProvider } from '@theia/core/lib/browser/tree/tree-label-provider';
export declare class MarkerTreeLabelProvider implements LabelProviderContribution {
    protected readonly labelProvider: LabelProvider;
    protected readonly treeLabelProvider: TreeLabelProvider;
    canHandle(element: object): number;
    getIcon(node: MarkerInfoNode): string;
    getName(node: MarkerInfoNode): string;
    getDescription(node: MarkerInfoNode): string;
    affects(node: MarkerInfoNode, event: DidChangeLabelEvent): boolean;
}
//# sourceMappingURL=marker-tree-label-provider.d.ts.map
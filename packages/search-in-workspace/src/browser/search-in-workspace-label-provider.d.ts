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
import { LabelProviderContribution, LabelProvider, DidChangeLabelEvent } from '@theia/core/lib/browser/label-provider';
import { SearchInWorkspaceRootFolderNode, SearchInWorkspaceFileNode } from './search-in-workspace-result-tree-widget';
export declare class SearchInWorkspaceLabelProvider implements LabelProviderContribution {
    protected readonly labelProvider: LabelProvider;
    canHandle(element: object): number;
    getIcon(node: SearchInWorkspaceRootFolderNode | SearchInWorkspaceFileNode): string;
    getName(node: SearchInWorkspaceRootFolderNode | SearchInWorkspaceFileNode): string;
    affects(node: SearchInWorkspaceRootFolderNode | SearchInWorkspaceFileNode, event: DidChangeLabelEvent): boolean;
}
//# sourceMappingURL=search-in-workspace-label-provider.d.ts.map
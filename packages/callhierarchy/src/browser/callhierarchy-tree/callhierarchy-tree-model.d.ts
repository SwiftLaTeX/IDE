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
import { TreeModelImpl, TreeNode } from '@theia/core/lib/browser';
import { CallHierarchyTree } from './callhierarchy-tree';
import { CallHierarchyServiceProvider } from '../callhierarchy-service';
import { Position } from 'vscode-languageserver-types';
export declare class CallHierarchyTreeModel extends TreeModelImpl {
    private _languageId;
    protected readonly tree: CallHierarchyTree;
    protected readonly callHierarchyServiceProvider: CallHierarchyServiceProvider;
    getTree(): CallHierarchyTree;
    get languageId(): string | undefined;
    initializeCallHierarchy(languageId: string | undefined, uri: string | undefined, position: Position | undefined): Promise<void>;
    protected doOpenNode(node: TreeNode): void;
}
//# sourceMappingURL=callhierarchy-tree-model.d.ts.map
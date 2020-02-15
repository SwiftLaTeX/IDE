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
import { LabelProviderContribution, DidChangeLabelEvent, LabelProvider } from '@theia/core/lib/browser/label-provider';
import { GitFileChangeNode } from './git-file-change-node';
import URI from '@theia/core/lib/common/uri';
import { GitRepositoryProvider } from './git-repository-provider';
import { GitFileStatus } from '../common';
export declare class GitFileChangeLabelProvider implements LabelProviderContribution {
    protected readonly labelProvider: LabelProvider;
    protected readonly repositoryProvider: GitRepositoryProvider;
    canHandle(element: object): number;
    getIcon(node: GitFileChangeNode): string;
    getName(node: GitFileChangeNode): string;
    getDescription(node: GitFileChangeNode): string;
    affects(node: GitFileChangeNode, event: DidChangeLabelEvent): boolean;
    getCaption(fileChange: GitFileChangeNode): string;
    relativePath(uri: URI | string): string;
    getStatusCaption(status: GitFileStatus, staged?: boolean): string;
}
//# sourceMappingURL=git-file-change-label-provider.d.ts.map
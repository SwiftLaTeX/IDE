/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { DefaultUriLabelProviderContribution, URIIconReference } from '@theia/core/lib/browser/label-provider';
import URI from '@theia/core/lib/common/uri';
import { FileStat } from '@theia/filesystem/lib/common';
import { WorkspaceVariableContribution } from './workspace-variable-contribution';
export declare class WorkspaceUriLabelProviderContribution extends DefaultUriLabelProviderContribution {
    protected readonly workspaceVariable: WorkspaceVariableContribution;
    protected init(): Promise<void>;
    canHandle(element: object): number;
    getIcon(element: URI | URIIconReference | FileStat): string;
    getName(element: URI | URIIconReference | FileStat): string | undefined;
    /**
     * trims the workspace root from a file uri, if it is a child.
     */
    getLongName(element: URI | URIIconReference | FileStat): string | undefined;
    protected asURIIconReference(element: URI | URIIconReference | FileStat): URI | URIIconReference;
    protected getUri(element: URI | URIIconReference | FileStat): URI | undefined;
}
//# sourceMappingURL=workspace-uri-contribution.d.ts.map
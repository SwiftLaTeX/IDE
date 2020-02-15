/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import URI from '@theia/core/lib/common/uri';
import { PreferenceScope } from '@theia/core/lib/browser';
import { AbstractResourcePreferenceProvider } from './abstract-resource-preference-provider';
import { FileStat } from '@theia/filesystem/lib/common';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
export declare const FolderPreferenceProviderFactory: unique symbol;
export interface FolderPreferenceProviderFactory {
    (options: FolderPreferenceProviderOptions): FolderPreferenceProvider;
}
export declare const FolderPreferenceProviderOptions: unique symbol;
export interface FolderPreferenceProviderOptions {
    readonly folder: FileStat;
    readonly configUri: URI;
}
export declare class FolderPreferenceProvider extends AbstractResourcePreferenceProvider {
    protected readonly workspaceService: WorkspaceService;
    protected readonly options: FolderPreferenceProviderOptions;
    private _folderUri;
    get folderUri(): URI;
    protected getUri(): URI;
    protected getScope(): PreferenceScope;
    getDomain(): string[];
}
//# sourceMappingURL=folder-preference-provider.d.ts.map
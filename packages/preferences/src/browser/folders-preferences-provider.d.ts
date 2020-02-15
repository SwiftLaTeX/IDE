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
import { PreferenceProvider, PreferenceResolveResult } from '@theia/core/lib/browser/preferences/preference-provider';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
import { FolderPreferenceProvider, FolderPreferenceProviderFactory, FolderPreferenceProviderOptions } from './folder-preference-provider';
export declare class FoldersPreferencesProvider extends PreferenceProvider {
    protected readonly workspaceService: WorkspaceService;
    protected readonly folderPreferenceProviderFactory: FolderPreferenceProviderFactory;
    protected readonly configurations: PreferenceConfigurations;
    protected readonly providers: Map<string, FolderPreferenceProvider>;
    protected init(): Promise<void>;
    protected updateProviders(): void;
    getConfigUri(resourceUri?: string): URI | undefined;
    getContainingConfigUri(resourceUri?: string): URI | undefined;
    getDomain(): string[];
    resolve<T>(preferenceName: string, resourceUri?: string): PreferenceResolveResult<T>;
    getPreferences(resourceUri?: string): {
        [p: string]: any;
    };
    setPreference(preferenceName: string, value: any, resourceUri?: string): Promise<boolean>;
    protected groupProvidersByConfigName(resourceUri?: string): Map<string, FolderPreferenceProvider[]>;
    protected getFolderProviders(resourceUri?: string): FolderPreferenceProvider[];
    protected createProvider(options: FolderPreferenceProviderOptions): FolderPreferenceProvider;
}
//# sourceMappingURL=folders-preferences-provider.d.ts.map
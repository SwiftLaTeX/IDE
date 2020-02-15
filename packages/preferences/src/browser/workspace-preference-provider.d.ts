/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { PreferenceProvider } from '@theia/core/lib/browser/preferences';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { WorkspaceFilePreferenceProviderFactory } from './workspace-file-preference-provider';
export declare class WorkspacePreferenceProvider extends PreferenceProvider {
    protected readonly workspaceService: WorkspaceService;
    protected readonly workspaceFileProviderFactory: WorkspaceFilePreferenceProviderFactory;
    protected readonly folderPreferenceProvider: PreferenceProvider;
    protected init(): Promise<void>;
    getConfigUri(resourceUri?: string | undefined): URI | undefined;
    protected _delegate: PreferenceProvider | undefined;
    protected get delegate(): PreferenceProvider | undefined;
    protected readonly toDisposeOnEnsureDelegateUpToDate: DisposableCollection;
    protected ensureDelegateUpToDate(): void;
    protected createDelegate(): PreferenceProvider | undefined;
    get<T>(preferenceName: string, resourceUri?: string | undefined): T | undefined;
    resolve<T>(preferenceName: string, resourceUri?: string | undefined): {
        value?: T;
        configUri?: URI;
    };
    getPreferences(resourceUri?: string | undefined): {
        [p: string]: any;
    };
    setPreference(preferenceName: string, value: any, resourceUri?: string | undefined): Promise<boolean>;
    protected ensureResourceUri(): string | undefined;
}
//# sourceMappingURL=workspace-preference-provider.d.ts.map
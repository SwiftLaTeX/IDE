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
import URI from '@theia/core/lib/common/uri';
import { PreferenceScope } from '@theia/core/lib/browser/preferences';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { AbstractResourcePreferenceProvider } from './abstract-resource-preference-provider';
export declare class WorkspaceFilePreferenceProviderOptions {
    workspaceUri: URI;
}
export declare const WorkspaceFilePreferenceProviderFactory: unique symbol;
export declare type WorkspaceFilePreferenceProviderFactory = (options: WorkspaceFilePreferenceProviderOptions) => WorkspaceFilePreferenceProvider;
export declare class WorkspaceFilePreferenceProvider extends AbstractResourcePreferenceProvider {
    protected readonly workspaceService: WorkspaceService;
    protected readonly options: WorkspaceFilePreferenceProviderOptions;
    protected getUri(): URI;
    protected parse(content: string): any;
    protected getPath(preferenceName: string): string[];
    protected getScope(): PreferenceScope;
    getDomain(): string[];
}
//# sourceMappingURL=workspace-file-preference-provider.d.ts.map
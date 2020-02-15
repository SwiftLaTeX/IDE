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
import { ILanguageClient } from '@theia/languages/lib/browser';
import { LanguageClientProvider } from '@theia/languages/lib/browser/language-client-provider';
import { TypeHierarchyItem, TypeHierarchyParams, ResolveTypeHierarchyItemParams } from '@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol';
export declare class TypeHierarchyServiceProvider {
    protected readonly clientProvider: LanguageClientProvider;
    get(languageId: string | undefined): Promise<TypeHierarchyService | undefined>;
}
export declare class TypeHierarchyService {
    protected readonly client: ILanguageClient;
    readonly languageId: string;
    constructor(client: ILanguageClient, languageId: string);
    /**
     * Performs the `textDocument/typeHierarchy` LS method invocations.
     */
    get(params: TypeHierarchyParams): Promise<TypeHierarchyItem | undefined>;
    /**
     * Performs the `typeHierarchy/resolve` LS method call.
     */
    resolve(params: ResolveTypeHierarchyItemParams): Promise<TypeHierarchyItem | undefined>;
}
//# sourceMappingURL=typehierarchy-service.d.ts.map
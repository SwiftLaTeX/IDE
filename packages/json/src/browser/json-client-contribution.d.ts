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
import { BaseLanguageClientContribution, Workspace, Languages, LanguageClientFactory, ILanguageClient, DocumentSelector } from '@theia/languages/lib/browser';
import { ResourceProvider, DisposableCollection } from '@theia/core';
import { JsonPreferences } from './json-preferences';
import { JsonSchemaStore } from '@theia/core/lib/browser/json-schema-store';
export declare class JsonClientContribution extends BaseLanguageClientContribution {
    protected readonly workspace: Workspace;
    protected readonly resourceProvider: ResourceProvider;
    protected readonly languages: Languages;
    protected readonly languageClientFactory: LanguageClientFactory;
    protected readonly preferences: JsonPreferences;
    protected readonly jsonSchemaStore: JsonSchemaStore;
    readonly id = "json";
    readonly name = "JSON";
    constructor(workspace: Workspace, resourceProvider: ResourceProvider, languages: Languages, languageClientFactory: LanguageClientFactory, preferences: JsonPreferences, jsonSchemaStore: JsonSchemaStore);
    protected updateSchemas(client: ILanguageClient): void;
    protected get globPatterns(): string[];
    protected get documentSelector(): DocumentSelector | undefined;
    protected get configurationSection(): string[];
    protected get initializationOptions(): {};
    protected onReady(languageClient: ILanguageClient, toStop: DisposableCollection): void;
    protected initializeJsonSchemaAssociations(): Promise<void>;
}
//# sourceMappingURL=json-client-contribution.d.ts.map
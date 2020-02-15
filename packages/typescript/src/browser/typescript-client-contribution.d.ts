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
import URI from '@theia/core/lib/common/uri';
import { Emitter, Event } from '@theia/core/lib/common/event';
import { Deferred } from '@theia/core/lib/common/promise-util';
import { PreferenceService } from '@theia/core/lib/browser/preferences';
import { BaseLanguageClientContribution, Workspace, Languages, LanguageClientFactory, ILanguageClient } from '@theia/languages/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { WorkspaceVariableContribution } from '@theia/workspace/lib/browser/workspace-variable-contribution';
import { TypeScriptInitializationOptions } from 'typescript-language-server/lib/ts-protocol';
import { TypescriptStartParams } from '../common';
import { TypescriptPreferences } from './typescript-preferences';
import { TypescriptVersion, TypescriptVersionService, TypescriptVersionOptions } from '../common/typescript-version-service';
export declare class TypeScriptClientContribution extends BaseLanguageClientContribution {
    protected readonly workspace: Workspace;
    protected readonly languages: Languages;
    protected readonly languageClientFactory: LanguageClientFactory;
    readonly id = "typescript";
    readonly name = "TypeScript";
    protected readonly workspaceService: WorkspaceService;
    protected readonly workspaceVariables: WorkspaceVariableContribution;
    protected readonly preferences: TypescriptPreferences;
    protected readonly preferenceService: PreferenceService;
    protected readonly versionService: TypescriptVersionService;
    protected readonly onDidChangeVersionEmitter: Emitter<TypescriptVersion | undefined>;
    readonly onDidChangeVersion: Event<TypescriptVersion | undefined>;
    constructor(workspace: Workspace, languages: Languages, languageClientFactory: LanguageClientFactory);
    protected init(): void;
    protected _version: TypescriptVersion | undefined;
    get version(): TypescriptVersion | undefined;
    setVersion(raw: TypescriptVersion | undefined): Promise<void>;
    protected getStartParameters(): Promise<TypescriptStartParams>;
    protected get documentSelector(): string[];
    protected get workspaceContains(): string[];
    protected get initializationOptions(): Partial<TypeScriptInitializationOptions>;
    protected _logFileUri: URI | undefined;
    get logFileUri(): URI | undefined;
    protected onReady(languageClient: ILanguageClient): void;
    protected validateVersion(candidate: TypescriptVersion | undefined): Promise<TypescriptVersion | undefined>;
    getVersions(): Promise<TypescriptVersion[]>;
    protected get versionOptions(): TypescriptVersionOptions;
    store(): TypescriptContributionData;
    protected readonly restored: Deferred<unknown>;
    restore(data: TypescriptContributionData | undefined): Promise<void>;
}
export interface TypescriptContributionData {
    version?: TypescriptVersion;
}
//# sourceMappingURL=typescript-client-contribution.d.ts.map
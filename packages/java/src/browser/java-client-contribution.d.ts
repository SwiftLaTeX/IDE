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
import { MessageConnection } from 'vscode-jsonrpc';
import { CommandService } from '@theia/core/lib/common';
import { StatusBar } from '@theia/core/lib/browser';
import { SemanticHighlightingService } from '@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service';
import { Window, ILanguageClient, BaseLanguageClientContribution, Workspace, Languages, LanguageClientFactory, LanguageClientOptions } from '@theia/languages/lib/browser';
import { JavaStartParams } from '../common';
import { ActionableMessage, StatusReport } from './java-protocol';
import { MaybePromise } from '@theia/core';
import { PreferenceService } from '@theia/core/lib/browser/preferences';
export declare class JavaClientContribution extends BaseLanguageClientContribution {
    protected readonly workspace: Workspace;
    protected readonly languages: Languages;
    protected readonly languageClientFactory: LanguageClientFactory;
    protected readonly window: Window;
    protected readonly commandService: CommandService;
    protected readonly statusBar: StatusBar;
    protected readonly semanticHighlightingService: SemanticHighlightingService;
    readonly id = "java";
    readonly name = "Java";
    private readonly statusNotificationName;
    private statusBarTimeout;
    protected readonly preferenceService: PreferenceService;
    constructor(workspace: Workspace, languages: Languages, languageClientFactory: LanguageClientFactory, window: Window, commandService: CommandService, statusBar: StatusBar, semanticHighlightingService: SemanticHighlightingService);
    protected get globPatterns(): string[];
    protected get workspaceContains(): string[];
    get configurationSection(): string;
    protected onReady(languageClient: ILanguageClient): void;
    protected createLanguageClient(connection: MessageConnection): ILanguageClient;
    protected showStatusMessage(message: StatusReport): void;
    protected showActionableMessage(message: ActionableMessage): void;
    protected createOptions(): LanguageClientOptions;
    protected getStartParameters(): MaybePromise<JavaStartParams>;
    private parseVMargs;
}
//# sourceMappingURL=java-client-contribution.d.ts.map
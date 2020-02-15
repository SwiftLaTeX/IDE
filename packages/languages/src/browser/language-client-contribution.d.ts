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
import { MaybePromise, MessageService, CommandRegistry } from '@theia/core';
import { Disposable, DisposableCollection } from '@theia/core/lib/common';
import { FrontendApplication, WebSocketConnectionProvider } from '@theia/core/lib/browser';
import { LanguageContribution, ILanguageClient, LanguageClientOptions, DocumentSelector, TextDocument, FileSystemWatcher, Workspace, Languages, State } from './language-client-services';
import { MessageConnection, ResponseError } from 'vscode-jsonrpc';
import { LanguageClientFactory } from './language-client-factory';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { InitializeParams } from 'monaco-languageclient';
import { Deferred } from '@theia/core/lib/common/promise-util';
import { LangToolWebSocketConnectionProvider } from './langtool-connection-provider';
export declare const LanguageClientContribution: unique symbol;
export interface LanguageClientContribution extends LanguageContribution {
    readonly running: boolean;
    readonly languageClient: Promise<ILanguageClient>;
    waitForActivation(app: FrontendApplication): Promise<void>;
    activate(app: FrontendApplication): Disposable;
    deactivate(): void;
    restart(): void;
}
export declare abstract class BaseLanguageClientContribution implements LanguageClientContribution {
    protected readonly workspace: Workspace;
    protected readonly languages: Languages;
    protected readonly languageClientFactory: LanguageClientFactory;
    abstract readonly id: string;
    abstract readonly name: string;
    protected _languageClient: ILanguageClient | undefined;
    protected resolveReady: (languageClient: ILanguageClient) => void;
    protected ready: Promise<ILanguageClient>;
    protected readonly messageService: MessageService;
    protected readonly registry: CommandRegistry;
    protected readonly workspaceService: WorkspaceService;
    protected readonly languageContributionService: LanguageContribution.Service;
    protected readonly connectionProvider: WebSocketConnectionProvider;
    protected readonly langtoolConnectionProvider: LangToolWebSocketConnectionProvider;
    constructor(workspace: Workspace, languages: Languages, languageClientFactory: LanguageClientFactory);
    get languageClient(): Promise<ILanguageClient>;
    waitForActivation(app: FrontendApplication): Promise<any>;
    protected deferredConnection: Deferred<MessageConnection>;
    protected readonly toDeactivate: DisposableCollection;
    activate(): Disposable;
    deactivate(): void;
    protected stop: Promise<void>;
    protected doActivate(toStop: DisposableCollection): Promise<void>;
    protected state: State | undefined;
    get running(): boolean;
    restart(): void;
    protected forceRestart(): void;
    protected onWillStart(languageClient: ILanguageClient, toStop?: DisposableCollection): void;
    protected onReady(languageClient: ILanguageClient, toStop?: DisposableCollection): void;
    protected waitForReady(): void;
    protected createLanguageClient(connection: MessageConnection | (() => MaybePromise<MessageConnection>)): ILanguageClient;
    protected createOptions(): LanguageClientOptions;
    protected handleInitializationFailed(err: ResponseError<InitializeParams> | Error | any): boolean;
    protected getStartParameters(): MaybePromise<any>;
    protected get initializationOptions(): any | (() => any) | undefined;
    protected get configurationSection(): string | string[] | undefined;
    protected get workspaceContains(): string[];
    protected get documentSelector(): DocumentSelector | undefined;
    protected _fileEvents: FileSystemWatcher[] | undefined;
    protected get fileEvents(): FileSystemWatcher[];
    protected createFileEvents(): FileSystemWatcher[];
    protected get globPatterns(): string[];
    /**
     * Check to see if one of the paths is in the current workspace.
     */
    protected waitForItemInWorkspace(): Promise<any>;
    protected waitForOpenTextDocument(selector: DocumentSelector): Promise<TextDocument>;
}
//# sourceMappingURL=language-client-contribution.d.ts.map
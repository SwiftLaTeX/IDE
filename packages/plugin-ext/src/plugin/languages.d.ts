/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { LanguagesExt, Position, Selection, RawColorInfo, WorkspaceEditDto, PluginInfo } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import * as theia from '@theia/plugin';
import { DocumentsExtImpl } from './documents';
import { PluginModel } from '../common/plugin-protocol';
import URI from 'vscode-uri/lib/umd';
import { UriComponents } from '../common/uri-components';
import { CompletionContext, CompletionResultDto, Completion, SignatureHelp, Hover, DocumentHighlight, Range, TextEdit, FormattingOptions, Definition, DefinitionLink, DocumentLink, CodeLensSymbol, DocumentSymbol, ReferenceContext, Location, ColorPresentation, RenameLocation, SignatureHelpContext, CodeActionContext, CodeAction, FoldingRange, CallHierarchyDefinition, CallHierarchyReference } from '../common/plugin-api-rpc-model';
import { SymbolInformation } from 'vscode-languageserver-types';
import { Event } from '@theia/core/lib/common/event';
import { CommandRegistryImpl } from './command-registry';
export declare class LanguagesExtImpl implements LanguagesExt {
    private readonly documents;
    private readonly commands;
    private proxy;
    private diagnostics;
    private callId;
    private adaptersMap;
    constructor(rpc: RPCProtocol, documents: DocumentsExtImpl, commands: CommandRegistryImpl);
    get onDidChangeDiagnostics(): Event<theia.DiagnosticChangeEvent>;
    getLanguages(): Promise<string[]>;
    changeLanguage(uri: URI, languageId: string): Promise<theia.TextDocument>;
    setLanguageConfiguration(language: string, configuration: theia.LanguageConfiguration): theia.Disposable;
    private nextCallId;
    private createDisposable;
    private addNewAdapter;
    private withAdapter;
    private transformDocumentSelector;
    private doTransformDocumentSelector;
    $provideCompletionItems(handle: number, resource: UriComponents, position: Position, context: CompletionContext, token: theia.CancellationToken): Promise<CompletionResultDto | undefined>;
    $resolveCompletionItem(handle: number, resource: UriComponents, position: Position, completion: Completion, token: theia.CancellationToken): Promise<Completion>;
    $releaseCompletionItems(handle: number, id: number): void;
    registerCompletionItemProvider(selector: theia.DocumentSelector, provider: theia.CompletionItemProvider, triggerCharacters: string[], pluginInfo: PluginInfo): theia.Disposable;
    $provideDefinition(handle: number, resource: UriComponents, position: Position, token: theia.CancellationToken): Promise<Definition | DefinitionLink[] | undefined>;
    registerDefinitionProvider(selector: theia.DocumentSelector, provider: theia.DefinitionProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideDeclaration(handle: number, resource: UriComponents, position: Position, token: theia.CancellationToken): Promise<Definition | DefinitionLink[] | undefined>;
    registerDeclarationProvider(selector: theia.DocumentSelector, provider: theia.DeclarationProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideSignatureHelp(handle: number, resource: UriComponents, position: Position, context: SignatureHelpContext, token: theia.CancellationToken): Promise<SignatureHelp | undefined>;
    $releaseSignatureHelp(handle: number, id: number): void;
    registerSignatureHelpProvider(selector: theia.DocumentSelector, provider: theia.SignatureHelpProvider, metadata: theia.SignatureHelpProviderMetadata, pluginInfo: PluginInfo): theia.Disposable;
    getDiagnostics(resource?: URI): theia.Diagnostic[] | [URI, theia.Diagnostic[]][];
    createDiagnosticCollection(name?: string): theia.DiagnosticCollection;
    $provideImplementation(handle: number, resource: UriComponents, position: Position, token: theia.CancellationToken): Promise<Definition | DefinitionLink[] | undefined>;
    registerImplementationProvider(selector: theia.DocumentSelector, provider: theia.ImplementationProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideTypeDefinition(handle: number, resource: UriComponents, position: Position, token: theia.CancellationToken): Promise<Definition | DefinitionLink[] | undefined>;
    registerTypeDefinitionProvider(selector: theia.DocumentSelector, provider: theia.TypeDefinitionProvider, pluginInfo: PluginInfo): theia.Disposable;
    registerHoverProvider(selector: theia.DocumentSelector, provider: theia.HoverProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideHover(handle: number, resource: UriComponents, position: Position, token: theia.CancellationToken): Promise<Hover | undefined>;
    registerDocumentHighlightProvider(selector: theia.DocumentSelector, provider: theia.DocumentHighlightProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideDocumentHighlights(handle: number, resource: UriComponents, position: Position, token: theia.CancellationToken): Promise<DocumentHighlight[] | undefined>;
    registerWorkspaceSymbolProvider(provider: theia.WorkspaceSymbolProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideWorkspaceSymbols(handle: number, query: string, token: theia.CancellationToken): PromiseLike<SymbolInformation[]>;
    $resolveWorkspaceSymbol(handle: number, symbol: SymbolInformation, token: theia.CancellationToken): PromiseLike<SymbolInformation>;
    registerDocumentFormattingEditProvider(selector: theia.DocumentSelector, provider: theia.DocumentFormattingEditProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideDocumentFormattingEdits(handle: number, resource: UriComponents, options: FormattingOptions, token: theia.CancellationToken): Promise<TextEdit[] | undefined>;
    registerDocumentRangeFormattingEditProvider(selector: theia.DocumentSelector, provider: theia.DocumentRangeFormattingEditProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideDocumentRangeFormattingEdits(handle: number, resource: UriComponents, range: Range, options: FormattingOptions, token: theia.CancellationToken): Promise<TextEdit[] | undefined>;
    registerOnTypeFormattingEditProvider(selector: theia.DocumentSelector, provider: theia.OnTypeFormattingEditProvider, triggerCharacters: string[], pluginInfo: PluginInfo): theia.Disposable;
    $provideOnTypeFormattingEdits(handle: number, resource: UriComponents, position: Position, ch: string, options: FormattingOptions, token: theia.CancellationToken): Promise<TextEdit[] | undefined>;
    $provideDocumentLinks(handle: number, resource: UriComponents, token: theia.CancellationToken): Promise<DocumentLink[] | undefined>;
    $resolveDocumentLink(handle: number, link: DocumentLink, token: theia.CancellationToken): Promise<DocumentLink | undefined>;
    registerLinkProvider(selector: theia.DocumentSelector, provider: theia.DocumentLinkProvider, pluginInfo: PluginInfo): theia.Disposable;
    registerCodeActionsProvider(selector: theia.DocumentSelector, provider: theia.CodeActionProvider, pluginModel: PluginModel, pluginInfo: PluginInfo, metadata?: theia.CodeActionProviderMetadata): theia.Disposable;
    $provideCodeActions(handle: number, resource: UriComponents, rangeOrSelection: Range | Selection, context: CodeActionContext, token: theia.CancellationToken): Promise<CodeAction[] | undefined>;
    registerCodeLensProvider(selector: theia.DocumentSelector, provider: theia.CodeLensProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideCodeLenses(handle: number, resource: UriComponents, token: theia.CancellationToken): Promise<CodeLensSymbol[] | undefined>;
    $resolveCodeLens(handle: number, resource: UriComponents, symbol: CodeLensSymbol, token: theia.CancellationToken): Promise<CodeLensSymbol | undefined>;
    $provideReferences(handle: number, resource: UriComponents, position: Position, context: ReferenceContext, token: theia.CancellationToken): Promise<Location[] | undefined>;
    registerReferenceProvider(selector: theia.DocumentSelector, provider: theia.ReferenceProvider, pluginInfo: PluginInfo): theia.Disposable;
    registerDocumentSymbolProvider(selector: theia.DocumentSelector, provider: theia.DocumentSymbolProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideDocumentSymbols(handle: number, resource: UriComponents, token: theia.CancellationToken): Promise<DocumentSymbol[] | undefined>;
    registerColorProvider(selector: theia.DocumentSelector, provider: theia.DocumentColorProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideDocumentColors(handle: number, resource: UriComponents, token: theia.CancellationToken): Promise<RawColorInfo[]>;
    $provideColorPresentations(handle: number, resource: UriComponents, colorInfo: RawColorInfo, token: theia.CancellationToken): Promise<ColorPresentation[]>;
    registerFoldingRangeProvider(selector: theia.DocumentSelector, provider: theia.FoldingRangeProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideFoldingRange(callId: number, resource: UriComponents, context: theia.FoldingContext, token: theia.CancellationToken): Promise<FoldingRange[] | undefined>;
    registerRenameProvider(selector: theia.DocumentSelector, provider: theia.RenameProvider, pluginInfo: PluginInfo): theia.Disposable;
    $provideRenameEdits(handle: number, resource: UriComponents, position: Position, newName: string, token: theia.CancellationToken): Promise<WorkspaceEditDto | undefined>;
    $resolveRenameLocation(handle: number, resource: UriComponents, position: Position, token: theia.CancellationToken): Promise<RenameLocation | undefined>;
    registerCallHierarchyProvider(selector: theia.DocumentSelector, provider: theia.CallHierarchyProvider): theia.Disposable;
    $provideRootDefinition(handle: number, resource: UriComponents, location: Position, token: theia.CancellationToken): Promise<CallHierarchyDefinition | undefined>;
    $provideCallers(handle: number, definition: CallHierarchyDefinition, token: theia.CancellationToken): Promise<CallHierarchyReference[] | undefined>;
}
//# sourceMappingURL=languages.d.ts.map
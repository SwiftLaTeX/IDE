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
/// <reference types="@typefox/monaco-editor-core/monaco" />
import { LanguagesMain, SerializedLanguageConfiguration, WorkspaceEditDto, PluginInfo } from '../../common/plugin-api-rpc';
import { SerializedDocumentFilter, MarkerData, Range, WorkspaceSymbolProvider, DocumentLink, WorkspaceSymbolParams } from '../../common/plugin-api-rpc-model';
import { RPCProtocol } from '../../common/rpc-protocol';
import { MonacoModelIdentifier } from 'monaco-languageclient/lib';
import { Disposable } from '@theia/core/lib/common/disposable';
import * as vst from 'vscode-languageserver-types';
import * as theia from '@theia/plugin';
import { UriComponents } from '../../common/uri-components';
import { LanguageSelector } from '@theia/languages/lib/common/language-selector';
import { CallHierarchyService } from '@theia/callhierarchy/lib/browser';
export declare class LanguagesMainImpl implements LanguagesMain, Disposable {
    private readonly monacoLanguages;
    private readonly problemManager;
    private readonly callHierarchyServiceContributionRegistry;
    private readonly proxy;
    private readonly services;
    private readonly toDispose;
    constructor(rpc: RPCProtocol);
    dispose(): void;
    $getLanguages(): Promise<string[]>;
    $changeLanguage(resource: UriComponents, languageId: string): Promise<void>;
    protected register(handle: number, service: Disposable): void;
    $unregister(handle: number): void;
    $setLanguageConfiguration(handle: number, languageId: string, configuration: SerializedLanguageConfiguration): void;
    $registerCompletionSupport(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[], triggerCharacters: string[], supportsResolveDetails: boolean): void;
    protected provideCompletionItems(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, context: monaco.languages.CompletionContext, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.CompletionList>;
    protected resolveCompletionItem(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, item: monaco.languages.CompletionItem, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.CompletionItem>;
    $registerDefinitionProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    $registerDeclarationProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    $registerReferenceProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    protected createReferenceProvider(handle: number): monaco.languages.ReferenceProvider;
    protected provideReferences(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, context: monaco.languages.ReferenceContext, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.Location[]>;
    $registerSignatureHelpProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[], metadata: theia.SignatureHelpProviderMetadata): void;
    $clearDiagnostics(id: string): void;
    $changeDiagnostics(id: string, delta: [string, MarkerData[]][]): void;
    $registerImplementationProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    protected createImplementationProvider(handle: number): monaco.languages.ImplementationProvider;
    protected provideImplementation(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.Definition>;
    $registerTypeDefinitionProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    protected createTypeDefinitionProvider(handle: number): monaco.languages.TypeDefinitionProvider;
    protected provideTypeDefinition(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.Definition>;
    $registerHoverProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    protected createHoverProvider(handle: number): monaco.languages.HoverProvider;
    protected provideHover(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.Hover>;
    $registerDocumentHighlightProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    protected createDocumentHighlightProvider(handle: number): monaco.languages.DocumentHighlightProvider;
    protected provideDocumentHighlights(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.DocumentHighlight[]>;
    $registerWorkspaceSymbolProvider(handle: number, pluginInfo: PluginInfo): void;
    protected createWorkspaceSymbolProvider(handle: number): WorkspaceSymbolProvider;
    protected provideWorkspaceSymbols(handle: number, params: WorkspaceSymbolParams, token: monaco.CancellationToken): Thenable<vst.SymbolInformation[]>;
    protected resolveWorkspaceSymbol(handle: number, symbol: vst.SymbolInformation, token: monaco.CancellationToken): Thenable<vst.SymbolInformation>;
    $registerDocumentLinkProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    protected createLinkProvider(handle: number): monaco.languages.LinkProvider;
    protected provideLinks(handle: number, model: monaco.editor.ITextModel, token: monaco.CancellationToken): Promise<monaco.languages.ProviderResult<monaco.languages.ILinksList>>;
    protected resolveLink(handle: number, link: monaco.languages.ILink, token: monaco.CancellationToken): Promise<monaco.languages.ProviderResult<monaco.languages.ILink>>;
    protected toMonacoLink(link: DocumentLink): monaco.languages.ILink;
    $registerCodeLensSupport(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[], eventHandle: number): void;
    protected createCodeLensProvider(handle: number): monaco.languages.CodeLensProvider;
    protected provideCodeLenses(handle: number, model: monaco.editor.ITextModel, token: monaco.CancellationToken): Promise<monaco.languages.ProviderResult<monaco.languages.CodeLensList>>;
    protected resolveCodeLens(handle: number, model: monaco.editor.ITextModel, codeLens: monaco.languages.CodeLens, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.CodeLens>;
    $emitCodeLensEvent(eventHandle: number, event?: any): void;
    $registerOutlineSupport(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    protected createDocumentSymbolProvider(handle: number): monaco.languages.DocumentSymbolProvider;
    protected provideDocumentSymbols(handle: number, model: monaco.editor.ITextModel, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.DocumentSymbol[]>;
    protected createDefinitionProvider(handle: number): monaco.languages.DefinitionProvider;
    protected createDeclarationProvider(handle: number): monaco.languages.DeclarationProvider;
    protected provideDeclaration(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.Definition>;
    protected provideDefinition(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.Definition>;
    protected createSignatureHelpProvider(handle: number, metadata: theia.SignatureHelpProviderMetadata): monaco.languages.SignatureHelpProvider;
    protected provideSignatureHelp(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, token: monaco.CancellationToken, context: monaco.languages.SignatureHelpContext): Promise<monaco.languages.ProviderResult<monaco.languages.SignatureHelpResult>>;
    $registerDocumentFormattingSupport(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    createDocumentFormattingSupport(handle: number): monaco.languages.DocumentFormattingEditProvider;
    protected provideDocumentFormattingEdits(handle: number, model: monaco.editor.ITextModel, options: monaco.languages.FormattingOptions, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.TextEdit[]>;
    $registerRangeFormattingProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    createRangeFormattingProvider(handle: number): monaco.languages.DocumentRangeFormattingEditProvider;
    protected provideDocumentRangeFormattingEdits(handle: number, model: monaco.editor.ITextModel, range: Range, options: monaco.languages.FormattingOptions, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.TextEdit[]>;
    $registerOnTypeFormattingProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[], autoFormatTriggerCharacters: string[]): void;
    protected createOnTypeFormattingProvider(handle: number, autoFormatTriggerCharacters: string[]): monaco.languages.OnTypeFormattingEditProvider;
    protected provideOnTypeFormattingEdits(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, ch: string, options: monaco.languages.FormattingOptions, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.TextEdit[]>;
    $registerFoldingRangeProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    createFoldingRangeProvider(handle: number): monaco.languages.FoldingRangeProvider;
    protected provideFoldingRanges(handle: number, model: monaco.editor.ITextModel, context: monaco.languages.FoldingContext, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.FoldingRange[]>;
    $registerDocumentColorProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[]): void;
    createColorProvider(handle: number): monaco.languages.DocumentColorProvider;
    protected provideDocumentColors(handle: number, model: monaco.editor.ITextModel, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.IColorInformation[]>;
    protected provideColorPresentations(handle: number, model: monaco.editor.ITextModel, colorInfo: monaco.languages.IColorInformation, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.IColorPresentation[]>;
    $registerQuickFixProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[], providedCodeActionKinds?: string[]): void;
    protected provideCodeActions(handle: number, model: monaco.editor.ITextModel, rangeOrSelection: Range, context: monaco.languages.CodeActionContext, token: monaco.CancellationToken): Promise<monaco.languages.CodeActionList | monaco.languages.CodeActionList>;
    $registerRenameProvider(handle: number, pluginInfo: PluginInfo, selector: SerializedDocumentFilter[], supportsResolveLocation: boolean): void;
    protected createRenameProvider(handle: number, supportsResolveLocation: boolean): monaco.languages.RenameProvider;
    protected provideRenameEdits(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, newName: string, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.WorkspaceEdit & monaco.languages.Rejection>;
    $registerCallHierarchyProvider(handle: number, selector: SerializedDocumentFilter[]): void;
    protected createCallHierarchyService(handle: number, language: LanguageSelector): CallHierarchyService;
    protected matchModel(selector: LanguageSelector | undefined, model: MonacoModelIdentifier): boolean;
    protected resolveRenameLocation(handle: number, model: monaco.editor.ITextModel, position: monaco.Position, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.RenameLocation>;
}
export declare function toMonacoWorkspaceEdit(data: WorkspaceEditDto | undefined): monaco.languages.WorkspaceEdit;
//# sourceMappingURL=languages-main.d.ts.map
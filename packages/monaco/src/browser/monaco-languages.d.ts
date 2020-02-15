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
/// <reference types="@typefox/monaco-editor-core/monaco" />
import { MonacoLanguages as BaseMonacoLanguages, ProtocolToMonacoConverter, MonacoToProtocolConverter, DocumentSelector, SignatureHelpProvider, CodeActionProvider, CodeLensProvider } from 'monaco-languageclient';
import { Languages, DiagnosticCollection, Language, WorkspaceSymbolProvider } from '@theia/languages/lib/browser';
import { ProblemManager } from '@theia/markers/lib/browser/problem/problem-manager';
import URI from '@theia/core/lib/common/uri';
import { Mutable } from '@theia/core/lib/common/types';
import { Disposable } from '@theia/core/lib/common/disposable';
import { MonacoDiagnosticCollection } from 'monaco-languageclient/lib/monaco-diagnostic-collection';
export declare class MonacoLanguages extends BaseMonacoLanguages implements Languages {
    protected readonly problemManager: ProblemManager;
    readonly workspaceSymbolProviders: WorkspaceSymbolProvider[];
    protected readonly makers: Map<string, MonacoDiagnosticCollection>;
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    p2m: ProtocolToMonacoConverter, m2p: MonacoToProtocolConverter, problemManager: ProblemManager);
    protected updateMarkers(uri: URI): void;
    createDiagnosticCollection(name?: string): DiagnosticCollection;
    registerWorkspaceSymbolProvider(provider: WorkspaceSymbolProvider): Disposable;
    get languages(): Language[];
    getLanguage(languageId: string): Language | undefined;
    protected mergeLanguages(registered: monaco.languages.ILanguageExtensionPoint[]): Map<string, Mutable<Language>>;
    protected createSignatureHelpProvider(selector: DocumentSelector, provider: SignatureHelpProvider, ...triggerCharacters: string[]): monaco.languages.SignatureHelpProvider;
    protected createCodeActionProvider(selector: DocumentSelector, provider: CodeActionProvider): monaco.languages.CodeActionProvider;
    protected createCodeLensProvider(selector: DocumentSelector, provider: CodeLensProvider): monaco.languages.CodeLensProvider;
}
//# sourceMappingURL=monaco-languages.d.ts.map
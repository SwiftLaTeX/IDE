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
/// <reference types="@typefox/monaco-editor-core/monaco" />
import URI from '@theia/core/lib/common/uri';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { FileSystem } from '@theia/filesystem/lib/common';
export declare class MonacoSnippetSuggestProvider implements monaco.languages.CompletionItemProvider {
    private static readonly _maxPrefix;
    protected readonly filesystem: FileSystem;
    protected readonly snippets: Map<string, Snippet[]>;
    protected readonly pendingSnippets: Map<string, Promise<void>[]>;
    provideCompletionItems(model: monaco.editor.ITextModel, position: monaco.Position, context: monaco.languages.CompletionContext): Promise<monaco.languages.CompletionList | undefined>;
    resolveCompletionItem(textModel: monaco.editor.ITextModel, position: monaco.Position, item: monaco.languages.CompletionItem): monaco.languages.CompletionItem;
    protected loadSnippets(scope: string): Promise<void>;
    fromURI(uri: string | URI, options: SnippetLoadOptions): Disposable;
    /**
     * should NOT throw to prevent load erros on suggest
     */
    protected loadURI(uri: string | URI, options: SnippetLoadOptions, toDispose: DisposableCollection): Promise<void>;
    fromJSON(snippets: JsonSerializedSnippets | undefined, { language, source }: SnippetLoadOptions): Disposable;
    protected parseSnippets(snippets: JsonSerializedSnippets | undefined, accept: (name: string, snippet: JsonSerializedSnippet) => void): void;
    push(...snippets: Snippet[]): Disposable;
    protected isPatternInWord(patternLow: string, patternPos: number, patternLen: number, wordLow: string, wordPos: number, wordLen: number): boolean;
}
export interface SnippetLoadOptions {
    language?: string | string[];
    source: string;
}
export interface JsonSerializedSnippets {
    [name: string]: JsonSerializedSnippet | {
        [name: string]: JsonSerializedSnippet;
    };
}
export interface JsonSerializedSnippet {
    body: string | string[];
    scope: string;
    prefix: string;
    description: string;
}
export declare namespace JsonSerializedSnippet {
    function is(obj: Object | undefined): obj is JsonSerializedSnippet;
}
export interface Snippet {
    readonly scopes: string[];
    readonly name: string;
    readonly prefix: string;
    readonly description: string;
    readonly body: string;
    readonly source: string;
}
export declare class MonacoSnippetSuggestion implements monaco.languages.CompletionItem {
    protected readonly snippet: Snippet;
    readonly range: monaco.Range;
    readonly label: string;
    readonly detail: string;
    readonly sortText: string;
    readonly noAutoAccept = true;
    readonly kind = monaco.languages.CompletionItemKind.Snippet;
    readonly insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
    insertText: string;
    documentation?: monaco.IMarkdownString;
    constructor(snippet: Snippet, range: monaco.Range);
    protected resolved: boolean;
    resolve(): MonacoSnippetSuggestion;
    static compareByLabel(a: MonacoSnippetSuggestion, b: MonacoSnippetSuggestion): number;
}
//# sourceMappingURL=monaco-snippet-suggest-provider.d.ts.map
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
import { LanguageGrammarDefinitionContribution, TextmateRegistry } from '@theia/monaco/lib/browser/textmate';
import { MonacoSnippetSuggestProvider } from '@theia/monaco/lib/browser/monaco-snippet-suggest-provider';
export declare class TypescriptContribution implements LanguageGrammarDefinitionContribution {
    private readonly ts_id;
    private readonly ts_react_id;
    protected readonly snippetSuggestProvider: MonacoSnippetSuggestProvider;
    registerTextmateLanguage(registry: TextmateRegistry): void;
    protected registerSnippets(): void;
    protected registerTypeScript(): void;
    protected configuration: monaco.languages.LanguageConfiguration;
}
//# sourceMappingURL=ts.d.ts.map
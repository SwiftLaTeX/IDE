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
import { Position, Range } from 'vscode-languageserver-types';
import URI from '@theia/core/lib/common/uri';
import { Disposable } from '@theia/core/lib/common/disposable';
import { ILogger } from '@theia/core/lib/common/logger';
import { ILanguageClient } from '@theia/languages/lib/browser/language-client-services';
import { SemanticHighlightFeature } from '@theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-feature';
/**
 * Service for registering and managing semantic highlighting decorations in the code editors for multiple languages.
 *
 * The current, default implementation does nothing at all, because the unique identifier of the `EditorDecoration` is not
 * exposed via the API. A working example is available as the `MonacoSemanticHighlightingService` from the `@theia/monaco` extension.
 */
export declare class SemanticHighlightingService implements Disposable {
    protected readonly logger: ILogger;
    protected readonly scopes: Map<string, string[][]>;
    /**
     * Registers the supported highlighting scopes for the given language. Returns with a disposable that will unregister the scopes from this service on `dispose`.
     * @param languageId the unique identifier of the language.
     * @param scopes a lookup table of the supported (TextMate) scopes received from the server. Semantic highlighting will be be supported for a language if the `scopes` is empty.
     */
    register(languageId: string, scopes: string[][] | undefined): Disposable;
    protected unregister(languageId: string): void;
    /**
     * An array for TextMate scopes for the language.
     * @param languageId the unique ID of the language.
     * @param index the index of the TextMate scopes for the language.
     */
    protected scopesFor(languageId: string, index: number): string[];
    /**
     * Decorates the editor with the semantic highlighting scopes.
     * @param languageId the unique identifier of the language the resource belongs to.
     * @param uri the URI of the resource to decorate in the editor.
     * @param ranges the decoration ranges.
     */
    decorate(languageId: string, uri: URI, ranges: SemanticHighlightingRange[]): Promise<void>;
    /**
     * Disposes the service.
     */
    dispose(): void;
}
export declare namespace SemanticHighlightingService {
    /**
     * The bare minimum representation of an individual semantic highlighting token.
     */
    interface Token {
        /**
         * The offset of the token.
         */
        readonly character: number;
        /**
         * The length of the token.
         */
        readonly length: number;
        /**
         * The unique scope index per language.
         */
        readonly scope: number;
    }
    namespace Token {
        function fromArray(tokens: number[]): Token[];
    }
    /**
     * Converts the compact, `base64` string token into an array of tokens.
     */
    function decode(tokens: string | undefined): SemanticHighlightingService.Token[];
    /**
     * Encodes the array of tokens into a compact `base64` string representation.
     */
    function encode(tokens: SemanticHighlightingService.Token[] | undefined): string;
    /**
     * Creates a new text document feature to handle the semantic highlighting capabilities of the protocol.
     * When the feature gets initialized, it delegates to the semantic highlighting service and registers the TextMate scopes received as part of the server capabilities.
     * Plus, each time when a notification is received by the client, the semantic highlighting service will be used as the consumer and the highlighting information
     * will be used to decorate the text editor.
     */
    function createNewFeature(service: SemanticHighlightingService, client: ILanguageClient & Readonly<{
        languageId: string;
    }>): SemanticHighlightFeature;
}
export interface SemanticHighlightingRange extends Range {
    /**
     * The unique, internal index of the TextMate scope for the range.
     */
    readonly scope?: number;
}
export { Position, Range };
//# sourceMappingURL=semantic-highlighting-service.d.ts.map
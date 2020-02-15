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
import { DisposableCollection } from '@theia/core/lib/common/';
import { ILanguageClient, TextDocumentFeature, TextDocumentRegistrationOptions, ClientCapabilities, ServerCapabilities, Disposable, DocumentSelector } from '../language-client-services';
import { SemanticHighlightingParams } from './semantic-highlighting-protocol';
export declare class SemanticHighlightFeature extends TextDocumentFeature<{}, TextDocumentRegistrationOptions> {
    protected readonly initializeCallback: SemanticHighlightFeature.SemanticHighlightFeatureInitializeCallback;
    protected readonly consumer: SemanticHighlightFeature.SemanticHighlightingParamsConsumer;
    protected readonly languageId: string;
    protected readonly toDispose: DisposableCollection;
    constructor(client: ILanguageClient & Readonly<{
        languageId: string;
    }>, initializeCallback: SemanticHighlightFeature.SemanticHighlightFeatureInitializeCallback, consumer: SemanticHighlightFeature.SemanticHighlightingParamsConsumer);
    fillClientCapabilities(capabilities: ClientCapabilities): void;
    initialize(capabilities: ServerCapabilities, documentSelector: DocumentSelector): void;
    protected registerLanguageProvider(): Disposable;
    protected consumeSemanticHighlighting(params: SemanticHighlightingParams): void;
}
export declare namespace SemanticHighlightFeature {
    interface SemanticHighlightingParamsConsumer {
        /**
         * Consumes a semantic highlighting notification, received from the language server.
         */
        (params: SemanticHighlightingParams): void;
    }
    interface SemanticHighlightFeatureInitializeCallback {
        /**
         * Invoked when the connection between the client and the server has been established and the server sends back
         * a "lookup table" of TextMate scopes.
         */
        (languageId: string, scopes: string[][]): Disposable;
    }
}
//# sourceMappingURL=semantic-highlighting-feature.d.ts.map
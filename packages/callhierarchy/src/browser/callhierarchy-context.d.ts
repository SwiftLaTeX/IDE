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
/// <reference types="@theia/monaco/src/typings/monaco" />
import { ILanguageClient } from '@theia/languages/lib/browser';
import { SymbolInformation, Location, Position, DocumentSymbol, DocumentUri } from 'monaco-languageclient/lib/services';
import { ILogger, Disposable } from '@theia/core';
import { MonacoTextModelService } from '@theia/monaco/lib/browser/monaco-text-model-service';
export declare class CallHierarchyContext implements Disposable {
    protected readonly languageClient: ILanguageClient;
    protected readonly textModelService: MonacoTextModelService;
    protected readonly logger: ILogger;
    protected readonly symbolCache: Map<string, SymbolInformation[] | DocumentSymbol[]>;
    protected readonly disposables: Disposable[];
    constructor(languageClient: ILanguageClient, textModelService: MonacoTextModelService, logger: ILogger);
    getAllSymbols(uri: string): Promise<DocumentSymbol[] | SymbolInformation[]>;
    getEditorModelReference(uri: string): Promise<monaco.editor.IReference<import("../../../monaco/src/browser/monaco-editor-model").MonacoEditorModel>>;
    getDefinitionLocation(uri: DocumentUri, position: Position): Promise<Location | undefined>;
    getCallerReferences(definition: Location): Promise<Location[]>;
    dispose(): void;
}
//# sourceMappingURL=callhierarchy-context.d.ts.map
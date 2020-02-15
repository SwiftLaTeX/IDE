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
import { LanguageSelector } from '@theia/languages/lib/common/language-selector';
import { LanguageClientProvider } from '@theia/languages/lib/browser/language-client-provider';
import { SymbolInformation, Location, Position, DocumentSymbol, DocumentUri } from 'monaco-languageclient/lib/services';
import { Definition, Caller } from './callhierarchy';
import { CallHierarchyService } from './callhierarchy-service';
import { ILogger } from '@theia/core';
import { MonacoTextModelService } from '@theia/monaco/lib/browser/monaco-text-model-service';
import { CallHierarchyContext } from './callhierarchy-context';
export declare type ExtendedDocumentSymbol = DocumentSymbol & Location & {
    containerName: string;
};
export declare abstract class AbstractDefaultCallHierarchyService implements CallHierarchyService {
    readonly languageClientProvider: LanguageClientProvider;
    readonly logger: ILogger;
    readonly textModelService: MonacoTextModelService;
    abstract get languageId(): string;
    get selector(): LanguageSelector;
    /**
     * Returns root definition of caller hierarchy.
     */
    getRootDefinition(uri: DocumentUri, position: Position): Promise<Definition | undefined>;
    /**
     * Returns next level of caller definitions.
     */
    getCallers(definition: Definition): Promise<Caller[] | undefined>;
    protected withContext<T>(lambda: (context: CallHierarchyContext) => Promise<T>): Promise<T | undefined>;
    protected createContext(): Promise<CallHierarchyContext | undefined>;
    /**
     * Creates callers for given references and method symbols.
     */
    protected createCallers(callerReferences: Location[], context: CallHierarchyContext): Promise<Caller[]>;
    protected toCaller(def: Definition, references: Location[]): Caller;
    protected toDefinition(symbol: ExtendedDocumentSymbol | SymbolInformation, context: CallHierarchyContext): Promise<Definition | undefined>;
    /**
     * Override this to configure the callables of your language.
     */
    protected isCallable(symbol: DocumentSymbol | SymbolInformation): boolean;
    /**
     * Finds the symbol that encloses the definition range of the root element
     *
     * As symbols can be nested, we are looking for the one with the smallest region.
     * As we only check regions that contain the definition, that is the one with the
     * latest start position.
     */
    protected getEnclosingRootSymbol(definition: Location, context: CallHierarchyContext): Promise<ExtendedDocumentSymbol | SymbolInformation | undefined>;
    /**
     * Finds the symbol that encloses the reference range of a caller
     */
    protected getEnclosingCallerSymbol(reference: Location, context: CallHierarchyContext): Promise<ExtendedDocumentSymbol | SymbolInformation | undefined>;
    /**
     * Finds the location of its name within a symbol's location.
     */
    protected getSymbolNameLocation(symbol: ExtendedDocumentSymbol | SymbolInformation, context: CallHierarchyContext): Promise<Location | undefined>;
}
//# sourceMappingURL=callhierarchy-service-impl.d.ts.map
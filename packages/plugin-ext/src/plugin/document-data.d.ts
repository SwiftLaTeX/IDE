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
import * as theia from '@theia/plugin';
import { ModelChangedEvent, DocumentsMain } from '../common/plugin-api-rpc';
import URI from 'vscode-uri';
export declare function setWordDefinitionFor(modeId: string, wordDefinition: RegExp | null): void;
export declare function getWordDefinitionFor(modeId: string): RegExp;
export declare class DocumentDataExt {
    private proxy;
    private uri;
    private lines;
    private eol;
    private languageId;
    private versionId;
    private disposed;
    private dirty;
    private _document;
    private textLines;
    private lineStarts;
    constructor(proxy: DocumentsMain, uri: URI, lines: string[], eol: string, languageId: string, versionId: number, isDirty: boolean);
    dispose(): void;
    onEvents(e: ModelChangedEvent): void;
    acceptIsDirty(isDirty: boolean): void;
    acceptLanguageId(langId: string): void;
    get document(): theia.TextDocument;
    private acceptInsertText;
    private acceptDeleteRange;
    private setLineText;
    private save;
    private getTextInRange;
    private validateRange;
    private getText;
    private validatePosition;
    private lineAt;
    private offsetAt;
    private ensureLineStarts;
    private positionAt;
    private getWordRangeAtPosition;
}
export declare function regExpLeadsToEndlessLoop(regexp: RegExp): boolean;
//# sourceMappingURL=document-data.d.ts.map
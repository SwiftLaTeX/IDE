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
import { EditorsAndDocumentsExt, EditorsAndDocumentsDelta } from '../common/plugin-api-rpc';
import { TextEditorExt } from './text-editor';
import { RPCProtocol } from '../common/rpc-protocol';
import { Event } from '@theia/core/lib/common/event';
import { DocumentDataExt } from './document-data';
export declare class EditorsAndDocumentsExtImpl implements EditorsAndDocumentsExt {
    private readonly rpc;
    private activeEditorId;
    private readonly _onDidAddDocuments;
    private readonly _onDidRemoveDocuments;
    private readonly _onDidChangeVisibleTextEditors;
    private readonly _onDidChangeActiveTextEditors;
    readonly onDidAddDocuments: Event<DocumentDataExt[]>;
    readonly onDidRemoveDocuments: Event<DocumentDataExt[]>;
    readonly onDidChangeVisibleTextEditors: Event<TextEditorExt[]>;
    readonly onDidChangeActiveTextEditor: Event<TextEditorExt | undefined>;
    private readonly documents;
    private readonly editors;
    constructor(rpc: RPCProtocol);
    $acceptEditorsAndDocumentsDelta(delta: EditorsAndDocumentsDelta): void;
    allEditors(): TextEditorExt[];
    activeEditor(): TextEditorExt | undefined;
    allDocuments(): DocumentDataExt[];
    getDocument(uri: string): DocumentDataExt | undefined;
    getEditor(id: string): TextEditorExt | undefined;
}
//# sourceMappingURL=editors-and-documents.d.ts.map
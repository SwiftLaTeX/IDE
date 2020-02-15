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
import { DocumentsMain } from '../../common/plugin-api-rpc';
import { UriComponents } from '../../common/uri-components';
import { EditorsAndDocumentsMain } from './editors-and-documents-main';
import { Disposable } from '@theia/core';
import { MonacoEditorModel } from '@theia/monaco/lib/browser/monaco-editor-model';
import { RPCProtocol } from '../../common/rpc-protocol';
import { EditorModelService } from './text-editor-model-service';
import { EditorManager, EditorOpenerOptions } from '@theia/editor/lib/browser';
import { ApplicationShell } from '@theia/core/lib/browser';
import { TextDocumentShowOptions } from '../../common/plugin-api-rpc-model';
import { OpenerService } from '@theia/core/lib/browser/opener-service';
import { Reference } from '@theia/core/lib/common/reference';
export declare class ModelReferenceCollection {
    private readonly maxAge;
    private readonly maxLength;
    private data;
    private length;
    constructor(maxAge?: number, maxLength?: number);
    dispose(): void;
    add(ref: Reference<MonacoEditorModel>): void;
    private cleanup;
}
export declare class DocumentsMainImpl implements DocumentsMain, Disposable {
    private readonly modelService;
    private editorManager;
    private openerService;
    private shell;
    private readonly proxy;
    private readonly syncedModels;
    private readonly modelReferenceCache;
    protected saveTimeout: number;
    private readonly toDispose;
    constructor(editorsAndDocuments: EditorsAndDocumentsMain, modelService: EditorModelService, rpc: RPCProtocol, editorManager: EditorManager, openerService: OpenerService, shell: ApplicationShell);
    dispose(): void;
    private onModelChanged;
    private onModelAdded;
    private onModelRemoved;
    $tryCreateDocument(options?: {
        language?: string;
        content?: string;
    }): Promise<UriComponents>;
    $tryShowDocument(uri: UriComponents, options?: TextDocumentShowOptions): Promise<void>;
    $trySaveDocument(uri: UriComponents): Promise<boolean>;
    $tryOpenDocument(uri: UriComponents): Promise<boolean>;
    $tryCloseDocument(uri: UriComponents): Promise<boolean>;
    static toEditorOpenerOptions(shell: ApplicationShell, options?: TextDocumentShowOptions): EditorOpenerOptions | undefined;
}
//# sourceMappingURL=documents-main.d.ts.map
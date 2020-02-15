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
import { TextEditorsMain, TextEditorConfigurationUpdate, Selection, TextEditorRevealType, SingleEditOperation, ApplyEditsOptions, UndoStopOptions, DecorationRenderOptions, ThemeDecorationInstanceRenderOptions, DecorationOptions, WorkspaceEditDto } from '../../common/plugin-api-rpc';
import { Range } from '../../common/plugin-api-rpc-model';
import { EditorsAndDocumentsMain } from './editors-and-documents-main';
import { RPCProtocol } from '../../common/rpc-protocol';
import { Disposable } from '@theia/core/lib/common/disposable';
import { MonacoBulkEditService } from '@theia/monaco/lib/browser/monaco-bulk-edit-service';
import { MonacoEditorService } from '@theia/monaco/lib/browser/monaco-editor-service';
import { UriComponents } from '../../common/uri-components';
export declare class TextEditorsMainImpl implements TextEditorsMain, Disposable {
    private readonly editorsAndDocuments;
    private readonly bulkEditService;
    private readonly monacoEditorService;
    private readonly proxy;
    private readonly toDispose;
    private readonly editorsToDispose;
    private readonly fileEndpoint;
    constructor(editorsAndDocuments: EditorsAndDocumentsMain, rpc: RPCProtocol, bulkEditService: MonacoBulkEditService, monacoEditorService: MonacoEditorService);
    dispose(): void;
    private onTextEditorAdd;
    private onTextEditorRemove;
    $trySetOptions(id: string, options: TextEditorConfigurationUpdate): Promise<void>;
    $trySetSelections(id: string, selections: Selection[]): Promise<void>;
    $tryRevealRange(id: string, range: Range, revealType: TextEditorRevealType): Promise<void>;
    $tryApplyEdits(id: string, modelVersionId: number, edits: SingleEditOperation[], opts: ApplyEditsOptions): Promise<boolean>;
    $tryApplyWorkspaceEdit(dto: WorkspaceEditDto): Promise<boolean>;
    $tryInsertSnippet(id: string, template: string, ranges: Range[], opts: UndoStopOptions): Promise<boolean>;
    $registerTextEditorDecorationType(key: string, options: DecorationRenderOptions): void;
    protected injectRemoteUris(options: DecorationRenderOptions | ThemeDecorationInstanceRenderOptions): void;
    protected toRemoteUri(uri?: UriComponents): UriComponents | undefined;
    $removeTextEditorDecorationType(key: string): void;
    $trySetDecorations(id: string, key: string, ranges: DecorationOptions[]): Promise<void>;
    $trySetDecorationsFast(id: string, key: string, ranges: number[]): Promise<void>;
    $saveAll(includeUntitled?: boolean): Promise<boolean>;
}
//# sourceMappingURL=text-editors-main.d.ts.map
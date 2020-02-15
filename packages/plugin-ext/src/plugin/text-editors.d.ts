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
import { TextEditorsExt, EditorChangedPropertiesData, TextEditorPositionData, TextEditorsMain } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import * as theia from '@theia/plugin';
import { Event } from '@theia/core/lib/common/event';
import { EditorsAndDocumentsExtImpl } from './editors-and-documents';
import { TextEditorExt } from './text-editor';
export declare class TextEditorsExtImpl implements TextEditorsExt {
    private editorsAndDocuments;
    private readonly _onDidChangeTextEditorSelection;
    private readonly _onDidChangeTextEditorOptions;
    private readonly _onDidChangeTextEditorVisibleRanges;
    private readonly _onDidChangeTextEditorViewColumn;
    private readonly _onDidChangeActiveTextEditor;
    private readonly _onDidChangeVisibleTextEditors;
    readonly onDidChangeTextEditorSelection: Event<theia.TextEditorSelectionChangeEvent>;
    readonly onDidChangeTextEditorOptions: Event<theia.TextEditorOptionsChangeEvent>;
    readonly onDidChangeTextEditorVisibleRanges: Event<theia.TextEditorVisibleRangesChangeEvent>;
    readonly onDidChangeTextEditorViewColumn: Event<theia.TextEditorViewColumnChangeEvent>;
    readonly onDidChangeActiveTextEditor: Event<theia.TextEditor | undefined>;
    readonly onDidChangeVisibleTextEditors: Event<theia.TextEditor[]>;
    private proxy;
    constructor(rpc: RPCProtocol, editorsAndDocuments: EditorsAndDocumentsExtImpl);
    $acceptEditorPropertiesChanged(id: string, props: EditorChangedPropertiesData): void;
    $acceptEditorPositionData(data: TextEditorPositionData): void;
    getActiveEditor(): TextEditorExt | undefined;
    getVisibleTextEditors(): theia.TextEditor[];
    createTextEditorDecorationType(options: theia.DecorationRenderOptions): theia.TextEditorDecorationType;
    applyWorkspaceEdit(edit: theia.WorkspaceEdit): Promise<boolean>;
    saveAll(includeUntitled?: boolean): PromiseLike<boolean>;
}
export declare class TextEditorDecorationType implements theia.TextEditorDecorationType {
    private static readonly Keys;
    private proxy;
    key: string;
    constructor(proxy: TextEditorsMain, options: theia.DecorationRenderOptions);
    dispose(): void;
}
//# sourceMappingURL=text-editors.d.ts.map
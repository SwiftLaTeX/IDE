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
/// <reference types="@typefox/monaco-editor-core/monaco" />
import { interfaces } from 'inversify';
import { RPCProtocol } from '../../common/rpc-protocol';
import { Disposable } from '@theia/core/lib/common/disposable';
import { MonacoEditorModel } from '@theia/monaco/lib/browser/monaco-editor-model';
import { TextEditorMain } from './text-editor-main';
export declare class EditorsAndDocumentsMain implements Disposable {
    private readonly proxy;
    private readonly stateComputer;
    private readonly textEditors;
    private readonly modelService;
    private readonly onTextEditorAddEmitter;
    private readonly onTextEditorRemoveEmitter;
    private readonly onDocumentAddEmitter;
    private readonly onDocumentRemoveEmitter;
    readonly onTextEditorAdd: import("@theia/core").Event<TextEditorMain[]>;
    readonly onTextEditorRemove: import("@theia/core").Event<string[]>;
    readonly onDocumentAdd: import("@theia/core").Event<MonacoEditorModel[]>;
    readonly onDocumentRemove: import("@theia/core").Event<monaco.Uri[]>;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    listen(): void;
    dispose(): void;
    private onDelta;
    private toModelAddData;
    private toTextEditorAddData;
    private findEditorPosition;
    getEditor(id: string): TextEditorMain | undefined;
    saveAll(includeUntitled?: boolean): Promise<boolean>;
}
//# sourceMappingURL=editors-and-documents-main.d.ts.map
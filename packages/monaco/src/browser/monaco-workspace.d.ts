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
/// <reference types="@typefox/monaco-editor-core/monaco" />
/// <reference types="@theia/monaco/src/typings/monaco" />
import { ProtocolToMonacoConverter, MonacoToProtocolConverter } from 'monaco-languageclient';
import { FileSystem } from '@theia/filesystem/lib/common';
import { FileSystemWatcher } from '@theia/filesystem/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { EditorManager, EditorOpenerOptions } from '@theia/editor/lib/browser';
import * as lang from '@theia/languages/lib/browser';
import { TextDocumentWillSaveEvent } from '@theia/languages/lib/browser';
import { MonacoTextModelService } from './monaco-text-model-service';
import { WillSaveMonacoModelEvent, MonacoEditorModel, MonacoModelContentChangedEvent } from './monaco-editor-model';
import { MonacoEditor } from './monaco-editor';
import { MonacoConfigurations } from './monaco-configurations';
import { ProblemManager } from '@theia/markers/lib/browser';
import { MaybePromise } from '@theia/core/lib/common/types';
export interface MonacoDidChangeTextDocumentParams extends lang.DidChangeTextDocumentParams {
    readonly textDocument: MonacoEditorModel;
}
export interface MonacoTextDocumentWillSaveEvent extends TextDocumentWillSaveEvent {
    readonly textDocument: MonacoEditorModel;
}
export interface ResourceEdit {
    readonly newUri?: string;
    readonly oldUri?: string;
    readonly options?: {
        readonly overwrite?: boolean;
        readonly ignoreIfNotExists?: boolean;
        readonly ignoreIfExists?: boolean;
        readonly recursive?: boolean;
    };
}
export interface CreateResourceEdit extends ResourceEdit {
    readonly newUri: string;
}
export declare namespace CreateResourceEdit {
    function is(arg: Edit): arg is CreateResourceEdit;
}
export interface DeleteResourceEdit extends ResourceEdit {
    readonly oldUri: string;
}
export declare namespace DeleteResourceEdit {
    function is(arg: Edit): arg is DeleteResourceEdit;
}
export interface RenameResourceEdit extends ResourceEdit {
    readonly newUri: string;
    readonly oldUri: string;
}
export declare namespace RenameResourceEdit {
    function is(arg: Edit): arg is RenameResourceEdit;
}
export interface TextEdits {
    readonly uri: string;
    readonly version: number | undefined;
    readonly textEdits: monaco.languages.TextEdit[];
}
export declare namespace TextEdits {
    function is(arg: Edit): arg is TextEdits;
    function isVersioned(arg: TextEdits): boolean;
}
export interface EditsByEditor extends TextEdits {
    readonly editor: MonacoEditor;
}
export declare namespace EditsByEditor {
    function is(arg: Edit): arg is EditsByEditor;
}
export declare type Edit = TextEdits | ResourceEdit;
export declare class MonacoWorkspace implements lang.Workspace {
    readonly capabilities: {
        applyEdit: boolean;
        workspaceEdit: {
            documentChanges: boolean;
        };
    };
    protected resolveReady: () => void;
    readonly ready: Promise<void>;
    protected readonly onDidOpenTextDocumentEmitter: lang.Emitter<MonacoEditorModel>;
    readonly onDidOpenTextDocument: lang.Event<MonacoEditorModel>;
    protected readonly onDidCloseTextDocumentEmitter: lang.Emitter<MonacoEditorModel>;
    readonly onDidCloseTextDocument: lang.Event<MonacoEditorModel>;
    protected readonly onDidChangeTextDocumentEmitter: lang.Emitter<MonacoDidChangeTextDocumentParams>;
    readonly onDidChangeTextDocument: lang.Event<MonacoDidChangeTextDocumentParams>;
    protected readonly onWillSaveTextDocumentEmitter: lang.Emitter<MonacoTextDocumentWillSaveEvent>;
    readonly onWillSaveTextDocument: lang.Event<MonacoTextDocumentWillSaveEvent>;
    protected readonly onDidSaveTextDocumentEmitter: lang.Emitter<MonacoEditorModel>;
    readonly onDidSaveTextDocument: lang.Event<MonacoEditorModel>;
    protected readonly fileSystem: FileSystem;
    protected readonly workspaceService: WorkspaceService;
    protected readonly fileSystemWatcher: FileSystemWatcher;
    protected readonly textModelService: MonacoTextModelService;
    protected readonly m2p: MonacoToProtocolConverter;
    protected readonly p2m: ProtocolToMonacoConverter;
    protected readonly editorManager: EditorManager;
    readonly configurations: MonacoConfigurations;
    protected readonly problems: ProblemManager;
    protected init(): void;
    protected _rootUri: string | null;
    get rootUri(): string | null;
    get rootPath(): string | null;
    get textDocuments(): MonacoEditorModel[];
    getTextDocument(uri: string): MonacoEditorModel | undefined;
    protected fireDidOpen(model: MonacoEditorModel): void;
    protected doFireDidOpen(model: MonacoEditorModel): void;
    protected fireDidClose(model: MonacoEditorModel): void;
    protected fireDidChangeContent(event: MonacoModelContentChangedEvent): void;
    protected fireWillSave(event: WillSaveMonacoModelEvent): void;
    protected fireDidSave(model: MonacoEditorModel): void;
    protected suppressedOpenIfDirty: MonacoEditorModel[];
    protected openEditorIfDirty(model: MonacoEditorModel): void;
    protected suppressOpenIfDirty(model: MonacoEditorModel, cb: () => MaybePromise<void>): Promise<void>;
    createFileSystemWatcher(globPattern: string, ignoreCreateEvents?: boolean, ignoreChangeEvents?: boolean, ignoreDeleteEvents?: boolean): lang.FileSystemWatcher;
    /**
     * Applies given edits to the given model.
     * The model is saved if no editors is opened for it.
     */
    applyBackgroundEdit(model: MonacoEditorModel, editOperations: monaco.editor.IIdentifiedSingleEditOperation[]): Promise<void>;
    applyEdit(changes: lang.WorkspaceEdit, options?: EditorOpenerOptions): Promise<boolean>;
    applyBulkEdit(workspaceEdit: monaco.languages.WorkspaceEdit, options?: EditorOpenerOptions): Promise<monaco.editor.IBulkEditResult>;
    protected openEditors(edits: Edit[], options?: EditorOpenerOptions): Promise<Edit[]>;
    protected toTextEditWithEditor(textEdit: TextEdits, options?: EditorOpenerOptions): Promise<EditsByEditor>;
    protected checkVersions(edits: Edit[]): void;
    protected getAriaSummary(totalEdits: number, totalFiles: number): string;
    protected groupEdits(workspaceEdit: monaco.languages.WorkspaceEdit): Edit[];
    protected performResourceEdit(edit: CreateResourceEdit | RenameResourceEdit | DeleteResourceEdit): Promise<void>;
    protected isResourceFileEdit(edit: monaco.languages.ResourceFileEdit | monaco.languages.ResourceTextEdit): edit is monaco.languages.ResourceTextEdit;
}
//# sourceMappingURL=monaco-workspace.d.ts.map
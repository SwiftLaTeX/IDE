/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { Position } from 'vscode-languageserver-types';
import { TextDocumentSaveReason, TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import { MonacoToProtocolConverter, ProtocolToMonacoConverter } from 'monaco-languageclient';
import { TextEditorDocument } from '@theia/editor/lib/browser';
import { DisposableCollection, Emitter, Event, Resource, CancellationTokenSource, CancellationToken } from '@theia/core';
import ITextEditorModel = monaco.editor.ITextEditorModel;
import { Range } from 'vscode-languageserver-types';
export { TextDocumentSaveReason };
export interface WillSaveMonacoModelEvent {
    readonly model: MonacoEditorModel;
    readonly reason: TextDocumentSaveReason;
    waitUntil(thenable: Thenable<monaco.editor.IIdentifiedSingleEditOperation[]>): void;
}
export interface MonacoModelContentChangedEvent {
    readonly model: MonacoEditorModel;
    readonly contentChanges: TextDocumentContentChangeEvent[];
}
export declare class MonacoEditorModel implements ITextEditorModel, TextEditorDocument {
    protected readonly resource: Resource;
    protected readonly m2p: MonacoToProtocolConverter;
    protected readonly p2m: ProtocolToMonacoConverter;
    autoSave: 'on' | 'off';
    autoSaveDelay: number;
    readonly onWillSaveLoopTimeOut = 1500;
    protected bufferSavedVersionId: number;
    protected model: monaco.editor.IModel;
    protected readonly resolveModel: Promise<void>;
    protected readonly toDispose: DisposableCollection;
    protected readonly toDisposeOnAutoSave: DisposableCollection;
    protected readonly onDidChangeContentEmitter: Emitter<MonacoModelContentChangedEvent>;
    readonly onDidChangeContent: Event<MonacoModelContentChangedEvent>;
    protected readonly onDidSaveModelEmitter: Emitter<monaco.editor.ITextModel>;
    readonly onDidSaveModel: Event<monaco.editor.ITextModel>;
    protected readonly onWillSaveModelEmitter: Emitter<WillSaveMonacoModelEvent>;
    readonly onWillSaveModel: Event<WillSaveMonacoModelEvent>;
    protected readonly onDidChangeValidEmitter: Emitter<void>;
    readonly onDidChangeValid: Event<void>;
    private preferredEncoding;
    private readonly defaultEncoding;
    constructor(resource: Resource, m2p: MonacoToProtocolConverter, p2m: ProtocolToMonacoConverter, options?: {
        encoding?: string | undefined;
    });
    dispose(): void;
    reopenWithEncoding(encoding: string): Promise<void>;
    saveWithEncoding(encoding: string): Promise<void>;
    getEncoding(): string | undefined;
    /**
     * #### Important
     * Only this method can create an instance of `monaco.editor.IModel`,
     * there should not be other calls to `monaco.editor.createModel`.
     */
    protected initialize(content: string): void;
    /**
     * Use `valid` to access it.
     * Use `setValid` to mutate it.
     */
    protected _valid: boolean;
    /**
     * Whether it is possible to load content from the underlying resource.
     */
    get valid(): boolean;
    protected setValid(valid: boolean): void;
    protected _dirty: boolean;
    get dirty(): boolean;
    protected setDirty(dirty: boolean): void;
    private updateSavedVersionId;
    protected readonly onDirtyChangedEmitter: Emitter<void>;
    get onDirtyChanged(): Event<void>;
    get uri(): string;
    protected _languageId: string | undefined;
    get languageId(): string;
    /**
     * It's a hack to dispatch close notification with an old language id, don't use it.
     */
    setLanguageId(languageId: string | undefined): void;
    get version(): number;
    /**
     * Return selected text by Range or all text by default
     */
    getText(range?: Range): string;
    positionAt(offset: number): Position;
    offsetAt(position: Position): number;
    get lineCount(): number;
    /**
     * Retrieves a line in a text document expressed as a one-based position.
     */
    getLineContent(lineNumber: number): string;
    getLineMaxColumn(lineNumber: number): number;
    get readOnly(): boolean;
    get onDispose(): monaco.IEvent<void>;
    get textEditorModel(): monaco.editor.IModel;
    load(): Promise<MonacoEditorModel>;
    save(): Promise<void>;
    protected pendingOperation: Promise<void>;
    run(operation: () => Promise<void>): Promise<void>;
    protected syncCancellationTokenSource: CancellationTokenSource;
    protected cancelSync(): CancellationToken;
    sync(): Promise<void>;
    protected doSync(token: CancellationToken): Promise<void>;
    protected readContents(): Promise<string | undefined>;
    protected ignoreDirtyEdits: boolean;
    protected markAsDirty(): void;
    protected doAutoSave(): void;
    protected saveCancellationTokenSource: CancellationTokenSource;
    protected cancelSave(): CancellationToken;
    protected scheduleSave(reason: TextDocumentSaveReason, token?: CancellationToken, overwriteEncoding?: string): Promise<void>;
    protected ignoreContentChanges: boolean;
    protected contentChanges: TextDocumentContentChangeEvent[];
    protected pushContentChanges(contentChanges: TextDocumentContentChangeEvent[]): void;
    protected popContentChanges(): TextDocumentContentChangeEvent[];
    protected fireDidChangeContent(event: monaco.editor.IModelContentChangedEvent): void;
    protected asContentChangedEvent(event: monaco.editor.IModelContentChangedEvent): MonacoModelContentChangedEvent;
    protected asTextDocumentContentChangeEvent(change: monaco.editor.IModelContentChange): TextDocumentContentChangeEvent;
    protected applyEdits(operations: monaco.editor.IIdentifiedSingleEditOperation[], options?: Partial<MonacoEditorModel.ApplyEditsOptions>): monaco.editor.IIdentifiedSingleEditOperation[];
    protected doSave(reason: TextDocumentSaveReason, token: CancellationToken, overwriteEncoding?: string): Promise<void>;
    protected fireWillSaveModel(reason: TextDocumentSaveReason, token: CancellationToken): Promise<void>;
    protected fireDidSaveModel(): void;
}
export declare namespace MonacoEditorModel {
    interface ApplyEditsOptions {
        ignoreDirty: boolean;
        ignoreContentChanges: boolean;
    }
}
//# sourceMappingURL=monaco-editor-model.d.ts.map
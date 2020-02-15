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
import { MonacoToProtocolConverter, ProtocolToMonacoConverter, TextEdit } from 'monaco-languageclient';
import { ElementExt } from '@phosphor/domutils';
import URI from '@theia/core/lib/common/uri';
import { ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import { DisposableCollection, Disposable, Emitter, Event } from '@theia/core/lib/common';
import { Dimension, EditorManager, EditorWidget, Position, Range, TextDocumentContentChangeDelta, TextDocumentChangeEvent, TextEditor, RevealRangeOptions, RevealPositionOptions, DeltaDecorationParams, ReplaceTextParams, EditorDecoration, EditorMouseEvent, EncodingMode } from '@theia/editor/lib/browser';
import { MonacoEditorModel } from './monaco-editor-model';
import IEditorConstructionOptions = monaco.editor.IEditorConstructionOptions;
import IModelDeltaDecoration = monaco.editor.IModelDeltaDecoration;
import IEditorOverrideServices = monaco.editor.IEditorOverrideServices;
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IBoxSizing = ElementExt.IBoxSizing;
export declare class MonacoEditorServices {
    protected readonly m2p: MonacoToProtocolConverter;
    protected readonly p2m: ProtocolToMonacoConverter;
    protected readonly contextKeyService: ContextKeyService;
    constructor(services: MonacoEditorServices);
}
export declare class MonacoEditor extends MonacoEditorServices implements TextEditor {
    readonly uri: URI;
    readonly document: MonacoEditorModel;
    readonly node: HTMLElement;
    protected readonly toDispose: DisposableCollection;
    protected readonly autoSizing: boolean;
    protected readonly minHeight: number;
    protected readonly maxHeight: number;
    protected editor: IStandaloneCodeEditor;
    protected readonly onCursorPositionChangedEmitter: Emitter<Position>;
    protected readonly onSelectionChangedEmitter: Emitter<Range>;
    protected readonly onFocusChangedEmitter: Emitter<boolean>;
    protected readonly onDocumentContentChangedEmitter: Emitter<TextDocumentChangeEvent>;
    protected readonly onMouseDownEmitter: Emitter<EditorMouseEvent>;
    protected readonly onLanguageChangedEmitter: Emitter<string>;
    readonly onLanguageChanged: Event<string>;
    protected readonly onScrollChangedEmitter: Emitter<void>;
    protected readonly onEncodingChangedEmitter: Emitter<string>;
    readonly onEncodingChanged: Event<string>;
    readonly documents: Set<MonacoEditorModel>;
    constructor(uri: URI, document: MonacoEditorModel, node: HTMLElement, services: MonacoEditorServices, options?: MonacoEditor.IOptions, override?: IEditorOverrideServices);
    getEncoding(): string;
    setEncoding(encoding: string, mode: EncodingMode): void;
    protected create(options?: IEditorConstructionOptions, override?: monaco.editor.IEditorOverrideServices): Disposable;
    protected addHandlers(codeEditor: IStandaloneCodeEditor): void;
    getVisibleRanges(): Range[];
    protected mapModelContentChange(change: monaco.editor.IModelContentChange): TextDocumentContentChangeDelta;
    get onDispose(): Event<void>;
    get onDocumentContentChanged(): Event<TextDocumentChangeEvent>;
    get cursor(): Position;
    set cursor(cursor: Position);
    get onCursorPositionChanged(): Event<Position>;
    get selection(): Range;
    set selection(selection: Range);
    get onSelectionChanged(): Event<Range>;
    get onScrollChanged(): Event<void>;
    revealPosition(raw: Position, options?: RevealPositionOptions): void;
    revealRange(raw: Range, options?: RevealRangeOptions): void;
    focus(): void;
    blur(): void;
    isFocused({ strict }?: {
        strict: boolean;
    }): boolean;
    get onFocusChanged(): Event<boolean>;
    get onMouseDown(): Event<EditorMouseEvent>;
    /**
     * `true` if the suggest widget is visible in the editor. Otherwise, `false`.
     */
    isSuggestWidgetVisible(): boolean;
    /**
     * `true` if the find (and replace) widget is visible in the editor. Otherwise, `false`.
     */
    isFindWidgetVisible(): boolean;
    /**
     * `true` if the name rename refactoring input HTML element is visible. Otherwise, `false`.
     */
    isRenameInputVisible(): boolean;
    dispose(): void;
    trigger(source: string, handlerId: string, payload: any): void;
    getControl(): IStandaloneCodeEditor;
    refresh(): void;
    resizeToFit(): void;
    setSize(dimension: Dimension): void;
    protected autoresize(): void;
    protected resize(dimension: Dimension | null): void;
    protected computeLayoutSize(hostNode: HTMLElement, dimension: monaco.editor.IDimension | null): monaco.editor.IDimension;
    protected getWidth(hostNode: HTMLElement, boxSizing: IBoxSizing): number;
    protected getHeight(hostNode: HTMLElement, boxSizing: IBoxSizing): number;
    isActionSupported(id: string): boolean;
    runAction(id: string): Promise<void>;
    get commandService(): monaco.commands.ICommandService;
    get instantiationService(): monaco.instantiation.IInstantiationService;
    deltaDecorations(params: DeltaDecorationParams): string[];
    protected toDeltaDecorations(params: DeltaDecorationParams): IModelDeltaDecoration[];
    getLinesDecorations(startLineNumber: number, endLineNumber: number): (EditorDecoration & Readonly<{
        id: string;
    }>)[];
    protected toEditorDecoration(decoration: monaco.editor.IModelDecoration): EditorDecoration & Readonly<{
        id: string;
    }>;
    getVisibleColumn(position: Position): number;
    replaceText(params: ReplaceTextParams): Promise<boolean>;
    executeEdits(edits: TextEdit[]): boolean;
    storeViewState(): object;
    restoreViewState(state: object): void;
    protected _languageAutoDetected: boolean;
    get languageAutoDetected(): boolean;
    detectLanguage(): Promise<void>;
    setLanguage(languageId: string): void;
    protected fireLanguageChanged(langaugeId: string): void;
    getResourceUri(): URI;
    createMoveToUri(resourceUri: URI): URI;
}
export declare namespace MonacoEditor {
    interface ICommonOptions {
        /**
         * Whether an editor should be auto resized on a content change.
         *
         * #### Fixme
         * remove when https://github.com/Microsoft/monaco-editor/issues/103 is resolved
         */
        autoSizing?: boolean;
        /**
         * A minimal height of an editor in lines.
         *
         * #### Fixme
         * remove when https://github.com/Microsoft/monaco-editor/issues/103 is resolved
         */
        minHeight?: number;
        /**
         * A maximal height of an editor in lines.
         *
         * #### Fixme
         * remove when https://github.com/Microsoft/monaco-editor/issues/103 is resolved
         */
        maxHeight?: number;
    }
    interface IOptions extends ICommonOptions, IEditorConstructionOptions {
    }
    function getAll(manager: EditorManager): MonacoEditor[];
    function getCurrent(manager: EditorManager): MonacoEditor | undefined;
    function getActive(manager: EditorManager): MonacoEditor | undefined;
    function get(editorWidget: EditorWidget | undefined): MonacoEditor | undefined;
    function findByDocument(manager: EditorManager, document: MonacoEditorModel): MonacoEditor[];
    function getWidgetFor(manager: EditorManager, control: monaco.editor.ICodeEditor | undefined): EditorWidget | undefined;
}
//# sourceMappingURL=monaco-editor.d.ts.map
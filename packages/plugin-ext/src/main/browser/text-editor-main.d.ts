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
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { MonacoEditor } from '@theia/monaco/lib/browser/monaco-editor';
import { TextEditorConfiguration, EditorChangedPropertiesData, Selection, TextEditorConfigurationUpdate, TextEditorRevealType, SingleEditOperation, ApplyEditsOptions, UndoStopOptions, DecorationOptions } from '../../common/plugin-api-rpc';
import { Range } from '../../common/plugin-api-rpc-model';
import { Event } from '@theia/core';
export declare class TextEditorMain implements Disposable {
    private id;
    private model;
    private properties;
    private editor;
    private readonly onPropertiesChangedEmitter;
    private readonly toDispose;
    constructor(id: string, model: monaco.editor.IModel, editor: MonacoEditor);
    dispose(): void;
    private updateProperties;
    private setProperties;
    protected readonly toDisposeOnEditor: DisposableCollection;
    private setEditor;
    getId(): string;
    getModel(): monaco.editor.IModel;
    getProperties(): TextEditorPropertiesMain | undefined;
    get onPropertiesChangedEvent(): Event<EditorChangedPropertiesData>;
    setSelections(selections: Selection[]): void;
    setConfiguration(newConfiguration: TextEditorConfigurationUpdate): void;
    private setIndentConfiguration;
    revealRange(range: monaco.Range, revealType: TextEditorRevealType): void;
    applyEdits(versionId: number, edits: SingleEditOperation[], opts: ApplyEditsOptions): boolean;
    insertSnippet(template: string, ranges: Range[], opts: UndoStopOptions): boolean;
    setDecorations(key: string, ranges: DecorationOptions[]): void;
    setDecorationsFast(key: string, _ranges: number[]): void;
    private static toMonacoSelections;
}
export declare class TextEditorPropertiesMain {
    readonly selections: monaco.Selection[];
    readonly options: TextEditorConfiguration;
    readonly visibleRanges: monaco.Range[];
    constructor(selections: monaco.Selection[], options: TextEditorConfiguration, visibleRanges: monaco.Range[]);
    generateDelta(old: TextEditorPropertiesMain | undefined, source: string | undefined): EditorChangedPropertiesData | undefined;
    static readFromEditor(prevProperties: TextEditorPropertiesMain | undefined, model: monaco.editor.IModel, editor: MonacoEditor): TextEditorPropertiesMain;
    private static getSelectionsFromEditor;
    private static getOptionsFromEditor;
    private static getVisibleRangesFromEditor;
    private static selectionsEqual;
    private static optionsEqual;
    private static rangesEqual;
}
//# sourceMappingURL=text-editor-main.d.ts.map
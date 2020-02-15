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
import { Disposable, DisposableCollection, Event, Emitter } from '@theia/core';
export interface MonacoEditorViewZone extends monaco.editor.IViewZone {
    id: number;
}
export declare class MonacoEditorZoneWidget implements Disposable {
    readonly editor: monaco.editor.IStandaloneCodeEditor;
    readonly zoneNode: HTMLDivElement;
    readonly containerNode: HTMLDivElement;
    protected readonly onDidLayoutChangeEmitter: Emitter<monaco.editor.IDimension>;
    readonly onDidLayoutChange: Event<monaco.editor.IDimension>;
    protected viewZone: MonacoEditorViewZone | undefined;
    protected readonly toHide: DisposableCollection;
    protected readonly toDispose: DisposableCollection;
    constructor(editor: monaco.editor.IStandaloneCodeEditor);
    dispose(): void;
    protected _options: MonacoEditorZoneWidget.Options | undefined;
    get options(): MonacoEditorZoneWidget.Options | undefined;
    hide(): void;
    show(options: MonacoEditorZoneWidget.Options): void;
    layout(heightInLines: number): void;
    protected updateTop(top: number): void;
    protected updateHeight(zoneHeight: number): void;
    protected updateContainerHeight(zoneHeight: number): void;
    protected computeContainerHeight(zoneHeight: number): {
        height: number;
        frameWidth: number;
    };
    protected updateWidth(info?: monaco.editor.EditorLayoutInfo): void;
    protected computeWidth(info?: monaco.editor.EditorLayoutInfo): number;
    protected computeLeft(info?: monaco.editor.EditorLayoutInfo): number;
}
export declare namespace MonacoEditorZoneWidget {
    interface Options {
        afterLineNumber: number;
        afterColumn?: number;
        heightInLines: number;
        showFrame?: boolean;
        frameWidth?: number;
    }
}
//# sourceMappingURL=monaco-editor-zone-widget.d.ts.map
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
import URI from '@theia/core/lib/common/uri';
import { RecursivePartial, Emitter, Event } from '@theia/core/lib/common';
import { WidgetOpenerOptions, NavigatableWidgetOpenHandler } from '@theia/core/lib/browser';
import { EditorWidget } from './editor-widget';
import { Range, Position, Location } from './editor';
import { TextEditor } from './editor';
export interface EditorOpenerOptions extends WidgetOpenerOptions {
    selection?: RecursivePartial<Range>;
    preview?: boolean;
}
export declare class EditorManager extends NavigatableWidgetOpenHandler<EditorWidget> {
    readonly id: string;
    readonly label = "Code Editor";
    protected readonly onActiveEditorChangedEmitter: Emitter<EditorWidget | undefined>;
    /**
     * Emit when the active editor is changed.
     */
    readonly onActiveEditorChanged: Event<EditorWidget | undefined>;
    protected readonly onCurrentEditorChangedEmitter: Emitter<EditorWidget | undefined>;
    /**
     * Emit when the current editor is changed.
     */
    readonly onCurrentEditorChanged: Event<EditorWidget | undefined>;
    protected init(): void;
    protected _activeEditor: EditorWidget | undefined;
    /**
     * The active editor.
     * If there is an active editor (one that has focus), active and current are the same.
     */
    get activeEditor(): EditorWidget | undefined;
    protected setActiveEditor(active: EditorWidget | undefined): void;
    protected updateActiveEditor(): void;
    protected _currentEditor: EditorWidget | undefined;
    /**
     * The most recently activated editor (which might not have the focus anymore, hence it is not active).
     * If no editor has focus, e.g. when a context menu is shown, the active editor is `undefined`, but current might be the editor that was active before the menu popped up.
     */
    get currentEditor(): EditorWidget | undefined;
    protected setCurrentEditor(current: EditorWidget | undefined): void;
    protected updateCurrentEditor(): void;
    canHandle(uri: URI, options?: WidgetOpenerOptions): number;
    open(uri: URI, options?: EditorOpenerOptions): Promise<EditorWidget>;
    protected revealSelection(widget: EditorWidget, input?: EditorOpenerOptions): void;
    protected getSelection(widget: EditorWidget, selection: RecursivePartial<Range>): Range | Position | undefined;
}
/**
 * Provides direct access to the underlying text editor.
 */
export declare abstract class EditorAccess {
    protected readonly editorManager: EditorManager;
    /**
     * The URI of the underlying document from the editor.
     */
    get uri(): string | undefined;
    /**
     * The selection location from the text editor.
     */
    get selection(): Location | undefined;
    /**
     * The unique identifier of the language the current editor belongs to.
     */
    get languageId(): string | undefined;
    /**
     * The text editor.
     */
    get editor(): TextEditor | undefined;
    /**
     * The editor widget, or `undefined` if not applicable.
     */
    protected abstract editorWidget(): EditorWidget | undefined;
}
/**
 * Provides direct access to the currently active text editor.
 */
export declare class CurrentEditorAccess extends EditorAccess {
    protected editorWidget(): EditorWidget | undefined;
}
/**
 * Provides access to the active text editor.
 */
export declare class ActiveEditorAccess extends EditorAccess {
    protected editorWidget(): EditorWidget | undefined;
}
export declare namespace EditorAccess {
    const CURRENT = "current-editor-access";
    const ACTIVE = "active-editor-access";
}
//# sourceMappingURL=editor-manager.d.ts.map
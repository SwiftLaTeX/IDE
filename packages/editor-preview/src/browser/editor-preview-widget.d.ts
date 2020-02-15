/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
import { ApplicationShell, BaseWidget, Navigatable, Saveable, StatefulWidget, Widget, WidgetConstructionOptions, WidgetManager } from '@theia/core/lib/browser';
import { Emitter, DisposableCollection } from '@theia/core/lib/common';
import URI from '@theia/core/lib/common/uri';
import { EditorWidget } from '@theia/editor/lib/browser';
import { Message } from '@phosphor/messaging';
export interface PreviewViewState {
    pinned: boolean;
    editorState: object | undefined;
    previewDescription: WidgetConstructionOptions | undefined;
}
export interface PreviewEditorPinnedEvent {
    preview: EditorPreviewWidget;
    editorWidget: EditorWidget;
}
export declare class EditorPreviewWidget extends BaseWidget implements ApplicationShell.TrackableWidgetProvider, Navigatable, StatefulWidget {
    protected widgetManager: WidgetManager;
    protected editorWidget_?: EditorWidget | undefined;
    protected pinned_: boolean;
    protected pinListeners: DisposableCollection;
    protected onDidChangeTrackableWidgetsEmitter: Emitter<Widget[]>;
    private lastParent;
    readonly onDidChangeTrackableWidgets: import("@theia/core/src/common").Event<Widget[]>;
    protected onPinnedEmitter: Emitter<PreviewEditorPinnedEvent>;
    readonly onPinned: import("@theia/core/src/common").Event<PreviewEditorPinnedEvent>;
    constructor(widgetManager: WidgetManager, editorWidget_?: EditorWidget | undefined);
    get editorWidget(): EditorWidget | undefined;
    get pinned(): boolean;
    get saveable(): Saveable | undefined;
    getResourceUri(): URI | undefined;
    createMoveToUri(resourceUri: URI): URI | undefined;
    pinEditorWidget(): void;
    replaceEditorWidget(editorWidget: EditorWidget): void;
    protected onActivateRequest(msg: Message): void;
    protected attachPreviewWidget(w: Widget): void;
    protected onAfterAttach(msg: Message): void;
    protected addTabPinningLogic(): void;
    protected onResize(msg: Widget.ResizeMessage): void;
    getTrackableWidgets(): Promise<Widget[]>;
    storeState(): PreviewViewState;
    restoreState(state: PreviewViewState): Promise<void>;
}
//# sourceMappingURL=editor-preview-widget.d.ts.map
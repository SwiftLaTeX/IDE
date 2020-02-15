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
import URI from '@theia/core/lib/common/uri';
import { ApplicationShell } from '@theia/core/lib/browser';
import { EditorManager, EditorOpenerOptions, EditorWidget } from '@theia/editor/lib/browser';
import { EditorPreviewWidget } from './editor-preview-widget';
import { EditorPreviewWidgetOptions } from './editor-preview-factory';
import { EditorPreviewPreferences } from './editor-preview-preferences';
import { WidgetOpenHandler, WidgetOpenerOptions } from '@theia/core/lib/browser';
/**
 * Opener options containing an optional preview flag.
 */
export interface PreviewEditorOpenerOptions extends EditorOpenerOptions {
    preview?: boolean;
}
/**
 * Class for managing an editor preview widget.
 */
export declare class EditorPreviewManager extends WidgetOpenHandler<EditorPreviewWidget | EditorWidget> {
    readonly id: string;
    readonly label = "Code Editor Preview";
    protected currentEditorPreview: Promise<EditorPreviewWidget | undefined>;
    protected readonly editorManager: EditorManager;
    protected readonly shell: ApplicationShell;
    protected readonly preferences: EditorPreviewPreferences;
    protected init(): void;
    protected handlePreviewWidgetCreated(widget: EditorPreviewWidget): Promise<void>;
    protected isCurrentPreviewUri(uri: URI): Promise<boolean>;
    canHandle(uri: URI, options?: PreviewEditorOpenerOptions): Promise<number>;
    open(uri: URI, options?: PreviewEditorOpenerOptions): Promise<EditorPreviewWidget | EditorWidget>;
    protected pinCurrentEditor(uri: URI, options: PreviewEditorOpenerOptions): Promise<EditorWidget | EditorPreviewWidget | undefined>;
    protected replaceCurrentPreview(uri: URI, options: PreviewEditorOpenerOptions): Promise<EditorPreviewWidget | undefined>;
    protected openNewPreview(uri: URI, options: PreviewEditorOpenerOptions): Promise<EditorPreviewWidget>;
    protected createWidgetOptions(uri: URI, options?: WidgetOpenerOptions): EditorPreviewWidgetOptions;
}
//# sourceMappingURL=editor-preview-manager.d.ts.map
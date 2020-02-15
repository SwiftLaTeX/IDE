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
import { MonacoToProtocolConverter } from 'monaco-languageclient';
import { OpenerService, WidgetOpenMode, ApplicationShell, PreferenceService } from '@theia/core/lib/browser';
import { EditorWidget, EditorOpenerOptions, EditorManager } from '@theia/editor/lib/browser';
import ICodeEditor = monaco.editor.ICodeEditor;
import CommonCodeEditor = monaco.editor.CommonCodeEditor;
import IResourceInput = monaco.editor.IResourceInput;
export declare class MonacoEditorService extends monaco.services.CodeEditorServiceImpl {
    static readonly ENABLE_PREVIEW_PREFERENCE: string;
    protected readonly openerService: OpenerService;
    protected readonly m2p: MonacoToProtocolConverter;
    protected readonly shell: ApplicationShell;
    protected readonly editors: EditorManager;
    protected readonly preferencesService: PreferenceService;
    constructor();
    getActiveCodeEditor(): ICodeEditor | undefined;
    openCodeEditor(input: IResourceInput, source?: ICodeEditor, sideBySide?: boolean): Promise<CommonCodeEditor | undefined>;
    protected findEditorWidgetByUri(widget: object | undefined, uriAsString: string): Promise<EditorWidget | undefined>;
    protected createEditorOpenerOptions(input: IResourceInput, source?: ICodeEditor, sideBySide?: boolean): EditorOpenerOptions;
    protected getEditorOpenMode(input: IResourceInput): WidgetOpenMode;
    protected getWidgetOptions(source?: ICodeEditor, sideBySide?: boolean): ApplicationShell.WidgetOptions | undefined;
}
//# sourceMappingURL=monaco-editor-service.d.ts.map
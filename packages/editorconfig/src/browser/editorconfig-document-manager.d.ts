/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc.
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
import { MonacoEditor } from '@theia/monaco/lib/browser/monaco-editor';
import { EditorManager, EditorWidget, TextEditor } from '@theia/editor/lib/browser';
import { EditorconfigService } from '../common/editorconfig-interface';
import { KnownProps } from 'editorconfig';
export declare class EditorconfigDocumentManager {
    static readonly LINE_ENDING: {
        LF: string;
        CRLF: string;
    };
    protected readonly editorManager: EditorManager;
    protected readonly editorconfigServer: EditorconfigService;
    private properties;
    protected init(): void;
    /**
     * Adds handler to update editor properties before saving the document.
     *
     * @param editorWidget editor widget
     */
    protected addOnSaveHandler(editorWidget: EditorWidget): void;
    /**
     * Refreshes editorconfig properties for the editor.
     *
     * @param editor editor
     */
    protected refreshProperties(editor: TextEditor): void;
    /**
     * Applies editorconfig properties for the editor.
     *
     * @param properties editorcofig properties
     * @param editor Monaco editor
     */
    applyProperties(properties: KnownProps, editor: MonacoEditor): void;
    /**
     * Determines whether property is set.
     */
    isSet(property: any): boolean;
    /**
     * indent_style: set to tab or space to use hard tabs or soft tabs respectively.
     */
    ensureIndentStyle(editor: MonacoEditor, properties: KnownProps): void;
    /**
     * indent_size: a whole number defining the number of columns
     * used for each indentation level and the width of soft tabs (when supported).
     * When set to tab, the value of tab_width (if specified) will be used.
     */
    ensureIndentSize(editor: MonacoEditor, properties: KnownProps): void;
    /**
     * tab_width: a whole number defining the number of columns
     * used to represent a tab character. This defaults to the value of
     * indent_size and doesn't usually need to be specified.
     */
    ensureTabWidth(editor: MonacoEditor, properties: KnownProps): void;
    /**
     * end_of_line: set to lf or crlf to control how line breaks are represented.
     */
    ensureEndOfLine(editor: MonacoEditor, properties: KnownProps): void;
    /**
     * Returns array of edits trimming trailing whitespaces for the whole document.
     *
     * @param editor editor
     * @param properties editorconfig properties
     */
    private getEditsTrimmingTrailingWhitespaces;
    /**
     * Returns edit inserting final new line at the end of the document.
     *
     * @param editor editor
     * @param properties editorconfig properties
     */
    private getEditInsertingFinalNewLine;
}
//# sourceMappingURL=editorconfig-document-manager.d.ts.map
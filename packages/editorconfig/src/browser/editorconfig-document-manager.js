"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var monaco_editor_1 = require("@theia/monaco/lib/browser/monaco-editor");
var browser_1 = require("@theia/languages/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
var editorconfig_interface_1 = require("../common/editorconfig-interface");
var EditorconfigDocumentManager = /** @class */ (function () {
    function EditorconfigDocumentManager() {
        this.properties = {};
    }
    EditorconfigDocumentManager_1 = EditorconfigDocumentManager;
    EditorconfigDocumentManager.prototype.init = function () {
        var _this = this;
        // refresh properties when opening an editor
        this.editorManager.onCreated(function (e) {
            _this.addOnSaveHandler(e);
            _this.refreshProperties(e.editor);
        });
        // refresh properties when changing current editor
        this.editorManager.onCurrentEditorChanged(function (e) {
            if (e) {
                _this.refreshProperties(e.editor);
            }
        });
    };
    /**
     * Adds handler to update editor properties before saving the document.
     *
     * @param editorWidget editor widget
     */
    EditorconfigDocumentManager.prototype.addOnSaveHandler = function (editorWidget) {
        var _this = this;
        var monacoEditor = monaco_editor_1.MonacoEditor.get(editorWidget);
        if (monacoEditor) {
            monacoEditor.document.onWillSaveModel(function (event) {
                event.waitUntil(new Promise(function (resolve) {
                    var uri = monacoEditor.uri.toString();
                    var properties = _this.properties[uri];
                    var edits = [];
                    edits.push.apply(edits, __spread(_this.getEditsTrimmingTrailingWhitespaces(monacoEditor, properties, event.reason)));
                    var edit = _this.getEditInsertingFinalNewLine(monacoEditor, properties);
                    if (edit) {
                        edits.push(edit);
                        // get current cursor position
                        var cursor_1 = monacoEditor.cursor;
                        // and then restore it after resolving the promise
                        setTimeout(function () {
                            monacoEditor.cursor = cursor_1;
                        }, 0);
                    }
                    resolve(edits);
                }));
            });
        }
    };
    /**
     * Refreshes editorconfig properties for the editor.
     *
     * @param editor editor
     */
    EditorconfigDocumentManager.prototype.refreshProperties = function (editor) {
        var _this = this;
        if (editor instanceof monaco_editor_1.MonacoEditor) {
            var uri_1 = editor.uri.toString();
            this.editorconfigServer.getConfig(uri_1).then(function (properties) {
                _this.properties[uri_1] = properties;
                _this.applyProperties(properties, editor);
            });
        }
    };
    /**
     * Applies editorconfig properties for the editor.
     *
     * @param properties editorcofig properties
     * @param editor Monaco editor
     */
    EditorconfigDocumentManager.prototype.applyProperties = function (properties, editor) {
        if (this.isSet(properties.indent_style)) {
            this.ensureIndentStyle(editor, properties);
        }
        if (this.isSet(properties.indent_size)) {
            this.ensureIndentSize(editor, properties);
        }
        if (this.isSet(properties.end_of_line)) {
            this.ensureEndOfLine(editor, properties);
        }
    };
    /**
     * Determines whether property is set.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EditorconfigDocumentManager.prototype.isSet = function (property) {
        if (!property || 'unset' === property) {
            return false;
        }
        return true;
    };
    /**
     * indent_style: set to tab or space to use hard tabs or soft tabs respectively.
     */
    EditorconfigDocumentManager.prototype.ensureIndentStyle = function (editor, properties) {
        if ('space' === properties.indent_style) {
            editor.document.textEditorModel.updateOptions({
                insertSpaces: true
            });
        }
        else if ('tab' === properties.indent_style) {
            editor.document.textEditorModel.updateOptions({
                insertSpaces: false
            });
        }
    };
    /**
     * indent_size: a whole number defining the number of columns
     * used for each indentation level and the width of soft tabs (when supported).
     * When set to tab, the value of tab_width (if specified) will be used.
     */
    EditorconfigDocumentManager.prototype.ensureIndentSize = function (editor, properties) {
        if ('tab' === properties.indent_size) {
            if (this.isSet(properties.tab_width)) {
                this.ensureTabWidth(editor, properties);
            }
        }
        else if (typeof properties.indent_size === 'number') {
            var indentSize = properties.indent_size;
            editor.document.textEditorModel.updateOptions({
                tabSize: indentSize
            });
        }
    };
    /**
     * tab_width: a whole number defining the number of columns
     * used to represent a tab character. This defaults to the value of
     * indent_size and doesn't usually need to be specified.
     */
    EditorconfigDocumentManager.prototype.ensureTabWidth = function (editor, properties) {
        if (typeof properties.tab_width === 'number') {
            var tabWidth = properties.tab_width;
            editor.document.textEditorModel.updateOptions({
                tabSize: tabWidth
            });
        }
    };
    /**
     * end_of_line: set to lf or crlf to control how line breaks are represented.
     */
    EditorconfigDocumentManager.prototype.ensureEndOfLine = function (editor, properties) {
        if ('lf' === properties.end_of_line) {
            editor.document.textEditorModel.setEOL(monaco.editor.EndOfLineSequence.LF);
        }
        else if ('crlf' === properties.end_of_line) {
            editor.document.textEditorModel.setEOL(monaco.editor.EndOfLineSequence.CRLF);
        }
    };
    /**
     * Returns array of edits trimming trailing whitespaces for the whole document.
     *
     * @param editor editor
     * @param properties editorconfig properties
     */
    EditorconfigDocumentManager.prototype.getEditsTrimmingTrailingWhitespaces = function (editor, properties, saveReason) {
        var edits = [];
        if (this.isSet(properties.trim_trailing_whitespace)) {
            if (monaco_editor_1.MonacoEditor.get(this.editorManager.activeEditor) === editor) {
                var trimReason = (saveReason !== browser_1.TextDocumentSaveReason.Manual) ? 'auto-save' : undefined;
                editor.commandService.executeCommand('editor.action.trimTrailingWhitespace', {
                    reason: trimReason
                });
                return [];
            }
            var lines = editor.document.lineCount;
            for (var i = 1; i <= lines; i++) {
                var line = editor.document.textEditorModel.getLineContent(i);
                var trimmedLine = line.trimRight();
                if (line.length !== trimmedLine.length) {
                    edits.push({
                        forceMoveMarkers: false,
                        range: new monaco.Range(i, trimmedLine.length + 1, i, line.length + 1),
                        text: ''
                    });
                }
            }
        }
        return edits;
    };
    /**
     * Returns edit inserting final new line at the end of the document.
     *
     * @param editor editor
     * @param properties editorconfig properties
     */
    EditorconfigDocumentManager.prototype.getEditInsertingFinalNewLine = function (editor, properties) {
        if (this.isSet(properties.insert_final_newline)) {
            var lines = editor.document.lineCount;
            var lineContent = editor.document.textEditorModel.getLineContent(lines);
            if (this.isSet(properties.trim_trailing_whitespace)) {
                lineContent = lineContent.trimRight();
            }
            var lineEnding = 'crlf' === properties.end_of_line ?
                EditorconfigDocumentManager_1.LINE_ENDING.CRLF : EditorconfigDocumentManager_1.LINE_ENDING.LF;
            if ('' !== lineContent) {
                return {
                    forceMoveMarkers: false,
                    range: new monaco.Range(lines, lineContent.length + 1, lines, lineContent.length + 1),
                    text: lineEnding
                };
            }
        }
        return undefined;
    };
    var EditorconfigDocumentManager_1;
    EditorconfigDocumentManager.LINE_ENDING = {
        LF: '\n',
        CRLF: '\r\n'
    };
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], EditorconfigDocumentManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(editorconfig_interface_1.EditorconfigService),
        __metadata("design:type", Object)
    ], EditorconfigDocumentManager.prototype, "editorconfigServer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditorconfigDocumentManager.prototype, "init", null);
    EditorconfigDocumentManager = EditorconfigDocumentManager_1 = __decorate([
        inversify_1.injectable()
    ], EditorconfigDocumentManager);
    return EditorconfigDocumentManager;
}());
exports.EditorconfigDocumentManager = EditorconfigDocumentManager;
//# sourceMappingURL=editorconfig-document-manager.js.map
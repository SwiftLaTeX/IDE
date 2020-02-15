"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var editor_manager_1 = require("./editor-manager");
var inversify_1 = require("inversify");
var status_bar_1 = require("@theia/core/lib/browser/status-bar/status-bar");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/languages/lib/browser");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var core_1 = require("@theia/core");
var editor_command_1 = require("./editor-command");
var editor_quick_open_service_1 = require("./editor-quick-open-service");
var supported_encodings_1 = require("./supported-encodings");
var EditorContribution = /** @class */ (function () {
    function EditorContribution() {
        this.toDisposeOnCurrentEditorChanged = new core_1.DisposableCollection();
    }
    EditorContribution.prototype.onStart = function () {
        var _this = this;
        this.initEditorContextKeys();
        this.updateStatusBar();
        this.editorManager.onCurrentEditorChanged(function () { return _this.updateStatusBar(); });
    };
    /** @deprecated since 0.5.0 - will be removed in farther releases */
    EditorContribution.prototype.initResourceContextKeys = function () {
    };
    /** @deprecated since 0.5.0 - will be removed in farther releases */
    EditorContribution.prototype.getLanguageId = function (uri) {
        var e_1, _a;
        var languages = this.languages.languages;
        if (uri && languages) {
            try {
                for (var languages_1 = __values(languages), languages_1_1 = languages_1.next(); !languages_1_1.done; languages_1_1 = languages_1.next()) {
                    var language = languages_1_1.value;
                    if (language.extensions.has(uri.path.ext)) {
                        return language.id;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (languages_1_1 && !languages_1_1.done && (_a = languages_1.return)) _a.call(languages_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return undefined;
    };
    EditorContribution.prototype.initEditorContextKeys = function () {
        var e_2, _a;
        var _this = this;
        var editorIsOpen = this.contextKeyService.createKey('editorIsOpen', false);
        var textCompareEditorVisible = this.contextKeyService.createKey('textCompareEditorVisible', false);
        var updateContextKeys = function () {
            var widgets = _this.editorManager.all;
            editorIsOpen.set(!!widgets.length);
            textCompareEditorVisible.set(widgets.some(function (widget) { return browser_1.DiffUris.isDiffUri(widget.editor.uri); }));
        };
        updateContextKeys();
        try {
            for (var _b = __values(this.editorManager.all), _c = _b.next(); !_c.done; _c = _b.next()) {
                var widget = _c.value;
                widget.disposed.connect(updateContextKeys);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.editorManager.onCreated(function (widget) {
            updateContextKeys();
            widget.disposed.connect(updateContextKeys);
        });
    };
    EditorContribution.prototype.updateStatusBar = function () {
        var _this = this;
        this.toDisposeOnCurrentEditorChanged.dispose();
        var widget = this.editorManager.currentEditor;
        var editor = widget && widget.editor;
        this.updateLanguageStatus(editor);
        this.updateEncodingStatus(editor);
        this.setCursorPositionStatus(editor);
        if (editor) {
            this.toDisposeOnCurrentEditorChanged.pushAll([
                editor.onLanguageChanged(function () { return _this.updateLanguageStatus(editor); }),
                editor.onEncodingChanged(function () { return _this.updateEncodingStatus(editor); }),
                editor.onCursorPositionChanged(function () { return _this.setCursorPositionStatus(editor); })
            ]);
        }
    };
    EditorContribution.prototype.updateLanguageStatus = function (editor) {
        if (!editor) {
            this.statusBar.removeElement('editor-status-language');
            return;
        }
        var language = this.languages.getLanguage && this.languages.getLanguage(editor.document.languageId);
        var languageName = language ? language.name : '';
        this.statusBar.setElement('editor-status-language', {
            text: languageName,
            alignment: status_bar_1.StatusBarAlignment.RIGHT,
            priority: 1,
            command: editor_command_1.EditorCommands.CHANGE_LANGUAGE.id,
            tooltip: 'Select Language Mode'
        });
    };
    EditorContribution.prototype.updateEncodingStatus = function (editor) {
        if (!editor) {
            this.statusBar.removeElement('editor-status-encoding');
            return;
        }
        this.statusBar.setElement('editor-status-encoding', {
            text: supported_encodings_1.SUPPORTED_ENCODINGS[editor.getEncoding()].labelShort,
            alignment: status_bar_1.StatusBarAlignment.RIGHT,
            priority: 10,
            command: editor_command_1.EditorCommands.CHANGE_ENCODING.id,
            tooltip: 'Select Encoding'
        });
    };
    EditorContribution.prototype.setCursorPositionStatus = function (editor) {
        if (!editor) {
            this.statusBar.removeElement('editor-status-cursor-position');
            return;
        }
        var cursor = editor.cursor;
        this.statusBar.setElement('editor-status-cursor-position', {
            text: "Ln " + (cursor.line + 1) + ", Col " + editor.getVisibleColumn(cursor),
            alignment: status_bar_1.StatusBarAlignment.RIGHT,
            priority: 100,
            tooltip: 'Go To Line',
            command: 'editor.action.gotoLine'
        });
    };
    EditorContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(editor_command_1.EditorCommands.SHOW_ALL_OPENED_EDITORS, {
            execute: function () { return _this.editorQuickOpenService.open(); }
        });
    };
    EditorContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: editor_command_1.EditorCommands.SHOW_ALL_OPENED_EDITORS.id,
            keybinding: 'ctrlcmd+k ctrlcmd+p'
        });
    };
    EditorContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.editorQuickOpenService);
    };
    __decorate([
        inversify_1.inject(status_bar_1.StatusBar),
        __metadata("design:type", Object)
    ], EditorContribution.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.Languages),
        __metadata("design:type", Object)
    ], EditorContribution.prototype, "languages", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], EditorContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(editor_quick_open_service_1.EditorQuickOpenService),
        __metadata("design:type", editor_quick_open_service_1.EditorQuickOpenService)
    ], EditorContribution.prototype, "editorQuickOpenService", void 0);
    EditorContribution = __decorate([
        inversify_1.injectable()
    ], EditorContribution);
    return EditorContribution;
}());
exports.EditorContribution = EditorContribution;
//# sourceMappingURL=editor-contribution.js.map
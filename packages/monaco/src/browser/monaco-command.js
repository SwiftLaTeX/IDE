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
var inversify_1 = require("inversify");
var lib_1 = require("monaco-languageclient/lib");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var quick_open_service_1 = require("@theia/core/lib/browser/quick-open/quick-open-service");
var quick_open_model_1 = require("@theia/core/lib/browser/quick-open/quick-open-model");
var browser_2 = require("@theia/editor/lib/browser");
var monaco_command_registry_1 = require("./monaco-command-registry");
var MenuRegistry = monaco.actions.MenuRegistry;
var MonacoCommands;
(function (MonacoCommands) {
    var e_1, _a, e_2, _b, e_3, _c;
    MonacoCommands.UNDO = 'undo';
    MonacoCommands.REDO = 'redo';
    MonacoCommands.COMMON_KEYBOARD_ACTIONS = new Set([MonacoCommands.UNDO, MonacoCommands.REDO]);
    MonacoCommands.COMMON_ACTIONS = {};
    MonacoCommands.COMMON_ACTIONS[MonacoCommands.UNDO] = browser_1.CommonCommands.UNDO.id;
    MonacoCommands.COMMON_ACTIONS[MonacoCommands.REDO] = browser_1.CommonCommands.REDO.id;
    MonacoCommands.COMMON_ACTIONS['actions.find'] = browser_1.CommonCommands.FIND.id;
    MonacoCommands.COMMON_ACTIONS['editor.action.startFindReplaceAction'] = browser_1.CommonCommands.REPLACE.id;
    MonacoCommands.SELECTION_SELECT_ALL = 'editor.action.select.all';
    MonacoCommands.SELECTION_EXPAND_SELECTION = 'editor.action.smartSelect.grow';
    MonacoCommands.SELECTION_SHRINK_SELECTION = 'editor.action.smartSelect.shrink';
    MonacoCommands.SELECTION_COPY_LINE_UP = 'editor.action.copyLinesUpAction';
    MonacoCommands.SELECTION_COPY_LINE_DOWN = 'editor.action.copyLinesDownAction';
    MonacoCommands.SELECTION_MOVE_LINE_UP = 'editor.action.moveLinesUpAction';
    MonacoCommands.SELECTION_MOVE_LINE_DOWN = 'editor.action.moveLinesDownAction';
    MonacoCommands.SELECTION_ADD_CURSOR_ABOVE = 'editor.action.insertCursorAbove';
    MonacoCommands.SELECTION_ADD_CURSOR_BELOW = 'editor.action.insertCursorBelow';
    MonacoCommands.SELECTION_ADD_CURSOR_TO_LINE_END = 'editor.action.insertCursorAtEndOfEachLineSelected';
    MonacoCommands.SELECTION_ADD_NEXT_OCCURRENCE = 'editor.action.addSelectionToNextFindMatch';
    MonacoCommands.SELECTION_ADD_PREVIOUS_OCCURRENCE = 'editor.action.addSelectionToPreviousFindMatch';
    MonacoCommands.SELECTION_SELECT_ALL_OCCURRENCES = 'editor.action.selectHighlights';
    MonacoCommands.GO_TO_DEFINITION = 'editor.action.revealDefinition';
    MonacoCommands.ACTIONS = new Map();
    MonacoCommands.ACTIONS.set(MonacoCommands.SELECTION_SELECT_ALL, { id: MonacoCommands.SELECTION_SELECT_ALL, label: 'Select All', delegate: 'editor.action.selectAll' });
    MonacoCommands.EXCLUDE_ACTIONS = new Set(__spread(Object.keys(MonacoCommands.COMMON_ACTIONS), [
        'editor.action.quickCommand',
        'editor.action.clipboardCutAction',
        'editor.action.clipboardCopyAction',
        'editor.action.clipboardPasteAction'
    ]));
    var iconClasses = new Map();
    try {
        for (var _d = __values(MenuRegistry.getMenuItems(7)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var menuItem = _e.value;
            if (menuItem.command.iconClass) {
                iconClasses.set(menuItem.command.id, menuItem.command.iconClass);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _f = __values(monaco.editorExtensions.EditorExtensionsRegistry.getEditorActions()), _g = _f.next(); !_g.done; _g = _f.next()) {
            var command = _g.value;
            var id = command.id;
            if (!MonacoCommands.EXCLUDE_ACTIONS.has(id)) {
                var label = command.label;
                var iconClass = iconClasses.get(id);
                MonacoCommands.ACTIONS.set(id, { id: id, label: label, iconClass: iconClass });
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var _h = __values(monaco.keybindings.KeybindingsRegistry.getDefaultKeybindings()), _j = _h.next(); !_j.done; _j = _h.next()) {
            var keybinding = _j.value;
            var id = keybinding.command;
            if (!MonacoCommands.ACTIONS.has(id) && !MonacoCommands.EXCLUDE_ACTIONS.has(id)) {
                MonacoCommands.ACTIONS.set(id, { id: id, delegate: id });
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
        }
        finally { if (e_3) throw e_3.error; }
    }
})(MonacoCommands = exports.MonacoCommands || (exports.MonacoCommands = {}));
var MonacoEditorCommandHandlers = /** @class */ (function () {
    function MonacoEditorCommandHandlers() {
    }
    MonacoEditorCommandHandlers.prototype.registerCommands = function () {
        this.registerCommonCommandHandlers();
        this.registerEditorCommandHandlers();
        this.registerMonacoActionCommands();
        this.registerInternalLanguageServiceCommands();
    };
    MonacoEditorCommandHandlers.prototype.registerInternalLanguageServiceCommands = function () {
        var e_4, _a;
        var instantiationService = monaco.services.StaticServices.instantiationService.get();
        var monacoCommands = monaco.commands.CommandsRegistry.getCommands();
        var _loop_1 = function (command) {
            if (command.startsWith('_execute')) {
                this_1.commandRegistry.registerCommand({
                    id: command
                }, {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    execute: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return instantiationService.invokeFunction.apply(instantiationService, __spread([monacoCommands.get(command).handler], args));
                    }
                });
            }
        };
        var this_1 = this;
        try {
            for (var _b = __values(monacoCommands.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var command = _c.value;
                _loop_1(command);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MonacoEditorCommandHandlers.prototype.registerCommonCommandHandlers = function () {
        // eslint-disable-next-line guard-for-in
        for (var action in MonacoCommands.COMMON_ACTIONS) {
            var command = MonacoCommands.COMMON_ACTIONS[action];
            var handler = this.newCommonActionHandler(action);
            this.monacoCommandRegistry.registerHandler(command, handler);
        }
    };
    MonacoEditorCommandHandlers.prototype.newCommonActionHandler = function (action) {
        return this.isCommonKeyboardAction(action) ? this.newKeyboardHandler(action) : this.newActionHandler(action);
    };
    MonacoEditorCommandHandlers.prototype.isCommonKeyboardAction = function (action) {
        return MonacoCommands.COMMON_KEYBOARD_ACTIONS.has(action);
    };
    MonacoEditorCommandHandlers.prototype.registerEditorCommandHandlers = function () {
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.SHOW_REFERENCES.id, this.newShowReferenceHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.CONFIG_INDENTATION.id, this.newConfigIndentationHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.CONFIG_EOL.id, this.newConfigEolHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.INDENT_USING_SPACES.id, this.newConfigTabSizeHandler(true));
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.INDENT_USING_TABS.id, this.newConfigTabSizeHandler(false));
    };
    MonacoEditorCommandHandlers.prototype.newShowReferenceHandler = function () {
        var _this = this;
        return {
            execute: function (editor, uri, position, locations) {
                editor.commandService.executeCommand('editor.action.showReferences', monaco.Uri.parse(uri), _this.p2m.asPosition(position), locations.map(function (l) { return _this.p2m.asLocation(l); }));
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newConfigIndentationHandler = function () {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureIndentation(editor); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureIndentation = function (editor) {
        var _this = this;
        var options = [true, false].map(function (useSpaces) {
            return new quick_open_model_1.QuickOpenItem({
                label: "Indent Using " + (useSpaces ? 'Spaces' : 'Tabs'),
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.configureTabSize(editor, useSpaces);
                    }
                    return false;
                }
            });
        });
        this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(options); } }, {
            placeholder: 'Select Action',
            fuzzyMatchLabel: true
        });
    };
    MonacoEditorCommandHandlers.prototype.newConfigEolHandler = function () {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureEol(editor); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureEol = function (editor) {
        var _this = this;
        var options = ['LF', 'CRLF'].map(function (lineEnding) {
            return new quick_open_model_1.QuickOpenItem({
                label: lineEnding,
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.setEol(editor, lineEnding);
                        return true;
                    }
                    return false;
                }
            });
        });
        this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(options); } }, {
            placeholder: 'Select End of Line Sequence',
            fuzzyMatchLabel: true
        });
    };
    MonacoEditorCommandHandlers.prototype.setEol = function (editor, lineEnding) {
        var model = editor.document && editor.document.textEditorModel;
        if (model) {
            if (lineEnding === 'CRLF' || lineEnding === '\r\n') {
                model.pushEOL(monaco.editor.EndOfLineSequence.CRLF);
            }
            else {
                model.pushEOL(monaco.editor.EndOfLineSequence.LF);
            }
        }
    };
    MonacoEditorCommandHandlers.prototype.newConfigTabSizeHandler = function (useSpaces) {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureTabSize(editor, useSpaces); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureTabSize = function (editor, useSpaces) {
        var model = editor.document && editor.document.textEditorModel;
        if (model) {
            var tabSize_1 = model.getOptions().tabSize;
            var sizes = Array.from(Array(8), function (_, x) { return x + 1; });
            var tabSizeOptions_1 = sizes.map(function (size) {
                return new quick_open_model_1.QuickOpenItem({
                    label: size === tabSize_1 ? size + "   Configured Tab Size" : size.toString(),
                    run: function (mode) {
                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                            return false;
                        }
                        model.updateOptions({
                            tabSize: size || tabSize_1,
                            insertSpaces: useSpaces
                        });
                        return true;
                    }
                });
            });
            this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(tabSizeOptions_1); } }, {
                placeholder: 'Select Tab Size for Current File',
                fuzzyMatchLabel: true,
                selectIndex: function (lookFor) {
                    if (!lookFor || lookFor === '') {
                        return tabSize_1 - 1;
                    }
                    return 0;
                }
            });
        }
    };
    MonacoEditorCommandHandlers.prototype.registerMonacoActionCommands = function () {
        var e_5, _a;
        try {
            for (var _b = __values(MonacoCommands.ACTIONS.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var action = _c.value;
                var handler = this.newMonacoActionHandler(action);
                this.monacoCommandRegistry.registerCommand(action, handler);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    MonacoEditorCommandHandlers.prototype.newMonacoActionHandler = function (action) {
        var delegate = action.delegate;
        return delegate ? this.newDelegateHandler(delegate) : this.newActionHandler(action.id);
    };
    MonacoEditorCommandHandlers.prototype.newKeyboardHandler = function (action) {
        return {
            execute: function (editor) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return editor.getControl()._modelData.cursor.trigger('keyboard', action, args);
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newCommandHandler = function (action) {
        return {
            execute: function (editor) {
                var _a;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return (_a = editor.commandService).executeCommand.apply(_a, __spread([action], args));
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newActionHandler = function (action) {
        return {
            execute: function (editor) { return editor.runAction(action); },
            isEnabled: function (editor) { return editor.isActionSupported(action); }
        };
    };
    MonacoEditorCommandHandlers.prototype.newDelegateHandler = function (action) {
        return {
            execute: function (editor) {
                var _a;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return (_a = editor.commandService).executeMonacoCommand.apply(_a, __spread([action], args));
            }
        };
    };
    __decorate([
        inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry),
        __metadata("design:type", monaco_command_registry_1.MonacoCommandRegistry)
    ], MonacoEditorCommandHandlers.prototype, "monacoCommandRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], MonacoEditorCommandHandlers.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(lib_1.ProtocolToMonacoConverter),
        __metadata("design:type", lib_1.ProtocolToMonacoConverter)
    ], MonacoEditorCommandHandlers.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], MonacoEditorCommandHandlers.prototype, "quickOpenService", void 0);
    MonacoEditorCommandHandlers = __decorate([
        inversify_1.injectable()
    ], MonacoEditorCommandHandlers);
    return MonacoEditorCommandHandlers;
}());
exports.MonacoEditorCommandHandlers = MonacoEditorCommandHandlers;
//# sourceMappingURL=monaco-command.js.map
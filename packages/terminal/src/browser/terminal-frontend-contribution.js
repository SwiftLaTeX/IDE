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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var common_1 = require("@theia/core/lib/common");
var quick_pick_service_1 = require("@theia/core/lib/common/quick-pick-service");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var terminal_widget_impl_1 = require("./terminal-widget-impl");
var terminal_keybinding_contexts_1 = require("./terminal-keybinding-contexts");
var terminal_widget_1 = require("./base/terminal-widget");
var uri_command_handler_1 = require("@theia/core/lib/common/uri-command-handler");
var common_2 = require("@theia/filesystem/lib/common");
var shell_terminal_protocol_1 = require("../common/shell-terminal-protocol");
var uri_1 = require("@theia/core/lib/common/uri");
var core_1 = require("@theia/core");
var browser_3 = require("@theia/workspace/lib/browser");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var terminal_theme_service_1 = require("./terminal-theme-service");
var TerminalMenus;
(function (TerminalMenus) {
    TerminalMenus.TERMINAL = __spread(core_1.MAIN_MENU_BAR, ['7_terminal']);
    TerminalMenus.TERMINAL_NEW = __spread(TerminalMenus.TERMINAL, ['1_terminal']);
    TerminalMenus.TERMINAL_TASKS = __spread(TerminalMenus.TERMINAL, ['2_terminal']);
    TerminalMenus.TERMINAL_TASKS_INFO = __spread(TerminalMenus.TERMINAL_TASKS, ['3_terminal']);
    TerminalMenus.TERMINAL_TASKS_CONFIG = __spread(TerminalMenus.TERMINAL_TASKS, ['4_terminal']);
    TerminalMenus.TERMINAL_NAVIGATOR_CONTEXT_MENU = ['navigator-context-menu', 'navigation'];
})(TerminalMenus = exports.TerminalMenus || (exports.TerminalMenus = {}));
var TerminalCommands;
(function (TerminalCommands) {
    var TERMINAL_CATEGORY = 'Terminal';
    TerminalCommands.NEW = {
        id: 'terminal:new',
        category: TERMINAL_CATEGORY,
        label: 'Open New Terminal'
    };
    TerminalCommands.NEW_ACTIVE_WORKSPACE = {
        id: 'terminal:new:active:workspace',
        category: TERMINAL_CATEGORY,
        label: 'Open New Terminal (In Active Workspace)'
    };
    TerminalCommands.TERMINAL_CLEAR = {
        id: 'terminal:clear',
        category: TERMINAL_CATEGORY,
        label: 'Clear Terminal'
    };
    TerminalCommands.TERMINAL_CONTEXT = {
        id: 'terminal:context',
        category: TERMINAL_CATEGORY,
        label: 'Open in Terminal'
    };
    TerminalCommands.SPLIT = {
        id: 'terminal:split',
        category: TERMINAL_CATEGORY,
        label: 'Split Terminal'
    };
    /**
     * Command that displays all terminals that are currently opened
     */
    TerminalCommands.SHOW_ALL_OPENED_TERMINALS = {
        id: 'workbench.action.showAllTerminals',
        category: 'View',
        label: 'Show All Opened Terminals'
    };
})(TerminalCommands = exports.TerminalCommands || (exports.TerminalCommands = {}));
var TerminalFrontendContribution = /** @class */ (function () {
    function TerminalFrontendContribution(shell, shellTerminalServer, widgetManager, fileSystem, selectionService) {
        this.shell = shell;
        this.shellTerminalServer = shellTerminalServer;
        this.widgetManager = widgetManager;
        this.fileSystem = fileSystem;
        this.selectionService = selectionService;
        this.onDidCreateTerminalEmitter = new common_1.Emitter();
        this.onDidCreateTerminal = this.onDidCreateTerminalEmitter.event;
        this.onDidChangeCurrentTerminalEmitter = new common_1.Emitter();
        this.onDidChangeCurrentTerminal = this.onDidChangeCurrentTerminalEmitter.event;
    }
    TerminalFrontendContribution.prototype.init = function () {
        var _this = this;
        this.shell.currentChanged.connect(function () { return _this.updateCurrentTerminal(); });
        this.widgetManager.onDidCreateWidget(function (_a) {
            var widget = _a.widget;
            if (widget instanceof terminal_widget_1.TerminalWidget) {
                _this.updateCurrentTerminal();
                _this.onDidCreateTerminalEmitter.fire(widget);
            }
        });
        var terminalFocusKey = this.contextKeyService.createKey('terminalFocus', false);
        var updateFocusKey = function () { return terminalFocusKey.set(_this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget); };
        updateFocusKey();
        this.shell.activeChanged.connect(updateFocusKey);
    };
    Object.defineProperty(TerminalFrontendContribution.prototype, "currentTerminal", {
        get: function () {
            return this._currentTerminal;
        },
        enumerable: true,
        configurable: true
    });
    TerminalFrontendContribution.prototype.setCurrentTerminal = function (current) {
        if (this._currentTerminal !== current) {
            this._currentTerminal = current;
            this.onDidChangeCurrentTerminalEmitter.fire(this._currentTerminal);
        }
    };
    TerminalFrontendContribution.prototype.updateCurrentTerminal = function () {
        var widget = this.shell.currentWidget;
        if (widget instanceof terminal_widget_1.TerminalWidget) {
            this.setCurrentTerminal(widget);
        }
        else if (!this._currentTerminal || !this._currentTerminal.isVisible) {
            this.setCurrentTerminal(undefined);
        }
    };
    Object.defineProperty(TerminalFrontendContribution.prototype, "all", {
        get: function () {
            return this.widgetManager.getWidgets(terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID);
        },
        enumerable: true,
        configurable: true
    });
    TerminalFrontendContribution.prototype.getById = function (id) {
        return this.all.find(function (terminal) { return terminal.id === id; });
    };
    TerminalFrontendContribution.prototype.getDefaultShell = function () {
        return this.shellTerminalServer.getDefaultShell();
    };
    TerminalFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(TerminalCommands.NEW, {
            execute: function () { return _this.openTerminal(); }
        });
        commands.registerCommand(TerminalCommands.NEW_ACTIVE_WORKSPACE, {
            execute: function () { return _this.openActiveWorkspaceTerminal(); }
        });
        commands.registerCommand(TerminalCommands.SPLIT, {
            execute: function (widget) { return _this.splitTerminal(widget); },
            isEnabled: function (widget) { return !!_this.getTerminalRef(widget); },
            isVisible: function (widget) { return !!_this.getTerminalRef(widget); }
        });
        commands.registerCommand(TerminalCommands.TERMINAL_CLEAR);
        commands.registerHandler(TerminalCommands.TERMINAL_CLEAR.id, {
            isEnabled: function () { return _this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget; },
            execute: function () { return _this.shell.activeWidget.clearOutput(); }
        });
        commands.registerCommand(TerminalCommands.TERMINAL_CONTEXT, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            execute: function (uri) { return __awaiter(_this, void 0, void 0, function () {
                var stat, cwd, termWidget;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fileSystem.getFileStat(uri.toString())];
                        case 1:
                            stat = _a.sent();
                            if (!stat) {
                                return [2 /*return*/];
                            }
                            cwd = (stat.isDirectory) ? uri.toString() : uri.parent.toString();
                            return [4 /*yield*/, this.newTerminal({ cwd: cwd })];
                        case 2:
                            termWidget = _a.sent();
                            termWidget.start();
                            this.activateTerminal(termWidget);
                            return [2 /*return*/];
                    }
                });
            }); }
        }));
    };
    TerminalFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerSubmenu(TerminalMenus.TERMINAL, 'Terminal');
        menus.registerMenuAction(TerminalMenus.TERMINAL_NEW, {
            commandId: TerminalCommands.NEW.id,
            label: 'New Terminal',
            order: '0'
        });
        menus.registerMenuAction(TerminalMenus.TERMINAL_NEW, {
            commandId: TerminalCommands.SPLIT.id,
            order: '1'
        });
        menus.registerMenuAction(TerminalMenus.TERMINAL_NAVIGATOR_CONTEXT_MENU, {
            commandId: TerminalCommands.TERMINAL_CONTEXT.id,
            order: 'z'
        });
    };
    TerminalFrontendContribution.prototype.registerToolbarItems = function (toolbar) {
        toolbar.registerItem({
            id: TerminalCommands.SPLIT.id,
            command: TerminalCommands.SPLIT.id,
            text: '$(columns)',
            tooltip: TerminalCommands.SPLIT.label
        });
    };
    TerminalFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: TerminalCommands.NEW.id,
            keybinding: 'ctrl+shift+`'
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.NEW_ACTIVE_WORKSPACE.id,
            keybinding: 'ctrl+`'
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.TERMINAL_CLEAR.id,
            keybinding: 'ctrlcmd+k',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
        });
        /* Register passthrough keybindings for combinations recognized by
           xterm.js and converted to control characters.

             See: https://github.com/xtermjs/xterm.js/blob/v3/src/Terminal.ts#L1684 */
        /* Register ctrl + k (the passed Key) as a passthrough command in the
           context of the terminal.  */
        var regCtrl = function (k) {
            keybindings.registerKeybinding({
                command: browser_1.KeybindingRegistry.PASSTHROUGH_PSEUDO_COMMAND,
                keybinding: browser_1.KeyCode.createKeyCode({ key: k, ctrl: true }).toString(),
                context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive,
            });
        };
        /* Register alt + k (the passed Key) as a passthrough command in the
           context of the terminal.  */
        var regAlt = function (k) {
            keybindings.registerKeybinding({
                command: browser_1.KeybindingRegistry.PASSTHROUGH_PSEUDO_COMMAND,
                keybinding: browser_1.KeyCode.createKeyCode({ key: k, alt: true }).toString(),
                context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
            });
        };
        /* ctrl-space (000 - NUL).  */
        regCtrl(browser_1.Key.SPACE);
        /* ctrl-A (001/1/0x1) through ctrl-Z (032/26/0x1A).  */
        for (var i = 0; i < 26; i++) {
            regCtrl({
                keyCode: browser_1.Key.KEY_A.keyCode + i,
                code: 'Key' + String.fromCharCode('A'.charCodeAt(0) + i)
            });
        }
        /* ctrl-[ or ctrl-3 (033/27/0x1B - ESC).  */
        regCtrl(browser_1.Key.BRACKET_LEFT);
        regCtrl(browser_1.Key.DIGIT3);
        /* ctrl-\ or ctrl-4 (034/28/0x1C - FS).  */
        regCtrl(browser_1.Key.BACKSLASH);
        regCtrl(browser_1.Key.DIGIT4);
        /* ctrl-] or ctrl-5 (035/29/0x1D - GS).  */
        regCtrl(browser_1.Key.BRACKET_RIGHT);
        regCtrl(browser_1.Key.DIGIT5);
        /* ctrl-6 (036/30/0x1E - RS).  */
        regCtrl(browser_1.Key.DIGIT6);
        /* ctrl-7 (037/31/0x1F - US).  */
        regCtrl(browser_1.Key.DIGIT7);
        /* ctrl-8 (177/127/0x7F - DEL).  */
        regCtrl(browser_1.Key.DIGIT8);
        /* alt-A (0x1B 0x62) through alt-Z (0x1B 0x7A).  */
        for (var i = 0; i < 26; i++) {
            regAlt({
                keyCode: browser_1.Key.KEY_A.keyCode + i,
                code: 'Key' + String.fromCharCode('A'.charCodeAt(0) + i)
            });
        }
        /* alt-` (0x1B 0x60).  */
        regAlt(browser_1.Key.BACKQUOTE);
        /* alt-0 (0x1B 0x30) through alt-9 (0x1B 0x39).  */
        for (var i = 0; i < 10; i++) {
            regAlt({
                keyCode: browser_1.Key.DIGIT0.keyCode + i,
                code: 'Digit' + String.fromCharCode('0'.charCodeAt(0) + i)
            });
        }
        if (common_1.isOSX) {
            // selectAll on OSX
            keybindings.registerKeybinding({
                command: browser_1.KeybindingRegistry.PASSTHROUGH_PSEUDO_COMMAND,
                keybinding: 'ctrlcmd+a',
                context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
            });
        }
    };
    TerminalFrontendContribution.prototype.newTerminal = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widgetManager.getOrCreateWidget(terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID, __assign({ created: new Date().toString() }, options))];
                    case 1:
                        widget = _a.sent();
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    TerminalFrontendContribution.prototype.activateTerminal = function (widget, widgetOptions) {
        this.open(widget, { widgetOptions: widgetOptions });
    };
    // TODO: reuse WidgetOpenHandler.open
    TerminalFrontendContribution.prototype.open = function (widget, options) {
        var op = __assign(__assign({ mode: 'activate' }, options), { widgetOptions: __assign({ area: 'bottom' }, (options && options.widgetOptions)) });
        if (!widget.isAttached) {
            this.shell.addWidget(widget, op.widgetOptions);
        }
        if (op.mode === 'activate') {
            this.shell.activateWidget(widget.id);
        }
        else if (op.mode === 'reveal') {
            this.shell.revealWidget(widget.id);
        }
    };
    TerminalFrontendContribution.prototype.selectTerminalCwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots;
            var _this = this;
            return __generator(this, function (_a) {
                roots = this.workspaceService.tryGetRoots();
                return [2 /*return*/, this.quickPick.show(roots.map(function (_a) {
                        var uri = _a.uri;
                        return ({ label: _this.labelProvider.getName(new uri_1.default(uri)), description: _this.labelProvider.getLongName(new uri_1.default(uri)), value: uri });
                    }), { placeholder: 'Select current working directory for new terminal' })];
            });
        });
    };
    TerminalFrontendContribution.prototype.splitTerminal = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.getTerminalRef(widget);
                        if (!ref) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.openTerminal({ ref: ref, mode: 'split-right' })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TerminalFrontendContribution.prototype.getTerminalRef = function (widget) {
        var ref = widget ? widget : this.shell.currentWidget;
        return ref instanceof terminal_widget_1.TerminalWidget ? ref : undefined;
    };
    TerminalFrontendContribution.prototype.openTerminal = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var cwd, termWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectTerminalCwd()];
                    case 1:
                        cwd = _a.sent();
                        return [4 /*yield*/, this.newTerminal({ cwd: cwd })];
                    case 2:
                        termWidget = _a.sent();
                        termWidget.start();
                        this.open(termWidget, { widgetOptions: options });
                        return [2 /*return*/];
                }
            });
        });
    };
    TerminalFrontendContribution.prototype.openActiveWorkspaceTerminal = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var termWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.newTerminal({})];
                    case 1:
                        termWidget = _a.sent();
                        termWidget.start();
                        this.open(termWidget, { widgetOptions: options });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * It should be aligned with https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     */
    TerminalFrontendContribution.prototype.registerColors = function (colors) {
        colors.register({
            id: 'terminal.background',
            defaults: {
                dark: 'panel.background',
                light: 'panel.background',
                hc: 'panel.background'
            },
            description: 'The background color of the terminal, this allows coloring the terminal differently to the panel.'
        });
        colors.register({
            id: 'terminal.foreground',
            defaults: {
                light: '#333333',
                dark: '#CCCCCC',
                hc: '#FFFFFF'
            },
            description: 'The foreground color of the terminal.'
        });
        colors.register({
            id: 'terminalCursor.foreground',
            description: 'The foreground color of the terminal cursor.'
        });
        colors.register({
            id: 'terminalCursor.background',
            description: 'The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.'
        });
        colors.register({
            id: 'terminal.selectionBackground',
            defaults: {
                light: '#00000040',
                dark: '#FFFFFF40',
                hc: '#FFFFFF80'
            },
            description: 'The selection background color of the terminal.'
        });
        colors.register({
            id: 'terminal.border',
            defaults: {
                light: 'panel.border',
                dark: 'panel.border',
                hc: 'panel.border'
            },
            description: 'The color of the border that separates split panes within the terminal. This defaults to panel.border.'
        });
        // eslint-disable-next-line guard-for-in
        for (var id in terminal_theme_service_1.terminalAnsiColorMap) {
            var entry = terminal_theme_service_1.terminalAnsiColorMap[id];
            var colorName = id.substring(13);
            colors.register({
                id: id,
                defaults: entry.defaults,
                description: "'" + colorName + "'  ANSI color in the terminal."
            });
        }
    };
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], TerminalFrontendContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], TerminalFrontendContribution.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], TerminalFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], TerminalFrontendContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalFrontendContribution.prototype, "init", null);
    TerminalFrontendContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.ApplicationShell)),
        __param(1, inversify_1.inject(shell_terminal_protocol_1.ShellTerminalServerProxy)),
        __param(2, inversify_1.inject(browser_2.WidgetManager)),
        __param(3, inversify_1.inject(common_2.FileSystem)),
        __param(4, inversify_1.inject(common_1.SelectionService)),
        __metadata("design:paramtypes", [browser_1.ApplicationShell, Object, browser_2.WidgetManager, Object, common_1.SelectionService])
    ], TerminalFrontendContribution);
    return TerminalFrontendContribution;
}());
exports.TerminalFrontendContribution = TerminalFrontendContribution;
//# sourceMappingURL=terminal-frontend-contribution.js.map
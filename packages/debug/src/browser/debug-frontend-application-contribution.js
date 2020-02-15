"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var browser_1 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
var theming_1 = require("@theia/core/lib/browser/theming");
var common_1 = require("@theia/core/lib/common");
var browser_2 = require("@theia/editor/lib/browser");
var debug_session_manager_1 = require("./debug-session-manager");
var debug_widget_1 = require("./view/debug-widget");
var breakpoint_marker_1 = require("./breakpoint/breakpoint-marker");
var breakpoint_manager_1 = require("./breakpoint/breakpoint-manager");
var debug_configuration_manager_1 = require("./debug-configuration-manager");
var debug_session_1 = require("./debug-session");
var debug_breakpoints_widget_1 = require("./view/debug-breakpoints-widget");
var debug_source_breakpoint_1 = require("./model/debug-source-breakpoint");
var debug_threads_widget_1 = require("./view/debug-threads-widget");
var debug_thread_1 = require("./model/debug-thread");
var debug_stack_frames_widget_1 = require("./view/debug-stack-frames-widget");
var debug_stack_frame_1 = require("./model/debug-stack-frame");
var debug_variables_widget_1 = require("./view/debug-variables-widget");
var debug_console_items_1 = require("./console/debug-console-items");
var debug_session_widget_1 = require("./view/debug-session-widget");
var debug_keybinding_contexts_1 = require("./debug-keybinding-contexts");
var debug_editor_model_1 = require("./editor/debug-editor-model");
var debug_editor_service_1 = require("./editor/debug-editor-service");
var debug_console_contribution_1 = require("./console/debug-console-contribution");
var debug_service_1 = require("../common/debug-service");
var debug_schema_updater_1 = require("./debug-schema-updater");
var debug_preferences_1 = require("./debug-preferences");
var debug_watch_widget_1 = require("./view/debug-watch-widget");
var debug_watch_expression_1 = require("./view/debug-watch-expression");
var debug_watch_manager_1 = require("./debug-watch-manager");
var debug_function_breakpoint_1 = require("./model/debug-function-breakpoint");
var debug_breakpoint_1 = require("./model/debug-breakpoint");
var DebugMenus;
(function (DebugMenus) {
    DebugMenus.DEBUG = __spread(common_1.MAIN_MENU_BAR, ['6_debug']);
    DebugMenus.DEBUG_CONTROLS = __spread(DebugMenus.DEBUG, ['a_controls']);
    DebugMenus.DEBUG_CONFIGURATION = __spread(DebugMenus.DEBUG, ['b_configuration']);
    DebugMenus.DEBUG_THREADS = __spread(DebugMenus.DEBUG, ['c_threads']);
    DebugMenus.DEBUG_SESSIONS = __spread(DebugMenus.DEBUG, ['d_sessions']);
    DebugMenus.DEBUG_BREAKPOINT = __spread(DebugMenus.DEBUG, ['e_breakpoint']);
    DebugMenus.DEBUG_NEW_BREAKPOINT = __spread(DebugMenus.DEBUG_BREAKPOINT, ['a_new_breakpoint']);
    DebugMenus.DEBUG_BREAKPOINTS = __spread(DebugMenus.DEBUG, ['f_breakpoints']);
})(DebugMenus = exports.DebugMenus || (exports.DebugMenus = {}));
var DebugCommands;
(function (DebugCommands) {
    var DEBUG_CATEGORY = 'Debug';
    DebugCommands.START = {
        id: 'workbench.action.debug.start',
        category: DEBUG_CATEGORY,
        label: 'Start Debugging',
        iconClass: 'fa fa-play'
    };
    DebugCommands.START_NO_DEBUG = {
        id: 'workbench.action.debug.run',
        label: 'Debug: Start Without Debugging'
    };
    DebugCommands.STOP = {
        id: 'workbench.action.debug.stop',
        category: DEBUG_CATEGORY,
        label: 'Stop Debugging',
        iconClass: 'fa fa-stop'
    };
    DebugCommands.RESTART = {
        id: 'workbench.action.debug.restart',
        category: DEBUG_CATEGORY,
        label: 'Restart Debugging',
    };
    DebugCommands.OPEN_CONFIGURATIONS = {
        id: 'debug.configurations.open',
        label: 'Debug: Open Configurations'
    };
    DebugCommands.ADD_CONFIGURATION = {
        id: 'debug.configurations.add',
        label: 'Debug: Add Configuration...'
    };
    DebugCommands.STEP_OVER = {
        id: 'workbench.action.debug.stepOver',
        category: DEBUG_CATEGORY,
        label: 'Step Over',
        iconClass: 'fa fa-arrow-right'
    };
    DebugCommands.STEP_INTO = {
        id: 'workbench.action.debug.stepInto',
        category: DEBUG_CATEGORY,
        label: 'Step Into',
        iconClass: 'fa fa-arrow-down'
    };
    DebugCommands.STEP_OUT = {
        id: 'workbench.action.debug.stepOut',
        category: DEBUG_CATEGORY,
        label: 'Step Out',
        iconClass: 'fa fa-arrow-up'
    };
    DebugCommands.CONTINUE = {
        id: 'workbench.action.debug.continue',
        category: DEBUG_CATEGORY,
        label: 'Continue',
        iconClass: 'fa fa-play-circle'
    };
    DebugCommands.PAUSE = {
        id: 'workbench.action.debug.pause',
        category: DEBUG_CATEGORY,
        label: 'Pause',
        iconClass: 'fa fa-pause'
    };
    DebugCommands.CONTINUE_ALL = {
        id: 'debug.thread.continue.all',
        category: DEBUG_CATEGORY,
        label: 'Continue All',
        iconClass: 'fa fa-play-circle'
    };
    DebugCommands.PAUSE_ALL = {
        id: 'debug.thread.pause.all',
        category: DEBUG_CATEGORY,
        label: 'Pause All',
        iconClass: 'fa fa-pause'
    };
    DebugCommands.TOGGLE_BREAKPOINT = {
        id: 'editor.debug.action.toggleBreakpoint',
        category: DEBUG_CATEGORY,
        label: 'Toggle Breakpoint',
    };
    DebugCommands.INLINE_BREAKPOINT = {
        id: 'editor.debug.action.inlineBreakpoint',
        category: DEBUG_CATEGORY,
        label: 'Inline Breakpoint',
    };
    DebugCommands.ADD_CONDITIONAL_BREAKPOINT = {
        id: 'debug.breakpoint.add.conditional',
        category: DEBUG_CATEGORY,
        label: 'Add Conditional Breakpoint...',
    };
    DebugCommands.ADD_LOGPOINT = {
        id: 'debug.breakpoint.add.logpoint',
        category: DEBUG_CATEGORY,
        label: 'Add Logpoint...',
    };
    DebugCommands.ADD_FUNCTION_BREAKPOINT = {
        id: 'debug.breakpoint.add.function',
        category: DEBUG_CATEGORY,
        label: 'Add Function Breakpoint...',
    };
    DebugCommands.ENABLE_ALL_BREAKPOINTS = {
        id: 'debug.breakpoint.enableAll',
        category: DEBUG_CATEGORY,
        label: 'Enable All Breakpoints',
    };
    DebugCommands.DISABLE_ALL_BREAKPOINTS = {
        id: 'debug.breakpoint.disableAll',
        category: DEBUG_CATEGORY,
        label: 'Disable All Breakpoints',
    };
    DebugCommands.EDIT_BREAKPOINT = {
        id: 'debug.breakpoint.edit',
        category: DEBUG_CATEGORY,
        label: 'Edit Breakpoint...',
    };
    DebugCommands.EDIT_LOGPOINT = {
        id: 'debug.logpoint.edit',
        category: DEBUG_CATEGORY,
        label: 'Edit Logpoint...',
    };
    DebugCommands.REMOVE_BREAKPOINT = {
        id: 'debug.breakpoint.remove',
        category: DEBUG_CATEGORY,
        label: 'Remove Breakpoint',
    };
    DebugCommands.REMOVE_LOGPOINT = {
        id: 'debug.logpoint.remove',
        category: DEBUG_CATEGORY,
        label: 'Remove Logpoint',
    };
    DebugCommands.REMOVE_ALL_BREAKPOINTS = {
        id: 'debug.breakpoint.removeAll',
        category: DEBUG_CATEGORY,
        label: 'Remove All Breakpoints',
    };
    DebugCommands.TOGGLE_BREAKPOINTS_ENABLED = {
        id: 'debug.breakpoint.toggleEnabled'
    };
    DebugCommands.SHOW_HOVER = {
        id: 'editor.debug.action.showDebugHover',
        label: 'Debug: Show Hover'
    };
    DebugCommands.RESTART_FRAME = {
        id: 'debug.frame.restart',
        category: DEBUG_CATEGORY,
        label: 'Restart Frame',
    };
    DebugCommands.COPY_CALL_STACK = {
        id: 'debug.callStack.copy',
        category: DEBUG_CATEGORY,
        label: 'Copy Call Stack',
    };
    DebugCommands.SET_VARIABLE_VALUE = {
        id: 'debug.variable.setValue',
        category: DEBUG_CATEGORY,
        label: 'Set Value',
    };
    DebugCommands.COPY_VARIABLE_VALUE = {
        id: 'debug.variable.copyValue',
        category: DEBUG_CATEGORY,
        label: 'Copy Value',
    };
    DebugCommands.COPY_VARIABLE_AS_EXPRESSION = {
        id: 'debug.variable.copyAsExpression',
        category: DEBUG_CATEGORY,
        label: 'Copy As Expression',
    };
    DebugCommands.WATCH_VARIABLE = {
        id: 'debug.variable.watch',
        category: DEBUG_CATEGORY,
        label: 'Add to Watch',
    };
    DebugCommands.ADD_WATCH_EXPRESSION = {
        id: 'debug.watch.addExpression',
        category: DEBUG_CATEGORY,
        label: 'Add Watch Expression'
    };
    DebugCommands.EDIT_WATCH_EXPRESSION = {
        id: 'debug.watch.editExpression',
        category: DEBUG_CATEGORY,
        label: 'Edit Watch Expression'
    };
    DebugCommands.COPY_WATCH_EXPRESSION_VALUE = {
        id: 'debug.watch.copyExpressionValue',
        category: DEBUG_CATEGORY,
        label: 'Copy Watch Expression Value'
    };
    DebugCommands.REMOVE_WATCH_EXPRESSION = {
        id: 'debug.watch.removeExpression',
        category: DEBUG_CATEGORY,
        label: 'Remove Watch Expression'
    };
    DebugCommands.COLLAPSE_ALL_WATCH_EXPRESSIONS = {
        id: 'debug.watch.collapseAllExpressions',
        category: DEBUG_CATEGORY,
        label: 'Collapse All Watch Expressions'
    };
    DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS = {
        id: 'debug.watch.removeAllExpressions',
        category: DEBUG_CATEGORY,
        label: 'Remove All Watch Expresssions'
    };
})(DebugCommands = exports.DebugCommands || (exports.DebugCommands = {}));
var DebugThreadContextCommands;
(function (DebugThreadContextCommands) {
    DebugThreadContextCommands.STEP_OVER = {
        id: 'debug.thread.context.context.next'
    };
    DebugThreadContextCommands.STEP_INTO = {
        id: 'debug.thread.context.stepin'
    };
    DebugThreadContextCommands.STEP_OUT = {
        id: 'debug.thread.context.stepout'
    };
    DebugThreadContextCommands.CONTINUE = {
        id: 'debug.thread.context.continue'
    };
    DebugThreadContextCommands.PAUSE = {
        id: 'debug.thread.context.pause'
    };
    DebugThreadContextCommands.TERMINATE = {
        id: 'debug.thread.context.terminate'
    };
})(DebugThreadContextCommands = exports.DebugThreadContextCommands || (exports.DebugThreadContextCommands = {}));
var DebugSessionContextCommands;
(function (DebugSessionContextCommands) {
    DebugSessionContextCommands.STOP = {
        id: 'debug.session.context.stop'
    };
    DebugSessionContextCommands.RESTART = {
        id: 'debug.session.context.restart'
    };
    DebugSessionContextCommands.PAUSE_ALL = {
        id: 'debug.session.context.pauseAll'
    };
    DebugSessionContextCommands.CONTINUE_ALL = {
        id: 'debug.session.context.continueAll'
    };
    DebugSessionContextCommands.REVEAL = {
        id: 'debug.session.context.reveal'
    };
    DebugSessionContextCommands.OPEN_LEFT = {
        id: 'debug.session.context.openLeft'
    };
    DebugSessionContextCommands.OPEN_RIGHT = {
        id: 'debug.session.context.openRight'
    };
    DebugSessionContextCommands.OPEN_BOTTOM = {
        id: 'debug.session.context.openBottom'
    };
})(DebugSessionContextCommands = exports.DebugSessionContextCommands || (exports.DebugSessionContextCommands = {}));
var DebugEditorContextCommands;
(function (DebugEditorContextCommands) {
    DebugEditorContextCommands.ADD_BREAKPOINT = {
        id: 'debug.editor.context.addBreakpoint'
    };
    DebugEditorContextCommands.ADD_CONDITIONAL_BREAKPOINT = {
        id: 'debug.editor.context.addBreakpoint.conditional'
    };
    DebugEditorContextCommands.ADD_LOGPOINT = {
        id: 'debug.editor.context.add.logpoint'
    };
    DebugEditorContextCommands.REMOVE_BREAKPOINT = {
        id: 'debug.editor.context.removeBreakpoint'
    };
    DebugEditorContextCommands.EDIT_BREAKPOINT = {
        id: 'debug.editor.context.edit.breakpoint'
    };
    DebugEditorContextCommands.ENABLE_BREAKPOINT = {
        id: 'debug.editor.context.enableBreakpoint'
    };
    DebugEditorContextCommands.DISABLE_BREAKPOINT = {
        id: 'debug.editor.context.disableBreakpoint'
    };
    DebugEditorContextCommands.REMOVE_LOGPOINT = {
        id: 'debug.editor.context.logpoint.remove'
    };
    DebugEditorContextCommands.EDIT_LOGPOINT = {
        id: 'debug.editor.context.logpoint.edit'
    };
    DebugEditorContextCommands.ENABLE_LOGPOINT = {
        id: 'debug.editor.context.logpoint.enable'
    };
    DebugEditorContextCommands.DISABLE_LOGPOINT = {
        id: 'debug.editor.context.logpoint.disable'
    };
})(DebugEditorContextCommands = exports.DebugEditorContextCommands || (exports.DebugEditorContextCommands = {}));
var DebugBreakpointWidgetCommands;
(function (DebugBreakpointWidgetCommands) {
    DebugBreakpointWidgetCommands.ACCEPT = {
        id: 'debug.breakpointWidget.accept'
    };
    DebugBreakpointWidgetCommands.CLOSE = {
        id: 'debug.breakpointWidget.close'
    };
})(DebugBreakpointWidgetCommands = exports.DebugBreakpointWidgetCommands || (exports.DebugBreakpointWidgetCommands = {}));
var darkCss = require('../../src/browser/style/debug-dark.useable.css');
var lightCss = require('../../src/browser/style/debug-bright.useable.css');
function updateTheme() {
    var themeType = theming_1.ThemeService.get().getCurrentTheme().type;
    if (themeType === 'dark' || themeType === 'hc') {
        lightCss.unuse();
        darkCss.use();
    }
    else if (themeType === 'light') {
        darkCss.unuse();
        lightCss.use();
    }
}
updateTheme();
theming_1.ThemeService.get().onThemeChange(function () { return updateTheme(); });
var DebugFrontendApplicationContribution = /** @class */ (function (_super) {
    __extends(DebugFrontendApplicationContribution, _super);
    function DebugFrontendApplicationContribution() {
        var _this = _super.call(this, {
            widgetId: debug_widget_1.DebugWidget.ID,
            widgetName: debug_widget_1.DebugWidget.LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 400
            },
            toggleCommandId: 'debug:toggle',
            toggleKeybinding: 'ctrlcmd+shift+d'
        }) || this;
        _this.firstSessionStart = true;
        _this.sessionWidgets = new Map();
        return _this;
    }
    DebugFrontendApplicationContribution.prototype.initializeLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openView()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugFrontendApplicationContribution.prototype.onStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.manager.onDidCreateDebugSession(function (session) { return _this.openSession(session, { reveal: false }); });
                        this.manager.onDidStartDebugSession(function (session) {
                            var noDebug = session.configuration.noDebug;
                            var openDebug = session.configuration.openDebug || _this.preference['debug.openDebug'];
                            var internalConsoleOptions = session.configuration.internalConsoleOptions || _this.preference['debug.internalConsoleOptions'];
                            if (internalConsoleOptions === 'openOnSessionStart' ||
                                (internalConsoleOptions === 'openOnFirstSessionStart' && _this.firstSessionStart)) {
                                _this.console.openView({
                                    reveal: true
                                });
                            }
                            if (!noDebug && (openDebug === 'openOnSessionStart' || (openDebug === 'openOnFirstSessionStart' && _this.firstSessionStart))) {
                                _this.openSession(session);
                            }
                            _this.firstSessionStart = false;
                        });
                        this.manager.onDidStopDebugSession(function (session) {
                            var openDebug = session.configuration.openDebug;
                            if (openDebug === 'openOnDebugBreak') {
                                _this.openSession(session);
                            }
                        });
                        this.updateStatusBar();
                        this.manager.onDidChange(function () { return _this.updateStatusBar(); });
                        this.schemaUpdater.update();
                        this.configurations.load();
                        return [4 /*yield*/, this.breakpointManager.load()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.watchManager.load()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugFrontendApplicationContribution.prototype.onStop = function () {
        this.configurations.save();
        this.breakpointManager.save();
        this.watchManager.save();
    };
    DebugFrontendApplicationContribution.prototype.registerMenus = function (menus) {
        _super.prototype.registerMenus.call(this, menus);
        var registerMenuActions = function (menuPath) {
            var e_1, _a;
            var commands = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                commands[_i - 1] = arguments[_i];
            }
            try {
                for (var _b = __values(commands.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], command = _d[1];
                    menus.registerMenuAction(menuPath, {
                        commandId: command.id,
                        label: command.label && command.label.startsWith('Debug: ') && command.label.slice('Debug: '.length) || command.label,
                        icon: command.iconClass,
                        order: String.fromCharCode('a'.charCodeAt(0) + index)
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        menus.registerSubmenu(DebugMenus.DEBUG, 'Debug');
        registerMenuActions(DebugMenus.DEBUG_CONTROLS, DebugCommands.START, DebugCommands.START_NO_DEBUG, DebugCommands.STOP, DebugCommands.RESTART);
        registerMenuActions(DebugMenus.DEBUG_CONFIGURATION, DebugCommands.OPEN_CONFIGURATIONS, DebugCommands.ADD_CONFIGURATION);
        registerMenuActions(DebugMenus.DEBUG_THREADS, DebugCommands.CONTINUE, DebugCommands.STEP_OVER, DebugCommands.STEP_INTO, DebugCommands.STEP_OUT, DebugCommands.PAUSE);
        registerMenuActions(DebugMenus.DEBUG_SESSIONS, DebugCommands.CONTINUE_ALL, DebugCommands.PAUSE_ALL);
        registerMenuActions(DebugMenus.DEBUG_BREAKPOINT, DebugCommands.TOGGLE_BREAKPOINT);
        menus.registerSubmenu(DebugMenus.DEBUG_NEW_BREAKPOINT, 'New Breakpoint');
        registerMenuActions(DebugMenus.DEBUG_NEW_BREAKPOINT, DebugCommands.ADD_CONDITIONAL_BREAKPOINT, DebugCommands.INLINE_BREAKPOINT, DebugCommands.ADD_FUNCTION_BREAKPOINT, DebugCommands.ADD_LOGPOINT);
        registerMenuActions(DebugMenus.DEBUG_BREAKPOINTS, DebugCommands.ENABLE_ALL_BREAKPOINTS, DebugCommands.DISABLE_ALL_BREAKPOINTS, DebugCommands.REMOVE_ALL_BREAKPOINTS);
        registerMenuActions(debug_threads_widget_1.DebugThreadsWidget.CONTROL_MENU, __assign(__assign({}, DebugCommands.PAUSE), DebugThreadContextCommands.PAUSE), __assign(__assign({}, DebugCommands.CONTINUE), DebugThreadContextCommands.CONTINUE), __assign(__assign({}, DebugCommands.STEP_OVER), DebugThreadContextCommands.STEP_OVER), __assign(__assign({}, DebugCommands.STEP_INTO), DebugThreadContextCommands.STEP_INTO), __assign(__assign({}, DebugCommands.STEP_OUT), DebugThreadContextCommands.STEP_OUT), __assign(__assign({}, DebugCommands.PAUSE_ALL), DebugSessionContextCommands.PAUSE_ALL), __assign(__assign({}, DebugCommands.CONTINUE_ALL), DebugSessionContextCommands.CONTINUE_ALL));
        registerMenuActions(debug_threads_widget_1.DebugThreadsWidget.TERMINATE_MENU, __assign(__assign(__assign({}, DebugCommands.RESTART), DebugSessionContextCommands.RESTART), { label: 'Restart' }), __assign(__assign(__assign({}, DebugCommands.STOP), DebugSessionContextCommands.STOP), { label: 'Stop' }), __assign(__assign({}, DebugThreadContextCommands.TERMINATE), { label: 'Terminate Thread' }));
        registerMenuActions(debug_threads_widget_1.DebugThreadsWidget.OPEN_MENU, __assign(__assign({}, DebugSessionContextCommands.REVEAL), { label: 'Reveal' }), __assign(__assign({}, DebugSessionContextCommands.OPEN_LEFT), { label: 'Open Left' }), __assign(__assign({}, DebugSessionContextCommands.OPEN_RIGHT), { label: 'Open Right' }), __assign(__assign({}, DebugSessionContextCommands.OPEN_BOTTOM), { label: 'Open Bottom' }));
        registerMenuActions(debug_stack_frames_widget_1.DebugStackFramesWidget.CONTEXT_MENU, DebugCommands.RESTART_FRAME, DebugCommands.COPY_CALL_STACK);
        registerMenuActions(debug_variables_widget_1.DebugVariablesWidget.EDIT_MENU, DebugCommands.SET_VARIABLE_VALUE, DebugCommands.COPY_VARIABLE_VALUE, DebugCommands.COPY_VARIABLE_AS_EXPRESSION);
        registerMenuActions(debug_variables_widget_1.DebugVariablesWidget.WATCH_MENU, DebugCommands.WATCH_VARIABLE);
        registerMenuActions(debug_watch_widget_1.DebugWatchWidget.EDIT_MENU, __assign(__assign({}, DebugCommands.EDIT_WATCH_EXPRESSION), { label: 'Edit Expression' }), __assign(__assign({}, DebugCommands.COPY_WATCH_EXPRESSION_VALUE), { label: 'Copy Value' }));
        registerMenuActions(debug_watch_widget_1.DebugWatchWidget.REMOVE_MENU, __assign(__assign({}, DebugCommands.REMOVE_WATCH_EXPRESSION), { label: 'Remove Expression' }), __assign(__assign({}, DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS), { label: 'Remove All Expressions' }));
        registerMenuActions(debug_breakpoints_widget_1.DebugBreakpointsWidget.EDIT_MENU, DebugCommands.EDIT_BREAKPOINT, DebugCommands.EDIT_LOGPOINT);
        registerMenuActions(debug_breakpoints_widget_1.DebugBreakpointsWidget.REMOVE_MENU, DebugCommands.REMOVE_BREAKPOINT, DebugCommands.REMOVE_LOGPOINT, DebugCommands.REMOVE_ALL_BREAKPOINTS);
        registerMenuActions(debug_breakpoints_widget_1.DebugBreakpointsWidget.ENABLE_MENU, DebugCommands.ENABLE_ALL_BREAKPOINTS, DebugCommands.DISABLE_ALL_BREAKPOINTS);
        registerMenuActions(debug_editor_model_1.DebugEditorModel.CONTEXT_MENU, __assign(__assign({}, DebugEditorContextCommands.ADD_BREAKPOINT), { label: 'Add Breakpoint' }), __assign(__assign({}, DebugEditorContextCommands.ADD_CONDITIONAL_BREAKPOINT), { label: DebugCommands.ADD_CONDITIONAL_BREAKPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.ADD_LOGPOINT), { label: DebugCommands.ADD_LOGPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.REMOVE_BREAKPOINT), { label: DebugCommands.REMOVE_BREAKPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.EDIT_BREAKPOINT), { label: DebugCommands.EDIT_BREAKPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.ENABLE_BREAKPOINT), { label: 'Enable Breakpoint' }), __assign(__assign({}, DebugEditorContextCommands.DISABLE_BREAKPOINT), { label: 'Disable Breakpoint' }), __assign(__assign({}, DebugEditorContextCommands.REMOVE_LOGPOINT), { label: DebugCommands.REMOVE_LOGPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.EDIT_LOGPOINT), { label: DebugCommands.EDIT_LOGPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.ENABLE_LOGPOINT), { label: 'Enable Logpoint' }), __assign(__assign({}, DebugEditorContextCommands.DISABLE_LOGPOINT), { label: 'Disable Logpoint' }));
    };
    DebugFrontendApplicationContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        _super.prototype.registerCommands.call(this, registry);
        registry.registerCommand(DebugCommands.START, {
            execute: function (config) { return _this.start(false, config); }
        });
        registry.registerCommand(DebugCommands.START_NO_DEBUG, {
            execute: function (config) { return _this.start(true, config); }
        });
        registry.registerCommand(DebugCommands.STOP, {
            execute: function () { return _this.manager.currentSession && _this.manager.currentSession.terminate(); },
            isEnabled: function () { return _this.manager.state !== debug_session_1.DebugState.Inactive; }
        });
        registry.registerCommand(DebugCommands.RESTART, {
            execute: function () { return _this.manager.restart(); },
            isEnabled: function () { return _this.manager.state !== debug_session_1.DebugState.Inactive; }
        });
        registry.registerCommand(DebugCommands.OPEN_CONFIGURATIONS, {
            execute: function () { return _this.configurations.openConfiguration(); }
        });
        registry.registerCommand(DebugCommands.ADD_CONFIGURATION, {
            execute: function () { return _this.configurations.addConfiguration(); }
        });
        registry.registerCommand(DebugCommands.STEP_OVER, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.stepOver(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Stopped; }
        });
        registry.registerCommand(DebugCommands.STEP_INTO, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.stepIn(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Stopped; }
        });
        registry.registerCommand(DebugCommands.STEP_OUT, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.stepOut(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Stopped; }
        });
        registry.registerCommand(DebugCommands.CONTINUE, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.continue(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Stopped; }
        });
        registry.registerCommand(DebugCommands.PAUSE, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.pause(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Running; }
        });
        registry.registerCommand(DebugCommands.PAUSE_ALL, {
            execute: function () { return _this.manager.currentSession && _this.manager.currentSession.pauseAll(); },
            isEnabled: function () { return !!_this.manager.currentSession && !!_this.manager.currentSession.runningThreads.next().value; }
        });
        registry.registerCommand(DebugCommands.CONTINUE_ALL, {
            execute: function () { return _this.manager.currentSession && _this.manager.currentSession.continueAll(); },
            isEnabled: function () { return !!_this.manager.currentSession && !!_this.manager.currentSession.stoppedThreads.next().value; }
        });
        registry.registerCommand(DebugThreadContextCommands.STEP_OVER, {
            execute: function () { return _this.selectedThread && _this.selectedThread.stepOver(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread; }
        });
        registry.registerCommand(DebugThreadContextCommands.STEP_INTO, {
            execute: function () { return _this.selectedThread && _this.selectedThread.stepIn(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread; }
        });
        registry.registerCommand(DebugThreadContextCommands.STEP_OUT, {
            execute: function () { return _this.selectedThread && _this.selectedThread.stepOut(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread; }
        });
        registry.registerCommand(DebugThreadContextCommands.CONTINUE, {
            execute: function () { return _this.selectedThread && _this.selectedThread.continue(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
        });
        registry.registerCommand(DebugThreadContextCommands.PAUSE, {
            execute: function () { return _this.selectedThread && _this.selectedThread.pause(); },
            isEnabled: function () { return !!_this.selectedThread && !_this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread && !_this.selectedThread.stopped; },
        });
        registry.registerCommand(DebugThreadContextCommands.TERMINATE, {
            execute: function () { return _this.selectedThread && _this.selectedThread.terminate(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.supportsTerminate; },
            isVisible: function () { return !!_this.selectedThread && _this.selectedThread.supportsTerminate; }
        });
        registry.registerCommand(DebugSessionContextCommands.STOP, {
            execute: function () { return _this.selectedSession && _this.selectedSession.terminate(); },
            isEnabled: function () { return !!_this.selectedSession && _this.selectedSession.state !== debug_session_1.DebugState.Inactive; },
            isVisible: function () { return !_this.selectedThread; }
        });
        registry.registerCommand(DebugSessionContextCommands.RESTART, {
            execute: function () { return _this.selectedSession && _this.manager.restart(_this.selectedSession); },
            isEnabled: function () { return !!_this.selectedSession && _this.selectedSession.state !== debug_session_1.DebugState.Inactive; },
            isVisible: function () { return !_this.selectedThread; }
        });
        registry.registerCommand(DebugSessionContextCommands.CONTINUE_ALL, {
            execute: function () { return _this.selectedSession && _this.selectedSession.continueAll(); },
            isEnabled: function () { return !!_this.selectedSession && !!_this.selectedSession.stoppedThreads.next().value; },
            isVisible: function () { return !_this.selectedThread; }
        });
        registry.registerCommand(DebugSessionContextCommands.PAUSE_ALL, {
            execute: function () { return _this.selectedSession && _this.selectedSession.pauseAll(); },
            isEnabled: function () { return !!_this.selectedSession && !!_this.selectedSession.runningThreads.next().value; },
            isVisible: function () { return !_this.selectedThread; }
        });
        registry.registerCommand(DebugSessionContextCommands.REVEAL, {
            execute: function () { return _this.selectedSession && _this.revealSession(_this.selectedSession); },
            isEnabled: function () { return _this.hasSessionWidget; },
            isVisible: function () { return !_this.selectedThread && _this.hasSessionWidget; }
        });
        registry.registerCommand(DebugSessionContextCommands.OPEN_LEFT, {
            execute: function () { return _this.selectedSession && _this.openSession(_this.selectedSession, {
                debugViewLocation: 'left'
            }); },
            isEnabled: function () { return !_this.hasSessionWidget; },
            isVisible: function () { return !_this.selectedThread && !_this.hasSessionWidget; }
        });
        registry.registerCommand(DebugSessionContextCommands.OPEN_RIGHT, {
            execute: function () { return _this.selectedSession && _this.openSession(_this.selectedSession, {
                debugViewLocation: 'right'
            }); },
            isEnabled: function () { return !_this.hasSessionWidget; },
            isVisible: function () { return !_this.selectedThread && !_this.hasSessionWidget; }
        });
        registry.registerCommand(DebugSessionContextCommands.OPEN_BOTTOM, {
            execute: function () { return _this.selectedSession && _this.openSession(_this.selectedSession, {
                debugViewLocation: 'bottom'
            }); },
            isEnabled: function () { return !_this.hasSessionWidget; },
            isVisible: function () { return !_this.selectedThread && !_this.hasSessionWidget; }
        });
        registry.registerCommand(DebugCommands.TOGGLE_BREAKPOINT, {
            execute: function () { return _this.editors.toggleBreakpoint(); },
            isEnabled: function () { return !!_this.editors.model; }
        });
        registry.registerCommand(DebugCommands.INLINE_BREAKPOINT, {
            execute: function () { return _this.editors.addInlineBreakpoint(); },
            isEnabled: function () { return !!_this.editors.model && !_this.editors.getInlineBreakpoint(); }
        });
        registry.registerCommand(DebugCommands.ADD_CONDITIONAL_BREAKPOINT, {
            execute: function () { return _this.editors.addBreakpoint('condition'); },
            isEnabled: function () { return !!_this.editors.model && !_this.editors.anyBreakpoint(); }
        });
        registry.registerCommand(DebugCommands.ADD_LOGPOINT, {
            execute: function () { return _this.editors.addBreakpoint('logMessage'); },
            isEnabled: function () { return !!_this.editors.model && !_this.editors.anyBreakpoint(); }
        });
        registry.registerCommand(DebugCommands.ADD_FUNCTION_BREAKPOINT, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, labelProvider, breakpointManager, editorManager, options;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this, labelProvider = _a.labelProvider, breakpointManager = _a.breakpointManager, editorManager = _a.editorManager;
                            options = { labelProvider: labelProvider, breakpoints: breakpointManager, editorManager: editorManager };
                            return [4 /*yield*/, new debug_function_breakpoint_1.DebugFunctionBreakpoint(breakpoint_marker_1.FunctionBreakpoint.create({ name: '' }), options).open()];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            isEnabled: function (widget) { return !(widget instanceof browser_1.Widget) || widget instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget; },
            isVisible: function (widget) { return !(widget instanceof browser_1.Widget) || widget instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget; }
        });
        registry.registerCommand(DebugCommands.ENABLE_ALL_BREAKPOINTS, {
            execute: function () { return _this.breakpointManager.enableAllBreakpoints(true); },
            isEnabled: function () { return _this.breakpointManager.hasBreakpoints(); }
        });
        registry.registerCommand(DebugCommands.DISABLE_ALL_BREAKPOINTS, {
            execute: function () { return _this.breakpointManager.enableAllBreakpoints(false); },
            isEnabled: function () { return _this.breakpointManager.hasBreakpoints(); }
        });
        registry.registerCommand(DebugCommands.EDIT_BREAKPOINT, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, selectedBreakpoint, selectedFunctionBreakpoint;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this, selectedBreakpoint = _a.selectedBreakpoint, selectedFunctionBreakpoint = _a.selectedFunctionBreakpoint;
                            if (!selectedBreakpoint) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.editors.editBreakpoint(selectedBreakpoint)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            if (!selectedFunctionBreakpoint) return [3 /*break*/, 4];
                            return [4 /*yield*/, selectedFunctionBreakpoint.open()];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
            isEnabled: function () { return !!_this.selectedBreakpoint || !!_this.selectedFunctionBreakpoint; },
            isVisible: function () { return !!_this.selectedBreakpoint || !!_this.selectedFunctionBreakpoint; }
        });
        registry.registerCommand(DebugCommands.EDIT_LOGPOINT, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var selectedLogpoint;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            selectedLogpoint = this.selectedLogpoint;
                            if (!selectedLogpoint) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.editors.editBreakpoint(selectedLogpoint)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); },
            isEnabled: function () { return !!_this.selectedLogpoint; },
            isVisible: function () { return !!_this.selectedLogpoint; }
        });
        registry.registerCommand(DebugCommands.REMOVE_BREAKPOINT, {
            execute: function () {
                var selectedBreakpoint = _this.selectedBreakpoint || _this.selectedFunctionBreakpoint;
                if (selectedBreakpoint) {
                    selectedBreakpoint.remove();
                }
            },
            isEnabled: function () { return !!_this.selectedBreakpoint || !!_this.selectedFunctionBreakpoint; },
            isVisible: function () { return !!_this.selectedBreakpoint || !!_this.selectedFunctionBreakpoint; },
        });
        registry.registerCommand(DebugCommands.REMOVE_LOGPOINT, {
            execute: function () {
                var selectedLogpoint = _this.selectedLogpoint;
                if (selectedLogpoint) {
                    selectedLogpoint.remove();
                }
            },
            isEnabled: function () { return !!_this.selectedLogpoint; },
            isVisible: function () { return !!_this.selectedLogpoint; }
        });
        registry.registerCommand(DebugCommands.REMOVE_ALL_BREAKPOINTS, {
            execute: function () { return _this.breakpointManager.removeBreakpoints(); },
            isEnabled: function () { return _this.breakpointManager.hasBreakpoints(); },
            isVisible: function (widget) { return !(widget instanceof browser_1.Widget) || (widget instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget); }
        });
        registry.registerCommand(DebugCommands.TOGGLE_BREAKPOINTS_ENABLED, {
            execute: function () { return _this.breakpointManager.breakpointsEnabled = !_this.breakpointManager.breakpointsEnabled; },
            isVisible: function (arg) { return arg instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget; }
        });
        registry.registerCommand(DebugCommands.SHOW_HOVER, {
            execute: function () { return _this.editors.showHover(); },
            isEnabled: function () { return _this.editors.canShowHover(); }
        });
        registry.registerCommand(DebugCommands.RESTART_FRAME, {
            execute: function () { return _this.selectedFrame && _this.selectedFrame.restart(); },
            isEnabled: function () { return !!_this.selectedFrame; }
        });
        registry.registerCommand(DebugCommands.COPY_CALL_STACK, {
            execute: function () {
                var frames = _this.frames;
                var selection = document.getSelection();
                if (frames && selection) {
                    selection.selectAllChildren(frames.node);
                    document.execCommand('copy');
                }
            },
            isEnabled: function () { return document.queryCommandSupported('copy'); },
            isVisible: function () { return document.queryCommandSupported('copy'); }
        });
        registry.registerCommand(DebugCommands.SET_VARIABLE_VALUE, {
            execute: function () { return _this.selectedVariable && _this.selectedVariable.open(); },
            isEnabled: function () { return !!_this.selectedVariable && _this.selectedVariable.supportSetVariable; },
            isVisible: function () { return !!_this.selectedVariable && _this.selectedVariable.supportSetVariable; }
        });
        registry.registerCommand(DebugCommands.COPY_VARIABLE_VALUE, {
            execute: function () { return _this.selectedVariable && _this.selectedVariable.copyValue(); },
            isEnabled: function () { return !!_this.selectedVariable && _this.selectedVariable.supportCopyValue; },
            isVisible: function () { return !!_this.selectedVariable && _this.selectedVariable.supportCopyValue; }
        });
        registry.registerCommand(DebugCommands.COPY_VARIABLE_AS_EXPRESSION, {
            execute: function () { return _this.selectedVariable && _this.selectedVariable.copyAsExpression(); },
            isEnabled: function () { return !!_this.selectedVariable && _this.selectedVariable.supportCopyAsExpression; },
            isVisible: function () { return !!_this.selectedVariable && _this.selectedVariable.supportCopyAsExpression; }
        });
        registry.registerCommand(DebugCommands.WATCH_VARIABLE, {
            execute: function () {
                var _a = _this, selectedVariable = _a.selectedVariable, watch = _a.watch;
                if (selectedVariable && watch) {
                    watch.viewModel.addWatchExpression(selectedVariable.name);
                }
            },
            isEnabled: function () { return !!_this.selectedVariable && !!_this.watch; },
            isVisible: function () { return !!_this.selectedVariable && !!_this.watch; },
        });
        // Debug context menu commands
        registry.registerCommand(DebugEditorContextCommands.ADD_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.toggleBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.ADD_CONDITIONAL_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.addBreakpoint('condition', position); },
            isEnabled: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.ADD_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.addBreakpoint('logMessage', position); },
            isEnabled: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.REMOVE_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.toggleBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.EDIT_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.editBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.ENABLE_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.setBreakpointEnabled(position, true); },
            isEnabled: function (position) { return _this.isPosition(position) && _this.editors.getBreakpointEnabled(position) === false; },
            isVisible: function (position) { return _this.isPosition(position) && _this.editors.getBreakpointEnabled(position) === false; }
        });
        registry.registerCommand(DebugEditorContextCommands.DISABLE_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.setBreakpointEnabled(position, false); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpointEnabled(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpointEnabled(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.REMOVE_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.toggleBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.EDIT_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.editBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.ENABLE_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.setBreakpointEnabled(position, true); },
            isEnabled: function (position) { return _this.isPosition(position) && _this.editors.getLogpointEnabled(position) === false; },
            isVisible: function (position) { return _this.isPosition(position) && _this.editors.getLogpointEnabled(position) === false; }
        });
        registry.registerCommand(DebugEditorContextCommands.DISABLE_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.setBreakpointEnabled(position, false); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpointEnabled(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpointEnabled(position); }
        });
        registry.registerCommand(DebugBreakpointWidgetCommands.ACCEPT, {
            execute: function () { return _this.editors.acceptBreakpoint(); }
        });
        registry.registerCommand(DebugBreakpointWidgetCommands.CLOSE, {
            execute: function () { return _this.editors.closeBreakpoint(); }
        });
        registry.registerCommand(DebugCommands.ADD_WATCH_EXPRESSION, {
            execute: function (widget) {
                if (widget instanceof browser_1.Widget) {
                    if (widget instanceof debug_watch_widget_1.DebugWatchWidget) {
                        widget.viewModel.addWatchExpression();
                    }
                }
                else if (_this.watch) {
                    _this.watch.viewModel.addWatchExpression();
                }
            },
            isEnabled: function (widget) { return widget instanceof browser_1.Widget ? widget instanceof debug_watch_widget_1.DebugWatchWidget : !!_this.watch; },
            isVisible: function (widget) { return widget instanceof browser_1.Widget ? widget instanceof debug_watch_widget_1.DebugWatchWidget : !!_this.watch; }
        });
        registry.registerCommand(DebugCommands.EDIT_WATCH_EXPRESSION, {
            execute: function () {
                var watchExpression = _this.watchExpression;
                if (watchExpression) {
                    watchExpression.open();
                }
            },
            isEnabled: function () { return !!_this.watchExpression; },
            isVisible: function () { return !!_this.watchExpression; }
        });
        registry.registerCommand(DebugCommands.COPY_WATCH_EXPRESSION_VALUE, {
            execute: function () { return _this.watchExpression && _this.watchExpression.copyValue(); },
            isEnabled: function () { return !!_this.watchExpression && _this.watchExpression.supportCopyValue; },
            isVisible: function () { return !!_this.watchExpression && _this.watchExpression.supportCopyValue; }
        });
        registry.registerCommand(DebugCommands.COLLAPSE_ALL_WATCH_EXPRESSIONS, {
            execute: function (widget) {
                if (widget instanceof debug_watch_widget_1.DebugWatchWidget) {
                    var root = widget.model.root;
                    widget.model.collapseAll(browser_1.CompositeTreeNode.is(root) ? root : undefined);
                }
            },
            isEnabled: function (widget) { return widget instanceof debug_watch_widget_1.DebugWatchWidget; },
            isVisible: function (widget) { return widget instanceof debug_watch_widget_1.DebugWatchWidget; }
        });
        registry.registerCommand(DebugCommands.REMOVE_WATCH_EXPRESSION, {
            execute: function () {
                var _a = _this, watch = _a.watch, watchExpression = _a.watchExpression;
                if (watch && watchExpression) {
                    watch.viewModel.removeWatchExpression(watchExpression);
                }
            },
            isEnabled: function () { return !!_this.watchExpression; },
            isVisible: function () { return !!_this.watchExpression; }
        });
        registry.registerCommand(DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS, {
            execute: function (widget) {
                if (widget instanceof browser_1.Widget) {
                    if (widget instanceof debug_watch_widget_1.DebugWatchWidget) {
                        widget.viewModel.removeWatchExpressions();
                    }
                }
                else if (_this.watch) {
                    _this.watch.viewModel.removeWatchExpressions();
                }
            },
            isEnabled: function (widget) { return widget instanceof browser_1.Widget ? widget instanceof debug_watch_widget_1.DebugWatchWidget : !!_this.watch; },
            isVisible: function (widget) { return widget instanceof browser_1.Widget ? widget instanceof debug_watch_widget_1.DebugWatchWidget : !!_this.watch; }
        });
    };
    DebugFrontendApplicationContribution.prototype.registerKeybindings = function (keybindings) {
        _super.prototype.registerKeybindings.call(this, keybindings);
        keybindings.registerKeybinding({
            command: DebugCommands.START.id,
            keybinding: 'f5'
        });
        keybindings.registerKeybinding({
            command: DebugCommands.START_NO_DEBUG.id,
            keybinding: 'ctrl+f5'
        });
        keybindings.registerKeybinding({
            command: DebugCommands.STOP.id,
            keybinding: 'shift+f5',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.RESTART.id,
            keybinding: 'shift+ctrlcmd+f5',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.STEP_OVER.id,
            keybinding: 'f10',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.STEP_INTO.id,
            keybinding: 'f11',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.STEP_OUT.id,
            keybinding: 'shift+f11',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.CONTINUE.id,
            keybinding: 'f5',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.PAUSE.id,
            keybinding: 'f6',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.TOGGLE_BREAKPOINT.id,
            keybinding: 'f9',
            context: browser_2.EditorKeybindingContexts.editorTextFocus
        });
        keybindings.registerKeybinding({
            command: DebugCommands.INLINE_BREAKPOINT.id,
            keybinding: 'shift+f9',
            context: browser_2.EditorKeybindingContexts.editorTextFocus
        });
        keybindings.registerKeybinding({
            command: DebugBreakpointWidgetCommands.ACCEPT.id,
            keybinding: 'enter',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.breakpointWidgetInputFocus
        });
        keybindings.registerKeybinding({
            command: DebugBreakpointWidgetCommands.CLOSE.id,
            keybinding: 'esc',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.breakpointWidgetInputStrictFocus
        });
    };
    DebugFrontendApplicationContribution.prototype.registerToolbarItems = function (toolbar) {
        var _this = this;
        var onDidChangeToggleBreakpointsEnabled = new common_1.Emitter();
        var toggleBreakpointsEnabled = {
            id: DebugCommands.TOGGLE_BREAKPOINTS_ENABLED.id,
            command: DebugCommands.TOGGLE_BREAKPOINTS_ENABLED.id,
            icon: 'fa breakpoints-activate',
            onDidChange: onDidChangeToggleBreakpointsEnabled.event,
            priority: 1
        };
        var updateToggleBreakpointsEnabled = function () {
            var tooltip = _this.breakpointManager.breakpointsEnabled ? 'Deactivate Breakpoints' : 'Activate Breakpoints';
            if (toggleBreakpointsEnabled.tooltip !== tooltip) {
                toggleBreakpointsEnabled.tooltip = tooltip;
                onDidChangeToggleBreakpointsEnabled.fire(undefined);
            }
        };
        toolbar.registerItem({
            id: DebugCommands.ADD_FUNCTION_BREAKPOINT.id,
            command: DebugCommands.ADD_FUNCTION_BREAKPOINT.id,
            icon: 'theia-add-icon',
            tooltip: 'Add Function Breakpoint'
        });
        updateToggleBreakpointsEnabled();
        this.breakpointManager.onDidChangeBreakpoints(updateToggleBreakpointsEnabled);
        toolbar.registerItem(toggleBreakpointsEnabled);
        toolbar.registerItem({
            id: DebugCommands.REMOVE_ALL_BREAKPOINTS.id,
            command: DebugCommands.REMOVE_ALL_BREAKPOINTS.id,
            icon: 'theia-remove-all-icon',
            priority: 2
        });
        toolbar.registerItem({
            id: DebugCommands.ADD_WATCH_EXPRESSION.id,
            command: DebugCommands.ADD_WATCH_EXPRESSION.id,
            icon: 'theia-add-icon',
            tooltip: 'Add Expression'
        });
        toolbar.registerItem({
            id: DebugCommands.COLLAPSE_ALL_WATCH_EXPRESSIONS.id,
            command: DebugCommands.COLLAPSE_ALL_WATCH_EXPRESSIONS.id,
            icon: 'theia-collapse-all-icon',
            tooltip: 'Collapse All',
            priority: 1
        });
        toolbar.registerItem({
            id: DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS.id,
            command: DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS.id,
            icon: 'theia-remove-all-icon',
            tooltip: 'Remove All Expressions',
            priority: 2
        });
    };
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "hasSessionWidget", {
        get: function () {
            return !!this.selectedSession && this.sessionWidgets.has(this.selectedSession.label);
        },
        enumerable: true,
        configurable: true
    });
    DebugFrontendApplicationContribution.prototype.openSession = function (session, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, debugViewLocation, reveal, sessionWidget, area, newSessionWidget;
            var _this = this;
            return __generator(this, function (_b) {
                _a = __assign({ debugViewLocation: session.configuration.debugViewLocation || this.preference['debug.debugViewLocation'], reveal: true }, options), debugViewLocation = _a.debugViewLocation, reveal = _a.reveal;
                sessionWidget = this.revealSession(session);
                if (sessionWidget) {
                    return [2 /*return*/, sessionWidget];
                }
                area = browser_1.ApplicationShell.isSideArea(debugViewLocation) ? debugViewLocation : 'debug';
                if (area === 'debug') {
                    return [2 /*return*/, this.openView({ reveal: reveal })];
                }
                newSessionWidget = this.sessionWidgetFactory({ session: session });
                this.sessionWidgets.set(session.label, newSessionWidget);
                newSessionWidget.disposed.connect(function () {
                    return _this.sessionWidgets.delete(session.label);
                });
                this.shell.addWidget(newSessionWidget, { area: area });
                if (reveal) {
                    this.shell.revealWidget(newSessionWidget.id);
                }
                return [2 /*return*/, newSessionWidget];
            });
        });
    };
    DebugFrontendApplicationContribution.prototype.revealSession = function (session) {
        var widget = this.sessionWidgets.get(session.label);
        if (widget) {
            this.shell.revealWidget(widget.id);
        }
        return widget;
    };
    DebugFrontendApplicationContribution.prototype.start = function (noDebug, debugSessionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        current = debugSessionOptions ? debugSessionOptions : this.configurations.current;
                        if (!!current) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.configurations.addConfiguration()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        if (!current) return [3 /*break*/, 4];
                        if (noDebug !== undefined) {
                            current = __assign(__assign({}, current), { configuration: __assign(__assign({}, current.configuration), { noDebug: noDebug }) });
                        }
                        return [4 /*yield*/, this.manager.start(current)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "threads", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_threads_widget_1.DebugThreadsWidget && currentWidget || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedSession", {
        get: function () {
            var threads = this.threads;
            return threads && threads.selectedElement instanceof debug_session_1.DebugSession && threads.selectedElement || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedThread", {
        get: function () {
            var threads = this.threads;
            return threads && threads.selectedElement instanceof debug_thread_1.DebugThread && threads.selectedElement || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "frames", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_stack_frames_widget_1.DebugStackFramesWidget && currentWidget || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedFrame", {
        get: function () {
            var frames = this.frames;
            return frames && frames.selectedElement instanceof debug_stack_frame_1.DebugStackFrame && frames.selectedElement || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "breakpoints", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget && currentWidget || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedAnyBreakpoint", {
        get: function () {
            var breakpoints = this.breakpoints;
            var selectedElement = breakpoints && breakpoints.selectedElement;
            return selectedElement instanceof debug_breakpoint_1.DebugBreakpoint ? selectedElement : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedBreakpoint", {
        get: function () {
            var breakpoint = this.selectedAnyBreakpoint;
            return breakpoint && breakpoint instanceof debug_source_breakpoint_1.DebugSourceBreakpoint && !breakpoint.logMessage ? breakpoint : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedLogpoint", {
        get: function () {
            var breakpoint = this.selectedAnyBreakpoint;
            return breakpoint && breakpoint instanceof debug_source_breakpoint_1.DebugSourceBreakpoint && !!breakpoint.logMessage ? breakpoint : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedFunctionBreakpoint", {
        get: function () {
            var breakpoint = this.selectedAnyBreakpoint;
            return breakpoint && breakpoint instanceof debug_function_breakpoint_1.DebugFunctionBreakpoint ? breakpoint : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "variables", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_variables_widget_1.DebugVariablesWidget && currentWidget || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedVariable", {
        get: function () {
            var variables = this.variables;
            return variables && variables.selectedElement instanceof debug_console_items_1.DebugVariable && variables.selectedElement || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "watch", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_watch_widget_1.DebugWatchWidget && currentWidget || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "watchExpression", {
        get: function () {
            var watch = this.watch;
            return watch && watch.selectedElement instanceof debug_watch_expression_1.DebugWatchExpression && watch.selectedElement || undefined;
        },
        enumerable: true,
        configurable: true
    });
    DebugFrontendApplicationContribution.prototype.isPosition = function (position) {
        return (position instanceof monaco.Position);
    };
    DebugFrontendApplicationContribution.prototype.registerColors = function (colors) {
        colors.register(
        // Debug colors should be aligned with https://code.visualstudio.com/api/references/theme-color#debug
        {
            id: 'editor.stackFrameHighlightBackground',
            defaults: { dark: '#ffff0033', light: '#ffff6673', hc: '#fff600' },
            description: 'Background color for the highlight of line at the top stack frame position.'
        }, {
            id: 'editor.focusedStackFrameHighlightBackground',
            defaults: { dark: '#7abd7a4d', light: '#cee7ce73', hc: '#cee7ce' },
            description: 'Background color for the highlight of line at focused stack frame position.'
        }, 
        // Status bar colors should be aligned with debugging colors from https://code.visualstudio.com/api/references/theme-color#status-bar-colors
        {
            id: 'statusBar.debuggingBackground', defaults: {
                dark: '#CC6633',
                light: '#CC6633',
                hc: '#CC6633'
            }, description: 'Status bar background color when a program is being debugged. The status bar is shown in the bottom of the window'
        }, {
            id: 'statusBar.debuggingForeground', defaults: {
                dark: 'statusBar.foreground',
                light: 'statusBar.foreground',
                hc: 'statusBar.foreground'
            }, description: 'Status bar foreground color when a program is being debugged. The status bar is shown in the bottom of the window'
        }, {
            id: 'statusBar.debuggingBorder', defaults: {
                dark: 'statusBar.border',
                light: 'statusBar.border',
                hc: 'statusBar.border'
            }, description: 'Status bar border color separating to the sidebar and editor when a program is being debugged. The status bar is shown in the bottom of the window'
        }, 
        // Debug Exception Widget colors should be aligned with
        // https://github.com/microsoft/vscode/blob/ff5f581425da6230b6f9216ecf19abf6c9d285a6/src/vs/workbench/contrib/debug/browser/exceptionWidget.ts#L23
        {
            id: 'debugExceptionWidget.border', defaults: {
                dark: '#a31515', light: '#a31515', hc: '#a31515'
            }, description: 'Exception widget border color.',
        }, {
            id: 'debugExceptionWidget.background', defaults: {
                dark: '#420b0d', light: '#f1dfde', hc: '#420b0d'
            }, description: 'Exception widget background color.'
        });
    };
    DebugFrontendApplicationContribution.prototype.updateStatusBar = function () {
        if (this.debuggingStaturBar === document.body.classList.contains('theia-mod-debugging')) {
            return;
        }
        document.body.classList.toggle('theia-mod-debugging');
    };
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "debuggingStaturBar", {
        get: function () {
            if (this.manager.state < debug_session_1.DebugState.Running) {
                return false;
            }
            var session = this.manager.currentSession;
            if (session && session.configuration.noDebug) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(debug_service_1.DebugService),
        __metadata("design:type", Object)
    ], DebugFrontendApplicationContribution.prototype, "debug", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugFrontendApplicationContribution.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], DebugFrontendApplicationContribution.prototype, "configurations", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugFrontendApplicationContribution.prototype, "breakpointManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], DebugFrontendApplicationContribution.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(debug_session_widget_1.DebugSessionWidgetFactory),
        __metadata("design:type", Function)
    ], DebugFrontendApplicationContribution.prototype, "sessionWidgetFactory", void 0);
    __decorate([
        inversify_1.inject(debug_editor_service_1.DebugEditorService),
        __metadata("design:type", debug_editor_service_1.DebugEditorService)
    ], DebugFrontendApplicationContribution.prototype, "editors", void 0);
    __decorate([
        inversify_1.inject(debug_console_contribution_1.DebugConsoleContribution),
        __metadata("design:type", debug_console_contribution_1.DebugConsoleContribution)
    ], DebugFrontendApplicationContribution.prototype, "console", void 0);
    __decorate([
        inversify_1.inject(debug_schema_updater_1.DebugSchemaUpdater),
        __metadata("design:type", debug_schema_updater_1.DebugSchemaUpdater)
    ], DebugFrontendApplicationContribution.prototype, "schemaUpdater", void 0);
    __decorate([
        inversify_1.inject(debug_preferences_1.DebugPreferences),
        __metadata("design:type", Object)
    ], DebugFrontendApplicationContribution.prototype, "preference", void 0);
    __decorate([
        inversify_1.inject(debug_watch_manager_1.DebugWatchManager),
        __metadata("design:type", debug_watch_manager_1.DebugWatchManager)
    ], DebugFrontendApplicationContribution.prototype, "watchManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], DebugFrontendApplicationContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], DebugFrontendApplicationContribution.prototype, "editorManager", void 0);
    DebugFrontendApplicationContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugFrontendApplicationContribution);
    return DebugFrontendApplicationContribution;
}(browser_1.AbstractViewContribution));
exports.DebugFrontendApplicationContribution = DebugFrontendApplicationContribution;
//# sourceMappingURL=debug-frontend-application-contribution.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var console_widget_1 = require("@theia/console/lib/browser/console-widget");
var browser_1 = require("@theia/core/lib/browser");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var severity_1 = require("@theia/core/lib/common/severity");
var inversify_1 = require("inversify");
var React = require("react");
var debug_console_session_1 = require("./debug-console-session");
exports.InDebugReplContextKey = Symbol('inDebugReplContextKey');
var DebugConsoleCommands;
(function (DebugConsoleCommands) {
    var DEBUG_CONSOLE_CATEGORY = 'Debug';
    DebugConsoleCommands.CLEAR = {
        id: 'debug.console.clear',
        category: DEBUG_CONSOLE_CATEGORY,
        label: 'Clear Console',
        iconClass: 'clear-all'
    };
})(DebugConsoleCommands = exports.DebugConsoleCommands || (exports.DebugConsoleCommands = {}));
var DebugConsoleContribution = /** @class */ (function (_super) {
    __extends(DebugConsoleContribution, _super);
    function DebugConsoleContribution() {
        var _this = _super.call(this, {
            widgetId: DebugConsoleContribution_1.options.id,
            widgetName: DebugConsoleContribution_1.options.title.label,
            defaultWidgetOptions: {
                area: 'bottom'
            },
            toggleCommandId: 'debug:console:toggle',
            toggleKeybinding: 'ctrlcmd+shift+y'
        }) || this;
        _this.changeSeverity = function (event) {
            _this.debugConsoleSession.severity = severity_1.Severity.fromValue(event.target.value);
        };
        return _this;
    }
    DebugConsoleContribution_1 = DebugConsoleContribution;
    DebugConsoleContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(DebugConsoleCommands.CLEAR, {
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return true; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return true; }); },
            execute: function (widget) { return _this.withWidget(widget, function () {
                _this.clearConsole();
            }); },
        });
    };
    DebugConsoleContribution.prototype.registerToolbarItems = function (toolbarRegistry) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                toolbarRegistry.registerItem({
                    id: 'debug-console-severity',
                    render: function (widget) { return _this.renderSeveritySelector(widget); },
                    isVisible: function (widget) { return _this.withWidget(widget, function () { return true; }); },
                    onDidChange: this.debugConsoleSession.onSelectionChange
                });
                toolbarRegistry.registerItem({
                    id: DebugConsoleCommands.CLEAR.id,
                    command: DebugConsoleCommands.CLEAR.id,
                    tooltip: 'Clear Console',
                    priority: 0,
                });
                return [2 /*return*/];
            });
        });
    };
    DebugConsoleContribution.create = function (parent) {
        var inputFocusContextKey = parent.get(exports.InDebugReplContextKey);
        var child = console_widget_1.ConsoleWidget.createContainer(parent, __assign(__assign({}, DebugConsoleContribution_1.options), { inputFocusContextKey: inputFocusContextKey }));
        var widget = child.get(console_widget_1.ConsoleWidget);
        widget.session = child.get(debug_console_session_1.DebugConsoleSession);
        return widget;
    };
    DebugConsoleContribution.bindContribution = function (bind) {
        bind(exports.InDebugReplContextKey).toDynamicValue(function (_a) {
            var container = _a.container;
            return container.get(context_key_service_1.ContextKeyService).createKey('inDebugRepl', false);
        }).inSingletonScope();
        bind(debug_console_session_1.DebugConsoleSession).toSelf().inSingletonScope();
        browser_1.bindViewContribution(bind, DebugConsoleContribution_1).onActivation(function (context, _) {
            // eagerly initialize the debug console session
            context.container.get(debug_console_session_1.DebugConsoleSession);
            return _;
        });
        bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(DebugConsoleContribution_1);
        bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
            var container = _a.container;
            return ({
                id: DebugConsoleContribution_1.options.id,
                createWidget: function () { return DebugConsoleContribution_1.create(container); }
            });
        });
    };
    DebugConsoleContribution.prototype.renderSeveritySelector = function (widget) {
        var severityElements = [];
        severity_1.Severity.toArray().forEach(function (s) { return severityElements.push(React.createElement("option", { value: s, key: s }, s)); });
        var selectedValue = severity_1.Severity.toString(this.debugConsoleSession.severity || severity_1.Severity.Ignore);
        return React.createElement("select", { className: 'theia-select', id: 'debugConsoleSeverity', key: 'debugConsoleSeverity', value: selectedValue, onChange: this.changeSeverity }, severityElements);
    };
    DebugConsoleContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof console_widget_1.ConsoleWidget && widget.id === DebugConsoleContribution_1.options.id) {
            return fn(widget);
        }
        return false;
    };
    /**
     * Clear the console widget.
     */
    DebugConsoleContribution.prototype.clearConsole = function () {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        widget.clear();
                        return [2 /*return*/];
                }
            });
        });
    };
    var DebugConsoleContribution_1;
    DebugConsoleContribution.options = {
        id: 'debug-console',
        title: {
            label: 'Debug Console',
            iconClass: 'theia-debug-console-icon'
        },
        input: {
            uri: debug_console_session_1.DebugConsoleSession.uri,
            options: {
                autoSizing: true,
                minHeight: 1,
                maxHeight: 10
            }
        }
    };
    __decorate([
        inversify_1.inject(debug_console_session_1.DebugConsoleSession),
        __metadata("design:type", debug_console_session_1.DebugConsoleSession)
    ], DebugConsoleContribution.prototype, "debugConsoleSession", void 0);
    DebugConsoleContribution = DebugConsoleContribution_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugConsoleContribution);
    return DebugConsoleContribution;
}(browser_1.AbstractViewContribution));
exports.DebugConsoleContribution = DebugConsoleContribution;
//# sourceMappingURL=debug-console-contribution.js.map
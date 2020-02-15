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
var React = require("react");
var ReactDOM = require("react-dom");
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var uri_1 = require("@theia/core/lib/common/uri");
var monaco_editor_provider_1 = require("@theia/monaco/lib/browser/monaco-editor-provider");
var monaco_editor_zone_widget_1 = require("@theia/monaco/lib/browser/monaco-editor-zone-widget");
var debug_editor_1 = require("./debug-editor");
var debug_source_breakpoint_1 = require("../model/debug-source-breakpoint");
var DebugBreakpointWidget = /** @class */ (function () {
    function DebugBreakpointWidget() {
        var _this = this;
        this.toDispose = new core_1.DisposableCollection();
        this.context = 'condition';
        this._values = {};
        this.updateInput = function (e) {
            if (_this._input) {
                _this._values[_this.context] = _this._input.getControl().getValue();
            }
            _this.context = e.currentTarget.value;
            _this.render();
            if (_this._input) {
                _this._input.focus();
            }
        };
    }
    DebugBreakpointWidget_1 = DebugBreakpointWidget;
    Object.defineProperty(DebugBreakpointWidget.prototype, "values", {
        get: function () {
            var _a;
            if (!this._input) {
                return undefined;
            }
            return __assign(__assign({}, this._values), (_a = {}, _a[this.context] = this._input.getControl().getValue(), _a));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugBreakpointWidget.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: true,
        configurable: true
    });
    DebugBreakpointWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selectNode, inputNode, input, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.toDispose.push(this.zone = new monaco_editor_zone_widget_1.MonacoEditorZoneWidget(this.editor.getControl()));
                        this.zone.containerNode.classList.add('theia-debug-breakpoint-widget');
                        selectNode = this.selectNode = document.createElement('div');
                        selectNode.classList.add('theia-debug-breakpoint-select');
                        this.zone.containerNode.appendChild(selectNode);
                        inputNode = document.createElement('div');
                        inputNode.classList.add('theia-debug-breakpoint-input');
                        this.zone.containerNode.appendChild(inputNode);
                        _a = this;
                        return [4 /*yield*/, this.createInput(inputNode)];
                    case 1:
                        input = _a._input = _b.sent();
                        if (this.toDispose.disposed) {
                            input.dispose();
                            return [2 /*return*/];
                        }
                        this.toDispose.push(input);
                        this.toDispose.push(monaco.modes.CompletionProviderRegistry.register({ scheme: input.uri.scheme }, {
                            provideCompletionItems: function (model, position, context, token) { return __awaiter(_this, void 0, void 0, function () {
                                var suggestions, editor, items, overwriteBefore, value, items_1, items_1_1, completion;
                                var e_1, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            suggestions = [];
                                            if (!((this.context === 'condition' || this.context === 'logMessage')
                                                && input.uri.toString() === model.uri.toString())) return [3 /*break*/, 2];
                                            editor = this.editor.getControl();
                                            return [4 /*yield*/, monaco.suggest.provideSuggestionItems(editor.getModel(), new monaco.Position(editor.getPosition().lineNumber, 1), new monaco.suggest.CompletionOptions(undefined, new Set().add(monaco.languages.CompletionItemKind.Snippet)), context, token)];
                                        case 1:
                                            items = _b.sent();
                                            overwriteBefore = 0;
                                            if (this.context === 'condition') {
                                                overwriteBefore = position.column - 1;
                                            }
                                            else {
                                                value = editor.getModel().getValue();
                                                while ((position.column - 2 - overwriteBefore >= 0)
                                                    && value[position.column - 2 - overwriteBefore] !== '{' && value[position.column - 2 - overwriteBefore] !== ' ') {
                                                    overwriteBefore++;
                                                }
                                            }
                                            try {
                                                for (items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                                                    completion = items_1_1.value.completion;
                                                    completion.range = monaco.Range.fromPositions(position.delta(0, -overwriteBefore), position);
                                                    suggestions.push(completion);
                                                }
                                            }
                                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                            finally {
                                                try {
                                                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                                                }
                                                finally { if (e_1) throw e_1.error; }
                                            }
                                            _b.label = 2;
                                        case 2: return [2 /*return*/, { suggestions: suggestions }];
                                    }
                                });
                            }); }
                        }));
                        this.toDispose.push(this.zone.onDidLayoutChange(function (dimension) { return _this.layout(dimension); }));
                        this.toDispose.push(input.getControl().onDidChangeModelContent(function () {
                            var heightInLines = input.getControl().getModel().getLineCount() + 1;
                            _this.zone.layout(heightInLines);
                            _this.updatePlaceholder();
                        }));
                        this.toDispose.push(core_1.Disposable.create(function () { return ReactDOM.unmountComponentAtNode(selectNode); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugBreakpointWidget.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(DebugBreakpointWidget.prototype, "position", {
        get: function () {
            var options = this.zone.options;
            return options && new monaco.Position(options.afterLineNumber, options.afterColumn || -1);
        },
        enumerable: true,
        configurable: true
    });
    DebugBreakpointWidget.prototype.show = function (options) {
        if (!this._input) {
            return;
        }
        var breakpoint = options instanceof debug_source_breakpoint_1.DebugSourceBreakpoint ? options : 'breakpoint' in options ? options.breakpoint : undefined;
        this._values = breakpoint ? {
            condition: breakpoint.condition,
            hitCondition: breakpoint.hitCondition,
            logMessage: breakpoint.logMessage
        } : {};
        if (options instanceof debug_source_breakpoint_1.DebugSourceBreakpoint) {
            if (options.logMessage) {
                this.context = 'logMessage';
            }
            else if (options.hitCondition && !options.condition) {
                this.context = 'hitCondition';
            }
            else {
                this.context = 'condition';
            }
        }
        else {
            this.context = options.context;
        }
        this.render();
        var position = 'position' in options ? options.position : undefined;
        var afterLineNumber = breakpoint ? breakpoint.line : position.lineNumber;
        var afterColumn = breakpoint ? breakpoint.column : position.column;
        var editor = this._input.getControl();
        var heightInLines = editor.getModel().getLineCount() + 1;
        this.zone.show({ afterLineNumber: afterLineNumber, afterColumn: afterColumn, heightInLines: heightInLines, frameWidth: 1 });
        editor.setPosition(editor.getModel().getPositionAt(editor.getModel().getValueLength()));
        this._input.focus();
    };
    DebugBreakpointWidget.prototype.hide = function () {
        this.zone.hide();
        this.editor.focus();
    };
    DebugBreakpointWidget.prototype.layout = function (dimension) {
        if (this._input) {
            this._input.getControl().layout(dimension);
        }
    };
    DebugBreakpointWidget.prototype.createInput = function (node) {
        return this.editorProvider.createInline(new uri_1.default().withScheme('breakpointinput').withPath(this.editor.getControl().getId()), node, {
            autoSizing: false
        });
    };
    DebugBreakpointWidget.prototype.render = function () {
        if (this._input) {
            this._input.getControl().setValue(this._values[this.context] || '');
        }
        ReactDOM.render(React.createElement("select", { className: 'theia-select', value: this.context, onChange: this.updateInput },
            this.renderOption('condition', 'Expression'),
            this.renderOption('hitCondition', 'Hit Count'),
            this.renderOption('logMessage', 'Log Message')), this.selectNode);
    };
    DebugBreakpointWidget.prototype.renderOption = function (context, label) {
        return React.createElement("option", { value: context }, label);
    };
    DebugBreakpointWidget.prototype.updatePlaceholder = function () {
        if (!this._input) {
            return;
        }
        var value = this._input.getControl().getValue();
        var decorations = !!value ? [] : [{
                color: undefined,
                range: {
                    startLineNumber: 0,
                    endLineNumber: 0,
                    startColumn: 0,
                    endColumn: 1
                },
                renderOptions: {
                    after: {
                        contentText: this.placeholder,
                        opacity: '0.4'
                    }
                }
            }];
        this._input.getControl().setDecorations(DebugBreakpointWidget_1.PLACEHOLDER_DECORATION, decorations);
    };
    Object.defineProperty(DebugBreakpointWidget.prototype, "placeholder", {
        get: function () {
            if (this.context === 'logMessage') {
                return "Message to log when breakpoint is hit. Expressions within {} are interpolated. 'Enter' to accept, 'esc' to cancel.";
            }
            if (this.context === 'hitCondition') {
                return "Break when hit count condition is met. 'Enter' to accept, 'esc' to cancel.";
            }
            return "Break when expression evaluates to true. 'Enter' to accept, 'esc' to cancel.";
        },
        enumerable: true,
        configurable: true
    });
    var DebugBreakpointWidget_1;
    DebugBreakpointWidget.PLACEHOLDER_DECORATION = 'placeholderDecoration';
    __decorate([
        inversify_1.inject(debug_editor_1.DebugEditor),
        __metadata("design:type", Object)
    ], DebugBreakpointWidget.prototype, "editor", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_provider_1.MonacoEditorProvider),
        __metadata("design:type", monaco_editor_provider_1.MonacoEditorProvider)
    ], DebugBreakpointWidget.prototype, "editorProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DebugBreakpointWidget.prototype, "init", null);
    DebugBreakpointWidget = DebugBreakpointWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugBreakpointWidget);
    return DebugBreakpointWidget;
}());
exports.DebugBreakpointWidget = DebugBreakpointWidget;
//# sourceMappingURL=debug-breakpoint-widget.js.map
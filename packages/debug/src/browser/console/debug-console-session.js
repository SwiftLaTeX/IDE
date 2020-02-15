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
var throttle = require("lodash.throttle");
var inversify_1 = require("inversify");
var console_session_1 = require("@theia/console/lib/browser/console-session");
var ansi_console_item_1 = require("@theia/console/lib/browser/ansi-console-item");
var debug_session_manager_1 = require("../debug-session-manager");
var browser_1 = require("@theia/languages/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var debug_console_items_1 = require("./debug-console-items");
var severity_1 = require("@theia/core/lib/common/severity");
var DebugConsoleSession = /** @class */ (function (_super) {
    __extends(DebugConsoleSession, _super);
    function DebugConsoleSession() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'debug';
        _this.items = [];
        _this.completionKinds = new Map();
        _this.fireDidChange = throttle(function () { return _super.prototype.fireDidChange.call(_this); }, 50);
        return _this;
    }
    DebugConsoleSession_1 = DebugConsoleSession;
    DebugConsoleSession.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.manager.onDidCreateDebugSession(function (session) {
            if (_this.manager.sessions.length === 1) {
                _this.clear();
            }
            session.on('output', function (event) { return _this.logOutput(session, event); });
        }));
        this.completionKinds.set('method', browser_1.CompletionItemKind.Method);
        this.completionKinds.set('function', browser_1.CompletionItemKind.Function);
        this.completionKinds.set('constructor', browser_1.CompletionItemKind.Constructor);
        this.completionKinds.set('field', browser_1.CompletionItemKind.Field);
        this.completionKinds.set('variable', browser_1.CompletionItemKind.Variable);
        this.completionKinds.set('class', browser_1.CompletionItemKind.Class);
        this.completionKinds.set('interface', browser_1.CompletionItemKind.Interface);
        this.completionKinds.set('module', browser_1.CompletionItemKind.Module);
        this.completionKinds.set('property', browser_1.CompletionItemKind.Property);
        this.completionKinds.set('unit', browser_1.CompletionItemKind.Unit);
        this.completionKinds.set('value', browser_1.CompletionItemKind.Value);
        this.completionKinds.set('enum', browser_1.CompletionItemKind.Enum);
        this.completionKinds.set('keyword', browser_1.CompletionItemKind.Keyword);
        this.completionKinds.set('snippet', browser_1.CompletionItemKind.Snippet);
        this.completionKinds.set('text', browser_1.CompletionItemKind.Text);
        this.completionKinds.set('color', browser_1.CompletionItemKind.Color);
        this.completionKinds.set('file', browser_1.CompletionItemKind.File);
        this.completionKinds.set('reference', browser_1.CompletionItemKind.Reference);
        this.completionKinds.set('customcolor', browser_1.CompletionItemKind.Color);
        if (this.languages.registerCompletionItemProvider) {
            this.toDispose.push(this.languages.registerCompletionItemProvider([DebugConsoleSession_1.uri], {
                provideCompletionItems: function (params) { return _this.completions(params); }
            }, '.'));
        }
    };
    DebugConsoleSession.prototype.getElements = function () {
        var _this = this;
        return this.items.filter(function (e) { return !_this.severity || e.severity === _this.severity; })[Symbol.iterator]();
    };
    DebugConsoleSession.prototype.completions = function (_a) {
        var uri = _a.textDocument.uri, position = _a.position;
        return __awaiter(this, void 0, void 0, function () {
            var session, model, column, lineNumber, word, prefixLength_1, text, document_1, items;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        session = this.manager.currentSession;
                        if (!(session && session.capabilities.supportsCompletionsRequest)) return [3 /*break*/, 2];
                        model = monaco.editor.getModel(monaco.Uri.parse(uri));
                        if (!model) return [3 /*break*/, 2];
                        column = position.character + 1;
                        lineNumber = position.line + 1;
                        word = model.getWordAtPosition({ column: column, lineNumber: lineNumber });
                        prefixLength_1 = word ? word.word.length : 0;
                        text = model.getValue();
                        document_1 = browser_1.TextDocument.create(uri, model.getModeId(), model.getVersionId(), text);
                        return [4 /*yield*/, session.completions(text, column, lineNumber)];
                    case 1:
                        items = _b.sent();
                        return [2 /*return*/, items.map(function (item) { return _this.asCompletionItem(document_1, position, prefixLength_1, item); })];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    DebugConsoleSession.prototype.asCompletionItem = function (document, position, prefixLength, item) {
        var label = item.label, text = item.text, type = item.type, length = item.length;
        var newText = text || label;
        var start = document.positionAt(document.offsetAt(position) - (length || prefixLength));
        var replaceRange = browser_1.Range.create(start, position);
        var textEdit = browser_1.TextEdit.replace(replaceRange, newText);
        return {
            label: label,
            textEdit: textEdit,
            kind: this.completionKinds.get(type)
        };
    };
    DebugConsoleSession.prototype.execute = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var expression;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expression = new debug_console_items_1.ExpressionItem(value, function () { return _this.manager.currentSession; });
                        this.items.push(expression);
                        return [4 /*yield*/, expression.evaluate()];
                    case 1:
                        _a.sent();
                        this.fireDidChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugConsoleSession.prototype.clear = function () {
        this.items = [];
        this.fireDidChange();
    };
    DebugConsoleSession.prototype.append = function (value) {
        if (!value) {
            return;
        }
        var lastItem = this.items.slice(-1)[0];
        if (lastItem instanceof ansi_console_item_1.AnsiConsoleItem && lastItem.content === this.uncompletedItemContent) {
            this.items.pop();
            this.uncompletedItemContent += value;
        }
        else {
            this.uncompletedItemContent = value;
        }
        this.items.push(new ansi_console_item_1.AnsiConsoleItem(this.uncompletedItemContent, severity_1.Severity.Info));
        this.fireDidChange();
    };
    DebugConsoleSession.prototype.appendLine = function (value) {
        this.items.push(new ansi_console_item_1.AnsiConsoleItem(value, severity_1.Severity.Info));
        this.fireDidChange();
    };
    DebugConsoleSession.prototype.logOutput = function (session, event) {
        return __awaiter(this, void 0, void 0, function () {
            var body, category, variablesReference, severity, items, _a, _b, line;
            var _c, e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        body = event.body;
                        category = body.category, variablesReference = body.variablesReference;
                        if (category === 'telemetry') {
                            console.debug("telemetry/" + event.body.output, event.body.data);
                            return [2 /*return*/];
                        }
                        severity = category === 'stderr' ? severity_1.Severity.Error : event.body.category === 'console' ? severity_1.Severity.Warning : severity_1.Severity.Info;
                        if (!variablesReference) return [3 /*break*/, 2];
                        return [4 /*yield*/, new debug_console_items_1.ExpressionContainer({ session: function () { return session; }, variablesReference: variablesReference }).getElements()];
                    case 1:
                        items = _e.sent();
                        (_c = this.items).push.apply(_c, __spread(items));
                        return [3 /*break*/, 3];
                    case 2:
                        if (typeof body.output === 'string') {
                            try {
                                for (_a = __values(body.output.split('\n')), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    line = _b.value;
                                    this.items.push(new ansi_console_item_1.AnsiConsoleItem(line, severity));
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        _e.label = 3;
                    case 3:
                        this.fireDidChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    var DebugConsoleSession_1;
    DebugConsoleSession.uri = new uri_1.default().withScheme('debugconsole');
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugConsoleSession.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(browser_1.Languages),
        __metadata("design:type", Object)
    ], DebugConsoleSession.prototype, "languages", void 0);
    __decorate([
        inversify_1.inject(browser_1.Workspace),
        __metadata("design:type", Object)
    ], DebugConsoleSession.prototype, "workspace", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugConsoleSession.prototype, "init", null);
    DebugConsoleSession = DebugConsoleSession_1 = __decorate([
        inversify_1.injectable()
    ], DebugConsoleSession);
    return DebugConsoleSession;
}(console_session_1.ConsoleSession));
exports.DebugConsoleSession = DebugConsoleSession;
//# sourceMappingURL=debug-console-session.js.map
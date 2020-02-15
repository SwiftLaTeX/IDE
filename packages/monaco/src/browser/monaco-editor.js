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
var monaco_languageclient_1 = require("monaco-languageclient");
var domutils_1 = require("@phosphor/domutils");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var common_1 = require("@theia/core/lib/common");
var MonacoEditorServices = /** @class */ (function () {
    function MonacoEditorServices(services) {
        Object.assign(this, services);
    }
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoEditorServices.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter),
        __metadata("design:type", monaco_languageclient_1.ProtocolToMonacoConverter)
    ], MonacoEditorServices.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], MonacoEditorServices.prototype, "contextKeyService", void 0);
    MonacoEditorServices = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.unmanaged()),
        __metadata("design:paramtypes", [MonacoEditorServices])
    ], MonacoEditorServices);
    return MonacoEditorServices;
}());
exports.MonacoEditorServices = MonacoEditorServices;
var MonacoEditor = /** @class */ (function (_super) {
    __extends(MonacoEditor, _super);
    function MonacoEditor(uri, document, node, services, options, override) {
        var _this = _super.call(this, services) || this;
        _this.uri = uri;
        _this.document = document;
        _this.node = node;
        _this.toDispose = new common_1.DisposableCollection();
        // protected yjs: MonacoYJSBinding;
        _this.onCursorPositionChangedEmitter = new common_1.Emitter();
        _this.onSelectionChangedEmitter = new common_1.Emitter();
        _this.onFocusChangedEmitter = new common_1.Emitter();
        _this.onDocumentContentChangedEmitter = new common_1.Emitter();
        _this.onMouseDownEmitter = new common_1.Emitter();
        _this.onLanguageChangedEmitter = new common_1.Emitter();
        _this.onLanguageChanged = _this.onLanguageChangedEmitter.event;
        _this.onScrollChangedEmitter = new common_1.Emitter();
        _this.onEncodingChangedEmitter = new common_1.Emitter();
        _this.onEncodingChanged = _this.onEncodingChangedEmitter.event;
        _this.documents = new Set();
        /* `true` because it is derived from an URI during the instantiation */
        _this._languageAutoDetected = true;
        _this.toDispose.pushAll([
            _this.onCursorPositionChangedEmitter,
            _this.onSelectionChangedEmitter,
            _this.onFocusChangedEmitter,
            _this.onDocumentContentChangedEmitter,
            _this.onMouseDownEmitter,
            _this.onLanguageChangedEmitter,
            _this.onScrollChangedEmitter,
            _this.onEncodingChangedEmitter
        ]);
        // this.yjs = new MonacoYJSBinding(uri, document);
        _this.documents.add(document);
        _this.autoSizing = options && options.autoSizing !== undefined ? options.autoSizing : false;
        _this.minHeight = options && options.minHeight !== undefined ? options.minHeight : -1;
        _this.maxHeight = options && options.maxHeight !== undefined ? options.maxHeight : -1;
        _this.toDispose.push(_this.create(options, override));
        _this.addHandlers(_this.editor);
        return _this;
    }
    MonacoEditor.prototype.getEncoding = function () {
        return this.document.getEncoding() || 'utf8';
    };
    MonacoEditor.prototype.setEncoding = function (encoding, mode) {
        var _this = this;
        if (mode === 1 /* Decode */) {
            // reopen file with encoding
            this.document.reopenWithEncoding(encoding)
                .then(function () { return _this.onEncodingChangedEmitter.fire(encoding); });
        }
        else {
            // encode and save file
            this.document.saveWithEncoding(encoding)
                .then(function () { return _this.onEncodingChangedEmitter.fire(encoding); });
        }
    };
    MonacoEditor.prototype.create = function (options, override) {
        return this.editor = monaco.editor.create(this.node, __assign(__assign({}, options), { lightbulb: { enabled: true }, fixedOverflowWidgets: true, scrollbar: {
                useShadows: false,
                verticalHasArrows: false,
                horizontalHasArrows: false,
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10
            } }), override);
    };
    MonacoEditor.prototype.addHandlers = function (codeEditor) {
        var _this = this;
        this.toDispose.push(codeEditor.onDidChangeModelLanguage(function (e) {
            return _this.fireLanguageChanged(e.newLanguage);
        }));
        this.toDispose.push(codeEditor.onDidChangeConfiguration(function () { return _this.refresh(); }));
        this.toDispose.push(codeEditor.onDidChangeModel(function () { return _this.refresh(); }));
        this.toDispose.push(codeEditor.onDidChangeModelContent(function (e) {
            _this.refresh();
            _this.onDocumentContentChangedEmitter.fire({ document: _this.document, contentChanges: e.changes.map(_this.mapModelContentChange.bind(_this)) });
        }));
        this.toDispose.push(codeEditor.onDidChangeCursorPosition(function () {
            return _this.onCursorPositionChangedEmitter.fire(_this.cursor);
        }));
        this.toDispose.push(codeEditor.onDidChangeCursorSelection(function () {
            return _this.onSelectionChangedEmitter.fire(_this.selection);
        }));
        this.toDispose.push(codeEditor.onDidFocusEditorText(function () {
            return _this.onFocusChangedEmitter.fire(_this.isFocused());
        }));
        this.toDispose.push(codeEditor.onDidBlurEditorText(function () {
            return _this.onFocusChangedEmitter.fire(_this.isFocused());
        }));
        this.toDispose.push(codeEditor.onMouseDown(function (e) {
            var _a = e.target, element = _a.element, position = _a.position, range = _a.range;
            _this.onMouseDownEmitter.fire({
                target: __assign(__assign({}, e.target), { element: element || undefined, mouseColumn: _this.m2p.asPosition(undefined, e.target.mouseColumn).character, range: range && _this.m2p.asRange(range) || undefined, position: position && _this.m2p.asPosition(position.lineNumber, position.column) || undefined }),
                event: e.event.browserEvent
            });
        }));
        this.toDispose.push(codeEditor.onDidScrollChange(function (e) {
            _this.onScrollChangedEmitter.fire(undefined);
        }));
    };
    MonacoEditor.prototype.getVisibleRanges = function () {
        var _this = this;
        return this.editor.getVisibleRanges().map(function (range) { return _this.m2p.asRange(range); });
    };
    MonacoEditor.prototype.mapModelContentChange = function (change) {
        return {
            range: this.m2p.asRange(change.range),
            rangeLength: change.rangeLength,
            text: change.text
        };
    };
    Object.defineProperty(MonacoEditor.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onDocumentContentChanged", {
        get: function () {
            return this.onDocumentContentChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "cursor", {
        get: function () {
            var _a = this.editor.getPosition(), lineNumber = _a.lineNumber, column = _a.column;
            return this.m2p.asPosition(lineNumber, column);
        },
        set: function (cursor) {
            var position = this.p2m.asPosition(cursor);
            this.editor.setPosition(position);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onCursorPositionChanged", {
        get: function () {
            return this.onCursorPositionChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "selection", {
        get: function () {
            return this.m2p.asRange(this.editor.getSelection());
        },
        set: function (selection) {
            var range = this.p2m.asRange(selection);
            this.editor.setSelection(range);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onSelectionChanged", {
        get: function () {
            return this.onSelectionChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onScrollChanged", {
        get: function () {
            return this.onScrollChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditor.prototype.revealPosition = function (raw, options) {
        if (options === void 0) { options = { vertical: 'center' }; }
        var position = this.p2m.asPosition(raw);
        switch (options.vertical) {
            case 'auto':
                this.editor.revealPosition(position);
                break;
            case 'center':
                this.editor.revealPositionInCenter(position);
                break;
            case 'centerIfOutsideViewport':
                this.editor.revealPositionInCenterIfOutsideViewport(position);
                break;
        }
    };
    MonacoEditor.prototype.revealRange = function (raw, options) {
        if (options === void 0) { options = { at: 'center' }; }
        var range = this.p2m.asRange(raw);
        switch (options.at) {
            case 'top':
                this.editor.revealRangeAtTop(range);
                break;
            case 'center':
                this.editor.revealRangeInCenter(range);
                break;
            case 'centerIfOutsideViewport':
                this.editor.revealRangeInCenterIfOutsideViewport(range);
                break;
            case 'auto':
                this.editor.revealRange(range);
                break;
        }
    };
    MonacoEditor.prototype.focus = function () {
        this.editor.focus();
    };
    MonacoEditor.prototype.blur = function () {
        var node = this.editor.getDomNode();
        if (node) {
            var textarea = node.querySelector('textarea');
            textarea.blur();
        }
    };
    MonacoEditor.prototype.isFocused = function (_a) {
        var strict = (_a === void 0 ? { strict: false } : _a).strict;
        if (!this.editor.hasTextFocus()) {
            return false;
        }
        if (strict) {
            return !this.isSuggestWidgetVisible() && !this.isFindWidgetVisible() && !this.isRenameInputVisible();
        }
        return true;
    };
    Object.defineProperty(MonacoEditor.prototype, "onFocusChanged", {
        get: function () {
            return this.onFocusChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onMouseDown", {
        get: function () {
            return this.onMouseDownEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `true` if the suggest widget is visible in the editor. Otherwise, `false`.
     */
    MonacoEditor.prototype.isSuggestWidgetVisible = function () {
        return this.contextKeyService.match('suggestWidgetVisible', this.editor.getDomNode() || this.node);
    };
    /**
     * `true` if the find (and replace) widget is visible in the editor. Otherwise, `false`.
     */
    MonacoEditor.prototype.isFindWidgetVisible = function () {
        return this.contextKeyService.match('findWidgetVisible', this.editor.getDomNode() || this.node);
    };
    /**
     * `true` if the name rename refactoring input HTML element is visible. Otherwise, `false`.
     */
    MonacoEditor.prototype.isRenameInputVisible = function () {
        return this.contextKeyService.match('renameInputVisible', this.editor.getDomNode() || this.node);
    };
    MonacoEditor.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoEditor.prototype.trigger = function (source, handlerId, payload) {
        this.editor.trigger(source, handlerId, payload);
    };
    MonacoEditor.prototype.getControl = function () {
        return this.editor;
    };
    MonacoEditor.prototype.refresh = function () {
        this.autoresize();
    };
    MonacoEditor.prototype.resizeToFit = function () {
        this.autoresize();
    };
    MonacoEditor.prototype.setSize = function (dimension) {
        this.resize(dimension);
    };
    MonacoEditor.prototype.autoresize = function () {
        if (this.autoSizing) {
            // eslint-disable-next-line no-null/no-null
            this.resize(null);
        }
    };
    MonacoEditor.prototype.resize = function (dimension) {
        if (this.node) {
            var layoutSize = this.computeLayoutSize(this.node, dimension);
            this.editor.layout(layoutSize);
        }
    };
    MonacoEditor.prototype.computeLayoutSize = function (hostNode, dimension) {
        if (dimension && dimension.width >= 0 && dimension.height >= 0) {
            return dimension;
        }
        var boxSizing = domutils_1.ElementExt.boxSizing(hostNode);
        var width = (!dimension || dimension.width < 0) ?
            this.getWidth(hostNode, boxSizing) :
            dimension.width;
        var height = (!dimension || dimension.height < 0) ?
            this.getHeight(hostNode, boxSizing) :
            dimension.height;
        return { width: width, height: height };
    };
    MonacoEditor.prototype.getWidth = function (hostNode, boxSizing) {
        return hostNode.offsetWidth - boxSizing.horizontalSum;
    };
    MonacoEditor.prototype.getHeight = function (hostNode, boxSizing) {
        if (!this.autoSizing) {
            return hostNode.offsetHeight - boxSizing.verticalSum;
        }
        var configuration = this.editor.getConfiguration();
        var lineHeight = configuration.lineHeight;
        var lineCount = this.editor.getModel().getLineCount();
        var contentHeight = lineHeight * lineCount;
        var horizontalScrollbarHeight = configuration.layoutInfo.horizontalScrollbarHeight;
        var editorHeight = contentHeight + horizontalScrollbarHeight;
        if (this.minHeight >= 0) {
            var minHeight = lineHeight * this.minHeight + horizontalScrollbarHeight;
            if (editorHeight < minHeight) {
                return minHeight;
            }
        }
        if (this.maxHeight >= 0) {
            var maxHeight = lineHeight * this.maxHeight + horizontalScrollbarHeight;
            return Math.min(maxHeight, editorHeight);
        }
        return editorHeight;
    };
    MonacoEditor.prototype.isActionSupported = function (id) {
        var action = this.editor.getAction(id);
        return !!action && action.isSupported();
    };
    MonacoEditor.prototype.runAction = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        action = this.editor.getAction(id);
                        if (!(action && action.isSupported())) return [3 /*break*/, 2];
                        return [4 /*yield*/, action.run()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MonacoEditor.prototype, "commandService", {
        get: function () {
            return this.editor._commandService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "instantiationService", {
        get: function () {
            return this.editor._instantiationService;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditor.prototype.deltaDecorations = function (params) {
        var oldDecorations = params.oldDecorations;
        var newDecorations = this.toDeltaDecorations(params);
        return this.editor.deltaDecorations(oldDecorations, newDecorations);
    };
    MonacoEditor.prototype.toDeltaDecorations = function (params) {
        var _this = this;
        return params.newDecorations.map(function (decoration) { return (__assign(__assign({}, decoration), { range: _this.p2m.asRange(decoration.range) })); });
    };
    MonacoEditor.prototype.getLinesDecorations = function (startLineNumber, endLineNumber) {
        var _this = this;
        var toPosition = function (line) { return _this.p2m.asPosition({ line: line, character: 0 }); };
        var start = toPosition(startLineNumber).lineNumber;
        var end = toPosition(endLineNumber).lineNumber;
        return this.editor
            .getModel()
            .getLinesDecorations(start, end)
            .map(this.toEditorDecoration.bind(this));
    };
    MonacoEditor.prototype.toEditorDecoration = function (decoration) {
        var range = this.m2p.asRange(decoration.range);
        var id = decoration.id, options = decoration.options;
        return {
            options: options,
            range: range,
            id: id
        };
    };
    MonacoEditor.prototype.getVisibleColumn = function (position) {
        return this.editor.getVisibleColumnFromPosition(this.p2m.asPosition(position));
    };
    MonacoEditor.prototype.replaceText = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var edits;
            var _this = this;
            return __generator(this, function (_a) {
                edits = params.replaceOperations.map(function (param) {
                    var range = monaco.Range.fromPositions(_this.p2m.asPosition(param.range.start), _this.p2m.asPosition(param.range.end));
                    return {
                        forceMoveMarkers: true,
                        identifier: {
                            major: range.startLineNumber,
                            minor: range.startColumn
                        },
                        range: range,
                        text: param.text
                    };
                });
                return [2 /*return*/, this.editor.executeEdits(params.source, edits)];
            });
        });
    };
    MonacoEditor.prototype.executeEdits = function (edits) {
        return this.editor.executeEdits('MonacoEditor', this.p2m.asTextEdits(edits));
    };
    MonacoEditor.prototype.storeViewState = function () {
        return this.editor.saveViewState();
    };
    MonacoEditor.prototype.restoreViewState = function (state) {
        this.editor.restoreViewState(state);
    };
    Object.defineProperty(MonacoEditor.prototype, "languageAutoDetected", {
        get: function () {
            return this._languageAutoDetected;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditor.prototype.detectLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modeService, firstLine, model, language;
            return __generator(this, function (_a) {
                modeService = monaco.services.StaticServices.modeService.get();
                firstLine = this.document.textEditorModel.getLineContent(1);
                model = this.getControl().getModel();
                language = modeService.createByFilepathOrFirstLine(model && model.uri, firstLine);
                this.setLanguage(language.languageIdentifier.language);
                this._languageAutoDetected = true;
                return [2 /*return*/];
            });
        });
    };
    MonacoEditor.prototype.setLanguage = function (languageId) {
        var e_1, _a;
        try {
            for (var _b = __values(this.documents), _c = _b.next(); !_c.done; _c = _b.next()) {
                var document_1 = _c.value;
                monaco.editor.setModelLanguage(document_1.textEditorModel, languageId);
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
    MonacoEditor.prototype.fireLanguageChanged = function (langaugeId) {
        this._languageAutoDetected = false;
        this.onLanguageChangedEmitter.fire(langaugeId);
    };
    MonacoEditor.prototype.getResourceUri = function () {
        return this.uri;
    };
    MonacoEditor.prototype.createMoveToUri = function (resourceUri) {
        return this.uri.withPath(resourceUri.path);
    };
    return MonacoEditor;
}(MonacoEditorServices));
exports.MonacoEditor = MonacoEditor;
(function (MonacoEditor) {
    function getAll(manager) {
        return manager.all.map(function (e) { return get(e); }).filter(function (e) { return !!e; });
    }
    MonacoEditor.getAll = getAll;
    function getCurrent(manager) {
        return get(manager.currentEditor);
    }
    MonacoEditor.getCurrent = getCurrent;
    function getActive(manager) {
        return get(manager.activeEditor);
    }
    MonacoEditor.getActive = getActive;
    function get(editorWidget) {
        if (editorWidget && editorWidget.editor instanceof MonacoEditor) {
            return editorWidget.editor;
        }
        return undefined;
    }
    MonacoEditor.get = get;
    function findByDocument(manager, document) {
        return getAll(manager).filter(function (editor) { return editor.documents.has(document); });
    }
    MonacoEditor.findByDocument = findByDocument;
    function getWidgetFor(manager, control) {
        if (!control) {
            return undefined;
        }
        return manager.all.find(function (widget) {
            var editor = get(widget);
            return !!editor && editor.getControl() === control;
        });
    }
    MonacoEditor.getWidgetFor = getWidgetFor;
})(MonacoEditor = exports.MonacoEditor || (exports.MonacoEditor = {}));
exports.MonacoEditor = MonacoEditor;
//# sourceMappingURL=monaco-editor.js.map
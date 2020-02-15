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
var SymbolKind = monaco.languages.SymbolKind;
var browser_1 = require("@theia/editor/lib/browser");
var DocumentSymbolProviderRegistry = monaco.modes.DocumentSymbolProviderRegistry;
var CancellationTokenSource = monaco.CancellationTokenSource;
var core_1 = require("@theia/core");
var outline_view_service_1 = require("@theia/outline-view/lib/browser/outline-view-service");
var outline_view_widget_1 = require("@theia/outline-view/lib/browser/outline-view-widget");
var uri_1 = require("@theia/core/lib/common/uri");
var monaco_editor_1 = require("./monaco-editor");
var debounce = require("lodash.debounce");
var MonacoOutlineContribution = /** @class */ (function () {
    function MonacoOutlineContribution() {
        this.toDisposeOnClose = new core_1.DisposableCollection();
        this.toDisposeOnEditor = new core_1.DisposableCollection();
        this.canUpdateOutline = true;
        this.tokenSource = new CancellationTokenSource();
    }
    MonacoOutlineContribution.prototype.onStart = function (app) {
        var _this = this;
        this.outlineViewService.onDidChangeOpenState(function (open) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (open) {
                    this.toDisposeOnClose.push(this.toDisposeOnEditor);
                    this.toDisposeOnClose.push(DocumentSymbolProviderRegistry.onDidChange(debounce(function () { return _this.updateOutline(); })));
                    this.toDisposeOnClose.push(this.editorManager.onCurrentEditorChanged(debounce(function () { return _this.handleCurrentEditorChanged(); }, 50)));
                    this.handleCurrentEditorChanged();
                }
                else {
                    this.toDisposeOnClose.dispose();
                }
                return [2 /*return*/];
            });
        }); });
        this.outlineViewService.onDidSelect(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(MonacoOutlineSymbolInformationNode.is(node) && node.parent)) return [3 /*break*/, 2];
                        options = {
                            mode: 'reveal',
                            selection: node.range
                        };
                        return [4 /*yield*/, this.selectInEditor(node, options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        this.outlineViewService.onDidOpen(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!MonacoOutlineSymbolInformationNode.is(node)) return [3 /*break*/, 2];
                        options = {
                            selection: {
                                start: node.range.start
                            }
                        };
                        return [4 /*yield*/, this.selectInEditor(node, options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    MonacoOutlineContribution.prototype.selectInEditor = function (node, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Avoid cyclic updates: Outline -> Editor -> Outline.
                        this.canUpdateOutline = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.editorManager.open(node.uri, options)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.canUpdateOutline = true;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.handleCurrentEditorChanged = function () {
        var _this = this;
        this.toDisposeOnEditor.dispose();
        if (this.toDisposeOnClose.disposed) {
            return;
        }
        this.toDisposeOnClose.push(this.toDisposeOnEditor);
        this.toDisposeOnEditor.push(core_1.Disposable.create(function () { return _this.roots = undefined; }));
        var editor = this.editorManager.currentEditor;
        if (editor) {
            var model = monaco_editor_1.MonacoEditor.get(editor).getControl().getModel();
            if (model) {
                this.toDisposeOnEditor.push(model.onDidChangeContent(function () {
                    _this.roots = undefined; // Invalidate the previously resolved roots.
                    _this.updateOutline();
                }));
            }
            this.toDisposeOnEditor.push(editor.editor.onSelectionChanged(function (selection) { return _this.updateOutline(selection); }));
        }
        this.updateOutline();
    };
    MonacoOutlineContribution.prototype.updateOutline = function (editorSelection) {
        return __awaiter(this, void 0, void 0, function () {
            var token, editor, model, roots, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.canUpdateOutline) {
                            return [2 /*return*/];
                        }
                        this.tokenSource.cancel();
                        this.tokenSource = new CancellationTokenSource();
                        token = this.tokenSource.token;
                        editor = monaco_editor_1.MonacoEditor.get(this.editorManager.currentEditor);
                        model = editor && editor.getControl().getModel();
                        _a = model;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createRoots(model, token, editorSelection)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        roots = _a;
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.outlineViewService.publish(roots || []);
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.createRoots = function (model, token, editorSelection) {
        return __awaiter(this, void 0, void 0, function () {
            var resetSelection_1, providers, uri, providers_1, providers_1_1, provider, symbols, nodes, _a, e_1_1;
            var e_1, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.roots && this.roots.length > 0)) return [3 /*break*/, 1];
                        resetSelection_1 = function (node) {
                            node.selected = false;
                            node.children.forEach(resetSelection_1);
                        };
                        this.roots.forEach(resetSelection_1);
                        return [3 /*break*/, 12];
                    case 1:
                        this.roots = [];
                        return [4 /*yield*/, DocumentSymbolProviderRegistry.all(model)];
                    case 2:
                        providers = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/, []];
                        }
                        uri = new uri_1.default(model.uri.toString());
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        providers_1 = __values(providers), providers_1_1 = providers_1.next();
                        _d.label = 4;
                    case 4:
                        if (!!providers_1_1.done) return [3 /*break*/, 9];
                        provider = providers_1_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, provider.provideDocumentSymbols(model, token)];
                    case 6:
                        symbols = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/, []];
                        }
                        nodes = this.createNodes(uri, symbols || []);
                        (_c = this.roots).push.apply(_c, __spread(nodes));
                        return [3 /*break*/, 8];
                    case 7:
                        _a = _d.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        providers_1_1 = providers_1.next();
                        return [3 /*break*/, 4];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (providers_1_1 && !providers_1_1.done && (_b = providers_1.return)) _b.call(providers_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        this.applySelection(this.roots, editorSelection);
                        return [2 /*return*/, this.roots];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.createNodes = function (uri, symbols) {
        var e_2, _a, e_3, _b;
        var _this = this;
        var rangeBased = false;
        var ids = new Map();
        var roots = [];
        var nodesByName = symbols.sort(this.orderByPosition).reduce(function (result, symbol) {
            var node = _this.createNode(uri, symbol, ids);
            if (symbol.children) {
                MonacoOutlineSymbolInformationNode.insert(roots, node);
            }
            else {
                rangeBased = rangeBased || symbol.range.startLineNumber !== symbol.range.endLineNumber;
                var values = result.get(symbol.name) || [];
                values.push({ symbol: symbol, node: node });
                result.set(symbol.name, values);
            }
            return result;
        }, new Map());
        try {
            for (var _c = __values(nodesByName.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var nodes = _d.value;
                var _loop_1 = function (node, symbol) {
                    if (!symbol.containerName) {
                        MonacoOutlineSymbolInformationNode.insert(roots, node);
                    }
                    else {
                        var possibleParents = nodesByName.get(symbol.containerName);
                        if (possibleParents) {
                            var parent_1 = possibleParents.find(function (possibleParent) { return _this.parentContains(symbol, possibleParent.symbol, rangeBased); });
                            if (parent_1) {
                                node.parent = parent_1.node;
                                MonacoOutlineSymbolInformationNode.insert(parent_1.node.children, node);
                            }
                        }
                    }
                };
                try {
                    for (var nodes_1 = (e_3 = void 0, __values(nodes)), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                        var _e = nodes_1_1.value, node = _e.node, symbol = _e.symbol;
                        _loop_1(node, symbol);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (nodes_1_1 && !nodes_1_1.done && (_b = nodes_1.return)) _b.call(nodes_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (!roots.length) {
            var nodes = nodesByName.values().next().value;
            if (nodes && !nodes[0].node.parent) {
                return [nodes[0].node];
            }
            return [];
        }
        return roots;
    };
    /**
     * Sets the selection on the sub-trees based on the optional editor selection.
     * Select the narrowest node that is strictly contains the editor selection.
     */
    MonacoOutlineContribution.prototype.applySelection = function (roots, editorSelection) {
        var e_4, _a;
        if (editorSelection) {
            try {
                for (var roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                    var root = roots_1_1.value;
                    if (this.parentContains(editorSelection, root.fullRange, true)) {
                        var children = root.children;
                        root.selected = !root.expanded || !this.applySelection(children, editorSelection);
                        return true;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return false;
    };
    /**
     * Returns `true` if `candidate` is strictly contained inside `parent`
     *
     * If the argument is a `DocumentSymbol`, then `getFullRange` will be used to retrieve the range of the underlying symbol.
     */
    MonacoOutlineContribution.prototype.parentContains = function (candidate, parent, rangeBased) {
        // TODO: move this code to the `monaco-languageclient`: https://github.com/eclipse-theia/theia/pull/2885#discussion_r217800446
        var candidateRange = browser_1.Range.is(candidate) ? candidate : this.getFullRange(candidate);
        var parentRange = browser_1.Range.is(parent) ? parent : this.getFullRange(parent);
        var sameStartLine = candidateRange.start.line === parentRange.start.line;
        var startColGreaterOrEqual = candidateRange.start.character >= parentRange.start.character;
        var startLineGreater = candidateRange.start.line > parentRange.start.line;
        var sameEndLine = candidateRange.end.line === parentRange.end.line;
        var endColSmallerOrEqual = candidateRange.end.character <= parentRange.end.character;
        var endLineSmaller = candidateRange.end.line < parentRange.end.line;
        return (((sameStartLine && startColGreaterOrEqual || startLineGreater) &&
            (sameEndLine && endColSmallerOrEqual || endLineSmaller)) || !rangeBased);
    };
    /**
     * `monaco` to LSP `Range` converter. Converts the `1-based` location indices into `0-based` ones.
     */
    MonacoOutlineContribution.prototype.asRange = function (range) {
        var startLineNumber = range.startLineNumber, startColumn = range.startColumn, endLineNumber = range.endLineNumber, endColumn = range.endColumn;
        return {
            start: {
                line: startLineNumber - 1,
                character: startColumn - 1
            },
            end: {
                line: endLineNumber - 1,
                character: endColumn - 1
            }
        };
    };
    /**
     * Returns with a range enclosing this symbol not including leading/trailing whitespace but everything else like comments.
     * This information is typically used to determine if the clients cursor is inside the symbol to reveal in the symbol in the UI.
     * This allows to obtain the range including the associated comments.
     *
     * See: [`DocumentSymbol#range`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    MonacoOutlineContribution.prototype.getFullRange = function (documentSymbol) {
        return this.asRange(documentSymbol.range);
    };
    /**
     * The range that should be selected and revealed when this symbol is being picked, e.g the name of a function. Must be contained by the `getSelectionRange`.
     *
     * See: [`DocumentSymbol#selectionRange`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    MonacoOutlineContribution.prototype.getNameRange = function (documentSymbol) {
        return this.asRange(documentSymbol.selectionRange);
    };
    MonacoOutlineContribution.prototype.createNode = function (uri, symbol, ids, parent) {
        var e_5, _a;
        var id = this.createId(symbol.name, ids);
        var children = [];
        var node = {
            children: children,
            id: id,
            iconClass: SymbolKind[symbol.kind].toString().toLowerCase(),
            name: this.getName(symbol),
            detail: this.getDetail(symbol),
            parent: parent,
            uri: uri,
            range: this.getNameRange(symbol),
            fullRange: this.getFullRange(symbol),
            selected: false,
            expanded: this.shouldExpand(symbol)
        };
        if (symbol.children) {
            try {
                for (var _b = __values(symbol.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    MonacoOutlineSymbolInformationNode.insert(children, this.createNode(uri, child, ids, node));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        return node;
    };
    MonacoOutlineContribution.prototype.getName = function (symbol) {
        return symbol.name;
    };
    MonacoOutlineContribution.prototype.getDetail = function (symbol) {
        return symbol.detail;
    };
    MonacoOutlineContribution.prototype.createId = function (name, ids) {
        var counter = ids.get(name);
        var index = typeof counter === 'number' ? counter + 1 : 0;
        ids.set(name, index);
        return name + '_' + index;
    };
    MonacoOutlineContribution.prototype.shouldExpand = function (symbol) {
        return [
            SymbolKind.Class,
            SymbolKind.Enum, SymbolKind.File,
            SymbolKind.Interface, SymbolKind.Module,
            SymbolKind.Namespace, SymbolKind.Object,
            SymbolKind.Package, SymbolKind.Struct
        ].indexOf(symbol.kind) !== -1;
    };
    MonacoOutlineContribution.prototype.orderByPosition = function (symbol, symbol2) {
        var startLineComparison = symbol.range.startLineNumber - symbol2.range.startLineNumber;
        if (startLineComparison !== 0) {
            return startLineComparison;
        }
        var startOffsetComparison = symbol.range.startColumn - symbol2.range.startColumn;
        if (startOffsetComparison !== 0) {
            return startOffsetComparison;
        }
        var endLineComparison = symbol.range.endLineNumber - symbol2.range.endLineNumber;
        if (endLineComparison !== 0) {
            return endLineComparison;
        }
        return symbol.range.endColumn - symbol2.range.endColumn;
    };
    __decorate([
        inversify_1.inject(outline_view_service_1.OutlineViewService),
        __metadata("design:type", outline_view_service_1.OutlineViewService)
    ], MonacoOutlineContribution.prototype, "outlineViewService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], MonacoOutlineContribution.prototype, "editorManager", void 0);
    MonacoOutlineContribution = __decorate([
        inversify_1.injectable()
    ], MonacoOutlineContribution);
    return MonacoOutlineContribution;
}());
exports.MonacoOutlineContribution = MonacoOutlineContribution;
var MonacoOutlineSymbolInformationNode;
(function (MonacoOutlineSymbolInformationNode) {
    function is(node) {
        return outline_view_widget_1.OutlineSymbolInformationNode.is(node) && 'uri' in node && 'range' in node;
    }
    MonacoOutlineSymbolInformationNode.is = is;
    function insert(nodes, node) {
        var index = nodes.findIndex(function (current) { return compare(node, current) < 0; });
        if (index === -1) {
            nodes.push(node);
        }
        else {
            nodes.splice(index, 0, node);
        }
    }
    MonacoOutlineSymbolInformationNode.insert = insert;
    function compare(node, node2) {
        var startLineComparison = node.range.start.line - node2.range.start.line;
        if (startLineComparison !== 0) {
            return startLineComparison;
        }
        var startColumnComparison = node.range.start.character - node2.range.start.character;
        if (startColumnComparison !== 0) {
            return startColumnComparison;
        }
        var endLineComparison = node2.range.end.line - node.range.end.line;
        if (endLineComparison !== 0) {
            return endLineComparison;
        }
        return node2.range.end.character - node.range.end.character;
    }
    MonacoOutlineSymbolInformationNode.compare = compare;
})(MonacoOutlineSymbolInformationNode = exports.MonacoOutlineSymbolInformationNode || (exports.MonacoOutlineSymbolInformationNode = {}));
//# sourceMappingURL=monaco-outline-contribution.js.map
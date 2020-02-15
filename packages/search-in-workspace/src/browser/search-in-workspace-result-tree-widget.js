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
var browser_1 = require("@theia/core/lib/browser");
var core_1 = require("@theia/core");
var browser_2 = require("@theia/editor/lib/browser");
var browser_3 = require("@theia/workspace/lib/browser");
var browser_4 = require("@theia/filesystem/lib/browser");
var search_in_workspace_service_1 = require("./search-in-workspace-service");
var in_memory_text_resource_1 = require("./in-memory-text-resource");
var uri_1 = require("@theia/core/lib/common/uri");
var React = require("react");
var search_in_workspace_preferences_1 = require("./search-in-workspace-preferences");
var core_2 = require("@theia/core");
var color_registry_1 = require("@theia/core/lib/browser/color-registry");
var ROOT_ID = 'ResultTree';
var SearchInWorkspaceRoot;
(function (SearchInWorkspaceRoot) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return browser_1.CompositeTreeNode.is(node) && node.id === ROOT_ID;
    }
    SearchInWorkspaceRoot.is = is;
})(SearchInWorkspaceRoot = exports.SearchInWorkspaceRoot || (exports.SearchInWorkspaceRoot = {}));
var SearchInWorkspaceRootFolderNode;
(function (SearchInWorkspaceRootFolderNode) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return browser_1.ExpandableTreeNode.is(node) && browser_1.SelectableTreeNode.is(node) && 'path' in node && 'folderUri' in node && !('fileUri' in node);
    }
    SearchInWorkspaceRootFolderNode.is = is;
})(SearchInWorkspaceRootFolderNode = exports.SearchInWorkspaceRootFolderNode || (exports.SearchInWorkspaceRootFolderNode = {}));
var SearchInWorkspaceFileNode;
(function (SearchInWorkspaceFileNode) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return browser_1.ExpandableTreeNode.is(node) && browser_1.SelectableTreeNode.is(node) && 'path' in node && 'fileUri' in node && !('folderUri' in node);
    }
    SearchInWorkspaceFileNode.is = is;
})(SearchInWorkspaceFileNode = exports.SearchInWorkspaceFileNode || (exports.SearchInWorkspaceFileNode = {}));
var SearchInWorkspaceResultLineNode;
(function (SearchInWorkspaceResultLineNode) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return browser_1.SelectableTreeNode.is(node) && 'line' in node && 'character' in node && 'lineText' in node;
    }
    SearchInWorkspaceResultLineNode.is = is;
})(SearchInWorkspaceResultLineNode = exports.SearchInWorkspaceResultLineNode || (exports.SearchInWorkspaceResultLineNode = {}));
var SearchInWorkspaceResultTreeWidget = /** @class */ (function (_super) {
    __extends(SearchInWorkspaceResultTreeWidget, _super);
    function SearchInWorkspaceResultTreeWidget(props, model, contextMenuRenderer) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this._showReplaceButtons = false;
        _this._replaceTerm = '';
        _this.searchTerm = '';
        _this.appliedDecorations = new Map();
        _this.changeEmitter = new core_1.Emitter();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.focusInputEmitter = new core_1.Emitter();
        _this.remove = function (node, e) { return _this.doRemove(node, e); };
        model.root = {
            id: ROOT_ID,
            parent: undefined,
            visible: false,
            children: []
        };
        _this.toDispose.push(model.onSelectionChanged(function (nodes) {
            var node = nodes[0];
            if (SearchInWorkspaceResultLineNode.is(node)) {
                _this.doOpen(node, true);
            }
        }));
        _this.resultTree = new Map();
        _this.toDispose.push(model.onNodeRefreshed(function () { return _this.changeEmitter.fire(_this.resultTree); }));
        return _this;
    }
    SearchInWorkspaceResultTreeWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.addClass('resultContainer');
        this.toDispose.push(this.changeEmitter);
        this.toDispose.push(this.focusInputEmitter);
        this.toDispose.push(this.editorManager.onActiveEditorChanged(function () {
            _this.updateCurrentEditorDecorations();
        }));
        this.toDispose.push(this.searchInWorkspacePreferences.onPreferenceChanged(function () {
            _this.update();
        }));
    };
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "fileNumber", {
        get: function () {
            var e_1, _a;
            var num = 0;
            try {
                for (var _b = __values(this.resultTree.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var rootFolderNode = _c.value;
                    num += rootFolderNode.children.length;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "showReplaceButtons", {
        set: function (srb) {
            this._showReplaceButtons = srb;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "replaceTerm", {
        set: function (rt) {
            this._replaceTerm = rt;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "onChange", {
        get: function () {
            return this.changeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "onFocusInput", {
        get: function () {
            return this.focusInputEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    SearchInWorkspaceResultTreeWidget.prototype.collapseAll = function () {
        var _this = this;
        this.resultTree.forEach(function (rootFolderNode) {
            rootFolderNode.children.forEach(function (fileNode) { return _this.expansionService.collapseNode(fileNode); });
            if (rootFolderNode.visible) {
                _this.expansionService.collapseNode(rootFolderNode);
            }
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.search = function (searchTerm, searchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var collapseValue, cancelIndicator, token, progress, pendingRefreshTimeout, searchId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchTerm = searchTerm;
                        collapseValue = this.searchInWorkspacePreferences['search.collapseResults'];
                        this.resultTree.clear();
                        if (this.cancelIndicator) {
                            this.cancelIndicator.cancel();
                        }
                        if (searchTerm === '') {
                            this.refreshModelChildren();
                            return [2 /*return*/];
                        }
                        this.cancelIndicator = new core_1.CancellationTokenSource();
                        cancelIndicator = this.cancelIndicator;
                        token = this.cancelIndicator.token;
                        token.onCancellationRequested(function () {
                            _this.changeEmitter.fire(_this.resultTree);
                        });
                        return [4 /*yield*/, this.progressService.showProgress({ text: "search: " + searchTerm, options: { location: 'search' } })];
                    case 1:
                        progress = _a.sent();
                        return [4 /*yield*/, this.searchService.search(searchTerm, {
                                onResult: function (aSearchId, result) {
                                    var e_2, _a;
                                    if (token.isCancellationRequested || aSearchId !== searchId) {
                                        return;
                                    }
                                    var path = _this.filenameAndPath(result.root, result.fileUri).path;
                                    var tree = _this.resultTree;
                                    var rootFolderNode = tree.get(result.root);
                                    if (!rootFolderNode) {
                                        rootFolderNode = _this.createRootFolderNode(result.root);
                                        tree.set(result.root, rootFolderNode);
                                    }
                                    var fileNode = rootFolderNode.children.find(function (f) { return f.fileUri === result.fileUri; });
                                    if (!fileNode) {
                                        fileNode = _this.createFileNode(result.root, path, result.fileUri, rootFolderNode);
                                        rootFolderNode.children.push(fileNode);
                                    }
                                    var _loop_1 = function (match) {
                                        var line = _this.createResultLineNode(result, match, fileNode);
                                        if (fileNode.children.findIndex(function (lineNode) { return lineNode.id === line.id; }) < 0) {
                                            fileNode.children.push(line);
                                        }
                                    };
                                    try {
                                        for (var _b = __values(result.matches), _c = _b.next(); !_c.done; _c = _b.next()) {
                                            var match = _c.value;
                                            _loop_1(match);
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                    _this.collapseFileNode(fileNode, collapseValue);
                                    if (pendingRefreshTimeout) {
                                        clearTimeout(pendingRefreshTimeout);
                                    }
                                    pendingRefreshTimeout = setTimeout(function () { return _this.refreshModelChildren(); }, 100);
                                },
                                onDone: function () {
                                    cancelIndicator.cancel();
                                    // Sort the result map by folder URI.
                                    _this.resultTree = new Map(__spread(_this.resultTree).sort(function (a, b) { return _this.compare(a[1].folderUri, b[1].folderUri); }));
                                    // Update the list of children nodes, sorting them by their file URI.
                                    Array.from(_this.resultTree.values())
                                        .forEach(function (folder) {
                                        folder.children = folder.children.sort(function (a, b) { return _this.compare(a.fileUri, b.fileUri); });
                                    });
                                    _this.refreshModelChildren();
                                }
                            }, searchOptions).catch(function () { return undefined; })];
                    case 2:
                        searchId = _a.sent();
                        token.onCancellationRequested(function () {
                            progress.cancel();
                            if (searchId) {
                                _this.searchService.cancel(searchId);
                            }
                            _this.cancelIndicator = undefined;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.focusFirstResult = function () {
        if (SearchInWorkspaceRoot.is(this.model.root) && this.model.root.children.length > 0) {
            var node = this.model.root.children[0];
            if (browser_1.SelectableTreeNode.is(node)) {
                this.node.focus();
                this.model.selectNode(node);
            }
        }
    };
    /**
     * Collapse the search-in-workspace file node
     * based on the preference value.
     */
    SearchInWorkspaceResultTreeWidget.prototype.collapseFileNode = function (node, preferenceValue) {
        if (preferenceValue === 'auto' && node.children.length >= 10) {
            node.expanded = false;
        }
        else if (preferenceValue === 'alwaysCollapse') {
            node.expanded = false;
        }
        else if (preferenceValue === 'alwaysExpand') {
            node.expanded = true;
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.handleUp = function (event) {
        if (!this.model.getPrevSelectableNode(this.model.selectedNodes[0])) {
            this.focusInputEmitter.fire(true);
        }
        else {
            _super.prototype.handleUp.call(this, event);
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.refreshModelChildren = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (SearchInWorkspaceRoot.is(this.model.root)) {
                    this.model.root.children = Array.from(this.resultTree.values());
                    this.model.refresh();
                    this.updateCurrentEditorDecorations();
                }
                return [2 /*return*/];
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.updateCurrentEditorDecorations = function () {
        var _this = this;
        this.shell.allTabBars.map(function (tb) {
            var currentTitle = tb.currentTitle;
            if (currentTitle && currentTitle.owner instanceof browser_2.EditorWidget) {
                var widget_1 = currentTitle.owner;
                var fileNodes = _this.getFileNodesByUri(widget_1.editor.uri);
                if (fileNodes.length > 0) {
                    fileNodes.forEach(function (node) {
                        _this.decorateEditor(node, widget_1);
                    });
                }
                else {
                    _this.decorateEditor(undefined, widget_1);
                }
            }
        });
        var currentWidget = this.editorManager.currentEditor;
        if (currentWidget) {
            var fileNodes = this.getFileNodesByUri(currentWidget.editor.uri);
            fileNodes.forEach(function (node) {
                _this.decorateEditor(node, currentWidget);
            });
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.createRootFolderNode = function (rootUri) {
        var uri = new uri_1.default(rootUri);
        return {
            selected: false,
            path: uri.path.toString(),
            folderUri: rootUri,
            children: [],
            expanded: true,
            id: rootUri,
            parent: this.model.root,
            visible: this.workspaceService.isMultiRootWorkspaceOpened
        };
    };
    SearchInWorkspaceResultTreeWidget.prototype.createFileNode = function (rootUri, path, fileUri, parent) {
        return {
            selected: false,
            path: path,
            children: [],
            expanded: true,
            id: rootUri + "::" + fileUri,
            parent: parent,
            fileUri: fileUri
        };
    };
    SearchInWorkspaceResultTreeWidget.prototype.createResultLineNode = function (result, match, fileNode) {
        return __assign(__assign(__assign({}, result), match), { selected: false, id: result.fileUri + '-' + match.line + '-' + match.character + '-' + match.length, name: typeof match.lineText === 'string' ? match.lineText : match.lineText.text, parent: fileNode });
    };
    SearchInWorkspaceResultTreeWidget.prototype.getFileNodesByUri = function (uri) {
        var e_3, _a, e_4, _b;
        var nodes = [];
        var fileUri = uri.withScheme('file').toString();
        try {
            for (var _c = __values(this.resultTree.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var rootFolderNode = _d.value;
                var rootUri = new uri_1.default(rootFolderNode.path).withScheme('file');
                if (rootUri.isEqualOrParent(uri)) {
                    try {
                        for (var _e = (e_4 = void 0, __values(rootFolderNode.children)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var fileNode = _f.value;
                            if (fileNode.fileUri === fileUri) {
                                nodes.push(fileNode);
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return nodes;
    };
    SearchInWorkspaceResultTreeWidget.prototype.filenameAndPath = function (rootUriStr, uriStr) {
        var uri = new uri_1.default(uriStr);
        var relativePath = new uri_1.default(rootUriStr).relative(uri.parent);
        return {
            name: uri.displayName,
            path: relativePath ? relativePath.toString() : ''
        };
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderCaption = function (node, props) {
        if (SearchInWorkspaceRootFolderNode.is(node)) {
            return this.renderRootFolderNode(node);
        }
        else if (SearchInWorkspaceFileNode.is(node)) {
            return this.renderFileNode(node);
        }
        else if (SearchInWorkspaceResultLineNode.is(node)) {
            return this.renderResultLineNode(node);
        }
        return '';
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderTailDecorations = function (node, props) {
        return React.createElement("div", { className: 'result-node-buttons' },
            this._showReplaceButtons && this.renderReplaceButton(node),
            this.renderRemoveButton(node));
    };
    SearchInWorkspaceResultTreeWidget.prototype.doReplace = function (node, e) {
        this.replace(node);
        e.stopPropagation();
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderReplaceButton = function (node) {
        var _this = this;
        var isResultLineNode = SearchInWorkspaceResultLineNode.is(node);
        return React.createElement("span", { className: isResultLineNode ? 'replace-result' : 'replace-all-result', onClick: function (e) { return _this.doReplace(node, e); }, title: isResultLineNode ? 'Replace' : 'Replace All' });
    };
    SearchInWorkspaceResultTreeWidget.prototype.getFileCount = function (node) {
        var _this = this;
        if (SearchInWorkspaceRoot.is(node)) {
            return node.children.reduce(function (acc, current) { return acc + _this.getFileCount(current); }, 0);
        }
        else if (SearchInWorkspaceRootFolderNode.is(node)) {
            return node.children.length;
        }
        else if (SearchInWorkspaceFileNode.is(node)) {
            return 1;
        }
        return 0;
    };
    SearchInWorkspaceResultTreeWidget.prototype.getResultCount = function (node) {
        var _this = this;
        if (SearchInWorkspaceRoot.is(node)) {
            return node.children.reduce(function (acc, current) { return acc + _this.getResultCount(current); }, 0);
        }
        else if (SearchInWorkspaceRootFolderNode.is(node)) {
            return node.children.reduce(function (acc, current) { return acc + _this.getResultCount(current); }, 0);
        }
        else if (SearchInWorkspaceFileNode.is(node)) {
            return node.children.length;
        }
        else if (SearchInWorkspaceResultLineNode.is(node)) {
            return 1;
        }
        return 0;
    };
    /**
     * Replace results under the node passed into the function. If node is undefined, replace all results.
     * @param node Node in the tree widget where the "replace all" operation is performed
     */
    SearchInWorkspaceResultTreeWidget.prototype.replace = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var replaceForNode, needConfirm, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        replaceForNode = node || this.model.root;
                        needConfirm = !SearchInWorkspaceFileNode.is(node) && !SearchInWorkspaceResultLineNode.is(node);
                        _a = !needConfirm;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.confirmReplaceAll(this.getResultCount(replaceForNode), this.getFileCount(replaceForNode))];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            (node ? [node] : Array.from(this.resultTree.values())).forEach(function (n) {
                                _this.replaceResult(n, !!node);
                                _this.removeNode(n);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.confirmReplaceAll = function (resultNumber, fileNumber) {
        var go = fileNumber > 1;
        return new browser_1.ConfirmDialog({
            title: 'Replace all',
            msg: "Do you really want to replace " + resultNumber + " match" + (resultNumber > 1 ? 'es' : '') + " " + (go ? 'across' : 'in') + " "
                + (fileNumber + " file" + (go ? 's' : '') + " with \"" + this._replaceTerm + "\"?")
        }).open();
    };
    SearchInWorkspaceResultTreeWidget.prototype.updateRightResults = function (node) {
        var fileNode = node.parent;
        var rightPositionedNodes = fileNode.children.filter(function (rl) { return rl.line === node.line && rl.character > node.character; });
        var diff = this._replaceTerm.length - this.searchTerm.length;
        rightPositionedNodes.map(function (r) { return r.character += diff; });
    };
    /**
     * Replace text either in all search matches under a node or in all search matches, and save the changes.
     * @param node - node in the tree widget in which the "replace all" is performed.
     * @param {boolean} replaceOne - whether the function is to replace all matches under a node. If it is false, replace all.
     */
    SearchInWorkspaceResultTreeWidget.prototype.replaceResult = function (node, replaceOne) {
        return __awaiter(this, void 0, void 0, function () {
            var toReplace, trackedEditors, widget, _a, source, replaceOperations;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        toReplace = [];
                        if (SearchInWorkspaceRootFolderNode.is(node)) {
                            node.children.forEach(function (fileNode) { return _this.replaceResult(fileNode, replaceOne); });
                        }
                        else if (SearchInWorkspaceFileNode.is(node)) {
                            toReplace.push.apply(toReplace, __spread(node.children));
                        }
                        else if (SearchInWorkspaceResultLineNode.is(node)) {
                            toReplace.push(node);
                            this.updateRightResults(node);
                        }
                        if (!(toReplace.length > 0)) return [3 /*break*/, 7];
                        trackedEditors = this.editorManager.all;
                        if (!replaceOne) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doOpen(toReplace[0])];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.doGetWidget(toReplace[0])];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        widget = _a;
                        source = widget.editor.document.getText();
                        replaceOperations = toReplace.map(function (resultLineNode) { return ({
                            text: _this._replaceTerm,
                            range: {
                                start: {
                                    line: resultLineNode.line - 1,
                                    character: resultLineNode.character - 1
                                },
                                end: {
                                    line: resultLineNode.line - 1,
                                    character: resultLineNode.character - 1 + resultLineNode.length
                                }
                            }
                        }); });
                        // Replace the text.
                        return [4 /*yield*/, widget.editor.replaceText({
                                source: source,
                                replaceOperations: replaceOperations
                            })];
                    case 5:
                        // Replace the text.
                        _b.sent();
                        // Save the text replacement changes in the editor.
                        return [4 /*yield*/, widget.saveable.save()];
                    case 6:
                        // Save the text replacement changes in the editor.
                        _b.sent();
                        // Dispose the widget if it is not opened but created for `replaceAll`.
                        if (!replaceOne) {
                            if (trackedEditors.indexOf(widget) === -1) {
                                widget.dispose();
                            }
                        }
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.doRemove = function (node, e) {
        this.removeNode(node);
        e.stopPropagation();
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderRemoveButton = function (node) {
        var _this = this;
        return React.createElement("span", { className: 'remove-node', onClick: function (e) { return _this.remove(node, e); }, title: 'Dismiss' });
    };
    SearchInWorkspaceResultTreeWidget.prototype.removeNode = function (node) {
        if (SearchInWorkspaceRootFolderNode.is(node)) {
            this.removeRootFolderNode(node);
        }
        else if (SearchInWorkspaceFileNode.is(node)) {
            this.removeFileNode(node);
        }
        else if (SearchInWorkspaceResultLineNode.is(node)) {
            this.removeResultLineNode(node);
        }
        this.refreshModelChildren();
    };
    SearchInWorkspaceResultTreeWidget.prototype.removeRootFolderNode = function (node) {
        var e_5, _a;
        try {
            for (var _b = __values(this.resultTree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var rootUri = _c.value;
                if (rootUri === node.folderUri) {
                    this.resultTree.delete(rootUri);
                    break;
                }
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
    SearchInWorkspaceResultTreeWidget.prototype.removeFileNode = function (node) {
        var rootFolderNode = node.parent;
        var index = rootFolderNode.children.findIndex(function (fileNode) { return fileNode.id === node.id; });
        if (index > -1) {
            rootFolderNode.children.splice(index, 1);
        }
        if (this.getFileCount(rootFolderNode) === 0) {
            this.removeRootFolderNode(rootFolderNode);
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.removeResultLineNode = function (node) {
        var fileNode = node.parent;
        var index = fileNode.children.findIndex(function (n) { return n.fileUri === node.fileUri && n.line === node.line && n.character === node.character; });
        if (index > -1) {
            fileNode.children.splice(index, 1);
            if (this.getResultCount(fileNode) === 0) {
                this.removeFileNode(fileNode);
            }
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderRootFolderNode = function (node) {
        return React.createElement("div", { className: 'result' },
            React.createElement("div", { className: 'result-head' },
                React.createElement("div", { className: "result-head-info noWrapInfo noselect " + (node.selected ? 'selected' : '') },
                    React.createElement("span", { className: "file-icon " + (this.toNodeIcon(node) || '') }),
                    React.createElement("div", { className: 'noWrapInfo' },
                        React.createElement("span", { className: 'file-name' }, this.toNodeName(node)),
                        React.createElement("span", { className: 'file-path' }, node.path))),
                React.createElement("span", { className: 'notification-count-container highlighted-count-container' },
                    React.createElement("span", { className: 'notification-count' }, this.getFileCount(node)))));
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderFileNode = function (node) {
        return React.createElement("div", { className: 'result' },
            React.createElement("div", { className: 'result-head' },
                React.createElement("div", { className: "result-head-info noWrapInfo noselect " + (node.selected ? 'selected' : ''), title: new uri_1.default(node.fileUri).path.toString() },
                    React.createElement("span", { className: "file-icon " + this.toNodeIcon(node) }),
                    React.createElement("div", { className: 'noWrapInfo' },
                        React.createElement("span", { className: 'file-name' }, this.toNodeName(node)),
                        React.createElement("span", { className: 'file-path' }, node.path))),
                React.createElement("span", { className: 'notification-count-container' },
                    React.createElement("span", { className: 'notification-count' }, this.getResultCount(node)))));
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderResultLineNode = function (node) {
        var before;
        var after;
        var title;
        if (typeof node.lineText === 'string') {
            var prefix = node.character > 26 ? '... ' : '';
            before = prefix + node.lineText.substr(0, node.character - 1).substr(-25);
            after = node.lineText.substr(node.character - 1 + node.length, 75);
            title = node.lineText.trim();
        }
        else {
            before = node.lineText.text.substr(0, node.lineText.character);
            after = node.lineText.text.substr(node.lineText.character + node.length);
            title = node.lineText.text.trim();
        }
        return React.createElement("div", { className: "resultLine noWrapInfo " + (node.selected ? 'selected' : ''), title: title },
            this.searchInWorkspacePreferences['search.lineNumbers'] && React.createElement("span", { className: 'theia-siw-lineNumber' }, node.line),
            React.createElement("span", null, before),
            this.renderMatchLinePart(node),
            React.createElement("span", null, after));
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderMatchLinePart = function (node) {
        var replaceTerm = this._replaceTerm !== '' && this._showReplaceButtons ? React.createElement("span", { className: 'replace-term' }, this._replaceTerm) : '';
        var className = "match" + (this._showReplaceButtons ? ' strike-through' : '');
        var match = typeof node.lineText === 'string' ?
            node.lineText.substr(node.character - 1, node.length)
            : node.lineText.text.substr(node.lineText.character - 1, node.length);
        return React.createElement(React.Fragment, null,
            React.createElement("span", { className: className }, match),
            replaceTerm);
    };
    /**
     * Get the editor widget by the node.
     * @param {SearchInWorkspaceResultLineNode} node - the node representing a match in the search results.
     * @returns The editor widget to which the text replace will be done.
     */
    SearchInWorkspaceResultTreeWidget.prototype.doGetWidget = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var fileUri, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileUri = new uri_1.default(node.fileUri);
                        return [4 /*yield*/, this.editorManager.getOrCreateByUri(fileUri)];
                    case 1:
                        editorWidget = _a.sent();
                        return [2 /*return*/, editorWidget];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.doOpen = function (node, preview) {
        if (preview === void 0) { preview = false; }
        return __awaiter(this, void 0, void 0, function () {
            var fileUri, resultNode, leftUri, rightUri, opts, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultNode = node.parent;
                        if (!(resultNode && this._showReplaceButtons && preview)) return [3 /*break*/, 2];
                        leftUri = new uri_1.default(node.fileUri);
                        return [4 /*yield*/, this.createReplacePreview(resultNode)];
                    case 1:
                        rightUri = _a.sent();
                        fileUri = browser_1.DiffUris.encode(leftUri, rightUri);
                        return [3 /*break*/, 3];
                    case 2:
                        fileUri = new uri_1.default(node.fileUri);
                        _a.label = 3;
                    case 3:
                        opts = !browser_1.DiffUris.isDiffUri(fileUri) ? {
                            selection: {
                                start: {
                                    line: node.line - 1,
                                    character: node.character - 1
                                },
                                end: {
                                    line: node.line - 1,
                                    character: node.character - 1 + node.length
                                }
                            },
                            mode: 'reveal'
                        } : undefined;
                        return [4 /*yield*/, this.editorManager.open(fileUri, opts)];
                    case 4:
                        editorWidget = _a.sent();
                        if (!browser_1.DiffUris.isDiffUri(fileUri)) {
                            this.decorateEditor(resultNode, editorWidget);
                        }
                        return [2 /*return*/, editorWidget];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.createReplacePreview = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var fileUri, resource, content, lines;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileUri = new uri_1.default(node.fileUri).withScheme('file');
                        return [4 /*yield*/, this.fileResourceResolver.resolve(fileUri)];
                    case 1:
                        resource = _a.sent();
                        return [4 /*yield*/, resource.readContents()];
                    case 2:
                        content = _a.sent();
                        lines = content.split('\n');
                        node.children.map(function (l) {
                            var leftPositionedNodes = node.children.filter(function (rl) { return rl.line === l.line && rl.character < l.character; });
                            var diff = (_this._replaceTerm.length - _this.searchTerm.length) * leftPositionedNodes.length;
                            var start = lines[l.line - 1].substr(0, l.character - 1 + diff);
                            var end = lines[l.line - 1].substr(l.character - 1 + diff + l.length);
                            lines[l.line - 1] = start + _this._replaceTerm + end;
                        });
                        return [2 /*return*/, fileUri.withScheme(in_memory_text_resource_1.MEMORY_TEXT).withQuery(lines.join('\n'))];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.decorateEditor = function (node, editorWidget) {
        if (!browser_1.DiffUris.isDiffUri(editorWidget.editor.uri)) {
            var key = editorWidget.editor.uri.toString() + "#search-in-workspace-matches";
            var oldDecorations = this.appliedDecorations.get(key) || [];
            var newDecorations = this.createEditorDecorations(node);
            var appliedDecorations = editorWidget.editor.deltaDecorations({
                newDecorations: newDecorations,
                oldDecorations: oldDecorations,
            });
            this.appliedDecorations.set(key, appliedDecorations);
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.createEditorDecorations = function (resultNode) {
        var _this = this;
        var decorations = [];
        if (resultNode) {
            resultNode.children.map(function (res) {
                decorations.push({
                    range: {
                        start: {
                            line: res.line - 1,
                            character: res.character - 1
                        },
                        end: {
                            line: res.line - 1,
                            character: res.character - 1 + res.length
                        }
                    },
                    options: {
                        overviewRuler: {
                            color: _this.colorRegistry.getCurrentColor('editor.findMatchHighlightBackground') || '',
                            position: browser_2.OverviewRulerLane.Center
                        },
                        className: res.selected ? 'current-search-in-workspace-editor-match' : 'search-in-workspace-editor-match',
                        stickiness: browser_2.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore
                    }
                });
            });
        }
        return decorations;
    };
    /**
     * Compare two normalized strings.
     *
     * @param a {string} the first string.
     * @param b {string} the second string.
     */
    SearchInWorkspaceResultTreeWidget.prototype.compare = function (a, b) {
        var itemA = a.toLowerCase().trim();
        var itemB = b.toLowerCase().trim();
        return itemA.localeCompare(itemB);
    };
    __decorate([
        inversify_1.inject(search_in_workspace_service_1.SearchInWorkspaceService),
        __metadata("design:type", search_in_workspace_service_1.SearchInWorkspaceService)
    ], SearchInWorkspaceResultTreeWidget.prototype, "searchService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], SearchInWorkspaceResultTreeWidget.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_4.FileResourceResolver),
        __metadata("design:type", browser_4.FileResourceResolver)
    ], SearchInWorkspaceResultTreeWidget.prototype, "fileResourceResolver", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], SearchInWorkspaceResultTreeWidget.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], SearchInWorkspaceResultTreeWidget.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.TreeExpansionService),
        __metadata("design:type", Object)
    ], SearchInWorkspaceResultTreeWidget.prototype, "expansionService", void 0);
    __decorate([
        inversify_1.inject(search_in_workspace_preferences_1.SearchInWorkspacePreferences),
        __metadata("design:type", Object)
    ], SearchInWorkspaceResultTreeWidget.prototype, "searchInWorkspacePreferences", void 0);
    __decorate([
        inversify_1.inject(core_2.ProgressService),
        __metadata("design:type", core_2.ProgressService)
    ], SearchInWorkspaceResultTreeWidget.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], SearchInWorkspaceResultTreeWidget.prototype, "colorRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceResultTreeWidget.prototype, "init", null);
    SearchInWorkspaceResultTreeWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.TreeProps)),
        __param(1, inversify_1.inject(browser_1.TreeModel)),
        __param(2, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], SearchInWorkspaceResultTreeWidget);
    return SearchInWorkspaceResultTreeWidget;
}(browser_1.TreeWidget));
exports.SearchInWorkspaceResultTreeWidget = SearchInWorkspaceResultTreeWidget;
//# sourceMappingURL=search-in-workspace-result-tree-widget.js.map
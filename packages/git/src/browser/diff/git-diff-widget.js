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
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
var common_1 = require("../../common");
var common_2 = require("../../common");
var git_resource_1 = require("../git-resource");
var git_navigable_list_widget_1 = require("../git-navigable-list-widget");
var git_file_change_node_1 = require("../git-file-change-node");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var React = require("react");
/* eslint-disable no-null/no-null */
exports.GIT_DIFF = 'git-diff';
var GitDiffWidget = /** @class */ (function (_super) {
    __extends(GitDiffWidget, _super);
    function GitDiffWidget() {
        var _this = _super.call(this) || this;
        _this.GIT_DIFF_TITLE = 'Diff';
        _this.fileChangeNodes = [];
        _this.deferredListContainer = new promise_util_1.Deferred();
        _this.showPreviousChange = function () { return _this.doShowPreviousChange(); };
        _this.showNextChange = function () { return _this.doShowNextChange(); };
        _this.setListContainer = function (listContainerElement) { return _this.deferredListContainer.resolve(listContainerElement); };
        _this.addGitDiffListKeyListeners = function (id) { return _this.doAddGitDiffListKeyListeners(id); };
        _this.id = exports.GIT_DIFF;
        _this.scrollContainer = 'git-diff-list-container';
        _this.title.label = _this.GIT_DIFF_TITLE;
        _this.title.caption = _this.GIT_DIFF_TITLE;
        _this.title.closable = true;
        _this.title.iconClass = 'theia-git-diff-icon';
        _this.addClass('theia-git');
        return _this;
    }
    GitDiffWidget.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.gitWatcher.onGitEvent(function (gitEvent) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.options) {
                    this.setContent(this.options);
                }
                return [2 /*return*/];
            });
        }); }));
        this.toDispose.push(this.labelProvider.onDidChange(function (event) {
            var affectsFiles = _this.fileChangeNodes.some(function (node) { return event.affects(new uri_1.default(node.uri)); });
            if (_this.options && affectsFiles) {
                _this.setContent(_this.options);
            }
        }));
    };
    GitDiffWidget.prototype.getScrollContainer = function () {
        return this.deferredListContainer.promise;
    };
    Object.defineProperty(GitDiffWidget.prototype, "toRevision", {
        get: function () {
            return this.options.range && this.options.range.toRevision;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitDiffWidget.prototype, "fromRevision", {
        get: function () {
            return this.options.range && this.options.range.fromRevision;
        },
        enumerable: true,
        configurable: true
    });
    GitDiffWidget.prototype.setContent = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, fileChanges;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options = options;
                        repository = this.repositoryProvider.findRepositoryOrSelected(options);
                        if (!repository) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.git.diff(repository, {
                                range: options.range,
                                uri: options.uri
                            })];
                    case 1:
                        fileChanges = _a.sent();
                        this.fileChangeNodes = fileChanges;
                        this.update();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GitDiffWidget.prototype.storeState = function () {
        var _a = this, fileChangeNodes = _a.fileChangeNodes, options = _a.options;
        return {
            fileChangeNodes: fileChangeNodes,
            options: options
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GitDiffWidget.prototype.restoreState = function (oldState) {
        this.fileChangeNodes = oldState['fileChangeNodes'];
        this.options = oldState['options'];
        this.update();
    };
    GitDiffWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.listView) {
            this.listView.focus();
        }
    };
    GitDiffWidget.prototype.render = function () {
        this.gitNodes = this.fileChangeNodes;
        var commitishBar = this.renderDiffListHeader();
        var fileChangeList = this.renderFileChangeList();
        return React.createElement("div", { className: 'git-diff-container' },
            commitishBar,
            fileChangeList);
    };
    GitDiffWidget.prototype.renderDiffListHeader = function () {
        return this.doRenderDiffListHeader(this.renderRepositoryHeader(), this.renderPathHeader(), this.renderRevisionHeader(), this.renderToolbar());
    };
    GitDiffWidget.prototype.doRenderDiffListHeader = function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return React.createElement("div", { className: 'diff-header' }, children);
    };
    GitDiffWidget.prototype.renderRepositoryHeader = function () {
        if (this.options && this.options.uri) {
            return this.renderHeaderRow({ name: 'repository', value: this.getRepositoryLabel(this.options.uri) });
        }
        return undefined;
    };
    GitDiffWidget.prototype.renderPathHeader = function () {
        return this.renderHeaderRow({
            classNames: ['diff-header'],
            name: 'path',
            value: this.renderPath()
        });
    };
    GitDiffWidget.prototype.renderPath = function () {
        if (this.options.uri) {
            var path = this.gitLabelProvider.relativePath(this.options.uri);
            if (path.length > 0) {
                return '/' + path;
            }
            else {
                return this.labelProvider.getLongName(new uri_1.default(this.options.uri));
            }
        }
        return null;
    };
    GitDiffWidget.prototype.renderRevisionHeader = function () {
        return this.renderHeaderRow({
            classNames: ['diff-header'],
            name: 'revision: ',
            value: this.renderRevision()
        });
    };
    GitDiffWidget.prototype.renderRevision = function () {
        if (!this.fromRevision) {
            return null;
        }
        if (typeof this.fromRevision === 'string') {
            return this.fromRevision;
        }
        return (this.toRevision || 'HEAD') + '~' + this.fromRevision;
    };
    GitDiffWidget.prototype.renderToolbar = function () {
        return this.doRenderToolbar(this.renderNavigationLeft(), this.renderNavigationRight());
    };
    GitDiffWidget.prototype.doRenderToolbar = function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return this.renderHeaderRow({
            classNames: ['diff-nav', 'space-between'],
            name: 'Files changed',
            value: React.createElement("div", { className: 'lrBtns' }, children)
        });
    };
    GitDiffWidget.prototype.doShowPreviousChange = function () {
        this.navigateLeft();
    };
    GitDiffWidget.prototype.renderNavigationLeft = function () {
        return React.createElement("span", { key: 'lnav', className: 'fa fa-arrow-left', title: 'Previous Change', onClick: this.showPreviousChange });
    };
    GitDiffWidget.prototype.doShowNextChange = function () {
        this.navigateRight();
    };
    GitDiffWidget.prototype.renderNavigationRight = function () {
        return React.createElement("span", { key: 'rnav', className: 'fa fa-arrow-right', title: 'Next Change', onClick: this.showNextChange });
    };
    GitDiffWidget.prototype.renderFileChangeList = function () {
        var e_1, _a;
        var _this = this;
        var files = [];
        try {
            for (var _b = __values(this.fileChangeNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fileChange = _c.value;
                var fileChangeElement = this.renderGitItem(fileChange);
                files.push(fileChangeElement);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!files.length) {
            return React.createElement("div", null, "No files changed.");
        }
        return React.createElement(GitDiffListContainer, { ref: function (ref) { return _this.listView = ref || undefined; }, id: this.scrollContainer, files: files, addDiffListKeyListeners: this.addGitDiffListKeyListeners, setListContainer: this.setListContainer });
    };
    GitDiffWidget.prototype.doAddGitDiffListKeyListeners = function (id) {
        var container = document.getElementById(id);
        if (container) {
            this.addGitListNavigationKeyListeners(container);
        }
    };
    GitDiffWidget.prototype.renderGitItem = function (change) {
        var _this = this;
        return React.createElement(git_navigable_list_widget_1.GitItemComponent, __assign({ key: change.uri.toString() }, {
            labelProvider: this.labelProvider,
            gitLabelProvider: this.gitLabelProvider,
            change: change,
            revealChange: function () { return _this.revealChange(change); },
            selectNode: function () { return _this.selectNode(change); }
        }));
    };
    GitDiffWidget.prototype.navigateRight = function () {
        var _this = this;
        var selected = this.getSelected();
        if (selected && git_file_change_node_1.GitFileChangeNode.is(selected)) {
            var uri = this.getUriToOpen(selected);
            this.editorManager.getByUri(uri).then(function (widget) {
                if (widget) {
                    var diffNavigator = _this.diffNavigatorProvider(widget.editor);
                    if (diffNavigator.canNavigate() && diffNavigator.hasNext()) {
                        diffNavigator.next();
                    }
                    else {
                        _this.selectNextNode();
                        _this.openSelected();
                    }
                }
                else {
                    _this.revealChange(selected);
                }
            });
        }
        else if (this.gitNodes.length > 0) {
            this.selectNode(this.gitNodes[0]);
            this.openSelected();
        }
    };
    GitDiffWidget.prototype.navigateLeft = function () {
        var _this = this;
        var selected = this.getSelected();
        if (git_file_change_node_1.GitFileChangeNode.is(selected)) {
            var uri = this.getUriToOpen(selected);
            this.editorManager.getByUri(uri).then(function (widget) {
                if (widget) {
                    var diffNavigator = _this.diffNavigatorProvider(widget.editor);
                    if (diffNavigator.canNavigate() && diffNavigator.hasPrevious()) {
                        diffNavigator.previous();
                    }
                    else {
                        _this.selectPreviousNode();
                        _this.openSelected();
                    }
                }
                else {
                    _this.revealChange(selected);
                }
            });
        }
    };
    GitDiffWidget.prototype.selectNextNode = function () {
        var idx = this.indexOfSelected;
        if (idx >= 0 && idx < this.gitNodes.length - 1) {
            this.selectNode(this.gitNodes[idx + 1]);
        }
        else if (this.gitNodes.length > 0 && (idx === -1 || idx === this.gitNodes.length - 1)) {
            this.selectNode(this.gitNodes[0]);
        }
    };
    GitDiffWidget.prototype.selectPreviousNode = function () {
        var idx = this.indexOfSelected;
        if (idx > 0) {
            this.selectNode(this.gitNodes[idx - 1]);
        }
        else if (idx === 0) {
            this.selectNode(this.gitNodes[this.gitNodes.length - 1]);
        }
    };
    GitDiffWidget.prototype.handleListEnter = function () {
        this.openSelected();
    };
    GitDiffWidget.prototype.openSelected = function () {
        var selected = this.getSelected();
        if (selected) {
            this.revealChange(selected);
        }
    };
    GitDiffWidget.prototype.getUriToOpen = function (change) {
        var uri = new uri_1.default(change.uri);
        var fromURI = uri;
        if (change.oldUri) { // set on renamed and copied
            fromURI = new uri_1.default(change.oldUri);
        }
        if (this.fromRevision !== undefined) {
            if (typeof this.fromRevision !== 'number') {
                fromURI = fromURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(this.fromRevision);
            }
            else {
                fromURI = fromURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(this.toRevision + '~' + this.fromRevision);
            }
        }
        else {
            // default is to compare with previous revision
            fromURI = fromURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(this.toRevision + '~1');
        }
        var toURI = uri;
        if (this.toRevision) {
            toURI = toURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(this.toRevision);
        }
        var uriToOpen = uri;
        if (change.status === common_1.GitFileStatus.Deleted) {
            uriToOpen = fromURI;
        }
        else if (change.status === common_1.GitFileStatus.New) {
            uriToOpen = toURI;
        }
        else {
            uriToOpen = browser_1.DiffUris.encode(fromURI, toURI);
        }
        return uriToOpen;
    };
    GitDiffWidget.prototype.openChanges = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var stringUri, change;
            return __generator(this, function (_a) {
                stringUri = uri.toString();
                change = this.fileChangeNodes.find(function (n) { return n.uri.toString() === stringUri; });
                return [2 /*return*/, change && this.openChange(change, options)];
            });
        });
    };
    GitDiffWidget.prototype.openChange = function (change, options) {
        var uriToOpen = this.getUriToOpen(change);
        return this.editorManager.open(uriToOpen, options);
    };
    GitDiffWidget.prototype.revealChange = function (change) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openChange(change, { mode: 'reveal' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], GitDiffWidget.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(browser_2.DiffNavigatorProvider),
        __metadata("design:type", Function)
    ], GitDiffWidget.prototype, "diffNavigatorProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], GitDiffWidget.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(common_2.GitWatcher),
        __metadata("design:type", common_2.GitWatcher)
    ], GitDiffWidget.prototype, "gitWatcher", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitDiffWidget.prototype, "init", null);
    GitDiffWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], GitDiffWidget);
    return GitDiffWidget;
}(git_navigable_list_widget_1.GitNavigableListWidget));
exports.GitDiffWidget = GitDiffWidget;
var GitDiffListContainer = /** @class */ (function (_super) {
    __extends(GitDiffListContainer, _super);
    function GitDiffListContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GitDiffListContainer.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, files = _a.files;
        return React.createElement("div", { ref: function (ref) { return _this.listContainer = ref || undefined; }, className: 'listContainer filesChanged', id: id, tabIndex: 0 }, files);
    };
    GitDiffListContainer.prototype.componentDidMount = function () {
        this.props.addDiffListKeyListeners(this.props.id);
        if (this.listContainer) {
            this.props.setListContainer(this.listContainer);
        }
    };
    GitDiffListContainer.prototype.focus = function () {
        if (this.listContainer) {
            this.listContainer.focus({ preventScroll: true });
        }
    };
    return GitDiffListContainer;
}(React.Component));
exports.GitDiffListContainer = GitDiffListContainer;
//# sourceMappingURL=git-diff-widget.js.map
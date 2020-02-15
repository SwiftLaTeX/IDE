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
var diff_uris_1 = require("@theia/core/lib/browser/diff-uris");
var browser_1 = require("@theia/core/lib/browser");
var cancellation_1 = require("@theia/core/lib/common/cancellation");
var react_virtualized_1 = require("react-virtualized");
var git_resource_1 = require("../git-resource");
var uri_1 = require("@theia/core/lib/common/uri");
var git_history_contribution_1 = require("./git-history-contribution");
var common_1 = require("../../common");
var common_2 = require("@theia/filesystem/lib/common");
var git_diff_contribution_1 = require("../diff/git-diff-contribution");
var scm_avatar_service_1 = require("@theia/scm/lib/browser/scm-avatar-service");
var git_commit_detail_open_handler_1 = require("./git-commit-detail-open-handler");
var git_navigable_list_widget_1 = require("../git-navigable-list-widget");
var git_file_change_node_1 = require("../git-file-change-node");
var React = require("react");
var alert_message_1 = require("@theia/core/lib/browser/widgets/alert-message");
var GitCommitNode;
(function (GitCommitNode) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return !!node && 'commitSha' in node && 'commitMessage' in node && 'fileChangeNodes' in node;
    }
    GitCommitNode.is = is;
})(GitCommitNode = exports.GitCommitNode || (exports.GitCommitNode = {}));
var GitHistoryWidget = /** @class */ (function (_super) {
    __extends(GitHistoryWidget, _super);
    function GitHistoryWidget(openerService, detailOpenHandler, shell, fileSystem, git, avatarService, widgetManager, diffContribution) {
        var _this = _super.call(this) || this;
        _this.openerService = openerService;
        _this.detailOpenHandler = detailOpenHandler;
        _this.shell = shell;
        _this.fileSystem = fileSystem;
        _this.git = git;
        _this.avatarService = avatarService;
        _this.widgetManager = widgetManager;
        _this.diffContribution = diffContribution;
        _this.handleScroll = function (info) { return _this.doHandleScroll(info); };
        _this.loadMoreRows = function (params) { return _this.doLoadMoreRows(params); };
        _this.renderCommit = function (commit) { return _this.doRenderCommit(commit); };
        _this.renderFileChangeList = function (fileChange) { return _this.doRenderFileChangeList(fileChange); };
        _this.id = git_history_contribution_1.GIT_HISTORY_ID;
        _this.scrollContainer = 'git-history-list-container';
        _this.title.label = git_history_contribution_1.GIT_HISTORY_LABEL;
        _this.title.caption = git_history_contribution_1.GIT_HISTORY_LABEL;
        _this.title.iconClass = 'fa git-history-tab-icon';
        _this.title.closable = true;
        _this.addClass('theia-git');
        _this.resetState();
        _this.cancelIndicator = new cancellation_1.CancellationTokenSource();
        return _this;
    }
    GitHistoryWidget.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.labelProvider.onDidChange(function (event) {
            if (_this.gitNodes.some(function (node) { return git_file_change_node_1.GitFileChangeNode.is(node) && event.affects(new uri_1.default(node.uri)); })) {
                _this.update();
            }
        }));
    };
    GitHistoryWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.addGitListNavigationKeyListeners(this.node);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.addEventListener(this.node, 'ps-scroll-y', function (e) {
            if (_this.listView && _this.listView.list && _this.listView.list.Grid) {
                var scrollTop = e.target.scrollTop;
                _this.listView.list.Grid.handleScrollEvent({ scrollTop: scrollTop });
            }
        });
    };
    GitHistoryWidget.prototype.update = function () {
        if (this.listView && this.listView.list) {
            this.listView.list.forceUpdateGrid();
        }
        _super.prototype.update.call(this);
    };
    GitHistoryWidget.prototype.setContent = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.resetState(options);
                        if (!(options && options.uri)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.getFileStat(options.uri)];
                    case 1:
                        fileStat = _a.sent();
                        this.singleFileMode = !!fileStat && !fileStat.isDirectory;
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.addCommits(options)];
                    case 3:
                        _a.sent();
                        this.onDataReady();
                        if (this.gitNodes.length > 0) {
                            this.selectNode(this.gitNodes[0]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryWidget.prototype.resetState = function (options) {
        this.options = options || {};
        this.status = { state: 'loading' };
        this.gitNodes = [];
        this.hasMoreCommits = true;
        this.allowScrollToSelected = true;
    };
    GitHistoryWidget.prototype.addCommits = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, token, currentCommits, changes, commits, changes_1, changes_1_1, commit, fileChangeNodes, avatarUrl, e_1_1, pathIsUnderVersionControl, error_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = this.repositoryProvider.findRepositoryOrSelected(options);
                        this.cancelIndicator.cancel();
                        this.cancelIndicator = new cancellation_1.CancellationTokenSource();
                        token = this.cancelIndicator.token;
                        if (!repository) return [3 /*break*/, 16];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 14, , 15]);
                        currentCommits = this.status.state === 'ready' ? this.status.commits : [];
                        return [4 /*yield*/, this.git.log(repository, options)];
                    case 2:
                        changes = _b.sent();
                        if (token.isCancellationRequested || !this.hasMoreCommits) {
                            return [2 /*return*/];
                        }
                        if (options && ((options.maxCount && changes.length < options.maxCount) || (!options.maxCount && currentCommits))) {
                            this.hasMoreCommits = false;
                        }
                        if (currentCommits.length > 0) {
                            changes = changes.slice(1);
                        }
                        if (!(changes.length > 0)) return [3 /*break*/, 11];
                        commits = [];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 10]);
                        changes_1 = __values(changes), changes_1_1 = changes_1.next();
                        _b.label = 4;
                    case 4:
                        if (!!changes_1_1.done) return [3 /*break*/, 7];
                        commit = changes_1_1.value;
                        fileChangeNodes = [];
                        return [4 /*yield*/, this.avatarService.getAvatar(commit.author.email)];
                    case 5:
                        avatarUrl = _b.sent();
                        commits.push({
                            authorName: commit.author.name,
                            authorDate: new Date(commit.author.timestamp),
                            authorEmail: commit.author.email,
                            authorDateRelative: commit.authorDateRelative,
                            authorAvatar: avatarUrl,
                            commitSha: commit.sha,
                            commitMessage: commit.summary,
                            messageBody: commit.body,
                            fileChangeNodes: fileChangeNodes,
                            fileChanges: commit.fileChanges,
                            expanded: false,
                            selected: false
                        });
                        _b.label = 6;
                    case 6:
                        changes_1_1 = changes_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        currentCommits.push.apply(currentCommits, __spread(commits));
                        this.status = { state: 'ready', commits: currentCommits };
                        return [3 /*break*/, 13];
                    case 11:
                        if (!(options && options.uri && repository)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.git.lsFiles(repository, options.uri, { errorUnmatch: true })];
                    case 12:
                        pathIsUnderVersionControl = _b.sent();
                        if (!pathIsUnderVersionControl) {
                            this.status = { state: 'error', errorMessage: React.createElement(React.Fragment, null, " It is not under version control.") };
                        }
                        else {
                            this.status = { state: 'error', errorMessage: React.createElement(React.Fragment, null, " No commits have been committed.") };
                        }
                        _b.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        error_1 = _b.sent();
                        this.status = { state: 'error', errorMessage: error_1.message };
                        return [3 /*break*/, 15];
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        this.status = { state: 'error', errorMessage: React.createElement(React.Fragment, null, "There is no repository selected in this workspace.") };
                        _b.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryWidget.prototype.addOrRemoveFileChangeNodes = function (commit) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.gitNodes.findIndex(function (node) { return node === commit; });
                        if (!commit.expanded) return [3 /*break*/, 1];
                        this.removeFileChangeNodes(commit, id);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.addFileChangeNodes(commit, id)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        commit.expanded = !commit.expanded;
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryWidget.prototype.addFileChangeNodes = function (commit, gitNodesArrayIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (commit.fileChanges) {
                    (_a = this.gitNodes).splice.apply(_a, __spread([gitNodesArrayIndex + 1, 0], commit.fileChanges.map(function (fileChange) {
                        return Object.assign(fileChange, { commitSha: commit.commitSha });
                    })));
                }
                return [2 /*return*/];
            });
        });
    };
    GitHistoryWidget.prototype.removeFileChangeNodes = function (commit, gitNodesArrayIndex) {
        if (commit.fileChanges) {
            this.gitNodes.splice(gitNodesArrayIndex + 1, commit.fileChanges.length);
        }
    };
    GitHistoryWidget.prototype.storeState = function () {
        var _a = this, options = _a.options, singleFileMode = _a.singleFileMode;
        return {
            options: options,
            singleFileMode: singleFileMode
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GitHistoryWidget.prototype.restoreState = function (oldState) {
        this.options = oldState['options'];
        this.singleFileMode = oldState['singleFileMode'];
        this.setContent(this.options);
    };
    GitHistoryWidget.prototype.onDataReady = function () {
        if (this.status.state === 'ready') {
            this.gitNodes = this.status.commits;
        }
        this.update();
    };
    GitHistoryWidget.prototype.render = function () {
        var content;
        switch (this.status.state) {
            case 'ready':
                content = React.createElement(React.Fragment, null,
                    this.renderHistoryHeader(),
                    this.renderCommitList());
                break;
            case 'error':
                var reason = this.status.errorMessage;
                var path = '';
                if (this.options.uri) {
                    var relPathEncoded = this.gitLabelProvider.relativePath(this.options.uri);
                    var relPath = relPathEncoded ? "" + decodeURIComponent(relPathEncoded) : '';
                    var repo = this.repositoryProvider.findRepository(new uri_1.default(this.options.uri));
                    var repoName = repo ? "" + new uri_1.default(repo.localUri).displayName : '';
                    var relPathAndRepo = [relPath, repoName].filter(Boolean).join(' in ');
                    path = " for " + relPathAndRepo;
                }
                content = React.createElement(alert_message_1.AlertMessage, { type: 'WARNING', header: "There is no Git history available" + path + "." }, reason);
                break;
            case 'loading':
                content = React.createElement("div", { className: 'spinnerContainer' },
                    React.createElement("span", { className: 'fa fa-spinner fa-pulse fa-3x fa-fw' }));
                break;
        }
        return React.createElement("div", { className: 'git-diff-container' }, content);
    };
    GitHistoryWidget.prototype.renderHistoryHeader = function () {
        if (this.options.uri) {
            var path = this.gitLabelProvider.relativePath(this.options.uri);
            var fileName = path.split('/').pop();
            return React.createElement("div", { className: 'diff-header' },
                this.renderHeaderRow({ name: 'repository', value: this.getRepositoryLabel(this.options.uri) }),
                this.renderHeaderRow({ name: 'file', value: fileName, title: path }),
                React.createElement("div", { className: 'theia-header' }, "Commits"));
        }
    };
    GitHistoryWidget.prototype.renderCommitList = function () {
        var _this = this;
        var list = React.createElement("div", { className: 'listContainer', id: this.scrollContainer },
            React.createElement(GitHistoryList, { ref: function (listView) { return _this.listView = (listView || undefined); }, rows: this.gitNodes, hasMoreRows: this.hasMoreCommits, indexOfSelected: this.allowScrollToSelected ? this.indexOfSelected : -1, handleScroll: this.handleScroll, loadMoreRows: this.loadMoreRows, renderCommit: this.renderCommit, renderFileChangeList: this.renderFileChangeList }));
        this.allowScrollToSelected = true;
        return list;
    };
    GitHistoryWidget.prototype.doHandleScroll = function (info) {
        this.node.scrollTop = info.scrollTop;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GitHistoryWidget.prototype.doLoadMoreRows = function (params) {
        var _this = this;
        var resolver;
        var promise = new Promise(function (resolve) { return resolver = resolve; });
        var lastRow = this.gitNodes[params.stopIndex - 1];
        if (GitCommitNode.is(lastRow)) {
            var toRevision = lastRow.commitSha;
            this.addCommits({
                range: { toRevision: toRevision },
                maxCount: git_history_contribution_1.GIT_HISTORY_MAX_COUNT,
                uri: this.options.uri
            }).then(function () {
                _this.allowScrollToSelected = false;
                _this.onDataReady();
                resolver();
            });
        }
        return promise;
    };
    GitHistoryWidget.prototype.doRenderCommit = function (commit) {
        var _this = this;
        var expansionToggleIcon = 'caret-right';
        if (commit && commit.expanded) {
            expansionToggleIcon = 'caret-down';
        }
        return React.createElement("div", { className: "containerHead" + (commit.selected ? ' ' + browser_1.SELECTED_CLASS : ''), onClick: function (e) {
                if (commit.selected && !_this.singleFileMode) {
                    _this.addOrRemoveFileChangeNodes(commit);
                }
                else {
                    _this.selectNode(commit);
                }
                e.preventDefault();
            }, onDoubleClick: function (e) {
                if (_this.singleFileMode && commit.fileChanges && commit.fileChanges.length > 0) {
                    _this.openFile(commit.fileChanges[0], commit.commitSha);
                }
                e.preventDefault();
            } },
            React.createElement("div", { className: 'headContent' },
                React.createElement("div", { className: 'image-container' },
                    React.createElement("img", { className: 'gravatar', src: commit.authorAvatar })),
                React.createElement("div", { className: "headLabelContainer" + (this.singleFileMode ? ' singleFileMode' : '') },
                    React.createElement("div", { className: 'headLabel noWrapInfo noselect' }, commit.commitMessage),
                    React.createElement("div", { className: 'commitTime noWrapInfo noselect' }, commit.authorDateRelative + ' by ' + commit.authorName)),
                React.createElement("div", { className: 'fa fa-eye detailButton', onClick: function () { return _this.openDetailWidget(commit); } }),
                !this.singleFileMode ? React.createElement("div", { className: 'expansionToggle noselect' },
                    React.createElement("div", { className: 'toggle' },
                        React.createElement("div", { className: 'number' }, (commit.fileChanges && commit.fileChanges.length || commit.fileChangeNodes.length).toString()),
                        React.createElement("div", { className: 'icon fa fa-' + expansionToggleIcon })))
                    : ''));
    };
    GitHistoryWidget.prototype.openDetailWidget = function (commit) {
        return __awaiter(this, void 0, void 0, function () {
            var commitDetails;
            return __generator(this, function (_a) {
                commitDetails = this.detailOpenHandler.getCommitDetailWidgetOptions(commit);
                this.detailOpenHandler.open(git_commit_detail_open_handler_1.GitCommitDetailUri.toUri(commit.commitSha), __assign({}, commitDetails));
                return [2 /*return*/];
            });
        });
    };
    GitHistoryWidget.prototype.doRenderFileChangeList = function (fileChange) {
        var fileChangeElement = this.renderGitItem(fileChange, fileChange.commitSha || '');
        return fileChangeElement;
    };
    GitHistoryWidget.prototype.renderGitItem = function (change, commitSha) {
        var _this = this;
        return React.createElement(git_navigable_list_widget_1.GitItemComponent, __assign({ key: change.uri.toString() }, {
            labelProvider: this.labelProvider,
            gitLabelProvider: this.gitLabelProvider,
            change: change,
            revealChange: function () { return _this.openFile(change, commitSha); },
            selectNode: function () { return _this.selectNode(change); }
        }));
    };
    GitHistoryWidget.prototype.navigateLeft = function () {
        var selected = this.getSelected();
        if (selected && this.status.state === 'ready') {
            var idx = this.status.commits.findIndex(function (c) { return c.commitSha === selected.commitSha; });
            if (GitCommitNode.is(selected)) {
                if (selected.expanded) {
                    this.addOrRemoveFileChangeNodes(selected);
                }
                else {
                    if (idx > 0) {
                        this.selectNode(this.status.commits[idx - 1]);
                    }
                }
            }
            else if (git_file_change_node_1.GitFileChangeNode.is(selected)) {
                this.selectNode(this.status.commits[idx]);
            }
        }
        this.update();
    };
    GitHistoryWidget.prototype.navigateRight = function () {
        var selected = this.getSelected();
        if (selected) {
            if (GitCommitNode.is(selected) && !selected.expanded && !this.singleFileMode) {
                this.addOrRemoveFileChangeNodes(selected);
            }
            else {
                this.selectNextNode();
            }
        }
        this.update();
    };
    GitHistoryWidget.prototype.handleListEnter = function () {
        var selected = this.getSelected();
        if (selected) {
            if (GitCommitNode.is(selected)) {
                if (this.singleFileMode) {
                    this.openFile(selected.fileChangeNodes[0], selected.commitSha);
                }
                else {
                    this.openDetailWidget(selected);
                }
            }
            else if (git_file_change_node_1.GitFileChangeNode.is(selected)) {
                this.openFile(selected, selected.commitSha || '');
            }
        }
        this.update();
    };
    GitHistoryWidget.prototype.openFile = function (change, commitSha) {
        var uri = new uri_1.default(change.uri);
        var fromURI = change.oldUri ? new uri_1.default(change.oldUri) : uri; // set oldUri on renamed and copied
        fromURI = fromURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(commitSha + '~1');
        var toURI = uri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(commitSha);
        var uriToOpen = uri;
        if (change.status === common_1.GitFileStatus.Deleted) {
            uriToOpen = fromURI;
        }
        else if (change.status === common_1.GitFileStatus.New) {
            uriToOpen = toURI;
        }
        else {
            uriToOpen = diff_uris_1.DiffUris.encode(fromURI, toURI);
        }
        browser_1.open(this.openerService, uriToOpen, { mode: 'reveal' });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitHistoryWidget.prototype, "init", null);
    GitHistoryWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.OpenerService)),
        __param(1, inversify_1.inject(git_commit_detail_open_handler_1.GitCommitDetailOpenHandler)),
        __param(2, inversify_1.inject(browser_1.ApplicationShell)),
        __param(3, inversify_1.inject(common_2.FileSystem)),
        __param(4, inversify_1.inject(common_1.Git)),
        __param(5, inversify_1.inject(scm_avatar_service_1.ScmAvatarService)),
        __param(6, inversify_1.inject(browser_1.WidgetManager)),
        __param(7, inversify_1.inject(git_diff_contribution_1.GitDiffContribution)),
        __metadata("design:paramtypes", [Object, git_commit_detail_open_handler_1.GitCommitDetailOpenHandler,
            browser_1.ApplicationShell, Object, Object, scm_avatar_service_1.ScmAvatarService,
            browser_1.WidgetManager,
            git_diff_contribution_1.GitDiffContribution])
    ], GitHistoryWidget);
    return GitHistoryWidget;
}(git_navigable_list_widget_1.GitNavigableListWidget));
exports.GitHistoryWidget = GitHistoryWidget;
var GitHistoryList = /** @class */ (function (_super) {
    __extends(GitHistoryList, _super);
    function GitHistoryList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkIfRowIsLoaded = function (opts) { return _this.doCheckIfRowIsLoaded(opts); };
        _this.measureCache = new react_virtualized_1.CellMeasurerCache();
        _this.measureRowRenderer = function (params) {
            var index = params.index, key = params.key, parent = params.parent;
            return (React.createElement(react_virtualized_1.CellMeasurer, { cache: _this.measureCache, columnIndex: 0, key: key, rowIndex: index, parent: parent }, function () { return _this.renderRow(params); }));
        };
        _this.renderRow = function (_a) {
            var index = _a.index, key = _a.key, style = _a.style;
            if (_this.checkIfRowIsLoaded({ index: index })) {
                var row = _this.props.rows[index];
                if (GitCommitNode.is(row)) {
                    var head = _this.props.renderCommit(row);
                    return React.createElement("div", { key: key, style: style, className: "commitListElement" + (index === 0 ? ' first' : '') }, head);
                }
                else if (git_file_change_node_1.GitFileChangeNode.is(row)) {
                    return React.createElement("div", { key: key, style: style, className: 'fileChangeListElement' }, _this.props.renderFileChangeList(row));
                }
            }
            else {
                return React.createElement("div", { key: key, style: style, className: "commitListElement" + (index === 0 ? ' first' : '') },
                    React.createElement("span", { className: 'fa fa-spinner fa-pulse fa-fw' }));
            }
        };
        return _this;
    }
    GitHistoryList.prototype.doCheckIfRowIsLoaded = function (opts) {
        var row = this.props.rows[opts.index];
        return !!row;
    };
    GitHistoryList.prototype.render = function () {
        var _this = this;
        return React.createElement(react_virtualized_1.InfiniteLoader, { isRowLoaded: this.checkIfRowIsLoaded, loadMoreRows: this.props.loadMoreRows, rowCount: this.props.rows.length + 1, threshold: 15 }, function (_a) {
            var onRowsRendered = _a.onRowsRendered, registerChild = _a.registerChild;
            return (React.createElement(react_virtualized_1.AutoSizer, null, function (_a) {
                var width = _a.width, height = _a.height;
                return React.createElement(react_virtualized_1.List, { className: 'commitList', ref: function (list) {
                        _this.list = (list || undefined);
                        registerChild(list);
                    }, width: width, height: height, onRowsRendered: onRowsRendered, rowRenderer: _this.measureRowRenderer, rowHeight: _this.measureCache.rowHeight, rowCount: _this.props.hasMoreRows ? _this.props.rows.length + 1 : _this.props.rows.length, tabIndex: -1, onScroll: _this.props.handleScroll, scrollToIndex: _this.props.indexOfSelected, style: {
                        overflowY: 'visible',
                        overflowX: 'visible'
                    } });
            }));
        });
    };
    GitHistoryList.prototype.componentWillUpdate = function () {
        this.measureCache.clearAll();
    };
    return GitHistoryList;
}(React.Component));
exports.GitHistoryList = GitHistoryList;
//# sourceMappingURL=git-history-widget.js.map
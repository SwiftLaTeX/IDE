"use strict";
/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
require("../../src/browser/style/scm-amend-component.css");
var React = require("react");
var core_1 = require("@theia/core");
var TRANSITION_TIME_MS = 300;
var REPOSITORY_STORAGE_KEY = 'scmRepository';
var ScmAmendComponent = /** @class */ (function (_super) {
    __extends(ScmAmendComponent, _super);
    function ScmAmendComponent(props) {
        var _this = _super.call(this, props) || this;
        /**
         * a hint on how to animate an update, set by certain user action handlers
         * and used when updating the view based on a repository change
         */
        _this.transitionHint = 'none';
        _this.lastCommitHeight = 0;
        _this.lastCommitScrollRef = function (instance) {
            if (instance && _this.lastCommitHeight === 0) {
                _this.lastCommitHeight = instance.getBoundingClientRect().height;
            }
        };
        _this.toDisposeOnUnmount = new core_1.DisposableCollection();
        /**
         * This function will update the 'model' (lastCommit, amendingCommits) only
         * when the repository sees the last commit change.
         * 'render' can be called at any time, so be sure we don't update any 'model'
         * fields until we actually start the transition.
         */
        _this.amend = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.transition.state !== 'none' && this.transitionHint !== 'none') {
                            return [2 /*return*/];
                        }
                        this.transitionHint = 'amend';
                        return [4 /*yield*/, this.resetAndSetMessage('HEAD~', 'HEAD')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.unamend = function () { return __awaiter(_this, void 0, void 0, function () {
            var commitToRestore, oldestAmendCommit, commitToUseForMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.transition.state !== 'none' && this.transitionHint !== 'none') {
                            return [2 /*return*/];
                        }
                        commitToRestore = (this.state.amendingCommits.length >= 1)
                            ? this.state.amendingCommits[this.state.amendingCommits.length - 1]
                            : undefined;
                        oldestAmendCommit = (this.state.amendingCommits.length >= 2)
                            ? this.state.amendingCommits[this.state.amendingCommits.length - 2]
                            : undefined;
                        if (!commitToRestore) return [3 /*break*/, 2];
                        commitToUseForMessage = oldestAmendCommit
                            ? oldestAmendCommit.commit.id
                            : undefined;
                        this.transitionHint = 'unamend';
                        return [4 /*yield*/, this.resetAndSetMessage(commitToRestore.commit.id, commitToUseForMessage)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.unamendAll = function () { return _this.doUnamendAll(); };
        _this.clearAmending = function () { return _this.doClearAmending(); };
        _this.state = {
            transition: { state: 'none' },
            amendingCommits: [],
            lastCommit: undefined
        };
        var setState = _this.setState.bind(_this);
        _this.setState = function (newState) {
            if (!_this.toDisposeOnUnmount.disposed) {
                setState(newState);
            }
        };
        return _this;
    }
    ScmAmendComponent.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastCommit, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.toDisposeOnUnmount.push(core_1.Disposable.create(function () { }));
                        return [4 /*yield*/, this.getLastCommit()];
                    case 1:
                        lastCommit = _c.sent();
                        _a = this.setState;
                        _b = {};
                        return [4 /*yield*/, this.buildAmendingList(lastCommit ? lastCommit.commit : undefined)];
                    case 2:
                        _a.apply(this, [(_b.amendingCommits = _c.sent(), _b.lastCommit = lastCommit, _b)]);
                        if (this.toDisposeOnUnmount.disposed) {
                            return [2 /*return*/];
                        }
                        this.toDisposeOnUnmount.push(this.props.repository.provider.onDidChange(function () { return _this.fetchStatusAndSetState(); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.componentWillUnmount = function () {
        this.toDisposeOnUnmount.dispose();
    };
    ScmAmendComponent.prototype.fetchStatusAndSetState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey, nextCommit, amendingCommits, direction, serializedState, serializedState, transitionData_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.getLastCommit()];
                    case 1:
                        nextCommit = _a.sent();
                        if (!(nextCommit && this.state.lastCommit && nextCommit.commit.id === this.state.lastCommit.commit.id)) return [3 /*break*/, 2];
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(nextCommit === undefined && this.state.lastCommit === undefined)) return [3 /*break*/, 3];
                        return [3 /*break*/, 6];
                    case 3:
                        if (!(this.transitionHint === 'none')) return [3 /*break*/, 5];
                        // If the 'last' commit changes, but we are not expecting an 'amend'
                        // or 'unamend' to occur, then we clear out the list of amended commits.
                        // This is because an unexpected change has happened to the repoistory,
                        // perhaps the user commited, merged, or something.  The amended commits
                        // will no longer be valid.
                        // Note that there may or may not have been a previous lastCommit (if the
                        // repository was previously empty with no initial commit then lastCommit
                        // will be undefined).  Either way we clear the amending commits.
                        return [4 /*yield*/, this.clearAmendingCommits()];
                    case 4:
                        // If the 'last' commit changes, but we are not expecting an 'amend'
                        // or 'unamend' to occur, then we clear out the list of amended commits.
                        // This is because an unexpected change has happened to the repoistory,
                        // perhaps the user commited, merged, or something.  The amended commits
                        // will no longer be valid.
                        // Note that there may or may not have been a previous lastCommit (if the
                        // repository was previously empty with no initial commit then lastCommit
                        // will be undefined).  Either way we clear the amending commits.
                        _a.sent();
                        // There is a change to the last commit, but no transition hint so
                        // the view just updates without transition.
                        this.setState({ amendingCommits: [], lastCommit: nextCommit });
                        return [3 /*break*/, 6];
                    case 5:
                        amendingCommits = this.state.amendingCommits.concat([]);
                        direction = this.transitionHint === 'amend' ? 'up' : 'down';
                        switch (this.transitionHint) {
                            case 'amend':
                                if (this.state.lastCommit) {
                                    amendingCommits.push(this.state.lastCommit);
                                    serializedState = JSON.stringify({
                                        amendingHeadCommitSha: amendingCommits[0].commit.id,
                                        latestCommitSha: nextCommit ? nextCommit.commit.id : undefined
                                    });
                                    this.props.storageService.setData(storageKey, serializedState);
                                }
                                break;
                            case 'unamend':
                                amendingCommits.pop();
                                if (amendingCommits.length === 0) {
                                    this.props.storageService.setData(storageKey, undefined);
                                }
                                else {
                                    serializedState = JSON.stringify({
                                        amendingHeadCommitSha: amendingCommits[0].commit.id,
                                        latestCommitSha: nextCommit ? nextCommit.commit.id : undefined
                                    });
                                    this.props.storageService.setData(storageKey, serializedState);
                                }
                                break;
                        }
                        if (this.state.lastCommit && nextCommit) {
                            transitionData_1 = { direction: direction, previousLastCommit: this.state.lastCommit };
                            this.setState({ lastCommit: nextCommit, amendingCommits: amendingCommits, transition: __assign(__assign({}, transitionData_1), { state: 'start' }) });
                            this.onNextFrame(function () {
                                _this.setState({ transition: __assign(__assign({}, transitionData_1), { state: 'transitioning' }) });
                            });
                            setTimeout(function () {
                                _this.setState({ transition: { state: 'none' } });
                            }, TRANSITION_TIME_MS);
                        }
                        else {
                            // No previous last commit so no transition
                            this.setState({ transition: { state: 'none' }, amendingCommits: amendingCommits, lastCommit: nextCommit });
                        }
                        _a.label = 6;
                    case 6:
                        this.transitionHint = 'none';
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.clearAmendingCommits = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.props.storageService.setData(storageKey, undefined)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.buildAmendingList = function (lastCommit) {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey, storedState, _a, amendingHeadCommitSha, latestCommitSha, commits, amendingCommitPromises;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.props.storageService.getData(storageKey, undefined)];
                    case 1:
                        storedState = _b.sent();
                        if (!storedState) return [3 /*break*/, 3];
                        _a = JSON.parse(storedState), amendingHeadCommitSha = _a.amendingHeadCommitSha, latestCommitSha = _a.latestCommitSha;
                        if (!this.commitsAreEqual(lastCommit, latestCommitSha)) {
                            // The head commit in the repository has changed.  It is not the same commit that was the
                            // head commit after the last 'amend'.
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this.props.scmAmendSupport.getInitialAmendingCommits(amendingHeadCommitSha, lastCommit ? lastCommit.id : undefined)];
                    case 2:
                        commits = _b.sent();
                        amendingCommitPromises = commits.map(function (commit) { return __awaiter(_this, void 0, void 0, function () {
                            var avatar;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.props.avatarService.getAvatar(commit.authorEmail)];
                                    case 1:
                                        avatar = _a.sent();
                                        return [2 /*return*/, { commit: commit, avatar: avatar }];
                                }
                            });
                        }); });
                        return [2 /*return*/, Promise.all(amendingCommitPromises)];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    ScmAmendComponent.prototype.getStorageKey = function () {
        return REPOSITORY_STORAGE_KEY + ':' + this.props.repository.provider.rootUri;
    };
    /**
     * Commits are equal if the ids are equal or if both are undefined.
     * (If a commit is undefined, it represents the initial empty state of a repository,
     * before the inital commit).
     */
    ScmAmendComponent.prototype.commitsAreEqual = function (lastCommit, savedLastCommitId) {
        return lastCommit
            ? lastCommit.id === savedLastCommitId
            : savedLastCommitId === undefined;
    };
    ScmAmendComponent.prototype.resetAndSetMessage = function (commitToRestore, commitToUseForMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var message, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!commitToUseForMessage) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.scmAmendSupport.getMessage(commitToUseForMessage)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = '';
                        _b.label = 3;
                    case 3:
                        message = _a;
                        return [4 /*yield*/, this.props.scmAmendSupport.reset(commitToRestore)];
                    case 4:
                        _b.sent();
                        this.props.setCommitMessage(message);
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.render = function () {
        var neverShrink = this.state.amendingCommits.length <= 3;
        var style = neverShrink
            ? __assign(__assign({}, this.props.style), { flexShrink: 0 }) : __assign(__assign({}, this.props.style), { flexShrink: 1, minHeight: 240 // height with three commits
         });
        return (React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_CONTAINER + ' no-select', style: style, id: this.props.id },
            this.state.amendingCommits.length > 0 || (this.state.lastCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'down')
                ? this.renderAmendingCommits()
                : '',
            this.state.lastCommit ?
                React.createElement("div", null,
                    React.createElement("div", { id: 'lastCommit', className: 'changesContainer' },
                        React.createElement("div", { className: 'theia-header scm-theia-header' }, "HEAD Commit"),
                        this.renderLastCommit()))
                : ''));
    };
    ScmAmendComponent.prototype.getLastCommit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commit, avatar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.scmAmendSupport.getLastCommit()];
                    case 1:
                        commit = _a.sent();
                        if (!commit) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.props.avatarService.getAvatar(commit.authorEmail)];
                    case 2:
                        avatar = _a.sent();
                        return [2 /*return*/, { commit: commit, avatar: avatar }];
                    case 3: return [2 /*return*/, undefined];
                }
            });
        });
    };
    ScmAmendComponent.prototype.renderAmendingCommits = function () {
        var _this = this;
        var neverShrink = this.state.amendingCommits.length <= 3;
        var style = neverShrink
            ? {
                flexShrink: 0,
            }
            : {
                flexShrink: 1,
                // parent minHeight controls height, we just need any value smaller than
                // what the height would be when the parent is at its minHeight
                minHeight: 0
            };
        return React.createElement("div", { id: 'amendedCommits', className: 'theia-scm-amend-outer-container', style: style },
            React.createElement("div", { className: 'theia-header scm-theia-header' },
                React.createElement("div", { className: 'noWrapInfo' }, "Commits being Amended"),
                this.renderAmendCommitListButtons(),
                this.renderCommitCount(this.state.amendingCommits.length)),
            React.createElement("div", { style: this.styleAmendedCommits() },
                this.state.amendingCommits.map(function (commitData, index, array) {
                    return _this.renderCommitBeingAmended(commitData, index === array.length - 1);
                }),
                this.state.lastCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'down'
                    ? this.renderCommitBeingAmended(this.state.lastCommit, false)
                    : ''));
    };
    ScmAmendComponent.prototype.renderAmendCommitListButtons = function () {
        return React.createElement("div", { className: 'theia-scm-inline-actions-container' },
            React.createElement("div", { className: 'theia-scm-inline-actions' },
                React.createElement("div", { className: 'theia-scm-inline-action' },
                    React.createElement("a", { className: 'fa fa-minus', title: 'Unamend All Commits', onClick: this.unamendAll })),
                React.createElement("div", { className: 'theia-scm-inline-action' },
                    React.createElement("a", { className: 'fa fa-times', title: 'Clear Amending Commits', onClick: this.clearAmending }))));
    };
    ScmAmendComponent.prototype.renderLastCommit = function () {
        if (!this.state.lastCommit) {
            return '';
        }
        var canAmend = true;
        return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AND_BUTTON, style: { flexGrow: 0, flexShrink: 0 }, key: this.state.lastCommit.commit.id },
            this.renderLastCommitNoButton(this.state.lastCommit),
            canAmend
                ? React.createElement("div", { className: ScmAmendComponent.Styles.FLEX_CENTER },
                    React.createElement("button", { className: 'theia-button', title: 'Amend last commit', onClick: this.amend }, "Amend"))
                : '');
    };
    ScmAmendComponent.prototype.renderLastCommitNoButton = function (lastCommit) {
        switch (this.state.transition.state) {
            case 'none':
                return React.createElement("div", { ref: this.lastCommitScrollRef, className: 'theia-scm-scrolling-container' }, this.renderCommitAvatarAndDetail(lastCommit));
            case 'start':
            case 'transitioning':
                switch (this.state.transition.direction) {
                    case 'up':
                        return React.createElement("div", { style: this.styleLastCommitMovingUp(this.state.transition.state) },
                            this.renderCommitAvatarAndDetail(this.state.transition.previousLastCommit),
                            this.renderCommitAvatarAndDetail(lastCommit));
                    case 'down':
                        return React.createElement("div", { style: this.styleLastCommitMovingDown(this.state.transition.state) },
                            this.renderCommitAvatarAndDetail(lastCommit),
                            this.renderCommitAvatarAndDetail(this.state.transition.previousLastCommit));
                }
        }
    };
    /**
     * See https://stackoverflow.com/questions/26556436/react-after-render-code
     *
     * @param callback
     */
    ScmAmendComponent.prototype.onNextFrame = function (callback) {
        setTimeout(function () { return window.requestAnimationFrame(callback); }, 0);
    };
    ScmAmendComponent.prototype.renderCommitAvatarAndDetail = function (commitData) {
        var commit = commitData.commit, avatar = commitData.avatar;
        return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, key: commit.id },
            React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_MESSAGE_AVATAR },
                React.createElement("img", { src: avatar })),
            React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_DETAILS },
                React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_MESSAGE_SUMMARY }, commit.summary),
                React.createElement("div", { className: ScmAmendComponent.Styles.LAST_COMMIT_MESSAGE_TIME }, commit.authorDateRelative + " by " + commit.authorName)));
    };
    ScmAmendComponent.prototype.renderCommitCount = function (commits) {
        return React.createElement("div", { className: 'notification-count-container scm-change-count' },
            React.createElement("span", { className: 'notification-count' }, commits));
    };
    ScmAmendComponent.prototype.renderCommitBeingAmended = function (commitData, isOldestAmendCommit) {
        if (isOldestAmendCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'up') {
            return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, style: { flexGrow: 0, flexShrink: 0 }, key: commitData.commit.id },
                React.createElement("div", { className: 'fixed-height-commit-container' }, this.renderCommitAvatarAndDetail(commitData)));
        }
        else {
            return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, style: { flexGrow: 0, flexShrink: 0 }, key: commitData.commit.id },
                this.renderCommitAvatarAndDetail(commitData),
                isOldestAmendCommit
                    ? React.createElement("div", { className: ScmAmendComponent.Styles.FLEX_CENTER },
                        React.createElement("button", { className: 'theia-button', title: 'Unamend commit', onClick: this.unamend }, "Unamend"))
                    : '');
        }
    };
    /*
     * The style for the <div> containing the list of commits being amended.
     * This div is scrollable.
     */
    ScmAmendComponent.prototype.styleAmendedCommits = function () {
        var base = {
            display: 'flex',
            whitespace: 'nowrap',
            width: '100%',
            minHeight: 0,
            flexShrink: 1,
            paddingTop: '2px',
        };
        switch (this.state.transition.state) {
            case 'none':
                return __assign(__assign({}, base), { flexDirection: 'column', overflowY: 'auto', marginBottom: '0' });
            case 'start':
            case 'transitioning':
                var startingMargin = 0;
                var endingMargin = 0;
                switch (this.state.transition.direction) {
                    case 'down':
                        startingMargin = 0;
                        endingMargin = -32;
                        break;
                    case 'up':
                        startingMargin = -32;
                        endingMargin = 0;
                        break;
                }
                switch (this.state.transition.state) {
                    case 'start':
                        return __assign(__assign({}, base), { flexDirection: 'column', overflowY: 'hidden', marginBottom: startingMargin + "px" });
                    case 'transitioning':
                        return __assign(__assign({}, base), { flexDirection: 'column', overflowY: 'hidden', marginBottom: endingMargin + "px", transitionProperty: 'margin-bottom', transitionDuration: TRANSITION_TIME_MS + "ms", transitionTimingFunction: 'linear' });
                }
        }
        throw new Error('Invalid value for transtition state: ' + this.state.transition.state);
    };
    ScmAmendComponent.prototype.styleLastCommitMovingUp = function (transitionState) {
        return this.styleLastCommit(transitionState, 0, -28);
    };
    ScmAmendComponent.prototype.styleLastCommitMovingDown = function (transitionState) {
        return this.styleLastCommit(transitionState, -28, 0);
    };
    ScmAmendComponent.prototype.styleLastCommit = function (transitionState, startingMarginTop, startingMarginBottom) {
        var base = {
            display: 'flex',
            width: '100%',
            overflow: 'hidden',
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            height: this.lastCommitHeight * 2
        };
        // We end with top and bottom margins switched
        var endingMarginTop = startingMarginBottom;
        var endingMarginBottom = startingMarginTop;
        switch (transitionState) {
            case 'start':
                return __assign(__assign({}, base), { position: 'relative', flexDirection: 'column', marginTop: startingMarginTop, marginBottom: startingMarginBottom });
            case 'transitioning':
                return __assign(__assign({}, base), { position: 'relative', flexDirection: 'column', marginTop: endingMarginTop, marginBottom: endingMarginBottom, transitionProperty: 'margin-top margin-bottom', transitionDuration: TRANSITION_TIME_MS + "ms", transitionTimingFunction: 'linear' });
        }
    };
    ScmAmendComponent.prototype.doUnamendAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.state.amendingCommits.length > 0)) return [3 /*break*/, 2];
                        this.unamend();
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, TRANSITION_TIME_MS); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.doClearAmending = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearAmendingCommits()];
                    case 1:
                        _a.sent();
                        this.setState({ amendingCommits: [] });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ScmAmendComponent;
}(React.Component));
exports.ScmAmendComponent = ScmAmendComponent;
(function (ScmAmendComponent) {
    var Styles;
    (function (Styles) {
        Styles.COMMIT_CONTAINER = 'theia-scm-commit-container';
        Styles.COMMIT_AND_BUTTON = 'theia-scm-commit-and-button';
        Styles.COMMIT_AVATAR_AND_TEXT = 'theia-scm-commit-avatar-and-text';
        Styles.COMMIT_DETAILS = 'theia-scm-commit-details';
        Styles.COMMIT_MESSAGE_AVATAR = 'theia-scm-commit-message-avatar';
        Styles.COMMIT_MESSAGE_SUMMARY = 'theia-scm-commit-message-summary';
        Styles.LAST_COMMIT_MESSAGE_TIME = 'theia-scm-commit-message-time';
        Styles.FLEX_CENTER = 'theia-scm-flex-container-center';
    })(Styles = ScmAmendComponent.Styles || (ScmAmendComponent.Styles = {}));
})(ScmAmendComponent = exports.ScmAmendComponent || (exports.ScmAmendComponent = {}));
exports.ScmAmendComponent = ScmAmendComponent;
//# sourceMappingURL=scm-amend-component.js.map
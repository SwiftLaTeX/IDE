"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
var common_1 = require("../common");
var git_repository_tracker_1 = require("./git-repository-tracker");
var git_quick_open_service_1 = require("./git-quick-open-service");
var git_sync_service_1 = require("./git-sync-service");
var browser_3 = require("@theia/workspace/lib/browser");
var git_repository_provider_1 = require("./git-repository-provider");
var git_error_handler_1 = require("../browser/git-error-handler");
var scm_widget_1 = require("@theia/scm/lib/browser/scm-widget");
var progress_service_1 = require("@theia/core/lib/common/progress-service");
var git_preferences_1 = require("./git-preferences");
exports.EDITOR_CONTEXT_MENU_GIT = __spread(browser_2.EDITOR_CONTEXT_MENU, ['3_git']);
var GIT_COMMANDS;
(function (GIT_COMMANDS) {
    GIT_COMMANDS.CLONE = {
        id: 'git.clone',
        label: 'Git: Clone...'
    };
    GIT_COMMANDS.FETCH = {
        id: 'git.fetch',
        label: 'Git: Fetch...'
    };
    GIT_COMMANDS.PULL_DEFAULT = {
        id: 'git.pull.default',
        label: 'Git: Pull'
    };
    GIT_COMMANDS.PULL = {
        id: 'git.pull',
        label: 'Git: Pull from...'
    };
    GIT_COMMANDS.PUSH_DEFAULT = {
        id: 'git.push.default',
        label: 'Git: Push'
    };
    GIT_COMMANDS.PUSH = {
        id: 'git.push',
        label: 'Git: Push to...'
    };
    GIT_COMMANDS.MERGE = {
        id: 'git.merge',
        label: 'Git: Merge...'
    };
    GIT_COMMANDS.CHECKOUT = {
        id: 'git.checkout',
        label: 'Git: Checkout'
    };
    GIT_COMMANDS.COMMIT = {
        id: 'git.commit.all',
        tooltip: 'Commit all the staged changes',
        iconClass: 'fa fa-check',
        label: 'Commit',
    };
    GIT_COMMANDS.COMMIT_ADD_SIGN_OFF = {
        id: 'git-commit-add-sign-off',
        label: 'Add Signed-off-by',
        iconClass: 'fa fa-pencil-square-o',
        category: 'Git'
    };
    GIT_COMMANDS.COMMIT_AMEND = {
        id: 'git.commit.amend'
    };
    GIT_COMMANDS.COMMIT_SIGN_OFF = {
        id: 'git.commit.signOff'
    };
    GIT_COMMANDS.OPEN_FILE = {
        id: 'git.open.file',
        category: 'Git',
        label: 'Open File',
        iconClass: 'theia-open-file-icon'
    };
    GIT_COMMANDS.OPEN_CHANGED_FILE = {
        id: 'git.open.changed.file',
        category: 'Git',
        label: 'Open File',
        iconClass: 'open-file'
    };
    GIT_COMMANDS.OPEN_CHANGES = {
        id: 'git.open.changes',
        category: 'Git',
        label: 'Open Changes',
        iconClass: 'theia-open-change-icon'
    };
    GIT_COMMANDS.SYNC = {
        id: 'git.sync',
        label: 'Git: Sync'
    };
    GIT_COMMANDS.PUBLISH = {
        id: 'git.publish',
        label: 'Git: Publish Branch'
    };
    GIT_COMMANDS.STAGE = {
        id: 'git.stage',
        category: 'Git',
        label: 'Stage Changes',
        iconClass: 'fa fa-plus'
    };
    GIT_COMMANDS.STAGE_ALL = {
        id: 'git.stage.all',
        category: 'Git',
        label: 'Stage All Changes',
        iconClass: 'fa fa-plus',
    };
    GIT_COMMANDS.UNSTAGE = {
        id: 'git.unstage',
        iconClass: 'fa fa-minus',
        category: 'Git',
        label: 'Unstage Changes'
    };
    GIT_COMMANDS.UNSTAGE_ALL = {
        id: 'git.unstage.all',
        iconClass: 'fa fa-minus',
        category: 'Git',
        label: 'Unstage All',
    };
    GIT_COMMANDS.DISCARD = {
        id: 'git.discard',
        iconClass: 'fa fa-undo',
        category: 'Git',
        label: 'Discard Changes'
    };
    GIT_COMMANDS.DISCARD_ALL = {
        id: 'git.discard.all',
        iconClass: 'fa fa-undo',
        category: 'Git',
        label: 'Discard All Changes',
    };
    GIT_COMMANDS.STASH = {
        id: 'git.stash',
        category: 'Git',
        label: 'Stash...'
    };
    GIT_COMMANDS.APPLY_STASH = {
        id: 'git.stash.apply',
        category: 'Git',
        label: 'Apply Stash...'
    };
    GIT_COMMANDS.APPLY_LATEST_STASH = {
        id: 'git.stash.apply.latest',
        category: 'Git',
        label: 'Apply Latest Stash'
    };
    GIT_COMMANDS.POP_STASH = {
        id: 'git.stash.pop',
        category: 'Git',
        label: 'Pop Stash...'
    };
    GIT_COMMANDS.POP_LATEST_STASH = {
        id: 'git.stash.pop.latest',
        category: 'Git',
        label: 'Pop Latest Stash'
    };
    GIT_COMMANDS.DROP_STASH = {
        id: 'git.stash.drop',
        category: 'Git',
        label: 'Drop Stash...'
    };
    GIT_COMMANDS.REFRESH = {
        id: 'git-refresh',
        label: 'Refresh',
        iconClass: 'fa fa-refresh',
        category: 'Git'
    };
    GIT_COMMANDS.INIT_REPOSITORY = {
        id: 'git-init',
        label: 'Initialize Repository',
        iconClass: 'fa fa-plus',
        category: 'Git'
    };
})(GIT_COMMANDS = exports.GIT_COMMANDS || (exports.GIT_COMMANDS = {}));
var GitContribution = /** @class */ (function () {
    function GitContribution() {
        this.toDispose = new core_1.DisposableCollection();
    }
    GitContribution.prototype.onStart = function () {
        var _this = this;
        this.updateStatusBar();
        this.repositoryTracker.onGitEvent(function () { return _this.updateStatusBar(); });
        this.syncService.onDidChange(function () { return _this.updateStatusBar(); });
    };
    GitContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_2.EditorContextMenu.NAVIGATION, {
            commandId: GIT_COMMANDS.OPEN_FILE.id
        });
        menus.registerMenuAction(browser_2.EditorContextMenu.NAVIGATION, {
            commandId: GIT_COMMANDS.OPEN_CHANGES.id
        });
        var registerResourceAction = function (group, action) {
            menus.registerMenuAction(scm_widget_1.ScmWidget.RESOURCE_INLINE_MENU, action);
            menus.registerMenuAction(__spread(scm_widget_1.ScmWidget.RESOURCE_CONTEXT_MENU, [group]), action);
        };
        registerResourceAction('navigation', {
            commandId: GIT_COMMANDS.OPEN_CHANGED_FILE.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.DISCARD.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.STAGE.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree'
        });
        registerResourceAction('navigation', {
            commandId: GIT_COMMANDS.OPEN_CHANGED_FILE.id,
            when: 'scmProvider == git && scmResourceGroup == index'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.UNSTAGE.id,
            when: 'scmProvider == git && scmResourceGroup == index'
        });
        registerResourceAction('navigation', {
            commandId: GIT_COMMANDS.OPEN_CHANGED_FILE.id,
            when: 'scmProvider == git && scmResourceGroup == merge'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.DISCARD.id,
            when: 'scmProvider == git && scmResourceGroup == merge'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.STAGE.id,
            when: 'scmProvider == git && scmResourceGroup == merge'
        });
        var registerResourceGroupAction = function (group, action) {
            menus.registerMenuAction(scm_widget_1.ScmWidget.RESOURCE_GROUP_INLINE_MENU, action);
            menus.registerMenuAction(__spread(scm_widget_1.ScmWidget.RESOURCE_GROUP_CONTEXT_MENU, [group]), action);
        };
        registerResourceGroupAction('1_modification', {
            commandId: GIT_COMMANDS.STAGE_ALL.id,
            when: 'scmProvider == git && scmResourceGroup == merge',
        });
        registerResourceGroupAction('1_modification', {
            commandId: GIT_COMMANDS.UNSTAGE_ALL.id,
            when: 'scmProvider == git && scmResourceGroup == index',
        });
        registerResourceGroupAction('1_modification', {
            commandId: GIT_COMMANDS.STAGE_ALL.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree',
        });
        registerResourceGroupAction('1_modification', {
            commandId: GIT_COMMANDS.DISCARD_ALL.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree',
        });
    };
    GitContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(GIT_COMMANDS.FETCH, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.fetch(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.PULL_DEFAULT, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.performDefaultGitAction(git_quick_open_service_1.GitAction.PULL); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.PULL, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.pull(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.PUSH_DEFAULT, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.performDefaultGitAction(git_quick_open_service_1.GitAction.PUSH); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.PUSH, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.push(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.MERGE, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.merge(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.CHECKOUT, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.checkout(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.COMMIT_SIGN_OFF, {
            execute: function () { return _this.withProgress(function () { return _this.commit({ signOff: true }); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.COMMIT_AMEND, {
            execute: function () { return _this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.amend()];
            }); }); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.STAGE_ALL, {
            execute: function () {
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.stageAll(); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.UNSTAGE_ALL, {
            execute: function () {
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.unstageAll(); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.DISCARD_ALL, {
            execute: function () {
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.discardAll(); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.OPEN_FILE, {
            execute: function (widget) { return _this.openFile(widget); },
            isEnabled: function (widget) { return !!_this.getOpenFileOptions(widget); },
            isVisible: function (widget) { return !!_this.getOpenFileOptions(widget); }
        });
        registry.registerCommand(GIT_COMMANDS.OPEN_CHANGES, {
            execute: function (widget) { return _this.openChanges(widget); },
            isEnabled: function (widget) { return !!_this.getOpenChangesOptions(widget); },
            isVisible: function (widget) { return !!_this.getOpenChangesOptions(widget); }
        });
        registry.registerCommand(GIT_COMMANDS.SYNC, {
            execute: function () { return _this.withProgress(function () { return _this.syncService.sync(); }); },
            isEnabled: function () { return _this.syncService.canSync(); },
            isVisible: function () { return _this.syncService.canSync(); }
        });
        registry.registerCommand(GIT_COMMANDS.PUBLISH, {
            execute: function () { return _this.withProgress(function () { return _this.syncService.publish(); }); },
            isEnabled: function () { return _this.syncService.canPublish(); },
            isVisible: function () { return _this.syncService.canPublish(); }
        });
        registry.registerCommand(GIT_COMMANDS.CLONE, {
            isEnabled: function () { return _this.workspaceService.opened; },
            execute: function (url, folder, branch) {
                return _this.quickOpenService.clone(url, folder, branch);
            }
        });
        registry.registerCommand(GIT_COMMANDS.COMMIT, {
            execute: function () { return _this.withProgress(function () { return _this.commit(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.REFRESH, {
            execute: function () { return _this.withProgress(function () { return _this.repositoryProvider.refresh(); }); }
        });
        registry.registerCommand(GIT_COMMANDS.COMMIT_ADD_SIGN_OFF, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.withProgress(function () { return _this.addSignOff(); })];
                });
            }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.UNSTAGE, {
            execute: function (arg) {
                var uri = typeof arg === 'string' ? arg : arg.sourceUri.toString();
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.unstage(uri); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.STAGE, {
            execute: function (arg) {
                var uri = typeof arg === 'string' ? arg : arg.sourceUri.toString();
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.stage(uri); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.DISCARD, {
            execute: function (arg) {
                var uri = typeof arg === 'string' ? arg : arg.sourceUri.toString();
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.discard(uri); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.OPEN_CHANGED_FILE, {
            execute: function (arg) {
                var uri = typeof arg === 'string' ? new uri_1.default(arg) : arg.sourceUri;
                _this.editorManager.open(uri, { mode: 'reveal' });
            }
        });
        registry.registerCommand(GIT_COMMANDS.STASH, {
            execute: function () { return _this.quickOpenService.stash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository &&
                !!_this.repositoryTracker.selectedRepositoryStatus &&
                _this.repositoryTracker.selectedRepositoryStatus.changes.length > 0; }
        });
        registry.registerCommand(GIT_COMMANDS.APPLY_STASH, {
            execute: function () { return _this.quickOpenService.applyStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.APPLY_LATEST_STASH, {
            execute: function () { return _this.quickOpenService.applyLatestStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.POP_STASH, {
            execute: function () { return _this.quickOpenService.popStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.POP_LATEST_STASH, {
            execute: function () { return _this.quickOpenService.popLatestStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.DROP_STASH, {
            execute: function () { return _this.quickOpenService.dropStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.INIT_REPOSITORY, {
            execute: function () { return _this.quickOpenService.initRepository(); },
            isEnabled: function (widget) { return (!widget || widget instanceof scm_widget_1.ScmWidget) && !_this.repositoryProvider.selectedRepository; },
            isVisible: function (widget) { return (!widget || widget instanceof scm_widget_1.ScmWidget) && !_this.repositoryProvider.selectedRepository; }
        });
    };
    GitContribution.prototype.amend = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scmRepository, lastCommit, message, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scmRepository = this.repositoryProvider.selectedScmRepository;
                        if (!scmRepository) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, scmRepository.provider.amendSupport.getLastCommit()];
                    case 2:
                        lastCommit = _a.sent();
                        if (lastCommit === undefined) {
                            scmRepository.input.issue = {
                                type: 'error',
                                message: 'No previous commit to amend'
                            };
                            scmRepository.input.focus();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.quickOpenService.commitMessageForAmend()];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.commit({ message: message, amend: true })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (!(e_1 instanceof Error) || e_1.message !== 'User abort.') {
                            throw e_1;
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    GitContribution.prototype.withProgress = function (task) {
        return this.progressService.withProgress('', 'scm', task);
    };
    GitContribution.prototype.registerToolbarItems = function (registry) {
        var _this = this;
        registry.registerItem({
            id: GIT_COMMANDS.OPEN_FILE.id,
            command: GIT_COMMANDS.OPEN_FILE.id,
            tooltip: GIT_COMMANDS.OPEN_FILE.label
        });
        registry.registerItem({
            id: GIT_COMMANDS.OPEN_CHANGES.id,
            command: GIT_COMMANDS.OPEN_CHANGES.id,
            tooltip: GIT_COMMANDS.OPEN_CHANGES.label
        });
        registry.registerItem({
            id: GIT_COMMANDS.INIT_REPOSITORY.id,
            command: GIT_COMMANDS.INIT_REPOSITORY.id,
            tooltip: GIT_COMMANDS.INIT_REPOSITORY.label
        });
        var registerItem = function (item) {
            var commandId = item.command;
            var id = '__git.tabbar.toolbar.' + commandId;
            var command = _this.commands.getCommand(commandId);
            _this.commands.registerCommand({ id: id, iconClass: command && command.iconClass }, {
                execute: function (widget) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return widget instanceof scm_widget_1.ScmWidget && (_a = _this.commands).executeCommand.apply(_a, __spread([commandId], args));
                },
                isEnabled: function (widget) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return widget instanceof scm_widget_1.ScmWidget && (_a = _this.commands).isEnabled.apply(_a, __spread([commandId], args));
                },
                isVisible: function (widget) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return widget instanceof scm_widget_1.ScmWidget && (_a = _this.commands).isVisible.apply(_a, __spread([commandId], args)) &&
                        !!_this.repositoryProvider.selectedRepository;
                }
            });
            item.command = id;
            registry.registerItem(item);
        };
        registerItem({
            id: GIT_COMMANDS.COMMIT.id,
            command: GIT_COMMANDS.COMMIT.id,
            tooltip: GIT_COMMANDS.COMMIT.label
        });
        registerItem({
            id: GIT_COMMANDS.REFRESH.id,
            command: GIT_COMMANDS.REFRESH.id,
            tooltip: GIT_COMMANDS.REFRESH.label
        });
        registerItem({
            id: GIT_COMMANDS.COMMIT_ADD_SIGN_OFF.id,
            command: GIT_COMMANDS.COMMIT_ADD_SIGN_OFF.id,
            tooltip: GIT_COMMANDS.COMMIT_ADD_SIGN_OFF.label
        });
        registerItem({
            id: GIT_COMMANDS.COMMIT_AMEND.id,
            command: GIT_COMMANDS.COMMIT_AMEND.id,
            tooltip: 'Commit (Amend)',
            group: '1_input'
        });
        registerItem({
            id: GIT_COMMANDS.COMMIT_SIGN_OFF.id,
            command: GIT_COMMANDS.COMMIT_SIGN_OFF.id,
            tooltip: 'Commit (Signed Off)',
            group: '1_input'
        });
        [GIT_COMMANDS.FETCH, GIT_COMMANDS.PULL_DEFAULT, GIT_COMMANDS.PULL, GIT_COMMANDS.PUSH_DEFAULT, GIT_COMMANDS.PUSH, GIT_COMMANDS.MERGE].forEach(function (command) {
            return registerItem({
                id: command.id,
                command: command.id,
                tooltip: command.label.slice('Git: '.length),
                group: '2_other'
            });
        });
        [
            GIT_COMMANDS.STASH, GIT_COMMANDS.APPLY_STASH,
            GIT_COMMANDS.APPLY_LATEST_STASH, GIT_COMMANDS.POP_STASH,
            GIT_COMMANDS.POP_LATEST_STASH, GIT_COMMANDS.DROP_STASH
        ].forEach(function (command) {
            return registerItem({
                id: command.id,
                command: command.id,
                tooltip: command.label,
                group: '3_other'
            });
        });
        registerItem({
            id: GIT_COMMANDS.STAGE_ALL.id,
            command: GIT_COMMANDS.STAGE_ALL.id,
            tooltip: 'Stage All Changes',
            group: '3_batch'
        });
        registerItem({
            id: GIT_COMMANDS.UNSTAGE_ALL.id,
            command: GIT_COMMANDS.UNSTAGE_ALL.id,
            tooltip: 'Unstage All Changes',
            group: '3_batch'
        });
        registerItem({
            id: GIT_COMMANDS.DISCARD_ALL.id,
            command: GIT_COMMANDS.DISCARD_ALL.id,
            tooltip: 'Discard All Changes',
            group: '3_batch'
        });
    };
    GitContribution.prototype.hasConflicts = function (changes) {
        return changes.some(function (c) { return c.status === common_1.GitFileStatus.Conflicted; });
    };
    GitContribution.prototype.allStaged = function (changes) {
        return !changes.some(function (c) { return !c.staged; });
    };
    GitContribution.prototype.openFile = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                options = this.getOpenFileOptions(widget);
                return [2 /*return*/, options && this.editorManager.open(options.uri, options.options)];
            });
        });
    };
    GitContribution.prototype.getOpenFileOptions = function (widget) {
        var ref = widget ? widget : this.editorManager.currentEditor;
        if (ref instanceof browser_2.EditorWidget && browser_1.DiffUris.isDiffUri(ref.editor.uri)) {
            var _a = __read(browser_1.DiffUris.decode(ref.editor.uri), 2), right = _a[1];
            var uri = right.withScheme('file');
            var selection = ref.editor.selection;
            return { uri: uri, options: { selection: selection, widgetOptions: { ref: ref } } };
        }
        return undefined;
    };
    GitContribution.prototype.openChanges = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var options, provider;
            return __generator(this, function (_a) {
                options = this.getOpenChangesOptions(widget);
                if (options) {
                    provider = this.repositoryProvider.selectedScmProvider;
                    return [2 /*return*/, provider && provider.openChange(options.change, options.options)];
                }
                return [2 /*return*/, undefined];
            });
        });
    };
    GitContribution.prototype.getOpenChangesOptions = function (widget) {
        var provider = this.repositoryProvider.selectedScmProvider;
        if (!provider) {
            return undefined;
        }
        var ref = widget ? widget : this.editorManager.currentEditor;
        if (ref instanceof browser_2.EditorWidget && !browser_1.DiffUris.isDiffUri(ref.editor.uri)) {
            var uri = ref.editor.uri;
            var change = provider.findChange(uri);
            if (change && provider.getUriToOpen(change).toString() !== uri.toString()) {
                var selection = ref.editor.selection;
                return { change: change, options: { selection: selection, widgetOptions: { ref: ref } } };
            }
        }
        return undefined;
    };
    GitContribution.prototype.updateStatusBar = function () {
        var scmProvider = this.repositoryProvider.selectedScmProvider;
        if (!scmProvider) {
            return;
        }
        var statusBarCommands = [];
        var checkoutCommand = this.getCheckoutStatusBarCommand();
        if (checkoutCommand) {
            statusBarCommands.push(checkoutCommand);
        }
        var syncCommand = this.getSyncStatusBarCommand();
        if (syncCommand) {
            statusBarCommands.push(syncCommand);
        }
        scmProvider.statusBarCommands = statusBarCommands;
    };
    GitContribution.prototype.getCheckoutStatusBarCommand = function () {
        var scmProvider = this.repositoryProvider.selectedScmProvider;
        if (!scmProvider) {
            return undefined;
        }
        var status = scmProvider.getStatus();
        if (!status) {
            return undefined;
        }
        var branch = status.branch ? status.branch : status.currentHead ? status.currentHead.substring(0, 8) : 'NO-HEAD';
        var changes = (scmProvider.unstagedChanges.length > 0 ? '*' : '')
            + (scmProvider.stagedChanges.length > 0 ? '+' : '')
            + (scmProvider.mergeChanges.length > 0 ? '!' : '');
        return {
            command: GIT_COMMANDS.CHECKOUT.id,
            title: "$(code-fork) " + branch + changes,
            tooltip: "" + branch + changes
        };
    };
    GitContribution.prototype.getSyncStatusBarCommand = function () {
        var status = this.repositoryTracker.selectedRepositoryStatus;
        if (!status || !status.branch) {
            return undefined;
        }
        if (this.syncService.isSyncing()) {
            return {
                title: '$(refresh~spin)',
                tooltip: 'Synchronizing Changes...'
            };
        }
        var upstreamBranch = status.upstreamBranch, aheadBehind = status.aheadBehind;
        if (upstreamBranch) {
            return {
                title: '$(refresh)' + (aheadBehind && (aheadBehind.ahead + aheadBehind.behind) > 0 ? " " + aheadBehind.behind + "\u2193 " + aheadBehind.ahead + "\u2191" : ''),
                command: GIT_COMMANDS.SYNC.id,
                tooltip: 'Synchronize Changes'
            };
        }
        return {
            title: '$(cloud-upload)',
            command: GIT_COMMANDS.PUBLISH.id,
            tooltip: 'Publish Changes'
        };
    };
    GitContribution.prototype.commit = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var scmRepository, message, amend, signOff, repository, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scmRepository = this.repositoryProvider.selectedScmRepository;
                        if (!scmRepository) {
                            return [2 /*return*/];
                        }
                        message = options.message || scmRepository.input.value;
                        if (!message.trim()) {
                            scmRepository.input.issue = {
                                type: 'error',
                                message: 'Please provide a commit message'
                            };
                            scmRepository.input.focus();
                            return [2 /*return*/];
                        }
                        if (!scmRepository.provider.stagedChanges.length) {
                            scmRepository.input.issue = {
                                type: 'error',
                                message: 'No changes added to commit'
                            };
                            scmRepository.input.focus();
                            return [2 /*return*/];
                        }
                        scmRepository.input.issue = undefined;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        amend = options.amend;
                        signOff = options.signOff || this.gitPreferences['git.alwaysSignOff'];
                        repository = scmRepository.provider.repository;
                        return [4 /*yield*/, this.git.commit(repository, message, { signOff: signOff, amend: amend })];
                    case 2:
                        _a.sent();
                        scmRepository.input.value = '';
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.gitErrorHandler.handleError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GitContribution.prototype.addSignOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scmRepository, repository, _a, username, email, signOff, value, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        scmRepository = this.repositoryProvider.selectedScmRepository;
                        if (!scmRepository) {
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        repository = scmRepository.provider.repository;
                        return [4 /*yield*/, Promise.all([
                                this.git.exec(repository, ['config', 'user.name']),
                                this.git.exec(repository, ['config', 'user.email'])
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [(_b.sent()).map(function (result) { return result.stdout.trim(); }), 2]), username = _a[0], email = _a[1];
                        signOff = "\n\nSigned-off-by: " + username + " <" + email + ">";
                        value = scmRepository.input.value;
                        if (value.endsWith(signOff)) {
                            scmRepository.input.value = value.substr(0, value.length - signOff.length);
                        }
                        else {
                            scmRepository.input.value = "" + value + signOff;
                        }
                        scmRepository.input.focus();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        scmRepository.input.issue = {
                            type: 'warning',
                            message: 'Make sure you configure your \'user.name\' and \'user.email\' in git.'
                        };
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * It should be aligned with https://code.visualstudio.com/api/references/theme-color#git-colors
     */
    GitContribution.prototype.registerColors = function (colors) {
        colors.register({
            'id': 'gitDecoration.addedResourceForeground',
            'description': 'Color for added resources.',
            'defaults': {
                'light': '#587c0c',
                'dark': '#81b88b',
                'hc': '#1b5225'
            }
        }, {
            'id': 'gitDecoration.modifiedResourceForeground',
            'description': 'Color for modified resources.',
            'defaults': {
                'light': '#895503',
                'dark': '#E2C08D',
                'hc': '#E2C08D'
            }
        }, {
            'id': 'gitDecoration.deletedResourceForeground',
            'description': 'Color for deleted resources.',
            'defaults': {
                'light': '#ad0707',
                'dark': '#c74e39',
                'hc': '#c74e39'
            }
        }, {
            'id': 'gitDecoration.untrackedResourceForeground',
            'description': 'Color for untracked resources.',
            'defaults': {
                'light': '#007100',
                'dark': '#73C991',
                'hc': '#73C991'
            }
        }, {
            'id': 'gitDecoration.conflictingResourceForeground',
            'description': 'Color for resources with conflicts.',
            'defaults': {
                'light': '#6c6cc4',
                'dark': '#6c6cc4',
                'hc': '#6c6cc4'
            }
        }, {
            'id': 'gitlens.gutterBackgroundColor',
            'description': 'Specifies the background color of the gutter blame annotations',
            'defaults': {
                'dark': '#FFFFFF13',
                'light': '#0000000C',
                'hc': '#FFFFFF13'
            }
        }, {
            'id': 'gitlens.gutterForegroundColor',
            'description': 'Specifies the foreground color of the gutter blame annotations',
            'defaults': {
                'dark': '#BEBEBE',
                'light': '#747474',
                'hc': '#BEBEBE'
            }
        }, {
            'id': 'gitlens.lineHighlightBackgroundColor',
            'description': 'Specifies the background color of the associated line highlights in blame annotations',
            'defaults': {
                'dark': '#00BCF233',
                'light': '#00BCF233',
                'hc': '#00BCF233'
            }
        });
    };
    GitContribution.GIT_CHECKOUT = 'git.checkout';
    GitContribution.GIT_SYNC_STATUS = 'git-sync-status';
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], GitContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(git_quick_open_service_1.GitQuickOpenService),
        __metadata("design:type", git_quick_open_service_1.GitQuickOpenService)
    ], GitContribution.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], GitContribution.prototype, "repositoryTracker", void 0);
    __decorate([
        inversify_1.inject(git_sync_service_1.GitSyncService),
        __metadata("design:type", git_sync_service_1.GitSyncService)
    ], GitContribution.prototype, "syncService", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], GitContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(git_repository_provider_1.GitRepositoryProvider),
        __metadata("design:type", git_repository_provider_1.GitRepositoryProvider)
    ], GitContribution.prototype, "repositoryProvider", void 0);
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], GitContribution.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_error_handler_1.GitErrorHandler),
        __metadata("design:type", git_error_handler_1.GitErrorHandler)
    ], GitContribution.prototype, "gitErrorHandler", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], GitContribution.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], GitContribution.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(git_preferences_1.GitPreferences),
        __metadata("design:type", Object)
    ], GitContribution.prototype, "gitPreferences", void 0);
    GitContribution = __decorate([
        inversify_1.injectable()
    ], GitContribution);
    return GitContribution;
}());
exports.GitContribution = GitContribution;
//# sourceMappingURL=git-contribution.js.map
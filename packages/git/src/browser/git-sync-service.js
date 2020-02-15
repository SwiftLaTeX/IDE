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
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var git_repository_tracker_1 = require("./git-repository-tracker");
var common_1 = require("../common");
var git_error_handler_1 = require("./git-error-handler");
var GitSyncService = /** @class */ (function () {
    function GitSyncService() {
        this.onDidChangeEmitter = new core_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.syncing = false;
    }
    GitSyncService.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    GitSyncService.prototype.isSyncing = function () {
        return this.syncing;
    };
    GitSyncService.prototype.setSyncing = function (syncing) {
        this.syncing = syncing;
        this.fireDidChange();
    };
    GitSyncService.prototype.canSync = function () {
        if (this.isSyncing()) {
            return false;
        }
        var status = this.repositoryTracker.selectedRepositoryStatus;
        return !!status && !!status.branch && !!status.upstreamBranch;
    };
    GitSyncService.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, status_1, method, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.repositoryTracker.selectedRepository;
                        if (!this.canSync() || !repository) {
                            return [2 /*return*/];
                        }
                        this.setSyncing(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, 11, 12]);
                        return [4 /*yield*/, this.git.fetch(repository)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.git.status(repository)];
                    case 3:
                        status_1 = _a.sent();
                        this.setSyncing(false);
                        return [4 /*yield*/, this.getSyncMethod(status_1)];
                    case 4:
                        method = _a.sent();
                        if (method === undefined) {
                            return [2 /*return*/];
                        }
                        this.setSyncing(true);
                        if (!(method === 'pull-push' || method === 'rebase-push')) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.git.pull(repository, {
                                rebase: method === 'rebase-push'
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.git.status(repository)];
                    case 6:
                        status_1 = _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!this.shouldPush(status_1)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.git.push(repository, {
                                force: method === 'force-push'
                            })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        error_1 = _a.sent();
                        this.gitErrorHandler.handleError(error_1);
                        return [3 /*break*/, 12];
                    case 11:
                        this.setSyncing(false);
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    GitSyncService.prototype.getSyncMethod = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var branch, upstreamBranch, methods, method, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!status.upstreamBranch || !status.branch) {
                            return [2 /*return*/, undefined];
                        }
                        branch = status.branch, upstreamBranch = status.upstreamBranch;
                        if (!this.shouldPull(status) && !this.shouldPush(status)) {
                            this.messageService.info(branch + " is already in sync with " + upstreamBranch);
                            return [2 /*return*/, undefined];
                        }
                        methods = [{
                                label: "Pull and push commits from and to '" + upstreamBranch + "'",
                                warning: "This action will pull and push commits from and to '" + upstreamBranch + "'.",
                                value: 'pull-push'
                            }, {
                                label: "Fetch, rebase and push commits from and to '" + upstreamBranch + "'",
                                warning: "This action will fetch, rebase and push commits from and to '" + upstreamBranch + "'.",
                                value: 'rebase-push'
                            }, {
                                label: "Force push commits to '" + upstreamBranch + "'",
                                warning: "This action will override commits in '" + upstreamBranch + "'.",
                                value: 'force-push'
                            }];
                        return [4 /*yield*/, this.quickPickService.show(methods, {
                                placeholder: 'Pick how changes should be synchronized:'
                            })];
                    case 1:
                        method = _b.sent();
                        _a = method;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.confirm('Synchronize Changes', methods.find(function (_a) {
                                var value = _a.value;
                                return value === method;
                            }).warning)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            return [2 /*return*/, method];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    GitSyncService.prototype.canPublish = function () {
        if (this.isSyncing()) {
            return false;
        }
        var status = this.repositoryTracker.selectedRepositoryStatus;
        return !!status && !!status.branch && !status.upstreamBranch;
    };
    GitSyncService.prototype.publish = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, status, localBranch, remote, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = this.repositoryTracker.selectedRepository;
                        status = this.repositoryTracker.selectedRepositoryStatus;
                        localBranch = status && status.branch;
                        if (!this.canPublish() || !repository || !localBranch) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getRemote(repository, localBranch)];
                    case 1:
                        remote = _b.sent();
                        _a = remote;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.confirm('Publish changes', "This action will push commits to '" + remote + "/" + localBranch + "' and track it as an upstream branch.")];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (!_a) return [3 /*break*/, 7];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.git.push(repository, {
                                remote: remote, localBranch: localBranch, setUpstream: true
                            })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        this.gitErrorHandler.handleError(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    GitSyncService.prototype.getRemote = function (repository, branch) {
        return __awaiter(this, void 0, void 0, function () {
            var remotes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.remote(repository)];
                    case 1:
                        remotes = _a.sent();
                        if (remotes.length === 0) {
                            this.messageService.warn('Your repository has no remotes configured to publish to.');
                        }
                        return [2 /*return*/, this.quickPickService.show(remotes, {
                                placeholder: "Pick a remote to publish the branch " + branch + " to:"
                            })];
                }
            });
        });
    };
    GitSyncService.prototype.shouldPush = function (status) {
        return status.aheadBehind ? status.aheadBehind.ahead > 0 : true;
    };
    GitSyncService.prototype.shouldPull = function (status) {
        return status.aheadBehind ? status.aheadBehind.behind > 0 : true;
    };
    GitSyncService.prototype.confirm = function (title, msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new browser_1.ConfirmDialog({ title: title, msg: msg, }).open()];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], GitSyncService.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], GitSyncService.prototype, "repositoryTracker", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], GitSyncService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(git_error_handler_1.GitErrorHandler),
        __metadata("design:type", git_error_handler_1.GitErrorHandler)
    ], GitSyncService.prototype, "gitErrorHandler", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickPickService),
        __metadata("design:type", Object)
    ], GitSyncService.prototype, "quickPickService", void 0);
    GitSyncService = __decorate([
        inversify_1.injectable()
    ], GitSyncService);
    return GitSyncService;
}());
exports.GitSyncService = GitSyncService;
//# sourceMappingURL=git-sync-service.js.map
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
var quick_open_model_1 = require("@theia/core/lib/common/quick-open-model");
var quick_open_service_1 = require("@theia/core/lib/browser/quick-open/quick-open-service");
var common_1 = require("../common");
var git_repository_provider_1 = require("./git-repository-provider");
var message_service_1 = require("@theia/core/lib/common/message-service");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var common_2 = require("@theia/filesystem/lib/common");
var git_error_handler_1 = require("./git-error-handler");
var progress_service_1 = require("@theia/core/lib/common/progress-service");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/core/lib/browser");
var GitAction;
(function (GitAction) {
    GitAction[GitAction["PULL"] = 0] = "PULL";
    GitAction[GitAction["PUSH"] = 1] = "PUSH";
})(GitAction = exports.GitAction || (exports.GitAction = {}));
/**
 * Service delegating into the `Quick Open Service`, so that the Git commands can be further refined.
 * For instance, the `remote` can be specified for `pull`, `push`, and `fetch`. And the branch can be
 * specified for `git merge`.
 */
var GitQuickOpenService = /** @class */ (function () {
    function GitQuickOpenService(git, repositoryProvider, quickOpenService, messageService, workspaceService, fileSystem) {
        var _this = this;
        this.git = git;
        this.repositoryProvider = repositoryProvider;
        this.quickOpenService = quickOpenService;
        this.messageService = messageService;
        this.workspaceService = workspaceService;
        this.fileSystem = fileSystem;
        this.buildDefaultProjectPath = this.doBuildDefaultProjectPath.bind(this);
        this.wrapWithProgress = function (fn) { return _this.doWrapWithProgress(fn); };
    }
    GitQuickOpenService.prototype.clone = function (url, folder, branch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var roots, repo, _a, _b, _c, _d, gitCloneLocalTargetFolder, _e, git, buildDefaultProjectPath, gitErrorHandler, wrapWithProgress, cloneRepoModel;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    if (!!folder) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.workspaceService.roots];
                                case 1:
                                    roots = _f.sent();
                                    folder = roots[0].uri;
                                    _f.label = 2;
                                case 2:
                                    if (!url) return [3 /*break*/, 5];
                                    _b = (_a = this.git).clone;
                                    _c = [url];
                                    _d = {};
                                    return [4 /*yield*/, this.buildDefaultProjectPath(folder, url)];
                                case 3: return [4 /*yield*/, _b.apply(_a, _c.concat([(_d.localUri = _f.sent(),
                                            _d.branch = branch,
                                            _d)]))];
                                case 4:
                                    repo = _f.sent();
                                    return [2 /*return*/, repo.localUri];
                                case 5:
                                    gitCloneLocalTargetFolder = folder;
                                    _e = this, git = _e.git, buildDefaultProjectPath = _e.buildDefaultProjectPath, gitErrorHandler = _e.gitErrorHandler, wrapWithProgress = _e.wrapWithProgress;
                                    cloneRepoModel = {
                                        onType: function (lookFor, acceptor) {
                                            var _this = this;
                                            var dynamicItems = [];
                                            var suffix = "Press 'Enter' to confirm or 'Escape' to cancel.";
                                            if (lookFor === undefined || lookFor.length === 0) {
                                                dynamicItems.push(new SingleStringInputOpenItem("Please provide a Git repository location. " + suffix, function () { }, function () { return false; }));
                                            }
                                            else {
                                                dynamicItems.push(new SingleStringInputOpenItem("Clone the Git repository: " + lookFor + ". " + suffix, wrapWithProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var _a, _b, _c, _d, error_1;
                                                    return __generator(this, function (_e) {
                                                        switch (_e.label) {
                                                            case 0:
                                                                _e.trys.push([0, 3, , 4]);
                                                                _b = (_a = git).clone;
                                                                _c = [lookFor];
                                                                _d = {};
                                                                return [4 /*yield*/, buildDefaultProjectPath(gitCloneLocalTargetFolder, lookFor)];
                                                            case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([(_d.localUri = _e.sent(), _d)]))];
                                                            case 2:
                                                                _e.sent();
                                                                return [3 /*break*/, 4];
                                                            case 3:
                                                                error_1 = _e.sent();
                                                                gitErrorHandler.handleError(error_1);
                                                                return [3 /*break*/, 4];
                                                            case 4: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })));
                                            }
                                            acceptor(dynamicItems);
                                        }
                                    };
                                    this.quickOpenService.open(cloneRepoModel, this.getOptions('Git repository location:', false));
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.doBuildDefaultProjectPath = function (folderPath, gitURI) {
        return __awaiter(this, void 0, void 0, function () {
            var uriSplitted, projectPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.exists(folderPath)];
                    case 1:
                        if (!(_a.sent())) {
                            // user specifies its own project path, doesn't want us to guess it
                            return [2 /*return*/, folderPath];
                        }
                        uriSplitted = gitURI.split('/');
                        projectPath = folderPath + '/' + (uriSplitted.pop() || uriSplitted.pop());
                        if (projectPath.endsWith('.git')) {
                            projectPath = projectPath.substring(0, projectPath.length - '.git'.length);
                        }
                        return [2 /*return*/, projectPath];
                }
            });
        });
    };
    GitQuickOpenService.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var remotes, execute, items;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getRemotes()];
                                case 1:
                                    remotes = _a.sent();
                                    execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_2;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, this.git.fetch(repository, { remote: item.getLabel() })];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    error_2 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_2);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    items = remotes.map(function (remote) {
                                        var toLabel = function () { return remote.name; };
                                        var toDescription = function () { return remote.fetch; };
                                        return new GitQuickOpenItem(remote.name, _this.wrapWithProgress(execute), toLabel, toDescription);
                                    });
                                    this.open(items, 'Pick a remote to fetch from:');
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.performDefaultGitAction = function (action) {
        return __awaiter(this, void 0, void 0, function () {
            var remote, defaultRemote, repository;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRemotes()];
                    case 1:
                        remote = _a.sent();
                        defaultRemote = remote[0].name;
                        repository = this.getRepository();
                        if (!repository) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                                var error_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 5, , 6]);
                                            if (!(action === GitAction.PULL)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.git.pull(repository, { remote: defaultRemote })];
                                        case 1:
                                            _a.sent();
                                            console.log("Git Pull: successfully completed from " + defaultRemote + ".");
                                            return [3 /*break*/, 4];
                                        case 2:
                                            if (!(action === GitAction.PUSH)) return [3 /*break*/, 4];
                                            return [4 /*yield*/, this.git.push(repository, { remote: defaultRemote })];
                                        case 3:
                                            _a.sent();
                                            console.log("Git Push: successfully completed to " + defaultRemote + ".");
                                            _a.label = 4;
                                        case 4: return [3 /*break*/, 6];
                                        case 5:
                                            error_3 = _a.sent();
                                            this.gitErrorHandler.handleError(error_3);
                                            return [3 /*break*/, 6];
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    GitQuickOpenService.prototype.push = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, remotes, currentBranch, execute, items, branchName;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([this.getRemotes(), this.getCurrentBranch()])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 2]), remotes = _a[0], currentBranch = _a[1];
                                    execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_4;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, this.git.push(repository, { remote: item.getLabel() })];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    error_4 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_4);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    items = remotes.map(function (remote) {
                                        var toLabel = function () { return remote.name; };
                                        var toDescription = function () { return remote.push; };
                                        return new GitQuickOpenItem(remote.name, _this.wrapWithProgress(execute), toLabel, toDescription);
                                    });
                                    branchName = currentBranch ? "'" + currentBranch.name + "' " : '';
                                    this.open(items, "Pick a remote to push the currently active branch " + branchName + "to:");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.pull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var remotes, defaultRemote, executeRemote, remoteItems;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getRemotes()];
                                case 1:
                                    remotes = _a.sent();
                                    defaultRemote = remotes[0].name;
                                    executeRemote = function (remoteItem) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_5, branches, executeBranch_1, toLabel_1, branchItems;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!(remoteItem.ref.name === defaultRemote)) return [3 /*break*/, 5];
                                                    _a.label = 1;
                                                case 1:
                                                    _a.trys.push([1, 3, , 4]);
                                                    return [4 /*yield*/, this.git.pull(repository, { remote: remoteItem.getLabel() })];
                                                case 2:
                                                    _a.sent();
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    error_5 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_5);
                                                    return [3 /*break*/, 4];
                                                case 4: return [3 /*break*/, 7];
                                                case 5: return [4 /*yield*/, this.getBranches()];
                                                case 6:
                                                    branches = _a.sent();
                                                    executeBranch_1 = function (branchItem) { return __awaiter(_this, void 0, void 0, function () {
                                                        var error_6;
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    _a.trys.push([0, 2, , 3]);
                                                                    return [4 /*yield*/, this.git.pull(repository, { remote: remoteItem.ref.name, branch: branchItem.ref.nameWithoutRemote })];
                                                                case 1:
                                                                    _a.sent();
                                                                    return [3 /*break*/, 3];
                                                                case 2:
                                                                    error_6 = _a.sent();
                                                                    this.gitErrorHandler.handleError(error_6);
                                                                    return [3 /*break*/, 3];
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    }); };
                                                    toLabel_1 = function (branchItem) { return branchItem.ref.name; };
                                                    branchItems = branches
                                                        .filter(function (branch) { return branch.type === common_1.BranchType.Remote; })
                                                        .filter(function (branch) { return (branch.name || '').startsWith(remoteItem.ref + "/"); })
                                                        .map(function (branch) { return new GitQuickOpenItem(branch, _this.wrapWithProgress(executeBranch_1), toLabel_1); });
                                                    this.open(branchItems, 'Select the branch to pull the changes from:');
                                                    _a.label = 7;
                                                case 7: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    remoteItems = remotes.map(function (remote) {
                                        var toLabel = function () { return remote.name; };
                                        var toDescription = function () { return remote.fetch; };
                                        return new GitQuickOpenItem(remote, _this.wrapWithProgress(executeRemote), toLabel, toDescription);
                                    });
                                    this.open(remoteItems, 'Pick a remote to pull the branch from:');
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.merge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, branches, currentBranch, execute, toLabel, items, branchName;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([this.getBranches(), this.getCurrentBranch()])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 2]), branches = _a[0], currentBranch = _a[1];
                                    execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_7;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, this.git.merge(repository, { branch: item.getLabel() })];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    error_7 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_7);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    toLabel = function (item) { return item.ref.name; };
                                    items = branches.map(function (branch) { return new GitQuickOpenItem(branch, _this.wrapWithProgress(execute), toLabel); });
                                    branchName = currentBranch ? "'" + currentBranch.name + "' " : '';
                                    this.open(items, "Pick a branch to merge into the currently active " + branchName + "branch:");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.checkout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, branches, currentBranch, index, switchBranch, toLabel, toDescription, items, createBranchItem;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([this.getBranches(), this.getCurrentBranch()])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 2]), branches = _a[0], currentBranch = _a[1];
                                    if (currentBranch) {
                                        index = branches.findIndex(function (branch) { return branch && branch.name === currentBranch.name; });
                                        branches.splice(index, 1);
                                    }
                                    switchBranch = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_8;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, this.git.checkout(repository, { branch: item.ref.nameWithoutRemote })];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    error_8 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_8);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    toLabel = function (item) {
                                        var branch = item.ref;
                                        return branch.type === common_1.BranchType.Remote ? branch.name : branch.nameWithoutRemote;
                                    };
                                    toDescription = function (item) {
                                        var branch = item.ref;
                                        // We have only the long SHA1, but getting the first seven characters is the same.
                                        var tip = branch.tip.sha.length > 8 ? " " + branch.tip.sha.slice(0, 7) : '';
                                        return branch.type === common_1.BranchType.Remote ? "Remote branch at" + tip : "" + tip;
                                    };
                                    items = branches.map(function (branch) { return new GitQuickOpenItem(branch, _this.wrapWithProgress(switchBranch), toLabel, toDescription); });
                                    createBranchItem = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var _a, git, gitErrorHandler, wrapWithProgress, createBranchModel;
                                        return __generator(this, function (_b) {
                                            _a = this, git = _a.git, gitErrorHandler = _a.gitErrorHandler, wrapWithProgress = _a.wrapWithProgress;
                                            createBranchModel = {
                                                onType: function (lookFor, acceptor) {
                                                    var _this = this;
                                                    var dynamicItems = [];
                                                    var suffix = "Press 'Enter' to confirm or 'Escape' to cancel.";
                                                    if (lookFor === undefined || lookFor.length === 0) {
                                                        dynamicItems.push(new SingleStringInputOpenItem("Please provide a branch name. " + suffix, function () { }, function () { return false; }));
                                                    }
                                                    else {
                                                        dynamicItems.push(new SingleStringInputOpenItem("Create a new local branch with name: " + lookFor + ". " + suffix, wrapWithProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                                                            var error_9;
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        _a.trys.push([0, 3, , 4]);
                                                                        return [4 /*yield*/, git.branch(repository, { toCreate: lookFor })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [4 /*yield*/, git.checkout(repository, { branch: lookFor })];
                                                                    case 2:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 4];
                                                                    case 3:
                                                                        error_9 = _a.sent();
                                                                        gitErrorHandler.handleError(error_9);
                                                                        return [3 /*break*/, 4];
                                                                    case 4: return [2 /*return*/];
                                                                }
                                                            });
                                                        }); })));
                                                    }
                                                    acceptor(dynamicItems);
                                                }
                                            };
                                            this.quickOpenService.open(createBranchModel, this.getOptions('The name of the branch:', false));
                                            return [2 /*return*/];
                                        });
                                    }); };
                                    items.unshift(new SingleStringInputOpenItem('Create new branch...', this.wrapWithProgress(createBranchItem), function (mode) { return mode === quick_open_model_1.QuickOpenMode.OPEN; }, function () { return false; }));
                                    this.open(items, 'Select a ref to checkout or create a new local branch:');
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.chooseTagsAndBranches = function (execFunc, repository) {
        if (repository === void 0) { repository = this.getRepository(); }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, branches, tags, currentBranch, execute, toLabel, branchItems, branchName, tagItems;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([this.getBranches(repository), this.getTags(repository), this.getCurrentBranch(repository)])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 3]), branches = _a[0], tags = _a[1], currentBranch = _a[2];
                                    execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            execFunc(item.ref.name, currentBranch ? currentBranch.name : '');
                                            return [2 /*return*/];
                                        });
                                    }); };
                                    toLabel = function (item) { return item.ref.name; };
                                    branchItems = branches.map(function (branch) { return new GitQuickOpenItem(branch, _this.wrapWithProgress(execute), toLabel); });
                                    branchName = currentBranch ? "'" + currentBranch.name + "' " : '';
                                    tagItems = tags.map(function (tag) { return new GitQuickOpenItem(tag, execute, toLabel); });
                                    this.open(__spread(branchItems, tagItems), "Pick a branch or tag to compare with the currently active " + branchName + " branch:");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.commitMessageForAmend = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    throw new Error('No repositories were selected.');
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var lastMessage, message, result;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.git.exec(repository, ['log', '--format=%B', '-n', '1'])];
                                case 1:
                                    lastMessage = (_a.sent()).stdout.trim();
                                    if (lastMessage.length === 0) {
                                        throw new Error("Repository " + repository.localUri + " is not yet initialized.");
                                    }
                                    message = lastMessage.replace(/[\r\n]+/g, ' ');
                                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            var createEditCommitMessageModel = {
                                                onType: function (lookFor, acceptor) {
                                                    var dynamicItems = [];
                                                    if (!lookFor) {
                                                        var description_1 = "To reuse the last commit message, press 'Enter' or 'Escape' to cancel.";
                                                        dynamicItems.push(new GitQuickOpenItem(description_1, function () { return resolve(lastMessage); }, function () { return description_1; }));
                                                    }
                                                    else {
                                                        dynamicItems.push(new GitQuickOpenItem("Rewrite previous commit message. Press 'Enter' to confirm or 'Escape' to cancel.", function (item) { return resolve(lookFor); }));
                                                    }
                                                    acceptor(dynamicItems);
                                                },
                                            };
                                            var onClose = function (canceled) {
                                                if (canceled) {
                                                    reject(new Error('User abort.'));
                                                }
                                            };
                                            _this.quickOpenService.open(createEditCommitMessageModel, _this.getOptions(message, false, onClose));
                                        })];
                                case 2:
                                    result = _a.sent();
                                    return [2 /*return*/, result];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.stash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var doStash, quickOpenModel;
                        var _this = this;
                        return __generator(this, function (_a) {
                            doStash = this.wrapWithProgress(function (message) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.git.stash(repository, { message: message });
                                    return [2 /*return*/];
                                });
                            }); });
                            quickOpenModel = {
                                onType: function (lookFor, acceptor) {
                                    var dynamicItems = [];
                                    var suffix = "Press 'Enter' to confirm or 'Escape' to cancel.";
                                    if (lookFor === undefined || lookFor.length === 0) {
                                        dynamicItems.push(new SingleStringInputOpenItem("Stash changes. " + suffix, function () { return doStash(lookFor); }));
                                    }
                                    else {
                                        dynamicItems.push(new SingleStringInputOpenItem("Stash changes with message: " + lookFor + ". " + suffix, function () { return doStash(lookFor); }));
                                    }
                                    acceptor(dynamicItems);
                                }
                            };
                            this.quickOpenService.open(quickOpenModel, this.getOptions('Stash message', false));
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.doStashAction = function (action, text, getMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var list, quickOpenItems;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.git.stash(repository, { action: 'list' })];
                                case 1:
                                    list = _a.sent();
                                    if (list) {
                                        quickOpenItems = list.map(function (stash) { return new GitQuickOpenItem(stash, _this.wrapWithProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, error_10;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        _c.trys.push([0, 4, , 5]);
                                                        return [4 /*yield*/, this.git.stash(repository, {
                                                                action: action,
                                                                id: stash.id
                                                            })];
                                                    case 1:
                                                        _c.sent();
                                                        if (!getMessage) return [3 /*break*/, 3];
                                                        _b = (_a = this.messageService).info;
                                                        return [4 /*yield*/, getMessage()];
                                                    case 2:
                                                        _b.apply(_a, [_c.sent()]);
                                                        _c.label = 3;
                                                    case 3: return [3 /*break*/, 5];
                                                    case 4:
                                                        error_10 = _c.sent();
                                                        this.gitErrorHandler.handleError(error_10);
                                                        return [3 /*break*/, 5];
                                                    case 5: return [2 /*return*/];
                                                }
                                            });
                                        }); }), function () { return stash.message; }); });
                                        this.open(quickOpenItems, text);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.applyStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.doStashAction('apply', 'Select a stash to \'apply\'.');
                return [2 /*return*/];
            });
        });
    };
    GitQuickOpenService.prototype.popStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.doStashAction('pop', 'Select a stash to \'pop\'.');
                return [2 /*return*/];
            });
        });
    };
    GitQuickOpenService.prototype.dropStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                this.doStashAction('drop', 'Select a stash entry to remove it from the list of stash entries.', function () { return __awaiter(_this, void 0, void 0, function () {
                    var list, listString;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.git.stash(repository, { action: 'list' })];
                            case 1:
                                list = _a.sent();
                                listString = '';
                                list.forEach(function (stashEntry) {
                                    listString += stashEntry.message + '\n';
                                });
                                return [2 /*return*/, "Stash successfully removed.\n                There " + (list.length === 1 ? 'is' : 'are') + " " + (list.length || 'no') + " more entry in stash list.\n                \n" + listString];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    GitQuickOpenService.prototype.applyLatestStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_11;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.git.stash(repository, {
                                            action: 'apply'
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_11 = _a.sent();
                                    this.gitErrorHandler.handleError(error_11);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.popLatestStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_12;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.git.stash(repository, {
                                            action: 'pop'
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_12 = _a.sent();
                                    this.gitErrorHandler.handleError(error_12);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.initRepository = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wsRoots, placeholder, items, rootUri;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        wsRoots = _a.sent();
                        if (wsRoots && wsRoots.length > 1) {
                            placeholder = 'Choose workspace root to initialize git repo in';
                            items = wsRoots.map(function (root) { return _this.toRepositoryPathQuickOpenItem(root); });
                            this.open(items, placeholder);
                        }
                        else {
                            rootUri = new uri_1.default(wsRoots[0].uri);
                            this.doInitRepository(rootUri.toString());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GitQuickOpenService.prototype.doInitRepository = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, this.git.exec({ localUri: uri }, ['init'])];
                }); }); });
                return [2 /*return*/];
            });
        });
    };
    GitQuickOpenService.prototype.toRepositoryPathQuickOpenItem = function (root) {
        var _this = this;
        var rootUri = new uri_1.default(root.uri);
        var toLabel = function (item) { return _this.labelProvider.getName(item.ref); };
        var toDescription = function (item) { return _this.labelProvider.getLongName(item.ref.parent); };
        var execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
            var wsRoot;
            return __generator(this, function (_a) {
                wsRoot = item.ref.toString();
                this.doInitRepository(wsRoot);
                return [2 /*return*/];
            });
        }); };
        return new GitQuickOpenItem(rootUri, execute, toLabel, toDescription);
    };
    GitQuickOpenService.prototype.open = function (items, placeholder) {
        this.quickOpenService.open(this.getModel(Array.isArray(items) ? items : [items]), this.getOptions(placeholder));
    };
    GitQuickOpenService.prototype.getOptions = function (placeholder, fuzzyMatchLabel, onClose) {
        if (fuzzyMatchLabel === void 0) { fuzzyMatchLabel = true; }
        if (onClose === void 0) { onClose = function () { }; }
        return quick_open_service_1.QuickOpenOptions.resolve({
            placeholder: placeholder,
            fuzzyMatchLabel: fuzzyMatchLabel,
            fuzzySort: false,
            onClose: onClose
        });
    };
    GitQuickOpenService.prototype.getModel = function (items) {
        return {
            onType: function (lookFor, acceptor) {
                acceptor(Array.isArray(items) ? items : [items]);
            }
        };
    };
    GitQuickOpenService.prototype.getRepository = function () {
        return this.repositoryProvider.selectedRepository;
    };
    GitQuickOpenService.prototype.getRemotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_13;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.git.remote(repository, { verbose: true })];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2:
                                    error_13 = _a.sent();
                                    this.gitErrorHandler.handleError(error_13);
                                    return [2 /*return*/, []];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.getTags = function (repository) {
        if (repository === void 0) { repository = this.getRepository(); }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.git.exec(repository, ['tag', '--sort=-creatordate'])];
                                case 1:
                                    result = _a.sent();
                                    return [2 /*return*/, result.stdout !== '' ? result.stdout.trim().split('\n').map(function (tag) { return ({ name: tag }); }) : []];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.getBranches = function (repository) {
        if (repository === void 0) { repository = this.getRepository(); }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, local, remote, error_14;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, Promise.all([
                                            this.git.branch(repository, { type: 'local' }),
                                            this.git.branch(repository, { type: 'remote' })
                                        ])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 2]), local = _a[0], remote = _a[1];
                                    return [2 /*return*/, __spread(local, remote)];
                                case 2:
                                    error_14 = _b.sent();
                                    this.gitErrorHandler.handleError(error_14);
                                    return [2 /*return*/, []];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.getCurrentBranch = function (repository) {
        if (repository === void 0) { repository = this.getRepository(); }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_15;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.git.branch(repository, { type: 'current' })];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2:
                                    error_15 = _a.sent();
                                    this.gitErrorHandler.handleError(error_15);
                                    return [2 /*return*/, undefined];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.withProgress = function (fn) {
        return this.progressService.withProgress('', 'scm', fn);
    };
    GitQuickOpenService.prototype.doWrapWithProgress = function (fn) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.withProgress(function () { return fn.apply(void 0, __spread(args)); });
        };
    };
    __decorate([
        inversify_1.inject(git_error_handler_1.GitErrorHandler),
        __metadata("design:type", git_error_handler_1.GitErrorHandler)
    ], GitQuickOpenService.prototype, "gitErrorHandler", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], GitQuickOpenService.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], GitQuickOpenService.prototype, "labelProvider", void 0);
    GitQuickOpenService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.Git)),
        __param(1, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __param(2, inversify_1.inject(quick_open_service_1.QuickOpenService)),
        __param(3, inversify_1.inject(message_service_1.MessageService)),
        __param(4, inversify_1.inject(workspace_service_1.WorkspaceService)),
        __param(5, inversify_1.inject(common_2.FileSystem)),
        __metadata("design:paramtypes", [Object, git_repository_provider_1.GitRepositoryProvider,
            quick_open_service_1.QuickOpenService,
            message_service_1.MessageService,
            workspace_service_1.WorkspaceService, Object])
    ], GitQuickOpenService);
    return GitQuickOpenService;
}());
exports.GitQuickOpenService = GitQuickOpenService;
/**
 * Git specific quick open item that wraps a branch a remote name or something else.
 */
var GitQuickOpenItem = /** @class */ (function (_super) {
    __extends(GitQuickOpenItem, _super);
    function GitQuickOpenItem(ref, execute, toLabel, toDescription) {
        if (toLabel === void 0) { toLabel = function (item) { return "" + ref; }; }
        if (toDescription === void 0) { toDescription = function (item) { return undefined; }; }
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.execute = execute;
        _this.toLabel = toLabel;
        _this.toDescription = toDescription;
        return _this;
    }
    GitQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.execute(this);
        return true;
    };
    GitQuickOpenItem.prototype.getLabel = function () {
        return this.toLabel(this);
    };
    GitQuickOpenItem.prototype.getDescription = function () {
        return this.toDescription(this);
    };
    return GitQuickOpenItem;
}(quick_open_model_1.QuickOpenItem));
var SingleStringInputOpenItem = /** @class */ (function (_super) {
    __extends(SingleStringInputOpenItem, _super);
    function SingleStringInputOpenItem(label, execute, canRun, canClose) {
        if (execute === void 0) { execute = function () { }; }
        if (canRun === void 0) { canRun = function (mode) { return mode === quick_open_model_1.QuickOpenMode.OPEN; }; }
        if (canClose === void 0) { canClose = function (mode) { return true; }; }
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.execute = execute;
        _this.canRun = canRun;
        _this.canClose = canClose;
        return _this;
    }
    SingleStringInputOpenItem.prototype.getLabel = function () {
        return this.label;
    };
    SingleStringInputOpenItem.prototype.run = function (mode) {
        if (!this.canRun(mode)) {
            return false;
        }
        this.execute(this);
        return this.canClose(mode);
    };
    return SingleStringInputOpenItem;
}(quick_open_model_1.QuickOpenItem));
//# sourceMappingURL=git-quick-open-service.js.map
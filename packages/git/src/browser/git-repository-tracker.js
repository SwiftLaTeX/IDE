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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("../common");
var core_1 = require("@theia/core");
var git_repository_provider_1 = require("./git-repository-provider");
var git_watcher_1 = require("../common/git-watcher");
var uri_1 = require("@theia/core/lib/common/uri");
var debounce = require("lodash.debounce");
/**
 * The repository tracker watches the selected repository for status changes. It provides a convenient way to listen on status updates.
 */
var GitRepositoryTracker = /** @class */ (function () {
    function GitRepositoryTracker(git, repositoryProvider, gitWatcher) {
        var _this = this;
        this.git = git;
        this.repositoryProvider = repositoryProvider;
        this.gitWatcher = gitWatcher;
        this.toDispose = new core_1.DisposableCollection();
        this.onGitEventEmitter = new core_1.Emitter();
        this.updateStatus = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenSource, token, source, status_1, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.toDispose.dispose();
                        tokenSource = new core_1.CancellationTokenSource();
                        this.toDispose.push(core_1.Disposable.create(function () { return tokenSource.cancel(); }));
                        token = tokenSource.token;
                        source = this.selectedRepository;
                        if (!source) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.git.status(source)];
                    case 1:
                        status_1 = _c.sent();
                        this.setStatus({ source: source, status: status_1 }, token);
                        this.toDispose.push(this.gitWatcher.onGitEvent(function (event) {
                            if (event.source.localUri === source.localUri) {
                                _this.setStatus(event, token);
                            }
                        }));
                        _b = (_a = this.toDispose).push;
                        return [4 /*yield*/, this.gitWatcher.watchGitChanges(source)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        this.setStatus(undefined, token);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); }, 50);
    }
    GitRepositoryTracker.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.updateStatus();
                this.repositoryProvider.onDidChangeRepository(function () { return _this.updateStatus(); });
                return [2 /*return*/];
            });
        });
    };
    GitRepositoryTracker.prototype.setStatus = function (event, token) {
        var status = event && event.status;
        var scmProvider = this.repositoryProvider.selectedScmProvider;
        if (scmProvider) {
            scmProvider.setStatus(status);
        }
        this.workingDirectoryStatus = status;
        this.onGitEventEmitter.fire(event);
    };
    Object.defineProperty(GitRepositoryTracker.prototype, "selectedRepository", {
        /**
         * Returns the selected repository, or `undefined` if no repositories are available.
         */
        get: function () {
            return this.repositoryProvider.selectedRepository;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryTracker.prototype, "allRepositories", {
        /**
         * Returns all known repositories.
         */
        get: function () {
            return this.repositoryProvider.allRepositories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryTracker.prototype, "selectedRepositoryStatus", {
        /**
         * Returns the last known status of the selected respository, or `undefined` if no repositories are available.
         */
        get: function () {
            return this.workingDirectoryStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryTracker.prototype, "onDidChangeRepository", {
        /**
         * Emits when the selected repository has changed.
         */
        get: function () {
            return this.repositoryProvider.onDidChangeRepository;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryTracker.prototype, "onGitEvent", {
        /**
         * Emits when status has changed in the selected repository.
         */
        get: function () {
            return this.onGitEventEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    GitRepositoryTracker.prototype.getPath = function (uri) {
        var repositoryUri = this.repositoryUri;
        var relativePath = repositoryUri && common_1.Repository.relativePath(repositoryUri, uri);
        return relativePath && relativePath.toString();
    };
    GitRepositoryTracker.prototype.getUri = function (path) {
        var repositoryUri = this.repositoryUri;
        return repositoryUri && repositoryUri.resolve(path);
    };
    Object.defineProperty(GitRepositoryTracker.prototype, "repositoryUri", {
        get: function () {
            var repository = this.selectedRepository;
            return repository && new uri_1.default(repository.localUri);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GitRepositoryTracker.prototype, "init", null);
    GitRepositoryTracker = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.Git)),
        __param(1, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __param(2, inversify_1.inject(git_watcher_1.GitWatcher)),
        __metadata("design:paramtypes", [Object, git_repository_provider_1.GitRepositoryProvider,
            git_watcher_1.GitWatcher])
    ], GitRepositoryTracker);
    return GitRepositoryTracker;
}());
exports.GitRepositoryTracker = GitRepositoryTracker;
//# sourceMappingURL=git-repository-tracker.js.map
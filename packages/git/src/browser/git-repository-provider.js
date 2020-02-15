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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var debounce = require("lodash.debounce");
var inversify_1 = require("inversify");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var common_1 = require("@theia/filesystem/lib/common");
var event_1 = require("@theia/core/lib/common/event");
var storage_service_1 = require("@theia/core/lib/browser/storage-service");
var uri_1 = require("@theia/core/lib/common/uri");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var common_2 = require("../common");
var git_commit_message_validator_1 = require("./git-commit-message-validator");
var git_scm_provider_1 = require("./git-scm-provider");
var scm_service_1 = require("@theia/scm/lib/browser/scm-service");
var GitRepositoryProvider = /** @class */ (function () {
    function GitRepositoryProvider(git, workspaceService, watcher, fileSystem, scmService, storageService) {
        var _this = this;
        this.git = git;
        this.workspaceService = workspaceService;
        this.watcher = watcher;
        this.fileSystem = fileSystem;
        this.scmService = scmService;
        this.storageService = storageService;
        this.onDidChangeRepositoryEmitter = new event_1.Emitter();
        this.selectedRepoStorageKey = 'theia-git-selected-repository';
        this.allRepoStorageKey = 'theia-git-all-repositories';
        this.lazyRefresh = debounce(function () { return _this.refresh(); }, 1000);
        this.initialize();
    }
    GitRepositoryProvider.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, selectedRepository, allRepositories;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.storageService.getData(this.selectedRepoStorageKey),
                            this.storageService.getData(this.allRepoStorageKey)
                        ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), selectedRepository = _a[0], allRepositories = _a[1];
                        this.scmService.onDidChangeSelectedRepository(function (scmRepository) { return _this.fireDidChangeRepository(_this.toGitRepository(scmRepository)); });
                        if (!allRepositories) return [3 /*break*/, 2];
                        this.updateRepositories(allRepositories);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.refresh({ maxCount: 1 })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        this.selectedRepository = selectedRepository;
                        return [4 /*yield*/, this.refresh()];
                    case 5:
                        _b.sent();
                        this.watcher.onFilesChanged(function (_changedFiles) { return _this.lazyRefresh(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(GitRepositoryProvider.prototype, "selectedRepository", {
        /**
         * Returns with the previously selected repository, or if no repository has been selected yet,
         * it picks the first available repository from the backend and sets it as the selected one and returns with that.
         * If no repositories are available, returns `undefined`.
         */
        get: function () {
            return this.toGitRepository(this.scmService.selectedRepository);
        },
        /**
         * Sets the selected repository, but do nothing if the given repository is not a Git repository
         * registered with the SCM service.  We must be sure not to clear the selection if the selected
         * repository is managed by an SCM other than Git.
         */
        set: function (repository) {
            var scmRepository = this.toScmRepository(repository);
            if (scmRepository) {
                this.scmService.selectedRepository = scmRepository;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryProvider.prototype, "selectedScmRepository", {
        get: function () {
            return this.toGitScmRepository(this.scmService.selectedRepository);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryProvider.prototype, "selectedScmProvider", {
        get: function () {
            return this.toGitScmProvider(this.scmService.selectedRepository);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryProvider.prototype, "onDidChangeRepository", {
        get: function () {
            return this.onDidChangeRepositoryEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    GitRepositoryProvider.prototype.fireDidChangeRepository = function (repository) {
        this.storageService.setData(this.selectedRepoStorageKey, repository);
        this.onDidChangeRepositoryEmitter.fire(repository);
    };
    Object.defineProperty(GitRepositoryProvider.prototype, "allRepositories", {
        /**
         * Returns with all know repositories.
         */
        get: function () {
            var e_1, _a;
            var repositories = [];
            try {
                for (var _b = __values(this.scmService.repositories), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var scmRepository = _c.value;
                    var repository = this.toGitRepository(scmRepository);
                    if (repository) {
                        repositories.push(repository);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return repositories;
        },
        enumerable: true,
        configurable: true
    });
    GitRepositoryProvider.prototype.findRepository = function (uri) {
        var reposSorted = this.allRepositories.sort(common_2.Repository.sortComparator);
        return reposSorted.find(function (repo) { return new uri_1.default(repo.localUri).isEqualOrParent(uri); });
    };
    GitRepositoryProvider.prototype.findRepositoryOrSelected = function (arg) {
        var uri;
        if (arg) {
            if (arg instanceof uri_1.default || typeof arg === 'string') {
                uri = arg;
            }
            else if (typeof arg === 'object' && 'uri' in arg && arg.uri) {
                uri = arg.uri;
            }
            if (uri) {
                if (typeof uri === 'string') {
                    uri = new uri_1.default(uri);
                }
                return this.findRepository(uri);
            }
        }
        return this.selectedRepository;
    };
    GitRepositoryProvider.prototype.refresh = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var repositories, refreshing, _a, _b, root, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        repositories = [];
                        refreshing = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 2:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 5];
                        root = _b.value;
                        refreshing.push(this.git.repositories(root.uri, __assign({}, options)).then(function (result) { repositories.push.apply(repositories, __spread(result)); }, function () { }));
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [4 /*yield*/, Promise.all(refreshing)];
                    case 9:
                        _d.sent();
                        this.updateRepositories(repositories);
                        return [2 /*return*/];
                }
            });
        });
    };
    GitRepositoryProvider.prototype.updateRepositories = function (repositories) {
        var e_3, _a, e_4, _b, e_5, _c;
        this.storageService.setData(this.allRepoStorageKey, repositories);
        var registered = new Set();
        var toUnregister = new Map();
        try {
            for (var _d = __values(this.scmService.repositories), _e = _d.next(); !_e.done; _e = _d.next()) {
                var scmRepository = _e.value;
                var repository = this.toGitRepository(scmRepository);
                if (repository) {
                    registered.add(repository.localUri);
                    toUnregister.set(repository.localUri, scmRepository);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var repositories_1 = __values(repositories), repositories_1_1 = repositories_1.next(); !repositories_1_1.done; repositories_1_1 = repositories_1.next()) {
                var repository = repositories_1_1.value;
                toUnregister.delete(repository.localUri);
                if (!registered.has(repository.localUri)) {
                    registered.add(repository.localUri);
                    this.registerScmProvider(repository);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (repositories_1_1 && !repositories_1_1.done && (_b = repositories_1.return)) _b.call(repositories_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            for (var toUnregister_1 = __values(toUnregister), toUnregister_1_1 = toUnregister_1.next(); !toUnregister_1_1.done; toUnregister_1_1 = toUnregister_1.next()) {
                var _f = __read(toUnregister_1_1.value, 2), scmRepository = _f[1];
                scmRepository.dispose();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (toUnregister_1_1 && !toUnregister_1_1.done && (_c = toUnregister_1.return)) _c.call(toUnregister_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    GitRepositoryProvider.prototype.registerScmProvider = function (repository) {
        var _this = this;
        var provider = this.scmProviderFactory({ repository: repository });
        this.scmService.registerScmProvider(provider, {
            input: {
                placeholder: 'Message (press {0} to commit)',
                validator: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    var issue;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.commitMessageValidator.validate(value)];
                            case 1:
                                issue = _a.sent();
                                return [2 /*return*/, issue && {
                                        message: issue.message,
                                        type: issue.status
                                    }];
                        }
                    });
                }); }
            }
        });
    };
    GitRepositoryProvider.prototype.toScmRepository = function (repository) {
        var _this = this;
        return repository && this.scmService.repositories.find(function (scmRepository) { return common_2.Repository.equal(_this.toGitRepository(scmRepository), repository); });
    };
    GitRepositoryProvider.prototype.toGitRepository = function (scmRepository) {
        var provider = this.toGitScmProvider(scmRepository);
        return provider && provider.repository;
    };
    GitRepositoryProvider.prototype.toGitScmProvider = function (scmRepository) {
        var gitScmRepository = this.toGitScmRepository(scmRepository);
        return gitScmRepository && gitScmRepository.provider;
    };
    GitRepositoryProvider.prototype.toGitScmRepository = function (scmRepository) {
        return GitScmRepository.is(scmRepository) ? scmRepository : undefined;
    };
    __decorate([
        inversify_1.inject(git_scm_provider_1.GitScmProvider.Factory),
        __metadata("design:type", Function)
    ], GitRepositoryProvider.prototype, "scmProviderFactory", void 0);
    __decorate([
        inversify_1.inject(git_commit_message_validator_1.GitCommitMessageValidator),
        __metadata("design:type", git_commit_message_validator_1.GitCommitMessageValidator)
    ], GitRepositoryProvider.prototype, "commitMessageValidator", void 0);
    GitRepositoryProvider = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_2.Git)),
        __param(1, inversify_1.inject(workspace_service_1.WorkspaceService)),
        __param(2, inversify_1.inject(filesystem_watcher_1.FileSystemWatcher)),
        __param(3, inversify_1.inject(common_1.FileSystem)),
        __param(4, inversify_1.inject(scm_service_1.ScmService)),
        __param(5, inversify_1.inject(storage_service_1.StorageService)),
        __metadata("design:paramtypes", [Object, workspace_service_1.WorkspaceService,
            filesystem_watcher_1.FileSystemWatcher, Object, scm_service_1.ScmService, Object])
    ], GitRepositoryProvider);
    return GitRepositoryProvider;
}());
exports.GitRepositoryProvider = GitRepositoryProvider;
var GitScmRepository;
(function (GitScmRepository) {
    function is(scmRepository) {
        return !!scmRepository && scmRepository.provider instanceof git_scm_provider_1.GitScmProvider;
    }
    GitScmRepository.is = is;
})(GitScmRepository = exports.GitScmRepository || (exports.GitScmRepository = {}));
//# sourceMappingURL=git-repository-provider.js.map
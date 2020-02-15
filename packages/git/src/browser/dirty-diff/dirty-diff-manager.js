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
var browser_1 = require("@theia/editor/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var core_1 = require("@theia/core");
var content_lines_1 = require("@theia/scm/lib/browser/dirty-diff/content-lines");
var diff_computer_1 = require("@theia/scm/lib/browser/dirty-diff/diff-computer");
var git_preferences_1 = require("../git-preferences");
var git_resource_1 = require("../git-resource");
var git_resource_resolver_1 = require("../git-resource-resolver");
var common_1 = require("../../common");
var git_repository_tracker_1 = require("../git-repository-tracker");
var throttle = require("lodash.throttle");
var DirtyDiffManager = /** @class */ (function () {
    function DirtyDiffManager() {
        this.models = new Map();
        this.onDirtyDiffUpdateEmitter = new core_1.Emitter();
        this.onDirtyDiffUpdate = this.onDirtyDiffUpdateEmitter.event;
    }
    DirtyDiffManager.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gitStatus, repository;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.editorManager.onCreated(function (e) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.handleEditorCreated(e)];
                        }); }); });
                        this.repositoryTracker.onGitEvent(throttle(function (event) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.handleGitStatusUpdate(event && event.source, event && event.status)];
                        }); }); }, 500));
                        gitStatus = this.repositoryTracker.selectedRepositoryStatus;
                        repository = this.repositoryTracker.selectedRepository;
                        if (!(gitStatus && repository)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleGitStatusUpdate(repository, gitStatus)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DirtyDiffManager.prototype.handleEditorCreated = function (editorWidget) {
        return __awaiter(this, void 0, void 0, function () {
            var editor, uri, toDispose, model, gitStatus, repository, changes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editor = editorWidget.editor;
                        uri = editor.uri.toString();
                        if (editor.uri.scheme !== 'file') {
                            return [2 /*return*/];
                        }
                        toDispose = new core_1.DisposableCollection();
                        model = this.createNewModel(editor);
                        toDispose.push(model);
                        this.models.set(uri, model);
                        toDispose.push(editor.onDocumentContentChanged(throttle(function (event) { return model.handleDocumentChanged(event.document); }, 1000)));
                        editorWidget.disposed.connect(function () {
                            _this.models.delete(uri);
                            toDispose.dispose();
                        });
                        gitStatus = this.repositoryTracker.selectedRepositoryStatus;
                        repository = this.repositoryTracker.selectedRepository;
                        if (!(gitStatus && repository)) return [3 /*break*/, 2];
                        changes = gitStatus.changes.filter(function (c) { return c.uri === uri; });
                        return [4 /*yield*/, model.handleGitStatusUpdate(repository, changes)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        model.handleDocumentChanged(editor.document);
                        return [2 /*return*/];
                }
            });
        });
    };
    DirtyDiffManager.prototype.createNewModel = function (editor) {
        var _this = this;
        var previousRevision = this.createPreviousFileRevision(editor.uri);
        var model = new DirtyDiffModel(editor, this.preferences, previousRevision);
        model.onDirtyDiffUpdate(function (e) { return _this.onDirtyDiffUpdateEmitter.fire(e); });
        return model;
    };
    DirtyDiffManager.prototype.createPreviousFileRevision = function (fileUri) {
        var _this = this;
        return {
            fileUri: fileUri,
            getContents: function (staged) { return __awaiter(_this, void 0, void 0, function () {
                var query, uri, gitResource;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = staged ? '' : 'HEAD';
                            uri = fileUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(query);
                            return [4 /*yield*/, this.gitResourceResolver.getResource(uri)];
                        case 1:
                            gitResource = _a.sent();
                            return [2 /*return*/, gitResource.readContents()];
                    }
                });
            }); },
            isVersionControlled: function () { return __awaiter(_this, void 0, void 0, function () {
                var repository;
                return __generator(this, function (_a) {
                    repository = this.repositoryTracker.selectedRepository;
                    if (repository) {
                        return [2 /*return*/, this.git.lsFiles(repository, fileUri.toString(), { errorUnmatch: true })];
                    }
                    return [2 /*return*/, false];
                });
            }); }
        };
    };
    DirtyDiffManager.prototype.handleGitStatusUpdate = function (repository, status) {
        return __awaiter(this, void 0, void 0, function () {
            var uris, relevantChanges, _loop_1, _a, _b, model, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        uris = new Set(this.models.keys());
                        relevantChanges = status ? status.changes.filter(function (c) { return uris.has(c.uri); }) : [];
                        _loop_1 = function (model) {
                            var uri, changes;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        uri = model.editor.uri.toString();
                                        changes = relevantChanges.filter(function (c) { return c.uri === uri; });
                                        return [4 /*yield*/, model.handleGitStatusUpdate(repository, changes)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(this.models.values()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        model = _b.value;
                        return [5 /*yield**/, _loop_1(model)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], DirtyDiffManager.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], DirtyDiffManager.prototype, "repositoryTracker", void 0);
    __decorate([
        inversify_1.inject(git_resource_resolver_1.GitResourceResolver),
        __metadata("design:type", git_resource_resolver_1.GitResourceResolver)
    ], DirtyDiffManager.prototype, "gitResourceResolver", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], DirtyDiffManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(git_preferences_1.GitPreferences),
        __metadata("design:type", Object)
    ], DirtyDiffManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DirtyDiffManager.prototype, "initialize", null);
    DirtyDiffManager = __decorate([
        inversify_1.injectable()
    ], DirtyDiffManager);
    return DirtyDiffManager;
}());
exports.DirtyDiffManager = DirtyDiffManager;
var DirtyDiffModel = /** @class */ (function () {
    function DirtyDiffModel(editor, preferences, previousRevision) {
        var _this = this;
        this.editor = editor;
        this.preferences = preferences;
        this.previousRevision = previousRevision;
        this.toDispose = new core_1.DisposableCollection();
        this.enabled = true;
        this.onDirtyDiffUpdateEmitter = new core_1.Emitter();
        this.onDirtyDiffUpdate = this.onDirtyDiffUpdateEmitter.event;
        this.toDispose.push(this.preferences.onPreferenceChanged(function (e) { return _this.handlePreferenceChange(e); }));
    }
    DirtyDiffModel.prototype.handlePreferenceChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var preferenceName, newValue, enabled;
            return __generator(this, function (_a) {
                preferenceName = event.preferenceName, newValue = event.newValue;
                if (preferenceName === 'git.editor.decorations.enabled') {
                    enabled = !!newValue;
                    this.enabled = enabled;
                    this.update();
                }
                if (preferenceName === 'git.editor.dirtyDiff.linesLimit') {
                    this.update();
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(DirtyDiffModel.prototype, "linesLimit", {
        get: function () {
            var limit = this.preferences['git.editor.dirtyDiff.linesLimit'];
            return limit > 0 ? limit : Number.MAX_SAFE_INTEGER;
        },
        enumerable: true,
        configurable: true
    });
    DirtyDiffModel.prototype.shouldRender = function () {
        if (!this.enabled || !this.previousContent || !this.currentContent) {
            return false;
        }
        var limit = this.linesLimit;
        return this.previousContent.length < limit && this.currentContent.length < limit;
    };
    DirtyDiffModel.prototype.update = function () {
        var _this = this;
        var editor = this.editor;
        if (!this.shouldRender()) {
            this.onDirtyDiffUpdateEmitter.fire({ editor: editor, added: [], removed: [], modified: [] });
            return;
        }
        if (this.updateTimeout) {
            window.clearTimeout(this.updateTimeout);
        }
        this.updateTimeout = window.setTimeout(function () {
            var previous = _this.previousContent;
            var current = _this.currentContent;
            if (!previous || !current) {
                return;
            }
            _this.updateTimeout = undefined;
            var dirtyDiff = DirtyDiffModel.computeDirtyDiff(previous, current);
            if (!dirtyDiff) {
                // if the computation fails, it might be because of changes in the editor, in that case
                // a new update task should be scheduled anyway.
                return;
            }
            var dirtyDiffUpdate = __assign({ editor: editor }, dirtyDiff);
            _this.onDirtyDiffUpdateEmitter.fire(dirtyDiffUpdate);
        }, 100);
    };
    DirtyDiffModel.prototype.handleDocumentChanged = function (document) {
        this.currentContent = DirtyDiffModel.documentContentLines(document);
        this.update();
    };
    DirtyDiffModel.prototype.handleGitStatusUpdate = function (repository, relevantChanges) {
        return __awaiter(this, void 0, void 0, function () {
            var noRelevantChanges, isNewAndStaged, isNewAndUnstaged, modifiedChange, isModified, readPreviousRevisionContent, inGitRepository;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        noRelevantChanges = relevantChanges.length === 0;
                        isNewAndStaged = relevantChanges.some(function (c) { return c.status === common_1.GitFileStatus.New && !!c.staged; });
                        isNewAndUnstaged = relevantChanges.some(function (c) { return c.status === common_1.GitFileStatus.New && !c.staged; });
                        modifiedChange = relevantChanges.find(function (c) { return c.status === common_1.GitFileStatus.Modified; });
                        isModified = !!modifiedChange;
                        readPreviousRevisionContent = function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _c.trys.push([0, 2, , 3]);
                                        _a = this;
                                        return [4 /*yield*/, this.getPreviousRevisionContent()];
                                    case 1:
                                        _a.previousContent = _c.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _b = _c.sent();
                                        this.previousContent = undefined;
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        if (!(isModified || isNewAndStaged)) return [3 /*break*/, 2];
                        this.staged = isNewAndStaged || modifiedChange.staged || false;
                        return [4 /*yield*/, readPreviousRevisionContent()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (isNewAndUnstaged && !isNewAndStaged) {
                            this.previousContent = undefined;
                        }
                        if (!noRelevantChanges) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.isInGitRepository(repository)];
                    case 3:
                        inGitRepository = _a.sent();
                        if (!inGitRepository) return [3 /*break*/, 5];
                        return [4 /*yield*/, readPreviousRevisionContent()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    DirtyDiffModel.prototype.isInGitRepository = function (repository) {
        return __awaiter(this, void 0, void 0, function () {
            var modelUri, repoUri;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/, false];
                }
                modelUri = this.editor.uri.withScheme('file').toString();
                repoUri = new uri_1.default(repository.localUri).withScheme('file').toString();
                return [2 /*return*/, modelUri.startsWith(repoUri) && this.previousRevision.isVersionControlled()];
            });
        });
    };
    DirtyDiffModel.prototype.getPreviousRevisionContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.previousRevision.getContents(this.staged)];
                    case 1:
                        contents = _a.sent();
                        return [2 /*return*/, contents ? content_lines_1.ContentLines.fromString(contents) : undefined];
                }
            });
        });
    };
    DirtyDiffModel.prototype.dispose = function () {
        this.toDispose.dispose();
        this.onDirtyDiffUpdateEmitter.dispose();
    };
    return DirtyDiffModel;
}());
exports.DirtyDiffModel = DirtyDiffModel;
(function (DirtyDiffModel) {
    var diffComputer = new diff_computer_1.DiffComputer();
    /**
     * Returns an eventually consistent result. E.g. it can happen, that lines are deleted during the computation,
     * which will internally produce 'line out of bound' errors, then it will return `undefined`.
     *
     * `ContentLines` are to avoid copying contents which improves the performance, therefore handling of the `undefined`
     * result, and rescheduling of the computation should be done by caller.
     */
    function computeDirtyDiff(previous, current) {
        try {
            return diffComputer.computeDirtyDiff(content_lines_1.ContentLines.arrayLike(previous), content_lines_1.ContentLines.arrayLike(current));
        }
        catch (_a) {
            return undefined;
        }
    }
    DirtyDiffModel.computeDirtyDiff = computeDirtyDiff;
    function documentContentLines(document) {
        return {
            length: document.lineCount,
            getLineContent: function (line) { return document.getLineContent(line + 1); },
        };
    }
    DirtyDiffModel.documentContentLines = documentContentLines;
})(DirtyDiffModel = exports.DirtyDiffModel || (exports.DirtyDiffModel = {}));
exports.DirtyDiffModel = DirtyDiffModel;
//# sourceMappingURL=dirty-diff-manager.js.map
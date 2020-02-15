"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var inversify_1 = require("inversify");
var common_1 = require("../common");
var dugite_git_1 = require("../node/dugite-git");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var common_2 = require("@theia/filesystem/lib/common");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var node_filesystem_1 = require("@theia/filesystem/lib/node/node-filesystem");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var git_repository_provider_1 = require("./git-repository-provider");
var sinon = require("sinon");
var chai = require("chai");
var git_commit_message_validator_1 = require("./git-commit-message-validator");
var scm_service_1 = require("@theia/scm/lib/browser/scm-service");
var scm_context_key_service_1 = require("@theia/scm/lib/browser/scm-context-key-service");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var git_scm_provider_1 = require("./git-scm-provider");
var browser_2 = require("@theia/editor/lib/browser");
var git_error_handler_1 = require("./git-error-handler");
var git_preferences_1 = require("./git-preferences");
var expect = chai.expect;
disableJSDOM();
var folderA = {
    uri: 'file:///home/repoA',
    lastModification: 0,
    isDirectory: true
};
var repoA1 = {
    localUri: folderA.uri + "/1"
};
var repoA2 = {
    localUri: folderA.uri + "/2"
};
var folderB = {
    uri: 'file:///home/repoB',
    lastModification: 0,
    isDirectory: true
};
var repoB = {
    localUri: folderB.uri
};
/* eslint-disable @typescript-eslint/no-explicit-any */
describe('GitRepositoryProvider', function () {
    var testContainer;
    var mockGit;
    var mockWorkspaceService;
    var mockFilesystem;
    var mockFileSystemWatcher;
    var mockStorageService;
    var gitRepositoryProvider;
    var mockRootChangeEmitter = new core_1.Emitter();
    var mockFileChangeEmitter = new core_1.Emitter();
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
    });
    after(function () {
        disableJSDOM();
    });
    beforeEach(function () {
        mockGit = sinon.createStubInstance(dugite_git_1.DugiteGit);
        mockWorkspaceService = sinon.createStubInstance(workspace_service_1.WorkspaceService);
        mockFilesystem = sinon.createStubInstance(node_filesystem_1.FileSystemNode);
        mockFileSystemWatcher = sinon.createStubInstance(filesystem_watcher_1.FileSystemWatcher);
        mockStorageService = sinon.createStubInstance(browser_1.LocalStorageService);
        testContainer = new inversify_1.Container();
        testContainer.bind(git_repository_provider_1.GitRepositoryProvider).toSelf().inSingletonScope();
        testContainer.bind(common_1.Git).toConstantValue(mockGit);
        testContainer.bind(workspace_service_1.WorkspaceService).toConstantValue(mockWorkspaceService);
        testContainer.bind(common_2.FileSystem).toConstantValue(mockFilesystem);
        testContainer.bind(filesystem_watcher_1.FileSystemWatcher).toConstantValue(mockFileSystemWatcher);
        testContainer.bind(browser_1.StorageService).toConstantValue(mockStorageService);
        testContainer.bind(scm_service_1.ScmService).toSelf().inSingletonScope();
        testContainer.bind(git_scm_provider_1.GitScmProvider.Factory).toFactory(git_scm_provider_1.GitScmProvider.createFactory);
        testContainer.bind(scm_context_key_service_1.ScmContextKeyService).toSelf().inSingletonScope();
        testContainer.bind(context_key_service_1.ContextKeyService).toSelf().inSingletonScope();
        testContainer.bind(git_commit_message_validator_1.GitCommitMessageValidator).toSelf().inSingletonScope();
        testContainer.bind(browser_2.EditorManager).toConstantValue({});
        testContainer.bind(git_error_handler_1.GitErrorHandler).toConstantValue({});
        testContainer.bind(core_1.CommandService).toConstantValue({});
        testContainer.bind(browser_1.LabelProvider).toConstantValue({});
        testContainer.bind(git_preferences_1.GitPreferences).toConstantValue({});
        sinon.stub(mockWorkspaceService, 'onWorkspaceChanged').value(mockRootChangeEmitter.event);
        sinon.stub(mockFileSystemWatcher, 'onFilesChanged').value(mockFileChangeEmitter.event);
    });
    it('should adds all existing git repo(s) on theia loads', function () { return __awaiter(void 0, void 0, void 0, function () {
        var allRepos, roots;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allRepos = [repoA1, repoA2];
                    roots = [folderA];
                    mockStorageService.getData.withArgs('theia-git-selected-repository').resolves(allRepos[0]);
                    mockStorageService.getData.withArgs('theia-git-all-repositories').resolves(allRepos);
                    sinon.stub(mockWorkspaceService, 'roots').value(Promise.resolve(roots));
                    mockWorkspaceService.tryGetRoots.returns(roots);
                    gitRepositoryProvider = testContainer.get(git_repository_provider_1.GitRepositoryProvider);
                    mockFilesystem.exists.resolves(true);
                    mockGit.repositories.withArgs(folderA.uri, {}).resolves(allRepos);
                    return [4 /*yield*/, gitRepositoryProvider['initialize']()];
                case 1:
                    _a.sent();
                    expect(gitRepositoryProvider.allRepositories.length).to.eq(allRepos.length);
                    expect(gitRepositoryProvider.allRepositories[0].localUri).to.eq(allRepos[0].localUri);
                    expect(gitRepositoryProvider.allRepositories[1].localUri).to.eq(allRepos[1].localUri);
                    expect(gitRepositoryProvider.selectedRepository && gitRepositoryProvider.selectedRepository.localUri).to.eq(allRepos[0].localUri);
                    return [2 /*return*/];
            }
        });
    }); });
    // tslint:disable-next-line:no-void-expression
    it.skip('should refresh git repo(s) on receiving a root change event from WorkspaceService', function (done) {
        var allReposA = [repoA1, repoA2];
        var oldRoots = [folderA];
        var allReposB = [repoB];
        mockStorageService.getData.withArgs('theia-git-selected-repository').resolves(allReposA[0]);
        mockStorageService.getData.withArgs('theia-git-all-repositories').resolves(allReposA);
        sinon.stub(mockWorkspaceService, 'roots').resolves(oldRoots);
        var stubWsRoots = mockWorkspaceService.tryGetRoots;
        stubWsRoots.returns(oldRoots);
        gitRepositoryProvider = testContainer.get(git_repository_provider_1.GitRepositoryProvider);
        mockFilesystem.exists.resolves(true);
        mockGit.repositories.withArgs(folderA.uri, {}).resolves(allReposA);
        mockGit.repositories.withArgs(folderB.uri, {}).resolves(allReposB);
        var counter = 0;
        gitRepositoryProvider.onDidChangeRepository(function (selected) {
            counter++;
            if (counter === 3) {
                expect(gitRepositoryProvider.allRepositories.length).to.eq(allReposA.concat(allReposB).length);
                expect(gitRepositoryProvider.allRepositories[0].localUri).to.eq(allReposA[0].localUri);
                expect(gitRepositoryProvider.allRepositories[1].localUri).to.eq(allReposA[1].localUri);
                expect(gitRepositoryProvider.allRepositories[2].localUri).to.eq(allReposB[0].localUri);
                expect(selected && selected.localUri).to.eq(allReposA[0].localUri);
                done();
            }
        });
        gitRepositoryProvider['initialize']().then(function () {
            var newRoots = [folderA, folderB];
            stubWsRoots.returns(newRoots);
            sinon.stub(mockWorkspaceService, 'roots').resolves(newRoots);
            mockRootChangeEmitter.fire(newRoots);
        }).catch(function (e) {
            return done(new Error('gitRepositoryProvider.initialize() throws an error'));
        });
    });
    // tslint:disable-next-line:no-void-expression
    it.skip('should refresh git repo(s) on receiving a file system change event', function (done) {
        var allReposA = [repoA1, repoA2];
        var oldRoots = [folderA];
        var allReposB = [repoB];
        var newRoots = [folderA, folderB];
        mockStorageService.getData.withArgs('theia-git-selected-repository').resolves(allReposA[0]);
        mockStorageService.getData.withArgs('theia-git-all-repositories').resolves(allReposA);
        sinon.stub(mockWorkspaceService, 'roots').onCall(0).resolves(oldRoots);
        sinon.stub(mockWorkspaceService, 'roots').onCall(1).resolves(oldRoots);
        sinon.stub(mockWorkspaceService, 'roots').onCall(2).resolves(newRoots);
        var stubWsRoots = mockWorkspaceService.tryGetRoots;
        stubWsRoots.onCall(0).returns(oldRoots);
        stubWsRoots.onCall(1).returns(oldRoots);
        stubWsRoots.onCall(2).returns(newRoots);
        gitRepositoryProvider = testContainer.get(git_repository_provider_1.GitRepositoryProvider);
        mockFilesystem.exists.resolves(true);
        mockGit.repositories.withArgs(folderA.uri, {}).resolves(allReposA);
        mockGit.repositories.withArgs(folderB.uri, {}).resolves(allReposB);
        var counter = 0;
        gitRepositoryProvider.onDidChangeRepository(function (selected) {
            counter++;
            if (counter === 3) {
                expect(gitRepositoryProvider.allRepositories.length).to.eq(allReposA.concat(allReposB).length);
                expect(gitRepositoryProvider.allRepositories[0].localUri).to.eq(allReposA[0].localUri);
                expect(gitRepositoryProvider.allRepositories[1].localUri).to.eq(allReposA[1].localUri);
                expect(gitRepositoryProvider.allRepositories[2].localUri).to.eq(allReposB[0].localUri);
                expect(selected && selected.localUri).to.eq(allReposA[0].localUri);
                done();
            }
        });
        gitRepositoryProvider['initialize']().then(function () {
            return mockFileChangeEmitter.fire([]);
        }).catch(function (e) {
            return done(new Error('gitRepositoryProvider.initialize() throws an error'));
        });
    });
    // tslint:disable-next-line:no-void-expression
    it.skip('should ignore the invalid or nonexistent root(s)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var allReposA, roots;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allReposA = [repoA1, repoA2];
                    roots = [folderA, folderB];
                    mockStorageService.getData.withArgs('theia-git-selected-repository').resolves(allReposA[0]);
                    mockStorageService.getData.withArgs('theia-git-all-repositories').resolves(allReposA);
                    sinon.stub(mockWorkspaceService, 'roots').value(Promise.resolve(roots));
                    mockWorkspaceService.tryGetRoots.returns(roots);
                    gitRepositoryProvider = testContainer.get(git_repository_provider_1.GitRepositoryProvider);
                    mockFilesystem.exists.withArgs(folderA.uri).resolves(true); // folderA exists
                    mockFilesystem.exists.withArgs(folderB.uri).resolves(false); // folderB does not exist
                    mockGit.repositories.withArgs(folderA.uri, {}).resolves(allReposA);
                    return [4 /*yield*/, gitRepositoryProvider['initialize']()];
                case 1:
                    _a.sent();
                    expect(gitRepositoryProvider.allRepositories.length).to.eq(allReposA.length);
                    expect(gitRepositoryProvider.allRepositories[0].localUri).to.eq(allReposA[0].localUri);
                    expect(gitRepositoryProvider.allRepositories[1].localUri).to.eq(allReposA[1].localUri);
                    expect(gitRepositoryProvider.selectedRepository && gitRepositoryProvider.selectedRepository.localUri).to.eq(allReposA[0].localUri);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should mark the first repo in the first root as "selectedRepository", if the "selectedRepository" is unavailable in the first place', function () { return __awaiter(void 0, void 0, void 0, function () {
        var allReposA, roots, allReposB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allReposA = [repoA1, repoA2];
                    roots = [folderA, folderB];
                    allReposB = [repoB];
                    mockStorageService.getData.withArgs('theia-git-selected-repository').resolves(undefined);
                    mockStorageService.getData.withArgs('theia-git-all-repositories').resolves(undefined);
                    sinon.stub(mockWorkspaceService, 'roots').value(Promise.resolve(roots));
                    mockWorkspaceService.tryGetRoots.returns(roots);
                    gitRepositoryProvider = testContainer.get(git_repository_provider_1.GitRepositoryProvider);
                    mockFilesystem.exists.resolves(true);
                    mockGit.repositories.withArgs(folderA.uri, {}).resolves(allReposA);
                    mockGit.repositories.withArgs(folderA.uri, { maxCount: 1 }).resolves([allReposA[0]]);
                    mockGit.repositories.withArgs(folderB.uri, {}).resolves(allReposB);
                    mockGit.repositories.withArgs(folderB.uri, { maxCount: 1 }).resolves([allReposB[0]]);
                    return [4 /*yield*/, gitRepositoryProvider['initialize']()];
                case 1:
                    _a.sent();
                    expect(gitRepositoryProvider.selectedRepository && gitRepositoryProvider.selectedRepository.localUri).to.eq(allReposA[0].localUri);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=git-repository-provider.spec.js.map
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
var upath = require("upath");
var path = require("path");
var temp = require("temp");
var fs = require("fs-extra");
var chai_1 = require("chai");
var git_1 = require("dugite-extra/lib/core/git");
var file_uri_1 = require("@theia/core/lib/node/file-uri");
var common_1 = require("../common");
var test_helper_1 = require("dugite-extra/lib/command/test-helper");
var binding_helper_1 = require("./test/binding-helper");
var os_1 = require("@theia/core/lib/common/os");
/* eslint-disable max-len, no-unused-expressions */
var track = temp.track();
describe('git', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            this.timeout(10000);
            after(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    track.cleanupSync();
                    return [2 /*return*/];
                });
            }); });
            describe('repositories', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    it('should discover only first repository', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, git, workspaceRootUri, repositories;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('discovery-test-1');
                                    fs.mkdirSync(path.join(root, 'A'));
                                    fs.mkdirSync(path.join(root, 'B'));
                                    fs.mkdirSync(path.join(root, 'C'));
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 1:
                                    git = _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'A'))];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'B'))];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'C'))];
                                case 4:
                                    _a.sent();
                                    workspaceRootUri = file_uri_1.FileUri.create(root).toString();
                                    return [4 /*yield*/, git.repositories(workspaceRootUri, { maxCount: 1 })];
                                case 5:
                                    repositories = _a.sent();
                                    chai_1.expect(repositories.length).to.deep.equal(1);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('should discover all nested repositories', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, git, workspaceRootUri, repositories;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('discovery-test-2');
                                    fs.mkdirSync(path.join(root, 'A'));
                                    fs.mkdirSync(path.join(root, 'B'));
                                    fs.mkdirSync(path.join(root, 'C'));
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 1:
                                    git = _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'A'))];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'B'))];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'C'))];
                                case 4:
                                    _a.sent();
                                    workspaceRootUri = file_uri_1.FileUri.create(root).toString();
                                    return [4 /*yield*/, git.repositories(workspaceRootUri, {})];
                                case 5:
                                    repositories = _a.sent();
                                    chai_1.expect(repositories.map(function (r) { return path.basename(file_uri_1.FileUri.fsPath(r.localUri)); }).sort()).to.deep.equal(['A', 'B', 'C']);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('should discover all nested repositories and the root repository which is at the workspace root', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var root, git, workspaceRootUri, repositories;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (os_1.isWindows) {
                                            // https://github.com/eclipse-theia/theia/issues/933
                                            this.skip();
                                            return [2 /*return*/];
                                        }
                                        root = track.mkdirSync('discovery-test-3');
                                        fs.mkdirSync(path.join(root, 'BASE'));
                                        fs.mkdirSync(path.join(root, 'BASE', 'A'));
                                        fs.mkdirSync(path.join(root, 'BASE', 'B'));
                                        fs.mkdirSync(path.join(root, 'BASE', 'C'));
                                        return [4 /*yield*/, binding_helper_1.createGit()];
                                    case 1:
                                        git = _a.sent();
                                        return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'BASE'))];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'BASE', 'A'))];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'BASE', 'B'))];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'BASE', 'C'))];
                                    case 5:
                                        _a.sent();
                                        workspaceRootUri = file_uri_1.FileUri.create(path.join(root, 'BASE')).toString();
                                        return [4 /*yield*/, git.repositories(workspaceRootUri, {})];
                                    case 6:
                                        repositories = _a.sent();
                                        chai_1.expect(repositories.map(function (r) { return path.basename(file_uri_1.FileUri.fsPath(r.localUri)); }).sort()).to.deep.equal(['A', 'B', 'BASE', 'C']);
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    it('should discover all nested repositories and the container repository', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, git, workspaceRootUri, repositories, repositoryNames;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('discovery-test-4');
                                    fs.mkdirSync(path.join(root, 'BASE'));
                                    fs.mkdirSync(path.join(root, 'BASE', 'WS_ROOT'));
                                    fs.mkdirSync(path.join(root, 'BASE', 'WS_ROOT', 'A'));
                                    fs.mkdirSync(path.join(root, 'BASE', 'WS_ROOT', 'B'));
                                    fs.mkdirSync(path.join(root, 'BASE', 'WS_ROOT', 'C'));
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 1:
                                    git = _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'BASE'))];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'BASE', 'WS_ROOT', 'A'))];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'BASE', 'WS_ROOT', 'B'))];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, test_helper_1.initRepository(path.join(root, 'BASE', 'WS_ROOT', 'C'))];
                                case 5:
                                    _a.sent();
                                    workspaceRootUri = file_uri_1.FileUri.create(path.join(root, 'BASE', 'WS_ROOT')).toString();
                                    return [4 /*yield*/, git.repositories(workspaceRootUri, {})];
                                case 6:
                                    repositories = _a.sent();
                                    repositoryNames = repositories.map(function (r) { return path.basename(file_uri_1.FileUri.fsPath(r.localUri)); });
                                    chai_1.expect(repositoryNames.shift()).to.equal('BASE'); // The first must be the container repository.
                                    chai_1.expect(repositoryNames.sort()).to.deep.equal(['A', 'B', 'C']);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('status', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    it('modifying a staged file should result in two changes', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri, repository, git, status, filePath, fileUri;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, test_helper_1.createTestRepository(track.mkdirSync('status-test'))];
                                case 1:
                                    root = _a.sent();
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 2:
                                    git = _a.sent();
                                    return [4 /*yield*/, git.status(repository)];
                                case 3:
                                    status = _a.sent();
                                    chai_1.expect(status.changes).to.be.empty;
                                    filePath = path.join(root, 'A.txt');
                                    fileUri = file_uri_1.FileUri.create(filePath).toString();
                                    fs.writeFileSync(filePath, 'new content');
                                    chai_1.expect(fs.readFileSync(filePath, { encoding: 'utf8' })).to.be.equal('new content');
                                    return [4 /*yield*/, git.add(repository, fileUri)];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, git.status(repository)];
                                case 5:
                                    // Check the status again. Expect one single change.
                                    status = _a.sent();
                                    chai_1.expect(status.changes).to.be.have.lengthOf(1);
                                    chai_1.expect(status.changes[0].uri).to.be.equal(fileUri);
                                    chai_1.expect(status.changes[0].staged).to.be.true;
                                    // Change the same file again.
                                    fs.writeFileSync(filePath, 'yet another new content');
                                    chai_1.expect(fs.readFileSync(filePath, { encoding: 'utf8' })).to.be.equal('yet another new content');
                                    return [4 /*yield*/, git.status(repository)];
                                case 6:
                                    // We expect two changes; one is staged, the other is in the working directory.
                                    status = _a.sent();
                                    chai_1.expect(status.changes).to.be.have.lengthOf(2);
                                    chai_1.expect(status.changes.map(function (f) { return f.uri; })).to.be.deep.equal([fileUri, fileUri]);
                                    chai_1.expect(status.changes.map(function (f) { return f.staged; }).sort()).to.be.deep.equal([false, true]);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('WorkingDirectoryStatus#equals', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    it('staged change should matter', function () { return __awaiter(_this, void 0, void 0, function () {
                        var left, right;
                        return __generator(this, function (_a) {
                            left = JSON.parse("\n            {\n                \"exists\":true,\n                \"branch\":\"GH-165\",\n                \"upstreamBranch\":\"origin/GH-165\",\n                \"aheadBehind\":{\n                   \"ahead\":0,\n                   \"behind\":0\n                },\n                \"changes\":[\n                   {\n                      \"uri\":\"bar.foo\",\n                      \"status\":0,\n                      \"staged\":false\n                   }\n                ],\n                \"currentHead\":\"a274d43dbfba5d1ff9d52db42dc90c6f03071656\"\n             }\n            ");
                            right = JSON.parse("\n            {\n                \"exists\":true,\n                \"branch\":\"GH-165\",\n                \"upstreamBranch\":\"origin/GH-165\",\n                \"aheadBehind\":{\n                   \"ahead\":0,\n                   \"behind\":0\n                },\n                \"changes\":[\n                   {\n                      \"uri\":\"bar.foo\",\n                      \"status\":0,\n                      \"staged\":true\n                   }\n                ],\n                \"currentHead\":\"a274d43dbfba5d1ff9d52db42dc90c6f03071656\"\n             }\n            ");
                            chai_1.expect(common_1.WorkingDirectoryStatus.equals(left, right)).to.be.false;
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('show', function () { return __awaiter(_this, void 0, void 0, function () {
                var repository, git;
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, test_helper_1.createTestRepository(track.mkdirSync('status-test'))];
                                case 1:
                                    root = _a.sent();
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 2:
                                    git = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('modified in working directory', function () { return __awaiter(_this, void 0, void 0, function () {
                        var repositoryPath, content;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    repositoryPath = file_uri_1.FileUri.fsPath(repository.localUri);
                                    fs.writeFileSync(path.join(repositoryPath, 'A.txt'), 'new content');
                                    chai_1.expect(fs.readFileSync(path.join(repositoryPath, 'A.txt'), { encoding: 'utf8' })).to.be.equal('new content');
                                    return [4 /*yield*/, git.show(repository, file_uri_1.FileUri.create(path.join(repositoryPath, 'A.txt')).toString(), { commitish: 'HEAD' })];
                                case 1:
                                    content = _a.sent();
                                    chai_1.expect(content).to.be.equal('A');
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('modified in working directory (nested)', function () { return __awaiter(_this, void 0, void 0, function () {
                        var repositoryPath, content;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    repositoryPath = file_uri_1.FileUri.fsPath(repository.localUri);
                                    fs.writeFileSync(path.join(repositoryPath, 'folder', 'C.txt'), 'new content');
                                    chai_1.expect(fs.readFileSync(path.join(repositoryPath, 'folder', 'C.txt'), { encoding: 'utf8' })).to.be.equal('new content');
                                    return [4 /*yield*/, git.show(repository, file_uri_1.FileUri.create(path.join(repositoryPath, 'folder', 'C.txt')).toString(), { commitish: 'HEAD' })];
                                case 1:
                                    content = _a.sent();
                                    chai_1.expect(content).to.be.equal('C');
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('modified in index', function () { return __awaiter(_this, void 0, void 0, function () {
                        var repositoryPath, content;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    repositoryPath = file_uri_1.FileUri.fsPath(repository.localUri);
                                    fs.writeFileSync(path.join(repositoryPath, 'A.txt'), 'new content');
                                    chai_1.expect(fs.readFileSync(path.join(repositoryPath, 'A.txt'), { encoding: 'utf8' })).to.be.equal('new content');
                                    return [4 /*yield*/, git.add(repository, file_uri_1.FileUri.create(path.join(repositoryPath, 'A.txt')).toString())];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, git.show(repository, file_uri_1.FileUri.create(path.join(repositoryPath, 'A.txt')).toString(), { commitish: 'index' })];
                                case 2:
                                    content = _a.sent();
                                    chai_1.expect(content).to.be.equal('new content');
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('modified in index and in working directory', function () { return __awaiter(_this, void 0, void 0, function () {
                        var repositoryPath, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    repositoryPath = file_uri_1.FileUri.fsPath(repository.localUri);
                                    fs.writeFileSync(path.join(repositoryPath, 'A.txt'), 'new content');
                                    chai_1.expect(fs.readFileSync(path.join(repositoryPath, 'A.txt'), { encoding: 'utf8' })).to.be.equal('new content');
                                    return [4 /*yield*/, git.add(repository, file_uri_1.FileUri.create(path.join(repositoryPath, 'A.txt')).toString())];
                                case 1:
                                    _c.sent();
                                    _a = chai_1.expect;
                                    return [4 /*yield*/, git.show(repository, file_uri_1.FileUri.create(path.join(repositoryPath, 'A.txt')).toString(), { commitish: 'index' })];
                                case 2:
                                    _a.apply(void 0, [_c.sent()]).to.be.equal('new content');
                                    _b = chai_1.expect;
                                    return [4 /*yield*/, git.show(repository, file_uri_1.FileUri.create(path.join(repositoryPath, 'A.txt')).toString(), { commitish: 'HEAD' })];
                                case 3:
                                    _b.apply(void 0, [_c.sent()]).to.be.equal('A');
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('remote', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    it('remotes are not set by default', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri, git, remotes;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('remote-with-init');
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    return [4 /*yield*/, test_helper_1.initRepository(root)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 2:
                                    git = _a.sent();
                                    return [4 /*yield*/, git.remote({ localUri: localUri })];
                                case 3:
                                    remotes = _a.sent();
                                    chai_1.expect(remotes).to.be.empty;
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('origin is the default after a fresh clone', function () { return __awaiter(_this, void 0, void 0, function () {
                        var git, remoteUrl, localUri, options, remotes;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, binding_helper_1.createGit()];
                                case 1:
                                    git = _a.sent();
                                    remoteUrl = 'https://github.com/TypeFox/find-git-exec.git';
                                    localUri = file_uri_1.FileUri.create(track.mkdirSync('remote-with-clone')).toString();
                                    options = { localUri: localUri };
                                    return [4 /*yield*/, git.clone(remoteUrl, options)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, git.remote({ localUri: localUri })];
                                case 3:
                                    remotes = _a.sent();
                                    chai_1.expect(remotes).to.be.lengthOf(1);
                                    chai_1.expect(remotes.shift()).to.be.equal('origin');
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('remotes can be added and queried', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri, git, remotes;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('remote-with-init');
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    return [4 /*yield*/, test_helper_1.initRepository(root)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, git_1.git(['remote', 'add', 'first', 'some/location'], root, 'addRemote')];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, git_1.git(['remote', 'add', 'second', 'some/location'], root, 'addRemote')];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 4:
                                    git = _a.sent();
                                    return [4 /*yield*/, git.remote({ localUri: localUri })];
                                case 5:
                                    remotes = _a.sent();
                                    chai_1.expect(remotes).to.be.deep.equal(['first', 'second']);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('exec', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    it('version', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri, git, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('exec-version');
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    return [4 /*yield*/, test_helper_1.initRepository(root)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 2:
                                    git = _a.sent();
                                    return [4 /*yield*/, git.exec({ localUri: localUri }, ['--version'])];
                                case 3:
                                    result = _a.sent();
                                    chai_1.expect(result.stdout.trim().replace(/^git version /, '').startsWith('2')).to.be.true;
                                    chai_1.expect(result.stderr.trim()).to.be.empty;
                                    chai_1.expect(result.exitCode).to.be.equal(0);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('config', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri, git, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('exec-config');
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    return [4 /*yield*/, test_helper_1.initRepository(root)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 2:
                                    git = _a.sent();
                                    return [4 /*yield*/, git.exec({ localUri: localUri }, ['config', '-l'])];
                                case 3:
                                    result = _a.sent();
                                    chai_1.expect(result.stdout.trim()).to.be.not.empty;
                                    chai_1.expect(result.stderr.trim()).to.be.empty;
                                    chai_1.expect(result.exitCode).to.be.equal(0);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('map-status', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    it('deleted', function () {
                        chai_1.expect(common_1.GitUtils.mapStatus('D')).to.be.equal(common_1.GitFileStatus.Deleted);
                    });
                    it('added with leading whitespace', function () {
                        chai_1.expect(common_1.GitUtils.mapStatus(' A')).to.be.equal(common_1.GitFileStatus.New);
                    });
                    it('modified with trailing whitespace', function () {
                        chai_1.expect(common_1.GitUtils.mapStatus('M ')).to.be.equal(common_1.GitFileStatus.Modified);
                    });
                    it('copied with percentage', function () {
                        chai_1.expect(common_1.GitUtils.mapStatus('C100')).to.be.equal(common_1.GitFileStatus.Copied);
                    });
                    it('renamed with percentage', function () {
                        chai_1.expect(common_1.GitUtils.mapStatus('R10')).to.be.equal(common_1.GitFileStatus.Renamed);
                    });
                    return [2 /*return*/];
                });
            }); });
            describe('similarity-status', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    it('copied (2)', function () {
                        chai_1.expect(common_1.GitUtils.isSimilarityStatus('C2')).to.be.false;
                    });
                    it('copied (20)', function () {
                        chai_1.expect(common_1.GitUtils.isSimilarityStatus('C20')).to.be.false;
                    });
                    it('copied (020)', function () {
                        chai_1.expect(common_1.GitUtils.isSimilarityStatus('C020')).to.be.true;
                    });
                    it('renamed (2)', function () {
                        chai_1.expect(common_1.GitUtils.isSimilarityStatus('R2')).to.be.false;
                    });
                    it('renamed (20)', function () {
                        chai_1.expect(common_1.GitUtils.isSimilarityStatus('R20')).to.be.false;
                    });
                    it('renamed (020)', function () {
                        chai_1.expect(common_1.GitUtils.isSimilarityStatus('R020')).to.be.true;
                    });
                    it('invalid', function () {
                        chai_1.expect(common_1.GitUtils.isSimilarityStatus('invalid')).to.be.false;
                    });
                    return [2 /*return*/];
                });
            }); });
            describe('blame', function () { return __awaiter(_this, void 0, void 0, function () {
                var init;
                var _this = this;
                return __generator(this, function (_a) {
                    init = function (git, repository) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, git.exec(repository, ['init'])];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['config', 'user.name'], { successExitCodes: new Set([0, 1]) })];
                                case 2:
                                    if (!((_a.sent()).exitCode !== 0)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, git.exec(repository, ['config', 'user.name', 'User Name'])];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [4 /*yield*/, git.exec(repository, ['config', 'user.email'], { successExitCodes: new Set([0, 1]) })];
                                case 5:
                                    if (!((_a.sent()).exitCode !== 0)) return [3 /*break*/, 7];
                                    return [4 /*yield*/, git.exec(repository, ['config', 'user.email', 'user.name@domain.com'])];
                                case 6:
                                    _a.sent();
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); };
                    it('blame file with dirty content', function () { return __awaiter(_this, void 0, void 0, function () {
                        var fileName, root, filePath, localUri, repository, writeContentLines, addAndCommit, expectBlame, git;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    fileName = 'blame.me.not';
                                    root = track.mkdirSync('blame-dirty-file');
                                    filePath = path.join(root, fileName);
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    writeContentLines = function (lines) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/, fs.writeFile(filePath, lines.join('\n'), { encoding: 'utf8' })];
                                    }); }); };
                                    addAndCommit = function (message) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', "" + message])];
                                                case 2:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    expectBlame = function (content, expected) { return __awaiter(_this, void 0, void 0, function () {
                                        var uri, actual, messages, lineMessages;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    uri = file_uri_1.FileUri.create(path.join(root, fileName)).toString();
                                                    return [4 /*yield*/, git.blame(repository, uri, { content: content })];
                                                case 1:
                                                    actual = _a.sent();
                                                    chai_1.expect(actual).to.be.not.undefined;
                                                    messages = new Map(actual.commits.map(function (c) { return [c.sha, c.summary]; }));
                                                    lineMessages = actual.lines.map(function (l) { return [l.line, messages.get(l.sha)]; });
                                                    chai_1.expect(lineMessages).to.be.deep.equal(expected);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 1:
                                    git = _a.sent();
                                    return [4 /*yield*/, init(git, repository)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(filePath)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, writeContentLines(['🍏', '🍏', '🍏', '🍏', '🍏', '🍏'])];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, addAndCommit('six 🍏')];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, expectBlame(['🍏', '🍐', '🍐', '🍏', '🍏', '🍏'].join('\n'), [
                                            [0, 'six 🍏'],
                                            [1, 'uncommitted'],
                                            [2, 'uncommitted'],
                                            [3, 'six 🍏'],
                                            [4, 'six 🍏'],
                                            [5, 'six 🍏'],
                                        ])];
                                case 6:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('uncommitted file', function () { return __awaiter(_this, void 0, void 0, function () {
                        var fileName, root, filePath, localUri, repository, writeContentLines, add, expectUndefinedBlame, git;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    fileName = 'uncommitted.file';
                                    root = track.mkdirSync('try-blame');
                                    filePath = path.join(root, fileName);
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    writeContentLines = function (lines) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/, fs.writeFile(filePath, lines.join('\n'), { encoding: 'utf8' })];
                                    }); }); };
                                    add = function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    expectUndefinedBlame = function () { return __awaiter(_this, void 0, void 0, function () {
                                        var uri, actual;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    uri = file_uri_1.FileUri.create(path.join(root, fileName)).toString();
                                                    return [4 /*yield*/, git.blame(repository, uri)];
                                                case 1:
                                                    actual = _a.sent();
                                                    chai_1.expect(actual).to.be.undefined;
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 1:
                                    git = _a.sent();
                                    return [4 /*yield*/, init(git, repository)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(filePath)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, writeContentLines(['🍏', '🍏', '🍏', '🍏', '🍏', '🍏'])];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, expectUndefinedBlame()];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, add()];
                                case 6:
                                    _a.sent();
                                    return [4 /*yield*/, expectUndefinedBlame()];
                                case 7:
                                    _a.sent();
                                    return [4 /*yield*/, writeContentLines(['🍏', '🍐', '🍐', '🍏', '🍏', '🍏'])];
                                case 8:
                                    _a.sent();
                                    return [4 /*yield*/, expectUndefinedBlame()];
                                case 9:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('blame file', function () { return __awaiter(_this, void 0, void 0, function () {
                        var fileName, root, filePath, localUri, repository, writeContentLines, addAndCommit, expectBlame, git;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    fileName = 'blame.me';
                                    root = track.mkdirSync('blame-file');
                                    filePath = path.join(root, fileName);
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    writeContentLines = function (lines) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/, fs.writeFile(filePath, lines.join('\n'), { encoding: 'utf8' })];
                                    }); }); };
                                    addAndCommit = function (message) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', "" + message])];
                                                case 2:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    expectBlame = function (expected) { return __awaiter(_this, void 0, void 0, function () {
                                        var uri, actual, messages, lineMessages;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    uri = file_uri_1.FileUri.create(path.join(root, fileName)).toString();
                                                    return [4 /*yield*/, git.blame(repository, uri)];
                                                case 1:
                                                    actual = _a.sent();
                                                    chai_1.expect(actual).to.be.not.undefined;
                                                    messages = new Map(actual.commits.map(function (c) { return [c.sha, c.summary]; }));
                                                    lineMessages = actual.lines.map(function (l) { return [l.line, messages.get(l.sha)]; });
                                                    chai_1.expect(lineMessages).to.be.deep.equal(expected);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 1:
                                    git = _a.sent();
                                    return [4 /*yield*/, init(git, repository)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(filePath)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, writeContentLines(['🍏', '🍏', '🍏', '🍏', '🍏', '🍏'])];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, addAndCommit('six 🍏')];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, writeContentLines(['🍏', '🍐', '🍐', '🍏', '🍏', '🍏'])];
                                case 6:
                                    _a.sent();
                                    return [4 /*yield*/, addAndCommit('replace two with 🍐')];
                                case 7:
                                    _a.sent();
                                    return [4 /*yield*/, writeContentLines(['🍏', '🍐', '🍋', '🍋', '🍏', '🍏'])];
                                case 8:
                                    _a.sent();
                                    return [4 /*yield*/, addAndCommit('replace two with 🍋')];
                                case 9:
                                    _a.sent();
                                    return [4 /*yield*/, writeContentLines(['🍏', '🍐', '🍋', '🍌', '🍌', '🍏'])];
                                case 10:
                                    _a.sent();
                                    return [4 /*yield*/, expectBlame([
                                            [0, 'six 🍏'],
                                            [1, 'replace two with 🍐'],
                                            [2, 'replace two with 🍋'],
                                            [3, 'uncommitted'],
                                            [4, 'uncommitted'],
                                            [5, 'six 🍏'],
                                        ])];
                                case 11:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('commit summary and body', function () { return __awaiter(_this, void 0, void 0, function () {
                        var fileName, root, filePath, localUri, repository, writeContentLines, addAndCommit, expectBlame, git;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    fileName = 'blame.me';
                                    root = track.mkdirSync('blame-with-commit-body');
                                    filePath = path.join(root, fileName);
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    writeContentLines = function (lines) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/, fs.writeFile(filePath, lines.join('\n'), { encoding: 'utf8' })];
                                    }); }); };
                                    addAndCommit = function (message) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', "" + message])];
                                                case 2:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    expectBlame = function (expected) { return __awaiter(_this, void 0, void 0, function () {
                                        var uri, actual, messages, lineMessages;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    uri = file_uri_1.FileUri.create(path.join(root, fileName)).toString();
                                                    return [4 /*yield*/, git.blame(repository, uri)];
                                                case 1:
                                                    actual = _a.sent();
                                                    chai_1.expect(actual).to.be.not.undefined;
                                                    messages = new Map(actual.commits.map(function (c) { return [c.sha, [c.summary, c.body]]; }));
                                                    lineMessages = actual.lines.map(function (l) { return __spread([l.line], messages.get(l.sha)); });
                                                    chai_1.expect(lineMessages).to.be.deep.equal(expected);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 1:
                                    git = _a.sent();
                                    return [4 /*yield*/, init(git, repository)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(filePath)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, writeContentLines(['🍏'])];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, addAndCommit('add 🍏\n* green\n* red')];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, expectBlame([
                                            [0, 'add 🍏', '* green\n* red']
                                        ])];
                                case 6:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('diff', function () { return __awaiter(_this, void 0, void 0, function () {
                var init;
                var _this = this;
                return __generator(this, function (_a) {
                    init = function (git, repository) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, git.exec(repository, ['init'])];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['config', 'user.name'], { successExitCodes: new Set([0, 1]) })];
                                case 2:
                                    if (!((_a.sent()).exitCode !== 0)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, git.exec(repository, ['config', 'user.name', 'User Name'])];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [4 /*yield*/, git.exec(repository, ['config', 'user.email'], { successExitCodes: new Set([0, 1]) })];
                                case 5:
                                    if (!((_a.sent()).exitCode !== 0)) return [3 /*break*/, 7];
                                    return [4 /*yield*/, git.exec(repository, ['config', 'user.email', 'user.name@domain.com'])];
                                case 6:
                                    _a.sent();
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); };
                    it('diff without ranges / unstaged', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri, repository, git, expectDiff;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('diff-without-ranges');
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'A.txt'))];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'A.txt'), 'A content', { encoding: 'utf8' })];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 3:
                                    git = _a.sent();
                                    return [4 /*yield*/, init(git, repository)];
                                case 4:
                                    _a.sent();
                                    expectDiff = function (expected) { return __awaiter(_this, void 0, void 0, function () {
                                        var actual;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, git.diff(repository)];
                                                case 1:
                                                    actual = (_a.sent()).map(function (change) { return ChangeDelta.map(repository, change); }).sort(ChangeDelta.compare);
                                                    chai_1.expect(actual).to.be.deep.equal(expected);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Initialized."'])];
                                case 6:
                                    _a.sent(); // HEAD
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'B.txt'))];
                                case 7:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'B.txt'), 'B content', { encoding: 'utf8' })];
                                case 8:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff([])];
                                case 9:
                                    _a.sent(); // Unstaged (new)
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'A.txt'), 'updated A content', { encoding: 'utf8' })];
                                case 10:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff([{ pathSegment: 'A.txt', status: common_1.GitFileStatus.Modified }])];
                                case 11:
                                    _a.sent(); // Unstaged (modified)
                                    return [4 /*yield*/, fs.unlink(path.join(root, 'A.txt'))];
                                case 12:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff([{ pathSegment: 'A.txt', status: common_1.GitFileStatus.Deleted }])];
                                case 13:
                                    _a.sent(); // Unstaged (deleted)
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('diff without ranges / staged', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri, repository, git, expectDiff;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('diff-without-ranges');
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'A.txt'))];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'A.txt'), 'A content', { encoding: 'utf8' })];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 3:
                                    git = _a.sent();
                                    return [4 /*yield*/, init(git, repository)];
                                case 4:
                                    _a.sent();
                                    expectDiff = function (expected) { return __awaiter(_this, void 0, void 0, function () {
                                        var actual;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, git.diff(repository)];
                                                case 1:
                                                    actual = (_a.sent()).map(function (change) { return ChangeDelta.map(repository, change); }).sort(ChangeDelta.compare);
                                                    chai_1.expect(actual).to.be.deep.equal(expected);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Initialized."'])];
                                case 6:
                                    _a.sent(); // HEAD
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'B.txt'))];
                                case 7:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'B.txt'), 'B content', { encoding: 'utf8' })];
                                case 8:
                                    _a.sent();
                                    return [4 /*yield*/, git.add(repository, file_uri_1.FileUri.create(path.join(root, 'B.txt')).toString())];
                                case 9:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff([{ pathSegment: 'B.txt', status: common_1.GitFileStatus.New }])];
                                case 10:
                                    _a.sent(); // Staged (new)
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'A.txt'), 'updated A content', { encoding: 'utf8' })];
                                case 11:
                                    _a.sent();
                                    return [4 /*yield*/, git.add(repository, file_uri_1.FileUri.create(path.join(root, 'A.txt')).toString())];
                                case 12:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff([{ pathSegment: 'A.txt', status: common_1.GitFileStatus.Modified }, { pathSegment: 'B.txt', status: common_1.GitFileStatus.New }])];
                                case 13:
                                    _a.sent(); // Staged (modified)
                                    return [4 /*yield*/, fs.unlink(path.join(root, 'A.txt'))];
                                case 14:
                                    _a.sent();
                                    return [4 /*yield*/, git.add(repository, file_uri_1.FileUri.create(path.join(root, 'A.txt')).toString())];
                                case 15:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff([{ pathSegment: 'A.txt', status: common_1.GitFileStatus.Deleted }, { pathSegment: 'B.txt', status: common_1.GitFileStatus.New }])];
                                case 16:
                                    _a.sent(); // Staged (deleted)
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('diff with ranges', function () { return __awaiter(_this, void 0, void 0, function () {
                        var root, localUri, repository, git, expectDiff;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    root = track.mkdirSync('diff-with-ranges');
                                    localUri = file_uri_1.FileUri.create(root).toString();
                                    repository = { localUri: localUri };
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'A.txt'))];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'A.txt'), 'A content', { encoding: 'utf8' })];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'B.txt'))];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'B.txt'), 'B content', { encoding: 'utf8' })];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, fs.mkdir(path.join(root, 'folder'))];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'folder', 'F1.txt'))];
                                case 6:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'folder', 'F1.txt'), 'F1 content', { encoding: 'utf8' })];
                                case 7:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'folder', 'F2.txt'))];
                                case 8:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'folder', 'F2.txt'), 'F2 content', { encoding: 'utf8' })];
                                case 9:
                                    _a.sent();
                                    return [4 /*yield*/, binding_helper_1.createGit()];
                                case 10:
                                    git = _a.sent();
                                    return [4 /*yield*/, init(git, repository)];
                                case 11:
                                    _a.sent();
                                    expectDiff = function (fromRevision, toRevision, expected, filePath) { return __awaiter(_this, void 0, void 0, function () {
                                        var range, uri, options, actual;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    range = { fromRevision: fromRevision, toRevision: toRevision };
                                                    if (filePath) {
                                                        uri = file_uri_1.FileUri.create(path.join(root, filePath)).toString();
                                                    }
                                                    options = { range: range, uri: uri };
                                                    return [4 /*yield*/, git.diff(repository, options)];
                                                case 1:
                                                    actual = (_a.sent()).map(function (change) { return ChangeDelta.map(repository, change); }).sort(ChangeDelta.compare);
                                                    chai_1.expect(actual).to.be.deep.equal(expected, "Between " + fromRevision + ".." + toRevision);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 12:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Commit 1 on master."'])];
                                case 13:
                                    _a.sent(); // HEAD~4
                                    return [4 /*yield*/, git.exec(repository, ['checkout', '-b', 'new-branch'])];
                                case 14:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'A.txt'), 'updated A content', { encoding: 'utf8' })];
                                case 15:
                                    _a.sent();
                                    return [4 /*yield*/, fs.unlink(path.join(root, 'B.txt'))];
                                case 16:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 17:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Commit 1 on new-branch."'])];
                                case 18:
                                    _a.sent(); // new-branch~2
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'C.txt'))];
                                case 19:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'C.txt'), 'C content', { encoding: 'utf8' })];
                                case 20:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 21:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Commit 2 on new-branch."'])];
                                case 22:
                                    _a.sent(); // new-branch~1
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'B.txt'))];
                                case 23:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'B.txt'), 'B content', { encoding: 'utf8' })];
                                case 24:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 25:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Commit 3 on new-branch."'])];
                                case 26:
                                    _a.sent(); // new-branch
                                    return [4 /*yield*/, git.exec(repository, ['checkout', 'master'])];
                                case 27:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'C.txt'))];
                                case 28:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'C.txt'), 'C content', { encoding: 'utf8' })];
                                case 29:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 30:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Commit 2 on master."'])];
                                case 31:
                                    _a.sent(); // HEAD~3
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'D.txt'))];
                                case 32:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'D.txt'), 'D content', { encoding: 'utf8' })];
                                case 33:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 34:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Commit 3 on master."'])];
                                case 35:
                                    _a.sent(); // HEAD~2
                                    return [4 /*yield*/, fs.unlink(path.join(root, 'B.txt'))];
                                case 36:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 37:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Commit 4 on master."'])];
                                case 38:
                                    _a.sent(); // HEAD~1
                                    return [4 /*yield*/, fs.unlink(path.join(root, 'folder', 'F1.txt'))];
                                case 39:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'folder', 'F2.txt'), 'updated F2 content', { encoding: 'utf8' })];
                                case 40:
                                    _a.sent();
                                    return [4 /*yield*/, fs.createFile(path.join(root, 'folder', 'F3 with space.txt'))];
                                case 41:
                                    _a.sent();
                                    return [4 /*yield*/, fs.writeFile(path.join(root, 'folder', 'F3 with space.txt'), 'F3 content', { encoding: 'utf8' })];
                                case 42:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['add', '.'])];
                                case 43:
                                    _a.sent();
                                    return [4 /*yield*/, git.exec(repository, ['commit', '-m', '"Commit 5 on master."'])];
                                case 44:
                                    _a.sent(); // HEAD
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD~3', [{ pathSegment: 'C.txt', status: common_1.GitFileStatus.New }])];
                                case 45:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD~2', [{ pathSegment: 'C.txt', status: common_1.GitFileStatus.New }, { pathSegment: 'D.txt', status: common_1.GitFileStatus.New }])];
                                case 46:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD~1', [{ pathSegment: 'B.txt', status: common_1.GitFileStatus.Deleted }, { pathSegment: 'C.txt', status: common_1.GitFileStatus.New }, { pathSegment: 'D.txt', status: common_1.GitFileStatus.New }])];
                                case 47:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('HEAD~3', 'HEAD~2', [{ pathSegment: 'D.txt', status: common_1.GitFileStatus.New }])];
                                case 48:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('HEAD~3', 'HEAD~1', [{ pathSegment: 'B.txt', status: common_1.GitFileStatus.Deleted }, { pathSegment: 'D.txt', status: common_1.GitFileStatus.New }])];
                                case 49:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('HEAD~2', 'HEAD~1', [{ pathSegment: 'B.txt', status: common_1.GitFileStatus.Deleted }])];
                                case 50:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('new-branch~2', 'new-branch~1', [{ pathSegment: 'C.txt', status: common_1.GitFileStatus.New }])];
                                case 51:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('new-branch~2', 'new-branch', [{ pathSegment: 'B.txt', status: common_1.GitFileStatus.New }, { pathSegment: 'C.txt', status: common_1.GitFileStatus.New }])];
                                case 52:
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('new-branch~1', 'new-branch', [{ pathSegment: 'B.txt', status: common_1.GitFileStatus.New }])];
                                case 53:
                                    _a.sent();
                                    // Filter for a whole folder and its descendants.
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD~3', [], 'folder')];
                                case 54:
                                    // Filter for a whole folder and its descendants.
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD', [
                                            { pathSegment: 'folder/F1.txt', status: common_1.GitFileStatus.Deleted },
                                            { pathSegment: 'folder/F2.txt', status: common_1.GitFileStatus.Modified },
                                            { pathSegment: 'folder/F3 with space.txt', status: common_1.GitFileStatus.New },
                                        ], 'folder')];
                                case 55:
                                    _a.sent();
                                    // Filter for a single file.
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD~3', [], 'folder/F1.txt')];
                                case 56:
                                    // Filter for a single file.
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD', [
                                            { pathSegment: 'folder/F1.txt', status: common_1.GitFileStatus.Deleted },
                                        ], 'folder/F1.txt')];
                                case 57:
                                    _a.sent();
                                    // Filter for a non-existing file.
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD~3', [], 'does not exist')];
                                case 58:
                                    // Filter for a non-existing file.
                                    _a.sent();
                                    return [4 /*yield*/, expectDiff('HEAD~4', 'HEAD', [], 'does not exist')];
                                case 59:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('branch', function () {
                it('should list the branch in chronological order', function () { return __awaiter(_this, void 0, void 0, function () {
                    var root, localUri, repository, git, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                root = track.mkdirSync('branch-order');
                                localUri = file_uri_1.FileUri.create(root).toString();
                                repository = { localUri: localUri };
                                return [4 /*yield*/, binding_helper_1.createGit()];
                            case 1:
                                git = _b.sent();
                                return [4 /*yield*/, test_helper_1.createTestRepository(root)];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, git.exec(repository, ['checkout', '-b', 'a'])];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, git.exec(repository, ['checkout', 'master'])];
                            case 4:
                                _b.sent();
                                return [4 /*yield*/, git.exec(repository, ['checkout', '-b', 'b'])];
                            case 5:
                                _b.sent();
                                return [4 /*yield*/, git.exec(repository, ['checkout', 'master'])];
                            case 6:
                                _b.sent();
                                return [4 /*yield*/, git.exec(repository, ['checkout', '-b', 'c'])];
                            case 7:
                                _b.sent();
                                return [4 /*yield*/, git.exec(repository, ['checkout', 'master'])];
                            case 8:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, git.branch(repository, { type: 'local' })];
                            case 9:
                                _a.apply(void 0, [(_b.sent()).map(function (b) { return b.nameWithoutRemote; })]).to.be.deep.equal(['master', 'c', 'b', 'a']);
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            describe('ls-files', function () {
                var git;
                var root;
                var localUri;
                before(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                root = track.mkdirSync('ls-files');
                                localUri = file_uri_1.FileUri.create(root).toString();
                                return [4 /*yield*/, binding_helper_1.createGit()];
                            case 1:
                                git = _a.sent();
                                return [4 /*yield*/, test_helper_1.createTestRepository(root)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                [
                    ['A.txt', true],
                    ['missing.txt', false],
                    ['../outside.txt', false],
                ].forEach(function (test) {
                    var _a = __read(test, 2), relativePath = _a[0], expectation = _a[1];
                    var message = (expectation ? '' : 'not ') + "exist";
                    it("errorUnmatched - " + relativePath + " should " + message, function () { return __awaiter(_this, void 0, void 0, function () {
                        var uri, testMe, _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    uri = relativePath.startsWith('.') ? relativePath : file_uri_1.FileUri.create(path.join(root, relativePath)).toString();
                                    testMe = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/, git.lsFiles({ localUri: localUri }, uri, { errorUnmatch: true })];
                                    }); }); };
                                    _a = chai_1.expect;
                                    return [4 /*yield*/, testMe()];
                                case 1:
                                    _a.apply(void 0, [_b.sent()]).to.be.equal(expectation);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
            });
            return [2 /*return*/];
        });
    });
});
describe('log', function () {
    var _this = this;
    // See https://github.com/eclipse-theia/theia/issues/2143
    it('should not fail when executed from the repository root', function () { return __awaiter(_this, void 0, void 0, function () {
        var git, root, localUri, repository, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, binding_helper_1.createGit()];
                case 1:
                    git = _a.sent();
                    return [4 /*yield*/, test_helper_1.createTestRepository(track.mkdirSync('log-test'))];
                case 2:
                    root = _a.sent();
                    localUri = file_uri_1.FileUri.create(root).toString();
                    repository = { localUri: localUri };
                    return [4 /*yield*/, git.log(repository, { uri: localUri })];
                case 3:
                    result = _a.sent();
                    chai_1.expect(result.length).to.be.equal(1);
                    chai_1.expect(result[0].author.email).to.be.equal('jon@doe.com');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not fail when executed against an empty repository', function () { return __awaiter(_this, void 0, void 0, function () {
        var git, root, localUri, repository, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, binding_helper_1.createGit()];
                case 1:
                    git = _a.sent();
                    return [4 /*yield*/, test_helper_1.initRepository(track.mkdirSync('empty-log-test'))];
                case 2:
                    root = _a.sent();
                    localUri = file_uri_1.FileUri.create(root).toString();
                    repository = { localUri: localUri };
                    return [4 /*yield*/, git.log(repository, { uri: localUri })];
                case 3:
                    result = _a.sent();
                    chai_1.expect(result.length).to.be.equal(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
function toPathSegment(repository, uri) {
    return upath.relative(file_uri_1.FileUri.fsPath(repository.localUri), file_uri_1.FileUri.fsPath(uri));
}
var ChangeDelta;
(function (ChangeDelta) {
    function compare(left, right) {
        var result = left.pathSegment.localeCompare(right.pathSegment);
        if (result === 0) {
            return left.status - right.status;
        }
        return result;
    }
    ChangeDelta.compare = compare;
    function map(repository, fileChange) {
        return {
            pathSegment: toPathSegment(repository, fileChange.uri),
            status: fileChange.status
        };
    }
    ChangeDelta.map = map;
})(ChangeDelta || (ChangeDelta = {}));
//# sourceMappingURL=dugite-git.spec.js.map
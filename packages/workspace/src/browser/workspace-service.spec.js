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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var inversify_1 = require("inversify");
var workspace_service_1 = require("./workspace-service");
var common_1 = require("@theia/filesystem/lib/common");
var frontend_application_config_provider_1 = require("@theia/core/lib/browser/frontend-application-config-provider");
var node_filesystem_1 = require("@theia/filesystem/lib/node/node-filesystem");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var window_service_1 = require("@theia/core/lib/browser/window/window-service");
var default_window_service_1 = require("@theia/core/lib/browser/window/default-window-service");
var common_2 = require("../common");
var default_workspace_server_1 = require("../node/default-workspace-server");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var workspace_preferences_1 = require("./workspace-preferences");
var test_1 = require("@theia/core/lib/browser/preferences/test");
var jsoncparser = require("jsonc-parser");
var sinon = require("sinon");
var chai = require("chai");
var assert = require("assert");
var uri_1 = require("@theia/core/lib/common/uri");
var expect = chai.expect;
disableJSDOM();
var folderA = Object.freeze({
    uri: 'file:///home/folderA',
    lastModification: 0,
    isDirectory: true
});
var folderB = Object.freeze({
    uri: 'file:///home/folderB',
    lastModification: 0,
    isDirectory: true
});
var getFormattedJson = function (data) {
    var edits = jsoncparser.format(data, undefined, { tabSize: 3, insertSpaces: true, eol: '' });
    return jsoncparser.applyEdits(data, edits);
};
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
describe('WorkspaceService', function () {
    var toRestore = [];
    var toDispose = [];
    var wsService;
    var updateTitleStub;
    // stub of window.location.reload
    var windowLocationReloadStub;
    var onFilesChangedStub;
    var mockFileChangeEmitter;
    var mockPreferenceValues;
    var mockFilesystem;
    var mockFileSystemWatcher;
    var mockWorkspaceServer;
    var mockWindowService;
    var mockILogger;
    var mockPref;
    var mockPreferenceServiceImpl;
    var mockPreferenceSchemaProvider;
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
        frontend_application_config_provider_1.FrontendApplicationConfigProvider.set({
            'applicationName': 'test',
        });
    });
    after(function () {
        disableJSDOM();
    });
    beforeEach(function () {
        mockPreferenceValues = {};
        mockFilesystem = sinon.createStubInstance(node_filesystem_1.FileSystemNode);
        mockFileSystemWatcher = sinon.createStubInstance(filesystem_watcher_1.FileSystemWatcher);
        mockWorkspaceServer = sinon.createStubInstance(default_workspace_server_1.DefaultWorkspaceServer);
        mockWindowService = sinon.createStubInstance(default_window_service_1.DefaultWindowService);
        mockILogger = sinon.createStubInstance(core_1.Logger);
        mockPref = test_1.createMockPreferenceProxy(mockPreferenceValues);
        mockPreferenceServiceImpl = sinon.createStubInstance(browser_1.PreferenceServiceImpl);
        mockPreferenceSchemaProvider = sinon.createStubInstance(browser_1.PreferenceSchemaProvider);
        var testContainer = new inversify_1.Container();
        testContainer.bind(workspace_service_1.WorkspaceService).toSelf().inSingletonScope();
        testContainer.bind(common_1.FileSystem).toConstantValue(mockFilesystem);
        testContainer.bind(filesystem_watcher_1.FileSystemWatcher).toConstantValue(mockFileSystemWatcher);
        testContainer.bind(common_2.WorkspaceServer).toConstantValue(mockWorkspaceServer);
        testContainer.bind(window_service_1.WindowService).toConstantValue(mockWindowService);
        testContainer.bind(core_1.ILogger).toConstantValue(mockILogger);
        testContainer.bind(workspace_preferences_1.WorkspacePreferences).toConstantValue(mockPref);
        testContainer.bind(browser_1.PreferenceServiceImpl).toConstantValue(mockPreferenceServiceImpl);
        testContainer.bind(browser_1.PreferenceSchemaProvider).toConstantValue(mockPreferenceSchemaProvider);
        // stub the updateTitle() & reloadWindow() function because `document` and `window` are unavailable
        updateTitleStub = sinon.stub(workspace_service_1.WorkspaceService.prototype, 'updateTitle').callsFake(function () { });
        windowLocationReloadStub = sinon.stub(window.location, 'reload');
        mockFileChangeEmitter = new core_1.Emitter();
        onFilesChangedStub = sinon.stub(mockFileSystemWatcher, 'onFilesChanged').value(mockFileChangeEmitter.event);
        toDispose.push(mockFileChangeEmitter);
        toRestore.push.apply(toRestore, __spread([updateTitleStub, windowLocationReloadStub, onFilesChangedStub]));
        wsService = testContainer.get(workspace_service_1.WorkspaceService);
    });
    afterEach(function () {
        wsService['toDisposeOnWorkspace'].dispose();
        toRestore.forEach(function (res) {
            res.restore();
        });
        toRestore.length = 0;
        toDispose.forEach(function (dis) { return dis.dispose(); });
        toDispose.length = 0;
    });
    describe('constructor and init', function () {
        it('should reset the exposed roots and title if the most recently used workspace is unavailable', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mockWorkspaceServer.getMostRecentlyUsedWorkspace.resolves(undefined);
                        return [4 /*yield*/, wsService['init']()];
                    case 1:
                        _b.sent();
                        expect(wsService.workspace).to.to.be.undefined;
                        _a = expect;
                        return [4 /*yield*/, wsService.roots];
                    case 2:
                        _a.apply(void 0, [(_b.sent()).length]).to.eq(0);
                        expect(wsService.tryGetRoots().length).to.eq(0);
                        expect(updateTitleStub.called).to.be.true;
                        expect(window.location.hash).to.be.empty;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should reset the exposed roots and title if server returns an invalid or nonexistent file / folder', function () { return __awaiter(void 0, void 0, void 0, function () {
            var invalidStat, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        invalidStat = {
                            uri: 'file:///home/invalid',
                            lastModification: 0,
                            isDirectory: true
                        };
                        mockWorkspaceServer.getMostRecentlyUsedWorkspace.resolves(invalidStat.uri);
                        mockFilesystem.getFileStat.resolves(undefined);
                        mockFileSystemWatcher.watchFileChanges.resolves(new core_1.DisposableCollection());
                        return [4 /*yield*/, wsService['init']()];
                    case 1:
                        _b.sent();
                        expect(wsService.workspace).to.to.be.undefined;
                        _a = expect;
                        return [4 /*yield*/, wsService.roots];
                    case 2:
                        _a.apply(void 0, [(_b.sent()).length]).to.eq(0);
                        expect(wsService.tryGetRoots().length).to.eq(0);
                        expect(updateTitleStub.called).to.be.true;
                        expect(window.location.hash).to.be.empty;
                        return [2 /*return*/];
                }
            });
        }); });
        ['/home/oneFolder', '/home/oneFolder/'].forEach(function (uriStr) {
            it('should set the exposed roots and workspace to the folder returned by server as the most recently used workspace, and start watching that folder', function () { return __awaiter(void 0, void 0, void 0, function () {
                var stat, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            stat = {
                                uri: 'file://' + uriStr,
                                lastModification: 0,
                                isDirectory: true
                            };
                            mockWorkspaceServer.getMostRecentlyUsedWorkspace.resolves(stat.uri);
                            mockFilesystem.getFileStat.resolves(stat);
                            mockFileSystemWatcher.watchFileChanges.resolves(new core_1.DisposableCollection());
                            return [4 /*yield*/, wsService['init']()];
                        case 1:
                            _b.sent();
                            expect(wsService.workspace).to.eq(stat);
                            _a = expect;
                            return [4 /*yield*/, wsService.roots];
                        case 2:
                            _a.apply(void 0, [(_b.sent()).length]).to.eq(1);
                            expect(wsService.tryGetRoots().length).to.eq(1);
                            expect(wsService.tryGetRoots()[0]).to.eq(stat);
                            expect(mockFileSystemWatcher.watchFileChanges.calledWith(new uri_1.default(stat.uri))).to.be.true;
                            expect(window.location.hash).eq('#' + uriStr);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        it('should set the exposed roots and workspace to the folders listed in the workspace file returned by the server, ' +
            'and start watching the workspace file and all the folders', function () { return __awaiter(void 0, void 0, void 0, function () {
            var workspaceFilePath, workspaceFileUri, workspaceFileStat, rootA, rootB, stubGetFileStat, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        workspaceFilePath = '/home/workspaceFile';
                        workspaceFileUri = 'file://' + workspaceFilePath;
                        workspaceFileStat = {
                            uri: workspaceFileUri,
                            lastModification: 0,
                            isDirectory: false
                        };
                        rootA = 'file:///folderA';
                        rootB = 'file:///folderB';
                        mockWorkspaceServer.getMostRecentlyUsedWorkspace.resolves(workspaceFileStat.uri);
                        stubGetFileStat = mockFilesystem.getFileStat;
                        stubGetFileStat.withArgs(workspaceFileUri).resolves(workspaceFileStat);
                        mockFilesystem.exists.resolves(true);
                        mockFilesystem.resolveContent.resolves({
                            stat: workspaceFileStat,
                            content: "{\"folders\":[{\"path\":\"" + rootA + "\"},{\"path\":\"" + rootB + "\"}],\"settings\":{}}"
                        });
                        stubGetFileStat.withArgs(rootA).resolves({
                            uri: rootA, lastModification: 0, isDirectory: true
                        }); // rootA exists
                        stubGetFileStat.withArgs(rootB).throws(new Error()); // no access to rootB
                        mockFileSystemWatcher.watchFileChanges.resolves(new core_1.DisposableCollection());
                        return [4 /*yield*/, wsService['init']()];
                    case 1:
                        _b.sent();
                        expect(wsService.workspace).to.eq(workspaceFileStat);
                        _a = expect;
                        return [4 /*yield*/, wsService.roots];
                    case 2:
                        _a.apply(void 0, [(_b.sent()).length]).to.eq(2);
                        expect(wsService.tryGetRoots().length).to.eq(2);
                        expect(wsService.tryGetRoots()[0].uri).to.eq(rootA);
                        expect(wsService.tryGetRoots()[1].uri).to.eq(rootB);
                        expect(window.location.hash).to.eq('#' + workspaceFilePath);
                        expect(wsService['rootWatchers'].size).to.eq(2);
                        expect(wsService['rootWatchers'].has(rootA)).to.be.true;
                        expect(wsService['rootWatchers'].has(rootB)).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should set the exposed roots an empty array if the workspace file stores invalid workspace data', function () { return __awaiter(void 0, void 0, void 0, function () {
            var workspaceFileUri, workspaceFileStat, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        workspaceFileUri = 'file:///home/workspaceFile';
                        workspaceFileStat = {
                            uri: workspaceFileUri,
                            lastModification: 0,
                            isDirectory: false
                        };
                        mockWorkspaceServer.getMostRecentlyUsedWorkspace.resolves(workspaceFileStat.uri);
                        mockFilesystem.getFileStat.withArgs(workspaceFileUri).resolves(workspaceFileStat);
                        mockFilesystem.exists.resolves(true);
                        mockFilesystem.resolveContent.resolves({
                            stat: workspaceFileStat,
                            content: 'invalid workspace data'
                        });
                        mockFileSystemWatcher.watchFileChanges.resolves(new core_1.DisposableCollection());
                        return [4 /*yield*/, wsService['init']()];
                    case 1:
                        _b.sent();
                        expect(wsService.workspace && wsService.workspace.uri).to.eq(workspaceFileStat.uri);
                        _a = expect;
                        return [4 /*yield*/, wsService.roots];
                    case 2:
                        _a.apply(void 0, [(_b.sent()).length]).to.eq(0);
                        expect(wsService.tryGetRoots().length).to.eq(0);
                        expect(mockILogger.error.called).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use the workspace path in the URL fragment, if available', function () {
            return __awaiter(this, void 0, void 0, function () {
                var workspacePath, stat, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            workspacePath = '/home/somewhere';
                            window.location.hash = '#' + workspacePath;
                            stat = {
                                uri: 'file://' + workspacePath,
                                lastModification: 0,
                                isDirectory: true
                            };
                            mockFilesystem.getFileStat.resolves(stat);
                            mockFileSystemWatcher.watchFileChanges.resolves(new core_1.DisposableCollection());
                            return [4 /*yield*/, wsService['init']()];
                        case 1:
                            _b.sent();
                            expect(wsService.workspace).to.eq(stat);
                            _a = expect;
                            return [4 /*yield*/, wsService.roots];
                        case 2:
                            _a.apply(void 0, [(_b.sent()).length]).to.eq(1);
                            expect(wsService.tryGetRoots().length).to.eq(1);
                            expect(wsService.tryGetRoots()[0]).to.eq(stat);
                            expect(mockFileSystemWatcher.watchFileChanges.calledWith(new uri_1.default(stat.uri))).to.be.true;
                            expect(window.location.hash).to.eq('#' + workspacePath);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('onStop() function', function () {
        it('should send server an empty string if there is no workspace', function () {
            wsService['_workspace'] = undefined;
            wsService.onStop();
            expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith('')).to.be.true;
        });
        it('should send server the uri of current workspace if there is workspace opened', function () {
            var uri = 'file:///home/testUri';
            wsService['_workspace'] = {
                uri: uri,
                lastModification: 0,
                isDirectory: false
            };
            wsService.onStop();
            expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith(uri)).to.be.true;
        });
    });
    describe('recentWorkspaces() function', function () {
        it('should get the recent workspaces from the server', function () {
            wsService.recentWorkspaces();
            expect(mockWorkspaceServer.getRecentWorkspaces.called).to.be.true;
        });
    });
    describe('open() function', function () {
        it('should call doOpen() with exactly the same arguments', function () {
            var uri = new uri_1.default('file:///home/testUri');
            toRestore.push(sinon.stub(workspace_service_1.WorkspaceService.prototype, 'doOpen').callsFake(function () { }));
            wsService.open(uri, {});
            expect(wsService['doOpen'].calledWith(uri, {})).to.be.true;
        });
        it('should throw an error if the uri passed in is invalid or nonexistent', function (done) {
            mockFilesystem.getFileStat.resolves(undefined);
            wsService['doOpen'](new uri_1.default('file:///home/testUri'))
                .then(function () {
                done(new Error('WorkspaceService.doOpen() should throw an error but did not'));
            }).catch(function (e) {
                expect(window.location.hash).to.be.empty;
                done();
            });
        });
        it('should reload the current window with new uri if preferences["workspace.preserveWindow"] = true and there is an opened current workspace', function () { return __awaiter(void 0, void 0, void 0, function () {
            var newPath, newUriStr, newUri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mockPreferenceValues['workspace.preserveWindow'] = true;
                        newPath = '/home/newWorkspaceUri';
                        newUriStr = 'file://' + newPath;
                        newUri = new uri_1.default(newUriStr);
                        stat = {
                            uri: newUriStr,
                            lastModification: 0,
                            isDirectory: true
                        };
                        mockFilesystem.getFileStat.resolves(stat);
                        toRestore.push(sinon.stub(wsService, 'roots').resolves([stat]));
                        wsService['_workspace'] = stat;
                        return [4 /*yield*/, wsService['doOpen'](newUri, {})];
                    case 1:
                        _a.sent();
                        expect(windowLocationReloadStub.called).to.be.true;
                        expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith(newUriStr)).to.be.true;
                        expect(wsService.workspace).to.eq(stat);
                        expect(window.location.hash).to.eq('#' + newPath);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should keep the old Theia window & open a new window if preferences["workspace.preserveWindow"] = false and there is an opened current workspace', function () { return __awaiter(void 0, void 0, void 0, function () {
            var oldWorkspacePath, oldWorkspaceUriStr, oldStat, newWorkspaceUriStr, uri, newStat, stubOpenNewWindow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mockPreferenceValues['workspace.preserveWindow'] = false;
                        oldWorkspacePath = '/home/oldWorkspaceUri';
                        oldWorkspaceUriStr = 'file:///home/oldWorkspaceUri';
                        oldStat = {
                            uri: oldWorkspaceUriStr,
                            lastModification: 0,
                            isDirectory: true
                        };
                        toRestore.push(sinon.stub(wsService, 'roots').resolves([oldStat]));
                        wsService['_workspace'] = oldStat;
                        window.location.hash = '#' + oldWorkspacePath;
                        newWorkspaceUriStr = 'file:///home/newWorkspaceUri';
                        uri = new uri_1.default(newWorkspaceUriStr);
                        newStat = {
                            uri: newWorkspaceUriStr,
                            lastModification: 0,
                            isDirectory: true
                        };
                        mockFilesystem.getFileStat.resolves(newStat);
                        stubOpenNewWindow = sinon.stub(wsService, 'openNewWindow').callsFake(function () { });
                        toRestore.push(stubOpenNewWindow);
                        return [4 /*yield*/, wsService['doOpen'](uri, {})];
                    case 1:
                        _a.sent();
                        expect(windowLocationReloadStub.called).to.be.false;
                        expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith(newWorkspaceUriStr)).to.be.true;
                        expect(stubOpenNewWindow.called).to.be.true;
                        expect(wsService.workspace).to.eq(oldStat);
                        expect(window.location.hash).to.eq('#' + oldWorkspacePath);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should reload the current window with new uri if preferences["workspace.preserveWindow"] = false and browser blocks the new window being opened', function () { return __awaiter(void 0, void 0, void 0, function () {
            var oldWorkspacePath, oldWorkspaceUriStr, oldStat, newWorkspacePath, newWorkspaceUriStr, uri, newStat, stubOpenNewWindow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mockPreferenceValues['workspace.preserveWindow'] = false;
                        oldWorkspacePath = '/home/oldWorkspaceUri';
                        oldWorkspaceUriStr = 'file://' + oldWorkspacePath;
                        oldStat = {
                            uri: oldWorkspaceUriStr,
                            lastModification: 0,
                            isDirectory: true
                        };
                        toRestore.push(sinon.stub(wsService, 'roots').resolves([oldStat]));
                        wsService['_workspace'] = oldStat;
                        window.location.hash = '#' + oldWorkspacePath;
                        newWorkspacePath = '/home/newWorkspaceUri';
                        newWorkspaceUriStr = 'file://' + newWorkspacePath;
                        uri = new uri_1.default(newWorkspaceUriStr);
                        newStat = {
                            uri: newWorkspaceUriStr,
                            lastModification: 0,
                            isDirectory: true
                        };
                        mockFilesystem.getFileStat.resolves(newStat);
                        mockILogger.error.resolves(undefined);
                        stubOpenNewWindow = sinon.stub(wsService, 'openNewWindow').throws();
                        toRestore.push(stubOpenNewWindow);
                        return [4 /*yield*/, wsService['doOpen'](uri, {})];
                    case 1:
                        _a.sent();
                        expect(windowLocationReloadStub.called).to.be.true;
                        expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith(newWorkspaceUriStr)).to.be.true;
                        expect(stubOpenNewWindow.called).to.be.true;
                        expect(wsService.workspace).to.eq(newStat);
                        expect(window.location.hash).to.eq('#' + newWorkspacePath);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('close() function', function () {
        it('should reset the exposed roots and workspace, and set the most recently used workspace empty through the server', function () { return __awaiter(void 0, void 0, void 0, function () {
            var stat, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        stat = {
                            uri: 'file:///home/folder',
                            lastModification: 0,
                            isDirectory: true
                        };
                        wsService['_workspace'] = stat;
                        wsService['_roots'] = [stat];
                        window.location.hash = '#something';
                        return [4 /*yield*/, wsService.close()];
                    case 1:
                        _b.sent();
                        expect(wsService.workspace).to.be.undefined;
                        _a = expect;
                        return [4 /*yield*/, wsService.roots];
                    case 2:
                        _a.apply(void 0, [(_b.sent()).length]).to.eq(0);
                        expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith('')).to.be.true;
                        expect(window.location.hash).to.be.empty;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('addRoot() function', function () {
        it('should throw an error if there is no opened workspace', function (done) {
            wsService['_workspace'] = undefined;
            wsService.addRoot(new uri_1.default())
                .then(function () {
                done(new Error('WorkspaceService.addRoot() should throw an error but did not.'));
            }).catch(function (e) {
                done();
            });
        });
        it('should throw an error if the added uri is invalid or nonexistent', function (done) {
            mockFilesystem.getFileStat.resolves(undefined);
            toRestore.push(sinon.stub(wsService, 'opened').value(true));
            wsService.addRoot(new uri_1.default())
                .then(function () {
                done(new Error('WorkspaceService.addRoot() should throw an error but did not.'));
            }).catch(function (e) {
                done();
            });
        });
        it('should throw an error if the added uri points to a file instead of a folder', function (done) {
            mockFilesystem.getFileStat.resolves({
                uri: 'file:///home/file',
                lastModification: 0,
                isDirectory: false
            });
            toRestore.push(sinon.stub(wsService, 'opened').value(true));
            wsService.addRoot(new uri_1.default())
                .then(function () {
                done(new Error('WorkspaceService.addRoot() should throw an error but did not.'));
            }).catch(function (e) {
                done();
            });
        });
        it('should do nothing if the added uri is already part of the current workspace', function () { return __awaiter(void 0, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stat = {
                            uri: 'file:///home/folder',
                            lastModification: 0,
                            isDirectory: true
                        };
                        wsService['_workspace'] = stat;
                        wsService['_roots'] = [stat];
                        mockFilesystem.getFileStat.resolves(stat);
                        return [4 /*yield*/, wsService.addRoot(new uri_1.default(stat.uri))];
                    case 1:
                        _a.sent();
                        expect(wsService.workspace && wsService.workspace.uri).to.eq(stat.uri);
                        expect(wsService.tryGetRoots().length).to.eq(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should write new data into the workspace file when the workspace data is stored in a file', function () { return __awaiter(void 0, void 0, void 0, function () {
            var workspaceFileStat, spyWriteFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        workspaceFileStat = {
                            uri: 'file:///home/file',
                            lastModification: 0,
                            isDirectory: false
                        };
                        wsService['_workspace'] = workspaceFileStat;
                        wsService['_roots'] = [folderA];
                        mockFilesystem.getFileStat.resolves(folderB);
                        mockFilesystem.resolveContent.resolves({
                            stat: workspaceFileStat, content: JSON.stringify({ folders: [{ path: 'folderA' }] })
                        });
                        mockFilesystem.exists.resolves(true);
                        spyWriteFile = sinon.spy(wsService, 'writeWorkspaceFile');
                        return [4 /*yield*/, wsService.addRoot(new uri_1.default(folderB.uri))];
                    case 1:
                        _a.sent();
                        expect(spyWriteFile.calledWith(workspaceFileStat, { folders: [{ path: folderA.uri }, { path: folderB.uri }] })).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('save() function', function () {
        it('should leave the current workspace unchanged if the passed in uri points to the current workspace', function () { return __awaiter(void 0, void 0, void 0, function () {
            var file, oldWorkspaceData, stubSetContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = {
                            uri: 'file:///home/file',
                            lastModification: 0,
                            isDirectory: false
                        };
                        oldWorkspaceData = { folders: [{ path: 'folderA' }, { path: 'folderB' }], settings: {} };
                        mockFilesystem.exists.resolves(true);
                        mockFilesystem.getFileStat.resolves(file);
                        wsService['_workspace'] = file;
                        wsService['_roots'] = [folderA, folderB];
                        stubSetContent = mockFilesystem.setContent.resolves(file);
                        mockFilesystem.resolveContent.resolves({ stat: file, content: JSON.stringify(oldWorkspaceData) });
                        expect(wsService.workspace && wsService.workspace.uri).to.eq(file.uri);
                        return [4 /*yield*/, wsService.save(new uri_1.default(file.uri))];
                    case 1:
                        _a.sent();
                        expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith(file.uri)).to.be.true;
                        expect(stubSetContent.calledWith(file, getFormattedJson(JSON.stringify(oldWorkspaceData)))).to.be.true;
                        expect(wsService.workspace && wsService.workspace.uri).to.eq(file.uri);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should create a new workspace file, save the workspace data into that new file, and update the title of theia', function () { return __awaiter(void 0, void 0, void 0, function () {
            var oldFile, newFile, oldWorkspaceData, stubExist, stubSetContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldFile = {
                            uri: 'file:///home/oldfile',
                            lastModification: 0,
                            isDirectory: false
                        };
                        newFile = {
                            uri: 'file:///home/newfile',
                            lastModification: 0,
                            isDirectory: false
                        };
                        oldWorkspaceData = { folders: [{ path: 'folderA' }, { path: 'folderB' }], settings: {} };
                        wsService['_roots'] = [folderA, folderB];
                        stubExist = mockFilesystem.exists;
                        stubExist.withArgs(oldFile.uri).resolves(true);
                        stubExist.withArgs(newFile.uri).resolves(false);
                        mockFilesystem.getFileStat.resolves(newFile);
                        mockFileSystemWatcher.watchFileChanges.resolves(new core_1.DisposableCollection());
                        wsService['_workspace'] = oldFile;
                        stubSetContent = mockFilesystem.setContent.resolves(newFile);
                        mockFilesystem.resolveContent.resolves({ stat: oldFile, content: JSON.stringify(oldWorkspaceData) });
                        expect(wsService.workspace && wsService.workspace.uri).to.eq(oldFile.uri);
                        return [4 /*yield*/, wsService.save(new uri_1.default(newFile.uri))];
                    case 1:
                        _a.sent();
                        expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith(newFile.uri)).to.be.true;
                        expect(stubSetContent.calledWith(newFile, getFormattedJson(JSON.stringify(oldWorkspaceData)))).to.be.true;
                        expect(wsService.workspace && wsService.workspace.uri).to.eq(newFile.uri);
                        expect(updateTitleStub.called).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use relative paths or translate relative paths to absolute path when necessary before saving, and emit "savedLocationChanged" event', function (done) {
            var oldFile = {
                uri: 'file:///home/oldFolder/oldFile',
                lastModification: 0,
                isDirectory: false
            };
            var newFile = {
                uri: 'file:///home/newFolder/newFile',
                lastModification: 0,
                isDirectory: false
            };
            var folder1 = {
                uri: 'file:///home/thirdFolder/folder1',
                lastModification: 0,
                isDirectory: true
            };
            var folder2 = {
                uri: 'file:///home/newFolder/folder2',
                lastModification: 0,
                isDirectory: true
            };
            var oldWorkspaceData = { folders: [{ path: folder1.uri }, { path: folder2.uri }], settings: {} };
            mockFilesystem.resolveContent.resolves({ stat: oldFile, content: JSON.stringify(oldWorkspaceData) });
            var stubExist = mockFilesystem.exists;
            stubExist.withArgs(oldFile.uri).resolves(true);
            stubExist.withArgs(newFile.uri).resolves(false);
            mockFilesystem.getFileStat.resolves(newFile);
            wsService['_workspace'] = oldFile;
            wsService['_roots'] = [folder1, folder2];
            var stubSetContent = mockFilesystem.setContent.resolves(newFile);
            mockFileSystemWatcher.watchFileChanges.resolves(new core_1.DisposableCollection());
            expect(wsService.workspace && wsService.workspace.uri).to.eq(oldFile.uri);
            wsService.onWorkspaceLocationChanged(function () {
                done();
            });
            wsService.save(new uri_1.default(newFile.uri)).then(function () {
                expect(mockWorkspaceServer.setMostRecentlyUsedWorkspace.calledWith(newFile.uri)).to.be.true;
                expect(stubSetContent.calledWith(newFile, getFormattedJson(JSON.stringify({ folders: [{ path: folder1.uri }, { path: 'folder2' }], settings: {} })))).to.be.true;
                expect(wsService.workspace && wsService.workspace.uri).to.eq(newFile.uri);
                expect(updateTitleStub.called).to.be.true;
            });
        }).timeout(2000);
    });
    describe('saved status', function () {
        it('should be true if there is an opened workspace, and the opened workspace is not a folder, othewise false', function () {
            var file = {
                uri: 'file:///home/file',
                lastModification: 0,
                isDirectory: false
            };
            expect(wsService.saved).to.be.false;
            wsService['_workspace'] = file;
            expect(wsService.saved).to.be.true;
            wsService['_workspace'] = folderA;
            expect(wsService.saved).to.be.false;
        });
    });
    describe('isMultiRootWorkspaceEnabled status', function () {
        it('should be true if there is an opened workspace and preference["workspace.supportMultiRootWorkspace"] = true, otherwise false', function () {
            mockPreferenceValues['workspace.supportMultiRootWorkspace'] = true;
            expect(wsService.isMultiRootWorkspaceEnabled).to.be.false;
            var file = {
                uri: 'file:///home/file',
                lastModification: 0,
                isDirectory: false
            };
            wsService['_workspace'] = file;
            mockPreferenceValues['workspace.supportMultiRootWorkspace'] = true;
            expect(wsService.isMultiRootWorkspaceEnabled).to.be.true;
            mockPreferenceValues['workspace.supportMultiRootWorkspace'] = false;
            expect(wsService.isMultiRootWorkspaceEnabled).to.be.false;
        });
    });
    describe('isMultiRootWorkspaceOpened status', function () {
        it('should be true if there is an opened workspace and the workspace is not a directory, otherwise false', function () {
            expect(wsService.isMultiRootWorkspaceOpened).to.be.false;
            var file = {
                uri: 'file:///home/file',
                lastModification: 0,
                isDirectory: false
            };
            wsService['_workspace'] = file;
            expect(wsService.isMultiRootWorkspaceOpened).to.be.true;
            var dir = {
                uri: 'file:///home/dir',
                lastModification: 0,
                isDirectory: true
            };
            wsService['_workspace'] = dir;
            expect(wsService.isMultiRootWorkspaceOpened).to.be.false;
        });
    });
    describe('containsSome() function', function () {
        it('should resolve false if the current workspace is not open', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sinon.stub(wsService, 'roots').resolves([]);
                        sinon.stub(wsService, 'opened').value(false);
                        wsService['_roots'] = [];
                        _a = expect;
                        return [4 /*yield*/, wsService.containsSome([])];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.false;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should resolve false if the passed in paths is an empty array', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sinon.stub(wsService, 'roots').resolves([]);
                        sinon.stub(wsService, 'opened').value(true);
                        wsService['_roots'] = [folderA, folderB];
                        _a = expect;
                        return [4 /*yield*/, wsService.containsSome([])];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.false;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should resolve false if on or more passed in paths are found in the workspace, otherwise false', function () { return __awaiter(void 0, void 0, void 0, function () {
            var val, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sinon.stub(wsService, 'roots').value([folderA, folderB]);
                        sinon.stub(wsService, 'opened').value(true);
                        wsService['_roots'] = [folderA, folderB];
                        mockFilesystem.exists.withArgs('file:///home/folderB/subfolder').resolves(true);
                        return [4 /*yield*/, wsService.containsSome(['A', 'subfolder', 'C'])];
                    case 1:
                        val = _b.sent();
                        expect(val).to.be.true;
                        _a = expect;
                        return [4 /*yield*/, wsService.containsSome(['C', 'A', 'B'])];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).to.be.false;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('removeRoots() function', function () {
        it('should throw an error if the current workspace is not open', function (done) {
            sinon.stub(wsService, 'opened').value(false);
            wsService.removeRoots([]).then(function () {
                done(new Error('WorkspaceService.removeRoots() should throw an error while did not.'));
            }).catch(function (e) {
                done();
            });
        });
        it('should not update the workspace file if the workspace is undefined', function () { return __awaiter(void 0, void 0, void 0, function () {
            var stubWriteWorkspaceFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wsService['_workspace'] = undefined;
                        sinon.stub(wsService, 'opened').value(true);
                        stubWriteWorkspaceFile = sinon.stub(wsService, 'writeWorkspaceFile');
                        return [4 /*yield*/, wsService.removeRoots([])];
                    case 1:
                        _a.sent();
                        expect(stubWriteWorkspaceFile.called).to.be.false;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should update the working space file with remaining folders', function () { return __awaiter(void 0, void 0, void 0, function () {
            var file, stubSetContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = {
                            uri: 'file:///home/oneFile',
                            lastModification: 0,
                            isDirectory: false
                        };
                        wsService['_workspace'] = file;
                        sinon.stub(wsService, 'opened').value(true);
                        wsService['_roots'] = [folderA, folderB];
                        stubSetContent = mockFilesystem.setContent;
                        stubSetContent.resolves(file);
                        mockFilesystem.resolveContent.resolves({ stat: file, content: JSON.stringify({ folders: [{ path: 'folderA' }, { path: 'folderB' }] }) });
                        mockFilesystem.exists.resolves(true);
                        return [4 /*yield*/, wsService.removeRoots([new uri_1.default()])];
                    case 1:
                        _a.sent();
                        expect(stubSetContent.calledWith(file, getFormattedJson(JSON.stringify({ folders: [{ path: 'folderA' }, { path: 'folderB' }] })))).to.be.true;
                        return [4 /*yield*/, wsService.removeRoots([new uri_1.default(folderB.uri)])];
                    case 2:
                        _a.sent();
                        expect(stubSetContent.calledWith(file, getFormattedJson(JSON.stringify({ folders: [{ path: 'folderA' }] })))).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('spliceRoots', function () {
        var workspace = { uri: 'file:///workspace.theia-workspace', isDirectory: false };
        var fooDir = { uri: 'file:///foo', isDirectory: true };
        var workspaceService = new workspace_service_1.WorkspaceService();
        workspaceService['getUntitledWorkspace'] = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, new uri_1.default('file:///untitled.theia-workspace')];
        }); }); };
        workspaceService['save'] = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        workspaceService['getWorkspaceDataFromFile'] = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, ({ folders: [] })];
        }); }); };
        workspaceService['writeWorkspaceFile'] = function (_, data) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                workspaceService['_roots'] = data.folders.map(function (_a) {
                    var path = _a.path;
                    return ({ uri: path });
                });
                return [2 /*return*/, undefined];
            });
        }); };
        var assertRemoved = function (removed) {
            var roots = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                roots[_i - 1] = arguments[_i];
            }
            return assert.deepEqual(removed.map(function (uri) { return uri.toString(); }), roots);
        };
        var assertRoots = function () {
            var roots = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                roots[_i] = arguments[_i];
            }
            return assert.deepEqual(workspaceService['_roots'].map(function (root) { return root.uri; }), roots);
        };
        beforeEach(function () {
            workspaceService['_workspace'] = workspace;
            workspaceService['_roots'] = [fooDir];
        });
        it('skip', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = assertRemoved;
                        return [4 /*yield*/, workspaceService.spliceRoots(0, 0)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        assertRoots('file:///foo');
                        return [2 /*return*/];
                }
            });
        }); });
        it('add', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = assertRemoved;
                        return [4 /*yield*/, workspaceService.spliceRoots(1, 0, new uri_1.default('file:///bar'))];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        assertRoots('file:///foo', 'file:///bar');
                        return [2 /*return*/];
                }
            });
        }); });
        it('add dups', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = assertRemoved;
                        return [4 /*yield*/, workspaceService.spliceRoots(1, 0, new uri_1.default('file:///bar'), new uri_1.default('file:///baz'), new uri_1.default('file:///bar'))];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        assertRoots('file:///foo', 'file:///bar', 'file:///baz');
                        return [2 /*return*/];
                }
            });
        }); });
        it('remove', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = assertRemoved;
                        return [4 /*yield*/, workspaceService.spliceRoots(0, 1)];
                    case 1:
                        _a.apply(void 0, [_b.sent(), 'file:///foo']);
                        assertRoots();
                        return [2 /*return*/];
                }
            });
        }); });
        it('update', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = assertRemoved;
                        return [4 /*yield*/, workspaceService.spliceRoots(0, 1, new uri_1.default('file:///bar'))];
                    case 1:
                        _a.apply(void 0, [_b.sent(), 'file:///foo']);
                        assertRoots('file:///bar');
                        return [2 /*return*/];
                }
            });
        }); });
        it('add untitled', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        workspaceService['_workspace'] = fooDir;
                        _a = assertRemoved;
                        return [4 /*yield*/, workspaceService.spliceRoots(1, 0, new uri_1.default('file:///bar'))];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        assertRoots('file:///foo', 'file:///bar');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('getWorkspaceRootUri() function', function () {
        it('should return undefined if no uri is passed into the function', function () {
            expect(wsService.getWorkspaceRootUri(undefined)).to.be.undefined;
        });
        it('should return the root folder uri that the file belongs to', function () {
            wsService['_roots'] = [folderA, folderB];
            var root = wsService.getWorkspaceRootUri(new uri_1.default(folderB.uri + '/testfile'));
            expect(root.toString()).to.equal(folderB.uri);
        });
        it('should return the closest root folder uri that the file belongs to', function () {
            var home = Object.freeze({
                uri: 'file:///home',
                lastModification: 0,
                isDirectory: true
            });
            wsService['_roots'] = [folderA, folderB, home];
            var root = wsService.getWorkspaceRootUri(new uri_1.default(folderB.uri + '/testfile'));
            expect(root.toString()).to.equal(folderB.uri);
        });
    });
    it('should emit roots in the current workspace when initialized', function (done) {
        var rootA = 'file:///folderA';
        var rootB = 'file:///folderB';
        var statA = {
            uri: rootA,
            lastModification: 0,
            isDirectory: true
        };
        var statB = {
            uri: rootB,
            lastModification: 0,
            isDirectory: true
        };
        var dis = wsService.onWorkspaceChanged(function (roots) {
            expect(roots.length).to.eq(2);
            expect(roots[0].uri).to.eq(rootA);
            expect(roots[1].uri).to.eq(rootB);
            dis.dispose();
            done();
        });
        toDispose.push(dis);
        wsService['onWorkspaceChangeEmitter'].fire([statA, statB]);
    }).timeout(2000);
    it('should emit updated roots when workspace file is changed', function (done) {
        var workspaceFileUri = 'file:///home/workspaceFile';
        var workspaceFileStat = {
            uri: workspaceFileUri,
            lastModification: 0,
            isDirectory: false
        };
        wsService['_workspace'] = workspaceFileStat;
        var folderC = {
            uri: 'file:///home/folderC',
            lastModification: 0,
            isDirectory: true
        };
        mockWorkspaceServer.getMostRecentlyUsedWorkspace.resolves(workspaceFileUri);
        var stubGetFileStat = mockFilesystem.getFileStat;
        stubGetFileStat.withArgs(workspaceFileUri).resolves(workspaceFileStat);
        mockFilesystem.exists.resolves(true);
        var oldWorkspaceFileContent = {
            stat: workspaceFileStat,
            content: '{"folders":[{"path":"folderA"},{"path":"folderB"}],"settings":{}}'
        };
        var newWorkspaceFileContent = {
            stat: workspaceFileStat,
            content: '{"folders":[{"path":"folderB"},{"path":"folderC"}],"settings":{}}'
        };
        mockFilesystem.resolveContent.onCall(0).resolves(oldWorkspaceFileContent);
        mockFilesystem.resolveContent.onCall(1).resolves(newWorkspaceFileContent);
        mockFilesystem.resolveContent.onCall(2).resolves(newWorkspaceFileContent);
        stubGetFileStat.withArgs(folderA.uri).resolves(folderA);
        stubGetFileStat.withArgs(folderB.uri).resolves(folderB);
        stubGetFileStat.withArgs(folderC.uri).resolves(folderC);
        mockFileSystemWatcher.watchFileChanges.resolves(new core_1.DisposableCollection());
        wsService['init']().then(function () {
            var dis = wsService.onWorkspaceChanged(function (roots) {
                expect(roots.length).to.eq(2);
                expect(roots[0].uri).to.eq(folderB.uri);
                expect(roots[1].uri).to.eq(folderC.uri);
                dis.dispose();
                done();
            });
            toDispose.push(dis);
            mockFileChangeEmitter.fire([{ uri: new uri_1.default(workspaceFileUri), type: filesystem_watcher_1.FileChangeType.UPDATED }]);
        });
    }).timeout(2000);
});
//# sourceMappingURL=workspace-service.spec.js.map
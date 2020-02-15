"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var inversify_1 = require("inversify");
var chai = require("chai");
var user_storage_service_filesystem_1 = require("./user-storage-service-filesystem");
var user_storage_service_1 = require("./user-storage-service");
var user_storage_resource_1 = require("./user-storage-resource");
var common_1 = require("@theia/core/lib/common");
var logger_1 = require("@theia/core/lib/common/logger");
var mock_logger_1 = require("@theia/core/lib/common/test/mock-logger");
var common_2 = require("@theia/filesystem/lib/common/");
var filesystem_preferences_1 = require("@theia/filesystem/lib/browser/filesystem-preferences");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var preferences_1 = require("@theia/core/lib/browser/preferences");
var mock_preference_service_1 = require("@theia/core/lib/browser/preferences/test/mock-preference-service");
var filesystem_watcher_protocol_1 = require("@theia/filesystem/lib/common/filesystem-watcher-protocol");
var test_1 = require("@theia/filesystem/lib/common/test");
var user_storage_uri_1 = require("./user-storage-uri");
var uri_1 = require("@theia/core/lib/common/uri");
var sinon = require("sinon");
var expect = chai.expect;
var testContainer;
var userStorageService;
var homeDir = '/home/test';
var THEIA_USER_STORAGE_FOLDER = '.theia';
var userStorageFolder = new uri_1.default('file://' + homeDir).resolve(THEIA_USER_STORAGE_FOLDER);
var mockOnFileChangedEmitter = new common_1.Emitter();
var files = {};
before(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        testContainer = new inversify_1.Container();
        /* Preference bindings*/
        testContainer.bind(mock_preference_service_1.MockPreferenceService).toSelf().inSingletonScope();
        testContainer.bind(preferences_1.PreferenceService).to(mock_preference_service_1.MockPreferenceService).inSingletonScope();
        testContainer.bind(filesystem_preferences_1.FileSystemPreferences).toDynamicValue(function (ctx) {
            var preferences = ctx.container.get(preferences_1.PreferenceService);
            sinon.stub(preferences, 'get').returns({
                'files.watcherExclude': {
                    '**/.git/objects/**': true,
                    '**/.git/subtree-cache/**': true,
                    '**/node_modules/**': true
                }
            });
            return filesystem_preferences_1.createFileSystemPreferences(preferences);
        }).inSingletonScope();
        /* FS mocks and bindings */
        testContainer.bind(filesystem_watcher_protocol_1.FileSystemWatcherServer).to(test_1.MockFilesystemWatcherServer).inSingletonScope();
        testContainer.bind(filesystem_watcher_1.FileSystemWatcher).toSelf().inSingletonScope().onActivation(function (_, watcher) {
            sinon.stub(watcher, 'onFilesChanged').get(function () {
                return mockOnFileChangedEmitter.event;
            });
            return watcher;
        });
        testContainer.bind(common_2.FileShouldOverwrite).toFunction(function (originalStat, currentStat) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, true];
        }); }); });
        /* Mock logger binding*/
        testContainer.bind(logger_1.ILogger).to(mock_logger_1.MockLogger);
        /* Stub getCurrentUserHome to return test home directory */
        testContainer.bind(common_2.FileSystem).toDynamicValue(function (ctx) {
            var fs = new test_1.MockFilesystem();
            sinon.stub(fs, 'getCurrentUserHome').callsFake(function () { return Promise.resolve({
                uri: 'file://' + homeDir,
                lastModification: 0,
                isDirectory: true
            }); });
            sinon.stub(fs, 'resolveContent').callsFake(function (uri) {
                var content = files[uri];
                return Promise.resolve({ stat: { uri: uri, lastModification: 0, isDirectory: false }, content: content });
            });
            sinon.stub(fs, 'setContent').callsFake(function (filestat, content) {
                files[filestat.uri] = content;
                return Promise.resolve(content);
            });
            sinon.stub(fs, 'getFileStat').callsFake(function (uri) {
                return Promise.resolve({ uri: uri, lastModification: 0, isDirectory: false });
            });
            return fs;
        }).inSingletonScope();
        testContainer.bind(user_storage_service_1.UserStorageService).to(user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl);
        return [2 /*return*/];
    });
}); });
describe('User Storage Service (Filesystem implementation)', function () {
    var testFile;
    before(function () {
        testFile = 'test.json';
        userStorageService = testContainer.get(user_storage_service_1.UserStorageService);
    });
    after(function () {
        userStorageService.dispose();
    });
    beforeEach(function () {
        files = {};
    });
    it('Should return a user storage uri from a filesystem uri', function () {
        var test = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.toUserStorageUri(userStorageFolder, new uri_1.default('file://' + homeDir + '/' + THEIA_USER_STORAGE_FOLDER + '/' + testFile));
        expect(test.scheme).eq(user_storage_uri_1.UserStorageUri.SCHEME);
        expect(test.toString()).eq(user_storage_uri_1.UserStorageUri.SCHEME + ':' + testFile);
        var testFragment = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.
            toUserStorageUri(userStorageFolder, new uri_1.default('file://' + homeDir + '/' + THEIA_USER_STORAGE_FOLDER + '/' + testFile + '#test'));
        expect(testFragment.fragment).eq('test');
        var testQuery = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.
            toUserStorageUri(userStorageFolder, new uri_1.default('file://' + homeDir + '/' + THEIA_USER_STORAGE_FOLDER + '/' + testFile + '?test=1'));
        expect(testQuery.query).eq('test=1');
        var testQueryAndFragment = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.
            toUserStorageUri(userStorageFolder, new uri_1.default('file://' + homeDir + '/' + THEIA_USER_STORAGE_FOLDER + '/' + testFile
            + '?test=1' + '#test'));
        expect(testQueryAndFragment.fragment).eq('test');
        expect(testQueryAndFragment.query).eq('test=1');
    });
    it('Should return a filesystem uri from a user storage uri', function () {
        var test = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.toFilesystemURI(userStorageFolder, new uri_1.default(user_storage_uri_1.UserStorageUri.SCHEME + ':' + testFile));
        expect(test.scheme).eq('file');
        expect(test.path.toString()).eq(homeDir + '/' + THEIA_USER_STORAGE_FOLDER + '/' + testFile);
    });
    it('Should register a client and notifies it of the fs changesby converting them to user storage changes', function (done) {
        userStorageService.onUserStorageChanged(function (event) {
            var userStorageUri = event.uris[0];
            expect(userStorageUri.scheme).eq(user_storage_uri_1.UserStorageUri.SCHEME);
            expect(userStorageUri.path.toString()).eq(testFile);
            done();
        });
        mockOnFileChangedEmitter.fire([
            {
                type: filesystem_watcher_1.FileChangeType.UPDATED,
                uri: userStorageFolder.resolve(testFile)
            }
        ]);
    }).timeout(2000);
    it('Should save the contents correctly using a user storage uri to a filesystem uri', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userStorageUri, newContent, fsUri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userStorageUri = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.
                        toUserStorageUri(userStorageFolder, new uri_1.default('file://' + homeDir + '/' + THEIA_USER_STORAGE_FOLDER + '/' + testFile));
                    return [4 /*yield*/, userStorageService.saveContents(userStorageUri, 'test content')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, userStorageService.readContents(userStorageUri)];
                case 2:
                    newContent = _a.sent();
                    expect(newContent).eq('test content');
                    fsUri = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.toFilesystemURI(userStorageFolder, userStorageUri);
                    expect(files[fsUri.toString()]).eq('test content');
                    return [2 /*return*/];
            }
        });
    }); }).timeout(2000);
});
describe('User Storage Resource (Filesystem implementation)', function () {
    var userStorageResource;
    var testFile;
    before(function () {
        testFile = 'test.json';
        userStorageService = testContainer.get(user_storage_service_1.UserStorageService);
        var userStorageUriTest = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.
            toUserStorageUri(userStorageFolder, new uri_1.default('file://' + homeDir + '/' + THEIA_USER_STORAGE_FOLDER + '/' + testFile));
        userStorageResource = new user_storage_resource_1.UserStorageResource(userStorageUriTest, userStorageService);
    });
    after(function () {
        userStorageService.dispose();
    });
    beforeEach(function () {
        files = {};
    });
    it('Should return notify client when resource changed underneath', function (done) {
        userStorageResource.onDidChangeContents(function () {
            done();
        });
        mockOnFileChangedEmitter.fire([
            {
                type: filesystem_watcher_1.FileChangeType.UPDATED,
                uri: userStorageFolder.resolve(testFile)
            }
        ]);
    }).timeout(2000);
    it('Should save and read correctly to fs', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testContent, testFsUri, readTestContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testContent = 'test content';
                    return [4 /*yield*/, userStorageResource.saveContents(testContent)];
                case 1:
                    _a.sent();
                    testFsUri = user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl.toFilesystemURI(userStorageFolder, userStorageResource.uri);
                    expect(files[testFsUri.toString()]).eq(testContent);
                    return [4 /*yield*/, userStorageResource.readContents()];
                case 2:
                    readTestContent = _a.sent();
                    expect(readTestContent).eq(testContent);
                    return [2 /*return*/];
            }
        });
    }); }).timeout(2000);
});
//# sourceMappingURL=user-storage-service-filesystem.spec.js.map
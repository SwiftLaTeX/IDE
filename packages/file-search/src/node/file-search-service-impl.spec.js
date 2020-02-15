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
var chai_1 = require("chai");
var assert = require("assert");
var path = require("path");
var file_search_service_impl_1 = require("./file-search-service-impl");
var node_1 = require("@theia/core/lib/node");
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var logger_backend_module_1 = require("@theia/core/lib/node/logger-backend-module");
var process_backend_module_1 = require("@theia/process/lib/node/process-backend-module");
var uri_1 = require("@theia/core/lib/common/uri");
/* eslint-disable no-unused-expressions */
var testContainer = new inversify_1.Container();
logger_backend_module_1.bindLogger(testContainer.bind.bind(testContainer));
testContainer.load(process_backend_module_1.default);
testContainer.load(new inversify_1.ContainerModule(function (bind) {
    bind(file_search_service_impl_1.FileSearchServiceImpl).toSelf().inSingletonScope();
}));
describe('search-service', function () {
    var _this = this;
    this.timeout(10000);
    var service;
    beforeEach(function () {
        service = testContainer.get(file_search_service_impl_1.FileSearchServiceImpl);
    });
    it('shall fuzzy search this spec file', function () { return __awaiter(_this, void 0, void 0, function () {
        var rootUri, matches, expectedFile, testFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rootUri = node_1.FileUri.create(path.resolve(__dirname, '..')).toString();
                    return [4 /*yield*/, service.find('spc', { rootUris: [rootUri] })];
                case 1:
                    matches = _a.sent();
                    expectedFile = node_1.FileUri.create(__filename).displayName;
                    testFile = matches.find(function (e) { return e.endsWith(expectedFile); });
                    chai_1.expect(testFile).to.be.not.undefined;
                    return [2 /*return*/];
            }
        });
    }); });
    it.skip('shall respect nested .gitignore', function () { return __awaiter(_this, void 0, void 0, function () {
        var rootUri, matches;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rootUri = node_1.FileUri.create(path.resolve(__dirname, '../../test-resources')).toString();
                    return [4 /*yield*/, service.find('foo', { rootUris: [rootUri], fuzzyMatch: false })];
                case 1:
                    matches = _a.sent();
                    chai_1.expect(matches.find(function (match) { return match.endsWith('subdir1/sub-bar/foo.txt'); })).to.be.undefined;
                    chai_1.expect(matches.find(function (match) { return match.endsWith('subdir1/sub2/foo.txt'); })).to.be.not.undefined;
                    chai_1.expect(matches.find(function (match) { return match.endsWith('subdir1/foo.txt'); })).to.be.not.undefined;
                    return [2 /*return*/];
            }
        });
    }); });
    it('shall cancel searches', function () { return __awaiter(_this, void 0, void 0, function () {
        var rootUri, cancelTokenSource, matches;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rootUri = node_1.FileUri.create(path.resolve(__dirname, '../../../../..')).toString();
                    cancelTokenSource = new core_1.CancellationTokenSource();
                    cancelTokenSource.cancel();
                    return [4 /*yield*/, service.find('foo', { rootUris: [rootUri], fuzzyMatch: false }, cancelTokenSource.token)];
                case 1:
                    matches = _a.sent();
                    chai_1.expect(matches).to.be.empty;
                    return [2 /*return*/];
            }
        });
    }); });
    it('should perform file search across all folders in the workspace', function () { return __awaiter(_this, void 0, void 0, function () {
        var dirA, dirB, matches;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dirA = node_1.FileUri.create(path.resolve(__dirname, '../../test-resources/subdir1/sub-bar')).toString();
                    dirB = node_1.FileUri.create(path.resolve(__dirname, '../../test-resources/subdir1/sub2')).toString();
                    return [4 /*yield*/, service.find('foo', { rootUris: [dirA, dirB] })];
                case 1:
                    matches = _a.sent();
                    chai_1.expect(matches).to.be.not.undefined;
                    chai_1.expect(matches.length).to.eq(2);
                    return [2 /*return*/];
            }
        });
    }); });
    describe('search with glob', function () {
        it('should support file searches with globs', function () { return __awaiter(_this, void 0, void 0, function () {
            var rootUri, matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rootUri = node_1.FileUri.create(path.resolve(__dirname, '../../test-resources/subdir1/sub2')).toString();
                        return [4 /*yield*/, service.find('', { rootUris: [rootUri], includePatterns: ['**/*oo.*'] })];
                    case 1:
                        matches = _a.sent();
                        chai_1.expect(matches).to.be.not.undefined;
                        chai_1.expect(matches.length).to.eq(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should NOT support file searches with globs without the prefixed or trailing star (*)', function () { return __awaiter(_this, void 0, void 0, function () {
            var rootUri, trailingMatches, prefixedMatches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rootUri = node_1.FileUri.create(path.resolve(__dirname, '../../test-resources/subdir1/sub2')).toString();
                        return [4 /*yield*/, service.find('', { rootUris: [rootUri], includePatterns: ['*oo'] })];
                    case 1:
                        trailingMatches = _a.sent();
                        chai_1.expect(trailingMatches).to.be.not.undefined;
                        chai_1.expect(trailingMatches.length).to.eq(0);
                        return [4 /*yield*/, service.find('', { rootUris: [rootUri], includePatterns: ['oo*'] })];
                    case 2:
                        prefixedMatches = _a.sent();
                        chai_1.expect(prefixedMatches).to.be.not.undefined;
                        chai_1.expect(prefixedMatches.length).to.eq(0);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('search with ignored patterns', function () {
        it('should NOT ignore strings passed through the search options', function () { return __awaiter(_this, void 0, void 0, function () {
            var rootUri, matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rootUri = node_1.FileUri.create(path.resolve(__dirname, '../../test-resources/subdir1/sub2')).toString();
                        return [4 /*yield*/, service.find('', { rootUris: [rootUri], includePatterns: ['**/*oo.*'], excludePatterns: ['foo'] })];
                    case 1:
                        matches = _a.sent();
                        chai_1.expect(matches).to.be.not.undefined;
                        chai_1.expect(matches.length).to.eq(1);
                        return [2 /*return*/];
                }
            });
        }); });
        var ignoreGlobsUri = node_1.FileUri.create(path.resolve(__dirname, '../../test-resources/subdir1/sub2')).toString();
        it('should ignore globs passed through the search options #1', function () { return assertIgnoreGlobs({
            rootUris: [ignoreGlobsUri],
            includePatterns: ['**/*oo.*'],
            excludePatterns: ['*fo*']
        }); });
        it('should ignore globs passed through the search options #2', function () {
            var _a;
            return assertIgnoreGlobs({
                rootOptions: (_a = {},
                    _a[ignoreGlobsUri] = {
                        includePatterns: ['**/*oo.*'],
                        excludePatterns: ['*fo*']
                    },
                    _a)
            });
        });
        it('should ignore globs passed through the search options #3', function () {
            var _a;
            return assertIgnoreGlobs({
                rootOptions: (_a = {},
                    _a[ignoreGlobsUri] = {
                        includePatterns: ['**/*oo.*']
                    },
                    _a),
                excludePatterns: ['*fo*']
            });
        });
        it('should ignore globs passed through the search options #4', function () {
            var _a;
            return assertIgnoreGlobs({
                rootOptions: (_a = {},
                    _a[ignoreGlobsUri] = {
                        excludePatterns: ['*fo*']
                    },
                    _a),
                includePatterns: ['**/*oo.*']
            });
        });
        it('should ignore globs passed through the search options #5', function () {
            var _a;
            return assertIgnoreGlobs({
                rootOptions: (_a = {},
                    _a[ignoreGlobsUri] = {},
                    _a),
                excludePatterns: ['*fo*'],
                includePatterns: ['**/*oo.*']
            });
        });
        function assertIgnoreGlobs(options) {
            return __awaiter(this, void 0, void 0, function () {
                var matches;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.find('', options)];
                        case 1:
                            matches = _a.sent();
                            chai_1.expect(matches).to.be.not.undefined;
                            chai_1.expect(matches.length).to.eq(0);
                            return [2 /*return*/];
                    }
                });
            });
        }
    });
    describe('irrelevant absolute results', function () {
        var rootUri = node_1.FileUri.create(path.resolve(__dirname, '../../../..'));
        it('not fuzzy', function () { return __awaiter(_this, void 0, void 0, function () {
            var searchPattern, matches, matches_1, matches_1_1, match, relativUri, relativMatch;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        searchPattern = rootUri.path.dir.base;
                        return [4 /*yield*/, service.find(searchPattern, { rootUris: [rootUri.toString()], fuzzyMatch: false, useGitIgnore: true, limit: 200 })];
                    case 1:
                        matches = _b.sent();
                        try {
                            for (matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                                match = matches_1_1.value;
                                relativUri = rootUri.relative(new uri_1.default(match));
                                assert.notEqual(relativUri, undefined);
                                relativMatch = relativUri.toString();
                                assert.notEqual(relativMatch.indexOf(searchPattern), -1, relativMatch);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (matches_1_1 && !matches_1_1.done && (_a = matches_1.return)) _a.call(matches_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        it('fuzzy', function () { return __awaiter(_this, void 0, void 0, function () {
            var matches, matches_2, matches_2_1, match, relativUri, relativMatch, position, _a, _b, ch;
            var e_2, _c, e_3, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, service.find('shell', { rootUris: [rootUri.toString()], fuzzyMatch: true, useGitIgnore: true, limit: 200 })];
                    case 1:
                        matches = _e.sent();
                        try {
                            for (matches_2 = __values(matches), matches_2_1 = matches_2.next(); !matches_2_1.done; matches_2_1 = matches_2.next()) {
                                match = matches_2_1.value;
                                relativUri = rootUri.relative(new uri_1.default(match));
                                assert.notEqual(relativUri, undefined);
                                relativMatch = relativUri.toString();
                                position = 0;
                                try {
                                    for (_a = (e_3 = void 0, __values('shell')), _b = _a.next(); !_b.done; _b = _a.next()) {
                                        ch = _b.value;
                                        position = relativMatch.indexOf(ch, position);
                                        assert.notEqual(position, -1, relativMatch);
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (matches_2_1 && !matches_2_1.done && (_c = matches_2.return)) _c.call(matches_2);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=file-search-service-impl.spec.js.map
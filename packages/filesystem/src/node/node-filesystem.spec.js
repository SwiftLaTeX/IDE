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
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var temp = require("temp");
var chai = require("chai");
var fs = require("fs-extra");
var node_1 = require("@theia/core/lib/node");
var os_1 = require("@theia/core/lib/common/os");
var node_filesystem_1 = require("./node-filesystem");
var expect_1 = require("@theia/core/lib/common/test/expect");
/* eslint-disable no-unused-expressions */
var expect = chai.expect;
var track = temp.track();
describe('NodeFileSystem', function () {
    var _this = this;
    var root;
    var fileSystem;
    this.timeout(10000);
    beforeEach(function () {
        root = node_1.FileUri.create(fs.realpathSync(temp.mkdirSync('node-fs-root')));
        fileSystem = createFileSystem();
    });
    afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            track.cleanupSync();
            return [2 /*return*/];
        });
    }); });
    describe('01 #getFileStat', function () {
        it('Should return undefined if not file exists under the given URI.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, fileSystem.getFileStat(uri.toString())];
                    case 1:
                        fileStat = _a.sent();
                        expect(fileStat).to.be.undefined;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return a proper result for a file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        return [4 /*yield*/, fileSystem.getFileStat(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.not.be.undefined;
                        expect(stat.isDirectory).to.be.false;
                        expect(stat.uri).to.eq(uri.toString());
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return a proper result for a directory.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri_1, uri_2, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri_1 = root.resolve('foo.txt');
                        uri_2 = root.resolve('bar.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri_1), 'foo');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri_2), 'bar');
                        expect(fs.statSync(node_1.FileUri.fsPath(uri_1)).isFile()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri_2)).isFile()).to.be.true;
                        return [4 /*yield*/, fileSystem.getFileStat(root.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.not.be.undefined;
                        expect(stat.children.length).to.equal(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('02 #resolveContent', function () {
        it('Should be rejected with an error when trying to resolve the content of a non-existing file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.resolveContent(uri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be rejected with an error when trying to resolve the content of a directory.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo');
                        fs.mkdirSync(node_1.FileUri.fsPath(uri));
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isDirectory()).to.be.true;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.resolveContent(uri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be rejected with an error if the desired encoding cannot be handled.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo', { encoding: 'utf8' });
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), { encoding: 'utf8' })).to.be.equal('foo');
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.resolveContent(uri.toString(), { encoding: 'unknownEncoding' }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be return with the content for an existing file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo', { encoding: 'utf8' });
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), { encoding: 'utf8' }))
                            .to.be.equal('foo');
                        return [4 /*yield*/, fileSystem.resolveContent(uri.toString())];
                    case 1:
                        content = _a.sent();
                        expect(content).to.have.property('content')
                            .that.is.equal('foo');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be return with the stat object for an existing file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo', { encoding: 'utf8' });
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), { encoding: 'utf8' }))
                            .to.be.equal('foo');
                        return [4 /*yield*/, fileSystem.resolveContent(uri.toString())];
                    case 1:
                        content = _a.sent();
                        expect(content).to.be.an('object');
                        expect(content).to.have.property('stat');
                        expect(content).to.have.property('stat')
                            .that.has.property('uri')
                            .that.is.equal(uri.toString());
                        expect(content).to.have.property('stat')
                            .that.has.property('size')
                            .that.is.greaterThan(1);
                        expect(content).to.have.property('stat')
                            .that.has.property('lastModification')
                            .that.is.greaterThan(1);
                        expect(content).to.have.property('stat')
                            .that.has.property('isDirectory')
                            .that.is.false;
                        expect(content).to.have.property('stat')
                            .that.not.have.property('children');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('03 #setContent', function () {
        it('Should be rejected with an error when trying to set the content of a non-existing file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        stat = {
                            uri: uri.toString(),
                            lastModification: new Date().getTime(),
                            isDirectory: false
                        };
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.setContent(stat, 'foo'), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be rejected with an error when trying to set the content of a directory.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo');
                        fs.mkdirSync(node_1.FileUri.fsPath(uri));
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isDirectory()).to.be.true;
                        return [4 /*yield*/, fileSystem.getFileStat(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.not.be.undefined;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.setContent(stat, 'foo'), Error)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be rejected with an error when trying to set the content of a file which is out-of-sync.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo', { encoding: 'utf8' });
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), { encoding: 'utf8' }))
                            .to.be.equal('foo');
                        return [4 /*yield*/, fileSystem.getFileStat(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        // Make sure current file stat is out-of-sync.
                        // Here the content is modified in the way that file sizes will differ.
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'longer', { encoding: 'utf8' });
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), { encoding: 'utf8' }))
                            .to.be.equal('longer');
                        expect(stat).to.not.be.undefined;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.setContent(stat, 'baz'), Error)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be rejected with an error when trying to set the content when the desired encoding cannot be handled.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo', { encoding: 'utf8' });
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), { encoding: 'utf8' })).to.be.equal('foo');
                        return [4 /*yield*/, fileSystem.getFileStat(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.not.be.undefined;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.setContent(stat, 'baz', { encoding: 'unknownEncoding' }), Error)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return with a stat representing the latest state of the successfully modified file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, currentStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo', { encoding: 'utf8' });
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), { encoding: 'utf8' })).to.be.equal('foo');
                        return [4 /*yield*/, fileSystem.getFileStat(uri.toString())];
                    case 1:
                        currentStat = _a.sent();
                        expect(currentStat).to.not.be.undefined;
                        return [4 /*yield*/, fileSystem.setContent(currentStat, 'baz')];
                    case 2:
                        _a.sent();
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), { encoding: 'utf8' }))
                            .to.be.equal('baz');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('04 #move', function () {
        it('Should be rejected with an error if no file exists under the source location.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo.txt');
                        targetUri = root.resolve('bar.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.false;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.move(sourceUri.toString(), targetUri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should be rejected with an error if target exists and overwrite is not set to \'true\'.", function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo.txt');
                        targetUri = root.resolve('bar.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(sourceUri), 'foo');
                        fs.writeFileSync(node_1.FileUri.fsPath(targetUri), 'bar');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isFile()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isFile()).to.be.true;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.move(sourceUri.toString(), targetUri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Moving a file to an empty directory. Should be rejected with an error because files cannot be moved to an existing directory locations.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo.txt');
                        targetUri = root.resolve('bar');
                        fs.writeFileSync(node_1.FileUri.fsPath(sourceUri), 'foo');
                        fs.mkdirSync(node_1.FileUri.fsPath(targetUri));
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(sourceUri), 'utf8')).to.be.equal('foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                        expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.be.empty;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Moving a file to a non-empty directory. Should be rejected with and error because files cannot be moved to an existing directory locations.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, targetFileUri_01, targetFileUri_02;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo.txt');
                        targetUri = root.resolve('bar');
                        targetFileUri_01 = targetUri.resolve('bar_01.txt');
                        targetFileUri_02 = targetUri.resolve('bar_02.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(sourceUri), 'foo');
                        fs.mkdirSync(node_1.FileUri.fsPath(targetUri));
                        fs.writeFileSync(node_1.FileUri.fsPath(targetFileUri_01), 'bar_01');
                        fs.writeFileSync(node_1.FileUri.fsPath(targetFileUri_02), 'bar_02');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(sourceUri), 'utf8')).to.be.equal('foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetFileUri_01), 'utf8')).to.be.equal('bar_01');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetFileUri_02), 'utf8')).to.be.equal('bar_02');
                        expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.include('bar_01.txt').and.to.include('bar_02.txt');
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Moving an empty directory to file. Should be rejected with an error because directories and cannot be moved to existing file locations.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar.txt');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        fs.writeFileSync(node_1.FileUri.fsPath(targetUri), 'bar');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetUri), 'utf8')).to.be.equal('bar');
                        expect(fs.readdirSync(node_1.FileUri.fsPath(sourceUri))).to.be.empty;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Moving a non-empty directory to file. Should be rejected with an error because directories cannot be moved to existing file locations.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, sourceFileUri_01, sourceFileUri_02;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar.txt');
                        sourceFileUri_01 = sourceUri.resolve('foo_01.txt');
                        sourceFileUri_02 = sourceUri.resolve('foo_02.txt');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        fs.writeFileSync(node_1.FileUri.fsPath(targetUri), 'bar');
                        fs.writeFileSync(node_1.FileUri.fsPath(sourceFileUri_01), 'foo_01');
                        fs.writeFileSync(node_1.FileUri.fsPath(sourceFileUri_02), 'foo_02');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetUri), 'utf8')).to.be.equal('bar');
                        expect(fs.readdirSync(node_1.FileUri.fsPath(sourceUri))).to.include('foo_01.txt').and.to.include('foo_02.txt');
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Moving file to file. Should overwrite the target file content and delete the source file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo.txt');
                        targetUri = root.resolve('bar.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(sourceUri), 'foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isFile()).to.be.true;
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.false;
                        return [4 /*yield*/, fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true })];
                    case 1:
                        stat = _a.sent();
                        expect(stat).is.an('object')
                            .and.has.property('uri')
                            .that.equals(targetUri.toString());
                        expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.false;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetUri), 'utf8'))
                            .to.be.equal('foo');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Moving an empty directory to an empty directory. Should remove the source directory.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        fs.mkdirSync(node_1.FileUri.fsPath(targetUri));
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                        expect(fs.readdirSync(node_1.FileUri.fsPath(sourceUri))).to.be.empty;
                        expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.be.empty;
                        return [4 /*yield*/, fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true })];
                    case 1:
                        stat = _a.sent();
                        expect(stat).is.an('object')
                            .and.has.property('uri')
                            .that.equals(targetUri.toString());
                        expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.false;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                        expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.be.empty;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Moving an empty directory to a non-empty directory. Should be rejected because the target folder is not empty.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, targetFileUri_01, targetFileUri_02;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar');
                        targetFileUri_01 = targetUri.resolve('bar_01.txt');
                        targetFileUri_02 = targetUri.resolve('bar_02.txt');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        fs.mkdirSync(node_1.FileUri.fsPath(targetUri));
                        fs.writeFileSync(node_1.FileUri.fsPath(targetFileUri_01), 'bar_01');
                        fs.writeFileSync(node_1.FileUri.fsPath(targetFileUri_02), 'bar_02');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                        expect(fs.readdirSync(node_1.FileUri.fsPath(sourceUri))).to.be.empty;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetFileUri_01), 'utf8')).to.be.equal('bar_01');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetFileUri_02), 'utf8')).to.be.equal('bar_02');
                        expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.include('bar_01.txt').and.to.include('bar_02.txt');
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Moving a non-empty directory to an empty directory. Source folder and its content should be moved to the target location.', function () {
            return __awaiter(this, void 0, void 0, function () {
                var sourceUri, targetUri, sourceFileUri_01, sourceFileUri_02, stat;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (os_1.isWindows) {
                                // https://github.com/eclipse-theia/theia/issues/2088
                                this.skip();
                                return [2 /*return*/];
                            }
                            sourceUri = root.resolve('foo');
                            targetUri = root.resolve('bar');
                            sourceFileUri_01 = sourceUri.resolve('foo_01.txt');
                            sourceFileUri_02 = sourceUri.resolve('foo_02.txt');
                            fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                            fs.mkdirSync(node_1.FileUri.fsPath(targetUri));
                            fs.writeFileSync(node_1.FileUri.fsPath(sourceFileUri_01), 'foo_01');
                            fs.writeFileSync(node_1.FileUri.fsPath(sourceFileUri_02), 'foo_02');
                            expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                            expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                            expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.be.empty;
                            expect(fs.readdirSync(node_1.FileUri.fsPath(sourceUri))).to.include('foo_01.txt').and.to.include('foo_02.txt');
                            expect(fs.readFileSync(node_1.FileUri.fsPath(sourceFileUri_01), 'utf8')).to.be.equal('foo_01');
                            expect(fs.readFileSync(node_1.FileUri.fsPath(sourceFileUri_02), 'utf8')).to.be.equal('foo_02');
                            return [4 /*yield*/, fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true })];
                        case 1:
                            stat = _a.sent();
                            expect(stat).is.an('object').and.has.property('uri').that.equals(targetUri.toString());
                            expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.false;
                            expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                            expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.include('foo_01.txt').and.to.include('foo_02.txt');
                            expect(fs.readFileSync(node_1.FileUri.fsPath(targetUri.resolve('foo_01.txt')), 'utf8')).to.be.equal('foo_01');
                            expect(fs.readFileSync(node_1.FileUri.fsPath(targetUri.resolve('foo_02.txt')), 'utf8')).to.be.equal('foo_02');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Moving a non-empty directory to a non-empty directory. Should be rejected because the target location is not empty.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, sourceFileUri_01, sourceFileUri_02, targetFileUri_01, targetFileUri_02;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar');
                        sourceFileUri_01 = sourceUri.resolve('foo_01.txt');
                        sourceFileUri_02 = sourceUri.resolve('foo_02.txt');
                        targetFileUri_01 = targetUri.resolve('bar_01.txt');
                        targetFileUri_02 = targetUri.resolve('bar_02.txt');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        fs.mkdirSync(node_1.FileUri.fsPath(targetUri));
                        fs.writeFileSync(node_1.FileUri.fsPath(sourceFileUri_01), 'foo_01');
                        fs.writeFileSync(node_1.FileUri.fsPath(sourceFileUri_02), 'foo_02');
                        fs.writeFileSync(node_1.FileUri.fsPath(targetFileUri_01), 'bar_01');
                        fs.writeFileSync(node_1.FileUri.fsPath(targetFileUri_02), 'bar_02');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(sourceFileUri_01), 'utf8')).to.be.equal('foo_01');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(sourceFileUri_02), 'utf8')).to.be.equal('foo_02');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetFileUri_01), 'utf8')).to.be.equal('bar_01');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetFileUri_02), 'utf8')).to.be.equal('bar_02');
                        expect(fs.readdirSync(node_1.FileUri.fsPath(sourceUri))).to.include('foo_01.txt').and.to.include('foo_02.txt');
                        expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.include('bar_01.txt').and.to.include('bar_02.txt');
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.move(sourceUri.toString(), targetUri.toString(), { overwrite: true }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('05 #copy', function () {
        it('Copy a file from non existing location. Should be rejected with an error. Nothing to copy.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar');
                        fs.mkdirSync(node_1.FileUri.fsPath(targetUri));
                        expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.false;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.copy(sourceUri.toString(), targetUri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Copy a file to existing location without overwrite enabled. Should be rejected with an error.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar');
                        fs.mkdirSync(node_1.FileUri.fsPath(targetUri));
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(targetUri)).isDirectory()).to.be.true;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.copy(sourceUri.toString(), targetUri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Copy a file to existing location with the same file name. Should be rejected with an error.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.copy(sourceUri.toString(), sourceUri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Copy an empty directory to a non-existing location. Should return with the file stat representing the new file at the target location.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.false;
                        return [4 /*yield*/, fileSystem.copy(sourceUri.toString(), targetUri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.be.an('object');
                        expect(stat).to.have.property('uri')
                            .that.is.equal(targetUri.toString());
                        expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.true;
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Copy an empty directory to a non-existing, nested location. Should return with the file stat representing the new file at the target location.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('nested/path/to/bar');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.false;
                        return [4 /*yield*/, fileSystem.copy(sourceUri.toString(), targetUri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.be.an('object');
                        expect(stat).to.have.property('uri')
                            .that.is.equal(targetUri.toString());
                        expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.true;
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Copy a directory with content to a non-existing location. Should return with the file stat representing the new file at the target location.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, subSourceUri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('bar');
                        subSourceUri = sourceUri.resolve('foo_01.txt');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        fs.writeFileSync(node_1.FileUri.fsPath(subSourceUri), 'foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(subSourceUri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(subSourceUri), 'utf8')).to.be.equal('foo');
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.false;
                        return [4 /*yield*/, fileSystem.copy(sourceUri.toString(), targetUri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.be.an('object');
                        expect(stat).to.have.property('uri').that.is.equal(targetUri.toString());
                        expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.true;
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.true;
                        expect(fs.readdirSync(node_1.FileUri.fsPath(sourceUri))).to.contain('foo_01.txt');
                        expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.contain('foo_01.txt');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(subSourceUri), 'utf8')).to.be.equal('foo');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetUri.resolve('foo_01.txt')), 'utf8')).to.be.equal('foo');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Copy a directory with content to a non-existing, nested location. Should return with the file stat representing the new file at the target location.', function () { return __awaiter(_this, void 0, void 0, function () {
            var sourceUri, targetUri, subSourceUri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = root.resolve('foo');
                        targetUri = root.resolve('nested/path/to/bar');
                        subSourceUri = sourceUri.resolve('foo_01.txt');
                        fs.mkdirSync(node_1.FileUri.fsPath(sourceUri));
                        fs.writeFileSync(node_1.FileUri.fsPath(subSourceUri), 'foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(sourceUri)).isDirectory()).to.be.true;
                        expect(fs.statSync(node_1.FileUri.fsPath(subSourceUri)).isFile()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(subSourceUri), 'utf8')).to.be.equal('foo');
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.false;
                        return [4 /*yield*/, fileSystem.copy(sourceUri.toString(), targetUri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.be.an('object');
                        expect(stat).to.have.property('uri')
                            .that.is.equal(targetUri.toString());
                        expect(fs.existsSync(node_1.FileUri.fsPath(sourceUri))).to.be.true;
                        expect(fs.existsSync(node_1.FileUri.fsPath(targetUri))).to.be.true;
                        expect(fs.readdirSync(node_1.FileUri.fsPath(sourceUri))).to.contain('foo_01.txt');
                        expect(fs.readdirSync(node_1.FileUri.fsPath(targetUri))).to.contain('foo_01.txt');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(subSourceUri), 'utf8')).to.be.equal('foo');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(targetUri.resolve('foo_01.txt')), 'utf8')).to.be.equal('foo');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('07 #createFile', function () {
        it('Should be rejected with an error if a file already exists with the given URI.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.createFile(uri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be rejected with an error if the encoding is given but cannot be handled.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.createFile(uri.toString(), { encoding: 'unknownEncoding' }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create an empty file without any contents by default.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, fileSystem.createFile(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).is.an('object');
                        expect(stat).has.property('uri').that.is.equal(uri.toString());
                        expect(stat).not.has.property('children');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), 'utf8')).to.be.empty;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create a file with the desired content.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, fileSystem.createFile(uri.toString(), { content: 'foo' })];
                    case 1:
                        stat = _a.sent();
                        expect(stat).is.an('object');
                        expect(stat).has.property('uri')
                            .that.is.equal(uri.toString());
                        expect(stat).not.has.property('children');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), 'utf8'))
                            .to.be.equal('foo');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create a file with the desired content into a non-existing, nested location.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo/bar/baz.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, fileSystem.createFile(uri.toString(), { content: 'foo' })];
                    case 1:
                        stat = _a.sent();
                        expect(stat).is.an('object');
                        expect(stat).has.property('uri')
                            .that.is.equal(uri.toString());
                        expect(stat).not.has.property('children');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), 'utf8'))
                            .to.be.equal('foo');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create a file with the desired content and encoding.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, fileSystem.createFile(uri.toString(), { content: 'foo', encoding: 'utf8' })];
                    case 1:
                        stat = _a.sent();
                        expect(stat).is.an('object');
                        expect(stat).has.property('uri')
                            .that.is.equal(uri.toString());
                        expect(stat).not.has.property('children');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), 'utf8'))
                            .to.be.equal('foo');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('08 #createFolder', function () {
        it('Should be rejected with an error if a FILE already exist under the desired URI.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'some content');
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isDirectory()).to.be.false;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.createFolder(uri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should NOT be rejected with an error if a DIRECTORY already exist under the desired URI.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo');
                        fs.mkdirSync(node_1.FileUri.fsPath(uri));
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.true;
                        return [4 /*yield*/, fileSystem.createFolder(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.be.an('object');
                        expect(stat).to.have.property('uri')
                            .that.equals(uri.toString());
                        expect(stat).to.have.property('children')
                            .that.is.empty;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create a directory and return with the stat object on successful directory creation.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, fileSystem.createFolder(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.be.an('object');
                        expect(stat).to.have.property('uri')
                            .that.equals(uri.toString());
                        expect(stat).to.have.property('children')
                            .that.is.empty;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create all the missing directories and return with the stat object on successful creation.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo/bar/foobar/barfoo');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, fileSystem.createFolder(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).to.be.an('object');
                        expect(stat).to.have.property('uri')
                            .that.equals(uri.toString());
                        expect(stat).to.have.property('children')
                            .that.is.empty;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('09 #touch', function () {
        it('Should create a new file if it does not exist yet.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, fileSystem.touchFile(uri.toString())];
                    case 1:
                        stat = _a.sent();
                        expect(stat).is.an('object');
                        expect(stat).has.property('uri')
                            .that.equals(uri.toString());
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should update the modification timestamp on an existing file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, initialStat, updatedStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        return [4 /*yield*/, fileSystem.getFileStat(uri.toString())];
                    case 1:
                        initialStat = _a.sent();
                        expect(initialStat).to.not.be.undefined;
                        expect(initialStat).is.an('object');
                        expect(initialStat).has.property('uri').that.equals(uri.toString());
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        // https://nodejs.org/en/docs/guides/working-with-different-filesystems/#timestamp-resolution
                        return [4 /*yield*/, sleep(1000)];
                    case 2:
                        // https://nodejs.org/en/docs/guides/working-with-different-filesystems/#timestamp-resolution
                        _a.sent();
                        return [4 /*yield*/, fileSystem.touchFile(uri.toString())];
                    case 3:
                        updatedStat = _a.sent();
                        expect(updatedStat).is.an('object');
                        expect(updatedStat).has.property('uri').that.equals(uri.toString());
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        expect(updatedStat.lastModification).to.be.greaterThan(initialStat.lastModification);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('#10 delete', function () {
        it('Should be rejected when the file to delete does not exist.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.delete(uri.toString(), { moveToTrash: false }), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should delete the file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo');
                        expect(fs.readFileSync(node_1.FileUri.fsPath(uri), 'utf8')).to.be.equal('foo');
                        return [4 /*yield*/, fileSystem.delete(uri.toString(), { moveToTrash: false })];
                    case 1:
                        _a.sent();
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should delete a directory without content.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo');
                        fs.mkdirSync(node_1.FileUri.fsPath(uri));
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isDirectory()).to.be.true;
                        return [4 /*yield*/, fileSystem.delete(uri.toString(), { moveToTrash: false })];
                    case 1:
                        _a.sent();
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should delete a directory with all its content.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, subUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo');
                        subUri = uri.resolve('bar.txt');
                        fs.mkdirSync(node_1.FileUri.fsPath(uri));
                        fs.writeFileSync(node_1.FileUri.fsPath(subUri), 'bar');
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isDirectory()).to.be.true;
                        expect(fs.readFileSync(node_1.FileUri.fsPath(subUri), 'utf8')).to.be.equal('bar');
                        return [4 /*yield*/, fileSystem.delete(uri.toString(), { moveToTrash: false })];
                    case 1:
                        _a.sent();
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        expect(fs.existsSync(node_1.FileUri.fsPath(subUri))).to.be.false;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('#11 getEncoding', function () {
        it('Should be rejected with an error if no file exists under the given URI.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        expect(fs.existsSync(node_1.FileUri.fsPath(uri))).to.be.false;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.getEncoding(uri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should be rejected with an error if the URI points to a directory instead of a file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo');
                        fs.mkdirSync(node_1.FileUri.fsPath(uri));
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isDirectory()).to.be.true;
                        return [4 /*yield*/, expect_1.expectThrowsAsync(fileSystem.getEncoding(uri.toString()), Error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return with the encoding of the file.', function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, encoding;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = root.resolve('foo.txt');
                        fs.writeFileSync(node_1.FileUri.fsPath(uri), 'foo');
                        expect(fs.statSync(node_1.FileUri.fsPath(uri)).isFile()).to.be.true;
                        return [4 /*yield*/, fileSystem.getEncoding(uri.toString())];
                    case 1:
                        encoding = _a.sent();
                        expect(encoding).to.be.equal('utf8');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('#14 roots', function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            it('should not throw error', function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = expect;
                            return [4 /*yield*/, createFileSystem().getRoots()];
                        case 1:
                            _a.apply(void 0, [_b.sent()]).to.be.not.empty;
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#15 currentUserHome', function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            it('should exist', function () { return __awaiter(_this, void 0, void 0, function () {
                var userHome, actual, expected;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, createFileSystem().getCurrentUserHome()];
                        case 1:
                            userHome = _a.sent();
                            expect(userHome).to.not.be.undefined;
                            actual = userHome.uri.toString();
                            expected = node_1.FileUri.create(os.homedir()).toString();
                            expect(expected).to.be.equal(actual);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#16 drives', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            it('should list URIs of the drives', function () {
                return __awaiter(this, void 0, void 0, function () {
                    var drives;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.timeout(10000);
                                return [4 /*yield*/, createFileSystem().getDrives()];
                            case 1:
                                drives = _a.sent();
                                expect(drives).to.be.not.empty;
                                return [2 /*return*/];
                        }
                    });
                });
            });
            return [2 /*return*/];
        });
    }); });
    describe('#17 fsPath', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            it('should return undefined', function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, createFileSystem().getFsPath('http://www.theia-ide.org')];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).to.be.undefined;
                                return [2 /*return*/];
                        }
                    });
                });
            });
            it('should return a platform specific path', function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                if (!os_1.isWindows) return [3 /*break*/, 3];
                                _a = expect;
                                return [4 /*yield*/, createFileSystem().getFsPath('file:///C:/user/theia')];
                            case 1:
                                _a.apply(void 0, [_d.sent()]).to.be.equal('c:\\user\\theia');
                                _b = expect;
                                return [4 /*yield*/, createFileSystem().getFsPath('file:///C%3A/user/theia')];
                            case 2:
                                _b.apply(void 0, [_d.sent()]).to.be.equal('c:\\user\\theia');
                                return [3 /*break*/, 5];
                            case 3:
                                _c = expect;
                                return [4 /*yield*/, createFileSystem().getFsPath('file:///user/home/theia')];
                            case 4:
                                _c.apply(void 0, [_d.sent()]).to.be.equal('/user/home/theia');
                                _d.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            });
            return [2 /*return*/];
        });
    }); });
    function createFileSystem() {
        return new node_filesystem_1.FileSystemNode();
    }
    function sleep(time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    }
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
process.on('unhandledRejection', function (reason) {
    console.error('Unhandled promise rejection: ' + reason);
});
//# sourceMappingURL=node-filesystem.spec.js.map
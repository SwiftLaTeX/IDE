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
var fs = require("fs-extra");
var path = require("path");
var temp = require("temp");
var tar_fs_1 = require("tar-fs");
var chai_1 = require("chai");
var uri_1 = require("@theia/core/lib/common/uri");
var mock_directory_archiver_1 = require("./test/mock-directory-archiver");
var file_uri_1 = require("@theia/core/lib/node/file-uri");
/* eslint-disable no-unused-expressions */
var track = temp.track();
describe('directory-archiver', function () {
    after(function () {
        track.cleanupSync();
    });
    it('should archive a directory', function () {
        return __awaiter(this, void 0, void 0, function () {
            var fromPath, toPath, archiver, assertPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(20000);
                        fromPath = track.mkdirSync('from');
                        fs.writeFileSync(path.join(fromPath, 'A.txt'), 'A');
                        fs.writeFileSync(path.join(fromPath, 'B.txt'), 'B');
                        chai_1.expect(fs.readFileSync(path.join(fromPath, 'A.txt'), { encoding: 'utf8' })).to.be.equal('A');
                        chai_1.expect(fs.readFileSync(path.join(fromPath, 'B.txt'), { encoding: 'utf8' })).to.be.equal('B');
                        toPath = track.mkdirSync('to');
                        archiver = new mock_directory_archiver_1.MockDirectoryArchiver();
                        return [4 /*yield*/, archiver.archive(fromPath, path.join(toPath, 'output.tar'))];
                    case 1:
                        _a.sent();
                        chai_1.expect(fs.existsSync(path.join(toPath, 'output.tar'))).to.be.true;
                        assertPath = track.mkdirSync('assertPath');
                        return [2 /*return*/, new Promise(function (resolve) {
                                fs.createReadStream(path.join(toPath, 'output.tar')).pipe(tar_fs_1.extract(assertPath)).on('finish', function () {
                                    chai_1.expect(fs.readdirSync(assertPath).sort()).to.be.deep.equal(['A.txt', 'B.txt']);
                                    chai_1.expect(fs.readFileSync(path.join(assertPath, 'A.txt'), { encoding: 'utf8' })).to.be.equal(fs.readFileSync(path.join(fromPath, 'A.txt'), { encoding: 'utf8' }));
                                    chai_1.expect(fs.readFileSync(path.join(assertPath, 'B.txt'), { encoding: 'utf8' })).to.be.equal(fs.readFileSync(path.join(fromPath, 'B.txt'), { encoding: 'utf8' }));
                                    resolve();
                                });
                            })];
                }
            });
        });
    });
    describe('findCommonParents', function () {
        [
            {
                input: ['/A/B/C/D.txt', '/X/Y/Z.txt'],
                expected: new Map([['/A/B/C', ['/A/B/C/D.txt']], ['/X/Y', ['/X/Y/Z.txt']]]),
                folders: ['/A', '/A/B', '/A/B/C', '/X', '/X/Y']
            },
            {
                input: ['/A/B/C/D.txt', '/A/B/C/E.txt'],
                expected: new Map([['/A/B/C', ['/A/B/C/D.txt', '/A/B/C/E.txt']]]),
                folders: ['/A', '/A/B', '/A/B/C']
            },
            {
                input: ['/A', '/A/B/C/D.txt', '/A/B/C/E.txt'],
                expected: new Map([['/A', ['/A', '/A/B/C/D.txt', '/A/B/C/E.txt']]]),
                folders: ['/A', '/A/B', '/A/B/C']
            },
            {
                input: ['/A/B/C/D.txt', '/A/B/C/E.txt', '/A'],
                expected: new Map([['/A', ['/A', '/A/B/C/D.txt', '/A/B/C/E.txt']]]),
                folders: ['/A', '/A/B', '/A/B/C']
            },
            {
                input: ['/A/B/C/D.txt', '/A/B/X/E.txt'],
                expected: new Map([['/A/B', ['/A/B/C/D.txt', '/A/B/X/E.txt']]]),
                folders: ['/A', '/A/B', '/A/B/C', '/A/B/X']
            }
        ].forEach(function (test) {
            var input = test.input, expected = test.expected, folders = test.folders;
            it("should find the common parent URIs among [" + input.join(', ') + "] => [" + Array.from(expected.keys()).join(', ') + "]", function () { return __awaiter(void 0, void 0, void 0, function () {
                var archiver, actual;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            archiver = new mock_directory_archiver_1.MockDirectoryArchiver(folders ? folders.map(file_uri_1.FileUri.create) : []);
                            return [4 /*yield*/, archiver.findCommonParents(input.map(file_uri_1.FileUri.create))];
                        case 1:
                            actual = _a.sent();
                            chai_1.expect(asString(actual)).to.be.equal(asString(expected));
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        function asString(map) {
            var e_1, _a;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var obj = {};
            try {
                for (var _b = __values(Array.from(map.keys()).sort()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    var values = (map.get(key) || []).sort();
                    obj[new uri_1.default(key).withScheme('file').toString()] = "[" + values.map(function (v) { return new uri_1.default(v).withScheme('file').toString(); }).join(', ') + "]";
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return JSON.stringify(obj);
        }
    });
});
//# sourceMappingURL=directory-archiver.spec.js.map
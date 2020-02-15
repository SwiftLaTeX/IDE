"use strict";
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
var chai = require("chai");
var process = require("process");
var stream = require("stream");
var process_test_container_1 = require("./test/process-test-container");
var raw_process_1 = require("./raw-process");
var temp = require("temp");
var fs = require("fs");
var path = require("path");
var core_1 = require("@theia/core");
/* Allow to create temporary files, but delete them when we're done.  */
var track = temp.track();
/**
 * Globals
 */
var expect = chai.expect;
var FORK_TEST_FILE = path.join(__dirname, '../../src/node/test/process-fork-test.js');
describe('RawProcess', function () {
    this.timeout(20000);
    var rawProcessFactory;
    beforeEach(function () {
        rawProcessFactory = process_test_container_1.createProcessTestContainer().get(raw_process_1.RawProcessFactory);
    });
    after(function () {
        track.cleanupSync();
    });
    it('test error on non-existent path', function () {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var proc = rawProcessFactory({ command: '/non-existent' });
                            proc.onStart(reject);
                            proc.onError(resolve);
                            proc.onExit(reject);
                        })];
                    case 1:
                        error = _a.sent();
                        expect(error.code).eq('ENOENT');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('test error on non-executable path', function () {
        return __awaiter(this, void 0, void 0, function () {
            var f, mode, error, expectedCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        f = track.openSync('non-executable');
                        fs.writeSync(f.fd, 'echo bob');
                        mode = fs.fstatSync(f.fd).mode;
                        mode &= ~fs.constants.S_IXUSR;
                        mode &= ~fs.constants.S_IXGRP;
                        mode &= ~fs.constants.S_IXOTH;
                        fs.fchmodSync(f.fd, mode);
                        fs.closeSync(f.fd);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var proc = rawProcessFactory({ command: f.path });
                                proc.onStart(reject);
                                proc.onError(resolve);
                                proc.onExit(reject);
                            })];
                    case 1:
                        error = _a.sent();
                        expectedCode = core_1.isWindows ? 'UNKNOWN' : 'EACCES';
                        expect(error.code).eq(expectedCode);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('test start event', function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var args, rawProcess;
            return __generator(this, function (_a) {
                args = ['-e', 'process.exit(3)'];
                rawProcess = rawProcessFactory({ command: process.execPath, 'args': args });
                rawProcess.onStart(resolve);
                rawProcess.onError(reject);
                rawProcess.onExit(reject);
                return [2 /*return*/];
            });
        }); });
    });
    it('test exit', function () {
        return __awaiter(this, void 0, void 0, function () {
            var args, rawProcess, p, exitCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        args = ['--version'];
                        rawProcess = rawProcessFactory({ command: process.execPath, 'args': args });
                        p = new Promise(function (resolve, reject) {
                            rawProcess.onError(function (error) {
                                reject();
                            });
                            rawProcess.onExit(function (event) {
                                if (event.code === undefined) {
                                    reject();
                                }
                                resolve(event.code);
                            });
                        });
                        return [4 /*yield*/, p];
                    case 1:
                        exitCode = _a.sent();
                        expect(exitCode).equal(0);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('test pipe stdout stream', function () {
        return __awaiter(this, void 0, void 0, function () {
            var output;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var args, outStream, rawProcess, buf;
                            return __generator(this, function (_a) {
                                args = ['-e', 'console.log("text to stdout")'];
                                outStream = new stream.PassThrough();
                                rawProcess = rawProcessFactory({ command: process.execPath, 'args': args });
                                rawProcess.onError(reject);
                                rawProcess.outputStream.pipe(outStream);
                                buf = '';
                                outStream.on('data', function (data) {
                                    buf += data.toString();
                                });
                                outStream.on('end', function () {
                                    resolve(buf.trim());
                                });
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        output = _a.sent();
                        expect(output).to.be.equal('text to stdout');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('test pipe stderr stream', function () {
        return __awaiter(this, void 0, void 0, function () {
            var output;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var args, outStream, rawProcess, buf;
                            return __generator(this, function (_a) {
                                args = ['-e', 'console.error("text to stderr")'];
                                outStream = new stream.PassThrough();
                                rawProcess = rawProcessFactory({ command: process.execPath, 'args': args });
                                rawProcess.onError(reject);
                                rawProcess.errorStream.pipe(outStream);
                                buf = '';
                                outStream.on('data', function (data) {
                                    buf += data.toString();
                                });
                                outStream.on('end', function () {
                                    resolve(buf.trim());
                                });
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        output = _a.sent();
                        expect(output).to.be.equal('text to stderr');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('test forked pipe stdout stream', function () {
        return __awaiter(this, void 0, void 0, function () {
            var args, rawProcess, outStream, p, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        args = ['version'];
                        rawProcess = rawProcessFactory({ modulePath: FORK_TEST_FILE, args: args, options: { stdio: 'pipe' } });
                        outStream = new stream.PassThrough();
                        p = new Promise(function (resolve, reject) {
                            var version = '';
                            outStream.on('data', function (data) {
                                version += data.toString();
                            });
                            outStream.on('end', function () {
                                resolve(version.trim());
                            });
                        });
                        rawProcess.outputStream.pipe(outStream);
                        _a = expect;
                        return [4 /*yield*/, p];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.equal('1.0.0');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('test forked pipe stderr stream', function () {
        return __awaiter(this, void 0, void 0, function () {
            var rawProcess, outStream, p, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rawProcess = rawProcessFactory({ modulePath: FORK_TEST_FILE, args: [], options: { stdio: 'pipe' } });
                        outStream = new stream.PassThrough();
                        p = new Promise(function (resolve, reject) {
                            var version = '';
                            outStream.on('data', function (data) {
                                version += data.toString();
                            });
                            outStream.on('end', function () {
                                resolve(version.trim());
                            });
                        });
                        rawProcess.errorStream.pipe(outStream);
                        _a = expect;
                        return [4 /*yield*/, p];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.have.string('Error');
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=raw-process.spec.js.map
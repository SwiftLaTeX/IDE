"use strict";
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
var terminal_process_1 = require("./terminal-process");
var os_1 = require("@theia/core/lib/common/os");
/**
 * Globals
 */
var expect = chai.expect;
var terminalProcessFactory;
beforeEach(function () {
    terminalProcessFactory = process_test_container_1.createProcessTestContainer().get(terminal_process_1.TerminalProcessFactory);
});
describe('TerminalProcess', function () {
    this.timeout(20000);
    it('test error on non existent path', function () {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var proc = terminalProcessFactory({ command: '/non-existent' });
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
    it('test error on trying to execute a directory', function () {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var proc = terminalProcessFactory({ command: __dirname });
                            proc.onStart(reject);
                            proc.onError(resolve);
                            proc.onExit(reject);
                        })];
                    case 1:
                        error = _a.sent();
                        if (os_1.isWindows) {
                            // On Windows, node-pty returns us a "File not found" message, so we can't really differentiate this case
                            // from trying to execute a non-existent file.  node's child_process.spawn also returns ENOENT, so it's
                            // probably the best we can get.
                            expect(error.code).eq('ENOENT');
                        }
                        else {
                            expect(error.code).eq('EACCES');
                        }
                        return [2 /*return*/];
                }
            });
        });
    });
    it('test exit', function () {
        return __awaiter(this, void 0, void 0, function () {
            var args, exit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        args = ['--version'];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var proc = terminalProcessFactory({ command: process.execPath, args: args });
                                proc.onExit(resolve);
                                proc.onError(reject);
                            })];
                    case 1:
                        exit = _a.sent();
                        expect(exit.code).eq(0);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('test pipe stream', function () {
        return __awaiter(this, void 0, void 0, function () {
            var v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var args = ['--version'];
                            var terminalProcess = terminalProcessFactory({ command: process.execPath, args: args });
                            terminalProcess.onError(reject);
                            var outStream = new stream.PassThrough();
                            terminalProcess.createOutputStream().pipe(outStream);
                            var version = '';
                            outStream.on('data', function (data) {
                                version += data.toString();
                            });
                            /* node-pty is not sending 'end' on the stream as it quits
                            only 'exit' is sent on the terminal process.  */
                            terminalProcess.onExit(function () {
                                resolve(version.trim());
                            });
                        })];
                    case 1:
                        v = _a.sent();
                        /* Avoid using equal since terminal characters can be inserted at the end.  */
                        expect(v).to.have.string(process.version);
                        return [2 /*return*/];
                }
            });
        });
    });
});
/**
 * @FIXME
 *
 * For some reason, we get a lot of garbage on `stdout` when on Windows.
 * Tested manually `example-browser` and `example-electron`, it seems like
 * the terminals are behaving correctly, meaning that it is only a problem
 * here in the tests.
 */
if (process.platform !== 'win32' || process.env.THEIA_PROCESS_TEST_OVERRIDE) {
    describe('TerminalProcess { shell: true }', function () {
        this.timeout(20000);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function checkOutput(proc, pattern) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var output = '';
                            proc.outputStream.on('data', function (chunk) { return output += chunk; });
                            proc.onExit(function (exit) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (pattern) {
                                        expect(output).match(pattern, output);
                                    }
                                    resolve(__assign(__assign({}, exit), { output: output }));
                                    return [2 /*return*/];
                                });
                            }); });
                            proc.onError(reject);
                        })];
                });
            });
        }
        it('should execute the command as a whole if not arguments are specified', function () {
            return __awaiter(this, void 0, void 0, function () {
                var proc, exit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            proc = terminalProcessFactory({ command: 'echo a b c', options: { shell: true } });
                            return [4 /*yield*/, checkOutput(proc, /^a b c/)];
                        case 1:
                            exit = _a.sent();
                            expect(exit.code).eq(0);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should fail if user defines a full command line and arguments', function () {
            return __awaiter(this, void 0, void 0, function () {
                var proc, exit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            proc = terminalProcessFactory({ command: 'echo a b c', args: [], options: { shell: true } });
                            return [4 /*yield*/, checkOutput(proc)];
                        case 1:
                            exit = _a.sent();
                            expect(exit.code).not.eq(0);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should be able to exec using simple arguments', function () {
            return __awaiter(this, void 0, void 0, function () {
                var proc, exit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            proc = terminalProcessFactory({ command: 'echo', args: ['a', 'b', 'c'], options: { shell: true } });
                            return [4 /*yield*/, checkOutput(proc, /^a b c/)];
                        case 1:
                            exit = _a.sent();
                            expect(exit.code).eq(0);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should be able to run using arguments containing whitespace', function () {
            return __awaiter(this, void 0, void 0, function () {
                var proc, exit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            proc = terminalProcessFactory({ command: 'echo', args: ['a', 'b', '   c'], options: { shell: true } });
                            return [4 /*yield*/, checkOutput(proc, /^a b    c/)];
                        case 1:
                            exit = _a.sent();
                            expect(exit.code).eq(0);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('will fail if user specify problematic arguments', function () {
            return __awaiter(this, void 0, void 0, function () {
                var proc, exit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            proc = terminalProcessFactory({ command: 'echo', args: ['a', 'b', 'c"'], options: { shell: true } });
                            return [4 /*yield*/, checkOutput(proc)];
                        case 1:
                            exit = _a.sent();
                            expect(exit.code).not.eq(0);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should be able to run using arguments specifying which quoting method to use', function () {
            return __awaiter(this, void 0, void 0, function () {
                var proc, exit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            proc = terminalProcessFactory({ command: 'echo', args: ['a', 'b', { value: 'c"', quoting: 'escaped' }], options: { shell: true } });
                            return [4 /*yield*/, checkOutput(proc, /^a b c"/)];
                        case 1:
                            exit = _a.sent();
                            expect(exit.code).eq(0);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
}
//# sourceMappingURL=terminal-process.spec.js.map
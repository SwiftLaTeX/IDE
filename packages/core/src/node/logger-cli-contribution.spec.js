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
var chai_1 = require("chai");
var yargs = require("yargs");
var temp = require("temp");
var fs = require("fs");
var inversify_1 = require("inversify");
var logger_1 = require("../common/logger");
var logger_cli_contribution_1 = require("./logger-cli-contribution");
var sinon = require("sinon");
// Allow creating temporary files, but remove them when we are done.
var track = temp.track();
var cli;
var consoleErrorSpy;
describe('log-level-cli-contribution', function () {
    beforeEach(function () {
        var container = new inversify_1.Container();
        var module = new inversify_1.ContainerModule(function (bind) {
            bind(logger_cli_contribution_1.LogLevelCliContribution).toSelf().inSingletonScope();
        });
        container.load(module);
        cli = container.get(logger_cli_contribution_1.LogLevelCliContribution);
        yargs.reset();
        cli.configure(yargs);
        consoleErrorSpy = sinon.spy(console, 'error');
    });
    afterEach(function () {
        consoleErrorSpy.restore();
    });
    it('should use --log-level flag', function () { return __awaiter(void 0, void 0, void 0, function () {
        var args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = yargs.parse(['--log-level=debug']);
                    return [4 /*yield*/, cli.setArguments(args)];
                case 1:
                    _a.sent();
                    chai_1.expect(cli.defaultLogLevel).eq(logger_1.LogLevel.DEBUG);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should read json config file', function () { return __awaiter(void 0, void 0, void 0, function () {
        var file, args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = track.openSync();
                    fs.writeFileSync(file.fd, JSON.stringify({
                        defaultLevel: 'info',
                        levels: {
                            'hello': 'debug',
                            'world': 'fatal',
                        }
                    }));
                    fs.fsyncSync(file.fd);
                    fs.closeSync(file.fd);
                    args = yargs.parse(['--log-config', file.path]);
                    return [4 /*yield*/, cli.setArguments(args)];
                case 1:
                    _a.sent();
                    chai_1.expect(cli.defaultLogLevel).eq(logger_1.LogLevel.INFO);
                    chai_1.expect(cli.logLevels).eql({
                        hello: logger_1.LogLevel.DEBUG,
                        world: logger_1.LogLevel.FATAL,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should use info as default log level', function () { return __awaiter(void 0, void 0, void 0, function () {
        var args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = yargs.parse([]);
                    return [4 /*yield*/, cli.setArguments(args)];
                case 1:
                    _a.sent();
                    chai_1.expect(cli.defaultLogLevel).eq(logger_1.LogLevel.INFO);
                    chai_1.expect(cli.logLevels).eql({});
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reject wrong default log level', function () { return __awaiter(void 0, void 0, void 0, function () {
        var file, args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = track.openSync();
                    fs.writeFileSync(file.fd, JSON.stringify({
                        defaultLevel: 'potato',
                        levels: {
                            'hello': 'debug',
                            'world': 'fatal',
                        }
                    }));
                    args = yargs.parse(['--log-config', file.path]);
                    return [4 /*yield*/, cli.setArguments(args)];
                case 1:
                    _a.sent();
                    sinon.assert.calledWithMatch(consoleErrorSpy, 'Unknown default log level in');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reject wrong logger log level', function () { return __awaiter(void 0, void 0, void 0, function () {
        var file, args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = track.openSync();
                    fs.writeFileSync(file.fd, JSON.stringify({
                        defaultLevel: 'info',
                        levels: {
                            'hello': 'potato',
                            'world': 'fatal',
                        }
                    }));
                    args = yargs.parse(['--log-config', file.path]);
                    return [4 /*yield*/, cli.setArguments(args)];
                case 1:
                    _a.sent();
                    sinon.assert.calledWithMatch(consoleErrorSpy, 'Unknown log level for logger hello in');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reject nonexistent config files', function () { return __awaiter(void 0, void 0, void 0, function () {
        var args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = yargs.parse(['--log-config', '/tmp/cacaca']);
                    return [4 /*yield*/, cli.setArguments(args)];
                case 1:
                    _a.sent();
                    sinon.assert.calledWithMatch(consoleErrorSpy, 'no such file or directory');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reject config file with invalid JSON', function () { return __awaiter(void 0, void 0, void 0, function () {
        var file, text, args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = track.openSync();
                    text = JSON.stringify({
                        defaultLevel: 'info',
                        levels: {
                            'hello': 'potato',
                            'world': 'fatal',
                        }
                    });
                    fs.writeFileSync(file.fd, '{' + text);
                    args = yargs.parse(['--log-config', file.path]);
                    return [4 /*yield*/, cli.setArguments(args)];
                case 1:
                    _a.sent();
                    sinon.assert.calledWithMatch(consoleErrorSpy, 'Unexpected token { in JSON at position 1');
                    return [2 /*return*/];
            }
        });
    }); });
    // Skip this test because it is flaky, sometimes we don't receive the event.
    // If trying to fix it, make sure that you can run a few of theses (I used
    // 4) in parallel for a few minutes without failure:
    //
    //  $ while ./node_modules/.bin/mocha --opts configs/mocha.opts packages/core/lib/node/logger-cli-contribution.spec.js  --grep watch; do true; done
    it.skip('should watch the config file', function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename, file, args, gotEvent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = track.openSync();
                    filename = file.path;
                    fs.writeFileSync(file.fd, JSON.stringify({
                        defaultLevel: 'info',
                        levels: {
                            'hello': 'debug',
                            'world': 'fatal',
                        }
                    }));
                    fs.fsyncSync(file.fd);
                    fs.closeSync(file.fd);
                    args = yargs.parse(['--log-config', file.path]);
                    return [4 /*yield*/, cli.setArguments(args)];
                case 1:
                    _a.sent();
                    chai_1.expect(cli.defaultLogLevel).eq(logger_1.LogLevel.INFO);
                    chai_1.expect(cli.logLevels).eql({
                        hello: logger_1.LogLevel.DEBUG,
                        world: logger_1.LogLevel.FATAL,
                    });
                    gotEvent = new Promise(function (resolve) {
                        cli.onLogConfigChanged(function () { return resolve(); });
                        var fd = fs.openSync(filename, 'w');
                        fs.ftruncateSync(fd);
                        fs.writeFileSync(fd, JSON.stringify({
                            defaultLevel: 'debug',
                            levels: {
                                'bonjour': 'debug',
                                'world': 'trace',
                            }
                        }));
                        fs.fsyncSync(fd);
                        fs.closeSync(fd);
                    });
                    return [4 /*yield*/, gotEvent];
                case 2:
                    _a.sent();
                    chai_1.expect(cli.defaultLogLevel).eq(logger_1.LogLevel.DEBUG);
                    chai_1.expect(cli.logLevels).eql({
                        bonjour: logger_1.LogLevel.DEBUG,
                        world: logger_1.LogLevel.TRACE,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should keep original levels when changing the log levels file with a broken one', function () {
        return __awaiter(this, void 0, void 0, function () {
            var file, args, waitForTwoSeconds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(5000);
                        file = track.openSync();
                        fs.writeFileSync(file.fd, JSON.stringify({
                            defaultLevel: 'info',
                            levels: {
                                'hello': 'debug',
                                'world': 'fatal',
                            }
                        }));
                        fs.fsyncSync(file.fd);
                        args = yargs.parse(['--log-config', file.path]);
                        return [4 /*yield*/, cli.setArguments(args)];
                    case 1:
                        _a.sent();
                        chai_1.expect(cli.defaultLogLevel).eq(logger_1.LogLevel.INFO);
                        chai_1.expect(cli.logLevels).eql({
                            hello: logger_1.LogLevel.DEBUG,
                            world: logger_1.LogLevel.FATAL,
                        });
                        waitForTwoSeconds = new Promise(function (resolve) {
                            fs.ftruncateSync(file.fd);
                            var text = '{' + JSON.stringify({
                                defaultLevel: 'debug',
                                levels: {
                                    'bonjour': 'debug',
                                    'world': 'trace',
                                }
                            });
                            fs.writeFileSync(file.fd, text);
                            fs.fsyncSync(file.fd);
                            // Check in two seconds that the log levels haven't changed.
                            setTimeout(resolve, 2000);
                        });
                        return [4 /*yield*/, waitForTwoSeconds];
                    case 2:
                        _a.sent();
                        chai_1.expect(cli.defaultLogLevel).eq(logger_1.LogLevel.INFO);
                        chai_1.expect(cli.logLevels).eql({
                            hello: logger_1.LogLevel.DEBUG,
                            world: logger_1.LogLevel.FATAL,
                        });
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=logger-cli-contribution.spec.js.map
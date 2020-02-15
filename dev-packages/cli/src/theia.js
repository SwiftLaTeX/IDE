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
var yargs = require("yargs");
var application_manager_1 = require("@theia/application-manager");
var check_hoisting_1 = require("./check-hoisting");
var download_plugins_1 = require("./download-plugins");
var run_test_1 = require("./run-test");
process.on('unhandledRejection', function (reason, promise) {
    throw reason;
});
process.on('uncaughtException', function (error) {
    if (error) {
        console.error('Uncaught Exception: ', error.toString());
        if (error.stack) {
            console.error(error.stack);
        }
    }
});
function commandArgs(arg) {
    var restIndex = process.argv.indexOf(arg);
    return restIndex !== -1 ? process.argv.slice(restIndex + 1) : [];
}
function rebuildCommand(command, target) {
    return {
        command: command,
        describe: 'rebuild native node modules for the ' + target,
        handler: function () {
            var modules = yargs.array('modules').argv.modules;
            try {
                application_manager_1.rebuild(target, modules);
            }
            catch (err) {
                console.error(err);
                process.exit(1);
            }
        }
    };
}
(function () {
    var _this = this;
    var projectPath = process.cwd();
    var appTarget = yargs.argv['app-target'];
    var manager = new application_manager_1.ApplicationPackageManager({ projectPath: projectPath, appTarget: appTarget });
    var target = manager.pck.target;
    yargs
        .command({
        command: 'start',
        describe: 'start the ' + manager.pck.target + ' backend',
        handler: function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    manager.start(commandArgs('start'));
                }
                catch (err) {
                    console.error(err);
                    process.exit(1);
                }
                return [2 /*return*/];
            });
        }); }
    })
        .command({
        command: 'clean',
        describe: 'clean for the ' + target + ' target',
        handler: function () {
            try {
                manager.clean();
            }
            catch (err) {
                console.error(err);
                process.exit(1);
            }
        }
    })
        .command({
        command: 'copy',
        handler: function () {
            try {
                manager.copy();
            }
            catch (err) {
                console.error(err);
                process.exit(1);
            }
        }
    })
        .command({
        command: 'generate',
        handler: function () {
            try {
                manager.generate();
            }
            catch (err) {
                console.error(err);
                process.exit(1);
            }
        }
    })
        .command({
        command: 'build',
        describe: 'webpack the ' + target + ' frontend',
        handler: function () { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, manager.build(commandArgs('build'))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        process.exit(1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }
    })
        .command(rebuildCommand('rebuild', target))
        .command(rebuildCommand('rebuild:browser', 'browser'))
        .command(rebuildCommand('rebuild:electron', 'electron'))
        .command({
        command: 'check:hoisted',
        describe: 'check that all dependencies are hoisted',
        builder: {
            'suppress': {
                alias: 's',
                describe: 'suppress exiting with failure code',
                boolean: true,
                default: false
            }
        },
        handler: function (args) {
            try {
                check_hoisting_1.default(args);
            }
            catch (err) {
                console.error(err);
                process.exit(1);
            }
        }
    })
        .command({
        command: 'download:plugins',
        describe: 'Download defined external plugins.',
        builder: {
            'packed': {
                alias: 'p',
                describe: 'Controls whether to pack or unpack plugins',
                boolean: true,
                default: false,
            }
        },
        handler: function (args) { return download_plugins_1.default(args); },
    }).command({
        command: 'test',
        builder: {
            'test-inspect': {
                describe: 'Whether to auto-open a DevTools panel for test page.',
                boolean: true,
                default: false
            },
            'test-extension': {
                describe: 'Test file extension(s) to load',
                array: true,
                default: ['js']
            },
            'test-file': {
                describe: 'Specify test file(s) to be loaded prior to root suite execution',
                array: true,
                default: []
            },
            'test-ignore': {
                describe: 'Ignore test file(s) or glob pattern(s)',
                array: true,
                default: []
            },
            'test-recursive': {
                describe: 'Look for tests in subdirectories',
                boolean: true,
                default: false
            },
            'test-sort': {
                describe: 'Sort test files',
                boolean: true,
                default: false
            },
            'test-spec': {
                describe: 'One or more test files, directories, or globs to test',
                array: true,
                default: ['test']
            },
            'test-coverage': {
                describe: 'Report test coverage consumable by istanbul',
                boolean: true,
                default: false
            }
        },
        handler: function (_a) {
            var testInspect = _a.testInspect, testExtension = _a.testExtension, testFile = _a.testFile, testIgnore = _a.testIgnore, testRecursive = _a.testRecursive, testSort = _a.testSort, testSpec = _a.testSpec, testCoverage = _a.testCoverage;
            return __awaiter(_this, void 0, void 0, function () {
                var e_1;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, run_test_1.default({
                                    start: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                                    var serverArgs = commandArgs('test').filter(function (a) { return a.indexOf('test-') === -1; });
                                                    var serverProcess = manager.start(serverArgs);
                                                    serverProcess.on('message', resolve);
                                                    serverProcess.on('error', reject);
                                                    serverProcess.on('close', function (code) { return reject("Server process exited unexpectedly with " + code + " code"); });
                                                })];
                                        });
                                    }); },
                                    launch: {
                                        args: ['--no-sandbox'],
                                        devtools: testInspect
                                    },
                                    files: {
                                        extension: testExtension,
                                        file: testFile,
                                        ignore: testIgnore,
                                        recursive: testRecursive,
                                        sort: testSort,
                                        spec: testSpec
                                    },
                                    coverage: testCoverage
                                })];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _b.sent();
                            console.error(e_1);
                            process.exit(1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    });
    // see https://github.com/yargs/yargs/issues/287#issuecomment-314463783
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var commands = yargs.getCommandInstance().getCommands();
    var argv = yargs.demandCommand(1).argv;
    var command = argv._[0];
    if (!command || commands.indexOf(command) === -1) {
        console.log('non-existing or no command specified');
        yargs.showHelp();
        process.exit(1);
    }
    else {
        yargs.help(false);
    }
})();
//# sourceMappingURL=theia.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2017-2019 Ericsson and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var node_1 = require("@theia/core/lib/node");
var node_2 = require("@theia/process/lib/node");
var process_task_1 = require("./process-task");
var task_protocol_1 = require("../../common/process/task-protocol");
var fs = require("fs");
/**
 * Task runner that runs a task as a process or a command inside a shell.
 */
var ProcessTaskRunner = /** @class */ (function () {
    function ProcessTaskRunner() {
    }
    /**
     * Runs a task from the given task configuration.
     * @param taskConfig task configuration to run a task from. The provided task configuration must have a shape of `CommandProperties`.
     */
    ProcessTaskRunner.prototype.run = function (taskConfig, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, command, args, options, processType, proc_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!taskConfig.command) {
                            throw new Error("Process task config must have 'command' property specified");
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this.getResolvedCommand(taskConfig), command = _a.command, args = _a.args, options = _a.options;
                        processType = taskConfig.type === 'process' ? 'process' : 'shell';
                        // Always spawn a task in a pty, the only difference between shell/process tasks is the
                        // way the command is passed:
                        // - process: directly look for an executable and pass a specific set of arguments/options.
                        // - shell: defer the spawning to a shell that will evaluate a command line with our executable.
                        if (processType === 'process') {
                            this.logger.debug("Task: spawning process: " + command + " with " + args);
                            proc_1 = this.terminalProcessFactory({
                                command: command, args: args, options: __assign(__assign({}, options), { shell: false })
                            });
                        }
                        else {
                            // all Task types without specific TaskRunner will be run as a shell process e.g.: npm, gulp, etc.
                            this.logger.debug("Task: executing command through a shell: " + command);
                            proc_1 = this.terminalProcessFactory({
                                command: command, args: args, options: __assign(__assign({}, options), { shell: options.shell || true }),
                            });
                        }
                        // Wait for the confirmation that the process is successfully started, or has failed to start.
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                proc_1.onStart(resolve);
                                proc_1.onError(function (error) {
                                    reject(task_protocol_1.ProcessTaskError.CouldNotRun(error.code));
                                });
                            })];
                    case 2:
                        // Wait for the confirmation that the process is successfully started, or has failed to start.
                        _b.sent();
                        return [2 /*return*/, this.taskFactory({
                                label: taskConfig.label,
                                process: proc_1,
                                processType: processType,
                                context: ctx,
                                config: taskConfig
                            })];
                    case 3:
                        error_1 = _b.sent();
                        this.logger.error("Error occurred while creating task: " + error_1);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProcessTaskRunner.prototype.getResolvedCommand = function (taskConfig) {
        var systemSpecificCommand;
        // on windows, windows-specific options, if available, take precedence
        if (core_1.isWindows && taskConfig.windows !== undefined) {
            systemSpecificCommand = this.getSystemSpecificCommand(taskConfig, 'windows');
        }
        else if (core_1.isOSX && taskConfig.osx !== undefined) { // on macOS, mac-specific options, if available, take precedence
            systemSpecificCommand = this.getSystemSpecificCommand(taskConfig, 'osx');
        }
        else if (!core_1.isWindows && !core_1.isOSX && taskConfig.linux !== undefined) { // on linux, linux-specific options, if available, take precedence
            systemSpecificCommand = this.getSystemSpecificCommand(taskConfig, 'linux');
        }
        else { // system-specific options are unavailable, use the default
            systemSpecificCommand = this.getSystemSpecificCommand(taskConfig, undefined);
        }
        var options = systemSpecificCommand.options;
        // sanity checks:
        // - we expect the cwd to be set by the client.
        if (!options || !options.cwd) {
            throw new Error("Can't run a task when 'cwd' is not provided by the client");
        }
        // Use task's cwd with spawned process and pass node env object to
        // new process, so e.g. we can re-use the system path
        if (options) {
            options.env = __assign(__assign({}, process.env), (options.env || {}));
        }
        return systemSpecificCommand;
    };
    ProcessTaskRunner.prototype.getSystemSpecificCommand = function (taskConfig, system) {
        // initialize with default values from the `taskConfig`
        var command = taskConfig.command;
        var args = taskConfig.args;
        var options = taskConfig.options || {};
        if (system) {
            if (taskConfig[system].command) {
                command = taskConfig[system].command;
            }
            if (taskConfig[system].args) {
                args = taskConfig[system].args;
            }
            if (taskConfig[system].options) {
                options = taskConfig[system].options;
            }
        }
        return { command: command, args: args, options: options };
    };
    ProcessTaskRunner.prototype.asFsPath = function (uriOrPath) {
        return (uriOrPath.startsWith('file:/'))
            ? node_1.FileUri.fsPath(uriOrPath)
            : uriOrPath;
    };
    /**
     * @deprecated
     *
     * Remove ProcessTaskRunner.findCommand, introduce process "started" event
     * Checks for the existence of a file, at the provided path, and make sure that
     * it's readable and executable.
     */
    ProcessTaskRunner.prototype.executableFileExists = function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            fs.access(filePath, fs.constants.F_OK | fs.constants.X_OK, function (err) {
                                resolve(err ? false : true);
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    __decorate([
        inversify_1.inject(core_1.ILogger), inversify_1.named('task'),
        __metadata("design:type", Object)
    ], ProcessTaskRunner.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(node_2.RawProcessFactory),
        __metadata("design:type", Function)
    ], ProcessTaskRunner.prototype, "rawProcessFactory", void 0);
    __decorate([
        inversify_1.inject(node_2.TerminalProcessFactory),
        __metadata("design:type", Function)
    ], ProcessTaskRunner.prototype, "terminalProcessFactory", void 0);
    __decorate([
        inversify_1.inject(process_task_1.TaskFactory),
        __metadata("design:type", Function)
    ], ProcessTaskRunner.prototype, "taskFactory", void 0);
    ProcessTaskRunner = __decorate([
        inversify_1.injectable()
    ], ProcessTaskRunner);
    return ProcessTaskRunner;
}());
exports.ProcessTaskRunner = ProcessTaskRunner;
//# sourceMappingURL=process-task-runner.js.map
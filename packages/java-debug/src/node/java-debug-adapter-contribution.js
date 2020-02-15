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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
// https://github.com/Microsoft/vscode-java-debug/blob/master/src/configurationProvider.ts adjusted to Theia APIs
/* eslint-disable @typescript-eslint/no-explicit-any */
var path = require("path");
var _ = require("lodash");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var quick_pick_service_1 = require("@theia/core/lib/common/quick-pick-service");
var vscode_debug_adapter_contribution_1 = require("@theia/debug/lib/node/vscode/vscode-debug-adapter-contribution");
var VSCodeJavaDebugCommands;
(function (VSCodeJavaDebugCommands) {
    VSCodeJavaDebugCommands.COMPILE_WORKSPACE = 'java.workspace.compile';
    VSCodeJavaDebugCommands.RESOLVE_MAINCLASS = 'vscode.java.resolveMainClass';
    VSCodeJavaDebugCommands.VALIDATE_LAUNCH_CONFIG = 'vscode.java.validateLaunchConfig';
    VSCodeJavaDebugCommands.RESOLVE_CLASSPATH = 'vscode.java.resolveClasspath';
    VSCodeJavaDebugCommands.START_DEBUG_SESSION = 'vscode.java.startDebugSession';
})(VSCodeJavaDebugCommands = exports.VSCodeJavaDebugCommands || (exports.VSCodeJavaDebugCommands = {}));
var JavaDebugExtensionContribution = /** @class */ (function (_super) {
    __extends(JavaDebugExtensionContribution, _super);
    function JavaDebugExtensionContribution() {
        return _super.call(this, 'java', path.join(__dirname, '../../download/java-debug/extension')) || this;
    }
    JavaDebugExtensionContribution.prototype.getExtensionBundles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var debuggerContribution;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pck];
                    case 1:
                        debuggerContribution = (_a.sent());
                        return [2 /*return*/, debuggerContribution.contributes.javaExtensions.map(function (javaExtPath) {
                                return path.resolve(_this.extensionPath, javaExtPath);
                            })];
                }
            });
        });
    };
    JavaDebugExtensionContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], JavaDebugExtensionContribution);
    return JavaDebugExtensionContribution;
}(vscode_debug_adapter_contribution_1.AbstractVSCodeDebugAdapterContribution));
exports.JavaDebugExtensionContribution = JavaDebugExtensionContribution;
var JavaDebugAdapterContribution = /** @class */ (function (_super) {
    __extends(JavaDebugAdapterContribution, _super);
    function JavaDebugAdapterContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JavaDebugAdapterContribution.prototype.provideDebugConfigurations = function (workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var items, defaultLaunchConfig, cache, launchConfigs, defaultAttachConfig;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveMainClass(workspaceFolderUri)];
                    case 1:
                        items = _a.sent();
                        defaultLaunchConfig = {
                            type: 'java',
                            name: 'Debug (Launch)',
                            request: 'launch',
                            cwd: '${workspaceFolder}',
                            console: 'internalConsole',
                            stopOnEntry: false,
                            mainClass: '',
                            args: '',
                        };
                        cache = {};
                        launchConfigs = items.map(function (item) { return (__assign(__assign({}, defaultLaunchConfig), { name: _this.constructLaunchConfigName(item.mainClass, item.projectName, cache), mainClass: item.mainClass, projectName: item.projectName })); });
                        defaultAttachConfig = {
                            type: 'java',
                            name: 'Debug (Attach)',
                            request: 'attach',
                            hostName: 'localhost',
                            port: '<debug port of remote debuggee>',
                        };
                        return [2 /*return*/, __spread([defaultLaunchConfig], launchConfigs, [defaultAttachConfig])];
                }
            });
        });
    };
    JavaDebugAdapterContribution.prototype.constructLaunchConfigName = function (mainClass, projectName, cache) {
        var prefix = 'Debug (Launch)-';
        var name = prefix + mainClass.substr(mainClass.lastIndexOf('.') + 1);
        if (projectName !== undefined) {
            name += "<" + projectName + ">";
        }
        if (cache[name] === undefined) {
            cache[name] = 0;
            return name;
        }
        cache[name] += 1;
        return name + "(" + cache[name] + ")";
    };
    JavaDebugAdapterContribution.prototype.resolveDebugConfiguration = function (config, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1, answer, mainClassOption, result, debugServerPort, ex_1, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 12, , 13]);
                        if (!(config.request === 'launch')) return [3 /*break*/, 9];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.compileWorkspace()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.messages.error('Build failed, do you want to continue?', 'Proceed', 'Abort')];
                    case 4:
                        answer = _a.sent();
                        if (answer !== 'Proceed') {
                            return [2 /*return*/, undefined];
                        }
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, this.resolveLaunchConfig(config, workspaceFolderUri)];
                    case 6:
                        mainClassOption = _a.sent();
                        if (!mainClassOption || !mainClassOption.mainClass) { // Exit silently if the user cancels the prompt fix by ESC.
                            // Exit the debug session.
                            return [2 /*return*/];
                        }
                        config.mainClass = mainClassOption.mainClass;
                        config.projectName = mainClassOption.projectName;
                        if (!(_.isEmpty(config.classPaths) && _.isEmpty(config.modulePaths))) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.resolveClasspath(config.mainClass, config.projectName)];
                    case 7:
                        result = _a.sent();
                        config.modulePaths = result && result[0];
                        config.classPaths = result && result[1];
                        _a.label = 8;
                    case 8:
                        if (_.isEmpty(config.classPaths) && _.isEmpty(config.modulePaths)) {
                            throw new Error('Cannot resolve the modulepaths/classpaths automatically, please specify the value in the launch.json.');
                        }
                        return [3 /*break*/, 10];
                    case 9:
                        if (config.request === 'attach') {
                            if (!config.hostName || !config.port) {
                                throw new Error('Please specify the host name and the port of the remote debuggee in the launch.json.');
                            }
                        }
                        else {
                            throw new Error("Request type \"" + config.request + "\" is not supported. Only \"launch\" and \"attach\" are supported.");
                        }
                        _a.label = 10;
                    case 10:
                        if (Array.isArray(config.args)) {
                            config.args = this.concatArgs(config.args);
                        }
                        if (Array.isArray(config.vmArgs)) {
                            config.vmArgs = this.concatArgs(config.vmArgs);
                        }
                        return [4 /*yield*/, this.startDebugSession()];
                    case 11:
                        debugServerPort = _a.sent();
                        if (debugServerPort) {
                            config.debugServer = debugServerPort;
                            return [2 /*return*/, config];
                        }
                        else {
                            throw new Error('Failed to start debug server.');
                        }
                        return [3 /*break*/, 13];
                    case 12:
                        ex_1 = _a.sent();
                        errorMessage = (ex_1 && ex_1.message) || ex_1;
                        this.messages.error(String(errorMessage));
                        return [2 /*return*/, undefined];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    JavaDebugAdapterContribution.prototype.resolveLaunchConfig = function (config, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var containsExternalClasspaths, validationResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!config.mainClass) {
                            return [2 /*return*/, this.promptMainClass(workspaceFolderUri)];
                        }
                        containsExternalClasspaths = !_.isEmpty(config.classPaths) || !_.isEmpty(config.modulePaths);
                        return [4 /*yield*/, this.validateLaunchConfig(config.mainClass, config.projectName, containsExternalClasspaths, workspaceFolderUri)];
                    case 1:
                        validationResponse = _a.sent();
                        if (validationResponse && (!validationResponse.mainClass.isValid || !validationResponse.projectName.isValid)) {
                            return [2 /*return*/, this.fixMainClass(config, validationResponse, workspaceFolderUri)];
                        }
                        return [2 /*return*/, {
                                mainClass: config.mainClass,
                                projectName: config.projectName,
                            }];
                }
            });
        });
    };
    JavaDebugAdapterContribution.prototype.promptMainClass = function (workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveMainClass(workspaceFolderUri)];
                    case 1:
                        options = _a.sent();
                        if (options.length) {
                            return [2 /*return*/, this.selectMainClass(options)];
                        }
                        throw new Error('Cannot find a class with the main method.');
                }
            });
        });
    };
    JavaDebugAdapterContribution.prototype.fixMainClass = function (config, validationResponse, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var errors, message, proposals, answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errors = [];
                        if (!validationResponse.mainClass.isValid) {
                            errors.push(String(validationResponse.mainClass.message));
                        }
                        if (!validationResponse.projectName.isValid) {
                            errors.push(String(validationResponse.projectName.message));
                        }
                        message = errors.join('\n');
                        proposals = validationResponse.proposals || [];
                        if (!(validationResponse.proposals && validationResponse.proposals.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.messages.error(message, 'Fix')];
                    case 1:
                        answer = _a.sent();
                        return [2 /*return*/, answer === 'Fix' ? this.selectMainClass(proposals) : undefined];
                    case 2: throw new Error(message);
                }
            });
        });
    };
    JavaDebugAdapterContribution.prototype.selectMainClass = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.quickPickService.show(this.formatMainClassOptions(options), { placeholder: 'Select main class<project name>' })];
            });
        });
    };
    JavaDebugAdapterContribution.prototype.formatMainClassOptions = function (options) {
        return options.map(function (option) {
            var label = option.mainClass;
            var description = "main class: " + option.mainClass;
            if (option.projectName) {
                label += "<" + option.projectName + ">";
                description += " | project name: " + option.projectName;
            }
            return {
                label: label,
                description: description,
                value: option
            };
        });
    };
    JavaDebugAdapterContribution.prototype.resolveMainClass = function (workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commands.executeCommand(VSCodeJavaDebugCommands.RESOLVE_MAINCLASS, workspaceFolderUri)];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, items || []];
                }
            });
        });
    };
    JavaDebugAdapterContribution.prototype.compileWorkspace = function () {
        return this.commands.executeCommand(VSCodeJavaDebugCommands.COMPILE_WORKSPACE, false);
    };
    JavaDebugAdapterContribution.prototype.validateLaunchConfig = function (mainClass, projectName, containsExternalClasspaths, workspaceFolderUri) {
        return this.commands.executeCommand(VSCodeJavaDebugCommands.VALIDATE_LAUNCH_CONFIG, workspaceFolderUri, mainClass, projectName, containsExternalClasspaths);
    };
    JavaDebugAdapterContribution.prototype.resolveClasspath = function (mainClass, projectName) {
        return this.commands.executeCommand(VSCodeJavaDebugCommands.RESOLVE_CLASSPATH, mainClass, projectName);
    };
    JavaDebugAdapterContribution.prototype.startDebugSession = function () {
        return this.commands.executeCommand(VSCodeJavaDebugCommands.START_DEBUG_SESSION);
    };
    /**
     * Converts an array of arguments to a string as the args and vmArgs.
     */
    JavaDebugAdapterContribution.prototype.concatArgs = function (args) {
        return _.join(_.map(args, function (arg) {
            var str = String(arg);
            // if it has quotes or spaces, use double quotes to wrap it
            if (/['"\s]/.test(str)) {
                return '"' + str.replace(/(['"\\])/g, '\\$1') + '"';
            }
            return str;
            // if it has only single quotes
        }), ' ');
    };
    __decorate([
        inversify_1.inject(common_1.CommandService),
        __metadata("design:type", Object)
    ], JavaDebugAdapterContribution.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], JavaDebugAdapterContribution.prototype, "messages", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], JavaDebugAdapterContribution.prototype, "quickPickService", void 0);
    JavaDebugAdapterContribution = __decorate([
        inversify_1.injectable()
    ], JavaDebugAdapterContribution);
    return JavaDebugAdapterContribution;
}(JavaDebugExtensionContribution));
exports.JavaDebugAdapterContribution = JavaDebugAdapterContribution;
//# sourceMappingURL=java-debug-adapter-contribution.js.map
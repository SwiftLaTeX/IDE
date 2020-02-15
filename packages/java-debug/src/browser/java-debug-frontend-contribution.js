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
var _ = require("lodash");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/languages/lib/browser");
var browser_2 = require("@theia/workspace/lib/browser");
var debug_session_manager_1 = require("@theia/debug/lib/browser/debug-session-manager");
var debug_configuration_manager_1 = require("@theia/debug/lib/browser/debug-configuration-manager");
var java_debug_preferences_1 = require("./java-debug-preferences");
var HcrChangeType;
(function (HcrChangeType) {
    HcrChangeType["ERROR"] = "ERROR";
    HcrChangeType["WARNING"] = "WARNING";
    HcrChangeType["STARTING"] = "STARTING";
    HcrChangeType["END"] = "END";
    HcrChangeType["BUILD_COMPLETE"] = "BUILD_COMPLETE";
})(HcrChangeType || (HcrChangeType = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["FINE"] = "FINE";
    LogLevel["INFO"] = "INFO";
    LogLevel["SEVERE"] = "SEVERE";
    LogLevel["WARNING"] = "WARNING";
})(LogLevel || (LogLevel = {}));
var JavaDebugCommands;
(function (JavaDebugCommands) {
    JavaDebugCommands.RUN = {
        id: 'java.debug.run'
    };
    JavaDebugCommands.DEBUG = {
        id: 'java.debug.debug'
    };
    JavaDebugCommands.RESOLVE_MAIN_METHOD = 'vscode.java.resolveMainMethod';
})(JavaDebugCommands = exports.JavaDebugCommands || (exports.JavaDebugCommands = {}));
var JavaDebugSession;
(function (JavaDebugSession) {
    function is(session) {
        return session.configuration.type === 'java';
    }
    JavaDebugSession.is = is;
})(JavaDebugSession = exports.JavaDebugSession || (exports.JavaDebugSession = {}));
var JavaDebugFrontendContribution = /** @class */ (function () {
    function JavaDebugFrontendContribution() {
        this.suppressedReasons = new Set();
        this.toDisposeRunDebugCodeLens = new common_1.DisposableCollection();
        this.dirtyDebugSettings = true;
    }
    JavaDebugFrontendContribution.prototype.initialize = function () {
        var _this = this;
        this.updateRunDebugCodeLens();
        this.preferences.onPreferenceChanged(function (_a) {
            var preferenceName = _a.preferenceName;
            if (preferenceName === 'java.debug.settings.enableRunDebugCodeLens') {
                _this.updateRunDebugCodeLens();
            }
        });
        this.sessions.onDidCreateDebugSession(function (session) {
            if (JavaDebugSession.is(session) && _this.sessions.sessions.filter(JavaDebugSession.is).length === 1) {
                _this.updateDebugSettings();
            }
        });
        this.sessions.onDidReceiveDebugSessionCustomEvent(function (_a) {
            var session = _a.session, event = _a.event, body = _a.body;
            if (session.configuration.type !== 'java') {
                return;
            }
            if (event === 'hotcodereplace' && body) {
                return _this.applyCodeChanges(session, body);
            }
            if (event === 'usernotification' && body) {
                return _this.handleUserNotification(body);
            }
        });
        this.sessions.onDidDestroyDebugSession(function (session) {
            if (session.configuration.type === 'java') {
                _this.suppressedReasons.clear();
            }
        });
        var configurations = this.workspace.configurations;
        if (configurations) {
            configurations.onDidChangeConfiguration(function (e) {
                if (e.affectsConfiguration('java.debug')) {
                    _this.dirtyDebugSettings = true;
                    if (_this.sessions.sessions.some(JavaDebugSession.is)) {
                        _this.updateDebugSettings();
                    }
                }
            });
        }
    };
    JavaDebugFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(JavaDebugCommands.RUN, {
            execute: function (mainClass, projectName, uri) { return _this.runProgram(mainClass, projectName, uri); }
        });
        commands.registerCommand(JavaDebugCommands.DEBUG, {
            execute: function (mainClass, projectName, uri) { return _this.runProgram(mainClass, projectName, uri, false); }
        });
    };
    JavaDebugFrontendContribution.prototype.updateRunDebugCodeLens = function () {
        var _this = this;
        if (!this.preferences['java.debug.settings.enableRunDebugCodeLens']) {
            this.toDisposeRunDebugCodeLens.dispose();
            return;
        }
        if (!this.languages.registerCodeLensProvider || !this.toDisposeRunDebugCodeLens.disposed) {
            return;
        }
        this.toDisposeRunDebugCodeLens.push(this.languages.registerCodeLensProvider([{ language: 'java' }], {
            provideCodeLenses: function (params) { return __awaiter(_this, void 0, void 0, function () {
                var uri_2, mainMethods, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.commands.isEnabled(JavaDebugCommands.RESOLVE_MAIN_METHOD)) {
                                return [2 /*return*/, []];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            uri_2 = params.textDocument.uri;
                            return [4 /*yield*/, this.commands.executeCommand(JavaDebugCommands.RESOLVE_MAIN_METHOD, uri_2)];
                        case 2:
                            mainMethods = (_a.sent()) || [];
                            return [2 /*return*/, _.flatten(mainMethods.map(function (method) { return [
                                    {
                                        range: method.range,
                                        command: {
                                            title: '▶ Run',
                                            command: JavaDebugCommands.RUN.id,
                                            arguments: [method.mainClass, method.projectName, uri_2]
                                        }
                                    },
                                    {
                                        range: method.range,
                                        command: {
                                            title: '🐞 Debug',
                                            command: JavaDebugCommands.DEBUG.id,
                                            arguments: [method.mainClass, method.projectName, uri_2]
                                        }
                                    }
                                ]; }))];
                        case 3:
                            e_1 = _a.sent();
                            console.error(e_1);
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            }); }
        }));
    };
    JavaDebugFrontendContribution.prototype.runProgram = function (mainClass, projectName, uri, noDebug) {
        if (noDebug === void 0) { noDebug = true; }
        return __awaiter(this, void 0, void 0, function () {
            var workspaceFolder, workspaceFolderUri, configuration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        workspaceFolder = this.workspaceService.getWorkspaceRootUri(new uri_1.default(uri));
                        workspaceFolderUri = workspaceFolder && workspaceFolder.toString();
                        configuration = this.constructDebugConfig(mainClass, projectName, workspaceFolderUri);
                        configuration.projectName = projectName;
                        configuration.noDebug = noDebug;
                        return [4 /*yield*/, this.sessions.start({
                                configuration: configuration,
                                workspaceFolderUri: workspaceFolderUri
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JavaDebugFrontendContribution.prototype.constructDebugConfig = function (mainClass, projectName, workspaceFolderUri) {
        return _.cloneDeep(this.findConfiguration(mainClass, projectName).next().value || {
            type: 'java',
            name: "CodeLens (Launch) - " + mainClass.substr(mainClass.lastIndexOf('.') + 1),
            request: 'launch',
            cwd: workspaceFolderUri ? '${workspaceFolder}' : undefined,
            console: 'internalConsole',
            stopOnEntry: false,
            mainClass: mainClass,
            args: '',
            projectName: projectName,
        });
    };
    JavaDebugFrontendContribution.prototype.findConfiguration = function (mainClass, projectName) {
        var _a, _b, option, configuration, e_2_1, _c, _d, option, configuration, e_3_1;
        var e_2, _e, e_3, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 5, 6, 7]);
                    _a = __values(this.configurations.all), _b = _a.next();
                    _g.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    option = _b.value;
                    configuration = option.configuration;
                    if (!(configuration.mainClass === mainClass && _.toString(configuration.projectName) === _.toString(projectName))) return [3 /*break*/, 3];
                    return [4 /*yield*/, configuration];
                case 2:
                    _g.sent();
                    _g.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_2_1 = _g.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 7:
                    _g.trys.push([7, 12, 13, 14]);
                    _c = __values(this.configurations.all), _d = _c.next();
                    _g.label = 8;
                case 8:
                    if (!!_d.done) return [3 /*break*/, 11];
                    option = _d.value;
                    configuration = option.configuration;
                    if (!(configuration.mainClass === mainClass && !configuration.projectName)) return [3 /*break*/, 10];
                    return [4 /*yield*/, configuration];
                case 9:
                    _g.sent();
                    _g.label = 10;
                case 10:
                    _d = _c.next();
                    return [3 /*break*/, 8];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_3_1 = _g.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    };
    JavaDebugFrontendContribution.prototype.updateDebugSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configurations, configuration, logLevel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.dirtyDebugSettings) {
                            return [2 /*return*/];
                        }
                        this.dirtyDebugSettings = false;
                        configurations = this.workspace.configurations;
                        if (!configurations) return [3 /*break*/, 2];
                        configuration = configurations.getConfiguration('java.debug');
                        logLevel = this.convertLogLevel(configuration.logLevel || '');
                        if (!(configuration.settings && Object.keys(configuration.settings).length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.commands.executeCommand('vscode.java.updateDebugSettings', JSON.stringify(__assign(__assign({}, configuration.settings), { logLevel: logLevel })))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    JavaDebugFrontendContribution.prototype.convertLogLevel = function (commonLogLevel) {
        // convert common log level to java log level
        switch (commonLogLevel.toLowerCase()) {
            case 'verbose':
                return LogLevel.FINE;
            case 'warn':
                return LogLevel.WARNING;
            case 'error':
                return LogLevel.SEVERE;
            case 'info':
                return LogLevel.INFO;
            default:
                return LogLevel.FINE;
        }
    };
    JavaDebugFrontendContribution.prototype.applyCodeChanges = function (session, _a) {
        var changeType = _a.changeType, message = _a.message;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (changeType === HcrChangeType.BUILD_COMPLETE) {
                            this.messages.info('Applying code changes...');
                            session.sendCustomRequest('redefineClasses');
                            return [2 /*return*/];
                        }
                        if (!(changeType === HcrChangeType.ERROR || changeType === HcrChangeType.WARNING)) return [3 /*break*/, 2];
                        if (this.suppressedReasons.has(message)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.messages.error("Hot code replace failed - " + message + ". Would you like to restart the debug session?", 'Yes', 'No', 'Not show again')];
                    case 1:
                        response = _b.sent();
                        if (response === 'Not show again') {
                            this.suppressedReasons.add(message);
                        }
                        else if (response === 'Yes') {
                            this.sessions.restart(session);
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    JavaDebugFrontendContribution.prototype.handleUserNotification = function (_a) {
        var notificationType = _a.notificationType, message = _a.message;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(notificationType === 'ERROR')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.messages.error(message)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(notificationType === 'WARNING')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.messages.warn(message)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.messages.info(message)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.Workspace),
        __metadata("design:type", Object)
    ], JavaDebugFrontendContribution.prototype, "workspace", void 0);
    __decorate([
        inversify_1.inject(browser_1.Languages),
        __metadata("design:type", Object)
    ], JavaDebugFrontendContribution.prototype, "languages", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], JavaDebugFrontendContribution.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], JavaDebugFrontendContribution.prototype, "messages", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], JavaDebugFrontendContribution.prototype, "sessions", void 0);
    __decorate([
        inversify_1.inject(java_debug_preferences_1.JavaDebugPreferences),
        __metadata("design:type", Object)
    ], JavaDebugFrontendContribution.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], JavaDebugFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], JavaDebugFrontendContribution.prototype, "configurations", void 0);
    JavaDebugFrontendContribution = __decorate([
        inversify_1.injectable()
    ], JavaDebugFrontendContribution);
    return JavaDebugFrontendContribution;
}());
exports.JavaDebugFrontendContribution = JavaDebugFrontendContribution;
//# sourceMappingURL=java-debug-frontend-contribution.js.map
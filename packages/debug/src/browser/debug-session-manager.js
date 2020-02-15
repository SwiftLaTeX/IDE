"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_2 = require("@theia/editor/lib/browser");
var quick_open_task_1 = require("@theia/task/lib/browser/quick-open-task");
var task_service_1 = require("@theia/task/lib/browser/task-service");
var browser_3 = require("@theia/variable-resolver/lib/browser");
var inversify_1 = require("inversify");
var debug_service_1 = require("../common/debug-service");
var breakpoint_manager_1 = require("./breakpoint/breakpoint-manager");
var debug_configuration_manager_1 = require("./debug-configuration-manager");
var debug_session_1 = require("./debug-session");
var debug_session_contribution_1 = require("./debug-session-contribution");
var debug_session_options_1 = require("./debug-session-options");
var debug_source_breakpoint_1 = require("./model/debug-source-breakpoint");
var debug_function_breakpoint_1 = require("./model/debug-function-breakpoint");
var DebugSessionManager = /** @class */ (function () {
    function DebugSessionManager() {
        this._sessions = new Map();
        this.onWillStartDebugSessionEmitter = new core_1.Emitter();
        this.onWillStartDebugSession = this.onWillStartDebugSessionEmitter.event;
        this.onWillResolveDebugConfigurationEmitter = new core_1.Emitter();
        this.onWillResolveDebugConfiguration = this.onWillResolveDebugConfigurationEmitter.event;
        this.onDidCreateDebugSessionEmitter = new core_1.Emitter();
        this.onDidCreateDebugSession = this.onDidCreateDebugSessionEmitter.event;
        this.onDidStartDebugSessionEmitter = new core_1.Emitter();
        this.onDidStartDebugSession = this.onDidStartDebugSessionEmitter.event;
        this.onDidStopDebugSessionEmitter = new core_1.Emitter();
        this.onDidStopDebugSession = this.onDidStopDebugSessionEmitter.event;
        this.onDidChangeActiveDebugSessionEmitter = new core_1.Emitter();
        this.onDidChangeActiveDebugSession = this.onDidChangeActiveDebugSessionEmitter.event;
        this.onDidDestroyDebugSessionEmitter = new core_1.Emitter();
        this.onDidDestroyDebugSession = this.onDidDestroyDebugSessionEmitter.event;
        this.onDidReceiveDebugSessionCustomEventEmitter = new core_1.Emitter();
        this.onDidReceiveDebugSessionCustomEvent = this.onDidReceiveDebugSessionCustomEventEmitter.event;
        this.onDidChangeBreakpointsEmitter = new core_1.Emitter();
        this.onDidChangeBreakpoints = this.onDidChangeBreakpointsEmitter.event;
        this.onDidChangeEmitter = new core_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.configurationIds = new Map();
        this.toDisposeOnCurrentSession = new core_1.DisposableCollection();
    }
    DebugSessionManager.prototype.fireDidChangeBreakpoints = function (event) {
        this.onDidChangeBreakpointsEmitter.fire(event);
    };
    DebugSessionManager.prototype.fireDidChange = function (current) {
        this.inDebugModeKey.set(this.inDebugMode);
        this.onDidChangeEmitter.fire(current);
    };
    DebugSessionManager.prototype.init = function () {
        var _this = this;
        this.debugTypeKey = this.contextKeyService.createKey('debugType', undefined);
        this.inDebugModeKey = this.contextKeyService.createKey('inDebugMode', this.inDebugMode);
        this.breakpoints.onDidChangeMarkers(function (uri) { return _this.fireDidChangeBreakpoints({ uri: uri }); });
        this.labelProvider.onDidChange(function (event) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.breakpoints.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var uriString = _c.value;
                    var uri = new uri_1.default(uriString);
                    if (event.affects(uri)) {
                        _this.fireDidChangeBreakpoints({ uri: uri });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Object.defineProperty(DebugSessionManager.prototype, "inDebugMode", {
        get: function () {
            return this.state > debug_session_1.DebugState.Inactive;
        },
        enumerable: true,
        configurable: true
    });
    DebugSessionManager.prototype.start = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.progressService.withProgress('Start...', 'debug', function () { return __awaiter(_this, void 0, void 0, function () {
                        var resolved, taskRun, sessionId, e_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 6, , 7]);
                                    return [4 /*yield*/, this.fireWillStartDebugSession()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.resolveConfiguration(options)];
                                case 2:
                                    resolved = _a.sent();
                                    if (!!options.configuration.__restart) return [3 /*break*/, 4];
                                    return [4 /*yield*/, this.runTask(options.workspaceFolderUri, resolved.configuration.preLaunchTask, true)];
                                case 3:
                                    taskRun = _a.sent();
                                    if (!taskRun) {
                                        return [2 /*return*/, undefined];
                                    }
                                    _a.label = 4;
                                case 4: return [4 /*yield*/, this.debug.createDebugSession(resolved.configuration)];
                                case 5:
                                    sessionId = _a.sent();
                                    return [2 /*return*/, this.doStart(sessionId, resolved)];
                                case 6:
                                    e_2 = _a.sent();
                                    if (debug_service_1.DebugError.NotFound.is(e_2)) {
                                        this.messageService.error("The debug session type \"" + e_2.data.type + "\" is not supported.");
                                        return [2 /*return*/, undefined];
                                    }
                                    this.messageService.error('There was an error starting the debug session, check the logs for more details.');
                                    console.error('Error starting the debug session', e_2);
                                    throw e_2;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DebugSessionManager.prototype.fireWillStartDebugSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, core_1.WaitUntilEvent.fire(this.onWillStartDebugSessionEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionManager.prototype.resolveConfiguration = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceFolderUri, resolvedConfiguration, configuration, key, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (debug_session_options_1.InternalDebugSessionOptions.is(options)) {
                            return [2 /*return*/, options];
                        }
                        workspaceFolderUri = options.workspaceFolderUri;
                        return [4 /*yield*/, this.resolveDebugConfiguration(options.configuration, workspaceFolderUri)];
                    case 1:
                        resolvedConfiguration = _a.sent();
                        return [4 /*yield*/, this.variableResolver.resolve(resolvedConfiguration, {
                                context: options.workspaceFolderUri ? new uri_1.default(options.workspaceFolderUri) : undefined,
                                configurationSection: 'launch'
                            })];
                    case 2:
                        configuration = _a.sent();
                        key = configuration.name + workspaceFolderUri;
                        id = this.configurationIds.has(key) ? this.configurationIds.get(key) + 1 : 0;
                        this.configurationIds.set(key, id);
                        return [2 /*return*/, {
                                id: id,
                                configuration: configuration,
                                workspaceFolderUri: workspaceFolderUri
                            }];
                }
            });
        });
    };
    DebugSessionManager.prototype.resolveDebugConfiguration = function (configuration, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireWillResolveDebugConfiguration(configuration.type)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.debug.resolveDebugConfiguration(configuration, workspaceFolderUri)];
                }
            });
        });
    };
    DebugSessionManager.prototype.fireWillResolveDebugConfiguration = function (debugType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, core_1.WaitUntilEvent.fire(this.onWillResolveDebugConfigurationEmitter, { debugType: debugType })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionManager.prototype.doStart = function (sessionId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var contrib, sessionFactory, session, state;
            var _this = this;
            return __generator(this, function (_a) {
                contrib = this.sessionContributionRegistry.get(options.configuration.type);
                sessionFactory = contrib ? contrib.debugSessionFactory() : this.debugSessionFactory;
                session = sessionFactory.get(sessionId, options);
                this._sessions.set(sessionId, session);
                this.debugTypeKey.set(session.configuration.type);
                this.onDidCreateDebugSessionEmitter.fire(session);
                state = debug_session_1.DebugState.Inactive;
                session.onDidChange(function () {
                    if (state !== session.state) {
                        state = session.state;
                        if (state === debug_session_1.DebugState.Stopped) {
                            _this.onDidStopDebugSessionEmitter.fire(session);
                        }
                    }
                    _this.updateCurrentSession(session);
                });
                session.onDidChangeBreakpoints(function (uri) { return _this.fireDidChangeBreakpoints({ session: session, uri: uri }); });
                session.on('terminated', function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var restart;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                restart = event.body && event.body.restart;
                                if (!restart) return [3 /*break*/, 1];
                                // postDebugTask isn't run in case of auto restart as well as preLaunchTask
                                this.doRestart(session, restart);
                                return [3 /*break*/, 3];
                            case 1:
                                session.terminate();
                                return [4 /*yield*/, this.runTask(session.options.workspaceFolderUri, session.configuration.postDebugTask)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                session.on('exited', function () { return _this.destroy(session.id); });
                session.start().then(function () { return _this.onDidStartDebugSessionEmitter.fire(session); });
                session.onDidCustomEvent(function (_a) {
                    var event = _a.event, body = _a.body;
                    return _this.onDidReceiveDebugSessionCustomEventEmitter.fire({ event: event, body: body, session: session });
                });
                return [2 /*return*/, session];
            });
        });
    };
    DebugSessionManager.prototype.restart = function (session) {
        if (session === void 0) { session = this.currentSession; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, session && this.doRestart(session)];
            });
        });
    };
    DebugSessionManager.prototype.doRestart = function (session, restart) {
        return __awaiter(this, void 0, void 0, function () {
            var options, configuration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, session.restart()];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, session];
                        }
                        return [4 /*yield*/, session.terminate(true)];
                    case 2:
                        _a.sent();
                        options = session.options, configuration = session.configuration;
                        configuration.__restart = restart;
                        return [2 /*return*/, this.start(options)];
                }
            });
        });
    };
    DebugSessionManager.prototype.remove = function (sessionId) {
        this._sessions.delete(sessionId);
        var currentSession = this.currentSession;
        if (currentSession && currentSession.id === sessionId) {
            this.updateCurrentSession(undefined);
        }
    };
    DebugSessionManager.prototype.getSession = function (sessionId) {
        return this._sessions.get(sessionId);
    };
    Object.defineProperty(DebugSessionManager.prototype, "sessions", {
        get: function () {
            return Array.from(this._sessions.values()).filter(function (session) { return session.state > debug_session_1.DebugState.Inactive; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSessionManager.prototype, "currentSession", {
        get: function () {
            return this._currentSession;
        },
        set: function (current) {
            var _this = this;
            if (this._currentSession === current) {
                return;
            }
            this.toDisposeOnCurrentSession.dispose();
            var previous = this.currentSession;
            this._currentSession = current;
            this.onDidChangeActiveDebugSessionEmitter.fire({ previous: previous, current: current });
            if (current) {
                this.toDisposeOnCurrentSession.push(current.onDidChange(function () {
                    if (_this.currentFrame === _this.topFrame) {
                        _this.open();
                    }
                    _this.fireDidChange(current);
                }));
            }
            this.updateBreakpoints(previous, current);
            this.open();
            this.fireDidChange(current);
        },
        enumerable: true,
        configurable: true
    });
    DebugSessionManager.prototype.open = function () {
        var currentFrame = this.currentFrame;
        if (currentFrame) {
            currentFrame.open();
        }
    };
    DebugSessionManager.prototype.updateBreakpoints = function (previous, current) {
        var e_3, _a, e_4, _b;
        var affectedUri = new Set();
        try {
            for (var _c = __values([previous, current]), _d = _c.next(); !_d.done; _d = _c.next()) {
                var session = _d.value;
                if (session) {
                    try {
                        for (var _e = (e_4 = void 0, __values(session.breakpointUris)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var uriString = _f.value;
                            if (!affectedUri.has(uriString)) {
                                affectedUri.add(uriString);
                                this.fireDidChangeBreakpoints({
                                    session: current,
                                    uri: new uri_1.default(uriString)
                                });
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    DebugSessionManager.prototype.updateCurrentSession = function (session) {
        this.currentSession = session || this.sessions[0];
    };
    Object.defineProperty(DebugSessionManager.prototype, "currentThread", {
        get: function () {
            var session = this.currentSession;
            return session && session.currentThread;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSessionManager.prototype, "state", {
        get: function () {
            var session = this.currentSession;
            return session ? session.state : debug_session_1.DebugState.Inactive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSessionManager.prototype, "currentFrame", {
        get: function () {
            var currentThread = this.currentThread;
            return currentThread && currentThread.currentFrame;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSessionManager.prototype, "topFrame", {
        get: function () {
            var currentThread = this.currentThread;
            return currentThread && currentThread.topFrame;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the debug session. If session identifier isn't provided then
     * all active debug session will be destroyed.
     * @param sessionId The session identifier
     */
    DebugSessionManager.prototype.destroy = function (sessionId) {
        var _this = this;
        if (sessionId) {
            var session = this._sessions.get(sessionId);
            if (session) {
                this.doDestroy(session);
            }
        }
        else {
            this._sessions.forEach(function (session) { return _this.doDestroy(session); });
        }
    };
    DebugSessionManager.prototype.doDestroy = function (session) {
        this.debug.terminateDebugSession(session.id);
        session.dispose();
        this.remove(session.id);
        this.onDidDestroyDebugSessionEmitter.fire(session);
    };
    DebugSessionManager.prototype.getFunctionBreakpoints = function (session) {
        if (session === void 0) { session = this.currentSession; }
        if (session && session.state > debug_session_1.DebugState.Initializing) {
            return session.getFunctionBreakpoints();
        }
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return this.breakpoints.getFunctionBreakpoints().map(function (origin) { return new debug_function_breakpoint_1.DebugFunctionBreakpoint(origin, { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager }); });
    };
    DebugSessionManager.prototype.getBreakpoints = function (arg, arg2) {
        var uri = arg instanceof uri_1.default ? arg : undefined;
        var session = arg instanceof debug_session_1.DebugSession ? arg : arg2 instanceof debug_session_1.DebugSession ? arg2 : this.currentSession;
        if (session && session.state > debug_session_1.DebugState.Initializing) {
            return session.getSourceBreakpoints(uri);
        }
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return this.breakpoints.findMarkers({ uri: uri }).map(function (_a) {
            var data = _a.data;
            return new debug_source_breakpoint_1.DebugSourceBreakpoint(data, { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager });
        });
    };
    DebugSessionManager.prototype.getLineBreakpoints = function (uri, line) {
        var session = this.currentSession;
        if (session && session.state > debug_session_1.DebugState.Initializing) {
            return session.getSourceBreakpoints(uri).filter(function (breakpoint) { return breakpoint.line === line; });
        }
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return this.breakpoints.getLineBreakpoints(uri, line).map(function (origin) {
            return new debug_source_breakpoint_1.DebugSourceBreakpoint(origin, { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager });
        });
    };
    DebugSessionManager.prototype.getInlineBreakpoint = function (uri, line, column) {
        var session = this.currentSession;
        if (session && session.state > debug_session_1.DebugState.Initializing) {
            return session.getSourceBreakpoints(uri).filter(function (breakpoint) { return breakpoint.line === line && breakpoint.column === column; })[0];
        }
        var origin = this.breakpoints.getInlineBreakpoint(uri, line, column);
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return origin && new debug_source_breakpoint_1.DebugSourceBreakpoint(origin, { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager });
    };
    /**
     * Runs the given tasks.
     * @param taskName the task name to run, see [TaskNameResolver](#TaskNameResolver)
     * @return true if it allowed to continue debugging otherwise it returns false
     */
    DebugSessionManager.prototype.runTask = function (workspaceFolderUri, taskName, checkErrors) {
        return __awaiter(this, void 0, void 0, function () {
            var taskInfo, getExitCodePromise, isBackgroundTaskEndedPromise, taskEndedInfo, signal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!taskName) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.taskService.runWorkspaceTask(workspaceFolderUri, taskName)];
                    case 1:
                        taskInfo = _a.sent();
                        if (!checkErrors) {
                            return [2 /*return*/, true];
                        }
                        if (!taskInfo) {
                            return [2 /*return*/, this.doPostTaskAction("Could not run the task '" + taskName + "'.")];
                        }
                        getExitCodePromise = this.taskService.getExitCode(taskInfo.taskId).then(function (result) {
                            return ({ taskEndedType: task_service_1.TaskEndedTypes.TaskExited, value: result });
                        });
                        isBackgroundTaskEndedPromise = this.taskService.isBackgroundTaskEnded(taskInfo.taskId).then(function (result) {
                            return ({ taskEndedType: task_service_1.TaskEndedTypes.BackgroundTaskEnded, value: result });
                        });
                        return [4 /*yield*/, Promise.race([getExitCodePromise, isBackgroundTaskEndedPromise])];
                    case 2:
                        taskEndedInfo = _a.sent();
                        if (taskEndedInfo.taskEndedType === task_service_1.TaskEndedTypes.BackgroundTaskEnded && taskEndedInfo.value) {
                            return [2 /*return*/, true];
                        }
                        if (!(taskEndedInfo.taskEndedType === task_service_1.TaskEndedTypes.TaskExited && taskEndedInfo.value === 0)) return [3 /*break*/, 3];
                        return [2 /*return*/, true];
                    case 3:
                        if (!(taskEndedInfo.taskEndedType === task_service_1.TaskEndedTypes.TaskExited && taskEndedInfo.value !== undefined)) return [3 /*break*/, 4];
                        return [2 /*return*/, this.doPostTaskAction("Task '" + taskName + "' terminated with exit code " + taskEndedInfo.value + ".")];
                    case 4: return [4 /*yield*/, this.taskService.getTerminateSignal(taskInfo.taskId)];
                    case 5:
                        signal = _a.sent();
                        if (signal !== undefined) {
                            return [2 /*return*/, this.doPostTaskAction("Task '" + taskName + "' terminated by signal " + signal + ".")];
                        }
                        else {
                            return [2 /*return*/, this.doPostTaskAction("Task '" + taskName + "' terminated for unknown reason.")];
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionManager.prototype.doPostTaskAction = function (errorMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, result;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        actions = ['Open launch.json', 'Cancel', 'Configure Task', 'Debug Anyway'];
                        return [4 /*yield*/, (_a = this.messageService).error.apply(_a, __spread([errorMessage], actions))];
                    case 1:
                        result = _b.sent();
                        switch (result) {
                            case actions[0]: // open launch.json
                                this.debugConfigurationManager.openConfiguration();
                                return [2 /*return*/, false];
                            case actions[1]: // cancel
                                return [2 /*return*/, false];
                            case actions[2]: // configure tasks
                                this.quickOpenTask.configure();
                                return [2 /*return*/, false];
                            default: // continue debugging
                                return [2 /*return*/, true];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(debug_session_contribution_1.DebugSessionFactory),
        __metadata("design:type", Object)
    ], DebugSessionManager.prototype, "debugSessionFactory", void 0);
    __decorate([
        inversify_1.inject(debug_service_1.DebugService),
        __metadata("design:type", Object)
    ], DebugSessionManager.prototype, "debug", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], DebugSessionManager.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], DebugSessionManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugSessionManager.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(browser_3.VariableResolverService),
        __metadata("design:type", browser_3.VariableResolverService)
    ], DebugSessionManager.prototype, "variableResolver", void 0);
    __decorate([
        inversify_1.inject(debug_session_contribution_1.DebugSessionContributionRegistry),
        __metadata("design:type", Object)
    ], DebugSessionManager.prototype, "sessionContributionRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], DebugSessionManager.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(core_1.ProgressService),
        __metadata("design:type", core_1.ProgressService)
    ], DebugSessionManager.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], DebugSessionManager.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], DebugSessionManager.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], DebugSessionManager.prototype, "debugConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.QuickOpenTask),
        __metadata("design:type", quick_open_task_1.QuickOpenTask)
    ], DebugSessionManager.prototype, "quickOpenTask", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugSessionManager.prototype, "init", null);
    DebugSessionManager = __decorate([
        inversify_1.injectable()
    ], DebugSessionManager);
    return DebugSessionManager;
}());
exports.DebugSessionManager = DebugSessionManager;
//# sourceMappingURL=debug-session-manager.js.map
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
var React = require("react");
var common_1 = require("@theia/core/lib/common");
var debug_thread_1 = require("./model/debug-thread");
var debug_source_1 = require("./model/debug-source");
var debug_source_breakpoint_1 = require("./model/debug-source-breakpoint");
var debounce = require("p-debounce");
var uri_1 = require("@theia/core/lib/common/uri");
var breakpoint_manager_1 = require("./breakpoint/breakpoint-manager");
var debug_session_options_1 = require("./debug-session-options");
var breakpoint_marker_1 = require("./breakpoint/breakpoint-marker");
var debug_function_breakpoint_1 = require("./model/debug-function-breakpoint");
var DebugState;
(function (DebugState) {
    DebugState[DebugState["Inactive"] = 0] = "Inactive";
    DebugState[DebugState["Initializing"] = 1] = "Initializing";
    DebugState[DebugState["Running"] = 2] = "Running";
    DebugState[DebugState["Stopped"] = 3] = "Stopped";
})(DebugState = exports.DebugState || (exports.DebugState = {}));
// FIXME: make injectable to allow easily inject services
var DebugSession = /** @class */ (function () {
    function DebugSession(id, options, connection, terminalServer, editorManager, breakpoints, labelProvider, messages, fileSystem) {
        var _this = this;
        this.id = id;
        this.options = options;
        this.connection = connection;
        this.terminalServer = terminalServer;
        this.editorManager = editorManager;
        this.breakpoints = breakpoints;
        this.labelProvider = labelProvider;
        this.messages = messages;
        this.fileSystem = fileSystem;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onDidChangeBreakpointsEmitter = new common_1.Emitter();
        this.onDidChangeBreakpoints = this.onDidChangeBreakpointsEmitter.event;
        this.toDispose = new common_1.DisposableCollection();
        this._capabilities = {};
        this.sources = new Map();
        this._threads = new Map();
        this.toDisposeOnCurrentThread = new common_1.DisposableCollection();
        this.initialized = false;
        this.terminated = false;
        this.scheduleUpdateThreads = debounce(function () { return _this.updateThreads(undefined); }, 100);
        this.pendingThreads = Promise.resolve();
        this._breakpoints = new Map();
        this.updatingBreakpoints = false;
        this.connection.onRequest('runInTerminal', function (request) { return _this.runInTerminal(request); });
        this.toDispose.pushAll([
            this.onDidChangeEmitter,
            this.onDidChangeBreakpointsEmitter,
            common_1.Disposable.create(function () {
                _this.clearBreakpoints();
                _this.doUpdateThreads([]);
            }),
            this.connection,
            this.on('initialized', function () { return _this.configure(); }),
            this.on('breakpoint', function (_a) {
                var body = _a.body;
                return _this.updateBreakpoint(body);
            }),
            this.on('continued', function (_a) {
                var _b = _a.body, allThreadsContinued = _b.allThreadsContinued, threadId = _b.threadId;
                if (allThreadsContinued !== false) {
                    _this.clearThreads();
                }
                else {
                    _this.clearThread(threadId);
                }
            }),
            this.on('stopped', function (_a) {
                var body = _a.body;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.updateThreads(body)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, this.updateFrames()];
                            case 2:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }),
            this.on('thread', function (_a) {
                var _b = _a.body, reason = _b.reason, threadId = _b.threadId;
                if (reason === 'started') {
                    _this.scheduleUpdateThreads();
                }
                else if (reason === 'exited') {
                    _this.clearThread(threadId);
                }
            }),
            this.on('terminated', function () { return _this.terminated = true; }),
            this.on('capabilities', function (event) { return _this.updateCapabilities(event.body.capabilities); }),
            this.breakpoints.onDidChangeMarkers(function (uri) { return _this.updateBreakpoints({ uri: uri, sourceModified: true }); })
        ]);
    }
    DebugSession.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    DebugSession.prototype.fireDidChangeBreakpoints = function (uri) {
        this.onDidChangeBreakpointsEmitter.fire(uri);
    };
    DebugSession.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(DebugSession.prototype, "configuration", {
        get: function () {
            return this.options.configuration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "capabilities", {
        get: function () {
            return this._capabilities;
        },
        enumerable: true,
        configurable: true
    });
    DebugSession.prototype.getSource = function (raw) {
        var uri = debug_source_1.DebugSource.toUri(raw).toString();
        var source = this.sources.get(uri) || new debug_source_1.DebugSource(this, this.editorManager, this.labelProvider);
        source.update({ raw: raw });
        this.sources.set(uri, source);
        return source;
    };
    DebugSession.prototype.getSourceForUri = function (uri) {
        return this.sources.get(uri.toString());
    };
    DebugSession.prototype.toSource = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var source, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        source = this.getSourceForUri(uri);
                        if (source) {
                            return [2 /*return*/, source];
                        }
                        _a = this.getSource;
                        return [4 /*yield*/, this.toDebugSource(uri)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    DebugSession.prototype.toDebugSource = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var name, path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (uri.scheme === debug_source_1.DebugSource.SCHEME) {
                            return [2 /*return*/, {
                                    name: uri.path.toString(),
                                    sourceReference: Number(uri.query)
                                }];
                        }
                        name = uri.displayName;
                        path = uri.toString();
                        if (!(uri.scheme === 'file')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.getFsPath(path)];
                    case 1:
                        path = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, { name: name, path: path }];
                }
            });
        });
    };
    Object.defineProperty(DebugSession.prototype, "threads", {
        get: function () {
            return this._threads.values();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "threadCount", {
        get: function () {
            return this._threads.size;
        },
        enumerable: true,
        configurable: true
    });
    DebugSession.prototype.getThreads = function (filter) {
        var _a, _b, thread, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this.threads), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    thread = _b.value;
                    if (!filter(thread)) return [3 /*break*/, 3];
                    return [4 /*yield*/, thread];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(DebugSession.prototype, "runningThreads", {
        get: function () {
            return this.getThreads(function (thread) { return !thread.stopped; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "stoppedThreads", {
        get: function () {
            return this.getThreads(function (thread) { return thread.stopped; });
        },
        enumerable: true,
        configurable: true
    });
    DebugSession.prototype.pauseAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises, _loop_1, _a, _b, thread;
            var e_2, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        promises = [];
                        _loop_1 = function (thread) {
                            promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var e_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, thread.pause()];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_3 = _a.sent();
                                            console.error(e_3);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })());
                        };
                        try {
                            for (_a = __values(this.runningThreads), _b = _a.next(); !_b.done; _b = _a.next()) {
                                thread = _b.value;
                                _loop_1(thread);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.continueAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises, _loop_2, _a, _b, thread;
            var e_4, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        promises = [];
                        _loop_2 = function (thread) {
                            promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var e_5;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, thread.continue()];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_5 = _a.sent();
                                            console.error(e_5);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })());
                        };
                        try {
                            for (_a = __values(this.stoppedThreads), _b = _a.next(); !_b.done; _b = _a.next()) {
                                thread = _b.value;
                                _loop_2(thread);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugSession.prototype, "currentFrame", {
        get: function () {
            return this.currentThread && this.currentThread.currentFrame;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "currentThread", {
        get: function () {
            return this._currentThread;
        },
        set: function (thread) {
            var _this = this;
            this.toDisposeOnCurrentThread.dispose();
            this._currentThread = thread;
            this.fireDidChange();
            if (thread) {
                this.toDisposeOnCurrentThread.push(thread.onDidChanged(function () { return _this.fireDidChange(); }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "state", {
        get: function () {
            if (this.connection.disposed) {
                return DebugState.Inactive;
            }
            if (!this.initialized) {
                return DebugState.Initializing;
            }
            var thread = this.currentThread;
            if (thread) {
                return thread.stopped ? DebugState.Stopped : DebugState.Running;
            }
            return !!this.stoppedThreads.next().value ? DebugState.Stopped : DebugState.Running;
        },
        enumerable: true,
        configurable: true
    });
    DebugSession.prototype.getScopes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame;
            return __generator(this, function (_a) {
                currentFrame = this.currentFrame;
                return [2 /*return*/, currentFrame ? currentFrame.getScopes() : []];
            });
        });
    };
    DebugSession.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.launchOrAttach()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.sendRequest('initialize', {
                            clientID: 'Theia',
                            clientName: 'Theia IDE',
                            adapterID: this.configuration.type,
                            locale: 'en-US',
                            linesStartAt1: true,
                            columnsStartAt1: true,
                            pathFormat: 'path',
                            supportsVariableType: false,
                            supportsVariablePaging: false,
                            supportsRunInTerminalRequest: true
                        })];
                    case 1:
                        response = _a.sent();
                        this.updateCapabilities(response.body || {});
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.launchOrAttach = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reason_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        if (!(this.configuration.request === 'attach')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sendRequest('attach', this.configuration)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.sendRequest('launch', this.configuration)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        reason_1 = _a.sent();
                        this.fireExited(reason_1);
                        return [4 /*yield*/, this.messages.showMessage({
                                type: common_1.MessageType.Error,
                                text: reason_1.message || 'Debug session initialization failed. See console for details.',
                                options: {
                                    timeout: 10000
                                }
                            })];
                    case 6:
                        _a.sent();
                        throw reason_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.configure = function () {
        return __awaiter(this, void 0, void 0, function () {
            var exceptionBreakpoints, _a, _b, filter, origin_1;
            var e_6, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.capabilities.exceptionBreakpointFilters) {
                            exceptionBreakpoints = [];
                            try {
                                for (_a = __values(this.capabilities.exceptionBreakpointFilters), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    filter = _b.value;
                                    origin_1 = this.breakpoints.getExceptionBreakpoint(filter.filter);
                                    exceptionBreakpoints.push(breakpoint_marker_1.ExceptionBreakpoint.create(filter, origin_1));
                                }
                            }
                            catch (e_6_1) { e_6 = { error: e_6_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                }
                                finally { if (e_6) throw e_6.error; }
                            }
                            this.breakpoints.setExceptionBreakpoints(exceptionBreakpoints);
                        }
                        return [4 /*yield*/, this.updateBreakpoints({ sourceModified: false })];
                    case 1:
                        _d.sent();
                        if (!this.capabilities.supportsConfigurationDoneRequest) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sendRequest('configurationDone', {})];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        this.initialized = true;
                        return [4 /*yield*/, this.updateThreads(undefined)];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.terminate = function (restart) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.terminated && this.capabilities.supportsTerminateRequest && this.configuration.request === 'launch')) return [3 /*break*/, 5];
                        this.terminated = true;
                        return [4 /*yield*/, this.connection.sendRequest('terminate', { restart: restart })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.exited(1000)];
                    case 2:
                        if (!!(_a.sent())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.disconnect(restart)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.disconnect(restart)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.disconnect = function (restart) {
        return __awaiter(this, void 0, void 0, function () {
            var reason_2, timeout;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sendRequest('disconnect', { restart: restart })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        reason_2 = _a.sent();
                        this.fireExited(reason_2);
                        return [2 /*return*/];
                    case 3:
                        timeout = 500;
                        return [4 /*yield*/, this.exited(timeout)];
                    case 4:
                        if (!(_a.sent())) {
                            this.fireExited(new Error("timeout after " + timeout + " ms"));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.fireExited = function (reason) {
        this.connection['fire']('exited', { reason: reason });
    };
    DebugSession.prototype.exited = function (timeout) {
        var _this = this;
        return new Promise(function (resolve) {
            var listener = _this.on('exited', function () {
                listener.dispose();
                resolve(true);
            });
            setTimeout(function () {
                listener.dispose();
                resolve(false);
            }, timeout);
        });
    };
    DebugSession.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.capabilities.supportsRestartRequest) return [3 /*break*/, 2];
                        this.terminated = false;
                        return [4 /*yield*/, this.sendRequest('restart', {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    DebugSession.prototype.completions = function (text, column, line) {
        return __awaiter(this, void 0, void 0, function () {
            var frameId, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frameId = this.currentFrame && this.currentFrame.raw.id;
                        return [4 /*yield*/, this.sendRequest('completions', { frameId: frameId, text: text, column: column, line: line })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body.targets];
                }
            });
        });
    };
    DebugSession.prototype.evaluate = function (expression, context) {
        return __awaiter(this, void 0, void 0, function () {
            var frameId, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frameId = this.currentFrame && this.currentFrame.raw.id;
                        return [4 /*yield*/, this.sendRequest('evaluate', { expression: expression, frameId: frameId, context: context })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body];
                }
            });
        });
    };
    DebugSession.prototype.sendRequest = function (command, args) {
        return this.connection.sendRequest(command, args);
    };
    DebugSession.prototype.sendCustomRequest = function (command, args) {
        return this.connection.sendCustomRequest(command, args);
    };
    DebugSession.prototype.on = function (kind, listener) {
        return this.connection.on(kind, listener);
    };
    Object.defineProperty(DebugSession.prototype, "onDidCustomEvent", {
        get: function () {
            return this.connection.onDidCustomEvent;
        },
        enumerable: true,
        configurable: true
    });
    DebugSession.prototype.runInTerminal = function (_a) {
        var _b = _a.arguments, title = _b.title, cwd = _b.cwd, args = _b.args, env = _b.env;
        return __awaiter(this, void 0, void 0, function () {
            var terminal, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.doCreateTerminal({ title: title, cwd: cwd, env: env, useServerTitle: false })];
                    case 1:
                        terminal = _d.sent();
                        terminal.sendText(args.join(' ') + '\n');
                        _c = {};
                        return [4 /*yield*/, terminal.processId];
                    case 2: return [2 /*return*/, (_c.processId = _d.sent(), _c)];
                }
            });
        });
    };
    DebugSession.prototype.doCreateTerminal = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var terminal, _a, _b, t, _c, e_7_1;
            var e_7, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        terminal = undefined;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, 8, 9]);
                        _a = __values(this.terminalServer.all), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        t = _b.value;
                        _c = (t.title.label === options.title || t.title.caption === options.title);
                        if (!_c) return [3 /*break*/, 4];
                        return [4 /*yield*/, t.hasChildProcesses()];
                    case 3:
                        _c = (_e.sent()) === false;
                        _e.label = 4;
                    case 4:
                        if (_c) {
                            terminal = t;
                            return [3 /*break*/, 6];
                        }
                        _e.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_7_1 = _e.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        if (!!terminal) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.terminalServer.newTerminal(options)];
                    case 10:
                        terminal = _e.sent();
                        return [4 /*yield*/, terminal.start()];
                    case 11:
                        _e.sent();
                        _e.label = 12;
                    case 12:
                        this.terminalServer.open(terminal);
                        return [2 /*return*/, terminal];
                }
            });
        });
    };
    DebugSession.prototype.clearThreads = function () {
        var e_8, _a;
        try {
            for (var _b = __values(this.threads), _c = _b.next(); !_c.done; _c = _b.next()) {
                var thread = _c.value;
                thread.clear();
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.updateCurrentThread();
    };
    DebugSession.prototype.clearThread = function (threadId) {
        var thread = this._threads.get(threadId);
        if (thread) {
            thread.clear();
        }
        this.updateCurrentThread();
    };
    DebugSession.prototype.updateThreads = function (stoppedDetails) {
        var _this = this;
        return this.pendingThreads = this.pendingThreads.then(function () { return __awaiter(_this, void 0, void 0, function () {
            var response, threads, e_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sendRequest('threads', {})];
                    case 1:
                        response = _a.sent();
                        threads = response && response.body && response.body.threads || [];
                        this.doUpdateThreads(threads, stoppedDetails);
                        return [3 /*break*/, 3];
                    case 2:
                        e_9 = _a.sent();
                        console.error(e_9);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DebugSession.prototype.doUpdateThreads = function (threads, stoppedDetails) {
        var e_10, _a;
        var existing = this._threads;
        this._threads = new Map();
        try {
            for (var threads_1 = __values(threads), threads_1_1 = threads_1.next(); !threads_1_1.done; threads_1_1 = threads_1.next()) {
                var raw = threads_1_1.value;
                var id = raw.id;
                var thread = existing.get(id) || new debug_thread_1.DebugThread(this);
                this._threads.set(id, thread);
                var data = { raw: raw };
                if (stoppedDetails) {
                    if (stoppedDetails.threadId === id) {
                        data.stoppedDetails = stoppedDetails;
                    }
                    else if (stoppedDetails.allThreadsStopped) {
                        data.stoppedDetails = {
                            // When a debug adapter notifies us that all threads are stopped,
                            // we do not know why the others are stopped, so we should default
                            // to something generic.
                            reason: '',
                        };
                    }
                }
                thread.update(data);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (threads_1_1 && !threads_1_1.done && (_a = threads_1.return)) _a.call(threads_1);
            }
            finally { if (e_10) throw e_10.error; }
        }
        this.updateCurrentThread(stoppedDetails);
    };
    DebugSession.prototype.updateCurrentThread = function (stoppedDetails) {
        var currentThread = this.currentThread;
        var threadId = currentThread && currentThread.raw.id;
        if (stoppedDetails && !stoppedDetails.preserveFocusHint && !!stoppedDetails.threadId) {
            threadId = stoppedDetails.threadId;
        }
        this.currentThread = typeof threadId === 'number' && this._threads.get(threadId)
            || this._threads.values().next().value;
    };
    DebugSession.prototype.updateFrames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var thread;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thread = this._currentThread;
                        if (!thread || thread.frameCount) {
                            return [2 /*return*/];
                        }
                        if (!this.capabilities.supportsDelayedStackTraceLoading) return [3 /*break*/, 3];
                        return [4 /*yield*/, thread.fetchFrames(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, thread.fetchFrames(19)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, thread.fetchFrames()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.updateCapabilities = function (capabilities) {
        Object.assign(this._capabilities, capabilities);
    };
    Object.defineProperty(DebugSession.prototype, "breakpointUris", {
        get: function () {
            return this._breakpoints.keys();
        },
        enumerable: true,
        configurable: true
    });
    DebugSession.prototype.getSourceBreakpoints = function (uri) {
        var e_11, _a;
        var breakpoints = [];
        try {
            for (var _b = __values(this.getBreakpoints(uri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var breakpoint = _c.value;
                if (breakpoint instanceof debug_source_breakpoint_1.DebugSourceBreakpoint) {
                    breakpoints.push(breakpoint);
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return breakpoints;
    };
    DebugSession.prototype.getFunctionBreakpoints = function () {
        var e_12, _a;
        var breakpoints = [];
        try {
            for (var _b = __values(this.getBreakpoints(breakpoint_manager_1.BreakpointManager.FUNCTION_URI)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var breakpoint = _c.value;
                if (breakpoint instanceof debug_function_breakpoint_1.DebugFunctionBreakpoint) {
                    breakpoints.push(breakpoint);
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return breakpoints;
    };
    DebugSession.prototype.getBreakpoints = function (uri) {
        var e_13, _a;
        if (uri) {
            return this._breakpoints.get(uri.toString()) || [];
        }
        var result = [];
        try {
            for (var _b = __values(this._breakpoints.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var breakpoints = _c.value;
                result.push.apply(result, __spread(breakpoints));
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return result;
    };
    DebugSession.prototype.clearBreakpoints = function () {
        var e_14, _a;
        var uris = __spread(this._breakpoints.keys());
        this._breakpoints.clear();
        try {
            for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                var uri = uris_1_1.value;
                this.fireDidChangeBreakpoints(new uri_1.default(uri));
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
            }
            finally { if (e_14) throw e_14.error; }
        }
    };
    DebugSession.prototype.updateBreakpoint = function (body) {
        this.updatingBreakpoints = true;
        try {
            var raw_1 = body.breakpoint;
            if (body.reason === 'new') {
                if (raw_1.source && typeof raw_1.line === 'number') {
                    var uri = debug_source_1.DebugSource.toUri(raw_1.source);
                    var origin_2 = breakpoint_marker_1.SourceBreakpoint.create(uri, { line: raw_1.line, column: raw_1.column });
                    if (this.breakpoints.addBreakpoint(origin_2)) {
                        var breakpoints = this.getSourceBreakpoints(uri);
                        var breakpoint = new debug_source_breakpoint_1.DebugSourceBreakpoint(origin_2, this.asDebugBreakpointOptions());
                        breakpoint.update({ raw: raw_1 });
                        breakpoints.push(breakpoint);
                        this.setSourceBreakpoints(uri, breakpoints);
                    }
                }
            }
            if (body.reason === 'removed' && raw_1.id) {
                var toRemove = this.findBreakpoint(function (b) { return b.idFromAdapter === raw_1.id; });
                if (toRemove) {
                    toRemove.remove();
                    var breakpoints = this.getBreakpoints(toRemove.uri);
                    var index = breakpoints.indexOf(toRemove);
                    if (index !== -1) {
                        breakpoints.splice(index, 1);
                        this.setBreakpoints(toRemove.uri, breakpoints);
                    }
                }
            }
            if (body.reason === 'changed' && raw_1.id) {
                var toUpdate = this.findBreakpoint(function (b) { return b.idFromAdapter === raw_1.id; });
                if (toUpdate) {
                    toUpdate.update({ raw: raw_1 });
                    if (toUpdate instanceof debug_source_breakpoint_1.DebugSourceBreakpoint) {
                        var sourceBreakpoints = this.getSourceBreakpoints(toUpdate.uri);
                        // in order to dedup again if a debugger converted line breakpoint to inline breakpoint
                        // i.e. assigned a column to a line breakpoint
                        this.setSourceBreakpoints(toUpdate.uri, sourceBreakpoints);
                    }
                    else {
                        this.fireDidChangeBreakpoints(toUpdate.uri);
                    }
                }
            }
        }
        finally {
            this.updatingBreakpoints = false;
        }
    };
    DebugSession.prototype.findBreakpoint = function (match) {
        var e_15, _a, e_16, _b;
        try {
            for (var _c = __values(this._breakpoints), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), breakpoints = _e[1];
                try {
                    for (var breakpoints_1 = (e_16 = void 0, __values(breakpoints)), breakpoints_1_1 = breakpoints_1.next(); !breakpoints_1_1.done; breakpoints_1_1 = breakpoints_1.next()) {
                        var breakpoint = breakpoints_1_1.value;
                        if (match(breakpoint)) {
                            return breakpoint;
                        }
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (breakpoints_1_1 && !breakpoints_1_1.done && (_b = breakpoints_1.return)) _b.call(breakpoints_1);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return undefined;
    };
    DebugSession.prototype.updateBreakpoints = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, sourceModified, _a, _b, affectedUri, e_17_1;
            var e_17, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.updatingBreakpoints) {
                            return [2 /*return*/];
                        }
                        uri = options.uri, sourceModified = options.sourceModified;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 10, 11, 12]);
                        _a = __values(this.getAffectedUris(uri)), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 9];
                        affectedUri = _b.value;
                        if (!(affectedUri.toString() === breakpoint_manager_1.BreakpointManager.EXCEPTION_URI.toString())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.sendExceptionBreakpoints()];
                    case 3:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!(affectedUri.toString() === breakpoint_manager_1.BreakpointManager.FUNCTION_URI.toString())) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.sendFunctionBreakpoints(affectedUri)];
                    case 5:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.sendSourceBreakpoints(affectedUri, sourceModified)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_17_1 = _d.sent();
                        e_17 = { error: e_17_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_17) throw e_17.error; }
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.sendExceptionBreakpoints = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filters, _a, _b, breakpoint;
            var e_18, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        filters = [];
                        try {
                            for (_a = __values(this.breakpoints.getExceptionBreakpoints()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                breakpoint = _b.value;
                                if (breakpoint.enabled) {
                                    filters.push(breakpoint.raw.filter);
                                }
                            }
                        }
                        catch (e_18_1) { e_18 = { error: e_18_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_18) throw e_18.error; }
                        }
                        return [4 /*yield*/, this.sendRequest('setExceptionBreakpoints', { filters: filters })];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.sendFunctionBreakpoints = function (affectedUri) {
        return __awaiter(this, void 0, void 0, function () {
            var all, enabled, response, error_1, genericMessage, message_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        all = this.breakpoints.getFunctionBreakpoints().map(function (origin) {
                            return new debug_function_breakpoint_1.DebugFunctionBreakpoint(origin, _this.asDebugBreakpointOptions());
                        });
                        enabled = all.filter(function (b) { return b.enabled; });
                        if (!this.capabilities.supportsFunctionBreakpoints) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.sendRequest('setFunctionBreakpoints', {
                                breakpoints: enabled.map(function (b) { return b.origin.raw; })
                            })];
                    case 2:
                        response = _a.sent();
                        response.body.breakpoints.map(function (raw, index) {
                            // node debug adapter returns more breakpoints sometimes
                            if (enabled[index]) {
                                enabled[index].update({ raw: raw });
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        // could be error or promise rejection of DebugProtocol.SetFunctionBreakpoints
                        if (error_1 instanceof Error) {
                            console.error("Error setting breakpoints: " + error_1.message);
                        }
                        else {
                            genericMessage = 'Function breakpoint not valid for current debug session';
                            message_1 = error_1.message ? "" + error_1.message : genericMessage;
                            console.warn("Could not handle function breakpoints: " + message_1 + ", disabling...");
                            enabled.forEach(function (b) { return b.update({
                                raw: {
                                    verified: false,
                                    message: message_1
                                }
                            }); });
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        this.setBreakpoints(affectedUri, all);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.sendSourceBreakpoints = function (affectedUri, sourceModified) {
        return __awaiter(this, void 0, void 0, function () {
            var source, all, enabled, response, error_2, genericMessage, message_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toSource(affectedUri)];
                    case 1:
                        source = _a.sent();
                        all = this.breakpoints.findMarkers({ uri: affectedUri }).map(function (_a) {
                            var data = _a.data;
                            return new debug_source_breakpoint_1.DebugSourceBreakpoint(data, _this.asDebugBreakpointOptions());
                        });
                        enabled = all.filter(function (b) { return b.enabled; });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.sendRequest('setBreakpoints', {
                                source: source.raw,
                                sourceModified: sourceModified,
                                breakpoints: enabled.map(function (_a) {
                                    var origin = _a.origin;
                                    return origin.raw;
                                })
                            })];
                    case 3:
                        response = _a.sent();
                        response.body.breakpoints.map(function (raw, index) {
                            // node debug adapter returns more breakpoints sometimes
                            if (enabled[index]) {
                                enabled[index].update({ raw: raw });
                            }
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        // could be error or promise rejection of DebugProtocol.SetBreakpointsResponse
                        if (error_2 instanceof Error) {
                            console.error("Error setting breakpoints: " + error_2.message);
                        }
                        else {
                            genericMessage = 'Breakpoint not valid for current debug session';
                            message_2 = error_2.message ? "" + error_2.message : genericMessage;
                            console.warn("Could not handle breakpoints for " + affectedUri + ": " + message_2 + ", disabling...");
                            enabled.forEach(function (b) { return b.update({
                                raw: {
                                    verified: false,
                                    message: message_2
                                }
                            }); });
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        this.setSourceBreakpoints(affectedUri, all);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.setBreakpoints = function (uri, breakpoints) {
        this._breakpoints.set(uri.toString(), breakpoints);
        this.fireDidChangeBreakpoints(uri);
    };
    DebugSession.prototype.setSourceBreakpoints = function (uri, breakpoints) {
        var distinct = this.dedupSourceBreakpoints(breakpoints);
        this.setBreakpoints(uri, distinct);
    };
    DebugSession.prototype.dedupSourceBreakpoints = function (all) {
        var e_19, _a, _b, _c;
        var positions = new Map();
        try {
            for (var all_1 = __values(all), all_1_1 = all_1.next(); !all_1_1.done; all_1_1 = all_1.next()) {
                var breakpoint = all_1_1.value;
                var primary = positions.get(breakpoint.renderPosition()) || breakpoint;
                if (primary !== breakpoint) {
                    var secondary = breakpoint;
                    if (secondary.raw && secondary.raw.line === secondary.origin.raw.line && secondary.raw.column === secondary.origin.raw.column) {
                        _b = __read([breakpoint, primary], 2), primary = _b[0], secondary = _b[1];
                    }
                    (_c = primary.origins).push.apply(_c, __spread(secondary.origins));
                }
                positions.set(primary.renderPosition(), primary);
            }
        }
        catch (e_19_1) { e_19 = { error: e_19_1 }; }
        finally {
            try {
                if (all_1_1 && !all_1_1.done && (_a = all_1.return)) _a.call(all_1);
            }
            finally { if (e_19) throw e_19.error; }
        }
        return __spread(positions.values());
    };
    DebugSession.prototype.getAffectedUris = function (uri) {
        var _a, _b, uriString, e_20_1;
        var e_20, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!uri) return [3 /*break*/, 2];
                    return [4 /*yield*/, uri];
                case 1:
                    _d.sent();
                    return [3 /*break*/, 12];
                case 2:
                    _d.trys.push([2, 7, 8, 9]);
                    _a = __values(this.breakpoints.getUris()), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 6];
                    uriString = _b.value;
                    return [4 /*yield*/, new uri_1.default(uriString)];
                case 4:
                    _d.sent();
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_20_1 = _d.sent();
                    e_20 = { error: e_20_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_20) throw e_20.error; }
                    return [7 /*endfinally*/];
                case 9: return [4 /*yield*/, breakpoint_manager_1.BreakpointManager.FUNCTION_URI];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, breakpoint_manager_1.BreakpointManager.EXCEPTION_URI];
                case 11:
                    _d.sent();
                    _d.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    };
    DebugSession.prototype.asDebugBreakpointOptions = function () {
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager, session: this };
    };
    Object.defineProperty(DebugSession.prototype, "label", {
        get: function () {
            if (debug_session_options_1.InternalDebugSessionOptions.is(this.options) && this.options.id) {
                return this.configuration.name + ' (' + (this.options.id + 1) + ')';
            }
            return this.configuration.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "visible", {
        get: function () {
            return this.state > DebugState.Inactive;
        },
        enumerable: true,
        configurable: true
    });
    DebugSession.prototype.render = function () {
        return React.createElement("div", { className: 'theia-debug-session', title: 'Session' },
            React.createElement("span", { className: 'label' }, this.label),
            React.createElement("span", { className: 'status' }, this.state === DebugState.Stopped ? 'Paused' : 'Running'));
    };
    DebugSession.prototype.getElements = function () {
        return this.threads;
    };
    return DebugSession;
}());
exports.DebugSession = DebugSession;
//# sourceMappingURL=debug-session.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var core_1 = require("@theia/core");
var standardDebugEvents = new Set([
    'breakpoint',
    'capabilities',
    'continued',
    'exited',
    'initialized',
    'loadedSource',
    'module',
    'output',
    'process',
    'stopped',
    'terminated',
    'thread'
]);
var DebugSessionConnection = /** @class */ (function () {
    function DebugSessionConnection(sessionId, connectionFactory, traceOutputChannel) {
        var _this = this;
        this.sessionId = sessionId;
        this.connectionFactory = connectionFactory;
        this.traceOutputChannel = traceOutputChannel;
        this.sequence = 1;
        this.pendingRequests = new Map();
        this.requestHandlers = new Map();
        this.onDidCustomEventEmitter = new core_1.Emitter();
        this.onDidCustomEvent = this.onDidCustomEventEmitter.event;
        this.toDispose = new core_1.DisposableCollection(this.onDidCustomEventEmitter, core_1.Disposable.create(function () { return _this.pendingRequests.clear(); }), core_1.Disposable.create(function () { return _this.emitters.clear(); }));
        this.allThreadsContinued = true;
        this.emitters = new Map();
        this.connection = this.createConnection();
    }
    Object.defineProperty(DebugSessionConnection.prototype, "disposed", {
        get: function () {
            return this.toDispose.disposed;
        },
        enumerable: true,
        configurable: true
    });
    DebugSessionConnection.prototype.checkDisposed = function () {
        if (this.disposed) {
            throw new Error('the debug session connection is disposed, id: ' + this.sessionId);
        }
    };
    DebugSessionConnection.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DebugSessionConnection.prototype.createConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.disposed) return [3 /*break*/, 1];
                        throw new Error('Connection has been already disposed.');
                    case 1: return [4 /*yield*/, this.connectionFactory(this.sessionId)];
                    case 2:
                        connection_1 = _a.sent();
                        connection_1.onClose(function (code, reason) {
                            connection_1.dispose();
                            _this.fire('exited', { code: code, reason: reason });
                        });
                        connection_1.onMessage(function (data) { return _this.handleMessage(data); });
                        return [2 /*return*/, connection_1];
                }
            });
        });
    };
    DebugSessionConnection.prototype.sendRequest = function (command, args) {
        return __awaiter(this, void 0, void 0, function () {
            var result, response, allThreadsContinued;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doSendRequest(command, args)];
                    case 1:
                        result = _a.sent();
                        if (command === 'next' || command === 'stepIn' ||
                            command === 'stepOut' || command === 'stepBack' ||
                            command === 'reverseContinue' || command === 'restartFrame') {
                            this.fireContinuedEvent(args.threadId);
                        }
                        if (command === 'continue') {
                            response = result;
                            allThreadsContinued = response && response.body && response.body.allThreadsContinued;
                            if (allThreadsContinued !== undefined) {
                                this.allThreadsContinued = result.body.allThreadsContinued;
                            }
                            this.fireContinuedEvent(args.threadId, this.allThreadsContinued);
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    DebugSessionConnection.prototype.sendCustomRequest = function (command, args) {
        return this.doSendRequest(command, args);
    };
    DebugSessionConnection.prototype.doSendRequest = function (command, args) {
        return __awaiter(this, void 0, void 0, function () {
            var result, request, onDispose;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = new promise_util_1.Deferred();
                        request = {
                            seq: this.sequence++,
                            type: 'request',
                            command: command,
                            arguments: args
                        };
                        onDispose = this.toDispose.push(core_1.Disposable.create(function () {
                            var pendingRequest = _this.pendingRequests.get(request.seq);
                            if (pendingRequest) {
                                pendingRequest({
                                    type: 'response',
                                    request_seq: request.seq,
                                    command: request.command,
                                    seq: 0,
                                    success: false,
                                    message: 'debug session is closed'
                                });
                            }
                        }));
                        this.pendingRequests.set(request.seq, function (response) {
                            onDispose.dispose();
                            if (!response.success) {
                                result.reject(response);
                            }
                            else {
                                result.resolve(response);
                            }
                        });
                        return [4 /*yield*/, this.send(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result.promise];
                }
            });
        });
    };
    DebugSessionConnection.prototype.send = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, messageStr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection];
                    case 1:
                        connection = _a.sent();
                        messageStr = JSON.stringify(message);
                        if (this.traceOutputChannel) {
                            this.traceOutputChannel.appendLine(this.sessionId.substring(0, 8) + " theia -> adapter: " + messageStr);
                        }
                        connection.send(messageStr);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionConnection.prototype.handleMessage = function (data) {
        if (this.traceOutputChannel) {
            this.traceOutputChannel.appendLine(this.sessionId.substring(0, 8) + " theia <- adapter: " + data);
        }
        var message = JSON.parse(data);
        if (message.type === 'request') {
            this.handleRequest(message);
        }
        else if (message.type === 'response') {
            this.handleResponse(message);
        }
        else if (message.type === 'event') {
            this.handleEvent(message);
        }
    };
    DebugSessionConnection.prototype.handleResponse = function (response) {
        var callback = this.pendingRequests.get(response.request_seq);
        if (callback) {
            this.pendingRequests.delete(response.request_seq);
            callback(response);
        }
    };
    DebugSessionConnection.prototype.onRequest = function (command, handler) {
        this.requestHandlers.set(command, handler);
    };
    DebugSessionConnection.prototype.handleRequest = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var response, handler;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = {
                            type: 'response',
                            seq: 0,
                            command: request.command,
                            request_seq: request.seq,
                            success: true,
                        };
                        handler = this.requestHandlers.get(request.command);
                        if (handler) {
                            try {
                                response.body = handler(request);
                            }
                            catch (error) {
                                response.success = false;
                                response.message = error.message;
                            }
                        }
                        else {
                            console.error('Unhandled request', request);
                        }
                        return [4 /*yield*/, this.send(response)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionConnection.prototype.handleEvent = function (event) {
        if ('event' in event) {
            if (event.event === 'continued') {
                this.allThreadsContinued = event.body.allThreadsContinued === false ? false : true;
            }
            if (standardDebugEvents.has(event.event)) {
                this.doFire(event.event, event);
            }
            else {
                this.onDidCustomEventEmitter.fire(event);
            }
        }
        else {
            this.fire('exited', event);
        }
    };
    DebugSessionConnection.prototype.on = function (kind, listener) {
        return this.getEmitter(kind).event(listener);
    };
    DebugSessionConnection.prototype.fire = function (kind, e) {
        this.doFire(kind, e);
    };
    DebugSessionConnection.prototype.doFire = function (kind, e) {
        this.getEmitter(kind).fire(e);
    };
    DebugSessionConnection.prototype.getEmitter = function (kind) {
        var emitter = this.emitters.get(kind) || this.newEmitter();
        this.emitters.set(kind, emitter);
        return emitter;
    };
    DebugSessionConnection.prototype.newEmitter = function () {
        var emitter = new core_1.Emitter();
        this.checkDisposed();
        this.toDispose.push(emitter);
        return emitter;
    };
    DebugSessionConnection.prototype.fireContinuedEvent = function (threadId, allThreadsContinued) {
        if (allThreadsContinued === void 0) { allThreadsContinued = false; }
        this.fire('continued', {
            type: 'event',
            event: 'continued',
            body: {
                threadId: threadId,
                allThreadsContinued: allThreadsContinued
            },
            seq: -1
        });
    };
    return DebugSessionConnection;
}());
exports.DebugSessionConnection = DebugSessionConnection;
//# sourceMappingURL=debug-session-connection.js.map
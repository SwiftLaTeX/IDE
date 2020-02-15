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
Object.defineProperty(exports, "__esModule", { value: true });
var p_debounce_1 = require("p-debounce");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var debug_session_1 = require("../debug-session");
var debug_session_manager_1 = require("../debug-session-manager");
var debug_watch_expression_1 = require("./debug-watch-expression");
var debug_watch_manager_1 = require("../debug-watch-manager");
exports.DebugViewOptions = Symbol('DebugViewOptions');
var DebugViewModel = /** @class */ (function () {
    function DebugViewModel() {
        var _this = this;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onDidChangeBreakpointsEmitter = new common_1.Emitter();
        this.onDidChangeBreakpoints = this.onDidChangeBreakpointsEmitter.event;
        this._watchExpressions = new Map();
        this.onDidChangeWatchExpressionsEmitter = new common_1.Emitter();
        this.onDidChangeWatchExpressions = this.onDidChangeWatchExpressionsEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onDidChangeEmitter, this.onDidChangeBreakpointsEmitter, this.onDidChangeWatchExpressionsEmitter);
        this._sessions = new Set();
        this.refreshWatchExpressionsQueue = Promise.resolve();
        this.refreshWatchExpressions = p_debounce_1.default(function () {
            _this.refreshWatchExpressionsQueue = _this.refreshWatchExpressionsQueue.then(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, watchExpression, e_1_1, e_2;
                var e_1, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 9, , 10]);
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 6, 7, 8]);
                            _a = __values(this.watchExpressions), _b = _a.next();
                            _d.label = 2;
                        case 2:
                            if (!!_b.done) return [3 /*break*/, 5];
                            watchExpression = _b.value;
                            return [4 /*yield*/, watchExpression.evaluate()];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4:
                            _b = _a.next();
                            return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 8];
                        case 6:
                            e_1_1 = _d.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 8];
                        case 7:
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            e_2 = _d.sent();
                            console.error('Failed to refresh watch expressions: ', e_2);
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
        }, 50);
    }
    DebugViewModel.prototype.fireDidChange = function () {
        this.refreshWatchExpressions();
        this.onDidChangeEmitter.fire(undefined);
    };
    DebugViewModel.prototype.fireDidChangeBreakpoints = function (uri) {
        this.onDidChangeBreakpointsEmitter.fire(uri);
    };
    DebugViewModel.prototype.fireDidChangeWatchExpressions = function () {
        this.onDidChangeWatchExpressionsEmitter.fire(undefined);
    };
    Object.defineProperty(DebugViewModel.prototype, "sessions", {
        get: function () {
            return this._sessions.values();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "sessionCount", {
        get: function () {
            return this._sessions.size;
        },
        enumerable: true,
        configurable: true
    });
    DebugViewModel.prototype.push = function (session) {
        if (this._sessions.has(session)) {
            return;
        }
        this._sessions.add(session);
        this.fireDidChange();
    };
    DebugViewModel.prototype.delete = function (session) {
        if (this._sessions.delete(session)) {
            this.fireDidChange();
            return true;
        }
        return false;
    };
    Object.defineProperty(DebugViewModel.prototype, "session", {
        get: function () {
            return this.sessions.next().value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "id", {
        get: function () {
            return this.session && this.session.id || '-1';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "label", {
        get: function () {
            return this.session && this.session.label || 'Unknown Session';
        },
        enumerable: true,
        configurable: true
    });
    DebugViewModel.prototype.has = function (session) {
        return !!session && this._sessions.has(session);
    };
    DebugViewModel.prototype.init = function () {
        var _this = this;
        if (this.options.session) {
            this.push(this.options.session);
        }
        this.toDispose.push(this.manager.onDidChangeActiveDebugSession(function (_a) {
            var previous = _a.previous, current = _a.current;
            if (_this.has(previous) && !_this.has(current)) {
                _this.fireDidChange();
            }
        }));
        this.toDispose.push(this.manager.onDidChange(function (current) {
            if (_this.has(current)) {
                _this.fireDidChange();
            }
        }));
        this.toDispose.push(this.manager.onDidChangeBreakpoints(function (_a) {
            var session = _a.session, uri = _a.uri;
            if (!session || session === _this.currentSession) {
                _this.fireDidChangeBreakpoints(uri);
            }
        }));
        this.updateWatchExpressions();
        this.toDispose.push(this.watch.onDidChange(function () { return _this.updateWatchExpressions(); }));
    };
    DebugViewModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(DebugViewModel.prototype, "currentSession", {
        get: function () {
            var currentSession = this.manager.currentSession;
            return this.has(currentSession) && currentSession || this.session;
        },
        set: function (currentSession) {
            this.manager.currentSession = currentSession;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "state", {
        get: function () {
            var currentSession = this.currentSession;
            return currentSession && currentSession.state || debug_session_1.DebugState.Inactive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "currentThread", {
        get: function () {
            var currentSession = this.currentSession;
            return currentSession && currentSession.currentThread;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "currentFrame", {
        get: function () {
            var currentThread = this.currentThread;
            return currentThread && currentThread.currentFrame;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "breakpoints", {
        get: function () {
            return this.manager.getBreakpoints(this.currentSession);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "functionBreakpoints", {
        get: function () {
            return this.manager.getFunctionBreakpoints(this.currentSession);
        },
        enumerable: true,
        configurable: true
    });
    DebugViewModel.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, newSession;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.session;
                        if (!session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.manager.start(session.options)];
                    case 1:
                        newSession = _a.sent();
                        if (newSession) {
                            this._sessions.delete(session);
                            this._sessions.add(newSession);
                            this.fireDidChange();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugViewModel.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, newSession;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.session;
                        if (!session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.manager.restart(session)];
                    case 1:
                        newSession = _a.sent();
                        if (newSession !== session) {
                            this._sessions.delete(session);
                            this._sessions.add(newSession);
                        }
                        this.fireDidChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugViewModel.prototype, "watchExpressions", {
        get: function () {
            return this._watchExpressions.values();
        },
        enumerable: true,
        configurable: true
    });
    DebugViewModel.prototype.addWatchExpression = function (expression) {
        if (expression === void 0) { expression = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var watchExpression, id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        watchExpression = new debug_watch_expression_1.DebugWatchExpression({
                            id: Number.MAX_SAFE_INTEGER,
                            expression: expression,
                            session: function () { return _this.currentSession; },
                            onDidChange: function () { }
                        });
                        return [4 /*yield*/, watchExpression.open()];
                    case 1:
                        _a.sent();
                        if (!watchExpression.expression) {
                            return [2 /*return*/, undefined];
                        }
                        id = this.watch.addWatchExpression(watchExpression.expression);
                        return [2 /*return*/, this._watchExpressions.get(id)];
                }
            });
        });
    };
    DebugViewModel.prototype.removeWatchExpressions = function () {
        this.watch.removeWatchExpressions();
    };
    DebugViewModel.prototype.removeWatchExpression = function (expression) {
        this.watch.removeWatchExpression(expression.id);
    };
    DebugViewModel.prototype.updateWatchExpressions = function () {
        var e_3, _a, e_4, _b;
        var _this = this;
        var added = false;
        var toRemove = new Set(this._watchExpressions.keys());
        try {
            for (var _c = __values(this.watch.watchExpressions), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), id = _e[0], expression = _e[1];
                toRemove.delete(id);
                if (!this._watchExpressions.has(id)) {
                    added = true;
                    var watchExpression = new debug_watch_expression_1.DebugWatchExpression({
                        id: id,
                        expression: expression,
                        session: function () { return _this.currentSession; },
                        onDidChange: function () { return _this.fireDidChangeWatchExpressions(); }
                    });
                    this._watchExpressions.set(id, watchExpression);
                    watchExpression.evaluate();
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
        try {
            for (var toRemove_1 = __values(toRemove), toRemove_1_1 = toRemove_1.next(); !toRemove_1_1.done; toRemove_1_1 = toRemove_1.next()) {
                var id = toRemove_1_1.value;
                this._watchExpressions.delete(id);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (toRemove_1_1 && !toRemove_1_1.done && (_b = toRemove_1.return)) _b.call(toRemove_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (added || toRemove.size) {
            this.fireDidChangeWatchExpressions();
        }
    };
    __decorate([
        inversify_1.inject(exports.DebugViewOptions),
        __metadata("design:type", Object)
    ], DebugViewModel.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugViewModel.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(debug_watch_manager_1.DebugWatchManager),
        __metadata("design:type", debug_watch_manager_1.DebugWatchManager)
    ], DebugViewModel.prototype, "watch", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugViewModel.prototype, "init", null);
    DebugViewModel = __decorate([
        inversify_1.injectable()
    ], DebugViewModel);
    return DebugViewModel;
}());
exports.DebugViewModel = DebugViewModel;
//# sourceMappingURL=debug-view-model.js.map
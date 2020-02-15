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
var React = require("react");
var core_1 = require("@theia/core");
var debug_stack_frame_1 = require("./debug-stack-frame");
var DebugThreadData = /** @class */ (function () {
    function DebugThreadData() {
    }
    return DebugThreadData;
}());
exports.DebugThreadData = DebugThreadData;
var DebugThread = /** @class */ (function (_super) {
    __extends(DebugThread, _super);
    function DebugThread(session) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.onDidChangedEmitter = new core_1.Emitter();
        _this.onDidChanged = _this.onDidChangedEmitter.event;
        _this._frames = new Map();
        _this.pendingFetch = Promise.resolve([]);
        return _this;
    }
    Object.defineProperty(DebugThread.prototype, "id", {
        get: function () {
            return this.session.id + ':' + this.raw.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugThread.prototype, "currentFrame", {
        get: function () {
            return this._currentFrame;
        },
        set: function (frame) {
            this._currentFrame = frame;
            this.onDidChangedEmitter.fire(undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugThread.prototype, "stopped", {
        get: function () {
            return !!this.stoppedDetails;
        },
        enumerable: true,
        configurable: true
    });
    DebugThread.prototype.update = function (data) {
        Object.assign(this, data);
        if ('stoppedDetails' in data) {
            this.clearFrames();
        }
    };
    DebugThread.prototype.clear = function () {
        this.update({
            raw: this.raw,
            stoppedDetails: undefined
        });
    };
    DebugThread.prototype.continue = function () {
        return this.session.sendRequest('continue', this.toArgs());
    };
    DebugThread.prototype.stepOver = function () {
        return this.session.sendRequest('next', this.toArgs());
    };
    DebugThread.prototype.stepIn = function () {
        return this.session.sendRequest('stepIn', this.toArgs());
    };
    DebugThread.prototype.stepOut = function () {
        return this.session.sendRequest('stepOut', this.toArgs());
    };
    DebugThread.prototype.pause = function () {
        return this.session.sendRequest('pause', this.toArgs());
    };
    DebugThread.prototype.getExceptionInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.stoppedDetails && this.stoppedDetails.reason === 'exception')) return [3 /*break*/, 3];
                        if (!this.session.capabilities.supportsExceptionInfoRequest) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.session.sendRequest('exceptionInfo', this.toArgs())];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                id: response.body.exceptionId,
                                description: response.body.description,
                                details: response.body.details
                            }];
                    case 2: return [2 /*return*/, {
                            description: this.stoppedDetails.text
                        }];
                    case 3: return [2 /*return*/, undefined];
                }
            });
        });
    };
    Object.defineProperty(DebugThread.prototype, "supportsTerminate", {
        get: function () {
            return !!this.session.capabilities.supportsTerminateThreadsRequest;
        },
        enumerable: true,
        configurable: true
    });
    DebugThread.prototype.terminate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.supportsTerminate) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.session.sendRequest('terminateThreads', {
                                threadIds: [this.raw.id]
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugThread.prototype, "frames", {
        get: function () {
            return this._frames.values();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugThread.prototype, "topFrame", {
        get: function () {
            return this.frames.next().value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugThread.prototype, "frameCount", {
        get: function () {
            return this._frames.size;
        },
        enumerable: true,
        configurable: true
    });
    DebugThread.prototype.fetchFrames = function (levels) {
        if (levels === void 0) { levels = 20; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pendingFetch = this.pendingFetch.then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var start, frames_1, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    start = this.frameCount;
                                    return [4 /*yield*/, this.doFetchFrames(start, levels)];
                                case 1:
                                    frames_1 = _a.sent();
                                    return [2 /*return*/, this.doUpdateFrames(frames_1)];
                                case 2:
                                    e_1 = _a.sent();
                                    console.error(e_1);
                                    return [2 /*return*/, []];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DebugThread.prototype.doFetchFrames = function (startFrame, levels) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.session.sendRequest('stackTrace', this.toArgs({ startFrame: startFrame, levels: levels }))];
                    case 1:
                        response = _a.sent();
                        if (this.stoppedDetails) {
                            this.stoppedDetails.totalFrames = response.body.totalFrames;
                        }
                        return [2 /*return*/, response.body.stackFrames];
                    case 2:
                        e_2 = _a.sent();
                        if (this.stoppedDetails) {
                            this.stoppedDetails.framesErrorMessage = e_2.message;
                        }
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DebugThread.prototype.doUpdateFrames = function (frames) {
        var e_3, _a;
        var result = new Set();
        try {
            for (var frames_2 = __values(frames), frames_2_1 = frames_2.next(); !frames_2_1.done; frames_2_1 = frames_2.next()) {
                var raw = frames_2_1.value;
                var id = raw.id;
                var frame = this._frames.get(id) || new debug_stack_frame_1.DebugStackFrame(this, this.session);
                this._frames.set(id, frame);
                frame.update({ raw: raw });
                result.add(frame);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (frames_2_1 && !frames_2_1.done && (_a = frames_2.return)) _a.call(frames_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.updateCurrentFrame();
        return __spread(result.values());
    };
    DebugThread.prototype.clearFrames = function () {
        this._frames.clear();
        this.updateCurrentFrame();
    };
    DebugThread.prototype.updateCurrentFrame = function () {
        var currentFrame = this.currentFrame;
        var frameId = currentFrame && currentFrame.raw.id;
        this.currentFrame = typeof frameId === 'number' &&
            this._frames.get(frameId) ||
            this._frames.values().next().value;
    };
    DebugThread.prototype.toArgs = function (arg) {
        return Object.assign({}, arg, {
            threadId: this.raw.id
        });
    };
    DebugThread.prototype.render = function () {
        var reason = this.stoppedDetails && this.stoppedDetails.reason;
        var status = this.stoppedDetails ? reason ? "Paused on " + reason : 'Paused' : 'Running';
        return React.createElement("div", { className: 'theia-debug-thread', title: 'Thread' },
            React.createElement("span", { className: 'label' }, this.raw.name),
            React.createElement("span", { className: 'status' }, status));
    };
    return DebugThread;
}(DebugThreadData));
exports.DebugThread = DebugThread;
//# sourceMappingURL=debug-thread.js.map
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
var React = require("react");
var inversify_1 = require("inversify");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var debug_view_model_1 = require("./debug-view-model");
var debounce = require("p-debounce");
var DebugStackFramesSource = /** @class */ (function (_super) {
    __extends(DebugStackFramesSource, _super);
    function DebugStackFramesSource() {
        var _this = _super.call(this, {
            placeholder: 'Not paused'
        }) || this;
        _this.refresh = debounce(function () { return _this.fireDidChange(); }, 100);
        return _this;
    }
    DebugStackFramesSource.prototype.init = function () {
        var _this = this;
        this.refresh();
        this.toDispose.push(this.model.onDidChange(function () { return _this.refresh(); }));
    };
    DebugStackFramesSource.prototype.getElements = function () {
        var thread, _a, _b, frame, e_1_1, _c, framesErrorMessage_1, totalFrames;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    thread = this.model.currentThread;
                    if (!thread) {
                        return [2 /*return*/];
                    }
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 8]);
                    _a = __values(thread.frames), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    frame = _b.value;
                    return [4 /*yield*/, frame];
                case 3:
                    _e.sent();
                    _e.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8:
                    if (!thread.stoppedDetails) return [3 /*break*/, 12];
                    _c = thread.stoppedDetails, framesErrorMessage_1 = _c.framesErrorMessage, totalFrames = _c.totalFrames;
                    if (!framesErrorMessage_1) return [3 /*break*/, 10];
                    return [4 /*yield*/, {
                            render: function () { return React.createElement("span", { title: framesErrorMessage_1 }, framesErrorMessage_1); }
                        }];
                case 9:
                    _e.sent();
                    _e.label = 10;
                case 10:
                    if (!(totalFrames && totalFrames > thread.frameCount)) return [3 /*break*/, 12];
                    return [4 /*yield*/, new LoadMoreStackFrames(thread)];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugStackFramesSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugStackFramesSource.prototype, "init", null);
    DebugStackFramesSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugStackFramesSource);
    return DebugStackFramesSource;
}(source_tree_1.TreeSource));
exports.DebugStackFramesSource = DebugStackFramesSource;
var LoadMoreStackFrames = /** @class */ (function () {
    function LoadMoreStackFrames(thread) {
        this.thread = thread;
    }
    LoadMoreStackFrames.prototype.render = function () {
        return React.createElement("span", { className: 'theia-load-more-frames' }, "Load More Stack Frames");
    };
    LoadMoreStackFrames.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var frames;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.thread.fetchFrames()];
                    case 1:
                        frames = _a.sent();
                        if (frames[0]) {
                            this.thread.currentFrame = frames[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoadMoreStackFrames;
}());
exports.LoadMoreStackFrames = LoadMoreStackFrames;
//# sourceMappingURL=debug-stack-frames-source.js.map
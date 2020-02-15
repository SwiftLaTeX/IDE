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
var inversify_1 = require("inversify");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var debug_view_model_1 = require("./debug-view-model");
var breakpoint_manager_1 = require("../breakpoint/breakpoint-manager");
var debug_exception_breakpoint_1 = require("./debug-exception-breakpoint");
var DebugBreakpointsSource = /** @class */ (function (_super) {
    __extends(DebugBreakpointsSource, _super);
    function DebugBreakpointsSource() {
        return _super.call(this, {
            placeholder: 'No breakpoints'
        }) || this;
    }
    DebugBreakpointsSource.prototype.init = function () {
        var _this = this;
        this.fireDidChange();
        this.toDispose.push(this.model.onDidChangeBreakpoints(function () { return _this.fireDidChange(); }));
    };
    DebugBreakpointsSource.prototype.getElements = function () {
        var _a, _b, exceptionBreakpoint, e_1_1, _c, _d, functionBreakpoint, e_2_1, _e, _f, breakpoint, e_3_1;
        var e_1, _g, e_2, _h, e_3, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _k.trys.push([0, 5, 6, 7]);
                    _a = __values(this.breakpoints.getExceptionBreakpoints()), _b = _a.next();
                    _k.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    exceptionBreakpoint = _b.value;
                    return [4 /*yield*/, new debug_exception_breakpoint_1.DebugExceptionBreakpoint(exceptionBreakpoint, this.breakpoints)];
                case 2:
                    _k.sent();
                    _k.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _k.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7:
                    _k.trys.push([7, 12, 13, 14]);
                    _c = __values(this.model.functionBreakpoints), _d = _c.next();
                    _k.label = 8;
                case 8:
                    if (!!_d.done) return [3 /*break*/, 11];
                    functionBreakpoint = _d.value;
                    return [4 /*yield*/, functionBreakpoint];
                case 9:
                    _k.sent();
                    _k.label = 10;
                case 10:
                    _d = _c.next();
                    return [3 /*break*/, 8];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_2_1 = _k.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 14:
                    _k.trys.push([14, 19, 20, 21]);
                    _e = __values(this.model.breakpoints), _f = _e.next();
                    _k.label = 15;
                case 15:
                    if (!!_f.done) return [3 /*break*/, 18];
                    breakpoint = _f.value;
                    return [4 /*yield*/, breakpoint];
                case 16:
                    _k.sent();
                    _k.label = 17;
                case 17:
                    _f = _e.next();
                    return [3 /*break*/, 15];
                case 18: return [3 /*break*/, 21];
                case 19:
                    e_3_1 = _k.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 21];
                case 20:
                    try {
                        if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 21: return [2 /*return*/];
            }
        });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugBreakpointsSource.prototype, "model", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugBreakpointsSource.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugBreakpointsSource.prototype, "init", null);
    DebugBreakpointsSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugBreakpointsSource);
    return DebugBreakpointsSource;
}(source_tree_1.TreeSource));
exports.DebugBreakpointsSource = DebugBreakpointsSource;
//# sourceMappingURL=debug-breakpoints-source.js.map
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
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var marker_manager_1 = require("@theia/markers/lib/browser/marker-manager");
var uri_1 = require("@theia/core/lib/common/uri");
var breakpoint_marker_1 = require("./breakpoint-marker");
var BreakpointManager = /** @class */ (function (_super) {
    __extends(BreakpointManager, _super);
    function BreakpointManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.owner = 'breakpoint';
        _this.onDidChangeBreakpointsEmitter = new common_1.Emitter();
        _this.onDidChangeBreakpoints = _this.onDidChangeBreakpointsEmitter.event;
        _this.onDidChangeFunctionBreakpointsEmitter = new common_1.Emitter();
        _this.onDidChangeFunctionBreakpoints = _this.onDidChangeFunctionBreakpointsEmitter.event;
        _this._breakpointsEnabled = true;
        _this.exceptionBreakpoints = new Map();
        _this.functionBreakpoints = [];
        return _this;
    }
    BreakpointManager_1 = BreakpointManager;
    BreakpointManager.prototype.getKind = function () {
        return breakpoint_marker_1.BREAKPOINT_KIND;
    };
    BreakpointManager.prototype.setMarkers = function (uri, owner, newMarkers) {
        var e_1, _a, e_2, _b;
        var result = _super.prototype.setMarkers.call(this, uri, owner, newMarkers);
        var added = [];
        var removed = [];
        var changed = [];
        var oldMarkers = new Map(result.map(function (_a) {
            var data = _a.data;
            return [data.id, data];
        }));
        var ids = new Set();
        try {
            for (var newMarkers_1 = __values(newMarkers), newMarkers_1_1 = newMarkers_1.next(); !newMarkers_1_1.done; newMarkers_1_1 = newMarkers_1.next()) {
                var newMarker = newMarkers_1_1.value;
                ids.add(newMarker.id);
                if (oldMarkers.has(newMarker.id)) {
                    changed.push(newMarker);
                }
                else {
                    added.push(newMarker);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (newMarkers_1_1 && !newMarkers_1_1.done && (_a = newMarkers_1.return)) _a.call(newMarkers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _c = __values(oldMarkers.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), id = _e[0], data = _e[1];
                if (!ids.has(id)) {
                    removed.push(data);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.onDidChangeBreakpointsEmitter.fire({ uri: uri, added: added, removed: removed, changed: changed });
        return result;
    };
    BreakpointManager.prototype.getLineBreakpoints = function (uri, line) {
        return this.findMarkers({
            uri: uri,
            dataFilter: function (breakpoint) { return breakpoint.raw.line === line; }
        }).map(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    BreakpointManager.prototype.getInlineBreakpoint = function (uri, line, column) {
        var marker = this.findMarkers({
            uri: uri,
            dataFilter: function (breakpoint) { return breakpoint.raw.line === line && breakpoint.raw.column === column; }
        })[0];
        return marker && marker.data;
    };
    BreakpointManager.prototype.getBreakpoints = function (uri) {
        return this.findMarkers({ uri: uri }).map(function (marker) { return marker.data; });
    };
    BreakpointManager.prototype.setBreakpoints = function (uri, breakpoints) {
        this.setMarkers(uri, this.owner, breakpoints.sort(function (a, b) { return (a.raw.line - b.raw.line) || ((a.raw.column || 0) - (b.raw.column || 0)); }));
    };
    BreakpointManager.prototype.addBreakpoint = function (breakpoint) {
        var uri = new uri_1.default(breakpoint.uri);
        var breakpoints = this.getBreakpoints(uri);
        var newBreakpoints = breakpoints.filter(function (_a) {
            var raw = _a.raw;
            return !(raw.line === breakpoint.raw.line && raw.column === breakpoint.raw.column);
        });
        if (breakpoints.length === newBreakpoints.length) {
            newBreakpoints.push(breakpoint);
            this.setBreakpoints(uri, newBreakpoints);
            return true;
        }
        return false;
    };
    BreakpointManager.prototype.enableAllBreakpoints = function (enabled) {
        var e_3, _a, e_4, _b, e_5, _c;
        try {
            for (var _d = __values(this.getUris()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var uriString = _e.value;
                var didChange = false;
                var uri = new uri_1.default(uriString);
                var markers = this.findMarkers({ uri: uri });
                try {
                    for (var markers_1 = (e_4 = void 0, __values(markers)), markers_1_1 = markers_1.next(); !markers_1_1.done; markers_1_1 = markers_1.next()) {
                        var marker = markers_1_1.value;
                        if (marker.data.enabled !== enabled) {
                            marker.data.enabled = enabled;
                            didChange = true;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (markers_1_1 && !markers_1_1.done && (_b = markers_1.return)) _b.call(markers_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                if (didChange) {
                    this.fireOnDidChangeMarkers(uri);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var didChangeFunction = false;
        try {
            for (var _f = __values(this.getFunctionBreakpoints()), _g = _f.next(); !_g.done; _g = _f.next()) {
                var breakpoint = _g.value;
                if (breakpoint.enabled !== enabled) {
                    breakpoint.enabled = enabled;
                    didChangeFunction = true;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (didChangeFunction) {
            this.fireOnDidChangeMarkers(BreakpointManager_1.FUNCTION_URI);
        }
    };
    Object.defineProperty(BreakpointManager.prototype, "breakpointsEnabled", {
        get: function () {
            return this._breakpointsEnabled;
        },
        set: function (breakpointsEnabled) {
            var e_6, _a;
            if (this._breakpointsEnabled !== breakpointsEnabled) {
                this._breakpointsEnabled = breakpointsEnabled;
                try {
                    for (var _b = __values(this.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var uri = _c.value;
                        this.fireOnDidChangeMarkers(new uri_1.default(uri));
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                this.fireOnDidChangeMarkers(BreakpointManager_1.FUNCTION_URI);
            }
        },
        enumerable: true,
        configurable: true
    });
    BreakpointManager.prototype.getExceptionBreakpoint = function (filter) {
        return this.exceptionBreakpoints.get(filter);
    };
    BreakpointManager.prototype.getExceptionBreakpoints = function () {
        return this.exceptionBreakpoints.values();
    };
    BreakpointManager.prototype.setExceptionBreakpoints = function (exceptionBreakpoints) {
        var e_7, _a, e_8, _b;
        var toRemove = new Set(this.exceptionBreakpoints.keys());
        try {
            for (var exceptionBreakpoints_1 = __values(exceptionBreakpoints), exceptionBreakpoints_1_1 = exceptionBreakpoints_1.next(); !exceptionBreakpoints_1_1.done; exceptionBreakpoints_1_1 = exceptionBreakpoints_1.next()) {
                var exceptionBreakpoint = exceptionBreakpoints_1_1.value;
                var filter = exceptionBreakpoint.raw.filter;
                toRemove.delete(filter);
                this.exceptionBreakpoints.set(filter, exceptionBreakpoint);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (exceptionBreakpoints_1_1 && !exceptionBreakpoints_1_1.done && (_a = exceptionBreakpoints_1.return)) _a.call(exceptionBreakpoints_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        try {
            for (var toRemove_1 = __values(toRemove), toRemove_1_1 = toRemove_1.next(); !toRemove_1_1.done; toRemove_1_1 = toRemove_1.next()) {
                var filter = toRemove_1_1.value;
                this.exceptionBreakpoints.delete(filter);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (toRemove_1_1 && !toRemove_1_1.done && (_b = toRemove_1.return)) _b.call(toRemove_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        if (toRemove.size || exceptionBreakpoints.length) {
            this.fireOnDidChangeMarkers(BreakpointManager_1.EXCEPTION_URI);
        }
    };
    BreakpointManager.prototype.toggleExceptionBreakpoint = function (filter) {
        var breakpoint = this.getExceptionBreakpoint(filter);
        if (breakpoint) {
            breakpoint.enabled = !breakpoint.enabled;
            this.fireOnDidChangeMarkers(BreakpointManager_1.EXCEPTION_URI);
        }
    };
    BreakpointManager.prototype.getFunctionBreakpoints = function () {
        return this.functionBreakpoints;
    };
    BreakpointManager.prototype.setFunctionBreakpoints = function (functionBreakpoints) {
        var e_9, _a, e_10, _b;
        var oldBreakpoints = new Map(this.functionBreakpoints.map(function (b) { return [b.id, b]; }));
        this.functionBreakpoints = functionBreakpoints;
        this.fireOnDidChangeMarkers(BreakpointManager_1.FUNCTION_URI);
        var added = [];
        var removed = [];
        var changed = [];
        var ids = new Set();
        try {
            for (var functionBreakpoints_1 = __values(functionBreakpoints), functionBreakpoints_1_1 = functionBreakpoints_1.next(); !functionBreakpoints_1_1.done; functionBreakpoints_1_1 = functionBreakpoints_1.next()) {
                var newBreakpoint = functionBreakpoints_1_1.value;
                ids.add(newBreakpoint.id);
                if (oldBreakpoints.has(newBreakpoint.id)) {
                    changed.push(newBreakpoint);
                }
                else {
                    added.push(newBreakpoint);
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (functionBreakpoints_1_1 && !functionBreakpoints_1_1.done && (_a = functionBreakpoints_1.return)) _a.call(functionBreakpoints_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        try {
            for (var _c = __values(oldBreakpoints.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), id = _e[0], breakpoint = _e[1];
                if (!ids.has(id)) {
                    removed.push(breakpoint);
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        this.onDidChangeFunctionBreakpointsEmitter.fire({ uri: BreakpointManager_1.FUNCTION_URI, added: added, removed: removed, changed: changed });
    };
    BreakpointManager.prototype.hasBreakpoints = function () {
        return !!this.getUris().next().value || !!this.functionBreakpoints.length;
    };
    BreakpointManager.prototype.removeBreakpoints = function () {
        this.cleanAllMarkers();
        this.setFunctionBreakpoints([]);
    };
    BreakpointManager.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getData('breakpoints', {
                            breakpointsEnabled: true,
                            breakpoints: {}
                        })];
                    case 1:
                        data = _a.sent();
                        this._breakpointsEnabled = data.breakpointsEnabled;
                        // eslint-disable-next-line guard-for-in
                        for (uri in data.breakpoints) {
                            this.setBreakpoints(new uri_1.default(uri), data.breakpoints[uri]);
                        }
                        if (data.functionBreakpoints) {
                            this.setFunctionBreakpoints(data.functionBreakpoints);
                        }
                        if (data.exceptionBreakpoints) {
                            this.setExceptionBreakpoints(data.exceptionBreakpoints);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BreakpointManager.prototype.save = function () {
        var e_11, _a;
        var data = {
            breakpointsEnabled: this._breakpointsEnabled,
            breakpoints: {}
        };
        var uris = this.getUris();
        try {
            for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                var uri = uris_1_1.value;
                data.breakpoints[uri] = this.findMarkers({ uri: new uri_1.default(uri) }).map(function (marker) { return marker.data; });
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
            }
            finally { if (e_11) throw e_11.error; }
        }
        if (this.functionBreakpoints.length) {
            data.functionBreakpoints = this.functionBreakpoints;
        }
        if (this.exceptionBreakpoints.size) {
            data.exceptionBreakpoints = __spread(this.exceptionBreakpoints.values());
        }
        this.storage.setData('breakpoints', data);
    };
    var BreakpointManager_1;
    BreakpointManager.EXCEPTION_URI = new uri_1.default('debug:exception://');
    BreakpointManager.FUNCTION_URI = new uri_1.default('debug:function://');
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], BreakpointManager.prototype, "storage", void 0);
    BreakpointManager = BreakpointManager_1 = __decorate([
        inversify_1.injectable()
    ], BreakpointManager);
    return BreakpointManager;
}(marker_manager_1.MarkerManager));
exports.BreakpointManager = BreakpointManager;
//# sourceMappingURL=breakpoint-manager.js.map
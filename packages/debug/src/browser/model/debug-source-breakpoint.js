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
var uri_1 = require("@theia/core/lib/common/uri");
var debug_breakpoint_1 = require("./debug-breakpoint");
var DebugSourceBreakpointData = /** @class */ (function (_super) {
    __extends(DebugSourceBreakpointData, _super);
    function DebugSourceBreakpointData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DebugSourceBreakpointData;
}(debug_breakpoint_1.DebugBreakpointData));
exports.DebugSourceBreakpointData = DebugSourceBreakpointData;
var DebugSourceBreakpoint = /** @class */ (function (_super) {
    __extends(DebugSourceBreakpoint, _super);
    function DebugSourceBreakpoint(origin, options) {
        var _this = _super.call(this, new uri_1.default(origin.uri), options) || this;
        _this.setBreakpointEnabled = function (event) {
            _this.setEnabled(event.target.checked);
        };
        _this.origins = [origin];
        return _this;
    }
    DebugSourceBreakpoint.prototype.update = function (data) {
        _super.prototype.update.call(this, data);
    };
    Object.defineProperty(DebugSourceBreakpoint.prototype, "origin", {
        get: function () {
            return this.origins[0];
        },
        enumerable: true,
        configurable: true
    });
    DebugSourceBreakpoint.prototype.setEnabled = function (enabled) {
        var e_1, _a;
        var _b = this, uri = _b.uri, raw = _b.raw;
        var shouldUpdate = false;
        var breakpoints = raw && this.doRemove(this.origins.filter(function (origin) { return !(origin.raw.line === raw.line && origin.raw.column === raw.column); }));
        if (breakpoints) {
            shouldUpdate = true;
        }
        else {
            breakpoints = this.breakpoints.getBreakpoints(uri);
        }
        try {
            for (var breakpoints_1 = __values(breakpoints), breakpoints_1_1 = breakpoints_1.next(); !breakpoints_1_1.done; breakpoints_1_1 = breakpoints_1.next()) {
                var breakpoint = breakpoints_1_1.value;
                if (breakpoint.raw.line === this.origin.raw.line && breakpoint.raw.column === this.origin.raw.column && breakpoint.enabled !== enabled) {
                    breakpoint.enabled = enabled;
                    shouldUpdate = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (breakpoints_1_1 && !breakpoints_1_1.done && (_a = breakpoints_1.return)) _a.call(breakpoints_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (shouldUpdate) {
            this.breakpoints.setBreakpoints(this.uri, breakpoints);
        }
    };
    DebugSourceBreakpoint.prototype.updateOrigins = function (data) {
        var e_2, _a;
        var breakpoints = this.breakpoints.getBreakpoints(this.uri);
        var shouldUpdate = false;
        var originPositions = new Set();
        this.origins.forEach(function (origin) { return originPositions.add(origin.raw.line + ':' + origin.raw.column); });
        try {
            for (var breakpoints_2 = __values(breakpoints), breakpoints_2_1 = breakpoints_2.next(); !breakpoints_2_1.done; breakpoints_2_1 = breakpoints_2.next()) {
                var breakpoint = breakpoints_2_1.value;
                if (originPositions.has(breakpoint.raw.line + ':' + breakpoint.raw.column)) {
                    Object.assign(breakpoint.raw, data);
                    shouldUpdate = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (breakpoints_2_1 && !breakpoints_2_1.done && (_a = breakpoints_2.return)) _a.call(breakpoints_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (shouldUpdate) {
            this.breakpoints.setBreakpoints(this.uri, breakpoints);
        }
    };
    Object.defineProperty(DebugSourceBreakpoint.prototype, "line", {
        /** 1-based */
        get: function () {
            return this.raw && this.raw.line || this.origins[0].raw.line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "column", {
        get: function () {
            return this.raw && this.raw.column || this.origins[0].raw.column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "endLine", {
        get: function () {
            return this.raw && this.raw.endLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "endColumn", {
        get: function () {
            return this.raw && this.raw.endColumn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "condition", {
        get: function () {
            return this.origin.raw.condition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "hitCondition", {
        get: function () {
            return this.origin.raw.hitCondition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "logMessage", {
        get: function () {
            return this.origin.raw.logMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "source", {
        get: function () {
            return this.raw && this.raw.source && this.session && this.session.getSource(this.raw.source);
        },
        enumerable: true,
        configurable: true
    });
    DebugSourceBreakpoint.prototype.open = function (options) {
        if (options === void 0) { options = {
            mode: 'reveal'
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, line, column, endLine, endColumn, selection;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, line = _a.line, column = _a.column, endLine = _a.endLine, endColumn = _a.endColumn;
                        selection = {
                            start: {
                                line: line - 1,
                                character: typeof column === 'number' ? column - 1 : undefined
                            }
                        };
                        if (typeof endLine === 'number') {
                            selection.end = {
                                line: endLine - 1,
                                character: typeof endColumn === 'number' ? endColumn - 1 : undefined
                            };
                        }
                        if (!this.source) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.source.open(__assign(__assign({}, options), { selection: selection }))];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.editorManager.open(this.uri, __assign(__assign({}, options), { selection: selection }))];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DebugSourceBreakpoint.prototype.doRender = function () {
        return React.createElement(React.Fragment, null,
            React.createElement("span", { className: 'line-info', title: this.labelProvider.getLongName(this.uri) },
                React.createElement("span", { className: 'name' },
                    this.labelProvider.getName(this.uri),
                    " "),
                React.createElement("span", { className: 'path' },
                    this.labelProvider.getLongName(this.uri.parent),
                    " ")),
            React.createElement("span", { className: 'line' }, this.renderPosition()));
    };
    DebugSourceBreakpoint.prototype.renderPosition = function () {
        return this.line + (typeof this.column === 'number' ? ':' + this.column : '');
    };
    DebugSourceBreakpoint.prototype.doGetDecoration = function (messages) {
        if (messages === void 0) { messages = []; }
        if (this.logMessage || this.condition || this.hitCondition) {
            var session = this.session;
            if (this.logMessage) {
                if (session && !session.capabilities.supportsLogPoints) {
                    return this.getUnsupportedBreakpointDecoration('Logpoints not supported by this debug type');
                }
                messages.push('Log Message: ' + this.logMessage);
            }
            if (this.condition) {
                if (session && !session.capabilities.supportsConditionalBreakpoints) {
                    return this.getUnsupportedBreakpointDecoration('Conditional breakpoints not supported by this debug type');
                }
                messages.push('Expression: ' + this.condition);
            }
            if (this.hitCondition) {
                if (session && !session.capabilities.supportsHitConditionalBreakpoints) {
                    return this.getUnsupportedBreakpointDecoration('Hit conditional breakpoints not supported by this debug type');
                }
                messages.push('Hit Count: ' + this.hitCondition);
            }
        }
        return _super.prototype.doGetDecoration.call(this, messages);
    };
    DebugSourceBreakpoint.prototype.getUnsupportedBreakpointDecoration = function (message) {
        return {
            className: 'theia-debug-breakpoint-unsupported',
            message: [message]
        };
    };
    DebugSourceBreakpoint.prototype.getBreakpointDecoration = function (message) {
        if (this.logMessage) {
            return {
                className: 'theia-debug-logpoint',
                message: message || ['Logpoint']
            };
        }
        if (this.condition || this.hitCondition) {
            return {
                className: 'theia-debug-conditional-breakpoint',
                message: message || ['Conditional Breakpoint']
            };
        }
        return {
            className: 'theia-debug-breakpoint',
            message: message || ['Breakpoint']
        };
    };
    DebugSourceBreakpoint.prototype.remove = function () {
        var breakpoints = this.doRemove(this.origins);
        if (breakpoints) {
            this.breakpoints.setBreakpoints(this.uri, breakpoints);
        }
    };
    DebugSourceBreakpoint.prototype.doRemove = function (origins) {
        if (!origins.length) {
            return undefined;
        }
        var uri = this.uri;
        var toRemove = new Set();
        origins.forEach(function (origin) { return toRemove.add(origin.raw.line + ':' + origin.raw.column); });
        var shouldUpdate = false;
        var breakpoints = this.breakpoints.findMarkers({
            uri: uri,
            dataFilter: function (data) {
                var result = !toRemove.has(data.raw.line + ':' + data.raw.column);
                shouldUpdate = shouldUpdate || !result;
                return result;
            }
        }).map(function (_a) {
            var data = _a.data;
            return data;
        });
        return shouldUpdate && breakpoints || undefined;
    };
    return DebugSourceBreakpoint;
}(debug_breakpoint_1.DebugBreakpoint));
exports.DebugSourceBreakpoint = DebugSourceBreakpoint;
//# sourceMappingURL=debug-source-breakpoint.js.map
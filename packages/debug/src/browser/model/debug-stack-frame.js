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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
var debug_console_items_1 = require("../console/debug-console-items");
var DebugStackFrameData = /** @class */ (function () {
    function DebugStackFrameData() {
    }
    return DebugStackFrameData;
}());
exports.DebugStackFrameData = DebugStackFrameData;
var DebugStackFrame = /** @class */ (function (_super) {
    __extends(DebugStackFrame, _super);
    function DebugStackFrame(thread, session) {
        var _this = _super.call(this) || this;
        _this.thread = thread;
        _this.session = session;
        return _this;
    }
    Object.defineProperty(DebugStackFrame.prototype, "id", {
        get: function () {
            return this.session.id + ':' + this.thread.id + ':' + this.raw.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugStackFrame.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: true,
        configurable: true
    });
    DebugStackFrame.prototype.update = function (data) {
        Object.assign(this, data);
        this._source = this.raw.source && this.session.getSource(this.raw.source);
    };
    DebugStackFrame.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.session.sendRequest('restartFrame', this.toArgs({
                            threadId: this.thread.id
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugStackFrame.prototype.open = function (options) {
        if (options === void 0) { options = {
            mode: 'reveal'
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, line, column, endLine, endColumn, selection;
            return __generator(this, function (_b) {
                if (!this.source) {
                    return [2 /*return*/, undefined];
                }
                _a = this.raw, line = _a.line, column = _a.column, endLine = _a.endLine, endColumn = _a.endColumn;
                selection = {
                    start: browser_2.Position.create(line - 1, column - 1)
                };
                if (typeof endLine === 'number') {
                    selection.end = {
                        line: endLine - 1,
                        character: typeof endColumn === 'number' ? endColumn - 1 : undefined
                    };
                }
                this.source.open(__assign(__assign({}, options), { selection: selection }));
                return [2 /*return*/];
            });
        });
    };
    DebugStackFrame.prototype.getScopes = function () {
        return this.scopes || (this.scopes = this.doGetScopes());
    };
    DebugStackFrame.prototype.doGetScopes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.session.sendRequest('scopes', this.toArgs())];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        if (!response) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, response.body.scopes.map(function (raw) { return new debug_console_items_1.DebugScope(raw, function () { return _this.session; }); })];
                }
            });
        });
    };
    DebugStackFrame.prototype.toArgs = function (arg) {
        return Object.assign({}, arg, {
            frameId: this.raw.id
        });
    };
    DebugStackFrame.prototype.render = function () {
        var classNames = ['theia-debug-stack-frame'];
        if (this.raw.presentationHint === 'label') {
            classNames.push('label');
        }
        if (this.raw.presentationHint === 'subtle') {
            classNames.push('subtle');
        }
        if (!this.source || this.source.raw.presentationHint === 'deemphasize') {
            classNames.push(browser_1.DISABLED_CLASS);
        }
        return React.createElement("div", { className: classNames.join(' ') },
            React.createElement("span", { className: 'expression', title: this.raw.name }, this.raw.name),
            this.renderFile());
    };
    DebugStackFrame.prototype.renderFile = function () {
        var source = this.source;
        if (!source) {
            return undefined;
        }
        var origin = source.raw.origin && "\n" + source.raw.origin || '';
        return React.createElement("span", { className: 'file', title: source.longName + origin },
            React.createElement("span", { className: 'name' }, source.name),
            React.createElement("span", { className: 'line' },
                this.raw.line,
                ":",
                this.raw.column));
    };
    return DebugStackFrame;
}(DebugStackFrameData));
exports.DebugStackFrame = DebugStackFrame;
//# sourceMappingURL=debug-stack-frame.js.map
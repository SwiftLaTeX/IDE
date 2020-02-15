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
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var debug_console_items_1 = require("../console/debug-console-items");
var debug_session_manager_1 = require("../debug-session-manager");
var inversify_1 = require("inversify");
var DebugHoverSource = /** @class */ (function (_super) {
    __extends(DebugHoverSource, _super);
    function DebugHoverSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elements = [];
        return _this;
    }
    Object.defineProperty(DebugHoverSource.prototype, "expression", {
        get: function () {
            return this._expression;
        },
        enumerable: true,
        configurable: true
    });
    DebugHoverSource.prototype.getElements = function () {
        return this.elements[Symbol.iterator]();
    };
    DebugHoverSource.prototype.renderTitle = function (element) {
        return React.createElement("div", { className: 'theia-debug-hover-title', title: element.value }, element.value);
    };
    DebugHoverSource.prototype.reset = function () {
        this._expression = undefined;
        this.elements = [];
        this.fireDidChange();
    };
    DebugHoverSource.prototype.evaluate = function (expression) {
        return __awaiter(this, void 0, void 0, function () {
            var evaluated, elements, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.doEvaluate(expression)];
                    case 1:
                        evaluated = _b.sent();
                        _a = evaluated;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, evaluated.getElements()];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        elements = _a;
                        this._expression = evaluated;
                        this.elements = elements ? __spread(elements) : [];
                        this.fireDidChange();
                        return [2 /*return*/, !!evaluated];
                }
            });
        });
    };
    DebugHoverSource.prototype.doEvaluate = function (expression) {
        return __awaiter(this, void 0, void 0, function () {
            var currentSession, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentSession = this.sessions.currentSession;
                        if (!currentSession) {
                            return [2 /*return*/, undefined];
                        }
                        if (!currentSession.capabilities.supportsEvaluateForHovers) return [3 /*break*/, 2];
                        item = new debug_console_items_1.ExpressionItem(expression, function () { return currentSession; });
                        return [4 /*yield*/, item.evaluate('hover')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, item.available && item || undefined];
                    case 2: return [2 /*return*/, this.findVariable(expression.split('.').map(function (word) { return word.trim(); }).filter(function (word) { return !!word; }))];
                }
            });
        });
    };
    DebugHoverSource.prototype.findVariable = function (namesToFind) {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame, variable, scopes, scopes_1, scopes_1_1, scope, found, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentFrame = this.sessions.currentFrame;
                        if (!currentFrame) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, currentFrame.getScopes()];
                    case 1:
                        scopes = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!scopes_1_1.done) return [3 /*break*/, 6];
                        scope = scopes_1_1.value;
                        return [4 /*yield*/, this.doFindVariable(scope, namesToFind)];
                    case 4:
                        found = _b.sent();
                        if (!variable) {
                            variable = found;
                        }
                        else if (found && found.value !== variable.value) {
                            // only show if all expressions found have the same value
                            return [2 /*return*/, undefined];
                        }
                        _b.label = 5;
                    case 5:
                        scopes_1_1 = scopes_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, variable];
                }
            });
        });
    };
    DebugHoverSource.prototype.doFindVariable = function (owner, namesToFind) {
        return __awaiter(this, void 0, void 0, function () {
            var elements, variables, elements_1, elements_1_1, element;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, owner.getElements()];
                    case 1:
                        elements = _b.sent();
                        variables = [];
                        try {
                            for (elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                                element = elements_1_1.value;
                                if (element instanceof debug_console_items_1.DebugVariable && element.name === namesToFind[0]) {
                                    variables.push(element);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (variables.length !== 1) {
                            return [2 /*return*/, undefined];
                        }
                        if (namesToFind.length === 1) {
                            return [2 /*return*/, variables[0]];
                        }
                        else {
                            return [2 /*return*/, this.doFindVariable(variables[0], namesToFind.slice(1))];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugHoverSource.prototype, "sessions", void 0);
    DebugHoverSource = __decorate([
        inversify_1.injectable()
    ], DebugHoverSource);
    return DebugHoverSource;
}(source_tree_1.TreeSource));
exports.DebugHoverSource = DebugHoverSource;
//# sourceMappingURL=debug-hover-source.js.map
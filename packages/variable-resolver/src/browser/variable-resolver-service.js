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
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var variable_1 = require("./variable");
var json_1 = require("@phosphor/coreutils/lib/json");
/**
 * The variable resolver service should be used to resolve variables in strings.
 */
var VariableResolverService = /** @class */ (function () {
    function VariableResolverService() {
    }
    VariableResolverService_1 = VariableResolverService;
    /**
     * Resolve the variables in the given string array.
     * @param value The array of data to resolve
     * @param options options of the variable resolution
     * @returns promise resolved to the provided string array with already resolved variables.
     * Never reject.
     */
    VariableResolverService.prototype.resolveArray = function (value, options) {
        if (options === void 0) { options = {}; }
        return this.resolve(value, options);
    };
    /**
     * Resolve the variables in the given string.
     * @param value Data to resolve
     * @param options options of the variable resolution
     * @returns promise resolved to the provided string with already resolved variables.
     * Never reject.
     */
    VariableResolverService.prototype.resolve = function (value, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var context, resolved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = new VariableResolverService_1.Context(this.variableRegistry, options);
                        return [4 /*yield*/, this.doResolve(value, context)];
                    case 1:
                        resolved = _a.sent();
                        return [2 /*return*/, resolved];
                }
            });
        });
    };
    VariableResolverService.prototype.doResolve = function (value, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // eslint-disable-next-line no-null/no-null
                if (value === undefined || value === null) {
                    return [2 /*return*/, value];
                }
                if (typeof value === 'string') {
                    return [2 /*return*/, this.doResolveString(value, context)];
                }
                if (Array.isArray(value)) {
                    return [2 /*return*/, this.doResolveArray(value, context)];
                }
                if (typeof value === 'object') {
                    return [2 /*return*/, this.doResolveObject(value, context)];
                }
                return [2 /*return*/, value];
            });
        });
    };
    VariableResolverService.prototype.doResolveObject = function (obj, context) {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a, _b, name_1, value, resolved, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        result = {};
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(Object.keys(obj)), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        name_1 = _b.value;
                        value = obj[name_1];
                        return [4 /*yield*/, this.doResolve(value, context)];
                    case 3:
                        resolved = _d.sent();
                        result[name_1] = resolved;
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
                    case 8: return [2 /*return*/, result];
                }
            });
        });
    };
    VariableResolverService.prototype.doResolveArray = function (values, context) {
        return __awaiter(this, void 0, void 0, function () {
            var result, values_1, values_1_1, value, resolved, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        values_1 = __values(values), values_1_1 = values_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!values_1_1.done) return [3 /*break*/, 5];
                        value = values_1_1.value;
                        return [4 /*yield*/, this.doResolve(value, context)];
                    case 3:
                        resolved = _b.sent();
                        result.push(resolved);
                        _b.label = 4;
                    case 4:
                        values_1_1 = values_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, result];
                }
            });
        });
    };
    VariableResolverService.prototype.doResolveString = function (value, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveVariables(value, context)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, value.replace(VariableResolverService_1.VAR_REGEXP, function (match, varName) {
                                var varValue = context.get(varName);
                                return varValue !== undefined ? varValue : match;
                            })];
                }
            });
        });
    };
    VariableResolverService.prototype.resolveVariables = function (value, context) {
        return __awaiter(this, void 0, void 0, function () {
            var variableRegExp, match, variableName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variableRegExp = new RegExp(VariableResolverService_1.VAR_REGEXP);
                        _a.label = 1;
                    case 1:
                        if (!((match = variableRegExp.exec(value)) !== null)) return [3 /*break*/, 3];
                        variableName = match[1];
                        return [4 /*yield*/, context.resolve(variableName)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var VariableResolverService_1;
    VariableResolverService.VAR_REGEXP = /\$\{(.*?)\}/g;
    __decorate([
        inversify_1.inject(variable_1.VariableRegistry),
        __metadata("design:type", variable_1.VariableRegistry)
    ], VariableResolverService.prototype, "variableRegistry", void 0);
    VariableResolverService = VariableResolverService_1 = __decorate([
        inversify_1.injectable()
    ], VariableResolverService);
    return VariableResolverService;
}());
exports.VariableResolverService = VariableResolverService;
(function (VariableResolverService) {
    var Context = /** @class */ (function () {
        function Context(variableRegistry, options) {
            this.variableRegistry = variableRegistry;
            this.options = options;
            this.resolved = new Map();
        }
        Context.prototype.get = function (name) {
            return this.resolved.get(name);
        };
        Context.prototype.resolve = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var variableName, argument, parts, variable, value, _a, stringValue, e_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (this.resolved.has(name)) {
                                return [2 /*return*/];
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            variableName = name;
                            argument = void 0;
                            parts = name.split(':');
                            if (parts.length > 1) {
                                variableName = parts[0];
                                argument = parts[1];
                            }
                            variable = this.variableRegistry.getVariable(variableName);
                            _a = variable;
                            if (!_a) return [3 /*break*/, 3];
                            return [4 /*yield*/, variable.resolve(this.options.context, argument, this.options.configurationSection)];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3:
                            value = _a;
                            stringValue = value !== undefined && value !== null && json_1.JSONExt.isPrimitive(value) ? String(value) : undefined;
                            this.resolved.set(name, stringValue);
                            return [3 /*break*/, 5];
                        case 4:
                            e_3 = _b.sent();
                            console.error("Failed to resolved '" + name + "' variable", e_3);
                            this.resolved.set(name, undefined);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        return Context;
    }());
    VariableResolverService.Context = Context;
})(VariableResolverService = exports.VariableResolverService || (exports.VariableResolverService = {}));
exports.VariableResolverService = VariableResolverService;
//# sourceMappingURL=variable-resolver-service.js.map
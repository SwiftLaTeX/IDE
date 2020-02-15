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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var browser_1 = require("@theia/core/lib/browser");
var console_session_1 = require("@theia/console/lib/browser/console-session");
var severity_1 = require("@theia/core/lib/common/severity");
var ExpressionContainer = /** @class */ (function () {
    function ExpressionContainer(options) {
        this.sessionProvider = options.session;
        this.variablesReference = options.variablesReference || 0;
        this.namedVariables = options.namedVariables;
        this.indexedVariables = options.indexedVariables;
        this.startOfVariables = options.startOfVariables || 0;
    }
    Object.defineProperty(ExpressionContainer.prototype, "session", {
        get: function () {
            return this.sessionProvider();
        },
        enumerable: true,
        configurable: true
    });
    ExpressionContainer.prototype.render = function () {
        return undefined;
    };
    Object.defineProperty(ExpressionContainer.prototype, "hasElements", {
        get: function () {
            return !!this.variablesReference;
        },
        enumerable: true,
        configurable: true
    });
    ExpressionContainer.prototype.getElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasElements || !this.session) {
                            return [2 /*return*/, [][Symbol.iterator]()];
                        }
                        if (!this.elements) {
                            this.elements = this.doResolve();
                        }
                        return [4 /*yield*/, this.elements];
                    case 1: return [2 /*return*/, (_a.sent())[Symbol.iterator]()];
                }
            });
        });
    };
    ExpressionContainer.prototype.doResolve = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, chunkSize, numberOfChunks, i, start, count, variablesReference;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        if (!this.namedVariables) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetch(result, 'named')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.indexedVariables) {
                            chunkSize = ExpressionContainer.BASE_CHUNK_SIZE;
                            while (this.indexedVariables > chunkSize * ExpressionContainer.BASE_CHUNK_SIZE) {
                                chunkSize *= ExpressionContainer.BASE_CHUNK_SIZE;
                            }
                            if (this.indexedVariables > chunkSize) {
                                numberOfChunks = Math.ceil(this.indexedVariables / chunkSize);
                                for (i = 0; i < numberOfChunks; i++) {
                                    start = this.startOfVariables + i * chunkSize;
                                    count = Math.min(chunkSize, this.indexedVariables - i * chunkSize);
                                    variablesReference = this.variablesReference;
                                    result.push(new DebugVirtualVariable({
                                        session: this.sessionProvider,
                                        variablesReference: variablesReference,
                                        namedVariables: 0,
                                        indexedVariables: count,
                                        startOfVariables: start,
                                        name: "[" + start + ".." + (start + count - 1) + "]"
                                    }));
                                }
                                return [2 /*return*/, result];
                            }
                        }
                        return [4 /*yield*/, this.fetch(result, 'indexed', this.startOfVariables, this.indexedVariables)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ExpressionContainer.prototype.fetch = function (result, filter, start, count) {
        return __awaiter(this, void 0, void 0, function () {
            var variablesReference, response, variables, names, variables_1, variables_1_1, variable, e_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        variablesReference = this.variablesReference;
                        return [4 /*yield*/, this.session.sendRequest('variables', { variablesReference: variablesReference, filter: filter, start: start, count: count })];
                    case 1:
                        response = _b.sent();
                        variables = response.body.variables;
                        names = new Set();
                        try {
                            for (variables_1 = __values(variables), variables_1_1 = variables_1.next(); !variables_1_1.done; variables_1_1 = variables_1.next()) {
                                variable = variables_1_1.value;
                                if (!names.has(variable.name)) {
                                    result.push(new DebugVariable(this.sessionProvider, variable, this));
                                    names.add(variable.name);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (variables_1_1 && !variables_1_1.done && (_a = variables_1.return)) _a.call(variables_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        result.push({
                            severity: severity_1.Severity.Error,
                            visible: !!e_1.message,
                            render: function () { return e_1.message; }
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ExpressionContainer.BASE_CHUNK_SIZE = 100;
    return ExpressionContainer;
}());
exports.ExpressionContainer = ExpressionContainer;
var DebugVariable = /** @class */ (function (_super) {
    __extends(DebugVariable, _super);
    function DebugVariable(session, variable, parent) {
        var _this = _super.call(this, {
            session: session,
            variablesReference: variable.variablesReference,
            namedVariables: variable.namedVariables,
            indexedVariables: variable.indexedVariables
        }) || this;
        _this.variable = variable;
        _this.parent = parent;
        _this.setValueRef = function (valueRef) { return _this.valueRef = valueRef || undefined; };
        _this.setNameRef = function (nameRef) { return _this.nameRef = nameRef || undefined; };
        return _this;
    }
    Object.defineProperty(DebugVariable.prototype, "name", {
        get: function () {
            return this.variable.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugVariable.prototype, "type", {
        get: function () {
            return this._type || this.variable.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugVariable.prototype, "value", {
        get: function () {
            return this._value || this.variable.value;
        },
        enumerable: true,
        configurable: true
    });
    DebugVariable.prototype.render = function () {
        var _a = this, type = _a.type, value = _a.value, name = _a.name;
        return React.createElement("div", { className: this.variableClassName },
            React.createElement("span", { title: type || name, className: 'name', ref: this.setNameRef },
                name,
                !!value && ': '),
            React.createElement("span", { title: value, ref: this.setValueRef }, value));
    };
    Object.defineProperty(DebugVariable.prototype, "variableClassName", {
        get: function () {
            var _a = this, type = _a.type, value = _a.value;
            var classNames = ['theia-debug-console-variable'];
            if (type === 'number' || type === 'boolean' || type === 'string') {
                classNames.push(type);
            }
            else if (!isNaN(+value)) {
                classNames.push('number');
            }
            else if (DebugVariable.booleanRegex.test(value)) {
                classNames.push('boolean');
            }
            else if (DebugVariable.stringRegex.test(value)) {
                classNames.push('string');
            }
            return classNames.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugVariable.prototype, "supportSetVariable", {
        get: function () {
            return !!this.session && !!this.session.capabilities.supportsSetVariable;
        },
        enumerable: true,
        configurable: true
    });
    DebugVariable.prototype.setValue = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, parent, variablesReference, response, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.session) {
                            return [2 /*return*/];
                        }
                        _a = this, name = _a.name, parent = _a.parent;
                        variablesReference = parent['variablesReference'];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.session.sendRequest('setVariable', { variablesReference: variablesReference, name: name, value: value })];
                    case 2:
                        response = _b.sent();
                        this._value = response.body.value;
                        this._type = response.body.type;
                        this.variablesReference = response.body.variablesReference || 0;
                        this.namedVariables = response.body.namedVariables;
                        this.indexedVariables = response.body.indexedVariables;
                        this.elements = undefined;
                        this.session['fireDidChange']();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugVariable.prototype, "supportCopyValue", {
        get: function () {
            return !!this.valueRef && document.queryCommandSupported('copy');
        },
        enumerable: true,
        configurable: true
    });
    DebugVariable.prototype.copyValue = function () {
        var selection = document.getSelection();
        if (this.valueRef && selection) {
            selection.selectAllChildren(this.valueRef);
            document.execCommand('copy');
        }
    };
    Object.defineProperty(DebugVariable.prototype, "supportCopyAsExpression", {
        get: function () {
            return !!this.nameRef && document.queryCommandSupported('copy');
        },
        enumerable: true,
        configurable: true
    });
    DebugVariable.prototype.copyAsExpression = function () {
        var selection = document.getSelection();
        if (this.nameRef && selection) {
            selection.selectAllChildren(this.nameRef);
            document.execCommand('copy');
        }
    };
    DebugVariable.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, newValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = new browser_1.SingleTextInputDialog({
                            title: "Set " + this.name + " Value",
                            initialValue: this.value
                        });
                        return [4 /*yield*/, input.open()];
                    case 1:
                        newValue = _a.sent();
                        if (!newValue) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setValue(newValue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DebugVariable.booleanRegex = /^true|false$/i;
    DebugVariable.stringRegex = /^(['"]).*\1$/;
    return DebugVariable;
}(ExpressionContainer));
exports.DebugVariable = DebugVariable;
var DebugVirtualVariable = /** @class */ (function (_super) {
    __extends(DebugVirtualVariable, _super);
    function DebugVirtualVariable(options) {
        var _this = _super.call(this, options) || this;
        _this.options = options;
        return _this;
    }
    DebugVirtualVariable.prototype.render = function () {
        return this.options.name;
    };
    return DebugVirtualVariable;
}(ExpressionContainer));
exports.DebugVirtualVariable = DebugVirtualVariable;
var ExpressionItem = /** @class */ (function (_super) {
    __extends(ExpressionItem, _super);
    function ExpressionItem(_expression, session) {
        var _this = _super.call(this, { session: session }) || this;
        _this._expression = _expression;
        _this._value = ExpressionItem.notAvailable;
        _this._available = false;
        return _this;
    }
    Object.defineProperty(ExpressionItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionItem.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionItem.prototype, "available", {
        get: function () {
            return this._available;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionItem.prototype, "expression", {
        get: function () {
            return this._expression;
        },
        enumerable: true,
        configurable: true
    });
    ExpressionItem.prototype.render = function () {
        var valueClassNames = [];
        if (!this._available) {
            valueClassNames.push(console_session_1.ConsoleItem.errorClassName);
            valueClassNames.push('theia-debug-console-unavailable');
        }
        return React.createElement("div", { className: 'theia-debug-console-expression' },
            React.createElement("div", null, this._expression),
            React.createElement("div", { className: valueClassNames.join(' ') }, this._value));
    };
    ExpressionItem.prototype.evaluate = function (context) {
        if (context === void 0) { context = 'repl'; }
        return __awaiter(this, void 0, void 0, function () {
            var session, body, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.session;
                        if (!session) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, session.evaluate(this._expression, context)];
                    case 2:
                        body = _a.sent();
                        this.setResult(body);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.setResult(undefined, err_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.setResult(undefined, 'Please start a debug session to evaluate');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ExpressionItem.prototype.setResult = function (body, error) {
        if (error === void 0) { error = ExpressionItem.notAvailable; }
        if (body) {
            this._value = body.result;
            this._type = body.type;
            this._available = true;
            this.variablesReference = body.variablesReference;
            this.namedVariables = body.namedVariables;
            this.indexedVariables = body.indexedVariables;
            this.severity = severity_1.Severity.Log;
        }
        else {
            this._value = error;
            this._type = undefined;
            this._available = false;
            this.variablesReference = 0;
            this.namedVariables = undefined;
            this.indexedVariables = undefined;
            this.severity = severity_1.Severity.Error;
        }
        this.elements = undefined;
    };
    ExpressionItem.notAvailable = 'not available';
    return ExpressionItem;
}(ExpressionContainer));
exports.ExpressionItem = ExpressionItem;
var DebugScope = /** @class */ (function (_super) {
    __extends(DebugScope, _super);
    function DebugScope(raw, session) {
        var _this = _super.call(this, {
            session: session,
            variablesReference: raw.variablesReference,
            namedVariables: raw.namedVariables,
            indexedVariables: raw.indexedVariables
        }) || this;
        _this.raw = raw;
        return _this;
    }
    DebugScope.prototype.render = function () {
        return this.raw.name;
    };
    return DebugScope;
}(ExpressionContainer));
exports.DebugScope = DebugScope;
//# sourceMappingURL=debug-console-items.js.map
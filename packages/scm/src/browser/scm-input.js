"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var debounce = require("p-debounce");
var common_1 = require("@theia/core/lib/common");
var json_1 = require("@phosphor/coreutils/lib/json");
var ScmInput = /** @class */ (function () {
    function ScmInput(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.options = options;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onDidFocusEmitter = new common_1.Emitter();
        this.onDidFocus = this.onDidFocusEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onDidChangeEmitter, this.onDidFocusEmitter);
        this._placeholder = this.options.placeholder;
        this.validate = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.options.validator) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.options.validator(this.value)];
                    case 1:
                        _a.issue = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }, 200);
    }
    ScmInput.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    ScmInput.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(ScmInput.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (placeholder) {
            if (this._placeholder === placeholder) {
                return;
            }
            this._placeholder = placeholder;
            this.fireDidChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScmInput.prototype, "value", {
        get: function () {
            return this._value || '';
        },
        set: function (value) {
            if (this.value === value) {
                return;
            }
            this._value = value;
            this.fireDidChange();
            this.validate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScmInput.prototype, "issue", {
        get: function () {
            return this._issue;
        },
        set: function (issue) {
            if (json_1.JSONExt.deepEqual((this._issue || {}), (issue || {}))) {
                return;
            }
            this._issue = issue;
            this.fireDidChange();
        },
        enumerable: true,
        configurable: true
    });
    ScmInput.prototype.focus = function () {
        this.onDidFocusEmitter.fire(undefined);
    };
    ScmInput.prototype.toJSON = function () {
        return {
            value: this._value,
            issue: this._issue
        };
    };
    ScmInput.prototype.fromJSON = function (data) {
        if (this._value !== undefined) {
            return;
        }
        if ('value' in data) {
            this._value = data.value;
            this._issue = data.issue;
            this.fireDidChange();
        }
    };
    return ScmInput;
}());
exports.ScmInput = ScmInput;
//# sourceMappingURL=scm-input.js.map
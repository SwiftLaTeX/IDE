"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var disposable_1 = require("../common/disposable");
var event_1 = require("../common/event");
var Color;
(function (Color) {
    function rgba(r, g, b, a) {
        if (a === void 0) { a = 1; }
        return { r: r, g: g, b: b, a: a };
    }
    Color.rgba = rgba;
    function hsla(h, s, l, a) {
        if (a === void 0) { a = 1; }
        return { h: h, s: s, l: l, a: a };
    }
    Color.hsla = hsla;
    Color.white = rgba(255, 255, 255, 1);
    Color.black = rgba(0, 0, 0, 1);
    function transparent(v, f) {
        return { v: v, f: f, kind: 'transparent' };
    }
    Color.transparent = transparent;
    function lighten(v, f) {
        return { v: v, f: f, kind: 'lighten' };
    }
    Color.lighten = lighten;
    function darken(v, f) {
        return { v: v, f: f, kind: 'darken' };
    }
    Color.darken = darken;
})(Color = exports.Color || (exports.Color = {}));
/**
 * It should be implemented by an extension, e.g. by the monaco extension.
 */
var ColorRegistry = /** @class */ (function () {
    function ColorRegistry() {
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
    }
    ColorRegistry.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    ColorRegistry.prototype.getColors = function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); };
    ColorRegistry.prototype.getCurrentCssVariable = function (id) {
        var value = this.getCurrentColor(id);
        if (!value) {
            return undefined;
        }
        var name = this.toCssVariableName(id);
        return { name: name, value: value };
    };
    ColorRegistry.prototype.toCssVariableName = function (id, prefix) {
        if (prefix === void 0) { prefix = 'theia'; }
        return "--" + prefix + "-" + id.replace(/\./g, '-');
    };
    ColorRegistry.prototype.getCurrentColor = function (id) {
        return undefined;
    };
    ColorRegistry.prototype.register = function () {
        var _this = this;
        var definitions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            definitions[_i] = arguments[_i];
        }
        var result = new (disposable_1.DisposableCollection.bind.apply(disposable_1.DisposableCollection, __spread([void 0], definitions.map(function (definition) { return _this.doRegister(definition); }))))();
        this.fireDidChange();
        return result;
    };
    ColorRegistry.prototype.doRegister = function (definition) {
        return disposable_1.Disposable.NULL;
    };
    ColorRegistry = __decorate([
        inversify_1.injectable()
    ], ColorRegistry);
    return ColorRegistry;
}());
exports.ColorRegistry = ColorRegistry;
//# sourceMappingURL=color-registry.js.map
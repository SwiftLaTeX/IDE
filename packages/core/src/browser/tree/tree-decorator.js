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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("../../common");
var widget_decoration_1 = require("../widget-decoration");
/**
 * Decorator service which emits events from all known tree decorators.
 * Keys are the unique tree node IDs and the values
 * are the decoration data collected from all the decorators known by this service.
 */
exports.TreeDecoratorService = Symbol('TreeDecoratorService');
/**
 * The default tree decorator service. Does nothing at all. One has to rebind to a concrete implementation
 * if decorators have to be supported in the tree widget.
 */
var NoopTreeDecoratorService = /** @class */ (function () {
    function NoopTreeDecoratorService() {
        this.emitter = new common_1.Emitter();
        this.onDidChangeDecorations = this.emitter.event;
    }
    NoopTreeDecoratorService.prototype.dispose = function () {
        this.emitter.dispose();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NoopTreeDecoratorService.prototype.getDecorations = function () {
        return new Map();
    };
    NoopTreeDecoratorService.prototype.deflateDecorators = function () {
        return {};
    };
    NoopTreeDecoratorService.prototype.inflateDecorators = function () {
        return new Map();
    };
    NoopTreeDecoratorService = __decorate([
        inversify_1.injectable()
    ], NoopTreeDecoratorService);
    return NoopTreeDecoratorService;
}());
exports.NoopTreeDecoratorService = NoopTreeDecoratorService;
/**
 * Abstract decorator service implementation which emits events from all known tree decorators and caches the current state.
 */
var AbstractTreeDecoratorService = /** @class */ (function () {
    function AbstractTreeDecoratorService(decorators) {
        var _this = this;
        this.decorators = decorators;
        this.onDidChangeDecorationsEmitter = new common_1.Emitter();
        this.onDidChangeDecorations = this.onDidChangeDecorationsEmitter.event;
        this.toDispose = new common_1.DisposableCollection();
        this.toDispose.push(this.onDidChangeDecorationsEmitter);
        this.toDispose.pushAll(this.decorators.map(function (decorator) {
            return decorator.onDidChangeDecorations(function (data) {
                return _this.onDidChangeDecorationsEmitter.fire(undefined);
            });
        }));
    }
    AbstractTreeDecoratorService.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    AbstractTreeDecoratorService.prototype.getDecorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            var changes, _a, _b, decorator, _c, _d, _e, id, data, e_1_1, e_2_1;
            var e_2, _f, e_1, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        changes = new Map();
                        _h.label = 1;
                    case 1:
                        _h.trys.push([1, 12, 13, 14]);
                        _a = __values(this.decorators), _b = _a.next();
                        _h.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 11];
                        decorator = _b.value;
                        _h.label = 3;
                    case 3:
                        _h.trys.push([3, 8, 9, 10]);
                        e_1 = void 0;
                        return [4 /*yield*/, decorator.decorations(tree)];
                    case 4:
                        _c = (__values.apply(void 0, [(_h.sent()).entries()])), _d = _c.next();
                        _h.label = 5;
                    case 5:
                        if (!!_d.done) return [3 /*break*/, 7];
                        _e = __read(_d.value, 2), id = _e[0], data = _e[1];
                        if (changes.has(id)) {
                            changes.get(id).push(data);
                        }
                        else {
                            changes.set(id, [data]);
                        }
                        _h.label = 6;
                    case 6:
                        _d = _c.next();
                        return [3 /*break*/, 5];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _h.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_d && !_d.done && (_g = _c.return)) _g.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_2_1 = _h.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, changes];
                }
            });
        });
    };
    AbstractTreeDecoratorService.prototype.deflateDecorators = function (decorations) {
        var e_3, _a;
        // eslint-disable-next-line no-null/no-null
        var state = Object.create(null);
        try {
            for (var decorations_1 = __values(decorations), decorations_1_1 = decorations_1.next(); !decorations_1_1.done; decorations_1_1 = decorations_1.next()) {
                var _b = __read(decorations_1_1.value, 2), id = _b[0], data = _b[1];
                state[id] = data;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (decorations_1_1 && !decorations_1_1.done && (_a = decorations_1.return)) _a.call(decorations_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return state;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AbstractTreeDecoratorService.prototype.inflateDecorators = function (state) {
        var e_4, _a;
        var decorators = new Map();
        try {
            for (var _b = __values(Object.keys(state)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                decorators.set(id, state[id]);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return decorators;
    };
    AbstractTreeDecoratorService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Array])
    ], AbstractTreeDecoratorService);
    return AbstractTreeDecoratorService;
}());
exports.AbstractTreeDecoratorService = AbstractTreeDecoratorService;
/**
 * @deprecated import from `@theia/core/lib/browser/widget-decoration` instead.
 */
exports.TreeDecoration = widget_decoration_1.WidgetDecoration;
var DecoratedTreeNode;
(function (DecoratedTreeNode) {
    /**
     * Type-guard for decorated tree nodes.
     */
    function is(node) {
        return !!node && 'decorationData' in node;
    }
    DecoratedTreeNode.is = is;
})(DecoratedTreeNode = exports.DecoratedTreeNode || (exports.DecoratedTreeNode = {}));
//# sourceMappingURL=tree-decorator.js.map
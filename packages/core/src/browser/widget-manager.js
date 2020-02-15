"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var widgets_1 = require("@phosphor/widgets");
var common_1 = require("../common");
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.WidgetFactory = Symbol('WidgetFactory');
/**
 * Creates and manages widgets.
 */
var WidgetManager = /** @class */ (function () {
    function WidgetManager() {
        this.widgets = new Map();
        this.widgetPromises = new Map();
        this.pendingWidgetPromises = new Map();
        this.onDidCreateWidgetEmitter = new common_1.Emitter();
        this.onDidCreateWidget = this.onDidCreateWidgetEmitter.event;
    }
    /**
     * Get the list of widgets created for the given factory id.
     * @param factoryId the widget factory id.
     *
     * @returns the list of widgets created for the given factory id.
     */
    WidgetManager.prototype.getWidgets = function (factoryId) {
        var e_1, _a;
        var result = [];
        try {
            for (var _b = __values(this.widgets.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], widget = _d[1];
                if (this.fromKey(key).factoryId === factoryId) {
                    result.push(widget);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    /**
     * Try and get the widget.
     *
     * @returns the widget if available, else `undefined`.
     */
    WidgetManager.prototype.tryGetWidget = function (factoryId, options) {
        var key = this.toKey({ factoryId: factoryId, options: options });
        var existing = this.widgetPromises.get(key);
        if (existing instanceof widgets_1.Widget) {
            return existing;
        }
        return undefined;
    };
    /**
     * Get the widget for the given description.
     *
     * @returns a promise resolving to the widget if available, else `undefined.
     */
    WidgetManager.prototype.getWidget = function (factoryId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var key, pendingWidget, widget, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        key = this.toKey({ factoryId: factoryId, options: options });
                        pendingWidget = this.doGetWidget(key);
                        _a = pendingWidget;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, pendingWidget];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        widget = _a;
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    WidgetManager.prototype.doGetWidget = function (key) {
        var pendingWidget = this.widgetPromises.get(key) || this.pendingWidgetPromises.get(key);
        if (pendingWidget) {
            return pendingWidget;
        }
        return undefined;
    };
    /**
     * Creates or returns the widget for the given description.
     */
    WidgetManager.prototype.getOrCreateWidget = function (factoryId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var key, existingWidget, factory, widgetPromise, widget;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = this.toKey({ factoryId: factoryId, options: options });
                        existingWidget = this.doGetWidget(key);
                        if (existingWidget) {
                            return [2 /*return*/, existingWidget];
                        }
                        factory = this.factories.get(factoryId);
                        if (!factory) {
                            throw Error("No widget factory '" + factoryId + "' has been registered.");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        widgetPromise = factory.createWidget(options);
                        this.pendingWidgetPromises.set(key, widgetPromise);
                        return [4 /*yield*/, widgetPromise];
                    case 2:
                        widget = _a.sent();
                        this.widgetPromises.set(key, widgetPromise);
                        this.widgets.set(key, widget);
                        widget.disposed.connect(function () {
                            _this.widgets.delete(key);
                            _this.widgetPromises.delete(key);
                        });
                        this.onDidCreateWidgetEmitter.fire({
                            factoryId: factoryId, widget: widget
                        });
                        return [2 /*return*/, widget];
                    case 3:
                        this.pendingWidgetPromises.delete(key);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the widget construction options.
     * @param widget the widget.
     *
     * @returns the widget construction options if the widget was created through the manager, else `undefined`.
     */
    WidgetManager.prototype.getDescription = function (widget) {
        var e_2, _a;
        try {
            for (var _b = __values(this.widgets.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], aWidget = _d[1];
                if (aWidget === widget) {
                    return this.fromKey(key);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
    };
    /**
     * Convert the widget construction options to string.
     * @param options the widget construction options.
     *
     * @returns the widget construction options represented as a string.
     */
    WidgetManager.prototype.toKey = function (options) {
        return JSON.stringify(options);
    };
    /**
     * Convert the key into the widget construction options object.
     * @param key the key.
     *
     * @returns the widget construction options object.
     */
    WidgetManager.prototype.fromKey = function (key) {
        return JSON.parse(key);
    };
    Object.defineProperty(WidgetManager.prototype, "factories", {
        get: function () {
            var e_3, _a;
            if (!this._cachedFactories) {
                this._cachedFactories = new Map();
                try {
                    for (var _b = __values(this.factoryProvider.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var factory = _c.value;
                        if (factory.id) {
                            this._cachedFactories.set(factory.id, factory);
                        }
                        else {
                            this.logger.error('Invalid ID for factory: ' + factory + ". ID was: '" + factory.id + "'.");
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            return this._cachedFactories;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(exports.WidgetFactory),
        __metadata("design:type", Object)
    ], WidgetManager.prototype, "factoryProvider", void 0);
    __decorate([
        inversify_1.inject(common_1.ILogger),
        __metadata("design:type", Object)
    ], WidgetManager.prototype, "logger", void 0);
    WidgetManager = __decorate([
        inversify_1.injectable()
    ], WidgetManager);
    return WidgetManager;
}());
exports.WidgetManager = WidgetManager;
//# sourceMappingURL=widget-manager.js.map
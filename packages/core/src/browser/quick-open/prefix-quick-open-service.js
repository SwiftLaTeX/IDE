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
var inversify_1 = require("inversify");
var quick_open_model_1 = require("./quick-open-model");
var quick_open_service_1 = require("./quick-open-service");
var disposable_1 = require("../../common/disposable");
var logger_1 = require("../../common/logger");
var quick_title_bar_1 = require("./quick-title-bar");
exports.QuickOpenContribution = Symbol('QuickOpenContribution');
var QuickOpenHandlerRegistry = /** @class */ (function () {
    function QuickOpenHandlerRegistry() {
        this.handlers = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
    }
    /**
     * Register the given handler.
     * Do nothing if a handler is already registered.
     * @param handler the handler to register
     * @param defaultHandler default means that a handler is used when the user's
     * input in the quick open widget doesn't match any of known prefixes
     */
    QuickOpenHandlerRegistry.prototype.registerHandler = function (handler, defaultHandler) {
        var _this = this;
        if (defaultHandler === void 0) { defaultHandler = false; }
        if (this.handlers.has(handler.prefix)) {
            this.logger.warn("A handler with prefix " + handler.prefix + " is already registered.");
            return disposable_1.Disposable.NULL;
        }
        this.handlers.set(handler.prefix, handler);
        var disposable = {
            dispose: function () { return _this.handlers.delete(handler.prefix); }
        };
        this.toDispose.push(disposable);
        if (defaultHandler) {
            this.defaultHandler = handler;
        }
        return disposable;
    };
    QuickOpenHandlerRegistry.prototype.getDefaultHandler = function () {
        return this.defaultHandler;
    };
    QuickOpenHandlerRegistry.prototype.isDefaultHandler = function (handler) {
        return handler === this.getDefaultHandler();
    };
    /**
     * Return all registered handlers.
     */
    QuickOpenHandlerRegistry.prototype.getHandlers = function () {
        return __spread(this.handlers.values());
    };
    /**
     * Return a handler that matches the given text or the default handler if none.
     */
    QuickOpenHandlerRegistry.prototype.getHandlerOrDefault = function (text) {
        var e_1, _a;
        try {
            for (var _b = __values(this.handlers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                if (text.startsWith(handler.prefix)) {
                    return handler;
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
        return this.getDefaultHandler();
    };
    QuickOpenHandlerRegistry.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], QuickOpenHandlerRegistry.prototype, "logger", void 0);
    QuickOpenHandlerRegistry = __decorate([
        inversify_1.injectable()
    ], QuickOpenHandlerRegistry);
    return QuickOpenHandlerRegistry;
}());
exports.QuickOpenHandlerRegistry = QuickOpenHandlerRegistry;
/** Prefix-based quick open service. */
var PrefixQuickOpenService = /** @class */ (function () {
    function PrefixQuickOpenService() {
        this.toDisposeCurrent = new disposable_1.DisposableCollection();
    }
    /**
     * Opens a quick open widget with the model that handles the known prefixes.
     * @param prefix string that may contain a prefix of some of the known quick open handlers.
     * A default quick open handler will be called if the provided string doesn't match any.
     * An empty quick open will be opened if there's no default handler registered.
     */
    PrefixQuickOpenService.prototype.open = function (prefix) {
        var handler = this.handlers.getHandlerOrDefault(prefix);
        this.setCurrentHandler(prefix, handler);
    };
    PrefixQuickOpenService.prototype.setCurrentHandler = function (prefix, handler) {
        return __awaiter(this, void 0, void 0, function () {
            var optionsPrefix, skipPrefix, handlerOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (handler !== this.currentHandler) {
                            this.toDisposeCurrent.dispose();
                            this.currentHandler = handler;
                            this.toDisposeCurrent.push(disposable_1.Disposable.create(function () {
                                var closingHandler = handler && handler.getOptions().onClose;
                                if (closingHandler) {
                                    closingHandler(true);
                                }
                            }));
                        }
                        if (!handler) {
                            this.doOpen();
                            return [2 /*return*/];
                        }
                        if (!handler.init) return [3 /*break*/, 2];
                        return [4 /*yield*/, handler.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        optionsPrefix = prefix;
                        if (this.handlers.isDefaultHandler(handler) && prefix.startsWith(handler.prefix)) {
                            optionsPrefix = prefix.substr(handler.prefix.length);
                        }
                        skipPrefix = this.handlers.isDefaultHandler(handler) ? 0 : handler.prefix.length;
                        handlerOptions = handler.getOptions();
                        this.doOpen(__assign({ prefix: optionsPrefix, placeholder: "Type '?' to get help on the actions you can take from here", skipPrefix: skipPrefix }, handlerOptions));
                        return [2 /*return*/];
                }
            });
        });
    };
    PrefixQuickOpenService.prototype.doOpen = function (options) {
        var _this = this;
        if (this.quickTitleBar.isAttached) {
            this.quickTitleBar.hide();
        }
        this.quickOpenService.open({
            onType: function (lookFor, acceptor) { return _this.onType(lookFor, acceptor); }
        }, options);
    };
    PrefixQuickOpenService.prototype.onType = function (lookFor, acceptor) {
        var handler = this.handlers.getHandlerOrDefault(lookFor);
        if (handler === undefined) {
            var items = [];
            items.push(new quick_open_model_1.QuickOpenItem({
                label: lookFor.length === 0 ? 'No default handler is registered' : "No handlers matches the prefix " + lookFor + " and no default handler is registered."
            }));
            acceptor(items);
        }
        else if (handler !== this.currentHandler) {
            this.setCurrentHandler(lookFor, handler);
        }
        else {
            var handlerModel = handler.getModel();
            var searchValue = this.handlers.isDefaultHandler(handler) ? lookFor : lookFor.substr(handler.prefix.length);
            handlerModel.onType(searchValue, function (items, actionProvider) { return acceptor(items, actionProvider); });
        }
    };
    __decorate([
        inversify_1.inject(QuickOpenHandlerRegistry),
        __metadata("design:type", QuickOpenHandlerRegistry)
    ], PrefixQuickOpenService.prototype, "handlers", void 0);
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], PrefixQuickOpenService.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(quick_title_bar_1.QuickTitleBar),
        __metadata("design:type", quick_title_bar_1.QuickTitleBar)
    ], PrefixQuickOpenService.prototype, "quickTitleBar", void 0);
    PrefixQuickOpenService = __decorate([
        inversify_1.injectable()
    ], PrefixQuickOpenService);
    return PrefixQuickOpenService;
}());
exports.PrefixQuickOpenService = PrefixQuickOpenService;
var HelpQuickOpenHandler = /** @class */ (function () {
    function HelpQuickOpenHandler() {
        this.prefix = '?';
        this.description = '';
    }
    HelpQuickOpenHandler.prototype.init = function () {
        var _this = this;
        this.items = this.handlers.getHandlers()
            .filter(function (handler) { return handler.prefix !== _this.prefix; })
            .sort(function (a, b) { return _this.comparePrefix(a.prefix, b.prefix); })
            .map(function (handler) { return new quick_open_model_1.QuickOpenItem({
            label: handler.prefix,
            description: handler.description,
            run: function (mode) {
                if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                    return false;
                }
                _this.quickOpenService.open(handler.prefix);
                return false;
            }
        }); });
        if (this.items.length === 0) {
            this.items.push(new quick_open_model_1.QuickOpenItem({
                label: 'No handlers registered',
                run: function () { return false; }
            }));
        }
    };
    HelpQuickOpenHandler.prototype.getModel = function () {
        var _this = this;
        return {
            onType: function (lookFor, acceptor) {
                acceptor(_this.items);
            }
        };
    };
    HelpQuickOpenHandler.prototype.getOptions = function () {
        return {};
    };
    HelpQuickOpenHandler.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this);
    };
    /**
     * Compare two prefixes.
     *
     * @param a {string} first prefix.
     * @param b {string} second prefix.
     */
    HelpQuickOpenHandler.prototype.comparePrefix = function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    };
    __decorate([
        inversify_1.inject(QuickOpenHandlerRegistry),
        __metadata("design:type", QuickOpenHandlerRegistry)
    ], HelpQuickOpenHandler.prototype, "handlers", void 0);
    __decorate([
        inversify_1.inject(PrefixQuickOpenService),
        __metadata("design:type", PrefixQuickOpenService)
    ], HelpQuickOpenHandler.prototype, "quickOpenService", void 0);
    HelpQuickOpenHandler = __decorate([
        inversify_1.injectable()
    ], HelpQuickOpenHandler);
    return HelpQuickOpenHandler;
}());
exports.HelpQuickOpenHandler = HelpQuickOpenHandler;
//# sourceMappingURL=prefix-quick-open-service.js.map
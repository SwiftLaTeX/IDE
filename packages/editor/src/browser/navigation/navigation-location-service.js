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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var logger_1 = require("@theia/core/lib/common/logger");
var opener_service_1 = require("@theia/core/lib/browser/opener-service");
var navigation_location_updater_1 = require("./navigation-location-updater");
var navigation_location_similarity_1 = require("./navigation-location-similarity");
var navigation_location_1 = require("./navigation-location");
/**
 * The navigation location service. Also, stores and manages navigation locations.
 */
var NavigationLocationService = /** @class */ (function () {
    function NavigationLocationService() {
        this.pointer = -1;
        this.stack = [];
        this.canRegister = true;
    }
    NavigationLocationService_1 = NavigationLocationService;
    /**
     * Registers the give locations into the service.
     */
    NavigationLocationService.prototype.register = function () {
        var _this = this;
        var locations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            locations[_i] = arguments[_i];
        }
        if (this.canRegister) {
            var max_1 = this.maxStackItems();
            __spread(locations).forEach(function (location) {
                if (navigation_location_1.ContentChangeLocation.is(location)) {
                    _this._lastEditLocation = location;
                }
                var current = _this.currentLocation();
                _this.debug("Registering new location: " + navigation_location_1.NavigationLocation.toString(location) + ".");
                if (!_this.isSimilar(current, location)) {
                    _this.debug('Before location registration.');
                    _this.debug(_this.stackDump);
                    // Just like in VSCode; if we are not at the end of stack, we remove anything after.
                    if (_this.stack.length > _this.pointer + 1) {
                        _this.debug("Discarding all locations after " + _this.pointer + ".");
                        _this.stack = _this.stack.slice(0, _this.pointer + 1);
                    }
                    _this.stack.push(location);
                    _this.pointer = _this.stack.length - 1;
                    if (_this.stack.length > max_1) {
                        _this.debug('Trimming exceeding locations.');
                        _this.stack.shift();
                        _this.pointer--;
                    }
                    _this.debug('Updating preceding navigation locations.');
                    for (var i = _this.stack.length - 1; i >= 0; i--) {
                        var candidate = _this.stack[i];
                        var update = _this.updater.affects(candidate, location);
                        if (update === undefined) {
                            _this.debug("Erasing obsolete location: " + navigation_location_1.NavigationLocation.toString(candidate) + ".");
                            _this.stack.splice(i, 1);
                            _this.pointer--;
                        }
                        else if (typeof update !== 'boolean') {
                            _this.debug("Updating location at index: " + i + " => " + navigation_location_1.NavigationLocation.toString(candidate) + ".");
                            _this.stack[i] = update;
                        }
                    }
                    _this.debug('After location registration.');
                    _this.debug(_this.stackDump);
                }
                else {
                    if (current) {
                        _this.debug("The new location " + navigation_location_1.NavigationLocation.toString(location) + " is similar to the current one: " + navigation_location_1.NavigationLocation.toString(current) + ". Aborting.");
                    }
                }
            });
        }
    };
    /**
     * Navigates one back. Returns with the previous location, or `undefined` if it could not navigate back.
     */
    NavigationLocationService.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('Navigating back.');
                        if (!this.canGoBack()) return [3 /*break*/, 2];
                        this.pointer--;
                        return [4 /*yield*/, this.reveal()];
                    case 1:
                        _a.sent();
                        this.debug(this.stackDump);
                        return [2 /*return*/, this.currentLocation()];
                    case 2:
                        this.debug('Cannot navigate back.');
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Navigates one forward. Returns with the next location, or `undefined` if it could not go forward.
     */
    NavigationLocationService.prototype.forward = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('Navigating forward.');
                        if (!this.canGoForward()) return [3 /*break*/, 2];
                        this.pointer++;
                        return [4 /*yield*/, this.reveal()];
                    case 1:
                        _a.sent();
                        this.debug(this.stackDump);
                        return [2 /*return*/, this.currentLocation()];
                    case 2:
                        this.debug('Cannot navigate forward.');
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Checks whether the service can go [`back`](#back).
     */
    NavigationLocationService.prototype.canGoBack = function () {
        return this.pointer >= 1;
    };
    /**
     * Checks whether the service can go [`forward`](#forward).
     */
    NavigationLocationService.prototype.canGoForward = function () {
        return this.pointer >= 0 && this.pointer !== this.stack.length - 1;
    };
    /**
     * Returns with all known navigation locations in chronological order.
     */
    NavigationLocationService.prototype.locations = function () {
        return this.stack;
    };
    /**
     * Returns with the current location.
     */
    NavigationLocationService.prototype.currentLocation = function () {
        return this.stack[this.pointer];
    };
    /**
     * Returns with the location of the most recent edition if any. If there were no modifications,
     * returns `undefined`.
     */
    NavigationLocationService.prototype.lastEditLocation = function () {
        return this._lastEditLocation;
    };
    /**
     * Clears the navigation history.
     */
    NavigationLocationService.prototype.clearHistory = function () {
        this.stack = [];
        this.pointer = -1;
        this._lastEditLocation = undefined;
    };
    /**
     * Reveals the location argument. If not given, reveals the `current location`. Does nothing, if the argument is `undefined`.
     */
    NavigationLocationService.prototype.reveal = function (location) {
        if (location === void 0) { location = this.currentLocation(); }
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (location === undefined) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.canRegister = false;
                        uri = location.uri;
                        options = this.toOpenerOptions(location);
                        return [4 /*yield*/, opener_service_1.open(this.openerService, uri, options)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        this.logger.error("Error occurred while revealing location: " + navigation_location_1.NavigationLocation.toString(location) + ".", e_1);
                        return [3 /*break*/, 5];
                    case 4:
                        this.canRegister = true;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * `true` if the two locations are similar.
     */
    NavigationLocationService.prototype.isSimilar = function (left, right) {
        return this.similarity.similar(left, right);
    };
    /**
     * Returns with the number of navigation locations that the application can handle and manage.
     * When the number of locations exceeds this number, old locations will be erased.
     */
    NavigationLocationService.prototype.maxStackItems = function () {
        return NavigationLocationService_1.MAX_STACK_ITEMS;
    };
    /**
     * Returns with the opener option for the location argument.
     */
    NavigationLocationService.prototype.toOpenerOptions = function (location) {
        var start = navigation_location_1.NavigationLocation.range(location).start;
        // Here, the `start` and represents the previous state that has been updated with the `text`.
        // So we calculate the range by appending the `text` length to the `start`.
        if (navigation_location_1.ContentChangeLocation.is(location)) {
            start = __assign(__assign({}, start), { character: start.character + location.context.text.length });
        }
        return {
            selection: navigation_location_1.Range.create(start, start)
        };
    };
    NavigationLocationService.prototype.debug = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.logger.trace(typeof message === 'string' ? message : message());
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(NavigationLocationService.prototype, "stackDump", {
        get: function () {
            return "----- Navigation location stack [" + new Date() + "] -----\nPointer: " + this.pointer + "\n" + this.stack.map(function (location, i) { return i + ": " + JSON.stringify(navigation_location_1.NavigationLocation.toObject(location)); }).join('\n') + "\n----- o -----";
        },
        enumerable: true,
        configurable: true
    });
    var NavigationLocationService_1;
    NavigationLocationService.MAX_STACK_ITEMS = 30;
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], NavigationLocationService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], NavigationLocationService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(navigation_location_updater_1.NavigationLocationUpdater),
        __metadata("design:type", navigation_location_updater_1.NavigationLocationUpdater)
    ], NavigationLocationService.prototype, "updater", void 0);
    __decorate([
        inversify_1.inject(navigation_location_similarity_1.NavigationLocationSimilarity),
        __metadata("design:type", navigation_location_similarity_1.NavigationLocationSimilarity)
    ], NavigationLocationService.prototype, "similarity", void 0);
    NavigationLocationService = NavigationLocationService_1 = __decorate([
        inversify_1.injectable()
    ], NavigationLocationService);
    return NavigationLocationService;
}());
exports.NavigationLocationService = NavigationLocationService;
//# sourceMappingURL=navigation-location-service.js.map
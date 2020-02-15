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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var minimatch_1 = require("minimatch");
var event_1 = require("@theia/core/lib/common/event");
var filesystem_preferences_1 = require("@theia/filesystem/lib/browser/filesystem-preferences");
var navigator_preferences_1 = require("./navigator-preferences");
/**
 * Filter for omitting elements from the navigator. For more details on the exclusion patterns,
 * one should check either the manual with `man 5 gitignore` or just [here](https://git-scm.com/docs/gitignore).
 */
var FileNavigatorFilter = /** @class */ (function () {
    function FileNavigatorFilter(preferences) {
        this.preferences = preferences;
        this.emitter = new event_1.Emitter();
    }
    FileNavigatorFilter.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.filterPredicate = this.createFilterPredicate(this.filesPreferences['files.exclude']);
                this.filesPreferences.onPreferenceChanged(function (event) { return _this.onFilesPreferenceChanged(event); });
                this.preferences.onPreferenceChanged(function (event) { return _this.onPreferenceChanged(event); });
                return [2 /*return*/];
            });
        });
    };
    FileNavigatorFilter.prototype.filter = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, items];
                    case 1: return [2 /*return*/, (_a.sent()).filter(function (item) { return _this.filterItem(item); })];
                }
            });
        });
    };
    Object.defineProperty(FileNavigatorFilter.prototype, "onFilterChanged", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    FileNavigatorFilter.prototype.filterItem = function (item) {
        return this.filterPredicate.filter(item);
    };
    FileNavigatorFilter.prototype.fireFilterChanged = function () {
        this.emitter.fire(undefined);
    };
    FileNavigatorFilter.prototype.onFilesPreferenceChanged = function (event) {
        var preferenceName = event.preferenceName, newValue = event.newValue;
        if (preferenceName === 'files.exclude') {
            this.filterPredicate = this.createFilterPredicate(newValue || {});
            this.fireFilterChanged();
        }
    };
    FileNavigatorFilter.prototype.onPreferenceChanged = function (event) {
    };
    FileNavigatorFilter.prototype.createFilterPredicate = function (exclusions) {
        return new FileNavigatorFilterPredicate(this.interceptExclusions(exclusions));
    };
    FileNavigatorFilter.prototype.toggleHiddenFiles = function () {
        this.showHiddenFiles = !this.showHiddenFiles;
        var filesExcludes = this.filesPreferences['files.exclude'];
        this.filterPredicate = this.createFilterPredicate(filesExcludes || {});
        this.fireFilterChanged();
    };
    FileNavigatorFilter.prototype.interceptExclusions = function (exclusions) {
        return __assign(__assign({}, exclusions), { '**/.*': this.showHiddenFiles });
    };
    __decorate([
        inversify_1.inject(filesystem_preferences_1.FileSystemPreferences),
        __metadata("design:type", Object)
    ], FileNavigatorFilter.prototype, "filesPreferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FileNavigatorFilter.prototype, "init", null);
    FileNavigatorFilter = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(navigator_preferences_1.FileNavigatorPreferences)),
        __metadata("design:paramtypes", [Object])
    ], FileNavigatorFilter);
    return FileNavigatorFilter;
}());
exports.FileNavigatorFilter = FileNavigatorFilter;
(function (FileNavigatorFilter) {
    var Predicate;
    (function (Predicate) {
        /**
         * Wraps a bunch of predicates and returns with a new one that evaluates to `true` if
         * each of the wrapped predicates evaluates to `true`. Otherwise, `false`.
         */
        function and() {
            var predicates = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                predicates[_i] = arguments[_i];
            }
            return {
                filter: function (id) { return predicates.every(function (predicate) { return predicate.filter(id); }); }
            };
        }
        Predicate.and = and;
    })(Predicate = FileNavigatorFilter.Predicate || (FileNavigatorFilter.Predicate = {}));
})(FileNavigatorFilter = exports.FileNavigatorFilter || (exports.FileNavigatorFilter = {}));
exports.FileNavigatorFilter = FileNavigatorFilter;
/**
 * Concrete filter navigator filter predicate that is decoupled from the preferences.
 */
var FileNavigatorFilterPredicate = /** @class */ (function () {
    function FileNavigatorFilterPredicate(exclusions) {
        var _a;
        var _this = this;
        var patterns = Object.keys(exclusions).map(function (pattern) { return ({ pattern: pattern, enabled: exclusions[pattern] }); }).filter(function (object) { return object.enabled; }).map(function (object) { return object.pattern; });
        this.delegate = (_a = FileNavigatorFilter.Predicate).and.apply(_a, __spread(patterns.map(function (pattern) { return _this.createDelegate(pattern); })));
    }
    FileNavigatorFilterPredicate.prototype.filter = function (item) {
        return this.delegate.filter(item);
    };
    FileNavigatorFilterPredicate.prototype.createDelegate = function (pattern) {
        var delegate = new minimatch_1.Minimatch(pattern, { matchBase: true });
        return {
            filter: function (item) { return !delegate.match(item.id); }
        };
    };
    return FileNavigatorFilterPredicate;
}());
exports.FileNavigatorFilterPredicate = FileNavigatorFilterPredicate;
//# sourceMappingURL=navigator-filter.js.map
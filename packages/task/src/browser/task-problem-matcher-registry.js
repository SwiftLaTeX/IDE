"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var disposable_1 = require("@theia/core/lib/common/disposable");
var common_2 = require("../common");
var task_problem_pattern_registry_1 = require("./task-problem-pattern-registry");
var severity_1 = require("@theia/core/lib/common/severity");
var ProblemMatcherRegistry = /** @class */ (function () {
    function ProblemMatcherRegistry() {
        this.matchers = new Map();
        this.onDidChangeProblemMatcherEmitter = new common_1.Emitter();
    }
    Object.defineProperty(ProblemMatcherRegistry.prototype, "onDidChangeProblemMatcher", {
        get: function () {
            return this.onDidChangeProblemMatcherEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    ProblemMatcherRegistry.prototype.init = function () {
        var _this = this;
        this.problemPatternRegistry.onReady().then(function () {
            _this.fillDefaults();
            _this.readyPromise = new Promise(function (res, rej) { return res(undefined); });
            _this.onDidChangeProblemMatcherEmitter.fire(undefined);
        });
    };
    ProblemMatcherRegistry.prototype.onReady = function () {
        return this.readyPromise;
    };
    /**
     * Add a problem matcher to the registry.
     *
     * @param definition the problem matcher to be added.
     */
    ProblemMatcherRegistry.prototype.register = function (matcher) {
        var _this = this;
        if (!matcher.name) {
            console.error('Only named Problem Matchers can be registered.');
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () {
            /* mark as not disposed */
            _this.onDidChangeProblemMatcherEmitter.fire(undefined);
        }));
        this.doRegister(matcher, toDispose).then(function () { return _this.onDidChangeProblemMatcherEmitter.fire(undefined); });
        return toDispose;
    };
    ProblemMatcherRegistry.prototype.doRegister = function (matcher, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var problemMatcher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProblemMatcherFromContribution(matcher)];
                    case 1:
                        problemMatcher = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        toDispose.push(this.add(problemMatcher));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Finds the problem matcher from the registry by its name.
     *
     * @param name the name of the problem matcher
     * @return the problem matcher. If the task definition is not found, `undefined` is returned.
     */
    ProblemMatcherRegistry.prototype.get = function (name) {
        if (name.startsWith('$')) {
            return this.matchers.get(name.slice(1));
        }
        return this.matchers.get(name);
    };
    /**
     * Returns all registered problem matchers in the registry.
     */
    ProblemMatcherRegistry.prototype.getAll = function () {
        var e_1, _a;
        var all = [];
        try {
            for (var _b = __values(this.matchers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var matcherName = _c.value;
                all.push(this.get(matcherName));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        all.sort(function (one, other) { return one.name.localeCompare(other.name); });
        return all;
    };
    /**
     * Transforms the `ProblemMatcherContribution` to a `ProblemMatcher`
     *
     * @return the problem matcher
     */
    ProblemMatcherRegistry.prototype.getProblemMatcherFromContribution = function (matcher) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fileLocation, filePrefix, patterns, registeredPattern, problemMatcher;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getFileLocationKindAndPrefix(matcher), fileLocation = _a.fileLocation, filePrefix = _a.filePrefix;
                        patterns = [];
                        if (!matcher.pattern) return [3 /*break*/, 3];
                        if (!(typeof matcher.pattern === 'string')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.problemPatternRegistry.onReady()];
                    case 1:
                        _b.sent();
                        registeredPattern = this.problemPatternRegistry.get(matcher.pattern);
                        if (Array.isArray(registeredPattern)) {
                            patterns.push.apply(patterns, __spread(registeredPattern));
                        }
                        else if (!!registeredPattern) {
                            patterns.push(registeredPattern);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (Array.isArray(matcher.pattern)) {
                            patterns.push.apply(patterns, __spread(matcher.pattern.map(function (p) { return common_2.ProblemPattern.fromProblemPatternContribution(p); })));
                        }
                        else {
                            patterns.push(common_2.ProblemPattern.fromProblemPatternContribution(matcher.pattern));
                        }
                        _b.label = 3;
                    case 3:
                        problemMatcher = {
                            name: matcher.name,
                            label: matcher.label,
                            deprecated: matcher.deprecated,
                            owner: matcher.owner,
                            source: matcher.source,
                            applyTo: common_2.ApplyToKind.fromString(matcher.applyTo) || common_2.ApplyToKind.allDocuments,
                            fileLocation: fileLocation,
                            filePrefix: filePrefix,
                            pattern: patterns,
                            severity: severity_1.Severity.fromValue(matcher.severity),
                            watching: common_2.WatchingMatcher.fromWatchingMatcherContribution(matcher.background || matcher.watching)
                        };
                        return [2 /*return*/, problemMatcher];
                }
            });
        });
    };
    ProblemMatcherRegistry.prototype.add = function (matcher) {
        var _this = this;
        this.matchers.set(matcher.name, matcher);
        return disposable_1.Disposable.create(function () { return _this.matchers.delete(matcher.name); });
    };
    ProblemMatcherRegistry.prototype.getFileLocationKindAndPrefix = function (matcher) {
        var fileLocation = common_2.FileLocationKind.Relative;
        var filePrefix = '${workspaceFolder}';
        if (matcher.fileLocation !== undefined) {
            if (Array.isArray(matcher.fileLocation)) {
                if (matcher.fileLocation.length > 0) {
                    var locationKind = common_2.FileLocationKind.fromString(matcher.fileLocation[0]);
                    if (matcher.fileLocation.length === 1 && locationKind === common_2.FileLocationKind.Absolute) {
                        fileLocation = locationKind;
                    }
                    else if (matcher.fileLocation.length === 2 && locationKind === common_2.FileLocationKind.Relative && matcher.fileLocation[1]) {
                        fileLocation = locationKind;
                        filePrefix = matcher.fileLocation[1];
                    }
                }
            }
            else {
                var locationKind = common_2.FileLocationKind.fromString(matcher.fileLocation);
                if (locationKind) {
                    fileLocation = locationKind;
                    if (locationKind === common_2.FileLocationKind.Relative) {
                        filePrefix = '${workspaceFolder}';
                    }
                }
            }
        }
        return { fileLocation: fileLocation, filePrefix: filePrefix };
    };
    // copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
    ProblemMatcherRegistry.prototype.fillDefaults = function () {
        this.add({
            name: 'msCompile',
            label: 'Microsoft compiler problems',
            owner: 'msCompile',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('msCompile'))
        });
        this.add({
            name: 'lessCompile',
            label: 'Less problems',
            deprecated: true,
            owner: 'lessCompile',
            source: 'less',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('lessCompile')),
            severity: severity_1.Severity.Error
        });
        this.add({
            name: 'gulp-tsc',
            label: 'Gulp TSC Problems',
            owner: 'typescript',
            source: 'ts',
            applyTo: common_2.ApplyToKind.closedDocuments,
            fileLocation: common_2.FileLocationKind.Relative,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('gulp-tsc'))
        });
        this.add({
            name: 'jshint',
            label: 'JSHint problems',
            owner: 'jshint',
            source: 'jshint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('jshint'))
        });
        this.add({
            name: 'jshint-stylish',
            label: 'JSHint stylish problems',
            owner: 'jshint',
            source: 'jshint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('jshint-stylish'))
        });
        this.add({
            name: 'eslint-compact',
            label: 'ESLint compact problems',
            owner: 'eslint',
            source: 'eslint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('eslint-compact'))
        });
        this.add({
            name: 'eslint-stylish',
            label: 'ESLint stylish problems',
            owner: 'eslint',
            source: 'eslint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('eslint-stylish'))
        });
        this.add({
            name: 'go',
            label: 'Go problems',
            owner: 'go',
            source: 'go',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Relative,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('go'))
        });
    };
    __decorate([
        inversify_1.inject(task_problem_pattern_registry_1.ProblemPatternRegistry),
        __metadata("design:type", task_problem_pattern_registry_1.ProblemPatternRegistry)
    ], ProblemMatcherRegistry.prototype, "problemPatternRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProblemMatcherRegistry.prototype, "init", null);
    ProblemMatcherRegistry = __decorate([
        inversify_1.injectable()
    ], ProblemMatcherRegistry);
    return ProblemMatcherRegistry;
}());
exports.ProblemMatcherRegistry = ProblemMatcherRegistry;
//# sourceMappingURL=task-problem-matcher-registry.js.map
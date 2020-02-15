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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var task_contribution_1 = require("./task-contribution");
var task_definition_registry_1 = require("./task-definition-registry");
var uri_1 = require("@theia/core/lib/common/uri");
var ProvidedTaskConfigurations = /** @class */ (function () {
    function ProvidedTaskConfigurations() {
        /**
         * Map of source (name of extension, or path of root folder that the task config comes from) and `task config map`.
         * For the second level of inner map, the key is task label.
         * For the third level of inner map, the key is the task scope and value TaskConfiguration.
         */
        this.tasksMap = new Map();
    }
    /** returns a list of provided tasks */
    ProvidedTaskConfigurations.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var providers, providedTasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskProviderRegistry.getProviders()];
                    case 1:
                        providers = _a.sent();
                        return [4 /*yield*/, Promise.all(providers.map(function (p) { return p.provideTasks(); }))];
                    case 2:
                        providedTasks = (_a.sent())
                            .reduce(function (acc, taskArray) { return acc.concat(taskArray); }, []);
                        this.cacheTasks(providedTasks);
                        return [2 /*return*/, providedTasks];
                }
            });
        });
    };
    /** returns the task configuration for a given source and label or undefined if none */
    ProvidedTaskConfigurations.prototype.getTask = function (source, taskLabel, scope) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        task = this.getCachedTask(source, taskLabel, scope);
                        if (!task) return [3 /*break*/, 1];
                        return [2 /*return*/, task];
                    case 1: return [4 /*yield*/, this.getTasks()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.getCachedTask(source, taskLabel, scope)];
                }
            });
        });
    };
    /**
     * Finds the detected task for the given task customization.
     * The detected task is considered as a "match" to the task customization if it has all the `required` properties.
     * In case that more than one customization is found, return the one that has the biggest number of matched properties.
     *
     * @param customization the task customization
     * @return the detected task for the given task customization. If the task customization is not found, `undefined` is returned.
     */
    ProvidedTaskConfigurations.prototype.getTaskToCustomize = function (customization, rootFolderPath) {
        return __awaiter(this, void 0, void 0, function () {
            var definition, matchedTasks, highest, tasks, _loop_1, tasks_1, tasks_1_1, task, rootFolderUri, matchedTask;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        definition = this.taskDefinitionRegistry.getDefinition(customization);
                        if (!definition) {
                            return [2 /*return*/, undefined];
                        }
                        matchedTasks = [];
                        highest = -1;
                        return [4 /*yield*/, this.getTasks()];
                    case 1:
                        tasks = _b.sent();
                        _loop_1 = function (task) {
                            var score = 0;
                            if (!definition.properties.required.every(function (requiredProp) { return customization[requiredProp] !== undefined; })) {
                                return "continue";
                            }
                            score += definition.properties.required.length; // number of required properties
                            var requiredProps = new Set(definition.properties.required);
                            // number of optional properties
                            score += definition.properties.all.filter(function (p) { return !requiredProps.has(p) && customization[p] !== undefined; }).length;
                            if (score >= highest) {
                                if (score > highest) {
                                    highest = score;
                                    matchedTasks.length = 0;
                                }
                                matchedTasks.push(task);
                            }
                        };
                        try {
                            for (tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                task = tasks_1_1.value;
                                _loop_1(task);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        rootFolderUri = new uri_1.default(rootFolderPath).toString();
                        matchedTask = matchedTasks.filter(function (t) {
                            return rootFolderUri === t._scope && definition.properties.all.every(function (p) { return t[p] === customization[p]; });
                        })[0];
                        return [2 /*return*/, matchedTask];
                }
            });
        });
    };
    ProvidedTaskConfigurations.prototype.getCachedTask = function (source, taskLabel, scope) {
        var labelConfigMap = this.tasksMap.get(source);
        if (labelConfigMap) {
            var scopeConfigMap = labelConfigMap.get(taskLabel);
            if (scopeConfigMap) {
                return scopeConfigMap.get(scope);
            }
        }
    };
    ProvidedTaskConfigurations.prototype.cacheTasks = function (tasks) {
        var e_2, _a;
        try {
            for (var tasks_2 = __values(tasks), tasks_2_1 = tasks_2.next(); !tasks_2_1.done; tasks_2_1 = tasks_2.next()) {
                var task = tasks_2_1.value;
                var label = task.label;
                var source = task._source;
                var scope = task._scope;
                if (this.tasksMap.has(source)) {
                    var labelConfigMap = this.tasksMap.get(source);
                    if (labelConfigMap.has(label)) {
                        labelConfigMap.get(label).set(scope, task);
                    }
                    else {
                        var newScopeConfigMap = new Map();
                        newScopeConfigMap.set(scope, task);
                        labelConfigMap.set(label, newScopeConfigMap);
                    }
                }
                else {
                    var newLabelConfigMap = new Map();
                    var newScopeConfigMap = new Map();
                    newScopeConfigMap.set(scope, task);
                    newLabelConfigMap.set(label, newScopeConfigMap);
                    this.tasksMap.set(source, newLabelConfigMap);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (tasks_2_1 && !tasks_2_1.done && (_a = tasks_2.return)) _a.call(tasks_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], ProvidedTaskConfigurations.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], ProvidedTaskConfigurations.prototype, "taskDefinitionRegistry", void 0);
    ProvidedTaskConfigurations = __decorate([
        inversify_1.injectable()
    ], ProvidedTaskConfigurations);
    return ProvidedTaskConfigurations;
}());
exports.ProvidedTaskConfigurations = ProvidedTaskConfigurations;
//# sourceMappingURL=provided-task-configurations.js.map
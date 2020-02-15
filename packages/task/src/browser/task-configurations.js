"use strict";
/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var Ajv = require("ajv");
var inversify_1 = require("inversify");
var common_1 = require("../common");
var task_definition_registry_1 = require("./task-definition-registry");
var provided_task_configurations_1 = require("./provided-task-configurations");
var task_configuration_manager_1 = require("./task-configuration-manager");
var task_schema_updater_1 = require("./task-schema-updater");
var task_source_resolver_1 = require("./task-source-resolver");
var common_2 = require("@theia/core/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var filesystem_watcher_protocol_1 = require("@theia/filesystem/lib/common/filesystem-watcher-protocol");
var browser_1 = require("@theia/workspace/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
/**
 * Watches a tasks.json configuration file and provides a parsed version of the contained task configurations
 */
var TaskConfigurations = /** @class */ (function () {
    function TaskConfigurations() {
        var _this = this;
        this.toDispose = new common_2.DisposableCollection();
        /**
         * Map of source (path of root folder that the task configs come from) and task config map.
         * For the inner map (i.e., task config map), the key is task label and value TaskConfiguration
         */
        this.tasksMap = new Map();
        /**
         * Map of source (path of root folder that the task configs come from) and task customizations map.
         */
        this.taskCustomizationMap = new Map();
        /** last directory element under which we look for task config */
        this.TASKFILEPATH = '.theia';
        /** task configuration file name */
        this.TASKFILE = 'tasks.json';
        this.client = undefined;
        /**
         * Map of source (path of root folder that the task configs come from) and raw task configurations / customizations.
         * This map is used to store the data from `tasks.json` files in workspace.
         */
        this.rawTaskConfigurations = new Map();
        this.toDispose.push(common_2.Disposable.create(function () {
            _this.tasksMap.clear();
            _this.taskCustomizationMap.clear();
            _this.rawTaskConfigurations.clear();
            _this.client = undefined;
        }));
    }
    TaskConfigurations.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.taskConfigurationManager.onDidChangeTaskConfig(function (change) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onDidTaskFileChange([change])];
                    case 1:
                        _a.sent();
                        if (this.client) {
                            this.client.taskConfigurationChanged(this.getTaskLabels());
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }));
        this.reorganizeTasks();
        this.toDispose.push(this.taskSchemaUpdater.onDidChangeTaskSchema(function () { return _this.reorganizeTasks(); }));
    };
    TaskConfigurations.prototype.setClient = function (client) {
        this.client = client;
    };
    TaskConfigurations.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /** returns the list of known task labels */
    TaskConfigurations.prototype.getTaskLabels = function () {
        return Array.from(this.tasksMap.values()).reduce(function (acc, labelConfigMap) { return acc.concat(Array.from(labelConfigMap.keys())); }, []);
    };
    /**
     * returns a collection of known tasks, which includes:
     * - all the configured tasks in `tasks.json`, and
     * - the customized detected tasks.
     *
     * The invalid task configs are not returned.
     */
    TaskConfigurations.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configuredTasks, detectedTasksAsConfigured, _a, _b, _c, rootFolder, customizations, customizations_1, customizations_1_1, cus, detected, e_1_1, e_2_1;
            var e_2, _d, e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        configuredTasks = Array.from(this.tasksMap.values()).reduce(function (acc, labelConfigMap) { return acc.concat(Array.from(labelConfigMap.values())); }, []);
                        detectedTasksAsConfigured = [];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 12, 13, 14]);
                        _a = __values(Array.from(this.taskCustomizationMap.entries())), _b = _a.next();
                        _f.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 11];
                        _c = __read(_b.value, 2), rootFolder = _c[0], customizations = _c[1];
                        _f.label = 3;
                    case 3:
                        _f.trys.push([3, 8, 9, 10]);
                        customizations_1 = (e_1 = void 0, __values(customizations)), customizations_1_1 = customizations_1.next();
                        _f.label = 4;
                    case 4:
                        if (!!customizations_1_1.done) return [3 /*break*/, 7];
                        cus = customizations_1_1.value;
                        return [4 /*yield*/, this.providedTaskConfigurations.getTaskToCustomize(cus, rootFolder)];
                    case 5:
                        detected = _f.sent();
                        if (detected) {
                            detectedTasksAsConfigured.push(__assign(__assign({}, detected), cus));
                        }
                        _f.label = 6;
                    case 6:
                        customizations_1_1 = customizations_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (customizations_1_1 && !customizations_1_1.done && (_e = customizations_1.return)) _e.call(customizations_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, __spread(configuredTasks, detectedTasksAsConfigured)];
                }
            });
        });
    };
    /**
     * returns a collection of invalid task configs as per the task schema defined in Theia.
     */
    TaskConfigurations.prototype.getInvalidTaskConfigurations = function () {
        var e_3, _a, e_4, _b;
        var invalidTaskConfigs = [];
        try {
            for (var _c = __values(this.rawTaskConfigurations.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var taskConfigs = _d.value;
                try {
                    for (var taskConfigs_1 = (e_4 = void 0, __values(taskConfigs)), taskConfigs_1_1 = taskConfigs_1.next(); !taskConfigs_1_1.done; taskConfigs_1_1 = taskConfigs_1.next()) {
                        var taskConfig = taskConfigs_1_1.value;
                        var isValid = this.isTaskConfigValid(taskConfig);
                        if (!isValid) {
                            invalidTaskConfigs.push(taskConfig);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (taskConfigs_1_1 && !taskConfigs_1_1.done && (_b = taskConfigs_1.return)) _b.call(taskConfigs_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return invalidTaskConfigs;
    };
    /** returns the task configuration for a given label or undefined if none */
    TaskConfigurations.prototype.getTask = function (rootFolderPath, taskLabel) {
        var labelConfigMap = this.tasksMap.get(rootFolderPath);
        if (labelConfigMap) {
            return labelConfigMap.get(taskLabel);
        }
    };
    /** removes tasks configured in the given task config file */
    TaskConfigurations.prototype.removeTasks = function (configFileUri) {
        var source = this.getSourceFolderFromConfigUri(configFileUri);
        this.tasksMap.delete(source);
        this.taskCustomizationMap.delete(source);
    };
    /**
     * Removes task customization objects found in the given task config file from the memory.
     * Please note: this function does not modify the task config file.
     */
    TaskConfigurations.prototype.removeTaskCustomizations = function (configFileUri) {
        var source = this.getSourceFolderFromConfigUri(configFileUri);
        this.taskCustomizationMap.delete(source);
    };
    /**
     * Returns the task customizations by type from a given root folder in the workspace.
     * @param type the type of task customizations
     * @param rootFolder the root folder to find task customizations from. If `undefined`, this function returns an empty array.
     */
    TaskConfigurations.prototype.getTaskCustomizations = function (type, rootFolder) {
        if (!rootFolder) {
            return [];
        }
        var customizationInRootFolder = this.taskCustomizationMap.get(new uri_1.default(rootFolder).toString());
        if (customizationInRootFolder) {
            return customizationInRootFolder.filter(function (c) { return c.type === type; });
        }
        return [];
    };
    /**
     * Returns the customization object in `tasks.json` for the given task. Please note, this function
     * returns `undefined` if the given task is not a detected task, because configured tasks don't need
     * customization objects - users can modify its config directly in `tasks.json`.
     * @param taskConfig The task config, which could either be a configured task or a detected task.
     */
    TaskConfigurations.prototype.getCustomizationForTask = function (taskConfig) {
        if (!this.isDetectedTask(taskConfig)) {
            return undefined;
        }
        var customizationByType = this.getTaskCustomizations(taskConfig.taskType || taskConfig.type, taskConfig._scope) || [];
        var hasCustomization = customizationByType.length > 0;
        if (hasCustomization) {
            var taskDefinition_1 = this.taskDefinitionRegistry.getDefinition(taskConfig);
            if (taskDefinition_1) {
                var cus = customizationByType.filter(function (customization) {
                    return taskDefinition_1.properties.required.every(function (rp) { return customization[rp] === taskConfig[rp]; });
                })[0]; // Only support having one customization per task
                return cus;
            }
        }
        return undefined;
    };
    /** returns the string uri of where the config file would be, if it existed under a given root directory */
    TaskConfigurations.prototype.getConfigFileUri = function (rootDir) {
        return new uri_1.default(rootDir).resolve(this.TASKFILEPATH).resolve(this.TASKFILE).toString();
    };
    /**
     * Called when a change, to a config file we watch, is detected.
     */
    TaskConfigurations.prototype.onDidTaskFileChange = function (fileChanges) {
        return __awaiter(this, void 0, void 0, function () {
            var fileChanges_1, fileChanges_1_1, change, e_5_1;
            var e_5, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, 7, 8]);
                        fileChanges_1 = __values(fileChanges), fileChanges_1_1 = fileChanges_1.next();
                        _b.label = 1;
                    case 1:
                        if (!!fileChanges_1_1.done) return [3 /*break*/, 5];
                        change = fileChanges_1_1.value;
                        if (!(change.type === filesystem_watcher_protocol_1.FileChangeType.DELETED)) return [3 /*break*/, 2];
                        this.removeTasks(change.uri);
                        return [3 /*break*/, 4];
                    case 2: 
                    // re-parse the config file
                    return [4 /*yield*/, this.refreshTasks(change.uri)];
                    case 3:
                        // re-parse the config file
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        fileChanges_1_1 = fileChanges_1.next();
                        return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_5_1 = _b.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (fileChanges_1_1 && !fileChanges_1_1.done && (_a = fileChanges_1.return)) _a.call(fileChanges_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the task configs from the task configuration manager, and updates the list of available tasks.
     */
    TaskConfigurations.prototype.refreshTasks = function (rootFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readTasks(rootFolderUri)];
                    case 1:
                        _a.sent();
                        this.removeTasks(rootFolderUri);
                        this.removeTaskCustomizations(rootFolderUri);
                        this.reorganizeTasks();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** parses a config file and extracts the tasks launch configurations */
    TaskConfigurations.prototype.readTasks = function (rootFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var rawConfigArray;
            return __generator(this, function (_a) {
                rawConfigArray = this.taskConfigurationManager.getTasks(rootFolderUri);
                if (this.rawTaskConfigurations.has(rootFolderUri)) {
                    this.rawTaskConfigurations.delete(rootFolderUri);
                }
                this.rawTaskConfigurations.set(rootFolderUri, rawConfigArray);
                return [2 /*return*/, rawConfigArray];
            });
        });
    };
    /** Adds given task to a config file and opens the file to provide ability to edit task configuration. */
    TaskConfigurations.prototype.configure = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var workspace, sourceFolderUri, configuredAndCustomizedTasks, e_6;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        workspace = this.workspaceService.workspace;
                        if (!workspace) {
                            return [2 /*return*/];
                        }
                        sourceFolderUri = this.taskSourceResolver.resolve(task);
                        if (!sourceFolderUri) {
                            console.error('Global task cannot be customized');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getTasks()];
                    case 1:
                        configuredAndCustomizedTasks = _a.sent();
                        if (!!configuredAndCustomizedTasks.some(function (t) { return _this.taskDefinitionRegistry.compareTasks(t, task); })) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saveTask(sourceFolderUri, __assign(__assign({}, task), { problemMatcher: [] }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.taskConfigurationManager.openConfiguration(sourceFolderUri)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_6 = _a.sent();
                        console.error("Error occurred while opening: " + this.TASKFILE + ".", e_6);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurations.prototype.getTaskCustomizationTemplate = function (task) {
        var definition = this.getTaskDefinition(task);
        if (!definition) {
            console.error('Detected / Contributed tasks should have a task definition.');
            return;
        }
        var customization = { type: task.taskType || task.type };
        definition.properties.all.forEach(function (p) {
            if (task[p] !== undefined) {
                customization[p] = task[p];
            }
        });
        if ('problemMatcher' in task) {
            var problemMatcher = [];
            if (Array.isArray(task.problemMatcher)) {
                problemMatcher.push.apply(problemMatcher, __spread(task.problemMatcher.map(function (t) {
                    if (typeof t === 'string') {
                        return t;
                    }
                    else {
                        return t.name;
                    }
                })));
            }
            else if (typeof task.problemMatcher === 'string') {
                problemMatcher.push(task.problemMatcher);
            }
            else if (task.problemMatcher) {
                problemMatcher.push(task.problemMatcher.name);
            }
            customization.problemMatcher = problemMatcher.map(function (name) { return name.startsWith('$') ? name : "$" + name; });
        }
        if (task.group) {
            customization.group = task.group;
        }
        return __assign({}, customization);
    };
    /** Writes the task to a config file. Creates a config file if this one does not exist */
    TaskConfigurations.prototype.saveTask = function (sourceFolderUri, task) {
        var _source = task._source, $ident = task.$ident, preparedTask = __rest(task, ["_source", "$ident"]);
        var customizedTaskTemplate = this.getTaskCustomizationTemplate(task) || preparedTask;
        return this.taskConfigurationManager.addTaskConfiguration(sourceFolderUri, customizedTaskTemplate);
    };
    /**
     * This function is called after a change in TaskDefinitionRegistry happens.
     * It checks all tasks that have been loaded, and re-organized them in `tasksMap` and `taskCustomizationMap`.
     */
    TaskConfigurations.prototype.reorganizeTasks = function () {
        var e_7, _a, e_8, _b;
        var newTaskMap = new Map();
        var newTaskCustomizationMap = new Map();
        var addCustomization = function (rootFolder, customization) {
            if (newTaskCustomizationMap.has(rootFolder)) {
                newTaskCustomizationMap.get(rootFolder).push(customization);
            }
            else {
                newTaskCustomizationMap.set(rootFolder, [customization]);
            }
        };
        var addConfiguredTask = function (rootFolder, label, configuredTask) {
            if (newTaskMap.has(rootFolder)) {
                newTaskMap.get(rootFolder).set(label, configuredTask);
            }
            else {
                var newConfigMap = new Map();
                newConfigMap.set(label, configuredTask);
                newTaskMap.set(rootFolder, newConfigMap);
            }
        };
        try {
            for (var _c = __values(this.rawTaskConfigurations.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), rootFolder = _e[0], taskConfigs = _e[1];
                try {
                    for (var taskConfigs_2 = (e_8 = void 0, __values(taskConfigs)), taskConfigs_2_1 = taskConfigs_2.next(); !taskConfigs_2_1.done; taskConfigs_2_1 = taskConfigs_2.next()) {
                        var taskConfig = taskConfigs_2_1.value;
                        var isValid = this.isTaskConfigValid(taskConfig);
                        if (!isValid) {
                            continue;
                        }
                        var transformedTask = this.getTransformedRawTask(taskConfig, rootFolder);
                        if (this.isDetectedTask(transformedTask)) {
                            addCustomization(rootFolder, transformedTask);
                        }
                        else {
                            addConfiguredTask(rootFolder, transformedTask['label'], transformedTask);
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (taskConfigs_2_1 && !taskConfigs_2_1.done && (_b = taskConfigs_2.return)) _b.call(taskConfigs_2);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_7) throw e_7.error; }
        }
        this.taskCustomizationMap = newTaskCustomizationMap;
        this.tasksMap = newTaskMap;
    };
    TaskConfigurations.prototype.getTransformedRawTask = function (rawTask, rootFolderUri) {
        var taskConfig;
        if (this.isDetectedTask(rawTask)) {
            var def = this.getTaskDefinition(rawTask);
            taskConfig = __assign(__assign({}, rawTask), { _source: def.source, _scope: rootFolderUri });
        }
        else {
            taskConfig = __assign(__assign({}, rawTask), { _source: rootFolderUri, _scope: rootFolderUri });
        }
        return __assign(__assign({}, taskConfig), { presentation: common_1.TaskOutputPresentation.fromJson(rawTask) });
    };
    /**
     * Returns `true` if the given task configuration is valid as per the task schema defined in Theia
     * or contributed by Theia extensions and plugins, `false` otherwise.
     */
    TaskConfigurations.prototype.isTaskConfigValid = function (task) {
        var schema = this.taskSchemaUpdater.getTaskSchema();
        var ajv = new Ajv();
        var validateSchema = ajv.compile(schema);
        return !!validateSchema({ tasks: [task] });
    };
    /**
     * Updates the task config in the `tasks.json`.
     * The task config, together with updates, will be written into the `tasks.json` if it is not found in the file.
     *
     * @param task task that the updates will be applied to
     * @param update the updates to be applied
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TaskConfigurations.prototype.updateTaskConfig = function (task, update) {
        return __awaiter(this, void 0, void 0, function () {
            var sourceFolderUri, configuredAndCustomizedTasks, jsonTasks, ind;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceFolderUri = this.taskSourceResolver.resolve(task);
                        if (!sourceFolderUri) {
                            console.error('Global task cannot be customized');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getTasks()];
                    case 1:
                        configuredAndCustomizedTasks = _a.sent();
                        if (configuredAndCustomizedTasks.some(function (t) { return _this.taskDefinitionRegistry.compareTasks(t, task); })) { // task is already in `tasks.json`
                            jsonTasks = this.taskConfigurationManager.getTasks(sourceFolderUri);
                            if (jsonTasks) {
                                ind = jsonTasks.findIndex(function (t) {
                                    if (t.type !== (task.taskType || task.type)) {
                                        return false;
                                    }
                                    var def = _this.taskDefinitionRegistry.getDefinition(t);
                                    if (def) {
                                        return def.properties.all.every(function (p) { return t[p] === task[p]; });
                                    }
                                    return t.label === task.label;
                                });
                                jsonTasks[ind] = __assign(__assign({}, jsonTasks[ind]), update);
                            }
                            this.taskConfigurationManager.setTaskConfigurations(sourceFolderUri, jsonTasks);
                        }
                        else { // task is not in `tasks.json`
                            Object.keys(update).forEach(function (taskProperty) {
                                task[taskProperty] = update[taskProperty];
                            });
                            this.saveTask(sourceFolderUri, task);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurations.prototype.getSourceFolderFromConfigUri = function (configFileUri) {
        return new uri_1.default(configFileUri).parent.parent.path.toString();
    };
    /** checks if the config is a detected / contributed task */
    TaskConfigurations.prototype.isDetectedTask = function (task) {
        var taskDefinition = this.getTaskDefinition(task);
        // it is considered as a customization if the task definition registry finds a def for the task configuration
        return !!taskDefinition;
    };
    TaskConfigurations.prototype.getTaskDefinition = function (task) {
        return this.taskDefinitionRegistry.getDefinition(__assign(__assign({}, task), { type: task.taskType || task.type }));
    };
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], TaskConfigurations.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(common_2.ResourceProvider),
        __metadata("design:type", Function)
    ], TaskConfigurations.prototype, "resourceProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.OpenerService),
        __metadata("design:type", Object)
    ], TaskConfigurations.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskConfigurations.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(provided_task_configurations_1.ProvidedTaskConfigurations),
        __metadata("design:type", provided_task_configurations_1.ProvidedTaskConfigurations)
    ], TaskConfigurations.prototype, "providedTaskConfigurations", void 0);
    __decorate([
        inversify_1.inject(task_configuration_manager_1.TaskConfigurationManager),
        __metadata("design:type", task_configuration_manager_1.TaskConfigurationManager)
    ], TaskConfigurations.prototype, "taskConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskConfigurations.prototype, "taskSchemaUpdater", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskConfigurations.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskConfigurations.prototype, "init", null);
    TaskConfigurations = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], TaskConfigurations);
    return TaskConfigurations;
}());
exports.TaskConfigurations = TaskConfigurations;
//# sourceMappingURL=task-configurations.js.map
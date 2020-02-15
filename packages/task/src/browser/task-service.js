"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var browser_1 = require("@theia/core/lib/browser");
var opener_service_1 = require("@theia/core/lib/browser/opener-service");
var common_1 = require("@theia/core/lib/common");
var message_service_1 = require("@theia/core/lib/common/message-service");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var quick_pick_service_1 = require("@theia/core/lib/common/quick-pick-service");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_2 = require("@theia/editor/lib/browser");
var problem_manager_1 = require("@theia/markers/lib/browser/problem/problem-manager");
var terminal_service_1 = require("@theia/terminal/lib/browser/base/terminal-service");
var terminal_widget_impl_1 = require("@theia/terminal/lib/browser/terminal-widget-impl");
var browser_3 = require("@theia/variable-resolver/lib/browser");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var inversify_1 = require("inversify");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var common_2 = require("../common");
var task_watcher_1 = require("../common/task-watcher");
var provided_task_configurations_1 = require("./provided-task-configurations");
var task_configurations_1 = require("./task-configurations");
var task_contribution_1 = require("./task-contribution");
var task_definition_registry_1 = require("./task-definition-registry");
var task_name_resolver_1 = require("./task-name-resolver");
var task_source_resolver_1 = require("./task-source-resolver");
var task_problem_matcher_registry_1 = require("./task-problem-matcher-registry");
var task_schema_updater_1 = require("./task-schema-updater");
var task_configuration_manager_1 = require("./task-configuration-manager");
var problem_widget_1 = require("@theia/markers/lib/browser/problem/problem-widget");
var task_node_1 = require("./task-node");
var TaskEndedTypes;
(function (TaskEndedTypes) {
    TaskEndedTypes[TaskEndedTypes["TaskExited"] = 0] = "TaskExited";
    TaskEndedTypes[TaskEndedTypes["BackgroundTaskEnded"] = 1] = "BackgroundTaskEnded";
})(TaskEndedTypes = exports.TaskEndedTypes || (exports.TaskEndedTypes = {}));
var TaskService = /** @class */ (function () {
    function TaskService() {
        /**
         * The last executed task.
         */
        this.lastTask = undefined;
        this.cachedRecentTasks = [];
        this.runningTasks = new Map();
    }
    TaskService.prototype.init = function () {
        var _this = this;
        this.getRunningTasks().then(function (tasks) {
            return tasks.forEach(function (task) {
                if (!_this.runningTasks.has(task.taskId)) {
                    _this.runningTasks.set(task.taskId, {
                        exitCode: new promise_util_1.Deferred(), terminateSignal: new promise_util_1.Deferred(),
                        isBackgroundTaskEnded: new promise_util_1.Deferred()
                    });
                }
            });
        });
        // notify user that task has started
        this.taskWatcher.onTaskCreated(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            _this.runningTasks.set(event.taskId, {
                exitCode: new promise_util_1.Deferred(),
                terminateSignal: new promise_util_1.Deferred(),
                isBackgroundTaskEnded: new promise_util_1.Deferred()
            });
            var taskConfig = event.config;
            var taskIdentifier = taskConfig ? _this.getTaskIdentifier(taskConfig) : event.taskId.toString();
            _this.messageService.info("Task '" + taskIdentifier + "' has been started.");
        });
        this.taskWatcher.onOutputProcessed(function (event) { return __awaiter(_this, void 0, void 0, function () {
            var runningTasksInfo, matchedRunningTaskInfo_1, isTaskActiveAndOutputSilent_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isEventForThisClient(event.ctx)) {
                            return [2 /*return*/];
                        }
                        if (!event.problems) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getRunningTasks()];
                    case 1:
                        runningTasksInfo = _a.sent();
                        matchedRunningTaskInfo_1 = runningTasksInfo.find(function (taskInfo) {
                            var taskConfig = taskInfo.config;
                            return _this.taskDefinitionRegistry.compareTasks(taskConfig, event.config);
                        });
                        isTaskActiveAndOutputSilent_1 = matchedRunningTaskInfo_1 &&
                            matchedRunningTaskInfo_1.config.presentation && matchedRunningTaskInfo_1.config.presentation.reveal === common_2.RevealKind.Silent;
                        event.problems.forEach(function (problem) {
                            var existingMarkers = _this.problemManager.findMarkers({ owner: problem.description.owner });
                            var uris = new Set();
                            existingMarkers.forEach(function (marker) { return uris.add(marker.uri); });
                            if (common_2.ProblemMatchData.is(problem) && problem.resource) {
                                // When task.presentation.reveal === RevealKind.Silent, put focus on the terminal only if it is an error
                                if (isTaskActiveAndOutputSilent_1 && problem.marker.severity === vscode_languageserver_types_1.DiagnosticSeverity.Error) {
                                    var terminalId = matchedRunningTaskInfo_1.terminalId;
                                    if (terminalId) {
                                        var terminal = _this.terminalService.getById(_this.getTerminalWidgetId(terminalId));
                                        if (terminal) {
                                            var focus_1 = !!matchedRunningTaskInfo_1.config.presentation.focus;
                                            if (focus_1) { // assign focus to the terminal if presentation.focus is true
                                                _this.shell.activateWidget(terminal.id);
                                            }
                                            else { // show the terminal but not assign focus
                                                _this.shell.revealWidget(terminal.id);
                                            }
                                        }
                                    }
                                }
                                var uri_2 = new uri_1.default(problem.resource.path).withScheme(problem.resource.scheme);
                                if (uris.has(uri_2.toString())) {
                                    var newData = __spread(existingMarkers
                                        .filter(function (marker) { return marker.uri === uri_2.toString(); })
                                        .map(function (markerData) { return markerData.data; }), [
                                        problem.marker
                                    ]);
                                    _this.problemManager.setMarkers(uri_2, problem.description.owner, newData);
                                }
                                else {
                                    _this.problemManager.setMarkers(uri_2, problem.description.owner, [problem.marker]);
                                }
                            }
                            else { // should have received an event for finding the "background task begins" pattern
                                uris.forEach(function (uriString) { return _this.problemManager.setMarkers(new uri_1.default(uriString), problem.description.owner, []); });
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        this.taskWatcher.onBackgroundTaskEnded(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            if (!_this.runningTasks.has(event.taskId)) {
                _this.runningTasks.set(event.taskId, {
                    exitCode: new promise_util_1.Deferred(),
                    terminateSignal: new promise_util_1.Deferred(),
                    isBackgroundTaskEnded: new promise_util_1.Deferred()
                });
            }
            _this.runningTasks.get(event.taskId).isBackgroundTaskEnded.resolve(true);
        });
        // notify user that task has finished
        this.taskWatcher.onTaskExit(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            if (!_this.runningTasks.has(event.taskId)) {
                _this.runningTasks.set(event.taskId, {
                    exitCode: new promise_util_1.Deferred(),
                    terminateSignal: new promise_util_1.Deferred(),
                    isBackgroundTaskEnded: new promise_util_1.Deferred()
                });
            }
            _this.runningTasks.get(event.taskId).exitCode.resolve(event.code);
            _this.runningTasks.get(event.taskId).terminateSignal.resolve(event.signal);
            setTimeout(function () { return _this.runningTasks.delete(event.taskId); }, 60 * 1000);
            var taskConfig = event.config;
            var taskIdentifier = taskConfig ? _this.getTaskIdentifier(taskConfig) : event.taskId.toString();
            if (event.code !== undefined) {
                var message = "Task '" + taskIdentifier + "' has exited with code " + event.code + ".";
                if (event.code === 0) {
                    _this.messageService.info(message);
                }
                else {
                    var eventTaskConfig = event.config;
                    if (eventTaskConfig && eventTaskConfig.presentation && eventTaskConfig.presentation.reveal === common_2.RevealKind.Silent && event.terminalId) {
                        var terminal = _this.terminalService.getById(_this.getTerminalWidgetId(event.terminalId));
                        var focus_2 = !!eventTaskConfig.presentation.focus;
                        if (terminal) {
                            if (focus_2) { // assign focus to the terminal if presentation.focus is true
                                _this.shell.activateWidget(terminal.id);
                            }
                            else { // show the terminal but not assign focus
                                _this.shell.revealWidget(terminal.id);
                            }
                        }
                    }
                    _this.messageService.error(message);
                }
            }
            else if (event.signal !== undefined) {
                _this.messageService.info("Task '" + taskIdentifier + "' was terminated by signal " + event.signal + ".");
            }
            else {
                console.error('Invalid TaskExitedEvent received, neither code nor signal is set.');
            }
        });
    };
    TaskService.prototype.getTaskIdentifier = function (taskConfig) {
        var taskName = this.taskNameResolver.resolve(taskConfig);
        var sourceStrUri = this.taskSourceResolver.resolve(taskConfig);
        return taskName + " (" + this.labelProvider.getName(new uri_1.default(sourceStrUri)) + ")";
    };
    /** Returns an array of the task configurations configured in tasks.json and provided by the extensions. */
    TaskService.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configuredTasks, providedTasks, notCustomizedProvidedTasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfiguredTasks()];
                    case 1:
                        configuredTasks = _a.sent();
                        return [4 /*yield*/, this.getProvidedTasks()];
                    case 2:
                        providedTasks = _a.sent();
                        notCustomizedProvidedTasks = providedTasks.filter(function (provided) {
                            return !configuredTasks.some(function (configured) { return _this.taskDefinitionRegistry.compareTasks(configured, provided); });
                        });
                        return [2 /*return*/, __spread(configuredTasks, notCustomizedProvidedTasks)];
                }
            });
        });
    };
    /** Returns an array of the valid task configurations which are configured in tasks.json files */
    TaskService.prototype.getConfiguredTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var invalidTaskConfig, widget, isProblemsWidgetVisible_1, currentEditorUri, isInvalidTaskConfigFileOpen, folderUri, warningMessage, validTaskConfigs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invalidTaskConfig = this.taskConfigurations.getInvalidTaskConfigurations()[0];
                        if (!invalidTaskConfig) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(problem_widget_1.PROBLEMS_WIDGET_ID)];
                    case 1:
                        widget = _a.sent();
                        isProblemsWidgetVisible_1 = widget && widget.isVisible;
                        currentEditorUri = this.editorManager.currentEditor && this.editorManager.currentEditor.editor.getResourceUri();
                        isInvalidTaskConfigFileOpen = false;
                        if (currentEditorUri) {
                            folderUri = this.workspaceService.getWorkspaceRootUri(currentEditorUri);
                            if (folderUri && folderUri.toString() === invalidTaskConfig._scope) {
                                isInvalidTaskConfigFileOpen = true;
                            }
                        }
                        warningMessage = 'Invalid task configurations are found. Open tasks.json and find details in the Problems view.';
                        if (!isProblemsWidgetVisible_1 || !isInvalidTaskConfigFileOpen) {
                            this.messageService.warn(warningMessage, 'Open').then(function (actionOpen) {
                                if (actionOpen) {
                                    if (invalidTaskConfig && invalidTaskConfig._scope) {
                                        _this.taskConfigurationManager.openConfiguration(invalidTaskConfig._scope);
                                    }
                                    if (!isProblemsWidgetVisible_1) {
                                        _this.commands.executeCommand('problemsView:toggle');
                                    }
                                }
                            });
                        }
                        else {
                            this.messageService.warn(warningMessage);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.taskConfigurations.getTasks()];
                    case 3:
                        validTaskConfigs = _a.sent();
                        return [2 /*return*/, validTaskConfigs];
                }
            });
        });
    };
    /** Returns an array of the task configurations which are provided by the extensions. */
    TaskService.prototype.getProvidedTasks = function () {
        return this.providedTaskConfigurations.getTasks();
    };
    TaskService.prototype.addRecentTasks = function (tasks) {
        var _this = this;
        if (Array.isArray(tasks)) {
            tasks.forEach(function (task) { return _this.addRecentTasks(task); });
        }
        else {
            var ind = this.cachedRecentTasks.findIndex(function (recent) { return _this.taskDefinitionRegistry.compareTasks(recent, tasks); });
            if (ind >= 0) {
                this.cachedRecentTasks.splice(ind, 1);
            }
            this.cachedRecentTasks.unshift(tasks);
        }
    };
    Object.defineProperty(TaskService.prototype, "recentTasks", {
        get: function () {
            return this.cachedRecentTasks;
        },
        set: function (recent) {
            this.cachedRecentTasks = recent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clears the list of recently used tasks.
     */
    TaskService.prototype.clearRecentTasks = function () {
        this.cachedRecentTasks = [];
    };
    /**
     * Returns a task configuration provided by an extension by task source and label.
     * If there are no task configuration, returns undefined.
     */
    TaskService.prototype.getProvidedTask = function (source, label, scope) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.providedTaskConfigurations.getTask(source, label, scope)];
            });
        });
    };
    /** Returns an array of running tasks 'TaskInfo' objects */
    TaskService.prototype.getRunningTasks = function () {
        return this.taskServer.getTasks(this.getContext());
    };
    /** Returns an array of task types that are registered, including the default types */
    TaskService.prototype.getRegisteredTaskTypes = function () {
        return this.taskSchemaUpdater.getRegisteredTaskTypes();
    };
    /**
     * Get the last executed task.
     *
     * @returns the last executed task or `undefined`.
     */
    TaskService.prototype.getLastTask = function () {
        return this.lastTask;
    };
    /**
     * Runs a task, by task configuration label.
     * Note, it looks for a task configured in tasks.json only.
     */
    TaskService.prototype.runConfiguredTask = function (source, taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                task = this.taskConfigurations.getTask(source, taskLabel);
                if (!task) {
                    this.logger.error("Can't get task launch configuration for label: " + taskLabel);
                    return [2 /*return*/];
                }
                this.run(source, taskLabel);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Run the last executed task.
     */
    TaskService.prototype.runLastTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, source, taskLabel;
            return __generator(this, function (_b) {
                if (!this.lastTask) {
                    return [2 /*return*/];
                }
                _a = this.lastTask, source = _a.source, taskLabel = _a.taskLabel;
                return [2 /*return*/, this.run(source, taskLabel)];
            });
        });
    };
    /**
     * Runs a task, by the source and label of the task configuration.
     * It looks for configured and detected tasks.
     */
    TaskService.prototype.run = function (source, taskLabel, scope) {
        return __awaiter(this, void 0, void 0, function () {
            var task, customizationObject, items, selected, matcherNames, tasks, resolvedMatchers, rootNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvidedTask(source, taskLabel, scope)];
                    case 1:
                        task = _a.sent();
                        if (!task) { // if a detected task cannot be found, search from tasks.json
                            task = this.taskConfigurations.getTask(source, taskLabel);
                            if (!task) {
                                this.logger.error("Can't get task launch configuration for label: " + taskLabel);
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.getTaskCustomization(task)];
                    case 2:
                        customizationObject = _a.sent();
                        if (!!customizationObject.problemMatcher) return [3 /*break*/, 4];
                        items = this.getCustomizeProblemMatcherItems();
                        return [4 /*yield*/, this.quickPick.show(items, {
                                placeholder: 'Select for which kind of errors and warnings to scan the task output'
                            })];
                    case 3:
                        selected = _a.sent();
                        if (selected) {
                            if (selected.problemMatchers) {
                                matcherNames = [];
                                if (selected.problemMatchers && selected.problemMatchers.length === 0) { // never parse output for this task
                                    matcherNames = [];
                                }
                                else if (selected.problemMatchers && selected.problemMatchers.length > 0) { // continue with user-selected parser
                                    matcherNames = selected.problemMatchers.map(function (matcher) { return matcher.name; });
                                }
                                customizationObject.problemMatcher = matcherNames;
                                // write the selected matcher (or the decision of "never parse") into the `tasks.json`
                                this.updateTaskConfiguration(task, { problemMatcher: matcherNames });
                            }
                            else if (selected.learnMore) { // user wants to learn more about parsing task output
                                opener_service_1.open(this.openerService, new uri_1.default('https://code.visualstudio.com/docs/editor/tasks#_processing-task-output-with-problem-matchers'));
                            }
                            // else, continue the task with no parser
                        }
                        else { // do not start the task in case that the user did not select any item from the list
                            return [2 /*return*/];
                        }
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.getWorkspaceTasks(task._scope)];
                    case 5:
                        tasks = _a.sent();
                        return [4 /*yield*/, this.resolveProblemMatchers(task, customizationObject)];
                    case 6:
                        resolvedMatchers = _a.sent();
                        try {
                            rootNode = new task_node_1.TaskNode(task, [], []);
                            this.detectDirectedAcyclicGraph(task, rootNode, tasks);
                        }
                        catch (error) {
                            this.logger.error(error.message);
                            this.messageService.error(error.message);
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, this.runTasksGraph(task, tasks, {
                                customization: __assign(__assign({}, customizationObject), { problemMatcher: resolvedMatchers })
                            }).catch(function (error) {
                                console.log(error.message);
                                return undefined;
                            })];
                }
            });
        });
    };
    /**
     * A recursive function that runs a task and all its sub tasks that it depends on.
     * A task can be executed only when all of its dependencies have been executed, or when it doesn’t have any dependencies at all.
     */
    TaskService.prototype.runTasksGraph = function (task, tasks, option) {
        return __awaiter(this, void 0, void 0, function () {
            var dependentTasks, i, taskIdentifier, dependentTask, taskCustomization, resolvedMatchers, promises, taskIdentifier, dependentTask, taskCustomization, resolvedMatchers, taskInfo, getExitCodePromise, isBackgroundTaskEndedPromise, taskEndedInfo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(task && task.dependsOn)) return [3 /*break*/, 13];
                        if (!(Array.isArray(task.dependsOn) && task.dependsOn.length > 0)) return [3 /*break*/, 9];
                        dependentTasks = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < task.dependsOn.length)) return [3 /*break*/, 6];
                        taskIdentifier = task.dependsOn[i];
                        dependentTask = this.getDependentTask(taskIdentifier, tasks);
                        return [4 /*yield*/, this.getTaskCustomization(dependentTask)];
                    case 2:
                        taskCustomization = _a.sent();
                        return [4 /*yield*/, this.resolveProblemMatchers(dependentTask, taskCustomization)];
                    case 3:
                        resolvedMatchers = _a.sent();
                        dependentTasks.push({ 'task': dependentTask, 'taskCustomization': taskCustomization, 'resolvedMatchers': resolvedMatchers });
                        if (!(task.dependsOrder && task.dependsOrder === common_2.DependsOrder.Sequence)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.runTasksGraph(dependentTask, tasks, {
                                customization: __assign(__assign({}, taskCustomization), { problemMatcher: resolvedMatchers })
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (!((!task.dependsOrder) || (task.dependsOrder && task.dependsOrder === common_2.DependsOrder.Parallel))) return [3 /*break*/, 8];
                        promises = dependentTasks.map(function (item) {
                            return _this.runTasksGraph(item.task, tasks, {
                                customization: __assign(__assign({}, item.taskCustomization), { problemMatcher: item.resolvedMatchers })
                            });
                        });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [3 /*break*/, 13];
                    case 9:
                        if (!!Array.isArray(task.dependsOn)) return [3 /*break*/, 13];
                        taskIdentifier = task.dependsOn;
                        dependentTask = this.getDependentTask(taskIdentifier, tasks);
                        return [4 /*yield*/, this.getTaskCustomization(dependentTask)];
                    case 10:
                        taskCustomization = _a.sent();
                        return [4 /*yield*/, this.resolveProblemMatchers(dependentTask, taskCustomization)];
                    case 11:
                        resolvedMatchers = _a.sent();
                        return [4 /*yield*/, this.runTasksGraph(dependentTask, tasks, {
                                customization: __assign(__assign({}, taskCustomization), { problemMatcher: resolvedMatchers })
                            })];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13: return [4 /*yield*/, this.runTask(task, option)];
                    case 14:
                        taskInfo = _a.sent();
                        if (!taskInfo) return [3 /*break*/, 16];
                        getExitCodePromise = this.getExitCode(taskInfo.taskId).then(function (result) { return ({ taskEndedType: TaskEndedTypes.TaskExited, value: result }); });
                        isBackgroundTaskEndedPromise = this.isBackgroundTaskEnded(taskInfo.taskId).then(function (result) {
                            return ({ taskEndedType: TaskEndedTypes.BackgroundTaskEnded, value: result });
                        });
                        return [4 /*yield*/, Promise.race([getExitCodePromise, isBackgroundTaskEndedPromise])];
                    case 15:
                        taskEndedInfo = _a.sent();
                        if ((taskEndedInfo.taskEndedType === TaskEndedTypes.TaskExited && taskEndedInfo.value !== 0) ||
                            (taskEndedInfo.taskEndedType === TaskEndedTypes.BackgroundTaskEnded && !taskEndedInfo.value)) {
                            throw new Error('The task: ' + task.label + ' terminated with exit code ' + taskEndedInfo.value + '.');
                        }
                        _a.label = 16;
                    case 16: return [2 /*return*/, taskInfo];
                }
            });
        });
    };
    /**
     * Creates a graph of dependencies tasks from the root task and verify there is no DAG (Directed Acyclic Graph).
     * In case of detection of a circular dependency, an error is thrown with a message which describes the detected circular reference.
     */
    TaskService.prototype.detectDirectedAcyclicGraph = function (task, taskNode, tasks) {
        if (task && task.dependsOn) {
            // In case the 'dependsOn' is an array
            if (Array.isArray(task.dependsOn) && task.dependsOn.length > 0) {
                for (var i = 0; i < task.dependsOn.length; i++) {
                    var childNode = this.createChildTaskNode(task, taskNode, task.dependsOn[i], tasks);
                    this.detectDirectedAcyclicGraph(childNode.taskConfiguration, childNode.node, tasks);
                }
            }
            else if (!Array.isArray(task.dependsOn)) {
                var childNode = this.createChildTaskNode(task, taskNode, task.dependsOn, tasks);
                this.detectDirectedAcyclicGraph(childNode.taskConfiguration, childNode.node, tasks);
            }
        }
    };
    // 'childTaskIdentifier' may be a string (a task label) or a JSON object which represents a TaskIdentifier (e.g. {"type":"npm", "script":"script1"})
    TaskService.prototype.createChildTaskNode = function (task, taskNode, childTaskIdentifier, tasks) {
        var _this = this;
        var childTaskConfiguration = this.getDependentTask(childTaskIdentifier, tasks);
        // If current task and child task are identical or if
        // one of the child tasks is identical to one of the current task ancestors, then raise an error
        if (this.taskDefinitionRegistry.compareTasks(task, childTaskConfiguration) ||
            taskNode.parentsID.filter(function (t) { return _this.taskDefinitionRegistry.compareTasks(childTaskConfiguration, t); }).length > 0) {
            var fromNode = task.label;
            var toNode = childTaskConfiguration.label;
            throw new Error('Circular reference detected: ' + fromNode + ' -->  ' + toNode);
        }
        var childNode = new task_node_1.TaskNode(childTaskConfiguration, [], Object.assign([], taskNode.parentsID));
        childNode.addParentDependency(taskNode.taskId);
        taskNode.addChildDependency(childNode);
        return { 'taskConfiguration': childTaskConfiguration, 'node': childNode };
    };
    /**
     * Gets task configuration by task label or by a JSON object which represents a task identifier
     *
     * @param taskIdentifier The task label (string) or a JSON object which represents a TaskIdentifier (e.g. {"type":"npm", "script":"script1"})
     * @param tasks an array of the task configurations
     * @returns the correct TaskConfiguration object which matches the taskIdentifier
     */
    TaskService.prototype.getDependentTask = function (taskIdentifier, tasks) {
        var _this = this;
        var notEnoughDataError = 'The information provided in the "dependsOn" is not enough for matching the correct task !';
        var currentTaskChildConfiguration;
        if (typeof (taskIdentifier) !== 'string') {
            // TaskIdentifier object does not support tasks of type 'shell' (The same behavior as in VS Code).
            // So if we want the 'dependsOn' property to include tasks of type 'shell',
            // then we must mention their labels (in the 'dependsOn' property) and not to create a task identifier object for them.
            var taskDefinition = this.taskDefinitionRegistry.getDefinition(taskIdentifier);
            if (taskDefinition) {
                currentTaskChildConfiguration = this.getTaskByTaskIdentifierAndTaskDefinition(taskDefinition, taskIdentifier, tasks);
                if (!currentTaskChildConfiguration.type) {
                    this.messageService.error(notEnoughDataError);
                    throw new Error(notEnoughDataError);
                }
                return currentTaskChildConfiguration;
            }
            else {
                this.messageService.error(notEnoughDataError);
                throw new Error(notEnoughDataError);
            }
        }
        else {
            currentTaskChildConfiguration = tasks.filter(function (t) { return taskIdentifier === _this.taskNameResolver.resolve(t); })[0];
            return currentTaskChildConfiguration;
        }
    };
    /**
     * Gets the matched task from an array of task configurations by TaskDefinition and TaskIdentifier.
     * In case that more than one task configuration matches, we returns the first one.
     *
     * @param taskDefinition The task definition for the task configuration.
     * @param taskIdentifier The task label (string) or a JSON object which represents a TaskIdentifier (e.g. {"type":"npm", "script":"script1"})
     * @param tasks An array of task configurations.
     * @returns The correct TaskConfiguration object which matches the taskDefinition and taskIdentifier.
     */
    TaskService.prototype.getTaskByTaskIdentifierAndTaskDefinition = function (taskDefinition, taskIdentifier, tasks) {
        var identifierProperties = [];
        var relevantTasks = tasks.filter(function (t) {
            return taskDefinition && t.hasOwnProperty('taskType') &&
                taskDefinition['taskType'] === t['taskType'] &&
                t.hasOwnProperty('source') &&
                taskDefinition['source'] === t['source'];
        });
        Object.keys(taskIdentifier).forEach(function (key) {
            identifierProperties.push(key);
        });
        identifierProperties.forEach(function (key) {
            if (key === 'type' || key === 'taskType') {
                relevantTasks = relevantTasks.filter(function (t) { return (t.hasOwnProperty('type') || t.hasOwnProperty('taskType')) &&
                    ((taskIdentifier[key] === t['type']) || (taskIdentifier[key] === t['taskType'])); });
            }
            else {
                relevantTasks = relevantTasks.filter(function (t) { return t.hasOwnProperty(key) && taskIdentifier[key] === t[key]; });
            }
        });
        if (relevantTasks.length > 0) {
            return relevantTasks[0];
        }
        else {
            // return empty TaskConfiguration
            return { 'label': '', '_scope': '', 'type': '' };
        }
    };
    TaskService.prototype.runTask = function (task, option) {
        return __awaiter(this, void 0, void 0, function () {
            var runningTasksInfo, matchedRunningTaskInfo, taskName, terminalId, terminal, selectedAction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRunningTasks()];
                    case 1:
                        runningTasksInfo = _a.sent();
                        matchedRunningTaskInfo = runningTasksInfo.find(function (taskInfo) {
                            var taskConfig = taskInfo.config;
                            return _this.taskDefinitionRegistry.compareTasks(taskConfig, task);
                        });
                        if (!matchedRunningTaskInfo) return [3 /*break*/, 6];
                        taskName = this.taskNameResolver.resolve(task);
                        terminalId = matchedRunningTaskInfo.terminalId;
                        if (terminalId) {
                            terminal = this.terminalService.getById(this.getTerminalWidgetId(terminalId));
                            if (terminal && task.presentation) {
                                if (task.presentation.focus) { // assign focus to the terminal if presentation.focus is true
                                    this.shell.activateWidget(terminal.id);
                                }
                                else if (task.presentation.reveal === common_2.RevealKind.Always) { // show the terminal but not assign focus
                                    this.shell.revealWidget(terminal.id);
                                }
                            }
                        }
                        return [4 /*yield*/, this.messageService.info("The task '" + taskName + "' is already active", 'Terminate Task', 'Restart Task')];
                    case 2:
                        selectedAction = _a.sent();
                        if (!(selectedAction === 'Terminate Task')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.terminateTask(matchedRunningTaskInfo)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (selectedAction === 'Restart Task') {
                            return [2 /*return*/, this.restartTask(matchedRunningTaskInfo, option)];
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6: // run task as the task is not active
                    return [2 /*return*/, this.doRunTask(task, option)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Terminates a task that is actively running.
     * @param activeTaskInfo the TaskInfo of the task that is actively running
     */
    TaskService.prototype.terminateTask = function (activeTaskInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var taskId;
            return __generator(this, function (_a) {
                taskId = activeTaskInfo.taskId;
                return [2 /*return*/, this.kill(taskId)];
            });
        });
    };
    /**
     * Terminates a task that is actively running, and restarts it.
     * @param activeTaskInfo the TaskInfo of the task that is actively running
     */
    TaskService.prototype.restartTask = function (activeTaskInfo, option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.terminateTask(activeTaskInfo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.doRunTask(activeTaskInfo.config, option)];
                }
            });
        });
    };
    TaskService.prototype.doRunTask = function (task, option) {
        return __awaiter(this, void 0, void 0, function () {
            var taskDefinition_1, resolvedTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (option && option.customization) {
                            taskDefinition_1 = this.taskDefinitionRegistry.getDefinition(task);
                            if (taskDefinition_1) { // use the customization object to override the task config
                                Object.keys(option.customization).forEach(function (customizedProperty) {
                                    // properties used to define the task cannot be customized
                                    if (customizedProperty !== 'type' && !taskDefinition_1.properties.all.some(function (pDefinition) { return pDefinition === customizedProperty; })) {
                                        task[customizedProperty] = option.customization[customizedProperty];
                                    }
                                });
                            }
                        }
                        return [4 /*yield*/, this.getResolvedTask(task)];
                    case 1:
                        resolvedTask = _a.sent();
                        if (!resolvedTask) return [3 /*break*/, 3];
                        // remove problem markers from the same source before running the task
                        return [4 /*yield*/, this.removeProblemMarks(option)];
                    case 2:
                        // remove problem markers from the same source before running the task
                        _a.sent();
                        return [2 /*return*/, this.runResolvedTask(resolvedTask, option)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.runTaskByLabel = function (taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, tasks_1, tasks_1_1, task;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getTasks()];
                    case 1:
                        tasks = _b.sent();
                        try {
                            for (tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                task = tasks_1_1.value;
                                if (task.label === taskLabel) {
                                    return [2 /*return*/, this.runTask(task)];
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.runWorkspaceTask = function (workspaceFolderUri, taskIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, task, taskCustomization, resolvedMatchers, rootNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWorkspaceTasks(workspaceFolderUri)];
                    case 1:
                        tasks = _a.sent();
                        task = this.getDependentTask(taskIdentifier, tasks);
                        if (!task) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.getTaskCustomization(task)];
                    case 2:
                        taskCustomization = _a.sent();
                        return [4 /*yield*/, this.resolveProblemMatchers(task, taskCustomization)];
                    case 3:
                        resolvedMatchers = _a.sent();
                        try {
                            rootNode = new task_node_1.TaskNode(task, [], []);
                            this.detectDirectedAcyclicGraph(task, rootNode, tasks);
                        }
                        catch (error) {
                            this.logger.error(error.message);
                            this.messageService.error(error.message);
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, this.runTasksGraph(task, tasks, {
                                customization: __assign(__assign({}, taskCustomization), { problemMatcher: resolvedMatchers })
                            }).catch(function (error) {
                                console.log(error.message);
                                return undefined;
                            })];
                }
            });
        });
    };
    /**
     * Updates the task configuration in the `tasks.json`.
     * The task config, together with updates, will be written into the `tasks.json` if it is not found in the file.
     *
     * @param task task that the updates will be applied to
     * @param update the updates to be applied
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TaskService.prototype.updateTaskConfiguration = function (task, update) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (update.problemMatcher) {
                    if (Array.isArray(update.problemMatcher)) {
                        update.problemMatcher.forEach(function (name, index) {
                            if (!name.startsWith('$')) {
                                update.problemMatcher[index] = "$" + update.problemMatcher[index];
                            }
                        });
                    }
                    else if (!update.problemMatcher.startsWith('$')) {
                        update.problemMatcher = "$" + update.problemMatcher;
                    }
                }
                this.taskConfigurations.updateTaskConfig(task, update);
                return [2 /*return*/];
            });
        });
    };
    TaskService.prototype.getWorkspaceTasks = function (workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTasks()];
                    case 1:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks.filter(function (t) { return t._scope === workspaceFolderUri || t._scope === undefined; })];
                }
            });
        });
    };
    TaskService.prototype.resolveProblemMatchers = function (task, customizationObject) {
        return __awaiter(this, void 0, void 0, function () {
            var notResolvedMatchers, resolvedMatchers, notResolvedMatchers_1, notResolvedMatchers_1_1, matcher, resolvedMatcher, scope, options, resolvedPrefix, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        notResolvedMatchers = customizationObject.problemMatcher ?
                            (Array.isArray(customizationObject.problemMatcher) ? customizationObject.problemMatcher : [customizationObject.problemMatcher]) : undefined;
                        resolvedMatchers = [];
                        if (!notResolvedMatchers) return [3 /*break*/, 14];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 11, 12, 13]);
                        notResolvedMatchers_1 = __values(notResolvedMatchers), notResolvedMatchers_1_1 = notResolvedMatchers_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!notResolvedMatchers_1_1.done) return [3 /*break*/, 10];
                        matcher = notResolvedMatchers_1_1.value;
                        resolvedMatcher = void 0;
                        return [4 /*yield*/, this.problemMatcherRegistry.onReady()];
                    case 3:
                        _b.sent();
                        if (!(typeof matcher === 'string')) return [3 /*break*/, 4];
                        resolvedMatcher = this.problemMatcherRegistry.get(matcher);
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.problemMatcherRegistry.getProblemMatcherFromContribution(matcher)];
                    case 5:
                        resolvedMatcher = _b.sent();
                        _b.label = 6;
                    case 6:
                        if (!resolvedMatcher) return [3 /*break*/, 9];
                        scope = task._scope || task._source;
                        if (!(resolvedMatcher.filePrefix && scope)) return [3 /*break*/, 8];
                        options = {
                            context: new uri_1.default(scope).withScheme('file'),
                            configurationSection: 'tasks'
                        };
                        return [4 /*yield*/, this.variableResolverService.resolve(resolvedMatcher.filePrefix, options)];
                    case 7:
                        resolvedPrefix = _b.sent();
                        Object.assign(resolvedMatcher, { filePrefix: resolvedPrefix });
                        _b.label = 8;
                    case 8:
                        resolvedMatchers.push(resolvedMatcher);
                        _b.label = 9;
                    case 9:
                        notResolvedMatchers_1_1 = notResolvedMatchers_1.next();
                        return [3 /*break*/, 2];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (notResolvedMatchers_1_1 && !notResolvedMatchers_1_1.done && (_a = notResolvedMatchers_1.return)) _a.call(notResolvedMatchers_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        resolvedMatchers = undefined;
                        _b.label = 15;
                    case 15: return [2 /*return*/, resolvedMatchers];
                }
            });
        });
    };
    TaskService.prototype.getTaskCustomization = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var customizationObject, customizationFound;
            return __generator(this, function (_a) {
                customizationObject = { type: '' };
                customizationFound = this.taskConfigurations.getCustomizationForTask(task);
                if (customizationFound) {
                    Object.assign(customizationObject, customizationFound);
                }
                else {
                    Object.assign(customizationObject, {
                        type: task.type,
                        problemMatcher: task.problemMatcher
                    });
                }
                return [2 /*return*/, customizationObject];
            });
        });
    };
    TaskService.prototype.removeProblemMarks = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var matchersFromOption, _loop_1, this_1, matchersFromOption_1, matchersFromOption_1_1, matcher;
            var e_3, _a;
            var _this = this;
            return __generator(this, function (_b) {
                if (option && option.customization) {
                    matchersFromOption = option.customization.problemMatcher || [];
                    _loop_1 = function (matcher) {
                        if (matcher && matcher.owner) {
                            var existingMarkers = this_1.problemManager.findMarkers({ owner: matcher.owner });
                            var uris_1 = new Set();
                            existingMarkers.forEach(function (marker) { return uris_1.add(marker.uri); });
                            uris_1.forEach(function (uriString) { return _this.problemManager.setMarkers(new uri_1.default(uriString), matcher.owner, []); });
                        }
                    };
                    this_1 = this;
                    try {
                        for (matchersFromOption_1 = __values(matchersFromOption), matchersFromOption_1_1 = matchersFromOption_1.next(); !matchersFromOption_1_1.done; matchersFromOption_1_1 = matchersFromOption_1.next()) {
                            matcher = matchersFromOption_1_1.value;
                            _loop_1(matcher);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (matchersFromOption_1_1 && !matchersFromOption_1_1.done && (_a = matchersFromOption_1.return)) _a.call(matchersFromOption_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    TaskService.prototype.getResolvedTask = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver, resolvedTask, _a, error_1, errMessage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        resolver = undefined;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.taskResolverRegistry.getResolver(task.type)];
                    case 2:
                        resolver = _b.sent();
                        if (!resolver) return [3 /*break*/, 4];
                        return [4 /*yield*/, resolver.resolveTask(task)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = task;
                        _b.label = 5;
                    case 5:
                        resolvedTask = _a;
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        errMessage = "Error resolving task '" + task.label + "': " + error_1;
                        this.logger.error(errMessage);
                        resolvedTask = task;
                        return [3 /*break*/, 7];
                    case 7:
                        this.addRecentTasks(task);
                        return [2 /*return*/, resolvedTask];
                }
            });
        });
    };
    /**
     * Runs the resolved task and opens terminal widget if the task is based on a terminal process
     * @param resolvedTask the resolved task
     * @param option options to run the resolved task
     */
    TaskService.prototype.runResolvedTask = function (resolvedTask, option) {
        return __awaiter(this, void 0, void 0, function () {
            var source, taskLabel, taskInfo, error_2, errorStr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        source = resolvedTask._source;
                        taskLabel = resolvedTask.label;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.taskServer.run(resolvedTask, this.getContext(), option)];
                    case 2:
                        taskInfo = _a.sent();
                        this.lastTask = { source: source, taskLabel: taskLabel };
                        this.logger.debug("Task created. Task id: " + taskInfo.taskId);
                        /**
                         * open terminal widget if the task is based on a terminal process (type: 'shell' or 'process')
                         *
                         * @todo Use a different mechanism to determine if the task should be attached?
                         *       Reason: Maybe a new task type wants to also be displayed in a terminal.
                         */
                        if (typeof taskInfo.terminalId === 'number') {
                            this.attach(taskInfo.terminalId, taskInfo.taskId);
                        }
                        return [2 /*return*/, taskInfo];
                    case 3:
                        error_2 = _a.sent();
                        errorStr = "Error launching task '" + taskLabel + "': " + error_2.message;
                        this.logger.error(errorStr);
                        this.messageService.error(errorStr);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getCustomizeProblemMatcherItems = function () {
        var items = [];
        items.push({
            label: 'Continue without scanning the task output',
            value: { problemMatchers: undefined }
        });
        items.push({
            label: 'Never scan the task output',
            value: { problemMatchers: [] }
        });
        items.push({
            label: 'Learn more about scanning the task output',
            value: { problemMatchers: undefined, learnMore: true }
        });
        items.push({ type: 'separator', label: 'registered parsers' });
        var registeredProblemMatchers = this.problemMatcherRegistry.getAll();
        items.push.apply(items, __spread(registeredProblemMatchers.map(function (matcher) {
            return ({
                label: matcher.label,
                value: { problemMatchers: [matcher] },
                description: matcher.name.startsWith('$') ? matcher.name : "$" + matcher.name
            });
        })));
        return items;
    };
    /**
     * Run selected text in the last active terminal.
     */
    TaskService.prototype.runSelectedText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startLine, startCharacter, endLine, endCharacter, selectedRange, selectedText, terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.editorManager.currentEditor) {
                            return [2 /*return*/];
                        }
                        startLine = this.editorManager.currentEditor.editor.selection.start.line;
                        startCharacter = this.editorManager.currentEditor.editor.selection.start.character;
                        endLine = this.editorManager.currentEditor.editor.selection.end.line;
                        endCharacter = this.editorManager.currentEditor.editor.selection.end.character;
                        selectedRange = vscode_languageserver_types_1.Range.create(startLine, startCharacter, endLine, endCharacter);
                        // if no text is selected, default to selecting entire line
                        if (startLine === endLine && startCharacter === endCharacter) {
                            selectedRange = vscode_languageserver_types_1.Range.create(startLine, 0, endLine + 1, 0);
                        }
                        selectedText = this.editorManager.currentEditor.editor.document.getText(selectedRange).trimRight() + '\n';
                        terminal = this.terminalService.currentTerminal;
                        if (!!terminal) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.terminalService.newTerminal({ created: new Date().toString() })];
                    case 1:
                        terminal = (_a.sent());
                        return [4 /*yield*/, terminal.start()];
                    case 2:
                        _a.sent();
                        this.terminalService.activateTerminal(terminal);
                        _a.label = 3;
                    case 3:
                        terminal.sendText(selectedText);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.attach = function (processId, taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var runningTasks, taskInfo, widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        taskInfo = runningTasks.find(function (t) { return t.taskId === taskId; });
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID, {
                                created: new Date().toString(),
                                id: this.getTerminalWidgetId(processId),
                                title: taskInfo
                                    ? "Task: " + taskInfo.config.label
                                    : "Task: #" + taskId,
                                destroyTermOnClose: true
                            })];
                    case 2:
                        widget = _a.sent();
                        this.shell.addWidget(widget, { area: 'bottom' });
                        if (taskInfo && taskInfo.config.presentation && taskInfo.config.presentation.reveal === common_2.RevealKind.Always) {
                            if (taskInfo.config.presentation.focus) { // assign focus to the terminal if presentation.focus is true
                                this.shell.activateWidget(widget.id);
                            }
                            else { // show the terminal but not assign focus
                                this.shell.revealWidget(widget.id);
                            }
                        }
                        widget.start(processId);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getTerminalWidgetId = function (terminalId) {
        return terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID + "-" + terminalId;
    };
    TaskService.prototype.configure = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskConfigurations.configure(task)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.isEventForThisClient = function (context) {
        if (context === this.getContext()) {
            return true;
        }
        return false;
    };
    TaskService.prototype.taskConfigurationChanged = function (event) {
        // do nothing for now
    };
    TaskService.prototype.getContext = function () {
        return this.workspaceService.workspace && this.workspaceService.workspace.uri;
    };
    /** Kill task for a given id if task is found */
    TaskService.prototype.kill = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.taskServer.kill(id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.logger.error("Error killing task '" + id + "': " + error_3);
                        this.messageService.error("Error killing task '" + id + "': " + error_3);
                        return [2 /*return*/];
                    case 3:
                        this.logger.debug("Task killed. Task id: " + id);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.isBackgroundTaskEnded = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var completedTask;
            return __generator(this, function (_a) {
                completedTask = this.runningTasks.get(id);
                return [2 /*return*/, completedTask && completedTask.isBackgroundTaskEnded.promise];
            });
        });
    };
    TaskService.prototype.getExitCode = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var completedTask;
            return __generator(this, function (_a) {
                completedTask = this.runningTasks.get(id);
                return [2 /*return*/, completedTask && completedTask.exitCode.promise];
            });
        });
    };
    TaskService.prototype.getTerminateSignal = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var completedTask;
            return __generator(this, function (_a) {
                completedTask = this.runningTasks.get(id);
                return [2 /*return*/, completedTask && completedTask.terminateSignal.promise];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], TaskService.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], TaskService.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskServer),
        __metadata("design:type", Object)
    ], TaskService.prototype, "taskServer", void 0);
    __decorate([
        inversify_1.inject(common_1.ILogger), inversify_1.named('task'),
        __metadata("design:type", Object)
    ], TaskService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(browser_1.WidgetManager),
        __metadata("design:type", browser_1.WidgetManager)
    ], TaskService.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(task_watcher_1.TaskWatcher),
        __metadata("design:type", task_watcher_1.TaskWatcher)
    ], TaskService.prototype, "taskWatcher", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], TaskService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskService.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(task_configurations_1.TaskConfigurations),
        __metadata("design:type", task_configurations_1.TaskConfigurations)
    ], TaskService.prototype, "taskConfigurations", void 0);
    __decorate([
        inversify_1.inject(provided_task_configurations_1.ProvidedTaskConfigurations),
        __metadata("design:type", provided_task_configurations_1.ProvidedTaskConfigurations)
    ], TaskService.prototype, "providedTaskConfigurations", void 0);
    __decorate([
        inversify_1.inject(browser_3.VariableResolverService),
        __metadata("design:type", browser_3.VariableResolverService)
    ], TaskService.prototype, "variableResolverService", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], TaskService.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], TaskService.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(problem_manager_1.ProblemManager),
        __metadata("design:type", problem_manager_1.ProblemManager)
    ], TaskService.prototype, "problemManager", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskService.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_problem_matcher_registry_1.ProblemMatcherRegistry),
        __metadata("design:type", task_problem_matcher_registry_1.ProblemMatcherRegistry)
    ], TaskService.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(task_name_resolver_1.TaskNameResolver),
        __metadata("design:type", task_name_resolver_1.TaskNameResolver)
    ], TaskService.prototype, "taskNameResolver", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskService.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskService.prototype, "taskSchemaUpdater", void 0);
    __decorate([
        inversify_1.inject(task_configuration_manager_1.TaskConfigurationManager),
        __metadata("design:type", task_configuration_manager_1.TaskConfigurationManager)
    ], TaskService.prototype, "taskConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], TaskService.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], TaskService.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskService.prototype, "init", null);
    TaskService = __decorate([
        inversify_1.injectable()
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task-service.js.map
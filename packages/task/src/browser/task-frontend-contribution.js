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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var quick_open_task_1 = require("./quick-open-task");
var browser_1 = require("@theia/core/lib/browser");
var widget_manager_1 = require("@theia/core/lib/browser/widget-manager");
var task_contribution_1 = require("./task-contribution");
var task_service_1 = require("./task-service");
var terminal_frontend_contribution_1 = require("@theia/terminal/lib/browser/terminal-frontend-contribution");
var task_schema_updater_1 = require("./task-schema-updater");
var common_2 = require("../common");
var browser_2 = require("@theia/editor/lib/browser");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var TaskCommands;
(function (TaskCommands) {
    var TASK_CATEGORY = 'Task';
    TaskCommands.TASK_RUN = {
        id: 'task:run',
        category: TASK_CATEGORY,
        label: 'Run Task...'
    };
    TaskCommands.TASK_RUN_BUILD = {
        id: 'task:run:build',
        category: TASK_CATEGORY,
        label: 'Run Build Task...'
    };
    TaskCommands.TASK_RUN_TEST = {
        id: 'task:run:test',
        category: TASK_CATEGORY,
        label: 'Run Test Task...'
    };
    TaskCommands.WORKBENCH_RUN_TASK = {
        id: 'workbench.action.tasks.runTask',
        category: TASK_CATEGORY
    };
    TaskCommands.TASK_RUN_LAST = {
        id: 'task:run:last',
        category: TASK_CATEGORY,
        label: 'Run Last Task'
    };
    TaskCommands.TASK_ATTACH = {
        id: 'task:attach',
        category: TASK_CATEGORY,
        label: 'Attach Task...'
    };
    TaskCommands.TASK_RUN_TEXT = {
        id: 'task:run:text',
        category: TASK_CATEGORY,
        label: 'Run Selected Text'
    };
    TaskCommands.TASK_CONFIGURE = {
        id: 'task:configure',
        category: TASK_CATEGORY,
        label: 'Configure Tasks...'
    };
    TaskCommands.TASK_CLEAR_HISTORY = {
        id: 'task:clear-history',
        category: TASK_CATEGORY,
        label: 'Clear History'
    };
    TaskCommands.TASK_SHOW_RUNNING = {
        id: 'task:show-running',
        category: TASK_CATEGORY,
        label: 'Show Running Tasks'
    };
    TaskCommands.TASK_TERMINATE = {
        id: 'task:terminate',
        category: TASK_CATEGORY,
        label: 'Terminate Task'
    };
    TaskCommands.TASK_RESTART_RUNNING = {
        id: 'task:restart-running',
        category: TASK_CATEGORY,
        label: 'Restart Running Task...'
    };
})(TaskCommands = exports.TaskCommands || (exports.TaskCommands = {}));
var TASKS_STORAGE_KEY = 'tasks';
var TaskFrontendContribution = /** @class */ (function () {
    function TaskFrontendContribution() {
    }
    TaskFrontendContribution.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.taskWatcher.onTaskCreated(function () { return _this.updateRunningTasksItem(); });
                this.taskWatcher.onTaskExit(function () { return _this.updateRunningTasksItem(); });
                return [2 /*return*/];
            });
        });
    };
    TaskFrontendContribution.prototype.onStart = function () {
        var _this = this;
        this.contributionProvider.getContributions().forEach(function (contrib) {
            if (contrib.registerResolvers) {
                contrib.registerResolvers(_this.taskResolverRegistry);
            }
            if (contrib.registerProviders) {
                contrib.registerProviders(_this.taskProviderRegistry);
            }
        });
        this.schemaUpdater.update();
        this.storageService.getData(TASKS_STORAGE_KEY, { recent: [] })
            .then(function (tasks) { return _this.taskService.recentTasks = tasks.recent; });
    };
    TaskFrontendContribution.prototype.onStop = function () {
        var recent = this.taskService.recentTasks;
        this.storageService.setData(TASKS_STORAGE_KEY, { recent: recent });
    };
    /**
     * Contribute a status-bar item to trigger
     * the `Show Running Tasks` command.
     */
    TaskFrontendContribution.prototype.updateRunningTasksItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = 'show-running-tasks';
                        return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        items = _a.sent();
                        if (!!items.length) {
                            this.statusBar.setElement(id, {
                                text: "$(tools) " + items.length,
                                tooltip: 'Show Running Tasks',
                                alignment: browser_1.StatusBarAlignment.LEFT,
                                priority: 2,
                                command: TaskCommands.TASK_SHOW_RUNNING.id,
                            });
                        }
                        else {
                            this.statusBar.removeElement(id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskFrontendContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(TaskCommands.WORKBENCH_RUN_TASK, {
            isEnabled: function () { return true; },
            execute: function (label) { return __awaiter(_this, void 0, void 0, function () {
                var didExecute;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.taskService.runTaskByLabel(label)];
                        case 1:
                            didExecute = _a.sent();
                            if (!didExecute) {
                                this.quickOpenTask.open();
                            }
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN, {
            isEnabled: function () { return true; },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = __read(args, 3), source = _a[0], label = _a[1], scope = _a[2];
                if (source && label) {
                    return _this.taskService.run(source, label, scope);
                }
                return _this.quickOpenTask.open();
            }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_BUILD, {
            isEnabled: function () { return _this.workspaceService.opened; },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.quickOpenTask.runBuildOrTestTask('build');
            }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_TEST, {
            isEnabled: function () { return _this.workspaceService.opened; },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.quickOpenTask.runBuildOrTestTask('test');
            }
        });
        registry.registerCommand(TaskCommands.TASK_ATTACH, {
            isEnabled: function () { return true; },
            execute: function () { return _this.quickOpenTask.attach(); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_LAST, {
            isEnabled: function () { return !!_this.taskService.getLastTask(); },
            execute: function () { return _this.taskService.runLastTask(); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_TEXT, {
            isVisible: function () { return !!_this.editorManager.currentEditor; },
            isEnabled: function () { return !!_this.editorManager.currentEditor; },
            execute: function () { return _this.taskService.runSelectedText(); }
        });
        registry.registerCommand(TaskCommands.TASK_CONFIGURE, {
            execute: function () { return _this.quickOpenTask.configure(); }
        });
        registry.registerCommand(TaskCommands.TASK_CLEAR_HISTORY, {
            execute: function () { return _this.taskService.clearRecentTasks(); }
        });
        registry.registerCommand(TaskCommands.TASK_SHOW_RUNNING, {
            execute: function () { return _this.taskRunningQuickOpen.open(); }
        });
        registry.registerCommand(TaskCommands.TASK_TERMINATE, {
            execute: function () { return _this.taskTerminateQuickOpen.open(); }
        });
        registry.registerCommand(TaskCommands.TASK_RESTART_RUNNING, {
            execute: function () { return _this.taskRestartRunningQuickOpen.open(); }
        });
    };
    TaskFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN.id,
            order: '0'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_BUILD.id,
            order: '1'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_TEST.id,
            order: '2'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_LAST.id,
            order: '3'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_ATTACH.id,
            order: '4'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_TEXT.id,
            order: '5'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_INFO, {
            commandId: TaskCommands.TASK_SHOW_RUNNING.id,
            label: 'Show Running Tasks...',
            order: '0'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_INFO, {
            commandId: TaskCommands.TASK_RESTART_RUNNING.id,
            label: TaskCommands.TASK_RESTART_RUNNING.label,
            order: '1'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_INFO, {
            commandId: TaskCommands.TASK_TERMINATE.id,
            label: 'Terminate Task...',
            order: '2'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_CONFIG, {
            commandId: TaskCommands.TASK_CONFIGURE.id,
            order: '0'
        });
    };
    TaskFrontendContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.quickOpenTask);
    };
    TaskFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: TaskCommands.TASK_RUN_LAST.id,
            keybinding: 'ctrlcmd+shift+k'
        });
    };
    __decorate([
        inversify_1.inject(quick_open_task_1.QuickOpenTask),
        __metadata("design:type", quick_open_task_1.QuickOpenTask)
    ], TaskFrontendContribution.prototype, "quickOpenTask", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], TaskFrontendContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], TaskFrontendContribution.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(common_1.ILogger), inversify_1.named('task'),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(widget_manager_1.WidgetManager),
        __metadata("design:type", widget_manager_1.WidgetManager)
    ], TaskFrontendContribution.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(task_contribution_1.TaskContribution),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "contributionProvider", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], TaskFrontendContribution.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], TaskFrontendContribution.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], TaskFrontendContribution.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskFrontendContribution.prototype, "schemaUpdater", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.TaskRunningQuickOpen),
        __metadata("design:type", quick_open_task_1.TaskRunningQuickOpen)
    ], TaskFrontendContribution.prototype, "taskRunningQuickOpen", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.TaskTerminateQuickOpen),
        __metadata("design:type", quick_open_task_1.TaskTerminateQuickOpen)
    ], TaskFrontendContribution.prototype, "taskTerminateQuickOpen", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.TaskRestartRunningQuickOpen),
        __metadata("design:type", quick_open_task_1.TaskRestartRunningQuickOpen)
    ], TaskFrontendContribution.prototype, "taskRestartRunningQuickOpen", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskWatcher),
        __metadata("design:type", common_2.TaskWatcher)
    ], TaskFrontendContribution.prototype, "taskWatcher", void 0);
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TaskFrontendContribution.prototype, "init", null);
    TaskFrontendContribution = __decorate([
        inversify_1.injectable()
    ], TaskFrontendContribution);
    return TaskFrontendContribution;
}());
exports.TaskFrontendContribution = TaskFrontendContribution;
//# sourceMappingURL=task-frontend-contribution.js.map
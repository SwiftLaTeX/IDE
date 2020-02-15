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
var debounce = require("p-debounce");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var event_1 = require("@theia/core/lib/common/event");
var browser_1 = require("@theia/editor/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var quick_pick_service_1 = require("@theia/core/lib/common/quick-pick-service");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var task_configuration_model_1 = require("./task-configuration-model");
var task_templates_1 = require("./task-templates");
var workspace_variable_contribution_1 = require("@theia/workspace/lib/browser/workspace-variable-contribution");
var common_1 = require("@theia/filesystem/lib/common");
var filesystem_watcher_protocol_1 = require("@theia/filesystem/lib/common/filesystem-watcher-protocol");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var TaskConfigurationManager = /** @class */ (function () {
    function TaskConfigurationManager() {
        var _this = this;
        this.onDidChangeTaskConfigEmitter = new event_1.Emitter();
        this.onDidChangeTaskConfig = this.onDidChangeTaskConfigEmitter.event;
        this.models = new Map();
        this.updateModels = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var roots, toDelete, _loop_1, this_1, roots_1, roots_1_1, rootStat, toDelete_1, toDelete_1_1, uri, model;
            var e_1, _a, e_2, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _c.sent();
                        toDelete = new Set(this.models.keys());
                        _loop_1 = function (rootStat) {
                            var key = rootStat.uri;
                            toDelete.delete(key);
                            if (!this_1.models.has(key)) {
                                var model = new task_configuration_model_1.TaskConfigurationModel(key, this_1.preferences);
                                model.onDidChange(function () { return _this.onDidChangeTaskConfigEmitter.fire({ uri: key, type: filesystem_watcher_protocol_1.FileChangeType.UPDATED }); });
                                model.onDispose(function () { return _this.models.delete(key); });
                                this_1.models.set(key, model);
                                this_1.onDidChangeTaskConfigEmitter.fire({ uri: key, type: filesystem_watcher_protocol_1.FileChangeType.UPDATED });
                            }
                        };
                        this_1 = this;
                        try {
                            for (roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                                rootStat = roots_1_1.value;
                                _loop_1(rootStat);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        try {
                            for (toDelete_1 = __values(toDelete), toDelete_1_1 = toDelete_1.next(); !toDelete_1_1.done; toDelete_1_1 = toDelete_1.next()) {
                                uri = toDelete_1_1.value;
                                model = this.models.get(uri);
                                if (model) {
                                    model.dispose();
                                }
                                this.onDidChangeTaskConfigEmitter.fire({ uri: uri, type: filesystem_watcher_protocol_1.FileChangeType.DELETED });
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (toDelete_1_1 && !toDelete_1_1.done && (_b = toDelete_1.return)) _b.call(toDelete_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 500);
    }
    TaskConfigurationManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.updateModels();
                this.preferences.onPreferenceChanged(function (e) {
                    if (e.preferenceName === 'tasks') {
                        _this.updateModels();
                    }
                });
                this.workspaceService.onWorkspaceChanged(function () {
                    _this.updateModels();
                });
                return [2 /*return*/];
            });
        });
    };
    TaskConfigurationManager.prototype.getTasks = function (sourceFolderUri) {
        if (this.models.has(sourceFolderUri)) {
            var taskPrefModel = this.models.get(sourceFolderUri);
            return taskPrefModel.configurations;
        }
        return [];
    };
    TaskConfigurationManager.prototype.getTask = function (name, sourceFolderUri) {
        var e_3, _a;
        var taskPrefModel = this.getModel(sourceFolderUri);
        if (taskPrefModel) {
            try {
                for (var _b = __values(taskPrefModel.configurations), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var configuration = _c.value;
                    if (configuration.name === name) {
                        return configuration;
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
    };
    TaskConfigurationManager.prototype.openConfiguration = function (sourceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskPrefModel = this.getModel(sourceFolderUri);
                        if (!taskPrefModel) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doOpen(taskPrefModel)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.addTaskConfiguration = function (sourceFolderUri, taskConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel, configurations;
            return __generator(this, function (_a) {
                taskPrefModel = this.getModel(sourceFolderUri);
                if (taskPrefModel) {
                    configurations = taskPrefModel.configurations;
                    return [2 /*return*/, this.setTaskConfigurations(sourceFolderUri, __spread(configurations, [taskConfig]))];
                }
                return [2 /*return*/];
            });
        });
    };
    TaskConfigurationManager.prototype.setTaskConfigurations = function (sourceFolderUri, taskConfigs) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel;
            return __generator(this, function (_a) {
                taskPrefModel = this.getModel(sourceFolderUri);
                if (taskPrefModel) {
                    return [2 /*return*/, taskPrefModel.setConfigurations(taskConfigs)];
                }
                return [2 /*return*/];
            });
        });
    };
    TaskConfigurationManager.prototype.getModel = function (sourceFolderUri) {
        var e_4, _a;
        if (!sourceFolderUri) {
            return undefined;
        }
        try {
            for (var _b = __values(this.models.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var model = _c.value;
                if (model.workspaceFolderUri === sourceFolderUri) {
                    return model;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    TaskConfigurationManager.prototype.doOpen = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = model.uri;
                        if (!!uri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doCreate(model)];
                    case 1:
                        uri = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (uri) {
                            return [2 /*return*/, this.editorManager.open(uri, {
                                    mode: 'activate'
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.doCreate = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var content, configUri, uri, fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInitialConfigurationContent()];
                    case 1:
                        content = _a.sent();
                        if (!content) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.preferences.set('tasks', {}, browser_2.PreferenceScope.Folder, model.workspaceFolderUri)];
                    case 2:
                        _a.sent(); // create dummy tasks.json in the correct place
                        configUri = this.preferences.resolve('tasks', [], model.workspaceFolderUri).configUri;
                        uri = void 0;
                        if (configUri && configUri.path.base === 'tasks.json') {
                            uri = configUri;
                        }
                        else { // fallback
                            uri = new uri_1.default(model.workspaceFolderUri).resolve(this.preferenceConfigurations.getPaths()[0] + "/tasks.json");
                        }
                        return [4 /*yield*/, this.filesystem.getFileStat(uri.toString())];
                    case 3:
                        fileStat = _a.sent();
                        if (!fileStat) {
                            throw new Error("file not found: " + uri.toString());
                        }
                        try {
                            this.filesystem.setContent(fileStat, content);
                        }
                        catch (e) {
                            if (!common_1.FileSystemError.FileExists.is(e)) {
                                throw e;
                            }
                        }
                        return [2 /*return*/, uri];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.getInitialConfigurationContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.quickPick.show(this.taskTemplateSelector.selectTemplates(), {
                            placeholder: 'Select a Task Template'
                        })];
                    case 1:
                        selected = _a.sent();
                        if (selected) {
                            return [2 /*return*/, selected.content];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskConfigurationManager.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], TaskConfigurationManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], TaskConfigurationManager.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], TaskConfigurationManager.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.PreferenceService),
        __metadata("design:type", Object)
    ], TaskConfigurationManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], TaskConfigurationManager.prototype, "preferenceConfigurations", void 0);
    __decorate([
        inversify_1.inject(workspace_variable_contribution_1.WorkspaceVariableContribution),
        __metadata("design:type", workspace_variable_contribution_1.WorkspaceVariableContribution)
    ], TaskConfigurationManager.prototype, "workspaceVariables", void 0);
    __decorate([
        inversify_1.inject(task_templates_1.TaskTemplateSelector),
        __metadata("design:type", task_templates_1.TaskTemplateSelector)
    ], TaskConfigurationManager.prototype, "taskTemplateSelector", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TaskConfigurationManager.prototype, "init", null);
    TaskConfigurationManager = __decorate([
        inversify_1.injectable()
    ], TaskConfigurationManager);
    return TaskConfigurationManager;
}());
exports.TaskConfigurationManager = TaskConfigurationManager;
//# sourceMappingURL=task-configuration-manager.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var timers_1 = require("timers");
var status_bar_1 = require("@theia/core/lib/browser/status-bar/status-bar");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var commands_1 = require("@phosphor/commands");
var widgets_1 = require("@phosphor/widgets");
var frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
var connection_status_service_1 = require("@theia/core/lib/browser/connection-status-service");
var plugin_dev_protocol_1 = require("../common/plugin-dev-protocol");
var hosted_plugin_manager_client_1 = require("./hosted-plugin-manager-client");
var hosted_plugin_log_viewer_1 = require("./hosted-plugin-log-viewer");
var hosted_plugin_preferences_1 = require("./hosted-plugin-preferences");
/**
 * Adds a status bar element displaying the state of secondary Theia instance with hosted plugin and
 * allows controlling the instance by simple clicking on the status bar element.
 */
var HostedPluginController = /** @class */ (function () {
    function HostedPluginController() {
        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.STOPPED;
    }
    HostedPluginController_1 = HostedPluginController;
    HostedPluginController.prototype.initialize = function () {
        var _this = this;
        this.hostedPluginServer.getHostedPlugin().then(function (pluginMetadata) {
            if (!pluginMetadata) {
                _this.frontendApplicationStateService.reachedState('ready').then(function () {
                    // handles status bar item
                    _this.hostedPluginManagerClient.onStateChanged(function (e) {
                        if (e.state === hosted_plugin_manager_client_1.HostedInstanceState.STARTING) {
                            _this.onHostedPluginStarting();
                        }
                        else if (e.state === hosted_plugin_manager_client_1.HostedInstanceState.RUNNING) {
                            _this.onHostedPluginRunning();
                        }
                        else if (e.state === hosted_plugin_manager_client_1.HostedInstanceState.STOPPED) {
                            _this.onHostedPluginStopped();
                        }
                        else if (e.state === hosted_plugin_manager_client_1.HostedInstanceState.FAILED) {
                            _this.onHostedPluginFailed();
                        }
                    });
                    // handles watch compilation
                    _this.hostedPluginManagerClient.onStateChanged(function (e) { return _this.handleWatchers(e); });
                    // updates status bar if page is loading when hosted instance is already running
                    _this.hostedPluginServer.isHostedPluginInstanceRunning().then(function (running) {
                        if (running) {
                            _this.onHostedPluginRunning();
                        }
                    });
                });
                _this.connectionStatusService.onStatusChange(function () { return _this.onConnectionStatusChanged(); });
                _this.preferenceService.onPreferenceChanged(function (preference) { return _this.onPreferencesChanged(preference); });
            }
            else {
                console.error("Need to load plugin " + pluginMetadata.model.id);
            }
        });
    };
    /**
     * Display status bar element for stopped plugin.
     */
    HostedPluginController.prototype.onHostedPluginStopped = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.STOPPED;
                        this.entry = {
                            text: 'Hosted Plugin: Stopped $(angle-up)',
                            alignment: browser_1.StatusBarAlignment.LEFT,
                            priority: 100,
                            onclick: function (e) {
                                _this.showMenu(e.clientX, e.clientY);
                            }
                        };
                        this.entry.className = HostedPluginController_1.HOSTED_PLUGIN;
                        return [4 /*yield*/, this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, this.entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Display status bar element for starting plugin.
     */
    HostedPluginController.prototype.onHostedPluginStarting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.STARTING;
                        this.hostedPluginLogViewer.showLogConsole();
                        this.entry = {
                            text: '$(cog~spin) Hosted Plugin: Starting',
                            alignment: browser_1.StatusBarAlignment.LEFT,
                            priority: 100
                        };
                        this.entry.className = HostedPluginController_1.HOSTED_PLUGIN;
                        return [4 /*yield*/, this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, this.entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Display status bar element for running plugin.
     */
    HostedPluginController.prototype.onHostedPluginRunning = function () {
        return __awaiter(this, void 0, void 0, function () {
            var entryText;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.RUNNING;
                        if (this.hostedPluginPreferences['hosted-plugin.watchMode'] && this.watcherSuccess) {
                            entryText = '$(cog~spin) Hosted Plugin: Watching $(angle-up)';
                        }
                        else {
                            entryText = '$(cog~spin) Hosted Plugin: Running $(angle-up)';
                        }
                        this.entry = {
                            text: entryText,
                            alignment: browser_1.StatusBarAlignment.LEFT,
                            priority: 100,
                            onclick: function (e) {
                                _this.showMenu(e.clientX, e.clientY);
                            }
                        };
                        this.entry.className = HostedPluginController_1.HOSTED_PLUGIN;
                        return [4 /*yield*/, this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, this.entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Display status bar element for failed plugin.
     */
    HostedPluginController.prototype.onHostedPluginFailed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.FAILED;
                        this.entry = {
                            text: 'Hosted Plugin: Stopped $(angle-up)',
                            alignment: browser_1.StatusBarAlignment.LEFT,
                            priority: 100,
                            onclick: function (e) {
                                _this.showMenu(e.clientX, e.clientY);
                            }
                        };
                        this.entry.className = HostedPluginController_1.HOSTED_PLUGIN_FAILED;
                        return [4 /*yield*/, this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, this.entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginController.prototype.onPreferencesChanged = function (preference) {
        return __awaiter(this, void 0, void 0, function () {
            var pluginLocation, isWatchCompilationRunning;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(preference.preferenceName === 'hosted-plugin.watchMode')) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.hostedPluginServer.getHostedPluginURI()];
                    case 2:
                        pluginLocation = _a.sent();
                        return [4 /*yield*/, this.hostedPluginServer.isWatchCompilationRunning(pluginLocation)];
                    case 3:
                        isWatchCompilationRunning = _a.sent();
                        if (!(preference.newValue === true)) return [3 /*break*/, 6];
                        if (!!isWatchCompilationRunning) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.runWatchCompilation(pluginLocation.toString())];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        if (!isWatchCompilationRunning) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.hostedPluginServer.stopWatchCompilation(pluginLocation.toString())];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        // update status bar
                        this.onHostedPluginRunning();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Starts / stops watchers on hosted instance state change.
     *
     * @param event hosted instance state change event
     */
    HostedPluginController.prototype.handleWatchers = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var isRunning, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.state === hosted_plugin_manager_client_1.HostedInstanceState.RUNNING)) return [3 /*break*/, 3];
                        if (!this.hostedPluginPreferences['hosted-plugin.watchMode']) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.runWatchCompilation(event.pluginLocation.toString())];
                    case 1:
                        _a.sent();
                        // update status bar
                        this.onHostedPluginRunning();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 8];
                    case 3:
                        if (!(event.state === hosted_plugin_manager_client_1.HostedInstanceState.STOPPING)) return [3 /*break*/, 8];
                        if (!this.hostedPluginPreferences['hosted-plugin.watchMode']) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.hostedPluginServer.isWatchCompilationRunning(event.pluginLocation.toString())];
                    case 4:
                        isRunning = _a.sent();
                        if (!isRunning) return [3 /*break*/, 8];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.hostedPluginServer.stopWatchCompilation(event.pluginLocation.toString())];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        this.messageService.error(this.getErrorMessage(error_1.message));
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginController.prototype.runWatchCompilation = function (pluginLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.hostedPluginServer.runWatchCompilation(pluginLocation)];
                    case 1:
                        _a.sent();
                        this.watcherSuccess = true;
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.messageService.error(this.getErrorMessage(error_2));
                        this.watcherSuccess = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginController.prototype.getErrorMessage = function (error) {
        return error.message.substring(error.message.indexOf(':') + 1);
    };
    /**
     * Updaing status bar element when changing connection status.
     */
    HostedPluginController.prototype.onConnectionStatusChanged = function () {
        var _this = this;
        if (this.connectionStatusService.currentStatus === connection_status_service_1.ConnectionStatus.OFFLINE) {
            // Re-set the element only if it's visible on status bar
            if (this.entry) {
                var offlineElement = {
                    text: 'Hosted Plugin: Stopped',
                    alignment: browser_1.StatusBarAlignment.LEFT,
                    priority: 100
                };
                this.entry.className = HostedPluginController_1.HOSTED_PLUGIN_OFFLINE;
                this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, offlineElement);
            }
        }
        else {
            // ask state of hosted plugin when switching to Online
            if (this.entry) {
                this.hostedPluginServer.isHostedPluginInstanceRunning().then(function (running) {
                    if (running) {
                        _this.onHostedPluginRunning();
                    }
                    else {
                        _this.onHostedPluginStopped();
                    }
                });
            }
        }
    };
    /**
     * Show menu containing actions to start/stop/restart hosted plugin.
     */
    HostedPluginController.prototype.showMenu = function (x, y) {
        var commands = new commands_1.CommandRegistry();
        var menu = new widgets_1.Menu({
            commands: commands
        });
        if (this.pluginState === hosted_plugin_manager_client_1.HostedInstanceState.RUNNING) {
            this.addCommandsForRunningPlugin(commands, menu);
        }
        else if (this.pluginState === hosted_plugin_manager_client_1.HostedInstanceState.STOPPED || this.pluginState === hosted_plugin_manager_client_1.HostedInstanceState.FAILED) {
            this.addCommandsForStoppedPlugin(commands, menu);
        }
        menu.open(x, y);
    };
    /**
     * Adds commands to the menu for running plugin.
     */
    HostedPluginController.prototype.addCommandsForRunningPlugin = function (commands, menu) {
        var _this = this;
        commands.addCommand(hosted_plugin_manager_client_1.HostedPluginCommands.STOP.id, {
            label: 'Stop Instance',
            icon: 'fa fa-stop',
            execute: function () { return timers_1.setTimeout(function () { return _this.hostedPluginManagerClient.stop(); }, 100); }
        });
        menu.addItem({
            type: 'command',
            command: hosted_plugin_manager_client_1.HostedPluginCommands.STOP.id
        });
        commands.addCommand(hosted_plugin_manager_client_1.HostedPluginCommands.RESTART.id, {
            label: 'Restart Instance',
            icon: 'fa fa-repeat',
            execute: function () { return timers_1.setTimeout(function () { return _this.hostedPluginManagerClient.restart(); }, 100); }
        });
        menu.addItem({
            type: 'command',
            command: hosted_plugin_manager_client_1.HostedPluginCommands.RESTART.id
        });
    };
    /**
     * Adds command to the menu for stopped plugin.
     */
    HostedPluginController.prototype.addCommandsForStoppedPlugin = function (commands, menu) {
        var _this = this;
        commands.addCommand(hosted_plugin_manager_client_1.HostedPluginCommands.START.id, {
            label: 'Start Instance',
            icon: 'fa fa-play',
            execute: function () { return timers_1.setTimeout(function () { return _this.hostedPluginManagerClient.start(); }, 100); }
        });
        menu.addItem({
            type: 'command',
            command: hosted_plugin_manager_client_1.HostedPluginCommands.START.id
        });
        commands.addCommand(hosted_plugin_manager_client_1.HostedPluginCommands.DEBUG.id, {
            label: 'Debug Instance',
            icon: 'fa fa-bug',
            execute: function () { return timers_1.setTimeout(function () { return _this.hostedPluginManagerClient.debug(); }, 100); }
        });
        menu.addItem({
            type: 'command',
            command: hosted_plugin_manager_client_1.HostedPluginCommands.DEBUG.id
        });
    };
    var HostedPluginController_1;
    HostedPluginController.HOSTED_PLUGIN = 'hosted-plugin';
    HostedPluginController.HOSTED_PLUGIN_OFFLINE = 'hosted-plugin-offline';
    HostedPluginController.HOSTED_PLUGIN_FAILED = 'hosted-plugin-failed';
    __decorate([
        inversify_1.inject(status_bar_1.StatusBar),
        __metadata("design:type", Object)
    ], HostedPluginController.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], HostedPluginController.prototype, "frontendApplicationStateService", void 0);
    __decorate([
        inversify_1.inject(plugin_dev_protocol_1.HostedPluginServer),
        __metadata("design:type", Object)
    ], HostedPluginController.prototype, "hostedPluginServer", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_manager_client_1.HostedPluginManagerClient),
        __metadata("design:type", hosted_plugin_manager_client_1.HostedPluginManagerClient)
    ], HostedPluginController.prototype, "hostedPluginManagerClient", void 0);
    __decorate([
        inversify_1.inject(connection_status_service_1.ConnectionStatusService),
        __metadata("design:type", Object)
    ], HostedPluginController.prototype, "connectionStatusService", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_log_viewer_1.HostedPluginLogViewer),
        __metadata("design:type", hosted_plugin_log_viewer_1.HostedPluginLogViewer)
    ], HostedPluginController.prototype, "hostedPluginLogViewer", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_preferences_1.HostedPluginPreferences),
        __metadata("design:type", Object)
    ], HostedPluginController.prototype, "hostedPluginPreferences", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceServiceImpl),
        __metadata("design:type", browser_1.PreferenceServiceImpl)
    ], HostedPluginController.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], HostedPluginController.prototype, "messageService", void 0);
    HostedPluginController = HostedPluginController_1 = __decorate([
        inversify_1.injectable()
    ], HostedPluginController);
    return HostedPluginController;
}());
exports.HostedPluginController = HostedPluginController;
//# sourceMappingURL=hosted-plugin-controller.js.map
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var uri_1 = require("@theia/core/lib/common/uri");
var path_1 = require("@theia/core/lib/common/path");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var window_service_1 = require("@theia/core/lib/browser/window/window-service");
var browser_2 = require("@theia/workspace/lib/browser");
var common_2 = require("@theia/filesystem/lib/common");
var browser_3 = require("@theia/filesystem/lib/browser");
var plugin_dev_protocol_1 = require("../common/plugin-dev-protocol");
var debug_session_manager_1 = require("@theia/debug/lib/browser/debug-session-manager");
var hosted_plugin_preferences_1 = require("./hosted-plugin-preferences");
/**
 * Commands to control Hosted plugin instances.
 */
var HostedPluginCommands;
(function (HostedPluginCommands) {
    var HOSTED_PLUGIN_CATEGORY = 'Hosted Plugin';
    HostedPluginCommands.START = {
        id: 'hosted-plugin:start',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Start Instance'
    };
    HostedPluginCommands.DEBUG = {
        id: 'hosted-plugin:debug',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Debug Instance'
    };
    HostedPluginCommands.STOP = {
        id: 'hosted-plugin:stop',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Stop Instance'
    };
    HostedPluginCommands.RESTART = {
        id: 'hosted-plugin:restart',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Restart Instance'
    };
    HostedPluginCommands.SELECT_PATH = {
        id: 'hosted-plugin:select-path',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Select Path'
    };
})(HostedPluginCommands = exports.HostedPluginCommands || (exports.HostedPluginCommands = {}));
/**
 * Available states of hosted plugin instance.
 */
var HostedInstanceState;
(function (HostedInstanceState) {
    HostedInstanceState["STOPPED"] = "stopped";
    HostedInstanceState["STARTING"] = "starting";
    HostedInstanceState["RUNNING"] = "running";
    HostedInstanceState["STOPPING"] = "stopping";
    HostedInstanceState["FAILED"] = "failed";
})(HostedInstanceState = exports.HostedInstanceState || (exports.HostedInstanceState = {}));
/**
 * Responsible for UI to set up and control Hosted Plugin Instance.
 */
var HostedPluginManagerClient = /** @class */ (function () {
    function HostedPluginManagerClient() {
        this.isDebug = false;
        this.stateChanged = new common_1.Emitter();
    }
    Object.defineProperty(HostedPluginManagerClient.prototype, "onStateChanged", {
        get: function () {
            return this.stateChanged.event;
        },
        enumerable: true,
        configurable: true
    });
    HostedPluginManagerClient.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.openNewTabAskDialog = new OpenHostedInstanceLinkDialog(this.windowService);
                        return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        if (!_c.sent()) return [3 /*break*/, 3];
                        _a = this;
                        _b = uri_1.default.bind;
                        return [4 /*yield*/, this.hostedPluginServer.getHostedPluginURI()];
                    case 2:
                        _a.pluginLocation = new (_b.apply(uri_1.default, [void 0, _c.sent()]))();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HostedPluginManagerClient.prototype, "lastPluginLocation", {
        get: function () {
            if (this.pluginLocation) {
                return this.pluginLocation.toString();
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    HostedPluginManagerClient.prototype.start = function (debugConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        if (_c.sent()) {
                            this.messageService.warn('Hosted instance is already running.');
                            return [2 /*return*/];
                        }
                        if (!!this.pluginLocation) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.selectPluginPath()];
                    case 2:
                        _c.sent();
                        if (!this.pluginLocation) {
                            // selection was cancelled
                            return [2 /*return*/];
                        }
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 9, , 10]);
                        this.stateChanged.fire({ state: HostedInstanceState.STARTING, pluginLocation: this.pluginLocation });
                        this.messageService.info('Starting hosted instance server ...');
                        if (!debugConfig) return [3 /*break*/, 5];
                        this.isDebug = true;
                        _a = this;
                        return [4 /*yield*/, this.hostedPluginServer.runDebugHostedPluginInstance(this.pluginLocation.toString(), debugConfig)];
                    case 4:
                        _a.pluginInstanceURL = _c.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        this.isDebug = false;
                        _b = this;
                        return [4 /*yield*/, this.hostedPluginServer.runHostedPluginInstance(this.pluginLocation.toString())];
                    case 6:
                        _b.pluginInstanceURL = _c.sent();
                        _c.label = 7;
                    case 7: return [4 /*yield*/, this.openPluginWindow()];
                    case 8:
                        _c.sent();
                        this.messageService.info('Hosted instance is running at: ' + this.pluginInstanceURL);
                        this.stateChanged.fire({ state: HostedInstanceState.RUNNING, pluginLocation: this.pluginLocation });
                        return [3 /*break*/, 10];
                    case 9:
                        error_1 = _c.sent();
                        this.messageService.error('Failed to run hosted plugin instance: ' + this.getErrorMessage(error_1));
                        this.stateChanged.fire({ state: HostedInstanceState.FAILED, pluginLocation: this.pluginLocation });
                        this.stop();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginManagerClient.prototype.debug = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.start({ debugMode: this.hostedPluginPreferences['hosted-plugin.debugMode'] })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.startDebugSessionManager()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginManagerClient.prototype.startDebugSessionManager = function () {
        return __awaiter(this, void 0, void 0, function () {
            var outFiles, fsPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outFiles = undefined;
                        if (!this.pluginLocation) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.getFsPath(this.pluginLocation.toString())];
                    case 1:
                        fsPath = _a.sent();
                        if (fsPath) {
                            outFiles = [new path_1.Path(fsPath).join('**', '*.js').toString()];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.debugSessionManager.start({
                            configuration: {
                                type: 'node',
                                request: 'attach',
                                timeout: 30000,
                                name: 'Hosted Plugin',
                                smartStep: true,
                                sourceMaps: !!outFiles,
                                outFiles: outFiles
                            }
                        })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginManagerClient.prototype.stop = function (checkRunning) {
        if (checkRunning === void 0) { checkRunning = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = checkRunning;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            this.messageService.warn('Hosted instance is not running.');
                            return [2 /*return*/];
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        this.stateChanged.fire({ state: HostedInstanceState.STOPPING, pluginLocation: this.pluginLocation });
                        return [4 /*yield*/, this.hostedPluginServer.terminateHostedPluginInstance()];
                    case 4:
                        _b.sent();
                        this.messageService.info((this.pluginInstanceURL ? this.pluginInstanceURL : 'The instance') + ' has been terminated.');
                        this.stateChanged.fire({ state: HostedInstanceState.STOPPED, pluginLocation: this.pluginLocation });
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _b.sent();
                        this.messageService.error(this.getErrorMessage(error_2));
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginManagerClient.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastError, tries, _a, _b, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        if (!_c.sent()) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.stop(false)];
                    case 2:
                        _c.sent();
                        this.messageService.info('Starting hosted instance server ...');
                        // It takes some time before OS released all resources e.g. port.
                        // Keep trying to run hosted instance with delay.
                        this.stateChanged.fire({ state: HostedInstanceState.STARTING, pluginLocation: this.pluginLocation });
                        lastError = void 0;
                        tries = 0;
                        _c.label = 3;
                    case 3:
                        if (!(tries < 15)) return [3 /*break*/, 14];
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 11, , 13]);
                        if (!this.isDebug) return [3 /*break*/, 7];
                        _a = this;
                        return [4 /*yield*/, this.hostedPluginServer.runDebugHostedPluginInstance(this.pluginLocation.toString(), {
                                debugMode: this.hostedPluginPreferences['hosted-plugin.debugMode']
                            })];
                    case 5:
                        _a.pluginInstanceURL = _c.sent();
                        return [4 /*yield*/, this.startDebugSessionManager()];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        _b = this;
                        return [4 /*yield*/, this.hostedPluginServer.runHostedPluginInstance(this.pluginLocation.toString())];
                    case 8:
                        _b.pluginInstanceURL = _c.sent();
                        _c.label = 9;
                    case 9: return [4 /*yield*/, this.openPluginWindow()];
                    case 10:
                        _c.sent();
                        this.messageService.info('Hosted instance is running at: ' + this.pluginInstanceURL);
                        this.stateChanged.fire({
                            state: HostedInstanceState.RUNNING,
                            pluginLocation: this.pluginLocation
                        });
                        return [2 /*return*/];
                    case 11:
                        error_3 = _c.sent();
                        lastError = error_3;
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 12:
                        _c.sent();
                        return [3 /*break*/, 13];
                    case 13:
                        tries++;
                        return [3 /*break*/, 3];
                    case 14:
                        this.messageService.error('Failed to run hosted plugin instance: ' + this.getErrorMessage(lastError));
                        this.stateChanged.fire({ state: HostedInstanceState.FAILED, pluginLocation: this.pluginLocation });
                        this.stop();
                        return [3 /*break*/, 16];
                    case 15:
                        this.messageService.warn('Hosted Plugin instance was not running.');
                        this.start();
                        _c.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates directory choose dialog and set selected folder into pluginLocation field.
     */
    HostedPluginManagerClient.prototype.selectPluginPath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceFolder, _a, rootNode, dialog, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _a = (_b.sent())[0];
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileSystem.getCurrentUserHome()];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        workspaceFolder = _a;
                        if (!workspaceFolder) {
                            throw new Error('Unable to find the root');
                        }
                        rootNode = browser_3.DirNode.createRoot(workspaceFolder);
                        dialog = this.openFileDialogFactory({
                            title: HostedPluginCommands.SELECT_PATH.label,
                            openLabel: 'Select',
                            canSelectFiles: false,
                            canSelectFolders: true,
                            canSelectMany: false
                        });
                        dialog.model.navigateTo(rootNode);
                        return [4 /*yield*/, dialog.open()];
                    case 4:
                        result = _b.sent();
                        if (!common_1.UriSelection.is(result)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.hostedPluginServer.isPluginValid(result.uri.toString())];
                    case 5:
                        if (_b.sent()) {
                            this.pluginLocation = result.uri;
                            this.messageService.info('Plugin folder is set to: ' + this.labelProvider.getLongName(result.uri));
                        }
                        else {
                            this.messageService.error('Specified folder does not contain valid plugin.');
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Opens window with URL to the running plugin instance.
     */
    HostedPluginManagerClient.prototype.openPluginWindow = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // do nothing for electron browser
                if (browser_1.isNative) {
                    return [2 /*return*/];
                }
                if (this.pluginInstanceURL) {
                    try {
                        this.windowService.openNewWindow(this.pluginInstanceURL);
                    }
                    catch (err) {
                        // browser blocked opening of a new tab
                        this.openNewTabAskDialog.showOpenNewTabAskDialog(this.pluginInstanceURL);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    HostedPluginManagerClient.prototype.getErrorMessage = function (error) {
        return error.message.substring(error.message.indexOf(':') + 1);
    };
    __decorate([
        inversify_1.inject(plugin_dev_protocol_1.HostedPluginServer),
        __metadata("design:type", Object)
    ], HostedPluginManagerClient.prototype, "hostedPluginServer", void 0);
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], HostedPluginManagerClient.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_3.OpenFileDialogFactory),
        __metadata("design:type", Function)
    ], HostedPluginManagerClient.prototype, "openFileDialogFactory", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], HostedPluginManagerClient.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], HostedPluginManagerClient.prototype, "windowService", void 0);
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], HostedPluginManagerClient.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], HostedPluginManagerClient.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], HostedPluginManagerClient.prototype, "debugSessionManager", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_preferences_1.HostedPluginPreferences),
        __metadata("design:type", Object)
    ], HostedPluginManagerClient.prototype, "hostedPluginPreferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], HostedPluginManagerClient.prototype, "init", null);
    HostedPluginManagerClient = __decorate([
        inversify_1.injectable()
    ], HostedPluginManagerClient);
    return HostedPluginManagerClient;
}());
exports.HostedPluginManagerClient = HostedPluginManagerClient;
var OpenHostedInstanceLinkDialog = /** @class */ (function (_super) {
    __extends(OpenHostedInstanceLinkDialog, _super);
    function OpenHostedInstanceLinkDialog(windowService) {
        var _this = _super.call(this, {
            title: 'Your browser prevented opening of a new tab'
        }) || this;
        _this.windowService = windowService;
        _this.linkNode = document.createElement('a');
        _this.linkNode.target = '_blank';
        _this.linkNode.setAttribute('style', 'color: var(--theia-editorWidget-foreground);');
        _this.contentNode.appendChild(_this.linkNode);
        var messageNode = document.createElement('div');
        messageNode.innerText = 'Hosted instance is started at: ';
        messageNode.appendChild(_this.linkNode);
        _this.contentNode.appendChild(messageNode);
        _this.appendCloseButton();
        _this.openButton = _this.appendAcceptButton('Open');
        return _this;
    }
    OpenHostedInstanceLinkDialog.prototype.showOpenNewTabAskDialog = function (uri) {
        var _this = this;
        this.value = uri;
        this.linkNode.innerHTML = uri;
        this.linkNode.href = uri;
        this.openButton.onclick = function () {
            _this.windowService.openNewWindow(uri);
        };
        this.open();
    };
    return OpenHostedInstanceLinkDialog;
}(browser_1.AbstractDialog));
//# sourceMappingURL=hosted-plugin-manager-client.js.map
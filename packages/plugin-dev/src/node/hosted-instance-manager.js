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
var cp = require("child_process");
var fs = require("fs");
var net = require("net");
var path = require("path");
var request = require("request");
var uri_1 = require("@theia/core/lib/common/uri");
var contribution_provider_1 = require("@theia/core/lib/common/contribution-provider");
var hosted_plugin_uri_postprocessor_1 = require("./hosted-plugin-uri-postprocessor");
var core_1 = require("@theia/core");
var file_uri_1 = require("@theia/core/lib/node/file-uri");
var types_1 = require("@theia/plugin-ext/lib/common/types");
var hosted_plugin_1 = require("@theia/plugin-ext/lib/hosted/node/hosted-plugin");
var metadata_scanner_1 = require("@theia/plugin-ext/lib/hosted/node/metadata-scanner");
var processTree = require('ps-tree');
exports.HostedInstanceManager = Symbol('HostedInstanceManager');
var HOSTED_INSTANCE_START_TIMEOUT_MS = 30000;
var THEIA_INSTANCE_REGEX = /.*Theia app listening on (.*).*\./;
var PROCESS_OPTIONS = {
    cwd: process.cwd(),
    env: __assign({}, process.env)
};
delete PROCESS_OPTIONS.env.ELECTRON_RUN_AS_NODE;
var AbstractHostedInstanceManager = /** @class */ (function () {
    function AbstractHostedInstanceManager() {
        this.isPluginRunning = false;
    }
    AbstractHostedInstanceManager.prototype.isRunning = function () {
        return this.isPluginRunning;
    };
    AbstractHostedInstanceManager.prototype.run = function (pluginUri, port) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doRun(pluginUri, port)];
            });
        });
    };
    AbstractHostedInstanceManager.prototype.debug = function (pluginUri, debugConfig) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doRun(pluginUri, undefined, debugConfig)];
            });
        });
    };
    AbstractHostedInstanceManager.prototype.doRun = function (pluginUri, port, debugConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var command, processOptions, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.isPluginRunning) {
                            this.hostedPluginSupport.sendLog({ data: 'Hosted plugin instance is already running.', type: types_1.LogType.Info });
                            throw new Error('Hosted instance is already running.');
                        }
                        if (!(pluginUri.scheme === 'file')) return [3 /*break*/, 2];
                        processOptions = __assign({}, PROCESS_OPTIONS);
                        // get filesystem path that work cross operating systems
                        processOptions.env.HOSTED_PLUGIN = file_uri_1.FileUri.fsPath(pluginUri.toString());
                        // Disable all the other plugins on this instance
                        processOptions.env.THEIA_PLUGINS = '';
                        return [4 /*yield*/, this.getStartCommand(port, debugConfig)];
                    case 1:
                        command = _d.sent();
                        return [3 /*break*/, 3];
                    case 2: throw new Error('Not supported plugin location: ' + pluginUri.toString());
                    case 3:
                        _a = this;
                        _b = this.postProcessInstanceUri;
                        return [4 /*yield*/, this.runHostedPluginTheiaInstance(command, processOptions)];
                    case 4: return [4 /*yield*/, _b.apply(this, [_d.sent()])];
                    case 5:
                        _a.instanceUri = _d.sent();
                        this.pluginUri = pluginUri;
                        // disable redirect to grab the release
                        this.instanceOptions = {
                            followRedirect: false
                        };
                        _c = this;
                        return [4 /*yield*/, this.postProcessInstanceOptions(this.instanceOptions)];
                    case 6:
                        _c.instanceOptions = _d.sent();
                        return [4 /*yield*/, this.checkInstanceUriReady()];
                    case 7:
                        _d.sent();
                        return [2 /*return*/, this.instanceUri];
                }
            });
        });
    };
    AbstractHostedInstanceManager.prototype.terminate = function () {
        var _this = this;
        if (this.isPluginRunning) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            processTree(this.hostedInstanceProcess.pid, function (err, children) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var args = ['-SIGTERM', _this.hostedInstanceProcess.pid.toString()].concat(children.map(function (p) { return p.PID; }));
                cp.spawn('kill', args);
            });
            this.hostedPluginSupport.sendLog({ data: 'Hosted instance has been terminated', type: types_1.LogType.Info });
        }
        else {
            throw new Error('Hosted plugin instance is not running.');
        }
    };
    AbstractHostedInstanceManager.prototype.getInstanceURI = function () {
        if (this.isPluginRunning) {
            return this.instanceUri;
        }
        throw new Error('Hosted plugin instance is not running.');
    };
    AbstractHostedInstanceManager.prototype.getPluginURI = function () {
        if (this.isPluginRunning) {
            return this.pluginUri;
        }
        throw new Error('Hosted plugin instance is not running.');
    };
    /**
     * Checks that the `instanceUri` is responding before exiting method
     */
    AbstractHostedInstanceManager.prototype.checkInstanceUriReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return _this.pingLoop(60, resolve, reject); })];
            });
        });
    };
    /**
     * Start a loop to ping, if ping is OK return immediately, else start a new ping after 1second. We iterate for the given amount of loops provided in remainingCount
     * @param remainingCount the number of occurrence to check
     * @param resolve resolve function if ok
     * @param reject reject function if error
     */
    AbstractHostedInstanceManager.prototype.pingLoop = function (remainingCount, resolve, reject) {
        return __awaiter(this, void 0, void 0, function () {
            var isOK;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ping()];
                    case 1:
                        isOK = _a.sent();
                        if (isOK) {
                            resolve();
                        }
                        else {
                            if (remainingCount > 0) {
                                setTimeout(function () { return _this.pingLoop(--remainingCount, resolve, reject); }, 1000);
                            }
                            else {
                                reject(new Error('Unable to ping the remote server'));
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Ping the plugin URI (checking status of the head)
     */
    AbstractHostedInstanceManager.prototype.ping = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var url = _this.instanceUri.toString();
                        request.head(url, _this.instanceOptions).on('response', function (res) {
                            // Wait that the status is OK
                            if (res.statusCode === 200) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }).on('error', function (error) {
                            resolve(false);
                        });
                    })];
            });
        });
    };
    AbstractHostedInstanceManager.prototype.isPluginValid = function (uri) {
        var pckPath = path.join(file_uri_1.FileUri.fsPath(uri), 'package.json');
        if (fs.existsSync(pckPath)) {
            var pck = require(pckPath);
            return !!this.metadata.getScanner(pck);
        }
        return false;
    };
    AbstractHostedInstanceManager.prototype.getStartCommand = function (port, debugConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var processArguments, command, debugString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        processArguments = process.argv;
                        if (core_1.environment.electron.is()) {
                            command = ['yarn', 'theia', 'start'];
                        }
                        else {
                            command = processArguments.filter(function (arg, index, args) {
                                // remove --port=X and --port X arguments if set
                                // remove --plugins arguments
                                if (arg.startsWith('--port') || args[index - 1] === '--port') {
                                    return;
                                }
                                else {
                                    return arg;
                                }
                            });
                        }
                        if (process.env.HOSTED_PLUGIN_HOSTNAME) {
                            command.push('--hostname=' + process.env.HOSTED_PLUGIN_HOSTNAME);
                        }
                        if (!port) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.validatePort(port)];
                    case 1:
                        _a.sent();
                        command.push('--port=' + port);
                        _a.label = 2;
                    case 2:
                        if (debugConfig) {
                            debugString = '--hosted-plugin-';
                            if (debugConfig.debugMode) {
                                debugString += debugConfig.debugMode;
                            }
                            else {
                                debugString += 'inspect';
                            }
                            debugString += '=0.0.0.0';
                            if (debugConfig.port) {
                                debugString += ':' + debugConfig.port;
                            }
                            command.push(debugString);
                        }
                        return [2 /*return*/, command];
                }
            });
        });
    };
    AbstractHostedInstanceManager.prototype.postProcessInstanceUri = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, uri];
            });
        });
    };
    AbstractHostedInstanceManager.prototype.postProcessInstanceOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, options];
            });
        });
    };
    AbstractHostedInstanceManager.prototype.runHostedPluginTheiaInstance = function (command, options) {
        var _this = this;
        this.isPluginRunning = true;
        return new Promise(function (resolve, reject) {
            var started = false;
            var outputListener = function (data) {
                var line = data.toString();
                var match = THEIA_INSTANCE_REGEX.exec(line);
                if (match) {
                    _this.hostedInstanceProcess.stdout.removeListener('data', outputListener);
                    started = true;
                    resolve(new uri_1.default(match[1]));
                }
            };
            _this.hostedInstanceProcess = cp.spawn(command.shift(), command, options);
            _this.hostedInstanceProcess.on('error', function () { _this.isPluginRunning = false; });
            _this.hostedInstanceProcess.on('exit', function () { _this.isPluginRunning = false; });
            _this.hostedInstanceProcess.stdout.addListener('data', outputListener);
            _this.hostedInstanceProcess.stdout.addListener('data', function (data) {
                _this.hostedPluginSupport.sendLog({ data: data.toString(), type: types_1.LogType.Info });
            });
            _this.hostedInstanceProcess.stderr.addListener('data', function (data) {
                _this.hostedPluginSupport.sendLog({ data: data.toString(), type: types_1.LogType.Error });
            });
            setTimeout(function () {
                if (!started) {
                    _this.terminate();
                    _this.isPluginRunning = false;
                    reject(new Error('Timeout.'));
                }
            }, HOSTED_INSTANCE_START_TIMEOUT_MS);
        });
    };
    AbstractHostedInstanceManager.prototype.validatePort = function (port) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (port < 1 || port > 65535) {
                            throw new Error('Port value is incorrect.');
                        }
                        return [4 /*yield*/, this.isPortFree(port)];
                    case 1:
                        if (!(_a.sent())) {
                            throw new Error('Port ' + port + ' is already in use.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AbstractHostedInstanceManager.prototype.isPortFree = function (port) {
        return new Promise(function (resolve) {
            var server = net.createServer();
            server.listen(port, '0.0.0.0');
            server.on('error', function () {
                resolve(false);
            });
            server.on('listening', function () {
                server.close();
                resolve(true);
            });
        });
    };
    __decorate([
        inversify_1.inject(hosted_plugin_1.HostedPluginSupport),
        __metadata("design:type", hosted_plugin_1.HostedPluginSupport)
    ], AbstractHostedInstanceManager.prototype, "hostedPluginSupport", void 0);
    __decorate([
        inversify_1.inject(metadata_scanner_1.MetadataScanner),
        __metadata("design:type", metadata_scanner_1.MetadataScanner)
    ], AbstractHostedInstanceManager.prototype, "metadata", void 0);
    AbstractHostedInstanceManager = __decorate([
        inversify_1.injectable()
    ], AbstractHostedInstanceManager);
    return AbstractHostedInstanceManager;
}());
exports.AbstractHostedInstanceManager = AbstractHostedInstanceManager;
var NodeHostedPluginRunner = /** @class */ (function (_super) {
    __extends(NodeHostedPluginRunner, _super);
    function NodeHostedPluginRunner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeHostedPluginRunner.prototype.postProcessInstanceUri = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, uriPostProcessor, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.uriPostProcessors.getContributions()), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        uriPostProcessor = _b.value;
                        return [4 /*yield*/, uriPostProcessor.processUri(uri)];
                    case 2:
                        uri = _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, uri];
                }
            });
        });
    };
    NodeHostedPluginRunner.prototype.postProcessInstanceOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, uriPostProcessor, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.uriPostProcessors.getContributions()), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        uriPostProcessor = _b.value;
                        return [4 /*yield*/, uriPostProcessor.processOptions(options)];
                    case 2:
                        options = _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, options];
                }
            });
        });
    };
    NodeHostedPluginRunner.prototype.getStartCommand = function (port, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!port) {
                    if (process.env.HOSTED_PLUGIN_PORT) {
                        port = Number(process.env.HOSTED_PLUGIN_PORT);
                    }
                    else {
                        port = 3030;
                    }
                }
                return [2 /*return*/, _super.prototype.getStartCommand.call(this, port, config)];
            });
        });
    };
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider), inversify_1.named(Symbol.for(hosted_plugin_uri_postprocessor_1.HostedPluginUriPostProcessorSymbolName)),
        __metadata("design:type", Object)
    ], NodeHostedPluginRunner.prototype, "uriPostProcessors", void 0);
    NodeHostedPluginRunner = __decorate([
        inversify_1.injectable()
    ], NodeHostedPluginRunner);
    return NodeHostedPluginRunner;
}(AbstractHostedInstanceManager));
exports.NodeHostedPluginRunner = NodeHostedPluginRunner;
var ElectronNodeHostedPluginRunner = /** @class */ (function (_super) {
    __extends(ElectronNodeHostedPluginRunner, _super);
    function ElectronNodeHostedPluginRunner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronNodeHostedPluginRunner = __decorate([
        inversify_1.injectable()
    ], ElectronNodeHostedPluginRunner);
    return ElectronNodeHostedPluginRunner;
}(AbstractHostedInstanceManager));
exports.ElectronNodeHostedPluginRunner = ElectronNodeHostedPluginRunner;
//# sourceMappingURL=hosted-instance-manager.js.map
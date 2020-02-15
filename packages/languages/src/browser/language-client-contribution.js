"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var language_client_services_1 = require("./language-client-services");
var language_client_factory_1 = require("./language-client-factory");
var browser_2 = require("@theia/workspace/lib/browser");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var langtool_connection_provider_1 = require("./langtool-connection-provider");
exports.LanguageClientContribution = Symbol('LanguageClientContribution');
var BaseLanguageClientContribution = /** @class */ (function () {
    function BaseLanguageClientContribution(workspace, languages, languageClientFactory) {
        this.workspace = workspace;
        this.languages = languages;
        this.languageClientFactory = languageClientFactory;
        this.deferredConnection = new promise_util_1.Deferred();
        this.toDeactivate = new common_1.DisposableCollection();
        this.stop = Promise.resolve();
        this.waitForReady();
    }
    Object.defineProperty(BaseLanguageClientContribution.prototype, "languageClient", {
        get: function () {
            return this._languageClient ? Promise.resolve(this._languageClient) : this.ready;
        },
        enumerable: true,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BaseLanguageClientContribution.prototype.waitForActivation = function (app) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var activationPromises = [];
        var workspaceContains = this.workspaceContains;
        if (workspaceContains.length !== 0) {
            activationPromises.push(this.waitForItemInWorkspace());
        }
        var documentSelector = this.documentSelector;
        if (documentSelector) {
            activationPromises.push(this.waitForOpenTextDocument(documentSelector));
        }
        if (activationPromises.length !== 0) {
            return Promise.all([
                this.workspace.ready,
                Promise.race(activationPromises.map(function (p) { return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, p];
                            case 1:
                                _a.sent();
                                resolve();
                                return [3 /*break*/, 3];
                            case 2:
                                e_1 = _a.sent();
                                console.error(e_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }); }))
            ]);
        }
        return this.workspace.ready;
    };
    BaseLanguageClientContribution.prototype.activate = function () {
        var _this = this;
        if (this.toDeactivate.disposed) {
            if (!this._languageClient) {
                this._languageClient = this.createLanguageClient(function () { return _this.deferredConnection.promise; });
                this._languageClient.onDidChangeState(function (_a) {
                    var newState = _a.newState;
                    _this.state = newState;
                });
            }
            var toStop = new common_1.DisposableCollection(common_1.Disposable.create(function () { })); // mark as not disposed
            this.toDeactivate.push(toStop);
            this.doActivate(toStop);
        }
        return this.toDeactivate;
    };
    BaseLanguageClientContribution.prototype.deactivate = function () {
        this.toDeactivate.dispose();
    };
    BaseLanguageClientContribution.prototype.doActivate = function (toStop) {
        return __awaiter(this, void 0, void 0, function () {
            var startParameters, sessionId_1, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        // make sure that the previous client is stopped to avoid duplicate commands and language services
                        return [4 /*yield*/, this.stop];
                    case 1:
                        // make sure that the previous client is stopped to avoid duplicate commands and language services
                        _a.sent();
                        if (toStop.disposed) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getStartParameters()];
                    case 2:
                        startParameters = _a.sent();
                        if (toStop.disposed) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.languageContributionService.create(this.id, startParameters)];
                    case 3:
                        sessionId_1 = _a.sent();
                        if (toStop.disposed) {
                            this.languageContributionService.destroy(sessionId_1);
                            return [2 /*return*/];
                        }
                        toStop.push(common_1.Disposable.create(function () { return _this.languageContributionService.destroy(sessionId_1); }));
                        this.langtoolConnectionProvider.listen({
                            path: language_client_services_1.LanguageContribution.getPath(this, sessionId_1),
                            onConnection: function (messageConnection) {
                                _this.deferredConnection.resolve(messageConnection);
                                messageConnection.onDispose(function () { return _this.deferredConnection = new promise_util_1.Deferred(); });
                                if (toStop.disposed) {
                                    messageConnection.dispose();
                                    return;
                                }
                                toStop.push(common_1.Disposable.create(function () { return _this.stop = (function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _a;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _b.trys.push([0, 3, , 4]);
                                                // avoid calling stop if start failed
                                                return [4 /*yield*/, this._languageClient.onReady()];
                                            case 1:
                                                // avoid calling stop if start failed
                                                _b.sent();
                                                // remove all listeners
                                                return [4 /*yield*/, this._languageClient.stop()];
                                            case 2:
                                                // remove all listeners
                                                _b.sent();
                                                return [3 /*break*/, 4];
                                            case 3:
                                                _a = _b.sent();
                                                try {
                                                    // if start or stop failed make sure the the connection is closed
                                                    messageConnection.dispose();
                                                }
                                                catch ( /* no-op */_c) { /* no-op */ }
                                                return [3 /*break*/, 4];
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); })(); }));
                                toStop.push(messageConnection.onClose(function () { return _this.forceRestart(); }));
                                _this._languageClient.start();
                                // it should be called after `start` that `onReady` promise gets reinitialized
                                _this.onWillStart(_this._languageClient, toStop);
                            }
                        }, { reconnecting: false });
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        if (!toStop.disposed) {
                            this.forceRestart();
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(BaseLanguageClientContribution.prototype, "running", {
        get: function () {
            return !this.toDeactivate.disposed && this.state === language_client_services_1.State.Running;
        },
        enumerable: true,
        configurable: true
    });
    BaseLanguageClientContribution.prototype.restart = function () {
        if (!this.running) {
            return;
        }
        this.forceRestart();
    };
    BaseLanguageClientContribution.prototype.forceRestart = function () {
        this.deactivate();
        this.activate();
    };
    BaseLanguageClientContribution.prototype.onWillStart = function (languageClient, toStop) {
        var _this = this;
        languageClient.onReady().then(function () { return _this.onReady(languageClient, toStop); });
    };
    BaseLanguageClientContribution.prototype.onReady = function (languageClient, toStop) {
        this._languageClient = languageClient;
        this.resolveReady(this._languageClient);
        this.waitForReady();
    };
    BaseLanguageClientContribution.prototype.waitForReady = function () {
        var _this = this;
        this.ready = new Promise(function (resolve) {
            return _this.resolveReady = resolve;
        });
    };
    BaseLanguageClientContribution.prototype.createLanguageClient = function (connection) {
        var clientOptions = this.createOptions();
        return this.languageClientFactory.get(this, clientOptions, connection);
    };
    BaseLanguageClientContribution.prototype.createOptions = function () {
        var _this = this;
        var _a = this, id = _a.id, documentSelector = _a.documentSelector, fileEvents = _a.fileEvents, configurationSection = _a.configurationSection, initializationOptions = _a.initializationOptions;
        return {
            documentSelector: documentSelector,
            synchronize: { fileEvents: fileEvents, configurationSection: configurationSection },
            initializationFailedHandler: function (err) { return _this.handleInitializationFailed(err); },
            diagnosticCollectionName: id,
            initializationOptions: initializationOptions
        };
    };
    BaseLanguageClientContribution.prototype.handleInitializationFailed = function (err) {
        var _this = this;
        this.deactivate();
        var detail = err instanceof Error ? ": " + err.message : '.';
        this.messageService.error("Failed to start " + this.name + " language server" + detail, 'Retry').then(function (result) {
            if (result) {
                _this.activate();
            }
        });
        return false;
    };
    BaseLanguageClientContribution.prototype.getStartParameters = function () {
        return undefined;
    };
    Object.defineProperty(BaseLanguageClientContribution.prototype, "initializationOptions", {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLanguageClientContribution.prototype, "configurationSection", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLanguageClientContribution.prototype, "workspaceContains", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLanguageClientContribution.prototype, "documentSelector", {
        get: function () {
            return [this.id];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLanguageClientContribution.prototype, "fileEvents", {
        get: function () {
            return this._fileEvents = this._fileEvents || this.createFileEvents();
        },
        enumerable: true,
        configurable: true
    });
    BaseLanguageClientContribution.prototype.createFileEvents = function () {
        var e_3, _a;
        var watchers = [];
        if (this.workspace.createFileSystemWatcher) {
            try {
                for (var _b = __values(this.globPatterns), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var globPattern = _c.value;
                    watchers.push(this.workspace.createFileSystemWatcher(globPattern));
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
        return watchers;
    };
    Object.defineProperty(BaseLanguageClientContribution.prototype, "globPatterns", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check to see if one of the paths is in the current workspace.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BaseLanguageClientContribution.prototype.waitForItemInWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var doesContain;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.containsSome(this.workspaceContains)];
                    case 1:
                        doesContain = _a.sent();
                        if (!doesContain) {
                            return [2 /*return*/, new Promise(function (resolve) { })];
                        }
                        return [2 /*return*/, doesContain];
                }
            });
        });
    };
    // FIXME move it to the workspace
    BaseLanguageClientContribution.prototype.waitForOpenTextDocument = function (selector) {
        var _this = this;
        var document = this.workspace.textDocuments.filter(function (doc) {
            return _this.languages.match(selector, doc);
        })[0];
        if (document !== undefined) {
            return Promise.resolve(document);
        }
        return new Promise(function (resolve) {
            var disposable = _this.workspace.onDidOpenTextDocument(function (doc) {
                if (_this.languages.match(selector, doc)) {
                    disposable.dispose();
                    resolve(doc);
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], BaseLanguageClientContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], BaseLanguageClientContribution.prototype, "registry", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], BaseLanguageClientContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(language_client_services_1.LanguageContribution.Service),
        __metadata("design:type", Object)
    ], BaseLanguageClientContribution.prototype, "languageContributionService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WebSocketConnectionProvider),
        __metadata("design:type", browser_1.WebSocketConnectionProvider)
    ], BaseLanguageClientContribution.prototype, "connectionProvider", void 0);
    __decorate([
        inversify_1.inject(langtool_connection_provider_1.LangToolWebSocketConnectionProvider),
        __metadata("design:type", langtool_connection_provider_1.LangToolWebSocketConnectionProvider)
    ], BaseLanguageClientContribution.prototype, "langtoolConnectionProvider", void 0);
    BaseLanguageClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(language_client_services_1.Workspace)),
        __param(1, inversify_1.inject(language_client_services_1.Languages)),
        __param(2, inversify_1.inject(language_client_factory_1.LanguageClientFactory)),
        __metadata("design:paramtypes", [Object, Object, language_client_factory_1.LanguageClientFactory])
    ], BaseLanguageClientContribution);
    return BaseLanguageClientContribution;
}());
exports.BaseLanguageClientContribution = BaseLanguageClientContribution;
//# sourceMappingURL=language-client-contribution.js.map
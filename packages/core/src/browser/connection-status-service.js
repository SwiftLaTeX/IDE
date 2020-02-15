"use strict";
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var logger_1 = require("../common/logger");
var event_1 = require("../common/event");
var frontend_application_1 = require("./frontend-application");
var status_bar_1 = require("./status-bar/status-bar");
var ws_connection_provider_1 = require("./messaging/ws-connection-provider");
var common_1 = require("../common");
/**
 * Service for listening on backend connection changes.
 */
exports.ConnectionStatusService = Symbol('ConnectionStatusService');
/**
 * The connection status.
 */
var ConnectionStatus;
(function (ConnectionStatus) {
    /**
     * Connected to the backend.
     */
    ConnectionStatus[ConnectionStatus["ONLINE"] = 0] = "ONLINE";
    /**
     * The connection is lost between frontend and backend.
     */
    ConnectionStatus[ConnectionStatus["OFFLINE"] = 1] = "OFFLINE";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var ConnectionStatusOptions = /** @class */ (function () {
    function ConnectionStatusOptions() {
    }
    ConnectionStatusOptions.DEFAULT = {
        offlineTimeout: 60000,
    };
    ConnectionStatusOptions = __decorate([
        inversify_1.injectable()
    ], ConnectionStatusOptions);
    return ConnectionStatusOptions;
}());
exports.ConnectionStatusOptions = ConnectionStatusOptions;
exports.PingService = Symbol('PingService');
var AbstractConnectionStatusService = /** @class */ (function () {
    function AbstractConnectionStatusService(options) {
        if (options === void 0) { options = ConnectionStatusOptions.DEFAULT; }
        this.options = options;
        this.statusChangeEmitter = new event_1.Emitter();
        this.connectionStatus = ConnectionStatus.ONLINE;
    }
    Object.defineProperty(AbstractConnectionStatusService.prototype, "onStatusChange", {
        get: function () {
            return this.statusChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractConnectionStatusService.prototype, "currentStatus", {
        get: function () {
            return this.connectionStatus;
        },
        enumerable: true,
        configurable: true
    });
    AbstractConnectionStatusService.prototype.dispose = function () {
        this.statusChangeEmitter.dispose();
        if (this.timer) {
            this.clearTimeout(this.timer);
        }
    };
    AbstractConnectionStatusService.prototype.updateStatus = function (success) {
        var _this = this;
        // clear existing timer
        if (this.timer) {
            this.clearTimeout(this.timer);
        }
        var previousStatus = this.connectionStatus;
        var newStatus = success ? ConnectionStatus.ONLINE : ConnectionStatus.OFFLINE;
        if (previousStatus !== newStatus) {
            this.connectionStatus = newStatus;
            this.fireStatusChange(newStatus);
        }
        // schedule offline
        this.timer = this.setTimeout(function () {
            _this.logger.trace("No activity for " + _this.options.offlineTimeout + " ms. We are offline.");
            _this.updateStatus(false);
        }, this.options.offlineTimeout);
    };
    AbstractConnectionStatusService.prototype.fireStatusChange = function (status) {
        this.statusChangeEmitter.fire(status);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AbstractConnectionStatusService.prototype.setTimeout = function (handler, timeout) {
        return window.setTimeout(handler, timeout);
    };
    AbstractConnectionStatusService.prototype.clearTimeout = function (handle) {
        window.clearTimeout(handle);
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], AbstractConnectionStatusService.prototype, "logger", void 0);
    AbstractConnectionStatusService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(ConnectionStatusOptions)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [ConnectionStatusOptions])
    ], AbstractConnectionStatusService);
    return AbstractConnectionStatusService;
}());
exports.AbstractConnectionStatusService = AbstractConnectionStatusService;
var FrontendConnectionStatusService = /** @class */ (function (_super) {
    __extends(FrontendConnectionStatusService, _super);
    function FrontendConnectionStatusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrontendConnectionStatusService.prototype.init = function () {
        var _this = this;
        this.schedulePing();
        this.wsConnectionProvider.onIncomingMessageActivity(function () {
            // natural activity
            _this.updateStatus(true);
            _this.schedulePing();
        });
    };
    FrontendConnectionStatusService.prototype.schedulePing = function () {
        var _this = this;
        if (this.scheduledPing) {
            this.clearTimeout(this.scheduledPing);
        }
        this.scheduledPing = this.setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.pingService.ping()];
                    case 1:
                        _a.sent();
                        this.updateStatus(true);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.logger.trace(e_1);
                        return [3 /*break*/, 3];
                    case 3:
                        this.schedulePing();
                        return [2 /*return*/];
                }
            });
        }); }, this.options.offlineTimeout * 0.8);
    };
    __decorate([
        inversify_1.inject(ws_connection_provider_1.WebSocketConnectionProvider),
        __metadata("design:type", ws_connection_provider_1.WebSocketConnectionProvider)
    ], FrontendConnectionStatusService.prototype, "wsConnectionProvider", void 0);
    __decorate([
        inversify_1.inject(exports.PingService),
        __metadata("design:type", Object)
    ], FrontendConnectionStatusService.prototype, "pingService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FrontendConnectionStatusService.prototype, "init", null);
    FrontendConnectionStatusService = __decorate([
        inversify_1.injectable()
    ], FrontendConnectionStatusService);
    return FrontendConnectionStatusService;
}(AbstractConnectionStatusService));
exports.FrontendConnectionStatusService = FrontendConnectionStatusService;
var ApplicationConnectionStatusContribution = /** @class */ (function (_super) {
    __extends(ApplicationConnectionStatusContribution, _super);
    function ApplicationConnectionStatusContribution(connectionStatusService, statusBar, logger) {
        var _this = _super.call(this) || this;
        _this.connectionStatusService = connectionStatusService;
        _this.statusBar = statusBar;
        _this.logger = logger;
        _this.toDisposeOnOnline = new common_1.DisposableCollection();
        _this.statusbarId = 'connection-status';
        _this.connectionStatusService.onStatusChange(function (state) { return _this.onStateChange(state); });
        return _this;
    }
    ApplicationConnectionStatusContribution.prototype.onStateChange = function (state) {
        switch (state) {
            case ConnectionStatus.OFFLINE: {
                this.handleOffline();
                break;
            }
            case ConnectionStatus.ONLINE: {
                this.handleOnline();
                break;
            }
        }
    };
    ApplicationConnectionStatusContribution.prototype.handleOnline = function () {
        this.toDisposeOnOnline.dispose();
    };
    ApplicationConnectionStatusContribution.prototype.handleOffline = function () {
        var _this = this;
        this.statusBar.setElement(this.statusbarId, {
            alignment: status_bar_1.StatusBarAlignment.LEFT,
            text: 'Offline',
            tooltip: 'Cannot connect to backend.',
            priority: 5000
        });
        this.toDisposeOnOnline.push(common_1.Disposable.create(function () { return _this.statusBar.removeElement(_this.statusbarId); }));
        document.body.classList.add('theia-mod-offline');
        this.toDisposeOnOnline.push(common_1.Disposable.create(function () { return document.body.classList.remove('theia-mod-offline'); }));
    };
    ApplicationConnectionStatusContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.ConnectionStatusService)),
        __param(1, inversify_1.inject(status_bar_1.StatusBar)),
        __param(2, inversify_1.inject(logger_1.ILogger)),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], ApplicationConnectionStatusContribution);
    return ApplicationConnectionStatusContribution;
}(frontend_application_1.DefaultFrontendApplicationContribution));
exports.ApplicationConnectionStatusContribution = ApplicationConnectionStatusContribution;
//# sourceMappingURL=connection-status-service.js.map
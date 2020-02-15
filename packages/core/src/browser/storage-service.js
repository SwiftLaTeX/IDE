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
var message_service_1 = require("../common/message-service");
var window_service_1 = require("./window/window-service");
var environment_1 = require("@theia/application-package/lib/environment");
exports.StorageService = Symbol('IStorageService');
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.init = function () {
        if (typeof window !== 'undefined' && window.localStorage) {
            this.storage = window.localStorage;
            this.testLocalStorage();
        }
        else {
            this.logger.warn(function (log) { return log("The browser doesn't support localStorage. state will not be persisted across sessions."); });
            this.storage = {};
        }
    };
    LocalStorageService.prototype.setData = function (key, data) {
        if (data !== undefined) {
            try {
                this.storage[this.prefix(key)] = JSON.stringify(data);
            }
            catch (e) {
                this.showDiskQuotaExceededMessage();
            }
        }
        else {
            delete this.storage[this.prefix(key)];
        }
        return Promise.resolve();
    };
    LocalStorageService.prototype.getData = function (key, defaultValue) {
        var result = this.storage[this.prefix(key)];
        if (result === undefined) {
            return Promise.resolve(defaultValue);
        }
        return Promise.resolve(JSON.parse(result));
    };
    LocalStorageService.prototype.prefix = function (key) {
        if (environment_1.environment.electron.is()) {
            return "theia:" + key;
        }
        var pathname = typeof window === 'undefined' ? '' : window.location.pathname;
        return "theia:" + pathname + ":" + key;
    };
    LocalStorageService.prototype.showDiskQuotaExceededMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var READ_INSTRUCTIONS_ACTION, CLEAR_STORAGE_ACTION, ERROR_MESSAGE;
            var _this = this;
            return __generator(this, function (_a) {
                READ_INSTRUCTIONS_ACTION = 'Read Instructions';
                CLEAR_STORAGE_ACTION = 'Clear Local Storage';
                ERROR_MESSAGE = "Your preferred browser's local storage is almost full.\n        To be able to save your current workspace layout or data, you may need to free up some space.\n        You can refer to Theia's documentation page for instructions on how to manually clean\n        your browser's local storage or choose to clear all.";
                this.messageService.warn(ERROR_MESSAGE, READ_INSTRUCTIONS_ACTION, CLEAR_STORAGE_ACTION).then(function (selected) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (READ_INSTRUCTIONS_ACTION === selected) {
                            this.windowService.openNewWindow('https://github.com/eclipse-theia/theia/wiki/Cleaning-Local-Storage', { external: true });
                        }
                        else if (CLEAR_STORAGE_ACTION === selected) {
                            this.clearStorage();
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Verify if there is still some spaces left to save another workspace configuration into the local storage of your browser.
     * If we are close to the limit, use a dialog to notify the user.
     */
    LocalStorageService.prototype.testLocalStorage = function () {
        var keyTest = this.prefix('Test');
        try {
            this.storage[keyTest] = JSON.stringify(new Array(60000));
        }
        catch (error) {
            this.showDiskQuotaExceededMessage();
        }
        finally {
            this.storage.removeItem(keyTest);
        }
    };
    LocalStorageService.prototype.clearStorage = function () {
        this.storage.clear();
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], LocalStorageService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], LocalStorageService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], LocalStorageService.prototype, "windowService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalStorageService.prototype, "init", null);
    LocalStorageService = __decorate([
        inversify_1.injectable()
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=storage-service.js.map
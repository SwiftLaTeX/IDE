"use strict";
/********************************************************************************
 * Copyright (C) 2019 RedHat and others.
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
var browser_1 = require("./browser");
var logger_1 = require("../common/logger");
var message_service_1 = require("../common/message-service");
var BrowserClipboardService = /** @class */ (function () {
    function BrowserClipboardService() {
    }
    BrowserClipboardService.prototype.readText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e1_1, e2_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        return [4 /*yield*/, this.queryPermission('clipboard-read')];
                    case 1:
                        permission = _a.sent();
                        return [3 /*break*/, 7];
                    case 2:
                        e1_1 = _a.sent();
                        this.logger.error('Failed checking a clipboard-read permission.', e1_1);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.getClipboardAPI().readText()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        e2_1 = _a.sent();
                        this.logger.error('Failed reading clipboard content.', e2_1);
                        if (browser_1.isFirefox) {
                            this.messageService.warn("Clipboard API is not available.\n                    It can be enabled by 'dom.events.testing.asyncClipboard' preference on 'about:config' page. Then reload Theia.\n                    Note, it will allow FireFox getting full access to the system clipboard.");
                        }
                        return [2 /*return*/, ''];
                    case 6: return [3 /*break*/, 7];
                    case 7:
                        if (permission.state === 'denied') {
                            // most likely, the user intentionally denied the access
                            this.messageService.warn("Access to the clipboard is denied. Check your browser's permission.");
                            return [2 /*return*/, ''];
                        }
                        return [2 /*return*/, this.getClipboardAPI().readText()];
                }
            });
        });
    };
    BrowserClipboardService.prototype.writeText = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e1_2, e2_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        return [4 /*yield*/, this.queryPermission('clipboard-write')];
                    case 1:
                        permission = _a.sent();
                        return [3 /*break*/, 7];
                    case 2:
                        e1_2 = _a.sent();
                        this.logger.error('Failed checking a clipboard-write permission.', e1_2);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.getClipboardAPI().writeText(value)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5:
                        e2_2 = _a.sent();
                        this.logger.error('Failed writing to the clipboard.', e2_2);
                        if (browser_1.isFirefox) {
                            this.messageService.warn("Clipboard API is not available.\n                    It can be enabled by 'dom.events.testing.asyncClipboard' preference on 'about:config' page. Then reload Theia.\n                    Note, it will allow FireFox getting full access to the system clipboard.");
                        }
                        return [2 /*return*/];
                    case 6: return [3 /*break*/, 7];
                    case 7:
                        if (permission.state === 'denied') {
                            // most likely, the user intentionally denied the access
                            this.messageService.warn("Access to the clipboard is denied. Check your browser's permission.");
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.getClipboardAPI().writeText(value)];
                }
            });
        });
    };
    BrowserClipboardService.prototype.queryPermission = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ('permissions' in navigator) {
                    return [2 /*return*/, navigator['permissions'].query({ name: name })];
                }
                throw new Error('Permissions API unavailable');
            });
        });
    };
    BrowserClipboardService.prototype.getClipboardAPI = function () {
        if ('clipboard' in navigator) {
            return navigator['clipboard'];
        }
        throw new Error('Async Clipboard API unavailable');
    };
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], BrowserClipboardService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], BrowserClipboardService.prototype, "logger", void 0);
    BrowserClipboardService = __decorate([
        inversify_1.injectable()
    ], BrowserClipboardService);
    return BrowserClipboardService;
}());
exports.BrowserClipboardService = BrowserClipboardService;
//# sourceMappingURL=browser-clipboard-service.js.map
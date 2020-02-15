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
var quick_open_service_1 = require("./quick-open-service");
var quick_open_model_1 = require("./quick-open-model");
var promise_util_1 = require("../../common/promise-util");
var message_service_protocol_1 = require("../../common/message-service-protocol");
var event_1 = require("../../common/event");
var quick_title_bar_1 = require("./quick-title-bar");
var QuickInputService = /** @class */ (function () {
    function QuickInputService() {
        this.defaultPrompt = "Press 'Enter' to confirm your input or 'Escape' to cancel";
        this.onDidAcceptEmitter = new event_1.Emitter();
        this.onDidChangeValueEmitter = new event_1.Emitter();
    }
    QuickInputService.prototype.open = function (options) {
        var _this = this;
        var result = new promise_util_1.Deferred();
        var prompt = this.createPrompt(options.prompt);
        var label = prompt;
        var currentText = '';
        var validateInput = options && options.validateInput;
        var initial = true;
        this.quickOpenService.open({
            onType: function (lookFor, acceptor) { return __awaiter(_this, void 0, void 0, function () {
                var error, _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!initial) return [3 /*break*/, 1];
                            initial = false;
                            return [3 /*break*/, 5];
                        case 1:
                            this.onDidChangeValueEmitter.fire(lookFor);
                            if (!(validateInput && lookFor !== undefined)) return [3 /*break*/, 3];
                            return [4 /*yield*/, validateInput(lookFor)];
                        case 2:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _a = undefined;
                            _b.label = 4;
                        case 4:
                            error = _a;
                            _b.label = 5;
                        case 5:
                            label = error || prompt;
                            if (error) {
                                this.quickOpenService.showDecoration(message_service_protocol_1.MessageType.Error);
                            }
                            else {
                                this.quickOpenService.hideDecoration();
                            }
                            acceptor([new quick_open_model_1.QuickOpenItem({
                                    label: label,
                                    run: function (mode) {
                                        if (!error && mode === quick_open_model_1.QuickOpenMode.OPEN) {
                                            result.resolve(currentText);
                                            _this.onDidAcceptEmitter.fire(undefined);
                                            _this.quickTitleBar.hide();
                                            return true;
                                        }
                                        return false;
                                    }
                                })]);
                            currentText = lookFor;
                            return [2 /*return*/];
                    }
                });
            }); }
        }, {
            prefix: options.value,
            placeholder: options.placeHolder,
            password: options.password,
            ignoreFocusOut: options.ignoreFocusOut,
            enabled: options.enabled,
            valueSelection: options.valueSelection,
            onClose: function () {
                result.resolve(undefined);
                _this.quickTitleBar.hide();
            }
        });
        if (options && this.quickTitleBar.shouldShowTitleBar(options.title, options.step)) {
            this.quickTitleBar.attachTitleBar(this.quickOpenService.widgetNode, options.title, options.step, options.totalSteps, options.buttons);
        }
        return result.promise;
    };
    QuickInputService.prototype.refresh = function () {
        this.quickOpenService.refresh();
    };
    QuickInputService.prototype.createPrompt = function (prompt) {
        return prompt ? prompt + " (" + this.defaultPrompt + ")" : this.defaultPrompt;
    };
    Object.defineProperty(QuickInputService.prototype, "onDidAccept", {
        get: function () {
            return this.onDidAcceptEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickInputService.prototype, "onDidChangeValue", {
        get: function () {
            return this.onDidChangeValueEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], QuickInputService.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(quick_title_bar_1.QuickTitleBar),
        __metadata("design:type", quick_title_bar_1.QuickTitleBar)
    ], QuickInputService.prototype, "quickTitleBar", void 0);
    QuickInputService = __decorate([
        inversify_1.injectable()
    ], QuickInputService);
    return QuickInputService;
}());
exports.QuickInputService = QuickInputService;
//# sourceMappingURL=quick-input-service.js.map
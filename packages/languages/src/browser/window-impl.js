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
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var services_1 = require("monaco-languageclient/lib/services");
var output_channel_1 = require("@theia/output/lib/common/output-channel");
var output_contribution_1 = require("@theia/output/lib/browser/output-contribution");
var WindowImpl = /** @class */ (function () {
    function WindowImpl() {
    }
    WindowImpl.prototype.showMessage = function (type, message) {
        var _a, _b, _c, _d;
        var actions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            actions[_i - 2] = arguments[_i];
        }
        var originalActions = new Map((actions || []).map(function (action) { return [action.title, action]; }));
        var actionTitles = (actions || []).map(function (action) { return action.title; });
        var mapActionType = function (result) {
            if (!!result) {
                return originalActions.get(result);
            }
            return undefined;
        };
        if (type === services_1.MessageType.Error) {
            return (_a = this.messageService).error.apply(_a, __spread([message], actionTitles)).then(mapActionType);
        }
        if (type === services_1.MessageType.Warning) {
            return (_b = this.messageService).warn.apply(_b, __spread([message], actionTitles)).then(mapActionType);
        }
        if (type === services_1.MessageType.Info) {
            return (_c = this.messageService).info.apply(_c, __spread([message], actionTitles)).then(mapActionType);
        }
        if (type === services_1.MessageType.Log) {
            return (_d = this.messageService).log.apply(_d, __spread([message], actionTitles)).then(mapActionType);
        }
        return Promise.resolve(undefined);
    };
    WindowImpl.prototype.createOutputChannel = function (name) {
        var _this = this;
        var outputChannel = this.outputChannelManager.getChannel(name);
        return {
            append: outputChannel.append.bind(outputChannel),
            appendLine: outputChannel.appendLine.bind(outputChannel),
            show: function (preserveFocus) { return __awaiter(_this, void 0, void 0, function () {
                var options, activate, reveal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = Object.assign({
                                preserveFocus: false,
                            }, { preserveFocus: preserveFocus });
                            activate = !options.preserveFocus;
                            reveal = options.preserveFocus;
                            return [4 /*yield*/, this.outputContribution.openView({ activate: activate, reveal: reveal })];
                        case 1:
                            _a.sent();
                            outputChannel.setVisibility(true);
                            return [2 /*return*/];
                    }
                });
            }); },
            dispose: function () {
                _this.outputChannelManager.deleteChannel(outputChannel.name);
            }
        };
    };
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], WindowImpl.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], WindowImpl.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(output_contribution_1.OutputContribution),
        __metadata("design:type", output_contribution_1.OutputContribution)
    ], WindowImpl.prototype, "outputContribution", void 0);
    WindowImpl = __decorate([
        inversify_1.injectable()
    ], WindowImpl);
    return WindowImpl;
}());
exports.WindowImpl = WindowImpl;
//# sourceMappingURL=window-impl.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var common_1 = require("../common");
var status_bar_1 = require("./status-bar");
var promise_util_1 = require("../common/promise-util");
var throttle = require("lodash.throttle");
var ProgressStatusBarItem = /** @class */ (function () {
    function ProgressStatusBarItem() {
        var _this = this;
        this.id = 'theia-progress-status-bar-item';
        this.messagesByProgress = new Map();
        this.incomingQueue = new Array();
        this.triggerUpdate = throttle(function () {
            var pick = _this.incomingQueue.slice(-1)[0];
            _this.update(pick);
        }, 250, { leading: true, trailing: true });
    }
    ProgressStatusBarItem.prototype.showProgress = function (progressId, message, cancellationToken) {
        var _this = this;
        var result = new promise_util_1.Deferred();
        cancellationToken.onCancellationRequested(function () {
            _this.processEvent(progressId, 'done');
            result.resolve(common_1.ProgressMessage.Cancel);
        });
        this.processEvent(progressId, 'start', message.text);
        return result.promise;
    };
    ProgressStatusBarItem.prototype.processEvent = function (progressId, event, message) {
        if (event === 'start') {
            this.incomingQueue.push(progressId);
            this.messagesByProgress.set(progressId, message);
        }
        else {
            this.incomingQueue = this.incomingQueue.filter(function (id) { return id !== progressId; });
        }
        this.triggerUpdate();
    };
    ProgressStatusBarItem.prototype.reportProgress = function (progressId, update, originalMessage, _cancellationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var newMessage;
            return __generator(this, function (_a) {
                newMessage = update.message ? originalMessage.text + ": " + update.message : originalMessage.text;
                this.messagesByProgress.set(progressId, newMessage);
                this.triggerUpdate();
                return [2 /*return*/];
            });
        });
    };
    ProgressStatusBarItem.prototype.update = function (progressId) {
        var message = progressId && this.messagesByProgress.get(progressId);
        if (!progressId || !message) {
            this.statusBar.removeElement(this.id);
            return;
        }
        var text = "$(refresh~spin) " + message;
        this.statusBar.setElement(this.id, {
            text: text,
            alignment: status_bar_1.StatusBarAlignment.LEFT,
            priority: 1
        });
    };
    __decorate([
        inversify_1.inject(status_bar_1.StatusBar),
        __metadata("design:type", Object)
    ], ProgressStatusBarItem.prototype, "statusBar", void 0);
    ProgressStatusBarItem = __decorate([
        inversify_1.injectable()
    ], ProgressStatusBarItem);
    return ProgressStatusBarItem;
}());
exports.ProgressStatusBarItem = ProgressStatusBarItem;
//# sourceMappingURL=progress-status-bar-item.js.map
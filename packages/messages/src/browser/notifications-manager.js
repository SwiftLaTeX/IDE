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
var common_1 = require("@theia/core/lib/common");
var objects_1 = require("@theia/core/lib/common/objects");
var core_1 = require("@theia/core");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var ts_md5_1 = require("ts-md5");
var markdownit = require("markdown-it");
var throttle = require("lodash.throttle");
var notification_preferences_1 = require("./notification-preferences");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var browser_1 = require("@theia/core/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var NotificationManager = /** @class */ (function (_super) {
    __extends(NotificationManager, _super);
    function NotificationManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onUpdatedEmitter = new core_1.Emitter();
        _this.onUpdated = _this.onUpdatedEmitter.event;
        _this.fireUpdatedEvent = throttle(function () {
            var notifications = objects_1.deepClone(Array.from(_this.notifications.values()));
            var toasts = objects_1.deepClone(Array.from(_this.toasts.values()));
            var visibilityState = _this.visibilityState;
            _this.onUpdatedEmitter.fire({ notifications: notifications, toasts: toasts, visibilityState: visibilityState });
        }, 250, { leading: true, trailing: true });
        _this.deferredResults = new Map();
        _this.notifications = new Map();
        _this.toasts = new Map();
        _this.visibilityState = 'hidden';
        _this.hideTimeouts = new Map();
        _this.mdEngine = markdownit({ html: true });
        return _this;
    }
    NotificationManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.notificationToastsVisibleKey = this.contextKeyService.createKey('notificationToastsVisible', false);
                this.notificationCenterVisibleKey = this.contextKeyService.createKey('notificationCenterVisible', false);
                return [2 /*return*/];
            });
        });
    };
    NotificationManager.prototype.updateContextKeys = function () {
        this.notificationToastsVisibleKey.set(this.toastsVisible);
        this.notificationCenterVisibleKey.set(this.centerVisible);
    };
    Object.defineProperty(NotificationManager.prototype, "toastsVisible", {
        get: function () {
            return this.visibilityState === 'toasts';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationManager.prototype, "centerVisible", {
        get: function () {
            return this.visibilityState === 'center';
        },
        enumerable: true,
        configurable: true
    });
    NotificationManager.prototype.setVisibilityState = function (newState) {
        var changed = this.visibilityState !== newState;
        this.visibilityState = newState;
        if (changed) {
            this.fireUpdatedEvent();
            this.updateContextKeys();
        }
    };
    NotificationManager.prototype.hideCenter = function () {
        this.setVisibilityState('hidden');
    };
    NotificationManager.prototype.toggleCenter = function () {
        this.setVisibilityState(this.centerVisible ? 'hidden' : 'center');
    };
    NotificationManager.prototype.accept = function (notification, action) {
        var messageId = this.getId(notification);
        if (!messageId) {
            return;
        }
        this.notifications.delete(messageId);
        this.toasts.delete(messageId);
        var result = this.deferredResults.get(messageId);
        if (!result) {
            return;
        }
        this.deferredResults.delete(messageId);
        if (this.centerVisible && this.notifications.size === 0) {
            this.visibilityState = 'hidden';
        }
        result.resolve(action);
        this.fireUpdatedEvent();
    };
    NotificationManager.prototype.find = function (notification) {
        return typeof notification === 'string' ? this.notifications.get(notification) : notification;
    };
    NotificationManager.prototype.getId = function (notification) {
        return typeof notification === 'string' ? notification : notification.messageId;
    };
    NotificationManager.prototype.hide = function () {
        if (this.toastsVisible) {
            this.toasts.clear();
        }
        this.setVisibilityState('hidden');
    };
    NotificationManager.prototype.clearAll = function () {
        var _this = this;
        this.setVisibilityState('hidden');
        Array.from(this.notifications.values()).forEach(function (n) { return _this.clear(n); });
    };
    NotificationManager.prototype.clear = function (notification) {
        this.accept(notification, undefined);
    };
    NotificationManager.prototype.toggleExpansion = function (notificationId) {
        var notification = this.find(notificationId);
        if (!notification) {
            return;
        }
        notification.collapsed = !notification.collapsed;
        this.fireUpdatedEvent();
    };
    NotificationManager.prototype.showMessage = function (plainMessage) {
        var messageId = this.getMessageId(plainMessage);
        var notification = this.notifications.get(messageId);
        if (!notification) {
            var message = this.renderMessage(plainMessage.text);
            var type = this.toNotificationType(plainMessage.type);
            var actions = Array.from(new Set(plainMessage.actions));
            var source = plainMessage.source;
            var expandable = this.isExpandable(message, source, actions);
            var collapsed = expandable;
            notification = { messageId: messageId, message: message, type: type, actions: actions, expandable: expandable, collapsed: collapsed };
            this.notifications.set(messageId, notification);
        }
        var result = this.deferredResults.get(messageId) || new promise_util_1.Deferred();
        this.deferredResults.set(messageId, result);
        if (!this.centerVisible) {
            this.toasts.delete(messageId);
            this.toasts.set(messageId, notification);
            this.startHideTimeout(messageId, this.getTimeout(plainMessage));
            this.setVisibilityState('toasts');
        }
        this.fireUpdatedEvent();
        return result.promise;
    };
    NotificationManager.prototype.startHideTimeout = function (messageId, timeout) {
        var _this = this;
        if (timeout > 0) {
            this.hideTimeouts.set(messageId, window.setTimeout(function () {
                _this.hideToast(messageId);
            }, timeout));
        }
    };
    NotificationManager.prototype.hideToast = function (messageId) {
        this.toasts.delete(messageId);
        if (this.toastsVisible && !this.toasts.size) {
            this.setVisibilityState('hidden');
        }
        else {
            this.fireUpdatedEvent();
        }
    };
    NotificationManager.prototype.getTimeout = function (plainMessage) {
        if (plainMessage.actions && plainMessage.actions.length > 0) {
            // Ignore the timeout if at least one action is set, and we wait for user interaction.
            return 0;
        }
        return plainMessage.options && plainMessage.options.timeout || this.preferences['notification.timeout'];
    };
    NotificationManager.prototype.renderMessage = function (content) {
        var contentWithoutNewlines = content.replace(/(\r)?\n/gm, ' ');
        return this.mdEngine.renderInline(contentWithoutNewlines);
    };
    NotificationManager.prototype.isExpandable = function (message, source, actions) {
        if (!actions.length && source) {
            return true;
        }
        return message.length > 500;
    };
    NotificationManager.prototype.toNotificationType = function (type) {
        switch (type) {
            case common_1.MessageType.Error:
                return 'error';
            case common_1.MessageType.Warning:
                return 'warning';
            case common_1.MessageType.Progress:
                return 'progress';
            default:
                return 'info';
        }
    };
    NotificationManager.prototype.getMessageId = function (m) {
        return String(ts_md5_1.Md5.hashStr("[" + m.type + "] " + m.text + " : " + (m.actions || []).join(' | ') + ";"));
    };
    NotificationManager.prototype.showProgress = function (messageId, plainMessage, cancellationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var notification, message, type, actions, source, expandable, collapsed, result;
            var _this = this;
            return __generator(this, function (_a) {
                notification = this.notifications.get(messageId);
                if (!notification) {
                    message = this.renderMessage(plainMessage.text);
                    type = this.toNotificationType(plainMessage.type);
                    actions = Array.from(new Set(plainMessage.actions));
                    source = plainMessage.source;
                    expandable = this.isExpandable(message, source, actions);
                    collapsed = expandable;
                    notification = { messageId: messageId, message: message, type: type, actions: actions, expandable: expandable, collapsed: collapsed };
                    this.notifications.set(messageId, notification);
                    notification.progress = 0;
                    cancellationToken.onCancellationRequested(function () {
                        _this.accept(messageId, common_1.ProgressMessage.Cancel);
                    });
                }
                result = this.deferredResults.get(messageId) || new promise_util_1.Deferred();
                this.deferredResults.set(messageId, result);
                if (!this.centerVisible) {
                    this.toasts.set(messageId, notification);
                    this.setVisibilityState('toasts');
                }
                this.fireUpdatedEvent();
                return [2 /*return*/, result.promise];
            });
        });
    };
    NotificationManager.prototype.reportProgress = function (messageId, update, originalMessage, cancellationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var notification;
            return __generator(this, function (_a) {
                notification = this.find(messageId);
                if (!notification) {
                    return [2 /*return*/];
                }
                if (cancellationToken.isCancellationRequested) {
                    this.clear(messageId);
                }
                else {
                    notification.message = update.message ? originalMessage.text + ": " + update.message : originalMessage.text;
                    notification.progress = this.toPlainProgress(update);
                }
                this.fireUpdatedEvent();
                return [2 /*return*/];
            });
        });
    };
    NotificationManager.prototype.toPlainProgress = function (update) {
        return update.work && Math.min(update.work.done / update.work.total * 100, 100);
    };
    NotificationManager.prototype.openLink = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, opener;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new uri_1.default(link);
                        return [4 /*yield*/, this.openerService.getOpener(uri)];
                    case 1:
                        opener = _a.sent();
                        opener.open(uri);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(notification_preferences_1.NotificationPreferences),
        __metadata("design:type", Object)
    ], NotificationManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], NotificationManager.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], NotificationManager.prototype, "openerService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NotificationManager.prototype, "init", null);
    NotificationManager = __decorate([
        inversify_1.injectable()
    ], NotificationManager);
    return NotificationManager;
}(common_1.MessageClient));
exports.NotificationManager = NotificationManager;
//# sourceMappingURL=notifications-manager.js.map
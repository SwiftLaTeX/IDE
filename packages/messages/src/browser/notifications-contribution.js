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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var notifications_commands_1 = require("./notifications-commands");
var notifications_manager_1 = require("./notifications-manager");
var notifications_renderer_1 = require("./notifications-renderer");
var color_registry_1 = require("@theia/core/lib/browser/color-registry");
var NotificationsContribution = /** @class */ (function () {
    function NotificationsContribution() {
        this.id = 'theia-notification-center';
    }
    NotificationsContribution.prototype.onStart = function (_app) {
        this.createStatusBarItem();
    };
    NotificationsContribution.prototype.createStatusBarItem = function () {
        var _this = this;
        this.updateStatusBarItem();
        this.manager.onUpdated(function (e) { return _this.updateStatusBarItem(e.notifications.length); });
    };
    NotificationsContribution.prototype.updateStatusBarItem = function (count) {
        if (count === void 0) { count = 0; }
        this.statusBar.setElement(this.id, {
            text: this.getStatusBarItemText(count),
            alignment: browser_1.StatusBarAlignment.RIGHT,
            priority: -900,
            command: notifications_commands_1.NotificationsCommands.TOGGLE.id,
            tooltip: this.getStatusBarItemTooltip(count)
        });
    };
    NotificationsContribution.prototype.getStatusBarItemText = function (count) {
        return "$(bell) " + (count ? " " + count : '');
    };
    NotificationsContribution.prototype.getStatusBarItemTooltip = function (count) {
        if (this.manager.centerVisible) {
            return 'Hide Notifications';
        }
        return count === 0
            ? 'No Notifications'
            : count === 1 ? '1 Notification' : count + " Notifications";
    };
    NotificationsContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(notifications_commands_1.NotificationsCommands.TOGGLE, {
            isEnabled: function () { return true; },
            execute: function () { return _this.manager.toggleCenter(); }
        });
        commands.registerCommand(notifications_commands_1.NotificationsCommands.HIDE, {
            execute: function () { return _this.manager.hide(); }
        });
        commands.registerCommand(notifications_commands_1.NotificationsCommands.CLEAR_ALL, {
            execute: function () { return _this.manager.clearAll(); }
        });
    };
    NotificationsContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: notifications_commands_1.NotificationsCommands.HIDE.id,
            context: NotificationsKeybindingContext.notificationsVisible,
            keybinding: 'esc'
        });
    };
    NotificationsContribution.prototype.registerColors = function (colors) {
        colors.register({
            id: 'notificationCenter.border', defaults: {
                hc: 'contrastBorder'
            }, description: 'Notifications center border color. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notificationToast.border', defaults: {
                hc: 'contrastBorder'
            }, description: 'Notification toast border color. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notifications.foreground', defaults: {
                dark: 'editorWidget.foreground',
                light: 'editorWidget.foreground',
                hc: 'editorWidget.foreground'
            }, description: 'Notifications foreground color. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notifications.background', defaults: {
                dark: 'editorWidget.background',
                light: 'editorWidget.background',
                hc: 'editorWidget.background'
            }, description: 'Notifications background color. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notificationLink.foreground', defaults: {
                dark: 'textLink.foreground',
                light: 'textLink.foreground',
                hc: 'textLink.foreground'
            }, description: 'Notification links foreground color. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notificationCenterHeader.foreground',
            description: 'Notifications center header foreground color. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notificationCenterHeader.background', defaults: {
                dark: color_registry_1.Color.lighten('notifications.background', 0.3),
                light: color_registry_1.Color.darken('notifications.background', 0.05),
                hc: 'notifications.background'
            }, description: 'Notifications center header background color. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notifications.border', defaults: {
                dark: 'notificationCenterHeader.background',
                light: 'notificationCenterHeader.background',
                hc: 'notificationCenterHeader.background'
                // eslint-disable-next-line max-len
            }, description: 'Notifications border color separating from other notifications in the notifications center. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notificationsErrorIcon.foreground', defaults: {
                dark: 'editorError.foreground',
                light: 'editorError.foreground',
                hc: 'editorError.foreground'
            }, description: 'The color used for the icon of error notifications. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notificationsWarningIcon.foreground', defaults: {
                dark: 'editorWarning.foreground',
                light: 'editorWarning.foreground',
                hc: 'editorWarning.foreground'
            }, description: 'The color used for the icon of warning notifications. Notifications slide in from the bottom right of the window.'
        }, {
            id: 'notificationsInfoIcon.foreground', defaults: {
                dark: 'editorInfo.foreground',
                light: 'editorInfo.foreground',
                hc: 'editorInfo.foreground'
            }, description: 'The color used for the icon of info notifications. Notifications slide in from the bottom right of the window.'
        });
    };
    __decorate([
        inversify_1.inject(notifications_manager_1.NotificationManager),
        __metadata("design:type", notifications_manager_1.NotificationManager)
    ], NotificationsContribution.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(notifications_renderer_1.NotificationsRenderer),
        __metadata("design:type", notifications_renderer_1.NotificationsRenderer)
    ], NotificationsContribution.prototype, "notificationsRenderer", void 0);
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], NotificationsContribution.prototype, "statusBar", void 0);
    NotificationsContribution = __decorate([
        inversify_1.injectable()
    ], NotificationsContribution);
    return NotificationsContribution;
}());
exports.NotificationsContribution = NotificationsContribution;
var NotificationsKeybindingContext = /** @class */ (function () {
    function NotificationsKeybindingContext() {
        this.id = NotificationsKeybindingContext_1.notificationsVisible;
    }
    NotificationsKeybindingContext_1 = NotificationsKeybindingContext;
    NotificationsKeybindingContext.prototype.isEnabled = function (_arg) {
        return this.manager.centerVisible || this.manager.toastsVisible;
    };
    var NotificationsKeybindingContext_1;
    __decorate([
        inversify_1.inject(notifications_manager_1.NotificationManager),
        __metadata("design:type", notifications_manager_1.NotificationManager)
    ], NotificationsKeybindingContext.prototype, "manager", void 0);
    NotificationsKeybindingContext = NotificationsKeybindingContext_1 = __decorate([
        inversify_1.injectable()
    ], NotificationsKeybindingContext);
    return NotificationsKeybindingContext;
}());
exports.NotificationsKeybindingContext = NotificationsKeybindingContext;
(function (NotificationsKeybindingContext) {
    NotificationsKeybindingContext.notificationsVisible = 'notificationsVisible';
})(NotificationsKeybindingContext = exports.NotificationsKeybindingContext || (exports.NotificationsKeybindingContext = {}));
exports.NotificationsKeybindingContext = NotificationsKeybindingContext;
//# sourceMappingURL=notifications-contribution.js.map
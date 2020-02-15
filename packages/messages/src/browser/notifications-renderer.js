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
var ReactDOM = require("react-dom");
var React = require("react");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var notifications_manager_1 = require("./notifications-manager");
var notification_center_component_1 = require("./notification-center-component");
var notification_toasts_component_1 = require("./notification-toasts-component");
var NotificationsRenderer = /** @class */ (function () {
    function NotificationsRenderer() {
    }
    NotificationsRenderer.prototype.init = function () {
        this.createOverlayContainer();
        this.render();
    };
    NotificationsRenderer.prototype.createOverlayContainer = function () {
        this.container = window.document.createElement('div');
        this.container.className = 'theia-notifications-overlay';
        if (window.document.body) {
            window.document.body.appendChild(this.container);
        }
    };
    NotificationsRenderer.prototype.render = function () {
        ReactDOM.render(React.createElement("div", null,
            React.createElement(notification_toasts_component_1.NotificationToastsComponent, { manager: this.manager }),
            React.createElement(notification_center_component_1.NotificationCenterComponent, { manager: this.manager })), this.container);
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], NotificationsRenderer.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(notifications_manager_1.NotificationManager),
        __metadata("design:type", notifications_manager_1.NotificationManager)
    ], NotificationsRenderer.prototype, "manager", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NotificationsRenderer.prototype, "init", null);
    NotificationsRenderer = __decorate([
        inversify_1.injectable()
    ], NotificationsRenderer);
    return NotificationsRenderer;
}());
exports.NotificationsRenderer = NotificationsRenderer;
//# sourceMappingURL=notifications-renderer.js.map
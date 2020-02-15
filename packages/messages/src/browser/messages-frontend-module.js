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
Object.defineProperty(exports, "__esModule", { value: true });
require("../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var notifications_manager_1 = require("./notifications-manager");
var notification_preferences_1 = require("./notification-preferences");
var notifications_renderer_1 = require("./notifications-renderer");
var notifications_contribution_1 = require("./notifications-contribution");
var browser_1 = require("@theia/core/lib/browser");
var core_1 = require("@theia/core");
var color_application_contribution_1 = require("@theia/core/lib/browser/color-application-contribution");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(notifications_renderer_1.NotificationsRenderer).toSelf().inSingletonScope();
    bind(notifications_contribution_1.NotificationsContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(notifications_contribution_1.NotificationsContribution);
    bind(core_1.CommandContribution).toService(notifications_contribution_1.NotificationsContribution);
    bind(browser_1.KeybindingContribution).toService(notifications_contribution_1.NotificationsContribution);
    bind(color_application_contribution_1.ColorContribution).toService(notifications_contribution_1.NotificationsContribution);
    bind(notifications_contribution_1.NotificationsKeybindingContext).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContext).toService(notifications_contribution_1.NotificationsKeybindingContext);
    bind(notifications_manager_1.NotificationManager).toSelf().inSingletonScope();
    rebind(common_1.MessageClient).toService(notifications_manager_1.NotificationManager);
    notification_preferences_1.bindNotificationPreferences(bind);
});
//# sourceMappingURL=messages-frontend-module.js.map
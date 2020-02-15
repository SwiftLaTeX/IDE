"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var hosted_plugin_log_viewer_1 = require("./hosted-plugin-log-viewer");
var hosted_plugin_manager_client_1 = require("./hosted-plugin-manager-client");
var hosted_plugin_informer_1 = require("./hosted-plugin-informer");
var hosted_plugin_preferences_1 = require("./hosted-plugin-preferences");
var hosted_plugin_controller_1 = require("./hosted-plugin-controller");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var hosted_plugin_frontend_contribution_1 = require("./hosted-plugin-frontend-contribution");
var command_1 = require("@theia/core/lib/common/command");
var plugin_dev_protocol_1 = require("../common/plugin-dev-protocol");
var hosted_plugin_watcher_1 = require("@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    hosted_plugin_preferences_1.bindHostedPluginPreferences(bind);
    bind(hosted_plugin_log_viewer_1.HostedPluginLogViewer).toSelf().inSingletonScope();
    bind(hosted_plugin_manager_client_1.HostedPluginManagerClient).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(hosted_plugin_informer_1.HostedPluginInformer).inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(hosted_plugin_controller_1.HostedPluginController).inSingletonScope();
    bind(hosted_plugin_frontend_contribution_1.HostedPluginFrontendContribution).toSelf().inSingletonScope();
    bind(command_1.CommandContribution).toService(hosted_plugin_frontend_contribution_1.HostedPluginFrontendContribution);
    bind(plugin_dev_protocol_1.HostedPluginServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var hostedWatcher = ctx.container.get(hosted_plugin_watcher_1.HostedPluginWatcher);
        return connection.createProxy(plugin_dev_protocol_1.hostedServicePath, hostedWatcher.getHostedPluginClient());
    }).inSingletonScope();
});
//# sourceMappingURL=plugin-dev-frontend-module.js.map
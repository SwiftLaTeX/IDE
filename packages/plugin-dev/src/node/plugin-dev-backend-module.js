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
var hosted_instance_manager_1 = require("./hosted-instance-manager");
var hosted_plugin_uri_postprocessor_1 = require("./hosted-plugin-uri-postprocessor");
var hosted_plugins_manager_1 = require("./hosted-plugins-manager");
var inversify_1 = require("inversify");
var connection_container_module_1 = require("@theia/core/lib/node/messaging/connection-container-module");
var contribution_provider_1 = require("@theia/core/lib/common/contribution-provider");
var hosted_plugin_service_1 = require("./hosted-plugin-service");
var plugin_dev_protocol_1 = require("../common/plugin-dev-protocol");
var hosted_plugin_reader_1 = require("./hosted-plugin-reader");
var backend_application_1 = require("@theia/core/lib/node/backend-application");
var commonHostedConnectionModule = connection_container_module_1.ConnectionContainerModule.create(function (_a) {
    var bind = _a.bind, bindBackendService = _a.bindBackendService;
    bind(hosted_plugins_manager_1.HostedPluginsManagerImpl).toSelf().inSingletonScope();
    bind(hosted_plugins_manager_1.HostedPluginsManager).toService(hosted_plugins_manager_1.HostedPluginsManagerImpl);
    bind(hosted_plugin_service_1.HostedPluginServerImpl).toSelf().inSingletonScope();
    bind(plugin_dev_protocol_1.HostedPluginServer).toService(hosted_plugin_service_1.HostedPluginServerImpl);
    bindBackendService(plugin_dev_protocol_1.hostedServicePath, plugin_dev_protocol_1.HostedPluginServer, function (server, client) {
        server.setClient(client);
        client.onDidCloseConnection(function () { return server.dispose(); });
        return server;
    });
});
function bindCommonHostedBackend(bind) {
    bind(hosted_plugin_reader_1.HostedPluginReader).toSelf().inSingletonScope();
    bind(backend_application_1.BackendApplicationContribution).toService(hosted_plugin_reader_1.HostedPluginReader);
    bind(connection_container_module_1.ConnectionContainerModule).toConstantValue(commonHostedConnectionModule);
}
exports.bindCommonHostedBackend = bindCommonHostedBackend;
var hostedBackendConnectionModule = connection_container_module_1.ConnectionContainerModule.create(function (_a) {
    var bind = _a.bind;
    contribution_provider_1.bindContributionProvider(bind, Symbol.for(hosted_plugin_uri_postprocessor_1.HostedPluginUriPostProcessorSymbolName));
    bind(hosted_instance_manager_1.HostedInstanceManager).to(hosted_instance_manager_1.NodeHostedPluginRunner).inSingletonScope();
});
exports.default = new inversify_1.ContainerModule(function (bind) {
    bindCommonHostedBackend(bind);
    bind(connection_container_module_1.ConnectionContainerModule).toConstantValue(hostedBackendConnectionModule);
});
//# sourceMappingURL=plugin-dev-backend-module.js.map
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
var metrics_contribution_1 = require("@theia/metrics/lib/node/metrics-contribution");
var plugin_metrics_1 = require("./plugin-metrics");
var metrics_protocol_1 = require("../common/metrics-protocol");
var plugin_metrics_impl_1 = require("./plugin-metrics-impl");
var handler_1 = require("@theia/core/lib/common/messaging/handler");
var core_1 = require("@theia/core");
var inversify_1 = require("inversify");
var metrics_contributor_1 = require("./metrics-contributor");
var plugin_metrics_time_sum_1 = require("./metric-output/plugin-metrics-time-sum");
var plugin_metrics_time_count_1 = require("./metric-output/plugin-metrics-time-count");
var metric_string_generator_1 = require("./metric-string-generator");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(plugin_metrics_time_sum_1.PluginMetricTimeSum).toSelf().inSingletonScope();
    bind(plugin_metrics_time_count_1.PluginMetricTimeCount).toSelf().inSingletonScope();
    bind(metrics_protocol_1.PluginMetrics).to(plugin_metrics_impl_1.PluginMetricsImpl).inTransientScope();
    bind(metric_string_generator_1.PluginMetricStringGenerator).toSelf().inSingletonScope();
    bind(metrics_contributor_1.PluginMetricsContributor).toSelf().inSingletonScope();
    bind(handler_1.ConnectionHandler).toDynamicValue(function (ctx) {
        var clients = ctx.container.get(metrics_contributor_1.PluginMetricsContributor);
        return new core_1.JsonRpcConnectionHandler(metrics_protocol_1.metricsJsonRpcPath, function (client) {
            var pluginMetricsHandler = ctx.container.get(metrics_protocol_1.PluginMetrics);
            clients.clients.add(pluginMetricsHandler);
            client.onDidCloseConnection(function () {
                clients.clients.delete(pluginMetricsHandler);
            });
            return pluginMetricsHandler;
        });
    }).inSingletonScope();
    bind(metrics_contribution_1.MetricsContribution).to(plugin_metrics_1.PluginMetricsContribution).inSingletonScope();
});
//# sourceMappingURL=plugin-metrics-backend-module.js.map
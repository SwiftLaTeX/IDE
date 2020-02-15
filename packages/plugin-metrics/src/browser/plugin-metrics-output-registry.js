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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var output_channel_registry_main_1 = require("@theia/plugin-ext/lib/main/browser/output-channel-registry-main");
var plugin_metrics_creator_1 = require("./plugin-metrics-creator");
var plugin_metrics_types_1 = require("../common/plugin-metrics-types");
var PluginMetricsOutputChannelRegistry = /** @class */ (function (_super) {
    __extends(PluginMetricsOutputChannelRegistry, _super);
    function PluginMetricsOutputChannelRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluginMetricsOutputChannelRegistry.prototype.$append = function (channelName, errorOrValue, pluginInfo) {
        if (errorOrValue.startsWith('[Error')) {
            var createdMetric = plugin_metrics_types_1.createDefaultRequestData(pluginInfo.id, errorOrValue);
            this.pluginMetricsCreator.createErrorMetric(createdMetric);
        }
        return _super.prototype.$append.call(this, channelName, errorOrValue, pluginInfo);
    };
    __decorate([
        inversify_1.inject(plugin_metrics_creator_1.PluginMetricsCreator),
        __metadata("design:type", plugin_metrics_creator_1.PluginMetricsCreator)
    ], PluginMetricsOutputChannelRegistry.prototype, "pluginMetricsCreator", void 0);
    PluginMetricsOutputChannelRegistry = __decorate([
        inversify_1.injectable()
    ], PluginMetricsOutputChannelRegistry);
    return PluginMetricsOutputChannelRegistry;
}(output_channel_registry_main_1.OutputChannelRegistryMainImpl));
exports.PluginMetricsOutputChannelRegistry = PluginMetricsOutputChannelRegistry;
//# sourceMappingURL=plugin-metrics-output-registry.js.map
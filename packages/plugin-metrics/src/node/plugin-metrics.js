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
var metrics_protocol_1 = require("../common/metrics-protocol");
var metrics_contributor_1 = require("./metrics-contributor");
var metric_string_generator_1 = require("./metric-string-generator");
var PluginMetricsContribution = /** @class */ (function () {
    function PluginMetricsContribution() {
    }
    PluginMetricsContribution.prototype.getMetrics = function () {
        return this.metrics;
    };
    PluginMetricsContribution.prototype.startCollecting = function () {
        var _this = this;
        setInterval(function () {
            var reconciledMetrics = _this.metricsContributor.reconcile();
            _this.metrics = _this.stringGenerator.getMetricsString(reconciledMetrics);
        }, metrics_protocol_1.METRICS_TIMEOUT);
    };
    __decorate([
        inversify_1.inject(metrics_contributor_1.PluginMetricsContributor),
        __metadata("design:type", metrics_contributor_1.PluginMetricsContributor)
    ], PluginMetricsContribution.prototype, "metricsContributor", void 0);
    __decorate([
        inversify_1.inject(metric_string_generator_1.PluginMetricStringGenerator),
        __metadata("design:type", metric_string_generator_1.PluginMetricStringGenerator)
    ], PluginMetricsContribution.prototype, "stringGenerator", void 0);
    PluginMetricsContribution = __decorate([
        inversify_1.injectable()
    ], PluginMetricsContribution);
    return PluginMetricsContribution;
}());
exports.PluginMetricsContribution = PluginMetricsContribution;
//# sourceMappingURL=plugin-metrics.js.map
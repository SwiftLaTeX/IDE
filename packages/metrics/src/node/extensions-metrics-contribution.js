"use strict";
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
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var inversify_1 = require("inversify");
var application_package_1 = require("@theia/application-package");
var prometheus_1 = require("./prometheus");
var metricsName = 'theia_extension_version';
var ExtensionMetricsContribution = /** @class */ (function () {
    function ExtensionMetricsContribution() {
        this.metrics = '';
    }
    ExtensionMetricsContribution.prototype.getMetrics = function () {
        return this.metrics;
    };
    ExtensionMetricsContribution.prototype.startCollecting = function () {
        var latestMetrics = '';
        var installedExtensions = this.applicationPackage.extensionPackages;
        latestMetrics += "# HELP " + metricsName + " Theia extension version info.\n";
        latestMetrics += "# TYPE " + metricsName + " gauge\n";
        installedExtensions.forEach(function (extensionInfo) {
            var extensionName = extensionInfo.name;
            if (!prometheus_1.PROMETHEUS_REGEXP.test(extensionName)) {
                extensionName = prometheus_1.toPrometheusValidName(extensionName);
            }
            var metricsValue = metricsName + ("{extension=\"" + extensionName + "\",version=\"" + extensionInfo.version + "\"} 1");
            latestMetrics += metricsValue + '\n';
        });
        this.metrics = latestMetrics;
    };
    __decorate([
        inversify_1.inject(application_package_1.ApplicationPackage),
        __metadata("design:type", application_package_1.ApplicationPackage)
    ], ExtensionMetricsContribution.prototype, "applicationPackage", void 0);
    ExtensionMetricsContribution = __decorate([
        inversify_1.injectable()
    ], ExtensionMetricsContribution);
    return ExtensionMetricsContribution;
}());
exports.ExtensionMetricsContribution = ExtensionMetricsContribution;
//# sourceMappingURL=extensions-metrics-contribution.js.map
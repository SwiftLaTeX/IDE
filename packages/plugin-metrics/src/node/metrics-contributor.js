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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var PluginMetricsContributor = /** @class */ (function () {
    function PluginMetricsContributor() {
        this.clients = new Set();
    }
    PluginMetricsContributor.prototype.reconcile = function () {
        var reconciledMap = {};
        this.clients.forEach(function (c) {
            var extensionIDtoMap = JSON.parse(c.getMetrics());
            for (var vscodeExtensionID in extensionIDtoMap) {
                if (!extensionIDtoMap.hasOwnProperty(vscodeExtensionID)) {
                    continue;
                }
                if (!reconciledMap[vscodeExtensionID]) {
                    reconciledMap[vscodeExtensionID] = extensionIDtoMap[vscodeExtensionID];
                }
                else {
                    var methodToAnalytics = extensionIDtoMap[vscodeExtensionID];
                    for (var method in methodToAnalytics) {
                        if (!methodToAnalytics.hasOwnProperty(method)) {
                            continue;
                        }
                        if (!reconciledMap[vscodeExtensionID][method]) {
                            reconciledMap[vscodeExtensionID][method] = methodToAnalytics[method];
                        }
                        else {
                            var currentAnalytic = reconciledMap[vscodeExtensionID][method];
                            if (!methodToAnalytics[method]) {
                                reconciledMap[vscodeExtensionID][method] = currentAnalytic;
                            }
                            else {
                                // It does have the method
                                // Then we need to reconcile the two analytics from requests
                                var newAnalytic = methodToAnalytics[method];
                                newAnalytic.sumOfTimeForSuccess = newAnalytic.sumOfTimeForSuccess + currentAnalytic.sumOfTimeForSuccess;
                                newAnalytic.sumOfTimeForFailure = newAnalytic.sumOfTimeForFailure + currentAnalytic.sumOfTimeForFailure;
                                newAnalytic.totalRequests += currentAnalytic.totalRequests;
                                newAnalytic.succesfulResponses += currentAnalytic.succesfulResponses;
                                reconciledMap[vscodeExtensionID][method] = newAnalytic;
                            }
                        }
                    }
                }
            }
        });
        return reconciledMap;
    };
    PluginMetricsContributor = __decorate([
        inversify_1.injectable()
    ], PluginMetricsContributor);
    return PluginMetricsContributor;
}());
exports.PluginMetricsContributor = PluginMetricsContributor;
//# sourceMappingURL=metrics-contributor.js.map
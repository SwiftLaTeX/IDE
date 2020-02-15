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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var metrics_contributor_1 = require("./metrics-contributor");
var inversify_1 = require("inversify");
var plugin_metrics_impl_1 = require("./plugin-metrics-impl");
var metrics_protocol_1 = require("../common/metrics-protocol");
var assert = require("assert");
describe('Metrics contributor:', function () {
    var testContainer;
    before(function () {
        testContainer = new inversify_1.Container();
        var module = new inversify_1.ContainerModule(function (bind) {
            bind(metrics_protocol_1.PluginMetrics).to(plugin_metrics_impl_1.PluginMetricsImpl).inTransientScope();
            bind(metrics_contributor_1.PluginMetricsContributor).toSelf().inTransientScope();
        });
        testContainer.load(module);
    });
    describe('reconcile:', function () {
        it('Reconcile with one client connected', function () { return __awaiter(void 0, void 0, void 0, function () {
            var analytics, metricExtensionID, metricMethod, metricsMap, metricsContributor, pluginMetrics, reconciledMap;
            var _a, _b;
            return __generator(this, function (_c) {
                analytics = {
                    sumOfTimeForFailure: 0,
                    sumOfTimeForSuccess: 5,
                    succesfulResponses: 10,
                    totalRequests: 15
                };
                metricExtensionID = 'my_test_metric.test_metric';
                metricMethod = 'textDocument/testMethod';
                metricsMap = (_a = {},
                    _a[metricExtensionID] = (_b = {},
                        _b[metricMethod] = analytics,
                        _b),
                    _a);
                metricsContributor = testContainer.get(metrics_contributor_1.PluginMetricsContributor);
                pluginMetrics = testContainer.get(metrics_protocol_1.PluginMetrics);
                pluginMetrics.setMetrics(JSON.stringify(metricsMap));
                metricsContributor.clients.add(pluginMetrics);
                reconciledMap = metricsContributor.reconcile();
                // then
                assert.deepStrictEqual(reconciledMap, metricsMap);
                return [2 /*return*/];
            });
        }); });
        it('Reconcile same extension id and method with two clients connected', function () { return __awaiter(void 0, void 0, void 0, function () {
            var firstClientAnalytics, firstClientMetricExtensionID, firstClientMetricMethod, firstClientMetricsMap, secondClientAnalytics, secondClientMetricsMap, metricsContributor, firstClientPluginMetric, secondClientPluginMetric, reconciledMap, expectedAnalytics, expectedMap;
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                firstClientAnalytics = {
                    sumOfTimeForFailure: 0,
                    sumOfTimeForSuccess: 5,
                    succesfulResponses: 10,
                    totalRequests: 15
                };
                firstClientMetricExtensionID = 'my_test_metric.test_metric';
                firstClientMetricMethod = 'textDocument/testMethod';
                firstClientMetricsMap = (_a = {},
                    _a[firstClientMetricExtensionID] = (_b = {},
                        _b[firstClientMetricMethod] = firstClientAnalytics,
                        _b),
                    _a);
                secondClientAnalytics = {
                    sumOfTimeForFailure: 0,
                    sumOfTimeForSuccess: 15,
                    succesfulResponses: 20,
                    totalRequests: 18
                };
                secondClientMetricsMap = (_c = {},
                    _c[firstClientMetricExtensionID] = (_d = {},
                        _d[firstClientMetricMethod] = secondClientAnalytics,
                        _d),
                    _c);
                metricsContributor = testContainer.get(metrics_contributor_1.PluginMetricsContributor);
                firstClientPluginMetric = testContainer.get(metrics_protocol_1.PluginMetrics);
                firstClientPluginMetric.setMetrics(JSON.stringify(firstClientMetricsMap));
                metricsContributor.clients.add(firstClientPluginMetric);
                secondClientPluginMetric = testContainer.get(metrics_protocol_1.PluginMetrics);
                secondClientPluginMetric.setMetrics(JSON.stringify(secondClientMetricsMap));
                metricsContributor.clients.add(secondClientPluginMetric);
                reconciledMap = metricsContributor.reconcile();
                expectedAnalytics = {
                    sumOfTimeForFailure: 0,
                    sumOfTimeForSuccess: 20,
                    succesfulResponses: 30,
                    totalRequests: 33
                };
                expectedMap = (_e = {},
                    _e[firstClientMetricExtensionID] = (_f = {},
                        _f[firstClientMetricMethod] = expectedAnalytics,
                        _f),
                    _e);
                assert.deepStrictEqual(reconciledMap, expectedMap);
                return [2 /*return*/];
            });
        }); });
        it('Reconcile different extension id and method with two clients connected', function () { return __awaiter(void 0, void 0, void 0, function () {
            var firstClientAnalytics, firstClientMetricExtensionID, firstClientMetricMethod, firstClientMetricsMap, secondClientAnalytics, secondClientMetricExtensionID, secondClientMetricsMap, metricsContributor, firstClientPluginMetric, secondClientPluginMetric, reconciledMap, expectedMap;
            var _a, _b, _c, _d, _e, _f, _g;
            return __generator(this, function (_h) {
                firstClientAnalytics = {
                    sumOfTimeForFailure: 0,
                    sumOfTimeForSuccess: 5,
                    succesfulResponses: 10,
                    totalRequests: 15
                };
                firstClientMetricExtensionID = 'my_test_metric.test_metric';
                firstClientMetricMethod = 'textDocument/testMethod';
                firstClientMetricsMap = (_a = {},
                    _a[firstClientMetricExtensionID] = (_b = {},
                        _b[firstClientMetricMethod] = firstClientAnalytics,
                        _b),
                    _a);
                secondClientAnalytics = {
                    sumOfTimeForFailure: 0,
                    sumOfTimeForSuccess: 15,
                    succesfulResponses: 20,
                    totalRequests: 18
                };
                secondClientMetricExtensionID = 'my_other_test_metric.test_metric';
                secondClientMetricsMap = (_c = {},
                    _c[secondClientMetricExtensionID] = (_d = {},
                        _d[firstClientMetricMethod] = secondClientAnalytics,
                        _d),
                    _c);
                metricsContributor = testContainer.get(metrics_contributor_1.PluginMetricsContributor);
                firstClientPluginMetric = testContainer.get(metrics_protocol_1.PluginMetrics);
                firstClientPluginMetric.setMetrics(JSON.stringify(firstClientMetricsMap));
                metricsContributor.clients.add(firstClientPluginMetric);
                secondClientPluginMetric = testContainer.get(metrics_protocol_1.PluginMetrics);
                secondClientPluginMetric.setMetrics(JSON.stringify(secondClientMetricsMap));
                metricsContributor.clients.add(secondClientPluginMetric);
                reconciledMap = metricsContributor.reconcile();
                expectedMap = (_e = {},
                    _e[firstClientMetricExtensionID] = (_f = {},
                        _f[firstClientMetricMethod] = firstClientAnalytics,
                        _f),
                    _e[secondClientMetricExtensionID] = (_g = {},
                        _g[firstClientMetricMethod] = secondClientAnalytics,
                        _g),
                    _e);
                assert.deepStrictEqual(reconciledMap, expectedMap);
                return [2 /*return*/];
            });
        }); });
        it('Reconcile same extension id and different method with two clients connected', function () { return __awaiter(void 0, void 0, void 0, function () {
            var firstClientAnalytics, firstClientMetricExtensionID, firstClientMetricMethod, firstClientMetricsMap, secondClientAnalytics, secondClientMetricMethod, secondClientMetricsMap, metricsContributor, firstClientPluginMetric, secondClientPluginMetric, reconciledMap, expectedMap;
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                firstClientAnalytics = {
                    sumOfTimeForFailure: 0,
                    sumOfTimeForSuccess: 5,
                    succesfulResponses: 10,
                    totalRequests: 15
                };
                firstClientMetricExtensionID = 'my_test_metric.test_metric';
                firstClientMetricMethod = 'textDocument/testMethod';
                firstClientMetricsMap = (_a = {},
                    _a[firstClientMetricExtensionID] = (_b = {},
                        _b[firstClientMetricMethod] = firstClientAnalytics,
                        _b),
                    _a);
                secondClientAnalytics = {
                    sumOfTimeForFailure: 0,
                    sumOfTimeForSuccess: 15,
                    succesfulResponses: 20,
                    totalRequests: 18
                };
                secondClientMetricMethod = 'textDocument/myOthertestMethod';
                secondClientMetricsMap = (_c = {},
                    _c[firstClientMetricExtensionID] = (_d = {},
                        _d[secondClientMetricMethod] = secondClientAnalytics,
                        _d),
                    _c);
                metricsContributor = testContainer.get(metrics_contributor_1.PluginMetricsContributor);
                firstClientPluginMetric = testContainer.get(metrics_protocol_1.PluginMetrics);
                firstClientPluginMetric.setMetrics(JSON.stringify(firstClientMetricsMap));
                metricsContributor.clients.add(firstClientPluginMetric);
                secondClientPluginMetric = testContainer.get(metrics_protocol_1.PluginMetrics);
                secondClientPluginMetric.setMetrics(JSON.stringify(secondClientMetricsMap));
                metricsContributor.clients.add(secondClientPluginMetric);
                reconciledMap = metricsContributor.reconcile();
                expectedMap = (_e = {},
                    _e[firstClientMetricExtensionID] = (_f = {},
                        _f[firstClientMetricMethod] = firstClientAnalytics,
                        _f[secondClientMetricMethod] = secondClientAnalytics,
                        _f),
                    _e);
                assert.deepStrictEqual(reconciledMap, expectedMap);
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=metrics-contributor.spec.js.map
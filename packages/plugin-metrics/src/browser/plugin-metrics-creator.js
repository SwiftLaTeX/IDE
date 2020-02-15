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
var inversify_1 = require("inversify");
var metrics_protocol_1 = require("../common/metrics-protocol");
var plugin_metrics_types_1 = require("../common/plugin-metrics-types");
var PluginMetricsCreator = /** @class */ (function () {
    function PluginMetricsCreator() {
        this.NODE_BASED_REGEX = /Request(.*?)failed/;
        this.setPluginMetrics();
        this._extensionIDAnalytics = {};
    }
    /**
     * Create an error metric for requestData.pluginID by attempting to extract the erroring
     * language server method from the requestData.errorContentsOrMethod. If it cannot extract the
     * error language server method from requestData.errorContentsOrMethod then it will not
     * create a metric.
     *
     * @param pluginID The id of the plugin
     * @param errorContents The contents that the langauge server error has produced
     */
    PluginMetricsCreator.prototype.createErrorMetric = function (requestData) {
        return __awaiter(this, void 0, void 0, function () {
            var method, createdMetric;
            return __generator(this, function (_a) {
                if (!requestData.pluginID) {
                    return [2 /*return*/];
                }
                method = this.extractMethodFromValue(requestData.errorContentsOrMethod);
                // only log the metric if we can find the method that it occured in
                if (method) {
                    createdMetric = plugin_metrics_types_1.createRequestData(requestData.pluginID, method, requestData.timeTaken);
                    this.createMetric(createdMetric, false);
                    this.decreaseExtensionRequests(requestData.pluginID, method);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Decreases the total requests and the successful responses for pluginID with method by 1.
     *
     * This is needed because an error and a successful language server request aren't currently
     * associated together because of https://github.com/microsoft/vscode-languageserver-node/issues/517.
     * That means that every language server request that resolves counts as a successful language server request.
     * Therefore, we need to decrease the extension requests for pluginID when we know there is an error.
     * Otherwise, for every language server request that errors we would count it as both a success and a failure.
     *
     * @param pluginID The id of the plugin that should have the decreased requests
     */
    PluginMetricsCreator.prototype.decreaseExtensionRequests = function (pluginID, method) {
        var thisExtension = this._extensionIDAnalytics[pluginID];
        if (thisExtension) {
            var currentAnalytics = thisExtension[method];
            if (currentAnalytics) {
                currentAnalytics.totalRequests -= 1;
                currentAnalytics.succesfulResponses -= 1;
            }
        }
    };
    /**
     * Update the internal metrics structure for pluginID with method when a request is made
     *
     * @param requestData The data from the request that was made
     * @param isRequestSuccessful If the language server request was successful or not
     */
    PluginMetricsCreator.prototype.createMetric = function (requestData, isRequestSuccessful) {
        return __awaiter(this, void 0, void 0, function () {
            var method, defaultAnalytic, thisExtension, currentAnalytic;
            return __generator(this, function (_a) {
                if (!requestData.pluginID) {
                    return [2 /*return*/];
                }
                method = requestData.errorContentsOrMethod;
                defaultAnalytic = plugin_metrics_types_1.createDefaultAnalytics(requestData.timeTaken, isRequestSuccessful);
                this.createExtensionIDAnalyticIfNotFound(requestData, defaultAnalytic);
                this.createExtensionIDMethodIfNotFound(requestData, defaultAnalytic);
                thisExtension = this._extensionIDAnalytics[requestData.pluginID];
                if (thisExtension) {
                    currentAnalytic = thisExtension[method];
                    if (currentAnalytic) {
                        currentAnalytic.totalRequests += 1;
                        if (isRequestSuccessful) {
                            currentAnalytic.succesfulResponses += 1;
                        }
                        if (isRequestSuccessful) {
                            currentAnalytic.sumOfTimeForSuccess = currentAnalytic.sumOfTimeForSuccess + requestData.timeTaken;
                        }
                        else {
                            currentAnalytic.sumOfTimeForFailure = currentAnalytic.sumOfTimeForFailure + requestData.timeTaken;
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Create an entry in _extensionIDAnalytics with createdAnalytic if there does not exist one
     *
     * @param requestData data that we will turn into metrics
     * @param createdAnalytic the analytic being created
     */
    PluginMetricsCreator.prototype.createExtensionIDAnalyticIfNotFound = function (requestData, createdAnalytic) {
        var _a;
        var method = requestData.errorContentsOrMethod; // We know its a metric if this is being called
        if (!this._extensionIDAnalytics[requestData.pluginID]) {
            this._extensionIDAnalytics[requestData.pluginID] = (_a = {},
                _a[method] = createdAnalytic,
                _a);
        }
    };
    /**
     * Create an entry in _extensionIDAnalytics for requestData.pluginID with requestData.errorContentsOrMethod as the method
     * if there does not exist one
     *
     * @param requestData data that we will turn into metrics
     * @param createdAnalytic the analytic being created
     */
    PluginMetricsCreator.prototype.createExtensionIDMethodIfNotFound = function (requestData, createdAnalytic) {
        var method = requestData.errorContentsOrMethod; // We know its a metric if this is being called
        if (this._extensionIDAnalytics[requestData.pluginID]) {
            var methodToAnalyticMap = this._extensionIDAnalytics[requestData.pluginID];
            if (!methodToAnalyticMap[method]) {
                methodToAnalyticMap[method] = createdAnalytic;
            }
        }
    };
    /**
     * setPluginMetrics is a constant running function that sets
     * pluginMetrics every {$METRICS_TIMEOUT} seconds so that it doesn't
     * update /metrics on every request
     */
    PluginMetricsCreator.prototype.setPluginMetrics = function () {
        var self = this;
        setInterval(function () {
            if (Object.keys(self._extensionIDAnalytics).length !== 0) {
                self.pluginMetrics.setMetrics(JSON.stringify(self._extensionIDAnalytics));
            }
        }, metrics_protocol_1.METRICS_TIMEOUT);
    };
    Object.defineProperty(PluginMetricsCreator.prototype, "extensionIDAnalytics", {
        // Map of plugin extension id to method to analytic
        get: function () {
            return this._extensionIDAnalytics;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attempts to extract the method name from the current errorContents using the
     * vscode-languageclient matching regex.
     *
     * If it cannot find a match in the errorContents it returns undefined
     *
     * @param errorContents The contents of the current error or undefined
     */
    PluginMetricsCreator.prototype.extractMethodFromValue = function (errorContents) {
        if (!errorContents) {
            return undefined;
        }
        var matches = errorContents.match(this.NODE_BASED_REGEX);
        if (matches) {
            return matches[1].trim();
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(metrics_protocol_1.PluginMetrics),
        __metadata("design:type", Object)
    ], PluginMetricsCreator.prototype, "pluginMetrics", void 0);
    PluginMetricsCreator = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginMetricsCreator);
    return PluginMetricsCreator;
}());
exports.PluginMetricsCreator = PluginMetricsCreator;
//# sourceMappingURL=plugin-metrics-creator.js.map
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
export interface MetricsMap {
    [extensionID: string]: MethodToAnalytics;
}
export interface MethodToAnalytics {
    [methodID: string]: AnalyticsFromRequests;
}
export interface AnalyticsFromRequests {
    totalRequests: number;
    succesfulResponses: number;
    sumOfTimeForSuccess: number;
    sumOfTimeForFailure: number;
}
export interface DataFromRequest {
    pluginID: string;
    errorContentsOrMethod: string;
    timeTaken: number;
}
export interface MetricOutput {
    header: string;
    createMetricOutput(pluginID: string, method: string, requestAnalytics: AnalyticsFromRequests): string;
}
/**
 * Helper functions for creating an object that corresponds to the DataFromRequest interface
 */
export declare function createRequestData(pluginID: string, errorContentsOrMethod: string, timeTaken: number): DataFromRequest;
export declare function createDefaultRequestData(pluginID: string, errorContentsOrMethod: string): DataFromRequest;
export declare function createDefaultAnalytics(timeTaken: number, isRequestSuccessful: boolean): AnalyticsFromRequests;
//# sourceMappingURL=plugin-metrics-types.d.ts.map
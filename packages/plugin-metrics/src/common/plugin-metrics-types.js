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
/**
 * Helper functions for creating an object that corresponds to the DataFromRequest interface
 */
function createRequestData(pluginID, errorContentsOrMethod, timeTaken) {
    return {
        pluginID: pluginID,
        errorContentsOrMethod: errorContentsOrMethod,
        timeTaken: timeTaken
    };
}
exports.createRequestData = createRequestData;
function createDefaultRequestData(pluginID, errorContentsOrMethod) {
    return {
        pluginID: pluginID,
        errorContentsOrMethod: errorContentsOrMethod,
        timeTaken: 0
    };
}
exports.createDefaultRequestData = createDefaultRequestData;
function createDefaultAnalytics(timeTaken, isRequestSuccessful) {
    if (isRequestSuccessful) {
        return {
            sumOfTimeForSuccess: timeTaken,
            sumOfTimeForFailure: 0,
            succesfulResponses: 0,
            totalRequests: 0
        };
    }
    else {
        return {
            sumOfTimeForSuccess: 0,
            sumOfTimeForFailure: timeTaken,
            succesfulResponses: 0,
            totalRequests: 0
        };
    }
}
exports.createDefaultAnalytics = createDefaultAnalytics;
//# sourceMappingURL=plugin-metrics-types.js.map
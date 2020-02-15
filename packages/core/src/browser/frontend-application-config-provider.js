"use strict";
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var FrontendApplicationConfigProvider = /** @class */ (function () {
    function FrontendApplicationConfigProvider() {
    }
    FrontendApplicationConfigProvider.get = function () {
        var config = FrontendApplicationConfigProvider.doGet();
        if (config === undefined) {
            throw new Error('The configuration is not set. Did you call FrontendApplicationConfigProvider#set?');
        }
        return config;
    };
    FrontendApplicationConfigProvider.set = function (config) {
        if (FrontendApplicationConfigProvider.doGet() !== undefined) {
            throw new Error('The configuration is already set.');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var globalObject = window;
        var key = FrontendApplicationConfigProvider.KEY;
        globalObject[key] = config;
    };
    FrontendApplicationConfigProvider.doGet = function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var globalObject = window;
        var key = FrontendApplicationConfigProvider.KEY;
        return globalObject[key];
    };
    FrontendApplicationConfigProvider.KEY = Symbol('FrontendApplicationConfigProvider');
    return FrontendApplicationConfigProvider;
}());
exports.FrontendApplicationConfigProvider = FrontendApplicationConfigProvider;
//# sourceMappingURL=frontend-application-config-provider.js.map
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
var inversify_1 = require("inversify");
// tslint:disable:no-implicit-dependencies
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
// tslint:enable:no-implicit-dependencies
var java_debug_preferences_1 = require("./java-debug-preferences");
var java_debug_frontend_contribution_1 = require("./java-debug-frontend-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    java_debug_preferences_1.bindJavaDebugPreferences(bind);
    bind(java_debug_frontend_contribution_1.JavaDebugFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(java_debug_frontend_contribution_1.JavaDebugFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(java_debug_frontend_contribution_1.JavaDebugFrontendContribution);
});
//# sourceMappingURL=java-debug-frontend-module.js.map
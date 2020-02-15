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
var node_1 = require("@theia/java/lib/node");
var java_debug_adapter_contribution_1 = require("./java-debug-adapter-contribution");
var debug_model_1 = require("@theia/debug/lib/common/debug-model");
exports.default = new inversify_1.ContainerModule(function (bind) {
    /* explicit inTransientScope because it is very important, that
       each web socket connection gets its own instance,
       since it is using frontend services via this connection */
    bind(debug_model_1.DebugAdapterContribution).to(java_debug_adapter_contribution_1.JavaDebugAdapterContribution).inTransientScope();
    bind(node_1.JavaExtensionContribution).to(java_debug_adapter_contribution_1.JavaDebugExtensionContribution).inSingletonScope();
});
//# sourceMappingURL=java-debug-backend-module.js.map
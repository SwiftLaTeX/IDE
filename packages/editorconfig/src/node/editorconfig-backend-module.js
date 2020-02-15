"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc.
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
var common_1 = require("@theia/core/lib/common");
var editorconfig_interface_1 = require("../common/editorconfig-interface");
var editorconfig_service_impl_1 = require("./editorconfig-service-impl");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(editorconfig_interface_1.EditorconfigService).to(editorconfig_service_impl_1.EditorconfigServiceImpl).inSingletonScope();
    bind(common_1.ConnectionHandler).toDynamicValue(function (ctx) {
        return new common_1.JsonRpcConnectionHandler(editorconfig_interface_1.editorconfigServicePath, function () {
            return ctx.container.get(editorconfig_interface_1.EditorconfigService);
        });
    }).inSingletonScope();
});
//# sourceMappingURL=editorconfig-backend-module.js.map
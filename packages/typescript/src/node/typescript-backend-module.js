"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var node_1 = require("@theia/languages/lib/node");
var typescript_contribution_1 = require("./typescript-contribution");
var typescript_version_service_1 = require("../common/typescript-version-service");
var typescript_version_service_impl_1 = require("./typescript-version-service-impl");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(node_1.LanguageServerContribution).to(typescript_contribution_1.TypeScriptContribution).inSingletonScope();
    bind(typescript_version_service_1.TypescriptVersionService).to(typescript_version_service_impl_1.TypescriptVersionServiceImpl).inSingletonScope();
    bind(common_1.ConnectionHandler).toDynamicValue(function (ctx) {
        return new common_1.JsonRpcConnectionHandler(typescript_version_service_1.typescriptVersionPath, function () {
            return ctx.container.get(typescript_version_service_1.TypescriptVersionService);
        });
    }).inSingletonScope();
});
//# sourceMappingURL=typescript-backend-module.js.map
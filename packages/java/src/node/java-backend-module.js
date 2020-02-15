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
var cli_1 = require("@theia/core/lib/node/cli");
var node_1 = require("@theia/languages/lib/node");
var java_contribution_1 = require("./java-contribution");
var java_cli_contribution_1 = require("./java-cli-contribution");
var java_extension_model_1 = require("./java-extension-model");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(java_contribution_1.JavaContribution).toSelf().inSingletonScope();
    bind(node_1.LanguageServerContribution).toService(java_contribution_1.JavaContribution);
    bind(java_cli_contribution_1.JavaCliContribution).toSelf().inSingletonScope();
    bind(cli_1.CliContribution).toService(java_cli_contribution_1.JavaCliContribution);
    common_1.bindContributionProvider(bind, java_extension_model_1.JavaExtensionContribution);
});
//# sourceMappingURL=java-backend-module.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2018 TypeFox, Ericsson and others.
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
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/languages/lib/browser");
var browser_3 = require("@theia/callhierarchy/lib/browser");
var typescript_client_contribution_1 = require("./typescript-client-contribution");
var typescript_callhierarchy_service_1 = require("./typescript-callhierarchy-service");
var typescript_frontend_contribution_1 = require("./typescript-frontend-contribution");
var typescript_keybinding_contexts_1 = require("./typescript-keybinding-contexts");
var typescript_preferences_1 = require("./typescript-preferences");
var typescript_version_service_1 = require("../common/typescript-version-service");
exports.default = new inversify_1.ContainerModule(function (bind) {
    typescript_preferences_1.bindTypescriptPreferences(bind);
    bind(typescript_version_service_1.TypescriptVersionService).toDynamicValue(function (_a) {
        var container = _a.container;
        return browser_1.WebSocketConnectionProvider.createProxy(container, typescript_version_service_1.typescriptVersionPath);
    }).inSingletonScope();
    bind(typescript_client_contribution_1.TypeScriptClientContribution).toSelf().inSingletonScope();
    bind(browser_2.LanguageClientContribution).toService(typescript_client_contribution_1.TypeScriptClientContribution);
    bind(typescript_callhierarchy_service_1.TypeScriptCallHierarchyService).toSelf().inSingletonScope();
    bind(browser_3.CallHierarchyService).toService(typescript_callhierarchy_service_1.TypeScriptCallHierarchyService);
    bind(typescript_frontend_contribution_1.TypeScriptFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(typescript_frontend_contribution_1.TypeScriptFrontendContribution);
    bind(common_1.MenuContribution).toService(typescript_frontend_contribution_1.TypeScriptFrontendContribution);
    bind(browser_1.KeybindingContribution).toService(typescript_frontend_contribution_1.TypeScriptFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(typescript_frontend_contribution_1.TypeScriptFrontendContribution);
    bind(browser_1.KeybindingContext).to(typescript_keybinding_contexts_1.TypeScriptEditorTextFocusContext).inSingletonScope();
});
//# sourceMappingURL=typescript-frontend-module.js.map
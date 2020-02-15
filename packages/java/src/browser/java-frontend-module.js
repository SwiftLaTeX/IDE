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
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/languages/lib/browser");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var java_client_contribution_1 = require("./java-client-contribution");
var java_commands_1 = require("./java-commands");
var java_label_provider_1 = require("./java-label-provider");
var java_resource_1 = require("./java-resource");
var java_keybinding_contexts_1 = require("./java-keybinding-contexts");
var java_preferences_1 = require("./java-preferences");
exports.default = new inversify_1.ContainerModule(function (bind) {
    java_preferences_1.bindJavaPreferences(bind);
    bind(java_commands_1.JavaCommandContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(java_commands_1.JavaCommandContribution);
    bind(browser_1.KeybindingContribution).toService(java_commands_1.JavaCommandContribution);
    bind(common_1.MenuContribution).toService(java_commands_1.JavaCommandContribution);
    bind(java_client_contribution_1.JavaClientContribution).toSelf().inSingletonScope();
    bind(browser_2.LanguageClientContribution).toService(java_client_contribution_1.JavaClientContribution);
    bind(browser_1.KeybindingContext).to(java_keybinding_contexts_1.JavaEditorTextFocusContext).inSingletonScope();
    bind(java_resource_1.JavaResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(java_resource_1.JavaResourceResolver);
    bind(label_provider_1.LabelProviderContribution).to(java_label_provider_1.JavaLabelProviderContribution).inSingletonScope();
});
//# sourceMappingURL=java-frontend-module.js.map
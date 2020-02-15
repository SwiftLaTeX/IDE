"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var preferences_1 = require("@theia/core/lib/browser/preferences");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var user_preference_provider_1 = require("./user-preference-provider");
var workspace_preference_provider_1 = require("./workspace-preference-provider");
var workspace_file_preference_provider_1 = require("./workspace-file-preference-provider");
var folders_preferences_provider_1 = require("./folders-preferences-provider");
var folder_preference_provider_1 = require("./folder-preference-provider");
function bindWorkspaceFilePreferenceProvider(bind) {
    bind(workspace_file_preference_provider_1.WorkspaceFilePreferenceProviderFactory).toFactory(function (ctx) { return function (options) {
        var child = new inversify_1.Container({ defaultScope: 'Singleton' });
        child.parent = ctx.container;
        child.bind(workspace_file_preference_provider_1.WorkspaceFilePreferenceProvider).toSelf();
        child.bind(workspace_file_preference_provider_1.WorkspaceFilePreferenceProviderOptions).toConstantValue(options);
        return child.get(workspace_file_preference_provider_1.WorkspaceFilePreferenceProvider);
    }; });
}
exports.bindWorkspaceFilePreferenceProvider = bindWorkspaceFilePreferenceProvider;
function bindFolderPreferenceProvider(bind) {
    bind(folder_preference_provider_1.FolderPreferenceProviderFactory).toFactory(function (ctx) {
        return function (options) {
            var child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = ctx.container;
            child.bind(folder_preference_provider_1.FolderPreferenceProviderOptions).toConstantValue(options);
            var configurations = ctx.container.get(preference_configurations_1.PreferenceConfigurations);
            if (configurations.isConfigUri(options.configUri)) {
                child.bind(folder_preference_provider_1.FolderPreferenceProvider).toSelf();
                return child.get(folder_preference_provider_1.FolderPreferenceProvider);
            }
            var sectionName = configurations.getName(options.configUri);
            return child.getNamed(folder_preference_provider_1.FolderPreferenceProvider, sectionName);
        };
    });
}
exports.bindFolderPreferenceProvider = bindFolderPreferenceProvider;
function bindPreferenceProviders(bind, unbind) {
    unbind(preferences_1.PreferenceProvider);
    bind(preferences_1.PreferenceProvider).to(user_preference_provider_1.UserPreferenceProvider).inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.User);
    bind(preferences_1.PreferenceProvider).to(workspace_preference_provider_1.WorkspacePreferenceProvider).inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.Workspace);
    bind(preferences_1.PreferenceProvider).to(folders_preferences_provider_1.FoldersPreferencesProvider).inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.Folder);
    bindFolderPreferenceProvider(bind);
    bindWorkspaceFilePreferenceProvider(bind);
}
exports.bindPreferenceProviders = bindPreferenceProviders;
//# sourceMappingURL=preference-bindings.js.map
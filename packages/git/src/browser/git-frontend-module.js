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
require("../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var browser_2 = require("@theia/navigator/lib/browser");
var common_2 = require("../common");
var git_contribution_1 = require("./git-contribution");
var git_diff_frontend_module_1 = require("./diff/git-diff-frontend-module");
var git_history_frontend_module_1 = require("./history/git-history-frontend-module");
var git_resource_resolver_1 = require("./git-resource-resolver");
var git_repository_provider_1 = require("./git-repository-provider");
var git_quick_open_service_1 = require("./git-quick-open-service");
var git_uri_label_contribution_1 = require("./git-uri-label-contribution");
var git_decorator_1 = require("./git-decorator");
var git_preferences_1 = require("./git-preferences");
var dirty_diff_module_1 = require("./dirty-diff/dirty-diff-module");
var blame_module_1 = require("./blame/blame-module");
var git_repository_tracker_1 = require("./git-repository-tracker");
var git_commit_message_validator_1 = require("./git-commit-message-validator");
var git_sync_service_1 = require("./git-sync-service");
var git_error_handler_1 = require("./git-error-handler");
var git_scm_provider_1 = require("./git-scm-provider");
var git_file_change_label_provider_1 = require("./git-file-change-label-provider");
var color_application_contribution_1 = require("@theia/core/lib/browser/color-application-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    git_preferences_1.bindGitPreferences(bind);
    git_diff_frontend_module_1.bindGitDiffModule(bind);
    git_history_frontend_module_1.bindGitHistoryModule(bind);
    dirty_diff_module_1.bindDirtyDiff(bind);
    blame_module_1.bindBlame(bind);
    bind(git_repository_tracker_1.GitRepositoryTracker).toSelf().inSingletonScope();
    bind(common_2.GitWatcherServerProxy).toDynamicValue(function (context) { return browser_1.WebSocketConnectionProvider.createProxy(context.container, common_2.GitWatcherPath); }).inSingletonScope();
    bind(common_2.GitWatcherServer).to(common_2.ReconnectingGitWatcherServer).inSingletonScope();
    bind(common_2.GitWatcher).toSelf().inSingletonScope();
    bind(common_2.Git).toDynamicValue(function (context) { return browser_1.WebSocketConnectionProvider.createProxy(context.container, common_2.GitPath); }).inSingletonScope();
    bind(git_contribution_1.GitContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(git_contribution_1.GitContribution);
    bind(common_1.MenuContribution).toService(git_contribution_1.GitContribution);
    bind(browser_1.FrontendApplicationContribution).toService(git_contribution_1.GitContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(git_contribution_1.GitContribution);
    bind(color_application_contribution_1.ColorContribution).toService(git_contribution_1.GitContribution);
    bind(git_resource_resolver_1.GitResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(git_resource_resolver_1.GitResourceResolver);
    bind(git_scm_provider_1.GitScmProvider.Factory).toFactory(git_scm_provider_1.GitScmProvider.createFactory);
    bind(git_repository_provider_1.GitRepositoryProvider).toSelf().inSingletonScope();
    bind(git_quick_open_service_1.GitQuickOpenService).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).to(git_uri_label_contribution_1.GitUriLabelProviderContribution).inSingletonScope();
    bind(browser_2.NavigatorTreeDecorator).to(git_decorator_1.GitDecorator).inSingletonScope();
    bind(git_commit_message_validator_1.GitCommitMessageValidator).toSelf().inSingletonScope();
    bind(git_sync_service_1.GitSyncService).toSelf().inSingletonScope();
    bind(git_error_handler_1.GitErrorHandler).toSelf().inSingletonScope();
    bind(git_file_change_label_provider_1.GitFileChangeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(git_file_change_label_provider_1.GitFileChangeLabelProvider);
});
//# sourceMappingURL=git-frontend-module.js.map
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
var git_history_contribution_1 = require("./git-history-contribution");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var git_history_widget_1 = require("./git-history-widget");
var git_commit_detail_widget_1 = require("./git-commit-detail-widget");
require("../../../src/browser/style/history.css");
require("../../../src/browser/style/git-icons.css");
var git_commit_detail_open_handler_1 = require("./git-commit-detail-open-handler");
function bindGitHistoryModule(bind) {
    bind(git_history_widget_1.GitHistoryWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: git_history_contribution_1.GIT_HISTORY_ID,
        createWidget: function () { return ctx.container.get(git_history_widget_1.GitHistoryWidget); }
    }); });
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: git_commit_detail_widget_1.GIT_COMMIT_DETAIL,
        createWidget: function (options) {
            var child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = ctx.container;
            child.bind(git_commit_detail_widget_1.GitCommitDetailWidget).toSelf();
            child.bind(git_commit_detail_widget_1.GitCommitDetailWidgetOptions).toConstantValue(options);
            return child.get(git_commit_detail_widget_1.GitCommitDetailWidget);
        }
    }); });
    bind(git_commit_detail_open_handler_1.GitCommitDetailOpenHandler).toSelf();
    bind(browser_1.OpenHandler).toService(git_commit_detail_open_handler_1.GitCommitDetailOpenHandler);
    browser_1.bindViewContribution(bind, git_history_contribution_1.GitHistoryContribution);
}
exports.bindGitHistoryModule = bindGitHistoryModule;
//# sourceMappingURL=git-history-frontend-module.js.map
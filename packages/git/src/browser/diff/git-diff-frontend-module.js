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
var git_diff_contribution_1 = require("./git-diff-contribution");
var browser_1 = require("@theia/core/lib/browser");
var git_diff_widget_1 = require("./git-diff-widget");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
require("../../../src/browser/style/diff.css");
function bindGitDiffModule(bind) {
    bind(git_diff_widget_1.GitDiffWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: git_diff_widget_1.GIT_DIFF,
        createWidget: function () { return ctx.container.get(git_diff_widget_1.GitDiffWidget); }
    }); });
    browser_1.bindViewContribution(bind, git_diff_contribution_1.GitDiffContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(git_diff_contribution_1.GitDiffContribution);
}
exports.bindGitDiffModule = bindGitDiffModule;
//# sourceMappingURL=git-diff-frontend-module.js.map
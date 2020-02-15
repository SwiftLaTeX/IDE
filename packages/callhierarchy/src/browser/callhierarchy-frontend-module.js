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
var callhierarchy_contribution_1 = require("./callhierarchy-contribution");
var common_1 = require("@theia/core/lib/common");
var callhierarchy_service_1 = require("./callhierarchy-service");
var browser_1 = require("@theia/core/lib/browser");
var callhierarchy_1 = require("./callhierarchy");
var callhierarchy_tree_1 = require("./callhierarchy-tree");
var current_editor_access_1 = require("./current-editor-access");
var inversify_1 = require("inversify");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(current_editor_access_1.CurrentEditorAccess).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, callhierarchy_service_1.CallHierarchyService);
    bind(callhierarchy_service_1.CallHierarchyServiceProvider).to(callhierarchy_service_1.CallHierarchyServiceProvider).inSingletonScope();
    browser_1.bindViewContribution(bind, callhierarchy_contribution_1.CallHierarchyContribution);
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: callhierarchy_1.CALLHIERARCHY_ID,
        createWidget: function () { return callhierarchy_tree_1.createHierarchyTreeWidget(context.container); }
    }); });
});
//# sourceMappingURL=callhierarchy-frontend-module.js.map
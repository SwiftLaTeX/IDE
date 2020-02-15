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
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var merge_conflicts_frontend_contribution_1 = require("./merge-conflicts-frontend-contribution");
var merge_conflicts_code_lense_provider_1 = require("./merge-conflicts-code-lense-provider");
var merge_conflicts_parser_1 = require("./merge-conflicts-parser");
var merge_conflict_resolver_1 = require("./merge-conflict-resolver");
var merge_conflicts_provider_1 = require("./merge-conflicts-provider");
var merge_conflicts_decorations_1 = require("./merge-conflicts-decorations");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(merge_conflicts_parser_1.MergeConflictsParser).toSelf().inSingletonScope();
    bind(merge_conflict_resolver_1.MergeConflictResolver).toSelf().inSingletonScope();
    bind(merge_conflicts_code_lense_provider_1.MergeConflictsCodeLensProvider).toSelf().inSingletonScope();
    bind(merge_conflicts_decorations_1.MergeConflictsDecorations).toSelf().inSingletonScope();
    bind(merge_conflicts_frontend_contribution_1.MergeConflictsFrontendContribution).toSelf().inSingletonScope();
    bind(merge_conflicts_provider_1.MergeConflictsProvider).toSelf().inSingletonScope();
    [common_1.CommandContribution, browser_1.FrontendApplicationContribution].forEach(function (serviceIdentifier) {
        return bind(serviceIdentifier).toService(merge_conflicts_frontend_contribution_1.MergeConflictsFrontendContribution);
    });
});
//# sourceMappingURL=merge-conflicts-frontend-module.js.map
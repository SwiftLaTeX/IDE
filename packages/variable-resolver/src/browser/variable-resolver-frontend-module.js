"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var variable_1 = require("./variable");
var variable_quick_open_service_1 = require("./variable-quick-open-service");
var variable_resolver_frontend_contribution_1 = require("./variable-resolver-frontend-contribution");
var variable_resolver_service_1 = require("./variable-resolver-service");
var common_variable_contribution_1 = require("./common-variable-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a;
    bind(variable_1.VariableRegistry).toSelf().inSingletonScope();
    bind(variable_resolver_service_1.VariableResolverService).toSelf().inSingletonScope();
    core_1.bindContributionProvider(bind, variable_1.VariableContribution);
    bind(variable_resolver_frontend_contribution_1.VariableResolverFrontendContribution).toSelf().inSingletonScope();
    try {
        for (var _b = __values([browser_1.FrontendApplicationContribution, core_1.CommandContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var identifier = _c.value;
            bind(identifier).toService(variable_resolver_frontend_contribution_1.VariableResolverFrontendContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(variable_quick_open_service_1.VariableQuickOpenService).toSelf().inSingletonScope();
    bind(common_variable_contribution_1.CommonVariableContribution).toSelf().inSingletonScope();
    bind(variable_1.VariableContribution).toService(common_variable_contribution_1.CommonVariableContribution);
});
//# sourceMappingURL=variable-resolver-frontend-module.js.map
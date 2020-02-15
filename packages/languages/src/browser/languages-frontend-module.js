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
var common_1 = require("@theia/core/lib/common");
var resource_context_key_1 = require("@theia/core/lib/browser/resource-context-key");
var browser_1 = require("@theia/core/lib/browser");
var language_client_services_1 = require("./language-client-services");
var window_impl_1 = require("./window-impl");
var language_client_factory_1 = require("./language-client-factory");
var languages_frontend_contribution_1 = require("./languages-frontend-contribution");
var language_client_contribution_1 = require("./language-client-contribution");
var workspace_symbols_1 = require("./workspace-symbols");
var language_client_provider_1 = require("./language-client-provider");
var language_client_provider_impl_1 = require("./language-client-provider-impl");
var common_2 = require("../common");
var language_resource_context_key_1 = require("./language-resource-context-key");
var language_dummy_service_1 = require("./language-dummy-service");
var langtool_connection_provider_1 = require("./langtool-connection-provider");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    var e_1, _a;
    bind(language_client_services_1.Window).to(window_impl_1.WindowImpl).inSingletonScope();
    bind(language_client_factory_1.LanguageClientFactory).toSelf().inSingletonScope();
    // bind(LanguageContribution.Service).toDynamicValue(({ container }) =>
    //     WebSocketConnectionProvider.createProxy(container, LanguageContribution.servicePath)
    // ).inSingletonScope();
    bind(common_2.LanguageContribution.Service).to(language_dummy_service_1.LanguageDummyService).inSingletonScope();
    common_1.bindContributionProvider(bind, language_client_contribution_1.LanguageClientContribution);
    bind(languages_frontend_contribution_1.LanguagesFrontendContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(languages_frontend_contribution_1.LanguagesFrontendContribution);
    bind(common_1.CommandContribution).toService(languages_frontend_contribution_1.LanguagesFrontendContribution);
    bind(workspace_symbols_1.WorkspaceSymbolCommand).toSelf().inSingletonScope();
    try {
        for (var _b = __values([common_1.CommandContribution, browser_1.KeybindingContribution, browser_1.QuickOpenContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var identifier = _c.value;
            bind(identifier).toService(workspace_symbols_1.WorkspaceSymbolCommand);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(language_client_provider_impl_1.LanguageClientProviderImpl).toSelf().inSingletonScope();
    bind(language_client_provider_1.LanguageClientProvider).toService(language_client_provider_impl_1.LanguageClientProviderImpl);
    bind(language_resource_context_key_1.LanguageResourceContextKey).toSelf().inSingletonScope();
    rebind(resource_context_key_1.ResourceContextKey).to(language_resource_context_key_1.LanguageResourceContextKey).inSingletonScope();
    bind(langtool_connection_provider_1.LangToolWebSocketConnectionProvider).toSelf().inSingletonScope();
});
//# sourceMappingURL=languages-frontend-module.js.map
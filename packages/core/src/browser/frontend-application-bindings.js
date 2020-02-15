"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var common_1 = require("../common");
var preferences_1 = require("./preferences");
function bindMessageService(bind) {
    bind(common_1.MessageClient).toSelf().inSingletonScope();
    return bind(common_1.MessageService).toSelf().inSingletonScope();
}
exports.bindMessageService = bindMessageService;
function bindPreferenceService(bind) {
    bind(preferences_1.PreferenceProvider).toSelf().inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.User);
    bind(preferences_1.PreferenceProvider).toSelf().inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.Workspace);
    bind(preferences_1.PreferenceProvider).toSelf().inSingletonScope().whenTargetNamed(preferences_1.PreferenceScope.Folder);
    bind(preferences_1.PreferenceProviderProvider).toFactory(function (ctx) { return function (scope) {
        if (scope === preferences_1.PreferenceScope.Default) {
            return ctx.container.get(preferences_1.PreferenceSchemaProvider);
        }
        return ctx.container.getNamed(preferences_1.PreferenceProvider, scope);
    }; });
    bind(preferences_1.PreferenceServiceImpl).toSelf().inSingletonScope();
    bind(preferences_1.PreferenceService).toService(preferences_1.PreferenceServiceImpl);
    preferences_1.bindPreferenceSchemaProvider(bind);
}
exports.bindPreferenceService = bindPreferenceService;
function bindResourceProvider(bind) {
    bind(common_1.DefaultResourceProvider).toSelf().inSingletonScope();
    bind(common_1.ResourceProvider).toProvider(function (context) { return function (uri) { return context.container.get(common_1.DefaultResourceProvider).get(uri); }; });
    common_1.bindContributionProvider(bind, common_1.ResourceResolver);
}
exports.bindResourceProvider = bindResourceProvider;
//# sourceMappingURL=frontend-application-bindings.js.map
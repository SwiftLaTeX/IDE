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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("@theia/core/lib/browser");
exports.HostedPluginConfigSchema = {
    'type': 'object',
    properties: {
        'hosted-plugin.watchMode': {
            type: 'boolean',
            description: 'Run watcher on plugin under development',
            default: true
        },
        'hosted-plugin.debugMode': {
            type: 'string',
            description: 'Using inspect or inspect-brk for Node.js debug',
            default: 'inspect',
            enum: ['inspect', 'inspect-brk']
        }
    }
};
exports.HostedPluginPreferences = Symbol('HostedPluginPreferences');
function createNavigatorPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.HostedPluginConfigSchema);
}
exports.createNavigatorPreferences = createNavigatorPreferences;
function bindHostedPluginPreferences(bind) {
    bind(exports.HostedPluginPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createNavigatorPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.HostedPluginConfigSchema });
}
exports.bindHostedPluginPreferences = bindHostedPluginPreferences;
//# sourceMappingURL=hosted-plugin-preferences.js.map
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
var preferences_1 = require("@theia/core/lib/browser/preferences");
exports.debugPreferencesSchema = {
    type: 'object',
    properties: {
        'debug.trace': {
            type: 'boolean',
            default: false,
            description: 'Enable/disable tracing communications with debug adapters'
        },
        'debug.debugViewLocation': {
            enum: ['default', 'left', 'right', 'bottom'],
            default: 'default',
            description: 'Controls the location of the debug view.'
        },
        'debug.openDebug': {
            enum: ['neverOpen', 'openOnSessionStart', 'openOnFirstSessionStart', 'openOnDebugBreak'],
            default: 'openOnSessionStart',
            description: 'Controls when the debug view should open.'
        },
        'debug.internalConsoleOptions': {
            enum: ['neverOpen', 'openOnSessionStart', 'openOnFirstSessionStart'],
            default: 'openOnFirstSessionStart',
            description: 'Controls when the internal debug console should open.'
        }
    }
};
var DebugConfiguration = /** @class */ (function () {
    function DebugConfiguration() {
    }
    return DebugConfiguration;
}());
exports.DebugConfiguration = DebugConfiguration;
exports.DebugPreferences = Symbol('DebugPreferences');
function createDebugPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.debugPreferencesSchema);
}
exports.createDebugPreferences = createDebugPreferences;
function bindDebugPreferences(bind) {
    bind(exports.DebugPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createDebugPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.debugPreferencesSchema });
}
exports.bindDebugPreferences = bindDebugPreferences;
//# sourceMappingURL=debug-preferences.js.map
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
var preferences_1 = require("@theia/core/lib/browser/preferences");
exports.javaDebugPreferenceSchema = {
    'type': 'object',
    'properties': {
        'java.debug.logLevel': {
            'type': 'string',
            'default': 'warn',
            'description': 'Minimum level of debugger logs.',
            'enum': [
                'error',
                'warn',
                'info',
                'verbose'
            ]
        },
        'java.debug.settings.showHex': {
            'type': 'boolean',
            'description': 'Show numbers in hex format in \"Variables\" viewlet.',
            'default': false
        },
        'java.debug.settings.showStaticVariables': {
            'type': 'boolean',
            'description': 'Show static variables in \"Variables\" viewlet.',
            'default': true
        },
        'java.debug.settings.showQualifiedNames': {
            'type': 'boolean',
            'description': 'Show fully qualified class names in \"Variables\" viewlet.',
            'default': false
        },
        'java.debug.settings.maxStringLength': {
            'type': 'number',
            // eslint-disable-next-line max-len
            'description': 'The maximum length of strings displayed in \"Variables\" or \"Debug Console\" viewlet, strings longer than this length will be trimmed, if 0 no trim is performed.',
            'default': 0
        },
        'java.debug.settings.enableHotCodeReplace': {
            'type': 'boolean',
            'description': 'Enable hot code replace for Java code.',
            'default': true
        },
        'java.debug.settings.enableRunDebugCodeLens': {
            'type': 'boolean',
            'description': 'Enable the run and debug code lens providers over main methods.',
            'default': true
        }
    }
};
exports.JavaDebugPreferences = Symbol('JavaDebugPreferences');
function createJavaDebugPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.javaDebugPreferenceSchema);
}
exports.createJavaDebugPreferences = createJavaDebugPreferences;
function bindJavaDebugPreferences(bind) {
    bind(exports.JavaDebugPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createJavaDebugPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.javaDebugPreferenceSchema });
}
exports.bindJavaDebugPreferences = bindJavaDebugPreferences;
//# sourceMappingURL=java-debug-preferences.js.map
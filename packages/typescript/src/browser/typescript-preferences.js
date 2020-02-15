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
exports.typescriptPreferenceSchema = {
    'type': 'object',
    'properties': {
        'typescript.server.log': {
            'type': 'string',
            'enum': [
                'off',
                'terse',
                'normal',
                'verbose'
            ],
            'default': 'off',
            // eslint-disable-next-line max-len
            'description': 'Enables logging of the TS server to a file. This log can be used to diagnose TS Server issues. The log may contain file paths, source code, and other potentially sensitive information from your project.'
        },
        'typescript.tsdk': {
            'type': [
                'string',
                'null'
            ],
            // eslint-disable-next-line no-null/no-null
            'default': null,
            'description': 'Specifies the folder path containing the tsserver and lib*.d.ts files to use.',
            'scope': 'window'
        }
    }
};
exports.TypescriptPreferences = Symbol('TypescriptPreferences');
function createTypescriptPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.typescriptPreferenceSchema);
}
exports.createTypescriptPreferences = createTypescriptPreferences;
function bindTypescriptPreferences(bind) {
    bind(exports.TypescriptPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createTypescriptPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.typescriptPreferenceSchema });
}
exports.bindTypescriptPreferences = bindTypescriptPreferences;
//# sourceMappingURL=typescript-preferences.js.map
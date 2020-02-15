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
exports.jsonPreferenceSchema = {
    'type': 'object',
    'properties': {
        'json.schemas': {
            'type': 'array',
            'description': 'Associate schemas to JSON files in the current project',
            'items': {
                'type': 'object',
                'default': {
                    'fileMatch': [
                        '/myfile'
                    ],
                    'url': 'schemaURL'
                },
                'properties': {
                    'url': {
                        'type': 'string',
                        'default': '/user.schema.json',
                        'description': 'A URL to a schema or a relative path to a schema in the current directory'
                    },
                    'fileMatch': {
                        'type': 'array',
                        'items': {
                            'type': 'string',
                            'default': 'MyFile.json',
                            'description': 'A file pattern that can contain \'*\' to match against when resolving JSON files to schemas.'
                        },
                        'minItems': 1,
                        'description': 'An array of file patterns to match against when resolving JSON files to schemas.'
                    }
                }
            }
        },
        'json.format.enable': {
            'type': 'boolean',
            'default': true,
            'description': 'Enable/disable default JSON formatter'
        },
    }
};
exports.JsonPreferences = Symbol('JsonPreferences');
function createJsonPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.jsonPreferenceSchema);
}
exports.createJsonPreferences = createJsonPreferences;
function bindJsonPreferences(bind) {
    bind(exports.JsonPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createJsonPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.jsonPreferenceSchema });
}
exports.bindJsonPreferences = bindJsonPreferences;
//# sourceMappingURL=json-preferences.js.map
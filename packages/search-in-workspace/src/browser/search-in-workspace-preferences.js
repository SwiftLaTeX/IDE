"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
exports.searchInWorkspacePreferencesSchema = {
    type: 'object',
    properties: {
        'search.lineNumbers': {
            description: 'Controls whether to show line numbers for search results.',
            default: false,
            type: 'boolean',
        },
        'search.collapseResults': {
            description: 'Controls whether the search results will be collapsed or expanded.',
            default: 'auto',
            type: 'string',
            enum: ['auto', 'alwaysCollapse', 'alwaysExpand'],
        }
    }
};
var SearchInWorkspaceConfiguration = /** @class */ (function () {
    function SearchInWorkspaceConfiguration() {
    }
    return SearchInWorkspaceConfiguration;
}());
exports.SearchInWorkspaceConfiguration = SearchInWorkspaceConfiguration;
exports.SearchInWorkspacePreferences = Symbol('SearchInWorkspacePreferences');
function createSearchInWorkspacePreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.searchInWorkspacePreferencesSchema);
}
exports.createSearchInWorkspacePreferences = createSearchInWorkspacePreferences;
function bindSearchInWorkspacePreferences(bind) {
    bind(exports.SearchInWorkspacePreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createSearchInWorkspacePreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.searchInWorkspacePreferencesSchema });
}
exports.bindSearchInWorkspacePreferences = bindSearchInWorkspacePreferences;
//# sourceMappingURL=search-in-workspace-preferences.js.map
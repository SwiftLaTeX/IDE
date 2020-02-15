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
exports.workspacePreferenceSchema = {
    type: 'object',
    properties: {
        'workspace.preserveWindow': {
            description: 'Enable opening workspaces in current window.',
            type: 'boolean',
            default: false
        },
        'workspace.supportMultiRootWorkspace': {
            description: 'Controls whether multi-root workspace support is enabled.',
            type: 'boolean',
            default: false
        }
    }
};
exports.WorkspacePreferences = Symbol('WorkspacePreferences');
function createWorkspacePreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.workspacePreferenceSchema);
}
exports.createWorkspacePreferences = createWorkspacePreferences;
function bindWorkspacePreferences(bind) {
    bind(exports.WorkspacePreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createWorkspacePreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.workspacePreferenceSchema });
}
exports.bindWorkspacePreferences = bindWorkspacePreferences;
//# sourceMappingURL=workspace-preferences.js.map
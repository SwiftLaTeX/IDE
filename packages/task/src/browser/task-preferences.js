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
var preference_contribution_1 = require("@theia/core/lib/browser/preferences/preference-contribution");
var task_schema_updater_1 = require("./task-schema-updater");
var task_folder_preference_provider_1 = require("./task-folder-preference-provider");
var browser_1 = require("@theia/preferences/lib/browser");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
exports.taskPreferencesSchema = {
    type: 'object',
    scope: 'resource',
    properties: {
        tasks: {
            $ref: task_schema_updater_1.taskSchemaId,
            description: 'Task definition file',
            defaultValue: {
                tasks: []
            }
        }
    }
};
function bindTaskPreferences(bind) {
    bind(preference_contribution_1.PreferenceContribution).toConstantValue({ schema: exports.taskPreferencesSchema });
    bind(browser_1.FolderPreferenceProvider).to(task_folder_preference_provider_1.TaskFolderPreferenceProvider).inTransientScope().whenTargetNamed('tasks');
    bind(preference_configurations_1.PreferenceConfiguration).toConstantValue({ name: 'tasks' });
}
exports.bindTaskPreferences = bindTaskPreferences;
//# sourceMappingURL=task-preferences.js.map
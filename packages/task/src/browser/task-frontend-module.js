"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var messaging_1 = require("@theia/core/lib/browser/messaging");
var quick_open_task_1 = require("./quick-open-task");
var task_contribution_1 = require("./task-contribution");
var task_service_1 = require("./task-service");
var task_configurations_1 = require("./task-configurations");
var provided_task_configurations_1 = require("./provided-task-configurations");
var task_frontend_contribution_1 = require("./task-frontend-contribution");
var task_common_module_1 = require("../common/task-common-module");
var task_protocol_1 = require("../common/task-protocol");
var task_watcher_1 = require("../common/task-watcher");
var process_task_frontend_module_1 = require("./process/process-task-frontend-module");
var task_schema_updater_1 = require("./task-schema-updater");
var task_definition_registry_1 = require("./task-definition-registry");
var task_problem_matcher_registry_1 = require("./task-problem-matcher-registry");
var task_problem_pattern_registry_1 = require("./task-problem-pattern-registry");
var task_configuration_manager_1 = require("./task-configuration-manager");
var task_preferences_1 = require("./task-preferences");
require("../../src/browser/style/index.css");
require("./tasks-monaco-contribution");
var task_name_resolver_1 = require("./task-name-resolver");
var task_source_resolver_1 = require("./task-source-resolver");
var task_templates_1 = require("./task-templates");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a;
    bind(task_frontend_contribution_1.TaskFrontendContribution).toSelf().inSingletonScope();
    bind(task_service_1.TaskService).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskActionProvider).toSelf().inSingletonScope();
    bind(quick_open_task_1.ConfigureTaskAction).toSelf().inSingletonScope();
    try {
        for (var _b = __values([browser_1.FrontendApplicationContribution, common_1.CommandContribution, browser_1.KeybindingContribution, common_1.MenuContribution, browser_1.QuickOpenContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var identifier = _c.value;
            bind(identifier).toService(task_frontend_contribution_1.TaskFrontendContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(quick_open_task_1.QuickOpenTask).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskRunningQuickOpen).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskTerminateQuickOpen).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskRestartRunningQuickOpen).toSelf().inSingletonScope();
    bind(task_configurations_1.TaskConfigurations).toSelf().inSingletonScope();
    bind(provided_task_configurations_1.ProvidedTaskConfigurations).toSelf().inSingletonScope();
    bind(task_configuration_manager_1.TaskConfigurationManager).toSelf().inSingletonScope();
    bind(task_protocol_1.TaskServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        var taskWatcher = ctx.container.get(task_watcher_1.TaskWatcher);
        return connection.createProxy(task_protocol_1.taskPath, taskWatcher.getTaskClient());
    }).inSingletonScope();
    bind(task_definition_registry_1.TaskDefinitionRegistry).toSelf().inSingletonScope();
    bind(task_problem_matcher_registry_1.ProblemMatcherRegistry).toSelf().inSingletonScope();
    bind(task_problem_pattern_registry_1.ProblemPatternRegistry).toSelf().inSingletonScope();
    task_common_module_1.createCommonBindings(bind);
    bind(task_contribution_1.TaskProviderRegistry).toSelf().inSingletonScope();
    bind(task_contribution_1.TaskResolverRegistry).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, task_contribution_1.TaskContribution);
    bind(task_schema_updater_1.TaskSchemaUpdater).toSelf().inSingletonScope();
    bind(task_name_resolver_1.TaskNameResolver).toSelf().inSingletonScope();
    bind(task_source_resolver_1.TaskSourceResolver).toSelf().inSingletonScope();
    bind(task_templates_1.TaskTemplateSelector).toSelf().inSingletonScope();
    process_task_frontend_module_1.bindProcessTaskModule(bind);
    task_preferences_1.bindTaskPreferences(bind);
});
//# sourceMappingURL=task-frontend-module.js.map
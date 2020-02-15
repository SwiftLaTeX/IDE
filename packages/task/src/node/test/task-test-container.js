"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var inversify_1 = require("inversify");
var logger_backend_module_1 = require("@theia/core/lib/node/logger-backend-module");
var backend_application_module_1 = require("@theia/core/lib/node/backend-application-module");
var process_backend_module_1 = require("@theia/process/lib/node/process-backend-module");
var terminal_backend_module_1 = require("@theia/terminal/lib/node/terminal-backend-module");
var task_backend_module_1 = require("../task-backend-module");
var filesystem_backend_module_1 = require("@theia/filesystem/lib/node/filesystem-backend-module");
var workspace_backend_module_1 = require("@theia/workspace/lib/node/workspace-backend-module");
var messaging_backend_module_1 = require("@theia/core/lib/node/messaging/messaging-backend-module");
var application_package_1 = require("@theia/application-package/lib/application-package");
function createTaskTestContainer() {
    var testContainer = new inversify_1.Container();
    testContainer.load(backend_application_module_1.backendApplicationModule);
    testContainer.rebind(application_package_1.ApplicationPackage).toConstantValue({});
    logger_backend_module_1.bindLogger(testContainer.bind.bind(testContainer));
    testContainer.load(messaging_backend_module_1.messagingBackendModule);
    testContainer.load(process_backend_module_1.default);
    testContainer.load(task_backend_module_1.default);
    testContainer.load(filesystem_backend_module_1.default);
    testContainer.load(workspace_backend_module_1.default);
    testContainer.load(terminal_backend_module_1.default);
    return testContainer;
}
exports.createTaskTestContainer = createTaskTestContainer;
//# sourceMappingURL=task-test-container.js.map
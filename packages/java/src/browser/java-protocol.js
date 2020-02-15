"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var browser_1 = require("@theia/languages/lib/browser");
var StatusNotification;
(function (StatusNotification) {
    StatusNotification.type = new browser_1.NotificationType('language/status');
})(StatusNotification = exports.StatusNotification || (exports.StatusNotification = {}));
var ClassFileContentsRequest;
(function (ClassFileContentsRequest) {
    ClassFileContentsRequest.type = new browser_1.RequestType('java/classFileContents');
})(ClassFileContentsRequest = exports.ClassFileContentsRequest || (exports.ClassFileContentsRequest = {}));
var ActionableNotification;
(function (ActionableNotification) {
    ActionableNotification.type = new browser_1.NotificationType('language/actionableNotification');
})(ActionableNotification = exports.ActionableNotification || (exports.ActionableNotification = {}));
var CompileWorkspaceStatus;
(function (CompileWorkspaceStatus) {
    CompileWorkspaceStatus[CompileWorkspaceStatus["FAILED"] = 0] = "FAILED";
    CompileWorkspaceStatus[CompileWorkspaceStatus["SUCCEED"] = 1] = "SUCCEED";
    CompileWorkspaceStatus[CompileWorkspaceStatus["WITHERROR"] = 2] = "WITHERROR";
    CompileWorkspaceStatus[CompileWorkspaceStatus["CANCELLED"] = 3] = "CANCELLED";
})(CompileWorkspaceStatus = exports.CompileWorkspaceStatus || (exports.CompileWorkspaceStatus = {}));
var CompileWorkspaceRequest;
(function (CompileWorkspaceRequest) {
    CompileWorkspaceRequest.type = new browser_1.RequestType('java/buildWorkspace');
})(CompileWorkspaceRequest = exports.CompileWorkspaceRequest || (exports.CompileWorkspaceRequest = {}));
var ExecuteClientCommand;
(function (ExecuteClientCommand) {
    ExecuteClientCommand.type = new browser_1.RequestType('workspace/executeClientCommand');
})(ExecuteClientCommand = exports.ExecuteClientCommand || (exports.ExecuteClientCommand = {}));
//# sourceMappingURL=java-protocol.js.map
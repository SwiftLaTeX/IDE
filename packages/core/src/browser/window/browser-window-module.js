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
var inversify_1 = require("inversify");
var window_service_1 = require("../../browser/window/window-service");
var default_window_service_1 = require("../../browser/window/default-window-service");
var frontend_application_1 = require("../frontend-application");
var clipboard_service_1 = require("../clipboard-service");
var browser_clipboard_service_1 = require("../browser-clipboard-service");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(default_window_service_1.DefaultWindowService).toSelf().inSingletonScope();
    bind(window_service_1.WindowService).toService(default_window_service_1.DefaultWindowService);
    bind(frontend_application_1.FrontendApplicationContribution).toService(default_window_service_1.DefaultWindowService);
    bind(clipboard_service_1.ClipboardService).to(browser_clipboard_service_1.BrowserClipboardService).inSingletonScope();
});
//# sourceMappingURL=browser-window-module.js.map
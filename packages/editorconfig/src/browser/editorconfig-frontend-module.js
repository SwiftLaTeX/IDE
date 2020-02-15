"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc.
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
var browser_1 = require("@theia/core/lib/browser");
var editorconfig_document_manager_1 = require("./editorconfig-document-manager");
var editorconfig_interface_1 = require("../common/editorconfig-interface");
exports.default = new inversify_1.ContainerModule(function (bind, unbind) {
    bind(editorconfig_interface_1.EditorconfigService).toDynamicValue(function (ctx) {
        var provider = ctx.container.get(browser_1.WebSocketConnectionProvider);
        return provider.createProxy(editorconfig_interface_1.editorconfigServicePath);
    }).inSingletonScope();
    bind(editorconfig_document_manager_1.EditorconfigDocumentManager).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toDynamicValue(function (ctx) { return ({
        onStart: function (app) {
            ctx.container.get(editorconfig_document_manager_1.EditorconfigDocumentManager);
        }
    }); });
});
//# sourceMappingURL=editorconfig-frontend-module.js.map
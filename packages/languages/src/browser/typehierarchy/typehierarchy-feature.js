"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var language_client_services_1 = require("../language-client-services");
var typehierarchy_protocol_1 = require("./typehierarchy-protocol");
// NOTE: This module can be removed, or at least can be simplified once the type hierarchy will become the part of the LSP.
// https://github.com/Microsoft/language-server-protocol/issues/582
// https://github.com/Microsoft/vscode-languageserver-node/pull/346#discussion_r221659062
/**
 * Text document feature for handling super- and subtype hierarchies through the LSP.
 */
var TypeHierarchyFeature = /** @class */ (function (_super) {
    __extends(TypeHierarchyFeature, _super);
    function TypeHierarchyFeature(client) {
        var _this = _super.call(this, client, typehierarchy_protocol_1.TypeHierarchyRequest.type) || this;
        _this.client = client;
        return _this;
    }
    TypeHierarchyFeature.prototype.fillClientCapabilities = function (capabilities) {
        if (!capabilities.textDocument) {
            capabilities.textDocument = {};
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        capabilities.textDocument.typeHierarchy = {
            dynamicRegistration: true
        };
    };
    TypeHierarchyFeature.prototype.initialize = function (capabilities, documentSelector) {
        if (!documentSelector) {
            return;
        }
        var capabilitiesExt = capabilities;
        if (capabilitiesExt.typeHierarchyProvider) {
            var id = uuid_1.v4();
            this.register(this.messages, {
                id: id,
                registerOptions: Object.assign({}, { documentSelector: documentSelector }, capabilitiesExt.typeHierarchyProvider)
            });
        }
    };
    TypeHierarchyFeature.prototype.registerLanguageProvider = function () {
        return language_client_services_1.Disposable.create(function () { });
    };
    return TypeHierarchyFeature;
}(language_client_services_1.TextDocumentFeature));
exports.TypeHierarchyFeature = TypeHierarchyFeature;
//# sourceMappingURL=typehierarchy-feature.js.map
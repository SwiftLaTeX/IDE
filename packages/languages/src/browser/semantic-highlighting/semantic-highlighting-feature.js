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
var common_1 = require("@theia/core/lib/common/");
var language_client_services_1 = require("../language-client-services");
var semantic_highlighting_protocol_1 = require("./semantic-highlighting-protocol");
// NOTE: This module can be removed, or at least can be simplified once the semantic highlighting will become the part of the LSP.
// https://github.com/Microsoft/vscode-languageserver-node/issues/368
var SemanticHighlightFeature = /** @class */ (function (_super) {
    __extends(SemanticHighlightFeature, _super);
    function SemanticHighlightFeature(client, initializeCallback, consumer) {
        var _this = _super.call(this, client, semantic_highlighting_protocol_1.SemanticHighlight.type) || this;
        _this.initializeCallback = initializeCallback;
        _this.consumer = consumer;
        _this.languageId = client.languageId;
        _this.toDispose = new common_1.DisposableCollection();
        return _this;
    }
    SemanticHighlightFeature.prototype.fillClientCapabilities = function (capabilities) {
        if (!capabilities.textDocument) {
            capabilities.textDocument = {};
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        capabilities.textDocument.semanticHighlightingCapabilities = {
            semanticHighlighting: true
        };
    };
    SemanticHighlightFeature.prototype.initialize = function (capabilities, documentSelector) {
        if (!documentSelector) {
            return;
        }
        var capabilitiesExt = capabilities;
        if (capabilitiesExt.semanticHighlighting) {
            var scopes = capabilitiesExt.semanticHighlighting.scopes;
            if (scopes && scopes.length > 0) {
                this.toDispose.push(this.initializeCallback(this.languageId, scopes));
                var id = uuid_1.v4();
                this.register(this.messages, {
                    id: id,
                    registerOptions: Object.assign({}, { documentSelector: documentSelector }, capabilitiesExt.semanticHighlighting)
                });
            }
        }
    };
    SemanticHighlightFeature.prototype.registerLanguageProvider = function () {
        var _this = this;
        this._client.onNotification(semantic_highlighting_protocol_1.SemanticHighlight.type, this.consumeSemanticHighlighting.bind(this));
        return language_client_services_1.Disposable.create(function () { return _this.toDispose.dispose(); });
    };
    SemanticHighlightFeature.prototype.consumeSemanticHighlighting = function (params) {
        this.consumer(params);
    };
    return SemanticHighlightFeature;
}(language_client_services_1.TextDocumentFeature));
exports.SemanticHighlightFeature = SemanticHighlightFeature;
//# sourceMappingURL=semantic-highlighting-feature.js.map
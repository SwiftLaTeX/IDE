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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("../common");
var java_protocol_1 = require("./java-protocol");
var java_client_contribution_1 = require("./java-client-contribution");
var JavaResource = /** @class */ (function () {
    function JavaResource(uri, clientContribution) {
        this.uri = uri;
        this.clientContribution = clientContribution;
    }
    JavaResource.prototype.dispose = function () {
    };
    JavaResource.prototype.readContents = function (options) {
        var uri = this.uri.toString();
        return this.clientContribution.languageClient.then(function (languageClient) {
            return languageClient.sendRequest(java_protocol_1.ClassFileContentsRequest.type, { uri: uri }).then(function (content) {
                return content || '';
            });
        });
    };
    return JavaResource;
}());
exports.JavaResource = JavaResource;
var JavaResourceResolver = /** @class */ (function () {
    function JavaResourceResolver(clientContribution) {
        this.clientContribution = clientContribution;
    }
    JavaResourceResolver.prototype.resolve = function (uri) {
        if (uri.scheme !== common_1.JAVA_SCHEME) {
            throw new Error('The given URI is not a valid Java uri: ' + uri);
        }
        return new JavaResource(uri, this.clientContribution);
    };
    JavaResourceResolver = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(java_client_contribution_1.JavaClientContribution)),
        __metadata("design:paramtypes", [java_client_contribution_1.JavaClientContribution])
    ], JavaResourceResolver);
    return JavaResourceResolver;
}());
exports.JavaResourceResolver = JavaResourceResolver;
//# sourceMappingURL=java-resource.js.map
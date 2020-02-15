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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var endpoint_1 = require("./endpoint");
var ExternalUriService = /** @class */ (function () {
    function ExternalUriService() {
    }
    /**
     * Maps local to remote URLs.
     * Should be no-op if the given URL is not a localhost URL.
     *
     * By default maps to an origin serving Theia.
     *
     * Use `parseLocalhost` to retrieve localhost address and port information.
     */
    ExternalUriService.prototype.resolve = function (uri) {
        var localhost = this.parseLocalhost(uri);
        if (localhost) {
            return this.toRemoteUrl(uri, localhost);
        }
        return uri;
    };
    ExternalUriService.prototype.toRemoteUrl = function (uri, localhost) {
        var host = this.toRemoteHost(localhost);
        return new endpoint_1.Endpoint({ host: host }).getRestUrl().withPath(uri.path).withFragment(uri.fragment).withQuery(uri.query);
    };
    ExternalUriService.prototype.toRemoteHost = function (localhost) {
        return window.location.hostname + ":" + localhost.port;
    };
    ExternalUriService.prototype.parseLocalhost = function (uri) {
        if (uri.scheme !== 'http' && uri.scheme !== 'https') {
            return undefined;
        }
        var localhostMatch = /^(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)$/.exec(uri.authority);
        if (!localhostMatch) {
            return undefined;
        }
        return {
            address: localhostMatch[1],
            port: +localhostMatch[2],
        };
    };
    ExternalUriService = __decorate([
        inversify_1.injectable()
    ], ExternalUriService);
    return ExternalUriService;
}());
exports.ExternalUriService = ExternalUriService;
//# sourceMappingURL=external-uri-service.js.map
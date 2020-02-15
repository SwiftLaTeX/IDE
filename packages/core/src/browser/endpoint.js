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
var uri_1 = require("../common/uri");
/**
 * An endpoint provides URLs for http and ws, based on configuration and defaults.
 */
var Endpoint = /** @class */ (function () {
    function Endpoint(options, location) {
        if (options === void 0) { options = {}; }
        if (location === void 0) { location = window.location; }
        this.options = options;
        this.location = location;
    }
    Endpoint.prototype.getWebSocketUrl = function () {
        return new uri_1.default(this.wsScheme + "//" + this.host + this.pathname + this.path);
    };
    Endpoint.prototype.getRestUrl = function () {
        return new uri_1.default(this.httpScheme + "//" + this.host + this.pathname + this.path);
    };
    Object.defineProperty(Endpoint.prototype, "pathname", {
        get: function () {
            if (this.location.protocol === Endpoint.PROTO_FILE) {
                return '';
            }
            if (this.location.pathname === '/') {
                return '';
            }
            if (this.location.pathname.endsWith('/')) {
                return this.location.pathname.substr(0, this.location.pathname.length - 1);
            }
            return this.location.pathname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "host", {
        get: function () {
            if (this.options.host) {
                return this.options.host;
            }
            if (this.location.host) {
                return this.location.host;
            }
            return 'localhost:' + this.port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "port", {
        get: function () {
            return this.getSearchParam('port', '3000');
        },
        enumerable: true,
        configurable: true
    });
    Endpoint.prototype.getSearchParam = function (name, defaultValue) {
        var search = this.location.search;
        if (!search) {
            return defaultValue;
        }
        return search.substr(1).split('&')
            .filter(function (value) { return value.startsWith(name + '='); })
            .map(function (value) {
            var encoded = value.substr(name.length + 1);
            return decodeURIComponent(encoded);
        })[0] || defaultValue;
    };
    Object.defineProperty(Endpoint.prototype, "wsScheme", {
        get: function () {
            if (this.options.wsScheme) {
                return this.options.wsScheme;
            }
            return this.httpScheme === Endpoint.PROTO_HTTPS ? Endpoint.PROTO_WSS : Endpoint.PROTO_WS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "httpScheme", {
        /**
         * The HTTP/HTTPS scheme of the endpoint, or the user defined one.
         * See: `Endpoint.Options.httpScheme`.
         */
        get: function () {
            if (this.options.httpScheme) {
                return this.options.httpScheme;
            }
            if (this.location.protocol === Endpoint.PROTO_HTTP ||
                this.location.protocol === Endpoint.PROTO_HTTPS) {
                return this.location.protocol;
            }
            return Endpoint.PROTO_HTTP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "path", {
        get: function () {
            if (this.options.path) {
                if (this.options.path.startsWith('/')) {
                    return this.options.path;
                }
                else {
                    return '/' + this.options.path;
                }
            }
            return this.options.path || '';
        },
        enumerable: true,
        configurable: true
    });
    Endpoint.PROTO_HTTPS = 'https:';
    Endpoint.PROTO_HTTP = 'http:';
    Endpoint.PROTO_WS = 'ws:';
    Endpoint.PROTO_WSS = 'wss:';
    Endpoint.PROTO_FILE = 'file:';
    return Endpoint;
}());
exports.Endpoint = Endpoint;
(function (Endpoint) {
    var Options = /** @class */ (function () {
        function Options() {
        }
        return Options;
    }());
    Endpoint.Options = Options;
    // Necessary for running tests with dependency on TS lib on node
    // FIXME figure out how to mock with ts-node
    var Location = /** @class */ (function () {
        function Location() {
        }
        return Location;
    }());
    Endpoint.Location = Location;
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
exports.Endpoint = Endpoint;
//# sourceMappingURL=endpoint.js.map
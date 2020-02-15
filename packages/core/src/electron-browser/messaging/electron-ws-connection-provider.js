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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
var ws_connection_provider_1 = require("../../browser/messaging/ws-connection-provider");
var ElectronWebSocketConnectionProvider = /** @class */ (function (_super) {
    __extends(ElectronWebSocketConnectionProvider, _super);
    function ElectronWebSocketConnectionProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Do not try to reconnect when the frontend application is stopping. The browser is navigating away from this page.
         */
        _this.stopping = false;
        return _this;
    }
    ElectronWebSocketConnectionProvider.prototype.onStop = function () {
        var e_1, _a;
        this.stopping = true;
        try {
            // Close the websocket connection `onStop`. Otherwise, the channels will be closed with 30 sec (`MessagingContribution#checkAliveTimeout`) delay.
            // https://github.com/eclipse-theia/theia/issues/6499
            for (var _b = __values(__spread(this.channels.values())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var channel = _c.value;
                // `1001` indicates that an endpoint is "going away", such as a server going down or a browser having navigated away from a page.
                // But we cannot use `1001`: https://github.com/TypeFox/vscode-ws-jsonrpc/issues/15
                channel.close(1000, 'The frontend is "going away"...');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ElectronWebSocketConnectionProvider.prototype.openChannel = function (path, handler, options) {
        if (!this.stopping) {
            _super.prototype.openChannel.call(this, path, handler, options);
        }
    };
    ElectronWebSocketConnectionProvider = __decorate([
        inversify_1.injectable()
    ], ElectronWebSocketConnectionProvider);
    return ElectronWebSocketConnectionProvider;
}(ws_connection_provider_1.WebSocketConnectionProvider));
exports.ElectronWebSocketConnectionProvider = ElectronWebSocketConnectionProvider;
//# sourceMappingURL=electron-ws-connection-provider.js.map
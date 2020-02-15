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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var lib_1 = require("vscode-ws-jsonrpc/lib");
var web_socket_channel_1 = require("@theia/core/lib/common/messaging/web-socket-channel");
var reconnecting_websocket_1 = require("reconnecting-websocket");
var LANGTOOL_URL = 'wss://spell.swiftlatex.com';
var LangToolWebSocketConnectionProvider = /** @class */ (function () {
    function LangToolWebSocketConnectionProvider() {
        var _this = this;
        this.channelIdSeq = 0;
        this.channels = new Map();
        var socket = this.createWebSocket(LANGTOOL_URL + window.location.pathname);
        socket.onerror = console.error;
        socket.onclose = function (_a) {
            var e_1, _b;
            var code = _a.code, reason = _a.reason;
            try {
                for (var _c = __values(__spread(_this.channels.values())), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var channel = _d.value;
                    channel.close(code, reason);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        socket.onmessage = function (_a) {
            var data = _a.data;
            var message = JSON.parse(data);
            var channel = _this.channels.get(message.id);
            if (channel) {
                channel.handleMessage(message);
            }
            else {
                console.error('The ws channel does not exist', message.id);
            }
        };
        this.socket = socket;
    }
    /**
     * Install a connection handler for the given path.
     */
    LangToolWebSocketConnectionProvider.prototype.listen = function (handler, options) {
        var _this = this;
        this.openChannel(handler.path, function (channel) {
            var connection = lib_1.createWebSocketConnection(channel, _this.createLogger());
            connection.onDispose(function () { return channel.close(); });
            handler.onConnection(connection);
        }, options);
    };
    LangToolWebSocketConnectionProvider.prototype.openChannel = function (path, handler, options) {
        var _this = this;
        if (this.socket.readyState === WebSocket.OPEN) {
            this.doOpenChannel(path, handler, options);
        }
        else {
            var openChannel_1 = function () {
                _this.socket.removeEventListener('open', openChannel_1);
                _this.openChannel(path, handler, options);
            };
            this.socket.addEventListener('open', openChannel_1);
        }
    };
    LangToolWebSocketConnectionProvider.prototype.doOpenChannel = function (path, handler, options) {
        var _this = this;
        var id = this.channelIdSeq++;
        var channel = this.createChannel(id);
        this.channels.set(id, channel);
        channel.onClose(function () {
            if (_this.channels.delete(channel.id)) {
                var reconnecting = __assign({ reconnecting: true }, options).reconnecting;
                if (reconnecting) {
                    _this.openChannel(path, handler, options);
                }
            }
            else {
                console.error('The ws channel does not exist', channel.id);
            }
        });
        channel.onOpen(function () { return handler(channel); });
        channel.open(path);
    };
    LangToolWebSocketConnectionProvider.prototype.createChannel = function (id) {
        var _this = this;
        return new web_socket_channel_1.WebSocketChannel(id, function (content) {
            if (_this.socket.readyState < WebSocket.CLOSING) {
                _this.socket.send(content);
            }
        });
    };
    LangToolWebSocketConnectionProvider.prototype.createLogger = function () {
        return new lib_1.ConsoleLogger();
    };
    /**
     * Creates a web socket for the given url
     */
    LangToolWebSocketConnectionProvider.prototype.createWebSocket = function (url) {
        return new reconnecting_websocket_1.default(url, undefined, {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 1000,
            reconnectionDelayGrowFactor: 1.3,
            connectionTimeout: 10000,
            maxRetries: Infinity,
            debug: false
        });
    };
    LangToolWebSocketConnectionProvider = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], LangToolWebSocketConnectionProvider);
    return LangToolWebSocketConnectionProvider;
}());
exports.LangToolWebSocketConnectionProvider = LangToolWebSocketConnectionProvider;
//# sourceMappingURL=langtool-connection-provider.js.map
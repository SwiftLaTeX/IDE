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
var ws = require("ws");
var web_socket_channel_1 = require("../../../common/messaging/web-socket-channel");
var disposable_1 = require("../../../common/disposable");
var TestWebSocketChannel = /** @class */ (function (_super) {
    __extends(TestWebSocketChannel, _super);
    function TestWebSocketChannel(_a) {
        var server = _a.server, path = _a.path;
        var _this = _super.call(this, 0, function (content) { return socket.send(content); }) || this;
        var socket = new ws("ws://localhost:" + server.address().port + web_socket_channel_1.WebSocketChannel.wsPath);
        socket.on('error', function (error) {
            return _this.fireError(error);
        });
        socket.on('close', function (code, reason) {
            return _this.fireClose(code, reason);
        });
        socket.on('message', function (data) {
            _this.handleMessage(JSON.parse(data.toString()));
        });
        socket.on('open', function () {
            return _this.open(path);
        });
        _this.toDispose.push(disposable_1.Disposable.create(function () { return socket.close(); }));
        return _this;
    }
    return TestWebSocketChannel;
}(web_socket_channel_1.WebSocketChannel));
exports.TestWebSocketChannel = TestWebSocketChannel;
//# sourceMappingURL=test-web-socket-channel.js.map
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
var chai = require("chai");
var logger_1 = require("../../node/messaging/logger");
var proxy_factory_1 = require("./proxy-factory");
var main_1 = require("vscode-jsonrpc/lib/main");
var stream = require("stream");
var expect = chai.expect;
var NoTransform = /** @class */ (function (_super) {
    __extends(NoTransform, _super);
    function NoTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NoTransform.prototype._transform = function (chunk, encoding, callback) {
        callback(undefined, chunk);
    };
    return NoTransform;
}(stream.Transform));
var TestServer = /** @class */ (function () {
    function TestServer() {
        this.requests = [];
    }
    TestServer.prototype.doStuff = function (arg) {
        this.requests.push(arg);
        return Promise.resolve("done: " + arg);
    };
    TestServer.prototype.fails = function (arg, otherArg) {
        throw new Error('fails failed');
    };
    TestServer.prototype.fails2 = function (arg, otherArg) {
        return Promise.reject(new Error('fails2 failed'));
    };
    return TestServer;
}());
var TestClient = /** @class */ (function () {
    function TestClient() {
        this.notifications = [];
    }
    TestClient.prototype.notifyThat = function (arg) {
        this.notifications.push(arg);
    };
    return TestClient;
}());
describe('Proxy-Factory', function () {
    it('Should correctly send notifications and requests.', function (done) {
        var it = getSetup();
        it.clientProxy.notifyThat('hello');
        function check() {
            if (it.client.notifications.length === 0) {
                console.log('waiting another 50 ms');
                setTimeout(check, 50);
            }
            else {
                expect(it.client.notifications[0]).eq('hello');
                it.serverProxy.doStuff('foo').then(function (result) {
                    expect(result).to.be.eq('done: foo');
                    done();
                });
            }
        }
        check();
    });
    it('Rejected Promise should result in rejected Promise.', function (done) {
        var it = getSetup();
        var handle = setTimeout(function () { return done('timeout'); }, 500);
        it.serverProxy.fails('a', 'b').catch(function (err) {
            expect(err.message).to.contain('fails failed');
            clearTimeout(handle);
            done();
        });
    });
    it('Remote Exceptions should result in rejected Promise.', function (done) {
        var serverProxy = getSetup().serverProxy;
        var handle = setTimeout(function () { return done('timeout'); }, 500);
        serverProxy.fails2('a', 'b').catch(function (err) {
            expect(err.message).to.contain('fails2 failed');
            clearTimeout(handle);
            done();
        });
    });
});
function getSetup() {
    var client = new TestClient();
    var server = new TestServer();
    var serverProxyFactory = new proxy_factory_1.JsonRpcProxyFactory(client);
    var client2server = new NoTransform();
    var server2client = new NoTransform();
    var serverConnection = main_1.createMessageConnection(server2client, client2server, new logger_1.ConsoleLogger());
    serverProxyFactory.listen(serverConnection);
    var serverProxy = serverProxyFactory.createProxy();
    var clientProxyFactory = new proxy_factory_1.JsonRpcProxyFactory(server);
    var clientConnection = main_1.createMessageConnection(client2server, server2client, new logger_1.ConsoleLogger());
    clientProxyFactory.listen(clientConnection);
    var clientProxy = clientProxyFactory.createProxy();
    return {
        client: client,
        clientProxy: clientProxy,
        server: server,
        serverProxy: serverProxy
    };
}
//# sourceMappingURL=proxy-factory.spec.js.map
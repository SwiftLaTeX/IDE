"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var event_1 = require("@theia/core/lib/common/event");
var rpc_protocol_1 = require("../../common/rpc-protocol");
var plugin_host_rpc_1 = require("./plugin-host-rpc");
console.log('PLUGIN_HOST(' + process.pid + ') starting instance');
// override exit() function, to do not allow plugin kill this node
process.exit = function (code) {
    var err = new Error('An plugin call process.exit() and it was prevented.');
    console.warn(err.stack);
};
// same for 'crash'(works only in electron)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var proc = process;
if (proc.crash) {
    proc.crash = function () {
        var err = new Error('An plugin call process.crash() and it was prevented.');
        console.warn(err.stack);
    };
}
process.on('uncaughtException', function (err) {
    console.error(err);
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var unhandledPromises = [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
process.on('unhandledRejection', function (reason, promise) {
    unhandledPromises.push(promise);
    setTimeout(function () {
        var index = unhandledPromises.indexOf(promise);
        if (index >= 0) {
            promise.catch(function (err) {
                unhandledPromises.splice(index, 1);
                console.error("Promise rejection not handled in one second: " + err + " , reason: " + reason);
                if (err && err.stack) {
                    console.error("With stack trace: " + err.stack);
                }
            });
        }
    }, 1000);
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
process.on('rejectionHandled', function (promise) {
    var index = unhandledPromises.indexOf(promise);
    if (index >= 0) {
        unhandledPromises.splice(index, 1);
    }
});
var emitter = new event_1.Emitter();
var rpc = new rpc_protocol_1.RPCProtocolImpl({
    onMessage: emitter.event,
    send: function (m) {
        if (process.send) {
            process.send(JSON.stringify(m));
        }
    }
});
process.on('message', function (message) {
    try {
        emitter.fire(JSON.parse(message));
    }
    catch (e) {
        console.error(e);
    }
});
var pluginHostRPC = new plugin_host_rpc_1.PluginHostRPC(rpc);
pluginHostRPC.initialize();
//# sourceMappingURL=plugin-host.js.map
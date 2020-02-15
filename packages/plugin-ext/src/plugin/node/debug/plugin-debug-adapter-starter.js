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
var net = require("net");
var child_process_1 = require("child_process");
/**
 * Starts debug adapter process.
 */
function startDebugAdapter(executable) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var options = { stdio: ['pipe', 'pipe', 2] };
    if (executable.options) {
        options.cwd = executable.options.cwd;
        // The additional environment of the executed program or shell. If omitted
        // the parent process' environment is used. If provided it is merged with
        // the parent process' environment.
        options.env = Object.assign({}, process.env);
        Object.assign(options.env, executable.options.env);
    }
    var childProcess;
    if ('command' in executable) {
        var command = executable.command, args = executable.args;
        childProcess = child_process_1.spawn(command, args, options);
    }
    else if ('modulePath' in executable) {
        var forkExecutable = executable;
        var modulePath = forkExecutable.modulePath, args = forkExecutable.args;
        options.stdio.push('ipc');
        childProcess = child_process_1.fork(modulePath, args, options);
    }
    else {
        throw new Error("It is not possible to launch debug adapter with the command: " + JSON.stringify(executable));
    }
    return {
        input: childProcess.stdin,
        output: childProcess.stdout,
        dispose: function () { return childProcess.kill(); }
    };
}
exports.startDebugAdapter = startDebugAdapter;
/**
 * Connects to a remote debug server.
 */
function connectDebugAdapter(server) {
    var socket = net.createConnection(server.port, server.host);
    return {
        input: socket,
        output: socket,
        dispose: function () { return socket.end(); }
    };
}
exports.connectDebugAdapter = connectDebugAdapter;
//# sourceMappingURL=plugin-debug-adapter-starter.js.map
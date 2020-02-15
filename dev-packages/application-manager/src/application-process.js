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
var path = require("path");
var fs = require("fs-extra");
var cp = require("child_process");
var ApplicationProcess = /** @class */ (function () {
    function ApplicationProcess(pck, binProjectPath) {
        this.pck = pck;
        this.binProjectPath = binProjectPath;
        this.defaultOptions = {
            cwd: this.pck.projectPath,
            env: process.env
        };
    }
    ApplicationProcess.prototype.spawn = function (command, args, options) {
        return cp.spawn(command, args, Object.assign({}, this.defaultOptions, options));
    };
    ApplicationProcess.prototype.fork = function (modulePath, args, options) {
        return cp.fork(modulePath, args, Object.assign({}, this.defaultOptions, options));
    };
    ApplicationProcess.prototype.canRun = function (command) {
        return fs.existsSync(this.resolveBin(command));
    };
    ApplicationProcess.prototype.run = function (command, args, options) {
        var commandProcess = this.spawnBin(command, args, options);
        return this.promisify(command, commandProcess);
    };
    ApplicationProcess.prototype.spawnBin = function (command, args, options) {
        var binPath = this.resolveBin(command);
        return this.spawn(binPath, args, options);
    };
    ApplicationProcess.prototype.resolveBin = function (command) {
        var commandPath = path.resolve(this.binProjectPath, 'node_modules', '.bin', command);
        return process.platform === 'win32' ? commandPath + '.cmd' : commandPath;
    };
    ApplicationProcess.prototype.promisify = function (command, p) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            p.stdout.on('data', function (data) { return _this.pck.log(data.toString()); });
            p.stderr.on('data', function (data) { return _this.pck.error(data.toString()); });
            p.on('error', reject);
            p.on('close', function (code, signal) {
                if (signal) {
                    reject(new Error(command + " exited with an unexpected signal: " + signal + "."));
                    return;
                }
                if (code === 0) {
                    resolve();
                }
                else {
                    reject(new Error(command + " exited with an unexpected code: " + code + "."));
                }
            });
        });
    };
    return ApplicationProcess;
}());
exports.ApplicationProcess = ApplicationProcess;
//# sourceMappingURL=application-process.js.map
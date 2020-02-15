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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var JavaCliContribution = /** @class */ (function () {
    function JavaCliContribution() {
    }
    JavaCliContribution_1 = JavaCliContribution;
    JavaCliContribution.prototype.configure = function (conf) {
        conf.option(JavaCliContribution_1.LS_PORT, {
            description: 'Can be specified if the backend should not start the Java LS process but create a socket server and wait until the Java LS connects.',
            type: 'number',
            nargs: 1
        });
    };
    JavaCliContribution.prototype.setArguments = function (args) {
        this.setLsPort(args[JavaCliContribution_1.LS_PORT]);
    };
    JavaCliContribution.prototype.lsPort = function () {
        return this._lsPort;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    JavaCliContribution.prototype.setLsPort = function (port) {
        if (port !== undefined) {
            var error = new Error("The port for the Java LS must be an integer between 1 and 65535. It was: " + port + ".");
            if (!Number.isInteger(port)) {
                throw error;
            }
            if (port < 1 || port > 65535) {
                throw error;
            }
            this._lsPort = port;
        }
    };
    var JavaCliContribution_1;
    JavaCliContribution.LS_PORT = 'java-ls';
    JavaCliContribution = JavaCliContribution_1 = __decorate([
        inversify_1.injectable()
    ], JavaCliContribution);
    return JavaCliContribution;
}());
exports.JavaCliContribution = JavaCliContribution;
//# sourceMappingURL=java-cli-contribution.js.map
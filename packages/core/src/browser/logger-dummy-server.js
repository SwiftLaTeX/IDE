"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var logger_protocol_1 = require("../common/logger-protocol");
var inversify_1 = require("inversify");
var LoggerDummyServer = /** @class */ (function () {
    function LoggerDummyServer() {
        this.children = new Map();
    }
    LoggerDummyServer.prototype.setLogLevel = function (name, logLevel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.children.set(name, logLevel);
            resolve();
        });
    };
    LoggerDummyServer.prototype.getLogLevel = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var level = logger_protocol_1.LogLevel.INFO;
            if (_this.children.has(name)) {
                level = _this.children.get(name);
            }
            resolve(level);
        });
    };
    // tslint:disable-next-line:no-any
    LoggerDummyServer.prototype.log = function (name, logLevel, message, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configuredLevel = logger_protocol_1.LogLevel.INFO;
            if (_this.children.has(name)) {
                configuredLevel = _this.children.get(name);
            }
            if (logLevel >= configuredLevel) {
                logger_protocol_1.ConsoleLogger.log(name, logLevel, message, params);
            }
            resolve();
        });
    };
    LoggerDummyServer.prototype.child = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.children.set(name, logger_protocol_1.LogLevel.INFO);
            resolve();
        });
    };
    LoggerDummyServer.prototype.setClient = function (client) { };
    LoggerDummyServer.prototype.dispose = function () { };
    LoggerDummyServer = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], LoggerDummyServer);
    return LoggerDummyServer;
}());
exports.LoggerDummyServer = LoggerDummyServer;
//# sourceMappingURL=logger-dummy-server.js.map
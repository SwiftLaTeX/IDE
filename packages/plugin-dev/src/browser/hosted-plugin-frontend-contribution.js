"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var hosted_plugin_manager_client_1 = require("./hosted-plugin-manager-client");
var HostedPluginFrontendContribution = /** @class */ (function () {
    function HostedPluginFrontendContribution() {
    }
    HostedPluginFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.START, {
            execute: function () { return _this.hostedPluginManagerClient.start(); }
        });
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.DEBUG, {
            execute: function () { return _this.hostedPluginManagerClient.debug(); }
        });
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.STOP, {
            execute: function () { return _this.hostedPluginManagerClient.stop(); }
        });
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.RESTART, {
            execute: function () { return _this.hostedPluginManagerClient.restart(); }
        });
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.SELECT_PATH, {
            execute: function () { return _this.hostedPluginManagerClient.selectPluginPath(); }
        });
    };
    __decorate([
        inversify_1.inject(hosted_plugin_manager_client_1.HostedPluginManagerClient),
        __metadata("design:type", hosted_plugin_manager_client_1.HostedPluginManagerClient)
    ], HostedPluginFrontendContribution.prototype, "hostedPluginManagerClient", void 0);
    HostedPluginFrontendContribution = __decorate([
        inversify_1.injectable()
    ], HostedPluginFrontendContribution);
    return HostedPluginFrontendContribution;
}());
exports.HostedPluginFrontendContribution = HostedPluginFrontendContribution;
//# sourceMappingURL=hosted-plugin-frontend-contribution.js.map
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
var status_bar_1 = require("@theia/core/lib/browser/status-bar/status-bar");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/workspace/lib/browser");
var plugin_dev_protocol_1 = require("../common/plugin-dev-protocol");
var connection_status_service_1 = require("@theia/core/lib/browser/connection-status-service");
var uri_1 = require("@theia/core/lib/common/uri");
var frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
/**
 * Informs the user whether Theia is running with hosted plugin.
 * Adds 'Development Host' status bar element and appends the same prefix to window title.
 */
var HostedPluginInformer = /** @class */ (function () {
    function HostedPluginInformer() {
    }
    HostedPluginInformer_1 = HostedPluginInformer;
    HostedPluginInformer.prototype.initialize = function () {
        var _this = this;
        this.workspaceService.roots.then(function (roots) {
            var workspaceFolder = roots[0];
            _this.hostedPluginServer.getHostedPlugin().then(function (pluginMetadata) {
                if (pluginMetadata) {
                    _this.updateTitle(workspaceFolder);
                    _this.entry = {
                        text: "$(cube) " + HostedPluginInformer_1.DEVELOPMENT_HOST_TITLE,
                        tooltip: "Hosted Plugin '" + pluginMetadata.model.name + "'",
                        alignment: browser_1.StatusBarAlignment.LEFT,
                        priority: 100
                    };
                    _this.frontendApplicationStateService.reachedState('ready').then(function () {
                        _this.updateStatusBarElement();
                    });
                    _this.connectionStatusService.onStatusChange(function () { return _this.updateStatusBarElement(); });
                }
            });
        });
    };
    HostedPluginInformer.prototype.updateStatusBarElement = function () {
        if (this.connectionStatusService.currentStatus === connection_status_service_1.ConnectionStatus.OFFLINE) {
            this.entry.className = HostedPluginInformer_1.DEVELOPMENT_HOST_OFFLINE;
        }
        else {
            this.entry.className = HostedPluginInformer_1.DEVELOPMENT_HOST;
        }
        this.statusBar.setElement(HostedPluginInformer_1.DEVELOPMENT_HOST, this.entry);
    };
    HostedPluginInformer.prototype.updateTitle = function (root) {
        if (root) {
            var uri = new uri_1.default(root.uri);
            document.title = HostedPluginInformer_1.DEVELOPMENT_HOST_TITLE + ' - ' + uri.displayName;
        }
        else {
            document.title = HostedPluginInformer_1.DEVELOPMENT_HOST_TITLE;
        }
    };
    var HostedPluginInformer_1;
    HostedPluginInformer.DEVELOPMENT_HOST_TITLE = 'Development Host';
    HostedPluginInformer.DEVELOPMENT_HOST = 'development-host';
    HostedPluginInformer.DEVELOPMENT_HOST_OFFLINE = 'development-host-offline';
    __decorate([
        inversify_1.inject(status_bar_1.StatusBar),
        __metadata("design:type", Object)
    ], HostedPluginInformer.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], HostedPluginInformer.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(plugin_dev_protocol_1.HostedPluginServer),
        __metadata("design:type", Object)
    ], HostedPluginInformer.prototype, "hostedPluginServer", void 0);
    __decorate([
        inversify_1.inject(connection_status_service_1.ConnectionStatusService),
        __metadata("design:type", Object)
    ], HostedPluginInformer.prototype, "connectionStatusService", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], HostedPluginInformer.prototype, "frontendApplicationStateService", void 0);
    HostedPluginInformer = HostedPluginInformer_1 = __decorate([
        inversify_1.injectable()
    ], HostedPluginInformer);
    return HostedPluginInformer;
}());
exports.HostedPluginInformer = HostedPluginInformer;
//# sourceMappingURL=hosted-plugin-informer.js.map
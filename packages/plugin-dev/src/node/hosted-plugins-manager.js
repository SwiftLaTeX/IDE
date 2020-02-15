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
var cp = require("child_process");
var fs = require("fs");
var path = require("path");
var node_1 = require("@theia/core/lib/node");
var hosted_plugin_1 = require("@theia/plugin-ext/lib/hosted/node/hosted-plugin");
var types_1 = require("@theia/plugin-ext/lib/common/types");
exports.HostedPluginsManager = Symbol('HostedPluginsManager');
var HostedPluginsManagerImpl = /** @class */ (function () {
    function HostedPluginsManagerImpl() {
        this.watchCompilationRegistry = new Map();
    }
    HostedPluginsManagerImpl.prototype.runWatchCompilation = function (uri) {
        var pluginRootPath = node_1.FileUri.fsPath(uri);
        if (this.watchCompilationRegistry.has(pluginRootPath)) {
            throw new Error('Watcher is already running in ' + pluginRootPath);
        }
        if (!this.checkWatchScript(pluginRootPath)) {
            this.hostedPluginSupport.sendLog({
                data: 'Plugin in ' + uri + ' doesn\'t have watch script',
                type: types_1.LogType.Error
            });
            throw new Error('Watch script doesn\'t exist in ' + pluginRootPath + 'package.json');
        }
        return this.runWatchScript(pluginRootPath);
    };
    HostedPluginsManagerImpl.prototype.stopWatchCompilation = function (uri) {
        var pluginPath = node_1.FileUri.fsPath(uri);
        var watchProcess = this.watchCompilationRegistry.get(pluginPath);
        if (!watchProcess) {
            throw new Error('Watcher is not running in ' + pluginPath);
        }
        watchProcess.kill();
        return Promise.resolve();
    };
    HostedPluginsManagerImpl.prototype.isWatchCompilationRunning = function (uri) {
        var _this = this;
        var pluginPath = node_1.FileUri.fsPath(uri);
        return new Promise(function (resolve) { return resolve(_this.watchCompilationRegistry.has(pluginPath)); });
    };
    HostedPluginsManagerImpl.prototype.runWatchScript = function (pluginRootPath) {
        var _this = this;
        var watchProcess = cp.spawn('yarn', ['run', 'watch'], { cwd: pluginRootPath, shell: true });
        watchProcess.on('exit', function () { return _this.unregisterWatchScript(pluginRootPath); });
        this.watchCompilationRegistry.set(pluginRootPath, watchProcess);
        this.hostedPluginSupport.sendLog({
            data: 'Compilation watcher has been started in ' + pluginRootPath,
            type: types_1.LogType.Info
        });
        return Promise.resolve();
    };
    HostedPluginsManagerImpl.prototype.unregisterWatchScript = function (pluginRootPath) {
        this.watchCompilationRegistry.delete(pluginRootPath);
        this.hostedPluginSupport.sendLog({
            data: 'Compilation watcher has been stopped in ' + pluginRootPath,
            type: types_1.LogType.Info
        });
    };
    /**
     * Checks whether watch script is present into package.json by given parent folder.
     *
     * @param pluginPath path to plugin's root directory
     */
    HostedPluginsManagerImpl.prototype.checkWatchScript = function (pluginPath) {
        var pluginPackageJsonPath = path.join(pluginPath, 'package.json');
        if (fs.existsSync(pluginPackageJsonPath)) {
            var packageJson = require(pluginPackageJsonPath);
            var scripts = packageJson['scripts'];
            if (scripts && scripts['watch']) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        inversify_1.inject(hosted_plugin_1.HostedPluginSupport),
        __metadata("design:type", hosted_plugin_1.HostedPluginSupport)
    ], HostedPluginsManagerImpl.prototype, "hostedPluginSupport", void 0);
    HostedPluginsManagerImpl = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], HostedPluginsManagerImpl);
    return HostedPluginsManagerImpl;
}());
exports.HostedPluginsManagerImpl = HostedPluginsManagerImpl;
//# sourceMappingURL=hosted-plugins-manager.js.map
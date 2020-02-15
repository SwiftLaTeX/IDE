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
var uri_1 = require("@theia/core/lib/common/uri");
var path_1 = require("@theia/core/lib/common/path");
var common_1 = require("@theia/filesystem/lib/common");
var disposable_1 = require("@theia/core/lib/common/disposable");
var browser_1 = require("@theia/core/lib/browser");
var workspace_service_1 = require("./workspace-service");
var WorkspaceVariableContribution = /** @class */ (function () {
    function WorkspaceVariableContribution() {
        this.toDiposeOnUpdateCurrentWidget = new disposable_1.DisposableCollection();
    }
    WorkspaceVariableContribution.prototype.init = function () {
        var _this = this;
        this.updateCurrentWidget();
        this.shell.currentChanged.connect(function () { return _this.updateCurrentWidget(); });
    };
    WorkspaceVariableContribution.prototype.updateCurrentWidget = function () {
        var currentWidget = this.shell.currentWidget;
        if (browser_1.NavigatableWidget.is(currentWidget)) {
            this.setCurrentWidget(currentWidget);
        }
    };
    WorkspaceVariableContribution.prototype.setCurrentWidget = function (currentWidget) {
        var _this = this;
        this.toDiposeOnUpdateCurrentWidget.dispose();
        this.currentWidget = currentWidget;
        if (currentWidget) {
            var resetCurrentWidget_1 = function () { return _this.setCurrentWidget(undefined); };
            currentWidget.disposed.connect(resetCurrentWidget_1);
            this.toDiposeOnUpdateCurrentWidget.push(disposable_1.Disposable.create(function () {
                return currentWidget.disposed.disconnect(resetCurrentWidget_1);
            }));
        }
    };
    WorkspaceVariableContribution.prototype.registerVariables = function (variables) {
        var _this = this;
        this.registerWorkspaceRootVariables(variables);
        variables.registerVariable({
            name: 'file',
            description: 'The path of the currently opened file',
            resolve: function () {
                var uri = _this.getResourceUri();
                return uri && _this.fileSystem.getFsPath(uri.toString());
            }
        });
        variables.registerVariable({
            name: 'fileBasename',
            description: 'The basename of the currently opened file',
            resolve: function () {
                var uri = _this.getResourceUri();
                return uri && uri.path.base;
            }
        });
        variables.registerVariable({
            name: 'fileBasenameNoExtension',
            description: "The currently opened file's name without extension",
            resolve: function () {
                var uri = _this.getResourceUri();
                return uri && uri.path.name;
            }
        });
        variables.registerVariable({
            name: 'fileDirname',
            description: "The name of the currently opened file's directory",
            resolve: function () {
                var uri = _this.getResourceUri();
                return uri && uri.path.dir.toString();
            }
        });
        variables.registerVariable({
            name: 'fileExtname',
            description: 'The extension of the currently opened file',
            resolve: function () {
                var uri = _this.getResourceUri();
                return uri && uri.path.ext;
            }
        });
    };
    WorkspaceVariableContribution.prototype.registerWorkspaceRootVariables = function (variables) {
        var _this = this;
        var scoped = function (variable) { return ({
            name: variable.name,
            description: variable.description,
            resolve: function (context, workspaceRootName) {
                var workspaceRoot = workspaceRootName && _this.workspaceService.tryGetRoots().find(function (r) { return new uri_1.default(r.uri).path.name === workspaceRootName; });
                return variable.resolve(workspaceRoot ? new uri_1.default(workspaceRoot.uri) : context);
            }
        }); };
        variables.registerVariable(scoped({
            name: 'workspaceRoot',
            description: 'The path of the workspace root folder',
            resolve: function (context) {
                var uri = _this.getWorkspaceRootUri(context);
                return uri && _this.fileSystem.getFsPath(uri.toString());
            }
        }));
        variables.registerVariable(scoped({
            name: 'workspaceFolder',
            description: 'The path of the workspace root folder',
            resolve: function (context) {
                var uri = _this.getWorkspaceRootUri(context);
                return uri && _this.fileSystem.getFsPath(uri.toString());
            }
        }));
        variables.registerVariable(scoped({
            name: 'workspaceRootFolderName',
            description: 'The name of the workspace root folder',
            resolve: function (context) {
                var uri = _this.getWorkspaceRootUri(context);
                return uri && uri.displayName;
            }
        }));
        variables.registerVariable(scoped({
            name: 'workspaceFolderBasename',
            description: 'The name of the workspace root folder',
            resolve: function (context) {
                var uri = _this.getWorkspaceRootUri(context);
                return uri && uri.displayName;
            }
        }));
        variables.registerVariable(scoped({
            name: 'cwd',
            description: "The task runner's current working directory on startup",
            resolve: function (context) {
                var uri = _this.getWorkspaceRootUri(context);
                return (uri && _this.fileSystem.getFsPath(uri.toString())) || '';
            }
        }));
        variables.registerVariable(scoped({
            name: 'relativeFile',
            description: "The currently opened file's path relative to the workspace root",
            resolve: function (context) {
                var uri = _this.getResourceUri();
                return uri && _this.getWorkspaceRelativePath(uri, context);
            }
        }));
        variables.registerVariable(scoped({
            name: 'relativeFileDirname',
            description: "The current opened file's dirname relative to ${workspaceFolder}",
            resolve: function (context) {
                var uri = _this.getResourceUri();
                var relativePath = uri && _this.getWorkspaceRelativePath(uri, context);
                return relativePath && new path_1.Path(relativePath).dir.toString();
            }
        }));
    };
    WorkspaceVariableContribution.prototype.getWorkspaceRootUri = function (uri) {
        if (uri === void 0) { uri = this.getResourceUri(); }
        return this.workspaceService.getWorkspaceRootUri(uri);
    };
    WorkspaceVariableContribution.prototype.getResourceUri = function () {
        // TODO replace with ResourceContextKey.get?
        return this.currentWidget && this.currentWidget.getResourceUri();
    };
    WorkspaceVariableContribution.prototype.getWorkspaceRelativePath = function (uri, context) {
        var workspaceRootUri = this.getWorkspaceRootUri(context || uri);
        var path = workspaceRootUri && workspaceRootUri.path.relative(uri.path);
        return path && path.toString();
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspaceVariableContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], WorkspaceVariableContribution.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], WorkspaceVariableContribution.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WorkspaceVariableContribution.prototype, "init", null);
    WorkspaceVariableContribution = __decorate([
        inversify_1.injectable()
    ], WorkspaceVariableContribution);
    return WorkspaceVariableContribution;
}());
exports.WorkspaceVariableContribution = WorkspaceVariableContribution;
//# sourceMappingURL=workspace-variable-contribution.js.map
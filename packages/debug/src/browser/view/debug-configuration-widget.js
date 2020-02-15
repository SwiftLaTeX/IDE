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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/workspace/lib/browser");
var debug_console_contribution_1 = require("../console/debug-console-contribution");
var debug_configuration_manager_1 = require("../debug-configuration-manager");
var debug_session_manager_1 = require("../debug-session-manager");
var debug_action_1 = require("./debug-action");
var debug_view_model_1 = require("./debug-view-model");
var debug_frontend_application_contribution_1 = require("../debug-frontend-application-contribution");
var common_2 = require("@theia/core/lib/common");
var DebugConfigurationWidget = /** @class */ (function (_super) {
    __extends(DebugConfigurationWidget, _super);
    function DebugConfigurationWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setStepRef = function (stepRef) { return _this.stepRef = stepRef || undefined; };
        _this.setCurrentConfiguration = function (event) {
            var value = event.currentTarget.value;
            if (value === '__ADD_CONF__') {
                _this.manager.addConfiguration();
            }
            else {
                var _a = __read(value.split('__CONF__'), 2), name_1 = _a[0], workspaceFolderUri = _a[1];
                _this.manager.current = _this.manager.find(name_1, workspaceFolderUri);
            }
        };
        _this.start = function () {
            var configuration = _this.manager.current;
            _this.commandRegistry.executeCommand(debug_frontend_application_contribution_1.DebugCommands.START.id, configuration);
        };
        _this.openConfiguration = function () { return _this.manager.openConfiguration(); };
        _this.openConsole = function () { return _this.debugConsole.openView({
            activate: true
        }); };
        return _this;
    }
    DebugConfigurationWidget.prototype.init = function () {
        var _this = this;
        this.addClass('debug-toolbar');
        this.toDispose.push(this.manager.onDidChange(function () { return _this.update(); }));
        this.toDispose.push(this.workspaceService.onWorkspaceChanged(function () { return _this.update(); }));
        this.toDispose.push(this.workspaceService.onWorkspaceLocationChanged(function () { return _this.update(); }));
        this.scrollOptions = undefined;
        this.update();
    };
    DebugConfigurationWidget.prototype.focus = function () {
        var _this = this;
        if (!this.doFocus()) {
            this.onRender.push(common_1.Disposable.create(function () { return _this.doFocus(); }));
            this.update();
        }
    };
    DebugConfigurationWidget.prototype.doFocus = function () {
        if (!this.stepRef) {
            return false;
        }
        this.stepRef.focus();
        return true;
    };
    DebugConfigurationWidget.prototype.render = function () {
        var options = this.options;
        return React.createElement(React.Fragment, null,
            React.createElement(debug_action_1.DebugAction, { run: this.start, label: 'Start Debugging', iconClass: 'start', ref: this.setStepRef }),
            React.createElement("select", { className: 'theia-select debug-configuration', value: this.currentValue, onChange: this.setCurrentConfiguration },
                options.length ? options : React.createElement("option", { value: '__NO_CONF__' }, "No Configurations"),
                React.createElement("option", { disabled: true }, 'Add Configuration...'.replace(/./g, '-')),
                React.createElement("option", { value: '__ADD_CONF__' }, "Add Configuration...")),
            React.createElement(debug_action_1.DebugAction, { run: this.openConfiguration, label: 'Open launch.json', iconClass: 'configure' }),
            React.createElement(debug_action_1.DebugAction, { run: this.openConsole, label: 'Debug Console', iconClass: 'repl' }));
    };
    Object.defineProperty(DebugConfigurationWidget.prototype, "currentValue", {
        get: function () {
            var current = this.manager.current;
            return current ? this.toValue(current) : '__NO_CONF__';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugConfigurationWidget.prototype, "options", {
        get: function () {
            var _this = this;
            return Array.from(this.manager.all).map(function (options, index) {
                return React.createElement("option", { key: index, value: _this.toValue(options) }, _this.toName(options));
            });
        },
        enumerable: true,
        configurable: true
    });
    DebugConfigurationWidget.prototype.toValue = function (_a) {
        var configuration = _a.configuration, workspaceFolderUri = _a.workspaceFolderUri;
        if (!workspaceFolderUri) {
            return configuration.name;
        }
        return configuration.name + '__CONF__' + workspaceFolderUri;
    };
    DebugConfigurationWidget.prototype.toName = function (_a) {
        var configuration = _a.configuration, workspaceFolderUri = _a.workspaceFolderUri;
        if (!workspaceFolderUri || !this.workspaceService.isMultiRootWorkspaceOpened) {
            return configuration.name;
        }
        return configuration.name + ' (' + new uri_1.default(workspaceFolderUri).path.base + ')';
    };
    __decorate([
        inversify_1.inject(common_2.CommandRegistry),
        __metadata("design:type", common_2.CommandRegistry)
    ], DebugConfigurationWidget.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugConfigurationWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], DebugConfigurationWidget.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugConfigurationWidget.prototype, "sessionManager", void 0);
    __decorate([
        inversify_1.inject(debug_console_contribution_1.DebugConsoleContribution),
        __metadata("design:type", debug_console_contribution_1.DebugConsoleContribution)
    ], DebugConfigurationWidget.prototype, "debugConsole", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], DebugConfigurationWidget.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugConfigurationWidget.prototype, "init", null);
    DebugConfigurationWidget = __decorate([
        inversify_1.injectable()
    ], DebugConfigurationWidget);
    return DebugConfigurationWidget;
}(browser_1.ReactWidget));
exports.DebugConfigurationWidget = DebugConfigurationWidget;
//# sourceMappingURL=debug-configuration-widget.js.map
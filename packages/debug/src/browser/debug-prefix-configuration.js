"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var command_1 = require("@theia/core/lib/common/command");
var quick_open_1 = require("@theia/core/lib/browser/quick-open");
var debug_session_manager_1 = require("./debug-session-manager");
var debug_configuration_manager_1 = require("./debug-configuration-manager");
var debug_frontend_application_contribution_1 = require("./debug-frontend-application-contribution");
var browser_1 = require("@theia/workspace/lib/browser");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var uri_1 = require("@theia/core/lib/common/uri");
var DebugPrefixConfiguration = /** @class */ (function () {
    function DebugPrefixConfiguration() {
        this.prefix = 'debug ';
        this.description = 'Debug Configuration';
        this.command = {
            id: 'select.debug.configuration',
            category: 'Debug',
            label: 'Select and Start Debugging'
        };
    }
    DebugPrefixConfiguration.prototype.execute = function () {
        this.prefixQuickOpenService.open(this.prefix);
    };
    DebugPrefixConfiguration.prototype.isEnabled = function () {
        return true;
    };
    DebugPrefixConfiguration.prototype.isVisible = function () {
        return true;
    };
    DebugPrefixConfiguration.prototype.getModel = function () {
        return this;
    };
    DebugPrefixConfiguration.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: true,
            fuzzySort: false,
        };
    };
    DebugPrefixConfiguration.prototype.registerCommands = function (commands) {
        commands.registerCommand(this.command, this);
    };
    DebugPrefixConfiguration.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this);
    };
    DebugPrefixConfiguration.prototype.onType = function (_lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var items, configurations;
            var _this = this;
            return __generator(this, function (_a) {
                items = [];
                configurations = this.debugConfigurationManager.all;
                Array.from(configurations).forEach(function (config) {
                    items.push(new quick_open_1.QuickOpenItem({
                        label: config.configuration.name,
                        description: _this.workspaceService.isMultiRootWorkspaceOpened
                            ? _this.labelProvider.getName(new uri_1.default(config.workspaceFolderUri))
                            : '',
                        run: function (mode) {
                            if (mode !== quick_open_1.QuickOpenMode.OPEN) {
                                return false;
                            }
                            _this.runConfiguration(config);
                            return true;
                        }
                    }));
                });
                acceptor(items);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Set the current debug configuration, and execute debug start command.
     *
     * @param configuration the `DebugSessionOptions`.
     */
    DebugPrefixConfiguration.prototype.runConfiguration = function (configuration) {
        this.debugConfigurationManager.current = __assign({}, configuration);
        this.commandRegistry.executeCommand(debug_frontend_application_contribution_1.DebugCommands.START.id);
    };
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], DebugPrefixConfiguration.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugPrefixConfiguration.prototype, "debugSessionManager", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], DebugPrefixConfiguration.prototype, "debugConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(quick_open_1.PrefixQuickOpenService),
        __metadata("design:type", quick_open_1.PrefixQuickOpenService)
    ], DebugPrefixConfiguration.prototype, "prefixQuickOpenService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], DebugPrefixConfiguration.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], DebugPrefixConfiguration.prototype, "labelProvider", void 0);
    DebugPrefixConfiguration = __decorate([
        inversify_1.injectable()
    ], DebugPrefixConfiguration);
    return DebugPrefixConfiguration;
}());
exports.DebugPrefixConfiguration = DebugPrefixConfiguration;
//# sourceMappingURL=debug-prefix-configuration.js.map
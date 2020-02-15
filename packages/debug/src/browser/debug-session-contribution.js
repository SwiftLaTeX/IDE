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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
var terminal_service_1 = require("@theia/terminal/lib/browser/base/terminal-service");
var ws_connection_provider_1 = require("@theia/core/lib/browser/messaging/ws-connection-provider");
var debug_session_1 = require("./debug-session");
var breakpoint_manager_1 = require("./breakpoint/breakpoint-manager");
var output_channel_1 = require("@theia/output/lib/common/output-channel");
var debug_preferences_1 = require("./debug-preferences");
var debug_session_connection_1 = require("./debug-session-connection");
var debug_service_1 = require("../common/debug-service");
var contribution_provider_1 = require("@theia/core/lib/common/contribution-provider");
var common_2 = require("@theia/filesystem/lib/common");
/**
 * DebugSessionContribution symbol for DI.
 */
exports.DebugSessionContribution = Symbol('DebugSessionContribution');
/**
 * DebugSessionContributionRegistry symbol for DI.
 */
exports.DebugSessionContributionRegistry = Symbol('DebugSessionContributionRegistry');
var DebugSessionContributionRegistryImpl = /** @class */ (function () {
    function DebugSessionContributionRegistryImpl() {
        this.contribs = new Map();
    }
    DebugSessionContributionRegistryImpl.prototype.init = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contrib = _c.value;
                this.contribs.set(contrib.debugType, contrib);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    DebugSessionContributionRegistryImpl.prototype.get = function (debugType) {
        return this.contribs.get(debugType);
    };
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider), inversify_1.named(exports.DebugSessionContribution),
        __metadata("design:type", Object)
    ], DebugSessionContributionRegistryImpl.prototype, "contributions", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugSessionContributionRegistryImpl.prototype, "init", null);
    DebugSessionContributionRegistryImpl = __decorate([
        inversify_1.injectable()
    ], DebugSessionContributionRegistryImpl);
    return DebugSessionContributionRegistryImpl;
}());
exports.DebugSessionContributionRegistryImpl = DebugSessionContributionRegistryImpl;
/**
 * DebugSessionFactory symbol for DI.
 */
exports.DebugSessionFactory = Symbol('DebugSessionFactory');
var DefaultDebugSessionFactory = /** @class */ (function () {
    function DefaultDebugSessionFactory() {
    }
    DefaultDebugSessionFactory.prototype.get = function (sessionId, options) {
        var _this = this;
        var connection = new debug_session_connection_1.DebugSessionConnection(sessionId, function () { return new Promise(function (resolve) {
            return _this.connectionProvider.openChannel(debug_service_1.DebugAdapterPath + "/" + sessionId, function (channel) {
                resolve(channel);
            }, { reconnecting: false });
        }); }, this.getTraceOutputChannel());
        return new debug_session_1.DebugSession(sessionId, options, connection, this.terminalService, this.editorManager, this.breakpoints, this.labelProvider, this.messages, this.fileSystem);
    };
    DefaultDebugSessionFactory.prototype.getTraceOutputChannel = function () {
        if (this.debugPreferences['debug.trace']) {
            return this.outputChannelManager.getChannel('Debug adapters');
        }
    };
    __decorate([
        inversify_1.inject(ws_connection_provider_1.WebSocketConnectionProvider),
        __metadata("design:type", ws_connection_provider_1.WebSocketConnectionProvider)
    ], DefaultDebugSessionFactory.prototype, "connectionProvider", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], DefaultDebugSessionFactory.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], DefaultDebugSessionFactory.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DefaultDebugSessionFactory.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], DefaultDebugSessionFactory.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(common_1.MessageClient),
        __metadata("design:type", common_1.MessageClient)
    ], DefaultDebugSessionFactory.prototype, "messages", void 0);
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], DefaultDebugSessionFactory.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(debug_preferences_1.DebugPreferences),
        __metadata("design:type", Object)
    ], DefaultDebugSessionFactory.prototype, "debugPreferences", void 0);
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], DefaultDebugSessionFactory.prototype, "fileSystem", void 0);
    DefaultDebugSessionFactory = __decorate([
        inversify_1.injectable()
    ], DefaultDebugSessionFactory);
    return DefaultDebugSessionFactory;
}());
exports.DefaultDebugSessionFactory = DefaultDebugSessionFactory;
//# sourceMappingURL=debug-session-contribution.js.map
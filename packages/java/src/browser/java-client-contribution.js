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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Red Hat.
// Licensed under EPL-1.0 license
// Function parseVMargs() copied and modified https://github.com/redhat-developer/vscode-java/blob/v0.44.0/src/javaServerStarter.ts#L105-L121
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var semantic_highlighting_service_1 = require("@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service");
var browser_2 = require("@theia/languages/lib/browser");
var common_2 = require("../common");
var java_protocol_1 = require("./java-protocol");
var preferences_1 = require("@theia/core/lib/browser/preferences");
var JavaClientContribution = /** @class */ (function (_super) {
    __extends(JavaClientContribution, _super);
    function JavaClientContribution(workspace, languages, languageClientFactory, window, commandService, statusBar, semanticHighlightingService) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.workspace = workspace;
        _this.languages = languages;
        _this.languageClientFactory = languageClientFactory;
        _this.window = window;
        _this.commandService = commandService;
        _this.statusBar = statusBar;
        _this.semanticHighlightingService = semanticHighlightingService;
        _this.id = common_2.JAVA_LANGUAGE_ID;
        _this.name = common_2.JAVA_LANGUAGE_NAME;
        _this.statusNotificationName = 'java-status-notification';
        return _this;
    }
    Object.defineProperty(JavaClientContribution.prototype, "globPatterns", {
        get: function () {
            return ['**/*.java', '**/pom.xml', '**/*.gradle'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavaClientContribution.prototype, "workspaceContains", {
        get: function () {
            return ['pom.xml', 'build.gradle'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavaClientContribution.prototype, "configurationSection", {
        get: function () {
            return 'java';
        },
        enumerable: true,
        configurable: true
    });
    JavaClientContribution.prototype.onReady = function (languageClient) {
        var _this = this;
        languageClient.onNotification(java_protocol_1.ActionableNotification.type, this.showActionableMessage.bind(this));
        languageClient.onNotification(java_protocol_1.StatusNotification.type, this.showStatusMessage.bind(this));
        languageClient.onRequest(java_protocol_1.ExecuteClientCommand.type, function (params) {
            var _a;
            return (_a = _this.commandService).executeCommand.apply(_a, __spread([params.command], params.arguments));
        });
        _super.prototype.onReady.call(this, languageClient);
    };
    JavaClientContribution.prototype.createLanguageClient = function (connection) {
        var client = Object.assign(_super.prototype.createLanguageClient.call(this, connection), { languageId: this.id });
        client.registerFeature(semantic_highlighting_service_1.SemanticHighlightingService.createNewFeature(this.semanticHighlightingService, client));
        return client;
    };
    JavaClientContribution.prototype.showStatusMessage = function (message) {
        var _this = this;
        if (this.statusBarTimeout) {
            window.clearTimeout(this.statusBarTimeout);
            this.statusBarTimeout = undefined;
        }
        var statusEntry = {
            alignment: browser_1.StatusBarAlignment.LEFT,
            priority: 1,
            text: '$(refresh~spin) ' + message.message
        };
        this.statusBar.setElement(this.statusNotificationName, statusEntry);
        this.statusBarTimeout = window.setTimeout(function () {
            _this.statusBar.removeElement(_this.statusNotificationName);
            _this.statusBarTimeout = undefined;
        }, 500);
    };
    JavaClientContribution.prototype.showActionableMessage = function (message) {
        var _a;
        var _this = this;
        var items = message.commands || [];
        (_a = this.window).showMessage.apply(_a, __spread([message.severity, message.message], items)).then(function (command) {
            var _a;
            if (command) {
                var args = command.arguments || [];
                (_a = _this.commandService).executeCommand.apply(_a, __spread([command.command], args));
            }
        });
    };
    JavaClientContribution.prototype.createOptions = function () {
        var options = _super.prototype.createOptions.call(this);
        options.initializationOptions = {
            extendedClientCapabilities: {
                classFileContentsSupport: true
            }
        };
        return options;
    };
    JavaClientContribution.prototype.getStartParameters = function () {
        var workspace = this.workspace.rootUri ? this.workspace.rootUri : undefined;
        var jvmArgs = [];
        var vmargsLine = this.preferenceService.get('java.jdt.ls.vmargs', '');
        this.parseVMargs(jvmArgs, vmargsLine);
        return { workspace: workspace, jvmArgs: jvmArgs };
    };
    JavaClientContribution.prototype.parseVMargs = function (params, vmargsLine) {
        if (!vmargsLine) {
            return;
        }
        var vmargs = vmargsLine.match(/(?:[^\s"]+|"[^"]*")+/g);
        // eslint-disable-next-line no-null/no-null
        if (vmargs === null) {
            return;
        }
        vmargs.forEach(function (arg) {
            // remove all standalone double quotes
            arg = arg.replace(/(\\)?"/g, function ($0, $1) { return ($1 ? $0 : ''); });
            // unescape all escaped double quotes
            arg = arg.replace(/(\\)"/g, '"');
            if (params.indexOf(arg) < 0) {
                params.push(arg);
            }
        });
    };
    __decorate([
        inversify_1.inject(preferences_1.PreferenceService),
        __metadata("design:type", Object)
    ], JavaClientContribution.prototype, "preferenceService", void 0);
    JavaClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.Workspace)),
        __param(1, inversify_1.inject(browser_2.Languages)),
        __param(2, inversify_1.inject(browser_2.LanguageClientFactory)),
        __param(3, inversify_1.inject(browser_2.Window)),
        __param(4, inversify_1.inject(common_1.CommandService)),
        __param(5, inversify_1.inject(browser_1.StatusBar)),
        __param(6, inversify_1.inject(semantic_highlighting_service_1.SemanticHighlightingService)),
        __metadata("design:paramtypes", [Object, Object, browser_2.LanguageClientFactory, Object, Object, Object, semantic_highlighting_service_1.SemanticHighlightingService])
    ], JavaClientContribution);
    return JavaClientContribution;
}(browser_2.BaseLanguageClientContribution));
exports.JavaClientContribution = JavaClientContribution;
//# sourceMappingURL=java-client-contribution.js.map
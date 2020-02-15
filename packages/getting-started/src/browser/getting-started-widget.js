"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var React = require("react");
var uri_1 = require("@theia/core/lib/common/uri");
var inversify_1 = require("inversify");
var react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/workspace/lib/browser");
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var filesystem_utils_1 = require("@theia/filesystem/lib/common/filesystem-utils");
var browser_2 = require("@theia/keymaps/lib/browser");
var browser_3 = require("@theia/core/lib/browser");
var application_protocol_1 = require("@theia/core/lib/common/application-protocol");
var frontend_application_config_provider_1 = require("@theia/core/lib/browser/frontend-application-config-provider");
/**
 * Default implementation of the `GettingStartedWidget`.
 * The widget is displayed when there are currently no workspaces present.
 * Some of the features displayed include:
 * - `open` commands.
 * - `recently used workspaces`.
 * - `settings` commands.
 * - `help` commands.
 * - helpful links.
 */
var GettingStartedWidget = /** @class */ (function (_super) {
    __extends(GettingStartedWidget, _super);
    function GettingStartedWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The application name which is used for display purposes.
         */
        _this.applicationName = frontend_application_config_provider_1.FrontendApplicationConfigProvider.get().applicationName;
        /**
         * The recently used workspaces limit.
         * Used in order to limit the number of recently used workspaces to display.
         */
        _this.recentLimit = 5;
        /**
         * The list of recently used workspaces.
         */
        _this.recentWorkspaces = [];
        /**
         * Collection of useful links to display for end users.
         */
        _this.documentationUrl = 'https://www.theia-ide.org/doc/';
        _this.extensionUrl = 'https://www.theia-ide.org/doc/Authoring_Extensions.html';
        _this.pluginUrl = 'https://www.theia-ide.org/doc/Authoring_Plugins.html';
        /**
         * Trigger the open command.
         */
        _this.doOpen = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN.id); };
        /**
         * Trigger the open file command.
         */
        _this.doOpenFile = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN_FILE.id); };
        /**
         * Trigger the open folder command.
         */
        _this.doOpenFolder = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN_FOLDER.id); };
        /**
         * Trigger the open workspace command.
         */
        _this.doOpenWorkspace = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN_WORKSPACE.id); };
        /**
         * Trigger the open recent workspace command.
         */
        _this.doOpenRecentWorkspace = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN_RECENT_WORKSPACE.id); };
        /**
         * Trigger the open preferences command.
         * Used to open the preferences widget.
         */
        _this.doOpenPreferences = function () { return _this.commandRegistry.executeCommand(browser_3.CommonCommands.OPEN_PREFERENCES.id); };
        /**
         * Trigger the open keyboard shortcuts command.
         * Used to open the keyboard shortcuts widget.
         */
        _this.doOpenKeyboardShortcuts = function () { return _this.commandRegistry.executeCommand(browser_2.KeymapsCommands.OPEN_KEYMAPS.id); };
        /**
         * Open a workspace given its uri.
         * @param uri {URI} the workspace uri.
         */
        _this.open = function (uri) { return _this.workspaceService.open(uri); };
        return _this;
    }
    GettingStartedWidget_1 = GettingStartedWidget;
    GettingStartedWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.id = GettingStartedWidget_1.ID;
                        this.title.label = GettingStartedWidget_1.LABEL;
                        this.title.caption = GettingStartedWidget_1.LABEL;
                        this.title.closable = true;
                        _a = this;
                        return [4 /*yield*/, this.appServer.getApplicationInfo()];
                    case 1:
                        _a.applicationInfo = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.workspaceService.recentWorkspaces()];
                    case 2:
                        _b.recentWorkspaces = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.fileSystem.getCurrentUserHome()];
                    case 3:
                        _c.stat = _d.sent();
                        this.home = this.stat ? new uri_1.default(this.stat.uri).path.toString() : undefined;
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Render the content of the widget.
     */
    GettingStartedWidget.prototype.render = function () {
        return React.createElement("div", { className: 'gs-container' },
            this.renderHeader(),
            React.createElement("hr", { className: 'gs-hr' }),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderOpen())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderRecentWorkspaces())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderSettings())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderHelp())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderVersion())));
    };
    /**
     * Render the widget header.
     * Renders the title `{applicationName} Getting Started`.
     */
    GettingStartedWidget.prototype.renderHeader = function () {
        return React.createElement("div", { className: 'gs-header' },
            React.createElement("h1", null,
                this.applicationName,
                React.createElement("span", { className: 'gs-sub-header' }, " Getting Started")));
    };
    /**
     * Render the `open` section.
     * Displays a collection of `open` commands.
     */
    GettingStartedWidget.prototype.renderOpen = function () {
        var requireSingleOpen = common_1.isOSX || !common_1.environment.electron.is();
        var open = requireSingleOpen && React.createElement("div", { className: 'gs-action-container' },
            React.createElement("a", { href: '#', onClick: this.doOpen }, "Open"));
        var openFile = !requireSingleOpen && React.createElement("div", { className: 'gs-action-container' },
            React.createElement("a", { href: '#', onClick: this.doOpenFile }, "Open File"));
        var openFolder = !requireSingleOpen && React.createElement("div", { className: 'gs-action-container' },
            React.createElement("a", { href: '#', onClick: this.doOpenFolder }, "Open Folder"));
        var openWorkspace = React.createElement("a", { href: '#', onClick: this.doOpenWorkspace }, "Open Workspace");
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-folder-open' }),
                "Open"),
            open,
            openFile,
            openFolder,
            openWorkspace);
    };
    /**
     * Render the recently used workspaces section.
     */
    GettingStartedWidget.prototype.renderRecentWorkspaces = function () {
        var _this = this;
        var items = this.recentWorkspaces;
        var paths = this.buildPaths(items);
        var content = paths.slice(0, this.recentLimit).map(function (item, index) {
            return React.createElement("div", { className: 'gs-action-container', key: index },
                React.createElement("a", { href: '#', onClick: function (a) { return _this.open(new uri_1.default(items[index])); } }, new uri_1.default(items[index]).path.base),
                React.createElement("span", { className: 'gs-action-details' }, item));
        });
        // If the recently used workspaces list exceeds the limit, display `More...` which triggers the recently used workspaces quick-open menu upon selection.
        var more = paths.length > this.recentLimit && React.createElement("div", { className: 'gs-action-container' },
            React.createElement("a", { href: '#', onClick: this.doOpenRecentWorkspace }, "More..."));
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-clock-o' }),
                "Recent Workspaces"),
            items.length > 0 ? content : React.createElement("p", { className: 'gs-no-recent' }, "No Recent Workspaces"),
            more);
    };
    /**
     * Render the settings section.
     * Generally used to display useful links.
     */
    GettingStartedWidget.prototype.renderSettings = function () {
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-cog' }),
                "Settings"),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: '#', onClick: this.doOpenPreferences }, "Open Preferences")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: '#', onClick: this.doOpenKeyboardShortcuts }, "Open Keyboard Shortcuts")));
    };
    /**
     * Render the help section.
     */
    GettingStartedWidget.prototype.renderHelp = function () {
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-question-circle' }),
                "Help"),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: this.documentationUrl, target: '_blank' }, "Documentation")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: this.extensionUrl, target: '_blank' }, "Building a New Extension")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: this.pluginUrl, target: '_blank' }, "Building a New Plugin")));
    };
    /**
     * Render the version section.
     */
    GettingStartedWidget.prototype.renderVersion = function () {
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("p", { className: 'gs-sub-header' }, this.applicationInfo ? 'Version ' + this.applicationInfo.version : '')));
    };
    /**
     * Build the list of workspace paths.
     * @param workspaces {string[]} the list of workspaces.
     * @returns {string[]} the list of workspace paths.
     */
    GettingStartedWidget.prototype.buildPaths = function (workspaces) {
        var _this = this;
        var paths = [];
        workspaces.forEach(function (workspace) {
            var uri = new uri_1.default(workspace);
            var pathLabel = _this.labelProvider.getLongName(uri);
            var path = _this.home ? filesystem_utils_1.FileSystemUtils.tildifyPath(pathLabel, _this.home) : pathLabel;
            paths.push(path);
        });
        return paths;
    };
    var GettingStartedWidget_1;
    /**
     * The widget `id`.
     */
    GettingStartedWidget.ID = 'getting.started.widget';
    /**
     * The widget `label` which is used for display purposes.
     */
    GettingStartedWidget.LABEL = 'Getting Started';
    __decorate([
        inversify_1.inject(application_protocol_1.ApplicationServer),
        __metadata("design:type", Object)
    ], GettingStartedWidget.prototype, "appServer", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], GettingStartedWidget.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], GettingStartedWidget.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_3.LabelProvider),
        __metadata("design:type", browser_3.LabelProvider)
    ], GettingStartedWidget.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], GettingStartedWidget.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GettingStartedWidget.prototype, "init", null);
    GettingStartedWidget = GettingStartedWidget_1 = __decorate([
        inversify_1.injectable()
    ], GettingStartedWidget);
    return GettingStartedWidget;
}(react_widget_1.ReactWidget));
exports.GettingStartedWidget = GettingStartedWidget;
//# sourceMappingURL=getting-started-widget.js.map
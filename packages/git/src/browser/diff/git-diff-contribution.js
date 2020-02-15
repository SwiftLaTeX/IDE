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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var widget_manager_1 = require("@theia/core/lib/browser/widget-manager");
var inversify_1 = require("inversify");
var git_diff_widget_1 = require("./git-diff-widget");
var browser_2 = require("@theia/core/lib/browser");
var navigator_contribution_1 = require("@theia/navigator/lib/browser/navigator-contribution");
var git_quick_open_service_1 = require("../git-quick-open-service");
var common_2 = require("@theia/filesystem/lib/common");
var diff_uris_1 = require("@theia/core/lib/browser/diff-uris");
var git_resource_1 = require("../git-resource");
var git_repository_provider_1 = require("../git-repository-provider");
var workspace_commands_1 = require("@theia/workspace/lib/browser/workspace-commands");
var browser_3 = require("@theia/workspace/lib/browser");
var GitDiffCommands;
(function (GitDiffCommands) {
    GitDiffCommands.OPEN_FILE_DIFF = {
        id: 'git-diff:open-file-diff',
        category: 'Git Diff',
        label: 'Compare With...'
    };
})(GitDiffCommands = exports.GitDiffCommands || (exports.GitDiffCommands = {}));
var ScmNavigatorMoreToolbarGroups;
(function (ScmNavigatorMoreToolbarGroups) {
    ScmNavigatorMoreToolbarGroups.SCM = '3_navigator_scm';
})(ScmNavigatorMoreToolbarGroups = exports.ScmNavigatorMoreToolbarGroups || (exports.ScmNavigatorMoreToolbarGroups = {}));
var GitDiffContribution = /** @class */ (function (_super) {
    __extends(GitDiffContribution, _super);
    function GitDiffContribution(selectionService, widgetManager, app, quickOpenService, fileSystem, openerService, notifications, repositoryProvider) {
        var _this = _super.call(this, {
            widgetId: git_diff_widget_1.GIT_DIFF,
            widgetName: 'Git diff',
            defaultWidgetOptions: {
                area: 'left',
                rank: 500
            }
        }) || this;
        _this.selectionService = selectionService;
        _this.widgetManager = widgetManager;
        _this.app = app;
        _this.quickOpenService = quickOpenService;
        _this.fileSystem = fileSystem;
        _this.openerService = openerService;
        _this.notifications = notifications;
        _this.repositoryProvider = repositoryProvider;
        return _this;
    }
    GitDiffContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(navigator_contribution_1.NavigatorContextMenu.COMPARE, {
            commandId: GitDiffCommands.OPEN_FILE_DIFF.id
        });
    };
    GitDiffContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(GitDiffCommands.OPEN_FILE_DIFF, this.newWorkspaceRootUriAwareCommandHandler({
            isVisible: function (uri) { return !!_this.repositoryProvider.findRepository(uri); },
            isEnabled: function (uri) { return !!_this.repositoryProvider.findRepository(uri); },
            execute: function (fileUri) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.quickOpenService.chooseTagsAndBranches(function (fromRevision, toRevision) { return __awaiter(_this, void 0, void 0, function () {
                                var uri, fileStat, options, fromURI, toURI, diffUri;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            uri = fileUri.toString();
                                            return [4 /*yield*/, this.fileSystem.getFileStat(uri)];
                                        case 1:
                                            fileStat = _a.sent();
                                            options = {
                                                uri: uri,
                                                range: {
                                                    fromRevision: fromRevision
                                                }
                                            };
                                            if (fileStat) {
                                                if (fileStat.isDirectory) {
                                                    this.showWidget(options);
                                                }
                                                else {
                                                    fromURI = fileUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(fromRevision);
                                                    toURI = fileUri;
                                                    diffUri = diff_uris_1.DiffUris.encode(fromURI, toURI);
                                                    if (diffUri) {
                                                        browser_2.open(this.openerService, diffUri).catch(function (e) {
                                                            _this.notifications.error(e.message);
                                                        });
                                                    }
                                                }
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, this.repositoryProvider.findRepository(fileUri))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        }));
    };
    GitDiffContribution.prototype.registerToolbarItems = function (registry) {
        this.fileNavigatorContribution.registerMoreToolbarItem({
            id: GitDiffCommands.OPEN_FILE_DIFF.id,
            command: GitDiffCommands.OPEN_FILE_DIFF.id,
            tooltip: GitDiffCommands.OPEN_FILE_DIFF.label,
            group: ScmNavigatorMoreToolbarGroups.SCM,
        });
    };
    GitDiffContribution.prototype.showWidget = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        return [4 /*yield*/, widget.setContent(options)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.openView({
                                activate: true
                            })];
                }
            });
        });
    };
    GitDiffContribution.prototype.newWorkspaceRootUriAwareCommandHandler = function (handler) {
        return new workspace_commands_1.WorkspaceRootUriAwareCommandHandler(this.workspaceService, this.selectionService, handler);
    };
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], GitDiffContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(navigator_contribution_1.FileNavigatorContribution),
        __metadata("design:type", navigator_contribution_1.FileNavigatorContribution)
    ], GitDiffContribution.prototype, "fileNavigatorContribution", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], GitDiffContribution.prototype, "workspaceService", void 0);
    GitDiffContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.SelectionService)),
        __param(1, inversify_1.inject(widget_manager_1.WidgetManager)),
        __param(2, inversify_1.inject(browser_1.FrontendApplication)),
        __param(3, inversify_1.inject(git_quick_open_service_1.GitQuickOpenService)),
        __param(4, inversify_1.inject(common_2.FileSystem)),
        __param(5, inversify_1.inject(browser_2.OpenerService)),
        __param(6, inversify_1.inject(common_1.MessageService)),
        __param(7, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __metadata("design:paramtypes", [common_1.SelectionService,
            widget_manager_1.WidgetManager,
            browser_1.FrontendApplication,
            git_quick_open_service_1.GitQuickOpenService, Object, Object, common_1.MessageService,
            git_repository_provider_1.GitRepositoryProvider])
    ], GitDiffContribution);
    return GitDiffContribution;
}(browser_1.AbstractViewContribution));
exports.GitDiffContribution = GitDiffContribution;
//# sourceMappingURL=git-diff-contribution.js.map
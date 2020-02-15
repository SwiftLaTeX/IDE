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
var common_1 = require("../../common");
var keybinding_1 = require("../keybinding");
var widget_manager_1 = require("../widget-manager");
var common_frontend_contribution_1 = require("../common-frontend-contribution");
var application_shell_1 = require("./application-shell");
var quick_view_service_1 = require("../quick-view-service");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function bindViewContribution(bind, identifier) {
    var syntax = bind(identifier).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(identifier);
    bind(keybinding_1.KeybindingContribution).toService(identifier);
    bind(common_1.MenuContribution).toService(identifier);
    return syntax;
}
exports.bindViewContribution = bindViewContribution;
/**
 * An abstract superclass for frontend contributions that add a view to the application shell.
 */
var AbstractViewContribution = /** @class */ (function () {
    function AbstractViewContribution(options) {
        this.options = options;
        if (options.toggleCommandId) {
            this.toggleCommand = {
                id: options.toggleCommandId,
                label: 'Toggle ' + this.viewLabel + ' View'
            };
        }
    }
    Object.defineProperty(AbstractViewContribution.prototype, "viewId", {
        get: function () {
            return this.options.widgetId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractViewContribution.prototype, "viewLabel", {
        get: function () {
            return this.options.widgetName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractViewContribution.prototype, "defaultViewOptions", {
        get: function () {
            return this.options.defaultWidgetOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractViewContribution.prototype, "widget", {
        get: function () {
            return this.widgetManager.getOrCreateWidget(this.viewId);
        },
        enumerable: true,
        configurable: true
    });
    AbstractViewContribution.prototype.tryGetWidget = function () {
        return this.widgetManager.tryGetWidget(this.viewId);
    };
    AbstractViewContribution.prototype.openView = function (args) {
        if (args === void 0) { args = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var shell, widget, tabBar, area, widgetArgs, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shell = this.shell;
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(this.options.viewContainerId || this.viewId)];
                    case 1:
                        widget = _b.sent();
                        tabBar = shell.getTabBarFor(widget);
                        area = shell.getAreaFor(widget);
                        if (!!tabBar) return [3 /*break*/, 3];
                        widgetArgs = __assign(__assign({}, this.defaultViewOptions), args);
                        return [4 /*yield*/, shell.addWidget(widget, widgetArgs)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 3:
                        if (!(args.toggle && area && shell.isExpanded(area) && tabBar.currentTitle === widget.title)) return [3 /*break*/, 12];
                        _a = area;
                        switch (_a) {
                            case 'left': return [3 /*break*/, 4];
                            case 'right': return [3 /*break*/, 4];
                            case 'bottom': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 9];
                    case 4: return [4 /*yield*/, shell.collapsePanel(area)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 6:
                        if (!(shell.bottomAreaTabBars.length === 1)) return [3 /*break*/, 8];
                        return [4 /*yield*/, shell.collapsePanel('bottom')];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [3 /*break*/, 11];
                    case 9: 
                    // The main area cannot be collapsed, so close the widget
                    return [4 /*yield*/, this.closeView()];
                    case 10:
                        // The main area cannot be collapsed, so close the widget
                        _b.sent();
                        _b.label = 11;
                    case 11: return [2 /*return*/, this.widget];
                    case 12:
                        if (!(widget.isAttached && args.activate)) return [3 /*break*/, 14];
                        return [4 /*yield*/, shell.activateWidget(this.viewId)];
                    case 13:
                        _b.sent();
                        return [3 /*break*/, 16];
                    case 14:
                        if (!(widget.isAttached && args.reveal)) return [3 /*break*/, 16];
                        return [4 /*yield*/, shell.revealWidget(this.viewId)];
                    case 15:
                        _b.sent();
                        _b.label = 16;
                    case 16: return [2 /*return*/, this.widget];
                }
            });
        });
    };
    AbstractViewContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        if (this.toggleCommand) {
            commands.registerCommand(this.toggleCommand, {
                execute: function () { return _this.toggleView(); }
            });
        }
        this.quickView.registerItem({
            label: this.viewLabel,
            open: function () { return _this.openView({ activate: true }); }
        });
    };
    AbstractViewContribution.prototype.closeView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shell.closeWidget(this.viewId)];
                    case 1:
                        widget = _a.sent();
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    AbstractViewContribution.prototype.toggleView = function () {
        return this.openView({
            toggle: true,
            activate: true
        });
    };
    AbstractViewContribution.prototype.registerMenus = function (menus) {
        if (this.toggleCommand) {
            menus.registerMenuAction(common_frontend_contribution_1.CommonMenus.VIEW_VIEWS, {
                commandId: this.toggleCommand.id,
                label: this.viewLabel
            });
        }
    };
    AbstractViewContribution.prototype.registerKeybindings = function (keybindings) {
        if (this.toggleCommand && this.options.toggleKeybinding) {
            keybindings.registerKeybinding({
                command: this.toggleCommand.id,
                keybinding: this.options.toggleKeybinding
            });
        }
    };
    __decorate([
        inversify_1.inject(widget_manager_1.WidgetManager),
        __metadata("design:type", widget_manager_1.WidgetManager)
    ], AbstractViewContribution.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(application_shell_1.ApplicationShell),
        __metadata("design:type", application_shell_1.ApplicationShell)
    ], AbstractViewContribution.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(quick_view_service_1.QuickViewService),
        __metadata("design:type", quick_view_service_1.QuickViewService)
    ], AbstractViewContribution.prototype, "quickView", void 0);
    AbstractViewContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Object])
    ], AbstractViewContribution);
    return AbstractViewContribution;
}());
exports.AbstractViewContribution = AbstractViewContribution;
//# sourceMappingURL=view-contribution.js.map
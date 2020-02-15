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
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var workspace_preference_provider_1 = require("./workspace-preference-provider");
var common_1 = require("@theia/filesystem/lib/common");
var browser_2 = require("@theia/userstorage/lib/browser");
var preferences_tree_widget_1 = require("./preferences-tree-widget");
var browser_3 = require("@theia/editor/lib/browser");
var browser_4 = require("@theia/core/lib/browser");
var os_1 = require("@theia/core/lib/common/os");
var PreferencesContribution = /** @class */ (function (_super) {
    __extends(PreferencesContribution, _super);
    function PreferencesContribution() {
        return _super.call(this, {
            widgetId: preferences_tree_widget_1.PreferencesContainer.ID,
            widgetName: 'Preferences',
            defaultWidgetOptions: { area: 'main' }
        }) || this;
    }
    PreferencesContribution.prototype.registerCommands = function (commands) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                commands.registerCommand(browser_1.CommonCommands.OPEN_PREFERENCES, {
                    isEnabled: function () { return true; },
                    execute: function (preferenceScope) {
                        if (preferenceScope === void 0) { preferenceScope = browser_1.PreferenceScope.User; }
                        return _this.openPreferences(preferenceScope);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    PreferencesContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.FILE_SETTINGS_SUBMENU_OPEN, {
            commandId: browser_1.CommonCommands.OPEN_PREFERENCES.id,
            order: 'a10'
        });
    };
    PreferencesContribution.prototype.registerKeybindings = function (keybindings) {
        if (os_1.isOSX && !browser_4.isFirefox) {
            keybindings.registerKeybinding({
                command: browser_1.CommonCommands.OPEN_PREFERENCES.id,
                keybinding: 'cmd+,'
            });
        }
        keybindings.registerKeybinding({
            command: browser_1.CommonCommands.OPEN_PREFERENCES.id,
            keybinding: 'ctrl+,'
        });
    };
    PreferencesContribution.prototype.openPreferences = function (preferenceScope) {
        return __awaiter(this, void 0, void 0, function () {
            var wsUri, _a, widget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        wsUri = this.workspacePreferenceProvider.getConfigUri();
                        _a = wsUri;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.filesystem.exists(wsUri.toString())];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.filesystem.createFile(wsUri.toString())];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, this.widget];
                    case 5:
                        widget = _b.sent();
                        widget.preferenceScope = preferenceScope;
                        _super.prototype.openView.call(this, { activate: true });
                        widget.activatePreferenceEditor(preferenceScope);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_2.UserStorageService),
        __metadata("design:type", Object)
    ], PreferencesContribution.prototype, "userStorageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceProvider), inversify_1.named(browser_1.PreferenceScope.Workspace),
        __metadata("design:type", workspace_preference_provider_1.WorkspacePreferenceProvider)
    ], PreferencesContribution.prototype, "workspacePreferenceProvider", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], PreferencesContribution.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(browser_3.EditorManager),
        __metadata("design:type", browser_3.EditorManager)
    ], PreferencesContribution.prototype, "editorManager", void 0);
    PreferencesContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PreferencesContribution);
    return PreferencesContribution;
}(browser_1.AbstractViewContribution));
exports.PreferencesContribution = PreferencesContribution;
//# sourceMappingURL=preferences-contribution.js.map
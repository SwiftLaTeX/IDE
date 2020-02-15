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
var common_frontend_contribution_1 = require("@theia/core/lib/browser/common-frontend-contribution");
var keymaps_service_1 = require("./keymaps-service");
var browser_1 = require("@theia/core/lib/browser");
var keybindings_widget_1 = require("./keybindings-widget");
var KeymapsCommands;
(function (KeymapsCommands) {
    KeymapsCommands.OPEN_KEYMAPS = {
        id: 'keymaps:open',
        category: 'Settings',
        label: 'Open Keyboard Shortcuts',
    };
    KeymapsCommands.OPEN_KEYMAPS_JSON = {
        id: 'keymaps:openJson',
        category: 'Settings',
        label: 'Open Keyboard Shortcuts (JSON)',
    };
    KeymapsCommands.OPEN_KEYMAPS_JSON_TOOLBAR = {
        id: 'keymaps:openJson.toolbar',
        iconClass: 'theia-open-json-icon'
    };
    KeymapsCommands.CLEAR_KEYBINDINGS_SEARCH = {
        id: 'keymaps.clearSearch',
        iconClass: 'clear-all'
    };
})(KeymapsCommands = exports.KeymapsCommands || (exports.KeymapsCommands = {}));
var KeymapsFrontendContribution = /** @class */ (function (_super) {
    __extends(KeymapsFrontendContribution, _super);
    function KeymapsFrontendContribution() {
        return _super.call(this, {
            widgetId: keybindings_widget_1.KeybindingWidget.ID,
            widgetName: keybindings_widget_1.KeybindingWidget.LABEL,
            defaultWidgetOptions: {
                area: 'main'
            },
        }) || this;
    }
    KeymapsFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(KeymapsCommands.OPEN_KEYMAPS, {
            isEnabled: function () { return true; },
            execute: function () { return _this.openView({ activate: true }); }
        });
        commands.registerCommand(KeymapsCommands.OPEN_KEYMAPS_JSON, {
            isEnabled: function () { return true; },
            execute: function () { return _this.keymaps.open(); }
        });
        commands.registerCommand(KeymapsCommands.OPEN_KEYMAPS_JSON_TOOLBAR, {
            isEnabled: function (w) { return _this.withWidget(w, function () { return true; }); },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); },
            execute: function (w) { return _this.withWidget(w, function (widget) { return _this.keymaps.open(widget); }); },
        });
        commands.registerCommand(KeymapsCommands.CLEAR_KEYBINDINGS_SEARCH, {
            isEnabled: function (w) { return _this.withWidget(w, function (widget) { return widget.hasSearch(); }); },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); },
            execute: function (w) { return _this.withWidget(w, function (widget) { return widget.clearSearch(); }); },
        });
    };
    KeymapsFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(common_frontend_contribution_1.CommonMenus.FILE_SETTINGS_SUBMENU_OPEN, {
            commandId: KeymapsCommands.OPEN_KEYMAPS.id,
            order: 'a20'
        });
    };
    KeymapsFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: KeymapsCommands.OPEN_KEYMAPS.id,
            keybinding: 'ctrl+alt+,'
        });
    };
    KeymapsFrontendContribution.prototype.registerToolbarItems = function (toolbar) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, onDidChange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        onDidChange = widget.onDidUpdate;
                        toolbar.registerItem({
                            id: KeymapsCommands.OPEN_KEYMAPS_JSON_TOOLBAR.id,
                            command: KeymapsCommands.OPEN_KEYMAPS_JSON_TOOLBAR.id,
                            tooltip: 'Open Keyboard Shortcuts in JSON',
                            priority: 0,
                        });
                        toolbar.registerItem({
                            id: KeymapsCommands.CLEAR_KEYBINDINGS_SEARCH.id,
                            command: KeymapsCommands.CLEAR_KEYBINDINGS_SEARCH.id,
                            tooltip: 'Clear Keybindings Search Input',
                            priority: 1,
                            onDidChange: onDidChange,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Determine if the current widget is the keybindings widget.
     */
    KeymapsFrontendContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof keybindings_widget_1.KeybindingWidget && widget.id === keybindings_widget_1.KeybindingWidget.ID) {
            return fn(widget);
        }
        return false;
    };
    __decorate([
        inversify_1.inject(keymaps_service_1.KeymapsService),
        __metadata("design:type", keymaps_service_1.KeymapsService)
    ], KeymapsFrontendContribution.prototype, "keymaps", void 0);
    KeymapsFrontendContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], KeymapsFrontendContribution);
    return KeymapsFrontendContribution;
}(browser_1.AbstractViewContribution));
exports.KeymapsFrontendContribution = KeymapsFrontendContribution;
//# sourceMappingURL=keymaps-frontend-contribution.js.map
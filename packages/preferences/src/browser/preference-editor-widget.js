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
var widgets_1 = require("@phosphor/widgets");
var properties_1 = require("@phosphor/properties");
var widgets_2 = require("@phosphor/widgets");
var commands_1 = require("@phosphor/commands");
var virtualdom_1 = require("@phosphor/virtualdom");
var browser_1 = require("@theia/editor/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var common_1 = require("@theia/filesystem/lib/common");
var PreferencesEditorWidgetTitle = /** @class */ (function (_super) {
    __extends(PreferencesEditorWidgetTitle, _super);
    function PreferencesEditorWidgetTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PreferencesEditorWidgetTitle;
}(widgets_1.Title));
exports.PreferencesEditorWidgetTitle = PreferencesEditorWidgetTitle;
var PreferencesEditorWidget = /** @class */ (function (_super) {
    __extends(PreferencesEditorWidget, _super);
    function PreferencesEditorWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PreferencesEditorWidget.prototype, "title", {
        get: function () {
            return new properties_1.AttachedProperty({
                name: 'title',
                create: function (owner) { return new PreferencesEditorWidgetTitle({ owner: owner }); },
            }).get(this);
        },
        enumerable: true,
        configurable: true
    });
    return PreferencesEditorWidget;
}(browser_1.EditorWidget));
exports.PreferencesEditorWidget = PreferencesEditorWidget;
// TODO: put into DI context
var PreferenceEditorTabHeaderRenderer = /** @class */ (function (_super) {
    __extends(PreferenceEditorTabHeaderRenderer, _super);
    function PreferenceEditorTabHeaderRenderer(workspaceService, fileSystem, foldersPreferenceProvider) {
        var _this = _super.call(this) || this;
        _this.workspaceService = workspaceService;
        _this.fileSystem = fileSystem;
        _this.foldersPreferenceProvider = foldersPreferenceProvider;
        return _this;
    }
    PreferenceEditorTabHeaderRenderer.prototype.renderTab = function (data) {
        var title = data.title;
        title.closable = false;
        var key = this.createTabKey(data);
        var style = this.createTabStyle(data);
        var className = this.createTabClass(data);
        return virtualdom_1.h.li({ key: key, className: className, title: title.caption, style: style }, this.renderIcon(data), this.renderLabel(data), this.renderCloseIcon(data));
    };
    PreferenceEditorTabHeaderRenderer.prototype.renderLabel = function (data) {
        var _this = this;
        var clickableTitle = data.title.owner.title;
        if (clickableTitle.clickableText) {
            return virtualdom_1.h.div(virtualdom_1.h.span({ className: 'p-TabBar-tabLabel' }, data.title.label), virtualdom_1.h.span({
                className: 'p-TabBar-tabLabel p-TabBar-tab-secondary-label',
                title: clickableTitle.clickableTextTooltip,
                onclick: function (event) {
                    var editorUri = data.title.owner.editor.uri;
                    _this.refreshContextMenu(editorUri.parent.parent.toString(), clickableTitle.clickableTextCallback || (function () { }))
                        .then(function (menu) { return menu.open(event.x, event.y); });
                }
            }, clickableTitle.clickableText));
        }
        return _super.prototype.renderLabel.call(this, data);
    };
    PreferenceEditorTabHeaderRenderer.prototype.refreshContextMenu = function (activeMenuId, menuItemAction) {
        return __awaiter(this, void 0, void 0, function () {
            var commands, menu, roots, _loop_1, this_1, roots_1, roots_1_1, root, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        commands = new commands_1.CommandRegistry();
                        menu = new widgets_2.Menu({ commands: commands });
                        roots = this.workspaceService.tryGetRoots().map(function (r) { return r.uri; });
                        _loop_1 = function (root) {
                            var commandId, rootUri, isActive_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.canAccessSettings(root)];
                                    case 1:
                                        if (_a.sent()) {
                                            commandId = "switch_folder_pref_editor_to_" + root;
                                            if (!commands.hasCommand(commandId)) {
                                                rootUri = new uri_1.default(root);
                                                isActive_1 = rootUri.toString() === activeMenuId;
                                                commands.addCommand(commandId, {
                                                    label: rootUri.displayName,
                                                    iconClass: isActive_1 ? 'fa fa-check' : '',
                                                    execute: function () {
                                                        if (!isActive_1) {
                                                            menuItemAction(root);
                                                        }
                                                    }
                                                });
                                            }
                                            menu.addItem({
                                                type: 'command',
                                                command: commandId
                                            });
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        roots_1 = __values(roots), roots_1_1 = roots_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!roots_1_1.done) return [3 /*break*/, 5];
                        root = roots_1_1.value;
                        return [5 /*yield**/, _loop_1(root)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        roots_1_1 = roots_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, menu];
                }
            });
        });
    };
    PreferenceEditorTabHeaderRenderer.prototype.canAccessSettings = function (folderUriStr) {
        return __awaiter(this, void 0, void 0, function () {
            var settingsUri;
            return __generator(this, function (_a) {
                settingsUri = this.foldersPreferenceProvider.getConfigUri(folderUriStr);
                if (settingsUri) {
                    return [2 /*return*/, this.fileSystem.access(settingsUri.toString(), common_1.FileAccess.Constants.R_OK)];
                }
                return [2 /*return*/, this.fileSystem.access(folderUriStr, common_1.FileAccess.Constants.W_OK)];
            });
        });
    };
    return PreferenceEditorTabHeaderRenderer;
}(widgets_2.TabBar.Renderer));
exports.PreferenceEditorTabHeaderRenderer = PreferenceEditorTabHeaderRenderer;
// TODO put into DI context
var PreferenceEditorContainerTabBarRenderer = /** @class */ (function (_super) {
    __extends(PreferenceEditorContainerTabBarRenderer, _super);
    function PreferenceEditorContainerTabBarRenderer(workspaceService, fileSystem, foldersPreferenceProvider) {
        var _this = _super.call(this) || this;
        _this.workspaceService = workspaceService;
        _this.fileSystem = fileSystem;
        _this.foldersPreferenceProvider = foldersPreferenceProvider;
        return _this;
    }
    PreferenceEditorContainerTabBarRenderer.prototype.createTabBar = function () {
        var bar = new widgets_2.TabBar({ renderer: new PreferenceEditorTabHeaderRenderer(this.workspaceService, this.fileSystem, this.foldersPreferenceProvider) });
        bar.addClass('p-DockPanel-tabBar');
        return bar;
    };
    return PreferenceEditorContainerTabBarRenderer;
}(widgets_2.DockPanel.Renderer));
exports.PreferenceEditorContainerTabBarRenderer = PreferenceEditorContainerTabBarRenderer;
//# sourceMappingURL=preference-editor-widget.js.map
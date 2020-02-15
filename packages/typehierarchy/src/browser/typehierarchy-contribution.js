"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var inversify_1 = require("inversify");
var shell_1 = require("@theia/core/lib/browser/shell");
var editor_menu_1 = require("@theia/editor/lib/browser/editor-menu");
var editor_manager_1 = require("@theia/editor/lib/browser/editor-manager");
var view_contribution_1 = require("@theia/core/lib/browser/shell/view-contribution");
var typehierarchy_tree_1 = require("./tree/typehierarchy-tree");
var typehierarchy_tree_widget_1 = require("./tree/typehierarchy-tree-widget");
var typehierarchy_protocol_1 = require("@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol");
var TypeHierarchyContribution = /** @class */ (function (_super) {
    __extends(TypeHierarchyContribution, _super);
    function TypeHierarchyContribution() {
        return _super.call(this, {
            widgetId: typehierarchy_tree_widget_1.TypeHierarchyTreeWidget.WIDGET_ID,
            widgetName: typehierarchy_tree_widget_1.TypeHierarchyTreeWidget.WIDGET_LABEL,
            defaultWidgetOptions: {
                area: 'bottom'
            },
            toggleCommandId: TypeHierarchyCommands.TOGGLE_VIEW.id,
            toggleKeybinding: 'ctrlcmd+shift+h'
        }) || this;
    }
    TypeHierarchyContribution.prototype.openView = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, _a, selection, languageId, direction;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _super.prototype.openView.call(this, args)];
                    case 1:
                        widget = _b.sent();
                        _a = this.editorAccess, selection = _a.selection, languageId = _a.languageId;
                        direction = this.getDirection(args);
                        return [4 /*yield*/, widget.initialize({ location: selection, languageId: languageId, direction: direction })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    TypeHierarchyContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(TypeHierarchyCommands.OPEN_SUBTYPE, {
            execute: function () { return _this.openViewOrFlipHierarchyDirection(typehierarchy_protocol_1.TypeHierarchyDirection.Children); },
            isEnabled: this.isEnabled.bind(this)
        });
        commands.registerCommand(TypeHierarchyCommands.OPEN_SUPERTYPE, {
            execute: function () { return _this.openViewOrFlipHierarchyDirection(typehierarchy_protocol_1.TypeHierarchyDirection.Parents); },
            isEnabled: this.isEnabled.bind(this)
        });
    };
    TypeHierarchyContribution.prototype.registerMenus = function (menus) {
        _super.prototype.registerMenus.call(this, menus);
        var menuPath = __spread(editor_menu_1.EDITOR_CONTEXT_MENU, ['type-hierarchy']);
        menus.registerMenuAction(menuPath, {
            commandId: TypeHierarchyCommands.OPEN_SUBTYPE.id
        });
        menus.registerMenuAction(menuPath, {
            commandId: TypeHierarchyCommands.OPEN_SUPERTYPE.id
        });
    };
    TypeHierarchyContribution.prototype.registerKeybindings = function (keybindings) {
        _super.prototype.registerKeybindings.call(this, keybindings);
        keybindings.registerKeybinding({
            command: TypeHierarchyCommands.OPEN_SUBTYPE.id,
            keybinding: 'ctrlcmd+alt+h'
        });
    };
    /**
     * Flips the hierarchy direction in the `Type Hierarchy` view, if it is active and has a valid root.
     * Otherwise, calculates the type hierarchy based on the selection of the current editor.
     */
    TypeHierarchyContribution.prototype.openViewOrFlipHierarchyDirection = function (direction) {
        return __awaiter(this, void 0, void 0, function () {
            var activeWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isEnabled()) return [3 /*break*/, 4];
                        activeWidget = this.shell.activeWidget;
                        if (!(activeWidget instanceof typehierarchy_tree_widget_1.TypeHierarchyTreeWidget && typehierarchy_tree_1.TypeHierarchyTree.RootNode.is(activeWidget.model.root))) return [3 /*break*/, 2];
                        return [4 /*yield*/, activeWidget.model.flipDirection()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.openView({
                            toggle: false,
                            activate: true,
                            direction: direction
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enabled if the `current` editor has the `languageId` or the `Type Hierarchy` widget is the active one.
     */
    TypeHierarchyContribution.prototype.isEnabled = function (languageId) {
        if (languageId === void 0) { languageId = this.editorAccess.languageId; }
        return !!languageId || this.shell.activeWidget instanceof typehierarchy_tree_widget_1.TypeHierarchyTreeWidget;
    };
    /**
     * Extracts the type hierarchy direction from the argument. If the direction cannot be extracted, returns with the `Children` as the default type.
     */
    TypeHierarchyContribution.prototype.getDirection = function (args) {
        return !!args && !!args.direction ? args.direction : typehierarchy_protocol_1.TypeHierarchyDirection.Children;
    };
    __decorate([
        inversify_1.inject(editor_manager_1.EditorAccess),
        inversify_1.named(editor_manager_1.EditorAccess.CURRENT),
        __metadata("design:type", editor_manager_1.EditorAccess)
    ], TypeHierarchyContribution.prototype, "editorAccess", void 0);
    __decorate([
        inversify_1.inject(shell_1.ApplicationShell),
        __metadata("design:type", shell_1.ApplicationShell)
    ], TypeHierarchyContribution.prototype, "shell", void 0);
    TypeHierarchyContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], TypeHierarchyContribution);
    return TypeHierarchyContribution;
}(view_contribution_1.AbstractViewContribution));
exports.TypeHierarchyContribution = TypeHierarchyContribution;
var TypeHierarchyCommands;
(function (TypeHierarchyCommands) {
    TypeHierarchyCommands.TOGGLE_VIEW = {
        id: 'typehierarchy:toggle'
    };
    TypeHierarchyCommands.OPEN_SUBTYPE = {
        id: 'typehierarchy:open-subtype',
        label: 'Subtype Hierarchy'
    };
    TypeHierarchyCommands.OPEN_SUPERTYPE = {
        id: 'typehierarchy:open-supertype',
        label: 'Supertype Hierarchy'
    };
})(TypeHierarchyCommands = exports.TypeHierarchyCommands || (exports.TypeHierarchyCommands = {}));
//# sourceMappingURL=typehierarchy-contribution.js.map
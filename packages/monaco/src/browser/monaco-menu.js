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
var browser_1 = require("@theia/editor/lib/browser");
var monaco_command_1 = require("./monaco-command");
var monaco_command_registry_1 = require("./monaco-command-registry");
var MenuRegistry = monaco.actions.MenuRegistry;
var MonacoMenus;
(function (MonacoMenus) {
    MonacoMenus.SELECTION = __spread(common_1.MAIN_MENU_BAR, ['3_selection']);
    MonacoMenus.SELECTION_GROUP = {
        id: '1_selection_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_SELECT_ALL,
            monaco_command_1.MonacoCommands.SELECTION_EXPAND_SELECTION,
            monaco_command_1.MonacoCommands.SELECTION_SHRINK_SELECTION
        ]
    };
    MonacoMenus.SELECTION_MOVE_GROUP = {
        id: '2_copy_move_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_COPY_LINE_UP,
            monaco_command_1.MonacoCommands.SELECTION_COPY_LINE_DOWN,
            monaco_command_1.MonacoCommands.SELECTION_MOVE_LINE_UP,
            monaco_command_1.MonacoCommands.SELECTION_MOVE_LINE_DOWN
        ]
    };
    MonacoMenus.SELECTION_CURSOR_GROUP = {
        id: '3_cursor_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_ABOVE,
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_BELOW,
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_TO_LINE_END,
            monaco_command_1.MonacoCommands.SELECTION_ADD_NEXT_OCCURRENCE,
            monaco_command_1.MonacoCommands.SELECTION_ADD_PREVIOUS_OCCURRENCE,
            monaco_command_1.MonacoCommands.SELECTION_SELECT_ALL_OCCURRENCES
        ]
    };
    MonacoMenus.SELECTION_GROUPS = [
        MonacoMenus.SELECTION_GROUP,
        MonacoMenus.SELECTION_MOVE_GROUP,
        MonacoMenus.SELECTION_CURSOR_GROUP
    ];
})(MonacoMenus = exports.MonacoMenus || (exports.MonacoMenus = {}));
var MonacoEditorMenuContribution = /** @class */ (function () {
    function MonacoEditorMenuContribution(commands) {
        this.commands = commands;
    }
    MonacoEditorMenuContribution.prototype.registerMenus = function (registry) {
        var e_1, _a, e_2, _b;
        var _this = this;
        try {
            for (var _c = __values(MenuRegistry.getMenuItems(7)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var item = _d.value;
                var commandId = this.commands.validate(item.command.id);
                if (commandId) {
                    var menuPath = __spread(browser_1.EDITOR_CONTEXT_MENU, [(item.group || '')]);
                    registry.registerMenuAction(menuPath, { commandId: commandId });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        registry.registerSubmenu(MonacoMenus.SELECTION, 'Selection');
        var _loop_1 = function (group) {
            group.actions.forEach(function (action, index) {
                var commandId = _this.commands.validate(action);
                if (commandId) {
                    var path = __spread(MonacoMenus.SELECTION, [group.id]);
                    var order = index.toString();
                    registry.registerMenuAction(path, { commandId: commandId, order: order });
                }
            });
        };
        try {
            for (var _e = __values(MonacoMenus.SELECTION_GROUPS), _f = _e.next(); !_f.done; _f = _e.next()) {
                var group = _f.value;
                _loop_1(group);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoEditorMenuContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry)),
        __metadata("design:paramtypes", [monaco_command_registry_1.MonacoCommandRegistry])
    ], MonacoEditorMenuContribution);
    return MonacoEditorMenuContribution;
}());
exports.MonacoEditorMenuContribution = MonacoEditorMenuContribution;
//# sourceMappingURL=monaco-menu.js.map
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var browser_1 = require("@theia/core/lib/browser");
var console_manager_1 = require("./console-manager");
var console_keybinding_contexts_1 = require("./console-keybinding-contexts");
var console_content_widget_1 = require("./console-content-widget");
var ConsoleCommands;
(function (ConsoleCommands) {
    ConsoleCommands.SELECT_ALL = {
        id: 'console.selectAll'
    };
    ConsoleCommands.COLLAPSE_ALL = {
        id: 'console.collapseAll'
    };
    ConsoleCommands.CLEAR = {
        id: 'console.clear'
    };
    ConsoleCommands.EXECUTE = {
        id: 'console.execute'
    };
    ConsoleCommands.NAVIGATE_BACK = {
        id: 'console.navigatePrevious'
    };
    ConsoleCommands.NAVIGATE_FORWARD = {
        id: 'console.navigateNext'
    };
})(ConsoleCommands = exports.ConsoleCommands || (exports.ConsoleCommands = {}));
var ConsoleContextMenu;
(function (ConsoleContextMenu) {
    ConsoleContextMenu.CLIPBOARD = __spread(console_content_widget_1.ConsoleContentWidget.CONTEXT_MENU, ['1_clipboard']);
    ConsoleContextMenu.CLEAR = __spread(console_content_widget_1.ConsoleContentWidget.CONTEXT_MENU, ['2_clear']);
})(ConsoleContextMenu = exports.ConsoleContextMenu || (exports.ConsoleContextMenu = {}));
var ConsoleContribution = /** @class */ (function () {
    function ConsoleContribution() {
    }
    ConsoleContribution.prototype.initialize = function () { };
    ConsoleContribution.prototype.registerCommands = function (commands) {
        commands.registerCommand(ConsoleCommands.SELECT_ALL, this.newCommandHandler(function (console) { return console.selectAll(); }));
        commands.registerCommand(ConsoleCommands.COLLAPSE_ALL, this.newCommandHandler(function (console) { return console.collapseAll(); }));
        commands.registerCommand(ConsoleCommands.CLEAR, this.newCommandHandler(function (console) { return console.clear(); }));
        commands.registerCommand(ConsoleCommands.EXECUTE, this.newCommandHandler(function (console) { return console.execute(); }));
        commands.registerCommand(ConsoleCommands.NAVIGATE_BACK, this.newCommandHandler(function (console) { return console.navigateBack(); }));
        commands.registerCommand(ConsoleCommands.NAVIGATE_FORWARD, this.newCommandHandler(function (console) { return console.navigateForward(); }));
    };
    ConsoleContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: ConsoleCommands.SELECT_ALL.id,
            keybinding: 'ctrlcmd+a',
            context: console_keybinding_contexts_1.ConsoleKeybindingContexts.consoleContentFocus
        });
        keybindings.registerKeybinding({
            command: ConsoleCommands.EXECUTE.id,
            keybinding: 'enter',
            context: console_keybinding_contexts_1.ConsoleKeybindingContexts.consoleInputFocus
        });
        keybindings.registerKeybinding({
            command: ConsoleCommands.NAVIGATE_BACK.id,
            keybinding: 'up',
            context: console_keybinding_contexts_1.ConsoleKeybindingContexts.consoleNavigationBackEnabled
        });
        keybindings.registerKeybinding({
            command: ConsoleCommands.NAVIGATE_FORWARD.id,
            keybinding: 'down',
            context: console_keybinding_contexts_1.ConsoleKeybindingContexts.consoleNavigationForwardEnabled
        });
    };
    ConsoleContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(ConsoleContextMenu.CLIPBOARD, {
            commandId: browser_1.CommonCommands.COPY.id,
            label: 'Copy',
            order: 'a1',
        });
        menus.registerMenuAction(ConsoleContextMenu.CLIPBOARD, {
            commandId: ConsoleCommands.SELECT_ALL.id,
            label: 'Select All',
            order: 'a2'
        });
        menus.registerMenuAction(ConsoleContextMenu.CLIPBOARD, {
            commandId: ConsoleCommands.COLLAPSE_ALL.id,
            label: 'Collapse All',
            order: 'a3'
        });
        menus.registerMenuAction(ConsoleContextMenu.CLEAR, {
            commandId: ConsoleCommands.CLEAR.id,
            label: 'Clear Console'
        });
    };
    ConsoleContribution.prototype.newCommandHandler = function (execute) {
        return new ConsoleCommandHandler(this.manager, execute);
    };
    __decorate([
        inversify_1.inject(console_manager_1.ConsoleManager),
        __metadata("design:type", console_manager_1.ConsoleManager)
    ], ConsoleContribution.prototype, "manager", void 0);
    ConsoleContribution = __decorate([
        inversify_1.injectable()
    ], ConsoleContribution);
    return ConsoleContribution;
}());
exports.ConsoleContribution = ConsoleContribution;
var ConsoleCommandHandler = /** @class */ (function () {
    function ConsoleCommandHandler(manager, doExecute) {
        this.manager = manager;
        this.doExecute = doExecute;
    }
    ConsoleCommandHandler.prototype.isEnabled = function () {
        return !!this.manager.currentConsole;
    };
    ConsoleCommandHandler.prototype.isVisible = function () {
        return !!this.manager.currentConsole;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ConsoleCommandHandler.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentConsole = this.manager.currentConsole;
        if (currentConsole) {
            return this.doExecute.apply(this, __spread([currentConsole], args));
        }
    };
    return ConsoleCommandHandler;
}());
exports.ConsoleCommandHandler = ConsoleCommandHandler;
//# sourceMappingURL=console-contribution.js.map
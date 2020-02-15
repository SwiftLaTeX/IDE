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
var common_1 = require("../../common");
var keybinding_1 = require("../keybinding");
var quick_open_model_1 = require("./quick-open-model");
var context_key_service_1 = require("../context-key-service");
var quick_command_contribution_1 = require("./quick-command-contribution");
var core_preferences_1 = require("../core-preferences");
var QuickCommandService = /** @class */ (function () {
    function QuickCommandService() {
        this.prefix = '>';
        this.description = 'Quick Command';
        // The list of exempted commands not to be displayed in the recently used list.
        this.exemptedCommands = [
            quick_command_contribution_1.CLEAR_COMMAND_HISTORY,
        ];
        this.contexts = new Map();
    }
    QuickCommandService.prototype.pushCommandContext = function (commandId, when) {
        var contexts = this.contexts.get(commandId) || [];
        contexts.push(when);
        this.contexts.set(commandId, contexts);
        return common_1.Disposable.create(function () {
            var index = contexts.indexOf(when);
            if (index !== -1) {
                contexts.splice(index, 1);
            }
        });
    };
    /** Initialize this quick open model with the commands. */
    QuickCommandService.prototype.init = function () {
        var _a;
        var _this = this;
        // let's compute the items here to do it in the context of the currently activeElement
        this.items = [];
        var _b = this.getCommands(), recent = _b.recent, other = _b.other;
        (_a = this.items).push.apply(_a, __spread(recent.map(function (command, index) {
            return new CommandQuickOpenItem(command, _this.commands, _this.keybindings, {
                groupLabel: index === 0 ? 'recently used' : '',
                showBorder: false,
            });
        }), other.map(function (command, index) {
            return new CommandQuickOpenItem(command, _this.commands, _this.keybindings, {
                groupLabel: recent.length <= 0 ? '' : index === 0 ? 'other commands' : '',
                showBorder: recent.length <= 0 ? false : index === 0 ? true : false,
            });
        })));
    };
    QuickCommandService.prototype.onType = function (lookFor, acceptor) {
        acceptor(this.items);
    };
    QuickCommandService.prototype.getModel = function () {
        return this;
    };
    QuickCommandService.prototype.getOptions = function () {
        return { fuzzyMatchLabel: true };
    };
    /**
     * Get the list of recently used and other commands.
     *
     * @returns the list of recently used commands and other commands.
     */
    QuickCommandService.prototype.getCommands = function () {
        var _this = this;
        // Get the list of recent commands.
        var recentCommands = this.commands.recent;
        // Get the list of all valid commands.
        var allCommands = this.getValidCommands(this.commands.commands);
        // Get the max history limit.
        var limit = this.corePreferences['workbench.commandPalette.history'];
        // Build the list of recent commands.
        var rCommands = [];
        recentCommands.forEach(function (r) {
            // Opt out of displaying the recently used list.
            if (limit === 0) {
                return;
            }
            // Determine if the command is exempted from display.
            var exempted = _this.exemptedCommands.some(function (c) { return common_1.Command.equals(r, c); });
            // Determine if the command currently exists in the list of all available commands.
            var exists = allCommands.some(function (c) { return common_1.Command.equals(r, c); });
            // Add the recently used item to the list.
            if (exists && !exempted && rCommands.length < limit) {
                rCommands.push(r);
            }
        });
        // Build the list of other commands.
        var oCommands = [];
        allCommands.forEach(function (a) {
            var exists = rCommands.some(function (c) { return common_1.Command.equals(a, c); });
            // If the command does not exist in the recently used list, add it to the other list.
            if (!exists) {
                oCommands.push(a);
            }
        });
        // Normalize the list of recent commands.
        var recent = this.normalize(rCommands);
        // Normalize, and sort the list of other commands.
        var other = this.sort(this.normalize(oCommands));
        return { recent: recent, other: other };
    };
    /**
     * Normalizes a list of commands.
     * Normalization includes obtaining commands that have labels and are visible.
     *
     * @param commands the list of commands.
     * @returns the list of normalized commands.
     */
    QuickCommandService.prototype.normalize = function (commands) {
        var _this = this;
        return commands.filter(function (a) { return a.label && _this.commands.isVisible(a.id); });
    };
    /**
     * Sorts a list of commands alphabetically.
     *
     * @param commands the list of commands.
     * @returns the list of sorted commands.
     */
    QuickCommandService.prototype.sort = function (commands) {
        return commands.sort(function (a, b) { return common_1.Command.compareCommands(a, b); });
    };
    /**
     * Get the list of valid commands.
     *
     * @param commands the list of raw commands.
     * @returns the list of valid commands.
     */
    QuickCommandService.prototype.getValidCommands = function (raw) {
        var _this = this;
        var valid = [];
        raw.forEach(function (command) {
            if (command.label) {
                var contexts = _this.contexts.get(command.id);
                if (!contexts || contexts.some(function (when) { return _this.contextKeyService.match(when); })) {
                    valid.push(command);
                }
            }
        });
        return valid;
    };
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], QuickCommandService.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(keybinding_1.KeybindingRegistry),
        __metadata("design:type", keybinding_1.KeybindingRegistry)
    ], QuickCommandService.prototype, "keybindings", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], QuickCommandService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(core_preferences_1.CorePreferences),
        __metadata("design:type", Object)
    ], QuickCommandService.prototype, "corePreferences", void 0);
    QuickCommandService = __decorate([
        inversify_1.injectable()
    ], QuickCommandService);
    return QuickCommandService;
}());
exports.QuickCommandService = QuickCommandService;
var CommandQuickOpenItem = /** @class */ (function (_super) {
    __extends(CommandQuickOpenItem, _super);
    function CommandQuickOpenItem(command, commands, keybindings, commandOptions) {
        var _this = _super.call(this, commandOptions) || this;
        _this.command = command;
        _this.commands = commands;
        _this.keybindings = keybindings;
        _this.commandOptions = commandOptions;
        _this.activeElement = window.document.activeElement;
        _this.hidden = !_this.commands.getActiveHandler(_this.command.id);
        return _this;
    }
    CommandQuickOpenItem.prototype.getLabel = function () {
        return (this.command.category)
            ? this.command.category + ": " + this.command.label
            : this.command.label;
    };
    CommandQuickOpenItem.prototype.isHidden = function () {
        return this.hidden;
    };
    CommandQuickOpenItem.prototype.getIconClass = function () {
        var toggledHandler = this.commands.getToggledHandler(this.command.id);
        if (toggledHandler) {
            return 'fa fa-check';
        }
        return _super.prototype.getIconClass.call(this);
    };
    CommandQuickOpenItem.prototype.getKeybinding = function () {
        var bindings = this.keybindings.getKeybindingsForCommand(this.command.id);
        return bindings ? bindings[0] : undefined;
    };
    CommandQuickOpenItem.prototype.run = function (mode) {
        var _this = this;
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        // allow the quick open widget to close itself
        setTimeout(function () {
            // reset focus on the previously active element.
            _this.activeElement.focus({ preventScroll: true });
            _this.commands.executeCommand(_this.command.id);
        }, 50);
        return true;
    };
    return CommandQuickOpenItem;
}(quick_open_model_1.QuickOpenGroupItem));
exports.CommandQuickOpenItem = CommandQuickOpenItem;
var CommandQuickOpenContribution = /** @class */ (function () {
    function CommandQuickOpenContribution() {
    }
    CommandQuickOpenContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.commandQuickOpenHandler);
    };
    __decorate([
        inversify_1.inject(QuickCommandService),
        __metadata("design:type", QuickCommandService)
    ], CommandQuickOpenContribution.prototype, "commandQuickOpenHandler", void 0);
    CommandQuickOpenContribution = __decorate([
        inversify_1.injectable()
    ], CommandQuickOpenContribution);
    return CommandQuickOpenContribution;
}());
exports.CommandQuickOpenContribution = CommandQuickOpenContribution;
//# sourceMappingURL=quick-command-service.js.map
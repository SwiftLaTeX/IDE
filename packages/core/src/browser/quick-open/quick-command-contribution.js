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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var prefix_quick_open_service_1 = require("./prefix-quick-open-service");
var common_frontend_contribution_1 = require("../common-frontend-contribution");
exports.quickCommand = {
    id: 'workbench.action.showCommands'
};
exports.CLEAR_COMMAND_HISTORY = {
    id: 'clear.command.history',
    label: 'Clear Command History'
};
var QuickCommandFrontendContribution = /** @class */ (function () {
    function QuickCommandFrontendContribution() {
    }
    QuickCommandFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(exports.quickCommand, {
            execute: function () { return _this.quickOpenService.open('>'); }
        });
        commands.registerCommand(exports.CLEAR_COMMAND_HISTORY, {
            execute: function () { return commands.clearCommandHistory(); },
        });
    };
    QuickCommandFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(common_frontend_contribution_1.CommonMenus.VIEW_PRIMARY, {
            commandId: exports.quickCommand.id,
            label: 'Find Command...'
        });
    };
    QuickCommandFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: exports.quickCommand.id,
            keybinding: 'f1'
        });
        keybindings.registerKeybinding({
            command: exports.quickCommand.id,
            keybinding: 'ctrlcmd+shift+p'
        });
    };
    __decorate([
        inversify_1.inject(prefix_quick_open_service_1.PrefixQuickOpenService),
        __metadata("design:type", prefix_quick_open_service_1.PrefixQuickOpenService)
    ], QuickCommandFrontendContribution.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(prefix_quick_open_service_1.QuickOpenHandlerRegistry),
        __metadata("design:type", prefix_quick_open_service_1.QuickOpenHandlerRegistry)
    ], QuickCommandFrontendContribution.prototype, "quickOpenHandlerRegistry", void 0);
    QuickCommandFrontendContribution = __decorate([
        inversify_1.injectable()
    ], QuickCommandFrontendContribution);
    return QuickCommandFrontendContribution;
}());
exports.QuickCommandFrontendContribution = QuickCommandFrontendContribution;
//# sourceMappingURL=quick-command-contribution.js.map
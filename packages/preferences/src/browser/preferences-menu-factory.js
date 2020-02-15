"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var widgets_1 = require("@phosphor/widgets");
var commands_1 = require("@phosphor/commands");
var strings_1 = require("@theia/core/lib/common/strings");
var PreferencesMenuFactory = /** @class */ (function () {
    function PreferencesMenuFactory() {
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PreferencesMenuFactory.prototype.createPreferenceContextMenu = function (id, savedPreference, property, execute) {
        var commands = new commands_1.CommandRegistry();
        var menu = new widgets_1.Menu({ commands: commands });
        if (property) {
            var enumConst = property.enum;
            if (enumConst) {
                enumConst.map(strings_1.escapeInvisibleChars)
                    .forEach(function (enumValue) {
                    var commandId = id + '-' + enumValue;
                    if (!commands.hasCommand(commandId)) {
                        commands.addCommand(commandId, {
                            label: enumValue,
                            iconClass: strings_1.escapeInvisibleChars(savedPreference) === enumValue || !savedPreference && property.defaultValue === enumValue ? 'fa fa-check' : '',
                            execute: function () { return execute(id, strings_1.unescapeInvisibleChars(enumValue)); }
                        });
                        menu.addItem({
                            type: 'command',
                            command: commandId
                        });
                    }
                });
            }
            else if (property.type && property.type === 'boolean') {
                var commandTrue = id + '-true';
                commands.addCommand(commandTrue, {
                    label: 'true',
                    iconClass: savedPreference === true || savedPreference === 'true' || savedPreference === undefined && property.defaultValue === true ? 'fa fa-check' : '',
                    execute: function () { return execute(id, true); }
                });
                menu.addItem({
                    type: 'command',
                    command: commandTrue
                });
                var commandFalse = id + '-false';
                commands.addCommand(commandFalse, {
                    label: 'false',
                    iconClass: savedPreference === false || savedPreference === 'false' || savedPreference === undefined && property.defaultValue === false ? 'fa fa-check' : '',
                    execute: function () { return execute(id, false); }
                });
                menu.addItem({
                    type: 'command',
                    command: commandFalse
                });
            }
            else {
                var commandId = id + '-stringValue';
                commands.addCommand(commandId, {
                    label: 'Add Value',
                    execute: function () { return execute(id, property.defaultValue ? property.defaultValue : ''); }
                });
                menu.addItem({
                    type: 'command',
                    command: commandId
                });
            }
        }
        return menu;
    };
    PreferencesMenuFactory = __decorate([
        inversify_1.injectable()
    ], PreferencesMenuFactory);
    return PreferencesMenuFactory;
}());
exports.PreferencesMenuFactory = PreferencesMenuFactory;
//# sourceMappingURL=preferences-menu-factory.js.map
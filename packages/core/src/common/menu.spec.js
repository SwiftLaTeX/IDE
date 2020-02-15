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
var command_1 = require("./command");
var menu_1 = require("./menu");
var chai = require("chai");
var expect = chai.expect;
describe('menu-model-registry', function () {
    describe('01 #register', function () {
        it('Should allow to register menu actions.', function () {
            var fileMenu = ['main', 'File'];
            var fileOpenMenu = __spread(fileMenu, ['0_open']);
            var service = createMenuRegistry({
                registerMenus: function (menuRegistry) {
                    menuRegistry.registerSubmenu(fileMenu, 'File');
                    menuRegistry.registerMenuAction(fileOpenMenu, {
                        commandId: 'open'
                    });
                    menuRegistry.registerMenuAction(fileOpenMenu, {
                        commandId: 'open.with'
                    });
                }
            }, {
                registerCommands: function (reg) {
                    reg.registerCommand({
                        id: 'open',
                        label: 'A'
                    });
                    reg.registerCommand({
                        id: 'open.with',
                        label: 'B'
                    });
                }
            });
            var all = service.getMenu();
            var main = all.children[0];
            expect(main.children.length).equals(1);
            expect(main.id, 'main');
            expect(all.children.length).equals(1);
            var file = main.children[0];
            expect(file.children.length).equals(1);
            expect(file.label, 'File');
            var openGroup = file.children[0];
            expect(openGroup.children.length).equals(2);
            // eslint-disable-next-line no-unused-expressions
            expect(openGroup.label).undefined;
        });
    });
});
function createMenuRegistry(menuContrib, commandContrib) {
    var cmdReg = new command_1.CommandRegistry({ getContributions: function () { return [commandContrib]; } });
    cmdReg.onStart();
    var menuReg = new menu_1.MenuModelRegistry({ getContributions: function () { return [menuContrib]; } }, cmdReg);
    menuReg.onStart();
    return menuReg;
}
//# sourceMappingURL=menu.spec.js.map
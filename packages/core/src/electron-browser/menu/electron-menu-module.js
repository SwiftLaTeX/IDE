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
var common_1 = require("../../common");
var browser_1 = require("../../browser");
var electron_main_menu_factory_1 = require("./electron-main-menu-factory");
var electron_context_menu_renderer_1 = require("./electron-context-menu-renderer");
var electron_menu_contribution_1 = require("./electron-menu-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a;
    bind(electron_main_menu_factory_1.ElectronMainMenuFactory).toSelf().inSingletonScope();
    bind(browser_1.ContextMenuRenderer).to(electron_context_menu_renderer_1.ElectronContextMenuRenderer).inSingletonScope();
    bind(browser_1.KeybindingContext).toConstantValue({
        id: 'theia.context',
        isEnabled: true
    });
    bind(electron_menu_contribution_1.ElectronMenuContribution).toSelf().inSingletonScope();
    try {
        for (var _b = __values([browser_1.FrontendApplicationContribution, browser_1.KeybindingContribution, common_1.CommandContribution, common_1.MenuContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var serviceIdentifier = _c.value;
            bind(serviceIdentifier).toService(electron_menu_contribution_1.ElectronMenuContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
//# sourceMappingURL=electron-menu-module.js.map
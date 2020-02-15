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
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var blame_contribution_1 = require("./blame-contribution");
var blame_decorator_1 = require("./blame-decorator");
var blame_manager_1 = require("./blame-manager");
function bindBlame(bind) {
    var e_1, _a;
    bind(blame_contribution_1.BlameContribution).toSelf().inSingletonScope();
    bind(blame_manager_1.BlameManager).toSelf().inSingletonScope();
    bind(blame_decorator_1.BlameDecorator).toSelf().inSingletonScope();
    try {
        for (var _b = __values([common_1.CommandContribution, browser_1.KeybindingContribution, common_1.MenuContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var serviceIdentifier = _c.value;
            bind(serviceIdentifier).toService(blame_contribution_1.BlameContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(blame_contribution_1.BlameAnnotationsKeybindingContext).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContext).toService(blame_contribution_1.BlameAnnotationsKeybindingContext);
}
exports.bindBlame = bindBlame;
//# sourceMappingURL=blame-module.js.map
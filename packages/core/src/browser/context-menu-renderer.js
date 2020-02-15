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
function toAnchor(anchor) {
    return anchor instanceof HTMLElement ? { x: anchor.offsetLeft, y: anchor.offsetTop } : anchor;
}
exports.toAnchor = toAnchor;
exports.ContextMenuRenderer = Symbol('ContextMenuRenderer');
var RenderContextMenuOptions;
(function (RenderContextMenuOptions) {
    function resolve(arg, anchor, onHide) {
        var menuPath;
        var args;
        if (Array.isArray(arg)) {
            menuPath = arg;
            args = [anchor];
        }
        else {
            menuPath = arg.menuPath;
            anchor = arg.anchor;
            onHide = arg.onHide;
            args = arg.args ? __spread(arg.args, [anchor]) : [anchor];
        }
        return {
            menuPath: menuPath,
            anchor: anchor,
            onHide: onHide,
            args: args
        };
    }
    RenderContextMenuOptions.resolve = resolve;
})(RenderContextMenuOptions = exports.RenderContextMenuOptions || (exports.RenderContextMenuOptions = {}));
//# sourceMappingURL=context-menu-renderer.js.map
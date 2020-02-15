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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var browser_1 = require("../../browser");
var electron_main_menu_factory_1 = require("./electron-main-menu-factory");
var context_menu_context_1 = require("../../browser/menu/context-menu-context");
var ElectronContextMenuRenderer = /** @class */ (function () {
    function ElectronContextMenuRenderer(menuFactory) {
        this.menuFactory = menuFactory;
    }
    ElectronContextMenuRenderer.prototype.render = function (arg, arg2, arg3) {
        var _a = browser_1.RenderContextMenuOptions.resolve(arg, arg2, arg3), menuPath = _a.menuPath, args = _a.args, onHide = _a.onHide;
        var menu = this.menuFactory.createContextMenu(menuPath, args);
        menu.popup({});
        // native context menu stops the event loop, so there is no keyboard events
        this.context.resetAltPressed();
        if (onHide) {
            menu.once('menu-will-close', function () { return onHide(); });
        }
    };
    __decorate([
        inversify_1.inject(context_menu_context_1.ContextMenuContext),
        __metadata("design:type", context_menu_context_1.ContextMenuContext)
    ], ElectronContextMenuRenderer.prototype, "context", void 0);
    ElectronContextMenuRenderer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(electron_main_menu_factory_1.ElectronMainMenuFactory)),
        __metadata("design:paramtypes", [electron_main_menu_factory_1.ElectronMainMenuFactory])
    ], ElectronContextMenuRenderer);
    return ElectronContextMenuRenderer;
}());
exports.ElectronContextMenuRenderer = ElectronContextMenuRenderer;
//# sourceMappingURL=electron-context-menu-renderer.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var os_1 = require("../../common/os");
var ContextMenuContext = /** @class */ (function () {
    function ContextMenuContext() {
        var _this = this;
        this._altPressed = false;
        document.addEventListener('keydown', function (e) { return _this.setAltPressed(e.altKey || (os_1.OS.type() !== os_1.OS.Type.OSX && e.shiftKey)); }, true);
        document.addEventListener('keyup', function () { return _this.resetAltPressed(); }, true);
    }
    Object.defineProperty(ContextMenuContext.prototype, "altPressed", {
        get: function () {
            return this._altPressed;
        },
        enumerable: true,
        configurable: true
    });
    ContextMenuContext.prototype.setAltPressed = function (altPressed) {
        this._altPressed = altPressed;
    };
    ContextMenuContext.prototype.resetAltPressed = function () {
        this.setAltPressed(false);
    };
    ContextMenuContext = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ContextMenuContext);
    return ContextMenuContext;
}());
exports.ContextMenuContext = ContextMenuContext;
//# sourceMappingURL=context-menu-context.js.map
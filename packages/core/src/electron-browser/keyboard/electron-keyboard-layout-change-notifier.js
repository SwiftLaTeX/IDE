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
var electron_1 = require("electron");
var event_1 = require("../../common/event");
/**
 * Keyboard layout changes are detected by the native-keymap package. This must happen in the
 * main process of Electron. The events are sent to the renderer process using Electron IPC.
 */
var ElectronKeyboardLayoutChangeNotifier = /** @class */ (function () {
    function ElectronKeyboardLayoutChangeNotifier() {
        this.nativeLayoutChanged = new event_1.Emitter();
    }
    Object.defineProperty(ElectronKeyboardLayoutChangeNotifier.prototype, "onDidChangeNativeLayout", {
        get: function () {
            return this.nativeLayoutChanged.event;
        },
        enumerable: true,
        configurable: true
    });
    ElectronKeyboardLayoutChangeNotifier.prototype.initialize = function () {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        electron_1.ipcRenderer.on('keyboardLayoutChanged', function (event, newLayout) { return _this.nativeLayoutChanged.fire(newLayout); });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ElectronKeyboardLayoutChangeNotifier.prototype, "initialize", null);
    ElectronKeyboardLayoutChangeNotifier = __decorate([
        inversify_1.injectable()
    ], ElectronKeyboardLayoutChangeNotifier);
    return ElectronKeyboardLayoutChangeNotifier;
}());
exports.ElectronKeyboardLayoutChangeNotifier = ElectronKeyboardLayoutChangeNotifier;
//# sourceMappingURL=electron-keyboard-layout-change-notifier.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var quick_file_open_1 = require("./quick-file-open");
var QuickFileOpenFrontendContribution = /** @class */ (function () {
    function QuickFileOpenFrontendContribution() {
    }
    QuickFileOpenFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(quick_file_open_1.quickFileOpen, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var fileURI;
                if (args) {
                    _a = __read(args, 1), fileURI = _a[0];
                }
                if (fileURI) {
                    _this.quickFileOpenService.openFile(new uri_1.default(fileURI));
                }
                else {
                    _this.quickFileOpenService.open();
                }
            },
            isEnabled: function () { return _this.quickFileOpenService.isEnabled(); }
        });
    };
    QuickFileOpenFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: quick_file_open_1.quickFileOpen.id,
            keybinding: 'ctrlcmd+p'
        });
    };
    QuickFileOpenFrontendContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.quickFileOpenService, true);
    };
    __decorate([
        inversify_1.inject(quick_file_open_1.QuickFileOpenService),
        __metadata("design:type", quick_file_open_1.QuickFileOpenService)
    ], QuickFileOpenFrontendContribution.prototype, "quickFileOpenService", void 0);
    QuickFileOpenFrontendContribution = __decorate([
        inversify_1.injectable()
    ], QuickFileOpenFrontendContribution);
    return QuickFileOpenFrontendContribution;
}());
exports.QuickFileOpenFrontendContribution = QuickFileOpenFrontendContribution;
//# sourceMappingURL=quick-file-open-contribution.js.map
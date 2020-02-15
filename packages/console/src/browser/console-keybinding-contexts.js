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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var console_manager_1 = require("./console-manager");
var ConsoleKeybindingContexts;
(function (ConsoleKeybindingContexts) {
    /**
     * ID of a keybinding context that is enabled when the console content has the focus.
     */
    ConsoleKeybindingContexts.consoleContentFocus = 'consoleContentFocus';
    /**
     * ID of a keybinding context that is enabled when the console input has the focus.
     */
    ConsoleKeybindingContexts.consoleInputFocus = 'consoleInputFocus';
    /**
     * ID of a keybinding context that is enabled when the console history navigation back is enabled.
     */
    ConsoleKeybindingContexts.consoleNavigationBackEnabled = 'consoleNavigationBackEnabled';
    /**
     * ID of a keybinding context that is enabled when the console history navigation forward is enabled.
     */
    ConsoleKeybindingContexts.consoleNavigationForwardEnabled = 'consoleNavigationForwardEnabled';
})(ConsoleKeybindingContexts = exports.ConsoleKeybindingContexts || (exports.ConsoleKeybindingContexts = {}));
var ConsoleInputFocusContext = /** @class */ (function () {
    function ConsoleInputFocusContext() {
        this.id = ConsoleKeybindingContexts.consoleInputFocus;
    }
    ConsoleInputFocusContext.prototype.isEnabled = function () {
        var console = this.manager.activeConsole;
        return !!console && this.isConsoleEnabled(console);
    };
    ConsoleInputFocusContext.prototype.isConsoleEnabled = function (console) {
        return console.hasInputFocus();
    };
    __decorate([
        inversify_1.inject(console_manager_1.ConsoleManager),
        __metadata("design:type", console_manager_1.ConsoleManager)
    ], ConsoleInputFocusContext.prototype, "manager", void 0);
    ConsoleInputFocusContext = __decorate([
        inversify_1.injectable()
    ], ConsoleInputFocusContext);
    return ConsoleInputFocusContext;
}());
exports.ConsoleInputFocusContext = ConsoleInputFocusContext;
var ConsoleContentFocusContext = /** @class */ (function (_super) {
    __extends(ConsoleContentFocusContext, _super);
    function ConsoleContentFocusContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = ConsoleKeybindingContexts.consoleContentFocus;
        return _this;
    }
    ConsoleContentFocusContext.prototype.isConsoleEnabled = function (console) {
        return !console.input.isFocused();
    };
    ConsoleContentFocusContext = __decorate([
        inversify_1.injectable()
    ], ConsoleContentFocusContext);
    return ConsoleContentFocusContext;
}(ConsoleInputFocusContext));
exports.ConsoleContentFocusContext = ConsoleContentFocusContext;
var ConsoleNavigationBackEnabled = /** @class */ (function (_super) {
    __extends(ConsoleNavigationBackEnabled, _super);
    function ConsoleNavigationBackEnabled() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = ConsoleKeybindingContexts.consoleNavigationBackEnabled;
        return _this;
    }
    ConsoleNavigationBackEnabled.prototype.isConsoleEnabled = function (console) {
        if (!_super.prototype.isConsoleEnabled.call(this, console)) {
            return false;
        }
        var editor = console.input.getControl();
        return editor.getPosition().equals({ lineNumber: 1, column: 1 });
    };
    ConsoleNavigationBackEnabled = __decorate([
        inversify_1.injectable()
    ], ConsoleNavigationBackEnabled);
    return ConsoleNavigationBackEnabled;
}(ConsoleInputFocusContext));
exports.ConsoleNavigationBackEnabled = ConsoleNavigationBackEnabled;
var ConsoleNavigationForwardEnabled = /** @class */ (function (_super) {
    __extends(ConsoleNavigationForwardEnabled, _super);
    function ConsoleNavigationForwardEnabled() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = ConsoleKeybindingContexts.consoleNavigationForwardEnabled;
        return _this;
    }
    ConsoleNavigationForwardEnabled.prototype.isConsoleEnabled = function (console) {
        if (!_super.prototype.isConsoleEnabled.call(this, console)) {
            return false;
        }
        var editor = console.input.getControl();
        var model = console.input.getControl().getModel();
        var lineNumber = model.getLineCount();
        var column = model.getLineMaxColumn(lineNumber);
        return editor.getPosition().equals({ lineNumber: lineNumber, column: column });
    };
    ConsoleNavigationForwardEnabled = __decorate([
        inversify_1.injectable()
    ], ConsoleNavigationForwardEnabled);
    return ConsoleNavigationForwardEnabled;
}(ConsoleInputFocusContext));
exports.ConsoleNavigationForwardEnabled = ConsoleNavigationForwardEnabled;
//# sourceMappingURL=console-keybinding-contexts.js.map
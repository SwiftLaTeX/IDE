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
var debug_session_manager_1 = require("./debug-session-manager");
var debug_editor_service_1 = require("./editor/debug-editor-service");
var DebugKeybindingContexts;
(function (DebugKeybindingContexts) {
    DebugKeybindingContexts.inDebugMode = 'inDebugMode';
    DebugKeybindingContexts.breakpointWidgetInputFocus = 'breakpointWidgetInputFocus';
    DebugKeybindingContexts.breakpointWidgetInputStrictFocus = 'breakpointWidgetInputStrictFocus';
})(DebugKeybindingContexts = exports.DebugKeybindingContexts || (exports.DebugKeybindingContexts = {}));
var InDebugModeContext = /** @class */ (function () {
    function InDebugModeContext() {
        this.id = DebugKeybindingContexts.inDebugMode;
    }
    InDebugModeContext.prototype.isEnabled = function () {
        return this.manager.inDebugMode;
    };
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], InDebugModeContext.prototype, "manager", void 0);
    InDebugModeContext = __decorate([
        inversify_1.injectable()
    ], InDebugModeContext);
    return InDebugModeContext;
}());
exports.InDebugModeContext = InDebugModeContext;
var BreakpointWidgetInputFocusContext = /** @class */ (function () {
    function BreakpointWidgetInputFocusContext() {
        this.id = DebugKeybindingContexts.breakpointWidgetInputFocus;
    }
    BreakpointWidgetInputFocusContext.prototype.isEnabled = function () {
        var model = this.editors.model;
        return !!model && !!model.breakpointWidget.position && this.isFocused(model);
    };
    BreakpointWidgetInputFocusContext.prototype.isFocused = function (model) {
        return !!model.breakpointWidget.input && model.breakpointWidget.input.isFocused({ strict: true });
    };
    __decorate([
        inversify_1.inject(debug_editor_service_1.DebugEditorService),
        __metadata("design:type", debug_editor_service_1.DebugEditorService)
    ], BreakpointWidgetInputFocusContext.prototype, "editors", void 0);
    BreakpointWidgetInputFocusContext = __decorate([
        inversify_1.injectable()
    ], BreakpointWidgetInputFocusContext);
    return BreakpointWidgetInputFocusContext;
}());
exports.BreakpointWidgetInputFocusContext = BreakpointWidgetInputFocusContext;
var BreakpointWidgetInputStrictFocusContext = /** @class */ (function (_super) {
    __extends(BreakpointWidgetInputStrictFocusContext, _super);
    function BreakpointWidgetInputStrictFocusContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = DebugKeybindingContexts.breakpointWidgetInputStrictFocus;
        return _this;
    }
    BreakpointWidgetInputStrictFocusContext.prototype.isFocused = function (model) {
        return _super.prototype.isFocused.call(this, model) || model.editor.isFocused({ strict: true });
    };
    BreakpointWidgetInputStrictFocusContext = __decorate([
        inversify_1.injectable()
    ], BreakpointWidgetInputStrictFocusContext);
    return BreakpointWidgetInputStrictFocusContext;
}(BreakpointWidgetInputFocusContext));
exports.BreakpointWidgetInputStrictFocusContext = BreakpointWidgetInputStrictFocusContext;
//# sourceMappingURL=debug-keybinding-contexts.js.map
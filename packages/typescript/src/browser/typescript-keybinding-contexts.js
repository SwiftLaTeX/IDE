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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/editor/lib/browser");
var common_1 = require("../common");
var TypeScriptKeybindingContexts;
(function (TypeScriptKeybindingContexts) {
    TypeScriptKeybindingContexts.typescriptEditorTextFocus = 'typescriptEditorTextFocus';
})(TypeScriptKeybindingContexts = exports.TypeScriptKeybindingContexts || (exports.TypeScriptKeybindingContexts = {}));
var TypeScriptEditorTextFocusContext = /** @class */ (function (_super) {
    __extends(TypeScriptEditorTextFocusContext, _super);
    function TypeScriptEditorTextFocusContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = TypeScriptKeybindingContexts.typescriptEditorTextFocus;
        return _this;
    }
    TypeScriptEditorTextFocusContext.prototype.canHandle = function (widget) {
        return _super.prototype.canHandle.call(this, widget) && widget.editor.document.languageId === common_1.TYPESCRIPT_LANGUAGE_ID;
    };
    TypeScriptEditorTextFocusContext = __decorate([
        inversify_1.injectable()
    ], TypeScriptEditorTextFocusContext);
    return TypeScriptEditorTextFocusContext;
}(browser_1.EditorTextFocusContext));
exports.TypeScriptEditorTextFocusContext = TypeScriptEditorTextFocusContext;
//# sourceMappingURL=typescript-keybinding-contexts.js.map
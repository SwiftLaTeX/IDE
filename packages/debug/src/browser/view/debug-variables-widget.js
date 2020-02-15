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
var inversify_1 = require("inversify");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var debug_variables_source_1 = require("./debug-variables-source");
var debug_view_model_1 = require("./debug-view-model");
var DebugVariablesWidget = /** @class */ (function (_super) {
    __extends(DebugVariablesWidget, _super);
    function DebugVariablesWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugVariablesWidget_1 = DebugVariablesWidget;
    DebugVariablesWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugVariablesWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_variables_source_1.DebugVariablesSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugVariablesWidget_1).toSelf();
        return child;
    };
    DebugVariablesWidget.createWidget = function (parent) {
        return DebugVariablesWidget_1.createContainer(parent).get(DebugVariablesWidget_1);
    };
    DebugVariablesWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = 'debug:variables:' + this.viewModel.id;
        this.title.label = 'Variables';
        this.toDispose.push(this.variables);
        this.source = this.variables;
    };
    var DebugVariablesWidget_1;
    DebugVariablesWidget.CONTEXT_MENU = ['debug-variables-context-menu'];
    DebugVariablesWidget.EDIT_MENU = __spread(DebugVariablesWidget_1.CONTEXT_MENU, ['a_edit']);
    DebugVariablesWidget.WATCH_MENU = __spread(DebugVariablesWidget_1.CONTEXT_MENU, ['b_watch']);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugVariablesWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_variables_source_1.DebugVariablesSource),
        __metadata("design:type", debug_variables_source_1.DebugVariablesSource)
    ], DebugVariablesWidget.prototype, "variables", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugVariablesWidget.prototype, "init", null);
    DebugVariablesWidget = DebugVariablesWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugVariablesWidget);
    return DebugVariablesWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugVariablesWidget = DebugVariablesWidget;
//# sourceMappingURL=debug-variables-widget.js.map
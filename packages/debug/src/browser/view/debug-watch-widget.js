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
var debug_watch_source_1 = require("./debug-watch-source");
var debug_view_model_1 = require("./debug-view-model");
var DebugWatchWidget = /** @class */ (function (_super) {
    __extends(DebugWatchWidget, _super);
    function DebugWatchWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugWatchWidget_1 = DebugWatchWidget;
    DebugWatchWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugWatchWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_watch_source_1.DebugWatchSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugWatchWidget_1).toSelf();
        return child;
    };
    DebugWatchWidget.createWidget = function (parent) {
        return DebugWatchWidget_1.createContainer(parent).get(DebugWatchWidget_1);
    };
    DebugWatchWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = 'debug:watch:' + this.viewModel.id;
        this.title.label = 'Watch';
        this.toDispose.push(this.variables);
        this.source = this.variables;
    };
    var DebugWatchWidget_1;
    DebugWatchWidget.CONTEXT_MENU = ['debug-watch-context-menu'];
    DebugWatchWidget.EDIT_MENU = __spread(DebugWatchWidget_1.CONTEXT_MENU, ['a_edit']);
    DebugWatchWidget.REMOVE_MENU = __spread(DebugWatchWidget_1.CONTEXT_MENU, ['b_remove']);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugWatchWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_watch_source_1.DebugWatchSource),
        __metadata("design:type", debug_watch_source_1.DebugWatchSource)
    ], DebugWatchWidget.prototype, "variables", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugWatchWidget.prototype, "init", null);
    DebugWatchWidget = DebugWatchWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugWatchWidget);
    return DebugWatchWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugWatchWidget = DebugWatchWidget;
//# sourceMappingURL=debug-watch-widget.js.map
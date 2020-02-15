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
var browser_1 = require("@theia/core/lib/browser");
var debug_threads_widget_1 = require("./debug-threads-widget");
var debug_stack_frames_widget_1 = require("./debug-stack-frames-widget");
var debug_breakpoints_widget_1 = require("./debug-breakpoints-widget");
var debug_variables_widget_1 = require("./debug-variables-widget");
var debug_toolbar_widget_1 = require("./debug-toolbar-widget");
var debug_view_model_1 = require("./debug-view-model");
var debug_watch_widget_1 = require("./debug-watch-widget");
exports.DebugSessionWidgetFactory = Symbol('DebugSessionWidgetFactory');
var DebugSessionWidget = /** @class */ (function (_super) {
    __extends(DebugSessionWidget, _super);
    function DebugSessionWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugSessionWidget_1 = DebugSessionWidget;
    DebugSessionWidget.createContainer = function (parent, options) {
        var child = new inversify_1.Container({ defaultScope: 'Singleton' });
        child.parent = parent;
        child.bind(debug_view_model_1.DebugViewOptions).toConstantValue(options);
        child.bind(debug_view_model_1.DebugViewModel).toSelf();
        child.bind(debug_toolbar_widget_1.DebugToolBar).toSelf();
        child.bind(debug_threads_widget_1.DebugThreadsWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_threads_widget_1.DebugThreadsWidget.createWidget(container);
        });
        child.bind(debug_stack_frames_widget_1.DebugStackFramesWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_stack_frames_widget_1.DebugStackFramesWidget.createWidget(container);
        });
        child.bind(debug_variables_widget_1.DebugVariablesWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_variables_widget_1.DebugVariablesWidget.createWidget(container);
        });
        child.bind(debug_watch_widget_1.DebugWatchWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_watch_widget_1.DebugWatchWidget.createWidget(container);
        });
        child.bind(debug_breakpoints_widget_1.DebugBreakpointsWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_breakpoints_widget_1.DebugBreakpointsWidget.createWidget(container);
        });
        child.bind(DebugSessionWidget_1).toSelf();
        return child;
    };
    DebugSessionWidget.createWidget = function (parent, options) {
        return DebugSessionWidget_1.createContainer(parent, options).get(DebugSessionWidget_1);
    };
    DebugSessionWidget.prototype.init = function () {
        this.id = 'debug:session:' + this.model.id;
        this.title.label = this.model.label;
        this.title.caption = this.model.label;
        this.title.closable = true;
        this.title.iconClass = 'debug-tab-icon';
        this.addClass('theia-session-container');
        this.viewContainer = this.viewContainerFactory({
            id: 'debug:view-container:' + this.model.id
        });
        this.viewContainer.addWidget(this.threads, { weight: 30 });
        this.viewContainer.addWidget(this.stackFrames, { weight: 20 });
        this.viewContainer.addWidget(this.variables, { weight: 10 });
        this.viewContainer.addWidget(this.watch, { weight: 10 });
        this.viewContainer.addWidget(this.breakpoints, { weight: 10 });
        this.toDispose.pushAll([
            this.toolbar,
            this.viewContainer
        ]);
        var layout = this.layout = new browser_1.PanelLayout();
        layout.addWidget(this.toolbar);
        layout.addWidget(this.viewContainer);
    };
    DebugSessionWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.toolbar.focus();
    };
    DebugSessionWidget.prototype.getTrackableWidgets = function () {
        return this.viewContainer.getTrackableWidgets();
    };
    DebugSessionWidget.prototype.storeState = function () {
        return this.viewContainer.storeState();
    };
    DebugSessionWidget.prototype.restoreState = function (oldState) {
        this.viewContainer.restoreState(oldState);
    };
    var DebugSessionWidget_1;
    __decorate([
        inversify_1.inject(browser_1.ViewContainer.Factory),
        __metadata("design:type", Function)
    ], DebugSessionWidget.prototype, "viewContainerFactory", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugSessionWidget.prototype, "model", void 0);
    __decorate([
        inversify_1.inject(debug_toolbar_widget_1.DebugToolBar),
        __metadata("design:type", debug_toolbar_widget_1.DebugToolBar)
    ], DebugSessionWidget.prototype, "toolbar", void 0);
    __decorate([
        inversify_1.inject(debug_threads_widget_1.DebugThreadsWidget),
        __metadata("design:type", debug_threads_widget_1.DebugThreadsWidget)
    ], DebugSessionWidget.prototype, "threads", void 0);
    __decorate([
        inversify_1.inject(debug_stack_frames_widget_1.DebugStackFramesWidget),
        __metadata("design:type", debug_stack_frames_widget_1.DebugStackFramesWidget)
    ], DebugSessionWidget.prototype, "stackFrames", void 0);
    __decorate([
        inversify_1.inject(debug_variables_widget_1.DebugVariablesWidget),
        __metadata("design:type", debug_variables_widget_1.DebugVariablesWidget)
    ], DebugSessionWidget.prototype, "variables", void 0);
    __decorate([
        inversify_1.inject(debug_watch_widget_1.DebugWatchWidget),
        __metadata("design:type", debug_watch_widget_1.DebugWatchWidget)
    ], DebugSessionWidget.prototype, "watch", void 0);
    __decorate([
        inversify_1.inject(debug_breakpoints_widget_1.DebugBreakpointsWidget),
        __metadata("design:type", debug_breakpoints_widget_1.DebugBreakpointsWidget)
    ], DebugSessionWidget.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugSessionWidget.prototype, "init", null);
    DebugSessionWidget = DebugSessionWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugSessionWidget);
    return DebugSessionWidget;
}(browser_1.BaseWidget));
exports.DebugSessionWidget = DebugSessionWidget;
//# sourceMappingURL=debug-session-widget.js.map
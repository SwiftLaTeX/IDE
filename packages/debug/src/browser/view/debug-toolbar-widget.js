"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var React = require("react");
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var widgets_1 = require("@theia/core/lib/browser/widgets");
var debug_view_model_1 = require("./debug-view-model");
var debug_session_1 = require("../debug-session");
var debug_action_1 = require("./debug-action");
var DebugToolBar = /** @class */ (function (_super) {
    __extends(DebugToolBar, _super);
    function DebugToolBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setStepRef = function (stepRef) { return _this.stepRef = stepRef || undefined; };
        _this.start = function () { return _this.model.start(); };
        _this.restart = function () { return _this.model.restart(); };
        _this.stop = function () { return _this.model.currentSession && _this.model.currentSession.terminate(); };
        _this.continue = function () { return _this.model.currentThread && _this.model.currentThread.continue(); };
        _this.pause = function () { return _this.model.currentThread && _this.model.currentThread.pause(); };
        _this.stepOver = function () { return _this.model.currentThread && _this.model.currentThread.stepOver(); };
        _this.stepIn = function () { return _this.model.currentThread && _this.model.currentThread.stepIn(); };
        _this.stepOut = function () { return _this.model.currentThread && _this.model.currentThread.stepOut(); };
        return _this;
    }
    DebugToolBar.prototype.init = function () {
        var _this = this;
        this.id = 'debug:toolbar:' + this.model.id;
        this.addClass('debug-toolbar');
        this.toDispose.push(this.model);
        this.toDispose.push(this.model.onDidChange(function () { return _this.update(); }));
        this.scrollOptions = undefined;
        this.update();
    };
    DebugToolBar.prototype.focus = function () {
        var _this = this;
        if (!this.doFocus()) {
            this.onRender.push(core_1.Disposable.create(function () { return _this.doFocus(); }));
            this.update();
        }
    };
    DebugToolBar.prototype.doFocus = function () {
        if (!this.stepRef) {
            return false;
        }
        this.stepRef.focus();
        return true;
    };
    DebugToolBar.prototype.render = function () {
        var state = this.model.state;
        return React.createElement(React.Fragment, null,
            this.renderContinue(),
            React.createElement(debug_action_1.DebugAction, { enabled: state === debug_session_1.DebugState.Stopped, run: this.stepOver, label: 'Step Over', iconClass: 'step-over', ref: this.setStepRef }),
            React.createElement(debug_action_1.DebugAction, { enabled: state === debug_session_1.DebugState.Stopped, run: this.stepIn, label: 'Step Into', iconClass: 'step-into' }),
            React.createElement(debug_action_1.DebugAction, { enabled: state === debug_session_1.DebugState.Stopped, run: this.stepOut, label: 'Step Out', iconClass: 'step-out' }),
            React.createElement(debug_action_1.DebugAction, { enabled: state !== debug_session_1.DebugState.Inactive, run: this.restart, label: 'Restart', iconClass: 'restart' }),
            this.renderStart());
    };
    DebugToolBar.prototype.renderStart = function () {
        var state = this.model.state;
        if (state === debug_session_1.DebugState.Inactive && this.model.sessionCount === 1) {
            return React.createElement(debug_action_1.DebugAction, { run: this.start, label: 'Start', iconClass: 'start' });
        }
        return React.createElement(debug_action_1.DebugAction, { enabled: state !== debug_session_1.DebugState.Inactive, run: this.stop, label: 'Stop', iconClass: 'stop' });
    };
    DebugToolBar.prototype.renderContinue = function () {
        var state = this.model.state;
        if (state === debug_session_1.DebugState.Stopped) {
            return React.createElement(debug_action_1.DebugAction, { run: this.continue, label: 'Continue', iconClass: 'continue' });
        }
        return React.createElement(debug_action_1.DebugAction, { enabled: state === debug_session_1.DebugState.Running, run: this.pause, label: 'Pause', iconClass: 'pause' });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugToolBar.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugToolBar.prototype, "init", null);
    DebugToolBar = __decorate([
        inversify_1.injectable()
    ], DebugToolBar);
    return DebugToolBar;
}(widgets_1.ReactWidget));
exports.DebugToolBar = DebugToolBar;
//# sourceMappingURL=debug-toolbar-widget.js.map
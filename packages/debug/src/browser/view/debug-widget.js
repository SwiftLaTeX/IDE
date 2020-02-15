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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var debug_session_widget_1 = require("./debug-session-widget");
var debug_configuration_widget_1 = require("./debug-configuration-widget");
var debug_view_model_1 = require("./debug-view-model");
var debug_session_manager_1 = require("../debug-session-manager");
var progress_location_service_1 = require("@theia/core/lib/browser/progress-location-service");
var progress_bar_1 = require("@theia/core/lib/browser/progress-bar");
var DebugWidget = /** @class */ (function (_super) {
    __extends(DebugWidget, _super);
    function DebugWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugWidget_1 = DebugWidget;
    DebugWidget.createContainer = function (parent) {
        var child = debug_session_widget_1.DebugSessionWidget.createContainer(parent, {});
        child.bind(debug_configuration_widget_1.DebugConfigurationWidget).toSelf();
        child.bind(DebugWidget_1).toSelf();
        return child;
    };
    DebugWidget.createWidget = function (parent) {
        return DebugWidget_1.createContainer(parent).get(DebugWidget_1);
    };
    DebugWidget.prototype.init = function () {
        var e_1, _a;
        var _this = this;
        this.id = DebugWidget_1.ID;
        this.title.label = DebugWidget_1.LABEL;
        this.title.caption = DebugWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'debug-tab-icon';
        this.addClass('theia-debug-container');
        this.toDispose.pushAll([
            this.toolbar,
            this.sessionWidget,
            this.sessionManager.onDidCreateDebugSession(function (session) { return _this.model.push(session); }),
            this.sessionManager.onDidDestroyDebugSession(function (session) { return _this.model.delete(session); })
        ]);
        try {
            for (var _b = __values(this.sessionManager.sessions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var session = _c.value;
                this.model.push(session);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var layout = this.layout = new browser_1.PanelLayout();
        layout.addWidget(this.toolbar);
        layout.addWidget(this.sessionWidget);
        var onProgress = this.progressLocationService.onProgress('debug');
        this.toDispose.push(new progress_bar_1.ProgressBar({ container: this.node, insertMode: 'prepend' }, onProgress));
    };
    DebugWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.toolbar.focus();
    };
    DebugWidget.prototype.getTrackableWidgets = function () {
        return this.sessionWidget.getTrackableWidgets();
    };
    DebugWidget.prototype.storeState = function () {
        return this.sessionWidget.storeState();
    };
    DebugWidget.prototype.restoreState = function (oldState) {
        this.sessionWidget.restoreState(oldState);
    };
    var DebugWidget_1;
    DebugWidget.ID = 'debug';
    DebugWidget.LABEL = 'Debug';
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugWidget.prototype, "model", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugWidget.prototype, "sessionManager", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_widget_1.DebugConfigurationWidget),
        __metadata("design:type", debug_configuration_widget_1.DebugConfigurationWidget)
    ], DebugWidget.prototype, "toolbar", void 0);
    __decorate([
        inversify_1.inject(debug_session_widget_1.DebugSessionWidget),
        __metadata("design:type", debug_session_widget_1.DebugSessionWidget)
    ], DebugWidget.prototype, "sessionWidget", void 0);
    __decorate([
        inversify_1.inject(progress_location_service_1.ProgressLocationService),
        __metadata("design:type", progress_location_service_1.ProgressLocationService)
    ], DebugWidget.prototype, "progressLocationService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugWidget.prototype, "init", null);
    DebugWidget = DebugWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugWidget);
    return DebugWidget;
}(browser_1.BaseWidget));
exports.DebugWidget = DebugWidget;
//# sourceMappingURL=debug-widget.js.map
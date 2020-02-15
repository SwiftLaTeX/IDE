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
var browser_1 = require("@theia/core/lib/browser");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var debug_threads_source_1 = require("./debug-threads-source");
var debug_session_1 = require("../debug-session");
var debug_thread_1 = require("../model/debug-thread");
var debug_view_model_1 = require("../view/debug-view-model");
var debug_call_stack_item_type_key_1 = require("../debug-call-stack-item-type-key");
var DebugThreadsWidget = /** @class */ (function (_super) {
    __extends(DebugThreadsWidget, _super);
    function DebugThreadsWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingSelection = false;
        return _this;
    }
    DebugThreadsWidget_1 = DebugThreadsWidget;
    DebugThreadsWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugThreadsWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_threads_source_1.DebugThreadsSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugThreadsWidget_1).toSelf();
        return child;
    };
    DebugThreadsWidget.createWidget = function (parent) {
        return DebugThreadsWidget_1.createContainer(parent).get(DebugThreadsWidget_1);
    };
    DebugThreadsWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.id = 'debug:threads:' + this.viewModel.id;
        this.title.label = 'Threads';
        this.toDispose.push(this.threads);
        this.source = this.threads;
        this.toDispose.push(this.viewModel.onDidChange(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onSelectionChanged(function () { return _this.updateModelSelection(); }));
    };
    DebugThreadsWidget.prototype.updateWidgetSelection = function () {
        if (this.updatingSelection) {
            return;
        }
        this.updatingSelection = true;
        try {
            var currentThread = this.viewModel.currentThread;
            if (currentThread) {
                var node = this.model.getNode(currentThread.id);
                if (browser_1.SelectableTreeNode.is(node)) {
                    this.model.selectNode(node);
                }
            }
        }
        finally {
            this.updatingSelection = false;
        }
    };
    DebugThreadsWidget.prototype.updateModelSelection = function () {
        if (this.updatingSelection) {
            return;
        }
        this.updatingSelection = true;
        try {
            var node = this.model.selectedNodes[0];
            if (source_tree_1.TreeElementNode.is(node)) {
                if (node.element instanceof debug_session_1.DebugSession) {
                    this.viewModel.currentSession = node.element;
                    this.debugCallStackItemTypeKey.set('session');
                }
                else if (node.element instanceof debug_thread_1.DebugThread) {
                    node.element.session.currentThread = node.element;
                    this.debugCallStackItemTypeKey.set('thread');
                }
            }
        }
        finally {
            this.updatingSelection = false;
        }
    };
    DebugThreadsWidget.prototype.toContextMenuArgs = function (node) {
        if (source_tree_1.TreeElementNode.is(node) && node.element instanceof debug_thread_1.DebugThread) {
            return [node.element.raw.id];
        }
        return undefined;
    };
    DebugThreadsWidget.prototype.getDefaultNodeStyle = function (node, props) {
        if (this.threads.multiSession) {
            return _super.prototype.getDefaultNodeStyle.call(this, node, props);
        }
        return undefined;
    };
    var DebugThreadsWidget_1;
    DebugThreadsWidget.CONTEXT_MENU = ['debug-threads-context-menu'];
    DebugThreadsWidget.CONTROL_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['a_control']);
    DebugThreadsWidget.TERMINATE_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['b_terminate']);
    DebugThreadsWidget.OPEN_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['c_open']);
    __decorate([
        inversify_1.inject(debug_threads_source_1.DebugThreadsSource),
        __metadata("design:type", debug_threads_source_1.DebugThreadsSource)
    ], DebugThreadsWidget.prototype, "threads", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugThreadsWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_call_stack_item_type_key_1.DebugCallStackItemTypeKey),
        __metadata("design:type", Object)
    ], DebugThreadsWidget.prototype, "debugCallStackItemTypeKey", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugThreadsWidget.prototype, "init", null);
    DebugThreadsWidget = DebugThreadsWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugThreadsWidget);
    return DebugThreadsWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugThreadsWidget = DebugThreadsWidget;
//# sourceMappingURL=debug-threads-widget.js.map
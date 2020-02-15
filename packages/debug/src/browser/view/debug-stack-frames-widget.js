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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var debug_stack_frames_source_1 = require("./debug-stack-frames-source");
var debug_stack_frame_1 = require("../model/debug-stack-frame");
var debug_view_model_1 = require("./debug-view-model");
var debug_call_stack_item_type_key_1 = require("../debug-call-stack-item-type-key");
var DebugStackFramesWidget = /** @class */ (function (_super) {
    __extends(DebugStackFramesWidget, _super);
    function DebugStackFramesWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingSelection = false;
        return _this;
    }
    DebugStackFramesWidget_1 = DebugStackFramesWidget;
    DebugStackFramesWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugStackFramesWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_stack_frames_source_1.DebugStackFramesSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugStackFramesWidget_1).toSelf();
        return child;
    };
    DebugStackFramesWidget.createWidget = function (parent) {
        return DebugStackFramesWidget_1.createContainer(parent).get(DebugStackFramesWidget_1);
    };
    DebugStackFramesWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.id = 'debug:frames:' + this.viewModel.id;
        this.title.label = 'Call Stack';
        this.toDispose.push(this.frames);
        this.source = this.frames;
        this.toDispose.push(this.viewModel.onDidChange(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onNodeRefreshed(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onSelectionChanged(function () { return _this.updateModelSelection(); }));
    };
    DebugStackFramesWidget.prototype.updateWidgetSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame, node;
            return __generator(this, function (_a) {
                if (this.updatingSelection) {
                    return [2 /*return*/];
                }
                this.updatingSelection = true;
                try {
                    currentFrame = this.viewModel.currentFrame;
                    if (currentFrame) {
                        node = this.model.getNode(currentFrame.id);
                        if (browser_1.SelectableTreeNode.is(node)) {
                            this.model.selectNode(node);
                        }
                    }
                }
                finally {
                    this.updatingSelection = false;
                }
                return [2 /*return*/];
            });
        });
    };
    DebugStackFramesWidget.prototype.updateModelSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                if (this.updatingSelection) {
                    return [2 /*return*/];
                }
                this.updatingSelection = true;
                try {
                    node = this.model.selectedNodes[0];
                    if (source_tree_1.TreeElementNode.is(node)) {
                        if (node.element instanceof debug_stack_frame_1.DebugStackFrame) {
                            node.element.thread.currentFrame = node.element;
                            this.debugCallStackItemTypeKey.set('stackFrame');
                        }
                    }
                }
                finally {
                    this.updatingSelection = false;
                }
                return [2 /*return*/];
            });
        });
    };
    DebugStackFramesWidget.prototype.toContextMenuArgs = function (node) {
        if (source_tree_1.TreeElementNode.is(node)) {
            if (node.element instanceof debug_stack_frame_1.DebugStackFrame) {
                var source = node.element.source;
                if (source) {
                    if (source.inMemory) {
                        var path = source.raw.path || source.raw.sourceReference;
                        if (path !== undefined) {
                            return [path];
                        }
                    }
                    else {
                        return [source.uri.toString()];
                    }
                }
            }
        }
        return undefined;
    };
    DebugStackFramesWidget.prototype.handleClickEvent = function (node, event) {
        if (source_tree_1.TreeElementNode.is(node) && node.element instanceof debug_stack_frames_source_1.LoadMoreStackFrames) {
            node.element.open();
        }
        _super.prototype.handleClickEvent.call(this, node, event);
    };
    DebugStackFramesWidget.prototype.getDefaultNodeStyle = function (node, props) {
        return undefined;
    };
    var DebugStackFramesWidget_1;
    DebugStackFramesWidget.CONTEXT_MENU = ['debug-frames-context-menu'];
    __decorate([
        inversify_1.inject(debug_stack_frames_source_1.DebugStackFramesSource),
        __metadata("design:type", debug_stack_frames_source_1.DebugStackFramesSource)
    ], DebugStackFramesWidget.prototype, "frames", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugStackFramesWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_call_stack_item_type_key_1.DebugCallStackItemTypeKey),
        __metadata("design:type", Object)
    ], DebugStackFramesWidget.prototype, "debugCallStackItemTypeKey", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugStackFramesWidget.prototype, "init", null);
    DebugStackFramesWidget = DebugStackFramesWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugStackFramesWidget);
    return DebugStackFramesWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugStackFramesWidget = DebugStackFramesWidget;
//# sourceMappingURL=debug-stack-frames-widget.js.map
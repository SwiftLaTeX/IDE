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
var debounce = require("lodash.debounce");
var widgets_1 = require("@phosphor/widgets");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var disposable_1 = require("@theia/core/lib/common/disposable");
var debug_session_manager_1 = require("../debug-session-manager");
var debug_editor_1 = require("./debug-editor");
var debug_expression_provider_1 = require("./debug-expression-provider");
var debug_hover_source_1 = require("./debug-hover-source");
function createDebugHoverWidgetContainer(parent, editor) {
    var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
        virtualized: false
    });
    child.bind(debug_editor_1.DebugEditor).toConstantValue(editor);
    child.bind(debug_hover_source_1.DebugHoverSource).toSelf();
    child.unbind(source_tree_1.SourceTreeWidget);
    child.bind(debug_expression_provider_1.DebugExpressionProvider).toSelf();
    child.bind(DebugHoverWidget).toSelf();
    return child;
}
exports.createDebugHoverWidgetContainer = createDebugHoverWidgetContainer;
var DebugHoverWidget = /** @class */ (function (_super) {
    __extends(DebugHoverWidget, _super);
    function DebugHoverWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDispose = new disposable_1.DisposableCollection();
        _this.allowEditorOverflow = true;
        _this.domNode = document.createElement('div');
        _this.titleNode = document.createElement('div');
        _this.contentNode = document.createElement('div');
        _this.doSchedule = debounce(function (fn) { return fn(); }, 300);
        return _this;
    }
    DebugHoverWidget_1 = DebugHoverWidget;
    DebugHoverWidget.prototype.getId = function () {
        return DebugHoverWidget_1.ID;
    };
    DebugHoverWidget.prototype.getDomNode = function () {
        return this.domNode;
    };
    DebugHoverWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.domNode.className = 'theia-debug-hover';
        this.titleNode.className = 'theia-debug-hover-title';
        this.domNode.appendChild(this.titleNode);
        this.contentNode.className = 'theia-debug-hover-content';
        this.domNode.appendChild(this.contentNode);
        this.editor.getControl().addContentWidget(this);
        this.source = this.hoverSource;
        this.toDispose.pushAll([
            this.hoverSource,
            disposable_1.Disposable.create(function () { return _this.editor.getControl().removeContentWidget(_this); }),
            disposable_1.Disposable.create(function () { return _this.hide(); }),
            this.sessions.onDidChange(function () {
                if (!_this.isEditorFrame()) {
                    _this.hide();
                }
            })
        ]);
    };
    DebugHoverWidget.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DebugHoverWidget.prototype.show = function (options) {
        var _this = this;
        this.schedule(function () { return _this.doShow(options); }, options && options.immediate);
    };
    DebugHoverWidget.prototype.hide = function (options) {
        var _this = this;
        this.schedule(function () { return _this.doHide(); }, options && options.immediate);
    };
    DebugHoverWidget.prototype.schedule = function (fn, immediate) {
        if (immediate === void 0) { immediate = true; }
        if (immediate) {
            this.doSchedule.cancel();
            fn();
        }
        else {
            this.doSchedule(fn);
        }
    };
    DebugHoverWidget.prototype.doHide = function () {
        if (!this.isVisible) {
            return;
        }
        if (this.domNode.contains(document.activeElement)) {
            this.editor.getControl().focus();
        }
        if (this.isAttached) {
            widgets_1.Widget.detach(this);
        }
        this.hoverSource.reset();
        _super.prototype.hide.call(this);
        this.options = undefined;
        this.editor.getControl().layoutContentWidget(this);
    };
    DebugHoverWidget.prototype.doShow = function (options) {
        if (options === void 0) { options = this.options; }
        return __awaiter(this, void 0, void 0, function () {
            var expression, toFocus;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isEditorFrame()) {
                            this.hide();
                            return [2 /*return*/];
                        }
                        if (!options) {
                            this.hide();
                            return [2 /*return*/];
                        }
                        if (this.options && this.options.selection.equalsRange(options.selection)) {
                            return [2 /*return*/];
                        }
                        if (!this.isAttached) {
                            widgets_1.Widget.attach(this, this.contentNode);
                        }
                        _super.prototype.show.call(this);
                        this.options = options;
                        expression = this.expressionProvider.get(this.editor.getControl().getModel(), options.selection);
                        if (!expression) {
                            this.hide();
                            return [2 /*return*/];
                        }
                        toFocus = new disposable_1.DisposableCollection();
                        if (this.options.focus === true) {
                            toFocus.push(this.model.onNodeRefreshed(function () {
                                toFocus.dispose();
                                _this.activate();
                            }));
                        }
                        return [4 /*yield*/, this.hoverSource.evaluate(expression)];
                    case 1:
                        if (!(_a.sent())) {
                            toFocus.dispose();
                            this.hide();
                            return [2 /*return*/];
                        }
                        this.editor.getControl().layoutContentWidget(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugHoverWidget.prototype.isEditorFrame = function () {
        var currentFrame = this.sessions.currentFrame;
        return !!currentFrame && !!currentFrame.source &&
            this.editor.getControl().getModel().uri.toString() === currentFrame.source.uri.toString();
    };
    DebugHoverWidget.prototype.getPosition = function () {
        if (!this.isVisible) {
            return undefined;
        }
        var position = this.options && this.options.selection.getStartPosition();
        var word = position && this.editor.getControl().getModel().getWordAtPosition(position);
        return position && word ? {
            position: new monaco.Position(position.lineNumber, word.startColumn),
            preference: [
                monaco.editor.ContentWidgetPositionPreference.ABOVE,
                monaco.editor.ContentWidgetPositionPreference.BELOW
            ]
        } : undefined;
    };
    DebugHoverWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        var expression = this.hoverSource.expression;
        var value = expression && expression.value || '';
        this.titleNode.textContent = value;
        this.titleNode.title = value;
    };
    DebugHoverWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.addKeyListener(this.domNode, browser_1.Key.ESCAPE, function () { return _this.hide(); });
    };
    var DebugHoverWidget_1;
    DebugHoverWidget.ID = 'debug.editor.hover';
    __decorate([
        inversify_1.inject(debug_editor_1.DebugEditor),
        __metadata("design:type", Object)
    ], DebugHoverWidget.prototype, "editor", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugHoverWidget.prototype, "sessions", void 0);
    __decorate([
        inversify_1.inject(debug_hover_source_1.DebugHoverSource),
        __metadata("design:type", debug_hover_source_1.DebugHoverSource)
    ], DebugHoverWidget.prototype, "hoverSource", void 0);
    __decorate([
        inversify_1.inject(debug_expression_provider_1.DebugExpressionProvider),
        __metadata("design:type", debug_expression_provider_1.DebugExpressionProvider)
    ], DebugHoverWidget.prototype, "expressionProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugHoverWidget.prototype, "init", null);
    DebugHoverWidget = DebugHoverWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugHoverWidget);
    return DebugHoverWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugHoverWidget = DebugHoverWidget;
//# sourceMappingURL=debug-hover-widget.js.map
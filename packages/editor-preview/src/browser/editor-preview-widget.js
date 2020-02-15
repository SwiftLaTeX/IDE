"use strict";
/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var messaging_1 = require("@phosphor/messaging");
var algorithm_1 = require("@phosphor/algorithm");
/** The class name added to Editor Preview Widget titles. */
var PREVIEW_TITLE_CLASS = ' theia-editor-preview-title-unpinned';
var EditorPreviewWidget = /** @class */ (function (_super) {
    __extends(EditorPreviewWidget, _super);
    function EditorPreviewWidget(widgetManager, editorWidget_) {
        var _this = _super.call(this) || this;
        _this.widgetManager = widgetManager;
        _this.editorWidget_ = editorWidget_;
        _this.pinListeners = new common_1.DisposableCollection();
        _this.onDidChangeTrackableWidgetsEmitter = new common_1.Emitter();
        _this.onDidChangeTrackableWidgets = _this.onDidChangeTrackableWidgetsEmitter.event;
        _this.onPinnedEmitter = new common_1.Emitter();
        _this.onPinned = _this.onPinnedEmitter.event;
        _this.title.closable = true;
        _this.title.className += PREVIEW_TITLE_CLASS;
        _this.layout = new browser_1.PanelLayout();
        _this.toDispose.push(_this.onDidChangeTrackableWidgetsEmitter);
        _this.toDispose.push(_this.onPinnedEmitter);
        _this.toDispose.push(_this.pinListeners);
        return _this;
    }
    Object.defineProperty(EditorPreviewWidget.prototype, "editorWidget", {
        get: function () {
            return this.editorWidget_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorPreviewWidget.prototype, "pinned", {
        get: function () {
            return this.pinned_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorPreviewWidget.prototype, "saveable", {
        get: function () {
            if (this.editorWidget_) {
                return this.editorWidget_.saveable;
            }
        },
        enumerable: true,
        configurable: true
    });
    EditorPreviewWidget.prototype.getResourceUri = function () {
        return this.editorWidget_ && this.editorWidget_.getResourceUri();
    };
    EditorPreviewWidget.prototype.createMoveToUri = function (resourceUri) {
        return this.editorWidget_ && this.editorWidget_.createMoveToUri(resourceUri);
    };
    EditorPreviewWidget.prototype.pinEditorWidget = function () {
        this.title.className = this.title.className.replace(PREVIEW_TITLE_CLASS, '');
        this.pinListeners.dispose();
        this.pinned_ = true;
        this.onPinnedEmitter.fire({ preview: this, editorWidget: this.editorWidget_ });
    };
    EditorPreviewWidget.prototype.replaceEditorWidget = function (editorWidget) {
        if (editorWidget === this.editorWidget_) {
            return;
        }
        if (this.editorWidget_) {
            this.editorWidget_.dispose();
        }
        this.editorWidget_ = editorWidget;
        this.attachPreviewWidget(this.editorWidget_);
        this.onResize(browser_1.Widget.ResizeMessage.UnknownSize);
    };
    EditorPreviewWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.editorWidget_) {
            this.editorWidget_.activate();
        }
    };
    EditorPreviewWidget.prototype.attachPreviewWidget = function (w) {
        var _this = this;
        this.layout.addWidget(w);
        this.title.label = w.title.label;
        this.title.iconClass = w.title.iconClass;
        this.title.caption = w.title.caption;
        if (browser_1.Saveable.isSource(w)) {
            browser_1.Saveable.apply(this);
            var dirtyListener_1 = w.saveable.onDirtyChanged(function () {
                dirtyListener_1.dispose();
                _this.pinEditorWidget();
            });
            this.toDispose.push(dirtyListener_1);
        }
        w.parent = this;
        this.onDidChangeTrackableWidgetsEmitter.fire([w]);
    };
    EditorPreviewWidget.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.editorWidget_ && !this.editorWidget_.isAttached) {
            this.attachPreviewWidget(this.editorWidget_);
        }
        this.addTabPinningLogic();
    };
    EditorPreviewWidget.prototype.addTabPinningLogic = function () {
        var _this = this;
        var parent = this.parent;
        if (!this.pinned_ && parent instanceof browser_1.DockPanel) {
            if (!this.lastParent) {
                this.lastParent = parent;
            }
            var tabBar_1 = algorithm_1.find(parent.tabBars(), function (bar) { return bar.titles.indexOf(_this.title) !== -1; });
            // Widget has been dragged into a different panel
            if (this.lastParent !== parent || !tabBar_1) {
                this.pinEditorWidget();
                return;
            }
            var layoutListener_1 = function (panel) {
                if (tabBar_1 !== algorithm_1.find(panel.tabBars(), function (bar) { return bar.titles.indexOf(_this.title) !== -1; })) {
                    _this.pinEditorWidget();
                }
            };
            parent.layoutModified.connect(layoutListener_1);
            this.pinListeners.push({ dispose: function () { return parent.layoutModified.disconnect(layoutListener_1); } });
            var tabMovedListener_1 = function (w, args) {
                if (args.title === _this.title) {
                    _this.pinEditorWidget();
                }
            };
            tabBar_1.tabMoved.connect(tabMovedListener_1);
            this.pinListeners.push({ dispose: function () { return tabBar_1.tabMoved.disconnect(tabMovedListener_1); } });
            var attachDoubleClickListener_1 = function (attempt) {
                var tabNode = tabBar_1.contentNode.children.item(tabBar_1.currentIndex);
                if (!tabNode) {
                    return attempt < 60 ? requestAnimationFrame(function () { return attachDoubleClickListener_1(++attempt); }) : undefined;
                }
                var dblClickListener = function (event) { return _this.pinEditorWidget(); };
                tabNode.addEventListener('dblclick', dblClickListener);
                _this.pinListeners.push({ dispose: function () { return tabNode.removeEventListener('dblclick', dblClickListener); } });
            };
            requestAnimationFrame(function () { return attachDoubleClickListener_1(0); });
        }
    };
    EditorPreviewWidget.prototype.onResize = function (msg) {
        if (this.editorWidget_) {
            // Currently autosizing does not work with the Monaco Editor Widget
            // https://github.com/eclipse-theia/theia/blob/c86a33b9ee0e5bb1dc49c66def123ffb2cadbfe4/packages/monaco/src/browser/monaco-editor.ts#L461
            // After this is supported we can rely on the underlying widget to resize and remove
            // the following if statement. (Without it, the editor will be initialized to its
            // minimum size)
            if (msg.width < 0 || msg.height < 0) {
                var width = parseInt(this.node.style.width || '');
                var height = parseInt(this.node.style.height || '');
                if (width && height) {
                    this.editorWidget_.editor.setSize({ width: width, height: height });
                }
            }
            messaging_1.MessageLoop.sendMessage(this.editorWidget_, msg);
        }
    };
    EditorPreviewWidget.prototype.getTrackableWidgets = function () {
        var _this = this;
        return new Promise(function (resolve) { return resolve(_this.editorWidget_ ? [_this.editorWidget_] : []); });
    };
    EditorPreviewWidget.prototype.storeState = function () {
        return {
            pinned: this.pinned_,
            editorState: this.editorWidget_ ? this.editorWidget_.storeState() : undefined,
            previewDescription: this.editorWidget_ ? this.widgetManager.getDescription(this.editorWidget_) : undefined
        };
    };
    EditorPreviewWidget.prototype.restoreState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var pinned, editorState, previewDescription, factoryId, options, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pinned = state.pinned, editorState = state.editorState, previewDescription = state.previewDescription;
                        if (!(!this.editorWidget_ && previewDescription)) return [3 /*break*/, 2];
                        factoryId = previewDescription.factoryId, options = previewDescription.options;
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(factoryId, options)];
                    case 1:
                        editorWidget = _a.sent();
                        this.replaceEditorWidget(editorWidget);
                        _a.label = 2;
                    case 2:
                        if (this.editorWidget && editorState) {
                            this.editorWidget.restoreState(editorState);
                        }
                        if (pinned) {
                            this.pinEditorWidget();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return EditorPreviewWidget;
}(browser_1.BaseWidget));
exports.EditorPreviewWidget = EditorPreviewWidget;
//# sourceMappingURL=editor-preview-widget.js.map
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
var browser_2 = require("@theia/editor/lib/browser");
var editor_preview_widget_1 = require("./editor-preview-widget");
var editor_preview_factory_1 = require("./editor-preview-factory");
var editor_preview_preferences_1 = require("./editor-preview-preferences");
var browser_3 = require("@theia/core/lib/browser");
/**
 * Class for managing an editor preview widget.
 */
var EditorPreviewManager = /** @class */ (function (_super) {
    __extends(EditorPreviewManager, _super);
    function EditorPreviewManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = editor_preview_factory_1.EditorPreviewWidgetFactory.ID;
        _this.label = 'Code Editor Preview';
        return _this;
    }
    EditorPreviewManager.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.onCreated(function (widget) {
            if (widget instanceof editor_preview_widget_1.EditorPreviewWidget) {
                return _this.handlePreviewWidgetCreated(widget);
            }
        });
        this.preferences.onPreferenceChanged(function (change) {
            if (_this.currentEditorPreview) {
                _this.currentEditorPreview.then(function (editorPreview) {
                    if (!change.newValue && editorPreview) {
                        editorPreview.pinEditorWidget();
                    }
                });
            }
        });
    };
    EditorPreviewManager.prototype.handlePreviewWidgetCreated = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var editorPreview;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.currentEditorPreview];
                    case 1:
                        editorPreview = _a.sent();
                        if (editorPreview && editorPreview !== widget) {
                            editorPreview.pinEditorWidget();
                        }
                        this.currentEditorPreview = Promise.resolve(widget);
                        widget.disposed.connect(function () { return _this.currentEditorPreview = Promise.resolve(undefined); });
                        widget.onPinned(function (_a) {
                            var preview = _a.preview, editorWidget = _a.editorWidget;
                            // TODO(caseyflynn): I don't believe there is ever a case where
                            // this will not hold true.
                            if (preview.parent && preview.parent instanceof browser_1.DockPanel) {
                                preview.parent.addWidget(editorWidget, { ref: preview });
                            }
                            else {
                                _this.shell.addWidget(editorWidget, { area: 'main' });
                            }
                            preview.dispose();
                            _this.shell.activateWidget(editorWidget.id);
                            _this.currentEditorPreview = Promise.resolve(undefined);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorPreviewManager.prototype.isCurrentPreviewUri = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var editorPreview, currentUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.currentEditorPreview];
                    case 1:
                        editorPreview = _a.sent();
                        currentUri = editorPreview && editorPreview.getResourceUri();
                        return [2 /*return*/, !!currentUri && currentUri.isEqualOrParent(uri)];
                }
            });
        });
    };
    EditorPreviewManager.prototype.canHandle = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.preferences['editor.enablePreview'];
                        if (!_a) return [3 /*break*/, 3];
                        _b = options && options.preview;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.isCurrentPreviewUri(uri)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a = (_b);
                        _c.label = 3;
                    case 3:
                        if (_a) {
                            return [2 /*return*/, 200];
                        }
                        return [2 /*return*/, 0];
                }
            });
        });
    };
    EditorPreviewManager.prototype.open = function (uri, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var widget, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.pinCurrentEditor(uri, options)];
                    case 1:
                        widget = _b.sent();
                        if (widget) {
                            return [2 /*return*/, widget];
                        }
                        return [4 /*yield*/, this.replaceCurrentPreview(uri, options)];
                    case 2:
                        _a = (_b.sent());
                        if (_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.openNewPreview(uri, options)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        widget = _a;
                        return [4 /*yield*/, this.editorManager.open(uri, options)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    EditorPreviewManager.prototype.pinCurrentEditor = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(uri)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.editorManager.open(uri, options)];
                    case 2:
                        editorWidget = _a.sent();
                        if (editorWidget.parent instanceof editor_preview_widget_1.EditorPreviewWidget) {
                            if (!options.preview) {
                                editorWidget.parent.pinEditorWidget();
                            }
                            return [2 /*return*/, editorWidget.parent];
                        }
                        return [2 /*return*/, editorWidget];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditorPreviewManager.prototype.replaceCurrentPreview = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var currentPreview, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.currentEditorPreview];
                    case 1:
                        currentPreview = _a.sent();
                        if (!currentPreview) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.editorManager.getOrCreateByUri(uri)];
                    case 2:
                        editorWidget = _a.sent();
                        currentPreview.replaceEditorWidget(editorWidget);
                        return [2 /*return*/, currentPreview];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditorPreviewManager.prototype.openNewPreview = function (uri, options) {
        return this.currentEditorPreview = _super.prototype.open.call(this, uri, options);
    };
    EditorPreviewManager.prototype.createWidgetOptions = function (uri, options) {
        return {
            kind: 'editor-preview-widget',
            id: editor_preview_factory_1.EditorPreviewWidgetFactory.generateUniqueId(),
            initialUri: uri.withoutFragment().toString(),
            session: editor_preview_factory_1.EditorPreviewWidgetFactory.sessionId
        };
    };
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], EditorPreviewManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], EditorPreviewManager.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(editor_preview_preferences_1.EditorPreviewPreferences),
        __metadata("design:type", Object)
    ], EditorPreviewManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditorPreviewManager.prototype, "init", null);
    EditorPreviewManager = __decorate([
        inversify_1.injectable()
    ], EditorPreviewManager);
    return EditorPreviewManager;
}(browser_3.WidgetOpenHandler));
exports.EditorPreviewManager = EditorPreviewManager;
//# sourceMappingURL=editor-preview-manager.js.map
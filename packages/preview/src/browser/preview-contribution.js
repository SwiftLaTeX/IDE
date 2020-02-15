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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var common_1 = require("@theia/core/lib/common");
var preview_widget_1 = require("./preview-widget");
var preview_handler_1 = require("./preview-handler");
var preview_uri_1 = require("./preview-uri");
var preview_preferences_1 = require("./preview-preferences");
var debounce = require("lodash.debounce");
var PreviewCommands;
(function (PreviewCommands) {
    /**
     * No `label`. Otherwise, it would show up in the `Command Palette` and we already have the `Preview` open handler.
     * See in (`WorkspaceCommandContribution`)[https://bit.ly/2DncrSD].
     */
    PreviewCommands.OPEN = {
        id: 'preview:open',
        label: 'Open Preview',
        iconClass: 'theia-open-preview-icon'
    };
    PreviewCommands.OPEN_SOURCE = {
        id: 'preview.open.source',
        iconClass: 'theia-open-file-icon'
    };
})(PreviewCommands = exports.PreviewCommands || (exports.PreviewCommands = {}));
var PreviewContribution = /** @class */ (function (_super) {
    __extends(PreviewContribution, _super);
    // eslint-disable-next-line max-len
    function PreviewContribution() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = preview_uri_1.PreviewUri.id;
        _this.label = 'Preview';
        _this.synchronizedUris = new Set();
        _this.scrollSyncLockOn = undefined;
        return _this;
    }
    PreviewContribution.prototype.onStart = function () {
        var _this = this;
        this.onCreated(function (previewWidget) {
            _this.registerOpenOnDoubleClick(previewWidget);
            _this.registerEditorAndPreviewSync(previewWidget);
        });
        this.editorManager.onCreated(function (editorWidget) {
            _this.registerEditorAndPreviewSync(editorWidget);
        });
    };
    PreviewContribution.prototype.lockScrollSync = function (on, delay) {
        if (delay === void 0) { delay = 50; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scrollSyncLockOn = on;
                if (this.scrollSyncLockTimeout) {
                    window.clearTimeout(this.scrollSyncLockTimeout);
                }
                this.scrollSyncLockTimeout = window.setTimeout(function () {
                    _this.scrollSyncLockOn = undefined;
                }, delay);
                return [2 /*return*/];
            });
        });
    };
    PreviewContribution.prototype.registerEditorAndPreviewSync = function (source) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, editorWidget, previewWidget, syncDisposables, editor;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(source instanceof browser_2.EditorWidget)) return [3 /*break*/, 2];
                        editorWidget = source;
                        uri = editorWidget.editor.uri.toString();
                        return [4 /*yield*/, this.getWidget(editorWidget.editor.uri)];
                    case 1:
                        previewWidget = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        previewWidget = source;
                        uri = previewWidget.getUri().toString();
                        return [4 /*yield*/, this.editorManager.getByUri(previewWidget.getUri())];
                    case 3:
                        editorWidget = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!previewWidget || !editorWidget || !uri) {
                            return [2 /*return*/];
                        }
                        if (this.synchronizedUris.has(uri)) {
                            return [2 /*return*/];
                        }
                        syncDisposables = new common_1.DisposableCollection();
                        previewWidget.disposed.connect(function () { return syncDisposables.dispose(); });
                        editorWidget.disposed.connect(function () { return syncDisposables.dispose(); });
                        editor = editorWidget.editor;
                        syncDisposables.push(editor.onScrollChanged(debounce(function () {
                            if (_this.scrollSyncLockOn === 'editor') {
                                // avoid recursive scroll synchronization
                                return;
                            }
                            _this.lockScrollSync('preview');
                            var range = editor.getVisibleRanges();
                            if (range.length > 0) {
                                _this.revealSourceLineInPreview(previewWidget, range[0].start);
                            }
                        }), 100));
                        syncDisposables.push(this.synchronizeScrollToEditor(previewWidget, editor));
                        this.synchronizedUris.add(uri);
                        syncDisposables.push(common_1.Disposable.create(function () { return _this.synchronizedUris.delete(uri); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    PreviewContribution.prototype.revealSourceLineInPreview = function (previewWidget, position) {
        previewWidget.revealForSourceLine(position.line);
    };
    PreviewContribution.prototype.synchronizeScrollToEditor = function (previewWidget, editor) {
        var _this = this;
        return previewWidget.onDidScroll(function (sourceLine) {
            if (_this.scrollSyncLockOn === 'preview') {
                // avoid recursive scroll synchronization
                return;
            }
            var line = Math.floor(sourceLine);
            _this.lockScrollSync('editor'); // avoid recursive scroll synchronization
            editor.revealRange({
                start: {
                    line: line,
                    character: 0
                },
                end: {
                    line: line + 1,
                    character: 0
                }
            }, { at: 'top' });
        });
    };
    PreviewContribution.prototype.registerOpenOnDoubleClick = function (ref) {
        var _this = this;
        var disposable = ref.onDidDoubleClick(function (location) { return __awaiter(_this, void 0, void 0, function () {
            var editor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openSource(ref)];
                    case 1:
                        editor = (_a.sent()).editor;
                        editor.revealPosition(location.range.start);
                        editor.selection = location.range;
                        ref.revealForSourceLine(location.range.start.line);
                        return [2 /*return*/];
                }
            });
        }); });
        ref.disposed.connect(function () { return disposable.dispose(); });
    };
    PreviewContribution.prototype.canHandle = function (uri) {
        if (!this.previewHandlerProvider.canHandle(uri)) {
            return 0;
        }
        var editorPriority = this.editorManager.canHandle(uri);
        if (editorPriority === 0) {
            return 200;
        }
        if (preview_uri_1.PreviewUri.match(uri)) {
            return editorPriority * 2;
        }
        return editorPriority * (this.openByDefault ? 2 : 0.5);
    };
    Object.defineProperty(PreviewContribution.prototype, "openByDefault", {
        get: function () {
            return this.preferences['preview.openByDefault'];
        },
        enumerable: true,
        configurable: true
    });
    PreviewContribution.prototype.open = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var resolvedOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveOpenerOptions(options)];
                    case 1:
                        resolvedOptions = _a.sent();
                        return [2 /*return*/, _super.prototype.open.call(this, uri, resolvedOptions)];
                }
            });
        });
    };
    PreviewContribution.prototype.serializeUri = function (uri) {
        return _super.prototype.serializeUri.call(this, preview_uri_1.PreviewUri.decode(uri));
    };
    PreviewContribution.prototype.resolveOpenerOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var resolved, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resolved = __assign({ mode: 'activate' }, options);
                        if (!resolved.originUri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getWidget(resolved.originUri)];
                    case 1:
                        ref = _a.sent();
                        if (ref) {
                            resolved.widgetOptions = __assign(__assign({}, resolved.widgetOptions), { ref: ref });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolved];
                }
            });
        });
    };
    PreviewContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(PreviewCommands.OPEN, {
            execute: function (widget) { return _this.openForEditor(widget); },
            isEnabled: function (widget) { return _this.canHandleEditorUri(widget); },
            isVisible: function (widget) { return _this.canHandleEditorUri(widget); }
        });
        registry.registerCommand(PreviewCommands.OPEN_SOURCE, {
            execute: function (widget) { return _this.openSource(widget); },
            isEnabled: function (widget) { return widget instanceof preview_widget_1.PreviewWidget; },
            isVisible: function (widget) { return widget instanceof preview_widget_1.PreviewWidget; }
        });
    };
    PreviewContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_2.EditorContextMenu.NAVIGATION, {
            commandId: PreviewCommands.OPEN.id
        });
    };
    PreviewContribution.prototype.registerToolbarItems = function (registry) {
        registry.registerItem({
            id: PreviewCommands.OPEN.id,
            command: PreviewCommands.OPEN.id,
            tooltip: 'Open Preview to the Side'
        });
        registry.registerItem({
            id: PreviewCommands.OPEN_SOURCE.id,
            command: PreviewCommands.OPEN_SOURCE.id,
            tooltip: 'Open Source'
        });
    };
    PreviewContribution.prototype.canHandleEditorUri = function (widget) {
        var uri = this.getCurrentEditorUri(widget);
        return !!uri && this.previewHandlerProvider.canHandle(uri);
    };
    PreviewContribution.prototype.getCurrentEditorUri = function (widget) {
        var current = this.getCurrentEditor(widget);
        return current && current.editor.uri;
    };
    PreviewContribution.prototype.getCurrentEditor = function (widget) {
        var current = widget ? widget : this.editorManager.currentEditor;
        return current instanceof browser_2.EditorWidget && current || undefined;
    };
    PreviewContribution.prototype.openForEditor = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.getCurrentEditor(widget);
                        if (!ref) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.open(ref.editor.uri, {
                                mode: 'reveal',
                                widgetOptions: { ref: ref, mode: 'open-to-right' }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreviewContribution.prototype.openSource = function (ref) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (ref instanceof preview_widget_1.PreviewWidget) {
                    return [2 /*return*/, this.editorManager.open(ref.uri, {
                            widgetOptions: { ref: ref, mode: 'open-to-left' }
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], PreviewContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(preview_handler_1.PreviewHandlerProvider),
        __metadata("design:type", preview_handler_1.PreviewHandlerProvider)
    ], PreviewContribution.prototype, "previewHandlerProvider", void 0);
    __decorate([
        inversify_1.inject(preview_preferences_1.PreviewPreferences),
        __metadata("design:type", Object)
    ], PreviewContribution.prototype, "preferences", void 0);
    PreviewContribution = __decorate([
        inversify_1.injectable()
        // eslint-disable-next-line max-len
    ], PreviewContribution);
    return PreviewContribution;
}(browser_1.NavigatableWidgetOpenHandler));
exports.PreviewContribution = PreviewContribution;
//# sourceMappingURL=preview-contribution.js.map
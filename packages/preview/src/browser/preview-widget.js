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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var common_1 = require("@theia/core/lib/common");
var browser_2 = require("@theia/languages/lib/browser");
var preview_handler_1 = require("./preview-handler");
var theming_1 = require("@theia/core/lib/browser/theming");
var browser_3 = require("@theia/editor/lib/browser");
var throttle = require("lodash.throttle");
exports.PREVIEW_WIDGET_CLASS = 'theia-preview-widget';
var DEFAULT_ICON = 'fa fa-eye';
var widgetCounter = 0;
exports.PreviewWidgetOptions = Symbol('PreviewWidgetOptions');
var PreviewWidget = /** @class */ (function (_super) {
    __extends(PreviewWidget, _super);
    function PreviewWidget(options, previewHandlerProvider, themeService, workspace, editorPreferences) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.previewHandlerProvider = previewHandlerProvider;
        _this.themeService = themeService;
        _this.workspace = workspace;
        _this.editorPreferences = editorPreferences;
        _this.firstUpdate = undefined;
        _this.onDidScrollEmitter = new common_1.Emitter();
        _this.onDidDoubleClickEmitter = new common_1.Emitter();
        _this.preventScrollNotification = false;
        _this.previousContent = '';
        _this.internalRevealForSourceLine = throttle(function (sourceLine) {
            if (!_this.previewHandler || !_this.previewHandler.findElementForSourceLine) {
                return;
            }
            var elementToReveal = _this.previewHandler.findElementForSourceLine(_this.node, sourceLine);
            if (elementToReveal) {
                _this.preventScrollNotification = true;
                elementToReveal.scrollIntoView();
                window.setTimeout(function () {
                    _this.preventScrollNotification = false;
                }, 50);
            }
        }, 50);
        _this.resource = _this.options.resource;
        _this.uri = _this.resource.uri;
        _this.id = 'preview-widget-' + widgetCounter++;
        _this.title.closable = true;
        _this.title.label = "Preview " + _this.uri.path.base;
        _this.title.caption = _this.title.label;
        _this.title.closable = true;
        _this.toDispose.push(_this.onDidScrollEmitter);
        _this.toDispose.push(_this.onDidDoubleClickEmitter);
        _this.addClass(exports.PREVIEW_WIDGET_CLASS);
        _this.node.tabIndex = 0;
        var previewHandler = _this.previewHandler = _this.previewHandlerProvider.findContribution(_this.uri)[0];
        if (!previewHandler) {
            return _this;
        }
        _this.title.iconClass = previewHandler.iconClass || DEFAULT_ICON;
        _this.initialize();
        return _this;
    }
    PreviewWidget.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updateIfAffected;
            var _this = this;
            return __generator(this, function (_a) {
                this.scrollBeyondLastLine = !!this.editorPreferences['editor.scrollBeyondLastLine'];
                this.toDispose.push(this.editorPreferences.onPreferenceChanged(function (e) {
                    if (e.preferenceName === 'editor.scrollBeyondLastLine') {
                        _this.scrollBeyondLastLine = !!e.newValue;
                        _this.forceUpdate();
                    }
                }));
                this.toDispose.push(this.resource);
                if (this.resource.onDidChangeContents) {
                    this.toDispose.push(this.resource.onDidChangeContents(function () { return _this.update(); }));
                }
                updateIfAffected = function (affectedUri) {
                    if (!affectedUri || affectedUri === _this.uri.toString()) {
                        _this.update();
                    }
                };
                this.toDispose.push(this.workspace.onDidOpenTextDocument(function (document) { return updateIfAffected(document.uri); }));
                this.toDispose.push(this.workspace.onDidChangeTextDocument(function (params) { return updateIfAffected(params.textDocument.uri); }));
                this.toDispose.push(this.workspace.onDidCloseTextDocument(function (document) { return updateIfAffected(document.uri); }));
                this.toDispose.push(this.themeService.onThemeChange(function () { return _this.update(); }));
                this.firstUpdate = function () {
                    _this.revealFragment(_this.uri);
                };
                this.update();
                return [2 /*return*/];
            });
        });
    };
    PreviewWidget.prototype.onBeforeAttach = function (msg) {
        _super.prototype.onBeforeAttach.call(this, msg);
        this.toDispose.push(this.startScrollSync());
        this.toDispose.push(this.startDoubleClickListener());
    };
    PreviewWidget.prototype.startScrollSync = function () {
        var _this = this;
        return browser_1.addEventListener(this.node, 'scroll', throttle(function (event) {
            if (_this.preventScrollNotification) {
                return;
            }
            var scrollTop = _this.node.scrollTop;
            _this.didScroll(scrollTop);
        }, 50));
    };
    PreviewWidget.prototype.startDoubleClickListener = function () {
        var _this = this;
        return browser_1.addEventListener(this.node, 'dblclick', function (event) {
            if (!(event.target instanceof HTMLElement)) {
                return;
            }
            var target = event.target;
            var node = target;
            while (node && node instanceof HTMLElement) {
                if (node.tagName === 'A') {
                    return;
                }
                node = node.parentElement;
            }
            var offsetParent = target.offsetParent;
            var offset = offsetParent.classList.contains(exports.PREVIEW_WIDGET_CLASS) ? target.offsetTop : offsetParent.offsetTop;
            _this.didDoubleClick(offset);
        });
    };
    PreviewWidget.prototype.getUri = function () {
        return this.uri;
    };
    PreviewWidget.prototype.getResourceUri = function () {
        return this.uri;
    };
    PreviewWidget.prototype.createMoveToUri = function (resourceUri) {
        return this.uri.withPath(resourceUri.path);
    };
    PreviewWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus();
        this.update();
    };
    PreviewWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.performUpdate();
    };
    PreviewWidget.prototype.forceUpdate = function () {
        this.previousContent = '';
        this.update();
    };
    PreviewWidget.prototype.performUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, document, content, _a, contentElement;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.resource) {
                            return [2 /*return*/];
                        }
                        uri = this.resource.uri;
                        document = this.workspace.textDocuments.find(function (d) { return d.uri === uri.toString(); });
                        if (!document) return [3 /*break*/, 1];
                        _a = document.getText();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.resource.readContents()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        content = _a;
                        if (content === this.previousContent) {
                            return [2 /*return*/];
                        }
                        this.previousContent = content;
                        return [4 /*yield*/, this.render(content, uri)];
                    case 4:
                        contentElement = _b.sent();
                        this.node.innerHTML = '';
                        if (contentElement) {
                            if (this.scrollBeyondLastLine) {
                                contentElement.classList.add('scrollBeyondLastLine');
                            }
                            this.node.appendChild(contentElement);
                            if (this.firstUpdate) {
                                this.firstUpdate();
                                this.firstUpdate = undefined;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PreviewWidget.prototype.render = function (content, originUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.previewHandler || !this.resource) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, this.previewHandler.renderContent({ content: content, originUri: originUri })];
            });
        });
    };
    PreviewWidget.prototype.revealFragment = function (uri) {
        var _this = this;
        if (uri.fragment === '' || !this.previewHandler || !this.previewHandler.findElementForFragment) {
            return;
        }
        var elementToReveal = this.previewHandler.findElementForFragment(this.node, uri.fragment);
        if (elementToReveal) {
            this.preventScrollNotification = true;
            elementToReveal.scrollIntoView();
            window.setTimeout(function () {
                _this.preventScrollNotification = false;
            }, 50);
        }
    };
    PreviewWidget.prototype.revealForSourceLine = function (sourceLine) {
        this.internalRevealForSourceLine(sourceLine);
    };
    Object.defineProperty(PreviewWidget.prototype, "onDidScroll", {
        get: function () {
            return this.onDidScrollEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    PreviewWidget.prototype.fireDidScrollToSourceLine = function (line) {
        this.onDidScrollEmitter.fire(line);
    };
    PreviewWidget.prototype.didScroll = function (scrollTop) {
        if (!this.previewHandler || !this.previewHandler.getSourceLineForOffset) {
            return;
        }
        var offset = scrollTop;
        var line = this.previewHandler.getSourceLineForOffset(this.node, offset);
        if (line) {
            this.fireDidScrollToSourceLine(line);
        }
    };
    Object.defineProperty(PreviewWidget.prototype, "onDidDoubleClick", {
        get: function () {
            return this.onDidDoubleClickEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    PreviewWidget.prototype.fireDidDoubleClickToSourceLine = function (line) {
        if (!this.resource) {
            return;
        }
        this.onDidDoubleClickEmitter.fire({
            uri: this.resource.uri.toString(),
            range: browser_2.Range.create({ line: line, character: 0 }, { line: line, character: 0 })
        });
    };
    PreviewWidget.prototype.didDoubleClick = function (offsetTop) {
        if (!this.previewHandler || !this.previewHandler.getSourceLineForOffset) {
            return;
        }
        var line = this.previewHandler.getSourceLineForOffset(this.node, offsetTop) || 0;
        this.fireDidDoubleClickToSourceLine(line);
    };
    PreviewWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.PreviewWidgetOptions)),
        __param(1, inversify_1.inject(preview_handler_1.PreviewHandlerProvider)),
        __param(2, inversify_1.inject(theming_1.ThemeService)),
        __param(3, inversify_1.inject(browser_2.Workspace)),
        __param(4, inversify_1.inject(browser_3.EditorPreferences)),
        __metadata("design:paramtypes", [Object, preview_handler_1.PreviewHandlerProvider,
            theming_1.ThemeService, Object, Object])
    ], PreviewWidget);
    return PreviewWidget;
}(browser_1.BaseWidget));
exports.PreviewWidget = PreviewWidget;
//# sourceMappingURL=preview-widget.js.map
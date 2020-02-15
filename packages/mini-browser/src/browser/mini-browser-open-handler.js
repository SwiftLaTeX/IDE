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
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/core/lib/browser");
var navigatable_1 = require("@theia/core/lib/browser/navigatable");
var opener_service_1 = require("@theia/core/lib/browser/opener-service");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var mini_browser_service_1 = require("../common/mini-browser-service");
var mini_browser_1 = require("./mini-browser");
var location_mapper_service_1 = require("./location-mapper-service");
var MiniBrowserCommands;
(function (MiniBrowserCommands) {
    MiniBrowserCommands.PREVIEW = {
        id: 'mini-browser.preview',
        label: 'Open Preview',
        iconClass: 'theia-open-preview-icon'
    };
    MiniBrowserCommands.OPEN_SOURCE = {
        id: 'mini-browser.open.source',
        iconClass: 'theia-open-file-icon'
    };
    MiniBrowserCommands.OPEN_URL = {
        id: 'mini-browser.openUrl',
        category: 'Preview',
        label: 'Open URL'
    };
})(MiniBrowserCommands = exports.MiniBrowserCommands || (exports.MiniBrowserCommands = {}));
var MiniBrowserOpenHandler = /** @class */ (function (_super) {
    __extends(MiniBrowserOpenHandler, _super);
    function MiniBrowserOpenHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Instead of going to the backend with each file URI to ask whether it can handle the current file or not,
         * we have this map of extension and priority pairs that we populate at application startup.
         * The real advantage of this approach is the following: [Phosphor cannot run async code when invoking `isEnabled`/`isVisible`
         * for the command handlers](https://github.com/eclipse-theia/theia/issues/1958#issuecomment-392829371)
         * so the menu item would be always visible for the user even if the file type cannot be handled eventually.
         * Hopefully, we could get rid of this hack once we have migrated the existing Phosphor code to [React](https://github.com/eclipse-theia/theia/issues/1915).
         */
        _this.supportedExtensions = new Map();
        _this.id = mini_browser_1.MiniBrowser.ID;
        _this.label = 'Preview';
        return _this;
    }
    MiniBrowserOpenHandler_1 = MiniBrowserOpenHandler;
    MiniBrowserOpenHandler.prototype.onStart = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.miniBrowserService.supportedFileExtensions()];
                    case 1: return [2 /*return*/, (_a.sent()).forEach(function (entry) {
                            var extension = entry.extension, priority = entry.priority;
                            _this.supportedExtensions.set(extension, priority);
                        })];
                }
            });
        }); })();
    };
    MiniBrowserOpenHandler.prototype.canHandle = function (uri) {
        // It does not guard against directories. For instance, a folder with this name: `Hahahah.html`.
        // We could check with the FS, but then, this method would become async again.
        var extension = uri.toString().split('.').pop();
        if (extension) {
            return this.supportedExtensions.get(extension.toLocaleLowerCase()) || 0;
        }
        return 0;
    };
    MiniBrowserOpenHandler.prototype.open = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, area, panelLayout, minSize_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.open.call(this, uri, options)];
                    case 1:
                        widget = _a.sent();
                        area = this.shell.getAreaFor(widget);
                        if (area === 'right' || area === 'left') {
                            panelLayout = area === 'right' ? this.shell.getLayoutData().rightPanel : this.shell.getLayoutData().leftPanel;
                            minSize_1 = this.shell.mainPanel.node.offsetWidth / 2;
                            if (panelLayout && panelLayout.size && panelLayout.size <= minSize_1) {
                                requestAnimationFrame(function () { return _this.shell.resize(minSize_1, area); });
                            }
                        }
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    MiniBrowserOpenHandler.prototype.getOrCreateWidget = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var props, widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.options(uri, options)];
                    case 1:
                        props = _a.sent();
                        return [4 /*yield*/, _super.prototype.getOrCreateWidget.call(this, uri, props)];
                    case 2:
                        widget = _a.sent();
                        widget.setProps(props);
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    MiniBrowserOpenHandler.prototype.options = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var result, startPage, name_1, iconClass, resetBackground;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.defaultOptions()];
                    case 1:
                        result = _a.sent();
                        if (!uri) return [3 /*break*/, 3];
                        startPage = uri.toString(true);
                        name_1 = this.labelProvider.getName(uri);
                        iconClass = this.labelProvider.getIcon(uri) + " file-icon";
                        return [4 /*yield*/, this.resetBackground(uri)];
                    case 2:
                        resetBackground = _a.sent();
                        result = __assign(__assign({}, result), { startPage: startPage,
                            name: name_1,
                            iconClass: iconClass, 
                            // Make sure the toolbar is not visible. We have the `iframe.src` anyway.
                            toolbar: 'hide', resetBackground: resetBackground });
                        _a.label = 3;
                    case 3:
                        if (options) {
                            // Explicit options overrule everything.
                            result = __assign(__assign({}, result), options);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    MiniBrowserOpenHandler.prototype.resetBackground = function (uri) {
        var scheme = uri.scheme;
        var uriStr = uri.toString();
        return scheme === 'http'
            || scheme === 'https'
            || (scheme === 'file'
                && (uriStr.endsWith('html') || uriStr.endsWith('.htm')));
    };
    MiniBrowserOpenHandler.prototype.defaultOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        mode: 'activate',
                        widgetOptions: { area: 'main' },
                        sandbox: mini_browser_1.MiniBrowserProps.SandboxOptions.DEFAULT,
                        toolbar: 'show'
                    }];
            });
        });
    };
    MiniBrowserOpenHandler.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(MiniBrowserCommands.PREVIEW, {
            execute: function (widget) { return _this.preview(widget); },
            isEnabled: function (widget) { return _this.canPreviewWidget(widget); },
            isVisible: function (widget) { return _this.canPreviewWidget(widget); }
        });
        commands.registerCommand(MiniBrowserCommands.OPEN_SOURCE, {
            execute: function (widget) { return _this.openSource(widget); },
            isEnabled: function (widget) { return !!_this.getSourceUri(widget); },
            isVisible: function (widget) { return !!_this.getSourceUri(widget); }
        });
        commands.registerCommand(MiniBrowserCommands.OPEN_URL, {
            execute: function (arg) { return _this.openUrl(arg); }
        });
    };
    MiniBrowserOpenHandler.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(['editor_context_menu', 'navigation'], {
            commandId: MiniBrowserCommands.PREVIEW.id
        });
    };
    MiniBrowserOpenHandler.prototype.registerToolbarItems = function (toolbar) {
        toolbar.registerItem({
            id: MiniBrowserCommands.PREVIEW.id,
            command: MiniBrowserCommands.PREVIEW.id,
            tooltip: 'Open Preview to the Side'
        });
        // toolbar.registerItem({
        //     id: MiniBrowserCommands.OPEN_SOURCE.id,
        //     command: MiniBrowserCommands.OPEN_SOURCE.id,
        //     tooltip: 'Open Source'
        // });
    };
    MiniBrowserOpenHandler.prototype.canPreviewWidget = function (widget) {
        var uri = this.getUriToPreview(widget);
        return !!uri && !!this.canHandle(uri);
    };
    MiniBrowserOpenHandler.prototype.getUriToPreview = function (widget) {
        var current = this.getWidgetToPreview(widget);
        return current && current.getResourceUri();
    };
    MiniBrowserOpenHandler.prototype.getWidgetToPreview = function (widget) {
        var current = widget ? widget : this.shell.currentWidget;
        // MiniBrowser is NavigatableWidget and should be excluded from widgets to preview
        return !(current instanceof mini_browser_1.MiniBrowser) && navigatable_1.NavigatableWidget.is(current) && current || undefined;
    };
    MiniBrowserOpenHandler.prototype.preview = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var ref, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.getWidgetToPreview(widget);
                        if (!ref) {
                            return [2 /*return*/];
                        }
                        uri = ref.getResourceUri();
                        if (!uri) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.open(uri, {
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
    MiniBrowserOpenHandler.prototype.openSource = function (ref) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.getSourceUri(ref);
                        if (!uri) return [3 /*break*/, 2];
                        return [4 /*yield*/, opener_service_1.open(this.openerService, uri, {
                                widgetOptions: { ref: ref, mode: 'open-to-left' }
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MiniBrowserOpenHandler.prototype.getSourceUri = function (ref) {
        var uri = ref instanceof mini_browser_1.MiniBrowser && ref.getResourceUri() || undefined;
        if (!uri || uri.scheme === 'http' || uri.scheme === 'https') {
            return undefined;
        }
        return uri;
    };
    MiniBrowserOpenHandler.prototype.openUrl = function (arg) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!arg) return [3 /*break*/, 1];
                        _a = arg;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.quickInputService.open({
                            prompt: 'URL to open',
                            placeHolder: 'Type a URL'
                        })];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        url = _a;
                        if (!url) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.openPreview(url)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MiniBrowserOpenHandler.prototype.openPreview = function (startPage) {
        return __awaiter(this, void 0, void 0, function () {
            var props, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getOpenPreviewProps;
                        return [4 /*yield*/, this.locationMapperService.map(startPage)];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent()])];
                    case 2:
                        props = _b.sent();
                        return [2 /*return*/, this.open(MiniBrowserOpenHandler_1.PREVIEW_URI, props)];
                }
            });
        });
    };
    MiniBrowserOpenHandler.prototype.getOpenPreviewProps = function (startPage) {
        return __awaiter(this, void 0, void 0, function () {
            var resetBackground;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resetBackground(new uri_1.default(startPage))];
                    case 1:
                        resetBackground = _a.sent();
                        return [2 /*return*/, {
                                name: 'Preview',
                                startPage: startPage,
                                toolbar: 'read-only',
                                widgetOptions: {
                                    area: 'right'
                                },
                                resetBackground: resetBackground,
                                iconClass: 'theia-mini-browser-icon'
                            }];
                }
            });
        });
    };
    var MiniBrowserOpenHandler_1;
    MiniBrowserOpenHandler.PREVIEW_URI = new uri_1.default().withScheme('__minibrowser__preview__');
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], MiniBrowserOpenHandler.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], MiniBrowserOpenHandler.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickInputService),
        __metadata("design:type", browser_1.QuickInputService)
    ], MiniBrowserOpenHandler.prototype, "quickInputService", void 0);
    __decorate([
        inversify_1.inject(mini_browser_service_1.MiniBrowserService),
        __metadata("design:type", Object)
    ], MiniBrowserOpenHandler.prototype, "miniBrowserService", void 0);
    __decorate([
        inversify_1.inject(location_mapper_service_1.LocationMapperService),
        __metadata("design:type", location_mapper_service_1.LocationMapperService)
    ], MiniBrowserOpenHandler.prototype, "locationMapperService", void 0);
    MiniBrowserOpenHandler = MiniBrowserOpenHandler_1 = __decorate([
        inversify_1.injectable()
    ], MiniBrowserOpenHandler);
    return MiniBrowserOpenHandler;
}(navigatable_1.NavigatableWidgetOpenHandler));
exports.MiniBrowserOpenHandler = MiniBrowserOpenHandler;
//# sourceMappingURL=mini-browser-open-handler.js.map
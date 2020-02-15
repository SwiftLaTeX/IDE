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
var PDFObject = require("pdfobject");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var logger_1 = require("@theia/core/lib/common/logger");
var event_1 = require("@theia/core/lib/common/event");
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var keybinding_1 = require("@theia/core/lib/browser/keybinding");
var window_service_1 = require("@theia/core/lib/browser/window/window-service");
var browser_1 = require("@theia/core/lib/browser");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var disposable_1 = require("@theia/core/lib/common/disposable");
var widget_1 = require("@theia/core/lib/browser/widgets/widget");
var location_mapper_service_1 = require("./location-mapper-service");
var application_shell_mouse_tracker_1 = require("@theia/core/lib/browser/shell/application-shell-mouse-tracker");
var debounce = require("lodash.debounce");
var mini_browser_content_style_1 = require("./mini-browser-content-style");
/**
 * Initializer properties for the embedded browser widget.
 */
var MiniBrowserProps = /** @class */ (function () {
    function MiniBrowserProps() {
    }
    MiniBrowserProps = __decorate([
        inversify_1.injectable()
    ], MiniBrowserProps);
    return MiniBrowserProps;
}());
exports.MiniBrowserProps = MiniBrowserProps;
(function (MiniBrowserProps) {
    /**
     * Enumeration of the supported `sandbox` options for the `iframe`.
     */
    var SandboxOptions;
    (function (SandboxOptions) {
        /**
         * Allows form submissions.
         */
        SandboxOptions[SandboxOptions["allow-forms"] = 0] = "allow-forms";
        /**
         * Allows popups, such as `window.open()`, `showModalDialog()`, `target=”_blank”`, etc.
         */
        SandboxOptions[SandboxOptions["allow-popups"] = 1] = "allow-popups";
        /**
         * Allows pointer lock.
         */
        SandboxOptions[SandboxOptions["allow-pointer-lock"] = 2] = "allow-pointer-lock";
        /**
         * Allows the document to maintain its origin. Pages loaded from https://example.com/ will retain access to that origin’s data.
         */
        SandboxOptions[SandboxOptions["allow-same-origin"] = 3] = "allow-same-origin";
        /**
         * Allows JavaScript execution. Also allows features to trigger automatically (as they’d be trivial to implement via JavaScript).
         */
        SandboxOptions[SandboxOptions["allow-scripts"] = 4] = "allow-scripts";
        /**
         * Allows the document to break out of the frame by navigating the top-level `window`.
         */
        SandboxOptions[SandboxOptions["allow-top-navigation"] = 5] = "allow-top-navigation";
        /**
         * Allows the embedded browsing context to open modal windows.
         */
        SandboxOptions[SandboxOptions["allow-modals"] = 6] = "allow-modals";
        /**
         * Allows the embedded browsing context to disable the ability to lock the screen orientation.
         */
        SandboxOptions[SandboxOptions["allow-orientation-lock"] = 7] = "allow-orientation-lock";
        /**
         * Allows a sandboxed document to open new windows without forcing the sandboxing flags upon them.
         * This will allow, for example, a third-party advertisement to be safely sandboxed without forcing the same restrictions upon a landing page.
         */
        SandboxOptions[SandboxOptions["allow-popups-to-escape-sandbox"] = 8] = "allow-popups-to-escape-sandbox";
        /**
         * Allows embedders to have control over whether an iframe can start a presentation session.
         */
        SandboxOptions[SandboxOptions["allow-presentation"] = 9] = "allow-presentation";
        /**
         * Allows the embedded browsing context to navigate (load) content to the top-level browsing context only when initiated by a user gesture.
         * If this keyword is not used, this operation is not allowed.
         */
        SandboxOptions[SandboxOptions["allow-top-navigation-by-user-activation"] = 10] = "allow-top-navigation-by-user-activation";
    })(SandboxOptions = MiniBrowserProps.SandboxOptions || (MiniBrowserProps.SandboxOptions = {}));
    (function (SandboxOptions) {
        /**
         * The default `sandbox` options, if other is not provided.
         *
         * See: https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/
         */
        SandboxOptions.DEFAULT = [
            SandboxOptions['allow-same-origin'],
            SandboxOptions['allow-scripts'],
            SandboxOptions['allow-popups'],
            SandboxOptions['allow-forms'],
            SandboxOptions['allow-modals']
        ];
    })(SandboxOptions = MiniBrowserProps.SandboxOptions || (MiniBrowserProps.SandboxOptions = {}));
})(MiniBrowserProps = exports.MiniBrowserProps || (exports.MiniBrowserProps = {}));
exports.MiniBrowserProps = MiniBrowserProps;
exports.MiniBrowserContentFactory = Symbol('MiniBrowserContentFactory');
var MiniBrowserContent = /** @class */ (function (_super) {
    __extends(MiniBrowserContent, _super);
    function MiniBrowserContent(props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        _this.submitInputEmitter = new event_1.Emitter();
        _this.navigateBackEmitter = new event_1.Emitter();
        _this.navigateForwardEmitter = new event_1.Emitter();
        _this.refreshEmitter = new event_1.Emitter();
        _this.openEmitter = new event_1.Emitter();
        _this.toDisposeOnGo = new disposable_1.DisposableCollection();
        _this.node.tabIndex = 0;
        _this.addClass(mini_browser_content_style_1.MiniBrowserContentStyle.MINI_BROWSER);
        _this.input = _this.createToolbar(_this.node).input;
        var contentArea = _this.createContentArea(_this.node);
        _this.frame = contentArea.frame;
        _this.transparentOverlay = contentArea.transparentOverlay;
        _this.loadIndicator = contentArea.loadIndicator;
        _this.errorBar = contentArea.errorBar;
        _this.pdfContainer = contentArea.pdfContainer;
        _this.initialHistoryLength = history.length;
        _this.toDispose.pushAll([
            _this.submitInputEmitter,
            _this.navigateBackEmitter,
            _this.navigateForwardEmitter,
            _this.refreshEmitter,
            _this.openEmitter
        ]);
        return _this;
    }
    MiniBrowserContent.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.mouseTracker.onMousedown(function (e) {
            if (_this.frame.style.display !== 'none') {
                _this.transparentOverlay.style.display = 'block';
            }
        }));
        this.toDispose.push(this.mouseTracker.onMouseup(function (e) {
            if (_this.frame.style.display !== 'none') {
                _this.transparentOverlay.style.display = 'none';
            }
        }));
        var startPage = this.props.startPage;
        if (startPage) {
            setTimeout(function () { return _this.go(startPage); }, 500);
            this.listenOnContentChange(startPage);
        }
    };
    MiniBrowserContent.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.getToolbarProps() !== 'hide') {
            this.input.focus();
        }
        else {
            this.node.focus();
        }
    };
    MiniBrowserContent.prototype.listenOnContentChange = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var fileUri_1, watcher, onFileChange;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!location.startsWith('file://')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileSystem.exists(location)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        fileUri_1 = new uri_1.default(location);
                        return [4 /*yield*/, this.fileSystemWatcher.watchFileChanges(fileUri_1)];
                    case 2:
                        watcher = _a.sent();
                        this.toDispose.push(watcher);
                        onFileChange = function (event) {
                            if (filesystem_watcher_1.FileChangeEvent.isChanged(event, fileUri_1)) {
                                _this.go(location, {
                                    showLoadIndicator: false
                                });
                            }
                        };
                        this.toDispose.push(this.fileSystemWatcher.onFilesChanged(debounce(onFileChange, 500)));
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MiniBrowserContent.prototype.createToolbar = function (parent) {
        var toolbar = document.createElement('div');
        toolbar.classList.add(this.getToolbarProps() === 'read-only' ? mini_browser_content_style_1.MiniBrowserContentStyle.TOOLBAR_READ_ONLY : mini_browser_content_style_1.MiniBrowserContentStyle.TOOLBAR);
        parent.appendChild(toolbar);
        this.createPrevious(toolbar);
        this.createNext(toolbar);
        this.createRefresh(toolbar);
        var input = this.createInput(toolbar);
        input.readOnly = this.getToolbarProps() === 'read-only';
        this.createOpen(toolbar);
        if (this.getToolbarProps() === 'hide') {
            toolbar.style.display = 'none';
        }
        return Object.assign(toolbar, { input: input });
    };
    MiniBrowserContent.prototype.getToolbarProps = function () {
        return !this.props.startPage ? 'show' : this.props.toolbar || 'show';
    };
    // eslint-disable-next-line max-len
    MiniBrowserContent.prototype.createContentArea = function (parent) {
        var _this = this;
        var contentArea = document.createElement('div');
        contentArea.classList.add(mini_browser_content_style_1.MiniBrowserContentStyle.CONTENT_AREA);
        var loadIndicator = document.createElement('div');
        loadIndicator.classList.add(mini_browser_content_style_1.MiniBrowserContentStyle.PRE_LOAD);
        loadIndicator.style.display = 'none';
        var errorBar = this.createErrorBar();
        var frame = this.createIFrame();
        this.submitInputEmitter.event(function (input) { return _this.go(input, {
            preserveFocus: false
        }); });
        this.navigateBackEmitter.event(this.handleBack.bind(this));
        this.navigateForwardEmitter.event(this.handleForward.bind(this));
        this.refreshEmitter.event(this.handleRefresh.bind(this));
        this.openEmitter.event(this.handleOpen.bind(this));
        var transparentOverlay = document.createElement('div');
        transparentOverlay.classList.add(mini_browser_content_style_1.MiniBrowserContentStyle.TRANSPARENT_OVERLAY);
        transparentOverlay.style.display = 'none';
        var pdfContainer = document.createElement('div');
        pdfContainer.classList.add(mini_browser_content_style_1.MiniBrowserContentStyle.PDF_CONTAINER);
        pdfContainer.id = this.id + "-pdf-container";
        pdfContainer.style.display = 'none';
        contentArea.appendChild(errorBar);
        contentArea.appendChild(transparentOverlay);
        contentArea.appendChild(pdfContainer);
        contentArea.appendChild(loadIndicator);
        contentArea.appendChild(frame);
        parent.appendChild(contentArea);
        return Object.assign(contentArea, { frame: frame, loadIndicator: loadIndicator, errorBar: errorBar, pdfContainer: pdfContainer, transparentOverlay: transparentOverlay });
    };
    MiniBrowserContent.prototype.createIFrame = function () {
        var _a;
        var frame = document.createElement('iframe');
        var sandbox = (this.props.sandbox || MiniBrowserProps.SandboxOptions.DEFAULT).map(function (name) { return MiniBrowserProps.SandboxOptions[name]; });
        (_a = frame.sandbox).add.apply(_a, __spread(sandbox));
        this.toDispose.push(widget_1.addEventListener(frame, 'load', this.onFrameLoad.bind(this)));
        this.toDispose.push(widget_1.addEventListener(frame, 'error', this.onFrameError.bind(this)));
        return frame;
    };
    MiniBrowserContent.prototype.createErrorBar = function () {
        var errorBar = document.createElement('div');
        errorBar.classList.add(mini_browser_content_style_1.MiniBrowserContentStyle.ERROR_BAR);
        errorBar.style.display = 'none';
        var icon = document.createElement('span');
        icon.classList.add('fa', 'problem-tab-icon');
        errorBar.appendChild(icon);
        var message = document.createElement('span');
        errorBar.appendChild(message);
        return Object.assign(errorBar, { message: message });
    };
    MiniBrowserContent.prototype.onFrameLoad = function () {
        clearTimeout(this.frameLoadTimeout);
        this.maybeResetBackground();
        this.hideLoadIndicator();
        this.hideErrorBar();
    };
    MiniBrowserContent.prototype.onFrameError = function () {
        clearTimeout(this.frameLoadTimeout);
        this.maybeResetBackground();
        this.hideLoadIndicator();
        this.showErrorBar('An error occurred while loading this page');
    };
    MiniBrowserContent.prototype.onFrameTimeout = function () {
        clearTimeout(this.frameLoadTimeout);
        this.maybeResetBackground();
        this.hideLoadIndicator();
        this.showErrorBar('Still loading...');
    };
    MiniBrowserContent.prototype.showLoadIndicator = function () {
        this.loadIndicator.classList.remove(mini_browser_content_style_1.MiniBrowserContentStyle.FADE_OUT);
        this.loadIndicator.style.display = 'block';
    };
    MiniBrowserContent.prototype.hideLoadIndicator = function () {
        var _this = this;
        // Start the fade-out transition.
        this.loadIndicator.classList.add(mini_browser_content_style_1.MiniBrowserContentStyle.FADE_OUT);
        // Actually hide the load indicator after the transition is finished.
        var preloadStyle = window.getComputedStyle(this.loadIndicator);
        var transitionDuration = browser_1.parseCssTime(preloadStyle.transitionDuration, 0);
        setTimeout(function () {
            // But don't hide it if it was shown again since the transition started.
            if (_this.loadIndicator.classList.contains(mini_browser_content_style_1.MiniBrowserContentStyle.FADE_OUT)) {
                _this.loadIndicator.style.display = 'none';
                _this.loadIndicator.classList.remove(mini_browser_content_style_1.MiniBrowserContentStyle.FADE_OUT);
            }
        }, transitionDuration);
    };
    MiniBrowserContent.prototype.showErrorBar = function (message) {
        this.errorBar.message.textContent = message;
        this.errorBar.style.display = 'block';
    };
    MiniBrowserContent.prototype.hideErrorBar = function () {
        this.errorBar.message.textContent = '';
        this.errorBar.style.display = 'none';
    };
    MiniBrowserContent.prototype.maybeResetBackground = function () {
        if (this.props.resetBackground === true) {
            this.frame.style.backgroundColor = 'white';
        }
    };
    MiniBrowserContent.prototype.handleBack = function () {
        if (history.length - this.initialHistoryLength > 0) {
            history.back();
        }
    };
    MiniBrowserContent.prototype.handleForward = function () {
        if (history.length > this.initialHistoryLength) {
            history.forward();
        }
    };
    MiniBrowserContent.prototype.handleRefresh = function () {
        // Initial pessimism; use the location of the input.
        var location = this.props.startPage;
        // Use the the location from the `input`.
        if (this.input && this.input.value) {
            location = this.input.value;
        }
        try {
            var contentDocument = this.frame.contentDocument;
            if (contentDocument && contentDocument.location) {
                location = contentDocument.location.href;
            }
        }
        catch (_a) {
            // Security exception due to CORS when trying to access the `location.href` of the content document.
        }
        if (location) {
            this.go(location, {
                preserveFocus: false
            });
        }
    };
    MiniBrowserContent.prototype.handleOpen = function () {
        var location = this.frameSrc() || this.input.value;
        if (location) {
            this.windowService.openNewWindow(location);
        }
    };
    MiniBrowserContent.prototype.createInput = function (parent) {
        var _this = this;
        var input = document.createElement('input');
        input.type = 'text';
        input.classList.add('theia-input');
        this.toDispose.pushAll([
            widget_1.addEventListener(input, 'keydown', this.handleInputChange.bind(this)),
            widget_1.addEventListener(input, 'click', function () {
                if (_this.getToolbarProps() === 'read-only') {
                    _this.handleOpen();
                }
                else {
                    if (input.value) {
                        input.select();
                    }
                }
            })
        ]);
        parent.appendChild(input);
        return input;
    };
    MiniBrowserContent.prototype.handleInputChange = function (e) {
        var _this = this;
        var key = browser_1.KeyCode.createKeyCode(e).key;
        if (key && browser_1.Key.ENTER.keyCode === key.keyCode && this.getToolbarProps() === 'show') {
            var srcElement = e.srcElement;
            if (srcElement instanceof HTMLInputElement) {
                this.mapLocation(srcElement.value).then(function (location) { return _this.submitInputEmitter.fire(location); });
            }
        }
    };
    MiniBrowserContent.prototype.createPrevious = function (parent) {
        return this.onClick(this.createButton(parent, 'Show The Previous Page', mini_browser_content_style_1.MiniBrowserContentStyle.PREVIOUS), this.navigateBackEmitter);
    };
    MiniBrowserContent.prototype.createNext = function (parent) {
        return this.onClick(this.createButton(parent, 'Show The Next Page', mini_browser_content_style_1.MiniBrowserContentStyle.NEXT), this.navigateForwardEmitter);
    };
    MiniBrowserContent.prototype.createRefresh = function (parent) {
        return this.onClick(this.createButton(parent, 'Reload This Page', mini_browser_content_style_1.MiniBrowserContentStyle.REFRESH), this.refreshEmitter);
    };
    MiniBrowserContent.prototype.createOpen = function (parent) {
        var button = this.onClick(this.createButton(parent, 'Open In A New Window', mini_browser_content_style_1.MiniBrowserContentStyle.OPEN), this.openEmitter);
        return button;
    };
    MiniBrowserContent.prototype.createButton = function (parent, title) {
        var _a;
        var className = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            className[_i - 2] = arguments[_i];
        }
        var button = document.createElement('div');
        button.title = title;
        (_a = button.classList).add.apply(_a, __spread(className, [mini_browser_content_style_1.MiniBrowserContentStyle.BUTTON]));
        parent.appendChild(button);
        return button;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MiniBrowserContent.prototype.onClick = function (element, emitter) {
        this.toDispose.push(widget_1.addEventListener(element, 'click', function () {
            if (!element.classList.contains(mini_browser_content_style_1.MiniBrowserContentStyle.DISABLED)) {
                emitter.fire(undefined);
            }
        }));
        return element;
    };
    MiniBrowserContent.prototype.mapLocation = function (location) {
        return this.locationMapper.map(location);
    };
    MiniBrowserContent.prototype.setInput = function (value) {
        if (this.input.value !== value) {
            this.input.value = value;
        }
    };
    MiniBrowserContent.prototype.frameSrc = function () {
        var src = this.frame.src;
        try {
            var contentWindow = this.frame.contentWindow;
            if (contentWindow) {
                src = contentWindow.location.href;
            }
        }
        catch (_a) {
            // CORS issue. Ignored.
        }
        if (src === 'about:blank') {
            src = '';
        }
        return src;
    };
    MiniBrowserContent.prototype.contentDocument = function () {
        try {
            var contentDocument = this.frame.contentDocument;
            // eslint-disable-next-line no-null/no-null
            if (contentDocument === null) {
                var contentWindow = this.frame.contentWindow;
                if (contentWindow) {
                    contentDocument = contentWindow.document;
                }
            }
            return contentDocument;
        }
        catch (_a) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
    };
    MiniBrowserContent.prototype.go = function (location, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, showLoadIndicator, preserveFocus, url, e_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __assign({ showLoadIndicator: true, preserveFocus: true }, options), showLoadIndicator = _a.showLoadIndicator, preserveFocus = _a.preserveFocus;
                        if (!location) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.toDisposeOnGo.dispose();
                        return [4 /*yield*/, this.mapLocation(location)];
                    case 2:
                        url = _b.sent();
                        this.setInput(url);
                        if (this.getToolbarProps() === 'read-only') {
                            this.input.title = "Open " + url + " In A New Window";
                        }
                        clearTimeout(this.frameLoadTimeout);
                        this.frameLoadTimeout = window.setTimeout(this.onFrameTimeout.bind(this), 4000);
                        if (showLoadIndicator) {
                            this.showLoadIndicator();
                        }
                        if (location.endsWith('.pdf') || url.endsWith('.pdf')) {
                            this.pdfContainer.style.display = 'block';
                            this.frame.style.display = 'none';
                            PDFObject.embed(url, this.pdfContainer, {
                                // eslint-disable-next-line max-len, @typescript-eslint/quotes
                                fallbackLink: "<p style=\"padding: 0px 15px 0px 15px\">Your browser does not support inline PDFs. Click on this <a href='[url]' target=\"_blank\">link</a> to open the PDF in a new tab.</p>"
                            });
                            clearTimeout(this.frameLoadTimeout);
                            this.hideLoadIndicator();
                            if (!preserveFocus) {
                                this.pdfContainer.focus();
                            }
                        }
                        else {
                            this.pdfContainer.style.display = 'none';
                            this.frame.style.display = 'block';
                            this.frame.src = url;
                            // The load indicator will hide itself if the content of the iframe was loaded.
                            if (!preserveFocus) {
                                this.frame.addEventListener('load', function () {
                                    var window = _this.frame.contentWindow;
                                    if (window) {
                                        window.focus();
                                    }
                                }, { once: true });
                            }
                        }
                        // Delegate all the `keypress` events from the `iframe` to the application.
                        this.toDisposeOnGo.push(widget_1.addEventListener(this.frame, 'load', function () {
                            try {
                                var contentDocument_1 = _this.frame.contentDocument;
                                if (contentDocument_1) {
                                    var keypressHandler_1 = function (e) { return _this.keybindings.run(e); };
                                    contentDocument_1.addEventListener('keypress', keypressHandler_1, true);
                                    _this.toDisposeOnDetach.push(disposable_1.Disposable.create(function () { return contentDocument_1.removeEventListener('keypress', keypressHandler_1); }));
                                }
                            }
                            catch (_a) {
                                // There is not much we could do with the security exceptions due to CORS.
                            }
                        }));
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        clearTimeout(this.frameLoadTimeout);
                        this.hideLoadIndicator();
                        this.showErrorBar(String(e_1));
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], MiniBrowserContent.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], MiniBrowserContent.prototype, "windowService", void 0);
    __decorate([
        inversify_1.inject(location_mapper_service_1.LocationMapperService),
        __metadata("design:type", location_mapper_service_1.LocationMapperService)
    ], MiniBrowserContent.prototype, "locationMapper", void 0);
    __decorate([
        inversify_1.inject(keybinding_1.KeybindingRegistry),
        __metadata("design:type", keybinding_1.KeybindingRegistry)
    ], MiniBrowserContent.prototype, "keybindings", void 0);
    __decorate([
        inversify_1.inject(application_shell_mouse_tracker_1.ApplicationShellMouseTracker),
        __metadata("design:type", application_shell_mouse_tracker_1.ApplicationShellMouseTracker)
    ], MiniBrowserContent.prototype, "mouseTracker", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], MiniBrowserContent.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(filesystem_watcher_1.FileSystemWatcher),
        __metadata("design:type", filesystem_watcher_1.FileSystemWatcher)
    ], MiniBrowserContent.prototype, "fileSystemWatcher", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniBrowserContent.prototype, "init", null);
    MiniBrowserContent = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(MiniBrowserProps)),
        __metadata("design:paramtypes", [MiniBrowserProps])
    ], MiniBrowserContent);
    return MiniBrowserContent;
}(widget_1.BaseWidget));
exports.MiniBrowserContent = MiniBrowserContent;
//# sourceMappingURL=mini-browser-content.js.map
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
var algorithm_1 = require("@phosphor/algorithm");
var signaling_1 = require("@phosphor/signaling");
var widgets_1 = require("@phosphor/widgets");
var common_1 = require("../../common");
var browser_1 = require("../browser");
var saveable_1 = require("../saveable");
var status_bar_1 = require("../status-bar/status-bar");
var theia_dock_panel_1 = require("./theia-dock-panel");
var side_panel_handler_1 = require("./side-panel-handler");
var tab_bars_1 = require("./tab-bars");
var split_panels_1 = require("./split-panels");
var frontend_application_state_1 = require("../frontend-application-state");
var tab_bar_toolbar_1 = require("./tab-bar-toolbar");
var context_key_service_1 = require("../context-key-service");
var event_1 = require("../../common/event");
var widgets_2 = require("../widgets");
/** The class name added to ApplicationShell instances. */
var APPLICATION_SHELL_CLASS = 'theia-ApplicationShell';
/** The class name added to the main and bottom area panels. */
var MAIN_BOTTOM_AREA_CLASS = 'theia-app-centers';
/** Status bar entry identifier for the bottom panel toggle button. */
var BOTTOM_PANEL_TOGGLE_ID = 'bottom-panel-toggle';
/** The class name added to the main area panel. */
var MAIN_AREA_CLASS = 'theia-app-main';
/** The class name added to the bottom area panel. */
var BOTTOM_AREA_CLASS = 'theia-app-bottom';
/**
 * When a version is increased, make sure to introduce a migration (ApplicationShellLayoutMigration) to this version.
 */
exports.applicationShellLayoutVersion = 3.0;
exports.ApplicationShellOptions = Symbol('ApplicationShellOptions');
exports.DockPanelRendererFactory = Symbol('DockPanelRendererFactory');
/**
 * A renderer for dock panels that supports context menus on tabs.
 */
var DockPanelRenderer = /** @class */ (function () {
    function DockPanelRenderer(tabBarRendererFactory, tabBarToolbarRegistry, tabBarToolbarFactory) {
        this.tabBarRendererFactory = tabBarRendererFactory;
        this.tabBarToolbarRegistry = tabBarToolbarRegistry;
        this.tabBarToolbarFactory = tabBarToolbarFactory;
        this.tabBarClasses = [];
    }
    DockPanelRenderer.prototype.createTabBar = function () {
        var renderer = this.tabBarRendererFactory();
        var tabBar = new tab_bars_1.ToolbarAwareTabBar(this.tabBarToolbarRegistry, this.tabBarToolbarFactory, {
            renderer: renderer,
            // Scroll bar options
            handlers: ['drag-thumb', 'keyboard', 'wheel', 'touch'],
            useBothWheelAxes: true,
            scrollXMarginOffset: 4,
            suppressScrollY: true
        });
        this.tabBarClasses.forEach(function (c) { return tabBar.addClass(c); });
        renderer.tabBar = tabBar;
        renderer.contextMenuPath = tab_bars_1.SHELL_TABBAR_CONTEXT_MENU;
        tabBar.currentChanged.connect(this.onCurrentTabChanged, this);
        return tabBar;
    };
    DockPanelRenderer.prototype.createHandle = function () {
        return widgets_1.DockPanel.defaultRenderer.createHandle();
    };
    DockPanelRenderer.prototype.onCurrentTabChanged = function (sender, _a) {
        var currentIndex = _a.currentIndex;
        if (currentIndex >= 0) {
            sender.revealTab(currentIndex);
        }
    };
    DockPanelRenderer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(tab_bars_1.TabBarRendererFactory)),
        __param(1, inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarRegistry)),
        __param(2, inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarFactory)),
        __metadata("design:paramtypes", [Function, tab_bar_toolbar_1.TabBarToolbarRegistry, Function])
    ], DockPanelRenderer);
    return DockPanelRenderer;
}());
exports.DockPanelRenderer = DockPanelRenderer;
/**
 * The application shell manages the top-level widgets of the application. Use this class to
 * add, remove, or activate a widget.
 */
var ApplicationShell = /** @class */ (function (_super) {
    __extends(ApplicationShell, _super);
    /**
     * Construct a new application shell.
     */
    function ApplicationShell(dockPanelRendererFactory, statusBar, sidePanelHandlerFactory, splitPositionHandler, applicationStateService, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.dockPanelRendererFactory = dockPanelRendererFactory;
        _this.statusBar = statusBar;
        _this.splitPositionHandler = splitPositionHandler;
        _this.applicationStateService = applicationStateService;
        /**
         * The current state of the bottom panel.
         */
        _this.bottomPanelState = {
            empty: true,
            expansion: side_panel_handler_1.SidePanel.ExpansionState.collapsed,
            pendingUpdate: Promise.resolve()
        };
        _this.tracker = new widgets_1.FocusTracker();
        _this.onDidAddWidgetEmitter = new event_1.Emitter();
        _this.onDidAddWidget = _this.onDidAddWidgetEmitter.event;
        _this.onDidRemoveWidgetEmitter = new event_1.Emitter();
        _this.onDidRemoveWidget = _this.onDidRemoveWidgetEmitter.event;
        _this.onDidChangeActiveWidgetEmitter = new event_1.Emitter();
        _this.onDidChangeActiveWidget = _this.onDidChangeActiveWidgetEmitter.event;
        _this.onDidChangeCurrentWidgetEmitter = new event_1.Emitter();
        _this.onDidChangeCurrentWidget = _this.onDidChangeCurrentWidgetEmitter.event;
        /**
         * A signal emitted whenever the `currentWidget` property is changed.
         *
         * @deprecated since 0.11.0, use `onDidChangeActiveWidget` instead
         */
        _this.currentChanged = new signaling_1.Signal(_this);
        /**
         * A signal emitted whenever the `activeWidget` property is changed.
         *
         * @deprecated since 0.11.0, use `onDidChangeActiveWidget` instead
         */
        _this.activeChanged = new signaling_1.Signal(_this);
        _this.activationTimeout = 2000;
        _this.toDisposeOnActivationCheck = new common_1.DisposableCollection();
        _this.addClass(APPLICATION_SHELL_CLASS);
        _this.id = 'theia-app-shell';
        // Merge the user-defined application options with the default options
        _this.options = {
            bottomPanel: __assign(__assign({}, ApplicationShell_1.DEFAULT_OPTIONS.bottomPanel), options.bottomPanel || {}),
            leftPanel: __assign(__assign({}, ApplicationShell_1.DEFAULT_OPTIONS.leftPanel), options.leftPanel || {}),
            rightPanel: __assign(__assign({}, ApplicationShell_1.DEFAULT_OPTIONS.rightPanel), options.rightPanel || {})
        };
        _this.mainPanel = _this.createMainPanel();
        _this.topPanel = _this.createTopPanel();
        _this.bottomPanel = _this.createBottomPanel();
        _this.leftPanelHandler = sidePanelHandlerFactory();
        _this.leftPanelHandler.create('left', _this.options.leftPanel);
        _this.leftPanelHandler.dockPanel.widgetAdded.connect(function (_, widget) { return _this.fireDidAddWidget(widget); });
        _this.leftPanelHandler.dockPanel.widgetRemoved.connect(function (_, widget) { return _this.fireDidRemoveWidget(widget); });
        _this.rightPanelHandler = sidePanelHandlerFactory();
        _this.rightPanelHandler.create('right', _this.options.rightPanel);
        _this.rightPanelHandler.dockPanel.widgetAdded.connect(function (_, widget) { return _this.fireDidAddWidget(widget); });
        _this.rightPanelHandler.dockPanel.widgetRemoved.connect(function (_, widget) { return _this.fireDidRemoveWidget(widget); });
        _this.layout = _this.createLayout();
        _this.tracker.currentChanged.connect(_this.onCurrentChanged, _this);
        _this.tracker.activeChanged.connect(_this.onActiveChanged, _this);
        return _this;
    }
    ApplicationShell_1 = ApplicationShell;
    ApplicationShell.prototype.fireDidAddWidget = function (widget) {
        this.onDidAddWidgetEmitter.fire(widget);
    };
    ApplicationShell.prototype.fireDidRemoveWidget = function (widget) {
        this.onDidRemoveWidgetEmitter.fire(widget);
    };
    ApplicationShell.prototype.init = function () {
        this.initSidebarVisibleKeyContext();
        this.initFocusKeyContexts();
    };
    ApplicationShell.prototype.initSidebarVisibleKeyContext = function () {
        var leftSideBarPanel = this.leftPanelHandler.dockPanel;
        var sidebarVisibleKey = this.contextKeyService.createKey('sidebarVisible', leftSideBarPanel.isVisible);
        var onAfterShow = leftSideBarPanel['onAfterShow'].bind(leftSideBarPanel);
        leftSideBarPanel['onAfterShow'] = function (msg) {
            onAfterShow(msg);
            sidebarVisibleKey.set(true);
        };
        var onAfterHide = leftSideBarPanel['onAfterHide'].bind(leftSideBarPanel);
        leftSideBarPanel['onAfterHide'] = function (msg) {
            onAfterHide(msg);
            sidebarVisibleKey.set(false);
        };
    };
    ApplicationShell.prototype.initFocusKeyContexts = function () {
        var _this = this;
        var sideBarFocus = this.contextKeyService.createKey('sideBarFocus', false);
        var panelFocus = this.contextKeyService.createKey('panelFocus', false);
        var updateFocusContextKeys = function () {
            var area = _this.activeWidget && _this.getAreaFor(_this.activeWidget);
            sideBarFocus.set(area === 'left');
            panelFocus.set(area === 'main');
        };
        updateFocusContextKeys();
        this.activeChanged.connect(updateFocusContextKeys);
    };
    ApplicationShell.prototype.onBeforeAttach = function (msg) {
        document.addEventListener('p-dragenter', this, true);
        document.addEventListener('p-dragover', this, true);
        document.addEventListener('p-dragleave', this, true);
        document.addEventListener('p-drop', this, true);
    };
    ApplicationShell.prototype.onAfterDetach = function (msg) {
        document.removeEventListener('p-dragenter', this, true);
        document.removeEventListener('p-dragover', this, true);
        document.removeEventListener('p-dragleave', this, true);
        document.removeEventListener('p-drop', this, true);
    };
    ApplicationShell.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'p-dragenter':
                this.onDragEnter(event);
                break;
            case 'p-dragover':
                this.onDragOver(event);
                break;
            case 'p-drop':
                this.onDrop(event);
                break;
            case 'p-dragleave':
                this.onDragLeave(event);
                break;
        }
    };
    ApplicationShell.prototype.onDragEnter = function (_a) {
        var mimeData = _a.mimeData;
        if (!this.dragState) {
            if (mimeData && mimeData.hasData('application/vnd.phosphor.widget-factory')) {
                // The drag contains a widget, so we'll track it and expand side panels as needed
                this.dragState = {
                    startTime: performance.now(),
                    leftExpanded: false,
                    rightExpanded: false,
                    bottomExpanded: false
                };
            }
        }
    };
    ApplicationShell.prototype.onDragOver = function (event) {
        var _this = this;
        var state = this.dragState;
        if (state) {
            state.lastDragOver = event;
            if (state.leaveTimeout) {
                window.clearTimeout(state.leaveTimeout);
                state.leaveTimeout = undefined;
            }
            var clientX = event.clientX, clientY = event.clientY;
            var _a = this.node, offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
            // Don't expand any side panels right after the drag has started
            var allowExpansion = performance.now() - state.startTime >= 500;
            var expLeft = allowExpansion && clientX >= offsetLeft
                && clientX <= offsetLeft + this.options.leftPanel.expandThreshold;
            var expRight = allowExpansion && clientX <= offsetLeft + clientWidth
                && clientX >= offsetLeft + clientWidth - this.options.rightPanel.expandThreshold;
            var expBottom = allowExpansion && !expLeft && !expRight && clientY <= offsetTop + clientHeight
                && clientY >= offsetTop + clientHeight - this.options.bottomPanel.expandThreshold;
            // eslint-disable-next-line no-null/no-null
            if (expLeft && !state.leftExpanded && this.leftPanelHandler.tabBar.currentTitle === null) {
                // The mouse cursor is moved close to the left border
                this.leftPanelHandler.expand();
                this.leftPanelHandler.state.pendingUpdate.then(function () { return _this.dispatchMouseMove(); });
                state.leftExpanded = true;
            }
            else if (!expLeft && state.leftExpanded) {
                // The mouse cursor is moved away from the left border
                this.leftPanelHandler.collapse();
                state.leftExpanded = false;
            }
            // eslint-disable-next-line no-null/no-null
            if (expRight && !state.rightExpanded && this.rightPanelHandler.tabBar.currentTitle === null) {
                // The mouse cursor is moved close to the right border
                this.rightPanelHandler.expand();
                this.rightPanelHandler.state.pendingUpdate.then(function () { return _this.dispatchMouseMove(); });
                state.rightExpanded = true;
            }
            else if (!expRight && state.rightExpanded) {
                // The mouse cursor is moved away from the right border
                this.rightPanelHandler.collapse();
                state.rightExpanded = false;
            }
            if (expBottom && !state.bottomExpanded && this.bottomPanel.isHidden) {
                // The mouse cursor is moved close to the bottom border
                this.expandBottomPanel();
                this.bottomPanelState.pendingUpdate.then(function () { return _this.dispatchMouseMove(); });
                state.bottomExpanded = true;
            }
            else if (!expBottom && state.bottomExpanded) {
                // The mouse cursor is moved away from the bottom border
                this.collapseBottomPanel();
                state.bottomExpanded = false;
            }
        }
    };
    /**
     * This method is called after a side panel has been expanded while dragging a widget. It fires
     * a `mousemove` event so that the drag overlay markers are updated correctly in all dock panels.
     */
    ApplicationShell.prototype.dispatchMouseMove = function () {
        if (this.dragState && this.dragState.lastDragOver) {
            var _a = this.dragState.lastDragOver, clientX = _a.clientX, clientY = _a.clientY;
            var event_2 = document.createEvent('MouseEvent');
            event_2.initMouseEvent('mousemove', true, true, window, 0, 0, 0, 
            // eslint-disable-next-line no-null/no-null
            clientX, clientY, false, false, false, false, 0, null);
            document.dispatchEvent(event_2);
        }
    };
    ApplicationShell.prototype.onDrop = function (event) {
        var _this = this;
        var state = this.dragState;
        if (state) {
            if (state.leaveTimeout) {
                window.clearTimeout(state.leaveTimeout);
            }
            this.dragState = undefined;
            window.requestAnimationFrame(function () {
                // Clean up the side panel state in the next frame
                if (_this.leftPanelHandler.dockPanel.isEmpty) {
                    _this.leftPanelHandler.collapse();
                }
                if (_this.rightPanelHandler.dockPanel.isEmpty) {
                    _this.rightPanelHandler.collapse();
                }
                if (_this.bottomPanel.isEmpty) {
                    _this.collapseBottomPanel();
                }
            });
        }
    };
    ApplicationShell.prototype.onDragLeave = function (event) {
        var _this = this;
        var state = this.dragState;
        if (state) {
            state.lastDragOver = undefined;
            if (state.leaveTimeout) {
                window.clearTimeout(state.leaveTimeout);
            }
            state.leaveTimeout = window.setTimeout(function () {
                _this.dragState = undefined;
                if (state.leftExpanded || _this.leftPanelHandler.dockPanel.isEmpty) {
                    _this.leftPanelHandler.collapse();
                }
                if (state.rightExpanded || _this.rightPanelHandler.dockPanel.isEmpty) {
                    _this.rightPanelHandler.collapse();
                }
                if (state.bottomExpanded || _this.bottomPanel.isEmpty) {
                    _this.collapseBottomPanel();
                }
            }, 100);
        }
    };
    /**
     * Create the dock panel in the main shell area.
     */
    ApplicationShell.prototype.createMainPanel = function () {
        var _this = this;
        var renderer = this.dockPanelRendererFactory();
        renderer.tabBarClasses.push(MAIN_BOTTOM_AREA_CLASS);
        renderer.tabBarClasses.push(MAIN_AREA_CLASS);
        var dockPanel = new theia_dock_panel_1.TheiaDockPanel({
            mode: 'multiple-document',
            renderer: renderer,
            spacing: 0
        });
        dockPanel.id = theia_dock_panel_1.MAIN_AREA_ID;
        dockPanel.widgetAdded.connect(function (_, widget) { return _this.fireDidAddWidget(widget); });
        dockPanel.widgetRemoved.connect(function (_, widget) { return _this.fireDidRemoveWidget(widget); });
        return dockPanel;
    };
    /**
     * Create the dock panel in the bottom shell area.
     */
    ApplicationShell.prototype.createBottomPanel = function () {
        var _this = this;
        var renderer = this.dockPanelRendererFactory();
        renderer.tabBarClasses.push(MAIN_BOTTOM_AREA_CLASS);
        renderer.tabBarClasses.push(BOTTOM_AREA_CLASS);
        var dockPanel = new theia_dock_panel_1.TheiaDockPanel({
            mode: 'multiple-document',
            renderer: renderer,
            spacing: 0
        });
        dockPanel.id = theia_dock_panel_1.BOTTOM_AREA_ID;
        dockPanel.widgetAdded.connect(function (sender, widget) {
            _this.refreshBottomPanelToggleButton();
        });
        dockPanel.widgetRemoved.connect(function (sender, widget) {
            if (sender.isEmpty) {
                _this.collapseBottomPanel();
            }
            _this.refreshBottomPanelToggleButton();
        }, this);
        dockPanel.node.addEventListener('p-dragenter', function (event) {
            // Make sure that the main panel hides its overlay when the bottom panel is expanded
            _this.mainPanel.overlay.hide(0);
        });
        dockPanel.hide();
        dockPanel.widgetAdded.connect(function (_, widget) { return _this.fireDidAddWidget(widget); });
        dockPanel.widgetRemoved.connect(function (_, widget) { return _this.fireDidRemoveWidget(widget); });
        return dockPanel;
    };
    /**
     * Create the top panel, which is used to hold the main menu.
     */
    ApplicationShell.prototype.createTopPanel = function () {
        var topPanel = new widgets_1.Panel();
        topPanel.id = 'theia-top-panel';
        return topPanel;
    };
    /**
     * Create a box layout to assemble the application shell layout.
     */
    ApplicationShell.prototype.createBoxLayout = function (widgets, stretch, options) {
        var boxLayout = new widgets_1.BoxLayout(options);
        for (var i = 0; i < widgets.length; i++) {
            if (stretch !== undefined && i < stretch.length) {
                widgets_1.BoxPanel.setStretch(widgets[i], stretch[i]);
            }
            boxLayout.addWidget(widgets[i]);
        }
        return boxLayout;
    };
    /**
     * Create a split layout to assemble the application shell layout.
     */
    ApplicationShell.prototype.createSplitLayout = function (widgets, stretch, options) {
        var optParam = { renderer: widgets_1.SplitPanel.defaultRenderer, };
        if (options) {
            optParam = __assign(__assign({}, optParam), options);
        }
        var splitLayout = new widgets_1.SplitLayout(optParam);
        for (var i = 0; i < widgets.length; i++) {
            if (stretch !== undefined && i < stretch.length) {
                widgets_1.SplitPanel.setStretch(widgets[i], stretch[i]);
            }
            splitLayout.addWidget(widgets[i]);
        }
        return splitLayout;
    };
    /**
     * Assemble the application shell layout. Override this method in order to change the arrangement
     * of the main area and the side panels.
     */
    ApplicationShell.prototype.createLayout = function () {
        var bottomSplitLayout = this.createSplitLayout([this.mainPanel, this.bottomPanel], [1, 0], { orientation: 'vertical', spacing: 0 });
        var panelForBottomArea = new widgets_1.SplitPanel({ layout: bottomSplitLayout });
        panelForBottomArea.id = 'theia-bottom-split-panel';
        var leftRightSplitLayout = this.createSplitLayout([this.leftPanelHandler.container, panelForBottomArea, this.rightPanelHandler.container], [0, 1, 0], { orientation: 'horizontal', spacing: 0 });
        var panelForSideAreas = new widgets_1.SplitPanel({ layout: leftRightSplitLayout });
        panelForSideAreas.id = 'theia-left-right-split-panel';
        return this.createBoxLayout([this.topPanel, panelForSideAreas, this.statusBar], [0, 1, 0], { direction: 'top-to-bottom', spacing: 0 });
    };
    /**
     * Create an object that describes the current shell layout. This object may contain references
     * to widgets; these need to be transformed before the layout can be serialized.
     */
    ApplicationShell.prototype.getLayoutData = function () {
        return {
            version: exports.applicationShellLayoutVersion,
            mainPanel: this.mainPanel.saveLayout(),
            bottomPanel: {
                config: this.bottomPanel.saveLayout(),
                size: this.bottomPanel.isVisible ? this.getBottomPanelSize() : this.bottomPanelState.lastPanelSize,
                expanded: this.isExpanded('bottom')
            },
            leftPanel: this.leftPanelHandler.getLayoutData(),
            rightPanel: this.rightPanelHandler.getLayoutData(),
            activeWidgetId: this.activeWidget ? this.activeWidget.id : undefined
        };
    };
    /**
     * Compute the current height of the bottom panel. This implementation assumes that the container
     * of the bottom panel is a `SplitPanel`.
     */
    ApplicationShell.prototype.getBottomPanelSize = function () {
        var parent = this.bottomPanel.parent;
        if (parent instanceof widgets_1.SplitPanel && parent.isVisible) {
            var index = parent.widgets.indexOf(this.bottomPanel) - 1;
            if (index >= 0) {
                var handle = parent.handles[index];
                if (!handle.classList.contains('p-mod-hidden')) {
                    var parentHeight = parent.node.clientHeight;
                    return parentHeight - handle.offsetTop;
                }
            }
        }
    };
    /**
     * Determine the default size to apply when the bottom panel is expanded for the first time.
     */
    ApplicationShell.prototype.getDefaultBottomPanelSize = function () {
        var parent = this.bottomPanel.parent;
        if (parent && parent.isVisible) {
            return parent.node.clientHeight * this.options.bottomPanel.initialSizeRatio;
        }
    };
    /**
     * Apply a shell layout that has been previously created with `getLayoutData`.
     */
    ApplicationShell.prototype.setLayoutData = function (layoutData) {
        return __awaiter(this, void 0, void 0, function () {
            var mainPanel, bottomPanel, leftPanel, rightPanel, activeWidgetId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mainPanel = layoutData.mainPanel, bottomPanel = layoutData.bottomPanel, leftPanel = layoutData.leftPanel, rightPanel = layoutData.rightPanel, activeWidgetId = layoutData.activeWidgetId;
                        if (!leftPanel) return [3 /*break*/, 2];
                        this.leftPanelHandler.setLayoutData(leftPanel);
                        return [4 /*yield*/, this.registerWithFocusTracker(leftPanel)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!rightPanel) return [3 /*break*/, 4];
                        this.rightPanelHandler.setLayoutData(rightPanel);
                        return [4 /*yield*/, this.registerWithFocusTracker(rightPanel)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: 
                    // Proceed with the bottom panel once the side panels are set up
                    return [4 /*yield*/, Promise.all([this.leftPanelHandler.state.pendingUpdate, this.rightPanelHandler.state.pendingUpdate])];
                    case 5:
                        // Proceed with the bottom panel once the side panels are set up
                        _a.sent();
                        if (!bottomPanel) return [3 /*break*/, 8];
                        if (!bottomPanel.config) return [3 /*break*/, 7];
                        this.bottomPanel.restoreLayout(bottomPanel.config);
                        return [4 /*yield*/, this.registerWithFocusTracker(bottomPanel.config.main)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        if (bottomPanel.size) {
                            this.bottomPanelState.lastPanelSize = bottomPanel.size;
                        }
                        if (bottomPanel.expanded) {
                            this.expandBottomPanel();
                        }
                        else {
                            this.collapseBottomPanel();
                        }
                        this.refreshBottomPanelToggleButton();
                        _a.label = 8;
                    case 8: 
                    // Proceed with the main panel once all others are set up
                    return [4 /*yield*/, this.bottomPanelState.pendingUpdate];
                    case 9:
                        // Proceed with the main panel once all others are set up
                        _a.sent();
                        if (!mainPanel) return [3 /*break*/, 11];
                        this.mainPanel.restoreLayout(mainPanel);
                        return [4 /*yield*/, this.registerWithFocusTracker(mainPanel.main)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        if (activeWidgetId) {
                            this.activateWidget(activeWidgetId);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Modify the height of the bottom panel. This implementation assumes that the container of the
     * bottom panel is a `SplitPanel`.
     */
    ApplicationShell.prototype.setBottomPanelSize = function (size) {
        var enableAnimation = this.applicationStateService.state === 'ready';
        var options = {
            side: 'bottom',
            duration: enableAnimation ? this.options.bottomPanel.expandDuration : 0,
            referenceWidget: this.bottomPanel
        };
        var promise = this.splitPositionHandler.setSidePanelSize(this.bottomPanel, size, options);
        var result = new Promise(function (resolve) {
            // Resolve the resulting promise in any case, regardless of whether resizing was successful
            promise.then(function () { return resolve(); }, function () { return resolve(); });
        });
        this.bottomPanelState.pendingUpdate = this.bottomPanelState.pendingUpdate.then(function () { return result; });
        return result;
    };
    Object.defineProperty(ApplicationShell.prototype, "pendingUpdates", {
        /**
         * A promise that is resolved when all currently pending updates are done.
         */
        get: function () {
            return Promise.all([
                this.bottomPanelState.pendingUpdate,
                this.leftPanelHandler.state.pendingUpdate,
                this.rightPanelHandler.state.pendingUpdate
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ]);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Track all widgets that are referenced by the given layout data.
     */
    ApplicationShell.prototype.registerWithFocusTracker = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, widget, e_1_1, _c, _d, child, e_2_1, _e, _f, item, e_3_1;
            var e_1, _g, e_2, _h, e_3, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        if (!data) return [3 /*break*/, 26];
                        if (!(data.type === 'tab-area')) return [3 /*break*/, 9];
                        _k.label = 1;
                    case 1:
                        _k.trys.push([1, 6, 7, 8]);
                        _a = __values(data.widgets), _b = _a.next();
                        _k.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        widget = _b.value;
                        if (!widget) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.track(widget)];
                    case 3:
                        _k.sent();
                        _k.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _k.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [3 /*break*/, 26];
                    case 9:
                        if (!(data.type === 'split-area')) return [3 /*break*/, 18];
                        _k.label = 10;
                    case 10:
                        _k.trys.push([10, 15, 16, 17]);
                        _c = __values(data.children), _d = _c.next();
                        _k.label = 11;
                    case 11:
                        if (!!_d.done) return [3 /*break*/, 14];
                        child = _d.value;
                        return [4 /*yield*/, this.registerWithFocusTracker(child)];
                    case 12:
                        _k.sent();
                        _k.label = 13;
                    case 13:
                        _d = _c.next();
                        return [3 /*break*/, 11];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_2_1 = _k.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 17: return [3 /*break*/, 26];
                    case 18:
                        if (!(data.type === 'sidepanel' && data.items)) return [3 /*break*/, 26];
                        _k.label = 19;
                    case 19:
                        _k.trys.push([19, 24, 25, 26]);
                        _e = __values(data.items), _f = _e.next();
                        _k.label = 20;
                    case 20:
                        if (!!_f.done) return [3 /*break*/, 23];
                        item = _f.value;
                        if (!item.widget) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.track(item.widget)];
                    case 21:
                        _k.sent();
                        _k.label = 22;
                    case 22:
                        _f = _e.next();
                        return [3 /*break*/, 20];
                    case 23: return [3 /*break*/, 26];
                    case 24:
                        e_3_1 = _k.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 26];
                    case 25:
                        try {
                            if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 26: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Add a widget to the application shell. The given widget must have a unique `id` property,
     * which will be used as the DOM id.
     *
     * Widgets are removed from the shell by calling their `close` or `dispose` methods.
     *
     * Widgets added to the top area are not tracked regarding the _current_ and _active_ states.
     */
    ApplicationShell.prototype.addWidget = function (widget, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var ref, area, tabBar, addOptions, areaPanel, sideRef, sidePanelOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!widget.id) {
                            console.error('Widgets added to the application shell must have a unique id property.');
                            return [2 /*return*/];
                        }
                        ref = options.ref;
                        area = options.area || 'main';
                        if (!ref && (area === 'main' || area === 'bottom')) {
                            tabBar = this.getTabBarFor(area);
                            ref = tabBar && tabBar.currentTitle && tabBar.currentTitle.owner || undefined;
                        }
                        // make sure that ref belongs to area
                        area = ref && this.getAreaFor(ref) || area;
                        addOptions = {};
                        if (ApplicationShell_1.isOpenToSideMode(options.mode)) {
                            areaPanel = area === 'main' ? this.mainPanel : area === 'bottom' ? this.bottomPanel : undefined;
                            sideRef = areaPanel && ref && (options.mode === 'open-to-left' ?
                                areaPanel.previousTabBarWidget(ref) :
                                areaPanel.nextTabBarWidget(ref));
                            if (sideRef) {
                                addOptions.ref = sideRef;
                            }
                            else {
                                addOptions.ref = ref;
                                addOptions.mode = options.mode === 'open-to-left' ? 'split-left' : 'split-right';
                            }
                        }
                        else {
                            addOptions.ref = ref;
                            addOptions.mode = options.mode;
                        }
                        sidePanelOptions = { rank: options.rank };
                        switch (area) {
                            case 'main':
                                this.mainPanel.addWidget(widget, addOptions);
                                break;
                            case 'top':
                                this.topPanel.addWidget(widget);
                                break;
                            case 'bottom':
                                this.bottomPanel.addWidget(widget, addOptions);
                                break;
                            case 'left':
                                this.leftPanelHandler.addWidget(widget, sidePanelOptions);
                                break;
                            case 'right':
                                this.rightPanelHandler.addWidget(widget, sidePanelOptions);
                                break;
                            default:
                                throw new Error('Unexpected area: ' + options.area);
                        }
                        if (!(area !== 'top')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.track(widget)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The widgets contained in the given shell area.
     */
    ApplicationShell.prototype.getWidgets = function (area) {
        switch (area) {
            case 'main':
                return algorithm_1.toArray(this.mainPanel.widgets());
            case 'top':
                return algorithm_1.toArray(this.topPanel.widgets);
            case 'bottom':
                return algorithm_1.toArray(this.bottomPanel.widgets());
            case 'left':
                return algorithm_1.toArray(this.leftPanelHandler.dockPanel.widgets());
            case 'right':
                return algorithm_1.toArray(this.rightPanelHandler.dockPanel.widgets());
            default:
                throw new Error('Illegal argument: ' + area);
        }
    };
    /**
     * Find the widget that contains the given HTML element. The returned widget may be one
     * that is managed by the application shell, or one that is embedded in another widget and
     * not directly managed by the shell, or a tab bar.
     */
    ApplicationShell.prototype.findWidgetForElement = function (element) {
        var widgetNode = element;
        while (widgetNode && !widgetNode.classList.contains('p-Widget')) {
            widgetNode = widgetNode.parentElement;
        }
        if (widgetNode) {
            return this.findWidgetForNode(widgetNode, this);
        }
        return undefined;
    };
    ApplicationShell.prototype.findWidgetForNode = function (widgetNode, widget) {
        var _this = this;
        if (widget.node === widgetNode) {
            return widget;
        }
        var result;
        algorithm_1.each(widget.children(), function (child) {
            result = _this.findWidgetForNode(widgetNode, child);
            return !result;
        });
        return result;
    };
    Object.defineProperty(ApplicationShell.prototype, "currentWidget", {
        /**
         * The current widget in the application shell. The current widget is the last widget that
         * was active and not yet closed. See the remarks to `activeWidget` on what _active_ means.
         */
        get: function () {
            return this.tracker.currentWidget || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationShell.prototype, "activeWidget", {
        /**
         * The active widget in the application shell. The active widget is the one that has focus
         * (either the widget itself or any of its contents).
         *
         * _Note:_ Focus is taken by a widget through the `onActivateRequest` method. It is up to the
         * widget implementation which DOM element will get the focus. The default implementation
         * does not take any focus; in that case the widget is never returned by this property.
         */
        get: function () {
            return this.tracker.activeWidget || undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the last active widget in the given shell area.
     */
    ApplicationShell.prototype.getCurrentWidget = function (area) {
        var title;
        switch (area) {
            case 'main':
                title = this.mainPanel.currentTitle;
                break;
            case 'bottom':
                title = this.bottomPanel.currentTitle;
                break;
            case 'left':
                title = this.leftPanelHandler.tabBar.currentTitle;
                break;
            case 'right':
                title = this.rightPanelHandler.tabBar.currentTitle;
                break;
            default:
                throw new Error('Illegal argument: ' + area);
        }
        return title ? title.owner : undefined;
    };
    /**
     * Handle a change to the current widget.
     */
    ApplicationShell.prototype.onCurrentChanged = function (sender, args) {
        this.currentChanged.emit(args);
        this.onDidChangeCurrentWidgetEmitter.fire(args);
    };
    /**
     * Handle a change to the active widget.
     */
    ApplicationShell.prototype.onActiveChanged = function (sender, args) {
        var newValue = args.newValue, oldValue = args.oldValue;
        if (oldValue) {
            var w = oldValue;
            while (w) {
                // Remove the mark of the previously active widget
                w.title.className = w.title.className.replace(' theia-mod-active', '');
                w = w.parent;
            }
            // Reset the z-index to the default
            // eslint-disable-next-line no-null/no-null
            this.setZIndex(oldValue.node, null);
        }
        if (newValue) {
            var w = newValue;
            while (w) {
                // Mark the tab of the active widget
                w.title.className += ' theia-mod-active';
                w = w.parent;
            }
            // Reveal the title of the active widget in its tab bar
            var tabBar = this.getTabBarFor(newValue);
            if (tabBar instanceof tab_bars_1.ScrollableTabBar) {
                var index = tabBar.titles.indexOf(newValue.title);
                if (index >= 0) {
                    tabBar.revealTab(index);
                }
            }
            var panel = this.getAreaPanelFor(newValue);
            if (panel instanceof theia_dock_panel_1.TheiaDockPanel) {
                panel.markAsCurrent(newValue.title);
            }
            // Set the z-index so elements with `position: fixed` contained in the active widget are displayed correctly
            this.setZIndex(newValue.node, '1');
        }
        this.activeChanged.emit(args);
        this.onDidChangeActiveWidgetEmitter.fire(args);
    };
    /**
     * Set the z-index of the given element and its ancestors to the value `z`.
     */
    ApplicationShell.prototype.setZIndex = function (element, z) {
        element.style.zIndex = z;
        var parent = element.parentElement;
        if (parent && parent !== this.node) {
            this.setZIndex(parent, z);
        }
    };
    /**
     * Track the given widget so it is considered in the `current` and `active` state of the shell.
     */
    ApplicationShell.prototype.track = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, toTrack, e_4_1;
            var e_4, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.tracker.widgets.indexOf(widget) !== -1) {
                            return [2 /*return*/];
                        }
                        this.tracker.add(widget);
                        this.checkActivation(widget);
                        saveable_1.Saveable.apply(widget);
                        if (!ApplicationShell_1.TrackableWidgetProvider.is(widget)) return [3 /*break*/, 10];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        return [4 /*yield*/, widget.getTrackableWidgets()];
                    case 2:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        toTrack = _b.value;
                        return [4 /*yield*/, this.track(toTrack)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_4_1 = _d.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        if (widget.onDidChangeTrackableWidgets) {
                            widget.onDidChangeTrackableWidgets(function (widgets) { return widgets.forEach(function (w) { return _this.track(w); }); });
                        }
                        _d.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ApplicationShell.prototype.toTrackedStack = function (id) {
        var tracked = new Map(this.tracker.widgets.map(function (w) { return [w.id, w]; }));
        var current = tracked.get(id);
        var stack = [];
        while (current) {
            if (tracked.has(current.id)) {
                stack.push(current);
            }
            current = current.parent || undefined;
        }
        return stack;
    };
    /**
     * Activate a widget in the application shell. This makes the widget visible and usually
     * also assigns focus to it.
     *
     * _Note:_ Focus is taken by a widget through the `onActivateRequest` method. It is up to the
     * widget implementation which DOM element will get the focus. The default implementation
     * does not take any focus.
     *
     * @returns the activated widget if it was found
     */
    ApplicationShell.prototype.activateWidget = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var stack, current, child;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stack = this.toTrackedStack(id);
                        current = stack.pop();
                        if (current && !this.doActivateWidget(current.id)) {
                            return [2 /*return*/, undefined];
                        }
                        while (current && stack.length) {
                            child = stack.pop();
                            if (ApplicationShell_1.TrackableWidgetProvider.is(current) && current.activateWidget) {
                                current = current.activateWidget(child.id);
                            }
                            else {
                                child.activate();
                                current = child;
                            }
                        }
                        if (!current) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, Promise.all([
                                this.waitForActivation(current.id),
                                widgets_2.waitForRevealed(current),
                                this.pendingUpdates
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, current];
                }
            });
        });
    };
    ApplicationShell.prototype.waitForActivation = function (id) {
        var _this = this;
        if (this.activeWidget && this.activeWidget.id === id) {
            return Promise.resolve();
        }
        return new Promise(function (resolve) {
            var toDispose = _this.onDidChangeActiveWidget(function () {
                if (_this.activeWidget && _this.activeWidget.id === id) {
                    toDispose.dispose();
                    resolve();
                }
            });
        });
    };
    /**
     * Activate top-level area widget.
     */
    ApplicationShell.prototype.doActivateWidget = function (id) {
        var widget = algorithm_1.find(this.mainPanel.widgets(), function (w) { return w.id === id; });
        if (widget) {
            this.mainPanel.activateWidget(widget);
            return widget;
        }
        widget = algorithm_1.find(this.bottomPanel.widgets(), function (w) { return w.id === id; });
        if (widget) {
            this.expandBottomPanel();
            this.bottomPanel.activateWidget(widget);
            return widget;
        }
        widget = this.leftPanelHandler.activate(id);
        if (widget) {
            return widget;
        }
        widget = this.rightPanelHandler.activate(id);
        if (widget) {
            return widget;
        }
    };
    /**
     * Focus is taken by a widget through the `onActivateRequest` method. It is up to the
     * widget implementation which DOM element will get the focus. The default implementation
     * of Widget does not take any focus. This method can help finding such problems by logging
     * a warning in case a widget was explicitly activated, but did not trigger a change of the
     * `activeWidget` property.
     */
    ApplicationShell.prototype.checkActivation = function (widget) {
        var _this = this;
        var onActivateRequest = widget['onActivateRequest'].bind(widget);
        widget['onActivateRequest'] = function (msg) {
            onActivateRequest(msg);
            _this.assertActivated(widget);
        };
        return widget;
    };
    ApplicationShell.prototype.assertActivated = function (widget) {
        var _this = this;
        this.toDisposeOnActivationCheck.dispose();
        var onDispose = function () { return _this.toDisposeOnActivationCheck.dispose(); };
        widget.disposed.connect(onDispose);
        this.toDisposeOnActivationCheck.push(common_1.Disposable.create(function () { return widget.disposed.disconnect(onDispose); }));
        var start = 0;
        var step = function (timestamp) {
            if (document.activeElement && widget.node.contains(document.activeElement)) {
                return;
            }
            if (!start) {
                start = timestamp;
            }
            var delta = timestamp - start;
            if (delta < _this.activationTimeout) {
                request = window.requestAnimationFrame(step);
            }
            else {
                console.warn("Widget was activated, but did not accept focus after " + _this.activationTimeout + "ms: " + widget.id);
            }
        };
        var request = window.requestAnimationFrame(step);
        this.toDisposeOnActivationCheck.push(common_1.Disposable.create(function () { return window.cancelAnimationFrame(request); }));
    };
    /**
     * Reveal a widget in the application shell. This makes the widget visible,
     * but does not activate it.
     *
     * @returns the revealed widget if it was found
     */
    ApplicationShell.prototype.revealWidget = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var stack, current, child;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stack = this.toTrackedStack(id);
                        current = stack.pop();
                        if (current && !this.doRevealWidget(current.id)) {
                            return [2 /*return*/, undefined];
                        }
                        while (current && stack.length) {
                            child = stack.pop();
                            if (ApplicationShell_1.TrackableWidgetProvider.is(current) && current.revealWidget) {
                                current = current.revealWidget(child.id);
                            }
                            else {
                                current = child;
                            }
                        }
                        if (!current) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, Promise.all([
                                widgets_2.waitForRevealed(current),
                                this.pendingUpdates
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, current];
                }
            });
        });
    };
    /**
     * Reveal top-level area widget.
     */
    ApplicationShell.prototype.doRevealWidget = function (id) {
        var widget = algorithm_1.find(this.mainPanel.widgets(), function (w) { return w.id === id; });
        if (!widget) {
            widget = algorithm_1.find(this.bottomPanel.widgets(), function (w) { return w.id === id; });
            if (widget) {
                this.expandBottomPanel();
            }
        }
        if (widget) {
            var tabBar = this.getTabBarFor(widget);
            if (tabBar) {
                tabBar.currentTitle = widget.title;
            }
            return widget;
        }
        widget = this.leftPanelHandler.expand(id);
        if (widget) {
            return widget;
        }
        return this.rightPanelHandler.expand(id);
    };
    /**
     * Expand the named side panel area. This makes sure that the panel is visible, even if there
     * are no widgets in it. If the panel is already visible, nothing happens. If the panel is currently
     * collapsed (see `collapsePanel`) and it contains widgets, the widgets are revealed that were
     * visible before it was collapsed.
     */
    ApplicationShell.prototype.expandPanel = function (area) {
        switch (area) {
            case 'bottom':
                this.expandBottomPanel();
                break;
            case 'left':
                this.leftPanelHandler.expand();
                break;
            case 'right':
                this.rightPanelHandler.expand();
                break;
            default:
                throw new Error('Area cannot be expanded: ' + area);
        }
    };
    /**
     * Adjusts the size of the given area in the application shell.
     *
     * @param size the desired size of the panel in pixels.
     * @param area the area to resize.
     */
    ApplicationShell.prototype.resize = function (size, area) {
        switch (area) {
            case 'bottom':
                if (this.bottomPanel.isHidden) {
                    this.bottomPanelState.lastPanelSize = size;
                }
                else {
                    this.setBottomPanelSize(size);
                }
                break;
            case 'left':
                this.leftPanelHandler.resize(size);
                break;
            case 'right':
                this.rightPanelHandler.resize(size);
                break;
            default:
                throw new Error('Area cannot be resized: ' + area);
        }
    };
    /**
     * Expand the bottom panel. See `expandPanel` regarding the exact behavior.
     */
    ApplicationShell.prototype.expandBottomPanel = function () {
        var _this = this;
        var bottomPanel = this.bottomPanel;
        if (bottomPanel.isHidden) {
            var relativeSizes = void 0;
            var parent_1 = bottomPanel.parent;
            if (parent_1 instanceof widgets_1.SplitPanel) {
                relativeSizes = parent_1.relativeSizes();
            }
            bottomPanel.show();
            if (relativeSizes && parent_1 instanceof widgets_1.SplitPanel) {
                // Make sure that the expansion animation starts at the smallest possible size
                parent_1.setRelativeSizes(relativeSizes);
            }
            var size = void 0;
            if (bottomPanel.isEmpty) {
                bottomPanel.node.style.minHeight = '0';
                size = this.options.bottomPanel.emptySize;
            }
            else if (this.bottomPanelState.lastPanelSize) {
                size = this.bottomPanelState.lastPanelSize;
            }
            else {
                size = this.getDefaultBottomPanelSize();
            }
            if (size) {
                this.bottomPanelState.expansion = side_panel_handler_1.SidePanel.ExpansionState.expanding;
                this.setBottomPanelSize(size).then(function () {
                    if (_this.bottomPanelState.expansion === side_panel_handler_1.SidePanel.ExpansionState.expanding) {
                        _this.bottomPanelState.expansion = side_panel_handler_1.SidePanel.ExpansionState.expanded;
                    }
                });
            }
            else {
                this.bottomPanelState.expansion = side_panel_handler_1.SidePanel.ExpansionState.expanded;
            }
        }
    };
    /**
     * Collapse the named side panel area. This makes sure that the panel is hidden,
     * increasing the space that is available for other shell areas.
     */
    ApplicationShell.prototype.collapsePanel = function (area) {
        switch (area) {
            case 'bottom':
                return this.collapseBottomPanel();
            case 'left':
                return this.leftPanelHandler.collapse();
            case 'right':
                return this.rightPanelHandler.collapse();
            default:
                throw new Error('Area cannot be collapsed: ' + area);
        }
    };
    /**
     * Collapse the bottom panel. All contained widgets are hidden, but not closed.
     * They can be restored by calling `expandBottomPanel`.
     */
    ApplicationShell.prototype.collapseBottomPanel = function () {
        var bottomPanel = this.bottomPanel;
        if (bottomPanel.isHidden) {
            return Promise.resolve();
        }
        if (this.bottomPanelState.expansion === side_panel_handler_1.SidePanel.ExpansionState.expanded) {
            var size = this.getBottomPanelSize();
            if (size) {
                this.bottomPanelState.lastPanelSize = size;
            }
        }
        this.bottomPanelState.expansion = side_panel_handler_1.SidePanel.ExpansionState.collapsed;
        bottomPanel.hide();
        return browser_1.animationFrame();
    };
    /**
     * Refresh the toggle button for the bottom panel. This implementation creates a status bar entry
     * and refers to the command `core.toggle.bottom.panel`.
     */
    ApplicationShell.prototype.refreshBottomPanelToggleButton = function () {
        if (this.bottomPanel.isEmpty) {
            this.statusBar.removeElement(BOTTOM_PANEL_TOGGLE_ID);
        }
        else {
            var element = {
                text: '$(window-maximize)',
                alignment: status_bar_1.StatusBarAlignment.RIGHT,
                tooltip: 'Toggle Bottom Panel',
                command: 'core.toggle.bottom.panel',
                priority: -1000
            };
            this.statusBar.setElement(BOTTOM_PANEL_TOGGLE_ID, element);
        }
    };
    /**
     * Check whether the named side panel area is expanded (returns `true`) or collapsed (returns `false`).
     */
    ApplicationShell.prototype.isExpanded = function (area) {
        switch (area) {
            case 'bottom':
                return this.bottomPanelState.expansion === side_panel_handler_1.SidePanel.ExpansionState.expanded;
            case 'left':
                return this.leftPanelHandler.state.expansion === side_panel_handler_1.SidePanel.ExpansionState.expanded;
            case 'right':
                return this.rightPanelHandler.state.expansion === side_panel_handler_1.SidePanel.ExpansionState.expanded;
            default:
                return true;
        }
    };
    /**
     * Close all tabs or a selection of tabs in a specific part of the application shell.
     *
     * @param tabBarOrArea
     *      Either the name of a shell area or a `TabBar` that is contained in such an area.
     * @param filter
     *      If undefined, all tabs are closed; otherwise only those tabs that match the filter are closed.
     */
    ApplicationShell.prototype.closeTabs = function (tabBarOrArea, filter) {
        var _this = this;
        if (tabBarOrArea === 'main') {
            this.mainAreaTabBars.forEach(function (tb) { return _this.closeTabs(tb, filter); });
        }
        else if (tabBarOrArea === 'bottom') {
            this.bottomAreaTabBars.forEach(function (tb) { return _this.closeTabs(tb, filter); });
        }
        else if (typeof tabBarOrArea === 'string') {
            var tabBar = this.getTabBarFor(tabBarOrArea);
            if (tabBar) {
                this.closeTabs(tabBar, filter);
            }
        }
        else if (tabBarOrArea) {
            var titles = algorithm_1.toArray(tabBarOrArea.titles);
            for (var i = 0; i < titles.length; i++) {
                if (filter === undefined || filter(titles[i], i)) {
                    titles[i].owner.close();
                }
            }
        }
    };
    ApplicationShell.prototype.closeWidget = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var stack, widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stack = this.toTrackedStack(id);
                        widget = this.toTrackedStack(id).pop();
                        if (!widget) {
                            return [2 /*return*/, undefined];
                        }
                        widget.close();
                        return [4 /*yield*/, Promise.all([
                                widgets_2.waitForClosed(widget),
                                this.pendingUpdates
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, stack[0] || widget];
                }
            });
        });
    };
    Object.defineProperty(ApplicationShell.prototype, "currentTabArea", {
        /**
         * The shell area name of the currently active tab, or undefined.
         */
        get: function () {
            var currentWidget = this.currentWidget;
            if (currentWidget) {
                return this.getAreaFor(currentWidget);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determine the name of the shell area where the given widget resides. The result is
     * undefined if the widget does not reside directly in the shell.
     */
    ApplicationShell.prototype.getAreaFor = function (input) {
        if (input instanceof widgets_1.TabBar) {
            if (algorithm_1.find(this.mainPanel.tabBars(), function (tb) { return tb === input; })) {
                return 'main';
            }
            if (algorithm_1.find(this.bottomPanel.tabBars(), function (tb) { return tb === input; })) {
                return 'bottom';
            }
            if (this.leftPanelHandler.tabBar === input) {
                return 'left';
            }
            if (this.rightPanelHandler.tabBar === input) {
                return 'right';
            }
        }
        var widget = this.toTrackedStack(input.id).pop();
        if (!widget) {
            return undefined;
        }
        var title = widget.title;
        var mainPanelTabBar = this.mainPanel.findTabBar(title);
        if (mainPanelTabBar) {
            return 'main';
        }
        var bottomPanelTabBar = this.bottomPanel.findTabBar(title);
        if (bottomPanelTabBar) {
            return 'bottom';
        }
        if (algorithm_1.ArrayExt.firstIndexOf(this.leftPanelHandler.tabBar.titles, title) > -1) {
            return 'left';
        }
        if (algorithm_1.ArrayExt.firstIndexOf(this.rightPanelHandler.tabBar.titles, title) > -1) {
            return 'right';
        }
        return undefined;
    };
    ApplicationShell.prototype.getAreaPanelFor = function (input) {
        var widget = this.toTrackedStack(input.id).pop();
        if (!widget) {
            return undefined;
        }
        var title = widget.title;
        var mainPanelTabBar = this.mainPanel.findTabBar(title);
        if (mainPanelTabBar) {
            return this.mainPanel;
        }
        var bottomPanelTabBar = this.bottomPanel.findTabBar(title);
        if (bottomPanelTabBar) {
            return this.bottomPanel;
        }
        if (algorithm_1.ArrayExt.firstIndexOf(this.leftPanelHandler.tabBar.titles, title) > -1) {
            return this.leftPanelHandler.dockPanel;
        }
        if (algorithm_1.ArrayExt.firstIndexOf(this.rightPanelHandler.tabBar.titles, title) > -1) {
            return this.rightPanelHandler.dockPanel;
        }
        return undefined;
    };
    Object.defineProperty(ApplicationShell.prototype, "currentTabBar", {
        /**
         * Return the tab bar that has the currently active widget, or undefined.
         */
        get: function () {
            var currentWidget = this.currentWidget;
            if (currentWidget) {
                return this.getTabBarFor(currentWidget);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Return the tab bar in the given shell area, or the tab bar that has the given widget, or undefined.
     */
    ApplicationShell.prototype.getTabBarFor = function (widgetOrArea) {
        if (typeof widgetOrArea === 'string') {
            switch (widgetOrArea) {
                case 'main':
                    return this.mainPanel.currentTabBar;
                case 'bottom':
                    return this.bottomPanel.currentTabBar;
                case 'left':
                    return this.leftPanelHandler.tabBar;
                case 'right':
                    return this.rightPanelHandler.tabBar;
                default:
                    throw new Error('Illegal argument: ' + widgetOrArea);
            }
        }
        var widget = this.toTrackedStack(widgetOrArea.id).pop();
        if (!widget) {
            return undefined;
        }
        var widgetTitle = widget.title;
        var mainPanelTabBar = this.mainPanel.findTabBar(widgetTitle);
        if (mainPanelTabBar) {
            return mainPanelTabBar;
        }
        var bottomPanelTabBar = this.bottomPanel.findTabBar(widgetTitle);
        if (bottomPanelTabBar) {
            return bottomPanelTabBar;
        }
        var leftPanelTabBar = this.leftPanelHandler.tabBar;
        if (algorithm_1.ArrayExt.firstIndexOf(leftPanelTabBar.titles, widgetTitle) > -1) {
            return leftPanelTabBar;
        }
        var rightPanelTabBar = this.rightPanelHandler.tabBar;
        if (algorithm_1.ArrayExt.firstIndexOf(rightPanelTabBar.titles, widgetTitle) > -1) {
            return rightPanelTabBar;
        }
        return undefined;
    };
    Object.defineProperty(ApplicationShell.prototype, "mainAreaTabBars", {
        /**
         * The tab bars contained in the main shell area. If there is no widget in the main area, the
         * returned array is empty.
         */
        get: function () {
            return algorithm_1.toArray(this.mainPanel.tabBars());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationShell.prototype, "bottomAreaTabBars", {
        /**
         * The tab bars contained in the bottom shell area. If there is no widget in the bottom area,
         * the returned array is empty.
         */
        get: function () {
            return algorithm_1.toArray(this.bottomPanel.tabBars());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationShell.prototype, "allTabBars", {
        /**
         * The tab bars contained in all shell areas.
         */
        get: function () {
            return __spread(this.mainAreaTabBars, this.bottomAreaTabBars, [this.leftPanelHandler.tabBar, this.rightPanelHandler.tabBar]);
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Activate the next tab in the current tab bar.
     */
    ApplicationShell.prototype.activateNextTab = function () {
        var current = this.currentTabBar;
        if (current) {
            var ci = current.currentIndex;
            if (ci !== -1) {
                if (ci < current.titles.length - 1) {
                    current.currentIndex += 1;
                    if (current.currentTitle) {
                        current.currentTitle.owner.activate();
                    }
                }
                else if (ci === current.titles.length - 1) {
                    var nextBar = this.nextTabBar(current);
                    nextBar.currentIndex = 0;
                    if (nextBar.currentTitle) {
                        nextBar.currentTitle.owner.activate();
                    }
                }
            }
        }
    };
    /**
     * Return the tab bar next to the given tab bar; return the given tab bar if there is no adjacent one.
     */
    ApplicationShell.prototype.nextTabBar = function (current) {
        var bars = algorithm_1.toArray(this.bottomPanel.tabBars());
        var len = bars.length;
        var ci = algorithm_1.ArrayExt.firstIndexOf(bars, current);
        if (ci < 0) {
            bars = algorithm_1.toArray(this.mainPanel.tabBars());
            len = bars.length;
            ci = algorithm_1.ArrayExt.firstIndexOf(bars, current);
        }
        if (ci >= 0 && ci < len - 1) {
            return bars[ci + 1];
        }
        else if (ci >= 0 && ci === len - 1) {
            return bars[0];
        }
        else {
            return current;
        }
    };
    /*
     * Activate the previous tab in the current tab bar.
     */
    ApplicationShell.prototype.activatePreviousTab = function () {
        var current = this.currentTabBar;
        if (current) {
            var ci = current.currentIndex;
            if (ci !== -1) {
                if (ci > 0) {
                    current.currentIndex -= 1;
                    if (current.currentTitle) {
                        current.currentTitle.owner.activate();
                    }
                }
                else if (ci === 0) {
                    var prevBar = this.previousTabBar(current);
                    var len = prevBar.titles.length;
                    prevBar.currentIndex = len - 1;
                    if (prevBar.currentTitle) {
                        prevBar.currentTitle.owner.activate();
                    }
                }
            }
        }
    };
    /**
     * Return the tab bar previous to the given tab bar; return the given tab bar if there is no adjacent one.
     */
    ApplicationShell.prototype.previousTabBar = function (current) {
        var bars = algorithm_1.toArray(this.mainPanel.tabBars());
        var len = bars.length;
        var ci = algorithm_1.ArrayExt.firstIndexOf(bars, current);
        if (ci > 0) {
            return bars[ci - 1];
        }
        else if (ci === 0) {
            return bars[len - 1];
        }
        else {
            return current;
        }
    };
    /**
     * Test whether the current widget is dirty.
     */
    ApplicationShell.prototype.canSave = function () {
        return saveable_1.Saveable.isDirty(this.currentWidget);
    };
    /**
     * Save the current widget if it is dirty.
     */
    ApplicationShell.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, saveable_1.Saveable.save(this.currentWidget)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Test whether there is a dirty widget.
     */
    ApplicationShell.prototype.canSaveAll = function () {
        return this.tracker.widgets.some(saveable_1.Saveable.isDirty);
    };
    /**
     * Save all dirty widgets.
     */
    ApplicationShell.prototype.saveAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.tracker.widgets.map(saveable_1.Saveable.save))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ApplicationShell.prototype, "widgets", {
        /**
         * Returns a snapshot of all tracked widgets to allow async modifications.
         */
        get: function () {
            return __spread(this.tracker.widgets);
        },
        enumerable: true,
        configurable: true
    });
    ApplicationShell.prototype.canToggleMaximized = function () {
        var area = this.currentWidget && this.getAreaFor(this.currentWidget);
        return area === 'main' || area === 'bottom';
    };
    ApplicationShell.prototype.toggleMaximized = function () {
        var area = this.currentWidget && this.getAreaPanelFor(this.currentWidget);
        if (area instanceof theia_dock_panel_1.TheiaDockPanel && (area === this.mainPanel || area === this.bottomPanel)) {
            area.toggleMaximized();
        }
    };
    var ApplicationShell_1;
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], ApplicationShell.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ApplicationShell.prototype, "init", null);
    ApplicationShell = ApplicationShell_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.DockPanelRendererFactory)),
        __param(1, inversify_1.inject(status_bar_1.StatusBarImpl)),
        __param(2, inversify_1.inject(side_panel_handler_1.SidePanelHandlerFactory)),
        __param(3, inversify_1.inject(split_panels_1.SplitPositionHandler)),
        __param(4, inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService)),
        __param(5, inversify_1.inject(exports.ApplicationShellOptions)), __param(5, inversify_1.optional()),
        __metadata("design:paramtypes", [Function, status_bar_1.StatusBarImpl, Function, split_panels_1.SplitPositionHandler,
            frontend_application_state_1.FrontendApplicationStateService, Object])
    ], ApplicationShell);
    return ApplicationShell;
}(widgets_1.Widget));
exports.ApplicationShell = ApplicationShell;
/**
 * The namespace for `ApplicationShell` class statics.
 */
(function (ApplicationShell) {
    /**
     * The _side areas_ are those shell areas that can be collapsed and expanded,
     * i.e. `left`, `right`, and `bottom`.
     */
    function isSideArea(area) {
        return area === 'left' || area === 'right' || area === 'bottom';
    }
    ApplicationShell.isSideArea = isSideArea;
    /**
     * The default values for application shell options.
     */
    ApplicationShell.DEFAULT_OPTIONS = Object.freeze({
        bottomPanel: Object.freeze({
            emptySize: 140,
            expandThreshold: 160,
            expandDuration: 0,
            initialSizeRatio: 0.382
        }),
        leftPanel: Object.freeze({
            emptySize: 140,
            expandThreshold: 140,
            expandDuration: 0,
            initialSizeRatio: 0.191
        }),
        rightPanel: Object.freeze({
            emptySize: 140,
            expandThreshold: 140,
            expandDuration: 0,
            initialSizeRatio: 0.191
        })
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isOpenToSideMode(mode) {
        return mode === 'open-to-left' || mode === 'open-to-right';
    }
    ApplicationShell.isOpenToSideMode = isOpenToSideMode;
    var TrackableWidgetProvider;
    (function (TrackableWidgetProvider) {
        function is(widget) {
            return !!widget && 'getTrackableWidgets' in widget;
        }
        TrackableWidgetProvider.is = is;
    })(TrackableWidgetProvider = ApplicationShell.TrackableWidgetProvider || (ApplicationShell.TrackableWidgetProvider = {}));
})(ApplicationShell = exports.ApplicationShell || (exports.ApplicationShell = {}));
exports.ApplicationShell = ApplicationShell;
//# sourceMappingURL=application-shell.js.map
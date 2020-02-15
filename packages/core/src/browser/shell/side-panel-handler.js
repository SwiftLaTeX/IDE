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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var algorithm_1 = require("@phosphor/algorithm");
var widgets_1 = require("@phosphor/widgets");
var coreutils_1 = require("@phosphor/coreutils");
var dragdrop_1 = require("@phosphor/dragdrop");
var properties_1 = require("@phosphor/properties");
var tab_bars_1 = require("./tab-bars");
var split_panels_1 = require("./split-panels");
var browser_1 = require("../browser");
var frontend_application_state_1 = require("../frontend-application-state");
var theia_dock_panel_1 = require("./theia-dock-panel");
var side_panel_toolbar_1 = require("./side-panel-toolbar");
var tab_bar_toolbar_1 = require("./tab-bar-toolbar");
var disposable_1 = require("../../common/disposable");
var context_menu_renderer_1 = require("../context-menu-renderer");
/** The class name added to the left and right area panels. */
exports.LEFT_RIGHT_AREA_CLASS = 'theia-app-sides';
/** The class name added to collapsed side panels. */
var COLLAPSED_CLASS = 'theia-mod-collapsed';
exports.SidePanelHandlerFactory = Symbol('SidePanelHandlerFactory');
exports.SIDE_PANEL_TOOLBAR_CONTEXT_MENU = ['SIDE_PANEL_TOOLBAR_CONTEXT_MENU'];
/**
 * A class which manages a dock panel and a related side bar. This is used for the left and right
 * panel of the application shell.
 */
var SidePanelHandler = /** @class */ (function () {
    function SidePanelHandler() {
        var _this = this;
        /**
         * The current state of the side panel.
         */
        this.state = {
            empty: true,
            expansion: SidePanel.ExpansionState.collapsed,
            pendingUpdate: Promise.resolve()
        };
        // should be a property to preserve fn identity
        this.updateToolbarTitle = function () {
            var currentTitle = _this.tabBar && _this.tabBar.currentTitle;
            _this.toolBar.toolbarTitle = currentTitle || undefined;
        };
        this.toDisposeOnCurrentTabChanged = new disposable_1.DisposableCollection();
    }
    SidePanelHandler_1 = SidePanelHandler;
    /**
     * Create the side bar and dock panel widgets.
     */
    SidePanelHandler.prototype.create = function (side, options) {
        this.side = side;
        this.options = options;
        this.tabBar = this.createSideBar();
        this.toolBar = this.createToolbar();
        this.dockPanel = this.createSidePanel();
        this.container = this.createContainer();
        this.refresh();
    };
    SidePanelHandler.prototype.createSideBar = function () {
        var _this = this;
        var side = this.side;
        var tabBarRenderer = this.tabBarRendererFactory();
        var sideBar = new tab_bars_1.SideTabBar({
            // Tab bar options
            orientation: side === 'left' || side === 'right' ? 'vertical' : 'horizontal',
            insertBehavior: 'none',
            removeBehavior: 'select-previous-tab',
            allowDeselect: false,
            tabsMovable: true,
            renderer: tabBarRenderer,
            // Scroll bar options
            handlers: ['drag-thumb', 'keyboard', 'wheel', 'touch'],
            useBothWheelAxes: true,
            scrollYMarginOffset: 8,
            suppressScrollX: true
        });
        tabBarRenderer.tabBar = sideBar;
        tabBarRenderer.contextMenuPath = tab_bars_1.SHELL_TABBAR_CONTEXT_MENU;
        sideBar.addClass('theia-app-' + side);
        sideBar.addClass(exports.LEFT_RIGHT_AREA_CLASS);
        sideBar.tabAdded.connect(function (sender, _a) {
            var title = _a.title;
            var widget = title.owner;
            if (!algorithm_1.some(_this.dockPanel.widgets(), function (w) { return w === widget; })) {
                _this.dockPanel.addWidget(widget);
            }
        }, this);
        sideBar.tabActivateRequested.connect(function (sender, _a) {
            var title = _a.title;
            return title.owner.activate();
        });
        sideBar.tabCloseRequested.connect(function (sender, _a) {
            var title = _a.title;
            return title.owner.close();
        });
        sideBar.collapseRequested.connect(function () { return _this.collapse(); }, this);
        sideBar.currentChanged.connect(this.onCurrentTabChanged, this);
        sideBar.tabDetachRequested.connect(this.onTabDetachRequested, this);
        return sideBar;
    };
    SidePanelHandler.prototype.createSidePanel = function () {
        var _this = this;
        var sidePanel = new theia_dock_panel_1.TheiaDockPanel({
            mode: 'single-document'
        });
        sidePanel.id = 'theia-' + this.side + '-side-panel';
        sidePanel.addClass('theia-side-panel');
        sidePanel.widgetActivated.connect(function (sender, widget) {
            _this.tabBar.currentTitle = widget.title;
        }, this);
        sidePanel.widgetAdded.connect(this.onWidgetAdded, this);
        sidePanel.widgetRemoved.connect(this.onWidgetRemoved, this);
        return sidePanel;
    };
    SidePanelHandler.prototype.createToolbar = function () {
        var _this = this;
        var toolbar = new side_panel_toolbar_1.SidePanelToolbar(this.tabBarToolBarRegistry, this.tabBarToolBarFactory, this.side);
        toolbar.onContextMenu(function (e) { return _this.showContextMenu(e); });
        return toolbar;
    };
    SidePanelHandler.prototype.showContextMenu = function (e) {
        var title = this.tabBar.currentTitle;
        if (!title) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        this.contextMenuRenderer.render({
            args: [title.owner],
            menuPath: exports.SIDE_PANEL_TOOLBAR_CONTEXT_MENU,
            anchor: e
        });
    };
    SidePanelHandler.prototype.createContainer = function () {
        var contentBox = new widgets_1.BoxLayout({ direction: 'top-to-bottom', spacing: 0 });
        widgets_1.BoxPanel.setStretch(this.toolBar, 0);
        contentBox.addWidget(this.toolBar);
        widgets_1.BoxPanel.setStretch(this.dockPanel, 1);
        contentBox.addWidget(this.dockPanel);
        var contentPanel = new widgets_1.BoxPanel({ layout: contentBox });
        var side = this.side;
        var direction;
        switch (side) {
            case 'left':
                direction = 'left-to-right';
                break;
            case 'right':
                direction = 'right-to-left';
                break;
            default:
                throw new Error('Illegal argument: ' + side);
        }
        var containerLayout = new widgets_1.BoxLayout({ direction: direction, spacing: 0 });
        widgets_1.BoxPanel.setStretch(this.tabBar, 0);
        containerLayout.addWidget(this.tabBar);
        widgets_1.BoxPanel.setStretch(contentPanel, 1);
        containerLayout.addWidget(contentPanel);
        var boxPanel = new widgets_1.BoxPanel({ layout: containerLayout });
        boxPanel.id = 'theia-' + side + '-content-panel';
        return boxPanel;
    };
    /**
     * Create an object that describes the current side panel layout. This object may contain references
     * to widgets; these need to be transformed before the layout can be serialized.
     */
    SidePanelHandler.prototype.getLayoutData = function () {
        var currentTitle = this.tabBar.currentTitle;
        var items = algorithm_1.toArray(algorithm_1.map(this.tabBar.titles, function (title) { return ({
            widget: title.owner,
            rank: SidePanelHandler_1.rankProperty.get(title.owner),
            expanded: title === currentTitle
        }); }));
        // eslint-disable-next-line no-null/no-null
        var size = currentTitle !== null ? this.getPanelSize() : this.state.lastPanelSize;
        return { type: 'sidepanel', items: items, size: size };
    };
    /**
     * Apply a side panel layout that has been previously created with `getLayoutData`.
     */
    SidePanelHandler.prototype.setLayoutData = function (layoutData) {
        var e_1, _a;
        // eslint-disable-next-line no-null/no-null
        this.tabBar.currentTitle = null;
        var currentTitle;
        if (layoutData.items) {
            try {
                for (var _b = __values(layoutData.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = _c.value, widget = _d.widget, rank = _d.rank, expanded = _d.expanded;
                    if (widget) {
                        if (rank) {
                            SidePanelHandler_1.rankProperty.set(widget, rank);
                        }
                        if (expanded) {
                            currentTitle = widget.title;
                        }
                        // Add the widgets directly to the tab bar in the same order as they are stored
                        this.tabBar.addTab(widget.title);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (layoutData.size) {
            this.state.lastPanelSize = layoutData.size;
        }
        // If the layout data contains an expanded item, update the currentTitle property
        // This implies a refresh through the `currentChanged` signal
        if (currentTitle) {
            this.tabBar.currentTitle = currentTitle;
        }
        else {
            this.refresh();
        }
    };
    /**
     * Activate a widget residing in the side panel by ID.
     *
     * @returns the activated widget if it was found
     */
    SidePanelHandler.prototype.activate = function (id) {
        var widget = this.expand(id);
        if (widget) {
            widget.activate();
        }
        return widget;
    };
    /**
     * Expand a widget residing in the side panel by ID. If no ID is given and the panel is
     * currently collapsed, the last active tab of this side panel is expanded. If no tab
     * was expanded previously, the first one is taken.
     *
     * @returns the expanded widget if it was found
     */
    SidePanelHandler.prototype.expand = function (id) {
        var _this = this;
        if (id) {
            var widget = algorithm_1.find(this.dockPanel.widgets(), function (w) { return w.id === id; });
            if (widget) {
                this.tabBar.currentTitle = widget.title;
            }
            return widget;
        }
        else if (this.tabBar.currentTitle) {
            return this.tabBar.currentTitle.owner;
        }
        else if (this.tabBar.titles.length > 0) {
            var index = this.state.lastActiveTabIndex;
            if (!index) {
                index = 0;
            }
            else if (index >= this.tabBar.titles.length) {
                index = this.tabBar.titles.length - 1;
            }
            var title = this.tabBar.titles[index];
            this.tabBar.currentTitle = title;
            return title.owner;
        }
        else {
            // Reveal the tab bar and dock panel even if there is no widget
            // The next call to `refreshVisibility` will collapse them again
            this.state.expansion = SidePanel.ExpansionState.expanding;
            var relativeSizes = void 0;
            var parent_1 = this.container.parent;
            if (parent_1 instanceof widgets_1.SplitPanel) {
                relativeSizes = parent_1.relativeSizes();
            }
            this.container.removeClass(COLLAPSED_CLASS);
            this.container.show();
            this.tabBar.show();
            this.dockPanel.node.style.minWidth = '0';
            this.dockPanel.show();
            if (relativeSizes && parent_1 instanceof widgets_1.SplitPanel) {
                // Make sure that the expansion animation starts at zero size
                parent_1.setRelativeSizes(relativeSizes);
            }
            this.setPanelSize(this.options.emptySize).then(function () {
                if (_this.state.expansion === SidePanel.ExpansionState.expanding) {
                    _this.state.expansion = SidePanel.ExpansionState.expanded;
                }
            });
        }
    };
    /**
     * Collapse the sidebar so no items are expanded.
     */
    SidePanelHandler.prototype.collapse = function () {
        if (this.tabBar.currentTitle) {
            // eslint-disable-next-line no-null/no-null
            this.tabBar.currentTitle = null;
        }
        else {
            this.refresh();
        }
        return browser_1.animationFrame();
    };
    /**
     * Add a widget and its title to the dock panel and side bar.
     *
     * If the widget is already added, it will be moved.
     */
    SidePanelHandler.prototype.addWidget = function (widget, options) {
        if (options.rank) {
            SidePanelHandler_1.rankProperty.set(widget, options.rank);
        }
        this.dockPanel.addWidget(widget);
    };
    /**
     * Refresh the visibility of the side bar and dock panel.
     */
    SidePanelHandler.prototype.refresh = function () {
        var _this = this;
        var container = this.container;
        var parent = container.parent;
        var tabBar = this.tabBar;
        var dockPanel = this.dockPanel;
        var isEmpty = tabBar.titles.length === 0;
        var currentTitle = tabBar.currentTitle;
        // eslint-disable-next-line no-null/no-null
        var hideDockPanel = currentTitle === null;
        var relativeSizes;
        if (hideDockPanel) {
            container.addClass(COLLAPSED_CLASS);
            if (this.state.expansion === SidePanel.ExpansionState.expanded && !this.state.empty) {
                // Update the lastPanelSize property
                var size = this.getPanelSize();
                if (size) {
                    this.state.lastPanelSize = size;
                }
            }
            this.state.expansion = SidePanel.ExpansionState.collapsed;
        }
        else {
            container.removeClass(COLLAPSED_CLASS);
            var size = void 0;
            if (this.state.expansion !== SidePanel.ExpansionState.expanded) {
                if (this.state.lastPanelSize) {
                    size = this.state.lastPanelSize;
                }
                else {
                    size = this.getDefaultPanelSize();
                }
            }
            if (size) {
                // Restore the panel size to the last known size or the default size
                this.state.expansion = SidePanel.ExpansionState.expanding;
                if (parent instanceof widgets_1.SplitPanel) {
                    relativeSizes = parent.relativeSizes();
                }
                this.setPanelSize(size).then(function () {
                    if (_this.state.expansion === SidePanel.ExpansionState.expanding) {
                        _this.state.expansion = SidePanel.ExpansionState.expanded;
                    }
                });
            }
            else {
                this.state.expansion = SidePanel.ExpansionState.expanded;
            }
        }
        container.setHidden(isEmpty && hideDockPanel);
        tabBar.setHidden(isEmpty);
        dockPanel.setHidden(hideDockPanel);
        this.state.empty = isEmpty;
        if (currentTitle) {
            dockPanel.selectWidget(currentTitle.owner);
        }
        if (relativeSizes && parent instanceof widgets_1.SplitPanel) {
            // Make sure that the expansion animation starts at the smallest possible size
            parent.setRelativeSizes(relativeSizes);
        }
    };
    /**
     * Sets the size of the side panel.
     *
     * @param size the desired size (width) of the panel in pixels.
     */
    SidePanelHandler.prototype.resize = function (size) {
        if (this.dockPanel.isHidden) {
            this.state.lastPanelSize = size;
        }
        else {
            this.setPanelSize(size);
        }
    };
    /**
     * Compute the current width of the panel. This implementation assumes that the parent of
     * the panel container is a `SplitPanel`.
     */
    SidePanelHandler.prototype.getPanelSize = function () {
        var parent = this.container.parent;
        if (parent instanceof widgets_1.SplitPanel && parent.isVisible) {
            var index = parent.widgets.indexOf(this.container);
            if (this.side === 'left') {
                var handle = parent.handles[index];
                if (!handle.classList.contains('p-mod-hidden')) {
                    return handle.offsetLeft;
                }
            }
            else if (this.side === 'right') {
                var handle = parent.handles[index - 1];
                if (!handle.classList.contains('p-mod-hidden')) {
                    var parentWidth = parent.node.clientWidth;
                    return parentWidth - handle.offsetLeft;
                }
            }
        }
    };
    /**
     * Determine the default size to apply when the panel is expanded for the first time.
     */
    SidePanelHandler.prototype.getDefaultPanelSize = function () {
        var parent = this.container.parent;
        if (parent && parent.isVisible) {
            return parent.node.clientWidth * this.options.initialSizeRatio;
        }
    };
    /**
     * Modify the width of the panel. This implementation assumes that the parent of the panel
     * container is a `SplitPanel`.
     */
    SidePanelHandler.prototype.setPanelSize = function (size) {
        var enableAnimation = this.applicationStateService.state === 'ready';
        var options = {
            side: this.side,
            duration: enableAnimation ? this.options.expandDuration : 0,
            referenceWidget: this.dockPanel
        };
        var promise = this.splitPositionHandler.setSidePanelSize(this.container, size, options);
        var result = new Promise(function (resolve) {
            // Resolve the resulting promise in any case, regardless of whether resizing was successful
            promise.then(function () { return resolve(); }, function () { return resolve(); });
        });
        this.state.pendingUpdate = this.state.pendingUpdate.then(function () { return result; });
        return result;
    };
    /**
     * Handle a `currentChanged` signal from the sidebar. The side panel is refreshed so it displays
     * the new selected widget.
     */
    SidePanelHandler.prototype.onCurrentTabChanged = function (sender, _a) {
        var _this = this;
        var currentTitle = _a.currentTitle, currentIndex = _a.currentIndex;
        this.toDisposeOnCurrentTabChanged.dispose();
        if (currentTitle) {
            this.updateToolbarTitle();
            currentTitle.changed.connect(this.updateToolbarTitle);
            this.toDisposeOnCurrentTabChanged.push(disposable_1.Disposable.create(function () { return currentTitle.changed.disconnect(_this.updateToolbarTitle); }));
        }
        if (currentIndex >= 0) {
            this.state.lastActiveTabIndex = currentIndex;
            sender.revealTab(currentIndex);
        }
        this.refresh();
    };
    /**
     * Handle a `tabDetachRequested` signal from the sidebar. A drag is started so the widget can be
     * moved to another application shell area.
     */
    SidePanelHandler.prototype.onTabDetachRequested = function (sender, _a) {
        var title = _a.title, tab = _a.tab, clientX = _a.clientX, clientY = _a.clientY;
        // Release the tab bar's hold on the mouse
        sender.releaseMouse();
        // Clone the selected tab and use that as drag image
        /* eslint-disable no-null/no-null */
        var clonedTab = tab.cloneNode(true);
        clonedTab.style.width = null;
        clonedTab.style.height = null;
        var label = clonedTab.getElementsByClassName('p-TabBar-tabLabel')[0];
        label.style.width = null;
        label.style.height = null;
        /* eslint-enable no-null/no-null */
        // Create and start a drag to move the selected tab to another panel
        var mimeData = new coreutils_1.MimeData();
        mimeData.setData('application/vnd.phosphor.widget-factory', function () { return title.owner; });
        var drag = new dragdrop_1.Drag({
            mimeData: mimeData,
            dragImage: clonedTab,
            proposedAction: 'move',
            supportedActions: 'move',
        });
        tab.classList.add('p-mod-hidden');
        drag.start(clientX, clientY).then(function () {
            // The promise is resolved when the drag has ended
            tab.classList.remove('p-mod-hidden');
        });
    };
    /*
     * Handle the `widgetAdded` signal from the dock panel. The widget's title is inserted into the
     * tab bar according to the `rankProperty` value that may be attached to the widget.
     */
    SidePanelHandler.prototype.onWidgetAdded = function (sender, widget) {
        var titles = this.tabBar.titles;
        if (!algorithm_1.find(titles, function (t) { return t.owner === widget; })) {
            var rank = SidePanelHandler_1.rankProperty.get(widget);
            var index = titles.length;
            if (rank !== undefined) {
                for (var i = index - 1; i >= 0; i--) {
                    var r = SidePanelHandler_1.rankProperty.get(titles[i].owner);
                    if (r !== undefined && r > rank) {
                        index = i;
                    }
                }
            }
            this.tabBar.insertTab(index, widget.title);
            this.refresh();
        }
    };
    /*
     * Handle the `widgetRemoved` signal from the dock panel. The widget's title is also removed
     * from the tab bar.
     */
    SidePanelHandler.prototype.onWidgetRemoved = function (sender, widget) {
        this.tabBar.removeTab(widget.title);
        this.refresh();
    };
    var SidePanelHandler_1;
    /**
     * A property that can be attached to widgets in order to determine the insertion index
     * of their title in the tab bar.
     */
    SidePanelHandler.rankProperty = new properties_1.AttachedProperty({
        name: 'sidePanelRank',
        create: function () { return undefined; }
    });
    __decorate([
        inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarRegistry),
        __metadata("design:type", tab_bar_toolbar_1.TabBarToolbarRegistry)
    ], SidePanelHandler.prototype, "tabBarToolBarRegistry", void 0);
    __decorate([
        inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarFactory),
        __metadata("design:type", Function)
    ], SidePanelHandler.prototype, "tabBarToolBarFactory", void 0);
    __decorate([
        inversify_1.inject(tab_bars_1.TabBarRendererFactory),
        __metadata("design:type", Function)
    ], SidePanelHandler.prototype, "tabBarRendererFactory", void 0);
    __decorate([
        inversify_1.inject(split_panels_1.SplitPositionHandler),
        __metadata("design:type", split_panels_1.SplitPositionHandler)
    ], SidePanelHandler.prototype, "splitPositionHandler", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], SidePanelHandler.prototype, "applicationStateService", void 0);
    __decorate([
        inversify_1.inject(context_menu_renderer_1.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], SidePanelHandler.prototype, "contextMenuRenderer", void 0);
    SidePanelHandler = SidePanelHandler_1 = __decorate([
        inversify_1.injectable()
    ], SidePanelHandler);
    return SidePanelHandler;
}());
exports.SidePanelHandler = SidePanelHandler;
var SidePanel;
(function (SidePanel) {
    var ExpansionState;
    (function (ExpansionState) {
        ExpansionState["collapsed"] = "collapsed";
        ExpansionState["expanding"] = "expanding";
        ExpansionState["expanded"] = "expanded";
        ExpansionState["collapsing"] = "collapsing";
    })(ExpansionState = SidePanel.ExpansionState || (SidePanel.ExpansionState = {}));
})(SidePanel = exports.SidePanel || (exports.SidePanel = {}));
//# sourceMappingURL=side-panel-handler.js.map
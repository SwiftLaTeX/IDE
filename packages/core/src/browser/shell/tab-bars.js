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
var perfect_scrollbar_1 = require("perfect-scrollbar");
var widgets_1 = require("@phosphor/widgets");
var virtualdom_1 = require("@phosphor/virtualdom");
var common_1 = require("../../common");
var signaling_1 = require("@phosphor/signaling");
var algorithm_1 = require("@phosphor/algorithm");
var domutils_1 = require("@phosphor/domutils");
var theia_dock_panel_1 = require("./theia-dock-panel");
var widget_decoration_1 = require("../widget-decoration");
/** The class name added to hidden content nodes, which are required to render vertical side bars. */
var HIDDEN_CONTENT_CLASS = 'theia-TabBar-hidden-content';
/** Menu path for tab bars used throughout the application shell. */
exports.SHELL_TABBAR_CONTEXT_MENU = ['shell-tabbar-context-menu'];
exports.TabBarRendererFactory = Symbol('TabBarRendererFactory');
/**
 * A tab bar renderer that offers a context menu. In addition, this renderer is able to
 * set an explicit position and size on the icon and label of each tab in a side bar.
 * This is necessary because the elements of side bar tabs are rotated using the CSS
 * `transform` property, disrupting the browser's ability to arrange those elements
 * automatically.
 */
var TabBarRenderer = /** @class */ (function (_super) {
    __extends(TabBarRenderer, _super);
    // TODO refactor shell, rendered should only receive props with event handlers
    // events should be handled by clients, like ApplicationShell
    // right now it is mess: (1) client logic belong to renderer, (2) cyclic dependencies between renderers and clients
    function TabBarRenderer(contextMenuRenderer, decoratorService, iconThemeService) {
        var _this = _super.call(this) || this;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.decoratorService = decoratorService;
        _this.iconThemeService = iconThemeService;
        _this.toDispose = new common_1.DisposableCollection();
        _this.toDisposeOnTabBar = new common_1.DisposableCollection();
        _this.decorations = new Map();
        _this.handleContextMenuEvent = function (event) {
            if (_this.contextMenuRenderer && _this.contextMenuPath && event.currentTarget instanceof HTMLElement) {
                event.stopPropagation();
                event.preventDefault();
                if (_this.tabBar) {
                    var id_1 = event.currentTarget.id;
                    // eslint-disable-next-line no-null/no-null
                    var title = _this.tabBar.titles.find(function (t) { return _this.createTabId(t) === id_1; }) || null;
                    _this.tabBar.currentTitle = title;
                    _this.tabBar.activate();
                    if (title) {
                        title.owner.activate();
                    }
                }
                _this.contextMenuRenderer.render(_this.contextMenuPath, event);
            }
        };
        _this.handleDblClickEvent = function (event) {
            if (_this.tabBar && event.currentTarget instanceof HTMLElement) {
                var id_2 = event.currentTarget.id;
                // eslint-disable-next-line no-null/no-null
                var title = _this.tabBar.titles.find(function (t) { return _this.createTabId(t) === id_2; }) || null;
                var area = title && title.owner.parent;
                if (area instanceof theia_dock_panel_1.TheiaDockPanel && (area.id === theia_dock_panel_1.BOTTOM_AREA_ID || area.id === theia_dock_panel_1.MAIN_AREA_ID)) {
                    area.toggleMaximized();
                }
            }
        };
        if (_this.decoratorService) {
            _this.toDispose.push(common_1.Disposable.create(function () { return _this.resetDecorations(); }));
            _this.toDispose.push(_this.decoratorService);
            _this.toDispose.push(_this.decoratorService.onDidChangeDecorations(function () { return _this.resetDecorations(); }));
        }
        if (_this.iconThemeService) {
            _this.toDispose.push(_this.iconThemeService.onDidChangeCurrent(function () {
                if (_this._tabBar) {
                    _this._tabBar.update();
                }
            }));
        }
        return _this;
    }
    Object.defineProperty(TabBarRenderer.prototype, "tabBar", {
        get: function () {
            return this._tabBar;
        },
        /**
         * A reference to the tab bar is required in order to activate it when a context menu
         * is requested.
         */
        set: function (tabBar) {
            var _this = this;
            if (this._tabBar === tabBar) {
                return;
            }
            this.toDisposeOnTabBar.dispose();
            this.toDispose.push(this.toDisposeOnTabBar);
            this._tabBar = tabBar;
            if (tabBar) {
                var listener_1 = function (_, _a) {
                    var title = _a.title;
                    return _this.resetDecorations(title);
                };
                tabBar.tabCloseRequested.connect(listener_1);
                this.toDisposeOnTabBar.push(common_1.Disposable.create(function () { return tabBar.tabCloseRequested.disconnect(listener_1); }));
            }
            this.resetDecorations();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Render tabs with the default DOM structure, but additionally register a context menu listener.
     * @param {SideBarRenderData} data Data used to render the tab.
     * @param {boolean} isInSidePanel An optional check which determines if the tab is in the side-panel.
     * @returns {VirtualElement} The virtual element of the rendered tab.
     */
    TabBarRenderer.prototype.renderTab = function (data, isInSidePanel) {
        var title = data.title;
        var id = this.createTabId(data.title);
        var key = this.createTabKey(data);
        var style = this.createTabStyle(data);
        var className = this.createTabClass(data);
        var dataset = this.createTabDataset(data);
        return virtualdom_1.h.li({
            key: key, className: className, id: id, title: title.caption, style: style, dataset: dataset,
            oncontextmenu: this.handleContextMenuEvent,
            ondblclick: this.handleDblClickEvent
        }, virtualdom_1.h.div({ className: 'theia-tab-icon-label' }, this.renderIcon(data, isInSidePanel), this.renderLabel(data, isInSidePanel)), this.renderCloseIcon(data));
    };
    TabBarRenderer.prototype.createTabId = function (title) {
        return 'shell-tab-' + title.owner.id;
    };
    /**
     * If size information is available for the label and icon, set an explicit height on the tab.
     * The height value also considers padding, which should be derived from CSS settings.
     */
    TabBarRenderer.prototype.createTabStyle = function (data) {
        var zIndex = "" + data.zIndex;
        var labelSize = data.labelSize;
        var iconSize = data.iconSize;
        var height;
        if (labelSize || iconSize) {
            var labelHeight = labelSize ? (this.tabBar && this.tabBar.orientation === 'horizontal' ? labelSize.height : labelSize.width) : 0;
            var iconHeight = iconSize ? iconSize.height : 0;
            var paddingTop = data.paddingTop || 0;
            if (labelHeight > 0 && iconHeight > 0) {
                // Leave some extra space between icon and label
                paddingTop = paddingTop * 1.5;
            }
            var paddingBottom = data.paddingBottom || 0;
            height = labelHeight + iconHeight + paddingTop + paddingBottom + "px";
        }
        return { zIndex: zIndex, height: height };
    };
    /**
     * If size information is available for the label, set it as inline style.
     * Tab padding and icon size are also considered in the `top` position.
     * @param {SideBarRenderData} data Data used to render the tab.
     * @param {boolean} isInSidePanel An optional check which determines if the tab is in the side-panel.
     * @returns {VirtualElement} The virtual element of the rendered label.
     */
    TabBarRenderer.prototype.renderLabel = function (data, isInSidePanel) {
        var labelSize = data.labelSize;
        var iconSize = data.iconSize;
        var width;
        var height;
        var top;
        if (labelSize) {
            width = labelSize.width + "px";
            height = labelSize.height + "px";
        }
        if (data.paddingTop || iconSize) {
            var iconHeight = iconSize ? iconSize.height : 0;
            var paddingTop = data.paddingTop || 0;
            if (iconHeight > 0) {
                // Leave some extra space between icon and label
                paddingTop = paddingTop * 1.5;
            }
            top = paddingTop + iconHeight + "px";
        }
        var style = { width: width, height: height, top: top };
        // No need to check for duplicate labels if the tab is rendered in the side panel (title is not displayed),
        // or if there are less than two files in the tab bar.
        if (isInSidePanel || (this.tabBar && this.tabBar.titles.length < 2)) {
            return virtualdom_1.h.div({ className: 'p-TabBar-tabLabel', style: style }, data.title.label);
        }
        var originalToDisplayedMap = this.findDuplicateLabels(__spread(this.tabBar.titles));
        var labelDetails = originalToDisplayedMap.get(data.title.caption);
        if (labelDetails) {
            return virtualdom_1.h.div({ className: 'p-TabBar-tabLabelWrapper' }, virtualdom_1.h.div({ className: 'p-TabBar-tabLabel', style: style }, data.title.label), virtualdom_1.h.div({ className: 'p-TabBar-tabLabelDetails', style: style }, labelDetails));
        }
        return virtualdom_1.h.div({ className: 'p-TabBar-tabLabel', style: style }, data.title.label);
    };
    TabBarRenderer.prototype.resetDecorations = function (title) {
        if (title) {
            this.decorations.delete(title);
        }
        else {
            this.decorations.clear();
        }
        if (this.tabBar) {
            this.tabBar.update();
        }
    };
    /**
     * Get all available decorations of a given tab.
     * @param {string} title The widget title.
     */
    TabBarRenderer.prototype.getDecorations = function (title) {
        var _this = this;
        if (this.tabBar && this.decoratorService) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var owner = title.owner;
            if (!owner.resetTabBarDecorations) {
                owner.resetTabBarDecorations = function () { return _this.decorations.delete(title); };
                title.owner.disposed.connect(owner.resetTabBarDecorations);
            }
            var decorations = this.decorations.get(title) || this.decoratorService.getDecorations(title);
            this.decorations.set(title, decorations);
            return decorations;
        }
        return [];
    };
    /**
     * Get the decoration data given the tab URI and the decoration data type.
     * @param {string} title The title.
     * @param {K} key The type of the decoration data.
     */
    TabBarRenderer.prototype.getDecorationData = function (title, key) {
        return this.getDecorations(title).filter(function (data) { return data[key] !== undefined; }).map(function (data) { return data[key]; });
    };
    /**
     * Get the class of an icon.
     * @param {string | string[]} iconName The name of the icon.
     * @param {string[]} additionalClasses Additional classes of the icon.
     */
    TabBarRenderer.prototype.getIconClass = function (iconName, additionalClasses) {
        if (additionalClasses === void 0) { additionalClasses = []; }
        var iconClass = (typeof iconName === 'string') ? ['a', 'fa', "fa-" + iconName] : ['a'].concat(iconName);
        return iconClass.concat(additionalClasses).join(' ');
    };
    /**
     * Find duplicate labels from the currently opened tabs in the tab bar.
     * Return the appropriate partial paths that can distinguish the identical labels.
     *
     * E.g., a/p/index.ts => a/..., b/p/index.ts => b/...
     *
     * To prevent excessively long path displayed, show at maximum three levels from the end by default.
     * @param {Title<Widget>[]} titles Array of titles in the current tab bar.
     * @returns {Map<string, string>} A map from each tab's original path to its displayed partial path.
     */
    TabBarRenderer.prototype.findDuplicateLabels = function (titles) {
        // Filter from all tabs to group them by the distinct label (file name).
        // E.g., 'foo.js' => {0 (index) => 'a/b/foo.js', '2 => a/c/foo.js' },
        //       'bar.js' => {1 => 'a/d/bar.js', ...}
        var labelGroups = new Map();
        titles.forEach(function (title, index) {
            if (!labelGroups.has(title.label)) {
                labelGroups.set(title.label, new Map());
            }
            labelGroups.get(title.label).set(index, title.caption);
        });
        var originalToDisplayedMap = new Map();
        // Parse each group of editors with the same label.
        labelGroups.forEach(function (labelGroup) {
            // Filter to get groups that have duplicates.
            if (labelGroup.size > 1) {
                var paths_1 = [];
                var maxPathLength_1 = 0;
                labelGroup.forEach(function (pathStr, index) {
                    var steps = pathStr.split('/');
                    maxPathLength_1 = Math.max(maxPathLength_1, steps.length);
                    paths_1[index] = (steps.slice(0, steps.length - 1));
                    // By default, show at maximum three levels from the end.
                    var defaultDisplayedPath = steps.slice(-4, -1).join('/');
                    if (steps.length > 4) {
                        defaultDisplayedPath = '.../' + defaultDisplayedPath;
                    }
                    originalToDisplayedMap.set(pathStr, defaultDisplayedPath);
                });
                // Iterate through the steps of the path from the left to find the step that can distinguish it.
                // E.g., ['root', 'foo', 'c'], ['root', 'bar', 'd'] => 'foo', 'bar'
                var i_1 = 0;
                var _loop_1 = function () {
                    // Store indexes of all paths that have the identical element in each step.
                    var stepOccurrences = new Map();
                    // Compare the current step of all paths
                    paths_1.forEach(function (path, index) {
                        var step = path[i_1];
                        if (path.length > 0) {
                            if (i_1 > path.length - 1) {
                                paths_1[index] = [];
                            }
                            else if (!stepOccurrences.has(step)) {
                                stepOccurrences.set(step, [index]);
                            }
                            else {
                                stepOccurrences.get(step).push(index);
                            }
                        }
                    });
                    // Set the displayed path for each tab.
                    stepOccurrences.forEach(function (indexArr, displayedPath) {
                        if (indexArr.length === 1) {
                            var originalPath = labelGroup.get(indexArr[0]);
                            if (originalPath) {
                                var originalElements = originalPath.split('/');
                                var displayedElements = displayedPath.split('/');
                                if (originalElements.slice(-2)[0] !== displayedElements.slice(-1)[0]) {
                                    displayedPath += '/...';
                                }
                                if (originalElements[0] !== displayedElements[0]) {
                                    displayedPath = '.../' + displayedPath;
                                }
                                originalToDisplayedMap.set(originalPath, displayedPath);
                                paths_1[indexArr[0]] = [];
                            }
                        }
                    });
                    i_1++;
                };
                while (i_1 < maxPathLength_1 - 1) {
                    _loop_1();
                }
            }
        });
        return originalToDisplayedMap;
    };
    /**
     * If size information is available for the icon, set it as inline style. Tab padding
     * is also considered in the `top` position.
     * @param {SideBarRenderData} data Data used to render the tab icon.
     * @param {boolean} isInSidePanel An optional check which determines if the tab is in the side-panel.
     */
    TabBarRenderer.prototype.renderIcon = function (data, inSidePanel) {
        var _this = this;
        if (!inSidePanel && this.iconThemeService && this.iconThemeService.current === 'none') {
            return virtualdom_1.h.div();
        }
        var top;
        if (data.paddingTop) {
            top = (data.paddingTop || 0) + "px";
        }
        var style = { top: top };
        var baseClassName = this.createIconClass(data);
        var overlayIcons = [];
        var decorationData = this.getDecorationData(data.title, 'iconOverlay');
        // Check if the tab has decoration markers to be rendered on top.
        if (decorationData.length > 0) {
            var baseIcon = virtualdom_1.h.div({ className: baseClassName, style: style }, data.title.iconLabel);
            var wrapperClassName = widget_decoration_1.WidgetDecoration.Styles.ICON_WRAPPER_CLASS;
            var decoratorSizeClassName_1 = inSidePanel ? widget_decoration_1.WidgetDecoration.Styles.DECORATOR_SIDEBAR_SIZE_CLASS : widget_decoration_1.WidgetDecoration.Styles.DECORATOR_SIZE_CLASS;
            decorationData
                .filter(common_1.notEmpty)
                .map(function (overlay) { return [overlay.position, overlay]; })
                .forEach(function (_a) {
                var _b = __read(_a, 2), position = _b[0], overlay = _b[1];
                var iconAdditionalClasses = [decoratorSizeClassName_1, widget_decoration_1.WidgetDecoration.IconOverlayPosition.getStyle(position, inSidePanel)];
                var overlayIconStyle = function (color) {
                    if (color === undefined) {
                        return {};
                    }
                    return { color: color };
                };
                // Parse the optional background (if it exists) of the overlay icon.
                if (overlay.background) {
                    var backgroundIconClassName = _this.getIconClass(overlay.background.shape, iconAdditionalClasses);
                    overlayIcons.push(virtualdom_1.h.div({ key: data.title.label + '-background', className: backgroundIconClassName, style: overlayIconStyle(overlay.background.color) }));
                }
                // Parse the overlay icon.
                var overlayIcon = overlay.icon || overlay.iconClass;
                var overlayIconClassName = _this.getIconClass(overlayIcon, iconAdditionalClasses);
                overlayIcons.push(virtualdom_1.h.span({ key: data.title.label, className: overlayIconClassName, style: overlayIconStyle(overlay.color) }));
            });
            return virtualdom_1.h.div({ className: wrapperClassName, style: style }, __spread([baseIcon], overlayIcons));
        }
        return virtualdom_1.h.div({ className: baseClassName, style: style }, data.title.iconLabel);
    };
    return TabBarRenderer;
}(widgets_1.TabBar.Renderer));
exports.TabBarRenderer = TabBarRenderer;
/**
 * A specialized tab bar for the main and bottom areas.
 */
var ScrollableTabBar = /** @class */ (function (_super) {
    __extends(ScrollableTabBar, _super);
    function ScrollableTabBar(options) {
        var _this = _super.call(this, options) || this;
        _this.scrollBarFactory = function () { return new perfect_scrollbar_1.default(_this.scrollbarHost, options); };
        return _this;
    }
    ScrollableTabBar.prototype.onAfterAttach = function (msg) {
        if (!this.scrollBar) {
            this.scrollBar = this.scrollBarFactory();
        }
        _super.prototype.onAfterAttach.call(this, msg);
    };
    ScrollableTabBar.prototype.onBeforeDetach = function (msg) {
        _super.prototype.onBeforeDetach.call(this, msg);
        if (this.scrollBar) {
            this.scrollBar.destroy();
            this.scrollBar = undefined;
        }
    };
    ScrollableTabBar.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        if (this.scrollBar) {
            this.scrollBar.update();
        }
    };
    ScrollableTabBar.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        if (this.scrollBar) {
            if (this.currentIndex >= 0) {
                this.revealTab(this.currentIndex);
            }
            this.scrollBar.update();
        }
    };
    /**
     * Reveal the tab with the given index by moving the scroll bar if necessary.
     */
    ScrollableTabBar.prototype.revealTab = function (index) {
        var _this = this;
        if (this.pendingReveal) {
            // A reveal has already been scheduled
            return this.pendingReveal;
        }
        var result = new Promise(function (resolve, reject) {
            // The tab might not have been created yet, so wait until the next frame
            window.requestAnimationFrame(function () {
                var tab = _this.contentNode.children[index];
                if (tab && _this.isVisible) {
                    var parent_1 = _this.scrollbarHost;
                    if (_this.orientation === 'horizontal') {
                        var scroll_1 = parent_1.scrollLeft;
                        var left = tab.offsetLeft;
                        if (scroll_1 > left) {
                            parent_1.scrollLeft = left;
                        }
                        else {
                            var right = left + tab.clientWidth - parent_1.clientWidth;
                            if (scroll_1 < right && tab.clientWidth < parent_1.clientWidth) {
                                parent_1.scrollLeft = right;
                            }
                        }
                    }
                    else {
                        var scroll_2 = parent_1.scrollTop;
                        var top_1 = tab.offsetTop;
                        if (scroll_2 > top_1) {
                            parent_1.scrollTop = top_1;
                        }
                        else {
                            var bottom = top_1 + tab.clientHeight - parent_1.clientHeight;
                            if (scroll_2 < bottom && tab.clientHeight < parent_1.clientHeight) {
                                parent_1.scrollTop = bottom;
                            }
                        }
                    }
                }
                if (_this.pendingReveal === result) {
                    _this.pendingReveal = undefined;
                }
                resolve();
            });
        });
        this.pendingReveal = result;
        return result;
    };
    Object.defineProperty(ScrollableTabBar.prototype, "scrollbarHost", {
        get: function () {
            return this.node;
        },
        enumerable: true,
        configurable: true
    });
    return ScrollableTabBar;
}(widgets_1.TabBar));
exports.ScrollableTabBar = ScrollableTabBar;
/**
 * Specialized scrollable tab-bar which comes with toolbar support.
 * Instead of the following DOM structure.
 *
 * +-------------------------+
 * |[TAB_0][TAB_1][TAB_2][TAB|
 * +-------------Scrollable--+
 *
 * There is a dedicated HTML element for toolbar which does **not** contained in the scrollable element.
 *
 * +-------------------------+-----------------+
 * |[TAB_0][TAB_1][TAB_2][TAB|         Toolbar |
 * +-------------Scrollable--+-None-Scrollable-+
 *
 */
var ToolbarAwareTabBar = /** @class */ (function (_super) {
    __extends(ToolbarAwareTabBar, _super);
    function ToolbarAwareTabBar(tabBarToolbarRegistry, tabBarToolbarFactory, options) {
        var _this = _super.call(this, options) || this;
        _this.tabBarToolbarRegistry = tabBarToolbarRegistry;
        _this.tabBarToolbarFactory = tabBarToolbarFactory;
        _this.options = options;
        _this.rewireDOM();
        _this.tabBarToolbarRegistry.onDidChange(function () { return _this.update(); });
        return _this;
    }
    Object.defineProperty(ToolbarAwareTabBar.prototype, "contentNode", {
        /**
         * Overrides the `contentNode` property getter in PhosphorJS' TabBar.
         */
        get: function () {
            return this.tabBarContainer.getElementsByClassName(ToolbarAwareTabBar.Styles.TAB_BAR_CONTENT)[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarAwareTabBar.prototype, "scrollbarHost", {
        /**
         * Overrides the scrollable host from the parent class.
         */
        get: function () {
            return this.tabBarContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarAwareTabBar.prototype, "tabBarContainer", {
        get: function () {
            return this.node.getElementsByClassName(ToolbarAwareTabBar.Styles.TAB_BAR_CONTENT_CONTAINER)[0];
        },
        enumerable: true,
        configurable: true
    });
    ToolbarAwareTabBar.prototype.onAfterAttach = function (msg) {
        if (this.toolbar) {
            if (this.toolbar.isAttached) {
                widgets_1.Widget.detach(this.toolbar);
            }
            widgets_1.Widget.attach(this.toolbar, this.node);
        }
        _super.prototype.onAfterAttach.call(this, msg);
    };
    ToolbarAwareTabBar.prototype.onBeforeDetach = function (msg) {
        if (this.toolbar && this.toolbar.isAttached) {
            widgets_1.Widget.detach(this.toolbar);
        }
        _super.prototype.onBeforeDetach.call(this, msg);
    };
    ToolbarAwareTabBar.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.updateToolbar();
    };
    ToolbarAwareTabBar.prototype.updateToolbar = function () {
        if (!this.toolbar) {
            return;
        }
        var current = this.currentTitle;
        var widget = current && current.owner || undefined;
        var items = widget ? this.tabBarToolbarRegistry.visibleItems(widget) : [];
        this.toolbar.updateItems(items, widget);
    };
    ToolbarAwareTabBar.prototype.handleEvent = function (event) {
        if (this.toolbar && event instanceof MouseEvent && this.toolbar.shouldHandleMouseEvent(event)) {
            // if the mouse event is over the toolbar part don't handle it.
            return;
        }
        _super.prototype.handleEvent.call(this, event);
    };
    /**
     * Restructures the DOM defined in PhosphorJS.
     *
     * By default the tabs (`li`) are contained in the `this.contentNode` (`ul`) which is wrapped in a `div` (`this.node`).
     * Instead of this structure, we add a container for the `this.contentNode` and for the toolbar.
     * The scrollbar will only work for the `ul` part but it does not affect the toolbar, so it can be on the right hand-side.
     */
    ToolbarAwareTabBar.prototype.rewireDOM = function () {
        var contentNode = this.node.getElementsByClassName(ToolbarAwareTabBar.Styles.TAB_BAR_CONTENT)[0];
        if (!contentNode) {
            throw new Error("'this.node' does not have the content as a direct children with class name 'p-TabBar-content'.");
        }
        this.node.removeChild(contentNode);
        this.contentContainer = document.createElement('div');
        this.contentContainer.classList.add(ToolbarAwareTabBar.Styles.TAB_BAR_CONTENT_CONTAINER);
        this.contentContainer.appendChild(contentNode);
        this.node.appendChild(this.contentContainer);
        this.toolbar = this.tabBarToolbarFactory();
    };
    return ToolbarAwareTabBar;
}(ScrollableTabBar));
exports.ToolbarAwareTabBar = ToolbarAwareTabBar;
(function (ToolbarAwareTabBar) {
    var Styles;
    (function (Styles) {
        Styles.TAB_BAR_CONTENT = 'p-TabBar-content';
        Styles.TAB_BAR_CONTENT_CONTAINER = 'p-TabBar-content-container';
    })(Styles = ToolbarAwareTabBar.Styles || (ToolbarAwareTabBar.Styles = {}));
})(ToolbarAwareTabBar = exports.ToolbarAwareTabBar || (exports.ToolbarAwareTabBar = {}));
exports.ToolbarAwareTabBar = ToolbarAwareTabBar;
/**
 * A specialized tab bar for side areas.
 */
var SideTabBar = /** @class */ (function (_super) {
    __extends(SideTabBar, _super);
    function SideTabBar(options) {
        var _this = _super.call(this, options) || this;
        /**
         * Emitted when a tab is added to the tab bar.
         */
        _this.tabAdded = new signaling_1.Signal(_this);
        /**
         * Side panels can be collapsed by clicking on the currently selected tab. This signal is
         * emitted when the mouse is released on the selected tab without initiating a drag.
         */
        _this.collapseRequested = new signaling_1.Signal(_this);
        // Create the hidden content node (see `hiddenContentNode` for explanation)
        var hiddenContent = document.createElement('ul');
        hiddenContent.className = HIDDEN_CONTENT_CLASS;
        _this.node.appendChild(hiddenContent);
        return _this;
    }
    Object.defineProperty(SideTabBar.prototype, "hiddenContentNode", {
        /**
         * Tab bars of the left and right side panel are arranged vertically by rotating their labels.
         * Rotation is realized with the CSS `transform` property, which disrupts the browser's ability
         * to arrange the involved elements automatically. Therefore the elements are arranged explicitly
         * by the TabBarRenderer using inline `height` and `top` styles. However, the size of labels
         * must still be computed by the browser, so the rendering is performed in two steps: first the
         * tab bar is rendered horizontally inside a _hidden content node_, then it is rendered again
         * vertically inside the proper content node. After the first step, size information is gathered
         * from all labels so it can be applied during the second step.
         */
        get: function () {
            return this.node.getElementsByClassName(HIDDEN_CONTENT_CLASS)[0];
        },
        enumerable: true,
        configurable: true
    });
    SideTabBar.prototype.insertTab = function (index, value) {
        var result = _super.prototype.insertTab.call(this, index, value);
        this.tabAdded.emit({ title: result });
        return result;
    };
    SideTabBar.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        this.renderTabBar();
    };
    SideTabBar.prototype.onUpdateRequest = function (msg) {
        this.renderTabBar();
        if (this.scrollBar) {
            this.scrollBar.update();
        }
    };
    /**
     * Render the tab bar in the _hidden content node_ (see `hiddenContentNode` for explanation),
     * then gather size information for labels and render it again in the proper content node.
     */
    SideTabBar.prototype.renderTabBar = function () {
        var _this = this;
        if (this.isAttached) {
            // Render into the invisible node
            this.renderTabs(this.hiddenContentNode);
            // Await a rendering frame
            window.requestAnimationFrame(function () {
                var hiddenContent = _this.hiddenContentNode;
                var n = hiddenContent.children.length;
                var renderData = new Array(n);
                for (var i = 0; i < n; i++) {
                    var hiddenTab = hiddenContent.children[i];
                    // Extract tab padding from the computed style
                    var tabStyle = window.getComputedStyle(hiddenTab);
                    var rd = {
                        paddingTop: parseFloat(tabStyle.paddingTop),
                        paddingBottom: parseFloat(tabStyle.paddingBottom)
                    };
                    // Extract label size from the DOM
                    var labelElements = hiddenTab.getElementsByClassName('p-TabBar-tabLabel');
                    if (labelElements.length === 1) {
                        var label = labelElements[0];
                        rd.labelSize = { width: label.clientWidth, height: label.clientHeight };
                    }
                    // Extract icon size from the DOM
                    var iconElements = hiddenTab.getElementsByClassName('p-TabBar-tabIcon');
                    if (iconElements.length === 1) {
                        var icon = iconElements[0];
                        rd.iconSize = { width: icon.clientWidth, height: icon.clientHeight };
                    }
                    renderData[i] = rd;
                }
                // Render into the visible node
                _this.renderTabs(_this.contentNode, renderData);
            });
        }
    };
    /**
     * Render the tab bar using the given DOM element as host. The optional `renderData` is forwarded
     * to the TabBarRenderer.
     */
    SideTabBar.prototype.renderTabs = function (host, renderData) {
        var titles = this.titles;
        var n = titles.length;
        var renderer = this.renderer;
        var currentTitle = this.currentTitle;
        var content = new Array(n);
        for (var i = 0; i < n; i++) {
            var title = titles[i];
            var current = title === currentTitle;
            var zIndex = current ? n : n - i - 1;
            var rd = void 0;
            if (renderData && i < renderData.length) {
                rd = __assign({ title: title, current: current, zIndex: zIndex }, renderData[i]);
            }
            else {
                rd = { title: title, current: current, zIndex: zIndex };
            }
            content[i] = renderer.renderTab(rd, true);
        }
        virtualdom_1.VirtualDOM.render(content, host);
    };
    /**
     * The following event processing is used to generate `collapseRequested` signals
     * when the mouse goes up on the currently selected tab without too much movement
     * between `mousedown` and `mouseup`. The movement threshold is the same that
     * is used by the superclass to detect a drag event. The `allowDeselect` option
     * of the TabBar constructor cannot be used here because it is triggered when the
     * mouse goes down, and thus collides with dragging.
     */
    SideTabBar.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'mousedown':
                this.onMouseDown(event);
                _super.prototype.handleEvent.call(this, event);
                break;
            case 'mouseup':
                _super.prototype.handleEvent.call(this, event);
                this.onMouseUp(event);
                break;
            case 'mousemove':
                this.onMouseMove(event);
                _super.prototype.handleEvent.call(this, event);
                break;
            default:
                _super.prototype.handleEvent.call(this, event);
        }
    };
    SideTabBar.prototype.onMouseDown = function (event) {
        // Check for left mouse button and current mouse status
        if (event.button !== 0 || this.mouseData) {
            return;
        }
        // Check whether the mouse went down on the current tab
        var tabs = this.contentNode.children;
        var index = algorithm_1.ArrayExt.findFirstIndex(tabs, function (tab) { return domutils_1.ElementExt.hitTest(tab, event.clientX, event.clientY); });
        if (index < 0 || index !== this.currentIndex) {
            return;
        }
        // Check whether the close button was clicked
        var icon = tabs[index].querySelector(this.renderer.closeIconSelector);
        if (icon && icon.contains(event.target)) {
            return;
        }
        this.mouseData = {
            pressX: event.clientX,
            pressY: event.clientY,
            mouseDownTabIndex: index
        };
    };
    SideTabBar.prototype.onMouseUp = function (event) {
        // Check for left mouse button and current mouse status
        if (event.button !== 0 || !this.mouseData) {
            return;
        }
        // Check whether the mouse went up on the current tab
        var mouseDownTabIndex = this.mouseData.mouseDownTabIndex;
        this.mouseData = undefined;
        var tabs = this.contentNode.children;
        var index = algorithm_1.ArrayExt.findFirstIndex(tabs, function (tab) { return domutils_1.ElementExt.hitTest(tab, event.clientX, event.clientY); });
        if (index < 0 || index !== mouseDownTabIndex) {
            return;
        }
        // Collapse the side bar
        this.collapseRequested.emit(this.titles[index]);
    };
    SideTabBar.prototype.onMouseMove = function (event) {
        // Check for left mouse button and current mouse status
        if (event.button !== 0 || !this.mouseData) {
            return;
        }
        var data = this.mouseData;
        var dx = Math.abs(event.clientX - data.pressX);
        var dy = Math.abs(event.clientY - data.pressY);
        var threshold = SideTabBar.DRAG_THRESHOLD;
        if (dx >= threshold || dy >= threshold) {
            this.mouseData = undefined;
        }
    };
    SideTabBar.DRAG_THRESHOLD = 5;
    return SideTabBar;
}(ScrollableTabBar));
exports.SideTabBar = SideTabBar;
//# sourceMappingURL=tab-bars.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var algorithm_1 = require("@phosphor/algorithm");
var widgets_1 = require("@phosphor/widgets");
var signaling_1 = require("@phosphor/signaling");
var disposable_1 = require("../../common/disposable");
var widgets_2 = require("../widgets");
var MAXIMIZED_CLASS = 'theia-maximized';
exports.MAIN_AREA_ID = 'theia-main-content-panel';
exports.BOTTOM_AREA_ID = 'theia-bottom-content-panel';
/**
 * This specialization of DockPanel adds various events that are used for implementing the
 * side panels of the application shell.
 */
var TheiaDockPanel = /** @class */ (function (_super) {
    __extends(TheiaDockPanel, _super);
    function TheiaDockPanel(options) {
        var _this = _super.call(this, options) || this;
        /**
         * Emitted when a widget is added to the panel.
         */
        _this.widgetAdded = new signaling_1.Signal(_this);
        /**
         * Emitted when a widget is activated by calling `activateWidget`.
         */
        _this.widgetActivated = new signaling_1.Signal(_this);
        /**
         * Emitted when a widget is removed from the panel.
         */
        _this.widgetRemoved = new signaling_1.Signal(_this);
        _this.toDisposeOnMarkAsCurrent = new disposable_1.DisposableCollection();
        _this.toDisposeOnToggleMaximized = new disposable_1.DisposableCollection();
        _this['_onCurrentChanged'] = function (sender, args) {
            _this.markAsCurrent(args.currentTitle || undefined);
            _super.prototype['_onCurrentChanged'].call(_this, sender, args);
        };
        _this['_onTabActivateRequested'] = function (sender, args) {
            _this.markAsCurrent(args.title);
            _super.prototype['_onTabActivateRequested'].call(_this, sender, args);
        };
        return _this;
    }
    Object.defineProperty(TheiaDockPanel.prototype, "currentTitle", {
        get: function () {
            return this._currentTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TheiaDockPanel.prototype, "currentTabBar", {
        get: function () {
            return this._currentTitle && this.findTabBar(this._currentTitle);
        },
        enumerable: true,
        configurable: true
    });
    TheiaDockPanel.prototype.findTabBar = function (title) {
        return algorithm_1.find(this.tabBars(), function (bar) { return algorithm_1.ArrayExt.firstIndexOf(bar.titles, title) > -1; });
    };
    TheiaDockPanel.prototype.markAsCurrent = function (title) {
        var _this = this;
        this.toDisposeOnMarkAsCurrent.dispose();
        this._currentTitle = title;
        if (title) {
            var resetCurrent_1 = function () { return _this.markAsCurrent(undefined); };
            title.owner.disposed.connect(resetCurrent_1);
            this.toDisposeOnMarkAsCurrent.push(disposable_1.Disposable.create(function () {
                return title.owner.disposed.disconnect(resetCurrent_1);
            }));
        }
    };
    TheiaDockPanel.prototype.addWidget = function (widget, options) {
        if (this.mode === 'single-document' && widget.parent === this) {
            return;
        }
        _super.prototype.addWidget.call(this, widget, options);
        this.widgetAdded.emit(widget);
    };
    TheiaDockPanel.prototype.activateWidget = function (widget) {
        _super.prototype.activateWidget.call(this, widget);
        this.widgetActivated.emit(widget);
    };
    TheiaDockPanel.prototype.onChildRemoved = function (msg) {
        _super.prototype.onChildRemoved.call(this, msg);
        this.widgetRemoved.emit(msg.child);
    };
    TheiaDockPanel.prototype.nextTabBarWidget = function (widget) {
        var current = this.findTabBar(widget.title);
        var next = current && this.nextTabBarInPanel(current);
        return next && next.currentTitle && next.currentTitle.owner || undefined;
    };
    TheiaDockPanel.prototype.nextTabBarInPanel = function (tabBar) {
        var tabBars = algorithm_1.toArray(this.tabBars());
        var index = tabBars.indexOf(tabBar);
        if (index !== -1) {
            return tabBars[index + 1];
        }
        return undefined;
    };
    TheiaDockPanel.prototype.previousTabBarWidget = function (widget) {
        var current = this.findTabBar(widget.title);
        var previous = current && this.previousTabBarInPanel(current);
        return previous && previous.currentTitle && previous.currentTitle.owner || undefined;
    };
    TheiaDockPanel.prototype.previousTabBarInPanel = function (tabBar) {
        var tabBars = algorithm_1.toArray(this.tabBars());
        var index = tabBars.indexOf(tabBar);
        if (index !== -1) {
            return tabBars[index - 1];
        }
        return undefined;
    };
    TheiaDockPanel.prototype.toggleMaximized = function () {
        var _this = this;
        var areaContainer = this.node.parentElement;
        if (!areaContainer) {
            return;
        }
        var maximizedElement = this.getMaximizedElement();
        if (areaContainer === maximizedElement) {
            this.toDisposeOnToggleMaximized.dispose();
            return;
        }
        if (this.isAttached) {
            widgets_2.MessageLoop.sendMessage(this, widgets_1.Widget.Msg.BeforeDetach);
            this.node.remove();
            widgets_2.MessageLoop.sendMessage(this, widgets_1.Widget.Msg.AfterDetach);
        }
        maximizedElement.style.display = 'block';
        this.addClass(MAXIMIZED_CLASS);
        widgets_2.MessageLoop.sendMessage(this, widgets_1.Widget.Msg.BeforeAttach);
        maximizedElement.appendChild(this.node);
        widgets_2.MessageLoop.sendMessage(this, widgets_1.Widget.Msg.AfterAttach);
        this.fit();
        this.toDisposeOnToggleMaximized.push(disposable_1.Disposable.create(function () {
            maximizedElement.style.display = 'none';
            _this.removeClass(MAXIMIZED_CLASS);
            if (_this.isAttached) {
                widgets_2.MessageLoop.sendMessage(_this, widgets_1.Widget.Msg.BeforeDetach);
                _this.node.remove();
                widgets_2.MessageLoop.sendMessage(_this, widgets_1.Widget.Msg.AfterDetach);
            }
            widgets_2.MessageLoop.sendMessage(_this, widgets_1.Widget.Msg.BeforeAttach);
            areaContainer.appendChild(_this.node);
            widgets_2.MessageLoop.sendMessage(_this, widgets_1.Widget.Msg.AfterAttach);
            _this.fit();
        }));
        var layout = this.layout;
        if (layout instanceof widgets_1.DockLayout) {
            var onResize_1 = layout['onResize'];
            layout['onResize'] = function () { return onResize_1.bind(layout)(widgets_1.Widget.ResizeMessage.UnknownSize); };
            this.toDisposeOnToggleMaximized.push(disposable_1.Disposable.create(function () { return layout['onResize'] = onResize_1; }));
        }
        var removedListener = function () {
            if (!_this.widgets().next()) {
                _this.toDisposeOnToggleMaximized.dispose();
            }
        };
        this.widgetRemoved.connect(removedListener);
        this.toDisposeOnToggleMaximized.push(disposable_1.Disposable.create(function () { return _this.widgetRemoved.disconnect(removedListener); }));
    };
    TheiaDockPanel.prototype.getMaximizedElement = function () {
        if (!this.maximizedElement) {
            this.maximizedElement = document.createElement('div');
            this.maximizedElement.style.display = 'none';
            document.body.appendChild(this.maximizedElement);
        }
        return this.maximizedElement;
    };
    return TheiaDockPanel;
}(widgets_1.DockPanel));
exports.TheiaDockPanel = TheiaDockPanel;
//# sourceMappingURL=theia-dock-panel.js.map
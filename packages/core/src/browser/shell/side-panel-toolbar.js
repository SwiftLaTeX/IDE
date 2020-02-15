"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var widgets_1 = require("@phosphor/widgets");
var widgets_2 = require("../widgets");
var event_1 = require("../../common/event");
var SidePanelToolbar = /** @class */ (function (_super) {
    __extends(SidePanelToolbar, _super);
    function SidePanelToolbar(tabBarToolbarRegistry, tabBarToolbarFactory, side) {
        var _this = _super.call(this) || this;
        _this.tabBarToolbarRegistry = tabBarToolbarRegistry;
        _this.tabBarToolbarFactory = tabBarToolbarFactory;
        _this.side = side;
        _this.onContextMenuEmitter = new event_1.Emitter();
        _this.onContextMenu = _this.onContextMenuEmitter.event;
        _this.toDispose.push(_this.onContextMenuEmitter);
        _this.init();
        _this.tabBarToolbarRegistry.onDidChange(function () { return _this.update(); });
        return _this;
    }
    SidePanelToolbar.prototype.onBeforeAttach = function (msg) {
        var _this = this;
        _super.prototype.onBeforeAttach.call(this, msg);
        if (this.titleContainer) {
            this.addEventListener(this.titleContainer, 'contextmenu', function (e) { return _this.onContextMenuEmitter.fire(e); });
        }
    };
    SidePanelToolbar.prototype.onAfterAttach = function (msg) {
        if (this.toolbar) {
            if (this.toolbar.isAttached) {
                widgets_1.Widget.detach(this.toolbar);
            }
            widgets_1.Widget.attach(this.toolbar, this.node);
        }
        _super.prototype.onAfterAttach.call(this, msg);
    };
    SidePanelToolbar.prototype.onBeforeDetach = function (msg) {
        if (this.titleContainer) {
            this.node.removeChild(this.titleContainer);
        }
        if (this.toolbar && this.toolbar.isAttached) {
            widgets_1.Widget.detach(this.toolbar);
        }
        _super.prototype.onBeforeDetach.call(this, msg);
    };
    SidePanelToolbar.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.updateToolbar();
    };
    SidePanelToolbar.prototype.updateToolbar = function () {
        if (!this.toolbar) {
            return;
        }
        var current = this._toolbarTitle;
        var widget = current && current.owner || undefined;
        var items = widget ? this.tabBarToolbarRegistry.visibleItems(widget) : [];
        this.toolbar.updateItems(items, widget);
    };
    SidePanelToolbar.prototype.init = function () {
        this.titleContainer = document.createElement('div');
        this.titleContainer.classList.add('theia-sidepanel-title');
        this.titleContainer.classList.add('noWrapInfo');
        this.titleContainer.classList.add('noselect');
        this.node.appendChild(this.titleContainer);
        this.node.classList.add('theia-sidepanel-toolbar');
        this.node.classList.add("theia-" + this.side + "-side-panel");
        this.toolbar = this.tabBarToolbarFactory();
        this.update();
    };
    Object.defineProperty(SidePanelToolbar.prototype, "toolbarTitle", {
        set: function (title) {
            if (this.titleContainer && title) {
                this._toolbarTitle = title;
                this.titleContainer.innerText = this._toolbarTitle.label;
                this.titleContainer.title = this._toolbarTitle.caption || this._toolbarTitle.label;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    return SidePanelToolbar;
}(widgets_2.BaseWidget));
exports.SidePanelToolbar = SidePanelToolbar;
//# sourceMappingURL=side-panel-toolbar.js.map
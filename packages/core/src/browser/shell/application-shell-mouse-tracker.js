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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var application_shell_1 = require("./application-shell");
var inversify_1 = require("inversify");
var disposable_1 = require("../../common/disposable");
var event_1 = require("../../common/event");
var widgets_1 = require("@phosphor/widgets");
var widgets_2 = require("../widgets");
/**
 * Contribution that tracks `mouseup` and `mousedown` events.
 *
 * This is required to be able to track the `TabBar`, `DockPanel`, and `SidePanel` resizing and drag and drop events correctly
 * all over the application. By default, when the mouse is over an `iframe` we lose the mouse tracking ability, so whenever
 * we click (`mousedown`), we overlay a transparent `div` over the `iframe` in the Mini Browser, then we set the `display` of
 * the transparent `div` to `none` on `mouseup` events.
 */
var ApplicationShellMouseTracker = /** @class */ (function () {
    function ApplicationShellMouseTracker() {
        var _this = this;
        this.toDispose = new disposable_1.DisposableCollection();
        this.toDisposeOnActiveChange = new disposable_1.DisposableCollection();
        this.mouseupEmitter = new event_1.Emitter();
        this.mousedownEmitter = new event_1.Emitter();
        this.mouseupListener = function (e) { return _this.mouseupEmitter.fire(e); };
        this.mousedownListener = function (e) { return _this.mousedownEmitter.fire(e); };
    }
    ApplicationShellMouseTracker_1 = ApplicationShellMouseTracker;
    ApplicationShellMouseTracker.prototype.onStart = function () {
        var _this = this;
        // Here we need to attach a `mousedown` listener to the `TabBar`s, `DockPanel`s and the `SidePanel`s. Otherwise, Phosphor handles the event and stops the propagation.
        // Track the `mousedown` on the `TabBar` for the currently active widget.
        this.applicationShell.activeChanged.connect(function (shell, args) {
            _this.toDisposeOnActiveChange.dispose();
            if (args.newValue) {
                var tabBar = shell.getTabBarFor(args.newValue);
                if (tabBar) {
                    _this.toDisposeOnActiveChange.push(widgets_2.addEventListener(tabBar.node, 'mousedown', _this.mousedownListener, true));
                }
            }
        });
        // Track the `mousedown` events for the `SplitPanel`s, if any.
        var layout = this.applicationShell.layout;
        if (layout instanceof widgets_1.PanelLayout) {
            this.toDispose.pushAll(layout.widgets.filter(ApplicationShellMouseTracker_1.isSplitPanel).map(function (splitPanel) { return widgets_2.addEventListener(splitPanel.node, 'mousedown', _this.mousedownListener, true); }));
        }
        // Track the `mousedown` on each `DockPanel`.
        var _a = this.applicationShell, mainPanel = _a.mainPanel, bottomPanel = _a.bottomPanel, leftPanelHandler = _a.leftPanelHandler, rightPanelHandler = _a.rightPanelHandler;
        this.toDispose.pushAll([mainPanel, bottomPanel, leftPanelHandler.dockPanel, rightPanelHandler.dockPanel]
            .map(function (panel) { return widgets_2.addEventListener(panel.node, 'mousedown', _this.mousedownListener, true); }));
        // The `mouseup` event has to be tracked on the `document`. Phosphor attaches to there.
        document.addEventListener('mouseup', this.mouseupListener, true);
        // Make sure it is disposed in the end.
        this.toDispose.pushAll([
            this.mousedownEmitter,
            this.mouseupEmitter,
            disposable_1.Disposable.create(function () { return document.removeEventListener('mouseup', _this.mouseupListener, true); })
        ]);
    };
    ApplicationShellMouseTracker.prototype.onStop = function () {
        this.toDispose.dispose();
        this.toDisposeOnActiveChange.dispose();
    };
    Object.defineProperty(ApplicationShellMouseTracker.prototype, "onMouseup", {
        get: function () {
            return this.mouseupEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationShellMouseTracker.prototype, "onMousedown", {
        get: function () {
            return this.mousedownEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    var ApplicationShellMouseTracker_1;
    __decorate([
        inversify_1.inject(application_shell_1.ApplicationShell),
        __metadata("design:type", application_shell_1.ApplicationShell)
    ], ApplicationShellMouseTracker.prototype, "applicationShell", void 0);
    ApplicationShellMouseTracker = ApplicationShellMouseTracker_1 = __decorate([
        inversify_1.injectable()
    ], ApplicationShellMouseTracker);
    return ApplicationShellMouseTracker;
}());
exports.ApplicationShellMouseTracker = ApplicationShellMouseTracker;
(function (ApplicationShellMouseTracker) {
    function isSplitPanel(arg) {
        return arg instanceof widgets_1.SplitPanel;
    }
    ApplicationShellMouseTracker.isSplitPanel = isSplitPanel;
})(ApplicationShellMouseTracker = exports.ApplicationShellMouseTracker || (exports.ApplicationShellMouseTracker = {}));
exports.ApplicationShellMouseTracker = ApplicationShellMouseTracker;
//# sourceMappingURL=application-shell-mouse-tracker.js.map
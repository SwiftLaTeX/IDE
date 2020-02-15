"use strict";
/********************************************************************************
 * Copyright (C) 2018-2019 TypeFox and others.
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
var widgets_1 = require("./widgets");
var event_1 = require("../common/event");
var promise_util_1 = require("../common/promise-util");
var disposable_1 = require("../common/disposable");
var command_1 = require("../common/command");
var menu_1 = require("../common/menu");
var shell_1 = require("./shell");
var theia_dock_panel_1 = require("./shell/theia-dock-panel");
var frontend_application_state_1 = require("./frontend-application-state");
var context_menu_renderer_1 = require("./context-menu-renderer");
var browser_1 = require("./browser");
var widget_manager_1 = require("./widget-manager");
var tab_bar_toolbar_1 = require("./shell/tab-bar-toolbar");
var keys_1 = require("./keys");
var progress_location_service_1 = require("./progress-location-service");
var progress_bar_1 = require("./progress-bar");
var ViewContainerIdentifier = /** @class */ (function () {
    function ViewContainerIdentifier() {
    }
    ViewContainerIdentifier = __decorate([
        inversify_1.injectable()
    ], ViewContainerIdentifier);
    return ViewContainerIdentifier;
}());
exports.ViewContainerIdentifier = ViewContainerIdentifier;
/**
 * A view container holds an arbitrary number of widgets inside a split panel.
 * Each widget is wrapped in a _part_ that displays the widget title and toolbar
 * and allows to collapse / expand the widget content.
 */
var ViewContainer = /** @class */ (function (_super) {
    __extends(ViewContainer, _super);
    function ViewContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attached = new promise_util_1.Deferred();
        _this.onDidChangeTrackableWidgetsEmitter = new event_1.Emitter();
        _this.onDidChangeTrackableWidgets = _this.onDidChangeTrackableWidgetsEmitter.event;
        _this.toDisposeOnCurrentPart = new disposable_1.DisposableCollection();
        _this.toDisposeOnUpdateTitle = new disposable_1.DisposableCollection();
        _this.toRemoveWidgets = new Map();
        return _this;
    }
    ViewContainer_1 = ViewContainer;
    ViewContainer.prototype.init = function () {
        var _this = this;
        this.id = this.options.id;
        this.addClass('theia-view-container');
        var layout = new widgets_1.PanelLayout();
        this.layout = layout;
        this.panel = new widgets_1.SplitPanel({
            layout: new ViewContainerLayout({
                renderer: widgets_1.SplitPanel.defaultRenderer,
                orientation: this.orientation,
                spacing: 2,
                headerSize: ViewContainerPart.HEADER_HEIGHT,
                animationDuration: 200
            }, this.splitPositionHandler)
        });
        this.panel.node.tabIndex = -1;
        layout.addWidget(this.panel);
        var _a = this, commandRegistry = _a.commandRegistry, menuRegistry = _a.menuRegistry, contextMenuRenderer = _a.contextMenuRenderer;
        this.toDispose.pushAll([
            widgets_1.addEventListener(this.node, 'contextmenu', function (event) {
                if (event.button === 2 && algorithm_1.every(_this.containerLayout.iter(), function (part) { return !!part.isHidden; })) {
                    event.stopPropagation();
                    event.preventDefault();
                    contextMenuRenderer.render({ menuPath: _this.contextMenuPath, anchor: event });
                }
            }),
            commandRegistry.registerCommand({ id: this.globalHideCommandId }, {
                execute: function (anchor) {
                    var toHide = _this.findPartForAnchor(anchor);
                    if (toHide && toHide.canHide) {
                        toHide.hide();
                    }
                },
                isVisible: function (anchor) {
                    var toHide = _this.findPartForAnchor(anchor);
                    if (toHide) {
                        return toHide.canHide && !toHide.isHidden;
                    }
                    else {
                        return algorithm_1.some(_this.containerLayout.iter(), function (part) { return !part.isHidden; });
                    }
                }
            }),
            menuRegistry.registerMenuAction(__spread(this.contextMenuPath, ['0_global']), {
                commandId: this.globalHideCommandId,
                label: 'Hide'
            }),
            this.onDidChangeTrackableWidgetsEmitter
        ]);
        if (this.options.progressLocationId) {
            var onProgress = this.progressLocationService.onProgress(this.options.progressLocationId);
            this.toDispose.push(new progress_bar_1.ProgressBar({ container: this.node, insertMode: 'prepend' }, onProgress));
        }
    };
    ViewContainer.prototype.updateCurrentPart = function (part) {
        if (part && this.getParts().indexOf(part) !== -1) {
            this.currentPart = part;
        }
        if (this.currentPart && !this.currentPart.isDisposed) {
            return;
        }
        var visibleParts = this.getParts().filter(function (p) { return !p.isHidden; });
        var expandedParts = visibleParts.filter(function (p) { return !p.collapsed; });
        this.currentPart = expandedParts[0] || visibleParts[0];
    };
    ViewContainer.prototype.setTitleOptions = function (titleOptions) {
        this.titleOptions = titleOptions;
        this.updateTitle();
    };
    ViewContainer.prototype.updateTitle = function () {
        var _this = this;
        this.toDisposeOnUpdateTitle.dispose();
        this.toDispose.push(this.toDisposeOnUpdateTitle);
        var title = this.titleOptions;
        if (!title) {
            return;
        }
        var visibleParts = this.getParts().filter(function (part) { return !part.isHidden; });
        this.title.label = title.label;
        if (visibleParts.length === 1) {
            var part_1 = visibleParts[0];
            this.toDisposeOnUpdateTitle.push(part_1.onTitleChanged(function () { return _this.updateTitle(); }));
            var partLabel = part_1.wrapped.title.label;
            if (partLabel) {
                this.title.label += ': ' + partLabel;
            }
            part_1.collapsed = false;
            part_1.hideTitle();
            this.toolbarRegistry.visibleItems(part_1.wrapped).forEach(function (partItem) {
                var id = "__" + _this.id + "_title:" + partItem.id;
                if ('command' in partItem) {
                    var command = _this.commandRegistry.getCommand(partItem.id);
                    _this.toDisposeOnUpdateTitle.push(_this.commandRegistry.registerCommand({ id: id }, {
                        execute: function (arg) {
                            var _a;
                            var args = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                args[_i - 1] = arguments[_i];
                            }
                            return arg instanceof widgets_1.Widget && arg.id === _this.id && (_a = _this.commandRegistry).executeCommand.apply(_a, __spread([partItem.command, part_1.wrapped], args));
                        },
                        isEnabled: function (arg) {
                            var _a;
                            var args = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                args[_i - 1] = arguments[_i];
                            }
                            return arg instanceof widgets_1.Widget && arg.id === _this.id && (_a = _this.commandRegistry).isEnabled.apply(_a, __spread([partItem.command, part_1.wrapped], args));
                        },
                        isVisible: function (arg) {
                            var _a;
                            var args = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                args[_i - 1] = arguments[_i];
                            }
                            return arg instanceof widgets_1.Widget && arg.id === _this.id && (_a = _this.commandRegistry).isVisible.apply(_a, __spread([partItem.command, part_1.wrapped], args));
                        },
                        isToggled: function (arg) {
                            var _a;
                            var args = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                args[_i - 1] = arguments[_i];
                            }
                            return arg instanceof widgets_1.Widget && arg.id === _this.id && (_a = _this.commandRegistry).isToggled.apply(_a, __spread([partItem.command, part_1.wrapped], args));
                        },
                    }));
                    var tooltip = partItem.tooltip || (command && command.label);
                    var icon = partItem.icon || (command && command.iconClass);
                    _this.toDisposeOnUpdateTitle.push(_this.toolbarRegistry.registerItem(__assign(__assign({}, partItem), { id: id, command: id, tooltip: tooltip, icon: icon })));
                }
                else {
                    _this.toDisposeOnUpdateTitle.push(_this.toolbarRegistry.registerItem(__assign(__assign({}, partItem), { isVisible: function (widget) { return widget.id === _this.id && (!partItem.isVisible || partItem.isVisible(part_1.wrapped)); } })));
                }
            });
        }
        else {
            visibleParts.forEach(function (part) { return part.showTitle(); });
        }
        var caption = title.caption || title.label;
        if (caption) {
            this.title.caption = caption;
            if (visibleParts.length === 1) {
                var partCaption = visibleParts[0].wrapped.title.caption || visibleParts[0].wrapped.title.label;
                if (partCaption) {
                    this.title.caption += ': ' + partCaption;
                }
            }
        }
        if (title.iconClass) {
            this.title.iconClass = title.iconClass;
        }
        if (title.closeable !== undefined) {
            this.title.closable = title.closeable;
        }
    };
    ViewContainer.prototype.findPartForAnchor = function (anchor) {
        var element = document.elementFromPoint(anchor.x, anchor.y);
        if (element instanceof Element) {
            var closestPart_1 = ViewContainerPart.closestPart(element);
            if (closestPart_1 && closestPart_1.id) {
                return algorithm_1.find(this.containerLayout.iter(), function (part) { return part.id === closestPart_1.id; });
            }
        }
        return undefined;
    };
    ViewContainer.prototype.addWidget = function (widget, options) {
        var _this = this;
        var existing = this.toRemoveWidgets.get(widget.id);
        if (existing) {
            return existing;
        }
        var toRemoveWidget = new disposable_1.DisposableCollection();
        this.toDispose.push(toRemoveWidget);
        this.toRemoveWidgets.set(widget.id, toRemoveWidget);
        toRemoveWidget.push(disposable_1.Disposable.create(function () { return _this.toRemoveWidgets.delete(widget.id); }));
        var description = this.widgetManager.getDescription(widget);
        var partId = description ? JSON.stringify(description) : widget.id;
        var newPart = new ViewContainerPart(widget, partId, this.id, this.toolbarRegistry, this.toolbarFactory, options);
        this.registerPart(newPart);
        if (newPart.options && newPart.options.order !== undefined) {
            var index = this.getParts().findIndex(function (part) { return part.options.order === undefined || part.options.order > newPart.options.order; });
            if (index >= 0) {
                this.containerLayout.insertWidget(index, newPart);
            }
            else {
                this.containerLayout.addWidget(newPart);
            }
        }
        else {
            this.containerLayout.addWidget(newPart);
        }
        this.refreshMenu(newPart);
        this.updateTitle();
        this.updateCurrentPart();
        this.update();
        this.fireDidChangeTrackableWidgets();
        toRemoveWidget.pushAll([
            newPart,
            disposable_1.Disposable.create(function () {
                _this.unregisterPart(newPart);
                if (!newPart.isDisposed) {
                    _this.containerLayout.removeWidget(newPart);
                }
                if (!_this.isDisposed) {
                    _this.update();
                    _this.updateTitle();
                    _this.updateCurrentPart();
                    _this.fireDidChangeTrackableWidgets();
                }
            }),
            this.registerDND(newPart),
            newPart.onVisibilityChanged(function () {
                _this.updateTitle();
                _this.updateCurrentPart();
            }),
            newPart.onCollapsed(function () {
                _this.containerLayout.updateCollapsed(newPart, _this.enableAnimation);
                _this.updateCurrentPart();
            }),
            newPart.onContextMenu(function (event) {
                if (event.button === 2) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this.contextMenuRenderer.render({ menuPath: _this.contextMenuPath, anchor: event });
                }
            }),
            newPart.onTitleChanged(function () { return _this.refreshMenu(newPart); }),
            newPart.onDidFocus(function () { return _this.updateCurrentPart(newPart); })
        ]);
        newPart.disposed.connect(function () { return toRemoveWidget.dispose(); });
        return toRemoveWidget;
    };
    ViewContainer.prototype.removeWidget = function (widget) {
        var disposable = this.toRemoveWidgets.get(widget.id);
        if (disposable) {
            disposable.dispose();
            return true;
        }
        return false;
    };
    ViewContainer.prototype.getParts = function () {
        return this.containerLayout.widgets;
    };
    ViewContainer.prototype.getPartFor = function (widget) {
        return this.getParts().find(function (p) { return p.wrapped.id === widget.id; });
    };
    Object.defineProperty(ViewContainer.prototype, "containerLayout", {
        get: function () {
            return this.panel.layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "orientation", {
        get: function () {
            return ViewContainer_1.getOrientation(this.node);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "enableAnimation", {
        get: function () {
            return this.applicationStateService.state === 'ready';
        },
        enumerable: true,
        configurable: true
    });
    ViewContainer.prototype.storeState = function () {
        var _this = this;
        if (!this.isVisible && this.lastVisibleState) {
            return this.lastVisibleState;
        }
        var parts = this.getParts();
        var availableSize = this.containerLayout.getAvailableSize();
        var orientation = this.orientation;
        var partStates = parts.map(function (part) {
            var size = _this.containerLayout.getPartSize(part);
            if (size && size > ViewContainerPart.HEADER_HEIGHT && orientation === 'vertical') {
                size -= ViewContainerPart.HEADER_HEIGHT;
            }
            return {
                widget: part.wrapped,
                partId: part.partId,
                collapsed: part.collapsed,
                hidden: part.isHidden,
                relativeSize: size && availableSize ? size / availableSize : undefined
            };
        });
        return { parts: partStates, title: this.titleOptions };
    };
    /**
     * The view container restores the visibility, order and relative sizes of contained
     * widgets, but _not_ the widgets themselves. In case the set of widgets is not fixed,
     * it should be restored in the specific subclass or in the widget holding the view container.
     */
    ViewContainer.prototype.restoreState = function (state) {
        var e_1, _a;
        var _this = this;
        this.lastVisibleState = state;
        this.setTitleOptions(state.title);
        try {
            // restore widgets
            for (var _b = __values(state.parts), _c = _b.next(); !_c.done; _c = _b.next()) {
                var part = _c.value;
                if (part.widget) {
                    this.addWidget(part.widget);
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
        var partStates = state.parts.filter(function (partState) { return algorithm_1.some(_this.containerLayout.iter(), function (p) { return p.partId === partState.partId; }); });
        var _loop_1 = function (index) {
            var partState = partStates[index];
            var currentIndex = this_1.getParts().findIndex(function (p) { return p.partId === partState.partId; });
            if (currentIndex > index) {
                this_1.containerLayout.moveWidget(currentIndex, index, this_1.getParts()[currentIndex]);
            }
        };
        var this_1 = this;
        // Reorder the parts according to the stored state
        for (var index = 0; index < partStates.length; index++) {
            _loop_1(index);
        }
        // Restore visibility and collapsed state
        var parts = this.getParts();
        var _loop_2 = function (index) {
            var part = parts[index];
            var partState = partStates.find(function (s) { return part.partId === s.partId; });
            if (partState) {
                part.collapsed = partState.collapsed || !partState.relativeSize;
                if (part.canHide) {
                    part.setHidden(partState.hidden);
                }
            }
            else if (part.canHide) {
                part.hide();
            }
            this_2.refreshMenu(part);
        };
        var this_2 = this;
        for (var index = 0; index < parts.length; index++) {
            _loop_2(index);
        }
        // Restore part sizes
        this.attached.promise.then(function () {
            _this.containerLayout.setPartSizes(partStates.map(function (partState) { return partState.relativeSize; }));
        });
    };
    /**
     * Register a command to toggle the visibility of the new part.
     */
    ViewContainer.prototype.registerPart = function (toRegister) {
        var _this = this;
        var commandId = this.toggleVisibilityCommandId(toRegister);
        this.commandRegistry.registerCommand({ id: commandId }, {
            execute: function () {
                var toHide = algorithm_1.find(_this.containerLayout.iter(), function (part) { return part.id === toRegister.id; });
                if (toHide) {
                    toHide.setHidden(!toHide.isHidden);
                }
            },
            isToggled: function () {
                if (!toRegister.canHide) {
                    return true;
                }
                var widgetToToggle = algorithm_1.find(_this.containerLayout.iter(), function (part) { return part.id === toRegister.id; });
                if (widgetToToggle) {
                    return !widgetToToggle.isHidden;
                }
                return false;
            },
            isEnabled: function (arg) { return toRegister.canHide && (!_this.titleOptions || !(arg instanceof widgets_1.Widget) || (arg instanceof ViewContainer_1 && arg.id === _this.id)); },
            isVisible: function (arg) { return !_this.titleOptions || !(arg instanceof widgets_1.Widget) || (arg instanceof ViewContainer_1 && arg.id === _this.id); }
        });
    };
    /**
     * Register a menu action to toggle the visibility of the new part.
     * The menu action is unregistered first to enable refreshing the order of menu actions.
     */
    ViewContainer.prototype.refreshMenu = function (part) {
        var commandId = this.toggleVisibilityCommandId(part);
        this.menuRegistry.unregisterMenuAction(commandId);
        if (!part.wrapped.title.label) {
            return;
        }
        var action = {
            commandId: commandId,
            label: part.wrapped.title.label,
            order: this.getParts().indexOf(part).toString()
        };
        this.menuRegistry.registerMenuAction(__spread(this.contextMenuPath, ['1_widgets']), action);
        if (this.titleOptions) {
            this.menuRegistry.registerMenuAction(__spread(shell_1.SIDE_PANEL_TOOLBAR_CONTEXT_MENU, ['navigation']), action);
        }
    };
    ViewContainer.prototype.unregisterPart = function (part) {
        var commandId = this.toggleVisibilityCommandId(part);
        this.commandRegistry.unregisterCommand(commandId);
        this.menuRegistry.unregisterMenuAction(commandId);
    };
    Object.defineProperty(ViewContainer.prototype, "contextMenuPath", {
        get: function () {
            return [this.id + "-context-menu"];
        },
        enumerable: true,
        configurable: true
    });
    ViewContainer.prototype.toggleVisibilityCommandId = function (part) {
        return this.id + ":toggle-visibility-" + part.id;
    };
    Object.defineProperty(ViewContainer.prototype, "globalHideCommandId", {
        get: function () {
            return this.id + ":toggle-visibility";
        },
        enumerable: true,
        configurable: true
    });
    ViewContainer.prototype.moveBefore = function (toMovedId, moveBeforeThisId) {
        var parts = this.getParts();
        var toMoveIndex = parts.findIndex(function (part) { return part.id === toMovedId; });
        var moveBeforeThisIndex = parts.findIndex(function (part) { return part.id === moveBeforeThisId; });
        if (toMoveIndex >= 0 && moveBeforeThisIndex >= 0) {
            this.containerLayout.moveWidget(toMoveIndex, moveBeforeThisIndex, parts[toMoveIndex]);
            for (var index = Math.min(toMoveIndex, moveBeforeThisIndex); index < parts.length; index++) {
                this.refreshMenu(parts[index]);
                this.activate();
            }
        }
    };
    ViewContainer.prototype.getTrackableWidgets = function () {
        return this.getParts().map(function (w) { return w.wrapped; });
    };
    ViewContainer.prototype.fireDidChangeTrackableWidgets = function () {
        this.onDidChangeTrackableWidgetsEmitter.fire(this.getTrackableWidgets());
    };
    ViewContainer.prototype.activateWidget = function (id) {
        var part = this.revealPart(id);
        if (!part) {
            return undefined;
        }
        this.updateCurrentPart(part);
        return part.wrapped;
    };
    ViewContainer.prototype.revealWidget = function (id) {
        var part = this.revealPart(id);
        return part && part.wrapped;
    };
    ViewContainer.prototype.revealPart = function (id) {
        var part = this.getParts().find(function (p) { return p.wrapped.id === id; });
        if (!part) {
            return undefined;
        }
        part.setHidden(false);
        return part;
    };
    ViewContainer.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.currentPart) {
            this.currentPart.activate();
        }
        else {
            this.panel.node.focus({ preventScroll: true });
        }
    };
    ViewContainer.prototype.onAfterAttach = function (msg) {
        var e_2, _a;
        var _this = this;
        var orientation = this.orientation;
        this.containerLayout.orientation = orientation;
        if (orientation === 'horizontal') {
            try {
                for (var _b = __values(this.getParts()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var part = _c.value;
                    part.collapsed = false;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        _super.prototype.onAfterAttach.call(this, msg);
        requestAnimationFrame(function () { return _this.attached.resolve(); });
    };
    ViewContainer.prototype.onBeforeHide = function (msg) {
        _super.prototype.onBeforeHide.call(this, msg);
        this.lastVisibleState = this.storeState();
    };
    ViewContainer.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.lastVisibleState = undefined;
    };
    ViewContainer.prototype.registerDND = function (part) {
        var _this = this;
        part['header'].draggable = true;
        var style = function (event) {
            if (!_this.draggingPart) {
                return;
            }
            event.preventDefault();
            var enclosingPartNode = ViewContainerPart.closestPart(event.target);
            if (enclosingPartNode && enclosingPartNode !== _this.draggingPart.node) {
                enclosingPartNode.classList.add('drop-target');
            }
        };
        var unstyle = function (event) {
            if (!_this.draggingPart) {
                return;
            }
            event.preventDefault();
            var enclosingPartNode = ViewContainerPart.closestPart(event.target);
            if (enclosingPartNode) {
                enclosingPartNode.classList.remove('drop-target');
            }
        };
        return new disposable_1.DisposableCollection(widgets_1.addEventListener(part['header'], 'dragstart', function (event) {
            var dataTransfer = event.dataTransfer;
            if (dataTransfer) {
                _this.draggingPart = part;
                dataTransfer.effectAllowed = 'move';
                dataTransfer.setData('view-container-dnd', part.id);
                var dragImage_1 = document.createElement('div');
                dragImage_1.classList.add('theia-view-container-drag-image');
                dragImage_1.innerText = part.wrapped.title.label;
                document.body.appendChild(dragImage_1);
                dataTransfer.setDragImage(dragImage_1, -10, -10);
                setTimeout(function () { return document.body.removeChild(dragImage_1); }, 0);
            }
        }, false), widgets_1.addEventListener(part.node, 'dragend', function () { return _this.draggingPart = undefined; }, false), widgets_1.addEventListener(part.node, 'dragover', style, false), widgets_1.addEventListener(part.node, 'dragleave', unstyle, false), widgets_1.addEventListener(part.node, 'drop', function (event) {
            var dataTransfer = event.dataTransfer;
            if (dataTransfer) {
                var moveId = dataTransfer.getData('view-container-dnd');
                if (moveId && moveId !== part.id) {
                    _this.moveBefore(moveId, part.id);
                }
                unstyle(event);
            }
        }, false));
    };
    var ViewContainer_1;
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], ViewContainer.prototype, "applicationStateService", void 0);
    __decorate([
        inversify_1.inject(context_menu_renderer_1.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], ViewContainer.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], ViewContainer.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], ViewContainer.prototype, "menuRegistry", void 0);
    __decorate([
        inversify_1.inject(widget_manager_1.WidgetManager),
        __metadata("design:type", widget_manager_1.WidgetManager)
    ], ViewContainer.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(shell_1.SplitPositionHandler),
        __metadata("design:type", shell_1.SplitPositionHandler)
    ], ViewContainer.prototype, "splitPositionHandler", void 0);
    __decorate([
        inversify_1.inject(ViewContainerIdentifier),
        __metadata("design:type", ViewContainerIdentifier)
    ], ViewContainer.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarRegistry),
        __metadata("design:type", tab_bar_toolbar_1.TabBarToolbarRegistry)
    ], ViewContainer.prototype, "toolbarRegistry", void 0);
    __decorate([
        inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarFactory),
        __metadata("design:type", Function)
    ], ViewContainer.prototype, "toolbarFactory", void 0);
    __decorate([
        inversify_1.inject(progress_location_service_1.ProgressLocationService),
        __metadata("design:type", progress_location_service_1.ProgressLocationService)
    ], ViewContainer.prototype, "progressLocationService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ViewContainer.prototype, "init", null);
    ViewContainer = ViewContainer_1 = __decorate([
        inversify_1.injectable()
    ], ViewContainer);
    return ViewContainer;
}(widgets_1.BaseWidget));
exports.ViewContainer = ViewContainer;
(function (ViewContainer) {
    ViewContainer.Factory = Symbol('ViewContainerFactory');
    function getOrientation(node) {
        if (node.closest("#" + theia_dock_panel_1.MAIN_AREA_ID) || node.closest("#" + theia_dock_panel_1.BOTTOM_AREA_ID)) {
            return 'horizontal';
        }
        return 'vertical';
    }
    ViewContainer.getOrientation = getOrientation;
})(ViewContainer = exports.ViewContainer || (exports.ViewContainer = {}));
exports.ViewContainer = ViewContainer;
/**
 * Wrapper around a widget held by a view container. Adds a header to display the
 * title, toolbar, and collapse / expand handle.
 */
var ViewContainerPart = /** @class */ (function (_super) {
    __extends(ViewContainerPart, _super);
    function ViewContainerPart(wrapped, partId, viewContainerId, toolbarRegistry, toolbarFactory, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.wrapped = wrapped;
        _this.partId = partId;
        _this.toolbarRegistry = toolbarRegistry;
        _this.toolbarFactory = toolbarFactory;
        _this.options = options;
        _this.collapsedEmitter = new event_1.Emitter();
        _this.contextMenuEmitter = new event_1.Emitter();
        /**
         * @deprecated since 0.11.0, use `onDidChangeVisibility` instead
         */
        _this.onVisibilityChanged = _this.onDidChangeVisibility;
        _this.onTitleChangedEmitter = new event_1.Emitter();
        _this.onTitleChanged = _this.onTitleChangedEmitter.event;
        _this.onDidFocusEmitter = new event_1.Emitter();
        _this.onDidFocus = _this.onDidFocusEmitter.event;
        _this.toShowHeader = new disposable_1.DisposableCollection();
        _this.toHideToolbar = new disposable_1.DisposableCollection();
        wrapped.parent = _this;
        wrapped.disposed.connect(function () { return _this.dispose(); });
        _this.id = viewContainerId + "--" + wrapped.id;
        _this.addClass('part');
        var fireTitleChanged = function () { return _this.onTitleChangedEmitter.fire(undefined); };
        _this.wrapped.title.changed.connect(fireTitleChanged);
        _this.toDispose.push(disposable_1.Disposable.create(function () { return _this.wrapped.title.changed.disconnect(fireTitleChanged); }));
        var _a = _this.createContent(), header = _a.header, body = _a.body, disposable = _a.disposable;
        _this.header = header;
        _this.body = body;
        _this.toNoDisposeWrapped = _this.toDispose.push(wrapped);
        _this.toDispose.pushAll([
            disposable,
            _this.collapsedEmitter,
            _this.contextMenuEmitter,
            _this.onTitleChangedEmitter,
            _this.registerContextMenu(),
            _this.onDidFocusEmitter,
            // focus event does not bubble, capture it
            widgets_1.addEventListener(_this.node, 'focus', function () { return _this.onDidFocusEmitter.fire(_this); }, true)
        ]);
        _this.scrollOptions = {
            suppressScrollX: true,
            minScrollbarLength: 35
        };
        _this.collapsed = !!options.initiallyCollapsed;
        if (options.initiallyHidden && _this.canHide) {
            _this.hide();
        }
        return _this;
    }
    Object.defineProperty(ViewContainerPart.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        set: function (collapsed) {
            // Cannot collapse/expand if the orientation of the container is `horizontal`.
            var orientation = ViewContainer.getOrientation(this.node);
            if (this._collapsed === collapsed || orientation === 'horizontal' && collapsed) {
                return;
            }
            this._collapsed = collapsed;
            if (collapsed && this.wrapped.node.contains(document.activeElement)) {
                this.header.focus();
            }
            this.wrapped.setHidden(collapsed);
            var toggleIcon = this.header.querySelector("span." + widgets_1.EXPANSION_TOGGLE_CLASS);
            if (toggleIcon) {
                if (collapsed) {
                    toggleIcon.classList.add(widgets_1.COLLAPSED_CLASS);
                }
                else {
                    toggleIcon.classList.remove(widgets_1.COLLAPSED_CLASS);
                }
            }
            this.update();
            this.collapsedEmitter.fire(collapsed);
        },
        enumerable: true,
        configurable: true
    });
    ViewContainerPart.prototype.setHidden = function (hidden) {
        if (!this.canHide) {
            return;
        }
        _super.prototype.setHidden.call(this, hidden);
        if (!this.isHidden) {
            this.collapsed = false;
        }
    };
    Object.defineProperty(ViewContainerPart.prototype, "canHide", {
        get: function () {
            return this.options.canHide === undefined || this.options.canHide;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerPart.prototype, "onCollapsed", {
        get: function () {
            return this.collapsedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerPart.prototype, "onContextMenu", {
        get: function () {
            return this.contextMenuEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerPart.prototype, "minSize", {
        get: function () {
            var style = getComputedStyle(this.body);
            if (ViewContainer.getOrientation(this.node) === 'horizontal') {
                return browser_1.parseCssMagnitude(style.minWidth, 0);
            }
            else {
                return browser_1.parseCssMagnitude(style.minHeight, 0);
            }
        },
        enumerable: true,
        configurable: true
    });
    ViewContainerPart.prototype.showTitle = function () {
        this.toShowHeader.dispose();
    };
    ViewContainerPart.prototype.hideTitle = function () {
        var _this = this;
        if (this.titleHidden) {
            return;
        }
        var display = this.header.style.display;
        var height = this.body.style.height;
        this.body.style.height = '100%';
        this.header.style.display = 'none';
        this.toShowHeader.push(disposable_1.Disposable.create(function () {
            _this.header.style.display = display;
            _this.body.style.height = height;
        }));
    };
    Object.defineProperty(ViewContainerPart.prototype, "titleHidden", {
        get: function () {
            return !this.toShowHeader.disposed || this.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    ViewContainerPart.prototype.getScrollContainer = function () {
        return this.body;
    };
    ViewContainerPart.prototype.registerContextMenu = function () {
        var _this = this;
        return new disposable_1.DisposableCollection(widgets_1.addEventListener(this.header, 'contextmenu', function (event) {
            _this.contextMenuEmitter.fire(event);
        }));
    };
    ViewContainerPart.prototype.createContent = function () {
        var disposable = new disposable_1.DisposableCollection();
        var _a = this.createHeader(), header = _a.header, headerDisposable = _a.disposable;
        var body = document.createElement('div');
        body.classList.add('body');
        this.node.appendChild(header);
        this.node.appendChild(body);
        disposable.push(headerDisposable);
        return {
            header: header,
            body: body,
            disposable: disposable,
        };
    };
    ViewContainerPart.prototype.createHeader = function () {
        var _this = this;
        var disposable = new disposable_1.DisposableCollection();
        var header = document.createElement('div');
        header.tabIndex = 0;
        header.classList.add('theia-header', 'header');
        disposable.push(widgets_1.addEventListener(header, 'click', function (event) {
            if (_this.toolbar && _this.toolbar.shouldHandleMouseEvent(event)) {
                return;
            }
            _this.collapsed = !_this.collapsed;
        }));
        disposable.push(widgets_1.addKeyListener(header, keys_1.Key.ARROW_LEFT, function () { return _this.collapsed = true; }));
        disposable.push(widgets_1.addKeyListener(header, keys_1.Key.ARROW_RIGHT, function () { return _this.collapsed = false; }));
        disposable.push(widgets_1.addKeyListener(header, keys_1.Key.ENTER, function () { return _this.collapsed = !_this.collapsed; }));
        var toggleIcon = document.createElement('span');
        toggleIcon.classList.add(widgets_1.EXPANSION_TOGGLE_CLASS);
        if (this.collapsed) {
            toggleIcon.classList.add(widgets_1.COLLAPSED_CLASS);
        }
        header.appendChild(toggleIcon);
        var title = document.createElement('span');
        title.classList.add('label', 'noselect');
        var updateTitle = function () { return title.innerText = _this.wrapped.title.label; };
        var updateCaption = function () { return title.title = _this.wrapped.title.caption || _this.wrapped.title.label; };
        updateTitle();
        updateCaption();
        disposable.pushAll([
            this.onTitleChanged(updateTitle),
            this.onTitleChanged(updateCaption)
        ]);
        header.appendChild(title);
        return {
            header: header,
            disposable: disposable
        };
    };
    ViewContainerPart.prototype.hideToolbar = function () {
        this.toHideToolbar.dispose();
    };
    ViewContainerPart.prototype.showToolbar = function () {
        var _this = this;
        if (this.toolbarHidden) {
            return;
        }
        this.toDisposeOnDetach.push(this.toHideToolbar);
        var toolbar = this.toolbarFactory();
        toolbar.addClass('theia-view-container-part-title');
        this.toHideToolbar.push(toolbar);
        widgets_1.Widget.attach(toolbar, this.header);
        this.toHideToolbar.push(disposable_1.Disposable.create(function () { return widgets_1.Widget.detach(toolbar); }));
        this.toolbar = toolbar;
        this.toHideToolbar.push(disposable_1.Disposable.create(function () { return _this.toolbar = undefined; }));
        var items = this.toolbarRegistry.visibleItems(this.wrapped);
        toolbar.updateItems(items, this.wrapped);
    };
    Object.defineProperty(ViewContainerPart.prototype, "toolbarHidden", {
        get: function () {
            return !this.toHideToolbar.disposed || this.titleHidden;
        },
        enumerable: true,
        configurable: true
    });
    ViewContainerPart.prototype.onResize = function (msg) {
        if (this.wrapped.isAttached && !this.collapsed) {
            widgets_1.MessageLoop.sendMessage(this.wrapped, widgets_1.Widget.ResizeMessage.UnknownSize);
        }
        _super.prototype.onResize.call(this, msg);
    };
    ViewContainerPart.prototype.onUpdateRequest = function (msg) {
        if (this.collapsed) {
            this.hideToolbar();
        }
        else if (this.node.matches(':hover')) {
            this.showToolbar();
        }
        if (this.wrapped.isAttached && !this.collapsed) {
            widgets_1.MessageLoop.sendMessage(this.wrapped, msg);
        }
        _super.prototype.onUpdateRequest.call(this, msg);
    };
    ViewContainerPart.prototype.onBeforeAttach = function (msg) {
        var _this = this;
        _super.prototype.onBeforeAttach.call(this, msg);
        this.addEventListener(this.node, 'mouseenter', function () { return _this.showToolbar(); });
        this.addEventListener(this.node, 'mouseleave', function () { return _this.hideToolbar(); });
    };
    ViewContainerPart.prototype.onAfterAttach = function (msg) {
        if (!this.wrapped.isAttached) {
            widgets_1.MessageLoop.sendMessage(this.wrapped, widgets_1.Widget.Msg.BeforeAttach);
            // eslint-disable-next-line no-null/no-null
            this.body.insertBefore(this.wrapped.node, null);
            widgets_1.MessageLoop.sendMessage(this.wrapped, widgets_1.Widget.Msg.AfterAttach);
        }
        _super.prototype.onAfterAttach.call(this, msg);
    };
    ViewContainerPart.prototype.onBeforeDetach = function (msg) {
        _super.prototype.onBeforeDetach.call(this, msg);
        if (this.wrapped.isAttached) {
            widgets_1.MessageLoop.sendMessage(this.wrapped, widgets_1.Widget.Msg.BeforeDetach);
            this.wrapped.node.parentNode.removeChild(this.wrapped.node);
            widgets_1.MessageLoop.sendMessage(this.wrapped, widgets_1.Widget.Msg.AfterDetach);
        }
    };
    ViewContainerPart.prototype.onBeforeShow = function (msg) {
        if (this.wrapped.isAttached && !this.collapsed) {
            widgets_1.MessageLoop.sendMessage(this.wrapped, msg);
        }
        _super.prototype.onBeforeShow.call(this, msg);
    };
    ViewContainerPart.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        if (this.wrapped.isAttached && !this.collapsed) {
            widgets_1.MessageLoop.sendMessage(this.wrapped, msg);
        }
    };
    ViewContainerPart.prototype.onBeforeHide = function (msg) {
        if (this.wrapped.isAttached && !this.collapsed) {
            widgets_1.MessageLoop.sendMessage(this.wrapped, msg);
        }
        _super.prototype.onBeforeShow.call(this, msg);
    };
    ViewContainerPart.prototype.onAfterHide = function (msg) {
        _super.prototype.onAfterHide.call(this, msg);
        if (this.wrapped.isAttached && !this.collapsed) {
            widgets_1.MessageLoop.sendMessage(this.wrapped, msg);
        }
    };
    ViewContainerPart.prototype.onChildRemoved = function (msg) {
        _super.prototype.onChildRemoved.call(this, msg);
        // if wrapped is not disposed, but detached then we should not dispose it, but only get rid of this part
        this.toNoDisposeWrapped.dispose();
        this.dispose();
    };
    ViewContainerPart.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.collapsed) {
            this.header.focus();
        }
        else {
            this.wrapped.activate();
        }
    };
    return ViewContainerPart;
}(widgets_1.BaseWidget));
exports.ViewContainerPart = ViewContainerPart;
(function (ViewContainerPart) {
    /**
     * Make sure to adjust the `line-height` of the `.theia-view-container .part > .header` CSS class when modifying this, and vice versa.
     */
    ViewContainerPart.HEADER_HEIGHT = 22;
    function closestPart(element, selector) {
        if (selector === void 0) { selector = 'div.part'; }
        if (element instanceof Element) {
            var part = element.closest(selector);
            if (part instanceof Element) {
                return part;
            }
        }
        return undefined;
    }
    ViewContainerPart.closestPart = closestPart;
})(ViewContainerPart = exports.ViewContainerPart || (exports.ViewContainerPart = {}));
exports.ViewContainerPart = ViewContainerPart;
var ViewContainerLayout = /** @class */ (function (_super) {
    __extends(ViewContainerLayout, _super);
    function ViewContainerLayout(options, splitPositionHandler) {
        var _this = _super.call(this, options) || this;
        _this.options = options;
        _this.splitPositionHandler = splitPositionHandler;
        return _this;
    }
    Object.defineProperty(ViewContainerLayout.prototype, "items", {
        get: function () {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    ViewContainerLayout.prototype.iter = function () {
        return algorithm_1.map(this.items, function (item) { return item.widget; });
    };
    Object.defineProperty(ViewContainerLayout.prototype, "widgets", {
        get: function () {
            return algorithm_1.toArray(this.iter());
        },
        enumerable: true,
        configurable: true
    });
    ViewContainerLayout.prototype.moveWidget = function (fromIndex, toIndex, widget) {
        var ref = this.widgets[toIndex < fromIndex ? toIndex : toIndex + 1];
        _super.prototype.moveWidget.call(this, fromIndex, toIndex, widget);
        if (ref) {
            this.parent.node.insertBefore(this.handles[toIndex], ref.node);
        }
        else {
            this.parent.node.appendChild(this.handles[toIndex]);
        }
        widgets_1.MessageLoop.sendMessage(widget, widgets_1.Widget.Msg.BeforeDetach);
        this.parent.node.removeChild(widget.node);
        widgets_1.MessageLoop.sendMessage(widget, widgets_1.Widget.Msg.AfterDetach);
        widgets_1.MessageLoop.sendMessage(widget, widgets_1.Widget.Msg.BeforeAttach);
        this.parent.node.insertBefore(widget.node, this.handles[toIndex]);
        widgets_1.MessageLoop.sendMessage(widget, widgets_1.Widget.Msg.AfterAttach);
    };
    ViewContainerLayout.prototype.getPartSize = function (part) {
        if (part.collapsed || part.isHidden) {
            return part.uncollapsedSize;
        }
        if (this.orientation === 'horizontal') {
            return part.node.offsetWidth;
        }
        else {
            return part.node.offsetHeight;
        }
    };
    /**
     * Set the sizes of the view container parts according to the given weights
     * by moving the split handles. This is similar to `setRelativeSizes` defined
     * in `SplitLayout`, but here we properly consider the collapsed / expanded state.
     */
    ViewContainerLayout.prototype.setPartSizes = function (weights) {
        var parts = this.widgets;
        var availableSize = this.getAvailableSize();
        // Sum up the weights of visible parts
        var totalWeight = 0;
        var weightCount = 0;
        for (var index = 0; index < weights.length && index < parts.length; index++) {
            var part = parts[index];
            var weight = weights[index];
            if (weight && !part.isHidden && !part.collapsed) {
                totalWeight += weight;
                weightCount++;
            }
        }
        if (weightCount === 0 || availableSize === 0) {
            return;
        }
        // Add the average weight for visible parts without weight
        var averageWeight = totalWeight / weightCount;
        for (var index = 0; index < weights.length && index < parts.length; index++) {
            var part = parts[index];
            var weight = weights[index];
            if (!weight && !part.isHidden && !part.collapsed) {
                totalWeight += averageWeight;
            }
        }
        // Apply the weights to compute actual sizes
        var position = 0;
        for (var index = 0; index < weights.length && index < parts.length - 1; index++) {
            var part = parts[index];
            if (!part.isHidden) {
                if (this.orientation === 'vertical') {
                    position += this.options.headerSize;
                }
                var weight = weights[index];
                if (part.collapsed) {
                    if (weight) {
                        part.uncollapsedSize = weight / totalWeight * availableSize;
                    }
                }
                else {
                    var contentSize = (weight || averageWeight) / totalWeight * availableSize;
                    var minSize = part.minSize;
                    if (contentSize < minSize) {
                        contentSize = minSize;
                    }
                    position += contentSize;
                }
                this.setHandlePosition(index, position);
                position += this.spacing;
            }
        }
    };
    /**
     * Determine the size of the split panel area that is available for widget content,
     * i.e. excluding part headers and split handles.
     */
    ViewContainerLayout.prototype.getAvailableSize = function () {
        if (!this.parent || !this.parent.isAttached) {
            return 0;
        }
        var parts = this.widgets;
        var visiblePartCount = parts.filter(function (part) { return !part.isHidden; }).length;
        var availableSize;
        if (this.orientation === 'horizontal') {
            availableSize = this.parent.node.offsetWidth;
        }
        else {
            availableSize = this.parent.node.offsetHeight;
            availableSize -= visiblePartCount * this.options.headerSize;
        }
        availableSize -= (visiblePartCount - 1) * this.spacing;
        if (availableSize < 0) {
            return 0;
        }
        return availableSize;
    };
    /**
     * Update a view container part that has been collapsed or expanded. The transition
     * to the new state is animated.
     */
    ViewContainerLayout.prototype.updateCollapsed = function (part, enableAnimation) {
        var _this = this;
        var index = this.items.findIndex(function (item) { return item.widget === part; });
        if (index < 0 || !this.parent || part.isHidden) {
            return;
        }
        // Do not store the height of the "stretched item". Otherwise, we mess up the "hint height".
        // Store the height only if there are other expanded items.
        var currentSize = this.orientation === 'horizontal' ? part.node.offsetWidth : part.node.offsetHeight;
        if (part.collapsed && this.items.some(function (item) { return !item.widget.collapsed && !item.widget.isHidden; })) {
            part.uncollapsedSize = currentSize;
        }
        if (!enableAnimation || this.options.animationDuration <= 0) {
            widgets_1.MessageLoop.postMessage(this.parent, widgets_1.Widget.Msg.FitRequest);
            return;
        }
        var startTime = undefined;
        var duration = this.options.animationDuration;
        var direction = part.collapsed ? 'collapse' : 'expand';
        var fullSize;
        if (direction === 'collapse') {
            fullSize = currentSize - this.options.headerSize;
        }
        else {
            fullSize = Math.max((part.uncollapsedSize || 0) - this.options.headerSize, part.minSize);
            if (this.items.filter(function (item) { return !item.widget.collapsed && !item.widget.isHidden; }).length === 1) {
                // Expand to full available size
                fullSize = Math.max(fullSize, this.getAvailableSize());
            }
        }
        // The update function is called on every animation frame until the predefined duration has elapsed.
        var updateFunc = function (time) {
            if (startTime === undefined) {
                startTime = time;
            }
            if (time - startTime < duration) {
                // Render an intermediate state for the animation
                var t = _this.tween((time - startTime) / duration);
                if (direction === 'collapse') {
                    part.animatedSize = (1 - t) * fullSize;
                }
                else {
                    part.animatedSize = t * fullSize;
                }
                requestAnimationFrame(updateFunc);
            }
            else {
                // The animation is finished
                if (direction === 'collapse') {
                    part.animatedSize = undefined;
                }
                else {
                    part.animatedSize = fullSize;
                    // Request another frame to reset the part to variable size
                    requestAnimationFrame(function () {
                        part.animatedSize = undefined;
                        widgets_1.MessageLoop.sendMessage(_this.parent, widgets_1.Widget.Msg.FitRequest);
                    });
                }
            }
            widgets_1.MessageLoop.sendMessage(_this.parent, widgets_1.Widget.Msg.FitRequest);
        };
        requestAnimationFrame(updateFunc);
    };
    ViewContainerLayout.prototype.onFitRequest = function (msg) {
        var e_3, _a;
        try {
            for (var _b = __values(this.widgets), _c = _b.next(); !_c.done; _c = _b.next()) {
                var part = _c.value;
                var style = part.node.style;
                if (part.animatedSize !== undefined) {
                    // The part size has been fixed for animating the transition to collapsed / expanded state
                    var fixedSize = this.options.headerSize + part.animatedSize + "px";
                    style.minHeight = fixedSize;
                    style.maxHeight = fixedSize;
                }
                else if (part.collapsed) {
                    // The part size is fixed to the header size
                    var fixedSize = this.options.headerSize + "px";
                    style.minHeight = fixedSize;
                    style.maxHeight = fixedSize;
                }
                else {
                    var minSize = this.options.headerSize + part.minSize + "px";
                    style.minHeight = minSize;
                    // eslint-disable-next-line no-null/no-null
                    style.maxHeight = null;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        _super.prototype.onFitRequest.call(this, msg);
    };
    /**
     * Sinusoidal tween function for smooth animation.
     */
    ViewContainerLayout.prototype.tween = function (t) {
        return 0.5 * (1 - Math.cos(Math.PI * t));
    };
    ViewContainerLayout.prototype.setHandlePosition = function (index, position) {
        var options = {
            referenceWidget: this.widgets[index],
            duration: 0
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.splitPositionHandler.setSplitHandlePosition(this.parent, index, position, options);
    };
    return ViewContainerLayout;
}(widgets_1.SplitLayout));
exports.ViewContainerLayout = ViewContainerLayout;
//# sourceMappingURL=view-container.js.map
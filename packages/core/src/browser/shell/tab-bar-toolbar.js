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
var debounce = require("lodash.debounce");
var React = require("react");
var inversify_1 = require("inversify");
var widgets_1 = require("../widgets");
var label_parser_1 = require("../label-parser");
var contribution_provider_1 = require("../../common/contribution-provider");
var command_1 = require("../../common/command");
var disposable_1 = require("../../common/disposable");
var context_key_service_1 = require("../context-key-service");
var event_1 = require("../../common/event");
var context_menu_renderer_1 = require("../context-menu-renderer");
var menu_1 = require("../../common/menu");
/**
 * Factory for instantiating tab-bar toolbars.
 */
exports.TabBarToolbarFactory = Symbol('TabBarToolbarFactory');
/**
 * Tab-bar toolbar widget representing the active [tab-bar toolbar items](TabBarToolbarItem).
 */
var TabBarToolbar = /** @class */ (function (_super) {
    __extends(TabBarToolbar, _super);
    function TabBarToolbar() {
        var _this = _super.call(this) || this;
        _this.inline = new Map();
        _this.more = new Map();
        _this.toDisposeOnSetCurrent = new disposable_1.DisposableCollection();
        _this.showMoreContextMenu = function (event) {
            var e_1, _a;
            event.stopPropagation();
            event.preventDefault();
            var menuPath = ['TAB_BAR_TOOLBAR_CONTEXT_MENU'];
            var toDisposeOnHide = new disposable_1.DisposableCollection();
            try {
                for (var _b = __values(_this.more), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), item = _d[1];
                    toDisposeOnHide.push(_this.menus.registerMenuAction(__spread(menuPath, [item.group]), {
                        label: item.tooltip,
                        commandId: item.id,
                        when: item.when
                    }));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.contextMenuRenderer.render({
                menuPath: menuPath,
                args: [_this.current],
                anchor: event.nativeEvent,
                onHide: function () { return toDisposeOnHide.dispose(); }
            });
        };
        _this.executeCommand = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var item = _this.inline.get(e.currentTarget.id);
            if (TabBarToolbarItem.is(item)) {
                _this.commands.executeCommand(item.command, _this.current);
            }
        };
        _this.onMouseDownEvent = function (e) {
            if (e.button === 0) {
                e.currentTarget.classList.add('active');
            }
        };
        _this.onMouseUpEvent = function (e) {
            e.currentTarget.classList.remove('active');
        };
        _this.addClass(TabBarToolbar_1.Styles.TAB_BAR_TOOLBAR);
        _this.hide();
        return _this;
    }
    TabBarToolbar_1 = TabBarToolbar;
    TabBarToolbar.prototype.updateItems = function (items, current) {
        var e_2, _a;
        var _this = this;
        this.inline.clear();
        this.more.clear();
        try {
            for (var _b = __values(items.sort(TabBarToolbarItem.PRIORITY_COMPARATOR).reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if ('render' in item || item.group === undefined || item.group === 'navigation') {
                    this.inline.set(item.id, item);
                }
                else {
                    this.more.set(item.id, item);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.setCurrent(current);
        if (!items.length) {
            this.hide();
        }
        this.onRender.push(disposable_1.Disposable.create(function () {
            if (items.length) {
                _this.show();
            }
        }));
        this.update();
    };
    TabBarToolbar.prototype.setCurrent = function (current) {
        var _this = this;
        this.toDisposeOnSetCurrent.dispose();
        this.toDispose.push(this.toDisposeOnSetCurrent);
        this.current = current;
        if (current) {
            var resetCurrent_1 = function () {
                _this.setCurrent(undefined);
                _this.update();
            };
            current.disposed.connect(resetCurrent_1);
            this.toDisposeOnSetCurrent.push(disposable_1.Disposable.create(function () {
                return current.disposed.disconnect(resetCurrent_1);
            }));
        }
    };
    TabBarToolbar.prototype.render = function () {
        var _this = this;
        return React.createElement(React.Fragment, null,
            this.renderMore(),
            __spread(this.inline.values()).map(function (item) { return TabBarToolbarItem.is(item) ? _this.renderItem(item) : item.render(_this.current); }));
    };
    TabBarToolbar.prototype.renderItem = function (item) {
        var e_3, _a;
        var innerText = '';
        var classNames = [];
        if (item.text) {
            try {
                for (var _b = __values(this.labelParser.parse(item.text)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var labelPart = _c.value;
                    if (typeof labelPart !== 'string' && label_parser_1.LabelIcon.is(labelPart)) {
                        var className = "fa fa-" + labelPart.name + (labelPart.animation ? ' fa-' + labelPart.animation : '');
                        classNames.push.apply(classNames, __spread(className.split(' ')));
                    }
                    else {
                        innerText = labelPart;
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
        }
        var command = this.commands.getCommand(item.command);
        var iconClass = (typeof item.icon === 'function' && item.icon()) || item.icon || (command && command.iconClass);
        if (iconClass) {
            classNames.push(iconClass);
        }
        var tooltip = item.tooltip || (command && command.label);
        return React.createElement("div", { key: item.id, className: "" + TabBarToolbar_1.Styles.TAB_BAR_TOOLBAR_ITEM + (command && this.commandIsEnabled(command.id) ? ' enabled' : ''), onMouseDown: this.onMouseDownEvent, onMouseUp: this.onMouseUpEvent, onMouseOut: this.onMouseUpEvent },
            React.createElement("div", { id: item.id, className: classNames.join(' '), onClick: this.executeCommand, title: tooltip }, innerText));
    };
    TabBarToolbar.prototype.renderMore = function () {
        return !!this.more.size && React.createElement("div", { key: '__more__', className: TabBarToolbar_1.Styles.TAB_BAR_TOOLBAR_ITEM + ' enabled' },
            React.createElement("div", { id: '__more__', className: 'fa fa-ellipsis-h', onClick: this.showMoreContextMenu, title: 'More Actions...' }));
    };
    TabBarToolbar.prototype.shouldHandleMouseEvent = function (event) {
        return event.target instanceof Element && (!!this.inline.get(event.target.id) || event.target.id === '__more__');
    };
    TabBarToolbar.prototype.commandIsEnabled = function (command) {
        return this.commands.isEnabled(command, this.current);
    };
    var TabBarToolbar_1;
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], TabBarToolbar.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(label_parser_1.LabelParser),
        __metadata("design:type", label_parser_1.LabelParser)
    ], TabBarToolbar.prototype, "labelParser", void 0);
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], TabBarToolbar.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(context_menu_renderer_1.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], TabBarToolbar.prototype, "contextMenuRenderer", void 0);
    TabBarToolbar = TabBarToolbar_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], TabBarToolbar);
    return TabBarToolbar;
}(widgets_1.ReactWidget));
exports.TabBarToolbar = TabBarToolbar;
(function (TabBarToolbar) {
    var Styles;
    (function (Styles) {
        Styles.TAB_BAR_TOOLBAR = 'p-TabBar-toolbar';
        Styles.TAB_BAR_TOOLBAR_ITEM = 'item';
    })(Styles = TabBarToolbar.Styles || (TabBarToolbar.Styles = {}));
})(TabBarToolbar = exports.TabBarToolbar || (exports.TabBarToolbar = {}));
exports.TabBarToolbar = TabBarToolbar;
/**
 * Clients should implement this interface if they want to contribute to the tab-bar toolbar.
 */
exports.TabBarToolbarContribution = Symbol('TabBarToolbarContribution');
var TabBarToolbarItem;
(function (TabBarToolbarItem) {
    /**
     * Compares the items by `priority` in ascending. Undefined priorities will be treated as `0`.
     */
    TabBarToolbarItem.PRIORITY_COMPARATOR = function (left, right) {
        // The navigation group is special as it will always be sorted to the top/beginning of a menu.
        var compareGroup = function (leftGroup, rightGroup) {
            if (leftGroup === void 0) { leftGroup = 'navigation'; }
            if (rightGroup === void 0) { rightGroup = 'navigation'; }
            if (leftGroup === 'navigation') {
                return rightGroup === 'navigation' ? 0 : -1;
            }
            if (rightGroup === 'navigation') {
                return leftGroup === 'navigation' ? 0 : 1;
            }
            return leftGroup.localeCompare(rightGroup);
        };
        var result = compareGroup(left.group, right.group);
        if (result !== 0) {
            return result;
        }
        return (left.priority || 0) - (right.priority || 0);
    };
    function is(arg) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return !!arg && 'command' in arg && typeof arg.command === 'string';
    }
    TabBarToolbarItem.is = is;
})(TabBarToolbarItem = exports.TabBarToolbarItem || (exports.TabBarToolbarItem = {}));
/**
 * Main, shared registry for tab-bar toolbar items.
 */
var TabBarToolbarRegistry = /** @class */ (function () {
    function TabBarToolbarRegistry() {
        var _this = this;
        this.items = new Map();
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        // debounce in order to avoid to fire more than once in the same tick
        this.fireOnDidChange = debounce(function () { return _this.onDidChangeEmitter.fire(undefined); }, 0);
    }
    TabBarToolbarRegistry.prototype.onStart = function () {
        var e_4, _a;
        var contributions = this.contributionProvider.getContributions();
        try {
            for (var contributions_1 = __values(contributions), contributions_1_1 = contributions_1.next(); !contributions_1_1.done; contributions_1_1 = contributions_1.next()) {
                var contribution = contributions_1_1.value;
                contribution.registerToolbarItems(this);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (contributions_1_1 && !contributions_1_1.done && (_a = contributions_1.return)) _a.call(contributions_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    /**
     * Registers the given item. Throws an error, if the corresponding command cannot be found or an item has been already registered for the desired command.
     *
     * @param item the item to register.
     */
    TabBarToolbarRegistry.prototype.registerItem = function (item) {
        var _this = this;
        var id = item.id;
        if (this.items.has(id)) {
            throw new Error("A toolbar item is already registered with the '" + id + "' ID.");
        }
        this.items.set(id, item);
        this.fireOnDidChange();
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { return _this.fireOnDidChange(); }), disposable_1.Disposable.create(function () { return _this.items.delete(id); }));
        if (item.onDidChange) {
            toDispose.push(item.onDidChange(function () { return _this.fireOnDidChange(); }));
        }
        return toDispose;
    };
    /**
     * Returns an array of tab-bar toolbar items which are visible when the `widget` argument is the current one.
     *
     * By default returns with all items where the command is enabled and `item.isVisible` is `true`.
     */
    TabBarToolbarRegistry.prototype.visibleItems = function (widget) {
        var e_5, _a;
        var result = [];
        try {
            for (var _b = __values(this.items.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                var visible = TabBarToolbarItem.is(item)
                    ? this.commandRegistry.isVisible(item.command, widget)
                    : (!item.isVisible || item.isVisible(widget));
                if (visible && (!item.when || this.contextKeyService.match(item.when, widget.node))) {
                    result.push(item);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return result;
    };
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], TabBarToolbarRegistry.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], TabBarToolbarRegistry.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider),
        inversify_1.named(exports.TabBarToolbarContribution),
        __metadata("design:type", Object)
    ], TabBarToolbarRegistry.prototype, "contributionProvider", void 0);
    TabBarToolbarRegistry = __decorate([
        inversify_1.injectable()
    ], TabBarToolbarRegistry);
    return TabBarToolbarRegistry;
}());
exports.TabBarToolbarRegistry = TabBarToolbarRegistry;
//# sourceMappingURL=tab-bar-toolbar.js.map
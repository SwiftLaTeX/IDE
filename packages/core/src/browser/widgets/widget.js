"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var widgets_1 = require("@phosphor/widgets");
var common_1 = require("../../common");
var keys_1 = require("../keyboard/keys");
var perfect_scrollbar_1 = require("perfect-scrollbar");
inversify_1.decorate(inversify_1.injectable(), widgets_1.Widget);
inversify_1.decorate(inversify_1.unmanaged(), widgets_1.Widget, 0);
__export(require("@phosphor/widgets"));
__export(require("@phosphor/messaging"));
exports.DISABLED_CLASS = 'theia-mod-disabled';
exports.EXPANSION_TOGGLE_CLASS = 'theia-ExpansionToggle';
exports.COLLAPSED_CLASS = 'theia-mod-collapsed';
exports.SELECTED_CLASS = 'theia-mod-selected';
exports.FOCUS_CLASS = 'theia-mod-focus';
var BaseWidget = /** @class */ (function (_super) {
    __extends(BaseWidget, _super);
    function BaseWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onScrollYReachEndEmitter = new common_1.Emitter();
        _this.onScrollYReachEnd = _this.onScrollYReachEndEmitter.event;
        _this.onScrollUpEmitter = new common_1.Emitter();
        _this.onScrollUp = _this.onScrollUpEmitter.event;
        _this.onDidChangeVisibilityEmitter = new common_1.Emitter();
        _this.onDidChangeVisibility = _this.onDidChangeVisibilityEmitter.event;
        _this.toDispose = new common_1.DisposableCollection(_this.onScrollYReachEndEmitter, _this.onScrollUpEmitter, _this.onDidChangeVisibilityEmitter);
        _this.toDisposeOnDetach = new common_1.DisposableCollection();
        return _this;
    }
    BaseWidget.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        this.toDispose.dispose();
    };
    BaseWidget.prototype.onCloseRequest = function (msg) {
        _super.prototype.onCloseRequest.call(this, msg);
        this.dispose();
    };
    BaseWidget.prototype.onBeforeAttach = function (msg) {
        if (this.title.iconClass === '') {
            this.title.iconClass = 'no-icon';
        }
        _super.prototype.onBeforeAttach.call(this, msg);
    };
    BaseWidget.prototype.onAfterDetach = function (msg) {
        if (this.title.iconClass === 'no-icon') {
            this.title.iconClass = '';
        }
        _super.prototype.onAfterDetach.call(this, msg);
    };
    BaseWidget.prototype.onBeforeDetach = function (msg) {
        this.toDisposeOnDetach.dispose();
        _super.prototype.onBeforeDetach.call(this, msg);
    };
    BaseWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.scrollOptions) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var container;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getScrollContainer()];
                        case 1:
                            container = _a.sent();
                            container.style.overflow = 'hidden';
                            this.scrollBar = new perfect_scrollbar_1.default(container, this.scrollOptions);
                            this.disableScrollBarFocus(container);
                            this.toDisposeOnDetach.push(addEventListener(container, 'ps-y-reach-end', function () { _this.onScrollYReachEndEmitter.fire(undefined); }));
                            this.toDisposeOnDetach.push(addEventListener(container, 'ps-scroll-up', function () { _this.onScrollUpEmitter.fire(undefined); }));
                            this.toDisposeOnDetach.push(common_1.Disposable.create(function () {
                                if (_this.scrollBar) {
                                    _this.scrollBar.destroy();
                                    _this.scrollBar = undefined;
                                }
                                container.style.overflow = 'initial';
                            }));
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
    };
    BaseWidget.prototype.getScrollContainer = function () {
        return this.node;
    };
    BaseWidget.prototype.disableScrollBarFocus = function (scrollContainer) {
        var e_1, _a;
        try {
            for (var _b = __values([scrollContainer.getElementsByClassName('ps__thumb-x'), scrollContainer.getElementsByClassName('ps__thumb-y')]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var thumbs = _c.value;
                for (var i = 0; i < thumbs.length; i++) {
                    var element = thumbs.item(i);
                    if (element) {
                        element.removeAttribute('tabIndex');
                    }
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
    };
    BaseWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        if (this.scrollBar) {
            this.scrollBar.update();
        }
    };
    BaseWidget.prototype.addUpdateListener = function (element, type, useCapture) {
        var _this = this;
        this.addEventListener(element, type, function (e) {
            _this.update();
            e.preventDefault();
        }, useCapture);
    };
    BaseWidget.prototype.addEventListener = function (element, type, listener, useCapture) {
        this.toDisposeOnDetach.push(addEventListener(element, type, listener, useCapture));
    };
    BaseWidget.prototype.addKeyListener = function (element, keysOrKeyCodes, action) {
        var additionalEventTypes = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            additionalEventTypes[_i - 3] = arguments[_i];
        }
        this.toDisposeOnDetach.push(addKeyListener.apply(void 0, __spread([element, keysOrKeyCodes, action], additionalEventTypes)));
    };
    BaseWidget.prototype.addClipboardListener = function (element, type, listener) {
        this.toDisposeOnDetach.push(addClipboardListener(element, type, listener));
    };
    BaseWidget.prototype.setFlag = function (flag) {
        _super.prototype.setFlag.call(this, flag);
        if (flag === widgets_1.Widget.Flag.IsVisible) {
            this.onDidChangeVisibilityEmitter.fire(this.isVisible);
        }
    };
    BaseWidget.prototype.clearFlag = function (flag) {
        _super.prototype.clearFlag.call(this, flag);
        if (flag === widgets_1.Widget.Flag.IsVisible) {
            this.onDidChangeVisibilityEmitter.fire(this.isVisible);
        }
    };
    BaseWidget = __decorate([
        inversify_1.injectable()
    ], BaseWidget);
    return BaseWidget;
}(widgets_1.Widget));
exports.BaseWidget = BaseWidget;
function setEnabled(element, enabled) {
    element.classList.toggle(exports.DISABLED_CLASS, !enabled);
    element.tabIndex = enabled ? 0 : -1;
}
exports.setEnabled = setEnabled;
function createIconButton() {
    var _a;
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    var icon = document.createElement('i');
    (_a = icon.classList).add.apply(_a, __spread(classNames));
    var button = document.createElement('span');
    button.tabIndex = 0;
    button.appendChild(icon);
    return button;
}
exports.createIconButton = createIconButton;
var EventListenerObject;
(function (EventListenerObject) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(listener) {
        return !!listener && 'handleEvent' in listener;
    }
    EventListenerObject.is = is;
})(EventListenerObject = exports.EventListenerObject || (exports.EventListenerObject = {}));
function addEventListener(element, type, listener, useCapture) {
    element.addEventListener(type, listener, useCapture);
    return common_1.Disposable.create(function () {
        return element.removeEventListener(type, listener);
    });
}
exports.addEventListener = addEventListener;
function addKeyListener(element, keysOrKeyCodes, action) {
    var e_2, _a;
    var additionalEventTypes = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        additionalEventTypes[_i - 3] = arguments[_i];
    }
    var toDispose = new common_1.DisposableCollection();
    var keyCodePredicate = (function () {
        if (typeof keysOrKeyCodes === 'function') {
            return keysOrKeyCodes;
        }
        else {
            return function (actual) { return keys_1.KeysOrKeyCodes.toKeyCodes(keysOrKeyCodes).some(function (k) { return k.equals(actual); }); };
        }
    })();
    toDispose.push(addEventListener(element, 'keydown', function (e) {
        var kc = keys_1.KeyCode.createKeyCode(e);
        if (keyCodePredicate(kc)) {
            var result = action(e);
            if (typeof result !== 'boolean' || result) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }));
    var _loop_1 = function (type) {
        toDispose.push(addEventListener(element, type, function (e) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var event = type['keydown'];
            var result = action(event);
            if (typeof result !== 'boolean' || result) {
                e.stopPropagation();
                e.preventDefault();
            }
        }));
    };
    try {
        for (var additionalEventTypes_1 = __values(additionalEventTypes), additionalEventTypes_1_1 = additionalEventTypes_1.next(); !additionalEventTypes_1_1.done; additionalEventTypes_1_1 = additionalEventTypes_1.next()) {
            var type = additionalEventTypes_1_1.value;
            _loop_1(type);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (additionalEventTypes_1_1 && !additionalEventTypes_1_1.done && (_a = additionalEventTypes_1.return)) _a.call(additionalEventTypes_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return toDispose;
}
exports.addKeyListener = addKeyListener;
function addClipboardListener(element, type, listener) {
    var documentListener = function (e) {
        var activeElement = document.activeElement;
        if (activeElement && element.contains(activeElement)) {
            if (EventListenerObject.is(listener)) {
                listener.handleEvent(e);
            }
            else {
                listener.bind(element)(e);
            }
        }
    };
    document.addEventListener(type, documentListener);
    return common_1.Disposable.create(function () {
        return document.removeEventListener(type, documentListener);
    });
}
exports.addClipboardListener = addClipboardListener;
function waitForClosed(widget) {
    return waitForVisible(widget, false);
}
exports.waitForClosed = waitForClosed;
function waitForRevealed(widget) {
    return waitForVisible(widget, true);
}
exports.waitForRevealed = waitForRevealed;
function waitForVisible(widget, visible) {
    if (widget.isAttached === visible && (widget.isVisible === visible || (widget.node.style.visibility !== 'hidden') === visible)) {
        return new Promise(function (resolve) { return window.requestAnimationFrame(function () { return resolve(); }); });
    }
    return new Promise(function (resolve) {
        var waitFor = function () { return window.requestAnimationFrame(function () {
            if (widget.isAttached === visible && (widget.isVisible === visible || (widget.node.style.visibility !== 'hidden') === visible)) {
                window.requestAnimationFrame(function () { return resolve(); });
            }
            else {
                waitFor();
            }
        }); };
        waitFor();
    });
}
//# sourceMappingURL=widget.js.map
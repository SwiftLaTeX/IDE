"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var event_1 = require("../../common/event");
var inversify_1 = require("inversify");
var quick_open_model_1 = require("../../common/quick-open-model");
var QuickTitleBar = /** @class */ (function () {
    function QuickTitleBar() {
        this.tabIndex = 2; // Keep track of the tabIndex for the buttons
        this.titleElement = document.createElement('div');
        this.titleElement.className = QuickTitleBar_1.Styles.QUICK_TITLE_HEADER;
        this.onDidTriggerButtonEmitter = new event_1.Emitter();
    }
    QuickTitleBar_1 = QuickTitleBar;
    Object.defineProperty(QuickTitleBar.prototype, "onDidTriggerButton", {
        get: function () {
            return this.onDidTriggerButtonEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickTitleBar.prototype, "isAttached", {
        get: function () {
            return this._isAttached;
        },
        set: function (isAttached) {
            this._isAttached = isAttached;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickTitleBar.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
            this.updateInnerTitleText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickTitleBar.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (step) {
            this._step = step;
            this.updateInnerTitleText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickTitleBar.prototype, "totalSteps", {
        get: function () {
            return this._totalSteps;
        },
        set: function (totalSteps) {
            this._totalSteps = totalSteps;
            this.updateInnerTitleText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickTitleBar.prototype, "buttons", {
        get: function () {
            return this._buttons;
        },
        set: function (buttons) {
            if (buttons === undefined) {
                this._buttons = [];
                return;
            }
            this._buttons = buttons;
        },
        enumerable: true,
        configurable: true
    });
    QuickTitleBar.prototype.updateInnerTitleText = function () {
        var innerTitle = '';
        if (this.title) {
            innerTitle = this.title + ' ';
        }
        if (this.step && this.totalSteps) {
            innerTitle += "(" + this.step + "/" + this.totalSteps + ")";
        }
        else if (this.step) {
            innerTitle += this.step;
        }
        this.titleElement.innerText = innerTitle;
    };
    // Left buttons are for the buttons dervied from QuickInputButtons
    QuickTitleBar.prototype.getLeftButtons = function () {
        if (this._buttons === undefined || this._buttons.length === 0) {
            return [];
        }
        return this._buttons.filter(function (btn) { return btn.side === quick_open_model_1.QuickTitleButtonSide.LEFT; });
    };
    QuickTitleBar.prototype.getRightButtons = function () {
        if (this._buttons === undefined || this._buttons.length === 0) {
            return [];
        }
        return this._buttons.filter(function (btn) { return btn.side === quick_open_model_1.QuickTitleButtonSide.RIGHT; });
    };
    QuickTitleBar.prototype.createButtonElements = function (buttons) {
        var _this = this;
        return buttons.map(function (btn) {
            var _a;
            var spanElement = document.createElement('span');
            spanElement.className = QuickTitleBar_1.Styles.QUICK_TITLE_BUTTON;
            spanElement.tabIndex = 0;
            if (btn.iconClass) {
                (_a = spanElement.classList).add.apply(_a, __spread(btn.iconClass.split(' ')));
            }
            if (btn.icon !== '') {
                spanElement.style.backgroundImage = "url('" + btn.icon + "')";
            }
            spanElement.classList.add('icon');
            spanElement.tabIndex = _this.tabIndex;
            spanElement.title = btn.tooltip ? btn.tooltip : '';
            spanElement.onclick = function () {
                _this.onDidTriggerButtonEmitter.fire(btn);
            };
            spanElement.onkeyup = function (event) {
                if (event.code === 'Enter') {
                    spanElement.click();
                }
            };
            _this.tabIndex += 1;
            return spanElement;
        });
    };
    QuickTitleBar.prototype.createTitleBarDiv = function () {
        var div = document.createElement('div');
        div.className = QuickTitleBar_1.Styles.QUICK_TITLE_CONTAINER;
        div.onclick = function (event) {
            event.stopPropagation();
            event.preventDefault();
        };
        return div;
    };
    QuickTitleBar.prototype.createLeftButtonDiv = function () {
        var leftButtonDiv = document.createElement('div'); // Holds all the buttons that get added to the left
        leftButtonDiv.className = QuickTitleBar_1.Styles.QUICK_TITLE_LEFT_BAR;
        this.createButtonElements(this.getLeftButtons()).forEach(function (btn) { return leftButtonDiv.appendChild(btn); });
        return leftButtonDiv;
    };
    QuickTitleBar.prototype.createRightButtonDiv = function () {
        var rightButtonDiv = document.createElement('div');
        rightButtonDiv.className = QuickTitleBar_1.Styles.QUICK_TITLE_RIGHT_BAR;
        this.createButtonElements(this.getRightButtons()).forEach(function (btn) { return rightButtonDiv.appendChild(btn); });
        return rightButtonDiv;
    };
    // eslint-disable-next-line max-len
    QuickTitleBar.prototype.attachTitleBar = function (widgetNode, title, step, totalSteps, buttons) {
        var div = this.createTitleBarDiv();
        this.updateInnerTitleText();
        this.title = title;
        this.step = step;
        this.totalSteps = totalSteps;
        this.buttons = buttons;
        div.appendChild(this.createLeftButtonDiv());
        div.appendChild(this.titleElement);
        div.appendChild(this.createRightButtonDiv());
        if (widgetNode.contains(this.titleBarContainer)) {
            widgetNode.removeChild(this.titleBarContainer);
        }
        widgetNode.prepend(div);
        this.titleBarContainer = div;
        this.attachedNode = widgetNode;
        this.isAttached = true;
    };
    QuickTitleBar.prototype.hide = function () {
        this.title = undefined;
        this.buttons = undefined;
        this.step = undefined;
        this.totalSteps = undefined;
        this.isAttached = false;
        if (this.attachedNode && this.attachedNode.contains(this.titleBarContainer)) {
            this.attachedNode.removeChild(this.titleBarContainer);
        }
        this.attachedNode = undefined;
    };
    QuickTitleBar.prototype.shouldShowTitleBar = function (title, step) {
        return ((title !== undefined) || (step !== undefined));
    };
    var QuickTitleBar_1;
    QuickTitleBar = QuickTitleBar_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], QuickTitleBar);
    return QuickTitleBar;
}());
exports.QuickTitleBar = QuickTitleBar;
(function (QuickTitleBar) {
    var Styles;
    (function (Styles) {
        Styles.QUICK_TITLE_CONTAINER = 'theia-quick-title-container';
        Styles.QUICK_TITLE_LEFT_BAR = 'theia-quick-title-left-bar';
        Styles.QUICK_TITLE_RIGHT_BAR = 'theia-quick-title-right-bar';
        Styles.QUICK_TITLE_HEADER = 'theia-quick-title-header';
        Styles.QUICK_TITLE_BUTTON = 'theia-quick-title-button';
    })(Styles = QuickTitleBar.Styles || (QuickTitleBar.Styles = {}));
})(QuickTitleBar = exports.QuickTitleBar || (exports.QuickTitleBar = {}));
exports.QuickTitleBar = QuickTitleBar;
//# sourceMappingURL=quick-title-bar.js.map
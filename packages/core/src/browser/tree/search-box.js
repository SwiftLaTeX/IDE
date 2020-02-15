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
var search_box_debounce_1 = require("../tree/search-box-debounce");
var widget_1 = require("../widgets/widget");
var event_1 = require("../../common/event");
var keys_1 = require("../keyboard/keys");
var SearchBoxProps;
(function (SearchBoxProps) {
    /**
     * The default search box widget option.
     */
    SearchBoxProps.DEFAULT = search_box_debounce_1.SearchBoxDebounceOptions.DEFAULT;
})(SearchBoxProps = exports.SearchBoxProps || (exports.SearchBoxProps = {}));
/**
 * The search box widget.
 */
var SearchBox = /** @class */ (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox(props, debounce) {
        var _this = _super.call(this) || this;
        _this.props = props;
        _this.debounce = debounce;
        _this.nextEmitter = new event_1.Emitter();
        _this.previousEmitter = new event_1.Emitter();
        _this.closeEmitter = new event_1.Emitter();
        _this.textChangeEmitter = new event_1.Emitter();
        _this.toDispose.pushAll([
            _this.nextEmitter,
            _this.previousEmitter,
            _this.closeEmitter,
            _this.textChangeEmitter,
            _this.debounce,
            _this.debounce.onChanged(function (data) { return _this.fireTextChange(data); })
        ]);
        _this.hide();
        _this.update();
        var input = _this.createContent().input;
        _this.input = input;
        return _this;
    }
    Object.defineProperty(SearchBox.prototype, "onPrevious", {
        get: function () {
            return this.previousEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBox.prototype, "onNext", {
        get: function () {
            return this.nextEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBox.prototype, "onClose", {
        get: function () {
            return this.closeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBox.prototype, "onTextChange", {
        get: function () {
            return this.textChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBox.prototype, "keyCodePredicate", {
        get: function () {
            return this.canHandle.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    SearchBox.prototype.firePrevious = function () {
        this.previousEmitter.fire(undefined);
    };
    SearchBox.prototype.fireNext = function () {
        this.nextEmitter.fire(undefined);
    };
    SearchBox.prototype.fireClose = function () {
        this.closeEmitter.fire(undefined);
    };
    SearchBox.prototype.fireTextChange = function (input) {
        this.textChangeEmitter.fire(input);
    };
    SearchBox.prototype.handle = function (event) {
        event.preventDefault();
        var keyCode = keys_1.KeyCode.createKeyCode(event);
        if (this.canHandle(keyCode)) {
            if (keys_1.Key.equals(keys_1.Key.ESCAPE, keyCode)) {
                this.hide();
            }
            else {
                this.show();
                this.handleKey(keyCode);
            }
        }
    };
    SearchBox.prototype.handleArrowUp = function () {
        this.firePrevious();
    };
    SearchBox.prototype.handleArrowDown = function () {
        this.fireNext();
    };
    SearchBox.prototype.onBeforeHide = function () {
        this.debounce.append(undefined);
        this.fireClose();
    };
    SearchBox.prototype.handleKey = function (keyCode) {
        var character = keys_1.Key.equals(keys_1.Key.BACKSPACE, keyCode) ? '\b' : keyCode.character;
        var data = this.debounce.append(character);
        if (data) {
            this.input.value = data;
            this.update();
        }
        else {
            this.hide();
        }
    };
    SearchBox.prototype.canHandle = function (keyCode) {
        if (keyCode === undefined) {
            return false;
        }
        var ctrl = keyCode.ctrl, alt = keyCode.alt, meta = keyCode.meta;
        if (ctrl || alt || meta) {
            return false;
        }
        if (keyCode.character || (this.isVisible && SearchBox.SPECIAL_KEYS.some(function (key) { return keys_1.Key.equals(key, keyCode); }))) {
            return true;
        }
        return false;
    };
    SearchBox.prototype.createContent = function () {
        var _this = this;
        this.addClass(SearchBox.Styles.SEARCH_BOX);
        var input = document.createElement('input');
        input.readOnly = false;
        input.type = 'text';
        input.onkeydown = function (ev) { return _this.handle.bind(_this)(ev); };
        input.classList.add('theia-input', SearchBox.Styles.SEARCH_INPUT);
        this.node.appendChild(input);
        var previous;
        var next;
        var close;
        if (!!this.props.showButtons) {
            previous = document.createElement('div');
            previous.classList.add(SearchBox.Styles.BUTTON, SearchBox.Styles.BUTTON_PREVIOUS);
            previous.title = 'Previous (Up)';
            this.node.appendChild(previous);
            previous.onclick = function () { return _this.firePrevious.bind(_this)(); };
            next = document.createElement('div');
            next.classList.add(SearchBox.Styles.BUTTON, SearchBox.Styles.BUTTON_NEXT);
            next.title = 'Next (Down)';
            this.node.appendChild(next);
            next.onclick = function () { return _this.fireNext.bind(_this)(); };
            close = document.createElement('div');
            close.classList.add(SearchBox.Styles.BUTTON, SearchBox.Styles.BUTTON_CLOSE);
            close.title = 'Close (Escape)';
            this.node.appendChild(close);
            close.onclick = function () { return _this.hide.bind(_this)(); };
        }
        return {
            container: this.node,
            input: input,
            previous: previous,
            next: next,
            close: close
        };
    };
    SearchBox.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.addEventListener(this.input, 'selectstart', function () { return false; });
    };
    SearchBox.SPECIAL_KEYS = [
        keys_1.Key.ESCAPE,
        keys_1.Key.BACKSPACE
    ];
    return SearchBox;
}(widget_1.BaseWidget));
exports.SearchBox = SearchBox;
(function (SearchBox) {
    /**
     * CSS classes for the search box widget.
     */
    var Styles;
    (function (Styles) {
        Styles.SEARCH_BOX = 'theia-search-box';
        Styles.SEARCH_INPUT = 'theia-search-input';
        Styles.BUTTON = 'theia-search-button';
        Styles.BUTTON_PREVIOUS = 'theia-search-button-previous';
        Styles.BUTTON_NEXT = 'theia-search-button-next';
        Styles.BUTTON_CLOSE = 'theia-search-button-close';
        Styles.NON_SELECTABLE = 'theia-non-selectable';
    })(Styles = SearchBox.Styles || (SearchBox.Styles = {}));
})(SearchBox = exports.SearchBox || (exports.SearchBox = {}));
exports.SearchBox = SearchBox;
/**
 * Search box factory.
 */
exports.SearchBoxFactory = Symbol('SearchBoxFactory');
//# sourceMappingURL=search-box.js.map
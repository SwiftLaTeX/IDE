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
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("../../common/event");
var disposable_1 = require("../../common/disposable");
var debounce = require("lodash.debounce");
var SearchBoxDebounceOptions;
(function (SearchBoxDebounceOptions) {
    /**
     * The default debounce option.
     */
    SearchBoxDebounceOptions.DEFAULT = {
        delay: 200
    };
})(SearchBoxDebounceOptions = exports.SearchBoxDebounceOptions || (exports.SearchBoxDebounceOptions = {}));
/**
 * It notifies the clients, once if the underlying search term has changed after a given amount of delay.
 */
var SearchBoxDebounce = /** @class */ (function () {
    function SearchBoxDebounce(options) {
        var _this = this;
        this.options = options;
        this.disposables = new disposable_1.DisposableCollection();
        this.emitter = new event_1.Emitter();
        this.disposables.push(this.emitter);
        this.handler = debounce(function () { return _this.fireChanged(_this.state); }, this.options.delay).bind(this);
    }
    SearchBoxDebounce.prototype.append = function (input) {
        if (input === undefined) {
            this.reset();
            return undefined;
        }
        if (this.state === undefined) {
            this.state = input;
        }
        else {
            if (input === '\b') {
                this.state = this.state.length === 1 ? '' : this.state.substr(0, this.state.length - 1);
            }
            else {
                this.state += input;
            }
        }
        this.handler();
        return this.state;
    };
    Object.defineProperty(SearchBoxDebounce.prototype, "onChanged", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    SearchBoxDebounce.prototype.dispose = function () {
        this.disposables.dispose();
    };
    SearchBoxDebounce.prototype.fireChanged = function (value) {
        this.emitter.fire(value);
    };
    SearchBoxDebounce.prototype.reset = function () {
        this.state = undefined;
        this.fireChanged(undefined);
    };
    return SearchBoxDebounce;
}());
exports.SearchBoxDebounce = SearchBoxDebounce;
//# sourceMappingURL=search-box-debounce.js.map
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var ConsoleHistory = /** @class */ (function () {
    function ConsoleHistory() {
        this.values = [];
        this.index = -1;
    }
    ConsoleHistory_1 = ConsoleHistory;
    ConsoleHistory.prototype.push = function (value) {
        this.delete(value);
        this.values.push(value);
        this.trim();
        this.index = this.values.length;
    };
    ConsoleHistory.prototype.delete = function (value) {
        var index = this.values.indexOf(value);
        if (index !== -1) {
            this.values.splice(index, 1);
        }
    };
    ConsoleHistory.prototype.trim = function () {
        var index = this.values.length - ConsoleHistory_1.limit;
        if (index > 0) {
            this.values.slice(index);
        }
    };
    Object.defineProperty(ConsoleHistory.prototype, "current", {
        get: function () {
            return this.values[this.index];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsoleHistory.prototype, "previous", {
        get: function () {
            this.index = Math.max(this.index - 1, -1);
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsoleHistory.prototype, "next", {
        get: function () {
            this.index = Math.min(this.index + 1, this.values.length);
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    ConsoleHistory.prototype.store = function () {
        var _a = this, values = _a.values, index = _a.index;
        return { values: values, index: index };
    };
    ConsoleHistory.prototype.restore = function (object) {
        this.values = object.values;
        this.index = object.index;
    };
    var ConsoleHistory_1;
    ConsoleHistory.limit = 50;
    ConsoleHistory = ConsoleHistory_1 = __decorate([
        inversify_1.injectable()
    ], ConsoleHistory);
    return ConsoleHistory;
}());
exports.ConsoleHistory = ConsoleHistory;
//# sourceMappingURL=console-history.js.map
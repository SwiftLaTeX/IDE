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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var QuickOpenBaseAction = /** @class */ (function () {
    function QuickOpenBaseAction(options) {
        this.options = options;
    }
    Object.defineProperty(QuickOpenBaseAction.prototype, "id", {
        get: function () {
            return this.options.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickOpenBaseAction.prototype, "label", {
        get: function () {
            return this.options.label || '';
        },
        set: function (value) {
            this.options.label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickOpenBaseAction.prototype, "tooltip", {
        get: function () {
            return this.options.tooltip || '';
        },
        set: function (value) {
            this.options.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickOpenBaseAction.prototype, "class", {
        get: function () {
            return this.options.class || '';
        },
        set: function (value) {
            this.options.class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickOpenBaseAction.prototype, "enabled", {
        get: function () {
            return this.options.enabled || true;
        },
        set: function (value) {
            this.options.enabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickOpenBaseAction.prototype, "checked", {
        get: function () {
            return this.options.checked || false;
        },
        set: function (value) {
            this.options.checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickOpenBaseAction.prototype, "radio", {
        get: function () {
            return this.options.radio || false;
        },
        set: function (value) {
            this.options.radio = value;
        },
        enumerable: true,
        configurable: true
    });
    QuickOpenBaseAction.prototype.dispose = function () { };
    QuickOpenBaseAction = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Object])
    ], QuickOpenBaseAction);
    return QuickOpenBaseAction;
}());
exports.QuickOpenBaseAction = QuickOpenBaseAction;
//# sourceMappingURL=quick-open-action-provider.js.map
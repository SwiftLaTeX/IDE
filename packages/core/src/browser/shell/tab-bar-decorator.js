"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var debounce = require("lodash.debounce");
var inversify_1 = require("inversify");
var common_1 = require("../../common");
exports.TabBarDecorator = Symbol('TabBarDecorator');
var TabBarDecoratorService = /** @class */ (function () {
    function TabBarDecoratorService() {
        var _this = this;
        this.onDidChangeDecorationsEmitter = new common_1.Emitter();
        this.onDidChangeDecorations = this.onDidChangeDecorationsEmitter.event;
        this.toDispose = new common_1.DisposableCollection();
        this.fireDidChangeDecorations = debounce(function () { return _this.onDidChangeDecorationsEmitter.fire(undefined); }, 150);
    }
    TabBarDecoratorService.prototype.init = function () {
        var _this = this;
        var decorators = this.contributions.getContributions();
        this.toDispose.pushAll(decorators.map(function (decorator) {
            return decorator.onDidChangeDecorations(_this.fireDidChangeDecorations);
        }));
    };
    TabBarDecoratorService.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /**
     * Assign tabs the decorators provided by all the contributions.
     * @param {Title<Widget>} title the title
     * @returns an array of its decoration data.
     */
    TabBarDecoratorService.prototype.getDecorations = function (title) {
        var e_1, _a;
        var decorators = this.contributions.getContributions();
        var all = [];
        try {
            for (var decorators_1 = __values(decorators), decorators_1_1 = decorators_1.next(); !decorators_1_1.done; decorators_1_1 = decorators_1.next()) {
                var decorator = decorators_1_1.value;
                var decorations = decorator.decorate(title);
                all = all.concat(decorations);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (decorators_1_1 && !decorators_1_1.done && (_a = decorators_1.return)) _a.call(decorators_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return all;
    };
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(exports.TabBarDecorator),
        __metadata("design:type", Object)
    ], TabBarDecoratorService.prototype, "contributions", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabBarDecoratorService.prototype, "init", null);
    TabBarDecoratorService = __decorate([
        inversify_1.injectable()
    ], TabBarDecoratorService);
    return TabBarDecoratorService;
}());
exports.TabBarDecoratorService = TabBarDecoratorService;
//# sourceMappingURL=tab-bar-decorator.js.map
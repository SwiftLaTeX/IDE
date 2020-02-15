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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var debug_view_model_1 = require("./debug-view-model");
var DebugThreadsSource = /** @class */ (function (_super) {
    __extends(DebugThreadsSource, _super);
    function DebugThreadsSource() {
        return _super.call(this, {
            placeholder: 'Not running'
        }) || this;
    }
    DebugThreadsSource.prototype.init = function () {
        var _this = this;
        this.fireDidChange();
        this.toDispose.push(this.model.onDidChange(function () { return _this.fireDidChange(); }));
    };
    Object.defineProperty(DebugThreadsSource.prototype, "multiSession", {
        get: function () {
            return this.model.sessionCount > 1;
        },
        enumerable: true,
        configurable: true
    });
    DebugThreadsSource.prototype.getElements = function () {
        if (this.model.sessionCount === 1 && this.model.session && this.model.session.threadCount) {
            return this.model.session.threads;
        }
        return this.model.sessions;
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugThreadsSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugThreadsSource.prototype, "init", null);
    DebugThreadsSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugThreadsSource);
    return DebugThreadsSource;
}(source_tree_1.TreeSource));
exports.DebugThreadsSource = DebugThreadsSource;
//# sourceMappingURL=debug-threads-source.js.map
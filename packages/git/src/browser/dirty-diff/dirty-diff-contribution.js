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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var dirty_diff_decorator_1 = require("@theia/scm/lib/browser/dirty-diff/dirty-diff-decorator");
var dirty_diff_manager_1 = require("./dirty-diff-manager");
var DirtyDiffContribution = /** @class */ (function () {
    function DirtyDiffContribution(dirtyDiffManager, dirtyDiffDecorator) {
        this.dirtyDiffManager = dirtyDiffManager;
        this.dirtyDiffDecorator = dirtyDiffDecorator;
    }
    DirtyDiffContribution.prototype.onStart = function (app) {
        var _this = this;
        this.dirtyDiffManager.onDirtyDiffUpdate(function (update) { return _this.dirtyDiffDecorator.applyDecorations(update); });
    };
    DirtyDiffContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(dirty_diff_manager_1.DirtyDiffManager)),
        __param(1, inversify_1.inject(dirty_diff_decorator_1.DirtyDiffDecorator)),
        __metadata("design:paramtypes", [dirty_diff_manager_1.DirtyDiffManager,
            dirty_diff_decorator_1.DirtyDiffDecorator])
    ], DirtyDiffContribution);
    return DirtyDiffContribution;
}());
exports.DirtyDiffContribution = DirtyDiffContribution;
//# sourceMappingURL=dirty-diff-contribution.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/languages/lib/browser");
var merge_conflicts_code_lense_provider_1 = require("./merge-conflicts-code-lense-provider");
var merge_conflict_resolver_1 = require("./merge-conflict-resolver");
var merge_conflict_1 = require("./merge-conflict");
var merge_conflicts_provider_1 = require("./merge-conflicts-provider");
var merge_conflicts_decorations_1 = require("./merge-conflicts-decorations");
var MergeConflictsFrontendContribution = /** @class */ (function () {
    function MergeConflictsFrontendContribution() {
    }
    MergeConflictsFrontendContribution.prototype.onStart = function (app) {
        var _this = this;
        if (this.languages.registerCodeLensProvider) {
            this.languages.registerCodeLensProvider([{ pattern: '**/*' }], this.mergeConflictsCodeLensProvider);
        }
        this.mergeConflictsProvider.onDidUpdate(function (params) { return _this.decorator.decorate(params); });
    };
    MergeConflictsFrontendContribution.prototype.registerCommands = function (registry) {
        registry.registerCommand({ id: merge_conflict_1.MergeConflictsCommands.AcceptCurrent.id }, this.mergeConflictResolver.acceptCurrent);
        registry.registerCommand({ id: merge_conflict_1.MergeConflictsCommands.AcceptIncoming.id }, this.mergeConflictResolver.acceptIncoming);
        registry.registerCommand({ id: merge_conflict_1.MergeConflictsCommands.AcceptBoth.id }, this.mergeConflictResolver.acceptBoth);
    };
    __decorate([
        inversify_1.inject(browser_1.Languages),
        __metadata("design:type", Object)
    ], MergeConflictsFrontendContribution.prototype, "languages", void 0);
    __decorate([
        inversify_1.inject(merge_conflicts_code_lense_provider_1.MergeConflictsCodeLensProvider),
        __metadata("design:type", merge_conflicts_code_lense_provider_1.MergeConflictsCodeLensProvider)
    ], MergeConflictsFrontendContribution.prototype, "mergeConflictsCodeLensProvider", void 0);
    __decorate([
        inversify_1.inject(merge_conflict_resolver_1.MergeConflictResolver),
        __metadata("design:type", merge_conflict_resolver_1.MergeConflictResolver)
    ], MergeConflictsFrontendContribution.prototype, "mergeConflictResolver", void 0);
    __decorate([
        inversify_1.inject(merge_conflicts_decorations_1.MergeConflictsDecorations),
        __metadata("design:type", merge_conflicts_decorations_1.MergeConflictsDecorations)
    ], MergeConflictsFrontendContribution.prototype, "decorator", void 0);
    __decorate([
        inversify_1.inject(merge_conflicts_provider_1.MergeConflictsProvider),
        __metadata("design:type", merge_conflicts_provider_1.MergeConflictsProvider)
    ], MergeConflictsFrontendContribution.prototype, "mergeConflictsProvider", void 0);
    MergeConflictsFrontendContribution = __decorate([
        inversify_1.injectable()
    ], MergeConflictsFrontendContribution);
    return MergeConflictsFrontendContribution;
}());
exports.MergeConflictsFrontendContribution = MergeConflictsFrontendContribution;
//# sourceMappingURL=merge-conflicts-frontend-contribution.js.map
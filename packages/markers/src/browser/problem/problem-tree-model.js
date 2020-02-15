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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var problem_marker_1 = require("../../common/problem-marker");
var problem_manager_1 = require("./problem-manager");
var marker_tree_1 = require("../marker-tree");
var marker_tree_model_1 = require("../marker-tree-model");
var inversify_1 = require("inversify");
var ProblemTree = /** @class */ (function (_super) {
    __extends(ProblemTree, _super);
    function ProblemTree(problemManager, markerOptions) {
        var _this = _super.call(this, problemManager, markerOptions) || this;
        _this.problemManager = problemManager;
        _this.markerOptions = markerOptions;
        return _this;
    }
    ProblemTree = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(problem_manager_1.ProblemManager)),
        __param(1, inversify_1.inject(marker_tree_1.MarkerOptions)),
        __metadata("design:paramtypes", [problem_manager_1.ProblemManager, Object])
    ], ProblemTree);
    return ProblemTree;
}(marker_tree_1.MarkerTree));
exports.ProblemTree = ProblemTree;
var ProblemTreeModel = /** @class */ (function (_super) {
    __extends(ProblemTreeModel, _super);
    function ProblemTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProblemTreeModel.prototype.getOpenerOptionsByMarker = function (node) {
        if (problem_marker_1.ProblemMarker.is(node.marker)) {
            return {
                selection: node.marker.data.range
            };
        }
        return undefined;
    };
    ProblemTreeModel.prototype.removeNode = function (node) {
        if (marker_tree_1.MarkerInfoNode.is(node)) {
            this.problemManager.cleanAllMarkers(node.uri);
        }
        if (marker_tree_1.MarkerNode.is(node)) {
            var uri = node.uri;
            var owner = node.marker.owner;
            var diagnostics = this.problemManager.findMarkers({ uri: uri, owner: owner, dataFilter: function (data) { return node.marker.data !== data; } }).map(function (_a) {
                var data = _a.data;
                return data;
            });
            this.problemManager.setMarkers(uri, owner, diagnostics);
        }
    };
    __decorate([
        inversify_1.inject(problem_manager_1.ProblemManager),
        __metadata("design:type", problem_manager_1.ProblemManager)
    ], ProblemTreeModel.prototype, "problemManager", void 0);
    ProblemTreeModel = __decorate([
        inversify_1.injectable()
    ], ProblemTreeModel);
    return ProblemTreeModel;
}(marker_tree_model_1.MarkerTreeModel));
exports.ProblemTreeModel = ProblemTreeModel;
//# sourceMappingURL=problem-tree-model.js.map
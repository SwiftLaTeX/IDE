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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var marker_tree_1 = require("./marker-tree");
var browser_1 = require("@theia/core/lib/browser");
var MarkerTreeModel = /** @class */ (function (_super) {
    __extends(MarkerTreeModel, _super);
    function MarkerTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkerTreeModel.prototype.doOpenNode = function (node) {
        if (marker_tree_1.MarkerNode.is(node)) {
            browser_1.open(this.openerService, node.uri, this.getOpenerOptionsByMarker(node));
        }
        else {
            _super.prototype.doOpenNode.call(this, node);
        }
    };
    MarkerTreeModel.prototype.getOpenerOptionsByMarker = function (node) {
        return undefined;
    };
    /**
     * Reveal the corresponding node at the marker.
     * @param node {TreeNode} the tree node.
     */
    MarkerTreeModel.prototype.revealNode = function (node) {
        if (marker_tree_1.MarkerNode.is(node)) {
            browser_1.open(this.openerService, node.uri, __assign(__assign({}, this.getOpenerOptionsByMarker(node)), { mode: 'reveal' }));
        }
    };
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], MarkerTreeModel.prototype, "openerService", void 0);
    MarkerTreeModel = __decorate([
        inversify_1.injectable()
    ], MarkerTreeModel);
    return MarkerTreeModel;
}(browser_1.TreeModelImpl));
exports.MarkerTreeModel = MarkerTreeModel;
//# sourceMappingURL=marker-tree-model.js.map
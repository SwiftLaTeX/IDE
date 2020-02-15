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
var React = require("react");
var inversify_1 = require("inversify");
var disposable_1 = require("../../common/disposable");
var tree_1 = require("../tree");
var source_tree_1 = require("./source-tree");
var SourceTreeWidget = /** @class */ (function (_super) {
    __extends(SourceTreeWidget, _super);
    function SourceTreeWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDisposeOnSource = new disposable_1.DisposableCollection();
        return _this;
    }
    SourceTreeWidget_1 = SourceTreeWidget;
    SourceTreeWidget.createContainer = function (parent, props) {
        var child = tree_1.createTreeContainer(parent, props);
        child.unbind(tree_1.TreeImpl);
        child.bind(source_tree_1.SourceTree).toSelf();
        child.rebind(tree_1.Tree).toService(source_tree_1.SourceTree);
        child.unbind(tree_1.TreeWidget);
        child.bind(SourceTreeWidget_1).toSelf();
        return child;
    };
    SourceTreeWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass('theia-source-tree');
        this.toDispose.push(this.model.onOpenNode(function (node) {
            if (source_tree_1.TreeElementNode.is(node) && node.element.open) {
                node.element.open();
            }
        }));
    };
    Object.defineProperty(SourceTreeWidget.prototype, "source", {
        get: function () {
            var root = this.model.root;
            return source_tree_1.TreeSourceNode.is(root) ? root.source : undefined;
        },
        set: function (source) {
            var _this = this;
            if (this.source === source) {
                return;
            }
            this.toDisposeOnSource.dispose();
            this.toDispose.push(this.toDisposeOnSource);
            this.model.root = source_tree_1.TreeSourceNode.to(source);
            if (source) {
                this.toDisposeOnSource.push(source.onDidChange(function () { return _this.model.refresh(); }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceTreeWidget.prototype, "selectedElement", {
        get: function () {
            var node = this.model.selectedNodes[0];
            return source_tree_1.TreeElementNode.is(node) && node.element || undefined;
        },
        enumerable: true,
        configurable: true
    });
    SourceTreeWidget.prototype.renderTree = function (model) {
        if (source_tree_1.TreeSourceNode.is(model.root) && model.root.children.length === 0) {
            var placeholder = model.root.source.placeholder;
            if (placeholder) {
                return React.createElement("div", { className: 'theia-tree-source-node-placeholder noselect' }, placeholder);
            }
        }
        return _super.prototype.renderTree.call(this, model);
    };
    SourceTreeWidget.prototype.renderCaption = function (node) {
        if (source_tree_1.TreeElementNode.is(node)) {
            var classNames = this.createTreeElementNodeClassNames(node);
            return React.createElement("div", { className: classNames.join(' ') }, node.element.render());
        }
        return undefined;
    };
    SourceTreeWidget.prototype.createTreeElementNodeClassNames = function (node) {
        return ['theia-tree-element-node'];
    };
    SourceTreeWidget.prototype.storeState = function () {
        // no-op
        return {};
    };
    SourceTreeWidget.prototype.superStoreState = function () {
        return _super.prototype.storeState.call(this);
    };
    SourceTreeWidget.prototype.restoreState = function (state) {
        // no-op
    };
    SourceTreeWidget.prototype.superRestoreState = function (state) {
        _super.prototype.restoreState.call(this, state);
        return;
    };
    var SourceTreeWidget_1;
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SourceTreeWidget.prototype, "init", null);
    SourceTreeWidget = SourceTreeWidget_1 = __decorate([
        inversify_1.injectable()
    ], SourceTreeWidget);
    return SourceTreeWidget;
}(tree_1.TreeWidget));
exports.SourceTreeWidget = SourceTreeWidget;
//# sourceMappingURL=source-tree-widget.js.map
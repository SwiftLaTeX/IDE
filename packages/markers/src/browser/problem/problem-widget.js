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
var inversify_1 = require("inversify");
var problem_manager_1 = require("./problem-manager");
var problem_marker_1 = require("../../common/problem-marker");
var problem_tree_model_1 = require("./problem-tree-model");
var marker_tree_1 = require("../marker-tree");
var browser_1 = require("@theia/core/lib/browser");
var React = require("react");
exports.PROBLEMS_WIDGET_ID = 'problems';
var ProblemWidget = /** @class */ (function (_super) {
    __extends(ProblemWidget, _super);
    function ProblemWidget(problemManager, treeProps, model, contextMenuRenderer) {
        var _this = _super.call(this, treeProps, model, contextMenuRenderer) || this;
        _this.problemManager = problemManager;
        _this.treeProps = treeProps;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.id = exports.PROBLEMS_WIDGET_ID;
        _this.title.label = 'Problems';
        _this.title.caption = 'Problems';
        _this.title.iconClass = 'fa problem-tab-icon';
        _this.title.closable = true;
        _this.addClass('theia-marker-container');
        _this.addClipboardListener(_this.node, 'copy', function (e) { return _this.handleCopy(e); });
        return _this;
    }
    ProblemWidget.prototype.storeState = function () {
        // no-op
        return {};
    };
    ProblemWidget.prototype.superStoreState = function () {
        return _super.prototype.storeState.call(this);
    };
    ProblemWidget.prototype.restoreState = function (state) {
        // no-op
    };
    ProblemWidget.prototype.superRestoreState = function (state) {
        _super.prototype.restoreState.call(this, state);
        return;
    };
    ProblemWidget.prototype.handleClickEvent = function (node, event) {
        _super.prototype.handleClickEvent.call(this, node, event);
        if (marker_tree_1.MarkerNode.is(node)) {
            this.model.revealNode(node);
        }
    };
    ProblemWidget.prototype.handleCopy = function (event) {
        var uris = this.model.selectedNodes.filter(marker_tree_1.MarkerNode.is).map(function (node) { return node.uri.toString(); });
        if (uris.length > 0 && event.clipboardData) {
            event.clipboardData.setData('text/plain', uris.join('\n'));
            event.preventDefault();
        }
    };
    ProblemWidget.prototype.handleDown = function (event) {
        var node = this.model.getNextSelectableNode();
        _super.prototype.handleDown.call(this, event);
        if (marker_tree_1.MarkerNode.is(node)) {
            this.model.revealNode(node);
        }
    };
    ProblemWidget.prototype.handleUp = function (event) {
        var node = this.model.getPrevSelectableNode();
        _super.prototype.handleUp.call(this, event);
        if (marker_tree_1.MarkerNode.is(node)) {
            this.model.revealNode(node);
        }
    };
    ProblemWidget.prototype.renderTree = function (model) {
        if (marker_tree_1.MarkerRootNode.is(model.root) && model.root.children.length > 0) {
            return _super.prototype.renderTree.call(this, model);
        }
        return React.createElement("div", { className: 'theia-widget-noInfo noMarkers' }, "No problems have been detected in the workspace so far.");
    };
    ProblemWidget.prototype.renderCaption = function (node, props) {
        if (marker_tree_1.MarkerInfoNode.is(node)) {
            return this.decorateMarkerFileNode(node);
        }
        else if (marker_tree_1.MarkerNode.is(node)) {
            return this.decorateMarkerNode(node);
        }
        return 'caption';
    };
    ProblemWidget.prototype.renderTailDecorations = function (node, props) {
        return React.createElement("div", { className: 'row-button-container' }, this.renderRemoveButton(node));
    };
    ProblemWidget.prototype.renderRemoveButton = function (node) {
        return React.createElement(ProblemMarkerRemoveButton, { model: this.model, node: node });
    };
    ProblemWidget.prototype.decorateMarkerNode = function (node) {
        if (problem_marker_1.ProblemMarker.is(node.marker)) {
            var severityClass = '';
            var problemMarker = node.marker;
            if (problemMarker.data.severity) {
                severityClass = this.getSeverityClass(problemMarker.data.severity);
            }
            return React.createElement("div", { className: 'markerNode', title: problemMarker.data.message + " (" + (problemMarker.data.range.start.line + 1) + ", " + (problemMarker.data.range.start.character + 1) + ")" },
                React.createElement("div", null,
                    React.createElement("i", { className: severityClass })),
                React.createElement("div", { className: 'owner' }, '[' + (problemMarker.data.source || problemMarker.owner) + ']'),
                React.createElement("div", { className: 'message' },
                    problemMarker.data.message,
                    (problemMarker.data.code) ? React.createElement("span", { className: 'code' }, '[' + problemMarker.data.code + ']') : '',
                    React.createElement("span", { className: 'position' }, '(' + (problemMarker.data.range.start.line + 1) + ', ' + (problemMarker.data.range.start.character + 1) + ')')));
        }
        return '';
    };
    ProblemWidget.prototype.getSeverityClass = function (severity) {
        switch (severity) {
            case 1: return 'fa fa-times-circle error';
            case 2: return 'fa fa-exclamation-circle warning';
            case 3: return 'fa fa-info-circle information';
            default: return 'fa fa-hand-o-up hint';
        }
    };
    ProblemWidget.prototype.decorateMarkerFileNode = function (node) {
        var icon = this.toNodeIcon(node);
        var name = this.toNodeName(node);
        var description = this.toNodeDescription(node);
        return React.createElement("div", { className: 'markerFileNode' },
            icon && React.createElement("div", { className: icon + ' file-icon' }),
            React.createElement("div", { title: name, className: 'name' }, name),
            React.createElement("div", { title: description, className: 'path' }, description),
            React.createElement("div", { className: 'notification-count-container' },
                React.createElement("span", { className: 'notification-count' }, node.numberOfMarkers.toString())));
    };
    ProblemWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(problem_manager_1.ProblemManager)),
        __param(1, inversify_1.inject(browser_1.TreeProps)),
        __param(2, inversify_1.inject(problem_tree_model_1.ProblemTreeModel)),
        __param(3, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [problem_manager_1.ProblemManager, Object, problem_tree_model_1.ProblemTreeModel, Object])
    ], ProblemWidget);
    return ProblemWidget;
}(browser_1.TreeWidget));
exports.ProblemWidget = ProblemWidget;
var ProblemMarkerRemoveButton = /** @class */ (function (_super) {
    __extends(ProblemMarkerRemoveButton, _super);
    function ProblemMarkerRemoveButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.remove = function (e) { return _this.doRemove(e); };
        return _this;
    }
    ProblemMarkerRemoveButton.prototype.render = function () {
        return React.createElement("span", { className: 'remove-node', onClick: this.remove });
    };
    ProblemMarkerRemoveButton.prototype.doRemove = function (e) {
        this.props.model.removeNode(this.props.node);
        e.stopPropagation();
    };
    return ProblemMarkerRemoveButton;
}(React.Component));
exports.ProblemMarkerRemoveButton = ProblemMarkerRemoveButton;
//# sourceMappingURL=problem-widget.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var callhierarchy_tree_1 = require("./callhierarchy-tree");
var callhierarchy_tree_model_1 = require("./callhierarchy-tree-model");
var callhierarchy_1 = require("../callhierarchy");
var uri_1 = require("@theia/core/lib/common/uri");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var browser_2 = require("@theia/editor/lib/browser");
var React = require("react");
exports.HIERARCHY_TREE_CLASS = 'theia-CallHierarchyTree';
exports.DEFINITION_NODE_CLASS = 'theia-CallHierarchyTreeNode';
exports.DEFINITION_ICON_CLASS = 'theia-CallHierarchyTreeNodeIcon';
var CallHierarchyTreeWidget = /** @class */ (function (_super) {
    __extends(CallHierarchyTreeWidget, _super);
    function CallHierarchyTreeWidget(props, model, contextMenuRenderer, labelProvider, editorManager) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.labelProvider = labelProvider;
        _this.editorManager = editorManager;
        _this.id = callhierarchy_1.CALLHIERARCHY_ID;
        _this.title.label = 'Call Hierarchy';
        _this.title.caption = 'Call Hierarchy';
        _this.title.iconClass = 'fa call-hierarchy-tab-icon';
        _this.title.closable = true;
        _this.addClass(exports.HIERARCHY_TREE_CLASS);
        _this.toDispose.push(_this.model.onSelectionChanged(function (selection) {
            var node = selection[0];
            if (node) {
                _this.openEditor(node, true);
            }
        }));
        _this.toDispose.push(_this.model.onOpenNode(function (node) {
            _this.openEditor(node, false);
        }));
        _this.toDispose.push(_this.labelProvider.onDidChange(function () { return _this.update(); }));
        return _this;
    }
    CallHierarchyTreeWidget.prototype.initializeModel = function (selection, languageId) {
        this.model.initializeCallHierarchy(languageId, selection ? selection.uri : undefined, selection ? selection.range.start : undefined);
    };
    CallHierarchyTreeWidget.prototype.createNodeClassNames = function (node, props) {
        var classNames = _super.prototype.createNodeClassNames.call(this, node, props);
        if (callhierarchy_tree_1.DefinitionNode.is(node)) {
            classNames.push(exports.DEFINITION_NODE_CLASS);
        }
        return classNames;
    };
    CallHierarchyTreeWidget.prototype.createNodeAttributes = function (node, props) {
        var elementAttrs = _super.prototype.createNodeAttributes.call(this, node, props);
        return __assign({}, elementAttrs);
    };
    CallHierarchyTreeWidget.prototype.renderTree = function (model) {
        return _super.prototype.renderTree.call(this, model)
            || React.createElement("div", { className: 'theia-widget-noInfo' }, "No callers have been detected.");
    };
    CallHierarchyTreeWidget.prototype.renderCaption = function (node, props) {
        if (callhierarchy_tree_1.DefinitionNode.is(node)) {
            return this.decorateDefinitionCaption(node.definition);
        }
        if (callhierarchy_tree_1.CallerNode.is(node)) {
            return this.decorateCallerCaption(node.caller);
        }
        return 'caption';
    };
    CallHierarchyTreeWidget.prototype.decorateDefinitionCaption = function (definition) {
        var containerName = definition.containerName;
        var symbol = definition.symbolName;
        var location = this.labelProvider.getName(new uri_1.default(definition.location.uri));
        var container = (containerName) ? containerName + ' — ' + location : location;
        return React.createElement("div", { className: 'definitionNode' },
            React.createElement("div", { className: 'symbol-icon ' + this.toIconClass(definition.symbolKind) }),
            React.createElement("div", { className: 'definitionNode-content' },
                React.createElement("span", { className: 'symbol' }, symbol),
                React.createElement("span", { className: 'container' }, container)));
    };
    CallHierarchyTreeWidget.prototype.decorateCallerCaption = function (caller) {
        var definition = caller.callerDefinition;
        var containerName = definition.containerName;
        var symbol = definition.symbolName;
        var referenceCount = caller.references.length;
        var location = this.labelProvider.getName(new uri_1.default(definition.location.uri));
        var container = (containerName) ? containerName + ' — ' + location : location;
        return React.createElement("div", { className: 'definitionNode' },
            React.createElement("div", { className: 'symbol-icon ' + this.toIconClass(definition.symbolKind) }),
            React.createElement("div", { className: 'definitionNode-content' },
                React.createElement("span", { className: 'symbol' }, symbol),
                React.createElement("span", { className: 'referenceCount' }, (referenceCount > 1) ? "[" + referenceCount + "]" : ''),
                React.createElement("span", { className: 'container' }, container)));
    };
    // tslint:disable-next-line:typedef
    CallHierarchyTreeWidget.prototype.toIconClass = function (symbolKind) {
        switch (symbolKind) {
            case vscode_languageserver_types_1.SymbolKind.File: return 'file';
            case vscode_languageserver_types_1.SymbolKind.Module: return 'module';
            case vscode_languageserver_types_1.SymbolKind.Namespace: return 'namespace';
            case vscode_languageserver_types_1.SymbolKind.Package: return 'package';
            case vscode_languageserver_types_1.SymbolKind.Class: return 'class';
            case vscode_languageserver_types_1.SymbolKind.Method: return 'method';
            case vscode_languageserver_types_1.SymbolKind.Property: return 'property';
            case vscode_languageserver_types_1.SymbolKind.Field: return 'field';
            case vscode_languageserver_types_1.SymbolKind.Constructor: return 'constructor';
            case vscode_languageserver_types_1.SymbolKind.Enum: return 'enum';
            case vscode_languageserver_types_1.SymbolKind.Interface: return 'interface';
            case vscode_languageserver_types_1.SymbolKind.Function: return 'function';
            case vscode_languageserver_types_1.SymbolKind.Variable: return 'variable';
            case vscode_languageserver_types_1.SymbolKind.Constant: return 'constant';
            case vscode_languageserver_types_1.SymbolKind.String: return 'string';
            case vscode_languageserver_types_1.SymbolKind.Number: return 'number';
            case vscode_languageserver_types_1.SymbolKind.Boolean: return 'boolean';
            case vscode_languageserver_types_1.SymbolKind.Array: return 'array';
            default: return 'unknown';
        }
    };
    CallHierarchyTreeWidget.prototype.openEditor = function (node, keepFocus) {
        if (callhierarchy_tree_1.DefinitionNode.is(node)) {
            var def = node.definition;
            this.doOpenEditor(node.definition.location.uri, def.selectionRange ? def.selectionRange : def.location.range, keepFocus);
        }
        if (callhierarchy_tree_1.CallerNode.is(node)) {
            this.doOpenEditor(node.caller.callerDefinition.location.uri, node.caller.references[0], keepFocus);
        }
    };
    CallHierarchyTreeWidget.prototype.doOpenEditor = function (uri, range, keepFocus) {
        this.editorManager.open(new uri_1.default(uri), {
            mode: keepFocus ? 'reveal' : 'activate',
            selection: range
        }).then(function (editorWidget) {
            if (editorWidget.parent instanceof browser_1.DockPanel) {
                editorWidget.parent.selectWidget(editorWidget);
            }
        });
    };
    CallHierarchyTreeWidget.prototype.storeState = function () {
        var callHierarchyService = this.model.getTree().callHierarchyService;
        if (this.model.root && callHierarchyService) {
            return {
                root: this.deflateForStorage(this.model.root),
                languageId: this.model.languageId,
            };
        }
        else {
            return {};
        }
    };
    CallHierarchyTreeWidget.prototype.restoreState = function (oldState) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (oldState.root && oldState.languageId) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var root = this.inflateFromStorage(oldState.root);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.model.initializeCallHierarchy(oldState.languageId, root.definition.location.uri, root.definition.location.range.start);
        }
    };
    CallHierarchyTreeWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.TreeProps)),
        __param(1, inversify_1.inject(callhierarchy_tree_model_1.CallHierarchyTreeModel)),
        __param(2, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __param(3, inversify_1.inject(label_provider_1.LabelProvider)),
        __param(4, inversify_1.inject(browser_2.EditorManager)),
        __metadata("design:paramtypes", [Object, callhierarchy_tree_model_1.CallHierarchyTreeModel, Object, label_provider_1.LabelProvider,
            browser_2.EditorManager])
    ], CallHierarchyTreeWidget);
    return CallHierarchyTreeWidget;
}(browser_1.TreeWidget));
exports.CallHierarchyTreeWidget = CallHierarchyTreeWidget;
//# sourceMappingURL=callhierarchy-tree-widget.js.map
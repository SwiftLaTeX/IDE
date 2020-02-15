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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
var React = require("react");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var selection_1 = require("@theia/core/lib/common/selection");
var cancellation_1 = require("@theia/core/lib/common/cancellation");
var browser_1 = require("@theia/core/lib/browser");
var file_upload_service_1 = require("../file-upload-service");
var file_tree_1 = require("./file-tree");
var file_tree_model_1 = require("./file-tree-model");
var icon_theme_service_1 = require("@theia/core/lib/browser/icon-theme-service");
exports.FILE_TREE_CLASS = 'theia-FileTree';
exports.FILE_STAT_NODE_CLASS = 'theia-FileStatNode';
exports.DIR_NODE_CLASS = 'theia-DirNode';
exports.FILE_STAT_ICON_CLASS = 'theia-FileStatIcon';
var FileTreeWidget = /** @class */ (function (_super) {
    __extends(FileTreeWidget, _super);
    function FileTreeWidget(props, model, contextMenuRenderer) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.toCancelNodeExpansion = new common_1.DisposableCollection();
        _this.addClass(exports.FILE_TREE_CLASS);
        _this.toDispose.push(_this.toCancelNodeExpansion);
        return _this;
    }
    FileTreeWidget.prototype.createNodeClassNames = function (node, props) {
        var classNames = _super.prototype.createNodeClassNames.call(this, node, props);
        if (file_tree_1.FileStatNode.is(node)) {
            classNames.push(exports.FILE_STAT_NODE_CLASS);
        }
        if (file_tree_1.DirNode.is(node)) {
            classNames.push(exports.DIR_NODE_CLASS);
        }
        return classNames;
    };
    FileTreeWidget.prototype.renderIcon = function (node, props) {
        var icon = this.toNodeIcon(node);
        if (icon) {
            return React.createElement("div", { className: icon + ' file-icon' });
        }
        // eslint-disable-next-line no-null/no-null
        return null;
    };
    FileTreeWidget.prototype.createContainerAttributes = function () {
        var _this = this;
        var attrs = _super.prototype.createContainerAttributes.call(this);
        return __assign(__assign({}, attrs), { onDragEnter: function (event) { return _this.handleDragEnterEvent(_this.model.root, event); }, onDragOver: function (event) { return _this.handleDragOverEvent(_this.model.root, event); }, onDragLeave: function (event) { return _this.handleDragLeaveEvent(_this.model.root, event); }, onDrop: function (event) { return _this.handleDropEvent(_this.model.root, event); } });
    };
    FileTreeWidget.prototype.createNodeAttributes = function (node, props) {
        var _this = this;
        var elementAttrs = _super.prototype.createNodeAttributes.call(this, node, props);
        return __assign(__assign({}, elementAttrs), { draggable: file_tree_1.FileStatNode.is(node), onDragStart: function (event) { return _this.handleDragStartEvent(node, event); }, onDragEnter: function (event) { return _this.handleDragEnterEvent(node, event); }, onDragOver: function (event) { return _this.handleDragOverEvent(node, event); }, onDragLeave: function (event) { return _this.handleDragLeaveEvent(node, event); }, onDrop: function (event) { return _this.handleDropEvent(node, event); }, title: this.getNodeTooltip(node) });
    };
    FileTreeWidget.prototype.getNodeTooltip = function (node) {
        var uri = selection_1.UriSelection.getUri(node);
        return uri ? uri.path.toString() : undefined;
    };
    FileTreeWidget.prototype.handleDragStartEvent = function (node, event) {
        event.stopPropagation();
        var selectedNodes;
        if (this.model.selectedNodes.find(function (selected) { return browser_1.TreeNode.equals(selected, node); })) {
            selectedNodes = __spread(this.model.selectedNodes);
        }
        else {
            selectedNodes = [node];
        }
        this.setSelectedTreeNodesAsData(event.dataTransfer, node, selectedNodes);
        if (event.dataTransfer) {
            var label = void 0;
            if (selectedNodes.length === 1) {
                label = this.toNodeName(node);
            }
            else {
                label = String(selectedNodes.length);
            }
            var dragImage_1 = document.createElement('div');
            dragImage_1.className = 'theia-file-tree-drag-image';
            dragImage_1.textContent = label;
            document.body.appendChild(dragImage_1);
            event.dataTransfer.setDragImage(dragImage_1, -10, -10);
            setTimeout(function () { return document.body.removeChild(dragImage_1); }, 0);
        }
    };
    FileTreeWidget.prototype.handleDragEnterEvent = function (node, event) {
        event.preventDefault();
        event.stopPropagation();
        this.toCancelNodeExpansion.dispose();
        var containing = file_tree_1.DirNode.getContainingDir(node);
        if (!!containing && !containing.selected) {
            this.model.selectNode(containing);
        }
    };
    FileTreeWidget.prototype.handleDragOverEvent = function (node, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.toCancelNodeExpansion.disposed) {
            return;
        }
        var timer = setTimeout(function () {
            var containing = file_tree_1.DirNode.getContainingDir(node);
            if (!!containing && !containing.expanded) {
                _this.model.expandNode(containing);
            }
        }, 500);
        this.toCancelNodeExpansion.push(common_1.Disposable.create(function () { return clearTimeout(timer); }));
    };
    FileTreeWidget.prototype.handleDragLeaveEvent = function (node, event) {
        event.preventDefault();
        event.stopPropagation();
        this.toCancelNodeExpansion.dispose();
    };
    FileTreeWidget.prototype.handleDropEvent = function (node, event) {
        return __awaiter(this, void 0, void 0, function () {
            var containing, resources, resources_1, resources_1_1, treeNode, e_1_1, e_2;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 12, , 13]);
                        event.preventDefault();
                        event.stopPropagation();
                        event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
                        containing = this.getDropTargetDirNode(node);
                        if (!containing) return [3 /*break*/, 11];
                        resources = this.getSelectedTreeNodesFromData(event.dataTransfer);
                        if (!(resources.length > 0)) return [3 /*break*/, 9];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        resources_1 = __values(resources), resources_1_1 = resources_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!resources_1_1.done) return [3 /*break*/, 5];
                        treeNode = resources_1_1.value;
                        return [4 /*yield*/, this.model.move(treeNode, containing)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        resources_1_1 = resources_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (resources_1_1 && !resources_1_1.done && (_a = resources_1.return)) _a.call(resources_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.uploadService.upload(containing.uri, { source: event.dataTransfer })];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        e_2 = _b.sent();
                        if (!cancellation_1.isCancelled(e_2)) {
                            console.error(e_2);
                        }
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    FileTreeWidget.prototype.getDropTargetDirNode = function (node) {
        if (browser_1.CompositeTreeNode.is(node) && node.id === 'WorkspaceNodeId') {
            if (node.children.length === 1) {
                return file_tree_1.DirNode.getContainingDir(node.children[0]);
            }
            else if (node.children.length > 1) {
                // move file to the last root folder in multi-root scenario
                return file_tree_1.DirNode.getContainingDir(node.children[node.children.length - 1]);
            }
        }
        return file_tree_1.DirNode.getContainingDir(node);
    };
    FileTreeWidget.prototype.setTreeNodeAsData = function (data, node) {
        data.setData('tree-node', node.id);
    };
    FileTreeWidget.prototype.setSelectedTreeNodesAsData = function (data, sourceNode, relatedNodes) {
        this.setTreeNodeAsData(data, sourceNode);
        data.setData('selected-tree-nodes', JSON.stringify(relatedNodes.map(function (node) { return node.id; })));
    };
    FileTreeWidget.prototype.getTreeNodeFromData = function (data) {
        var id = data.getData('tree-node');
        return this.model.getNode(id);
    };
    FileTreeWidget.prototype.getSelectedTreeNodesFromData = function (data) {
        var _this = this;
        var resources = data.getData('selected-tree-nodes');
        if (!resources) {
            return [];
        }
        var ids = JSON.parse(resources);
        return ids.map(function (id) { return _this.model.getNode(id); }).filter(function (node) { return node !== undefined; });
    };
    Object.defineProperty(FileTreeWidget.prototype, "hidesExplorerArrows", {
        get: function () {
            var theme = this.iconThemeService.getDefinition(this.iconThemeService.current);
            return !!theme && !!theme.hidesExplorerArrows;
        },
        enumerable: true,
        configurable: true
    });
    FileTreeWidget.prototype.renderExpansionToggle = function (node, props) {
        if (this.hidesExplorerArrows) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        return _super.prototype.renderExpansionToggle.call(this, node, props);
    };
    FileTreeWidget.prototype.getPaddingLeft = function (node, props) {
        if (this.hidesExplorerArrows) {
            // aditional left padding instead of top-level expansion toggle
            return _super.prototype.getPaddingLeft.call(this, node, props) + this.props.leftPadding;
        }
        return _super.prototype.getPaddingLeft.call(this, node, props);
    };
    FileTreeWidget.prototype.needsExpansionTogglePadding = function (node) {
        var theme = this.iconThemeService.getDefinition(this.iconThemeService.current);
        if (theme && (theme.hidesExplorerArrows || (theme.hasFileIcons && !theme.hasFolderIcons))) {
            return false;
        }
        return _super.prototype.needsExpansionTogglePadding.call(this, node);
    };
    __decorate([
        inversify_1.inject(file_upload_service_1.FileUploadService),
        __metadata("design:type", file_upload_service_1.FileUploadService)
    ], FileTreeWidget.prototype, "uploadService", void 0);
    __decorate([
        inversify_1.inject(icon_theme_service_1.IconThemeService),
        __metadata("design:type", icon_theme_service_1.IconThemeService)
    ], FileTreeWidget.prototype, "iconThemeService", void 0);
    FileTreeWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.TreeProps)),
        __param(1, inversify_1.inject(file_tree_model_1.FileTreeModel)),
        __param(2, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [Object, file_tree_model_1.FileTreeModel, Object])
    ], FileTreeWidget);
    return FileTreeWidget;
}(browser_1.TreeWidget));
exports.FileTreeWidget = FileTreeWidget;
//# sourceMappingURL=file-tree-widget.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("../../common");
var keys_1 = require("../keyboard/keys");
var context_menu_renderer_1 = require("../context-menu-renderer");
var widgets_1 = require("../widgets");
var tree_1 = require("./tree");
var tree_model_1 = require("./tree-model");
var tree_expansion_1 = require("./tree-expansion");
var tree_selection_1 = require("./tree-selection");
var tree_decorator_1 = require("./tree-decorator");
var objects_1 = require("../../common/objects");
var os_1 = require("../../common/os");
var react_widget_1 = require("../widgets/react-widget");
var React = require("react");
var react_virtualized_1 = require("react-virtualized");
var tree_iterator_1 = require("./tree-iterator");
var search_box_1 = require("./search-box");
var tree_search_1 = require("./tree-search");
var domutils_1 = require("@phosphor/domutils");
var tree_widget_selection_1 = require("./tree-widget-selection");
var label_provider_1 = require("../label-provider");
var debounce = require('lodash.debounce');
exports.TREE_CLASS = 'theia-Tree';
exports.TREE_CONTAINER_CLASS = 'theia-TreeContainer';
exports.TREE_NODE_CLASS = 'theia-TreeNode';
exports.TREE_NODE_CONTENT_CLASS = 'theia-TreeNodeContent';
exports.TREE_NODE_TAIL_CLASS = 'theia-TreeNodeTail';
exports.TREE_NODE_SEGMENT_CLASS = 'theia-TreeNodeSegment';
exports.TREE_NODE_SEGMENT_GROW_CLASS = 'theia-TreeNodeSegmentGrow';
exports.EXPANDABLE_TREE_NODE_CLASS = 'theia-ExpandableTreeNode';
exports.COMPOSITE_TREE_NODE_CLASS = 'theia-CompositeTreeNode';
exports.TREE_NODE_CAPTION_CLASS = 'theia-TreeNodeCaption';
exports.TreeProps = Symbol('TreeProps');
/**
 * The default tree properties.
 */
exports.defaultTreeProps = {
    leftPadding: 8,
    expansionTogglePadding: 18
};
var TreeWidget = /** @class */ (function (_super) {
    __extends(TreeWidget, _super);
    function TreeWidget(props, model, contextMenuRenderer) {
        var _this = _super.call(this) || this;
        _this.props = props;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.decorations = new Map();
        _this.shouldScrollToRow = true;
        _this.rows = new Map();
        _this.updateRows = debounce(function () { return _this.doUpdateRows(); }, 10);
        /**
         * Update tree decorations.
         * - Updating decorations are debounced in order to limit the number of expensive updates.
         */
        _this.updateDecorations = debounce(function () { return _this.doUpdateDecorations(); }, 150);
        _this.scrollArea = _this.node;
        /**
         * Handle the scroll event.
         */
        _this.handleScroll = function (info) {
            _this.node.scrollTop = info.scrollTop;
        };
        /**
         * Render the node row.
         */
        _this.renderNodeRow = function (row) { return _this.doRenderNodeRow(row); };
        /**
         * Toggle the node.
         */
        _this.toggle = function (event) { return _this.doToggle(event); };
        _this.scrollOptions = {
            suppressScrollX: true,
            minScrollbarLength: 35
        };
        _this.addClass(exports.TREE_CLASS);
        _this.node.tabIndex = 0;
        return _this;
    }
    TreeWidget_1 = TreeWidget;
    TreeWidget.prototype.init = function () {
        var _this = this;
        if (this.props.search) {
            this.searchBox = this.searchBoxFactory(__assign(__assign({}, search_box_1.SearchBoxProps.DEFAULT), { showButtons: true }));
            this.toDispose.pushAll([
                this.searchBox,
                this.searchBox.onTextChange(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.treeSearch.filter(data)];
                            case 1:
                                _a.sent();
                                this.searchHighlights = this.treeSearch.getHighlights();
                                this.update();
                                return [2 /*return*/];
                        }
                    });
                }); }),
                this.searchBox.onClose(function (data) { return _this.treeSearch.filter(undefined); }),
                this.searchBox.onNext(function () {
                    // Enable next selection if there are currently highlights.
                    if (_this.searchHighlights.size > 1) {
                        _this.model.selectNextNode();
                    }
                }),
                this.searchBox.onPrevious(function () {
                    // Enable previous selection if there are currently highlights.
                    if (_this.searchHighlights.size > 1) {
                        _this.model.selectPrevNode();
                    }
                }),
                this.treeSearch,
                this.treeSearch.onFilteredNodesChanged(function (nodes) {
                    var node = nodes.find(tree_selection_1.SelectableTreeNode.is);
                    if (node) {
                        _this.model.selectNode(node);
                    }
                }),
                this.model.onExpansionChanged(function () {
                    _this.searchBox.hide();
                })
            ]);
        }
        this.toDispose.pushAll([
            this.model,
            this.model.onChanged(function () { return _this.updateRows(); }),
            this.model.onSelectionChanged(function () { return _this.updateScrollToRow({ resize: false }); }),
            this.model.onNodeRefreshed(function () { return _this.updateDecorations(); }),
            this.model.onExpansionChanged(function () { return _this.updateDecorations(); }),
            this.decoratorService,
            this.decoratorService.onDidChangeDecorations(function () { return _this.updateDecorations(); }),
            this.labelProvider.onDidChange(function (e) {
                var e_1, _a;
                try {
                    for (var _b = __values(_this.rows.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var row = _c.value;
                        if (e.affects(row)) {
                            _this.forceUpdate();
                            return;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            })
        ]);
        setTimeout(function () {
            _this.updateRows();
            _this.updateDecorations();
        });
        if (this.props.globalSelection) {
            this.toDispose.pushAll([
                this.model.onSelectionChanged(function () {
                    if (_this.node.contains(document.activeElement)) {
                        _this.updateGlobalSelection();
                    }
                }),
                common_1.Disposable.create(function () {
                    var selection = _this.selectionService.selection;
                    if (tree_widget_selection_1.TreeWidgetSelection.isSource(selection, _this)) {
                        _this.selectionService.selection = undefined;
                    }
                })
            ]);
        }
    };
    /**
     * Update the global selection for the tree.
     */
    TreeWidget.prototype.updateGlobalSelection = function () {
        this.selectionService.selection = tree_widget_selection_1.TreeWidgetSelection.create(this);
    };
    TreeWidget.prototype.doUpdateRows = function () {
        var e_2, _a;
        var root = this.model.root;
        var rowsToUpdate = [];
        if (root) {
            var depths = new Map();
            var index = 0;
            try {
                for (var _b = __values(new tree_iterator_1.TopDownTreeIterator(root, {
                    pruneCollapsed: true,
                    pruneSiblings: true
                })), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var node = _c.value;
                    if (tree_1.TreeNode.isVisible(node)) {
                        var parentDepth = depths.get(node.parent);
                        var depth = parentDepth === undefined ? 0 : tree_1.TreeNode.isVisible(node.parent) ? parentDepth + 1 : parentDepth;
                        if (tree_1.CompositeTreeNode.is(node)) {
                            depths.set(node, depth);
                        }
                        rowsToUpdate.push([node.id, {
                                index: index++,
                                node: node,
                                depth: depth
                            }]);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.rows = new Map(rowsToUpdate);
        this.updateScrollToRow();
    };
    /**
     * Update the `scrollToRow`.
     * @param updateOptions the tree widget force update options.
     */
    TreeWidget.prototype.updateScrollToRow = function (updateOptions) {
        this.scrollToRow = this.getScrollToRow();
        this.forceUpdate(updateOptions);
    };
    /**
     * Get the `scrollToRow`.
     *
     * @returns the `scrollToRow` if available.
     */
    TreeWidget.prototype.getScrollToRow = function () {
        if (!this.shouldScrollToRow) {
            return undefined;
        }
        var selected = this.model.selectedNodes;
        var node = selected.find(tree_selection_1.SelectableTreeNode.hasFocus) || selected[0];
        var row = node && this.rows.get(node.id);
        return row && row.index;
    };
    TreeWidget.prototype.doUpdateDecorations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.decoratorService.getDecorations(this.model)];
                    case 1:
                        _a.decorations = _b.sent();
                        this.forceUpdate();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Force deep resizing and rendering of rows.
     * https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md#recomputerowheights-index-number
     */
    TreeWidget.prototype.forceUpdate = function (_a) {
        var resize = (_a === void 0 ? { resize: true } : _a).resize;
        if (this.view && this.view.list) {
            if (resize && this.isVisible) {
                this.view.cache.clearAll();
                this.view.list.recomputeRowHeights();
            }
            else {
                this.view.list.forceUpdateGrid();
            }
        }
        this.update();
    };
    TreeWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus({ preventScroll: true });
    };
    /**
     * Actually focus the tree node.
     */
    TreeWidget.prototype.doFocus = function () {
        if (!this.model.selectedNodes.length) {
            var node = this.getNodeToFocus();
            if (tree_selection_1.SelectableTreeNode.is(node)) {
                this.model.selectNode(node);
            }
        }
        // It has to be called after nodes are selected.
        if (this.props.globalSelection) {
            this.updateGlobalSelection();
        }
        this.forceUpdate();
    };
    /**
     * Get the tree node to focus.
     *
     * @returns the node to focus if available.
     */
    TreeWidget.prototype.getNodeToFocus = function () {
        var root = this.model.root;
        if (tree_selection_1.SelectableTreeNode.isVisible(root)) {
            return root;
        }
        return this.model.getNextSelectableNode(root);
    };
    TreeWidget.prototype.onUpdateRequest = function (msg) {
        if (!this.isAttached || !this.isVisible) {
            return;
        }
        _super.prototype.onUpdateRequest.call(this, msg);
    };
    TreeWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        this.forceUpdate();
    };
    TreeWidget.prototype.render = function () {
        return React.createElement('div', this.createContainerAttributes(), this.renderTree(this.model));
    };
    /**
     * Create the container attributes for the widget.
     */
    TreeWidget.prototype.createContainerAttributes = function () {
        var _this = this;
        var classNames = [exports.TREE_CONTAINER_CLASS];
        if (!this.rows.size) {
            classNames.push('empty');
        }
        return {
            className: classNames.join(' '),
            onContextMenu: function (event) { return _this.handleContextMenuEvent(_this.getContainerTreeNode(), event); }
        };
    };
    /**
     * Get the container tree node.
     *
     * @returns the tree node for the container if available.
     */
    TreeWidget.prototype.getContainerTreeNode = function () {
        return this.model.root;
    };
    /**
     * Render the tree widget.
     * @param model the tree model.
     */
    TreeWidget.prototype.renderTree = function (model) {
        var _this = this;
        if (model.root) {
            var rows = Array.from(this.rows.values());
            if (this.props.virtualized === false) {
                this.onRender.push(common_1.Disposable.create(function () { return _this.scrollToSelected(); }));
                return rows.map(function (row) { return React.createElement("div", { key: row.index }, _this.renderNodeRow(row)); });
            }
            return React.createElement(TreeWidget_1.View, { ref: function (view) { return _this.view = (view || undefined); }, width: this.node.offsetWidth, height: this.node.offsetHeight, rows: rows, renderNodeRow: this.renderNodeRow, scrollToRow: this.scrollToRow, handleScroll: this.handleScroll });
        }
        // eslint-disable-next-line no-null/no-null
        return null;
    };
    /**
     * Scroll to the selected tree node.
     */
    TreeWidget.prototype.scrollToSelected = function () {
        if (this.props.scrollIfActive === true && !this.node.contains(document.activeElement)) {
            return;
        }
        var focus = this.node.getElementsByClassName(widgets_1.FOCUS_CLASS)[0];
        if (focus) {
            domutils_1.ElementExt.scrollIntoViewIfNeeded(this.scrollArea, focus);
        }
        else {
            var selected = this.node.getElementsByClassName(widgets_1.SELECTED_CLASS)[0];
            if (selected) {
                domutils_1.ElementExt.scrollIntoViewIfNeeded(this.scrollArea, selected);
            }
        }
    };
    /**
     * Actually render the node row.
     */
    TreeWidget.prototype.doRenderNodeRow = function (_a) {
        var index = _a.index, node = _a.node, depth = _a.depth;
        return this.renderNode(node, { depth: depth });
    };
    /**
     * Render the tree node given the node properties.
     * @param node the tree node.
     * @param props the node properties.
     */
    TreeWidget.prototype.renderIcon = function (node, props) {
        // eslint-disable-next-line no-null/no-null
        return null;
    };
    /**
     * Actually toggle the tree node.
     * @param event the mouse click event.
     */
    TreeWidget.prototype.doToggle = function (event) {
        var nodeId = event.currentTarget.getAttribute('data-node-id');
        if (nodeId) {
            var node = this.model.getNode(nodeId);
            this.handleClickEvent(node, event);
        }
        event.stopPropagation();
    };
    /**
     * Render the node expansion toggle.
     * @param node the tree node.
     * @param props the node properties.
     */
    TreeWidget.prototype.renderExpansionToggle = function (node, props) {
        if (!this.isExpandable(node)) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        var classes = [exports.TREE_NODE_SEGMENT_CLASS, widgets_1.EXPANSION_TOGGLE_CLASS];
        if (!node.expanded) {
            classes.push(widgets_1.COLLAPSED_CLASS);
        }
        var className = classes.join(' ');
        return React.createElement("div", { "data-node-id": node.id, className: className, onClick: this.toggle });
    };
    /**
     * Render the tree node caption given the node properties.
     * @param node the tree node.
     * @param props the node properties.
     */
    TreeWidget.prototype.renderCaption = function (node, props) {
        var tooltip = this.getDecorationData(node, 'tooltip').filter(objects_1.notEmpty).join(' • ');
        var classes = [exports.TREE_NODE_SEGMENT_CLASS];
        if (!this.hasTrailingSuffixes(node)) {
            classes.push(exports.TREE_NODE_SEGMENT_GROW_CLASS);
        }
        var className = classes.join(' ');
        var attrs = this.decorateCaption(node, {
            className: className, id: node.id
        });
        if (tooltip.length > 0) {
            attrs = __assign(__assign({}, attrs), { title: tooltip });
        }
        var children = [];
        var caption = this.toNodeName(node);
        var highlight = this.getDecorationData(node, 'highlight')[0];
        if (highlight) {
            children.push(this.toReactNode(caption, highlight));
        }
        var searchHighlight = this.searchHighlights ? this.searchHighlights.get(node.id) : undefined;
        if (searchHighlight) {
            children.push.apply(children, __spread(this.toReactNode(caption, searchHighlight)));
        }
        else if (!highlight) {
            children.push(caption);
        }
        return React.createElement.apply(React, __spread(['div', attrs], children));
    };
    /**
     * Update the node given the caption and highlight.
     * @param caption the caption.
     * @param highlight the tree decoration caption highlight.
     */
    TreeWidget.prototype.toReactNode = function (caption, highlight) {
        var style = {};
        if (highlight.color) {
            style = __assign(__assign({}, style), { color: highlight.color });
        }
        if (highlight.backgroundColor) {
            style = __assign(__assign({}, style), { backgroundColor: highlight.backgroundColor });
        }
        var createChildren = function (fragment) {
            var data = fragment.data;
            if (fragment.highlight) {
                return React.createElement("mark", { className: tree_decorator_1.TreeDecoration.Styles.CAPTION_HIGHLIGHT_CLASS, style: style }, data);
            }
            else {
                return data;
            }
        };
        return tree_decorator_1.TreeDecoration.CaptionHighlight.split(caption, highlight).map(createChildren);
    };
    /**
     * Decorate the tree caption.
     * @param node the tree node.
     * @param attrs the additional attributes.
     */
    TreeWidget.prototype.decorateCaption = function (node, attrs) {
        var _this = this;
        var style = this.getDecorationData(node, 'fontData')
            .filter(objects_1.notEmpty)
            .reverse()
            .map(function (fontData) { return _this.applyFontStyles({}, fontData); })
            .reduce(function (acc, current) { return (__assign(__assign({}, acc), current)); }, {});
        return __assign(__assign({}, attrs), { style: style });
    };
    /**
     * Determine if the tree node contains trailing suffixes.
     * @param node the tree node.
     *
     * @returns `true` if the tree node contains trailing suffices.
     */
    TreeWidget.prototype.hasTrailingSuffixes = function (node) {
        return this.getDecorationData(node, 'captionSuffixes').filter(objects_1.notEmpty).reduce(function (acc, current) { return acc.concat(current); }, []).length > 0;
    };
    /**
     * Apply font styles to the tree.
     * @param original the original css properties.
     * @param fontData the optional `fontData`.
     */
    TreeWidget.prototype.applyFontStyles = function (original, fontData) {
        if (fontData === undefined) {
            return original;
        }
        var modified = original;
        var color = fontData.color, style = fontData.style;
        if (color) {
            modified = __assign(__assign({}, modified), { color: color });
        }
        if (style) {
            (Array.isArray(style) ? style : [style]).forEach(function (s) {
                switch (style) {
                    case 'bold':
                        modified = __assign(__assign({}, modified), { fontWeight: style });
                        break;
                    case 'normal': // Fall through.
                    case 'oblique': // Fall through.
                    case 'italic':
                        modified = __assign(__assign({}, modified), { fontStyle: style });
                        break;
                    case 'underline': // Fall through.
                    case 'line-through':
                        modified = __assign(__assign({}, modified), { textDecoration: style });
                        break;
                    default:
                        throw new Error("Unexpected font style: " + style + ".");
                }
            });
        }
        return modified;
    };
    /**
     * Render caption affixes for the given tree node.
     * @param node the tree node.
     * @param props the node properties.
     * @param affixKey the affix key.
     */
    TreeWidget.prototype.renderCaptionAffixes = function (node, props, affixKey) {
        var suffix = affixKey === 'captionSuffixes';
        var affixClass = suffix ? tree_decorator_1.TreeDecoration.Styles.CAPTION_SUFFIX_CLASS : tree_decorator_1.TreeDecoration.Styles.CAPTION_PREFIX_CLASS;
        var classes = [exports.TREE_NODE_SEGMENT_CLASS, affixClass];
        var affixes = this.getDecorationData(node, affixKey).filter(objects_1.notEmpty).reduce(function (acc, current) { return acc.concat(current); }, []);
        var children = [];
        for (var i = 0; i < affixes.length; i++) {
            var affix = affixes[i];
            if (suffix && i === affixes.length - 1) {
                classes.push(exports.TREE_NODE_SEGMENT_GROW_CLASS);
            }
            var style = this.applyFontStyles({}, affix.fontData);
            var className = classes.join(' ');
            var key = node.id + '_' + i;
            var attrs = {
                className: className,
                style: style,
                key: key
            };
            children.push(React.createElement('div', attrs, affix.data));
        }
        return React.createElement(React.Fragment, null, children);
    };
    /**
     * Decorate the tree node icon.
     * @param node the tree node.
     * @param icon the icon.
     */
    TreeWidget.prototype.decorateIcon = function (node, icon) {
        var _this = this;
        // eslint-disable-next-line no-null/no-null
        if (icon === null) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        var overlayIcons = [];
        new Map(this.getDecorationData(node, 'iconOverlay').reverse().filter(objects_1.notEmpty)
            .map(function (overlay) { return [overlay.position, overlay]; }))
            .forEach(function (overlay, position) {
            var iconClasses = [tree_decorator_1.TreeDecoration.Styles.DECORATOR_SIZE_CLASS, tree_decorator_1.TreeDecoration.IconOverlayPosition.getStyle(position)];
            var style = function (color) { return color === undefined ? {} : { color: color }; };
            if (overlay.background) {
                overlayIcons.push(React.createElement("span", { key: node.id + 'bg', className: _this.getIconClass(overlay.background.shape, iconClasses), style: style(overlay.background.color) }));
            }
            var overlayIcon = overlay.icon || overlay.iconClass;
            overlayIcons.push(React.createElement("span", { key: node.id, className: _this.getIconClass(overlayIcon, iconClasses), style: style(overlay.color) }));
        });
        if (overlayIcons.length > 0) {
            return React.createElement("div", { className: tree_decorator_1.TreeDecoration.Styles.ICON_WRAPPER_CLASS },
                icon,
                overlayIcons);
        }
        return icon;
    };
    /**
     * Render the tree node tail decorations.
     * @param node the tree node.
     * @param props the node properties.
     */
    TreeWidget.prototype.renderTailDecorations = function (node, props) {
        var _this = this;
        return React.createElement(React.Fragment, null, this.getDecorationData(node, 'tailDecorations').filter(objects_1.notEmpty).reduce(function (acc, current) { return acc.concat(current); }, []).map(function (decoration, index) {
            var tooltip = decoration.tooltip;
            var _a = decoration, data = _a.data, fontData = _a.fontData;
            var color = decoration.color;
            var icon = decoration.icon || decoration.iconClass;
            var className = [exports.TREE_NODE_SEGMENT_CLASS, exports.TREE_NODE_TAIL_CLASS].join(' ');
            var style = fontData ? _this.applyFontStyles({}, fontData) : color ? { color: color } : undefined;
            var content = data ? data : icon ? React.createElement("span", { key: node.id + 'icon' + index, className: _this.getIconClass(icon) }) : '';
            return React.createElement("div", { key: node.id + className + index, className: className, style: style, title: tooltip }, content);
        }));
    };
    /**
     * Determine the classes to use for an icon
     * - Assumes a Font Awesome name when passed a single string, otherwise uses the passed string array
     * @param iconName the icon name or list of icon names.
     * @param additionalClasses additional CSS classes.
     *
     * @returns the icon class name.
     */
    TreeWidget.prototype.getIconClass = function (iconName, additionalClasses) {
        if (additionalClasses === void 0) { additionalClasses = []; }
        var iconClass = (typeof iconName === 'string') ? ['a', 'fa', "fa-" + iconName] : ['a'].concat(iconName);
        return iconClass.concat(additionalClasses).join(' ');
    };
    /**
     * Render the node given the tree node and node properties.
     * @param node the tree node.
     * @param props the node properties.
     */
    TreeWidget.prototype.renderNode = function (node, props) {
        if (!tree_1.TreeNode.isVisible(node)) {
            return undefined;
        }
        var attributes = this.createNodeAttributes(node, props);
        var content = React.createElement("div", { className: exports.TREE_NODE_CONTENT_CLASS },
            this.renderExpansionToggle(node, props),
            this.decorateIcon(node, this.renderIcon(node, props)),
            this.renderCaptionAffixes(node, props, 'captionPrefixes'),
            this.renderCaption(node, props),
            this.renderCaptionAffixes(node, props, 'captionSuffixes'),
            this.renderTailDecorations(node, props));
        return React.createElement('div', attributes, content);
    };
    /**
     * Create node attributes for the tree node given the node properties.
     * @param node the tree node.
     * @param props the node properties.
     */
    TreeWidget.prototype.createNodeAttributes = function (node, props) {
        var _this = this;
        var className = this.createNodeClassNames(node, props).join(' ');
        var style = this.createNodeStyle(node, props);
        return {
            className: className,
            style: style,
            onClick: function (event) { return _this.handleClickEvent(node, event); },
            onDoubleClick: function (event) { return _this.handleDblClickEvent(node, event); },
            onContextMenu: function (event) { return _this.handleContextMenuEvent(node, event); }
        };
    };
    /**
     * Create the node class names.
     * @param node the tree node.
     * @param props the node properties.
     *
     * @returns the list of tree node class names.
     */
    TreeWidget.prototype.createNodeClassNames = function (node, props) {
        var classNames = [exports.TREE_NODE_CLASS];
        if (tree_1.CompositeTreeNode.is(node)) {
            classNames.push(exports.COMPOSITE_TREE_NODE_CLASS);
        }
        if (this.isExpandable(node)) {
            classNames.push(exports.EXPANDABLE_TREE_NODE_CLASS);
        }
        if (tree_selection_1.SelectableTreeNode.isSelected(node)) {
            classNames.push(widgets_1.SELECTED_CLASS);
        }
        if (tree_selection_1.SelectableTreeNode.hasFocus(node)) {
            classNames.push(widgets_1.FOCUS_CLASS);
        }
        return classNames;
    };
    /**
     * Get the default node style.
     * @param node the tree node.
     * @param props the node properties.
     *
     * @returns the CSS properties if available.
     */
    TreeWidget.prototype.getDefaultNodeStyle = function (node, props) {
        var paddingLeft = this.getPaddingLeft(node, props) + 'px';
        return { paddingLeft: paddingLeft };
    };
    TreeWidget.prototype.getPaddingLeft = function (node, props) {
        return props.depth * this.props.leftPadding + (this.needsExpansionTogglePadding(node) ? this.props.expansionTogglePadding : 0);
    };
    /**
     * If the node is a composite, a toggle will be rendered.
     * Otherwise we need to add the width and the left, right padding => 18px
     */
    TreeWidget.prototype.needsExpansionTogglePadding = function (node) {
        return !this.isExpandable(node);
    };
    /**
     * Create the tree node style.
     * @param node the tree node.
     * @param props the node properties.
     */
    TreeWidget.prototype.createNodeStyle = function (node, props) {
        return this.decorateNodeStyle(node, this.getDefaultNodeStyle(node, props));
    };
    /**
     * Decorate the node style.
     * @param node the tree node.
     * @param style the optional CSS properties.
     *
     * @returns the CSS styles if available.
     */
    TreeWidget.prototype.decorateNodeStyle = function (node, style) {
        var backgroundColor = this.getDecorationData(node, 'backgroundColor').filter(objects_1.notEmpty).shift();
        if (backgroundColor) {
            style = __assign(__assign({}, (style || {})), { backgroundColor: backgroundColor });
        }
        return style;
    };
    /**
     * Determine if the tree node is expandable.
     * @param node the tree node.
     *
     * @returns `true` if the tree node is expandable.
     */
    TreeWidget.prototype.isExpandable = function (node) {
        return tree_expansion_1.ExpandableTreeNode.is(node);
    };
    /**
     * Get the tree node decorations.
     * @param node the tree node.
     *
     * @returns the list of tree decoration data.
     */
    TreeWidget.prototype.getDecorations = function (node) {
        var decorations = [];
        if (tree_decorator_1.DecoratedTreeNode.is(node)) {
            decorations.push(node.decorationData);
        }
        if (this.decorations.has(node.id)) {
            decorations.push.apply(decorations, __spread(this.decorations.get(node.id)));
        }
        return decorations.sort(tree_decorator_1.TreeDecoration.Data.comparePriority);
    };
    /**
     * Get the tree decoration data for the given key.
     * @param node the tree node.
     * @param key the tree decoration data key.
     *
     * @returns the tree decoration data at the given key.
     */
    TreeWidget.prototype.getDecorationData = function (node, key) {
        return this.getDecorations(node).filter(function (data) { return data[key] !== undefined; }).map(function (data) { return data[key]; }).filter(objects_1.notEmpty);
    };
    /**
     * Get the scroll container.
     */
    TreeWidget.prototype.getScrollContainer = function () {
        var _this = this;
        this.toDisposeOnDetach.push(common_1.Disposable.create(function () {
            var _a = _this.node, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft;
            _this.lastScrollState = { scrollTop: scrollTop, scrollLeft: scrollLeft };
        }));
        if (this.lastScrollState) {
            var _a = this.lastScrollState, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft;
            this.node.scrollTop = scrollTop;
            this.node.scrollLeft = scrollLeft;
        }
        return this.node;
    };
    TreeWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        var up = [
            keys_1.Key.ARROW_UP,
            keys_1.KeyCode.createKeyCode({ first: keys_1.Key.ARROW_UP, modifiers: [keys_1.KeyModifier.Shift] })
        ];
        var down = [
            keys_1.Key.ARROW_DOWN,
            keys_1.KeyCode.createKeyCode({ first: keys_1.Key.ARROW_DOWN, modifiers: [keys_1.KeyModifier.Shift] })
        ];
        if (this.props.search) {
            if (this.searchBox.isAttached) {
                widgets_1.Widget.detach(this.searchBox);
            }
            widgets_1.Widget.attach(this.searchBox, this.node.parentElement);
            this.addKeyListener(this.node, this.searchBox.keyCodePredicate.bind(this.searchBox), this.searchBox.handle.bind(this.searchBox));
            this.toDisposeOnDetach.push(common_1.Disposable.create(function () {
                widgets_1.Widget.detach(_this.searchBox);
            }));
        }
        _super.prototype.onAfterAttach.call(this, msg);
        this.addKeyListener(this.node, keys_1.Key.ARROW_LEFT, function (event) { return _this.handleLeft(event); });
        this.addKeyListener(this.node, keys_1.Key.ARROW_RIGHT, function (event) { return _this.handleRight(event); });
        this.addKeyListener(this.node, up, function (event) { return _this.handleUp(event); });
        this.addKeyListener(this.node, down, function (event) { return _this.handleDown(event); });
        this.addKeyListener(this.node, keys_1.Key.ENTER, function (event) { return _this.handleEnter(event); });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.addEventListener(this.node, 'ps-scroll-y', function (e) {
            if (_this.view && _this.view.list && _this.view.list.Grid) {
                var scrollTop = e.target.scrollTop;
                _this.view.list.Grid.handleScrollEvent({ scrollTop: scrollTop });
            }
        });
        this.addEventListener(this.node, 'focus', function () { return _this.doFocus(); });
    };
    /**
     * Handle the `left arrow` keyboard event.
     * @param event the `left arrow` keyboard event.
     */
    TreeWidget.prototype.handleLeft = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.props.multiSelect && (this.hasCtrlCmdMask(event) || this.hasShiftMask(event))) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.model.collapseNode()];
                    case 1:
                        if (!(_a.sent())) {
                            this.model.selectParent();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle the `right arrow` keyboard event.
     * @param event the `right arrow` keyboard event.
     */
    TreeWidget.prototype.handleRight = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.props.multiSelect && (this.hasCtrlCmdMask(event) || this.hasShiftMask(event))) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.model.expandNode()];
                    case 1:
                        if (!(_a.sent())) {
                            this.model.selectNextNode();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle the `up arrow` keyboard event.
     * @param event the `up arrow` keyboard event.
     */
    TreeWidget.prototype.handleUp = function (event) {
        if (!!this.props.multiSelect && this.hasShiftMask(event)) {
            this.model.selectPrevNode(tree_selection_1.TreeSelection.SelectionType.RANGE);
        }
        else {
            this.model.selectPrevNode();
        }
    };
    /**
     * Handle the `down arrow` keyboard event.
     * @param event the `down arrow` keyboard event.
     */
    TreeWidget.prototype.handleDown = function (event) {
        if (!!this.props.multiSelect && this.hasShiftMask(event)) {
            this.model.selectNextNode(tree_selection_1.TreeSelection.SelectionType.RANGE);
        }
        else {
            this.model.selectNextNode();
        }
    };
    /**
     * Handle the `enter key` keyboard event.
     * - `enter` opens the tree node.
     * @param event the `enter key` keyboard event.
     */
    TreeWidget.prototype.handleEnter = function (event) {
        this.model.openNode();
    };
    /**
     * Handle the single-click mouse event.
     * @param node the tree node if available.
     * @param event the mouse single-click event.
     */
    TreeWidget.prototype.handleClickEvent = function (node, event) {
        if (node) {
            if (!!this.props.multiSelect) {
                var shiftMask = this.hasShiftMask(event);
                var ctrlCmdMask = this.hasCtrlCmdMask(event);
                if (tree_selection_1.SelectableTreeNode.is(node)) {
                    if (shiftMask) {
                        this.model.selectRange(node);
                    }
                    else if (ctrlCmdMask) {
                        this.model.toggleNode(node);
                    }
                    else {
                        this.model.selectNode(node);
                    }
                }
                if (this.isExpandable(node) && !shiftMask && !ctrlCmdMask) {
                    this.model.toggleNodeExpansion(node);
                }
            }
            else {
                if (tree_selection_1.SelectableTreeNode.is(node)) {
                    this.model.selectNode(node);
                }
                if (this.isExpandable(node) && !this.hasCtrlCmdMask(event) && !this.hasShiftMask(event)) {
                    this.model.toggleNodeExpansion(node);
                }
            }
            event.stopPropagation();
        }
    };
    /**
     * Handle the double-click mouse event.
     * @param node the tree node if available.
     * @param event the double-click mouse event.
     */
    TreeWidget.prototype.handleDblClickEvent = function (node, event) {
        this.model.openNode(node);
        event.stopPropagation();
    };
    /**
     * Handle the context menu click event.
     * - The context menu click event is triggered by the right-click.
     * @param node the tree node if available.
     * @param event the right-click mouse event.
     */
    TreeWidget.prototype.handleContextMenuEvent = function (node, event) {
        var _this = this;
        if (tree_selection_1.SelectableTreeNode.is(node)) {
            // Keep the selection for the context menu, if the widget support multi-selection and the right click happens on an already selected node.
            if (!this.props.multiSelect || !node.selected) {
                var type = !!this.props.multiSelect && this.hasCtrlCmdMask(event) ? tree_selection_1.TreeSelection.SelectionType.TOGGLE : tree_selection_1.TreeSelection.SelectionType.DEFAULT;
                this.model.addSelection({ node: node, type: type });
            }
            var contextMenuPath_1 = this.props.contextMenuPath;
            if (contextMenuPath_1) {
                var _a = event.nativeEvent, x_1 = _a.x, y_1 = _a.y;
                var args_1 = this.toContextMenuArgs(node);
                this.onRender.push(common_1.Disposable.create(function () {
                    return setTimeout(function () { return _this.contextMenuRenderer.render({
                        menuPath: contextMenuPath_1,
                        anchor: { x: x_1, y: y_1 },
                        args: args_1
                    }); });
                }));
            }
            this.update();
        }
        event.stopPropagation();
        event.preventDefault();
    };
    /**
     * Convert the tree node to context menu arguments.
     * @param node the selectable tree node.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TreeWidget.prototype.toContextMenuArgs = function (node) {
        return undefined;
    };
    /**
     * Determine if the tree modifier aware event has a `ctrlcmd` mask.
     * @param event the tree modifier aware event.
     *
     * @returns `true` if the tree modifier aware event contains the `ctrlcmd` mask.
     */
    TreeWidget.prototype.hasCtrlCmdMask = function (event) {
        var metaKey = event.metaKey, ctrlKey = event.ctrlKey;
        return (os_1.isOSX && metaKey) || ctrlKey;
    };
    /**
     * Determine if the tree modifier aware event has a `shift` mask.
     * @param event the tree modifier aware event.
     *
     * @returns `true` if the tree modifier aware event contains the `shift` mask.
     */
    TreeWidget.prototype.hasShiftMask = function (event) {
        // Ctrl/Cmd mask overrules the Shift mask.
        if (this.hasCtrlCmdMask(event)) {
            return false;
        }
        return event.shiftKey;
    };
    /**
     * Deflate the tree node for storage.
     * @param node the tree node.
     */
    TreeWidget.prototype.deflateForStorage = function (node) {
        var e_3, _a;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var copy = Object.assign({}, node);
        if (copy.parent) {
            delete copy.parent;
        }
        if ('previousSibling' in copy) {
            delete copy.previousSibling;
        }
        if ('nextSibling' in copy) {
            delete copy.nextSibling;
        }
        if (tree_1.CompositeTreeNode.is(node)) {
            copy.children = [];
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    copy.children.push(this.deflateForStorage(child));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return copy;
    };
    /**
     * Inflate the tree node from storage.
     * @param node the tree node.
     * @param parent the optional tree node.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TreeWidget.prototype.inflateFromStorage = function (node, parent) {
        var e_4, _a;
        if (node.selected) {
            node.selected = false;
        }
        if (parent) {
            node.parent = parent;
        }
        if (Array.isArray(node.children)) {
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    this.inflateFromStorage(child, node);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return node;
    };
    /**
     * Store the tree state.
     */
    TreeWidget.prototype.storeState = function () {
        var decorations = this.decoratorService.deflateDecorators(this.decorations);
        var state = {
            decorations: decorations
        };
        if (this.model.root) {
            state = __assign(__assign({}, state), { root: this.deflateForStorage(this.model.root), model: this.model.storeState() });
        }
        return state;
    };
    /**
     * Restore the state.
     * @param oldState the old state object.
     */
    TreeWidget.prototype.restoreState = function (oldState) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var _a = oldState, root = _a.root, decorations = _a.decorations, model = _a.model;
        if (root) {
            this.model.root = this.inflateFromStorage(root);
        }
        if (decorations) {
            this.decorations = this.decoratorService.inflateDecorators(decorations);
        }
        if (model) {
            this.model.restoreState(model);
        }
    };
    TreeWidget.prototype.toNodeIcon = function (node) {
        return this.labelProvider.getIcon(node);
    };
    TreeWidget.prototype.toNodeName = function (node) {
        return this.labelProvider.getName(node);
    };
    TreeWidget.prototype.toNodeDescription = function (node) {
        return this.labelProvider.getLongName(node);
    };
    var TreeWidget_1;
    __decorate([
        inversify_1.inject(tree_decorator_1.TreeDecoratorService),
        __metadata("design:type", Object)
    ], TreeWidget.prototype, "decoratorService", void 0);
    __decorate([
        inversify_1.inject(tree_search_1.TreeSearch),
        __metadata("design:type", tree_search_1.TreeSearch)
    ], TreeWidget.prototype, "treeSearch", void 0);
    __decorate([
        inversify_1.inject(search_box_1.SearchBoxFactory),
        __metadata("design:type", Function)
    ], TreeWidget.prototype, "searchBoxFactory", void 0);
    __decorate([
        inversify_1.inject(common_1.SelectionService),
        __metadata("design:type", common_1.SelectionService)
    ], TreeWidget.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], TreeWidget.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeWidget.prototype, "init", null);
    TreeWidget = TreeWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.TreeProps)),
        __param(1, inversify_1.inject(tree_model_1.TreeModel)),
        __param(2, inversify_1.inject(context_menu_renderer_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], TreeWidget);
    return TreeWidget;
}(react_widget_1.ReactWidget));
exports.TreeWidget = TreeWidget;
(function (TreeWidget) {
    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.cache = new react_virtualized_1.CellMeasurerCache({
                fixedWidth: true
            });
            _this.renderTreeRow = function (_a) {
                var key = _a.key, index = _a.index, style = _a.style, parent = _a.parent;
                var row = _this.props.rows[index];
                return React.createElement(react_virtualized_1.CellMeasurer, { cache: _this.cache, columnIndex: 0, key: key, parent: parent, rowIndex: index },
                    React.createElement("div", { key: key, style: style }, _this.props.renderNodeRow(row)));
            };
            return _this;
        }
        View.prototype.render = function () {
            var _this = this;
            var _a = this.props, rows = _a.rows, width = _a.width, height = _a.height, scrollToRow = _a.scrollToRow, handleScroll = _a.handleScroll;
            return React.createElement(react_virtualized_1.List, { ref: function (list) { return _this.list = (list || undefined); }, width: width, height: height, rowCount: rows.length, rowHeight: this.cache.rowHeight, rowRenderer: this.renderTreeRow, scrollToIndex: scrollToRow, onScroll: handleScroll, tabIndex: -1, style: {
                    overflowY: 'visible',
                    overflowX: 'visible'
                } });
        };
        return View;
    }(React.Component));
    TreeWidget.View = View;
})(TreeWidget = exports.TreeWidget || (exports.TreeWidget = {}));
exports.TreeWidget = TreeWidget;
//# sourceMappingURL=tree-widget.js.map
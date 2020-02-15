"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var inversify_1 = require("inversify");
var widgets_1 = require("@phosphor/widgets");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/languages/lib/browser");
var editor_manager_1 = require("@theia/editor/lib/browser/editor-manager");
var context_menu_renderer_1 = require("@theia/core/lib/browser/context-menu-renderer");
var tree_widget_1 = require("@theia/core/lib/browser/tree/tree-widget");
var typehierarchy_tree_model_1 = require("./typehierarchy-tree-model");
var typehierarchy_tree_1 = require("./typehierarchy-tree");
var TypeHierarchyTreeWidget = /** @class */ (function (_super) {
    __extends(TypeHierarchyTreeWidget, _super);
    function TypeHierarchyTreeWidget(props, model, contextMenuRenderer, editorManager) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.editorManager = editorManager;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.icons = new Map(Array.from(Object.keys(browser_1.SymbolKind)).map(function (key) { return [browser_1.SymbolKind[key], key.toLocaleLowerCase()]; }));
        _this.id = TypeHierarchyTreeWidget_1.WIDGET_ID;
        _this.title.label = TypeHierarchyTreeWidget_1.WIDGET_LABEL;
        _this.title.caption = TypeHierarchyTreeWidget_1.WIDGET_LABEL;
        _this.addClass(TypeHierarchyTreeWidget_1.Styles.TYPE_HIERARCHY_TREE_CLASS);
        _this.title.closable = true;
        _this.title.iconClass = 'fa fa-sitemap';
        _this.toDispose.push(_this.model.onSelectionChanged(function (selection) {
            var node = selection[0];
            if (node) {
                _this.openEditor(node, true);
            }
        }));
        _this.toDispose.push(_this.model.onOpenNode(function (node) { return _this.openEditor(node); }));
        return _this;
    }
    TypeHierarchyTreeWidget_1 = TypeHierarchyTreeWidget;
    /**
     * Initializes the widget with the new input.
     */
    TypeHierarchyTreeWidget.prototype.initialize = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.initialize(options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * See: `TreeWidget#renderIcon`.
     */
    TypeHierarchyTreeWidget.prototype.renderIcon = function (node) {
        if (typehierarchy_tree_1.TypeHierarchyTree.Node.is(node)) {
            return React.createElement("div", { className: 'symbol-icon ' + this.icons.get(node.item.kind) || 'unknown' });
        }
        return undefined;
    };
    /**
     * Opens up the node in the editor. On demand (`keepFocus`) it reveals the location in the editor.
     */
    TypeHierarchyTreeWidget.prototype.openEditor = function (node, keepFocus) {
        if (keepFocus === void 0) { keepFocus = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, selectionRange, uri, editorWidget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!typehierarchy_tree_1.TypeHierarchyTree.Node.is(node)) return [3 /*break*/, 2];
                        _a = node.item, selectionRange = _a.selectionRange, uri = _a.uri;
                        return [4 /*yield*/, this.editorManager.open(new uri_1.default(uri), {
                                mode: keepFocus ? 'reveal' : 'activate',
                                selection: browser_1.Range.create(selectionRange.start, selectionRange.end)
                            })];
                    case 1:
                        editorWidget = _b.sent();
                        if (editorWidget.parent instanceof widgets_1.DockPanel) {
                            editorWidget.parent.selectWidget(editorWidget);
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    var TypeHierarchyTreeWidget_1;
    TypeHierarchyTreeWidget = TypeHierarchyTreeWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(tree_widget_1.TreeProps)),
        __param(1, inversify_1.inject(typehierarchy_tree_model_1.TypeHierarchyTreeModel)),
        __param(2, inversify_1.inject(context_menu_renderer_1.ContextMenuRenderer)),
        __param(3, inversify_1.inject(editor_manager_1.EditorManager)),
        __metadata("design:paramtypes", [Object, typehierarchy_tree_model_1.TypeHierarchyTreeModel, Object, editor_manager_1.EditorManager])
    ], TypeHierarchyTreeWidget);
    return TypeHierarchyTreeWidget;
}(tree_widget_1.TreeWidget));
exports.TypeHierarchyTreeWidget = TypeHierarchyTreeWidget;
(function (TypeHierarchyTreeWidget) {
    TypeHierarchyTreeWidget.WIDGET_ID = 'theia-typehierarchy';
    TypeHierarchyTreeWidget.WIDGET_LABEL = 'Type Hierarchy';
    /**
     * CSS styles for the `Type Hierarchy` widget.
     */
    var Styles;
    (function (Styles) {
        Styles.TYPE_HIERARCHY_TREE_CLASS = 'theia-type-hierarchy-tree';
    })(Styles = TypeHierarchyTreeWidget.Styles || (TypeHierarchyTreeWidget.Styles = {}));
})(TypeHierarchyTreeWidget = exports.TypeHierarchyTreeWidget || (exports.TypeHierarchyTreeWidget = {}));
exports.TypeHierarchyTreeWidget = TypeHierarchyTreeWidget;
//# sourceMappingURL=typehierarchy-tree-widget.js.map
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
var inversify_1 = require("inversify");
var uuid_1 = require("uuid");
var uri_1 = require("@theia/core/lib/common/uri");
var editor_1 = require("@theia/editor/lib/browser/editor");
var tree_1 = require("@theia/core/lib/browser/tree");
var typehierarchy_protocol_1 = require("@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol");
var TypeHierarchyTree = /** @class */ (function (_super) {
    __extends(TypeHierarchyTree, _super);
    function TypeHierarchyTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeHierarchyTree_1 = TypeHierarchyTree;
    TypeHierarchyTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!TypeHierarchyTree_1.Node.is(parent)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ensureResolved(parent)];
                    case 1:
                        _a.sent();
                        if (parent.children.length === 0) {
                            delete parent.children;
                            delete parent.expanded;
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, parent.children.slice()];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    Object.defineProperty(TypeHierarchyTree.prototype, "direction", {
        /**
         * Returns with the direction of the type hierarchy attached to the root node. `undefined` if the root is not set.
         */
        get: function () {
            if (TypeHierarchyTree_1.RootNode.is(this.root)) {
                return this.root.direction;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Makes sure, the node and its children are resolved. Resolves it on demand.
     */
    TypeHierarchyTree.prototype.ensureResolved = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, service, direction_1, item, param, resolvedItem, items;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!node.resolved) return [3 /*break*/, 2];
                        _a = this, service = _a.service, direction_1 = _a.direction;
                        if (!(service && direction_1 !== undefined)) return [3 /*break*/, 2];
                        item = node.item;
                        param = {
                            item: item,
                            direction: direction_1,
                            resolve: 1
                        };
                        return [4 /*yield*/, service.resolve(param)];
                    case 1:
                        resolvedItem = _b.sent();
                        if (resolvedItem) {
                            node.resolved = true;
                            items = typehierarchy_protocol_1.TypeHierarchyDirection.Children === direction_1 ? resolvedItem.children : resolvedItem.parents;
                            if (items) {
                                node.children = items.map(function (child) { return TypeHierarchyTree_1.Node.create(child, direction_1, false); });
                            }
                            else {
                                node.children = [];
                            }
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    var TypeHierarchyTree_1;
    TypeHierarchyTree = TypeHierarchyTree_1 = __decorate([
        inversify_1.injectable()
    ], TypeHierarchyTree);
    return TypeHierarchyTree;
}(tree_1.TreeImpl));
exports.TypeHierarchyTree = TypeHierarchyTree;
(function (TypeHierarchyTree) {
    var RootNode;
    (function (RootNode) {
        function is(node) {
            if (Node.is(node) && 'direction' in node) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var direction = node.direction;
                return direction === typehierarchy_protocol_1.TypeHierarchyDirection.Children || direction === typehierarchy_protocol_1.TypeHierarchyDirection.Parents;
            }
            return false;
        }
        RootNode.is = is;
        function create(item, direction) {
            return __assign(__assign({}, Node.create(item, direction, true)), { direction: direction });
        }
        RootNode.create = create;
    })(RootNode = TypeHierarchyTree.RootNode || (TypeHierarchyTree.RootNode = {}));
    var Node;
    (function (Node) {
        function is(node) {
            if (!!node && 'resolved' in node && 'item' in node) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var _a = node, resolved = _a.resolved, item = _a.item;
                return typeof resolved === 'boolean' && !!item;
            }
            return false;
        }
        Node.is = is;
        function create(item, direction, resolved) {
            if (resolved === void 0) { resolved = true; }
            var items = typehierarchy_protocol_1.TypeHierarchyDirection.Children === direction ? item.children : item.parents;
            if (items && items.length > 0) {
                // If the server sent more levels than requested, use them.
                resolved = true;
            }
            var node = {
                id: uuid_1.v4(),
                name: item.name,
                description: item.detail,
                parent: undefined,
                location: editor_1.Location.create(item.uri, item.selectionRange),
                resolved: resolved,
                children: items ? items.map(function (child) { return create(child, direction, false); }) : [],
                expanded: false,
                visible: true,
                selected: false,
                kind: item.kind,
                decorationData: decorationData(item, direction),
                item: item
            };
            // Trick: if the node is `resolved` and have zero `children`, make the node non-expandable.
            if (resolved && node.children.length === 0) {
                delete node.expanded;
            }
            return node;
        }
        Node.create = create;
        function decorationData(item, direction) {
            var captionSuffixes = [{
                    data: new uri_1.default(item.uri).displayName,
                    fontData: {
                        color: 'var(--theia-descriptionForeground)',
                    }
                }];
            if (item.detail) {
                captionSuffixes.unshift({
                    data: item.detail,
                    fontData: {
                        color: 'var(--theia-list-highlightForeground)',
                        style: 'italic'
                    }
                });
            }
            var data = "" + (typehierarchy_protocol_1.TypeHierarchyDirection.Children === direction ? '▼' : '▲');
            var color = "var(" + (typehierarchy_protocol_1.TypeHierarchyDirection.Children === direction ? '--theia-errorForeground' : '--theia-successBackground') + ")";
            return {
                captionSuffixes: captionSuffixes,
                captionPrefixes: [{
                        data: data,
                        fontData: {
                            color: color,
                            style: 'bold'
                        }
                    }]
            };
        }
    })(Node = TypeHierarchyTree.Node || (TypeHierarchyTree.Node = {}));
})(TypeHierarchyTree = exports.TypeHierarchyTree || (exports.TypeHierarchyTree = {}));
exports.TypeHierarchyTree = TypeHierarchyTree;
//# sourceMappingURL=typehierarchy-tree.js.map
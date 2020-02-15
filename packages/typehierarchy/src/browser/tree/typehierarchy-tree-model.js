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
var tree_model_1 = require("@theia/core/lib/browser/tree/tree-model");
var typehierarchy_protocol_1 = require("@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol");
var typehierarchy_service_1 = require("../typehierarchy-service");
var typehierarchy_tree_1 = require("./typehierarchy-tree");
var TypeHierarchyTreeModel = /** @class */ (function (_super) {
    __extends(TypeHierarchyTreeModel, _super);
    function TypeHierarchyTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeHierarchyTreeModel.prototype.doOpenNode = function (node) {
        // do nothing (in particular do not expand the node)
    };
    /**
     * Initializes the tree by calculating and setting a new tree root node.
     */
    TypeHierarchyTreeModel.prototype.initialize = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var location, languageId, direction, service, params, symbol, root;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tree.root = undefined;
                        this.tree.service = undefined;
                        location = options.location, languageId = options.languageId, direction = options.direction;
                        if (!(languageId && location)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.typeHierarchyServiceProvider.get(languageId)];
                    case 1:
                        service = _a.sent();
                        if (!service) return [3 /*break*/, 3];
                        params = {
                            textDocument: {
                                uri: location.uri
                            },
                            position: location.range.start,
                            direction: direction,
                            resolve: 1
                        };
                        return [4 /*yield*/, service.get(params)];
                    case 2:
                        symbol = _a.sent();
                        if (symbol) {
                            root = typehierarchy_tree_1.TypeHierarchyTree.RootNode.create(symbol, direction);
                            root.expanded = true;
                            this.tree.root = root;
                            this.tree.service = service;
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * If the tree root is set, it resets it with the inverse type hierarchy direction.
     */
    TypeHierarchyTreeModel.prototype.flipDirection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var root, service, direction, item, uri, selectionRange, location_1;
            return __generator(this, function (_a) {
                root = this.tree.root;
                service = this.tree.service;
                if (typehierarchy_tree_1.TypeHierarchyTree.RootNode.is(root) && !!service) {
                    direction = root.direction, item = root.item;
                    uri = item.uri, selectionRange = item.selectionRange;
                    location_1 = {
                        uri: uri,
                        range: selectionRange
                    };
                    this.initialize({
                        direction: direction === typehierarchy_protocol_1.TypeHierarchyDirection.Children ? typehierarchy_protocol_1.TypeHierarchyDirection.Parents : typehierarchy_protocol_1.TypeHierarchyDirection.Children,
                        location: location_1,
                        languageId: service.languageId
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(typehierarchy_service_1.TypeHierarchyServiceProvider),
        __metadata("design:type", typehierarchy_service_1.TypeHierarchyServiceProvider)
    ], TypeHierarchyTreeModel.prototype, "typeHierarchyServiceProvider", void 0);
    TypeHierarchyTreeModel = __decorate([
        inversify_1.injectable()
    ], TypeHierarchyTreeModel);
    return TypeHierarchyTreeModel;
}(tree_model_1.TreeModelImpl));
exports.TypeHierarchyTreeModel = TypeHierarchyTreeModel;
//# sourceMappingURL=typehierarchy-tree-model.js.map
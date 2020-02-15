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
var disposable_1 = require("../../common/disposable");
var event_1 = require("../../common/event");
var tree_1 = require("./tree");
var fuzzy_search_1 = require("./fuzzy-search");
var tree_iterator_1 = require("./tree-iterator");
var label_provider_1 = require("../label-provider");
var TreeSearch = /** @class */ (function () {
    function TreeSearch() {
        this.disposables = new disposable_1.DisposableCollection();
        this.filteredNodesEmitter = new event_1.Emitter();
        this._filterResult = [];
        this._filteredNodes = [];
    }
    TreeSearch.prototype.init = function () {
        this.disposables.push(this.filteredNodesEmitter);
    };
    TreeSearch.prototype.getHighlights = function () {
        var _this = this;
        return new Map(this._filterResult.map(function (m) { return [m.item.id, _this.toCaptionHighlight(m)]; }));
    };
    /**
     * Resolves to all the visible tree nodes that match the search pattern.
     */
    TreeSearch.prototype.filter = function (pattern) {
        return __awaiter(this, void 0, void 0, function () {
            var root, items, transform, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        root = this.tree.root;
                        if (!pattern || !root) {
                            this._filterResult = [];
                            this._filteredNodes = [];
                            this.fireFilteredNodesChanged(this._filteredNodes);
                            return [2 /*return*/, []];
                        }
                        items = __spread(new tree_iterator_1.TopDownTreeIterator(root, { pruneCollapsed: true }));
                        transform = function (node) { return _this.labelProvider.getName(node); };
                        _a = this;
                        return [4 /*yield*/, this.fuzzySearch.filter({
                                items: items,
                                pattern: pattern,
                                transform: transform
                            })];
                    case 1:
                        _a._filterResult = _b.sent();
                        this._filteredNodes = this._filterResult.map(function (match) { return match.item; });
                        this.fireFilteredNodesChanged(this._filteredNodes);
                        return [2 /*return*/, this._filteredNodes.slice()];
                }
            });
        });
    };
    Object.defineProperty(TreeSearch.prototype, "filteredNodes", {
        /**
         * Returns with the filtered nodes after invoking the `filter` method.
         */
        get: function () {
            return this._filteredNodes.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeSearch.prototype, "onFilteredNodesChanged", {
        /**
         * Event that is fired when the filtered nodes have been changed.
         */
        get: function () {
            return this.filteredNodesEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    TreeSearch.prototype.dispose = function () {
        this.disposables.dispose();
    };
    TreeSearch.prototype.fireFilteredNodesChanged = function (nodes) {
        this.filteredNodesEmitter.fire(nodes);
    };
    TreeSearch.prototype.toCaptionHighlight = function (match) {
        return {
            ranges: match.ranges.map(this.mapRange.bind(this))
        };
    };
    TreeSearch.prototype.mapRange = function (range) {
        var offset = range.offset, length = range.length;
        return {
            offset: offset,
            length: length
        };
    };
    __decorate([
        inversify_1.inject(tree_1.Tree),
        __metadata("design:type", Object)
    ], TreeSearch.prototype, "tree", void 0);
    __decorate([
        inversify_1.inject(fuzzy_search_1.FuzzySearch),
        __metadata("design:type", fuzzy_search_1.FuzzySearch)
    ], TreeSearch.prototype, "fuzzySearch", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], TreeSearch.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeSearch.prototype, "init", null);
    TreeSearch = __decorate([
        inversify_1.injectable()
    ], TreeSearch);
    return TreeSearch;
}());
exports.TreeSearch = TreeSearch;
//# sourceMappingURL=tree-search.js.map
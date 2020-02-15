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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var marker_manager_1 = require("./marker-manager");
var selection_1 = require("@theia/core/lib/common/selection");
var uri_1 = require("@theia/core/lib/common/uri");
var problem_selection_1 = require("./problem/problem-selection");
exports.MarkerOptions = Symbol('MarkerOptions');
var MarkerTree = /** @class */ (function (_super) {
    __extends(MarkerTree, _super);
    function MarkerTree(markerManager, markerOptions) {
        var _this = _super.call(this) || this;
        _this.markerManager = markerManager;
        _this.markerOptions = markerOptions;
        _this.toDispose.push(markerManager.onDidChangeMarkers(function (uri) { return _this.refreshMarkerInfo(uri); }));
        _this.root = {
            visible: false,
            id: 'theia-' + markerOptions.kind + '-marker-widget',
            name: 'MarkerTree',
            kind: markerOptions.kind,
            children: [],
            parent: undefined
        };
        return _this;
    }
    MarkerTree.prototype.refreshMarkerInfo = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var id, existing, markers, node, children;
            return __generator(this, function (_a) {
                id = uri.toString();
                existing = this.getNode(id);
                markers = this.markerManager.findMarkers({ uri: uri });
                if (markers.length <= 0) {
                    if (MarkerInfoNode.is(existing)) {
                        browser_1.CompositeTreeNode.removeChild(existing.parent, existing);
                        this.removeNode(existing);
                        this.fireChanged();
                    }
                    return [2 /*return*/];
                }
                node = MarkerInfoNode.is(existing) ? existing : this.createMarkerInfo(id, uri);
                browser_1.CompositeTreeNode.addChild(node.parent, node);
                children = this.getMarkerNodes(node, markers);
                node.numberOfMarkers = markers.length;
                this.setChildren(node, children);
                return [2 /*return*/];
            });
        });
    };
    MarkerTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            var nodes, _a, _b, id, uri, existing, markers, node;
            var e_1, _c;
            return __generator(this, function (_d) {
                if (MarkerRootNode.is(parent)) {
                    nodes = [];
                    try {
                        for (_a = __values(this.markerManager.getUris()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            id = _b.value;
                            uri = new uri_1.default(id);
                            existing = this.getNode(id);
                            markers = this.markerManager.findMarkers({ uri: uri });
                            node = MarkerInfoNode.is(existing) ? existing : this.createMarkerInfo(id, uri);
                            node.children = this.getMarkerNodes(node, markers);
                            node.numberOfMarkers = node.children.length;
                            nodes.push(node);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [2 /*return*/, nodes];
                }
                return [2 /*return*/, _super.prototype.resolveChildren.call(this, parent)];
            });
        });
    };
    MarkerTree.prototype.createMarkerInfo = function (id, uri) {
        return {
            children: [],
            expanded: true,
            uri: uri,
            id: id,
            parent: this.root,
            selected: false,
            numberOfMarkers: 0
        };
    };
    MarkerTree.prototype.getMarkerNodes = function (parent, markers) {
        var _this = this;
        return markers.map(function (marker, index) {
            return _this.createMarkerNode(marker, index, parent);
        });
    };
    MarkerTree.prototype.createMarkerNode = function (marker, index, parent) {
        var id = parent.id + '_' + index;
        var existing = this.getNode(id);
        if (MarkerNode.is(existing)) {
            existing.marker = marker;
            return existing;
        }
        return {
            id: id,
            name: 'marker',
            parent: parent,
            selected: false,
            uri: parent.uri,
            marker: marker
        };
    };
    MarkerTree = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [marker_manager_1.MarkerManager, Object])
    ], MarkerTree);
    return MarkerTree;
}(browser_1.TreeImpl));
exports.MarkerTree = MarkerTree;
var MarkerNode;
(function (MarkerNode) {
    function is(node) {
        return selection_1.UriSelection.is(node) && browser_1.SelectableTreeNode.is(node) && problem_selection_1.ProblemSelection.is(node);
    }
    MarkerNode.is = is;
})(MarkerNode = exports.MarkerNode || (exports.MarkerNode = {}));
var MarkerInfoNode;
(function (MarkerInfoNode) {
    function is(node) {
        return browser_1.ExpandableTreeNode.is(node) && selection_1.UriSelection.is(node) && 'numberOfMarkers' in node;
    }
    MarkerInfoNode.is = is;
})(MarkerInfoNode = exports.MarkerInfoNode || (exports.MarkerInfoNode = {}));
var MarkerRootNode;
(function (MarkerRootNode) {
    function is(node) {
        return browser_1.CompositeTreeNode.is(node) && 'kind' in node;
    }
    MarkerRootNode.is = is;
})(MarkerRootNode = exports.MarkerRootNode || (exports.MarkerRootNode = {}));
//# sourceMappingURL=marker-tree.js.map
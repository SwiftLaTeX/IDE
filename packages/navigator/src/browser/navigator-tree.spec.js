"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/filesystem/lib/common");
var node_filesystem_1 = require("@theia/filesystem/lib/node/node-filesystem");
var browser_2 = require("@theia/filesystem/lib/browser");
var navigator_tree_1 = require("./navigator-tree");
var navigator_filter_1 = require("./navigator-filter");
var chai_1 = require("chai");
var uri_1 = require("@theia/core/lib/common/uri");
var sinon = require("sinon");
disableJSDOM();
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
var root;
var workspaceRootFolder;
var childA;
var childB;
/**
 * The setup function construct a navigator file tree depicted below:
 *
 * -- root (invisible root node)
 *   |__ workspaceRootFolder
 *      |__ childA
 *      |__ childB
 */
var setup = function () {
    root = { id: 'WorkspaceNodeId', name: 'WorkspaceNode', parent: undefined, children: [] };
    workspaceRootFolder = {
        parent: root,
        uri: new uri_1.default('file:///home/rootFolder'),
        selected: false, expanded: true, children: [], id: 'id_rootFolder', name: 'name_rootFolder',
        fileStat: { uri: 'file:///home/rootFolder', isDirectory: true, lastModification: 0 }
    };
    childA = { id: 'idA', name: 'nameA', parent: workspaceRootFolder };
    childB = { id: 'idB', name: 'nameB', parent: workspaceRootFolder };
    root.children = [workspaceRootFolder];
    workspaceRootFolder.children = [childA, childB];
};
describe('FileNavigatorTree', function () {
    var testContainer;
    var mockFileNavigatorFilter;
    var mockFilesystem;
    var mockLabelProvider;
    var mockFilterChangeEmitter = new core_1.Emitter();
    var mockLabelChangeEmitter = new core_1.Emitter();
    var navigatorTree;
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
    });
    after(function () {
        disableJSDOM();
    });
    beforeEach(function () {
        mockFileNavigatorFilter = sinon.createStubInstance(navigator_filter_1.FileNavigatorFilter);
        mockFilesystem = sinon.createStubInstance(node_filesystem_1.FileSystemNode);
        mockLabelProvider = sinon.createStubInstance(browser_1.LabelProvider);
        testContainer = new inversify_1.Container();
        testContainer.bind(navigator_tree_1.FileNavigatorTree).toSelf().inSingletonScope();
        testContainer.bind(navigator_filter_1.FileNavigatorFilter).toConstantValue(mockFileNavigatorFilter);
        testContainer.bind(common_1.FileSystem).toConstantValue(mockFilesystem);
        testContainer.bind(browser_1.LabelProvider).toConstantValue(mockLabelProvider);
        sinon.stub(mockFileNavigatorFilter, 'onFilterChanged').value(mockFilterChangeEmitter.event);
        sinon.stub(mockLabelProvider, 'onDidChange').value(mockLabelChangeEmitter.event);
        setup();
        navigatorTree = testContainer.get(navigator_tree_1.FileNavigatorTree);
    });
    it('should refresh the tree on filter gets changed', function () {
        var stubRefresh = sinon.stub(navigatorTree, 'refresh').callsFake(function () { });
        mockFilterChangeEmitter.fire(undefined);
        chai_1.expect(stubRefresh.called).to.be.true;
    });
    describe('resolveChildren() function', function () {
        it('should return the children of the parent node if it is the root node of workspace', function () { return __awaiter(void 0, void 0, void 0, function () {
            var children;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigatorTree.resolveChildren(root)];
                    case 1:
                        children = _a.sent();
                        chai_1.expect(children.length).to.eq(1);
                        chai_1.expect(children[0]).to.deep.eq(workspaceRootFolder);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return children filtered by FileNavigatorFilter', function () { return __awaiter(void 0, void 0, void 0, function () {
            var children;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        children = Promise.resolve([childA, childB]);
                        sinon.stub(browser_2.FileTree.prototype, 'resolveChildren').returns(children);
                        return [4 /*yield*/, navigatorTree.resolveChildren(workspaceRootFolder)];
                    case 1:
                        _a.sent();
                        chai_1.expect(mockFileNavigatorFilter.filter.calledWith(children)).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('createId() function', function () {
        it('should return the concatenation of root id + node uri', function () {
            var uri = new uri_1.default('file:///home/fileC');
            var ret = navigatorTree.createId(workspaceRootFolder, uri);
            chai_1.expect(ret).to.eq(workspaceRootFolder.id + ":" + uri.path.toString());
        });
    });
});
describe('WorkspaceNode', function () {
    describe('is() function', function () {
        it('should return true if the node is a CompositeTreeNode with the name of "WorkspaceNode", otherwise false', function () {
            chai_1.expect(navigator_tree_1.WorkspaceNode.is(undefined)).to.be.false;
            var noNode = { id: 'id', name: 'name', parent: undefined, children: [] };
            chai_1.expect(navigator_tree_1.WorkspaceNode.is(noNode)).to.be.false;
            // root of the entire navigator file tree
            chai_1.expect(navigator_tree_1.WorkspaceNode.is(root)).to.be.true;
            // tree node
            chai_1.expect(navigator_tree_1.WorkspaceNode.is(childA)).to.be.false;
        });
    });
    describe('createRoot() function', function () {
        it('should return a node with the name of "WorkspaceNode" and id of "WorkspaceNodeId"', function () {
            chai_1.expect(navigator_tree_1.WorkspaceNode.createRoot()).to.deep.eq({
                id: 'WorkspaceNodeId',
                name: 'WorkspaceNode',
                parent: undefined,
                children: [],
                visible: false,
                selected: false
            });
        });
    });
});
describe('WorkspaceRootNode', function () {
    describe('is() function', function () {
        it('should return false if the node is a DirNode with the parent of WorkspaceNode, otherwise false', function () {
            chai_1.expect(navigator_tree_1.WorkspaceRootNode.is(undefined)).to.be.false;
            chai_1.expect(navigator_tree_1.WorkspaceRootNode.is(workspaceRootFolder)).to.be.true;
            var noNode = {
                parent: { id: 'parentId', name: 'parentName', parent: undefined, children: [] },
                uri: new uri_1.default('file:///home/folderB'),
                selected: false, expanded: true, children: [], id: 'id', name: 'name',
                fileStat: { uri: 'file:///home/folderB', isDirectory: true, lastModification: 0 }
            };
            chai_1.expect(navigator_tree_1.WorkspaceRootNode.is(noNode)).to.be.false;
            chai_1.expect(navigator_tree_1.WorkspaceRootNode.is(childB)).to.be.false;
        });
    });
    describe('find() function', function () {
        it('should return the node itself if the node is a WorkspaceRootNode', function () {
            chai_1.expect(navigator_tree_1.WorkspaceRootNode.find(workspaceRootFolder)).to.deep.eq(workspaceRootFolder);
        });
        it('should return the ancestor of the node if the node itself is not a WorkspaceRootNode', function () {
            chai_1.expect(navigator_tree_1.WorkspaceRootNode.find(undefined)).to.be.undefined;
            chai_1.expect(navigator_tree_1.WorkspaceRootNode.find(childA)).to.deep.eq(workspaceRootFolder);
        });
    });
});
//# sourceMappingURL=navigator-tree.spec.js.map
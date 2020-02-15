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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var tree_selection_impl_1 = require("@theia/core/lib/browser/tree/tree-selection-impl");
var common_1 = require("@theia/filesystem/lib/common");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var node_filesystem_1 = require("@theia/filesystem/lib/node/node-filesystem");
var browser_2 = require("@theia/filesystem/lib/browser");
var browser_3 = require("@theia/workspace/lib/browser");
var navigator_tree_1 = require("./navigator-tree");
var navigator_model_1 = require("./navigator-model");
var test_1 = require("@theia/core/lib/browser/preferences/test");
var chai_1 = require("chai");
var uri_1 = require("@theia/core/lib/common/uri");
var sinon = require("sinon");
var frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
disableJSDOM();
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
var root;
var workspaceRootFolder;
var childA;
var childB;
var homeFolder;
var childC;
var folderA;
var folderB;
/**
 * The setup function construct a navigator file tree depicted below:
 *
 * -- root (invisible root node)
 *   |__ workspaceRootFolder
 *      |__ childA
 *      |__ childB
 *
 * The following nodes are not in the navigator file tree:
 *
 * -- homeFolder
 *   |__ childC
 *   |__ folderA
 *   |__ folderB
 */
var setup = function () {
    root = { id: 'WorkspaceNodeId', name: 'WorkspaceNode', parent: undefined, children: [] };
    workspaceRootFolder = {
        parent: root,
        uri: new uri_1.default('file:///home/rootFolder'),
        selected: false, expanded: true, children: [], id: 'id_rootFolder', name: 'name_rootFolder',
        fileStat: { uri: 'file:///home/rootFolder', isDirectory: true, lastModification: 0 }
    };
    childA = {
        id: 'idA', name: 'nameA', parent: workspaceRootFolder, uri: new uri_1.default('file:///home/rootFolder/childA'), selected: false,
        fileStat: { uri: 'file:///home/rootFolder/childA', isDirectory: true, lastModification: 0 }
    };
    childB = {
        id: 'idB', name: 'nameB', parent: workspaceRootFolder, uri: new uri_1.default('file:///home/rootFolder/childB'), selected: false,
        fileStat: { uri: 'file:///home/rootFolder/childB', isDirectory: true, lastModification: 0 }
    };
    root.children = [workspaceRootFolder];
    workspaceRootFolder.children = [childA, childB];
    homeFolder = {
        parent: root,
        uri: new uri_1.default('file:///home'),
        selected: false, expanded: true, children: [], id: 'id_rootFolder', name: 'name_rootFolder',
        fileStat: { uri: 'file:///home/rootFolder', isDirectory: true, lastModification: 0 }
    };
    childC = {
        id: 'idC', name: 'nameC', parent: homeFolder, uri: new uri_1.default('file:///home/childC'), selected: false,
        fileStat: { uri: 'file:///home/childC', isDirectory: false, lastModification: 0 }
    };
    homeFolder.children = [childC];
    folderA = Object.freeze({
        uri: 'file:///home/folderA',
        lastModification: 0,
        isDirectory: true
    });
    folderB = Object.freeze({
        uri: 'file:///home/folderB',
        lastModification: 0,
        isDirectory: true
    });
};
describe('FileNavigatorModel', function () {
    var testContainer;
    var mockOpenerService;
    var mockFileNavigatorTree;
    var mockWorkspaceService;
    var mockFilesystem;
    var mockLabelProvider;
    var mockFileSystemWatcher;
    var mockILogger;
    var mockTreeSelectionService;
    var mockTreeExpansionService;
    var mockTreeNavigationService;
    var mockTreeSearch;
    var mockPreferences;
    var mockWorkspaceServiceEmitter = new core_1.Emitter();
    var mockWorkspaceOnLocationChangeEmitter = new core_1.Emitter();
    var mockFileChangeEmitter = new core_1.Emitter();
    var mockFileMoveEmitter = new core_1.Emitter();
    var mockTreeChangeEmitter = new core_1.Emitter();
    var mockExpansionChangeEmitter = new core_1.Emitter();
    var navigatorModel;
    var toRestore = [];
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
    });
    after(function () {
        disableJSDOM();
    });
    beforeEach(function () {
        mockOpenerService = sinon.createStubInstance(browser_1.DefaultOpenerService);
        mockFileNavigatorTree = sinon.createStubInstance(navigator_tree_1.FileNavigatorTree);
        mockWorkspaceService = sinon.createStubInstance(browser_3.WorkspaceService);
        mockFilesystem = sinon.createStubInstance(node_filesystem_1.FileSystemNode);
        mockLabelProvider = sinon.createStubInstance(browser_1.LabelProvider);
        mockFileSystemWatcher = sinon.createStubInstance(filesystem_watcher_1.FileSystemWatcher);
        mockILogger = sinon.createStubInstance(core_1.Logger);
        mockTreeSelectionService = sinon.createStubInstance(tree_selection_impl_1.TreeSelectionServiceImpl);
        mockTreeExpansionService = sinon.createStubInstance(browser_1.TreeExpansionServiceImpl);
        mockTreeNavigationService = sinon.createStubInstance(browser_1.TreeNavigationService);
        mockTreeSearch = sinon.createStubInstance(browser_1.TreeSearch);
        mockPreferences = test_1.createMockPreferenceProxy({});
        var mockApplicationStateService = sinon.createStubInstance(frontend_application_state_1.FrontendApplicationStateService);
        testContainer = new inversify_1.Container();
        testContainer.bind(navigator_model_1.FileNavigatorModel).toSelf().inSingletonScope();
        testContainer.bind(browser_1.OpenerService).toConstantValue(mockOpenerService);
        testContainer.bind(navigator_tree_1.FileNavigatorTree).toConstantValue(mockFileNavigatorTree);
        testContainer.bind(browser_3.WorkspaceService).toConstantValue(mockWorkspaceService);
        testContainer.bind(common_1.FileSystem).toConstantValue(mockFilesystem);
        testContainer.bind(browser_1.LabelProvider).toConstantValue(mockLabelProvider);
        testContainer.bind(filesystem_watcher_1.FileSystemWatcher).toConstantValue(mockFileSystemWatcher);
        testContainer.bind(core_1.ILogger).toConstantValue(mockILogger);
        testContainer.bind(browser_1.Tree).toConstantValue(mockFileNavigatorTree);
        testContainer.bind(browser_1.TreeSelectionService).toConstantValue(mockTreeSelectionService);
        testContainer.bind(browser_1.TreeExpansionService).toConstantValue(mockTreeExpansionService);
        testContainer.bind(browser_1.TreeNavigationService).toConstantValue(mockTreeNavigationService);
        testContainer.bind(browser_1.TreeSearch).toConstantValue(mockTreeSearch);
        testContainer.bind(browser_1.CorePreferences).toConstantValue(mockPreferences);
        testContainer.bind(frontend_application_state_1.FrontendApplicationStateService).toConstantValue(mockApplicationStateService);
        sinon.stub(mockWorkspaceService, 'onWorkspaceChanged').value(mockWorkspaceServiceEmitter.event);
        sinon.stub(mockWorkspaceService, 'onWorkspaceLocationChanged').value(mockWorkspaceOnLocationChangeEmitter.event);
        sinon.stub(mockFileSystemWatcher, 'onFilesChanged').value(mockFileChangeEmitter.event);
        sinon.stub(mockFileSystemWatcher, 'onDidMove').value(mockFileMoveEmitter.event);
        sinon.stub(mockFileNavigatorTree, 'onChanged').value(mockTreeChangeEmitter.event);
        sinon.stub(mockTreeExpansionService, 'onExpansionChanged').value(mockExpansionChangeEmitter.event);
        setup();
        navigatorModel = testContainer.get(navigator_model_1.FileNavigatorModel);
    });
    afterEach(function () {
        toRestore.forEach(function (res) {
            res.restore();
        });
        toRestore.length = 0;
    });
    describe('updateRoot() function', function () {
        it('should assign "this.root" a WorkspaceNode with WorkspaceRootNodes (one for each root folder in the workspace) as its children', function () { return __awaiter(void 0, void 0, void 0, function () {
            var thisRoot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sinon.stub(mockWorkspaceService, 'roots').value([folderA, folderB]);
                        sinon.stub(mockWorkspaceService, 'opened').value(true);
                        mockFileNavigatorTree.createWorkspaceRoot.callsFake(function (stat, rootNode) {
                            return Promise.resolve({
                                parent: rootNode,
                                uri: new uri_1.default(stat.uri),
                                selected: false, expanded: true, children: [], id: 'id_rootFolder', name: 'name_rootFolder',
                                fileStat: { uri: stat.uri, isDirectory: true, lastModification: 0 }
                            });
                        });
                        return [4 /*yield*/, navigatorModel['updateRoot']()];
                    case 1:
                        _a.sent();
                        thisRoot = navigatorModel['root'];
                        chai_1.expect(thisRoot).not.to.be.undefined;
                        chai_1.expect(thisRoot.children.length).to.eq(2);
                        chai_1.expect(thisRoot.children[0].uri.toString()).to.eq(folderA.uri);
                        chai_1.expect(thisRoot.children[1].uri.toString()).to.eq(folderB.uri);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should assign "this.root" undefined if there is no workspace open', function () { return __awaiter(void 0, void 0, void 0, function () {
            var thisRoot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sinon.stub(mockWorkspaceService, 'opened').value(false);
                        return [4 /*yield*/, navigatorModel['updateRoot']()];
                    case 1:
                        _a.sent();
                        thisRoot = navigatorModel['root'];
                        chai_1.expect(thisRoot).to.be.undefined;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('move() function', function () {
        it('should do nothing if user tries to move a root folder', function () {
            var stubMove = sinon.stub(browser_2.FileTreeModel.prototype, 'move').callsFake(function () { });
            var stubCheckRoot = sinon.stub(navigator_tree_1.WorkspaceRootNode, 'is').returns(true);
            toRestore.push.apply(toRestore, __spread([stubMove, stubCheckRoot]));
            navigatorModel.move(workspaceRootFolder, childA);
            chai_1.expect(stubMove.called).to.be.false;
        });
        it('should pass argument to move() in FileTreeModel class if the node being moved is not a root folder', function () {
            var stubMove = sinon.stub(browser_2.FileTreeModel.prototype, 'move').callsFake(function () { });
            var stubCheckRoot = sinon.stub(navigator_tree_1.WorkspaceRootNode, 'is').returns(false);
            toRestore.push.apply(toRestore, __spread([stubMove, stubCheckRoot]));
            navigatorModel.move(childA, workspaceRootFolder);
            chai_1.expect(stubMove.called).to.be.true;
        });
    });
    describe('revealFile() function', function () {
        it('should return undefined if the uri to be revealed does not contain an absolute path', function () { return __awaiter(void 0, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigatorModel.revealFile(new uri_1.default('folderC/untitled'))];
                    case 1:
                        ret = _a.sent();
                        chai_1.expect(ret).to.be.undefined;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return undefined if node being revealed is not part of the file tree', function () { return __awaiter(void 0, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigatorModel['root'] = root;
                        mockFileNavigatorTree.createId.callsFake(function (rootNode, uri) { return (rootNode ? rootNode.id : 'no_root_node') + ":" + uri.path.toString(); });
                        sinon.stub(navigatorModel, 'getNode').callsFake(function (id) {
                            if (id) {
                                if (id.endsWith(childA.uri.path.toString())) {
                                    return childA;
                                }
                                else if (id.endsWith(childB.uri.path.toString())) {
                                    return childB;
                                }
                                else if (id.endsWith(workspaceRootFolder.uri.path.toString())) {
                                    return workspaceRootFolder;
                                }
                                else if (id.endsWith(childC.uri.path.toString())) {
                                    return childC;
                                }
                            }
                            return undefined;
                        });
                        return [4 /*yield*/, navigatorModel.revealFile(childC.uri)];
                    case 1:
                        ret = _a.sent();
                        chai_1.expect(ret).to.be.undefined;
                        return [2 /*return*/];
                }
            });
        }); });
        var fakeCreateId = function (rootNode, uri) { return (rootNode ? rootNode.id : 'no_root_node') + ":" + uri.path.toString(); };
        var fakeGetNode = function (id) {
            if (id) {
                if (id.endsWith(childA.uri.path.toString())) {
                    return childA;
                }
                else if (id.endsWith(childB.uri.path.toString())) {
                    return childB;
                }
                else if (id.endsWith(workspaceRootFolder.uri.path.toString())) {
                    return workspaceRootFolder;
                }
                else if (id.endsWith(childC.uri.path.toString())) {
                    return childC;
                }
            }
            return undefined;
        };
        it('should return undefined if cannot find a node from the file tree', function () { return __awaiter(void 0, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigatorModel['root'] = root;
                        mockFileNavigatorTree.createId.callsFake(fakeCreateId);
                        sinon.stub(navigatorModel, 'getNode').callsFake(fakeGetNode);
                        return [4 /*yield*/, navigatorModel.revealFile(childC.uri)];
                    case 1:
                        ret = _a.sent();
                        chai_1.expect(ret).to.be.undefined;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the node if the node being revealed is part of the file tree', function () { return __awaiter(void 0, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigatorModel['root'] = root;
                        mockFileNavigatorTree.createId.callsFake(fakeCreateId);
                        sinon.stub(navigatorModel, 'getNode').callsFake(fakeGetNode);
                        return [4 /*yield*/, navigatorModel.revealFile(childB.uri)];
                    case 1:
                        ret = _a.sent();
                        chai_1.expect(ret).not.to.be.undefined;
                        chai_1.expect(ret && ret.id).to.eq(childB.id);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the node and expand the node if the node being revealed is a folder as part of the file tree', function () { return __awaiter(void 0, void 0, void 0, function () {
            var stubExpand;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigatorModel['root'] = root;
                        mockFileNavigatorTree.createId.callsFake(fakeCreateId);
                        stubExpand = sinon.stub(navigatorModel, 'expandNode');
                        stubExpand.callsFake(function () { });
                        sinon.stub(navigatorModel, 'getNode').callsFake(fakeGetNode);
                        return [4 /*yield*/, navigatorModel.revealFile(Object.assign(childB, { expanded: false, children: [] }).uri)];
                    case 1:
                        _a.sent();
                        chai_1.expect(stubExpand.called).to.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=navigator-model.spec.js.map
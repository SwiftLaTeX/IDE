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
var uri_1 = require("@theia/core/lib/common/uri");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var browser_3 = require("@theia/filesystem/lib/browser");
var browser_4 = require("@theia/workspace/lib/browser");
var application_shell_1 = require("@theia/core/lib/browser/shell/application-shell");
var navigator_tree_1 = require("./navigator-tree");
var navigator_model_1 = require("./navigator-model");
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var core_1 = require("@theia/core");
var React = require("react");
var navigator_context_key_service_1 = require("./navigator-context-key-service");
exports.FILE_NAVIGATOR_ID = 'files';
exports.EXPLORER_VIEW_CONTAINER_ID = 'explorer-view-container';
exports.EXPLORER_VIEW_CONTAINER_TITLE_OPTIONS = {
    label: 'Explorer',
    iconClass: 'navigator-tab-icon',
    closeable: true
};
exports.LABEL = 'No folder opened';
exports.CLASS = 'theia-Files';
var FileNavigatorWidget = /** @class */ (function (_super) {
    __extends(FileNavigatorWidget, _super);
    function FileNavigatorWidget(props, model, contextMenuRenderer, commandService, selectionService, workspaceService, shell, fileSystem) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.commandService = commandService;
        _this.selectionService = selectionService;
        _this.workspaceService = workspaceService;
        _this.shell = shell;
        _this.fileSystem = fileSystem;
        _this.canOpenWorkspaceFileAndFolder = core_1.isOSX || !core_1.environment.electron.is();
        _this.openWorkspace = function () { return _this.doOpenWorkspace(); };
        _this.openFolder = function () { return _this.doOpenFolder(); };
        _this.keyUpHandler = function (e) {
            if (browser_1.Key.ENTER.keyCode === e.keyCode) {
                e.target.click();
            }
        };
        _this.id = exports.FILE_NAVIGATOR_ID;
        _this.addClass(exports.CLASS);
        return _this;
    }
    FileNavigatorWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.updateSelectionContextKeys();
        this.toDispose.pushAll([
            this.model.onSelectionChanged(function () {
                return _this.updateSelectionContextKeys();
            }),
            this.model.onExpansionChanged(function (node) {
                if (node.expanded && node.children.length === 1) {
                    var child = node.children[0];
                    if (browser_2.ExpandableTreeNode.is(child) && !child.expanded) {
                        _this.model.expandNode(child);
                    }
                }
            })
        ]);
    };
    FileNavigatorWidget.prototype.doUpdateRows = function () {
        _super.prototype.doUpdateRows.call(this);
        this.title.label = exports.LABEL;
        if (navigator_tree_1.WorkspaceNode.is(this.model.root)) {
            if (this.model.root.name === navigator_tree_1.WorkspaceNode.name) {
                var rootNode = this.model.root.children[0];
                if (navigator_tree_1.WorkspaceRootNode.is(rootNode)) {
                    this.title.label = this.toNodeName(rootNode);
                    this.title.caption = this.labelProvider.getLongName(rootNode.uri);
                }
            }
            else {
                this.title.label = this.toNodeName(this.model.root);
                this.title.caption = this.title.label;
            }
        }
        else {
            this.title.caption = this.title.label;
        }
    };
    FileNavigatorWidget.prototype.enableDndOnMainPanel = function () {
        var _this = this;
        var mainPanelNode = this.shell.mainPanel.node;
        this.addEventListener(mainPanelNode, 'drop', function (_a) {
            var dataTransfer = _a.dataTransfer;
            return __awaiter(_this, void 0, void 0, function () {
                var treeNodes;
                var _this = this;
                return __generator(this, function (_b) {
                    treeNodes = dataTransfer && this.getSelectedTreeNodesFromData(dataTransfer) || [];
                    treeNodes.filter(browser_3.FileNode.is).forEach(function (treeNode) { return _this.commandService.executeCommand(browser_1.CommonCommands.OPEN.id, treeNode.uri); });
                    return [2 /*return*/];
                });
            });
        });
        var handler = function (e) {
            if (e.dataTransfer) {
                e.dataTransfer.dropEffect = 'link';
                e.preventDefault();
            }
        };
        this.addEventListener(mainPanelNode, 'dragover', handler);
        this.addEventListener(mainPanelNode, 'dragenter', handler);
    };
    FileNavigatorWidget.prototype.getContainerTreeNode = function () {
        var root = this.model.root;
        if (this.workspaceService.isMultiRootWorkspaceOpened) {
            return root;
        }
        if (navigator_tree_1.WorkspaceNode.is(root)) {
            return root.children[0];
        }
        return undefined;
    };
    FileNavigatorWidget.prototype.deflateForStorage = function (node) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var copy = __assign({}, node);
        if (copy.uri) {
            copy.uri = copy.uri.toString();
        }
        return _super.prototype.deflateForStorage.call(this, copy);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FileNavigatorWidget.prototype.inflateFromStorage = function (node, parent) {
        if (node.uri) {
            node.uri = new uri_1.default(node.uri);
        }
        return _super.prototype.inflateFromStorage.call(this, node, parent);
    };
    FileNavigatorWidget.prototype.renderTree = function (model) {
        return _super.prototype.renderTree.call(this, model) || this.renderOpenWorkspaceDiv();
    };
    FileNavigatorWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.addClipboardListener(this.node, 'copy', function (e) { return _this.handleCopy(e); });
        this.addClipboardListener(this.node, 'paste', function (e) { return _this.handlePaste(e); });
        this.enableDndOnMainPanel();
    };
    FileNavigatorWidget.prototype.handleCopy = function (event) {
        var uris = this.model.selectedFileStatNodes.map(function (node) { return node.uri.toString(); });
        if (uris.length > 0 && event.clipboardData) {
            event.clipboardData.setData('text/plain', uris.join('\n'));
            event.preventDefault();
        }
    };
    FileNavigatorWidget.prototype.handlePaste = function (event) {
        var e_1, _a;
        if (event.clipboardData) {
            var raw = event.clipboardData.getData('text/plain');
            if (!raw) {
                return;
            }
            try {
                for (var _b = __values(raw.split('\n')), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var file = _c.value;
                    var uri = new uri_1.default(file);
                    if (this.model.copy(uri)) {
                        event.preventDefault();
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
        }
    };
    FileNavigatorWidget.prototype.doOpenWorkspace = function () {
        this.commandService.executeCommand(browser_4.WorkspaceCommands.OPEN_WORKSPACE.id);
    };
    FileNavigatorWidget.prototype.doOpenFolder = function () {
        this.commandService.executeCommand(browser_4.WorkspaceCommands.OPEN_FOLDER.id);
    };
    /**
     * Instead of rendering the file resources from the workspace, we render a placeholder
     * button when the workspace root is not yet set.
     */
    FileNavigatorWidget.prototype.renderOpenWorkspaceDiv = function () {
        var openButton;
        if (this.canOpenWorkspaceFileAndFolder) {
            openButton = React.createElement("button", { className: 'theia-button open-workspace-button', title: 'Select a folder or a workspace-file to open as your workspace', onClick: this.openWorkspace, onKeyUp: this.keyUpHandler }, "Open Workspace");
        }
        else {
            openButton = React.createElement("button", { className: 'theia-button open-workspace-button', title: 'Select a folder as your workspace root', onClick: this.openFolder, onKeyUp: this.keyUpHandler }, "Open Folder");
        }
        return React.createElement("div", { className: 'theia-navigator-container' },
            React.createElement("div", { className: 'center' }, "You have not yet opened a workspace."),
            React.createElement("div", { className: 'open-workspace-button-container' }, openButton));
    };
    FileNavigatorWidget.prototype.handleClickEvent = function (node, event) {
        var modifierKeyCombined = core_1.isOSX ? (event.shiftKey || event.metaKey) : (event.shiftKey || event.ctrlKey);
        if (!modifierKeyCombined && node && this.corePreferences['workbench.list.openMode'] === 'singleClick') {
            this.model.previewNode(node);
        }
        _super.prototype.handleClickEvent.call(this, node, event);
    };
    FileNavigatorWidget.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.contextKeyService.explorerViewletVisible.set(true);
    };
    FileNavigatorWidget.prototype.onAfterHide = function (msg) {
        _super.prototype.onAfterHide.call(this, msg);
        this.contextKeyService.explorerViewletVisible.set(false);
    };
    FileNavigatorWidget.prototype.updateSelectionContextKeys = function () {
        this.contextKeyService.explorerResourceIsFolder.set(browser_3.DirNode.is(this.model.selectedNodes[0]));
    };
    __decorate([
        inversify_1.inject(browser_1.CorePreferences),
        __metadata("design:type", Object)
    ], FileNavigatorWidget.prototype, "corePreferences", void 0);
    __decorate([
        inversify_1.inject(navigator_context_key_service_1.NavigatorContextKeyService),
        __metadata("design:type", navigator_context_key_service_1.NavigatorContextKeyService)
    ], FileNavigatorWidget.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileNavigatorWidget.prototype, "init", null);
    FileNavigatorWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.TreeProps)),
        __param(1, inversify_1.inject(navigator_model_1.FileNavigatorModel)),
        __param(2, inversify_1.inject(browser_2.ContextMenuRenderer)),
        __param(3, inversify_1.inject(common_1.CommandService)),
        __param(4, inversify_1.inject(common_1.SelectionService)),
        __param(5, inversify_1.inject(browser_4.WorkspaceService)),
        __param(6, inversify_1.inject(application_shell_1.ApplicationShell)),
        __param(7, inversify_1.inject(filesystem_1.FileSystem)),
        __metadata("design:paramtypes", [Object, navigator_model_1.FileNavigatorModel, Object, Object, common_1.SelectionService,
            browser_4.WorkspaceService,
            application_shell_1.ApplicationShell, Object])
    ], FileNavigatorWidget);
    return FileNavigatorWidget;
}(browser_3.FileTreeWidget));
exports.FileNavigatorWidget = FileNavigatorWidget;
//# sourceMappingURL=navigator-widget.js.map
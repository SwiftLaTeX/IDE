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
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("../common");
var uri_1 = require("@theia/core/lib/common/uri");
var git_repository_provider_1 = require("./git-repository-provider");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var domutils_1 = require("@phosphor/domutils");
var inversify_1 = require("inversify");
var react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
var React = require("react");
var git_file_change_label_provider_1 = require("./git-file-change-label-provider");
var GitNavigableListWidget = /** @class */ (function (_super) {
    __extends(GitNavigableListWidget, _super);
    function GitNavigableListWidget() {
        var _this = _super.call(this) || this;
        _this.node.tabIndex = 0;
        return _this;
    }
    GitNavigableListWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.update();
        this.node.focus();
    };
    Object.defineProperty(GitNavigableListWidget.prototype, "scrollContainer", {
        get: function () {
            return this._scrollContainer;
        },
        set: function (id) {
            this._scrollContainer = id + Date.now();
        },
        enumerable: true,
        configurable: true
    });
    GitNavigableListWidget.prototype.onUpdateRequest = function (msg) {
        var _this = this;
        if (!this.isAttached || !this.isVisible) {
            return;
        }
        _super.prototype.onUpdateRequest.call(this, msg);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var selected, container;
            return __generator(this, function (_a) {
                selected = this.node.getElementsByClassName(browser_1.SELECTED_CLASS)[0];
                if (selected) {
                    container = document.getElementById(this.scrollContainer);
                    if (container) {
                        domutils_1.ElementExt.scrollIntoViewIfNeeded(container, selected);
                    }
                }
                return [2 /*return*/];
            });
        }); })();
    };
    GitNavigableListWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        this.update();
    };
    GitNavigableListWidget.prototype.getAbbreviatedStatusCaption = function (status, staged) {
        return common_1.GitFileStatus.toAbbreviation(status, staged);
    };
    GitNavigableListWidget.prototype.getRepositoryLabel = function (uri) {
        var repository = this.repositoryProvider.findRepository(new uri_1.default(uri));
        var isSelectedRepo = this.repositoryProvider.selectedRepository && repository && this.repositoryProvider.selectedRepository.localUri === repository.localUri;
        return repository && !isSelectedRepo ? this.labelProvider.getLongName(new uri_1.default(repository.localUri)) : undefined;
    };
    GitNavigableListWidget.prototype.renderHeaderRow = function (_a) {
        var name = _a.name, value = _a.value, classNames = _a.classNames, title = _a.title;
        if (!value) {
            return;
        }
        var className = __spread(['header-row'], (classNames || [])).join(' ');
        return React.createElement("div", { key: name, className: className, title: title },
            React.createElement("div", { className: 'theia-header' }, name),
            React.createElement("div", { className: 'header-value' }, value));
    };
    GitNavigableListWidget.prototype.addGitListNavigationKeyListeners = function (container) {
        var _this = this;
        this.addKeyListener(container, browser_1.Key.ARROW_LEFT, function () { return _this.navigateLeft(); });
        this.addKeyListener(container, browser_1.Key.ARROW_RIGHT, function () { return _this.navigateRight(); });
        this.addKeyListener(container, browser_1.Key.ARROW_UP, function () { return _this.navigateUp(); });
        this.addKeyListener(container, browser_1.Key.ARROW_DOWN, function () { return _this.navigateDown(); });
        this.addKeyListener(container, browser_1.Key.ENTER, function () { return _this.handleListEnter(); });
    };
    GitNavigableListWidget.prototype.navigateLeft = function () {
        this.selectPreviousNode();
    };
    GitNavigableListWidget.prototype.navigateRight = function () {
        this.selectNextNode();
    };
    GitNavigableListWidget.prototype.navigateUp = function () {
        this.selectPreviousNode();
    };
    GitNavigableListWidget.prototype.navigateDown = function () {
        this.selectNextNode();
    };
    GitNavigableListWidget.prototype.handleListEnter = function () {
    };
    GitNavigableListWidget.prototype.getSelected = function () {
        return this.gitNodes ? this.gitNodes.find(function (c) { return c.selected || false; }) : undefined;
    };
    GitNavigableListWidget.prototype.selectNode = function (node) {
        var n = this.getSelected();
        if (n) {
            n.selected = false;
        }
        node.selected = true;
        this.update();
    };
    GitNavigableListWidget.prototype.selectNextNode = function () {
        var idx = this.indexOfSelected;
        if (idx >= 0 && idx < this.gitNodes.length - 1) {
            this.selectNode(this.gitNodes[idx + 1]);
        }
        else if (this.gitNodes.length > 0 && idx === -1) {
            this.selectNode(this.gitNodes[0]);
        }
    };
    GitNavigableListWidget.prototype.selectPreviousNode = function () {
        var idx = this.indexOfSelected;
        if (idx > 0) {
            this.selectNode(this.gitNodes[idx - 1]);
        }
    };
    Object.defineProperty(GitNavigableListWidget.prototype, "indexOfSelected", {
        get: function () {
            if (this.gitNodes && this.gitNodes.length > 0) {
                return this.gitNodes.findIndex(function (c) { return c.selected || false; });
            }
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(git_repository_provider_1.GitRepositoryProvider),
        __metadata("design:type", git_repository_provider_1.GitRepositoryProvider)
    ], GitNavigableListWidget.prototype, "repositoryProvider", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], GitNavigableListWidget.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(git_file_change_label_provider_1.GitFileChangeLabelProvider),
        __metadata("design:type", git_file_change_label_provider_1.GitFileChangeLabelProvider)
    ], GitNavigableListWidget.prototype, "gitLabelProvider", void 0);
    GitNavigableListWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], GitNavigableListWidget);
    return GitNavigableListWidget;
}(react_widget_1.ReactWidget));
exports.GitNavigableListWidget = GitNavigableListWidget;
var GitItemComponent = /** @class */ (function (_super) {
    __extends(GitItemComponent, _super);
    function GitItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.revealChange = function () { return _this.props.revealChange(_this.props.change); };
        _this.selectNode = function () { return _this.props.selectNode(_this.props.change); };
        return _this;
    }
    GitItemComponent.prototype.render = function () {
        var _a = this.props, labelProvider = _a.labelProvider, gitLabelProvider = _a.gitLabelProvider, change = _a.change;
        var icon = labelProvider.getIcon(change);
        var label = labelProvider.getName(change);
        var description = labelProvider.getLongName(change);
        var caption = gitLabelProvider.getCaption(change);
        var statusCaption = gitLabelProvider.getStatusCaption(change.status, true);
        return React.createElement("div", { className: "gitItem noselect" + (change.selected ? ' ' + browser_1.SELECTED_CLASS : ''), onDoubleClick: this.revealChange, onClick: this.selectNode },
            React.createElement("span", { className: icon + ' file-icon' }),
            React.createElement("div", { className: 'noWrapInfo', title: caption },
                React.createElement("span", { className: 'name' }, label + ' '),
                React.createElement("span", { className: 'path' }, description)),
            React.createElement("div", { title: caption, className: 'status staged ' + common_1.GitFileStatus[change.status].toLowerCase() }, statusCaption.charAt(0)));
    };
    return GitItemComponent;
}(React.Component));
exports.GitItemComponent = GitItemComponent;
//# sourceMappingURL=git-navigable-list-widget.js.map
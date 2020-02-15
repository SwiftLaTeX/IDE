"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
/* eslint-disable no-null/no-null, @typescript-eslint/no-explicit-any */
var React = require("react");
var react_autosize_textarea_1 = require("react-autosize-textarea");
var domutils_1 = require("@phosphor/domutils");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var command_1 = require("@theia/core/lib/common/command");
var menu_1 = require("@theia/core/lib/common/menu");
var disposable_1 = require("@theia/core/lib/common/disposable");
var browser_1 = require("@theia/core/lib/browser");
var alert_message_1 = require("@theia/core/lib/browser/widgets/alert-message");
var browser_2 = require("@theia/editor/lib/browser");
var scm_avatar_service_1 = require("./scm-avatar-service");
var scm_amend_component_1 = require("./scm-amend-component");
var scm_context_key_service_1 = require("./scm-context-key-service");
var scm_service_1 = require("./scm-service");
var ScmWidget = /** @class */ (function (_super) {
    __extends(ScmWidget, _super);
    function ScmWidget() {
        var _this = _super.call(this) || this;
        /** don't modify DOM use React! only exposed for `focusInput` */
        _this.inputRef = React.createRef();
        _this.toDisposeOnRefresh = new disposable_1.DisposableCollection();
        _this.addScmListKeyListeners = function (id) {
            var container = document.getElementById(id);
            if (container) {
                _this.addScmListNavigationKeyListeners(container);
            }
        };
        _this.setInputValue = function (event) {
            var repository = _this.scmService.selectedRepository;
            if (repository) {
                repository.input.value = typeof event === 'string' ? event : event.currentTarget.value;
            }
        };
        _this.acceptInput = function () { return _this.commands.executeCommand('scm.acceptInput'); };
        _this.node.tabIndex = 0;
        _this.id = ScmWidget_1.ID;
        _this.addClass('theia-scm');
        _this.scrollContainer = ScmWidget_1.Styles.GROUPS_CONTAINER;
        return _this;
    }
    ScmWidget_1 = ScmWidget;
    Object.defineProperty(ScmWidget.prototype, "scrollContainer", {
        get: function () {
            return this._scrollContainer;
        },
        set: function (id) {
            this._scrollContainer = id + Date.now();
        },
        enumerable: true,
        configurable: true
    });
    ScmWidget.prototype.init = function () {
        var _this = this;
        this.refresh();
        this.toDispose.push(this.scmService.onDidChangeSelectedRepository(function () { return _this.refresh(); }));
        this.toDispose.push(this.labelProvider.onDidChange(function (e) {
            var repository = _this.scmService.selectedRepository;
            if (repository && repository.resources.some(function (resource) { return e.affects(resource.sourceUri); })) {
                _this.update();
            }
        }));
    };
    ScmWidget.prototype.refresh = function () {
        var _this = this;
        this.toDisposeOnRefresh.dispose();
        this.toDispose.push(this.toDisposeOnRefresh);
        var repository = this.scmService.selectedRepository;
        this.title.label = repository ? repository.provider.label : 'no repository found';
        this.title.caption = this.title.label;
        this.update();
        if (repository) {
            this.toDisposeOnRefresh.push(repository.onDidChange(function () { return _this.update(); }));
            // render synchronously to avoid cursor jumping
            // see https://stackoverflow.com/questions/28922275/in-reactjs-why-does-setstate-behave-differently-when-called-synchronously/28922465#28922465
            this.toDisposeOnRefresh.push(repository.input.onDidChange(function () { return _this.updateImmediately(); }));
            this.toDisposeOnRefresh.push(repository.input.onDidFocus(function () { return _this.focusInput(); }));
        }
    };
    ScmWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        (this.inputRef.current || this.node).focus();
    };
    ScmWidget.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.update();
    };
    ScmWidget.prototype.updateImmediately = function () {
        this.onUpdateRequest(browser_1.Widget.Msg.UpdateRequest);
    };
    ScmWidget.prototype.onUpdateRequest = function (msg) {
        var _this = this;
        if (!this.isAttached || !this.isVisible) {
            return;
        }
        this.onRender.push(disposable_1.Disposable.create(function () { return function () { return __awaiter(_this, void 0, void 0, function () {
            var selected;
            return __generator(this, function (_a) {
                selected = this.node.getElementsByClassName(browser_1.SELECTED_CLASS)[0];
                if (selected) {
                    domutils_1.ElementExt.scrollIntoViewIfNeeded(this.node, selected);
                }
                return [2 /*return*/];
            });
        }); }; }));
        _super.prototype.onUpdateRequest.call(this, msg);
    };
    ScmWidget.prototype.render = function () {
        var repository = this.scmService.selectedRepository;
        if (!repository) {
            return React.createElement(alert_message_1.AlertMessage, { type: 'WARNING', header: 'No repository found' });
        }
        var input = repository.input;
        var amendSupport = repository.provider.amendSupport;
        return React.createElement("div", { className: ScmWidget_1.Styles.MAIN_CONTAINER },
            React.createElement("div", { className: 'headerContainer', style: { flexGrow: 0 } }, this.renderInput(input, repository)),
            React.createElement(ScmResourceGroupsContainer, { style: { flexGrow: 1 }, id: this.scrollContainer, repository: repository, commands: this.commands, menus: this.menus, contextKeys: this.contextKeys, labelProvider: this.labelProvider, addScmListKeyListeners: this.addScmListKeyListeners, contextMenuRenderer: this.contextMenuRenderer, corePreferences: this.corePreferences }),
            amendSupport && React.createElement(scm_amend_component_1.ScmAmendComponent, { key: "amend:" + repository.provider.rootUri, style: { flexGrow: 0 }, id: this.scrollContainer, repository: repository, scmAmendSupport: amendSupport, setCommitMessage: this.setInputValue, avatarService: this.avatarService, storageService: this.storageService }));
    };
    ScmWidget.prototype.renderInput = function (input, repository) {
        var validationStatus = input.issue ? input.issue.type : 'idle';
        var validationMessage = input.issue ? input.issue.message : '';
        var format = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (args.length !== 0) {
                return value.replace(/{(\d+)}/g, function (found, n) {
                    var i = parseInt(n);
                    return isNaN(i) || i < 0 || i >= args.length ? found : args[i];
                });
            }
            return value;
        };
        var keybinding = this.keybindings.acceleratorFor(this.keybindings.getKeybindingsForCommand('scm.acceptInput')[0]).join('+');
        var message = format(input.placeholder || '', keybinding);
        return React.createElement("div", { className: ScmWidget_1.Styles.INPUT_MESSAGE_CONTAINER },
            React.createElement(react_autosize_textarea_1.default, { className: ScmWidget_1.Styles.INPUT_MESSAGE + " theia-input theia-scm-input-message-" + validationStatus, id: ScmWidget_1.Styles.INPUT_MESSAGE, placeholder: message, autoFocus: true, tabIndex: 1, value: input.value, onChange: this.setInputValue, ref: this.inputRef, rows: 1, maxRows: 6 }),
            React.createElement("div", { className: ScmWidget_1.Styles.VALIDATION_MESSAGE + " " + ScmWidget_1.Styles.NO_SELECT + "\n                    theia-scm-validation-message-" + validationStatus + " theia-scm-input-message-" + validationStatus, style: {
                    display: !!input.issue ? 'block' : 'none'
                } }, validationMessage));
    };
    ScmWidget.prototype.focusInput = function () {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    };
    ScmWidget.prototype.addScmListNavigationKeyListeners = function (container) {
        var _this = this;
        this.addKeyListener(container, browser_1.Key.ARROW_LEFT, function () { return _this.openPreviousChange(); });
        this.addKeyListener(container, browser_1.Key.ARROW_RIGHT, function () { return _this.openNextChange(); });
        this.addKeyListener(container, browser_1.Key.ARROW_UP, function () { return _this.selectPreviousResource(); });
        this.addKeyListener(container, browser_1.Key.ARROW_DOWN, function () { return _this.selectNextResource(); });
        this.addKeyListener(container, browser_1.Key.ENTER, function () { return _this.openSelected(); });
    };
    ScmWidget.prototype.openPreviousChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, selected, widget, diffNavigator, previous, previous;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.scmService.selectedRepository;
                        if (!repository) {
                            return [2 /*return*/];
                        }
                        selected = repository.selectedResource;
                        if (!selected) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.openResource(selected)];
                    case 1:
                        widget = _a.sent();
                        if (widget) {
                            diffNavigator = this.diffNavigatorProvider(widget.editor);
                            if (diffNavigator.canNavigate() && diffNavigator.hasPrevious()) {
                                diffNavigator.previous();
                            }
                            else {
                                previous = repository.selectPreviousResource();
                                if (previous) {
                                    previous.open();
                                }
                            }
                        }
                        else {
                            previous = repository.selectPreviousResource();
                            if (previous) {
                                previous.open();
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ScmWidget.prototype.openNextChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, selected, widget, diffNavigator, next, next;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.scmService.selectedRepository;
                        if (!repository) {
                            return [2 /*return*/];
                        }
                        selected = repository.selectedResource;
                        if (!selected) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.openResource(selected)];
                    case 1:
                        widget = _a.sent();
                        if (widget) {
                            diffNavigator = this.diffNavigatorProvider(widget.editor);
                            if (diffNavigator.canNavigate() && diffNavigator.hasNext()) {
                                diffNavigator.next();
                            }
                            else {
                                next = repository.selectNextResource();
                                if (next) {
                                    next.open();
                                }
                            }
                        }
                        else {
                            next = repository.selectNextResource();
                            if (next) {
                                next.open();
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (repository && repository.resources.length) {
                            repository.selectedResource = repository.resources[0];
                            repository.selectedResource.open();
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ScmWidget.prototype.openResource = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, standaloneEditor, resourcePath, _a, _b, widget, resourceUri, editorResourcePath;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, resource.open()];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _d.sent();
                        console.error('Failed to open a SCM resource', e_1);
                        return [2 /*return*/, undefined];
                    case 3:
                        resourcePath = resource.sourceUri.path.toString();
                        try {
                            for (_a = __values(this.editorManager.all), _b = _a.next(); !_b.done; _b = _a.next()) {
                                widget = _b.value;
                                resourceUri = widget.getResourceUri();
                                editorResourcePath = resourceUri && resourceUri.path.toString();
                                if (resourcePath === editorResourcePath) {
                                    if (widget.editor.uri.scheme === browser_1.DiffUris.DIFF_SCHEME) {
                                        // prefer diff editor
                                        return [2 /*return*/, widget];
                                    }
                                    else {
                                        standaloneEditor = widget;
                                    }
                                }
                                if (widget.editor.uri.scheme === browser_1.DiffUris.DIFF_SCHEME
                                    && String(widget.getResourceUri()) === resource.sourceUri.toString()) {
                                    return [2 /*return*/, widget];
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        // fallback to standalone editor
                        return [2 /*return*/, standaloneEditor];
                }
            });
        });
    };
    ScmWidget.prototype.selectPreviousResource = function () {
        var repository = this.scmService.selectedRepository;
        return repository && repository.selectPreviousResource();
    };
    ScmWidget.prototype.selectNextResource = function () {
        var repository = this.scmService.selectedRepository;
        return repository && repository.selectNextResource();
    };
    ScmWidget.prototype.openSelected = function () {
        var repository = this.scmService.selectedRepository;
        var resource = repository && repository.selectedResource;
        if (resource) {
            resource.open();
        }
    };
    ScmWidget.prototype.storeState = function () {
        var repository = this.scmService.selectedRepository;
        return repository && repository.input;
    };
    ScmWidget.prototype.restoreState = function (oldState) {
        var repository = this.scmService.selectedRepository;
        if (repository) {
            repository.input.fromJSON(oldState);
        }
    };
    var ScmWidget_1;
    ScmWidget.ID = 'scm-view';
    ScmWidget.RESOURCE_GROUP_CONTEXT_MENU = ['RESOURCE_GROUP_CONTEXT_MENU'];
    ScmWidget.RESOURCE_GROUP_INLINE_MENU = ['RESOURCE_GROUP_INLINE_MENU'];
    ScmWidget.RESOURCE_INLINE_MENU = ['RESOURCE_INLINE_MENU'];
    ScmWidget.RESOURCE_CONTEXT_MENU = ['RESOURCE_CONTEXT_MENU'];
    __decorate([
        inversify_1.inject(browser_1.CorePreferences),
        __metadata("design:type", Object)
    ], ScmWidget.prototype, "corePreferences", void 0);
    __decorate([
        inversify_1.inject(scm_service_1.ScmService),
        __metadata("design:type", scm_service_1.ScmService)
    ], ScmWidget.prototype, "scmService", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], ScmWidget.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], ScmWidget.prototype, "keybindings", void 0);
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], ScmWidget.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(scm_context_key_service_1.ScmContextKeyService),
        __metadata("design:type", scm_context_key_service_1.ScmContextKeyService)
    ], ScmWidget.prototype, "contextKeys", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], ScmWidget.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(scm_avatar_service_1.ScmAvatarService),
        __metadata("design:type", scm_avatar_service_1.ScmAvatarService)
    ], ScmWidget.prototype, "avatarService", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], ScmWidget.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], ScmWidget.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], ScmWidget.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.DiffNavigatorProvider),
        __metadata("design:type", Function)
    ], ScmWidget.prototype, "diffNavigatorProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScmWidget.prototype, "init", null);
    ScmWidget = ScmWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ScmWidget);
    return ScmWidget;
}(browser_1.ReactWidget));
exports.ScmWidget = ScmWidget;
(function (ScmWidget) {
    var Styles;
    (function (Styles) {
        Styles.MAIN_CONTAINER = 'theia-scm-main-container';
        Styles.PROVIDER_CONTAINER = 'theia-scm-provider-container';
        Styles.PROVIDER_NAME = 'theia-scm-provider-name';
        Styles.GROUPS_CONTAINER = 'groups-outer-container';
        Styles.INPUT_MESSAGE_CONTAINER = 'theia-scm-input-message-container';
        Styles.INPUT_MESSAGE = 'theia-scm-input-message';
        Styles.VALIDATION_MESSAGE = 'theia-scm-input-validation-message';
        Styles.NO_SELECT = 'no-select';
    })(Styles = ScmWidget.Styles || (ScmWidget.Styles = {}));
})(ScmWidget = exports.ScmWidget || (exports.ScmWidget = {}));
exports.ScmWidget = ScmWidget;
var ScmElement = /** @class */ (function (_super) {
    __extends(ScmElement, _super);
    function ScmElement(props) {
        var _this = _super.call(this, props) || this;
        _this.toDisposeOnUnmount = new disposable_1.DisposableCollection();
        _this.detectHover = function (element) {
            if (element) {
                window.requestAnimationFrame(function () {
                    var hover = element.matches(':hover');
                    _this.setState({ hover: hover });
                });
            }
        };
        _this.showHover = function () { return _this.setState({ hover: true }); };
        _this.hideHover = function () { return _this.setState({ hover: false }); };
        _this.renderContextMenu = function (event) {
            event.preventDefault();
            var _a = _this.props, group = _a.group, contextKeys = _a.contextKeys, contextMenuRenderer = _a.contextMenuRenderer;
            var currentScmResourceGroup = contextKeys.scmResourceGroup.get();
            contextKeys.scmResourceGroup.set(group.id);
            try {
                contextMenuRenderer.render({
                    menuPath: _this.contextMenuPath,
                    anchor: event.nativeEvent,
                    args: _this.contextMenuArgs
                });
            }
            finally {
                contextKeys.scmResourceGroup.set(currentScmResourceGroup);
            }
        };
        _this.state = {
            hover: false
        };
        var setState = _this.setState.bind(_this);
        _this.setState = function (newState) {
            if (!_this.toDisposeOnUnmount.disposed) {
                setState(newState);
            }
        };
        return _this;
    }
    ScmElement.prototype.componentDidMount = function () {
        this.toDisposeOnUnmount.push(disposable_1.Disposable.create(function () { }));
    };
    ScmElement.prototype.componentWillUnmount = function () {
        this.toDisposeOnUnmount.dispose();
    };
    return ScmElement;
}(React.Component));
exports.ScmElement = ScmElement;
var ScmResourceComponent = /** @class */ (function (_super) {
    __extends(ScmResourceComponent, _super);
    function ScmResourceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = function () { return _this.props.resource.open(); };
        _this.selectChange = function () { return _this.props.repository.selectedResource = _this.props.resource; };
        _this.contextMenuPath = ScmWidget.RESOURCE_CONTEXT_MENU;
        /**
         * Handle the single clicking of nodes present in the widget.
         */
        _this.handleClick = function () {
            // Determine the behavior based on the preference value.
            var isSingle = _this.props.corePreferences && _this.props.corePreferences['workbench.list.openMode'] === 'singleClick';
            _this.selectChange();
            if (isSingle) {
                _this.open();
            }
        };
        /**
         * Handle the double clicking of nodes present in the widget.
         */
        _this.handleDoubleClick = function () {
            // Determine the behavior based on the preference value.
            var isDouble = _this.props.corePreferences && _this.props.corePreferences['workbench.list.openMode'] === 'doubleClick';
            // Nodes should only be opened through double clicking if the correct preference is set.
            if (isDouble) {
                _this.open();
            }
        };
        return _this;
    }
    ScmResourceComponent.prototype.render = function () {
        var hover = this.state.hover;
        var _a = this.props, name = _a.name, repository = _a.repository, resource = _a.resource, labelProvider = _a.labelProvider, commands = _a.commands, menus = _a.menus, contextKeys = _a.contextKeys;
        var rootUri = resource.group.provider.rootUri;
        if (!rootUri) {
            return undefined;
        }
        var decorations = resource.decorations;
        var icon = labelProvider.getIcon(resource.sourceUri);
        var color = decorations && decorations.color || '';
        var letter = decorations && decorations.letter || '';
        var tooltip = decorations && decorations.tooltip || '';
        var relativePath = new uri_1.default(rootUri).relative(resource.sourceUri.parent);
        var path = relativePath ? relativePath.toString() : labelProvider.getLongName(resource.sourceUri.parent);
        return React.createElement("div", { key: String(resource.sourceUri), className: "scmItem " + ScmWidget.Styles.NO_SELECT + (repository.selectedResource === resource ? ' ' + browser_1.SELECTED_CLASS : ''), onContextMenu: this.renderContextMenu, onMouseEnter: this.showHover, onMouseLeave: this.hideHover, ref: this.detectHover, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick },
            React.createElement("span", { className: icon + ' file-icon' }),
            React.createElement("div", { className: 'noWrapInfo' },
                React.createElement("span", { className: 'name' }, name),
                React.createElement("span", { className: 'path' }, path)),
            React.createElement(ScmInlineActions, __assign({}, {
                hover: hover,
                menu: menus.getMenu(ScmWidget.RESOURCE_INLINE_MENU),
                args: this.contextMenuArgs,
                commands: commands,
                contextKeys: contextKeys,
                group: resource.group
            }),
                React.createElement("div", { title: tooltip, className: 'status', style: { color: color } }, letter)));
    };
    Object.defineProperty(ScmResourceComponent.prototype, "contextMenuArgs", {
        get: function () {
            return [this.props.resource]; // TODO support multiselection
        },
        enumerable: true,
        configurable: true
    });
    return ScmResourceComponent;
}(ScmElement));
exports.ScmResourceComponent = ScmResourceComponent;
var ScmResourceGroupsContainer = /** @class */ (function (_super) {
    __extends(ScmResourceGroupsContainer, _super);
    function ScmResourceGroupsContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.select = function () {
            var selectedResource = _this.props.repository.selectedResource;
            if (!selectedResource && _this.props.repository.resources.length) {
                _this.props.repository.selectedResource = _this.props.repository.resources[0];
            }
        };
        return _this;
    }
    ScmResourceGroupsContainer.prototype.render = function () {
        var _this = this;
        var groups = this.props.repository.provider.groups;
        return React.createElement("div", { className: ScmWidget.Styles.GROUPS_CONTAINER + ' ' + ScmWidget.Styles.NO_SELECT, style: this.props.style, id: this.props.id, tabIndex: 2, onFocus: this.select }, groups && this.props.repository.provider.groups.map(function (group) { return _this.renderGroup(group); }));
    };
    ScmResourceGroupsContainer.prototype.renderGroup = function (group) {
        var visible = !!group.resources.length || !group.hideWhenEmpty;
        return visible && React.createElement(ScmResourceGroupContainer, { key: group.id, repository: this.props.repository, group: group, contextMenuRenderer: this.props.contextMenuRenderer, commands: this.props.commands, menus: this.props.menus, contextKeys: this.props.contextKeys, labelProvider: this.props.labelProvider, corePreferences: this.props.corePreferences });
    };
    ScmResourceGroupsContainer.prototype.componentDidMount = function () {
        this.props.addScmListKeyListeners(this.props.id);
    };
    return ScmResourceGroupsContainer;
}(React.Component));
exports.ScmResourceGroupsContainer = ScmResourceGroupsContainer;
var ScmResourceGroupContainer = /** @class */ (function (_super) {
    __extends(ScmResourceGroupContainer, _super);
    function ScmResourceGroupContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contextMenuPath = ScmWidget.RESOURCE_GROUP_CONTEXT_MENU;
        return _this;
    }
    ScmResourceGroupContainer.prototype.render = function () {
        var _this = this;
        var hover = this.state.hover;
        var _a = this.props, group = _a.group, menus = _a.menus, commands = _a.commands, contextKeys = _a.contextKeys;
        return React.createElement("div", { className: 'changesContainer' },
            React.createElement("div", { className: 'theia-header scm-theia-header', onContextMenu: this.renderContextMenu, onMouseEnter: this.showHover, onMouseLeave: this.hideHover, ref: this.detectHover },
                React.createElement("div", { className: 'noWrapInfo' }, group.label),
                React.createElement(ScmInlineActions, __assign({}, {
                    hover: hover,
                    args: this.contextMenuArgs,
                    menu: menus.getMenu(ScmWidget.RESOURCE_GROUP_INLINE_MENU),
                    commands: commands,
                    contextKeys: contextKeys,
                    group: group
                }), this.renderChangeCount())),
            React.createElement("div", null, group.resources.map(function (resource) { return _this.renderScmResourceItem(resource); })));
    };
    ScmResourceGroupContainer.prototype.renderChangeCount = function () {
        return React.createElement("div", { className: 'notification-count-container scm-change-count' },
            React.createElement("span", { className: 'notification-count' }, this.props.group.resources.length));
    };
    ScmResourceGroupContainer.prototype.renderScmResourceItem = function (resource) {
        var name = this.props.labelProvider.getName(resource.sourceUri);
        return React.createElement(ScmResourceComponent, __assign({ key: String(resource.sourceUri) }, __assign(__assign({}, this.props), { name: name,
            resource: resource })));
    };
    Object.defineProperty(ScmResourceGroupContainer.prototype, "contextMenuArgs", {
        get: function () {
            return [this.props.group];
        },
        enumerable: true,
        configurable: true
    });
    return ScmResourceGroupContainer;
}(ScmElement));
exports.ScmResourceGroupContainer = ScmResourceGroupContainer;
var ScmInlineActions = /** @class */ (function (_super) {
    __extends(ScmInlineActions, _super);
    function ScmInlineActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScmInlineActions.prototype.render = function () {
        var _a = this.props, hover = _a.hover, menu = _a.menu, args = _a.args, commands = _a.commands, group = _a.group, contextKeys = _a.contextKeys, children = _a.children;
        return React.createElement("div", { className: 'theia-scm-inline-actions-container' },
            React.createElement("div", { className: 'theia-scm-inline-actions' }, hover && menu.children.map(function (node, index) { return node instanceof menu_1.ActionMenuNode && React.createElement(ScmInlineAction, __assign({ key: index }, { node: node, args: args, commands: commands, group: group, contextKeys: contextKeys })); })),
            children);
    };
    return ScmInlineActions;
}(React.Component));
exports.ScmInlineActions = ScmInlineActions;
var ScmInlineAction = /** @class */ (function (_super) {
    __extends(ScmInlineAction, _super);
    function ScmInlineAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.execute = function (event) {
            event.stopPropagation();
            var _a = _this.props, commands = _a.commands, node = _a.node, args = _a.args;
            commands.executeCommand.apply(commands, __spread([node.action.commandId], args));
        };
        return _this;
    }
    ScmInlineAction.prototype.render = function () {
        var _a = this.props, node = _a.node, args = _a.args, commands = _a.commands, group = _a.group, contextKeys = _a.contextKeys;
        var currentScmResourceGroup = contextKeys.scmResourceGroup.get();
        contextKeys.scmResourceGroup.set(group.id);
        try {
            if (!commands.isVisible.apply(commands, __spread([node.action.commandId], args)) || !contextKeys.match(node.action.when)) {
                return false;
            }
            return React.createElement("div", { className: 'theia-scm-inline-action' },
                React.createElement("a", { className: node.icon, title: node.label, onClick: this.execute }));
        }
        finally {
            contextKeys.scmResourceGroup.set(currentScmResourceGroup);
        }
    };
    return ScmInlineAction;
}(React.Component));
exports.ScmInlineAction = ScmInlineAction;
//# sourceMappingURL=scm-widget.js.map
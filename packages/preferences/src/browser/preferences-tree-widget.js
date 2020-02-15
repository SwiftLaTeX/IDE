"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var preferences_menu_factory_1 = require("./preferences-menu-factory");
var preferences_decorator_1 = require("./preferences-decorator");
var algorithm_1 = require("@phosphor/algorithm");
var widgets_1 = require("@phosphor/widgets");
var browser_1 = require("@theia/core/lib/browser");
var user_preference_provider_1 = require("./user-preference-provider");
var workspace_preference_provider_1 = require("./workspace-preference-provider");
var preference_editor_widget_1 = require("./preference-editor-widget");
var browser_2 = require("@theia/editor/lib/browser");
// import { JSONC_LANGUAGE_ID } from '@theia/json/lib/common';
var core_1 = require("@theia/core");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var common_1 = require("@theia/filesystem/lib/common");
var browser_3 = require("@theia/userstorage/lib/browser");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var uri_1 = require("@theia/core/lib/common/uri");
var folders_preferences_provider_1 = require("./folders-preferences-provider");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var PreferencesContainer = /** @class */ (function (_super) {
    __extends(PreferencesContainer, _super);
    function PreferencesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editors = [];
        _this.deferredEditors = new promise_util_1.Deferred();
        _this.onDirtyChangedEmitter = new core_1.Emitter();
        _this.onDirtyChanged = _this.onDirtyChangedEmitter.event;
        _this.onDidChangeTrackableWidgetsEmitter = new core_1.Emitter();
        _this.onDidChangeTrackableWidgets = _this.onDidChangeTrackableWidgetsEmitter.event;
        _this.toDispose = new core_1.DisposableCollection();
        _this._preferenceScope = browser_1.PreferenceScope.User;
        return _this;
    }
    PreferencesContainer_1 = PreferencesContainer;
    PreferencesContainer.prototype.init = function () {
        this.id = PreferencesContainer_1.ID;
        this.title.label = 'Preferences';
        this.title.caption = this.title.label;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-sliders';
        this.toDispose.pushAll([this.onDirtyChangedEmitter, this.onDidChangeTrackableWidgetsEmitter]);
    };
    PreferencesContainer.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        this.toDispose.dispose();
    };
    Object.defineProperty(PreferencesContainer.prototype, "autoSave", {
        get: function () {
            return this.editors.some(function (editor) { return editor.saveable.autoSave === 'on'; }) ? 'on' : 'off';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferencesContainer.prototype, "dirty", {
        get: function () {
            return this.editors.some(function (editor) { return editor.saveable.dirty; });
        },
        enumerable: true,
        configurable: true
    });
    PreferencesContainer.prototype.save = function () {
        this.editors.forEach(function (editor) { return editor.saveable.save(); });
    };
    PreferencesContainer.prototype.getTrackableWidgets = function () {
        return this.deferredEditors.promise;
    };
    Object.defineProperty(PreferencesContainer.prototype, "preferenceScope", {
        get: function () {
            return this._preferenceScope;
        },
        set: function (preferenceScope) {
            this._preferenceScope = preferenceScope;
        },
        enumerable: true,
        configurable: true
    });
    PreferencesContainer.prototype.onAfterAttach = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, treePanel;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.widgets.length > 0) {
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(PreferencesTreeWidget.ID)];
                    case 1:
                        _a.treeWidget = _c.sent();
                        this.treeWidget.onPreferenceSelected(function (value) {
                            var preferenceName = Object.keys(value)[0];
                            var preferenceValue = value[preferenceName];
                            if (_this.dirty) {
                                _this.messageService.warn('Preferences editor(s) has/have unsaved changes');
                            }
                            else if (_this.currentEditor) {
                                _this.preferenceService.set(preferenceName, preferenceValue, _this.currentEditor.scope, _this.currentEditor.editor.uri.toString());
                            }
                        });
                        _b = this;
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(PreferencesEditorsContainer.ID)];
                    case 2:
                        _b.editorsContainer = _c.sent();
                        this.toDispose.push(this.editorsContainer);
                        this.editorsContainer.activatePreferenceEditor(this.preferenceScope);
                        this.toDispose.push(this.editorsContainer.onInit(function () {
                            _this.handleEditorsChanged();
                            _this.deferredEditors.resolve(_this.editors);
                        }));
                        this.toDispose.push(this.editorsContainer.onEditorChanged(function (editor) {
                            if (_this.currentEditor && _this.currentEditor.editor.uri.toString() !== editor.editor.uri.toString()) {
                                _this.currentEditor.saveable.save();
                            }
                            if (editor) {
                                _this.preferenceScope = editor.scope || browser_1.PreferenceScope.User;
                            }
                            else {
                                _this.preferenceScope = browser_1.PreferenceScope.User;
                            }
                            _this.currentEditor = editor;
                        }));
                        this.toDispose.push(this.editorsContainer.onFolderPreferenceEditorUriChanged(function (uriStr) {
                            if (_this.treeWidget) {
                                _this.treeWidget.setActiveFolder(uriStr);
                            }
                            _this.handleEditorsChanged();
                        }));
                        this.toDispose.push(this.workspaceService.onWorkspaceLocationChanged(function (workspaceFile) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.editorsContainer.refreshWorkspacePreferenceEditor()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.refreshFoldersPreferencesEditor()];
                                    case 2:
                                        _a.sent();
                                        this.handleEditorsChanged();
                                        return [2 /*return*/];
                                }
                            });
                        }); }));
                        this.toDispose.push(this.workspaceService.onWorkspaceChanged(function (roots) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.refreshFoldersPreferencesEditor()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }));
                        treePanel = new widgets_1.BoxPanel();
                        treePanel.addWidget(this.treeWidget);
                        this.addWidget(treePanel);
                        this.addWidget(this.editorsContainer);
                        this.treeWidget.activate();
                        _super.prototype.onAfterAttach.call(this, msg);
                        return [2 /*return*/];
                }
            });
        });
    };
    PreferencesContainer.prototype.onActivateRequest = function (msg) {
        if (this.currentEditor) {
            this.currentEditor.activate();
        }
        _super.prototype.onActivateRequest.call(this, msg);
    };
    PreferencesContainer.prototype.onCloseRequest = function (msg) {
        if (this.treeWidget) {
            this.treeWidget.close();
        }
        this.editorsContainer.close();
        _super.prototype.onCloseRequest.call(this, msg);
        this.dispose();
    };
    PreferencesContainer.prototype.activatePreferenceEditor = function (preferenceScope) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deferredEditors.promise];
                    case 1:
                        _a.sent();
                        this.doActivatePreferenceEditor(preferenceScope);
                        return [2 /*return*/];
                }
            });
        });
    };
    PreferencesContainer.prototype.doActivatePreferenceEditor = function (preferenceScope) {
        this.preferenceScope = preferenceScope;
        if (this.editorsContainer) {
            this.editorsContainer.activatePreferenceEditor(preferenceScope);
        }
    };
    PreferencesContainer.prototype.handleEditorsChanged = function () {
        var _this = this;
        var currentEditors = algorithm_1.toArray(this.editorsContainer.widgets());
        currentEditors.forEach(function (editor) {
            if (editor instanceof browser_2.EditorWidget && _this.editors.findIndex(function (e) { return e === editor; }) < 0) {
                var editorWidget = editor;
                _this.editors.push(editorWidget);
                var savable = editorWidget.saveable;
                savable.onDirtyChanged(function () {
                    _this.onDirtyChangedEmitter.fire(undefined);
                });
            }
        });
        var _loop_1 = function (i) {
            if (currentEditors.findIndex(function (e) { return e === _this.editors[i]; }) < 0) {
                this_1.editors.splice(i, 1);
            }
        };
        var this_1 = this;
        for (var i = this.editors.length - 1; i >= 0; i--) {
            _loop_1(i);
        }
        this.onDidChangeTrackableWidgetsEmitter.fire(this.editors);
        this.doActivatePreferenceEditor(this.preferenceScope);
    };
    PreferencesContainer.prototype.refreshFoldersPreferencesEditor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots, firstRoot;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        roots = this.workspaceService.tryGetRoots();
                        if (!(roots.length === 0)) return [3 /*break*/, 1];
                        this.editorsContainer.closeFoldersPreferenceEditorWidget();
                        return [3 /*break*/, 3];
                    case 1:
                        if (!!roots.some(function (r) { return r.uri === _this.editorsContainer.activeFolder; })) return [3 /*break*/, 3];
                        firstRoot = roots[0];
                        return [4 /*yield*/, this.editorsContainer.refreshFoldersPreferencesEditorWidget(firstRoot ? firstRoot.uri : undefined)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var PreferencesContainer_1;
    PreferencesContainer.ID = 'preferences_container_widget';
    __decorate([
        inversify_1.inject(browser_1.WidgetManager),
        __metadata("design:type", browser_1.WidgetManager)
    ], PreferencesContainer.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], PreferencesContainer.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], PreferencesContainer.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesContainer.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], PreferencesContainer.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesContainer.prototype, "init", null);
    PreferencesContainer = PreferencesContainer_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesContainer);
    return PreferencesContainer;
}(widgets_1.SplitPanel));
exports.PreferencesContainer = PreferencesContainer;
var PreferencesEditorsContainer = /** @class */ (function (_super) {
    __extends(PreferencesEditorsContainer, _super);
    function PreferencesEditorsContainer(workspaceService, fileSystem, foldersPreferenceProvider) {
        var _this = _super.call(this, { renderer: new preference_editor_widget_1.PreferenceEditorContainerTabBarRenderer(workspaceService, fileSystem, foldersPreferenceProvider) }) || this;
        _this.workspaceService = workspaceService;
        _this.fileSystem = fileSystem;
        _this.foldersPreferenceProvider = foldersPreferenceProvider;
        _this.onInitEmitter = new core_1.Emitter();
        _this.onInit = _this.onInitEmitter.event;
        _this.onEditorChangedEmitter = new core_1.Emitter();
        _this.onEditorChanged = _this.onEditorChangedEmitter.event;
        _this.onFolderPreferenceEditorUriChangedEmitter = new core_1.Emitter();
        _this.onFolderPreferenceEditorUriChanged = _this.onFolderPreferenceEditorUriChangedEmitter.event;
        _this.toDispose = new core_1.DisposableCollection(_this.onEditorChangedEmitter, _this.onInitEmitter);
        _this.toDisposeOnDetach = new core_1.DisposableCollection();
        return _this;
    }
    PreferencesEditorsContainer.prototype.dispose = function () {
        this.toDispose.dispose();
        _super.prototype.dispose.call(this);
    };
    PreferencesEditorsContainer.prototype.onCloseRequest = function (msg) {
        algorithm_1.toArray(this.widgets()).forEach(function (widget) { return widget.close(); });
        _super.prototype.onCloseRequest.call(this, msg);
    };
    PreferencesEditorsContainer.prototype.onUpdateRequest = function (msg) {
        var editor = this.selectedWidgets().next();
        if (editor) {
            this.onEditorChangedEmitter.fire(editor);
        }
        _super.prototype.onUpdateRequest.call(this, msg);
    };
    PreferencesEditorsContainer.prototype.onBeforeDetach = function () {
        this.toDisposeOnDetach.dispose();
    };
    PreferencesEditorsContainer.prototype.onAfterAttach = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getUserPreferenceEditorWidget()];
                    case 1:
                        _a.userPreferenceEditorWidget = _b.sent();
                        this.addWidget(this.userPreferenceEditorWidget);
                        return [4 /*yield*/, this.refreshWorkspacePreferenceEditor()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.refreshFoldersPreferencesEditorWidget(undefined)];
                    case 3:
                        _b.sent();
                        _super.prototype.onAfterAttach.call(this, msg);
                        this.onInitEmitter.fire(undefined);
                        this.toDisposeOnDetach.push(this.labelProvider.onDidChange(function () {
                            // Listen to changes made by the label provider and apply updates to the preference editors.
                            var icon = _this.labelProvider.getIcon(new uri_1.default('settings.json'));
                            _this.userPreferenceEditorWidget.title.iconClass = icon;
                            if (_this.workspacePreferenceEditorWidget) {
                                // Explicitly update the workspace preference title to `Workspace` for single and multi-root workspaces.
                                _this.workspacePreferenceEditorWidget.title.label = 'Workspace';
                                _this.workspacePreferenceEditorWidget.title.iconClass = icon;
                            }
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    PreferencesEditorsContainer.prototype.getUserPreferenceEditorWidget = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userPreferenceUri, userPreferences, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        userPreferenceUri = this.userPreferenceProvider.getConfigUri();
                        return [4 /*yield*/, this.editorManager.getOrCreateByUri(userPreferenceUri)];
                    case 1:
                        userPreferences = _c.sent();
                        userPreferences.title.label = 'User';
                        userPreferences.title.iconClass = this.labelProvider.getIcon(new uri_1.default('settings.json'));
                        _a = userPreferences.title;
                        _b = "User Preferences: ";
                        return [4 /*yield*/, this.getPreferenceEditorCaption(userPreferenceUri)];
                    case 2:
                        _a.caption = _b + (_c.sent());
                        userPreferences.scope = browser_1.PreferenceScope.User;
                        return [2 /*return*/, userPreferences];
                }
            });
        });
    };
    PreferencesEditorsContainer.prototype.refreshWorkspacePreferenceEditor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newWorkspacePreferenceEditorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWorkspacePreferenceEditorWidget()];
                    case 1:
                        newWorkspacePreferenceEditorWidget = _a.sent();
                        if (newWorkspacePreferenceEditorWidget) {
                            this.addWidget(newWorkspacePreferenceEditorWidget, { ref: this.workspacePreferenceEditorWidget || this.userPreferenceEditorWidget });
                            if (this.workspacePreferenceEditorWidget) {
                                this.workspacePreferenceEditorWidget.close();
                                this.workspacePreferenceEditorWidget.dispose();
                            }
                            this.workspacePreferenceEditorWidget = newWorkspacePreferenceEditorWidget;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PreferencesEditorsContainer.prototype.getWorkspacePreferenceEditorWidget = function () {
        return __awaiter(this, void 0, void 0, function () {
            var workspacePreferenceUri, workspacePreferences, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        workspacePreferenceUri = this.workspacePreferenceProvider.getConfigUri();
                        _a = workspacePreferenceUri;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.editorManager.getOrCreateByUri(workspacePreferenceUri)];
                    case 1:
                        _a = (_d.sent());
                        _d.label = 2;
                    case 2:
                        workspacePreferences = _a;
                        if (!workspacePreferences) return [3 /*break*/, 4];
                        workspacePreferences.title.label = 'Workspace';
                        _b = workspacePreferences.title;
                        _c = "Workspace Preferences: ";
                        return [4 /*yield*/, this.getPreferenceEditorCaption(workspacePreferenceUri)];
                    case 3:
                        _b.caption = _c + (_d.sent());
                        workspacePreferences.title.iconClass = this.labelProvider.getIcon(new uri_1.default('settings.json'));
                        // workspacePreferences.editor.setLanguage('jsonc');
                        workspacePreferences.scope = browser_1.PreferenceScope.Workspace;
                        _d.label = 4;
                    case 4: return [2 /*return*/, workspacePreferences];
                }
            });
        });
    };
    Object.defineProperty(PreferencesEditorsContainer.prototype, "activeFolder", {
        get: function () {
            if (this.foldersPreferenceEditorWidget) {
                return this.foldersPreferenceEditorWidget.editor.uri.parent.parent.toString();
            }
        },
        enumerable: true,
        configurable: true
    });
    PreferencesEditorsContainer.prototype.refreshFoldersPreferencesEditorWidget = function (currentFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var folders, newFolderUri, newFoldersPreferenceEditorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        folders = this.workspaceService.tryGetRoots().map(function (r) { return r.uri; });
                        newFolderUri = currentFolderUri || folders[0];
                        return [4 /*yield*/, this.getFoldersPreferencesEditor(newFolderUri)];
                    case 1:
                        newFoldersPreferenceEditorWidget = _a.sent();
                        if (newFoldersPreferenceEditorWidget && // new widget is created
                            // the FolderPreferencesEditor is not available, OR the existing FolderPreferencesEditor is displaying the content of a different file
                            (!this.foldersPreferenceEditorWidget || this.foldersPreferenceEditorWidget.editor.uri.parent.parent.toString() !== newFolderUri)) {
                            this.addWidget(newFoldersPreferenceEditorWidget, { ref: this.foldersPreferenceEditorWidget || this.workspacePreferenceEditorWidget || this.userPreferenceEditorWidget });
                            this.closeFoldersPreferenceEditorWidget();
                            this.foldersPreferenceEditorWidget = newFoldersPreferenceEditorWidget;
                            this.onFolderPreferenceEditorUriChangedEmitter.fire(newFoldersPreferenceEditorWidget.editor.uri.toString());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PreferencesEditorsContainer.prototype.closeFoldersPreferenceEditorWidget = function () {
        if (this.foldersPreferenceEditorWidget) {
            this.foldersPreferenceEditorWidget.close();
            this.foldersPreferenceEditorWidget.dispose();
            this.foldersPreferenceEditorWidget = undefined;
        }
    };
    PreferencesEditorsContainer.prototype.getFoldersPreferencesEditor = function (folderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var settingsUri, foldersPreferences_1, _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.workspaceService.saved) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getFolderSettingsUri(folderUri)];
                    case 1:
                        settingsUri = _d.sent();
                        _a = settingsUri;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.editorManager.getOrCreateByUri(settingsUri)];
                    case 2:
                        _a = (_d.sent());
                        _d.label = 3;
                    case 3:
                        foldersPreferences_1 = _a;
                        if (!foldersPreferences_1) return [3 /*break*/, 5];
                        foldersPreferences_1.title.label = 'Folder';
                        _b = foldersPreferences_1.title;
                        _c = "Folder Preferences: ";
                        return [4 /*yield*/, this.getPreferenceEditorCaption(settingsUri)];
                    case 4:
                        _b.caption = _c + (_d.sent());
                        foldersPreferences_1.title.clickableText = new uri_1.default(folderUri).displayName;
                        foldersPreferences_1.title.clickableTextTooltip = 'Click to manage preferences in another folder';
                        foldersPreferences_1.title.clickableTextCallback = function (folderUriStr) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, foldersPreferences_1.saveable.save()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.refreshFoldersPreferencesEditorWidget(folderUriStr)];
                                    case 2:
                                        _a.sent();
                                        this.activatePreferenceEditor(browser_1.PreferenceScope.Folder);
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        foldersPreferences_1.scope = browser_1.PreferenceScope.Folder;
                        _d.label = 5;
                    case 5: return [2 /*return*/, foldersPreferences_1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PreferencesEditorsContainer.prototype.getFolderSettingsUri = function (folderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var configUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        configUri = this.foldersPreferenceProvider.getConfigUri(folderUri);
                        if (!!configUri) return [3 /*break*/, 2];
                        configUri = this.foldersPreferenceProvider.getContainingConfigUri(folderUri);
                        if (!configUri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.createFile(configUri.toString())];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, configUri];
                }
            });
        });
    };
    PreferencesEditorsContainer.prototype.activatePreferenceEditor = function (preferenceScope) {
        var e_1, _a;
        try {
            for (var _b = __values(algorithm_1.toArray(this.widgets())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var widget = _c.value;
                var preferenceEditor = widget;
                if (preferenceEditor.scope === preferenceScope) {
                    this.activateWidget(widget);
                    break;
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
    };
    PreferencesEditorsContainer.prototype.getPreferenceEditorCaption = function (preferenceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var homeStat, homeUri, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.getCurrentUserHome()];
                    case 1:
                        homeStat = _a.sent();
                        homeUri = homeStat ? new uri_1.default(homeStat.uri) : undefined;
                        uri = preferenceUri;
                        if (preferenceUri.scheme === browser_3.UserStorageUri.SCHEME && homeUri) {
                            uri = homeUri.resolve(browser_3.THEIA_USER_STORAGE_FOLDER).resolve(preferenceUri.path);
                        }
                        return [2 /*return*/, homeUri
                                ? common_1.FileSystemUtils.tildifyPath(uri.path.toString(), homeUri.path.toString())
                                : uri.path.toString()];
                }
            });
        });
    };
    PreferencesEditorsContainer.ID = 'preferences_editors_container';
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], PreferencesEditorsContainer.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], PreferencesEditorsContainer.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceProvider), inversify_1.named(browser_1.PreferenceScope.User),
        __metadata("design:type", user_preference_provider_1.UserPreferenceProvider)
    ], PreferencesEditorsContainer.prototype, "userPreferenceProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceProvider), inversify_1.named(browser_1.PreferenceScope.Workspace),
        __metadata("design:type", workspace_preference_provider_1.WorkspacePreferenceProvider)
    ], PreferencesEditorsContainer.prototype, "workspacePreferenceProvider", void 0);
    PreferencesEditorsContainer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(workspace_service_1.WorkspaceService)),
        __param(1, inversify_1.inject(common_1.FileSystem)),
        __param(2, inversify_1.inject(browser_1.PreferenceProvider)), __param(2, inversify_1.named(browser_1.PreferenceScope.Folder)),
        __metadata("design:paramtypes", [workspace_service_1.WorkspaceService, Object, folders_preferences_provider_1.FoldersPreferencesProvider])
    ], PreferencesEditorsContainer);
    return PreferencesEditorsContainer;
}(widgets_1.DockPanel));
exports.PreferencesEditorsContainer = PreferencesEditorsContainer;
var PreferencesTreeWidget = /** @class */ (function (_super) {
    __extends(PreferencesTreeWidget, _super);
    function PreferencesTreeWidget(model, treeProps, contextMenuRenderer, preferenceSchemaProvider) {
        var _this = _super.call(this, treeProps, model, contextMenuRenderer) || this;
        _this.model = model;
        _this.treeProps = treeProps;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.preferenceSchemaProvider = preferenceSchemaProvider;
        _this.preferencesGroupNames = new Set();
        _this.onPreferenceSelectedEmitter = new core_1.Emitter();
        _this.onPreferenceSelected = _this.onPreferenceSelectedEmitter.event;
        _this.toDispose = new core_1.DisposableCollection();
        _this.toDispose.push(_this.onPreferenceSelectedEmitter);
        _this.id = PreferencesTreeWidget_1.ID;
        return _this;
    }
    PreferencesTreeWidget_1 = PreferencesTreeWidget;
    PreferencesTreeWidget.prototype.dispose = function () {
        this.toDispose.dispose();
        _super.prototype.dispose.call(this);
    };
    PreferencesTreeWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        this.initializeModel();
        this.toDisposeOnDetach.push(this.preferenceSchemaProvider.onDidPreferenceSchemaChanged(function () {
            _this.initializeModel();
        }));
        _super.prototype.onAfterAttach.call(this, msg);
    };
    PreferencesTreeWidget.prototype.handleContextMenuEvent = function (node, event) {
        _super.prototype.handleContextMenuEvent.call(this, node, event);
        if (node.expanded === undefined) {
            this.openContextMenu(node, event.nativeEvent.x, event.nativeEvent.y);
        }
    };
    PreferencesTreeWidget.prototype.handleClickEvent = function (node, event) {
        _super.prototype.handleClickEvent.call(this, node, event);
        if (node.expanded === undefined) {
            this.openContextMenu(node, event.nativeEvent.x, event.nativeEvent.y);
        }
    };
    PreferencesTreeWidget.prototype.handleEnter = function (event) {
        _super.prototype.handleEnter.call(this, event);
        var node = this.model.selectedNodes[0];
        if (node.expanded === undefined) {
            if (node) {
                var nodeElement = document.getElementById(node.id);
                if (nodeElement) {
                    var position = nodeElement.getBoundingClientRect();
                    this.openContextMenu(this.model.selectedNodes[0], position.left, position.bottom);
                }
            }
        }
    };
    PreferencesTreeWidget.prototype.openContextMenu = function (node, positionX, positionY) {
        var _this = this;
        if (node && browser_1.SelectableTreeNode.is(node)) {
            var contextMenu = this.preferencesMenuFactory.createPreferenceContextMenu(node.id, this.preferenceService.get(node.id, undefined, this.activeFolderUri), this.properties[node.id], function (property, value) {
                var _a;
                _this.onPreferenceSelectedEmitter.fire((_a = {}, _a[property] = value, _a));
            });
            contextMenu.aboutToClose.connect(function () {
                _this.activate();
            });
            contextMenu.activeItem = contextMenu.items[0];
            contextMenu.open(positionX, positionY);
        }
    };
    PreferencesTreeWidget.prototype.initializeModel = function () {
        var e_2, _a;
        var _this = this;
        this.properties = this.preferenceSchemaProvider.getCombinedSchema().properties;
        for (var property in this.properties) {
            if (property) {
                // Compute preference group name and accept those which have the proper format.
                var group = property.substring(0, property.indexOf('.'));
                if (property.split('.').length > 1) {
                    this.preferencesGroupNames.add(group);
                }
            }
        }
        var preferencesGroups = [];
        var nodes = [];
        var groupNames = Array.from(this.preferencesGroupNames).sort(function (a, b) { return _this.sort(a, b); });
        var root = {
            id: 'root-node-id',
            name: 'Apply the preference to selected preferences file',
            parent: undefined,
            visible: true,
            children: preferencesGroups,
            expanded: true,
        };
        var _loop_2 = function (group) {
            var propertyNodes = [];
            var properties = [];
            // Add a preference property if it is currently part of the group name.
            // Properties which satisfy the condition `isSectionName` should not be added.
            for (var property in this_2.properties) {
                if (property.split('.', 1)[0] === group &&
                    !this_2.preferenceConfigs.isSectionName(property)) {
                    properties.push(property);
                }
            }
            // Build the group name node (used to categorize common preferences together).
            var preferencesGroup = {
                id: group + '-id',
                name: group.toLocaleUpperCase().substring(0, 1) + group.substring(1) + ' (' + properties.length + ')',
                visible: true,
                parent: root,
                children: propertyNodes,
                expanded: false,
                selected: false
            };
            properties.sort(function (a, b) { return _this.sort(a, b); }).forEach(function (property) {
                var _a;
                var node = {
                    id: property,
                    name: property.substring(property.indexOf('.') + 1),
                    parent: preferencesGroup,
                    visible: true,
                    selected: false
                };
                propertyNodes.push(node);
                nodes.push((_a = {}, _a[property] = _this.properties[property], _a));
            });
            preferencesGroups.push(preferencesGroup);
        };
        var this_2 = this;
        try {
            for (var groupNames_1 = __values(groupNames), groupNames_1_1 = groupNames_1.next(); !groupNames_1_1.done; groupNames_1_1 = groupNames_1.next()) {
                var group = groupNames_1_1.value;
                _loop_2(group);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (groupNames_1_1 && !groupNames_1_1.done && (_a = groupNames_1.return)) _a.call(groupNames_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.decorator.fireDidChangeDecorations(nodes);
        this.model.root = root;
    };
    PreferencesTreeWidget.prototype.setActiveFolder = function (folder) {
        this.activeFolderUri = folder;
        this.decorator.setActiveFolder(folder);
    };
    /**
     * Sort two string.
     *
     * @param a the first string.
     * @param b the second string.
     */
    PreferencesTreeWidget.prototype.sort = function (a, b) {
        return a.localeCompare(b, undefined, { ignorePunctuation: true });
    };
    var PreferencesTreeWidget_1;
    PreferencesTreeWidget.ID = 'preferences_tree_widget';
    __decorate([
        inversify_1.inject(preferences_menu_factory_1.PreferencesMenuFactory),
        __metadata("design:type", preferences_menu_factory_1.PreferencesMenuFactory)
    ], PreferencesTreeWidget.prototype, "preferencesMenuFactory", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesTreeWidget.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(preferences_decorator_1.PreferencesDecorator),
        __metadata("design:type", preferences_decorator_1.PreferencesDecorator)
    ], PreferencesTreeWidget.prototype, "decorator", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferencesTreeWidget.prototype, "preferenceConfigs", void 0);
    PreferencesTreeWidget = PreferencesTreeWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.TreeModel)),
        __param(1, inversify_1.inject(browser_1.TreeProps)),
        __param(2, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __param(3, inversify_1.inject(browser_1.PreferenceSchemaProvider)),
        __metadata("design:paramtypes", [Object, Object, Object, browser_1.PreferenceSchemaProvider])
    ], PreferencesTreeWidget);
    return PreferencesTreeWidget;
}(browser_1.TreeWidget));
exports.PreferencesTreeWidget = PreferencesTreeWidget;
//# sourceMappingURL=preferences-tree-widget.js.map
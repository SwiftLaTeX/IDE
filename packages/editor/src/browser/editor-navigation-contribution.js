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
var logger_1 = require("@theia/core/lib/common/logger");
var storage_service_1 = require("@theia/core/lib/browser/storage-service");
var disposable_1 = require("@theia/core/lib/common/disposable");
var command_1 = require("@theia/core/lib/common/command");
var editor_command_1 = require("./editor-command");
var editor_manager_1 = require("./editor-manager");
var navigation_location_1 = require("./navigation/navigation-location");
var navigation_location_service_1 = require("./navigation/navigation-location-service");
var browser_1 = require("@theia/core/lib/browser");
var EditorNavigationContribution = /** @class */ (function () {
    function EditorNavigationContribution() {
        this.toDispose = new disposable_1.DisposableCollection();
        this.toDisposePerCurrentEditor = new disposable_1.DisposableCollection();
    }
    EditorNavigationContribution_1 = EditorNavigationContribution;
    EditorNavigationContribution.prototype.init = function () {
        var _this = this;
        this.toDispose.pushAll([
            // TODO listen on file resource changes, if a file gets deleted, remove the corresponding navigation locations (if any).
            // This would require introducing the FS dependency in the editor extension.
            this.editorManager.onCurrentEditorChanged(this.onCurrentEditorChanged.bind(this))
        ]);
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.GO_BACK.id, {
            execute: function () { return _this.locationStack.back(); },
            isEnabled: function () { return _this.locationStack.canGoBack(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.GO_FORWARD.id, {
            execute: function () { return _this.locationStack.forward(); },
            isEnabled: function () { return _this.locationStack.canGoForward(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.GO_LAST_EDIT.id, {
            execute: function () { return _this.locationStack.reveal(_this.locationStack.lastEditLocation()); },
            isEnabled: function () { return !!_this.locationStack.lastEditLocation(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.CLEAR_EDITOR_HISTORY.id, {
            execute: function () { return _this.locationStack.clearHistory(); },
            isEnabled: function () { return _this.locationStack.locations().length > 0; }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.TOGGLE_MINIMAP.id, {
            execute: function () { return _this.toggleMinimap(); },
            isEnabled: function () { return true; },
            isToggled: function () { return _this.isMinimapEnabled(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.TOGGLE_RENDER_WHITESPACE.id, {
            execute: function () { return _this.toggleRenderWhitespace(); },
            isEnabled: function () { return true; },
            isToggled: function () { return _this.isRenderWhitespaceEnabled(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.TOGGLE_WORD_WRAP.id, {
            execute: function () { return _this.toggleWordWrap(); },
            isEnabled: function () { return true; },
        });
    };
    EditorNavigationContribution.prototype.onStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restoreState()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorNavigationContribution.prototype.onStop = function () {
        this.storeState();
        this.dispose();
    };
    EditorNavigationContribution.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /**
     * Toggle the editor word wrap behavior.
     */
    EditorNavigationContribution.prototype.toggleWordWrap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wordWrap, values, index;
            return __generator(this, function (_a) {
                wordWrap = this.preferenceService.get('editor.wordWrap');
                if (wordWrap === undefined) {
                    return [2 /*return*/];
                }
                values = ['off', 'on', 'wordWrapColumn', 'bounded'];
                index = values.indexOf(wordWrap) + 1;
                if (index > -1) {
                    this.preferenceService.set('editor.wordWrap', values[index % values.length], browser_1.PreferenceScope.User);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Toggle the display of minimap in the editor.
     */
    EditorNavigationContribution.prototype.toggleMinimap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                value = this.preferenceService.get('editor.minimap.enabled');
                this.preferenceService.set('editor.minimap.enabled', !value, browser_1.PreferenceScope.User);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Toggle the rendering of whitespace in the editor.
     */
    EditorNavigationContribution.prototype.toggleRenderWhitespace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var renderWhitespace, updatedRenderWhitespace;
            return __generator(this, function (_a) {
                renderWhitespace = this.preferenceService.get('editor.renderWhitespace');
                if (renderWhitespace === 'none') {
                    updatedRenderWhitespace = 'all';
                }
                else {
                    updatedRenderWhitespace = 'none';
                }
                this.preferenceService.set('editor.renderWhitespace', updatedRenderWhitespace, browser_1.PreferenceScope.User);
                return [2 /*return*/];
            });
        });
    };
    EditorNavigationContribution.prototype.onCurrentEditorChanged = function (editorWidget) {
        var _this = this;
        this.toDisposePerCurrentEditor.dispose();
        if (editorWidget) {
            var editor_1 = editorWidget.editor;
            this.toDisposePerCurrentEditor.pushAll([
                // Instead of registering an `onCursorPositionChanged` listener, we treat the zero length selection as a cursor position change.
                // Otherwise we would have two events for a single cursor change interaction.
                editor_1.onSelectionChanged(function (selection) { return _this.onSelectionChanged(editor_1, selection); }),
                editor_1.onDocumentContentChanged(function (event) { return _this.onDocumentContentChanged(editor_1, event); })
            ]);
            this.locationStack.register(navigation_location_1.NavigationLocation.create(editor_1, editor_1.selection));
        }
    };
    EditorNavigationContribution.prototype.onCursorPositionChanged = function (editor, position) {
        this.locationStack.register(navigation_location_1.NavigationLocation.create(editor, position));
    };
    EditorNavigationContribution.prototype.onSelectionChanged = function (editor, selection) {
        if (this.isZeroLengthRange(selection)) {
            this.onCursorPositionChanged(editor, selection.start);
        }
        else {
            this.locationStack.register(navigation_location_1.NavigationLocation.create(editor, selection));
        }
    };
    EditorNavigationContribution.prototype.onDocumentContentChanged = function (editor, event) {
        if (event.contentChanges.length > 0) {
            this.locationStack.register(navigation_location_1.NavigationLocation.create(editor, event.contentChanges[0]));
        }
    };
    /**
     * `true` if the `range` argument has zero length. In other words, the `start` and the `end` positions are the same. Otherwise, `false`.
     */
    EditorNavigationContribution.prototype.isZeroLengthRange = function (range) {
        var start = range.start, end = range.end;
        return start.line === end.line && start.character === end.character;
    };
    EditorNavigationContribution.prototype.storeState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.storageService.setData(EditorNavigationContribution_1.ID, {
                    locations: this.locationStack.locations().map(navigation_location_1.NavigationLocation.toObject)
                });
                return [2 /*return*/];
            });
        });
    };
    EditorNavigationContribution.prototype.restoreState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var raw, locations, i, location_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.storageService.getData(EditorNavigationContribution_1.ID)];
                    case 1:
                        raw = _b.sent();
                        if (raw && raw.locations) {
                            locations = [];
                            for (i = 0; i < raw.locations.length; i++) {
                                location_1 = navigation_location_1.NavigationLocation.fromObject(raw.locations[i]);
                                if (location_1) {
                                    locations.push(location_1);
                                }
                                else {
                                    this.logger.warn('Could not restore the state of the editor navigation history.');
                                    return [2 /*return*/];
                                }
                            }
                            (_a = this.locationStack).register.apply(_a, __spread(locations));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorNavigationContribution.prototype.isMinimapEnabled = function () {
        return !!this.preferenceService.get('editor.minimap.enabled');
    };
    EditorNavigationContribution.prototype.isRenderWhitespaceEnabled = function () {
        var renderWhitespace = this.preferenceService.get('editor.renderWhitespace');
        return renderWhitespace === 'none' ? false : true;
    };
    var EditorNavigationContribution_1;
    EditorNavigationContribution.ID = 'editor-navigation-contribution';
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], EditorNavigationContribution.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorNavigationContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(navigation_location_service_1.NavigationLocationService),
        __metadata("design:type", navigation_location_service_1.NavigationLocationService)
    ], EditorNavigationContribution.prototype, "locationStack", void 0);
    __decorate([
        inversify_1.inject(storage_service_1.StorageService),
        __metadata("design:type", Object)
    ], EditorNavigationContribution.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], EditorNavigationContribution.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], EditorNavigationContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditorNavigationContribution.prototype, "init", null);
    EditorNavigationContribution = EditorNavigationContribution_1 = __decorate([
        inversify_1.injectable()
    ], EditorNavigationContribution);
    return EditorNavigationContribution;
}());
exports.EditorNavigationContribution = EditorNavigationContribution;
//# sourceMappingURL=editor-navigation-contribution.js.map
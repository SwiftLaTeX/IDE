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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var blame_decorator_1 = require("./blame-decorator");
var browser_1 = require("@theia/editor/lib/browser");
var blame_manager_1 = require("./blame-manager");
var git_contribution_1 = require("../git-contribution");
var debounce = require("lodash.debounce");
var BlameCommands;
(function (BlameCommands) {
    BlameCommands.TOGGLE_GIT_ANNOTATIONS = {
        id: 'git.editor.toggle.annotations',
        category: 'Git',
        label: 'Toggle Blame Annotations'
    };
    BlameCommands.CLEAR_GIT_ANNOTATIONS = {
        id: 'git.editor.clear.annotations'
    };
})(BlameCommands = exports.BlameCommands || (exports.BlameCommands = {}));
var BlameContribution = /** @class */ (function () {
    function BlameContribution() {
        this.appliedDecorations = new Map();
    }
    BlameContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(BlameCommands.TOGGLE_GIT_ANNOTATIONS, {
            execute: function () {
                var editorWidget = _this.currentFileEditorWidget;
                if (editorWidget) {
                    if (_this.showsBlameAnnotations(editorWidget.editor.uri)) {
                        _this.clearBlame(editorWidget.editor.uri);
                    }
                    else {
                        _this.showBlame(editorWidget);
                    }
                }
            },
            isVisible: function () {
                return !!_this.currentFileEditorWidget;
            },
            isEnabled: function () {
                var editorWidget = _this.currentFileEditorWidget;
                return !!editorWidget && _this.isBlameable(editorWidget.editor.uri);
            }
        });
        commands.registerCommand(BlameCommands.CLEAR_GIT_ANNOTATIONS, {
            execute: function () {
                var editorWidget = _this.currentFileEditorWidget;
                if (editorWidget) {
                    _this.clearBlame(editorWidget.editor.uri);
                }
            },
            isVisible: function () {
                return !!_this.currentFileEditorWidget;
            },
            isEnabled: function () {
                var editorWidget = _this.currentFileEditorWidget;
                var enabled = !!editorWidget && _this.showsBlameAnnotations(editorWidget.editor.uri);
                return enabled;
            }
        });
    };
    BlameContribution.prototype.showsBlameAnnotations = function (uri) {
        return this.appliedDecorations.has(uri.toString());
    };
    Object.defineProperty(BlameContribution.prototype, "currentFileEditorWidget", {
        get: function () {
            var editorWidget = this.editorManager.currentEditor;
            if (editorWidget) {
                if (editorWidget.editor.uri.scheme === 'file') {
                    return editorWidget;
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    BlameContribution.prototype.isBlameable = function (uri) {
        return this.blameManager.isBlameable(uri.toString());
    };
    BlameContribution.prototype.showBlame = function (editorWidget) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, editor, document, content, blame, toDispose_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = editorWidget.editor.uri.toString();
                        if (this.appliedDecorations.get(uri)) {
                            return [2 /*return*/];
                        }
                        editor = editorWidget.editor;
                        document = editor.document;
                        content = document.dirty ? document.getText() : undefined;
                        return [4 /*yield*/, this.blameManager.getBlame(uri, content)];
                    case 1:
                        blame = _a.sent();
                        if (blame) {
                            toDispose_1 = new common_1.DisposableCollection();
                            this.appliedDecorations.set(uri, toDispose_1);
                            toDispose_1.push(this.decorator.decorate(blame, editor, editor.cursor.line));
                            toDispose_1.push(editor.onDocumentContentChanged(function () { return _this.clearBlame(uri); }));
                            toDispose_1.push(editor.onCursorPositionChanged(debounce(function (_position) {
                                if (!toDispose_1.disposed) {
                                    _this.decorator.decorate(blame, editor, editor.cursor.line);
                                }
                            }, 50)));
                            editorWidget.disposed.connect(function () { return _this.clearBlame(uri); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BlameContribution.prototype.clearBlame = function (uri) {
        var decorations = this.appliedDecorations.get(uri.toString());
        if (decorations) {
            this.appliedDecorations.delete(uri.toString());
            decorations.dispose();
        }
    };
    BlameContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(git_contribution_1.EDITOR_CONTEXT_MENU_GIT, {
            commandId: BlameCommands.TOGGLE_GIT_ANNOTATIONS.id,
        });
    };
    BlameContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: BlameCommands.TOGGLE_GIT_ANNOTATIONS.id,
            context: browser_1.EditorKeybindingContexts.editorTextFocus,
            keybinding: 'alt+b'
        });
        keybindings.registerKeybinding({
            command: BlameCommands.CLEAR_GIT_ANNOTATIONS.id,
            context: BlameAnnotationsKeybindingContext.showsBlameAnnotations,
            keybinding: 'esc'
        });
    };
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], BlameContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(blame_decorator_1.BlameDecorator),
        __metadata("design:type", blame_decorator_1.BlameDecorator)
    ], BlameContribution.prototype, "decorator", void 0);
    __decorate([
        inversify_1.inject(blame_manager_1.BlameManager),
        __metadata("design:type", blame_manager_1.BlameManager)
    ], BlameContribution.prototype, "blameManager", void 0);
    BlameContribution = __decorate([
        inversify_1.injectable()
    ], BlameContribution);
    return BlameContribution;
}());
exports.BlameContribution = BlameContribution;
var BlameAnnotationsKeybindingContext = /** @class */ (function (_super) {
    __extends(BlameAnnotationsKeybindingContext, _super);
    function BlameAnnotationsKeybindingContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = BlameAnnotationsKeybindingContext_1.showsBlameAnnotations;
        return _this;
    }
    BlameAnnotationsKeybindingContext_1 = BlameAnnotationsKeybindingContext;
    BlameAnnotationsKeybindingContext.prototype.canHandle = function (widget) {
        return this.base.isEnabled() && this.blameContribution.showsBlameAnnotations(widget.editor.uri);
    };
    var BlameAnnotationsKeybindingContext_1;
    __decorate([
        inversify_1.inject(BlameContribution),
        __metadata("design:type", BlameContribution)
    ], BlameAnnotationsKeybindingContext.prototype, "blameContribution", void 0);
    __decorate([
        inversify_1.inject(browser_1.StrictEditorTextFocusContext),
        __metadata("design:type", browser_1.StrictEditorTextFocusContext)
    ], BlameAnnotationsKeybindingContext.prototype, "base", void 0);
    BlameAnnotationsKeybindingContext = BlameAnnotationsKeybindingContext_1 = __decorate([
        inversify_1.injectable()
    ], BlameAnnotationsKeybindingContext);
    return BlameAnnotationsKeybindingContext;
}(browser_1.EditorTextFocusContext));
exports.BlameAnnotationsKeybindingContext = BlameAnnotationsKeybindingContext;
(function (BlameAnnotationsKeybindingContext) {
    BlameAnnotationsKeybindingContext.showsBlameAnnotations = 'showsBlameAnnotations';
})(BlameAnnotationsKeybindingContext = exports.BlameAnnotationsKeybindingContext || (exports.BlameAnnotationsKeybindingContext = {}));
exports.BlameAnnotationsKeybindingContext = BlameAnnotationsKeybindingContext;
//# sourceMappingURL=blame-contribution.js.map
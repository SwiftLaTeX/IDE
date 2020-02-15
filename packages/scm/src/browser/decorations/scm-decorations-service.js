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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var dirty_diff_decorator_1 = require("../dirty-diff/dirty-diff-decorator");
var diff_computer_1 = require("../dirty-diff/diff-computer");
var content_lines_1 = require("../dirty-diff/content-lines");
var browser_1 = require("@theia/editor/lib/browser");
var scm_service_1 = require("../scm-service");
var ScmDecorationsService = /** @class */ (function () {
    function ScmDecorationsService(decorator, scmService, editorManager, resourceProvider) {
        var _this = this;
        this.decorator = decorator;
        this.scmService = scmService;
        this.editorManager = editorManager;
        this.resourceProvider = resourceProvider;
        this.NavigatorDecorationsEmitter = new core_1.Emitter();
        this.dirtyState = true;
        this.diffComputer = new diff_computer_1.DiffComputer();
        this.editorManager.onCreated(function (editor) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.applyEditorDecorations(editor.editor)];
        }); }); });
        this.scmService.onDidAddRepository(function (repository) { return repository.provider.onDidChange(function () {
            var editor = _this.editorManager.currentEditor;
            if (editor) {
                if (_this.dirtyState) {
                    _this.applyEditorDecorations(editor.editor);
                    _this.dirtyState = false;
                }
                else {
                    /** onDidChange event might be called several times one after another, so need to prevent repeated events. */
                    setTimeout(function () {
                        _this.dirtyState = true;
                    }, 500);
                }
            }
        }); });
        this.scmService.onDidChangeSelectedRepository(function () {
            var editor = _this.editorManager.currentEditor;
            if (editor) {
                _this.applyEditorDecorations(editor.editor);
            }
        });
    }
    ScmDecorationsService.prototype.applyEditorDecorations = function (editor) {
        return __awaiter(this, void 0, void 0, function () {
            var currentRepo, uri, previousResource, previousContent, previousLines, currentResource, currentContent, currentLines, _a, added, removed, modified, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentRepo = this.scmService.selectedRepository;
                        if (!currentRepo) return [3 /*break*/, 7];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        uri = editor.uri.withScheme(currentRepo.provider.id).withQuery("{\"ref\":\"\", \"path\":\"" + editor.uri.path.toString() + "\"}");
                        return [4 /*yield*/, this.resourceProvider(uri)];
                    case 2:
                        previousResource = _b.sent();
                        return [4 /*yield*/, previousResource.readContents()];
                    case 3:
                        previousContent = _b.sent();
                        previousLines = content_lines_1.ContentLines.fromString(previousContent);
                        return [4 /*yield*/, this.resourceProvider(editor.uri)];
                    case 4:
                        currentResource = _b.sent();
                        return [4 /*yield*/, currentResource.readContents()];
                    case 5:
                        currentContent = _b.sent();
                        currentLines = content_lines_1.ContentLines.fromString(currentContent);
                        _a = this.diffComputer.computeDirtyDiff(content_lines_1.ContentLines.arrayLike(previousLines), content_lines_1.ContentLines.arrayLike(currentLines)), added = _a.added, removed = _a.removed, modified = _a.modified;
                        this.decorator.applyDecorations({ editor: editor, added: added, removed: removed, modified: modified });
                        currentResource.dispose();
                        previousResource.dispose();
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ScmDecorationsService.prototype, "onNavigatorDecorationsChanged", {
        get: function () {
            return this.NavigatorDecorationsEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    ScmDecorationsService.prototype.fireNavigatorDecorationsChanged = function (data) {
        this.NavigatorDecorationsEmitter.fire(data);
    };
    ScmDecorationsService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(dirty_diff_decorator_1.DirtyDiffDecorator)),
        __param(1, inversify_1.inject(scm_service_1.ScmService)),
        __param(2, inversify_1.inject(browser_1.EditorManager)),
        __param(3, inversify_1.inject(core_1.ResourceProvider)),
        __metadata("design:paramtypes", [dirty_diff_decorator_1.DirtyDiffDecorator,
            scm_service_1.ScmService,
            browser_1.EditorManager, Function])
    ], ScmDecorationsService);
    return ScmDecorationsService;
}());
exports.ScmDecorationsService = ScmDecorationsService;
//# sourceMappingURL=scm-decorations-service.js.map
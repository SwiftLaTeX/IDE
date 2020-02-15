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
var inversify_1 = require("inversify");
var monaco_languageclient_1 = require("monaco-languageclient");
var uri_1 = require("@theia/core/lib/common/uri");
var common_1 = require("@theia/core/lib/common");
var common_2 = require("@theia/filesystem/lib/common");
var browser_1 = require("@theia/filesystem/lib/browser");
var browser_2 = require("@theia/workspace/lib/browser");
var browser_3 = require("@theia/editor/lib/browser");
var lang = require("@theia/languages/lib/browser");
var browser_4 = require("@theia/languages/lib/browser");
var monaco_text_model_service_1 = require("./monaco-text-model-service");
var monaco_editor_1 = require("./monaco-editor");
var monaco_configurations_1 = require("./monaco-configurations");
var browser_5 = require("@theia/markers/lib/browser");
var CreateResourceEdit;
(function (CreateResourceEdit) {
    function is(arg) {
        return 'newUri' in arg
            && typeof arg.newUri === 'string' // eslint-disable-line @typescript-eslint/no-explicit-any
            && (!('oldUri' in arg) || typeof arg.oldUri === 'undefined'); // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    CreateResourceEdit.is = is;
})(CreateResourceEdit = exports.CreateResourceEdit || (exports.CreateResourceEdit = {}));
var DeleteResourceEdit;
(function (DeleteResourceEdit) {
    function is(arg) {
        return 'oldUri' in arg
            && typeof arg.oldUri === 'string' // eslint-disable-line @typescript-eslint/no-explicit-any
            && (!('newUri' in arg) || typeof arg.newUri === 'undefined'); // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    DeleteResourceEdit.is = is;
})(DeleteResourceEdit = exports.DeleteResourceEdit || (exports.DeleteResourceEdit = {}));
var RenameResourceEdit;
(function (RenameResourceEdit) {
    function is(arg) {
        return 'oldUri' in arg
            && typeof arg.oldUri === 'string' // eslint-disable-line @typescript-eslint/no-explicit-any
            && 'newUri' in arg
            && typeof arg.newUri === 'string'; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    RenameResourceEdit.is = is;
})(RenameResourceEdit = exports.RenameResourceEdit || (exports.RenameResourceEdit = {}));
var TextEdits;
(function (TextEdits) {
    function is(arg) {
        return 'uri' in arg
            && typeof arg.uri === 'string'; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    TextEdits.is = is;
    function isVersioned(arg) {
        return is(arg) && arg.version !== undefined;
    }
    TextEdits.isVersioned = isVersioned;
})(TextEdits = exports.TextEdits || (exports.TextEdits = {}));
var EditsByEditor;
(function (EditsByEditor) {
    function is(arg) {
        return TextEdits.is(arg)
            && 'editor' in arg
            && arg.editor instanceof monaco_editor_1.MonacoEditor; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    EditsByEditor.is = is;
})(EditsByEditor = exports.EditsByEditor || (exports.EditsByEditor = {}));
var MonacoWorkspace = /** @class */ (function () {
    function MonacoWorkspace() {
        var _this = this;
        this.capabilities = {
            applyEdit: true,
            workspaceEdit: {
                documentChanges: true
            }
        };
        this.ready = new Promise(function (resolve) {
            _this.resolveReady = resolve;
        });
        this.onDidOpenTextDocumentEmitter = new browser_4.Emitter();
        this.onDidOpenTextDocument = this.onDidOpenTextDocumentEmitter.event;
        this.onDidCloseTextDocumentEmitter = new browser_4.Emitter();
        this.onDidCloseTextDocument = this.onDidCloseTextDocumentEmitter.event;
        this.onDidChangeTextDocumentEmitter = new browser_4.Emitter();
        this.onDidChangeTextDocument = this.onDidChangeTextDocumentEmitter.event;
        this.onWillSaveTextDocumentEmitter = new browser_4.Emitter();
        this.onWillSaveTextDocument = this.onWillSaveTextDocumentEmitter.event;
        this.onDidSaveTextDocumentEmitter = new browser_4.Emitter();
        this.onDidSaveTextDocument = this.onDidSaveTextDocumentEmitter.event;
        this._rootUri = null;
        this.suppressedOpenIfDirty = [];
    }
    MonacoWorkspace.prototype.init = function () {
        var e_1, _a;
        var _this = this;
        this.workspaceService.roots.then(function (roots) {
            var rootStat = roots[0];
            if (rootStat) {
                _this._rootUri = rootStat.uri;
                _this.resolveReady();
            }
        });
        try {
            for (var _b = __values(this.textModelService.models), _c = _b.next(); !_c.done; _c = _b.next()) {
                var model = _c.value;
                this.fireDidOpen(model);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.textModelService.onDidCreate(function (model) { return _this.fireDidOpen(model); });
    };
    Object.defineProperty(MonacoWorkspace.prototype, "rootUri", {
        get: function () {
            return this._rootUri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoWorkspace.prototype, "rootPath", {
        get: function () {
            return this._rootUri && new uri_1.default(this._rootUri).path.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoWorkspace.prototype, "textDocuments", {
        get: function () {
            return this.textModelService.models;
        },
        enumerable: true,
        configurable: true
    });
    MonacoWorkspace.prototype.getTextDocument = function (uri) {
        return this.textModelService.get(uri);
    };
    MonacoWorkspace.prototype.fireDidOpen = function (model) {
        var _this = this;
        this.doFireDidOpen(model);
        model.textEditorModel.onDidChangeLanguage(function (e) {
            _this.problems.cleanAllMarkers(new uri_1.default(model.uri));
            model.setLanguageId(e.oldLanguage);
            try {
                _this.fireDidClose(model);
            }
            finally {
                model.setLanguageId(undefined);
            }
            _this.doFireDidOpen(model);
        });
        model.onDidChangeContent(function (event) { return _this.fireDidChangeContent(event); });
        model.onDidSaveModel(function () { return _this.fireDidSave(model); });
        model.onWillSaveModel(function (event) { return _this.fireWillSave(event); });
        model.onDirtyChanged(function () { return _this.openEditorIfDirty(model); });
        model.onDispose(function () { return _this.fireDidClose(model); });
    };
    MonacoWorkspace.prototype.doFireDidOpen = function (model) {
        this.onDidOpenTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.fireDidClose = function (model) {
        this.onDidCloseTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.fireDidChangeContent = function (event) {
        var model = event.model, contentChanges = event.contentChanges;
        this.onDidChangeTextDocumentEmitter.fire({
            textDocument: model,
            contentChanges: contentChanges
        });
    };
    MonacoWorkspace.prototype.fireWillSave = function (event) {
        var _this = this;
        var reason = event.reason;
        var timeout = new Promise(function (resolve) {
            return setTimeout(function () { return resolve([]); }, 1000);
        });
        var resolveEdits = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var thenables, allEdits, _a, _b, listenerEdits, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        thenables = [];
                        allEdits = [];
                        this.onWillSaveTextDocumentEmitter.fire({
                            textDocument: event.model,
                            reason: reason,
                            waitUntil: function (thenable) {
                                thenables.push(thenable);
                            }
                        });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, Promise.all(thenables)];
                    case 2:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 5];
                        listenerEdits = _b.value;
                        allEdits.push.apply(allEdits, __spread(listenerEdits));
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        resolve(allEdits);
                        return [2 /*return*/];
                }
            });
        }); });
        event.waitUntil(Promise.race([resolveEdits, timeout]).then(function (edits) {
            return _this.p2m.asTextEdits(edits).map(function (edit) { return edit; });
        }));
    };
    MonacoWorkspace.prototype.fireDidSave = function (model) {
        this.onDidSaveTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.openEditorIfDirty = function (model) {
        var _this = this;
        if (this.suppressedOpenIfDirty.indexOf(model) !== -1) {
            return;
        }
        if (model.dirty && monaco_editor_1.MonacoEditor.findByDocument(this.editorManager, model).length === 0) {
            // create a new reference to make sure the model is not disposed before it is
            // acquired by the editor, thus losing the changes that made it dirty.
            this.textModelService.createModelReference(model.textEditorModel.uri).then(function (ref) {
                _this.editorManager.open(new uri_1.default(model.uri), {
                    mode: 'open',
                }).then(function (editor) { return ref.dispose(); });
            });
        }
    };
    MonacoWorkspace.prototype.suppressOpenIfDirty = function (model, cb) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.suppressedOpenIfDirty.push(model);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, cb()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        i = this.suppressedOpenIfDirty.indexOf(model);
                        if (i !== -1) {
                            this.suppressedOpenIfDirty.splice(i, 1);
                        }
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MonacoWorkspace.prototype.createFileSystemWatcher = function (globPattern, ignoreCreateEvents, ignoreChangeEvents, ignoreDeleteEvents) {
        var disposables = new common_1.DisposableCollection();
        var onDidCreateEmitter = new lang.Emitter();
        disposables.push(onDidCreateEmitter);
        var onDidChangeEmitter = new lang.Emitter();
        disposables.push(onDidChangeEmitter);
        var onDidDeleteEmitter = new lang.Emitter();
        disposables.push(onDidDeleteEmitter);
        disposables.push(this.fileSystemWatcher.onFilesChanged(function (changes) {
            var e_3, _a;
            try {
                for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                    var change = changes_1_1.value;
                    var fileChangeType = change.type;
                    if (ignoreCreateEvents === true && fileChangeType === browser_1.FileChangeType.ADDED) {
                        continue;
                    }
                    if (ignoreChangeEvents === true && fileChangeType === browser_1.FileChangeType.UPDATED) {
                        continue;
                    }
                    if (ignoreDeleteEvents === true && fileChangeType === browser_1.FileChangeType.DELETED) {
                        continue;
                    }
                    var uri = change.uri.toString();
                    var codeUri = change.uri['codeUri'];
                    if (monaco_languageclient_1.testGlob(globPattern, uri)) {
                        if (fileChangeType === browser_1.FileChangeType.ADDED) {
                            onDidCreateEmitter.fire(codeUri);
                        }
                        else if (fileChangeType === browser_1.FileChangeType.UPDATED) {
                            onDidChangeEmitter.fire(codeUri);
                        }
                        else if (fileChangeType === browser_1.FileChangeType.DELETED) {
                            onDidDeleteEmitter.fire(codeUri);
                        }
                        else {
                            throw new Error("Unexpected file change type: " + fileChangeType + ".");
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }));
        return {
            onDidCreate: onDidCreateEmitter.event,
            onDidChange: onDidChangeEmitter.event,
            onDidDelete: onDidDeleteEmitter.event,
            dispose: function () { return disposables.dispose(); }
        };
    };
    /**
     * Applies given edits to the given model.
     * The model is saved if no editors is opened for it.
     */
    MonacoWorkspace.prototype.applyBackgroundEdit = function (model, editOperations) {
        var _this = this;
        return this.suppressOpenIfDirty(model, function () { return __awaiter(_this, void 0, void 0, function () {
            var editor, cursorState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editor = monaco_editor_1.MonacoEditor.findByDocument(this.editorManager, model)[0];
                        cursorState = editor && editor.getControl().getSelections() || [];
                        model.textEditorModel.pushStackElement();
                        model.textEditorModel.pushEditOperations(cursorState, editOperations, function () { return cursorState; });
                        model.textEditorModel.pushStackElement();
                        if (!!editor) return [3 /*break*/, 2];
                        return [4 /*yield*/, model.save()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    MonacoWorkspace.prototype.applyEdit = function (changes, options) {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        workspaceEdit = this.p2m.asWorkspaceEdit(changes);
                        return [4 /*yield*/, this.applyBulkEdit(workspaceEdit, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MonacoWorkspace.prototype.applyBulkEdit = function (workspaceEdit, options) {
        return __awaiter(this, void 0, void 0, function () {
            var unresolvedEdits, edits, totalEdits, totalFiles, _loop_1, this_1, edits_1, edits_1_1, edit, e_4_1, ariaSummary, e_5, ariaSummary;
            var e_4, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        unresolvedEdits = this.groupEdits(workspaceEdit);
                        return [4 /*yield*/, this.openEditors(unresolvedEdits, options)];
                    case 1:
                        edits = _b.sent();
                        this.checkVersions(edits);
                        totalEdits = 0;
                        totalFiles = 0;
                        _loop_1 = function (edit) {
                            var editor, model, currentSelections_1, editOperations;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!TextEdits.is(edit)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_1.toTextEditWithEditor(edit)];
                                    case 1:
                                        editor = (_a.sent()).editor;
                                        model = editor.document.textEditorModel;
                                        currentSelections_1 = editor.getControl().getSelections() || [];
                                        editOperations = edit.textEdits.map(function (e) { return ({
                                            identifier: undefined,
                                            forceMoveMarkers: false,
                                            range: new monaco.Range(e.range.startLineNumber, e.range.startColumn, e.range.endLineNumber, e.range.endColumn),
                                            text: e.text
                                        }); });
                                        // start a fresh operation
                                        model.pushStackElement();
                                        model.pushEditOperations(currentSelections_1, editOperations, function (_) { return currentSelections_1; });
                                        // push again to make this change an undoable operation
                                        model.pushStackElement();
                                        totalFiles += 1;
                                        totalEdits += editOperations.length;
                                        return [3 /*break*/, 5];
                                    case 2:
                                        if (!(CreateResourceEdit.is(edit) || DeleteResourceEdit.is(edit) || RenameResourceEdit.is(edit))) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this_1.performResourceEdit(edit)];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 4: throw new Error("Unexpected edit type: " + JSON.stringify(edit));
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        edits_1 = __values(edits), edits_1_1 = edits_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!edits_1_1.done) return [3 /*break*/, 6];
                        edit = edits_1_1.value;
                        return [5 /*yield**/, _loop_1(edit)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        edits_1_1 = edits_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_4_1 = _b.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (edits_1_1 && !edits_1_1.done && (_a = edits_1.return)) _a.call(edits_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        ariaSummary = this.getAriaSummary(totalEdits, totalFiles);
                        return [2 /*return*/, { ariaSummary: ariaSummary }];
                    case 10:
                        e_5 = _b.sent();
                        ariaSummary = "Error applying workspace edits: " + e_5.toString();
                        console.error(ariaSummary);
                        return [2 /*return*/, { ariaSummary: ariaSummary }];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    MonacoWorkspace.prototype.openEditors = function (edits, options) {
        return __awaiter(this, void 0, void 0, function () {
            var result, edits_2, edits_2_1, edit, _a, _b, e_6_1;
            var e_6, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        result = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        edits_2 = __values(edits), edits_2_1 = edits_2.next();
                        _d.label = 2;
                    case 2:
                        if (!!edits_2_1.done) return [3 /*break*/, 6];
                        edit = edits_2_1.value;
                        if (!(TextEdits.is(edit) && TextEdits.isVersioned(edit) && !EditsByEditor.is(edit))) return [3 /*break*/, 4];
                        _b = (_a = result).push;
                        return [4 /*yield*/, this.toTextEditWithEditor(edit, options)];
                    case 3:
                        _b.apply(_a, [_d.sent()]);
                        return [3 /*break*/, 5];
                    case 4:
                        result.push(edit);
                        _d.label = 5;
                    case 5:
                        edits_2_1 = edits_2.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_6_1 = _d.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (edits_2_1 && !edits_2_1.done && (_c = edits_2.return)) _c.call(edits_2);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, result];
                }
            });
        });
    };
    MonacoWorkspace.prototype.toTextEditWithEditor = function (textEdit, options) {
        return __awaiter(this, void 0, void 0, function () {
            var editorWidget, editor, textEditWithEditor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (EditsByEditor.is(textEdit)) {
                            return [2 /*return*/, textEdit];
                        }
                        return [4 /*yield*/, this.editorManager.open(new uri_1.default(textEdit.uri), options)];
                    case 1:
                        editorWidget = _a.sent();
                        editor = monaco_editor_1.MonacoEditor.get(editorWidget);
                        if (!editor) {
                            throw Error("Could not open editor. URI: " + textEdit.uri);
                        }
                        textEditWithEditor = __assign(__assign({}, textEdit), { editor: editor });
                        return [2 /*return*/, textEditWithEditor];
                }
            });
        });
    };
    MonacoWorkspace.prototype.checkVersions = function (edits) {
        var e_7, _a;
        try {
            for (var _b = __values(edits.filter(TextEdits.is).filter(TextEdits.isVersioned)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var textEdit = _c.value;
                if (!EditsByEditor.is(textEdit)) {
                    throw Error("Could not open editor for URI: " + textEdit.uri + ".");
                }
                var model = textEdit.editor.document.textEditorModel;
                if (textEdit.version !== undefined && model.getVersionId() !== textEdit.version) {
                    throw Error("Version conflict in editor. URI: " + textEdit.uri);
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    MonacoWorkspace.prototype.getAriaSummary = function (totalEdits, totalFiles) {
        if (totalEdits === 0) {
            return 'Made no edits';
        }
        if (totalEdits > 1 && totalFiles > 1) {
            return "Made " + totalEdits + " text edits in " + totalFiles + " files";
        }
        return "Made " + totalEdits + " text edits in one file";
    };
    MonacoWorkspace.prototype.groupEdits = function (workspaceEdit) {
        var e_8, _a, _b;
        var map = new Map();
        var result = [];
        try {
            for (var _c = __values(workspaceEdit.edits), _d = _c.next(); !_d.done; _d = _c.next()) {
                var edit = _d.value;
                if (this.isResourceFileEdit(edit)) {
                    var resourceTextEdit = edit;
                    var uri = resourceTextEdit.resource.toString();
                    var version = resourceTextEdit.modelVersionId;
                    var editorEdit = map.get(uri);
                    if (!editorEdit) {
                        editorEdit = {
                            uri: uri,
                            version: version,
                            textEdits: []
                        };
                        map.set(uri, editorEdit);
                        result.push(editorEdit);
                    }
                    else {
                        if (editorEdit.version !== version) {
                            throw Error("Multiple versions for the same URI '" + uri + "' within the same workspace edit.");
                        }
                    }
                    (_b = editorEdit.textEdits).push.apply(_b, __spread(resourceTextEdit.edits));
                }
                else {
                    var options = edit.options;
                    var oldUri = !!edit.oldUri ? edit.oldUri.toString() : undefined;
                    var newUri = !!edit.newUri ? edit.newUri.toString() : undefined;
                    result.push({
                        oldUri: oldUri,
                        newUri: newUri,
                        options: options
                    });
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return result;
    };
    MonacoWorkspace.prototype.performResourceEdit = function (edit) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, exists, stat;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options = edit.options || {};
                        if (!RenameResourceEdit.is(edit)) return [3 /*break*/, 4];
                        _a = options.overwrite === undefined && options.ignoreIfExists;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.exists(edit.newUri)];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        // rename
                        if (_a) {
                            return [2 /*return*/]; // not overwriting, but ignoring, and the target file exists
                        }
                        return [4 /*yield*/, this.fileSystem.move(edit.oldUri, edit.newUri, { overwrite: options.overwrite })];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 4:
                        if (!DeleteResourceEdit.is(edit)) return [3 /*break*/, 9];
                        _b = !options.ignoreIfNotExists;
                        if (_b) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.fileSystem.exists(edit.oldUri)];
                    case 5:
                        _b = (_c.sent());
                        _c.label = 6;
                    case 6:
                        if (!_b) return [3 /*break*/, 8];
                        if (options.recursive === false) {
                            console.warn("Ignored 'recursive': 'false' option. Deleting recursively.");
                        }
                        return [4 /*yield*/, this.fileSystem.delete(edit.oldUri)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        if (!CreateResourceEdit.is(edit)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.fileSystem.exists(edit.newUri)];
                    case 10:
                        exists = _c.sent();
                        // create file
                        if (options.overwrite === undefined && options.ignoreIfExists && exists) {
                            return [2 /*return*/]; // not overwriting, but ignoring, and the target file exists
                        }
                        if (!(exists && options.overwrite)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.fileSystem.getFileStat(edit.newUri)];
                    case 11:
                        stat = _c.sent();
                        if (!stat) {
                            throw new Error("Cannot get file stat for the resource: " + edit.newUri + ".");
                        }
                        return [4 /*yield*/, this.fileSystem.setContent(stat, '')];
                    case 12:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 13: return [4 /*yield*/, this.fileSystem.createFile(edit.newUri)];
                    case 14:
                        _c.sent();
                        _c.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    MonacoWorkspace.prototype.isResourceFileEdit = function (edit) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return 'resource' in edit && edit.resource instanceof monaco.Uri;
    };
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], MonacoWorkspace.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], MonacoWorkspace.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.FileSystemWatcher),
        __metadata("design:type", browser_1.FileSystemWatcher)
    ], MonacoWorkspace.prototype, "fileSystemWatcher", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], MonacoWorkspace.prototype, "textModelService", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoWorkspace.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter),
        __metadata("design:type", monaco_languageclient_1.ProtocolToMonacoConverter)
    ], MonacoWorkspace.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(browser_3.EditorManager),
        __metadata("design:type", browser_3.EditorManager)
    ], MonacoWorkspace.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(monaco_configurations_1.MonacoConfigurations),
        __metadata("design:type", monaco_configurations_1.MonacoConfigurations)
    ], MonacoWorkspace.prototype, "configurations", void 0);
    __decorate([
        inversify_1.inject(browser_5.ProblemManager),
        __metadata("design:type", browser_5.ProblemManager)
    ], MonacoWorkspace.prototype, "problems", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoWorkspace.prototype, "init", null);
    MonacoWorkspace = __decorate([
        inversify_1.injectable()
    ], MonacoWorkspace);
    return MonacoWorkspace;
}());
exports.MonacoWorkspace = MonacoWorkspace;
//# sourceMappingURL=monaco-workspace.js.map
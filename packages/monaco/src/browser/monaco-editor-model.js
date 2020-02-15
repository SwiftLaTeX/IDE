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
var vscode_languageserver_protocol_1 = require("vscode-languageserver-protocol");
exports.TextDocumentSaveReason = vscode_languageserver_protocol_1.TextDocumentSaveReason;
var core_1 = require("@theia/core");
var MonacoEditorModel = /** @class */ (function () {
    function MonacoEditorModel(resource, m2p, p2m, options) {
        var _this = this;
        this.resource = resource;
        this.m2p = m2p;
        this.p2m = p2m;
        this.autoSave = 'on';
        this.autoSaveDelay = 500;
        /* @deprecated there is no general save timeout, each participant should introduce a sensible timeout  */
        this.onWillSaveLoopTimeOut = 1500;
        this.toDispose = new core_1.DisposableCollection();
        this.toDisposeOnAutoSave = new core_1.DisposableCollection();
        this.onDidChangeContentEmitter = new core_1.Emitter();
        this.onDidChangeContent = this.onDidChangeContentEmitter.event;
        this.onDidSaveModelEmitter = new core_1.Emitter();
        this.onDidSaveModel = this.onDidSaveModelEmitter.event;
        this.onWillSaveModelEmitter = new core_1.Emitter();
        this.onWillSaveModel = this.onWillSaveModelEmitter.event;
        this.onDidChangeValidEmitter = new core_1.Emitter();
        this.onDidChangeValid = this.onDidChangeValidEmitter.event;
        this.preferredEncoding = undefined;
        /**
         * Use `valid` to access it.
         * Use `setValid` to mutate it.
         */
        this._valid = false;
        this._dirty = false;
        this.onDirtyChangedEmitter = new core_1.Emitter();
        this.pendingOperation = Promise.resolve();
        this.syncCancellationTokenSource = new core_1.CancellationTokenSource();
        this.ignoreDirtyEdits = false;
        this.saveCancellationTokenSource = new core_1.CancellationTokenSource();
        this.ignoreContentChanges = false;
        this.contentChanges = [];
        this.toDispose.push(resource);
        this.toDispose.push(this.toDisposeOnAutoSave);
        this.toDispose.push(this.onDidChangeContentEmitter);
        this.toDispose.push(this.onDidSaveModelEmitter);
        this.toDispose.push(this.onWillSaveModelEmitter);
        this.toDispose.push(this.onDirtyChangedEmitter);
        this.toDispose.push(this.onDidChangeValidEmitter);
        this.defaultEncoding = options && options.encoding ? options.encoding : undefined;
        this.resolveModel = this.readContents().then(function (content) { return _this.initialize(content || ''); }, function (e) { return console.error("Failed to initialize for '" + _this.uri + "':", e); });
    }
    MonacoEditorModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    MonacoEditorModel.prototype.reopenWithEncoding = function (encoding) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (encoding === this.preferredEncoding || (!this.preferredEncoding && encoding === this.defaultEncoding)) {
                    return [2 /*return*/];
                }
                if (this.dirty) {
                    return [2 /*return*/];
                }
                this.preferredEncoding = encoding;
                return [2 /*return*/, this.sync()];
            });
        });
    };
    MonacoEditorModel.prototype.saveWithEncoding = function (encoding) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.Manual, this.cancelSave(), encoding)
                        .then(function () { _this.preferredEncoding = encoding; })];
            });
        });
    };
    MonacoEditorModel.prototype.getEncoding = function () {
        return this.preferredEncoding || this.defaultEncoding;
    };
    /**
     * #### Important
     * Only this method can create an instance of `monaco.editor.IModel`,
     * there should not be other calls to `monaco.editor.createModel`.
     */
    MonacoEditorModel.prototype.initialize = function (content) {
        var _this = this;
        if (!this.toDispose.disposed) {
            this.model = monaco.editor.createModel(content, undefined, monaco.Uri.parse(this.resource.uri.toString()));
            this.updateSavedVersionId();
            this.toDispose.push(this.model);
            this.toDispose.push(this.model.onDidChangeContent(function (event) { return _this.fireDidChangeContent(event); }));
            if (this.resource.onDidChangeContents) {
                this.toDispose.push(this.resource.onDidChangeContents(function () { return _this.sync(); }));
            }
        }
    };
    Object.defineProperty(MonacoEditorModel.prototype, "valid", {
        /**
         * Whether it is possible to load content from the underlying resource.
         */
        get: function () {
            return this._valid;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorModel.prototype.setValid = function (valid) {
        if (valid === this._valid) {
            return;
        }
        this._valid = valid;
        this.onDidChangeValidEmitter.fire(undefined);
    };
    Object.defineProperty(MonacoEditorModel.prototype, "dirty", {
        get: function () {
            return this._dirty;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorModel.prototype.setDirty = function (dirty) {
        this._dirty = dirty;
        if (dirty === false) {
            this.updateSavedVersionId();
        }
        this.onDirtyChangedEmitter.fire(undefined);
    };
    MonacoEditorModel.prototype.updateSavedVersionId = function () {
        this.bufferSavedVersionId = this.model.getAlternativeVersionId();
    };
    Object.defineProperty(MonacoEditorModel.prototype, "onDirtyChanged", {
        get: function () {
            return this.onDirtyChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "uri", {
        get: function () {
            return this.model.uri.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "languageId", {
        get: function () {
            return this._languageId !== undefined ? this._languageId : this.model.getModeId();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * It's a hack to dispatch close notification with an old language id, don't use it.
     */
    MonacoEditorModel.prototype.setLanguageId = function (languageId) {
        this._languageId = languageId;
    };
    Object.defineProperty(MonacoEditorModel.prototype, "version", {
        get: function () {
            return this.model.getVersionId();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Return selected text by Range or all text by default
     */
    MonacoEditorModel.prototype.getText = function (range) {
        if (!range) {
            return this.model.getValue();
        }
        else {
            return this.model.getValueInRange(this.p2m.asRange(range));
        }
    };
    MonacoEditorModel.prototype.positionAt = function (offset) {
        var _a = this.model.getPositionAt(offset), lineNumber = _a.lineNumber, column = _a.column;
        return this.m2p.asPosition(lineNumber, column);
    };
    MonacoEditorModel.prototype.offsetAt = function (position) {
        return this.model.getOffsetAt(this.p2m.asPosition(position));
    };
    Object.defineProperty(MonacoEditorModel.prototype, "lineCount", {
        get: function () {
            return this.model.getLineCount();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves a line in a text document expressed as a one-based position.
     */
    MonacoEditorModel.prototype.getLineContent = function (lineNumber) {
        return this.model.getLineContent(lineNumber);
    };
    MonacoEditorModel.prototype.getLineMaxColumn = function (lineNumber) {
        return this.model.getLineMaxColumn(lineNumber);
    };
    Object.defineProperty(MonacoEditorModel.prototype, "readOnly", {
        get: function () {
            return this.resource.saveContents === undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "textEditorModel", {
        get: function () {
            return this.model;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorModel.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveModel];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    MonacoEditorModel.prototype.save = function () {
        return this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.Manual);
    };
    MonacoEditorModel.prototype.run = function (operation) {
        var _this = this;
        return this.pendingOperation = this.pendingOperation.then(function () { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, operation()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    MonacoEditorModel.prototype.cancelSync = function () {
        this.syncCancellationTokenSource.cancel();
        this.syncCancellationTokenSource = new core_1.CancellationTokenSource();
        return this.syncCancellationTokenSource.token;
    };
    MonacoEditorModel.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                token = this.cancelSync();
                return [2 /*return*/, this.run(function () { return _this.doSync(token); })];
            });
        });
    };
    MonacoEditorModel.prototype.doSync = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var newText, value, range;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token.isCancellationRequested || this._dirty) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.readContents()];
                    case 1:
                        newText = _a.sent();
                        if (newText === undefined || token.isCancellationRequested || this._dirty) {
                            return [2 /*return*/];
                        }
                        value = this.model.getValue();
                        if (value === newText) {
                            return [2 /*return*/];
                        }
                        range = this.m2p.asRange(this.model.getFullModelRange());
                        this.applyEdits([this.p2m.asTextEdit({ range: range, newText: newText })], {
                            ignoreDirty: true,
                            ignoreContentChanges: true
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.readContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.resource.readContents({ encoding: this.getEncoding() })];
                    case 1:
                        content = _a.sent();
                        this.setValid(true);
                        return [2 /*return*/, content];
                    case 2:
                        e_2 = _a.sent();
                        this.setValid(false);
                        if (core_1.ResourceError.NotFound.is(e_2)) {
                            return [2 /*return*/, undefined];
                        }
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.markAsDirty = function () {
        if (this.ignoreDirtyEdits) {
            return;
        }
        this.cancelSync();
        this.setDirty(true);
        this.doAutoSave();
    };
    MonacoEditorModel.prototype.doAutoSave = function () {
        var _this = this;
        if (this.autoSave === 'on') {
            var token_1 = this.cancelSave();
            this.toDisposeOnAutoSave.dispose();
            var handle_1 = window.setTimeout(function () {
                _this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.AfterDelay, token_1);
            }, this.autoSaveDelay);
            this.toDisposeOnAutoSave.push(core_1.Disposable.create(function () {
                return window.clearTimeout(handle_1);
            }));
        }
    };
    MonacoEditorModel.prototype.cancelSave = function () {
        this.saveCancellationTokenSource.cancel();
        this.saveCancellationTokenSource = new core_1.CancellationTokenSource();
        return this.saveCancellationTokenSource.token;
    };
    MonacoEditorModel.prototype.scheduleSave = function (reason, token, overwriteEncoding) {
        var _this = this;
        if (token === void 0) { token = this.cancelSave(); }
        return this.run(function () { return _this.doSave(reason, token, overwriteEncoding); });
    };
    MonacoEditorModel.prototype.pushContentChanges = function (contentChanges) {
        var _a;
        if (!this.ignoreContentChanges) {
            (_a = this.contentChanges).push.apply(_a, __spread(contentChanges));
        }
    };
    MonacoEditorModel.prototype.popContentChanges = function () {
        var contentChanges = this.contentChanges;
        if (contentChanges.length !== 0) {
            this.contentChanges = [];
        }
        return contentChanges;
    };
    MonacoEditorModel.prototype.fireDidChangeContent = function (event) {
        if (this.model.getAlternativeVersionId() === this.bufferSavedVersionId) {
            this.setDirty(false);
        }
        else {
            this.markAsDirty();
        }
        var changeContentEvent = this.asContentChangedEvent(event);
        this.onDidChangeContentEmitter.fire(changeContentEvent);
        this.pushContentChanges(changeContentEvent.contentChanges);
    };
    MonacoEditorModel.prototype.asContentChangedEvent = function (event) {
        var _this = this;
        var contentChanges = event.changes.map(function (change) { return _this.asTextDocumentContentChangeEvent(change); });
        return { model: this, contentChanges: contentChanges };
    };
    MonacoEditorModel.prototype.asTextDocumentContentChangeEvent = function (change) {
        var range = this.m2p.asRange(change.range);
        var rangeLength = change.rangeLength;
        var text = change.text;
        return { range: range, rangeLength: rangeLength, text: text };
    };
    MonacoEditorModel.prototype.applyEdits = function (operations, options) {
        var resolvedOptions = __assign({ ignoreDirty: false, ignoreContentChanges: false }, options);
        var _a = this, ignoreDirtyEdits = _a.ignoreDirtyEdits, ignoreContentChanges = _a.ignoreContentChanges;
        this.ignoreDirtyEdits = resolvedOptions.ignoreDirty;
        this.ignoreContentChanges = resolvedOptions.ignoreContentChanges;
        try {
            return this.model.applyEdits(operations);
        }
        finally {
            this.ignoreDirtyEdits = ignoreDirtyEdits;
            this.ignoreContentChanges = ignoreContentChanges;
        }
    };
    MonacoEditorModel.prototype.doSave = function (reason, token, overwriteEncoding) {
        return __awaiter(this, void 0, void 0, function () {
            var changes, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token.isCancellationRequested || !this.resource.saveContents) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.fireWillSaveModel(reason, token)];
                    case 1:
                        _a.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        changes = this.popContentChanges();
                        if (changes.length === 0 && overwriteEncoding === undefined) {
                            return [2 /*return*/];
                        }
                        content = this.model.getValue();
                        return [4 /*yield*/, core_1.Resource.save(this.resource, { changes: changes, content: content, options: { encoding: this.getEncoding(), overwriteEncoding: overwriteEncoding } }, token)];
                    case 2:
                        _a.sent();
                        this.setValid(true);
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.setDirty(false);
                        this.fireDidSaveModel();
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.fireWillSaveModel = function (reason, token) {
        return __awaiter(this, void 0, void 0, function () {
            var firing, e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firing = this.onWillSaveModelEmitter.sequence(function (listener) { return __awaiter(_this, void 0, void 0, function () {
                            var waitables, version, event, edits;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (token.isCancellationRequested) {
                                            return [2 /*return*/, false];
                                        }
                                        waitables = [];
                                        version = this.version;
                                        event = {
                                            model: this, reason: reason,
                                            waitUntil: function (thenable) {
                                                if (Object.isFrozen(waitables)) {
                                                    throw new Error('waitUntil cannot be called asynchronously.');
                                                }
                                                waitables.push(thenable);
                                            }
                                        };
                                        // Fire.
                                        try {
                                            listener(event);
                                        }
                                        catch (err) {
                                            console.error(err);
                                            return [2 /*return*/, true];
                                        }
                                        // Asynchronous calls to `waitUntil` should fail.
                                        Object.freeze(waitables);
                                        return [4 /*yield*/, Promise.all(waitables).then(function (allOperations) {
                                                var _a;
                                                return (_a = []).concat.apply(_a, __spread(allOperations));
                                            })];
                                    case 1:
                                        edits = _a.sent();
                                        if (token.isCancellationRequested) {
                                            return [2 /*return*/, false];
                                        }
                                        // In a perfect world, we should only apply edits if document is clean.
                                        if (version !== this.version) {
                                            console.error('onWillSave listeners should provide edits, not directly alter the document.');
                                        }
                                        // Finally apply edits provided by this listener before firing the next.
                                        if (edits && edits.length > 0) {
                                            this.applyEdits(edits, {
                                                ignoreDirty: true,
                                            });
                                        }
                                        return [2 /*return*/, true];
                                }
                            });
                        }); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, firing];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.fireDidSaveModel = function () {
        this.onDidSaveModelEmitter.fire(this.model);
    };
    return MonacoEditorModel;
}());
exports.MonacoEditorModel = MonacoEditorModel;
//# sourceMappingURL=monaco-editor-model.js.map
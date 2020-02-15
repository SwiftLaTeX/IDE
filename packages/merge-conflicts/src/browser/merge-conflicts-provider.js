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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/editor/lib/browser");
var core_1 = require("@theia/core");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var merge_conflicts_parser_1 = require("./merge-conflicts-parser");
var debounce = require("lodash.debounce");
var MergeConflictsProvider = /** @class */ (function () {
    function MergeConflictsProvider() {
        this.onDidUpdateEmitter = new core_1.Emitter();
        this.onDidUpdate = this.onDidUpdateEmitter.event;
        this.values = new Map();
        this.valueTimeouts = new Map();
    }
    MergeConflictsProvider.prototype.initialize = function () {
        var _this = this;
        this.editorManager.onCreated(function (w) { return _this.handleNewEditor(w); });
    };
    MergeConflictsProvider.prototype.get = function (uri) {
        return this.values.get(uri) || Promise.resolve(undefined);
    };
    MergeConflictsProvider.prototype.handleNewEditor = function (editorWidget) {
        var _this = this;
        var editor = editorWidget.editor;
        var uri = editor.uri;
        if (uri.scheme !== 'file') {
            return;
        }
        var debouncedUpdate = debounce(function () { return _this.updateMergeConflicts(editor); }, 200, { leading: true });
        var disposable = editor.onDocumentContentChanged(function () { return debouncedUpdate(); });
        editorWidget.disposed.connect(function () { return disposable.dispose(); });
        debouncedUpdate();
    };
    MergeConflictsProvider.prototype.updateMergeConflicts = function (editor) {
        var _this = this;
        var uri = editor.uri.toString();
        if (this.valueTimeouts.has(uri)) {
            window.clearTimeout(this.valueTimeouts.get(uri));
        }
        var deferred = new promise_util_1.Deferred();
        this.values.set(uri, deferred.promise);
        window.setTimeout(function () {
            var mergeConflicts = _this.computeMergeConflicts(editor);
            _this.onDidUpdateEmitter.fire({ editor: editor, mergeConflicts: mergeConflicts });
            deferred.resolve(mergeConflicts);
        }, 50);
        this.valueTimeouts.set(uri, window.setTimeout(function () {
            _this.values.delete(uri);
        }, 1000));
    };
    MergeConflictsProvider.prototype.computeMergeConflicts = function (editor) {
        var document = editor.document;
        var input = {
            lineCount: document.lineCount,
            getLine: function (number) { return document.getLineContent(number + 1); },
        };
        return this.mergeConflictParser.parse(input);
    };
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], MergeConflictsProvider.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(merge_conflicts_parser_1.MergeConflictsParser),
        __metadata("design:type", merge_conflicts_parser_1.MergeConflictsParser)
    ], MergeConflictsProvider.prototype, "mergeConflictParser", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MergeConflictsProvider.prototype, "initialize", null);
    MergeConflictsProvider = __decorate([
        inversify_1.injectable()
    ], MergeConflictsProvider);
    return MergeConflictsProvider;
}());
exports.MergeConflictsProvider = MergeConflictsProvider;
//# sourceMappingURL=merge-conflicts-provider.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var browser_1 = require("@theia/core/lib/browser");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var editor_manager_1 = require("./editor-manager");
var EditorQuickOpenService = /** @class */ (function () {
    function EditorQuickOpenService() {
        this.prefix = 'edt ';
    }
    Object.defineProperty(EditorQuickOpenService.prototype, "description", {
        get: function () {
            return 'Show All Opened Editors';
        },
        enumerable: true,
        configurable: true
    });
    EditorQuickOpenService.prototype.getModel = function () {
        return this;
    };
    EditorQuickOpenService.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: {
                enableSeparateSubstringMatching: true
            },
            fuzzyMatchDescription: {
                enableSeparateSubstringMatching: true
            }
        };
    };
    EditorQuickOpenService.prototype.open = function () {
        this.prefixQuickOpenService.open(this.prefix);
    };
    EditorQuickOpenService.prototype.onType = function (lookFor, acceptor) {
        var e_1, _a;
        var editorItems = [];
        // Get the alphabetically sorted list of URIs of all currently opened editor widgets.
        var widgets = this.editorManager.all
            .map(function (w) { return w.editor.uri; })
            .sort();
        if (widgets.length === 0) {
            editorItems.push(new browser_1.QuickOpenItem({
                label: 'List of opened editors is currently empty',
                run: function () { return false; }
            }));
            acceptor(editorItems);
            return;
        }
        try {
            for (var widgets_1 = __values(widgets), widgets_1_1 = widgets_1.next(); !widgets_1_1.done; widgets_1_1 = widgets_1.next()) {
                var uri = widgets_1_1.value;
                var item = this.toItem(uri);
                editorItems.push(item);
                acceptor(editorItems);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (widgets_1_1 && !widgets_1_1.done && (_a = widgets_1.return)) _a.call(widgets_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return;
    };
    EditorQuickOpenService.prototype.toItem = function (uri) {
        var description = this.labelProvider.getLongName(uri.parent);
        var icon = this.labelProvider.getIcon(uri);
        var iconClass = icon === '' ? undefined : icon + ' file-icon';
        var options = {
            label: this.labelProvider.getName(uri),
            iconClass: iconClass,
            description: description,
            tooltip: uri.path.toString(),
            uri: uri,
            hidden: false,
            run: this.getRunFunction(uri)
        };
        return new browser_1.QuickOpenItem(options);
    };
    /**
     * Gets the function that can open the editor file
     * @param uri the file uri
     * @returns the function that opens the file if mode === QuickOpenMode.OPEN
     */
    EditorQuickOpenService.prototype.getRunFunction = function (uri) {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.openFile(uri);
            return true;
        };
    };
    EditorQuickOpenService.prototype.openFile = function (uri) {
        this.openerService.getOpener(uri)
            .then(function (opener) { return opener.open(uri); });
    };
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], EditorQuickOpenService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PrefixQuickOpenService),
        __metadata("design:type", browser_1.PrefixQuickOpenService)
    ], EditorQuickOpenService.prototype, "prefixQuickOpenService", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], EditorQuickOpenService.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorQuickOpenService.prototype, "editorManager", void 0);
    EditorQuickOpenService = __decorate([
        inversify_1.injectable()
    ], EditorQuickOpenService);
    return EditorQuickOpenService;
}());
exports.EditorQuickOpenService = EditorQuickOpenService;
//# sourceMappingURL=editor-quick-open-service.js.map
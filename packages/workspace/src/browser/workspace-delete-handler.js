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
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/filesystem/lib/common");
var workspace_service_1 = require("./workspace-service");
var workspace_utils_1 = require("./workspace-utils");
var WorkspaceDeleteHandler = /** @class */ (function () {
    function WorkspaceDeleteHandler() {
    }
    /**
     * Determine if the command is visible.
     *
     * @param uris URIs of selected resources.
     * @returns `true` if the command is visible.
     */
    WorkspaceDeleteHandler.prototype.isVisible = function (uris) {
        return !!uris.length && !this.workspaceUtils.containsRootDirectory(uris);
    };
    /**
     * Determine if the command is enabled.
     *
     * @param uris URIs of selected resources.
     * @returns `true` if the command is enabled.
     */
    WorkspaceDeleteHandler.prototype.isEnabled = function (uris) {
        return !!uris.length && !this.workspaceUtils.containsRootDirectory(uris);
    };
    /**
     * Execute the command.
     *
     * @param uris URIs of selected resources.
     */
    WorkspaceDeleteHandler.prototype.execute = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            var distinctUris;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        distinctUris = uri_1.default.getDistinctParents(uris);
                        return [4 /*yield*/, this.confirm(distinctUris)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.all(distinctUris.map(function (uri) { return _this.delete(uri); }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Display dialog to confirm deletion.
     *
     * @param uris URIs of selected resources.
     */
    WorkspaceDeleteHandler.prototype.confirm = function (uris) {
        return new browser_1.ConfirmDialog({
            title: "Delete File" + (uris.length === 1 ? '' : 's'),
            msg: this.getConfirmMessage(uris)
        }).open();
    };
    /**
     * Get the dialog confirmation message for deletion.
     *
     * @param uris URIs of selected resources.
     */
    WorkspaceDeleteHandler.prototype.getConfirmMessage = function (uris) {
        var e_1, _a;
        var dirty = this.getDirty(uris);
        if (dirty.length) {
            if (dirty.length === 1) {
                return "Do you really want to delete " + dirty[0].path.base + " with unsaved changes?";
            }
            return "Do you really want to delete " + dirty.length + " files with unsaved changes?";
        }
        if (uris.length === 1) {
            return "Do you really want to delete " + uris[0].path.base + "?";
        }
        if (uris.length > 10) {
            return "Do you really want to delete all the " + uris.length + " selected files?";
        }
        var messageContainer = document.createElement('div');
        messageContainer.textContent = 'Do you really want to delete the following files?';
        var list = document.createElement('ul');
        list.style.listStyleType = 'none';
        try {
            for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                var uri = uris_1_1.value;
                var listItem = document.createElement('li');
                listItem.textContent = uri.path.base;
                list.appendChild(listItem);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        messageContainer.appendChild(list);
        return messageContainer;
    };
    /**
     * Get which URI are presently dirty.
     *
     * @param uris URIs of selected resources.
     * @returns An array of dirty URI.
     */
    WorkspaceDeleteHandler.prototype.getDirty = function (uris) {
        var e_2, _a;
        var dirty = new Map();
        var widgets = browser_1.NavigatableWidget.getAffected(browser_1.SaveableWidget.getDirty(this.shell.widgets), uris);
        try {
            for (var widgets_1 = __values(widgets), widgets_1_1 = widgets_1.next(); !widgets_1_1.done; widgets_1_1 = widgets_1.next()) {
                var _b = __read(widgets_1_1.value, 1), resourceUri = _b[0];
                dirty.set(resourceUri.toString(), resourceUri);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (widgets_1_1 && !widgets_1_1.done && (_a = widgets_1.return)) _a.call(widgets_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return __spread(dirty.values());
    };
    /**
     * Perform deletion of a given URI.
     *
     * @param uris URIs of selected resources.
     */
    WorkspaceDeleteHandler.prototype.delete = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.closeWithoutSaving(uri);
                        return [4 /*yield*/, this.fileSystem.delete(uri.toString())];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Close widget without saving changes.
     *
     * @param uri URI of a selected resource.
     */
    WorkspaceDeleteHandler.prototype.closeWithoutSaving = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, widget;
            var e_4, _d;
            return __generator(this, function (_e) {
                try {
                    for (_a = __values(browser_1.NavigatableWidget.getAffected(this.shell.widgets, uri)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        _c = __read(_b.value, 2), widget = _c[1];
                        if (browser_1.SaveableWidget.is(widget)) {
                            widget.closeWithoutSaving();
                        }
                        else {
                            widget.close();
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], WorkspaceDeleteHandler.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], WorkspaceDeleteHandler.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(workspace_utils_1.WorkspaceUtils),
        __metadata("design:type", workspace_utils_1.WorkspaceUtils)
    ], WorkspaceDeleteHandler.prototype, "workspaceUtils", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspaceDeleteHandler.prototype, "workspaceService", void 0);
    WorkspaceDeleteHandler = __decorate([
        inversify_1.injectable()
    ], WorkspaceDeleteHandler);
    return WorkspaceDeleteHandler;
}());
exports.WorkspaceDeleteHandler = WorkspaceDeleteHandler;
//# sourceMappingURL=workspace-delete-handler.js.map
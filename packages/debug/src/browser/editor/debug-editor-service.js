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
var browser_1 = require("@theia/editor/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var monaco_editor_1 = require("@theia/monaco/lib/browser/monaco-editor");
var debug_session_manager_1 = require("../debug-session-manager");
var debug_editor_model_1 = require("./debug-editor-model");
var breakpoint_manager_1 = require("../breakpoint/breakpoint-manager");
var DebugEditorService = /** @class */ (function () {
    function DebugEditorService() {
        this.models = new Map();
    }
    DebugEditorService.prototype.init = function () {
        var _this = this;
        this.editors.all.forEach(function (widget) { return _this.push(widget); });
        this.editors.onCreated(function (widget) { return _this.push(widget); });
        this.sessionManager.onDidChangeBreakpoints(function (_a) {
            var session = _a.session, uri = _a.uri;
            if (!session || session === _this.sessionManager.currentSession) {
                _this.render(uri);
            }
        });
        this.breakpoints.onDidChangeBreakpoints(function (event) { return _this.closeBreakpointIfAffected(event); });
    };
    DebugEditorService.prototype.push = function (widget) {
        var _this = this;
        var editor = widget.editor;
        if (!(editor instanceof monaco_editor_1.MonacoEditor)) {
            return;
        }
        var uri = editor.getControl().getModel().uri.toString();
        var debugModel = this.factory(editor);
        this.models.set(uri, debugModel);
        editor.getControl().onDidDispose(function () {
            debugModel.dispose();
            _this.models.delete(uri);
        });
    };
    DebugEditorService.prototype.render = function (uri) {
        var model = this.models.get(uri.toString());
        if (model) {
            model.render();
        }
    };
    Object.defineProperty(DebugEditorService.prototype, "model", {
        get: function () {
            var currentEditor = this.editors.currentEditor;
            var uri = currentEditor && currentEditor.getResourceUri();
            return uri && this.models.get(uri.toString());
        },
        enumerable: true,
        configurable: true
    });
    DebugEditorService.prototype.getLogpoint = function (position) {
        var logpoint = this.anyBreakpoint(position);
        return logpoint && logpoint.logMessage ? logpoint : undefined;
    };
    DebugEditorService.prototype.getLogpointEnabled = function (position) {
        var logpoint = this.getLogpoint(position);
        return logpoint && logpoint.enabled;
    };
    DebugEditorService.prototype.getBreakpoint = function (position) {
        var breakpoint = this.anyBreakpoint(position);
        return breakpoint && breakpoint.logMessage ? undefined : breakpoint;
    };
    DebugEditorService.prototype.getBreakpointEnabled = function (position) {
        var breakpoint = this.getBreakpoint(position);
        return breakpoint && breakpoint.enabled;
    };
    DebugEditorService.prototype.anyBreakpoint = function (position) {
        return this.model && this.model.getBreakpoint(position);
    };
    DebugEditorService.prototype.getInlineBreakpoint = function (position) {
        return this.model && this.model.getInlineBreakpoint(position);
    };
    DebugEditorService.prototype.toggleBreakpoint = function (position) {
        var model = this.model;
        if (model) {
            model.toggleBreakpoint(position);
        }
    };
    DebugEditorService.prototype.setBreakpointEnabled = function (position, enabled) {
        var breakpoint = this.anyBreakpoint(position);
        if (breakpoint) {
            breakpoint.setEnabled(enabled);
        }
    };
    DebugEditorService.prototype.addInlineBreakpoint = function () {
        var model = this.model;
        if (model) {
            model.addInlineBreakpoint();
        }
    };
    DebugEditorService.prototype.showHover = function () {
        var model = this.model;
        if (model) {
            var selection = model.editor.getControl().getSelection();
            model.hover.show({ selection: selection, focus: true });
        }
    };
    DebugEditorService.prototype.canShowHover = function () {
        var model = this.model;
        if (model) {
            var selection = model.editor.getControl().getSelection();
            return !!model.editor.getControl().getModel().getWordAtPosition(selection.getStartPosition());
        }
        return false;
    };
    DebugEditorService.prototype.addBreakpoint = function (context, position) {
        var model = this.model;
        if (model) {
            position = position || model.position;
            var breakpoint = model.getBreakpoint(position);
            if (breakpoint) {
                model.breakpointWidget.show({ breakpoint: breakpoint, context: context });
            }
            else {
                model.breakpointWidget.show({
                    position: position,
                    context: context
                });
            }
        }
    };
    DebugEditorService.prototype.editBreakpoint = function (breakpointOrPosition) {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (breakpointOrPosition instanceof monaco.Position) {
                            breakpointOrPosition = this.anyBreakpoint(breakpointOrPosition);
                        }
                        if (!breakpointOrPosition) return [3 /*break*/, 2];
                        return [4 /*yield*/, breakpointOrPosition.open()];
                    case 1:
                        _a.sent();
                        model = this.models.get(breakpointOrPosition.uri.toString());
                        if (model) {
                            model.breakpointWidget.show(breakpointOrPosition);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DebugEditorService.prototype.closeBreakpoint = function () {
        var model = this.model;
        if (model) {
            model.breakpointWidget.hide();
        }
    };
    DebugEditorService.prototype.acceptBreakpoint = function () {
        var model = this.model;
        if (model) {
            model.acceptBreakpoint();
        }
    };
    DebugEditorService.prototype.closeBreakpointIfAffected = function (_a) {
        var e_1, _b;
        var uri = _a.uri, removed = _a.removed;
        var model = this.models.get(uri.toString());
        if (!model) {
            return;
        }
        var position = model.breakpointWidget.position;
        if (!position) {
            return;
        }
        try {
            for (var removed_1 = __values(removed), removed_1_1 = removed_1.next(); !removed_1_1.done; removed_1_1 = removed_1.next()) {
                var breakpoint = removed_1_1.value;
                if (breakpoint.raw.line === position.lineNumber) {
                    model.breakpointWidget.hide();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (removed_1_1 && !removed_1_1.done && (_b = removed_1.return)) _b.call(removed_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], DebugEditorService.prototype, "editors", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugEditorService.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugEditorService.prototype, "sessionManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], DebugEditorService.prototype, "contextMenu", void 0);
    __decorate([
        inversify_1.inject(debug_editor_model_1.DebugEditorModelFactory),
        __metadata("design:type", Function)
    ], DebugEditorService.prototype, "factory", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugEditorService.prototype, "init", null);
    DebugEditorService = __decorate([
        inversify_1.injectable()
    ], DebugEditorService);
    return DebugEditorService;
}());
exports.DebugEditorService = DebugEditorService;
//# sourceMappingURL=debug-editor-service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var debounce = require("p-debounce");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var breakpoint_manager_1 = require("../breakpoint/breakpoint-manager");
var debug_session_manager_1 = require("../debug-session-manager");
var breakpoint_marker_1 = require("../breakpoint/breakpoint-marker");
var debug_editor_1 = require("./debug-editor");
var debug_hover_widget_1 = require("./debug-hover-widget");
var debug_breakpoint_widget_1 = require("./debug-breakpoint-widget");
var debug_exception_widget_1 = require("./debug-exception-widget");
exports.DebugEditorModelFactory = Symbol('DebugEditorModelFactory');
var DebugEditorModel = /** @class */ (function () {
    function DebugEditorModel() {
        var _this = this;
        this.toDispose = new core_1.DisposableCollection();
        this.breakpointDecorations = [];
        this.breakpointRanges = new Map();
        this.currentBreakpointDecorations = [];
        this.frameDecorations = [];
        this.updatingDecorations = false;
        this.renderFrames = debounce(function () {
            _this.toggleExceptionWidget();
            var decorations = _this.createFrameDecorations();
            _this.frameDecorations = _this.deltaDecorations(_this.frameDecorations, decorations);
        }, 100);
        this.hintDecorations = [];
    }
    DebugEditorModel_1 = DebugEditorModel;
    DebugEditorModel.createContainer = function (parent, editor) {
        var child = debug_hover_widget_1.createDebugHoverWidgetContainer(parent, editor);
        child.bind(DebugEditorModel_1).toSelf();
        child.bind(debug_breakpoint_widget_1.DebugBreakpointWidget).toSelf();
        child.bind(debug_exception_widget_1.DebugExceptionWidget).toSelf();
        return child;
    };
    DebugEditorModel.createModel = function (parent, editor) {
        return DebugEditorModel_1.createContainer(parent, editor).get(DebugEditorModel_1);
    };
    DebugEditorModel.prototype.init = function () {
        var _this = this;
        this.uri = new uri_1.default(this.editor.getControl().getModel().uri.toString());
        this.toDispose.pushAll([
            this.hover,
            this.breakpointWidget,
            this.exceptionWidget,
            this.editor.getControl().onMouseDown(function (event) { return _this.handleMouseDown(event); }),
            this.editor.getControl().onMouseMove(function (event) { return _this.handleMouseMove(event); }),
            this.editor.getControl().onMouseLeave(function (event) { return _this.handleMouseLeave(event); }),
            this.editor.getControl().onKeyDown(function () { return _this.hover.hide({ immediate: false }); }),
            this.editor.getControl().getModel().onDidChangeDecorations(function () { return _this.updateBreakpoints(); }),
            this.sessions.onDidChange(function () { return _this.renderFrames(); })
        ]);
        this.renderFrames();
        this.render();
    };
    DebugEditorModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DebugEditorModel.prototype.createFrameDecorations = function () {
        var decorations = [];
        var _a = this.sessions, currentFrame = _a.currentFrame, topFrame = _a.topFrame;
        if (!currentFrame || !currentFrame.source || currentFrame.source.uri.toString() !== this.uri.toString()) {
            return decorations;
        }
        var columnUntilEOLRange = new monaco.Range(currentFrame.raw.line, currentFrame.raw.column, currentFrame.raw.line, 1 << 30);
        var range = new monaco.Range(currentFrame.raw.line, currentFrame.raw.column, currentFrame.raw.line, currentFrame.raw.column + 1);
        if (topFrame === currentFrame) {
            decorations.push({
                options: DebugEditorModel_1.TOP_STACK_FRAME_MARGIN,
                range: range
            });
            decorations.push({
                options: DebugEditorModel_1.TOP_STACK_FRAME_DECORATION,
                range: columnUntilEOLRange
            });
            var topFrameRange = this.topFrameRange;
            if (topFrameRange && topFrameRange.startLineNumber === currentFrame.raw.line && topFrameRange.startColumn !== currentFrame.raw.column) {
                decorations.push({
                    options: DebugEditorModel_1.TOP_STACK_FRAME_INLINE_DECORATION,
                    range: columnUntilEOLRange
                });
            }
            this.topFrameRange = columnUntilEOLRange;
        }
        else {
            decorations.push({
                options: DebugEditorModel_1.FOCUSED_STACK_FRAME_MARGIN,
                range: range
            });
            decorations.push({
                options: DebugEditorModel_1.FOCUSED_STACK_FRAME_DECORATION,
                range: columnUntilEOLRange
            });
        }
        return decorations;
    };
    DebugEditorModel.prototype.toggleExceptionWidget = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentFrame = this.sessions.currentFrame;
                        if (!currentFrame) {
                            this.exceptionWidget.hide();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, currentFrame.thread.getExceptionInfo()];
                    case 1:
                        info = _a.sent();
                        if (!info) {
                            this.exceptionWidget.hide();
                            return [2 /*return*/];
                        }
                        this.exceptionWidget.show({
                            info: info,
                            lineNumber: currentFrame.raw.line,
                            column: currentFrame.raw.column
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugEditorModel.prototype.render = function () {
        this.renderBreakpoints();
        this.renderCurrentBreakpoints();
    };
    DebugEditorModel.prototype.renderBreakpoints = function () {
        var decorations = this.createBreakpointDecorations();
        this.breakpointDecorations = this.deltaDecorations(this.breakpointDecorations, decorations);
        this.updateBreakpointRanges();
    };
    DebugEditorModel.prototype.createBreakpointDecorations = function () {
        var _this = this;
        var breakpoints = this.breakpoints.getBreakpoints(this.uri);
        return breakpoints.map(function (breakpoint) { return _this.createBreakpointDecoration(breakpoint); });
    };
    DebugEditorModel.prototype.createBreakpointDecoration = function (breakpoint) {
        var lineNumber = breakpoint.raw.line;
        var column = breakpoint.raw.column;
        var range = typeof column === 'number' ? new monaco.Range(lineNumber, column, lineNumber, column + 1) : new monaco.Range(lineNumber, 1, lineNumber, 2);
        return {
            range: range,
            options: {
                stickiness: DebugEditorModel_1.STICKINESS
            }
        };
    };
    DebugEditorModel.prototype.updateBreakpointRanges = function () {
        var e_1, _a;
        this.breakpointRanges.clear();
        try {
            for (var _b = __values(this.breakpointDecorations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var decoration = _c.value;
                var range = this.editor.getControl().getModel().getDecorationRange(decoration);
                this.breakpointRanges.set(decoration, range);
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
    DebugEditorModel.prototype.renderCurrentBreakpoints = function () {
        var decorations = this.createCurrentBreakpointDecorations();
        this.currentBreakpointDecorations = this.deltaDecorations(this.currentBreakpointDecorations, decorations);
    };
    DebugEditorModel.prototype.createCurrentBreakpointDecorations = function () {
        var _this = this;
        var breakpoints = this.sessions.getBreakpoints(this.uri);
        return breakpoints.map(function (breakpoint) { return _this.createCurrentBreakpointDecoration(breakpoint); });
    };
    DebugEditorModel.prototype.createCurrentBreakpointDecoration = function (breakpoint) {
        var lineNumber = breakpoint.line;
        var column = breakpoint.column;
        var range = typeof column === 'number' ? new monaco.Range(lineNumber, column, lineNumber, column + 1) : new monaco.Range(lineNumber, 1, lineNumber, 1);
        var _a = breakpoint.getDecoration(), className = _a.className, message = _a.message;
        return {
            range: range,
            options: {
                glyphMarginClassName: className,
                glyphMarginHoverMessage: message.map(function (value) { return ({ value: value }); }),
                stickiness: DebugEditorModel_1.STICKINESS,
                beforeContentClassName: typeof column === 'number' ? "theia-debug-breakpoint-column " + className + "-column" : undefined
            }
        };
    };
    DebugEditorModel.prototype.updateBreakpoints = function () {
        if (this.areBreakpointsAffected()) {
            var breakpoints = this.createBreakpoints();
            this.breakpoints.setBreakpoints(this.uri, breakpoints);
        }
    };
    DebugEditorModel.prototype.areBreakpointsAffected = function () {
        var e_2, _a;
        if (this.updatingDecorations || !this.editor.getControl().getModel()) {
            return false;
        }
        try {
            for (var _b = __values(this.breakpointDecorations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var decoration = _c.value;
                var range = this.editor.getControl().getModel().getDecorationRange(decoration);
                var oldRange = this.breakpointRanges.get(decoration);
                if (!range || !range.equalsRange(oldRange)) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    DebugEditorModel.prototype.createBreakpoints = function () {
        var e_3, _a;
        var uri = this.uri;
        var lines = new Set();
        var breakpoints = [];
        try {
            for (var _b = __values(this.breakpointDecorations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var decoration = _c.value;
                var range = this.editor.getControl().getModel().getDecorationRange(decoration);
                if (range && !lines.has(range.startLineNumber)) {
                    var line = range.startLineNumber;
                    var column = range.startColumn;
                    var oldRange = this.breakpointRanges.get(decoration);
                    var oldBreakpoint = oldRange && this.breakpoints.getInlineBreakpoint(uri, oldRange.startLineNumber, oldRange.startColumn);
                    var breakpoint = breakpoint_marker_1.SourceBreakpoint.create(uri, { line: line, column: column }, oldBreakpoint);
                    breakpoints.push(breakpoint);
                    lines.add(line);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return breakpoints;
    };
    Object.defineProperty(DebugEditorModel.prototype, "position", {
        get: function () {
            return this.editor.getControl().getPosition();
        },
        enumerable: true,
        configurable: true
    });
    DebugEditorModel.prototype.getBreakpoint = function (position) {
        if (position === void 0) { position = this.position; }
        return this.getInlineBreakpoint(position) || this.getLineBreakpoints(position)[0];
    };
    DebugEditorModel.prototype.getInlineBreakpoint = function (position) {
        if (position === void 0) { position = this.position; }
        return this.sessions.getInlineBreakpoint(this.uri, position.lineNumber, position.column);
    };
    DebugEditorModel.prototype.getLineBreakpoints = function (position) {
        if (position === void 0) { position = this.position; }
        return this.sessions.getLineBreakpoints(this.uri, position.lineNumber);
    };
    DebugEditorModel.prototype.addBreakpoint = function (raw) {
        this.breakpoints.addBreakpoint(breakpoint_marker_1.SourceBreakpoint.create(this.uri, raw));
    };
    DebugEditorModel.prototype.toggleBreakpoint = function (position) {
        var e_4, _a;
        if (position === void 0) { position = this.position; }
        var lineNumber = position.lineNumber;
        var breakpoints = this.getLineBreakpoints(position);
        if (breakpoints.length) {
            try {
                for (var breakpoints_1 = __values(breakpoints), breakpoints_1_1 = breakpoints_1.next(); !breakpoints_1_1.done; breakpoints_1_1 = breakpoints_1.next()) {
                    var breakpoint = breakpoints_1_1.value;
                    breakpoint.remove();
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (breakpoints_1_1 && !breakpoints_1_1.done && (_a = breakpoints_1.return)) _a.call(breakpoints_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        else {
            this.addBreakpoint({ line: lineNumber });
        }
    };
    DebugEditorModel.prototype.addInlineBreakpoint = function () {
        var position = this.position;
        var lineNumber = position.lineNumber, column = position.column;
        var breakpoint = this.getInlineBreakpoint(position);
        if (breakpoint) {
            return;
        }
        this.addBreakpoint({ line: lineNumber, column: column });
    };
    DebugEditorModel.prototype.acceptBreakpoint = function () {
        var _a = this.breakpointWidget, position = _a.position, values = _a.values;
        if (position && values) {
            var breakpoint = position.column > 0 ? this.getInlineBreakpoint(position) : this.getLineBreakpoints(position)[0];
            if (breakpoint) {
                breakpoint.updateOrigins(values);
            }
            else {
                var lineNumber = position.lineNumber;
                var column = position.column > 0 ? position.column : undefined;
                this.addBreakpoint(__assign({ line: lineNumber, column: column }, values));
            }
            this.breakpointWidget.hide();
        }
    };
    DebugEditorModel.prototype.handleMouseDown = function (event) {
        var _this = this;
        if (event.target && event.target.type === monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN) {
            if (event.event.rightButton) {
                this.editor.focus();
                setTimeout(function () {
                    _this.contextMenu.render({
                        menuPath: DebugEditorModel_1.CONTEXT_MENU,
                        anchor: event.event.browserEvent,
                        args: [event.target.position]
                    });
                });
            }
            else {
                this.toggleBreakpoint(event.target.position);
            }
        }
        this.hintBreakpoint(event);
    };
    DebugEditorModel.prototype.handleMouseMove = function (event) {
        this.showHover(event);
        this.hintBreakpoint(event);
    };
    DebugEditorModel.prototype.handleMouseLeave = function (event) {
        this.hideHover(event);
        this.deltaHintDecorations([]);
    };
    DebugEditorModel.prototype.hintBreakpoint = function (event) {
        var hintDecorations = this.createHintDecorations(event);
        this.deltaHintDecorations(hintDecorations);
    };
    DebugEditorModel.prototype.deltaHintDecorations = function (hintDecorations) {
        this.hintDecorations = this.deltaDecorations(this.hintDecorations, hintDecorations);
    };
    DebugEditorModel.prototype.createHintDecorations = function (event) {
        if (event.target && event.target.type === monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN && event.target.position) {
            var lineNumber = event.target.position.lineNumber;
            if (this.getLineBreakpoints(event.target.position).length) {
                return [];
            }
            return [{
                    range: new monaco.Range(lineNumber, 1, lineNumber, 1),
                    options: DebugEditorModel_1.BREAKPOINT_HINT_DECORATION
                }];
        }
        return [];
    };
    DebugEditorModel.prototype.showHover = function (mouseEvent) {
        var targetType = mouseEvent.target.type;
        var stopKey = core_1.isOSX ? 'metaKey' : 'ctrlKey';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (targetType === monaco.editor.MouseTargetType.CONTENT_WIDGET && mouseEvent.target.detail === this.hover.getId() && !mouseEvent.event[stopKey]) {
            // mouse moved on top of debug hover widget
            return;
        }
        if (targetType === monaco.editor.MouseTargetType.CONTENT_TEXT) {
            this.hover.show({
                selection: mouseEvent.target.range,
                immediate: false
            });
        }
        else {
            this.hover.hide({ immediate: false });
        }
    };
    DebugEditorModel.prototype.hideHover = function (_a) {
        var event = _a.event;
        var rect = this.hover.getDomNode().getBoundingClientRect();
        if (event.posx < rect.left || event.posx > rect.right || event.posy < rect.top || event.posy > rect.bottom) {
            this.hover.hide({ immediate: false });
        }
    };
    DebugEditorModel.prototype.deltaDecorations = function (oldDecorations, newDecorations) {
        this.updatingDecorations = true;
        try {
            return this.editor.getControl().getModel().deltaDecorations(oldDecorations, newDecorations);
        }
        finally {
            this.updatingDecorations = false;
        }
    };
    var DebugEditorModel_1;
    DebugEditorModel.CONTEXT_MENU = ['debug-editor-context-menu'];
    DebugEditorModel.STICKINESS = monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges;
    DebugEditorModel.BREAKPOINT_HINT_DECORATION = {
        glyphMarginClassName: 'theia-debug-breakpoint-hint',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    DebugEditorModel.TOP_STACK_FRAME_MARGIN = {
        glyphMarginClassName: 'theia-debug-top-stack-frame',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    DebugEditorModel.FOCUSED_STACK_FRAME_MARGIN = {
        glyphMarginClassName: 'theia-debug-focused-stack-frame',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    DebugEditorModel.TOP_STACK_FRAME_DECORATION = {
        isWholeLine: true,
        className: 'theia-debug-top-stack-frame-line',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    DebugEditorModel.TOP_STACK_FRAME_INLINE_DECORATION = {
        beforeContentClassName: 'theia-debug-top-stack-frame-column'
    };
    DebugEditorModel.FOCUSED_STACK_FRAME_DECORATION = {
        isWholeLine: true,
        className: 'theia-debug-focused-stack-frame-line',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    __decorate([
        inversify_1.inject(debug_hover_widget_1.DebugHoverWidget),
        __metadata("design:type", debug_hover_widget_1.DebugHoverWidget)
    ], DebugEditorModel.prototype, "hover", void 0);
    __decorate([
        inversify_1.inject(debug_editor_1.DebugEditor),
        __metadata("design:type", Object)
    ], DebugEditorModel.prototype, "editor", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugEditorModel.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugEditorModel.prototype, "sessions", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], DebugEditorModel.prototype, "contextMenu", void 0);
    __decorate([
        inversify_1.inject(debug_breakpoint_widget_1.DebugBreakpointWidget),
        __metadata("design:type", debug_breakpoint_widget_1.DebugBreakpointWidget)
    ], DebugEditorModel.prototype, "breakpointWidget", void 0);
    __decorate([
        inversify_1.inject(debug_exception_widget_1.DebugExceptionWidget),
        __metadata("design:type", debug_exception_widget_1.DebugExceptionWidget)
    ], DebugEditorModel.prototype, "exceptionWidget", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugEditorModel.prototype, "init", null);
    DebugEditorModel = DebugEditorModel_1 = __decorate([
        inversify_1.injectable()
    ], DebugEditorModel);
    return DebugEditorModel;
}());
exports.DebugEditorModel = DebugEditorModel;
//# sourceMappingURL=debug-editor-model.js.map
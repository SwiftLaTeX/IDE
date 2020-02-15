"use strict";
/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
// This file is strictly for testing; disable no-any so we can mock out objects not under test
// disable no-unused-expression for chai.
/* eslint-disable no-unused-expressions, @typescript-eslint/no-explicit-any */
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJsDom = jsdom_1.enableJSDOM();
var uri_1 = require("@theia/core/lib/common/uri");
var inversify_1 = require("inversify");
var editor_preview_widget_1 = require("./editor-preview-widget");
var editor_preview_factory_1 = require("./editor-preview-factory");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var browser_3 = require("@theia/editor/lib/browser");
var chai_1 = require("chai");
var sinon = require("sinon");
var previewFrontEndModule = require("./editor-preview-frontend-module");
var mockEditorWidget = sinon.createStubInstance(browser_3.EditorWidget);
sinon.stub(mockEditorWidget, 'id').get(function () { return 'mockEditorWidget'; });
var mockPreviewWidget = sinon.createStubInstance(editor_preview_widget_1.EditorPreviewWidget);
sinon.stub(mockPreviewWidget, 'id').get(function () { return 'mockPreviewWidget'; });
sinon.stub(mockPreviewWidget, 'disposed').get(function () { return ({ connect: function () { return 1; } }); });
var onPinnedListeners = [];
sinon.stub(mockPreviewWidget, 'onPinned').get(function () { return function (fn) { return onPinnedListeners.push(fn); }; });
var mockEditorManager = sinon.createStubInstance(browser_3.EditorManager);
mockEditorManager.getOrCreateByUri = sinon.stub().returns(mockEditorWidget);
var mockWidgetManager = sinon.createStubInstance(browser_2.WidgetManager);
var onCreateListeners = [];
mockWidgetManager.onDidCreateWidget = sinon.stub().callsFake(function (fn) { return onCreateListeners.push(fn); });
mockWidgetManager.getOrCreateWidget.returns(mockPreviewWidget);
var mockShell = sinon.createStubInstance(browser_2.ApplicationShell);
var mockPreference = sinon.createStubInstance(browser_1.PreferenceServiceImpl);
mockPreference.onPreferencesChanged = sinon.stub().returns({ dispose: function () { } });
var testContainer;
before(function () {
    testContainer = new inversify_1.Container();
    // Mock out injected dependencies.
    testContainer.bind(browser_3.EditorManager).toDynamicValue(function (ctx) { return mockEditorManager; });
    testContainer.bind(browser_2.WidgetManager).toDynamicValue(function (ctx) { return mockWidgetManager; });
    testContainer.bind(browser_2.ApplicationShell).toConstantValue(mockShell);
    testContainer.bind(browser_1.PreferenceService).toDynamicValue(function (ctx) { return mockPreference; });
    testContainer.load(previewFrontEndModule.default);
});
after(function () {
    disableJsDom();
});
describe('editor-preview-manager', function () {
    var previewManager;
    beforeEach(function () {
        previewManager = testContainer.get(browser_1.OpenHandler);
        sinon.stub(previewManager, 'onActive').resolves();
        sinon.stub(previewManager, 'onReveal').resolves();
    });
    afterEach(function () {
        onCreateListeners = [];
        onPinnedListeners = [];
    });
    it('should handle preview requests if editor.enablePreview enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mockPreference.get.returns(true);
                    _a = chai_1.expect;
                    return [4 /*yield*/, previewManager.canHandle(new uri_1.default(), { preview: true })];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.be.greaterThan(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not handle preview requests if editor.enablePreview disabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mockPreference.get.returns(false);
                    _a = chai_1.expect;
                    return [4 /*yield*/, previewManager.canHandle(new uri_1.default(), { preview: true })];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not handle requests that are not preview or currently being previewed', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = chai_1.expect;
                    return [4 /*yield*/, previewManager.canHandle(new uri_1.default())];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create a preview editor and replace where required.', function () { return __awaiter(void 0, void 0, void 0, function () {
        var w, afterReplace;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, previewManager.open(new uri_1.default(), { preview: true })];
                case 1:
                    w = _a.sent();
                    chai_1.expect(w instanceof editor_preview_widget_1.EditorPreviewWidget).to.be.true;
                    chai_1.expect(w.replaceEditorWidget.calledOnce).to.be.false;
                    return [4 /*yield*/, previewManager.open(new uri_1.default(), { preview: true })];
                case 2:
                    afterReplace = _a.sent();
                    chai_1.expect(afterReplace.replaceEditorWidget.calledOnce).to.be.true;
                    // Ensure the same preview widget was re-used.
                    chai_1.expect(w).to.equal(afterReplace);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should return an existing editor on preview request', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    // Activate existing editor
                    mockEditorManager.getByUri.returns(mockEditorWidget);
                    mockEditorManager.open.returns(mockEditorWidget);
                    _a = chai_1.expect;
                    return [4 /*yield*/, previewManager.open(new uri_1.default(), {})];
                case 1:
                    _a.apply(void 0, [_d.sent()]).to.equal(mockEditorWidget);
                    // Activate existing preview
                    mockEditorWidget.parent = mockPreviewWidget;
                    _b = chai_1.expect;
                    return [4 /*yield*/, previewManager.open(new uri_1.default(), { preview: true })];
                case 2:
                    _b.apply(void 0, [_d.sent()]).to.equal(mockPreviewWidget);
                    // Ensure it is not pinned.
                    chai_1.expect(mockPreviewWidget.pinEditorWidget.calledOnce).to.be.false;
                    // Pin existing preview
                    _c = chai_1.expect;
                    return [4 /*yield*/, previewManager.open(new uri_1.default(), {})];
                case 3:
                    // Pin existing preview
                    _c.apply(void 0, [_d.sent()]).to.equal(mockPreviewWidget);
                    chai_1.expect(mockPreviewWidget.pinEditorWidget.calledOnce).to.be.true;
                    return [2 /*return*/];
            }
        });
    }); });
    it('should should transition the editor to permanent on pin events.', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Fake creation call.
                return [4 /*yield*/, onCreateListeners.pop()({ factoryId: editor_preview_factory_1.EditorPreviewWidgetFactory.ID, widget: mockPreviewWidget })];
                case 1:
                    // Fake creation call.
                    _a.sent();
                    // Fake pinned call
                    onPinnedListeners.pop()({ preview: mockPreviewWidget, editorWidget: mockEditorWidget });
                    chai_1.expect(mockPreviewWidget.dispose.calledOnce).to.be.true;
                    chai_1.expect(mockEditorWidget.close.calledOnce).to.be.false;
                    chai_1.expect(mockEditorWidget.dispose.calledOnce).to.be.false;
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=editor-preview-manager.spec.js.map
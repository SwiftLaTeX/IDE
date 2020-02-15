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
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
var editor_preview_factory_1 = require("./editor-preview-factory");
var chai_1 = require("chai");
var sinon = require("sinon");
var previewFrontEndModule = require("./editor-preview-frontend-module");
var mockEditorWidget = sinon.createStubInstance(browser_2.EditorWidget);
var mockEditorManager = {
    getOrCreateByUri: function () { }
};
var getOrCreateStub = sinon.stub(mockEditorManager, 'getOrCreateByUri').returns(mockEditorWidget);
var testContainer;
before(function () {
    testContainer = new inversify_1.Container();
    // Mock out injected dependencies.
    testContainer.bind(browser_1.WidgetManager).toDynamicValue(function (ctx) { return ({}); });
    testContainer.bind(browser_2.EditorManager).toDynamicValue(function (ctx) { return mockEditorManager; });
    testContainer.load(previewFrontEndModule.default);
});
after(function () {
    disableJsDom();
});
describe('editor-preview-factory', function () {
    var widgetFactory;
    beforeEach(function () {
        widgetFactory = testContainer.get(browser_1.WidgetFactory);
        getOrCreateStub.resetHistory();
    });
    it('should create a new editor widget via editor manager if same session', function () { return __awaiter(void 0, void 0, void 0, function () {
        var opts, widget;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opts = {
                        kind: 'editor-preview-widget',
                        id: '1',
                        initialUri: 'file://a/b/c',
                        session: editor_preview_factory_1.EditorPreviewWidgetFactory.sessionId
                    };
                    return [4 /*yield*/, widgetFactory.createWidget(opts)];
                case 1:
                    widget = _a.sent();
                    chai_1.expect(mockEditorManager.getOrCreateByUri.calledOnce).to.be.true;
                    chai_1.expect(widget.id).to.equal(opts.id);
                    chai_1.expect(widget.editorWidget).to.equal(mockEditorWidget);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not create a widget if restoring from previous session', function () { return __awaiter(void 0, void 0, void 0, function () {
        var opts, widget;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opts = {
                        kind: 'editor-preview-widget',
                        id: '2',
                        initialUri: 'file://a/b/c',
                        session: 'session-mismatch'
                    };
                    return [4 /*yield*/, widgetFactory.createWidget(opts)];
                case 1:
                    widget = _a.sent();
                    chai_1.expect(mockEditorManager.getOrCreateByUri.called).to.be.false;
                    chai_1.expect(widget.id).to.equal(opts.id);
                    chai_1.expect(widget.editorWidget).to.be.undefined;
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=editor-preview-factory.spec.js.map
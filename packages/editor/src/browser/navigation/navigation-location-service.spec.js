"use strict";
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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var chai_1 = require("chai");
var inversify_1 = require("inversify");
var logger_1 = require("@theia/core/lib/common/logger");
var mock_logger_1 = require("@theia/core/lib/common/test/mock-logger");
var opener_service_1 = require("@theia/core/lib/browser/opener-service");
var mock_opener_service_1 = require("@theia/core/lib/browser/test/mock-opener-service");
var navigation_location_updater_1 = require("./navigation-location-updater");
var mock_navigation_location_updater_1 = require("./test/mock-navigation-location-updater");
var navigation_location_similarity_1 = require("./navigation-location-similarity");
var navigation_location_1 = require("./navigation-location");
var navigation_location_service_1 = require("./navigation-location-service");
disableJSDOM();
/* eslint-disable no-unused-expressions */
describe('navigation-location-service', function () {
    var stack;
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
    });
    after(function () {
        disableJSDOM();
    });
    beforeEach(function () {
        stack = init();
    });
    it('should not allow navigating back when the stack is empty', function () {
        chai_1.expect(stack.canGoBack()).to.be.false;
    });
    it('should not allow navigating back when the stack has a single location', function () {
        stack.register(createCursorLocation());
        chai_1.expect(stack.canGoBack()).to.be.false;
    });
    it('should allow navigating back when the stack has more than one locations', function () {
        stack.register(createCursorLocation(), createCursorLocation({ line: 100, character: 100 }));
        chai_1.expect(stack.canGoBack()).to.be.true;
    });
    it('should not allow navigating forward when the stack is empty', function () {
        chai_1.expect(stack.canGoForward()).to.be.false;
    });
    it('should not allow navigating forward when the pointer points to the end last element of the stack', function () {
        stack.register(createCursorLocation(), createCursorLocation({ line: 100, character: 100 }));
        chai_1.expect(stack.canGoForward()).to.be.false;
    });
    it('should not exceed the max stack item', function () {
        stack.register.apply(stack, __spread(__spread(Array(100).keys()).map(function (i) { return createCursorLocation({ line: i * 10, character: i }, "file://" + i); })));
        chai_1.expect(stack.locations().length).to.be.lessThan(100);
    });
    describe('last-edit-location', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            it('should return with undefined if the stack contains no modifications', function () {
                stack.register(createCursorLocation(), createCursorLocation({ line: 100, character: 100 }));
                chai_1.expect(stack.lastEditLocation()).to.be.undefined;
            });
            it('should return with the location of the last modification', function () {
                var expected = navigation_location_1.NavigationLocation.create('file://path/to/file', {
                    text: '',
                    range: { start: { line: 200, character: 0 }, end: { line: 500, character: 0 } },
                    rangeLength: 0
                });
                stack.register(createCursorLocation(), expected, createCursorLocation({ line: 100, character: 100 }));
                chai_1.expect(stack.lastEditLocation()).to.be.deep.equal(expected);
            });
            it('should return with the location of the last modification even if the pointer is not on the head', function () { return __awaiter(void 0, void 0, void 0, function () {
                var modificationLocation, expected;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            modificationLocation = navigation_location_1.NavigationLocation.create('file://path/to/file', {
                                text: '',
                                range: { start: { line: 300, character: 0 }, end: { line: 500, character: 0 } },
                                rangeLength: 0
                            });
                            expected = navigation_location_1.NavigationLocation.create('file://path/to/file', {
                                text: '',
                                range: { start: { line: 700, character: 0 }, end: { line: 800, character: 0 } },
                                rangeLength: 0
                            });
                            stack.register(createCursorLocation(), modificationLocation, createCursorLocation({ line: 100, character: 100 }), expected);
                            return [4 /*yield*/, stack.back()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, stack.back()];
                        case 2:
                            _a.sent();
                            chai_1.expect(stack.currentLocation()).to.be.deep.equal(modificationLocation);
                            chai_1.expect(stack.lastEditLocation()).to.be.deep.equal(expected);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    function createCursorLocation(context, uri) {
        if (context === void 0) { context = { line: 0, character: 0, }; }
        if (uri === void 0) { uri = 'file://path/to/file'; }
        return navigation_location_1.NavigationLocation.create(uri, context);
    }
    function init() {
        var container = new inversify_1.Container({ defaultScope: 'Singleton' });
        container.bind(navigation_location_service_1.NavigationLocationService).toSelf();
        container.bind(navigation_location_similarity_1.NavigationLocationSimilarity).toSelf();
        container.bind(mock_opener_service_1.MockOpenerService).toSelf();
        container.bind(mock_logger_1.MockLogger).toSelf();
        container.bind(logger_1.ILogger).toService(mock_logger_1.MockLogger);
        container.bind(mock_navigation_location_updater_1.NoopNavigationLocationUpdater).toSelf();
        container.bind(navigation_location_updater_1.NavigationLocationUpdater).toService(mock_navigation_location_updater_1.NoopNavigationLocationUpdater);
        container.bind(opener_service_1.OpenerService).toService(mock_opener_service_1.MockOpenerService);
        return container.get(navigation_location_service_1.NavigationLocationService);
    }
});
//# sourceMappingURL=navigation-location-service.spec.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var inversify_1 = require("inversify");
var chai = require("chai");
var sinon = require("sinon");
var os = require("../../common/os");
var logger_1 = require("../../common/logger");
var storage_service_1 = require("../storage-service");
var message_service_1 = require("../../common/message-service");
var window_service_1 = require("../window/window-service");
var browser_keyboard_layout_provider_1 = require("./browser-keyboard-layout-provider");
var keys_1 = require("./keys");
describe('browser keyboard layout provider', function () {
    var _this = this;
    var stubOSX;
    var stubWindows;
    var stubNavigator;
    var setup = function (system) {
        switch (system) {
            case 'mac':
                stubOSX = sinon.stub(os, 'isOSX').value(true);
                stubWindows = sinon.stub(os, 'isWindows').value(false);
                break;
            case 'win':
                stubOSX = sinon.stub(os, 'isOSX').value(false);
                stubWindows = sinon.stub(os, 'isWindows').value(true);
                break;
            default:
                stubOSX = sinon.stub(os, 'isOSX').value(false);
                stubWindows = sinon.stub(os, 'isWindows').value(false);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stubNavigator = sinon.stub(global, 'navigator').value({});
        var container = new inversify_1.Container();
        container.bind(browser_keyboard_layout_provider_1.BrowserKeyboardLayoutProvider).toSelf();
        container.bind(logger_1.ILogger).to(MockLogger);
        container.bind(storage_service_1.LocalStorageService).toSelf().inSingletonScope();
        container.bind(message_service_1.MessageService).toConstantValue({});
        container.bind(window_service_1.WindowService).toConstantValue({});
        var service = container.get(browser_keyboard_layout_provider_1.BrowserKeyboardLayoutProvider);
        return { service: service, container: container };
    };
    afterEach(function () {
        stubOSX.restore();
        stubWindows.restore();
        stubNavigator.restore();
    });
    it('detects German Mac layout', function () { return __awaiter(_this, void 0, void 0, function () {
        var service, currentLayout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    service = setup('mac').service;
                    return [4 /*yield*/, service.getNativeLayout()];
                case 1:
                    currentLayout = _a.sent();
                    service.onDidChangeNativeLayout(function (l) {
                        currentLayout = l;
                    });
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.US');
                    service.validateKey({ code: keys_1.Key.SEMICOLON.code, character: 'ö' });
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.German');
                    return [2 /*return*/];
            }
        });
    }); });
    it('detects French Mac layout', function () { return __awaiter(_this, void 0, void 0, function () {
        var service, currentLayout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    service = setup('mac').service;
                    return [4 /*yield*/, service.getNativeLayout()];
                case 1:
                    currentLayout = _a.sent();
                    service.onDidChangeNativeLayout(function (l) {
                        currentLayout = l;
                    });
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.US');
                    service.validateKey({ code: keys_1.Key.SEMICOLON.code, character: 'm' });
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.French');
                    return [2 /*return*/];
            }
        });
    }); });
    it('detects keyboard layout change', function () { return __awaiter(_this, void 0, void 0, function () {
        var service, currentLayout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    service = setup('mac').service;
                    return [4 /*yield*/, service.getNativeLayout()];
                case 1:
                    currentLayout = _a.sent();
                    service.onDidChangeNativeLayout(function (l) {
                        currentLayout = l;
                    });
                    service.validateKey({ code: keys_1.Key.QUOTE.code, character: 'ä' });
                    service.validateKey({ code: keys_1.Key.SEMICOLON.code, character: 'ö' });
                    service.validateKey({ code: keys_1.Key.BRACKET_LEFT.code, character: 'ü' });
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.German');
                    service.validateKey({ code: keys_1.Key.SEMICOLON.code, character: 'm' });
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.French');
                    return [2 /*return*/];
            }
        });
    }); });
    it('applies layout chosen by the user', function () { return __awaiter(_this, void 0, void 0, function () {
        var service, currentLayout, spanishLayout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    service = setup('mac').service;
                    return [4 /*yield*/, service.getNativeLayout()];
                case 1:
                    currentLayout = _a.sent();
                    service.onDidChangeNativeLayout(function (l) {
                        currentLayout = l;
                    });
                    service.validateKey({ code: keys_1.Key.SEMICOLON.code, character: 'm' });
                    spanishLayout = service.allLayoutData.find(function (data) { return data.name === 'Spanish' && data.hardware === 'mac'; });
                    return [4 /*yield*/, service.setLayoutData(spanishLayout)];
                case 2:
                    _a.sent();
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.Spanish');
                    return [4 /*yield*/, service.setLayoutData('autodetect')];
                case 3:
                    _a.sent();
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.French');
                    return [2 /*return*/];
            }
        });
    }); });
    it('restores pressed keys from last session', function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, service, container, service2, currentLayout;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setup('mac'), service = _a.service, container = _a.container;
                    service.validateKey({ code: keys_1.Key.SEMICOLON.code, character: 'm' });
                    service2 = container.get(browser_keyboard_layout_provider_1.BrowserKeyboardLayoutProvider);
                    chai.expect(service2).to.not.equal(service);
                    return [4 /*yield*/, service2.getNativeLayout()];
                case 1:
                    currentLayout = _b.sent();
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.French');
                    return [2 /*return*/];
            }
        });
    }); });
    it('restores user selection from last session', function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, service, container, spanishLayout, service2, currentLayout;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setup('mac'), service = _a.service, container = _a.container;
                    spanishLayout = service.allLayoutData.find(function (data) { return data.name === 'Spanish' && data.hardware === 'mac'; });
                    return [4 /*yield*/, service.setLayoutData(spanishLayout)];
                case 1:
                    _b.sent();
                    service2 = container.get(browser_keyboard_layout_provider_1.BrowserKeyboardLayoutProvider);
                    chai.expect(service2).to.not.equal(service);
                    service2.validateKey({ code: keys_1.Key.SEMICOLON.code, character: 'm' });
                    return [4 /*yield*/, service2.getNativeLayout()];
                case 2:
                    currentLayout = _b.sent();
                    chai.expect(currentLayout.info.id).to.equal('com.apple.keylayout.Spanish');
                    return [2 /*return*/];
            }
        });
    }); });
});
var MockLogger = /** @class */ (function () {
    function MockLogger() {
    }
    MockLogger.prototype.trace = function (loggable) {
        return Promise.resolve();
    };
    MockLogger.prototype.debug = function (loggable) {
        return Promise.resolve();
    };
    MockLogger.prototype.info = function (loggable) {
        return Promise.resolve();
    };
    MockLogger.prototype.warn = function (loggable) {
        return Promise.resolve();
    };
    MockLogger.prototype.error = function (loggable) {
        return Promise.resolve();
    };
    MockLogger.prototype.fatal = function (loggable) {
        return Promise.resolve();
    };
    MockLogger = __decorate([
        inversify_1.injectable()
    ], MockLogger);
    return MockLogger;
}());
//# sourceMappingURL=browser-keyboard-layout-provider.spec.js.map
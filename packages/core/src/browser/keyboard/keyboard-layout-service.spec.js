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
var event_1 = require("../../common/event");
var keys_1 = require("./keys");
var keyboard_layout_service_1 = require("./keyboard-layout-service");
var keyboard_layout_provider_1 = require("../../common/keyboard/keyboard-layout-provider");
var os = require("../../common/os");
var chai = require("chai");
var sinon = require("sinon");
describe('keyboard layout service', function () {
    var _this = this;
    var stubOSX;
    var stubWindows;
    var setup = function (layout, system) { return __awaiter(_this, void 0, void 0, function () {
        var container, MockLayoutProvider, service;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
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
                    container = new inversify_1.Container();
                    container.bind(keyboard_layout_service_1.KeyboardLayoutService).toSelf().inSingletonScope();
                    MockLayoutProvider = /** @class */ (function () {
                        function MockLayoutProvider() {
                            this.emitter = new event_1.Emitter();
                        }
                        Object.defineProperty(MockLayoutProvider.prototype, "onDidChangeNativeLayout", {
                            get: function () {
                                return this.emitter.event;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        MockLayoutProvider.prototype.getNativeLayout = function () {
                            return Promise.resolve(layout);
                        };
                        MockLayoutProvider = __decorate([
                            inversify_1.injectable()
                        ], MockLayoutProvider);
                        return MockLayoutProvider;
                    }());
                    container.bind(keyboard_layout_provider_1.KeyboardLayoutProvider).to(MockLayoutProvider);
                    container.bind(keyboard_layout_provider_1.KeyboardLayoutChangeNotifier).to(MockLayoutProvider);
                    service = container.get(keyboard_layout_service_1.KeyboardLayoutService);
                    return [4 /*yield*/, service.initialize()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, service];
            }
        });
    }); };
    afterEach(function () {
        stubOSX.restore();
        stubWindows.restore();
    });
    it('resolves correct key bindings with German Mac layout', function () { return __awaiter(_this, void 0, void 0, function () {
        var macGerman, service, toggleComment, indentLine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    macGerman = require('../../../src/common/keyboard/layouts/de-German-mac.json');
                    return [4 /*yield*/, setup(macGerman, 'mac')];
                case 1:
                    service = _a.sent();
                    toggleComment = service.resolveKeyCode(keys_1.KeyCode.createKeyCode('Slash+M1'));
                    chai.expect(toggleComment.toString()).to.equal('meta+shift+7');
                    chai.expect(service.getKeyboardCharacter(toggleComment.key)).to.equal('7');
                    indentLine = service.resolveKeyCode(keys_1.KeyCode.createKeyCode('BracketRight+M1'));
                    chai.expect(indentLine.toString()).to.equal('meta+alt+ctrl+6');
                    chai.expect(service.getKeyboardCharacter(indentLine.key)).to.equal('6');
                    return [2 /*return*/];
            }
        });
    }); });
    it('resolves correct key bindings with French Mac layout', function () { return __awaiter(_this, void 0, void 0, function () {
        var macFrench, service, toggleComment, indentLine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    macFrench = require('../../../src/common/keyboard/layouts/fr-French-mac.json');
                    return [4 /*yield*/, setup(macFrench, 'mac')];
                case 1:
                    service = _a.sent();
                    toggleComment = service.resolveKeyCode(keys_1.KeyCode.createKeyCode('Slash+M1'));
                    chai.expect(toggleComment.toString()).to.equal('meta+shift+.');
                    chai.expect(service.getKeyboardCharacter(toggleComment.key)).to.equal(':');
                    indentLine = service.resolveKeyCode(keys_1.KeyCode.createKeyCode('BracketRight+M1'));
                    chai.expect(indentLine.toString()).to.equal('meta+shift+alt+ctrl+-');
                    chai.expect(service.getKeyboardCharacter(indentLine.key)).to.equal(')');
                    return [2 /*return*/];
            }
        });
    }); });
    it('resolves correct key bindings with German Windows layout', function () { return __awaiter(_this, void 0, void 0, function () {
        var winGerman, service, toggleComment, indentLine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    winGerman = require('../../../src/common/keyboard/layouts/de-German-pc.json');
                    return [4 /*yield*/, setup(winGerman, 'win')];
                case 1:
                    service = _a.sent();
                    toggleComment = service.resolveKeyCode(keys_1.KeyCode.createKeyCode('Slash+M1'));
                    chai.expect(toggleComment.toString()).to.equal('ctrl+\\');
                    chai.expect(service.getKeyboardCharacter(toggleComment.key)).to.equal('#');
                    indentLine = service.resolveKeyCode(keys_1.KeyCode.createKeyCode('BracketRight+M1'));
                    chai.expect(indentLine.toString()).to.equal('ctrl+=');
                    chai.expect(service.getKeyboardCharacter(indentLine.key)).to.equal('´');
                    return [2 /*return*/];
            }
        });
    }); });
    it('resolves correct key bindings with French Windows layout', function () { return __awaiter(_this, void 0, void 0, function () {
        var winFrench, service, toggleComment, indentLine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    winFrench = require('../../../src/common/keyboard/layouts/fr-French-pc.json');
                    return [4 /*yield*/, setup(winFrench, 'win')];
                case 1:
                    service = _a.sent();
                    toggleComment = service.resolveKeyCode(keys_1.KeyCode.createKeyCode('Slash+M1'));
                    chai.expect(toggleComment.toString()).to.equal('ctrl+.');
                    chai.expect(service.getKeyboardCharacter(toggleComment.key)).to.equal(':');
                    indentLine = service.resolveKeyCode(keys_1.KeyCode.createKeyCode('BracketRight+M1'));
                    chai.expect(indentLine.toString()).to.equal('ctrl+[');
                    chai.expect(service.getKeyboardCharacter(indentLine.key)).to.equal('^');
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=keyboard-layout-service.spec.js.map
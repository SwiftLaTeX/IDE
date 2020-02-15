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
var os_1 = require("../../common/os");
var event_1 = require("../../common/event");
var logger_1 = require("../../common/logger");
var promise_util_1 = require("../../common/promise-util");
var storage_service_1 = require("../storage-service");
var BrowserKeyboardLayoutProvider = /** @class */ (function () {
    function BrowserKeyboardLayoutProvider() {
        this.initialized = new promise_util_1.Deferred();
        this.nativeLayoutChanged = new event_1.Emitter();
        this.tester = new KeyboardTester(loadAllLayouts());
        this.source = 'pressed-keys';
        this.currentLayout = exports.DEFAULT_LAYOUT_DATA;
    }
    Object.defineProperty(BrowserKeyboardLayoutProvider.prototype, "onDidChangeNativeLayout", {
        get: function () {
            return this.nativeLayoutChanged.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserKeyboardLayoutProvider.prototype, "allLayoutData", {
        get: function () {
            return this.tester.candidates.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserKeyboardLayoutProvider.prototype, "currentLayoutData", {
        get: function () {
            return this.currentLayout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserKeyboardLayoutProvider.prototype, "currentLayoutSource", {
        get: function () {
            return this.source;
        },
        enumerable: true,
        configurable: true
    });
    BrowserKeyboardLayoutProvider.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keyboard;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadState()];
                    case 1:
                        _a.sent();
                        keyboard = navigator.keyboard;
                        if (keyboard && keyboard.addEventListener) {
                            keyboard.addEventListener('layoutchange', function () { return __awaiter(_this, void 0, void 0, function () {
                                var newLayout;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getNativeLayout()];
                                        case 1:
                                            newLayout = _a.sent();
                                            this.nativeLayoutChanged.fire(newLayout);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        this.initialized.resolve();
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserKeyboardLayoutProvider.prototype.getNativeLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, layout, source;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialized.promise];
                    case 1:
                        _b.sent();
                        if (this.source === 'user-choice') {
                            return [2 /*return*/, this.currentLayout.raw];
                        }
                        return [4 /*yield*/, this.autodetect()];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 2]), layout = _a[0], source = _a[1];
                        this.setCurrent(layout, source);
                        return [2 /*return*/, layout.raw];
                }
            });
        });
    };
    /**
     * Set user-chosen keyboard layout data.
     */
    BrowserKeyboardLayoutProvider.prototype.setLayoutData = function (layout) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, newLayout, source;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(layout === 'autodetect')) return [3 /*break*/, 3];
                        if (!(this.source === 'user-choice')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.autodetect()];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), newLayout = _a[0], source = _a[1];
                        this.setCurrent(newLayout, source);
                        this.nativeLayoutChanged.fire(newLayout.raw);
                        return [2 /*return*/, newLayout];
                    case 2: return [2 /*return*/, this.currentLayout];
                    case 3:
                        if (this.source !== 'user-choice' || layout !== this.currentLayout) {
                            this.setCurrent(layout, 'user-choice');
                            this.nativeLayoutChanged.fire(layout.raw);
                        }
                        return [2 /*return*/, layout];
                }
            });
        });
    };
    /**
     * Test all known keyboard layouts with the given combination of pressed key and
     * produced character. Matching layouts have their score increased (see class
     * KeyboardTester). If this leads to a change of the top-scoring layout, a layout
     * change event is fired.
     */
    BrowserKeyboardLayoutProvider.prototype.validateKey = function (keyCode) {
        if (this.source !== 'pressed-keys') {
            return;
        }
        var accepted = this.tester.updateScores(keyCode);
        if (!accepted) {
            return;
        }
        var layout = this.selectLayout();
        if (layout !== this.currentLayout && layout !== exports.DEFAULT_LAYOUT_DATA) {
            this.setCurrent(layout, 'pressed-keys');
            this.nativeLayoutChanged.fire(layout.raw);
        }
    };
    BrowserKeyboardLayoutProvider.prototype.setCurrent = function (layout, source) {
        this.currentLayout = layout;
        this.source = source;
        this.saveState();
        if (this.tester.inputCount && (source === 'pressed-keys' || source === 'navigator.keyboard')) {
            var from = source === 'pressed-keys' ? 'pressed keys' : 'browser API';
            var hardware = layout.hardware === 'mac' ? 'Mac' : 'PC';
            this.logger.info("Detected keyboard layout from " + from + ": " + layout.name + " (" + hardware + ")");
        }
    };
    BrowserKeyboardLayoutProvider.prototype.autodetect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keyboard, layoutMap, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyboard = navigator.keyboard;
                        if (!(keyboard && keyboard.getLayoutMap)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, keyboard.getLayoutMap()];
                    case 2:
                        layoutMap = _a.sent();
                        this.testLayoutMap(layoutMap);
                        return [2 /*return*/, [this.selectLayout(), 'navigator.keyboard']];
                    case 3:
                        error_1 = _a.sent();
                        this.logger.warn('Failed to obtain keyboard layout map.', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, [this.selectLayout(), 'pressed-keys']];
                }
            });
        });
    };
    /**
     * @param layoutMap a keyboard layout map according to https://wicg.github.io/keyboard-map/
     */
    BrowserKeyboardLayoutProvider.prototype.testLayoutMap = function (layoutMap) {
        var e_1, _a;
        this.tester.reset();
        try {
            for (var _b = __values(layoutMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), code = _d[0], key = _d[1];
                this.tester.updateScores({ code: code, character: key });
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
    /**
     * Select a layout based on the current tester state and the operating system
     * and language detected from the browser.
     */
    BrowserKeyboardLayoutProvider.prototype.selectLayout = function () {
        var candidates = this.tester.candidates;
        var scores = this.tester.scores;
        var topScore = this.tester.topScore;
        var language = navigator.language;
        var matchingOScount = 0;
        var topScoringCount = 0;
        for (var i = 0; i < candidates.length; i++) {
            if (scores[i] === topScore) {
                var candidate = candidates[i];
                if (osMatches(candidate.hardware)) {
                    if (language && language.startsWith(candidate.language)) {
                        return candidate;
                    }
                    matchingOScount++;
                }
                topScoringCount++;
            }
        }
        if (matchingOScount >= 1) {
            return candidates.find(function (c, i) { return scores[i] === topScore && osMatches(c.hardware); });
        }
        if (topScoringCount >= 1) {
            return candidates.find(function (_, i) { return scores[i] === topScore; });
        }
        return exports.DEFAULT_LAYOUT_DATA;
    };
    BrowserKeyboardLayoutProvider.prototype.saveState = function () {
        var data = {
            tester: this.tester.getState(),
            source: this.source,
            currentLayout: this.currentLayout !== exports.DEFAULT_LAYOUT_DATA ? getLayoutId(this.currentLayout) : undefined
        };
        return this.storageService.setData('keyboard', data);
    };
    BrowserKeyboardLayoutProvider.prototype.loadState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, layout;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getData('keyboard')];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.tester.setState(data.tester || {});
                            this.source = data.source || 'pressed-keys';
                            if (data.currentLayout) {
                                layout = this.tester.candidates.find(function (c) { return getLayoutId(c) === data.currentLayout; });
                                if (layout) {
                                    this.currentLayout = layout;
                                }
                            }
                            else {
                                this.currentLayout = exports.DEFAULT_LAYOUT_DATA;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], BrowserKeyboardLayoutProvider.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(storage_service_1.LocalStorageService),
        __metadata("design:type", storage_service_1.LocalStorageService)
    ], BrowserKeyboardLayoutProvider.prototype, "storageService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BrowserKeyboardLayoutProvider.prototype, "initialize", null);
    BrowserKeyboardLayoutProvider = __decorate([
        inversify_1.injectable()
    ], BrowserKeyboardLayoutProvider);
    return BrowserKeyboardLayoutProvider;
}());
exports.BrowserKeyboardLayoutProvider = BrowserKeyboardLayoutProvider;
function osMatches(hardware) {
    return os_1.isOSX ? hardware === 'mac' : hardware === 'pc';
}
/**
 * This is the fallback keyboard layout selected when nothing else matches.
 * It has an empty mapping, so user inputs are handled like with a standard US keyboard.
 */
exports.DEFAULT_LAYOUT_DATA = {
    name: 'US',
    hardware: os_1.isOSX ? 'mac' : 'pc',
    language: 'en',
    raw: {
        info: {},
        mapping: {}
    }
};
/**
 * Holds score values for all known keyboard layouts. Scores are updated
 * by comparing key codes with the corresponding character produced by
 * the user's keyboard.
 */
var KeyboardTester = /** @class */ (function () {
    function KeyboardTester(candidates) {
        this.candidates = candidates;
        this.topScore = 0;
        this.testedInputs = new Map();
        this.scores = this.candidates.map(function () { return 0; });
    }
    Object.defineProperty(KeyboardTester.prototype, "inputCount", {
        get: function () {
            return this.testedInputs.size;
        },
        enumerable: true,
        configurable: true
    });
    KeyboardTester.prototype.reset = function () {
        for (var i = 0; i < this.scores.length; i++) {
            this.scores[i] = 0;
        }
        this.topScore = 0;
        this.testedInputs.clear();
    };
    KeyboardTester.prototype.updateScores = function (input) {
        var property;
        if (input.shiftKey && input.altKey) {
            property = 'withShiftAltGr';
        }
        else if (input.shiftKey) {
            property = 'withShift';
        }
        else if (input.altKey) {
            property = 'withAltGr';
        }
        else {
            property = 'value';
        }
        var inputKey = input.code + "." + property;
        if (this.testedInputs.has(inputKey)) {
            if (this.testedInputs.get(inputKey) === input.character) {
                return false;
            }
            else {
                // The same input keystroke leads to a different character:
                // probably a keyboard layout change, so forget all previous scores
                this.reset();
            }
        }
        var scores = this.scores;
        for (var i = 0; i < this.candidates.length; i++) {
            scores[i] += this.testCandidate(this.candidates[i], input, property);
            if (scores[i] > this.topScore) {
                this.topScore = scores[i];
            }
        }
        this.testedInputs.set(inputKey, input.character);
        return true;
    };
    KeyboardTester.prototype.testCandidate = function (candidate, input, property) {
        var keyMapping = candidate.raw.mapping[input.code];
        if (keyMapping && keyMapping[property]) {
            return keyMapping[property] === input.character ? 1 : 0;
        }
        else {
            return 0;
        }
    };
    KeyboardTester.prototype.getState = function () {
        var e_2, _a;
        var scores = {};
        for (var i = 0; i < this.scores.length; i++) {
            scores[getLayoutId(this.candidates[i])] = this.scores[i];
        }
        var testedInputs = {};
        try {
            for (var _b = __values(this.testedInputs.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], character = _d[1];
                testedInputs[key] = character;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return {
            scores: scores,
            topScore: this.topScore,
            testedInputs: testedInputs
        };
    };
    KeyboardTester.prototype.setState = function (state) {
        this.reset();
        if (state.scores) {
            var layoutIds = this.candidates.map(getLayoutId);
            for (var id in state.scores) {
                if (state.scores.hasOwnProperty(id)) {
                    var index = layoutIds.indexOf(id);
                    if (index > 0) {
                        this.scores[index] = state.scores[id];
                    }
                }
            }
        }
        if (state.topScore) {
            this.topScore = state.topScore;
        }
        if (state.testedInputs) {
            for (var key in state.testedInputs) {
                if (state.testedInputs.hasOwnProperty(key)) {
                    this.testedInputs.set(key, state.testedInputs[key]);
                }
            }
        }
    };
    return KeyboardTester;
}());
exports.KeyboardTester = KeyboardTester;
function getLayoutId(layout) {
    return layout.language + "-" + layout.name.replace(' ', '_') + "-" + layout.hardware;
}
/**
 * Keyboard layout files are expected to have the following name scheme:
 *     `language-name-hardware.json`
 *
 * - `language`: A language subtag according to IETF BCP 47
 * - `name`:     Display name of the keyboard layout (without dashes)
 * - `hardware`: `pc` or `mac`
 */
function loadLayout(fileName) {
    var _a = __read(fileName.split('-'), 3), language = _a[0], name = _a[1], hardware = _a[2];
    return {
        name: name.replace('_', ' '),
        hardware: hardware,
        language: language,
        raw: require('../../../src/common/keyboard/layouts/' + fileName + '.json')
    };
}
function loadAllLayouts() {
    // The order of keyboard layouts is relevant for autodetection. Layouts with
    // lower index have a higher chance of being selected.
    // The current ordering approach is to sort by estimated number of developers
    // in the respective country (taken from the Stack Overflow Developer Survey),
    // but keeping all layouts of the same language together.
    return [
        'en-US-pc',
        'en-US-mac',
        'en-Dvorak-pc',
        'en-Dvorak-mac',
        'en-Dvorak_Lefthanded-pc',
        'en-Dvorak_Lefthanded-mac',
        'en-Dvorak_Righthanded-pc',
        'en-Dvorak_Righthanded-mac',
        'en-Colemak-mac',
        'en-British-pc',
        'en-British-mac',
        'de-German-pc',
        'de-German-mac',
        'de-Swiss_German-pc',
        'de-Swiss_German-mac',
        'fr-French-pc',
        'fr-French-mac',
        'fr-Canadian_French-pc',
        'fr-Canadian_French-mac',
        'fr-Swiss_French-pc',
        'fr-Swiss_French-mac',
        'fr-Bepo-pc',
        'pt-Portuguese-pc',
        'pt-Portuguese-mac',
        'pt-Brazilian-mac',
        'pl-Polish-pc',
        'pl-Polish-mac',
        'nl-Dutch-pc',
        'nl-Dutch-mac',
        'es-Spanish-pc',
        'es-Spanish-mac',
        'it-Italian-pc',
        'it-Italian-mac',
        'sv-Swedish-pc',
        'sv-Swedish-mac',
        'tr-Turkish_Q-pc',
        'tr-Turkish_Q-mac',
        'cs-Czech-pc',
        'cs-Czech-mac',
        'ro-Romanian-pc',
        'ro-Romanian-mac',
        'da-Danish-pc',
        'da-Danish-mac',
        'nb-Norwegian-pc',
        'nb-Norwegian-mac',
        'hu-Hungarian-pc',
        'hu-Hungarian-mac'
    ].map(loadLayout);
}
//# sourceMappingURL=browser-keyboard-layout-provider.js.map
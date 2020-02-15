"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var uri_1 = require("@theia/core/lib/common/uri");
var resource_1 = require("@theia/core/lib/common/resource");
var browser_1 = require("@theia/core/lib/browser");
var keybinding_1 = require("@theia/core/lib/browser/keybinding");
var keybinding_2 = require("@theia/core/lib/common/keybinding");
var browser_2 = require("@theia/userstorage/lib/browser");
var jsoncparser = require("jsonc-parser");
var event_1 = require("@theia/core/lib/common/event");
var KeymapsService = /** @class */ (function () {
    function KeymapsService() {
        this.changeKeymapEmitter = new event_1.Emitter();
        this.onDidChangeKeymaps = this.changeKeymapEmitter.event;
    }
    /**
     * Initialize the keybinding service.
     */
    KeymapsService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.resourceProvider(new uri_1.default().withScheme(browser_2.UserStorageUri.SCHEME).withPath('keymaps.json'))];
                    case 1:
                        _a.resource = _b.sent();
                        this.reconcile();
                        if (this.resource.onDidChangeContents) {
                            this.resource.onDidChangeContents(function () { return _this.reconcile(); });
                        }
                        this.keyBindingRegistry.onKeybindingsChanged(function () { return _this.changeKeymapEmitter.fire(undefined); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reconcile all the keybindings, registering them to the registry.
     */
    KeymapsService.prototype.reconcile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keybindings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parseKeybindings()];
                    case 1:
                        keybindings = _a.sent();
                        this.keyBindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindings);
                        this.changeKeymapEmitter.fire(undefined);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Parsed the read keybindings.
     */
    KeymapsService.prototype.parseKeybindings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, keybindings, json, json_1, json_1_1, value;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.resource.readContents()];
                    case 1:
                        content = _b.sent();
                        keybindings = [];
                        json = jsoncparser.parse(content, undefined, { disallowComments: false });
                        if (Array.isArray(json)) {
                            try {
                                for (json_1 = __values(json), json_1_1 = json_1.next(); !json_1_1.done; json_1_1 = json_1.next()) {
                                    value = json_1_1.value;
                                    if (keybinding_2.Keybinding.is(value)) {
                                        keybindings.push(value);
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (json_1_1 && !json_1_1.done && (_a = json_1.return)) _a.call(json_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        return [2 /*return*/, keybindings];
                }
            });
        });
    };
    /**
     * Open the keybindings widget.
     * @param ref the optional reference for opening the widget.
     */
    KeymapsService.prototype.open = function (ref) {
        var options = {
            widgetOptions: ref ? { area: 'main', mode: 'split-right', ref: ref } : { area: 'main' },
            mode: 'activate'
        };
        browser_1.open(this.opener, this.resource.uri, options);
    };
    /**
     * Set the keybinding in the JSON.
     * @param newKeybinding the JSON keybindings.
     */
    KeymapsService.prototype.setKeybinding = function (newKeybinding, oldKeybinding) {
        return __awaiter(this, void 0, void 0, function () {
            var keybindings, newAdded, oldRemoved, keybindings_1, keybindings_1_1, keybinding;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.resource.saveContents) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.parseKeybindings()];
                    case 1:
                        keybindings = _b.sent();
                        newAdded = false;
                        oldRemoved = false;
                        try {
                            for (keybindings_1 = __values(keybindings), keybindings_1_1 = keybindings_1.next(); !keybindings_1_1.done; keybindings_1_1 = keybindings_1.next()) {
                                keybinding = keybindings_1_1.value;
                                if (keybinding.command === newKeybinding.command &&
                                    (keybinding.context || '') === (newKeybinding.context || '') &&
                                    (keybinding.when || '') === (newKeybinding.when || '')) {
                                    newAdded = true;
                                    keybinding.keybinding = newKeybinding.keybinding;
                                }
                                if (oldKeybinding && keybinding.keybinding === oldKeybinding &&
                                    keybinding.command === '-' + newKeybinding.command &&
                                    (keybinding.context || '') === (newKeybinding.context || '') &&
                                    (keybinding.when || '') === (newKeybinding.when || '')) {
                                    oldRemoved = true;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (keybindings_1_1 && !keybindings_1_1.done && (_a = keybindings_1.return)) _a.call(keybindings_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (!newAdded) {
                            keybindings.push({
                                command: newKeybinding.command,
                                keybinding: newKeybinding.keybinding,
                                context: newKeybinding.context,
                                when: newKeybinding.when,
                                args: newKeybinding.args
                            });
                        }
                        if (!oldRemoved && oldKeybinding) {
                            keybindings.push({
                                command: '-' + newKeybinding.command,
                                // TODO key: oldKeybinding, see https://github.com/eclipse-theia/theia/issues/6879
                                keybinding: oldKeybinding,
                                context: newKeybinding.context,
                                when: newKeybinding.when,
                                args: newKeybinding.args
                            });
                        }
                        // TODO use preference values to get proper json settings
                        // TODO handle dirty models properly
                        // TODO handle race conditions properly
                        // TODO only apply mimimal edits
                        return [4 /*yield*/, this.resource.saveContents(JSON.stringify(keybindings, undefined, 4))];
                    case 2:
                        // TODO use preference values to get proper json settings
                        // TODO handle dirty models properly
                        // TODO handle race conditions properly
                        // TODO only apply mimimal edits
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Remove the given keybinding with the given command id from the JSON.
     * @param commandId the keybinding command id.
     */
    KeymapsService.prototype.removeKeybinding = function (commandId) {
        return __awaiter(this, void 0, void 0, function () {
            var keybindings, removedCommand, filtered;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.resource.saveContents) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.parseKeybindings()];
                    case 1:
                        keybindings = _a.sent();
                        removedCommand = '-' + commandId;
                        filtered = keybindings.filter(function (a) { return a.command !== commandId && a.command !== removedCommand; });
                        // TODO use preference values to get proper json settings
                        // TODO handle dirty models properly
                        // TODO handle race conditions properly
                        // TODO only apply mimimal edits
                        return [4 /*yield*/, this.resource.saveContents(JSON.stringify(filtered, undefined, 4))];
                    case 2:
                        // TODO use preference values to get proper json settings
                        // TODO handle dirty models properly
                        // TODO handle race conditions properly
                        // TODO only apply mimimal edits
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(resource_1.ResourceProvider),
        __metadata("design:type", Function)
    ], KeymapsService.prototype, "resourceProvider", void 0);
    __decorate([
        inversify_1.inject(keybinding_1.KeybindingRegistry),
        __metadata("design:type", keybinding_1.KeybindingRegistry)
    ], KeymapsService.prototype, "keyBindingRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], KeymapsService.prototype, "opener", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], KeymapsService.prototype, "init", null);
    KeymapsService = __decorate([
        inversify_1.injectable()
    ], KeymapsService);
    return KeymapsService;
}());
exports.KeymapsService = KeymapsService;
//# sourceMappingURL=keymaps-service.js.map
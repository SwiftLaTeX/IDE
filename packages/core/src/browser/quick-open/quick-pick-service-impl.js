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
var quick_open_model_1 = require("./quick-open-model");
var quick_open_service_1 = require("./quick-open-service");
var quick_pick_service_1 = require("../../common/quick-pick-service");
var quick_title_bar_1 = require("./quick-title-bar");
var event_1 = require("../../common/event");
var QuickPickServiceImpl = /** @class */ (function () {
    function QuickPickServiceImpl() {
        this.items = [];
        this.onDidAcceptEmitter = new event_1.Emitter();
        this.onDidAccept = this.onDidAcceptEmitter.event;
        this.onDidChangeActiveItemsEmitter = new event_1.Emitter();
        this.onDidChangeActiveItems = this.onDidChangeActiveItemsEmitter.event;
        this.onDidChangeValueEmitter = new event_1.Emitter();
        this.onDidChangeValue = this.onDidChangeValueEmitter.event;
    }
    QuickPickServiceImpl.prototype.show = function (elements, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.items = _this.toItems(elements, resolve);
                        if (_this.items.length === 0) {
                            resolve(undefined);
                            return;
                        }
                        // Set `runIfSingle` to the value passed through options, else defaults to true.
                        var runIfSingle = (options && options.runIfSingle !== undefined) ? options.runIfSingle : true;
                        if (runIfSingle && _this.items.length === 1) {
                            _this.items[0].run(quick_open_model_1.QuickOpenMode.OPEN);
                            return;
                        }
                        var prefix = options && options.value ? options.value : '';
                        var savedValue;
                        _this.quickOpenService.open({
                            onType: function (value, acceptor) {
                                acceptor(_this.items);
                                if (savedValue !== value) {
                                    _this.onDidChangeValueEmitter.fire(value);
                                    _this.onDidChangeActiveItemsEmitter.fire(_this.items);
                                    savedValue = value;
                                }
                            }
                        }, Object.assign({
                            onClose: function () {
                                resolve(undefined);
                                _this.quickTitleBar.hide();
                            },
                            fuzzyMatchLabel: true,
                            fuzzyMatchDescription: true,
                            prefix: prefix
                        }, options));
                        if (options && _this.quickTitleBar.shouldShowTitleBar(options.title, options.step)) {
                            _this.quickTitleBar.attachTitleBar(_this.quickOpenService.widgetNode, options.title, options.step, options.totalSteps, options.buttons);
                        }
                    })];
            });
        });
    };
    QuickPickServiceImpl.prototype.toItems = function (elements, resolve) {
        var e_1, _a;
        var items = [];
        var groupLabel;
        try {
            for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                var element = elements_1_1.value;
                if (quick_pick_service_1.QuickPickSeparator.is(element)) {
                    groupLabel = element.label;
                }
                else {
                    var options = this.toItemOptions(element, resolve);
                    if (groupLabel) {
                        items.push(new quick_open_model_1.QuickOpenGroupItem(Object.assign(options, { groupLabel: groupLabel, showBorder: true })));
                        groupLabel = undefined;
                    }
                    else {
                        items.push(new quick_open_model_1.QuickOpenItem(options));
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return items;
    };
    QuickPickServiceImpl.prototype.toItemOptions = function (element, resolve) {
        var _this = this;
        var label = typeof element === 'string' ? element : element.label;
        var value = typeof element === 'string' ? element : element.value;
        var description = typeof element === 'string' ? undefined : element.description;
        var detail = typeof element === 'string' ? undefined : element.detail;
        var iconClass = typeof element === 'string' ? undefined : element.iconClass;
        return {
            label: label,
            description: description,
            detail: detail,
            iconClass: iconClass,
            run: function (mode) {
                if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                    return false;
                }
                resolve(value);
                _this.onDidAcceptEmitter.fire(undefined);
                return true;
            }
        };
    };
    QuickPickServiceImpl.prototype.hide = function (reason) {
        this.quickOpenService.hide(reason);
    };
    QuickPickServiceImpl.prototype.setItems = function (items) {
        this.items = items;
        this.quickOpenService.refresh();
    };
    __decorate([
        inversify_1.inject(quick_title_bar_1.QuickTitleBar),
        __metadata("design:type", quick_title_bar_1.QuickTitleBar)
    ], QuickPickServiceImpl.prototype, "quickTitleBar", void 0);
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], QuickPickServiceImpl.prototype, "quickOpenService", void 0);
    QuickPickServiceImpl = __decorate([
        inversify_1.injectable()
    ], QuickPickServiceImpl);
    return QuickPickServiceImpl;
}());
exports.QuickPickServiceImpl = QuickPickServiceImpl;
//# sourceMappingURL=quick-pick-service-impl.js.map
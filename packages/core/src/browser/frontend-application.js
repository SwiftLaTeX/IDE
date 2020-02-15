"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var common_1 = require("../common");
var keybinding_1 = require("./keybinding");
var widgets_1 = require("./widgets");
var application_shell_1 = require("./shell/application-shell");
var shell_layout_restorer_1 = require("./shell/shell-layout-restorer");
var frontend_application_state_1 = require("./frontend-application-state");
var browser_1 = require("./browser");
var core_preferences_1 = require("./core-preferences");
/**
 * Clients can implement to get a callback for contributing widgets to a shell on start.
 */
exports.FrontendApplicationContribution = Symbol('FrontendApplicationContribution');
/**
 * Default frontend contribution that can be extended by clients if they do not want to implement any of the
 * methods from the interface but still want to contribute to the frontend application.
 */
var DefaultFrontendApplicationContribution = /** @class */ (function () {
    function DefaultFrontendApplicationContribution() {
    }
    DefaultFrontendApplicationContribution.prototype.initialize = function () {
        // NOOP
    };
    DefaultFrontendApplicationContribution = __decorate([
        inversify_1.injectable()
    ], DefaultFrontendApplicationContribution);
    return DefaultFrontendApplicationContribution;
}());
exports.DefaultFrontendApplicationContribution = DefaultFrontendApplicationContribution;
var FrontendApplication = /** @class */ (function () {
    function FrontendApplication(commands, menus, keybindings, logger, layoutRestorer, contributions, _shell, stateService) {
        this.commands = commands;
        this.menus = menus;
        this.keybindings = keybindings;
        this.logger = logger;
        this.layoutRestorer = layoutRestorer;
        this.contributions = contributions;
        this._shell = _shell;
        this.stateService = stateService;
        /* vvv HOTFIX begin vvv
         *
         * This is a hotfix against issues eclipse/theia#6459 and gitpod-io/gitpod#875 .
         * It should be reverted after Theia was updated to the newer Monaco.
         */
        this.inComposition = false;
    }
    Object.defineProperty(FrontendApplication.prototype, "shell", {
        get: function () {
            return this._shell;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Start the frontend application.
     *
     * Start up consists of the following steps:
     * - start frontend contributions
     * - attach the application shell to the host element
     * - initialize the application shell layout
     * - reveal the application shell if it was hidden by a startup indicator
     */
    FrontendApplication.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var host;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startContributions()];
                    case 1:
                        _a.sent();
                        this.stateService.state = 'started_contributions';
                        return [4 /*yield*/, this.getHost()];
                    case 2:
                        host = _a.sent();
                        this.attachShell(host);
                        return [4 /*yield*/, browser_1.animationFrame()];
                    case 3:
                        _a.sent();
                        this.stateService.state = 'attached_shell';
                        return [4 /*yield*/, this.initializeLayout()];
                    case 4:
                        _a.sent();
                        this.stateService.state = 'initialized_layout';
                        return [4 /*yield*/, this.fireOnDidInitializeLayout()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.revealShell(host)];
                    case 6:
                        _a.sent();
                        this.registerEventListeners();
                        this.stateService.state = 'ready';
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Return a promise to the host element to which the application shell is attached.
     */
    FrontendApplication.prototype.getHost = function () {
        if (document.body) {
            return Promise.resolve(document.body);
        }
        return new Promise(function (resolve) {
            return window.addEventListener('load', function () { return resolve(document.body); }, { once: true });
        });
    };
    /**
     * Return an HTML element that indicates the startup phase, e.g. with an animation or a splash screen.
     */
    FrontendApplication.prototype.getStartupIndicator = function (host) {
        var startupElements = host.getElementsByClassName('theia-preload');
        return startupElements.length === 0 ? undefined : startupElements[0];
    };
    /**
     * Register composition related event listeners.
     */
    FrontendApplication.prototype.registerCompositionEventListeners = function () {
        var _this = this;
        window.document.addEventListener('compositionstart', function (event) {
            _this.inComposition = true;
        });
        window.document.addEventListener('compositionend', function (event) {
            _this.inComposition = false;
        });
    };
    /* ^^^ HOTFIX end ^^^ */
    /**
     * Register global event listeners.
     */
    FrontendApplication.prototype.registerEventListeners = function () {
        var _this = this;
        this.registerCompositionEventListeners(); /* Hotfix. See above. */
        window.addEventListener('beforeunload', function () {
            _this.stateService.state = 'closing_window';
            _this.layoutRestorer.storeLayout(_this);
            _this.stopContributions();
        });
        window.addEventListener('resize', function () { return _this.shell.update(); });
        document.addEventListener('keydown', function (event) {
            if (_this.inComposition !== true) {
                _this.keybindings.run(event);
            }
        }, true);
        document.addEventListener('touchmove', function (event) { event.preventDefault(); }, { passive: false });
        // Prevent forward/back navigation by scrolling in OS X
        if (common_1.isOSX) {
            document.body.addEventListener('wheel', browser_1.preventNavigation, { passive: false });
        }
        // Prevent the default browser behavior when dragging and dropping files into the window.
        window.addEventListener('dragover', function (event) {
            event.preventDefault();
        }, false);
        window.addEventListener('drop', function (event) {
            event.preventDefault();
        }, false);
    };
    /**
     * Attach the application shell to the host element. If a startup indicator is present, the shell is
     * inserted before that indicator so it is not visible yet.
     */
    FrontendApplication.prototype.attachShell = function (host) {
        var ref = this.getStartupIndicator(host);
        widgets_1.Widget.attach(this.shell, host, ref);
    };
    /**
     * If a startup indicator is present, it is first hidden with the `theia-hidden` CSS class and then
     * removed after a while. The delay until removal is taken from the CSS transition duration.
     */
    FrontendApplication.prototype.revealShell = function (host) {
        var startupElem = this.getStartupIndicator(host);
        if (startupElem) {
            return new Promise(function (resolve) {
                window.requestAnimationFrame(function () {
                    startupElem.classList.add('theia-hidden');
                    var preloadStyle = window.getComputedStyle(startupElem);
                    var transitionDuration = browser_1.parseCssTime(preloadStyle.transitionDuration, 0);
                    window.setTimeout(function () {
                        var parent = startupElem.parentElement;
                        if (parent) {
                            parent.removeChild(startupElem);
                        }
                        resolve();
                    }, transitionDuration);
                });
            });
        }
        else {
            return Promise.resolve();
        }
    };
    /**
     * Initialize the shell layout either using the layout restorer service or, if no layout has
     * been stored, by creating the default layout.
     */
    FrontendApplication.prototype.initializeLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restoreLayout()];
                    case 1:
                        if (!!(_a.sent())) return [3 /*break*/, 3];
                        // Fallback: Create the default shell layout
                        return [4 /*yield*/, this.createDefaultLayout()];
                    case 2:
                        // Fallback: Create the default shell layout
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.shell.pendingUpdates];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Try to restore the shell layout from the storage service. Resolves to `true` if successful.
     */
    FrontendApplication.prototype.restoreLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.layoutRestorer.restoreLayout(this)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        if (shell_layout_restorer_1.ApplicationShellLayoutMigrationError.is(error_1)) {
                            console.warn(error_1.message);
                            console.info('Initializing the default layout instead...');
                        }
                        else {
                            console.error('Could not restore layout', error_1);
                        }
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Let the frontend application contributions initialize the shell layout. Override this
     * method in order to create an application-specific custom layout.
     */
    FrontendApplication.prototype.createDefaultLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, _a, _b, contribution, e_1_1;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _loop_1 = function (contribution) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!contribution.initializeLayout) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_1.measure(contribution.constructor.name + '.initializeLayout', function () { return contribution.initializeLayout(_this); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(this.contributions.getContributions()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        contribution = _b.value;
                        return [5 /*yield**/, _loop_1(contribution)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    FrontendApplication.prototype.fireOnDidInitializeLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_2, this_2, _a, _b, contribution, e_2_1;
            var e_2, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _loop_2 = function (contribution) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!contribution.onDidInitializeLayout) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_2.measure(contribution.constructor.name + '.onDidInitializeLayout', function () { return contribution.onDidInitializeLayout(_this); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(this.contributions.getContributions()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        contribution = _b.value;
                        return [5 /*yield**/, _loop_2(contribution)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Initialize and start the frontend application contributions.
     */
    FrontendApplication.prototype.startContributions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, contribution, _c, _d, contribution, error_2, e_3_1, _loop_3, this_3, _e, _f, contribution, e_4_1;
            var e_5, _g, e_3, _h, e_4, _j;
            var _this = this;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        try {
                            for (_a = __values(this.contributions.getContributions()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                contribution = _b.value;
                                if (contribution.initialize) {
                                    try {
                                        contribution.initialize();
                                    }
                                    catch (error) {
                                        this.logger.error('Could not initialize contribution', error);
                                    }
                                }
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                        _k.label = 1;
                    case 1:
                        _k.trys.push([1, 8, 9, 10]);
                        _c = __values(this.contributions.getContributions()), _d = _c.next();
                        _k.label = 2;
                    case 2:
                        if (!!_d.done) return [3 /*break*/, 7];
                        contribution = _d.value;
                        if (!contribution.configure) return [3 /*break*/, 6];
                        _k.label = 3;
                    case 3:
                        _k.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, contribution.configure(this)];
                    case 4:
                        _k.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _k.sent();
                        this.logger.error('Could not configure contribution', error_2);
                        return [3 /*break*/, 6];
                    case 6:
                        _d = _c.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_3_1 = _k.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        /**
                         * FIXME:
                         * - decouple commands & menus
                         * - consider treat commands, keybindings and menus as frontend application contributions
                         */
                        this.commands.onStart();
                        return [4 /*yield*/, this.keybindings.onStart()];
                    case 11:
                        _k.sent();
                        this.menus.onStart();
                        _loop_3 = function (contribution) {
                            var error_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!contribution.onStart) return [3 /*break*/, 4];
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, this_3.measure(contribution.constructor.name + '.onStart', function () { return contribution.onStart(_this); })];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_3 = _a.sent();
                                        this_3.logger.error('Could not start contribution', error_3);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        this_3 = this;
                        _k.label = 12;
                    case 12:
                        _k.trys.push([12, 17, 18, 19]);
                        _e = __values(this.contributions.getContributions()), _f = _e.next();
                        _k.label = 13;
                    case 13:
                        if (!!_f.done) return [3 /*break*/, 16];
                        contribution = _f.value;
                        return [5 /*yield**/, _loop_3(contribution)];
                    case 14:
                        _k.sent();
                        _k.label = 15;
                    case 15:
                        _f = _e.next();
                        return [3 /*break*/, 13];
                    case 16: return [3 /*break*/, 19];
                    case 17:
                        e_4_1 = _k.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 19];
                    case 18:
                        try {
                            if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Stop the frontend application contributions. This is called when the window is unloaded.
     */
    FrontendApplication.prototype.stopContributions = function () {
        var e_6, _a;
        this.logger.info('>>> Stopping contributions....');
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (contribution.onStop) {
                    try {
                        contribution.onStop(this);
                    }
                    catch (error) {
                        this.logger.error('Could not stop contribution', error);
                    }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.logger.info('<<< All contributions have been stopped.');
    };
    FrontendApplication.prototype.measure = function (name, fn) {
        return __awaiter(this, void 0, void 0, function () {
            var startMark, endMark, result, _a, _b, item;
            var e_7, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        startMark = name + '-start';
                        endMark = name + '-end';
                        performance.mark(startMark);
                        return [4 /*yield*/, fn()];
                    case 1:
                        result = _d.sent();
                        performance.mark(endMark);
                        performance.measure(name, startMark, endMark);
                        try {
                            for (_a = __values(performance.getEntriesByName(name)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                item = _b.value;
                                if (item.duration > 100) {
                                    console.warn(item.name + ' is slow, took: ' + item.duration.toFixed(1) + ' ms');
                                }
                                else {
                                    console.debug(item.name + ' took ' + item.duration.toFixed(1) + ' ms');
                                }
                            }
                        }
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                        performance.clearMeasures(name);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(core_preferences_1.CorePreferences),
        __metadata("design:type", Object)
    ], FrontendApplication.prototype, "corePreferences", void 0);
    FrontendApplication = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.CommandRegistry)),
        __param(1, inversify_1.inject(common_1.MenuModelRegistry)),
        __param(2, inversify_1.inject(keybinding_1.KeybindingRegistry)),
        __param(3, inversify_1.inject(common_1.ILogger)),
        __param(4, inversify_1.inject(shell_layout_restorer_1.ShellLayoutRestorer)),
        __param(5, inversify_1.inject(common_1.ContributionProvider)), __param(5, inversify_1.named(exports.FrontendApplicationContribution)),
        __param(6, inversify_1.inject(application_shell_1.ApplicationShell)),
        __param(7, inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService)),
        __metadata("design:paramtypes", [common_1.CommandRegistry,
            common_1.MenuModelRegistry,
            keybinding_1.KeybindingRegistry, Object, shell_layout_restorer_1.ShellLayoutRestorer, Object, application_shell_1.ApplicationShell,
            frontend_application_state_1.FrontendApplicationStateService])
    ], FrontendApplication);
    return FrontendApplication;
}());
exports.FrontendApplication = FrontendApplication;
//# sourceMappingURL=frontend-application.js.map
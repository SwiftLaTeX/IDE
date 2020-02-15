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
var widget_manager_1 = require("../widget-manager");
var storage_service_1 = require("../storage-service");
var logger_1 = require("../../common/logger");
var theming_1 = require("../theming");
var contribution_provider_1 = require("../../common/contribution-provider");
var application_shell_1 = require("./application-shell");
var StatefulWidget;
(function (StatefulWidget) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return arg !== undefined && typeof arg['storeState'] === 'function' && typeof arg['restoreState'] === 'function';
    }
    StatefulWidget.is = is;
})(StatefulWidget = exports.StatefulWidget || (exports.StatefulWidget = {}));
var ApplicationShellLayoutMigrationError;
(function (ApplicationShellLayoutMigrationError) {
    var code = 'ApplicationShellLayoutMigrationError';
    function create(message) {
        return Object.assign(new Error("Could not migrate layout to version " + application_shell_1.applicationShellLayoutVersion + "." + (message ? '\n' + message : '')), { code: code });
    }
    ApplicationShellLayoutMigrationError.create = create;
    function is(error) {
        return !!error && 'code' in error && error['code'] === code;
    }
    ApplicationShellLayoutMigrationError.is = is;
})(ApplicationShellLayoutMigrationError = exports.ApplicationShellLayoutMigrationError || (exports.ApplicationShellLayoutMigrationError = {}));
exports.ApplicationShellLayoutMigration = Symbol('ApplicationShellLayoutMigration');
exports.RESET_LAYOUT = {
    id: 'reset.layout',
    category: 'View',
    label: 'Reset Workbench Layout'
};
var ShellLayoutRestorer = /** @class */ (function () {
    function ShellLayoutRestorer(widgetManager, logger, storageService) {
        this.widgetManager = widgetManager;
        this.logger = logger;
        this.storageService = storageService;
        this.storageKey = 'layout';
        this.shouldStoreLayout = true;
    }
    ShellLayoutRestorer_1 = ShellLayoutRestorer;
    ShellLayoutRestorer.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(exports.RESET_LAYOUT, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.resetLayout()];
            }); }); }
        });
    };
    ShellLayoutRestorer.prototype.resetLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.logger.info('>>> Resetting layout...');
                this.shouldStoreLayout = false;
                this.storageService.setData(this.storageKey, undefined);
                theming_1.ThemeService.get().reset(); // Theme service cannot use DI, so the current theme ID is stored elsewhere. Hence the explicit reset.
                this.logger.info('<<< The layout has been successfully reset.');
                window.location.reload(true);
                return [2 /*return*/];
            });
        });
    };
    ShellLayoutRestorer.prototype.storeLayout = function (app) {
        if (this.shouldStoreLayout) {
            try {
                this.logger.info('>>> Storing the layout...');
                var layoutData = app.shell.getLayoutData();
                var serializedLayoutData = this.deflate(layoutData);
                this.storageService.setData(this.storageKey, serializedLayoutData);
                this.logger.info('<<< The layout has been successfully stored.');
            }
            catch (error) {
                this.storageService.setData(this.storageKey, undefined);
                this.logger.error('Error during serialization of layout data', error);
            }
        }
    };
    ShellLayoutRestorer.prototype.restoreLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var serializedLayoutData, layoutData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.info('>>> Restoring the layout state...');
                        return [4 /*yield*/, this.storageService.getData(this.storageKey)];
                    case 1:
                        serializedLayoutData = _a.sent();
                        if (serializedLayoutData === undefined) {
                            this.logger.info('<<< Nothing to restore.');
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.inflate(serializedLayoutData)];
                    case 2:
                        layoutData = _a.sent();
                        return [4 /*yield*/, app.shell.setLayoutData(layoutData)];
                    case 3:
                        _a.sent();
                        this.logger.info('<<< The layout has been successfully restored.');
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ShellLayoutRestorer.prototype.isWidgetProperty = function (propertyName) {
        return propertyName === 'widget';
    };
    ShellLayoutRestorer.prototype.isWidgetsProperty = function (propertyName) {
        return propertyName === 'widgets';
    };
    /**
     * Turns the layout data to a string representation.
     */
    ShellLayoutRestorer.prototype.deflate = function (data) {
        var _this = this;
        return JSON.stringify(data, function (property, value) {
            var e_1, _a;
            if (_this.isWidgetProperty(property)) {
                var description = _this.convertToDescription(value);
                return description;
            }
            else if (_this.isWidgetsProperty(property)) {
                var descriptions = [];
                try {
                    for (var _b = __values(value), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var widget = _c.value;
                        var description = _this.convertToDescription(widget);
                        if (description) {
                            descriptions.push(description);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return descriptions;
            }
            return value;
        });
    };
    ShellLayoutRestorer.prototype.convertToDescription = function (widget) {
        var desc = this.widgetManager.getDescription(widget);
        if (desc) {
            var innerState = undefined;
            if (StatefulWidget.is(widget)) {
                innerState = widget.storeState();
            }
            return {
                constructionOptions: desc,
                innerWidgetState: innerState && this.deflate(innerState)
            };
        }
    };
    /**
     * Creates the layout data from its string representation.
     */
    ShellLayoutRestorer.prototype.inflate = function (layoutData) {
        return __awaiter(this, void 0, void 0, function () {
            var parseContext, layout, layoutVersion, migrations, context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parseContext = new ShellLayoutRestorer_1.ParseContext();
                        layout = this.parse(layoutData, parseContext);
                        try {
                            layoutVersion = 'version' in layout && Number(layout.version);
                        }
                        catch ( /* no-op */_b) { /* no-op */ }
                        if (typeof layoutVersion !== 'number' || Number.isNaN(layoutVersion)) {
                            throw new Error('could not resolve a layout version');
                        }
                        if (layoutVersion !== application_shell_1.applicationShellLayoutVersion) {
                            if (layoutVersion < application_shell_1.applicationShellLayoutVersion) {
                                console.warn("Layout version " + layoutVersion + " is behind current layout version " + application_shell_1.applicationShellLayoutVersion + ", trying to migrate...");
                            }
                            else {
                                console.warn("Layout version " + layoutVersion + " is ahead current layout version " + application_shell_1.applicationShellLayoutVersion + ", trying to load anyway...");
                            }
                            console.info("Please use '" + exports.RESET_LAYOUT.label + "' command if the layout looks bogus.");
                        }
                        migrations = this.migrations.getContributions()
                            .filter(function (m) { return m.layoutVersion > layoutVersion && m.layoutVersion <= application_shell_1.applicationShellLayoutVersion; })
                            .sort(function (m, m2) { return m.layoutVersion - m2.layoutVersion; });
                        if (migrations.length) {
                            console.info("Found " + migrations.length + " migrations from layout version " + layoutVersion + " to version " + application_shell_1.applicationShellLayoutVersion + ", migrating...");
                        }
                        context = { layout: layout, layoutVersion: layoutVersion, migrations: migrations };
                        return [4 /*yield*/, this.fireWillInflateLayout(context)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, parseContext.inflate(context)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, layout];
                }
            });
        });
    };
    ShellLayoutRestorer.prototype.fireWillInflateLayout = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, migration, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(context.migrations), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        migration = _b.value;
                        if (!migration.onWillInflateLayout) return [3 /*break*/, 3];
                        // don't catch exceptions, if one migration fails all should fail.
                        return [4 /*yield*/, migration.onWillInflateLayout(context)];
                    case 2:
                        // don't catch exceptions, if one migration fails all should fail.
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ShellLayoutRestorer.prototype.parse = function (layoutData, parseContext) {
        var _this = this;
        return JSON.parse(layoutData, function (property, value) {
            if (_this.isWidgetsProperty(property)) {
                var widgets_1 = [];
                var descs_1 = value;
                var _loop_1 = function (i) {
                    parseContext.push(function (context) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _a = widgets_1;
                                    _b = i;
                                    return [4 /*yield*/, this.convertToWidget(descs_1[i], context)];
                                case 1:
                                    _a[_b] = _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                for (var i = 0; i < descs_1.length; i++) {
                    _loop_1(i);
                }
                return widgets_1;
            }
            else if (value && typeof value === 'object' && !Array.isArray(value)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var copy_1 = {};
                var _loop_2 = function (p) {
                    if (_this.isWidgetProperty(p)) {
                        parseContext.push(function (context) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = copy_1;
                                        _b = p;
                                        return [4 /*yield*/, this.convertToWidget(value[p], context)];
                                    case 1:
                                        _a[_b] = _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    else {
                        copy_1[p] = value[p];
                    }
                };
                for (var p in value) {
                    _loop_2(p);
                }
                return copy_1;
            }
            return value;
        });
    };
    ShellLayoutRestorer.prototype.fireWillInflateWidget = function (desc, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, migration, migrated, e_3_1;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(context.migrations), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        migration = _b.value;
                        if (!migration.onWillInflateWidget) return [3 /*break*/, 3];
                        return [4 /*yield*/, migration.onWillInflateWidget(desc, context)];
                    case 2:
                        migrated = _d.sent();
                        if (migrated) {
                            if (migrated.innerWidgetState && typeof migrated.innerWidgetState !== 'string') {
                                // in order to inflate nested widgets
                                migrated.innerWidgetState = JSON.stringify(migrated.innerWidgetState);
                            }
                            desc = migrated;
                        }
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, desc];
                }
            });
        });
    };
    ShellLayoutRestorer.prototype.convertToWidget = function (desc, context) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, oldState, parseContext, e_4, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!desc.constructionOptions) {
                            return [2 /*return*/, undefined];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, , 11]);
                        return [4 /*yield*/, this.fireWillInflateWidget(desc, context)];
                    case 2:
                        desc = _a.sent();
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(desc.constructionOptions.factoryId, desc.constructionOptions.options)];
                    case 3:
                        widget = _a.sent();
                        if (!(StatefulWidget.is(widget) && desc.innerWidgetState !== undefined)) return [3 /*break*/, 9];
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 8, , 9]);
                        oldState = void 0;
                        if (!(typeof desc.innerWidgetState === 'string')) return [3 /*break*/, 6];
                        parseContext = new ShellLayoutRestorer_1.ParseContext();
                        oldState = this.parse(desc.innerWidgetState, parseContext);
                        return [4 /*yield*/, parseContext.inflate(__assign(__assign({}, context), { parent: widget }))];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        oldState = desc.innerWidgetState;
                        _a.label = 7;
                    case 7:
                        widget.restoreState(oldState);
                        return [3 /*break*/, 9];
                    case 8:
                        e_4 = _a.sent();
                        if (ApplicationShellLayoutMigrationError.is(e_4)) {
                            throw e_4;
                        }
                        this.logger.warn("Couldn't restore widget state for " + widget.id + ". Error: " + e_4 + " ");
                        return [3 /*break*/, 9];
                    case 9:
                        if (widget.isDisposed) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, widget];
                    case 10:
                        e_5 = _a.sent();
                        if (ApplicationShellLayoutMigrationError.is(e_5)) {
                            throw e_5;
                        }
                        this.logger.warn("Couldn't restore widget for " + desc.constructionOptions.factoryId + ". Error: " + e_5 + " ");
                        return [2 /*return*/, undefined];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    var ShellLayoutRestorer_1;
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider), inversify_1.named(exports.ApplicationShellLayoutMigration),
        __metadata("design:type", Object)
    ], ShellLayoutRestorer.prototype, "migrations", void 0);
    ShellLayoutRestorer = ShellLayoutRestorer_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(widget_manager_1.WidgetManager)),
        __param(1, inversify_1.inject(logger_1.ILogger)),
        __param(2, inversify_1.inject(storage_service_1.StorageService)),
        __metadata("design:paramtypes", [widget_manager_1.WidgetManager, Object, Object])
    ], ShellLayoutRestorer);
    return ShellLayoutRestorer;
}());
exports.ShellLayoutRestorer = ShellLayoutRestorer;
(function (ShellLayoutRestorer) {
    var ParseContext = /** @class */ (function () {
        function ParseContext() {
            this.toInflate = [];
        }
        ParseContext.prototype.push = function (toInflate) {
            this.toInflate.push(toInflate);
        };
        ParseContext.prototype.inflate = function (context) {
            return __awaiter(this, void 0, void 0, function () {
                var pending;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            pending = [];
                            while (this.toInflate.length) {
                                pending.push(this.toInflate.pop()(context));
                            }
                            return [4 /*yield*/, Promise.all(pending)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return ParseContext;
    }());
    ShellLayoutRestorer.ParseContext = ParseContext;
})(ShellLayoutRestorer = exports.ShellLayoutRestorer || (exports.ShellLayoutRestorer = {}));
exports.ShellLayoutRestorer = ShellLayoutRestorer;
//# sourceMappingURL=shell-layout-restorer.js.map
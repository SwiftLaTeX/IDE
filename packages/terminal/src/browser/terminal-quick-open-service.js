"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var terminal_service_1 = require("./base/terminal-service");
var terminal_frontend_contribution_1 = require("./terminal-frontend-contribution");
var TerminalQuickOpenService = /** @class */ (function () {
    function TerminalQuickOpenService() {
        this.prefix = 'term ';
    }
    Object.defineProperty(TerminalQuickOpenService.prototype, "description", {
        get: function () {
            return 'Show All Opened Terminals';
        },
        enumerable: true,
        configurable: true
    });
    TerminalQuickOpenService.prototype.getModel = function () {
        return this;
    };
    TerminalQuickOpenService.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: {
                enableSeparateSubstringMatching: true
            },
            fuzzyMatchDescription: {
                enableSeparateSubstringMatching: true
            }
        };
    };
    TerminalQuickOpenService.prototype.open = function () {
        this.prefixQuickOpenService.open(this.prefix);
    };
    TerminalQuickOpenService.prototype.onType = function (lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var terminalItems, widgets, widgets_1, widgets_1_1, widget, item, e_1_1, createNewTerminalItem;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        terminalItems = [];
                        widgets = this.terminalService.all
                            .sort(function (a, b) { return _this.compareItems(a, b); });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        widgets_1 = __values(widgets), widgets_1_1 = widgets_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!widgets_1_1.done) return [3 /*break*/, 5];
                        widget = widgets_1_1.value;
                        return [4 /*yield*/, this.toItem(widget)];
                    case 3:
                        item = _b.sent();
                        terminalItems.push(item);
                        _b.label = 4;
                    case 4:
                        widgets_1_1 = widgets_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (widgets_1_1 && !widgets_1_1.done && (_a = widgets_1.return)) _a.call(widgets_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        createNewTerminalItem = new browser_1.QuickOpenGroupItem({
                            label: 'Open New Terminal',
                            iconClass: 'fa fa-plus',
                            run: this.doCreateNewTerminal(),
                            groupLabel: undefined,
                            showBorder: !!terminalItems.length
                        });
                        terminalItems.push(createNewTerminalItem);
                        acceptor(terminalItems);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Compare two terminal widgets by label. If labels are identical, compare by the widget id.
     * @param a `TerminalWidget` for comparison
     * @param b `TerminalWidget` for comparison
     */
    TerminalQuickOpenService.prototype.compareItems = function (a, b) {
        var normalize = function (str) { return str.trim().toLowerCase(); };
        if (normalize(a.title.label) !== normalize(b.title.label)) {
            return normalize(a.title.label).localeCompare(normalize(b.title.label));
        }
        else {
            return normalize(a.id).localeCompare(normalize(b.id));
        }
    };
    /**
     * Get the function that can create a new terminal.
     * @param {TerminalWidget} widget - the terminal widget to be opened.
     * @returns Function that would create a new terminal if mode === QuickOpenMode.OPEN.
     */
    TerminalQuickOpenService.prototype.doCreateNewTerminal = function () {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.commandService.executeCommand(terminal_frontend_contribution_1.TerminalCommands.NEW.id);
            return true;
        };
    };
    /**
     * Convert the terminal widget to the quick open item.
     * @param {TerminalWidget} widget - the terminal widget.
     * @returns The quick open group item.
     */
    TerminalQuickOpenService.prototype.toItem = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                options = {
                    label: widget.title.label,
                    description: widget.id,
                    tooltip: widget.title.label,
                    hidden: false,
                    run: this.getRunFunction(widget),
                    groupLabel: undefined,
                    showBorder: false
                };
                return [2 /*return*/, new browser_1.QuickOpenGroupItem(options)];
            });
        });
    };
    /**
     * Get the function that can open the editor file.
     * @param {TerminalWidget} widget - the terminal widget to be opened.
     * @returns Function that would open the terminal if mode === QuickOpenMode.OPEN.
     */
    TerminalQuickOpenService.prototype.getRunFunction = function (widget) {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.terminalService.open(widget);
            return true;
        };
    };
    __decorate([
        inversify_1.inject(browser_1.PrefixQuickOpenService),
        __metadata("design:type", browser_1.PrefixQuickOpenService)
    ], TerminalQuickOpenService.prototype, "prefixQuickOpenService", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandService),
        __metadata("design:type", Object)
    ], TerminalQuickOpenService.prototype, "commandService", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TerminalQuickOpenService.prototype, "terminalService", void 0);
    TerminalQuickOpenService = __decorate([
        inversify_1.injectable()
    ], TerminalQuickOpenService);
    return TerminalQuickOpenService;
}());
exports.TerminalQuickOpenService = TerminalQuickOpenService;
/**
 * TODO: merge it to TerminalFrontendContribution.
 */
var TerminalQuickOpenContribution = /** @class */ (function () {
    function TerminalQuickOpenContribution() {
    }
    TerminalQuickOpenContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.terminalQuickOpenService);
    };
    TerminalQuickOpenContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(terminal_frontend_contribution_1.TerminalCommands.SHOW_ALL_OPENED_TERMINALS, {
            execute: function () { return _this.terminalQuickOpenService.open(); }
        });
    };
    __decorate([
        inversify_1.inject(TerminalQuickOpenService),
        __metadata("design:type", TerminalQuickOpenService)
    ], TerminalQuickOpenContribution.prototype, "terminalQuickOpenService", void 0);
    TerminalQuickOpenContribution = __decorate([
        inversify_1.injectable()
    ], TerminalQuickOpenContribution);
    return TerminalQuickOpenContribution;
}());
exports.TerminalQuickOpenContribution = TerminalQuickOpenContribution;
//# sourceMappingURL=terminal-quick-open-service.js.map
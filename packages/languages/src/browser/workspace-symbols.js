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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var environment_1 = require("@theia/application-package/lib/environment");
var browser_1 = require("@theia/core/lib/browser");
var language_client_services_1 = require("./language-client-services");
var core_1 = require("@theia/core");
var uri_1 = require("@theia/core/lib/common/uri");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var WorkspaceSymbolCommand = /** @class */ (function () {
    function WorkspaceSymbolCommand(languages, openerService, quickOpenService, selectionService) {
        this.languages = languages;
        this.openerService = openerService;
        this.quickOpenService = quickOpenService;
        this.selectionService = selectionService;
        this.prefix = '#';
        this.description = 'Go to Symbol in Workspace';
        this.command = {
            id: 'languages.workspace.symbol',
            label: 'Open Workspace Symbol...'
        };
        this.cancellationSource = new core_1.CancellationTokenSource();
    }
    WorkspaceSymbolCommand.prototype.isEnabled = function () {
        return this.languages.workspaceSymbolProviders !== undefined;
    };
    WorkspaceSymbolCommand.prototype.execute = function () {
        this.quickOpenService.open(this.prefix);
    };
    WorkspaceSymbolCommand.prototype.getModel = function () {
        return this;
    };
    WorkspaceSymbolCommand.prototype.getOptions = function () {
        var _this = this;
        return {
            fuzzyMatchLabel: true,
            showItemsWithoutHighlight: true,
            onClose: function () {
                _this.cancellationSource.cancel();
            }
        };
    };
    WorkspaceSymbolCommand.prototype.registerCommands = function (commands) {
        commands.registerCommand(this.command, this);
    };
    WorkspaceSymbolCommand.prototype.isElectron = function () {
        return environment_1.environment.electron.is();
    };
    WorkspaceSymbolCommand.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: this.command.id,
            keybinding: this.isElectron() ? 'ctrlcmd+t' : 'ctrlcmd+o',
        });
    };
    WorkspaceSymbolCommand.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this);
    };
    WorkspaceSymbolCommand.prototype.onType = function (lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var newCancellationSource_1, param_1, items_1, workspaceProviderPromises, _loop_1, _a, _b, provider;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                if (this.languages.workspaceSymbolProviders) {
                    this.cancellationSource.cancel();
                    newCancellationSource_1 = new core_1.CancellationTokenSource();
                    this.cancellationSource = newCancellationSource_1;
                    param_1 = {
                        query: lookFor
                    };
                    items_1 = [];
                    workspaceProviderPromises = [];
                    _loop_1 = function (provider) {
                        workspaceProviderPromises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                            var symbols, symbols_1, symbols_1_1, symbol;
                            var e_2, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, provider.provideWorkspaceSymbols(param_1, newCancellationSource_1.token)];
                                    case 1:
                                        symbols = _b.sent();
                                        if (symbols && !newCancellationSource_1.token.isCancellationRequested) {
                                            try {
                                                for (symbols_1 = __values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                                                    symbol = symbols_1_1.value;
                                                    items_1.push(this.createItem(symbol, provider, newCancellationSource_1.token));
                                                }
                                            }
                                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                            finally {
                                                try {
                                                    if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                                                }
                                                finally { if (e_2) throw e_2.error; }
                                            }
                                            acceptor(items_1);
                                        }
                                        return [2 /*return*/, symbols];
                                }
                            });
                        }); })());
                    };
                    try {
                        for (_a = __values(this.languages.workspaceSymbolProviders), _b = _a.next(); !_b.done; _b = _a.next()) {
                            provider = _b.value;
                            _loop_1(provider);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    Promise.all(workspaceProviderPromises.map(function (p) { return p.then(function (sym) { return sym; }, function (_) { return undefined; }); })).then(function (symbols) {
                        var filteredSymbols = symbols.filter(function (el) { return el && el.length !== 0; });
                        if (filteredSymbols.length === 0) {
                            items_1.push(new browser_1.QuickOpenItem({
                                label: lookFor.length === 0 ? 'Type to search for symbols' : 'No symbols matching',
                                run: function () { return false; }
                            }));
                            acceptor(items_1);
                        }
                    }).catch();
                }
                return [2 /*return*/];
            });
        });
    };
    WorkspaceSymbolCommand.prototype.createItem = function (sym, provider, token) {
        var _this = this;
        var uri = new uri_1.default(sym.location.uri);
        var kind = SymbolKind[sym.kind];
        var icon = (kind) ? SymbolKind[sym.kind].toLowerCase() : 'unknown';
        var parent = sym.containerName;
        if (parent) {
            parent += ' - ';
        }
        parent = (parent || '') + uri.displayName;
        return new SimpleOpenItem(sym.name, icon, parent, uri.toString(), function () {
            if (provider.resolveWorkspaceSymbol) {
                provider.resolveWorkspaceSymbol(sym, token).then(function (resolvedSymbol) {
                    if (resolvedSymbol) {
                        _this.openURL(uri, resolvedSymbol.location.range.start, resolvedSymbol.location.range.end);
                    }
                    else {
                        // the symbol didn't resolve -> use given symbol
                        _this.openURL(uri, sym.location.range.start, sym.location.range.end);
                    }
                });
            }
            else {
                // resolveWorkspaceSymbol wasn't specified
                _this.openURL(uri, sym.location.range.start, sym.location.range.end);
            }
        });
    };
    WorkspaceSymbolCommand.prototype.openURL = function (uri, start, end) {
        this.openerService.getOpener(uri).then(function (opener) { return opener.open(uri, {
            selection: vscode_languageserver_types_1.Range.create(start, end)
        }); });
    };
    WorkspaceSymbolCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(language_client_services_1.Languages)),
        __param(1, inversify_1.inject(browser_1.OpenerService)),
        __param(2, inversify_1.inject(browser_1.PrefixQuickOpenService)),
        __param(3, inversify_1.inject(core_1.SelectionService)),
        __metadata("design:paramtypes", [Object, Object, browser_1.PrefixQuickOpenService,
            core_1.SelectionService])
    ], WorkspaceSymbolCommand);
    return WorkspaceSymbolCommand;
}());
exports.WorkspaceSymbolCommand = WorkspaceSymbolCommand;
var SimpleOpenItem = /** @class */ (function (_super) {
    __extends(SimpleOpenItem, _super);
    function SimpleOpenItem(label, icon, parent, toolTip, onOpen, onSelect) {
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.icon = icon;
        _this.parent = parent;
        _this.toolTip = toolTip;
        _this.onOpen = onOpen;
        _this.onSelect = onSelect;
        return _this;
    }
    SimpleOpenItem.prototype.getLabel = function () {
        return this.label;
    };
    SimpleOpenItem.prototype.isHidden = function () {
        return false;
    };
    SimpleOpenItem.prototype.getTooltip = function () {
        return this.toolTip;
    };
    SimpleOpenItem.prototype.getDescription = function () {
        return this.parent;
    };
    SimpleOpenItem.prototype.getIconClass = function () {
        return this.icon;
    };
    SimpleOpenItem.prototype.run = function (mode) {
        if (mode !== browser_1.QuickOpenMode.OPEN) {
            if (!this.onSelect) {
                return false;
            }
            this.onSelect();
            return true;
        }
        this.onOpen();
        return true;
    };
    return SimpleOpenItem;
}(browser_1.QuickOpenItem));
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["File"] = 1] = "File";
    SymbolKind[SymbolKind["Module"] = 2] = "Module";
    SymbolKind[SymbolKind["Namespace"] = 3] = "Namespace";
    SymbolKind[SymbolKind["Package"] = 4] = "Package";
    SymbolKind[SymbolKind["Class"] = 5] = "Class";
    SymbolKind[SymbolKind["Method"] = 6] = "Method";
    SymbolKind[SymbolKind["Property"] = 7] = "Property";
    SymbolKind[SymbolKind["Field"] = 8] = "Field";
    SymbolKind[SymbolKind["Constructor"] = 9] = "Constructor";
    SymbolKind[SymbolKind["Enum"] = 10] = "Enum";
    SymbolKind[SymbolKind["Interface"] = 11] = "Interface";
    SymbolKind[SymbolKind["Function"] = 12] = "Function";
    SymbolKind[SymbolKind["Variable"] = 13] = "Variable";
    SymbolKind[SymbolKind["Constant"] = 14] = "Constant";
    SymbolKind[SymbolKind["String"] = 15] = "String";
    SymbolKind[SymbolKind["Number"] = 16] = "Number";
    SymbolKind[SymbolKind["Boolean"] = 17] = "Boolean";
    SymbolKind[SymbolKind["Array"] = 18] = "Array";
    SymbolKind[SymbolKind["Object"] = 19] = "Object";
    SymbolKind[SymbolKind["Key"] = 20] = "Key";
    SymbolKind[SymbolKind["Null"] = 21] = "Null";
    SymbolKind[SymbolKind["EnumMember"] = 22] = "EnumMember";
    SymbolKind[SymbolKind["Struct"] = 23] = "Struct";
    SymbolKind[SymbolKind["Event"] = 24] = "Event";
    SymbolKind[SymbolKind["Operator"] = 25] = "Operator";
    SymbolKind[SymbolKind["TypeParameter"] = 26] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));
//# sourceMappingURL=workspace-symbols.js.map
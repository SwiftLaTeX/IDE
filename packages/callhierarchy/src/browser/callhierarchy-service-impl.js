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
var language_client_provider_1 = require("@theia/languages/lib/browser/language-client-provider");
var services_1 = require("monaco-languageclient/lib/services");
var utils = require("./utils");
var core_1 = require("@theia/core");
var monaco_text_model_service_1 = require("@theia/monaco/lib/browser/monaco-text-model-service");
var callhierarchy_context_1 = require("./callhierarchy-context");
var AbstractDefaultCallHierarchyService = /** @class */ (function () {
    function AbstractDefaultCallHierarchyService() {
    }
    Object.defineProperty(AbstractDefaultCallHierarchyService.prototype, "selector", {
        get: function () {
            return this.languageId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns root definition of caller hierarchy.
     */
    AbstractDefaultCallHierarchyService.prototype.getRootDefinition = function (uri, position) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.withContext(function (services) { return __awaiter(_this, void 0, void 0, function () {
                        var definitionLocation, definitionSymbol;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, services.getDefinitionLocation(uri, position)];
                                case 1:
                                    definitionLocation = _a.sent();
                                    if (!definitionLocation) {
                                        return [2 /*return*/, undefined];
                                    }
                                    return [4 /*yield*/, this.getEnclosingRootSymbol(definitionLocation, services)];
                                case 2:
                                    definitionSymbol = _a.sent();
                                    if (!definitionSymbol) {
                                        return [2 /*return*/, undefined];
                                    }
                                    return [2 /*return*/, this.toDefinition(definitionSymbol, services)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Returns next level of caller definitions.
     */
    AbstractDefaultCallHierarchyService.prototype.getCallers = function (definition) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.withContext(function (services) { return __awaiter(_this, void 0, void 0, function () {
                        var callerReferences, callers;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, services.getCallerReferences(definition.location)];
                                case 1:
                                    callerReferences = _a.sent();
                                    callers = this.createCallers(callerReferences, services);
                                    return [2 /*return*/, callers];
                            }
                        });
                    }); })];
            });
        });
    };
    AbstractDefaultCallHierarchyService.prototype.withContext = function (lambda) {
        return __awaiter(this, void 0, void 0, function () {
            var context_1, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.createContext()];
                    case 1:
                        context_1 = _a.sent();
                        if (!context_1) return [3 /*break*/, 3];
                        return [4 /*yield*/, lambda.call(this, context_1)];
                    case 2:
                        result = _a.sent();
                        context_1.dispose();
                        return [2 /*return*/, result];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.logger.error('Error getting language client', error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, undefined];
                }
            });
        });
    };
    AbstractDefaultCallHierarchyService.prototype.createContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.languageClientProvider.getLanguageClient(this.languageId)];
                    case 1:
                        languageClient = _a.sent();
                        if (!languageClient) {
                            this.logger.error('No language client with ID ' + this.languageId);
                            return [2 /*return*/, undefined];
                        }
                        else {
                            return [2 /*return*/, new callhierarchy_context_1.CallHierarchyContext(languageClient, this.textModelService, this.logger)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates callers for given references and method symbols.
     */
    AbstractDefaultCallHierarchyService.prototype.createCallers = function (callerReferences, context) {
        return __awaiter(this, void 0, void 0, function () {
            var result, caller2references, callerReferences_1, callerReferences_1_1, reference, callerSymbol, references, e_1_1, _a, _b, callerSymbol, locations, definition, caller, e_2_1;
            var e_1, _c, e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        result = [];
                        caller2references = new Map();
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 8]);
                        callerReferences_1 = __values(callerReferences), callerReferences_1_1 = callerReferences_1.next();
                        _e.label = 2;
                    case 2:
                        if (!!callerReferences_1_1.done) return [3 /*break*/, 5];
                        reference = callerReferences_1_1.value;
                        return [4 /*yield*/, this.getEnclosingCallerSymbol(reference, context)];
                    case 3:
                        callerSymbol = _e.sent();
                        if (callerSymbol) {
                            references = caller2references.get(callerSymbol);
                            if (references) {
                                references.push(reference);
                            }
                            else {
                                caller2references.set(callerSymbol, [reference]);
                            }
                        }
                        _e.label = 4;
                    case 4:
                        callerReferences_1_1 = callerReferences_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (callerReferences_1_1 && !callerReferences_1_1.done && (_c = callerReferences_1.return)) _c.call(callerReferences_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        _e.trys.push([8, 13, 14, 15]);
                        _a = __values(caller2references.keys()), _b = _a.next();
                        _e.label = 9;
                    case 9:
                        if (!!_b.done) return [3 /*break*/, 12];
                        callerSymbol = _b.value;
                        locations = caller2references.get(callerSymbol);
                        if (!locations) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.toDefinition(callerSymbol, context)];
                    case 10:
                        definition = _e.sent();
                        if (definition) {
                            caller = this.toCaller(definition, locations);
                            result.push(caller);
                        }
                        _e.label = 11;
                    case 11:
                        _b = _a.next();
                        return [3 /*break*/, 9];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/, result];
                }
            });
        });
    };
    AbstractDefaultCallHierarchyService.prototype.toCaller = function (def, references) {
        return { callerDefinition: def, references: references.map(function (ref) { return ref.range; }) };
    };
    AbstractDefaultCallHierarchyService.prototype.toDefinition = function (symbol, context) {
        return __awaiter(this, void 0, void 0, function () {
            var location, symbolName, symbolKind, containerName, selectionRange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSymbolNameLocation(symbol, context)];
                    case 1:
                        location = _a.sent();
                        if (!location) {
                            return [2 /*return*/, undefined];
                        }
                        symbolName = symbol.name;
                        symbolKind = symbol.kind;
                        containerName = symbol.containerName;
                        selectionRange = location.range;
                        return [2 /*return*/, { location: location, selectionRange: selectionRange, symbolName: symbolName, symbolKind: symbolKind, containerName: containerName }];
                }
            });
        });
    };
    /**
     * Override this to configure the callables of your language.
     */
    AbstractDefaultCallHierarchyService.prototype.isCallable = function (symbol) {
        switch (symbol.kind) {
            case services_1.SymbolKind.Constant:
            case services_1.SymbolKind.Constructor:
            case services_1.SymbolKind.Field:
            case services_1.SymbolKind.Function:
            case services_1.SymbolKind.Method:
            case services_1.SymbolKind.Property:
            case services_1.SymbolKind.Variable:
                return true;
            default:
                return false;
        }
    };
    /**
     * Finds the symbol that encloses the definition range of the root element
     *
     * As symbols can be nested, we are looking for the one with the smallest region.
     * As we only check regions that contain the definition, that is the one with the
     * latest start position.
     */
    AbstractDefaultCallHierarchyService.prototype.getEnclosingRootSymbol = function (definition, context) {
        return __awaiter(this, void 0, void 0, function () {
            var allSymbols, symbols, containsDefinition, symbols_1, symbols_1_1, symbol, containerName, candidate, children, children_1, children_1_1, child, symbols, bestMatch, bestRange, symbols_2, symbols_2_1, candidate, candidateRange;
            var e_3, _a, e_4, _b, e_5, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, context.getAllSymbols(definition.uri)];
                    case 1:
                        allSymbols = _d.sent();
                        if (allSymbols.length === 0) {
                            return [2 /*return*/, undefined];
                        }
                        if (services_1.DocumentSymbol.is(allSymbols[0])) {
                            symbols = allSymbols;
                            containsDefinition = function (symbol) { return utils.containsRange(symbol.range, definition.range); };
                            try {
                                for (symbols_1 = __values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                                    symbol = symbols_1_1.value;
                                    containerName = definition.uri.split('/').pop();
                                    candidate = containsDefinition(symbol) ? symbol : undefined;
                                    outer: while (candidate) {
                                        children = candidate.children || [];
                                        try {
                                            for (children_1 = (e_4 = void 0, __values(children)), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                                                child = children_1_1.value;
                                                if (containsDefinition(child)) {
                                                    containerName = candidate.name;
                                                    candidate = child;
                                                    continue outer;
                                                }
                                            }
                                        }
                                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                        finally {
                                            try {
                                                if (children_1_1 && !children_1_1.done && (_b = children_1.return)) _b.call(children_1);
                                            }
                                            finally { if (e_4) throw e_4.error; }
                                        }
                                        break;
                                    }
                                    if (candidate) {
                                        return [2 /*return*/, __assign({ uri: definition.uri, containerName: containerName }, candidate)];
                                    }
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            return [2 /*return*/, undefined];
                        }
                        else {
                            symbols = allSymbols.filter(function (s) { return _this.isCallable(s); });
                            bestMatch = undefined;
                            bestRange = undefined;
                            try {
                                for (symbols_2 = __values(symbols), symbols_2_1 = symbols_2.next(); !symbols_2_1.done; symbols_2_1 = symbols_2.next()) {
                                    candidate = symbols_2_1.value;
                                    candidateRange = candidate.location.range;
                                    if (utils.containsRange(candidateRange, definition.range)) {
                                        if (!bestMatch || utils.startsAfter(candidateRange, bestRange)) {
                                            bestMatch = candidate;
                                            bestRange = candidateRange;
                                        }
                                    }
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (symbols_2_1 && !symbols_2_1.done && (_c = symbols_2.return)) _c.call(symbols_2);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                            return [2 /*return*/, bestMatch];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Finds the symbol that encloses the reference range of a caller
     */
    AbstractDefaultCallHierarchyService.prototype.getEnclosingCallerSymbol = function (reference, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getEnclosingRootSymbol(reference, context)];
            });
        });
    };
    /**
     * Finds the location of its name within a symbol's location.
     */
    AbstractDefaultCallHierarchyService.prototype.getSymbolNameLocation = function (symbol, context) {
        return __awaiter(this, void 0, void 0, function () {
            var symbolLocation, model, position, endPosition, word, range, delta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        symbolLocation = services_1.DocumentSymbol.is(symbol) ? symbol : symbol.location;
                        return [4 /*yield*/, context.getEditorModelReference(symbolLocation.uri)];
                    case 1:
                        model = _a.sent();
                        position = new monaco.Position(symbolLocation.range.start.line + 1, symbolLocation.range.start.character + 1);
                        endPosition = new monaco.Position(symbolLocation.range.end.line + 1, symbolLocation.range.end.character + 1);
                        do {
                            word = model.object.textEditorModel.getWordAtPosition(position);
                            if (word && word.word === symbol.name) {
                                range = services_1.Range.create(services_1.Position.create(position.lineNumber - 1, position.column - 1), services_1.Position.create(position.lineNumber - 1, position.column - 1 + symbol.name.length));
                                return [2 /*return*/, services_1.Location.create(symbolLocation.uri, range)];
                            }
                            delta = (word) ? word.word.length + 1 : 1;
                            position = model.object.textEditorModel.modifyPosition(position, delta);
                        } while (position.isBefore(endPosition));
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(language_client_provider_1.LanguageClientProvider),
        __metadata("design:type", Object)
    ], AbstractDefaultCallHierarchyService.prototype, "languageClientProvider", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], AbstractDefaultCallHierarchyService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], AbstractDefaultCallHierarchyService.prototype, "textModelService", void 0);
    AbstractDefaultCallHierarchyService = __decorate([
        inversify_1.injectable()
    ], AbstractDefaultCallHierarchyService);
    return AbstractDefaultCallHierarchyService;
}());
exports.AbstractDefaultCallHierarchyService = AbstractDefaultCallHierarchyService;
//# sourceMappingURL=callhierarchy-service-impl.js.map
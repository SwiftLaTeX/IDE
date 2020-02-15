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
var callhierarchy_service_impl_1 = require("@theia/callhierarchy/lib/browser/callhierarchy-service-impl");
var common_1 = require("../common");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var utils = require("@theia/callhierarchy/lib/browser/utils");
var TypeScriptCallHierarchyService = /** @class */ (function (_super) {
    __extends(TypeScriptCallHierarchyService, _super);
    function TypeScriptCallHierarchyService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.languageId = common_1.TYPESCRIPT_LANGUAGE_ID;
        return _this;
    }
    /**
     * Finds the symbol that encloses the definition range of a caller.
     *
     * In the case of typescript, a method's definition and all its override definitions
     * are returned as a reference as well. As these are not calls they have to be filtered.
     * We also just want ot see the top-most caller symbol.
     */
    TypeScriptCallHierarchyService.prototype.getEnclosingCallerSymbol = function (reference, context) {
        return __awaiter(this, void 0, void 0, function () {
            var allSymbols, symbols, bestMatch, bestRange, symbols_1, symbols_1_1, candidate, candidateRange, nameLocation;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, context.getAllSymbols(reference.uri)];
                    case 1:
                        allSymbols = _b.sent();
                        if (allSymbols.length === 0) {
                            return [2 /*return*/, undefined];
                        }
                        if (vscode_languageserver_types_1.DocumentSymbol.is(allSymbols[0])) {
                            return [2 /*return*/, this.getEnclosingRootSymbol(reference, context)];
                        }
                        symbols = allSymbols.filter(function (s) { return _this.isCallable(s); });
                        bestMatch = undefined;
                        bestRange = undefined;
                        try {
                            for (symbols_1 = __values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                                candidate = symbols_1_1.value;
                                candidateRange = candidate.location.range;
                                if (utils.containsRange(candidateRange, reference.range)) {
                                    // as opposed to default, find the topmost (earliest) symbol
                                    if (!bestMatch || utils.startsAfter(bestRange, candidateRange)) {
                                        bestMatch = candidate;
                                        bestRange = candidateRange;
                                    }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (!bestMatch) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getSymbolNameLocation(bestMatch, context)];
                    case 2:
                        nameLocation = _b.sent();
                        if (!nameLocation || utils.isSame(nameLocation, reference)) {
                            return [2 /*return*/, undefined];
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/, bestMatch];
                }
            });
        });
    };
    TypeScriptCallHierarchyService = __decorate([
        inversify_1.injectable()
    ], TypeScriptCallHierarchyService);
    return TypeScriptCallHierarchyService;
}(callhierarchy_service_impl_1.AbstractDefaultCallHierarchyService));
exports.TypeScriptCallHierarchyService = TypeScriptCallHierarchyService;
//# sourceMappingURL=typescript-callhierarchy-service.js.map
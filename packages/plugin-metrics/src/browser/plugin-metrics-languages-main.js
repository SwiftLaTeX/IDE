"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat and others.
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
var plugin_metrics_resolver_1 = require("./plugin-metrics-resolver");
var languages_main_1 = require("@theia/plugin-ext/lib/main/browser/languages-main");
var inversify_1 = require("inversify");
var vst = require("vscode-languageserver-protocol");
var LanguagesMainPluginMetrics = /** @class */ (function (_super) {
    __extends(LanguagesMainPluginMetrics, _super);
    function LanguagesMainPluginMetrics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Map of handle to extension id
        _this.handleToExtensionID = new Map();
        return _this;
    }
    LanguagesMainPluginMetrics.prototype.$unregister = function (handle) {
        this.handleToExtensionID.delete(handle);
        _super.prototype.$unregister.call(this, handle);
    };
    LanguagesMainPluginMetrics.prototype.provideCompletionItems = function (handle, model, position, context, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CompletionRequest.type.method, _super.prototype.provideCompletionItems.call(this, handle, model, position, context, token));
    };
    LanguagesMainPluginMetrics.prototype.resolveCompletionItem = function (handle, model, position, item, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CompletionRequest.type.method, _super.prototype.resolveCompletionItem.call(this, handle, model, position, item, token));
    };
    LanguagesMainPluginMetrics.prototype.provideReferences = function (handle, model, position, context, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.ReferencesRequest.type.method, _super.prototype.provideReferences.call(this, handle, model, position, context, token));
    };
    LanguagesMainPluginMetrics.prototype.provideImplementation = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.ImplementationRequest.type.method, _super.prototype.provideImplementation.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideTypeDefinition = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.TypeDefinitionRequest.type.method, _super.prototype.provideTypeDefinition.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideHover = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.HoverRequest.type.method, _super.prototype.provideHover.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentHighlights = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentHighlightRequest.type.method, _super.prototype.provideDocumentHighlights.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideWorkspaceSymbols = function (handle, params, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.WorkspaceSymbolRequest.type.method, _super.prototype.provideWorkspaceSymbols.call(this, handle, params, token));
    };
    LanguagesMainPluginMetrics.prototype.resolveWorkspaceSymbol = function (handle, symbol, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.WorkspaceSymbolRequest.type.method, _super.prototype.resolveWorkspaceSymbol.call(this, handle, symbol, token));
    };
    LanguagesMainPluginMetrics.prototype.provideLinks = function (handle, model, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentLinkRequest.type.method, _super.prototype.provideLinks.call(this, handle, model, token))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.resolveLink = function (handle, link, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentLinkRequest.type.method, _super.prototype.resolveLink.call(this, handle, link, token))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.provideCodeLenses = function (handle, model, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CodeLensRequest.type.method, _super.prototype.provideCodeLenses.call(this, handle, model, token))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.resolveCodeLens = function (handle, model, codeLens, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CodeLensResolveRequest.type.method, _super.prototype.resolveCodeLens.call(this, handle, model, codeLens, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentSymbols = function (handle, model, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentSymbolRequest.type.method, _super.prototype.provideDocumentSymbols.call(this, handle, model, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDefinition = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DefinitionRequest.type.method, _super.prototype.provideDefinition.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideSignatureHelp = function (handle, model, position, token, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.SignatureHelpRequest.type.method, _super.prototype.provideSignatureHelp.call(this, handle, model, position, token, context))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentFormattingEdits = function (handle, model, options, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentFormattingRequest.type.method, _super.prototype.provideDocumentFormattingEdits.call(this, handle, model, options, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentRangeFormattingEdits = function (handle, model, range, options, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentRangeFormattingRequest.type.method, _super.prototype.provideDocumentRangeFormattingEdits.call(this, handle, model, range, options, token));
    };
    LanguagesMainPluginMetrics.prototype.provideOnTypeFormattingEdits = function (handle, model, position, ch, options, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentOnTypeFormattingRequest.type.method, _super.prototype.provideOnTypeFormattingEdits.call(this, handle, model, position, ch, options, token));
    };
    LanguagesMainPluginMetrics.prototype.provideFoldingRanges = function (handle, model, context, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.FoldingRangeRequest.type.method, _super.prototype.provideFoldingRanges.call(this, handle, model, context, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentColors = function (handle, model, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentColorRequest.type.method, _super.prototype.provideDocumentColors.call(this, handle, model, token));
    };
    LanguagesMainPluginMetrics.prototype.provideColorPresentations = function (handle, model, colorInfo, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.ColorPresentationRequest.type.method, _super.prototype.provideColorPresentations.call(this, handle, model, colorInfo, token));
    };
    LanguagesMainPluginMetrics.prototype.provideCodeActions = function (handle, model, rangeOrSelection, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CodeActionRequest.type.method, _super.prototype.provideCodeActions.call(this, handle, model, rangeOrSelection, context, token))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.provideRenameEdits = function (handle, model, position, newName, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.RenameRequest.type.method, _super.prototype.provideRenameEdits.call(this, handle, model, position, newName, token));
    };
    LanguagesMainPluginMetrics.prototype.resolveRenameLocation = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.RenameRequest.type.method, _super.prototype.resolveRenameLocation.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.$registerCompletionSupport = function (handle, pluginInfo, selector, triggerCharacters, supportsResolveDetails) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerCompletionSupport.call(this, handle, pluginInfo, selector, triggerCharacters, supportsResolveDetails);
    };
    LanguagesMainPluginMetrics.prototype.$registerDefinitionProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDefinitionProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerDeclarationProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDeclarationProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerReferenceProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerReferenceProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerSignatureHelpProvider = function (handle, pluginInfo, selector, metadata) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerSignatureHelpProvider.call(this, handle, pluginInfo, selector, metadata);
    };
    LanguagesMainPluginMetrics.prototype.$registerImplementationProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerImplementationProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerTypeDefinitionProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerTypeDefinitionProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerHoverProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerHoverProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerDocumentHighlightProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDocumentHighlightProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerWorkspaceSymbolProvider = function (handle, pluginInfo) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerWorkspaceSymbolProvider.call(this, handle, pluginInfo);
    };
    LanguagesMainPluginMetrics.prototype.$registerDocumentLinkProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDocumentLinkProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerCodeLensSupport = function (handle, pluginInfo, selector, eventHandle) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerCodeLensSupport.call(this, handle, pluginInfo, selector, eventHandle);
    };
    LanguagesMainPluginMetrics.prototype.$registerOutlineSupport = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerOutlineSupport.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerDocumentFormattingSupport = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDocumentFormattingSupport.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerRangeFormattingProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerRangeFormattingProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerOnTypeFormattingProvider = function (handle, pluginInfo, selector, autoFormatTriggerCharacters) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerOnTypeFormattingProvider.call(this, handle, pluginInfo, selector, autoFormatTriggerCharacters);
    };
    LanguagesMainPluginMetrics.prototype.$registerFoldingRangeProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerFoldingRangeProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerDocumentColorProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDocumentColorProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerQuickFixProvider = function (handle, pluginInfo, selector, codeActionKinds) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerQuickFixProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerRenameProvider = function (handle, pluginInfo, selector, supportsResolveLocation) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerRenameProvider.call(this, handle, pluginInfo, selector, supportsResolveLocation);
    };
    LanguagesMainPluginMetrics.prototype.registerPluginWithFeatureHandle = function (handle, pluginID) {
        this.handleToExtensionID.set(handle, pluginID);
    };
    LanguagesMainPluginMetrics.prototype.handleToExtensionName = function (handle) {
        return this.handleToExtensionID.get(handle);
    };
    __decorate([
        inversify_1.inject(plugin_metrics_resolver_1.PluginMetricsResolver),
        __metadata("design:type", plugin_metrics_resolver_1.PluginMetricsResolver)
    ], LanguagesMainPluginMetrics.prototype, "pluginMetricsResolver", void 0);
    LanguagesMainPluginMetrics = __decorate([
        inversify_1.injectable()
    ], LanguagesMainPluginMetrics);
    return LanguagesMainPluginMetrics;
}(languages_main_1.LanguagesMainImpl));
exports.LanguagesMainPluginMetrics = LanguagesMainPluginMetrics;
//# sourceMappingURL=plugin-metrics-languages-main.js.map
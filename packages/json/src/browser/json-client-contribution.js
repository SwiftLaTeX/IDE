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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
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
var browser_1 = require("@theia/languages/lib/browser");
var common_1 = require("../common");
var core_1 = require("@theia/core");
var uri_1 = require("@theia/core/lib/common/uri");
var json_preferences_1 = require("./json-preferences");
var json_schema_store_1 = require("@theia/core/lib/browser/json-schema-store");
var browser_2 = require("@theia/core/lib/browser");
var JsonClientContribution = /** @class */ (function (_super) {
    __extends(JsonClientContribution, _super);
    function JsonClientContribution(workspace, resourceProvider, languages, languageClientFactory, preferences, jsonSchemaStore) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.workspace = workspace;
        _this.resourceProvider = resourceProvider;
        _this.languages = languages;
        _this.languageClientFactory = languageClientFactory;
        _this.preferences = preferences;
        _this.jsonSchemaStore = jsonSchemaStore;
        _this.id = common_1.JSON_LANGUAGE_ID;
        _this.name = common_1.JSON_LANGUAGE_NAME;
        _this.initializeJsonSchemaAssociations();
        return _this;
    }
    JsonClientContribution.prototype.updateSchemas = function (client) {
        var e_1, _a, e_2, _b;
        var allConfigs = __spread(this.jsonSchemaStore.getJsonSchemaConfigurations());
        var config = this.preferences['json.schemas'];
        if (config instanceof Array) {
            allConfigs.push.apply(allConfigs, __spread(config));
        }
        var registry = {};
        try {
            for (var allConfigs_1 = __values(allConfigs), allConfigs_1_1 = allConfigs_1.next(); !allConfigs_1_1.done; allConfigs_1_1 = allConfigs_1.next()) {
                var s = allConfigs_1_1.value;
                if (s.fileMatch) {
                    try {
                        for (var _c = (e_2 = void 0, __values(s.fileMatch)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var fileMatch = _d.value;
                            if (fileMatch.charAt(0) !== '/' && !fileMatch.match(/\w+:/)) {
                                fileMatch = '/' + fileMatch;
                            }
                            registry[fileMatch] = [s.url];
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (allConfigs_1_1 && !allConfigs_1_1.done && (_a = allConfigs_1.return)) _a.call(allConfigs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        client.sendNotification('json/schemaAssociations', registry);
    };
    Object.defineProperty(JsonClientContribution.prototype, "globPatterns", {
        get: function () {
            return [
                '**/*.json',
                '**/*.jsonc',
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonClientContribution.prototype, "documentSelector", {
        get: function () {
            return [this.id, common_1.JSONC_LANGUAGE_ID];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonClientContribution.prototype, "configurationSection", {
        get: function () {
            return [this.id];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonClientContribution.prototype, "initializationOptions", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    JsonClientContribution.prototype.onReady = function (languageClient, toStop) {
        var _this = this;
        _super.prototype.onReady.call(this, languageClient, toStop);
        // handle content request
        languageClient.onRequest('vscode/content', function (uriPath) { return __awaiter(_this, void 0, void 0, function () {
            var uri, resource, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new uri_1.default(uriPath);
                        return [4 /*yield*/, this.resourceProvider(uri)];
                    case 1:
                        resource = _a.sent();
                        return [4 /*yield*/, resource.readContents()];
                    case 2:
                        text = _a.sent();
                        return [2 /*return*/, text];
                }
            });
        }); });
        toStop.push(this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'json.schemas') {
                _this.updateSchemas(languageClient);
            }
        }));
        toStop.push(this.jsonSchemaStore.onSchemasChanged(function () { return _this.updateSchemas(languageClient); }));
        this.updateSchemas(languageClient);
    };
    JsonClientContribution.prototype.initializeJsonSchemaAssociations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, schemas, schemas_1, schemas_1_1, s;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = new browser_2.Endpoint().httpScheme + "//schemastore.azurewebsites.net/api/json/catalog.json";
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        schemas = (_b.sent()).schemas;
                        try {
                            for (schemas_1 = __values(schemas), schemas_1_1 = schemas_1.next(); !schemas_1_1.done; schemas_1_1 = schemas_1.next()) {
                                s = schemas_1_1.value;
                                if (s.fileMatch) {
                                    this.jsonSchemaStore.registerSchema({
                                        fileMatch: s.fileMatch,
                                        url: s.url
                                    });
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (schemas_1_1 && !schemas_1_1.done && (_a = schemas_1.return)) _a.call(schemas_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    JsonClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.Workspace)),
        __param(1, inversify_1.inject(core_1.ResourceProvider)),
        __param(2, inversify_1.inject(browser_1.Languages)),
        __param(3, inversify_1.inject(browser_1.LanguageClientFactory)),
        __param(4, inversify_1.inject(json_preferences_1.JsonPreferences)),
        __param(5, inversify_1.inject(json_schema_store_1.JsonSchemaStore)),
        __metadata("design:paramtypes", [Object, Function, Object, browser_1.LanguageClientFactory, Object, json_schema_store_1.JsonSchemaStore])
    ], JsonClientContribution);
    return JsonClientContribution;
}(browser_1.BaseLanguageClientContribution));
exports.JsonClientContribution = JsonClientContribution;
//# sourceMappingURL=json-client-contribution.js.map
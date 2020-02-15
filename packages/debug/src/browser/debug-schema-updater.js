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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var json_schema_store_1 = require("@theia/core/lib/browser/json-schema-store");
var common_1 = require("@theia/core/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var debug_service_1 = require("../common/debug-service");
var debug_preferences_1 = require("./debug-preferences");
var variable_input_schema_1 = require("@theia/variable-resolver/lib/browser/variable-input-schema");
var DebugSchemaUpdater = /** @class */ (function () {
    function DebugSchemaUpdater() {
    }
    DebugSchemaUpdater.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var types, schema, items, attributePromises, _a, _b, attributes, attributes_1, attributes_1_1, attribute, properties, _c, _d, key, e_1_1, _e, _f, _g, uri, contents;
            var e_1, _h, e_2, _j, e_3, _k, _l;
            var _this = this;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0: return [4 /*yield*/, this.debug.debugTypes()];
                    case 1:
                        types = _m.sent();
                        schema = __assign({}, common_1.deepClone(launchSchema));
                        items = schema.properties['configurations'].items;
                        attributePromises = types.map(function (type) { return _this.debug.getSchemaAttributes(type); });
                        _m.label = 2;
                    case 2:
                        _m.trys.push([2, 7, 8, 9]);
                        return [4 /*yield*/, Promise.all(attributePromises)];
                    case 3:
                        _a = __values.apply(void 0, [_m.sent()]), _b = _a.next();
                        _m.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 6];
                        attributes = _b.value;
                        try {
                            for (attributes_1 = (e_2 = void 0, __values(attributes)), attributes_1_1 = attributes_1.next(); !attributes_1_1.done; attributes_1_1 = attributes_1.next()) {
                                attribute = attributes_1_1.value;
                                properties = {};
                                try {
                                    for (_c = (e_3 = void 0, __values(['debugViewLocation', 'openDebug', 'internalConsoleOptions'])), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        key = _d.value;
                                        properties[key] = debug_preferences_1.debugPreferencesSchema.properties["debug." + key];
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_k = _c.return)) _k.call(_c);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                                attribute.properties = Object.assign(properties, attribute.properties);
                                items.oneOf.push(attribute);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (attributes_1_1 && !attributes_1_1.done && (_j = attributes_1.return)) _j.call(attributes_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        _m.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _m.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_h = _a.return)) _h.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        _f = (_e = (_l = items.defaultSnippets).push).apply;
                        _g = [_l];
                        return [4 /*yield*/, this.debug.getConfigurationSnippets()];
                    case 10:
                        _f.apply(_e, _g.concat([__spread.apply(void 0, [_m.sent()])]));
                        uri = new uri_1.default(exports.launchSchemaId);
                        contents = JSON.stringify(schema);
                        try {
                            this.inmemoryResources.update(uri, contents);
                        }
                        catch (e) {
                            this.inmemoryResources.add(uri, contents);
                            this.jsonSchemaStore.registerSchema({
                                fileMatch: ['launch.json'],
                                url: uri.toString()
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(json_schema_store_1.JsonSchemaStore),
        __metadata("design:type", json_schema_store_1.JsonSchemaStore)
    ], DebugSchemaUpdater.prototype, "jsonSchemaStore", void 0);
    __decorate([
        inversify_1.inject(common_1.InMemoryResources),
        __metadata("design:type", common_1.InMemoryResources)
    ], DebugSchemaUpdater.prototype, "inmemoryResources", void 0);
    __decorate([
        inversify_1.inject(debug_service_1.DebugService),
        __metadata("design:type", Object)
    ], DebugSchemaUpdater.prototype, "debug", void 0);
    DebugSchemaUpdater = __decorate([
        inversify_1.injectable()
    ], DebugSchemaUpdater);
    return DebugSchemaUpdater;
}());
exports.DebugSchemaUpdater = DebugSchemaUpdater;
exports.launchSchemaId = 'vscode://schemas/launch';
var launchSchema = {
    $id: exports.launchSchemaId,
    type: 'object',
    title: 'Launch',
    required: [],
    default: { version: '0.2.0', configurations: [] },
    properties: {
        version: {
            type: 'string',
            description: 'Version of this file format.',
            default: '0.2.0'
        },
        configurations: {
            type: 'array',
            description: 'List of configurations. Add new configurations or edit existing ones by using IntelliSense.',
            items: {
                defaultSnippets: [],
                'type': 'object',
                oneOf: []
            }
        },
        inputs: variable_input_schema_1.inputsSchema.definitions.inputs
    }
};
//# sourceMappingURL=debug-schema-updater.js.map
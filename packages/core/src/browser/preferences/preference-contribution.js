"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var Ajv = require("ajv");
var inversify_1 = require("inversify");
var common_1 = require("../../common");
var preference_scope_1 = require("./preference-scope");
var preference_provider_1 = require("./preference-provider");
var preference_schema_1 = require("../../common/preferences/preference-schema");
exports.PreferenceSchema = preference_schema_1.PreferenceSchema;
exports.PreferenceSchemaProperties = preference_schema_1.PreferenceSchemaProperties;
exports.PreferenceDataProperty = preference_schema_1.PreferenceDataProperty;
var frontend_application_config_provider_1 = require("../frontend-application-config-provider");
var preference_configurations_1 = require("./preference-configurations");
/* eslint-disable guard-for-in, @typescript-eslint/no-explicit-any */
exports.PreferenceContribution = Symbol('PreferenceContribution');
function bindPreferenceSchemaProvider(bind) {
    preference_configurations_1.bindPreferenceConfigurations(bind);
    bind(PreferenceSchemaProvider).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, exports.PreferenceContribution);
}
exports.bindPreferenceSchemaProvider = bindPreferenceSchemaProvider;
var OverridePreferenceName;
(function (OverridePreferenceName) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'preferenceName' in arg && 'overrideIdentifier' in arg;
    }
    OverridePreferenceName.is = is;
})(OverridePreferenceName = exports.OverridePreferenceName || (exports.OverridePreferenceName = {}));
var OVERRIDE_PROPERTY = '\\[(.*)\\]$';
exports.OVERRIDE_PROPERTY_PATTERN = new RegExp(OVERRIDE_PROPERTY);
var OVERRIDE_PATTERN_WITH_SUBSTITUTION = '\\[(${0})\\]$';
var FrontendApplicationPreferenceConfig;
(function (FrontendApplicationPreferenceConfig) {
    function is(config) {
        return 'preferences' in config && typeof config['preferences'] === 'object';
    }
    FrontendApplicationPreferenceConfig.is = is;
})(FrontendApplicationPreferenceConfig = exports.FrontendApplicationPreferenceConfig || (exports.FrontendApplicationPreferenceConfig = {}));
var PreferenceSchemaProvider = /** @class */ (function (_super) {
    __extends(PreferenceSchemaProvider, _super);
    function PreferenceSchemaProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preferences = {};
        _this.combinedSchema = { properties: {}, patternProperties: {} };
        _this.onDidPreferenceSchemaChangedEmitter = new common_1.Emitter();
        _this.onDidPreferenceSchemaChanged = _this.onDidPreferenceSchemaChangedEmitter.event;
        _this.overrideIdentifiers = new Set();
        _this.overridePatternProperties = {
            type: 'object',
            description: 'Configure editor settings to be overridden for a language.',
            errorMessage: 'Unknown Identifier. Use language identifiers',
            properties: {},
            additionalProperties: false
        };
        return _this;
    }
    PreferenceSchemaProvider.prototype.fireDidPreferenceSchemaChanged = function () {
        this.onDidPreferenceSchemaChangedEmitter.fire(undefined);
    };
    PreferenceSchemaProvider.prototype.init = function () {
        var _this = this;
        this.preferenceContributions.getContributions().forEach(function (contrib) {
            _this.doSetSchema(contrib.schema);
        });
        this.combinedSchema.additionalProperties = false;
        this._ready.resolve();
    };
    PreferenceSchemaProvider.prototype.registerOverrideIdentifier = function (overrideIdentifier) {
        if (this.overrideIdentifiers.has(overrideIdentifier)) {
            return;
        }
        this.overrideIdentifiers.add(overrideIdentifier);
        this.updateOverridePatternPropertiesKey();
    };
    PreferenceSchemaProvider.prototype.updateOverridePatternPropertiesKey = function () {
        var oldKey = this.overridePatternPropertiesKey;
        var newKey = this.computeOverridePatternPropertiesKey();
        if (oldKey === newKey) {
            return;
        }
        if (oldKey) {
            delete this.combinedSchema.patternProperties[oldKey];
        }
        this.overridePatternPropertiesKey = newKey;
        if (newKey) {
            this.combinedSchema.patternProperties[newKey] = this.overridePatternProperties;
        }
        this.fireDidPreferenceSchemaChanged();
    };
    PreferenceSchemaProvider.prototype.computeOverridePatternPropertiesKey = function () {
        var e_1, _a;
        var param = '';
        try {
            for (var _b = __values(this.overrideIdentifiers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var overrideIdentifier = _c.value;
                if (param.length) {
                    param += '|';
                }
                param += new RegExp(common_1.escapeRegExpCharacters(overrideIdentifier)).source;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return param.length ? OVERRIDE_PATTERN_WITH_SUBSTITUTION.replace('${0}', param) : undefined;
    };
    PreferenceSchemaProvider.prototype.doUnsetSchema = function (changes) {
        var e_2, _a;
        var inverseChanges = [];
        try {
            for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                var change = changes_1_1.value;
                var preferenceName = change.preferenceName;
                var overridden = this.overriddenPreferenceName(preferenceName);
                if (overridden) {
                    delete this.overridePatternProperties.properties["[" + overridden.overrideIdentifier + "]"];
                    delete this.combinedSchema.properties["[" + overridden.overrideIdentifier + "]"];
                }
                else {
                    delete this.combinedSchema.properties[preferenceName];
                }
                var newValue = change.oldValue;
                var oldValue = change.newValue;
                var scope = change.scope, domain = change.domain;
                var inverseChange = { preferenceName: preferenceName, oldValue: oldValue, scope: scope, domain: domain };
                if (typeof newValue === undefined) {
                    delete this.preferences[preferenceName];
                }
                else {
                    inverseChange.newValue = newValue;
                    this.preferences[preferenceName] = newValue;
                }
                inverseChanges.push(inverseChange);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return inverseChanges;
    };
    PreferenceSchemaProvider.prototype.doSetSchema = function (schema) {
        var e_3, _a;
        var ajv = new Ajv();
        var valid = ajv.validateSchema(schema);
        if (!valid) {
            var errors = !!ajv.errors ? ajv.errorsText(ajv.errors) : 'unknown validation error';
            console.warn('A contributed preference schema has validation issues : ' + errors);
        }
        var scope = preference_scope_1.PreferenceScope.Default;
        var domain = this.getDomain();
        var changes = [];
        var defaultScope = preference_schema_1.PreferenceSchema.getDefaultScope(schema);
        var overridable = schema.overridable || false;
        try {
            for (var _b = __values(Object.keys(schema.properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var preferenceName = _c.value;
                if (this.combinedSchema.properties[preferenceName]) {
                    console.error('Preference name collision detected in the schema for property: ' + preferenceName);
                }
                else {
                    var schemaProps = preference_schema_1.PreferenceDataProperty.fromPreferenceSchemaProperty(schema.properties[preferenceName], defaultScope);
                    if (typeof schemaProps.overridable !== 'boolean' && overridable) {
                        schemaProps.overridable = true;
                    }
                    if (schemaProps.overridable) {
                        this.overridePatternProperties.properties[preferenceName] = schemaProps;
                    }
                    this.combinedSchema.properties[preferenceName] = schemaProps;
                    var value = schemaProps.defaultValue = this.getDefaultValue(schemaProps, preferenceName);
                    if (this.testOverrideValue(preferenceName, value)) {
                        for (var overriddenPreferenceName in value) {
                            var overrideValue = value[overriddenPreferenceName];
                            var overridePreferenceName = preferenceName + "." + overriddenPreferenceName;
                            changes.push(this.doSetPreferenceValue(overridePreferenceName, overrideValue, { scope: scope, domain: domain }));
                        }
                    }
                    else {
                        changes.push(this.doSetPreferenceValue(preferenceName, value, { scope: scope, domain: domain }));
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return changes;
    };
    PreferenceSchemaProvider.prototype.doSetPreferenceValue = function (preferenceName, newValue, _a) {
        var scope = _a.scope, domain = _a.domain;
        var oldValue = this.preferences[preferenceName];
        this.preferences[preferenceName] = newValue;
        return { preferenceName: preferenceName, oldValue: oldValue, newValue: newValue, scope: scope, domain: domain };
    };
    PreferenceSchemaProvider.prototype.getDefaultValue = function (property, preferenceName) {
        var config = frontend_application_config_provider_1.FrontendApplicationConfigProvider.get();
        if (preferenceName && FrontendApplicationPreferenceConfig.is(config) && preferenceName in config.preferences) {
            return config.preferences[preferenceName];
        }
        if (property.defaultValue !== undefined) {
            return property.defaultValue;
        }
        if (property.default !== undefined) {
            return property.default;
        }
        var type = Array.isArray(property.type) ? property.type[0] : property.type;
        switch (type) {
            case 'boolean':
                return false;
            case 'integer':
            case 'number':
                return 0;
            case 'string':
                return '';
            case 'array':
                return [];
            case 'object':
                return {};
        }
        // eslint-disable-next-line no-null/no-null
        return null;
    };
    PreferenceSchemaProvider.prototype.getCombinedSchema = function () {
        return this.combinedSchema;
    };
    PreferenceSchemaProvider.prototype.setSchema = function (schema) {
        var _this = this;
        var changes = this.doSetSchema(schema);
        if (!changes.length) {
            return common_1.Disposable.NULL;
        }
        this.fireDidPreferenceSchemaChanged();
        this.emitPreferencesChangedEvent(changes);
        return common_1.Disposable.create(function () {
            var inverseChanges = _this.doUnsetSchema(changes);
            if (!inverseChanges.length) {
                return;
            }
            _this.fireDidPreferenceSchemaChanged();
            _this.emitPreferencesChangedEvent(inverseChanges);
        });
    };
    PreferenceSchemaProvider.prototype.getPreferences = function () {
        return this.preferences;
    };
    PreferenceSchemaProvider.prototype.setPreference = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, false];
            });
        });
    };
    PreferenceSchemaProvider.prototype.isValidInScope = function (preferenceName, scope) {
        var property;
        var overridden = this.overriddenPreferenceName(preferenceName);
        if (overridden) {
            // try from overridden schema
            property = this.overridePatternProperties["[" + overridden.overrideIdentifier + "]"];
            property = property && property[overridden.preferenceName];
            if (!property) {
                // try from overridden identifier
                property = this.overridePatternProperties[overridden.preferenceName];
            }
            if (!property) {
                // try from overridden value
                property = this.combinedSchema.properties[overridden.preferenceName];
            }
        }
        else {
            property = this.combinedSchema.properties[preferenceName];
        }
        return property && property.scope >= scope;
    };
    PreferenceSchemaProvider.prototype.getPreferenceNames = function () {
        var _a, _b, _i, preferenceName, _c, _d, overridePreferenceName, e_4_1;
        var e_4, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _a = [];
                    for (_b in this.combinedSchema.properties)
                        _a.push(_b);
                    _i = 0;
                    _f.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 11];
                    preferenceName = _a[_i];
                    return [4 /*yield*/, preferenceName];
                case 2:
                    _f.sent();
                    _f.label = 3;
                case 3:
                    _f.trys.push([3, 8, 9, 10]);
                    _c = (e_4 = void 0, __values(this.getOverridePreferenceNames(preferenceName))), _d = _c.next();
                    _f.label = 4;
                case 4:
                    if (!!_d.done) return [3 /*break*/, 7];
                    overridePreferenceName = _d.value;
                    return [4 /*yield*/, overridePreferenceName];
                case 5:
                    _f.sent();
                    _f.label = 6;
                case 6:
                    _d = _c.next();
                    return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_4_1 = _f.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 10:
                    _i++;
                    return [3 /*break*/, 1];
                case 11: return [2 /*return*/];
            }
        });
    };
    PreferenceSchemaProvider.prototype.getOverridePreferenceNames = function (preferenceName) {
        var preference, _a, _b, overrideIdentifier, e_5_1;
        var e_5, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    preference = this.combinedSchema.properties[preferenceName];
                    if (!(preference && preference.overridable)) return [3 /*break*/, 8];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    _a = __values(this.overrideIdentifiers), _b = _a.next();
                    _d.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    overrideIdentifier = _b.value;
                    return [4 /*yield*/, this.overridePreferenceName({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier })];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_5_1 = _d.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    PreferenceSchemaProvider.prototype.overridePreferenceName = function (_a) {
        var preferenceName = _a.preferenceName, overrideIdentifier = _a.overrideIdentifier;
        return "[" + overrideIdentifier + "]." + preferenceName;
    };
    PreferenceSchemaProvider.prototype.overriddenPreferenceName = function (name) {
        var index = name.indexOf('.');
        if (index === -1) {
            return undefined;
        }
        var matches = name.substr(0, index).match(exports.OVERRIDE_PROPERTY_PATTERN);
        var overrideIdentifier = matches && matches[1];
        if (!overrideIdentifier || !this.overrideIdentifiers.has(overrideIdentifier)) {
            return undefined;
        }
        var preferenceName = name.substr(index + 1);
        return { preferenceName: preferenceName, overrideIdentifier: overrideIdentifier };
    };
    PreferenceSchemaProvider.prototype.testOverrideValue = function (name, value) {
        return preference_schema_1.PreferenceSchemaProperties.is(value) && exports.OVERRIDE_PROPERTY_PATTERN.test(name);
    };
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(exports.PreferenceContribution),
        __metadata("design:type", Object)
    ], PreferenceSchemaProvider.prototype, "preferenceContributions", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferenceSchemaProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferenceSchemaProvider.prototype, "init", null);
    PreferenceSchemaProvider = __decorate([
        inversify_1.injectable()
    ], PreferenceSchemaProvider);
    return PreferenceSchemaProvider;
}(preference_provider_1.PreferenceProvider));
exports.PreferenceSchemaProvider = PreferenceSchemaProvider;
//# sourceMappingURL=preference-contribution.js.map
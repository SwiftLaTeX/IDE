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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
var jsdom_1 = require("../test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var assert = require("assert");
var inversify_1 = require("inversify");
var frontend_application_bindings_1 = require("../frontend-application-bindings");
var test_1 = require("./test");
var preference_service_1 = require("./preference-service");
var preference_contribution_1 = require("./preference-contribution");
var preference_scope_1 = require("./preference-scope");
var preference_provider_1 = require("./preference-provider");
var frontend_application_config_provider_1 = require("../frontend-application-config-provider");
var preference_proxy_1 = require("./preference-proxy");
disableJSDOM();
process.on('unhandledRejection', function (reason, promise) {
    console.error(reason);
    throw reason;
});
var expect = require('chai').expect;
var testContainer;
function createTestContainer() {
    var result = new inversify_1.Container();
    frontend_application_bindings_1.bindPreferenceService(result.bind.bind(result));
    test_1.bindMockPreferenceProviders(result.bind.bind(result), result.unbind.bind(result));
    return result;
}
describe('Preference Service', function () {
    var prefService;
    var prefSchema;
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
        frontend_application_config_provider_1.FrontendApplicationConfigProvider.set({
            'applicationName': 'test',
        });
    });
    after(function () {
        disableJSDOM();
    });
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testContainer = createTestContainer();
                    prefSchema = testContainer.get(preference_contribution_1.PreferenceSchemaProvider);
                    prefService = testContainer.get(preference_service_1.PreferenceService);
                    getProvider(preference_scope_1.PreferenceScope.User).markReady();
                    getProvider(preference_scope_1.PreferenceScope.Workspace).markReady();
                    getProvider(preference_scope_1.PreferenceScope.Folder).markReady();
                    console.log('before ready');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prefService.ready];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4:
                    console.log('done');
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () {
    });
    function getProvider(scope) {
        return testContainer.getNamed(preference_provider_1.PreferenceProvider, scope);
    }
    it('should get notified if a provider emits a change', function (done) {
        prefSchema.setSchema({
            properties: {
                'testPref': {
                    type: 'string'
                }
            }
        });
        var userProvider = getProvider(preference_scope_1.PreferenceScope.User);
        userProvider.setPreference('testPref', 'oldVal');
        prefService.onPreferenceChanged(function (pref) {
            if (pref) {
                expect(pref.preferenceName).eq('testPref');
                expect(pref.newValue).eq('newVal');
                done();
                return;
            }
            done(new Error('onPreferenceChanged() fails to return any preference change infomation'));
            return;
        });
        userProvider.emitPreferencesChangedEvent({
            testPref: {
                preferenceName: 'testPref',
                newValue: 'newVal',
                oldValue: 'oldVal',
                scope: preference_scope_1.PreferenceScope.User,
                domain: []
            }
        });
    }).timeout(2000);
    it('should return the preference from the more specific scope (user > workspace)', function () {
        prefSchema.setSchema({
            properties: {
                'test.number': {
                    type: 'number',
                    scope: 'resource'
                }
            }
        });
        var userProvider = getProvider(preference_scope_1.PreferenceScope.User);
        var workspaceProvider = getProvider(preference_scope_1.PreferenceScope.Workspace);
        var folderProvider = getProvider(preference_scope_1.PreferenceScope.Folder);
        userProvider.setPreference('test.number', 1);
        expect(prefService.get('test.number')).equals(1);
        workspaceProvider.setPreference('test.number', 0);
        expect(prefService.get('test.number')).equals(0);
        folderProvider.setPreference('test.number', 2);
        expect(prefService.get('test.number')).equals(2);
        // remove property on lower scope
        folderProvider.setPreference('test.number', undefined);
        expect(prefService.get('test.number')).equals(0);
    });
    it('should throw a TypeError if the preference (reference object) is modified', function () {
        prefSchema.setSchema({
            properties: {
                'test.immutable': {
                    type: 'array',
                    items: {
                        type: 'string'
                    },
                    scope: 'resource'
                }
            }
        });
        var userProvider = getProvider(preference_scope_1.PreferenceScope.User);
        userProvider.setPreference('test.immutable', [
            'test', 'test', 'test'
        ]);
        var immutablePref = prefService.get('test.immutable');
        expect(immutablePref).to.not.be.undefined;
        if (immutablePref !== undefined) {
            expect(function () { return immutablePref.push('fails'); }).to.throw(TypeError);
        }
    });
    it('should still report the more specific preference even though the less specific one changed', function () {
        prefSchema.setSchema({
            properties: {
                'test.number': {
                    type: 'number',
                    scope: 'resource'
                }
            }
        });
        var userProvider = getProvider(preference_scope_1.PreferenceScope.User);
        var workspaceProvider = getProvider(preference_scope_1.PreferenceScope.Workspace);
        userProvider.setPreference('test.number', 1);
        workspaceProvider.setPreference('test.number', 0);
        expect(prefService.get('test.number')).equals(0);
        userProvider.setPreference('test.number', 4);
        expect(prefService.get('test.number')).equals(0);
    });
    it('should unset preference schema', function () {
        var events = [];
        prefService.onPreferenceChanged(function (event) { return events.push(event); });
        prefSchema.registerOverrideIdentifier('go');
        var toUnset = prefSchema.setSchema({
            properties: {
                'editor.insertSpaces': {
                    type: 'boolean',
                    default: true,
                    overridable: true
                },
                '[go]': {
                    type: 'object',
                    default: {
                        'editor.insertSpaces': false
                    }
                }
            }
        });
        assert.deepStrictEqual([{
                preferenceName: 'editor.insertSpaces',
                newValue: true,
                oldValue: undefined
            }, {
                preferenceName: '[go].editor.insertSpaces',
                newValue: false,
                oldValue: undefined
            }], events.map(function (e) { return ({
            preferenceName: e.preferenceName,
            newValue: e.newValue,
            oldValue: e.oldValue
        }); }), 'events before');
        assert.strictEqual(prefService.get('editor.insertSpaces'), true, 'get before');
        assert.strictEqual(prefService.get('[go].editor.insertSpaces'), false, 'get before overridden');
        events.length = 0;
        toUnset.dispose();
        assert.deepStrictEqual([{
                preferenceName: 'editor.insertSpaces',
                newValue: undefined,
                oldValue: true
            }, {
                preferenceName: '[go].editor.insertSpaces',
                newValue: undefined,
                oldValue: false
            }], events.map(function (e) { return ({
            preferenceName: e.preferenceName,
            newValue: e.newValue,
            oldValue: e.oldValue
        }); }), 'events after');
        assert.strictEqual(prefService.get('editor.insertSpaces'), undefined, 'get after');
        assert.strictEqual(prefService.get('[go].editor.insertSpaces'), undefined, 'get after overridden');
    });
    describe('overridden preferences', function () {
        it('get #0', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            preferences.set('[json].editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            expect(preferences.get('editor.tabSize')).to.equal(4);
            expect(preferences.get('[json].editor.tabSize')).to.equal(undefined);
            schema.registerOverrideIdentifier('json');
            expect(preferences.get('editor.tabSize')).to.equal(4);
            expect(preferences.get('[json].editor.tabSize')).to.equal(2);
        });
        it('get #1', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            schema.registerOverrideIdentifier('json');
            expect(preferences.get('editor.tabSize')).to.equal(4);
            expect(preferences.get('[json].editor.tabSize')).to.equal(4);
            preferences.set('[json].editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            expect(preferences.get('editor.tabSize')).to.equal(4);
            expect(preferences.get('[json].editor.tabSize')).to.equal(2);
        });
        it('get #2', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            schema.registerOverrideIdentifier('json');
            expect(preferences.get('editor.tabSize')).to.equal(4);
            expect(preferences.get('[json].editor.tabSize')).to.equal(4);
            preferences.set('editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            expect(preferences.get('editor.tabSize')).to.equal(2);
            expect(preferences.get('[json].editor.tabSize')).to.equal(2);
        });
        it('has', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            expect(preferences.has('editor.tabSize')).to.be.true;
            expect(preferences.has('[json].editor.tabSize')).to.be.false;
            schema.registerOverrideIdentifier('json');
            expect(preferences.has('editor.tabSize')).to.be.true;
            expect(preferences.has('[json].editor.tabSize')).to.be.true;
        });
        it('inspect #0', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            var expected = {
                preferenceName: 'editor.tabSize',
                defaultValue: 4,
                globalValue: undefined,
                workspaceValue: undefined,
                workspaceFolderValue: undefined,
            };
            assert.deepStrictEqual(expected, preferences.inspect('editor.tabSize'));
            assert.ok(!preferences.has('[json].editor.tabSize'));
            schema.registerOverrideIdentifier('json');
            assert.deepStrictEqual(expected, preferences.inspect('editor.tabSize'));
            assert.deepStrictEqual(__assign(__assign({}, expected), { preferenceName: '[json].editor.tabSize' }), preferences.inspect('[json].editor.tabSize'));
        });
        it('inspect #1', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            var expected = {
                preferenceName: 'editor.tabSize',
                defaultValue: 4,
                globalValue: 2,
                workspaceValue: undefined,
                workspaceFolderValue: undefined,
            };
            preferences.set('editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            assert.deepStrictEqual(expected, preferences.inspect('editor.tabSize'));
            assert.ok(!preferences.has('[json].editor.tabSize'));
            schema.registerOverrideIdentifier('json');
            assert.deepStrictEqual(expected, preferences.inspect('editor.tabSize'));
            assert.deepStrictEqual(__assign(__assign({}, expected), { preferenceName: '[json].editor.tabSize' }), preferences.inspect('[json].editor.tabSize'));
        });
        it('inspect #2', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            var expected = {
                preferenceName: 'editor.tabSize',
                defaultValue: 4,
                globalValue: undefined,
                workspaceValue: undefined,
                workspaceFolderValue: undefined,
            };
            assert.deepStrictEqual(expected, preferences.inspect('editor.tabSize'));
            assert.ok(!preferences.has('[json].editor.tabSize'));
            schema.registerOverrideIdentifier('json');
            preferences.set('[json].editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            assert.deepStrictEqual(expected, preferences.inspect('editor.tabSize'));
            assert.deepStrictEqual(__assign(__assign({}, expected), { preferenceName: '[json].editor.tabSize', globalValue: 2 }), preferences.inspect('[json].editor.tabSize'));
        });
        it('onPreferenceChanged #0', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            var events = [];
            preferences.onPreferenceChanged(function (event) { return events.push(event); });
            schema.registerOverrideIdentifier('json');
            preferences.set('[json].editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            preferences.set('editor.tabSize', 3, preference_scope_1.PreferenceScope.User);
            assert.deepStrictEqual([{
                    preferenceName: '[json].editor.tabSize',
                    newValue: 2
                }, {
                    preferenceName: 'editor.tabSize',
                    newValue: 3
                }], events.map(function (e) { return ({
                preferenceName: e.preferenceName,
                newValue: e.newValue
            }); }));
        });
        it('onPreferenceChanged #1', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            var events = [];
            preferences.onPreferenceChanged(function (event) { return events.push(event); });
            schema.registerOverrideIdentifier('json');
            preferences.set('editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            assert.deepStrictEqual([{
                    preferenceName: 'editor.tabSize',
                    newValue: 2
                }, {
                    preferenceName: '[json].editor.tabSize',
                    newValue: 2
                }], events.map(function (e) { return ({
                preferenceName: e.preferenceName,
                newValue: e.newValue
            }); }));
        });
        it('onPreferenceChanged #2', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            schema.registerOverrideIdentifier('json');
            schema.registerOverrideIdentifier('javascript');
            preferences.set('[json].editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            preferences.set('editor.tabSize', 3, preference_scope_1.PreferenceScope.User);
            var events = [];
            var proxy = preference_proxy_1.createPreferenceProxy(preferences, schema.getCombinedSchema(), { overrideIdentifier: 'json' });
            proxy.onPreferenceChanged(function (event) { return events.push(event); });
            preferences.set('[javascript].editor.tabSize', 4, preference_scope_1.PreferenceScope.User);
            assert.deepStrictEqual([], events.map(function (e) { return ({
                preferenceName: e.preferenceName,
                newValue: e.newValue
            }); }), 'changes not relevant to json override should be ignored');
        });
        it('onPreferenceChanged #3', function () {
            var _a = prepareServices(), preferences = _a.preferences, schema = _a.schema;
            schema.registerOverrideIdentifier('json');
            preferences.set('[json].editor.tabSize', 2, preference_scope_1.PreferenceScope.User);
            preferences.set('editor.tabSize', 3, preference_scope_1.PreferenceScope.User);
            var events = [];
            preferences.onPreferenceChanged(function (event) { return events.push(event); });
            preferences.set('[json].editor.tabSize', undefined, preference_scope_1.PreferenceScope.User);
            assert.deepStrictEqual([{
                    preferenceName: '[json].editor.tabSize',
                    newValue: 3
                }], events.map(function (e) { return ({
                preferenceName: e.preferenceName,
                newValue: e.newValue
            }); }));
        });
        it('defaultOverrides [go].editor.formatOnSave', function () {
            var _a = prepareServices({
                schema: {
                    properties: {
                        'editor.insertSpaces': {
                            type: 'boolean',
                            default: true,
                            overridable: true
                        },
                        'editor.formatOnSave': {
                            type: 'boolean',
                            default: false,
                            overridable: true
                        }
                    }
                }
            }), preferences = _a.preferences, schema = _a.schema;
            assert.strictEqual(true, preferences.get('editor.insertSpaces'));
            assert.strictEqual(undefined, preferences.get('[go].editor.insertSpaces'));
            assert.strictEqual(false, preferences.get('editor.formatOnSave'));
            assert.strictEqual(undefined, preferences.get('[go].editor.formatOnSave'));
            schema.registerOverrideIdentifier('go');
            schema.setSchema({
                id: 'defaultOverrides',
                title: 'Default Configuration Overrides',
                properties: {
                    '[go]': {
                        type: 'object',
                        default: {
                            'editor.insertSpaces': false,
                            'editor.formatOnSave': true
                        },
                        description: 'Configure editor settings to be overridden for go language.'
                    }
                }
            });
            assert.strictEqual(true, preferences.get('editor.insertSpaces'));
            assert.strictEqual(false, preferences.get('[go].editor.insertSpaces'));
            assert.strictEqual(false, preferences.get('editor.formatOnSave'));
            assert.strictEqual(true, preferences.get('[go].editor.formatOnSave'));
        });
        function prepareServices(options) {
            prefSchema.setSchema(options && options.schema || {
                properties: {
                    'editor.tabSize': {
                        type: 'number',
                        description: '',
                        overridable: true,
                        default: 4
                    }
                }
            });
            return { preferences: prefService, schema: prefSchema };
        }
    });
});
//# sourceMappingURL=preference-service.spec.js.map
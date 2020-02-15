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
describe('Preference Proxy', function () {
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
    function getProxy(schema, options) {
        var s = schema || {
            properties: {
                'my.pref': {
                    type: 'string',
                    defaultValue: 'foo'
                }
            }
        };
        prefSchema.setSchema(s);
        return preference_proxy_1.createPreferenceProxy(prefService, s, options);
    }
    it('by default, it should get provide access in flat style but not deep', function () {
        var proxy = getProxy();
        expect(proxy['my.pref']).to.equal('foo');
        expect(proxy.my).to.equal(undefined);
        expect(Object.keys(proxy).join()).to.equal(['my.pref'].join());
    });
    it('it should get provide access in deep style but not flat', function () {
        var proxy = getProxy(undefined, { style: 'deep' });
        expect(proxy['my.pref']).to.equal(undefined);
        expect(proxy.my.pref).to.equal('foo');
        expect(Object.keys(proxy).join()).to.equal(['my'].join());
    });
    it('it should get provide access in to both styles', function () {
        var proxy = getProxy(undefined, { style: 'both' });
        expect(proxy['my.pref']).to.equal('foo');
        expect(proxy.my.pref).to.equal('foo');
        expect(Object.keys(proxy).join()).to.equal(['my', 'my.pref'].join());
    });
    it('it should forward change events', function () {
        var proxy = getProxy(undefined, { style: 'both' });
        var theChange;
        proxy.onPreferenceChanged(function (change) {
            expect(theChange).to.equal(undefined);
            theChange = change;
        });
        var theSecondChange;
        proxy.my.onPreferenceChanged(function (change) {
            expect(theSecondChange).to.equal(undefined);
            theSecondChange = change;
        });
        getProvider(preference_scope_1.PreferenceScope.User).setPreference('my.pref', 'bar');
        expect(theChange.newValue).to.equal('bar');
        expect(theChange.oldValue).to.equal(undefined);
        expect(theChange.preferenceName).to.equal('my.pref');
        expect(theSecondChange.newValue).to.equal('bar');
        expect(theSecondChange.oldValue).to.equal(undefined);
        expect(theSecondChange.preferenceName).to.equal('my.pref');
    });
    it('toJSON with deep', function () {
        var proxy = getProxy({
            properties: {
                'foo.baz': {
                    type: 'number',
                    default: 4
                },
                'foo.bar.x': {
                    type: 'boolean',
                    default: true
                },
                'foo.bar.y': {
                    type: 'boolean',
                    default: false
                },
                'a': {
                    type: 'string',
                    default: 'a'
                }
            }
        }, { style: 'deep' });
        assert.deepStrictEqual(JSON.stringify(proxy, undefined, 2), JSON.stringify({
            foo: {
                baz: 4,
                bar: {
                    x: true,
                    y: false
                }
            },
            a: 'a'
        }, undefined, 2), 'there should not be foo.bar.x to avoid sending excessive data to remote clients');
    });
});
//# sourceMappingURL=preference-proxy.spec.js.map
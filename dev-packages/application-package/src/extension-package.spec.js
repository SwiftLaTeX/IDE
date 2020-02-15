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
var semver = require("semver");
var assert = require("assert");
var npm_registry_1 = require("./npm-registry");
var extension_package_1 = require("./extension-package");
var testOutdated = function (expectation, name, version) {
    return it(name + '@' + version, function () { return __awaiter(void 0, void 0, void 0, function () {
        var registry, rawExtension, extensionPackage, outdated, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    registry = new npm_registry_1.NpmRegistry();
                    return [4 /*yield*/, extension_package_1.RawExtensionPackage.view(registry, name, version)];
                case 1:
                    rawExtension = _c.sent();
                    assert.ok(rawExtension);
                    extensionPackage = new extension_package_1.ExtensionPackage(rawExtension, registry);
                    return [4 /*yield*/, extensionPackage.isOutdated()];
                case 2:
                    outdated = _c.sent();
                    _b = (_a = assert).equal;
                    return [4 /*yield*/, expectation(extensionPackage)];
                case 3:
                    _b.apply(_a, [_c.sent(), outdated]);
                    return [2 /*return*/];
            }
        });
    }); });
};
describe('extension-package', function () {
    var _this = this;
    this.timeout(10000);
    describe('isOutdated', function () {
        testOutdated(function (extensionPackage) { return __awaiter(_this, void 0, void 0, function () {
            var latestVersion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, extensionPackage.getLatestVersion()];
                    case 1:
                        latestVersion = _a.sent();
                        return [2 /*return*/, latestVersion ? semver.gt(latestVersion, extensionPackage.raw.version) : false];
                }
            });
        }); }, '@theia/core', 'next');
        testOutdated(function () { return false; }, '@theia/core', 'latest');
        testOutdated(function () { return true; }, '@theia/core', '0.1.0');
    });
});
//# sourceMappingURL=extension-package.spec.js.map
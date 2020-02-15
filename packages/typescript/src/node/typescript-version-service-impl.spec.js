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
var os = require("os");
var path = require("path");
var assert = require("assert");
var uri_1 = require("@theia/core/lib/common/uri");
var os_1 = require("@theia/core/lib/common/os");
var node_1 = require("@theia/core/lib/node");
var typescript_version_service_impl_1 = require("./typescript-version-service-impl");
describe('TypescriptVersionServiceImpl', function () {
    var _this = this;
    var projectUri = node_1.FileUri.create(path.resolve(__dirname, '../../../..'));
    var impl;
    beforeEach(function () {
        impl = new typescript_version_service_impl_1.TypescriptVersionServiceImpl();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        impl.applicationPackage = {
            projectPath: node_1.FileUri.fsPath(projectUri)
        };
    });
    afterEach(function () {
        impl = undefined;
    });
    it('resolveBundledVersionInApplicationPath', function () { return __awaiter(_this, void 0, void 0, function () {
        var version;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, impl['resolveBundledVersionInApplicationPath']()];
                case 1:
                    version = _a.sent();
                    assert.equal(projectUri.relative(new uri_1.default(version.uri)), 'node_modules/typescript/lib');
                    return [2 /*return*/];
            }
        });
    }); });
    it('resolveBundledVersionWithRequire', function () { return __awaiter(_this, void 0, void 0, function () {
        var version;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, impl['resolveBundledVersionWithRequire']()];
                case 1:
                    version = _a.sent();
                    assert.equal(projectUri.relative(new uri_1.default(version.uri)), 'node_modules/typescript/lib');
                    return [2 /*return*/];
            }
        });
    }); });
    it('resolveBundledVersionAsExecutable', function () { return __awaiter(_this, void 0, void 0, function () {
        var version;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, impl['resolveBundledVersionAsExecutable']()];
                case 1:
                    version = _a.sent();
                    assert.equal(typescript_version_service_impl_1.TypescriptVersionURI.getTsServerPath(version), os_1.isWindows ? 'tsserver.cmd' : 'tsserver');
                    return [2 /*return*/];
            }
        });
    }); });
    it('getVersions', function () { return __awaiter(_this, void 0, void 0, function () {
        var versions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, impl.getVersions({
                        workspaceFolders: [projectUri.toString()]
                    })];
                case 1:
                    versions = _a.sent();
                    assert.equal(versions.map(function (_a) {
                        var qualifier = _a.qualifier, uri = _a.uri;
                        return qualifier + ": " + projectUri.relative(new uri_1.default(uri));
                    }).join(os.EOL), [
                        'Bundled: node_modules/typescript/lib',
                        'Workspace: node_modules/typescript/lib'
                    ].join(os.EOL));
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=typescript-version-service-impl.spec.js.map
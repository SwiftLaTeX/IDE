"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var chai = require("chai");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var mock_logger_1 = require("@theia/core/lib/common/test/mock-logger");
var variable_1 = require("./variable");
var variable_resolver_service_1 = require("./variable-resolver-service");
var expect = chai.expect;
before(function () {
    chai.config.showDiff = true;
    chai.config.includeStack = true;
});
describe('variable-resolver-service', function () {
    var testContainer;
    before(function () {
        testContainer = new inversify_1.Container();
        var module = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
            bind(common_1.ILogger).to(mock_logger_1.MockLogger);
            bind(variable_1.VariableRegistry).toSelf().inSingletonScope();
            bind(variable_resolver_service_1.VariableResolverService).toSelf();
        });
        testContainer.load(module);
    });
    var variableRegistry;
    var variableResolverService;
    beforeEach(function () {
        variableRegistry = testContainer.get(variable_1.VariableRegistry);
        variableResolverService = testContainer.get(variable_resolver_service_1.VariableResolverService);
        var variables = [
            {
                name: 'file',
                description: 'current file',
                resolve: function () { return Promise.resolve('package.json'); }
            },
            {
                name: 'lineNumber',
                description: 'current line number',
                resolve: function () { return Promise.resolve('6'); }
            }
        ];
        variables.forEach(function (v) { return variableRegistry.registerVariable(v); });
    });
    it('should resolve known variables in a text', function () { return __awaiter(void 0, void 0, void 0, function () {
        var resolved;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, variableResolverService.resolve('file: ${file}; line: ${lineNumber}')];
                case 1:
                    resolved = _a.sent();
                    expect(resolved).is.equal('file: package.json; line: 6');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should resolve known variables in a string array', function () { return __awaiter(void 0, void 0, void 0, function () {
        var resolved;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, variableResolverService.resolveArray(['file: ${file}', 'line: ${lineNumber}'])];
                case 1:
                    resolved = _a.sent();
                    expect(resolved.length).to.be.equal(2);
                    expect(resolved).to.contain('file: package.json');
                    expect(resolved).to.contain('line: 6');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should skip unknown variables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var resolved;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, variableResolverService.resolve('workspace: ${workspaceRoot}; file: ${file}; line: ${lineNumber}')];
                case 1:
                    resolved = _a.sent();
                    expect(resolved).is.equal('workspace: ${workspaceRoot}; file: package.json; line: 6');
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=variable-resolver-service.spec.js.map
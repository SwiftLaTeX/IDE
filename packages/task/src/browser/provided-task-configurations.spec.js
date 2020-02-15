"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var chai_1 = require("chai");
var inversify_1 = require("inversify");
var provided_task_configurations_1 = require("./provided-task-configurations");
var task_definition_registry_1 = require("./task-definition-registry");
var task_contribution_1 = require("./task-contribution");
describe('provided-task-configurations', function () {
    var container;
    beforeEach(function () {
        container = new inversify_1.Container();
        container.bind(provided_task_configurations_1.ProvidedTaskConfigurations).toSelf().inSingletonScope();
        container.bind(task_contribution_1.TaskProviderRegistry).toSelf().inSingletonScope();
        container.bind(task_definition_registry_1.TaskDefinitionRegistry).toSelf().inSingletonScope();
    });
    it('provided-task-search', function () { return __awaiter(void 0, void 0, void 0, function () {
        var providerRegistry, task;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    providerRegistry = container.get(task_contribution_1.TaskProviderRegistry);
                    providerRegistry.register('test', {
                        provideTasks: function () {
                            return Promise.resolve([{ type: 'test', label: 'task from test', _source: 'test', _scope: 'test' }]);
                        }
                    });
                    return [4 /*yield*/, container.get(provided_task_configurations_1.ProvidedTaskConfigurations).getTask('test', 'task from test', 'test')];
                case 1:
                    task = _a.sent();
                    chai_1.assert.isOk(task);
                    chai_1.assert.equal(task.type, 'test');
                    chai_1.assert.equal(task.label, 'task from test');
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=provided-task-configurations.spec.js.map
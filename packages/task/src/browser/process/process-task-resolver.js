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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/variable-resolver/lib/browser");
var task_definition_registry_1 = require("../task-definition-registry");
var uri_1 = require("@theia/core/lib/common/uri");
var ProcessTaskResolver = /** @class */ (function () {
    function ProcessTaskResolver() {
    }
    /**
     * Perform some adjustments to the task launch configuration, before sending
     * it to the backend to be executed. We can make sure that parameters that
     * are optional to the user but required by the server will be defined, with
     * sane default values. Also, resolve all known variables, e.g. `${workspaceFolder}`.
     */
    ProcessTaskResolver.prototype.resolveTask = function (taskConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var context, variableResolverOptions, processTaskConfig, result, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        if (taskConfig.type !== 'process' && taskConfig.type !== 'shell') {
                            throw new Error('Unsupported task configuration type.');
                        }
                        context = new uri_1.default(this.taskDefinitionRegistry.getDefinition(taskConfig) ? taskConfig.scope : taskConfig._source).withScheme('file');
                        variableResolverOptions = {
                            context: context, configurationSection: 'tasks'
                        };
                        processTaskConfig = taskConfig;
                        _a = [__assign({}, processTaskConfig)];
                        _b = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.command, variableResolverOptions)];
                    case 1:
                        _b.command = _p.sent();
                        if (!processTaskConfig.args) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.args, variableResolverOptions)];
                    case 2:
                        _c = _p.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _c = undefined;
                        _p.label = 4;
                    case 4:
                        _b.args = _c;
                        if (!processTaskConfig.windows) return [3 /*break*/, 9];
                        _e = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.windows.command, variableResolverOptions)];
                    case 5:
                        _e.command = _p.sent();
                        if (!processTaskConfig.windows.args) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.windows.args, variableResolverOptions)];
                    case 6:
                        _f = _p.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        _f = undefined;
                        _p.label = 8;
                    case 8:
                        _d = (_e.args = _f,
                            _e.options = processTaskConfig.windows.options,
                            _e);
                        return [3 /*break*/, 10];
                    case 9:
                        _d = undefined;
                        _p.label = 10;
                    case 10:
                        _b.windows = _d;
                        if (!processTaskConfig.osx) return [3 /*break*/, 15];
                        _h = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.osx.command, variableResolverOptions)];
                    case 11:
                        _h.command = _p.sent();
                        if (!processTaskConfig.osx.args) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.osx.args, variableResolverOptions)];
                    case 12:
                        _j = _p.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        _j = undefined;
                        _p.label = 14;
                    case 14:
                        _g = (_h.args = _j,
                            _h.options = processTaskConfig.osx.options,
                            _h);
                        return [3 /*break*/, 16];
                    case 15:
                        _g = undefined;
                        _p.label = 16;
                    case 16:
                        _b.osx = _g;
                        if (!processTaskConfig.linux) return [3 /*break*/, 21];
                        _l = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.linux.command, variableResolverOptions)];
                    case 17:
                        _l.command = _p.sent();
                        if (!processTaskConfig.linux.args) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.linux.args, variableResolverOptions)];
                    case 18:
                        _m = _p.sent();
                        return [3 /*break*/, 20];
                    case 19:
                        _m = undefined;
                        _p.label = 20;
                    case 20:
                        _k = (_l.args = _m,
                            _l.options = processTaskConfig.linux.options,
                            _l);
                        return [3 /*break*/, 22];
                    case 21:
                        _k = undefined;
                        _p.label = 22;
                    case 22:
                        _b.linux = _k;
                        _o = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.options && processTaskConfig.options.cwd || '${workspaceFolder}', variableResolverOptions)];
                    case 23:
                        result = __assign.apply(void 0, _a.concat([(_b.options = (_o.cwd = _p.sent(),
                                _o.env = processTaskConfig.options && processTaskConfig.options.env,
                                _o.shell = processTaskConfig.options && processTaskConfig.options.shell,
                                _o), _b)]));
                        return [2 /*return*/, result];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.VariableResolverService),
        __metadata("design:type", browser_1.VariableResolverService)
    ], ProcessTaskResolver.prototype, "variableResolverService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], ProcessTaskResolver.prototype, "taskDefinitionRegistry", void 0);
    ProcessTaskResolver = __decorate([
        inversify_1.injectable()
    ], ProcessTaskResolver);
    return ProcessTaskResolver;
}());
exports.ProcessTaskResolver = ProcessTaskResolver;
//# sourceMappingURL=process-task-resolver.js.map
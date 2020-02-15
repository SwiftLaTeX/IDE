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
var path = require("path");
var psList = require('ps-list'); // FIXME use import, provide proper d.ts file
var inversify_1 = require("inversify");
var node_1 = require("@theia/core/lib/node");
var vscode_debug_adapter_contribution_1 = require("@theia/debug/lib/node/vscode/vscode-debug-adapter-contribution");
exports.INSPECTOR_PORT_DEFAULT = 9229;
exports.LEGACY_PORT_DEFAULT = 5858;
var NodeDebugAdapterContribution = /** @class */ (function (_super) {
    __extends(NodeDebugAdapterContribution, _super);
    function NodeDebugAdapterContribution() {
        return _super.call(this, 'node', path.join(__dirname, '../../download/node-debug/extension')) || this;
    }
    // TODO: construct based on package.json of the given workspace
    NodeDebugAdapterContribution.prototype.provideDebugConfigurations = function (workspaceFolderUri) {
        return [{
                type: this.type,
                request: 'attach',
                name: 'Debug (Attach)',
                processId: ''
            }];
    };
    // TODO: align with vscode-node-debug
    NodeDebugAdapterContribution.prototype.resolveDebugConfiguration = function (config, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!config.cwd && !!workspaceFolderUri) {
                            config.cwd = node_1.FileUri.fsPath(workspaceFolderUri);
                        }
                        if (!config.cwd) {
                            config.cwd = '${workspaceFolder}';
                        }
                        if (!(config.request === 'attach' && typeof config.processId === 'string')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.resolveAttachConfiguration(config)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = config;
                        return [4 /*yield*/, this.resolveDebugType(config)];
                    case 3:
                        _a.type = _b.sent();
                        return [2 /*return*/, config];
                }
            });
        });
    };
    NodeDebugAdapterContribution.prototype.resolveDebugType = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (config.protocol === 'legacy') {
                    return [2 /*return*/, 'node'];
                }
                if (config.protocol === 'inspector') {
                    return [2 /*return*/, 'node2'];
                }
                // TODO: auto detect
                return [2 /*return*/, 'node2'];
            });
        });
    };
    // TODO: align with vscode-node-debug
    NodeDebugAdapterContribution.prototype.resolveAttachConfiguration = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var pidToDebug, tasks, taskToDebug, matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config.protocol = 'inspector';
                        config.port = 9229;
                        pidToDebug = Number.parseInt(config.processId);
                        return [4 /*yield*/, psList()];
                    case 1:
                        tasks = _a.sent();
                        taskToDebug = tasks.find(function (task) { return task.pid === pidToDebug; });
                        if (taskToDebug) {
                            matches = /--(inspect|debug)-port=(\d+)/.exec(taskToDebug.cmd);
                            if (matches && matches.length === 3) {
                                config.port = parseInt(matches[2]);
                                config.protocol = matches[1] === 'debug' ? 'legacy' : 'inspector';
                            }
                        }
                        delete config.processId;
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeDebugAdapterContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], NodeDebugAdapterContribution);
    return NodeDebugAdapterContribution;
}(vscode_debug_adapter_contribution_1.AbstractVSCodeDebugAdapterContribution));
exports.NodeDebugAdapterContribution = NodeDebugAdapterContribution;
var Node2DebugAdapterContribution = /** @class */ (function (_super) {
    __extends(Node2DebugAdapterContribution, _super);
    function Node2DebugAdapterContribution() {
        return _super.call(this, 'node2', path.join(__dirname, '../../download/node-debug2/extension')) || this;
    }
    Node2DebugAdapterContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Node2DebugAdapterContribution);
    return Node2DebugAdapterContribution;
}(vscode_debug_adapter_contribution_1.AbstractVSCodeDebugAdapterContribution));
exports.Node2DebugAdapterContribution = Node2DebugAdapterContribution;
//# sourceMappingURL=node-debug-adapter-contribution.js.map
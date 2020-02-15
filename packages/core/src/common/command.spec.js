"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat and others.
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
var command_1 = require("./command");
var chai = require("chai");
var expect = chai.expect;
var commandRegistry;
/* eslint-disable no-unused-expressions */
describe('Commands', function () {
    beforeEach(function () {
        commandRegistry = new command_1.CommandRegistry(new EmptyContributionProvider());
    });
    it('should register and execute a given command', function () { return __awaiter(void 0, void 0, void 0, function () {
        var concatId, command, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    concatId = 'concat';
                    command = { id: concatId };
                    commandRegistry.registerCommand(command, new ConcatCommandHandler());
                    return [4 /*yield*/, commandRegistry.executeCommand(concatId, 'a', 'b', 'c')];
                case 1:
                    result = _a.sent();
                    expect('abc').equals(result);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should execute a given command, and add it to recently used', function () { return __awaiter(void 0, void 0, void 0, function () {
        var commandId, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commandId = 'stub';
                    command = { id: commandId };
                    commandRegistry.registerCommand(command, new StubCommandHandler());
                    return [4 /*yield*/, commandRegistry.executeCommand(commandId)];
                case 1:
                    _a.sent();
                    expect(commandRegistry.recent.length).equal(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should execute multiple commands, and add them to recently used in the order they were used', function () { return __awaiter(void 0, void 0, void 0, function () {
        var commandIds, commands, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commandIds = ['a', 'b', 'c'];
                    commands = [
                        { id: commandIds[0] },
                        { id: commandIds[1] },
                        { id: commandIds[2] },
                    ];
                    // Register each command.
                    commands.forEach(function (c) {
                        commandRegistry.registerCommand(c, new StubCommandHandler());
                    });
                    // Execute order c, b, a.
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[2])];
                case 1:
                    // Execute order c, b, a.
                    _a.sent();
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[1])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[0])];
                case 3:
                    _a.sent();
                    result = commandRegistry.recent;
                    expect(result.length).equal(3);
                    expect(result[0].id).equal(commandIds[0]);
                    expect(result[1].id).equal(commandIds[1]);
                    expect(result[2].id).equal(commandIds[2]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should execute a command that\'s already been executed, and add it to the top of the most recently used', function () { return __awaiter(void 0, void 0, void 0, function () {
        var commandIds, commands, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commandIds = ['a', 'b', 'c'];
                    commands = [
                        { id: commandIds[0] },
                        { id: commandIds[1] },
                        { id: commandIds[2] },
                    ];
                    // Register each command.
                    commands.forEach(function (c) {
                        commandRegistry.registerCommand(c, new StubCommandHandler());
                    });
                    // Execute order a, b, c, a.
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[0])];
                case 1:
                    // Execute order a, b, c, a.
                    _a.sent();
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[1])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[2])];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[0])];
                case 4:
                    _a.sent();
                    result = commandRegistry.recent;
                    expect(result.length).equal(3);
                    expect(result[0].id).equal(commandIds[0]);
                    expect(result[1].id).equal(commandIds[2]);
                    expect(result[2].id).equal(commandIds[1]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should clear the recently used command history', function () { return __awaiter(void 0, void 0, void 0, function () {
        var commandIds, commands;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commandIds = ['a', 'b', 'c'];
                    commands = [
                        { id: commandIds[0] },
                        { id: commandIds[1] },
                        { id: commandIds[2] },
                    ];
                    // Register each command.
                    commands.forEach(function (c) {
                        commandRegistry.registerCommand(c, new StubCommandHandler());
                    });
                    // Execute each command.
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[0])];
                case 1:
                    // Execute each command.
                    _a.sent();
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[1])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, commandRegistry.executeCommand(commandIds[2])];
                case 3:
                    _a.sent();
                    // Clear the list of recently used commands.
                    commandRegistry.clearCommandHistory();
                    expect(commandRegistry.recent.length).equal(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return with an empty array of handlers if the command is not registered', function () {
        expect(commandRegistry.getCommand('missing')).to.be.undefined;
        expect(commandRegistry.getAllHandlers('missing')).to.be.empty;
    });
    it('should return with an empty array of handlers if the command has no registered handlers', function () {
        commandRegistry.registerCommand({ id: 'id' });
        expect(commandRegistry.getCommand('id')).to.be.not.undefined;
        expect(commandRegistry.getAllHandlers('id')).to.be.empty;
    });
    it('should return all handlers including the non active ones', function () {
        commandRegistry.registerCommand({ id: 'id' });
        commandRegistry.registerHandler('id', new StubCommandHandler());
        commandRegistry.registerHandler('id', new NeverActiveStubCommandHandler());
        expect(commandRegistry.getAllHandlers('id').length).to.be.equal(2);
    });
});
var EmptyContributionProvider = /** @class */ (function () {
    function EmptyContributionProvider() {
    }
    EmptyContributionProvider.prototype.getContributions = function (recursive) {
        return [];
    };
    return EmptyContributionProvider;
}());
var ConcatCommandHandler = /** @class */ (function () {
    function ConcatCommandHandler() {
    }
    ConcatCommandHandler.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var concat = '';
        args.forEach(function (element) {
            concat += element;
        });
        return concat;
    };
    return ConcatCommandHandler;
}());
var StubCommandHandler = /** @class */ (function () {
    function StubCommandHandler() {
    }
    StubCommandHandler.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return undefined;
    };
    return StubCommandHandler;
}());
var NeverActiveStubCommandHandler = /** @class */ (function (_super) {
    __extends(NeverActiveStubCommandHandler, _super);
    function NeverActiveStubCommandHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeverActiveStubCommandHandler.prototype.isEnabled = function () { return false; };
    return NeverActiveStubCommandHandler;
}(StubCommandHandler));
//# sourceMappingURL=command.spec.js.map
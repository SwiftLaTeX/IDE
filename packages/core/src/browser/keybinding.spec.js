"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("../browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var inversify_1 = require("inversify");
var contribution_provider_1 = require("../common/contribution-provider");
var keyboard_layout_provider_1 = require("../common/keyboard/keyboard-layout-provider");
var logger_1 = require("../common/logger");
var keybinding_1 = require("./keybinding");
var keys_1 = require("./keyboard/keys");
var keyboard_layout_service_1 = require("./keyboard/keyboard-layout-service");
var command_1 = require("../common/command");
var label_parser_1 = require("./label-parser");
var mock_logger_1 = require("../common/test/mock-logger");
var status_bar_1 = require("./status-bar/status-bar");
var frontend_application_state_1 = require("./frontend-application-state");
var context_key_service_1 = require("./context-key-service");
var os = require("../common/os");
var chai = require("chai");
var sinon = require("sinon");
var event_1 = require("../common/event");
disableJSDOM();
/* eslint-disable no-unused-expressions */
var expect = chai.expect;
var keybindingRegistry;
var commandRegistry;
var testContainer;
before(function () { return __awaiter(void 0, void 0, void 0, function () {
    var module;
    return __generator(this, function (_a) {
        testContainer = new inversify_1.Container();
        module = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
            /* Mock logger binding*/
            bind(logger_1.ILogger).to(mock_logger_1.MockLogger);
            bind(keyboard_layout_service_1.KeyboardLayoutService).toSelf().inSingletonScope();
            bind(MockKeyboardLayoutProvider).toSelf().inSingletonScope();
            bind(keyboard_layout_provider_1.KeyboardLayoutProvider).toService(MockKeyboardLayoutProvider);
            bind(MockKeyboardLayoutChangeNotifier).toSelf().inSingletonScope();
            bind(keyboard_layout_provider_1.KeyboardLayoutChangeNotifier).toService(MockKeyboardLayoutChangeNotifier);
            contribution_provider_1.bindContributionProvider(bind, keybinding_1.KeybindingContext);
            bind(command_1.CommandRegistry).toSelf().inSingletonScope();
            contribution_provider_1.bindContributionProvider(bind, command_1.CommandContribution);
            bind(keybinding_1.KeybindingRegistry).toSelf();
            contribution_provider_1.bindContributionProvider(bind, keybinding_1.KeybindingContribution);
            bind(TestContribution).toSelf().inSingletonScope();
            [command_1.CommandContribution, keybinding_1.KeybindingContribution].forEach(function (serviceIdentifier) {
                return bind(serviceIdentifier).toService(TestContribution);
            });
            bind(keybinding_1.KeybindingContext).toConstantValue({
                id: 'testContext',
                isEnabled: function (arg) {
                    return true;
                }
            });
            bind(status_bar_1.StatusBarImpl).toSelf().inSingletonScope();
            bind(status_bar_1.StatusBar).toService(status_bar_1.StatusBarImpl);
            bind(command_1.CommandService).toService(command_1.CommandRegistry);
            bind(label_parser_1.LabelParser).toSelf().inSingletonScope();
            bind(context_key_service_1.ContextKeyService).toSelf().inSingletonScope();
            bind(frontend_application_state_1.FrontendApplicationStateService).toSelf().inSingletonScope();
        });
        testContainer.load(module);
        commandRegistry = testContainer.get(command_1.CommandRegistry);
        commandRegistry.onStart();
        return [2 /*return*/];
    });
}); });
describe('keybindings', function () {
    var stub;
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
    });
    after(function () {
        disableJSDOM();
    });
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stub = sinon.stub(os, 'isOSX').value(false);
                    keybindingRegistry = testContainer.get(keybinding_1.KeybindingRegistry);
                    return [4 /*yield*/, keybindingRegistry.onStart()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () {
        stub.restore();
    });
    it('should register the default keybindings', function () {
        var keybinding = keybindingRegistry.getKeybindingsForCommand(TEST_COMMAND.id);
        expect(keybinding).is.not.undefined;
        var keybinding2 = keybindingRegistry.getKeybindingsForCommand('undefined.command');
        expect(keybinding2.length).is.equal(0);
    });
    it('should set a keymap', function () {
        var keybindings = [{
                command: TEST_COMMAND.id,
                keybinding: 'ctrl+c'
            }];
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindings);
        var bindings = keybindingRegistry.getKeybindingsForCommand(TEST_COMMAND.id);
        if (bindings) {
            var keyCode = keys_1.KeyCode.parse(bindings[0].keybinding);
            expect(keyCode.key).to.be.equal(keys_1.Key.KEY_C);
            expect(keyCode.ctrl).to.be.true;
        }
    });
    it('should reset to default in case of invalid keybinding', function () {
        var keybindings = [{
                command: TEST_COMMAND.id,
                keybinding: 'ctrl+invalid'
            }];
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindings);
        var bindings = keybindingRegistry.getKeybindingsForCommand(TEST_COMMAND.id);
        if (bindings) {
            var keyCode = keys_1.KeyCode.parse(bindings[0].keybinding);
            expect(keyCode.key).to.be.equal(keys_1.Key.KEY_A);
            expect(keyCode.ctrl).to.be.true;
        }
    });
    it('should remove all keybindings from a command that has multiple keybindings', function () {
        var keybindings = [{
                command: TEST_COMMAND2.id,
                keybinding: 'F3'
            }];
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindings);
        var bindings = keybindingRegistry.getKeybindingsForCommand(TEST_COMMAND2.id);
        if (bindings) {
            expect(bindings.length).to.be.equal(1);
            var keyCode = keys_1.KeyCode.parse(bindings[0].keybinding);
            expect(keyCode.key).to.be.equal(keys_1.Key.F3);
            expect(keyCode.ctrl).to.be.false;
        }
    });
    it('should register a correct keybinding, then default back to the original for a wrong one after', function () {
        var keybindings = [{
                command: TEST_COMMAND.id,
                keybinding: 'ctrl+c'
            }];
        // Get default binding
        var keystroke = keybindingRegistry.getKeybindingsForCommand(TEST_COMMAND.id);
        // Set correct new binding
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindings);
        var bindings = keybindingRegistry.getKeybindingsForCommand(TEST_COMMAND.id);
        if (bindings) {
            var keyCode = keys_1.KeyCode.parse(bindings[0].keybinding);
            expect(keyCode.key).to.be.equal(keys_1.Key.KEY_C);
            expect(keyCode.ctrl).to.be.true;
        }
        // Set invalid binding
        keybindings = [{
                command: TEST_COMMAND.id,
                keybinding: 'ControlLeft+Invalid'
            }];
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindings);
        var defaultBindings = keybindingRegistry.getKeybindingsForCommand(TEST_COMMAND.id);
        if (defaultBindings) {
            if (keystroke) {
                var keyCode = keys_1.KeyCode.parse(defaultBindings[0].keybinding);
                var keyStrokeCode = keys_1.KeyCode.parse(keystroke[0].keybinding);
                expect(keyCode.key).to.be.equal(keyStrokeCode.key);
            }
        }
    });
    it('should only return the more specific keybindings when a keystroke is entered', function () {
        var keybindingsUser = [{
                command: TEST_COMMAND.id,
                keybinding: 'ctrl+b'
            }];
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindingsUser);
        var keybindingsSpecific = [{
                command: TEST_COMMAND.id,
                keybinding: 'ctrl+c'
            }];
        var validKeyCode = keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_C, modifiers: [keys_1.KeyModifier.CtrlCmd] });
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.WORKSPACE, keybindingsSpecific);
        var bindings = keybindingRegistry.getKeybindingsForKeySequence([keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.CtrlCmd] })]).full;
        expect(bindings).to.have.lengthOf(1);
        bindings = keybindingRegistry.getKeybindingsForKeySequence([keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_B, modifiers: [keys_1.KeyModifier.CtrlCmd] })]).full;
        expect(bindings).to.have.lengthOf(1);
        bindings = keybindingRegistry.getKeybindingsForKeySequence([keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_C, modifiers: [keys_1.KeyModifier.CtrlCmd] })]).full;
        var keyCode = keys_1.KeyCode.parse(bindings[0].keybinding);
        expect(keyCode.key).to.be.equal(validKeyCode.key);
    });
    it('should return partial keybinding matches', function () {
        var keybindingsUser = [{
                command: TEST_COMMAND.id,
                keybinding: 'ctrlcmd+x t'
            }];
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindingsUser);
        var validKeyCodes = [];
        validKeyCodes.push(keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_C, modifiers: [keys_1.KeyModifier.CtrlCmd] }));
        validKeyCodes.push(keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_T }));
        var bindings = keybindingRegistry.getKeybindingsForKeySequence(keys_1.KeySequence.parse('ctrlcmd+x'));
        expect(bindings.partial.length > 0);
    });
    it('should not register a shadowing keybinding', function () {
        var validKeyBinding = 'ctrlcmd+b a';
        var command = TEST_COMMAND_SHADOW.id;
        var keybindingShadowing = [
            {
                command: command,
                keybinding: validKeyBinding
            },
            {
                command: command,
                keybinding: 'ctrlcmd+b'
            }
        ];
        keybindingRegistry.registerKeybindings.apply(keybindingRegistry, __spread(keybindingShadowing));
        var bindings = keybindingRegistry.getKeybindingsForCommand(command);
        expect(bindings.length).to.be.equal(1);
        expect(bindings[0].keybinding).to.be.equal(validKeyBinding);
    });
    it('shadowed bindings should not be returned', function () {
        var keyCode = keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.Shift] });
        var bindings;
        var ignoredDefaultBinding = {
            keybinding: keyCode.toString(),
            command: 'test.ignored-command'
        };
        var defaultBinding = {
            keybinding: keyCode.toString(),
            command: 'test.workspace-command'
        };
        var userBinding = {
            keybinding: keyCode.toString(),
            command: 'test.workspace-command'
        };
        var workspaceBinding = {
            keybinding: keyCode.toString(),
            command: 'test.workspace-command'
        };
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.DEFAULT, [defaultBinding, ignoredDefaultBinding]);
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, [userBinding]);
        keybindingRegistry.setKeymap(keybinding_1.KeybindingScope.WORKSPACE, [workspaceBinding]);
        // now WORKSPACE bindings are overriding the other scopes
        bindings = keybindingRegistry.getKeybindingsForKeySequence([keyCode]).full;
        expect(bindings).to.have.lengthOf(1);
        expect(bindings[0].command).to.be.equal(workspaceBinding.command);
        keybindingRegistry.resetKeybindingsForScope(keybinding_1.KeybindingScope.WORKSPACE);
        // now it should find USER bindings
        bindings = keybindingRegistry.getKeybindingsForKeySequence([keyCode]).full;
        expect(bindings).to.have.lengthOf(1);
        expect(bindings[0].command).to.be.equal(userBinding.command);
        keybindingRegistry.resetKeybindingsForScope(keybinding_1.KeybindingScope.USER);
        // and finally it should fallback to DEFAULT bindings.
        bindings = keybindingRegistry.getKeybindingsForKeySequence([keyCode]).full;
        expect(bindings).to.have.lengthOf(1);
        expect(bindings[0].command).to.be.equal(defaultBinding.command);
        keybindingRegistry.resetKeybindingsForScope(keybinding_1.KeybindingScope.DEFAULT);
        // now the registry should be empty
        bindings = keybindingRegistry.getKeybindingsForKeySequence([keyCode]).full;
        expect(bindings).to.be.empty;
    });
});
var TEST_COMMAND = {
    id: 'test.command'
};
var TEST_COMMAND2 = {
    id: 'test.command2'
};
var TEST_COMMAND_SHADOW = {
    id: 'test.command-shadow'
};
var MockKeyboardLayoutProvider = /** @class */ (function () {
    function MockKeyboardLayoutProvider() {
    }
    MockKeyboardLayoutProvider.prototype.getNativeLayout = function () {
        return Promise.resolve({
            info: { id: 'mock', lang: 'en' },
            mapping: {}
        });
    };
    MockKeyboardLayoutProvider = __decorate([
        inversify_1.injectable()
    ], MockKeyboardLayoutProvider);
    return MockKeyboardLayoutProvider;
}());
var MockKeyboardLayoutChangeNotifier = /** @class */ (function () {
    function MockKeyboardLayoutChangeNotifier() {
        this.emitter = new event_1.Emitter();
    }
    Object.defineProperty(MockKeyboardLayoutChangeNotifier.prototype, "onDidChangeNativeLayout", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MockKeyboardLayoutChangeNotifier = __decorate([
        inversify_1.injectable()
    ], MockKeyboardLayoutChangeNotifier);
    return MockKeyboardLayoutChangeNotifier;
}());
var TestContribution = /** @class */ (function () {
    function TestContribution() {
    }
    TestContribution.prototype.registerCommands = function (commands) {
        commands.registerCommand(TEST_COMMAND);
        commands.registerCommand(TEST_COMMAND2);
        commands.registerCommand(TEST_COMMAND_SHADOW);
    };
    TestContribution.prototype.registerKeybindings = function (keybindings) {
        [{
                command: TEST_COMMAND.id,
                context: 'testContext',
                keybinding: 'ctrl+a'
            },
            {
                command: TEST_COMMAND2.id,
                context: 'testContext',
                keybinding: 'ctrl+f1'
            },
            {
                command: TEST_COMMAND2.id,
                context: 'testContext',
                keybinding: 'ctrl+f2'
            },
        ].forEach(function (binding) {
            keybindings.registerKeybinding(binding);
        });
    };
    TestContribution = __decorate([
        inversify_1.injectable()
    ], TestContribution);
    return TestContribution;
}());
//# sourceMappingURL=keybinding.spec.js.map
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var os_1 = require("../common/os");
var event_1 = require("../common/event");
var command_1 = require("../common/command");
var disposable_1 = require("../common/disposable");
var keys_1 = require("./keyboard/keys");
var keyboard_layout_service_1 = require("./keyboard/keyboard-layout-service");
var contribution_provider_1 = require("../common/contribution-provider");
var logger_1 = require("../common/logger");
var status_bar_1 = require("./status-bar/status-bar");
var context_key_service_1 = require("./context-key-service");
var common = require("../common/keybinding");
var KeybindingScope;
(function (KeybindingScope) {
    KeybindingScope[KeybindingScope["DEFAULT"] = 0] = "DEFAULT";
    KeybindingScope[KeybindingScope["DEFAULT_OVERRIDING"] = 1] = "DEFAULT_OVERRIDING";
    KeybindingScope[KeybindingScope["USER"] = 2] = "USER";
    KeybindingScope[KeybindingScope["WORKSPACE"] = 3] = "WORKSPACE";
    KeybindingScope[KeybindingScope["END"] = 4] = "END";
})(KeybindingScope = exports.KeybindingScope || (exports.KeybindingScope = {}));
(function (KeybindingScope) {
    KeybindingScope.length = KeybindingScope.END - KeybindingScope.DEFAULT;
})(KeybindingScope = exports.KeybindingScope || (exports.KeybindingScope = {}));
exports.Keybinding = common.Keybinding;
exports.KeybindingContribution = Symbol('KeybindingContribution');
exports.KeybindingContext = Symbol('KeybindingContext');
var KeybindingContexts;
(function (KeybindingContexts) {
    KeybindingContexts.NOOP_CONTEXT = {
        id: 'noop.keybinding.context',
        isEnabled: function () { return true; }
    };
    KeybindingContexts.DEFAULT_CONTEXT = {
        id: 'default.keybinding.context',
        isEnabled: function () { return false; }
    };
})(KeybindingContexts = exports.KeybindingContexts || (exports.KeybindingContexts = {}));
var KeybindingRegistry = /** @class */ (function () {
    function KeybindingRegistry() {
        this.keySequence = [];
        this.contexts = {};
        this.keymaps = __spread(Array(KeybindingScope.length)).map(function () { return []; });
        this.keybindingsChanged = new event_1.Emitter();
        this.toResetKeymap = new Map();
    }
    KeybindingRegistry_1 = KeybindingRegistry;
    KeybindingRegistry.prototype.onStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, contribution;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.keyboardLayoutService.initialize()];
                    case 1:
                        _d.sent();
                        this.keyboardLayoutService.onKeyboardLayoutChanged(function (newLayout) {
                            _this.clearResolvedKeybindings();
                            _this.keybindingsChanged.fire(undefined);
                        });
                        this.registerContext(KeybindingContexts.NOOP_CONTEXT);
                        this.registerContext(KeybindingContexts.DEFAULT_CONTEXT);
                        this.registerContext.apply(this, __spread(this.contextProvider.getContributions()));
                        try {
                            for (_a = __values(this.contributions.getContributions()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                contribution = _b.value;
                                contribution.registerKeybindings(this);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(KeybindingRegistry.prototype, "onKeybindingsChanged", {
        /**
         * Event that is fired when the resolved keybindings change due to a different keyboard layout
         * or when a new keymap is being set
         */
        get: function () {
            return this.keybindingsChanged.event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Registers the keybinding context arguments into the application. Fails when an already registered
     * context is being registered.
     *
     * @param contexts the keybinding contexts to register into the application.
     */
    KeybindingRegistry.prototype.registerContext = function () {
        var e_2, _a;
        var contexts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            contexts[_i] = arguments[_i];
        }
        try {
            for (var contexts_1 = __values(contexts), contexts_1_1 = contexts_1.next(); !contexts_1_1.done; contexts_1_1 = contexts_1.next()) {
                var context_1 = contexts_1_1.value;
                var id = context_1.id;
                if (this.contexts[id]) {
                    this.logger.error("A keybinding context with ID " + id + " is already registered.");
                }
                else {
                    this.contexts[id] = context_1;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (contexts_1_1 && !contexts_1_1.done && (_a = contexts_1.return)) _a.call(contexts_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * Register a default keybinding to the registry.
     *
     * @param binding
     * @param override Override existed keybinding
     */
    KeybindingRegistry.prototype.registerKeybinding = function (binding, override) {
        return this.doRegisterKeybinding(binding, !!override ? KeybindingScope.DEFAULT_OVERRIDING : undefined);
    };
    /**
     * Register default keybindings to the registry
     *
     * @param bindings
     */
    KeybindingRegistry.prototype.registerKeybindings = function () {
        var bindings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bindings[_i] = arguments[_i];
        }
        return this.doRegisterKeybindings(bindings, KeybindingScope.DEFAULT);
    };
    KeybindingRegistry.prototype.unregisterKeybinding = function (keyOrBinding) {
        var key = exports.Keybinding.is(keyOrBinding) ? keyOrBinding.keybinding : keyOrBinding;
        var keymap = this.keymaps[KeybindingScope.DEFAULT];
        var bindings = keymap.filter(function (el) { return el.keybinding === key; });
        bindings.forEach(function (binding) {
            var idx = keymap.indexOf(binding);
            if (idx >= 0) {
                keymap.splice(idx, 1);
            }
        });
    };
    KeybindingRegistry.prototype.doRegisterKeybindings = function (bindings, scope) {
        var e_3, _a;
        if (scope === void 0) { scope = KeybindingScope.DEFAULT; }
        var toDispose = new disposable_1.DisposableCollection();
        try {
            for (var bindings_1 = __values(bindings), bindings_1_1 = bindings_1.next(); !bindings_1_1.done; bindings_1_1 = bindings_1.next()) {
                var binding = bindings_1_1.value;
                toDispose.push(this.doRegisterKeybinding(binding, scope));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (bindings_1_1 && !bindings_1_1.done && (_a = bindings_1.return)) _a.call(bindings_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return toDispose;
    };
    KeybindingRegistry.prototype.doRegisterKeybinding = function (binding, scope) {
        var _this = this;
        if (scope === void 0) { scope = KeybindingScope.DEFAULT; }
        try {
            this.resolveKeybinding(binding);
            if (this.containsKeybinding(this.keymaps[scope], binding) && scope !== KeybindingScope.DEFAULT_OVERRIDING) {
                throw new Error("\"" + binding.keybinding + "\" is in collision with something else [scope:" + scope + "]");
            }
            this.keymaps[scope].push(binding);
            return disposable_1.Disposable.create(function () {
                var index = _this.keymaps[scope].indexOf(binding);
                if (index !== -1) {
                    _this.keymaps[scope].splice(index, 1);
                }
            });
        }
        catch (error) {
            this.logger.warn("Could not register keybinding:\n  " + exports.Keybinding.stringify(binding) + "\n" + error);
            return disposable_1.Disposable.NULL;
        }
    };
    /**
     * Ensure that the `resolved` property of the given binding is set by calling the KeyboardLayoutService.
     */
    KeybindingRegistry.prototype.resolveKeybinding = function (binding) {
        var _this = this;
        if (!binding.resolved) {
            var sequence = keys_1.KeySequence.parse(binding.keybinding);
            binding.resolved = sequence.map(function (code) { return _this.keyboardLayoutService.resolveKeyCode(code); });
        }
        return binding.resolved;
    };
    /**
     * Clear all `resolved` properties of registered keybindings so the KeyboardLayoutService is called
     * again to resolve them. This is necessary when the user's keyboard layout has changed.
     */
    KeybindingRegistry.prototype.clearResolvedKeybindings = function () {
        for (var i = KeybindingScope.DEFAULT; i < KeybindingScope.END; i++) {
            var bindings = this.keymaps[i];
            for (var j = 0; j < bindings.length; j++) {
                var binding = bindings[j];
                binding.resolved = undefined;
            }
        }
    };
    /**
     * Checks for keySequence collisions in a list of Keybindings
     *
     * @param bindings the keybinding reference list
     * @param binding the keybinding to test collisions for
     */
    KeybindingRegistry.prototype.containsKeybinding = function (bindings, binding) {
        var bindingKeySequence = this.resolveKeybinding(binding);
        var collisions = this.getKeySequenceCollisions(bindings, bindingKeySequence)
            .filter(function (b) { return b.context === binding.context && !b.when && !binding.when; });
        if (collisions.full.length > 0) {
            this.logger.warn('Collided keybinding is ignored; ', exports.Keybinding.stringify(binding), ' collided with ', collisions.full.map(function (b) { return exports.Keybinding.stringify(b); }).join(', '));
            return true;
        }
        if (collisions.partial.length > 0) {
            this.logger.warn('Shadowing keybinding is ignored; ', exports.Keybinding.stringify(binding), ' shadows ', collisions.partial.map(function (b) { return exports.Keybinding.stringify(b); }).join(', '));
            return true;
        }
        if (collisions.shadow.length > 0) {
            this.logger.warn('Shadowed keybinding is ignored; ', exports.Keybinding.stringify(binding), ' would be shadowed by ', collisions.shadow.map(function (b) { return exports.Keybinding.stringify(b); }).join(', '));
            return true;
        }
        return false;
    };
    KeybindingRegistry.prototype.containsKeybindingInScope = function (binding, scope) {
        if (scope === void 0) { scope = KeybindingScope.USER; }
        return this.containsKeybinding(this.keymaps[scope], binding);
    };
    /**
     * Return a user visible representation of a keybinding.
     */
    KeybindingRegistry.prototype.acceleratorFor = function (keybinding, separator) {
        if (separator === void 0) { separator = ' '; }
        var bindingKeySequence = this.resolveKeybinding(keybinding);
        return this.acceleratorForSequence(bindingKeySequence, separator);
    };
    /**
     * Return a user visible representation of a key sequence.
     */
    KeybindingRegistry.prototype.acceleratorForSequence = function (keySequence, separator) {
        var _this = this;
        if (separator === void 0) { separator = ' '; }
        return keySequence.map(function (keyCode) { return _this.acceleratorForKeyCode(keyCode, separator); });
    };
    /**
     * Return a user visible representation of a key code (a key with modifiers).
     */
    KeybindingRegistry.prototype.acceleratorForKeyCode = function (keyCode, separator) {
        if (separator === void 0) { separator = ' '; }
        var keyCodeResult = [];
        if (keyCode.meta && os_1.isOSX) {
            keyCodeResult.push('Cmd');
        }
        if (keyCode.ctrl) {
            keyCodeResult.push('Ctrl');
        }
        if (keyCode.alt) {
            keyCodeResult.push('Alt');
        }
        if (keyCode.shift) {
            keyCodeResult.push('Shift');
        }
        if (keyCode.key) {
            keyCodeResult.push(this.acceleratorForKey(keyCode.key));
        }
        return keyCodeResult.join(separator);
    };
    /**
     * Return a user visible representation of a single key.
     */
    KeybindingRegistry.prototype.acceleratorForKey = function (key) {
        if (os_1.isOSX) {
            if (key === keys_1.Key.ARROW_LEFT) {
                return '←';
            }
            if (key === keys_1.Key.ARROW_RIGHT) {
                return '→';
            }
            if (key === keys_1.Key.ARROW_UP) {
                return '↑';
            }
            if (key === keys_1.Key.ARROW_DOWN) {
                return '↓';
            }
        }
        var keyString = this.keyboardLayoutService.getKeyboardCharacter(key);
        if (key.keyCode >= keys_1.Key.KEY_A.keyCode && key.keyCode <= keys_1.Key.KEY_Z.keyCode ||
            key.keyCode >= keys_1.Key.F1.keyCode && key.keyCode <= keys_1.Key.F24.keyCode) {
            return keyString.toUpperCase();
        }
        else if (keyString.length > 1) {
            return keyString.charAt(0).toUpperCase() + keyString.slice(1);
        }
        else {
            return keyString;
        }
    };
    /**
     * Finds collisions for a binding inside a list of bindings (error-free)
     *
     * @param bindings the reference bindings
     * @param binding the binding to match
     */
    KeybindingRegistry.prototype.getKeybindingCollisions = function (bindings, binding) {
        var result = new KeybindingRegistry_1.KeybindingsResult();
        try {
            var bindingKeySequence = this.resolveKeybinding(binding);
            result.merge(this.getKeySequenceCollisions(bindings, bindingKeySequence));
        }
        catch (error) {
            this.logger.warn(error);
        }
        return result;
    };
    /**
     * Finds collisions for a key sequence inside a list of bindings (error-free)
     *
     * @param bindings the reference bindings
     * @param candidate the sequence to match
     */
    KeybindingRegistry.prototype.getKeySequenceCollisions = function (bindings, candidate) {
        var e_4, _a;
        var result = new KeybindingRegistry_1.KeybindingsResult();
        try {
            for (var bindings_2 = __values(bindings), bindings_2_1 = bindings_2.next(); !bindings_2_1.done; bindings_2_1 = bindings_2.next()) {
                var binding = bindings_2_1.value;
                try {
                    var bindingKeySequence = this.resolveKeybinding(binding);
                    var compareResult = keys_1.KeySequence.compare(candidate, bindingKeySequence);
                    switch (compareResult) {
                        case keys_1.KeySequence.CompareResult.FULL: {
                            result.full.push(binding);
                            break;
                        }
                        case keys_1.KeySequence.CompareResult.PARTIAL: {
                            result.partial.push(binding);
                            break;
                        }
                        case keys_1.KeySequence.CompareResult.SHADOW: {
                            result.shadow.push(binding);
                            break;
                        }
                    }
                }
                catch (error) {
                    this.logger.warn(error);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (bindings_2_1 && !bindings_2_1.done && (_a = bindings_2.return)) _a.call(bindings_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result;
    };
    /**
     * Get the lists of keybindings matching fully or partially matching a KeySequence.
     * The lists are sorted by priority (see #sortKeybindingsByPriority).
     *
     * @param keySequence The key sequence for which we are looking for keybindings.
     * @param event The source keyboard event.
     */
    KeybindingRegistry.prototype.getKeybindingsForKeySequence = function (keySequence, event) {
        var _this = this;
        var result = new KeybindingRegistry_1.KeybindingsResult();
        var _loop_1 = function (scope) {
            var matches = this_1.getKeySequenceCollisions(this_1.keymaps[scope], keySequence);
            matches.full = matches.full.filter(function (binding) { return (!event || _this.isEnabled(binding, event)) && _this.getKeybindingCollisions(result.full, binding).full.length === 0; });
            matches.partial = matches.partial.filter(function (binding) { return (!event || _this.isEnabled(binding, event)) && _this.getKeybindingCollisions(result.partial, binding).partial.length === 0; });
            if (scope === KeybindingScope.DEFAULT_OVERRIDING) {
                matches.full.reverse();
                matches.partial.reverse();
            }
            matches.full.forEach(function (binding) { return binding.scope = scope; });
            matches.partial.forEach(function (binding) { return binding.scope = scope; });
            result.merge(matches);
        };
        var this_1 = this;
        for (var scope = KeybindingScope.END; --scope >= KeybindingScope.DEFAULT;) {
            _loop_1(scope);
        }
        this.sortKeybindingsByPriority(result.full);
        this.sortKeybindingsByPriority(result.partial);
        return result;
    };
    /**
     * Get the keybindings associated to commandId.
     *
     * @param commandId The ID of the command for which we are looking for keybindings.
     */
    KeybindingRegistry.prototype.getKeybindingsForCommand = function (commandId) {
        var _this = this;
        var result = [];
        var _loop_2 = function (scope) {
            this_2.keymaps[scope].forEach(function (binding) {
                var command = _this.commandRegistry.getCommand(binding.command);
                if (command) {
                    if (command.id === commandId) {
                        result.push(__assign(__assign({}, binding), { scope: scope }));
                    }
                }
            });
            if (result.length > 0) {
                return { value: result };
            }
        };
        var this_2 = this;
        for (var scope = KeybindingScope.END - 1; scope >= KeybindingScope.DEFAULT; scope--) {
            var state_1 = _loop_2(scope);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return result;
    };
    /**
     * Returns a list of keybindings for a command in a specific scope
     * @param scope specific scope to look for
     * @param commandId unique id of the command
     */
    KeybindingRegistry.prototype.getScopedKeybindingsForCommand = function (scope, commandId) {
        var _this = this;
        var result = [];
        if (scope >= KeybindingScope.END) {
            return [];
        }
        this.keymaps[scope].forEach(function (binding) {
            var command = _this.commandRegistry.getCommand(binding.command);
            if (command && command.id === commandId) {
                result.push(binding);
            }
        });
        return result;
    };
    /**
     * Sort keybindings in-place, in order of priority.
     *
     * The only criterion right now is that a keybinding with a context has
     * more priority than a keybinding with no context.
     *
     * @param keybindings Array of keybindings to be sorted in-place.
     */
    KeybindingRegistry.prototype.sortKeybindingsByPriority = function (keybindings) {
        var _this = this;
        keybindings.sort(function (a, b) {
            var acontext;
            if (a.context) {
                acontext = _this.contexts[a.context];
            }
            var bcontext;
            if (b.context) {
                bcontext = _this.contexts[b.context];
            }
            if (acontext && !bcontext) {
                return -1;
            }
            if (!acontext && bcontext) {
                return 1;
            }
            return 0;
        });
    };
    KeybindingRegistry.prototype.isActive = function (binding) {
        /* Pseudo commands like "passthrough" are always active (and not found
           in the command registry).  */
        if (this.isPseudoCommand(binding.command)) {
            return true;
        }
        var command = this.commandRegistry.getCommand(binding.command);
        return !!command && !!this.commandRegistry.getActiveHandler(command.id);
    };
    /**
     * Tries to execute a keybinding.
     *
     * @param binding to execute
     * @param event keyboard event.
     */
    KeybindingRegistry.prototype.executeKeyBinding = function (binding, event) {
        if (this.isPseudoCommand(binding.command)) {
            /* Don't do anything, let the event propagate.  */
        }
        else {
            var command = this.commandRegistry.getCommand(binding.command);
            if (command) {
                var commandHandler = this.commandRegistry.getActiveHandler(command.id, binding.args);
                if (commandHandler) {
                    commandHandler.execute(binding.args);
                }
                /* Note that if a keybinding is in context but the command is
                   not active we still stop the processing here.  */
                event.preventDefault();
                event.stopPropagation();
            }
        }
    };
    /**
     * Only execute if it has no context (global context) or if we're in that context.
     */
    KeybindingRegistry.prototype.isEnabled = function (binding, event) {
        var context = binding.context && this.contexts[binding.context];
        if (context && !context.isEnabled(binding)) {
            return false;
        }
        if (binding.when && !this.whenContextService.match(binding.when, event.target)) {
            return false;
        }
        return true;
    };
    /**
     * Run the command matching to the given keyboard event.
     */
    KeybindingRegistry.prototype.run = function (event) {
        var _this = this;
        if (event.defaultPrevented) {
            return;
        }
        var keyCode = keys_1.KeyCode.createKeyCode(event);
        /* Keycode is only a modifier, next keycode will be modifier + key.
           Ignore this one.  */
        if (keyCode.isModifierOnly()) {
            return;
        }
        this.keyboardLayoutService.validateKeyCode(keyCode);
        this.keySequence.push(keyCode);
        var bindings = this.getKeybindingsForKeySequence(this.keySequence, event);
        var full = bindings.full.find(function (binding) { return _this.isEnabled(binding, event); });
        var partial = bindings.partial.find(function (binding) { return (!full || binding.scope > full.scope) && _this.isEnabled(binding, event); });
        if (partial) {
            /* Accumulate the keysequence */
            event.preventDefault();
            event.stopPropagation();
            this.statusBar.setElement('keybinding-status', {
                text: "(" + this.acceleratorForSequence(this.keySequence, '+') + ") was pressed, waiting for more keys",
                alignment: status_bar_1.StatusBarAlignment.LEFT,
                priority: 2
            });
        }
        else {
            if (full) {
                this.executeKeyBinding(full, event);
            }
            this.keySequence = [];
            this.statusBar.removeElement('keybinding-status');
        }
    };
    /**
     * Return true of string a pseudo-command id, in other words a command id
     * that has a special meaning and that we won't find in the command
     * registry.
     *
     * @param commandId commandId to test
     */
    KeybindingRegistry.prototype.isPseudoCommand = function (commandId) {
        return commandId === KeybindingRegistry_1.PASSTHROUGH_PSEUDO_COMMAND;
    };
    KeybindingRegistry.prototype.setKeymap = function (scope, bindings) {
        this.resetKeybindingsForScope(scope);
        this.toResetKeymap.set(scope, this.doRegisterKeybindings(bindings, scope));
        this.keybindingsChanged.fire(undefined);
    };
    /**
     * Reset keybindings for a specific scope
     * @param scope scope to reset the keybindings for
     */
    KeybindingRegistry.prototype.resetKeybindingsForScope = function (scope) {
        var toReset = this.toResetKeymap.get(scope);
        if (toReset) {
            toReset.dispose();
        }
    };
    /**
     * Reset keybindings for all scopes(only leaves the default keybindings mapped)
     */
    KeybindingRegistry.prototype.resetKeybindings = function () {
        for (var i = KeybindingScope.DEFAULT + 1; i < KeybindingScope.END; i++) {
            this.keymaps[i] = [];
        }
    };
    var KeybindingRegistry_1;
    KeybindingRegistry.PASSTHROUGH_PSEUDO_COMMAND = 'passthrough';
    __decorate([
        inversify_1.inject(keyboard_layout_service_1.KeyboardLayoutService),
        __metadata("design:type", keyboard_layout_service_1.KeyboardLayoutService)
    ], KeybindingRegistry.prototype, "keyboardLayoutService", void 0);
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider), inversify_1.named(exports.KeybindingContext),
        __metadata("design:type", Object)
    ], KeybindingRegistry.prototype, "contextProvider", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], KeybindingRegistry.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider), inversify_1.named(exports.KeybindingContribution),
        __metadata("design:type", Object)
    ], KeybindingRegistry.prototype, "contributions", void 0);
    __decorate([
        inversify_1.inject(status_bar_1.StatusBar),
        __metadata("design:type", Object)
    ], KeybindingRegistry.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], KeybindingRegistry.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], KeybindingRegistry.prototype, "whenContextService", void 0);
    KeybindingRegistry = KeybindingRegistry_1 = __decorate([
        inversify_1.injectable()
    ], KeybindingRegistry);
    return KeybindingRegistry;
}());
exports.KeybindingRegistry = KeybindingRegistry;
(function (KeybindingRegistry) {
    var KeybindingsResult = /** @class */ (function () {
        function KeybindingsResult() {
            this.full = [];
            this.partial = [];
            this.shadow = [];
        }
        /**
         * Merge two results together inside `this`
         *
         * @param other the other KeybindingsResult to merge with
         * @return this
         */
        KeybindingsResult.prototype.merge = function (other) {
            var _a, _b, _c;
            (_a = this.full).push.apply(_a, __spread(other.full));
            (_b = this.partial).push.apply(_b, __spread(other.partial));
            (_c = this.shadow).push.apply(_c, __spread(other.shadow));
            return this;
        };
        /**
         * Returns a new filtered KeybindingsResult
         *
         * @param fn callback filter on the results
         * @return filtered new result
         */
        KeybindingsResult.prototype.filter = function (fn) {
            var result = new KeybindingsResult();
            result.full = this.full.filter(fn);
            result.partial = this.partial.filter(fn);
            result.shadow = this.shadow.filter(fn);
            return result;
        };
        return KeybindingsResult;
    }());
    KeybindingRegistry.KeybindingsResult = KeybindingsResult;
})(KeybindingRegistry = exports.KeybindingRegistry || (exports.KeybindingRegistry = {}));
exports.KeybindingRegistry = KeybindingRegistry;
//# sourceMappingURL=keybinding.js.map
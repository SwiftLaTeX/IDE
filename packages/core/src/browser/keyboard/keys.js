"use strict";
/********************************************************************************
 * Copyright (C) 2017-2019 TypeFox and others.
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
var os_1 = require("../../common/os");
var KeySequence;
(function (KeySequence) {
    function equals(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!a[i].equals(b[i])) {
                return false;
            }
        }
        return true;
    }
    KeySequence.equals = equals;
    var CompareResult;
    (function (CompareResult) {
        CompareResult[CompareResult["NONE"] = 0] = "NONE";
        CompareResult[CompareResult["PARTIAL"] = 1] = "PARTIAL";
        CompareResult[CompareResult["SHADOW"] = 2] = "SHADOW";
        CompareResult[CompareResult["FULL"] = 3] = "FULL";
    })(CompareResult = KeySequence.CompareResult || (KeySequence.CompareResult = {}));
    /* Compares two KeySequences, returns:
     * FULL if the KeySequences are the same.
     * PARTIAL if the KeySequence a part of b.
     * SHADOW if the KeySequence b part of a.
     * NONE if the KeySequences are not the same at all.
     */
    function compare(a, b) {
        var first = a;
        var second = b;
        var shadow = false;
        if (b.length < a.length) {
            first = b;
            second = a;
            shadow = true;
        }
        for (var i = 0; i < first.length; i++) {
            if (first[i].equals(second[i]) === false) {
                return KeySequence.CompareResult.NONE;
            }
        }
        if (first.length < second.length) {
            if (shadow === false) {
                return KeySequence.CompareResult.PARTIAL;
            }
            else {
                return KeySequence.CompareResult.SHADOW;
            }
        }
        return KeySequence.CompareResult.FULL;
    }
    KeySequence.compare = compare;
    function parse(keybinding) {
        var e_1, _a;
        var keyCodes = [];
        var rawKeyCodes = keybinding.trim().split(/\s+/g);
        try {
            for (var rawKeyCodes_1 = __values(rawKeyCodes), rawKeyCodes_1_1 = rawKeyCodes_1.next(); !rawKeyCodes_1_1.done; rawKeyCodes_1_1 = rawKeyCodes_1.next()) {
                var rawKeyCode = rawKeyCodes_1_1.value;
                var keyCode = KeyCode.parse(rawKeyCode);
                if (keyCode !== undefined) {
                    keyCodes.push(keyCode);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rawKeyCodes_1_1 && !rawKeyCodes_1_1.done && (_a = rawKeyCodes_1.return)) _a.call(rawKeyCodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return keyCodes;
    }
    KeySequence.parse = parse;
})(KeySequence = exports.KeySequence || (exports.KeySequence = {}));
/**
 * Representation of a pressed key combined with key modifiers.
 */
var KeyCode = /** @class */ (function () {
    function KeyCode(schema) {
        var key = schema.key;
        if (key) {
            if (key.code && key.keyCode && key.easyString) {
                this.key = key;
            }
            else if (key.code) {
                this.key = Key.getKey(key.code);
            }
            else if (key.keyCode) {
                this.key = Key.getKey(key.keyCode);
            }
        }
        this.ctrl = !!schema.ctrl;
        this.shift = !!schema.shift;
        this.alt = !!schema.alt;
        this.meta = !!schema.meta;
        this.character = schema.character;
    }
    /**
     * Return true if this KeyCode only contains modifiers.
     */
    KeyCode.prototype.isModifierOnly = function () {
        return this.key === undefined;
    };
    /**
     * Return true if the given KeyCode is equal to this one.
     */
    KeyCode.prototype.equals = function (other) {
        if (this.key && (!other.key || this.key.code !== other.key.code) || !this.key && other.key) {
            return false;
        }
        return this.ctrl === other.ctrl && this.alt === other.alt && this.shift === other.shift && this.meta === other.meta;
    };
    /*
     * Return a keybinding string compatible with the `Keybinding.keybinding` property.
     */
    KeyCode.prototype.toString = function () {
        var result = [];
        if (this.meta) {
            result.push(SpecialCases.META);
        }
        if (this.shift) {
            result.push(Key.SHIFT_LEFT.easyString);
        }
        if (this.alt) {
            result.push(Key.ALT_LEFT.easyString);
        }
        if (this.ctrl) {
            result.push(Key.CONTROL_LEFT.easyString);
        }
        if (this.key) {
            result.push(this.key.easyString);
        }
        return result.join('+');
    };
    /**
     * Create a KeyCode from one of several input types.
     */
    KeyCode.createKeyCode = function (input) {
        if (typeof input === 'string') {
            var parts = input.split('+');
            if (!KeyCode.isModifierString(parts[0])) {
                return KeyCode.createKeyCode({
                    first: Key.getKey(parts[0]),
                    modifiers: parts.slice(1)
                });
            }
            return KeyCode.createKeyCode({ modifiers: parts });
        }
        else if (KeyCode.isKeyboardEvent(input)) {
            var key = KeyCode.toKey(input);
            return new KeyCode({
                key: Key.isModifier(key.code) ? undefined : key,
                meta: os_1.isOSX && input.metaKey,
                shift: input.shiftKey,
                alt: input.altKey,
                ctrl: input.ctrlKey,
                character: KeyCode.toCharacter(input)
            });
        }
        else if (input.first || input.modifiers) {
            var keystroke = input;
            var schema = {
                key: keystroke.first
            };
            if (keystroke.modifiers) {
                if (os_1.isOSX) {
                    schema.meta = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.CtrlCmd; });
                    schema.ctrl = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.MacCtrl; });
                }
                else {
                    schema.meta = false;
                    schema.ctrl = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.CtrlCmd; });
                }
                schema.shift = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.Shift; });
                schema.alt = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.Alt; });
            }
            return new KeyCode(schema);
        }
        else {
            return new KeyCode(input);
        }
    };
    /* Reset the key hashmap, this is for testing purposes.  */
    KeyCode.resetKeyBindings = function () {
        KeyCode.keybindings = {};
    };
    /**
     * Parses a string and returns a KeyCode object.
     * @param keybinding String representation of a keybinding
     */
    KeyCode.parse = function (keybinding) {
        var e_2, _a, e_3, _b;
        if (KeyCode.keybindings[keybinding]) {
            return KeyCode.keybindings[keybinding];
        }
        var schema = {};
        var keys = [];
        var currentKey = '';
        try {
            for (var _c = __values(keybinding.trim().toLowerCase()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var character = _d.value;
                if (currentKey && (character === '-' || character === '+')) {
                    keys.push(currentKey);
                    currentKey = '';
                }
                else if (character !== '+') {
                    currentKey += character;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (currentKey) {
            keys.push(currentKey);
        }
        /* If duplicates i.e ctrl+ctrl+a or alt+alt+b or b+alt+b it is invalid */
        if (keys.length !== new Set(keys).size) {
            throw new Error("Can't parse keybinding " + keybinding + " Duplicate modifiers");
        }
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var keyString = keys_1_1.value;
                if (SPECIAL_ALIASES[keyString] !== undefined) {
                    keyString = SPECIAL_ALIASES[keyString];
                }
                var key = EASY_TO_KEY[keyString];
                /* meta only works on macOS */
                if (keyString === SpecialCases.META) {
                    if (os_1.isOSX) {
                        schema.meta = true;
                    }
                    else {
                        throw new Error("Can't parse keybinding " + keybinding + " meta is for OSX only");
                    }
                    /* ctrlcmd for M1 keybindings that work on both macOS and other platforms */
                }
                else if (keyString === SpecialCases.CTRLCMD) {
                    if (os_1.isOSX) {
                        schema.meta = true;
                    }
                    else {
                        schema.ctrl = true;
                    }
                }
                else if (Key.isKey(key)) {
                    if (Key.isModifier(key.code)) {
                        if (key.code === Key.CONTROL_LEFT.code || key.code === Key.CONTROL_RIGHT.code) {
                            schema.ctrl = true;
                        }
                        else if (key.code === Key.SHIFT_LEFT.code || key.code === Key.SHIFT_RIGHT.code) {
                            schema.shift = true;
                        }
                        else if (key.code === Key.ALT_LEFT.code || key.code === Key.ALT_RIGHT.code) {
                            schema.alt = true;
                        }
                    }
                    else {
                        schema.key = key;
                    }
                }
                else {
                    throw new Error("Unrecognized key '" + keyString + "' in '" + keybinding + "'");
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_b = keys_1.return)) _b.call(keys_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        KeyCode.keybindings[keybinding] = new KeyCode(schema);
        return KeyCode.keybindings[keybinding];
    };
    KeyCode.keybindings = {};
    return KeyCode;
}());
exports.KeyCode = KeyCode;
(function (KeyCode) {
    /*
     * Return true if the string is a modifier M1 to M4.
     */
    function isModifierString(key) {
        return key === KeyModifier.CtrlCmd
            || key === KeyModifier.Shift
            || key === KeyModifier.Alt
            || key === KeyModifier.MacCtrl;
    }
    KeyCode.isModifierString = isModifierString;
    /**
     * Different scopes have different execution environments. This means that they have different built-ins
     * (different global object, different constructors, etc.). This may result in unexpected results. For instance,
     * `[] instanceof window.frames[0].Array` will return `false`, because `Array.prototype !== window.frames[0].Array`
     * and arrays inherit from the former.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     *
     * Note: just add another check if the current `event.type` checking is insufficient.
     */
    function isKeyboardEvent(event) {
        if (typeof KeyboardEvent === 'undefined') { // This can happen in tests
            return false;
        }
        if (event instanceof KeyboardEvent) {
            return true;
        }
        var type = event.type;
        if (type) {
            return type === 'keypress' || type === 'keydown' || type === 'keyup';
        }
        return false;
    }
    KeyCode.isKeyboardEvent = isKeyboardEvent;
    /**
     * Determine the pressed key of a keyboard event. This key should correspond to the physical key according
     * to a standard US keyboard layout. International keyboard layouts are handled by `KeyboardLayoutService`.
     *
     * `keyIdentifier` is used to access this deprecated field:
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyIdentifier
     */
    function toKey(event) {
        var code = event.code;
        if (code) {
            if (os_1.isOSX) {
                // https://github.com/eclipse-theia/theia/issues/4986
                var char = event.key;
                if (code === 'IntlBackslash' && (char === '`' || char === '~')) {
                    return Key.BACKQUOTE;
                }
                else if (code === 'Backquote' && (char === '§' || char === '±')) {
                    return Key.INTL_BACKSLASH;
                }
            }
            var key = Key.getKey(code);
            if (key) {
                return key;
            }
        }
        // tslint:disable-next-line: deprecation
        var keyCode = event.keyCode;
        if (keyCode) {
            var key = Key.getKey(keyCode);
            if (key) {
                return key;
            }
        }
        var keyIdentifier = event.keyIdentifier;
        if (keyIdentifier) {
            var key = Key.getKey(keyIdentifier);
            if (key) {
                return key;
            }
        }
        throw new Error("Cannot get key code from the keyboard event: " + event + ".");
    }
    KeyCode.toKey = toKey;
    /**
     * Determine the actual printable character that is generated from a pressed key.
     * If the key does not correspond to a printable character, `undefined` is returned.
     * The result may be altered by modifier keys.
     */
    function toCharacter(event) {
        var key = event.key;
        // Use the key property if it contains exactly one unicode character
        if (key && Array.from(key).length === 1) {
            return key;
        }
        var charCode = event.charCode;
        // Use the charCode property if it does not correspond to a unicode control character
        if (charCode && charCode > 0x1f && !(charCode >= 0x80 && charCode <= 0x9f)) {
            return String.fromCharCode(charCode);
        }
        return undefined;
    }
    KeyCode.toCharacter = toCharacter;
})(KeyCode = exports.KeyCode || (exports.KeyCode = {}));
exports.KeyCode = KeyCode;
var KeyModifier;
(function (KeyModifier) {
    /**
     * M1 is the COMMAND key on MacOS X, and the CTRL key on most other platforms.
     */
    KeyModifier["CtrlCmd"] = "M1";
    /**
     * M2 is the SHIFT key.
     */
    KeyModifier["Shift"] = "M2";
    /**
     * M3 is the Option key on MacOS X, and the ALT key on most other platforms.
     */
    KeyModifier["Alt"] = "M3";
    /**
     * M4 is the CTRL key on MacOS X, and is undefined on other platforms.
     */
    KeyModifier["MacCtrl"] = "M4";
})(KeyModifier = exports.KeyModifier || (exports.KeyModifier = {}));
(function (KeyModifier) {
    /**
     * The CTRL key, independently of the platform.
     * _Note:_ In general `KeyModifier.CtrlCmd` should be preferred over this constant.
     */
    KeyModifier.CTRL = os_1.isOSX ? KeyModifier.MacCtrl : KeyModifier.CtrlCmd;
    /**
     * An alias for the SHIFT key (`KeyModifier.Shift`).
     */
    KeyModifier.SHIFT = KeyModifier.Shift;
    /**
     * `true` if the argument represents a modifier. Otherwise, `false`.
     */
    function isModifier(key) {
        if (key) {
            switch (key) {
                case 'M1': // Fall through.
                case 'M2': // Fall through.
                case 'M3': // Fall through.
                case 'M4': return true;
                default: return false;
            }
        }
        return false;
    }
    KeyModifier.isModifier = isModifier;
})(KeyModifier = exports.KeyModifier || (exports.KeyModifier = {}));
var CODE_TO_KEY = {};
var KEY_CODE_TO_KEY = {};
var EASY_TO_KEY = {}; // From 'ctrl' to Key structure
var MODIFIERS = [];
var SPECIAL_ALIASES = {
    'option': 'alt',
    'command': 'meta',
    'cmd': 'meta',
    'return': 'enter',
    'esc': 'escape',
    'mod': 'ctrl',
    'ins': 'insert',
    'del': 'delete',
    'control': 'ctrl',
};
var SpecialCases;
(function (SpecialCases) {
    SpecialCases.META = 'meta';
    SpecialCases.CTRLCMD = 'ctrlcmd';
})(SpecialCases = exports.SpecialCases || (exports.SpecialCases = {}));
var Key;
(function (Key) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isKey(arg) {
        return typeof arg === 'object' && ('code' in arg) && ('keyCode' in arg);
    }
    Key.isKey = isKey;
    function getKey(arg) {
        if (typeof arg === 'number') {
            return KEY_CODE_TO_KEY[arg];
        }
        else {
            return CODE_TO_KEY[arg];
        }
    }
    Key.getKey = getKey;
    function isModifier(arg) {
        if (typeof arg === 'number') {
            return MODIFIERS.find(function (key) { return key.keyCode === arg; }) !== undefined;
        }
        return MODIFIERS.find(function (key) { return key.code === arg; }) !== undefined;
    }
    Key.isModifier = isModifier;
    function equals(key, keyCode) {
        return !!keyCode.key && key.keyCode === keyCode.key.keyCode;
    }
    Key.equals = equals;
    Key.BACKSPACE = { code: 'Backspace', keyCode: 8, easyString: 'backspace' };
    Key.TAB = { code: 'Tab', keyCode: 9, easyString: 'tab' };
    Key.ENTER = { code: 'Enter', keyCode: 13, easyString: 'enter' };
    Key.ESCAPE = { code: 'Escape', keyCode: 27, easyString: 'escape' };
    Key.SPACE = { code: 'Space', keyCode: 32, easyString: 'space' };
    Key.PAGE_UP = { code: 'PageUp', keyCode: 33, easyString: 'pageup' };
    Key.PAGE_DOWN = { code: 'PageDown', keyCode: 34, easyString: 'pagedown' };
    Key.END = { code: 'End', keyCode: 35, easyString: 'end' };
    Key.HOME = { code: 'Home', keyCode: 36, easyString: 'home' };
    Key.ARROW_LEFT = { code: 'ArrowLeft', keyCode: 37, easyString: 'left' };
    Key.ARROW_UP = { code: 'ArrowUp', keyCode: 38, easyString: 'up' };
    Key.ARROW_RIGHT = { code: 'ArrowRight', keyCode: 39, easyString: 'right' };
    Key.ARROW_DOWN = { code: 'ArrowDown', keyCode: 40, easyString: 'down' };
    Key.INSERT = { code: 'Insert', keyCode: 45, easyString: 'insert' };
    Key.DELETE = { code: 'Delete', keyCode: 46, easyString: 'delete' };
    Key.SHIFT_LEFT = { code: 'ShiftLeft', keyCode: 16, easyString: 'shift' };
    Key.SHIFT_RIGHT = { code: 'ShiftRight', keyCode: 16, easyString: 'shift' };
    Key.CONTROL_LEFT = { code: 'ControlLeft', keyCode: 17, easyString: 'ctrl' };
    Key.CONTROL_RIGHT = { code: 'ControlRight', keyCode: 17, easyString: 'ctrl' };
    Key.ALT_LEFT = { code: 'AltLeft', keyCode: 18, easyString: 'alt' };
    Key.ALT_RIGHT = { code: 'AltRight', keyCode: 18, easyString: 'alt' };
    Key.CAPS_LOCK = { code: 'CapsLock', keyCode: 20, easyString: 'capslock' };
    Key.OS_LEFT = { code: 'OSLeft', keyCode: 91, easyString: 'super' };
    Key.OS_RIGHT = { code: 'OSRight', keyCode: 92, easyString: 'super' };
    Key.DIGIT0 = { code: 'Digit0', keyCode: 48, easyString: '0' };
    Key.DIGIT1 = { code: 'Digit1', keyCode: 49, easyString: '1' };
    Key.DIGIT2 = { code: 'Digit2', keyCode: 50, easyString: '2' };
    Key.DIGIT3 = { code: 'Digit3', keyCode: 51, easyString: '3' };
    Key.DIGIT4 = { code: 'Digit4', keyCode: 52, easyString: '4' };
    Key.DIGIT5 = { code: 'Digit5', keyCode: 53, easyString: '5' };
    Key.DIGIT6 = { code: 'Digit6', keyCode: 54, easyString: '6' };
    Key.DIGIT7 = { code: 'Digit7', keyCode: 55, easyString: '7' };
    Key.DIGIT8 = { code: 'Digit8', keyCode: 56, easyString: '8' };
    Key.DIGIT9 = { code: 'Digit9', keyCode: 57, easyString: '9' };
    Key.KEY_A = { code: 'KeyA', keyCode: 65, easyString: 'a' };
    Key.KEY_B = { code: 'KeyB', keyCode: 66, easyString: 'b' };
    Key.KEY_C = { code: 'KeyC', keyCode: 67, easyString: 'c' };
    Key.KEY_D = { code: 'KeyD', keyCode: 68, easyString: 'd' };
    Key.KEY_E = { code: 'KeyE', keyCode: 69, easyString: 'e' };
    Key.KEY_F = { code: 'KeyF', keyCode: 70, easyString: 'f' };
    Key.KEY_G = { code: 'KeyG', keyCode: 71, easyString: 'g' };
    Key.KEY_H = { code: 'KeyH', keyCode: 72, easyString: 'h' };
    Key.KEY_I = { code: 'KeyI', keyCode: 73, easyString: 'i' };
    Key.KEY_J = { code: 'KeyJ', keyCode: 74, easyString: 'j' };
    Key.KEY_K = { code: 'KeyK', keyCode: 75, easyString: 'k' };
    Key.KEY_L = { code: 'KeyL', keyCode: 76, easyString: 'l' };
    Key.KEY_M = { code: 'KeyM', keyCode: 77, easyString: 'm' };
    Key.KEY_N = { code: 'KeyN', keyCode: 78, easyString: 'n' };
    Key.KEY_O = { code: 'KeyO', keyCode: 79, easyString: 'o' };
    Key.KEY_P = { code: 'KeyP', keyCode: 80, easyString: 'p' };
    Key.KEY_Q = { code: 'KeyQ', keyCode: 81, easyString: 'q' };
    Key.KEY_R = { code: 'KeyR', keyCode: 82, easyString: 'r' };
    Key.KEY_S = { code: 'KeyS', keyCode: 83, easyString: 's' };
    Key.KEY_T = { code: 'KeyT', keyCode: 84, easyString: 't' };
    Key.KEY_U = { code: 'KeyU', keyCode: 85, easyString: 'u' };
    Key.KEY_V = { code: 'KeyV', keyCode: 86, easyString: 'v' };
    Key.KEY_W = { code: 'KeyW', keyCode: 87, easyString: 'w' };
    Key.KEY_X = { code: 'KeyX', keyCode: 88, easyString: 'x' };
    Key.KEY_Y = { code: 'KeyY', keyCode: 89, easyString: 'y' };
    Key.KEY_Z = { code: 'KeyZ', keyCode: 90, easyString: 'z' };
    Key.MULTIPLY = { code: 'NumpadMultiply', keyCode: 106, easyString: 'multiply' };
    Key.ADD = { code: 'NumpadAdd', keyCode: 107, easyString: 'add' };
    Key.DECIMAL = { code: 'NumpadDecimal', keyCode: 108, easyString: 'decimal' };
    Key.SUBTRACT = { code: 'NumpadSubtract', keyCode: 109, easyString: 'subtract' };
    Key.DIVIDE = { code: 'NumpadDivide', keyCode: 111, easyString: 'divide' };
    Key.F1 = { code: 'F1', keyCode: 112, easyString: 'f1' };
    Key.F2 = { code: 'F2', keyCode: 113, easyString: 'f2' };
    Key.F3 = { code: 'F3', keyCode: 114, easyString: 'f3' };
    Key.F4 = { code: 'F4', keyCode: 115, easyString: 'f4' };
    Key.F5 = { code: 'F5', keyCode: 116, easyString: 'f5' };
    Key.F6 = { code: 'F6', keyCode: 117, easyString: 'f6' };
    Key.F7 = { code: 'F7', keyCode: 118, easyString: 'f7' };
    Key.F8 = { code: 'F8', keyCode: 119, easyString: 'f8' };
    Key.F9 = { code: 'F9', keyCode: 120, easyString: 'f9' };
    Key.F10 = { code: 'F10', keyCode: 121, easyString: 'f10' };
    Key.F11 = { code: 'F11', keyCode: 122, easyString: 'f11' };
    Key.F12 = { code: 'F12', keyCode: 123, easyString: 'f12' };
    Key.F13 = { code: 'F13', keyCode: 124, easyString: 'f13' };
    Key.F14 = { code: 'F14', keyCode: 125, easyString: 'f14' };
    Key.F15 = { code: 'F15', keyCode: 126, easyString: 'f15' };
    Key.F16 = { code: 'F16', keyCode: 127, easyString: 'f16' };
    Key.F17 = { code: 'F17', keyCode: 128, easyString: 'f17' };
    Key.F18 = { code: 'F18', keyCode: 129, easyString: 'f18' };
    Key.F19 = { code: 'F19', keyCode: 130, easyString: 'f19' };
    Key.F20 = { code: 'F20', keyCode: 131, easyString: 'f20' };
    Key.F21 = { code: 'F21', keyCode: 132, easyString: 'f21' };
    Key.F22 = { code: 'F22', keyCode: 133, easyString: 'f22' };
    Key.F23 = { code: 'F23', keyCode: 134, easyString: 'f23' };
    Key.F24 = { code: 'F24', keyCode: 135, easyString: 'f24' };
    Key.NUM_LOCK = { code: 'NumLock', keyCode: 144, easyString: 'numlock' };
    Key.SEMICOLON = { code: 'Semicolon', keyCode: 186, easyString: ';' };
    Key.EQUAL = { code: 'Equal', keyCode: 187, easyString: '=' };
    Key.COMMA = { code: 'Comma', keyCode: 188, easyString: ',' };
    Key.MINUS = { code: 'Minus', keyCode: 189, easyString: '-' };
    Key.PERIOD = { code: 'Period', keyCode: 190, easyString: '.' };
    Key.SLASH = { code: 'Slash', keyCode: 191, easyString: '/' };
    Key.BACKQUOTE = { code: 'Backquote', keyCode: 192, easyString: '`' };
    Key.INTL_RO = { code: 'IntlRo', keyCode: 193, easyString: 'intlro' };
    Key.BRACKET_LEFT = { code: 'BracketLeft', keyCode: 219, easyString: '[' };
    Key.BACKSLASH = { code: 'Backslash', keyCode: 220, easyString: '\\' };
    Key.BRACKET_RIGHT = { code: 'BracketRight', keyCode: 221, easyString: ']' };
    Key.QUOTE = { code: 'Quote', keyCode: 222, easyString: '\'' };
    Key.INTL_BACKSLASH = { code: 'IntlBackslash', keyCode: 229, easyString: 'intlbackslash' };
    Key.INTL_YEN = { code: 'IntlYen', keyCode: 255, easyString: 'intlyen' };
    Key.MAX_KEY_CODE = Key.INTL_YEN.keyCode;
})(Key = exports.Key || (exports.Key = {}));
/* -------------------- Initialize the static key mappings -------------------- */
(function () {
    // Set the default key mappings from the constants in the Key namespace
    Object.keys(Key).map(function (prop) { return Reflect.get(Key, prop); }).filter(function (key) { return Key.isKey(key); }).forEach(function (key) {
        CODE_TO_KEY[key.code] = key;
        KEY_CODE_TO_KEY[key.keyCode] = key;
        EASY_TO_KEY[key.easyString] = key;
    });
    // Set additional key mappings
    CODE_TO_KEY['Numpad0'] = Key.DIGIT0;
    KEY_CODE_TO_KEY[96] = Key.DIGIT0;
    CODE_TO_KEY['Numpad1'] = Key.DIGIT1;
    KEY_CODE_TO_KEY[97] = Key.DIGIT1;
    CODE_TO_KEY['Numpad2'] = Key.DIGIT2;
    KEY_CODE_TO_KEY[98] = Key.DIGIT2;
    CODE_TO_KEY['Numpad3'] = Key.DIGIT3;
    KEY_CODE_TO_KEY[99] = Key.DIGIT3;
    CODE_TO_KEY['Numpad4'] = Key.DIGIT4;
    KEY_CODE_TO_KEY[100] = Key.DIGIT4;
    CODE_TO_KEY['Numpad5'] = Key.DIGIT5;
    KEY_CODE_TO_KEY[101] = Key.DIGIT5;
    CODE_TO_KEY['Numpad6'] = Key.DIGIT6;
    KEY_CODE_TO_KEY[102] = Key.DIGIT6;
    CODE_TO_KEY['Numpad7'] = Key.DIGIT7;
    KEY_CODE_TO_KEY[103] = Key.DIGIT7;
    CODE_TO_KEY['Numpad8'] = Key.DIGIT8;
    KEY_CODE_TO_KEY[104] = Key.DIGIT8;
    CODE_TO_KEY['Numpad9'] = Key.DIGIT9;
    KEY_CODE_TO_KEY[105] = Key.DIGIT9;
    CODE_TO_KEY['NumpadEnter'] = Key.ENTER;
    CODE_TO_KEY['NumpadEqual'] = Key.EQUAL;
    CODE_TO_KEY['MetaLeft'] = Key.OS_LEFT; // Chrome, Safari
    KEY_CODE_TO_KEY[224] = Key.OS_LEFT; // Firefox on Mac
    CODE_TO_KEY['MetaRight'] = Key.OS_RIGHT; // Chrome, Safari
    KEY_CODE_TO_KEY[93] = Key.OS_RIGHT; // Chrome, Safari, Edge
    KEY_CODE_TO_KEY[225] = Key.ALT_RIGHT; // Linux
    KEY_CODE_TO_KEY[110] = Key.DECIMAL; // Mac, Windows
    KEY_CODE_TO_KEY[59] = Key.SEMICOLON; // Firefox
    KEY_CODE_TO_KEY[61] = Key.EQUAL; // Firefox
    KEY_CODE_TO_KEY[173] = Key.MINUS; // Firefox
    KEY_CODE_TO_KEY[226] = Key.BACKSLASH; // Chrome, Edge on Windows
    KEY_CODE_TO_KEY[60] = Key.BACKSLASH; // Firefox on Linux
    // Set the modifier keys
    MODIFIERS.push.apply(// Firefox on Linux
    MODIFIERS, __spread([Key.ALT_LEFT, Key.ALT_RIGHT, Key.CONTROL_LEFT, Key.CONTROL_RIGHT, Key.OS_LEFT, Key.OS_RIGHT, Key.SHIFT_LEFT, Key.SHIFT_RIGHT]));
})();
var KeysOrKeyCodes;
(function (KeysOrKeyCodes) {
    KeysOrKeyCodes.toKeyCode = function (keyOrKeyCode) {
        return keyOrKeyCode instanceof KeyCode ? keyOrKeyCode : KeyCode.createKeyCode({ first: keyOrKeyCode });
    };
    KeysOrKeyCodes.toKeyCodes = function (keysOrKeyCodes) {
        if (keysOrKeyCodes instanceof KeyCode) {
            return [keysOrKeyCodes];
        }
        else if (Array.isArray(keysOrKeyCodes)) {
            return keysOrKeyCodes.slice().map(KeysOrKeyCodes.toKeyCode);
        }
        return [KeysOrKeyCodes.toKeyCode(keysOrKeyCodes)];
    };
})(KeysOrKeyCodes = exports.KeysOrKeyCodes || (exports.KeysOrKeyCodes = {}));
//# sourceMappingURL=keys.js.map
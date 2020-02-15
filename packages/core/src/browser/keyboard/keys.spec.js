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
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("../../browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var keys_1 = require("./keys");
var os = require("../../common/os");
var chai = require("chai");
var sinon = require("sinon");
disableJSDOM();
/* eslint-disable no-unused-expressions */
var expect = chai.expect;
describe('keys api', function () {
    var equalKeyCode = function (keyCode1, keyCode2) {
        return JSON.stringify(keyCode1) === JSON.stringify(keyCode2);
    };
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
    });
    after(function () {
        disableJSDOM();
    });
    it('should parse a string to a KeyCode correctly', function () {
        var keycode = keys_1.KeyCode.parse('ctrl+b');
        expect(keycode.ctrl).to.be.true;
        expect(keycode.key).is.equal(keys_1.Key.KEY_B);
        // Invalid keystroke string
        expect(function () { return keys_1.KeyCode.parse('ctl+b'); }).to.throw(Error);
    });
    it('should parse a string containing special modifiers to a KeyCode correctly', function () {
        var stub = sinon.stub(os, 'isOSX').value(false);
        var keycode = keys_1.KeyCode.parse('ctrl+b');
        expect(keycode.ctrl).to.be.true;
        expect(keycode.key).is.equal(keys_1.Key.KEY_B);
        var keycodeOption = keys_1.KeyCode.parse('option+b');
        expect(keycodeOption.alt).to.be.true;
        expect(keycodeOption.key).is.equal(keys_1.Key.KEY_B);
        expect(function () { return keys_1.KeyCode.parse('cmd+b'); }).to.throw(/OSX only/);
        var keycodeCtrlOrCommand = keys_1.KeyCode.parse('ctrlcmd+b');
        expect(keycodeCtrlOrCommand.meta).to.be.false;
        expect(keycodeCtrlOrCommand.ctrl).to.be.true;
        expect(keycodeCtrlOrCommand.key).is.equal(keys_1.Key.KEY_B);
        stub.restore();
    });
    it('should parse a string containing special modifiers to a KeyCode correctly (macOS)', function () {
        keys_1.KeyCode.resetKeyBindings();
        var stub = sinon.stub(os, 'isOSX').value(true);
        var keycode = keys_1.KeyCode.parse('ctrl+b');
        expect(keycode.ctrl).to.be.true;
        expect(keycode.key).is.equal(keys_1.Key.KEY_B);
        var keycodeOption = keys_1.KeyCode.parse('option+b');
        expect(keycodeOption.alt).to.be.true;
        expect(keycodeOption.key).is.equal(keys_1.Key.KEY_B);
        var keycodeCommand = keys_1.KeyCode.parse('cmd+b');
        expect(keycodeCommand.meta).to.be.true;
        expect(keycodeCommand.key).is.equal(keys_1.Key.KEY_B);
        var keycodeCtrlOrCommand = keys_1.KeyCode.parse('ctrlcmd+b');
        expect(keycodeCtrlOrCommand.meta).to.be.true;
        expect(keycodeCtrlOrCommand.ctrl).to.be.false;
        expect(keycodeCtrlOrCommand.key).is.equal(keys_1.Key.KEY_B);
        stub.restore();
    });
    it('should serialize a keycode properly with BACKQUOTE + M1', function () {
        var stub = sinon.stub(os, 'isOSX').value(true);
        var keyCode = keys_1.KeyCode.createKeyCode({ first: keys_1.Key.BACKQUOTE, modifiers: [keys_1.KeyModifier.CtrlCmd] });
        var keyCodeString = keyCode.toString();
        expect(keyCodeString).to.be.equal('meta+`');
        var parsedKeyCode = keys_1.KeyCode.parse(keyCodeString);
        expect(equalKeyCode(parsedKeyCode, keyCode)).to.be.true;
        sinon.stub(os, 'isOSX').value(false);
        keyCode = keys_1.KeyCode.createKeyCode({ first: keys_1.Key.BACKQUOTE, modifiers: [keys_1.KeyModifier.CtrlCmd] });
        keyCodeString = keyCode.toString();
        expect(keyCodeString).to.be.equal('ctrl+`');
        parsedKeyCode = keys_1.KeyCode.parse(keyCodeString);
        expect(equalKeyCode(parsedKeyCode, keyCode)).to.be.true;
        stub.restore();
    });
    it('should serialize a keycode properly with a + M2 + M3', function () {
        var keyCode = keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.Shift, keys_1.KeyModifier.Alt] });
        var keyCodeString = keyCode.toString();
        expect(keyCodeString).to.be.equal('shift+alt+a');
        var parsedKeyCode = keys_1.KeyCode.parse(keyCodeString);
        expect(equalKeyCode(parsedKeyCode, keyCode)).to.be.true;
    });
    it('the order of the modifiers should not matter when parsing the key code', function () {
        var left = keys_1.KeySequence.parse('shift+alt+a');
        var right = keys_1.KeySequence.parse('alt+shift+a');
        expect(keys_1.KeySequence.compare(left, right)).to.be.equal(keys_1.KeySequence.CompareResult.FULL);
        expect(keys_1.KeySequence.compare([keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.Alt, keys_1.KeyModifier.Shift] })], right)).to.be.equal(keys_1.KeySequence.CompareResult.FULL);
        expect(keys_1.KeySequence.compare(left, [keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.Alt, keys_1.KeyModifier.Shift] })])).to.be.equal(keys_1.KeySequence.CompareResult.FULL);
        expect(keys_1.KeySequence.compare([keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.Shift, keys_1.KeyModifier.Alt] })], right)).to.be.equal(keys_1.KeySequence.CompareResult.FULL);
        expect(keys_1.KeySequence.compare(left, [keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.Shift, keys_1.KeyModifier.Alt] })])).to.be.equal(keys_1.KeySequence.CompareResult.FULL);
    });
    it('should parse ctrl key properly on both OS X and other platforms', function () {
        var event = new KeyboardEvent('keydown', {
            key: keys_1.Key.BACKQUOTE.easyString,
            code: keys_1.Key.BACKQUOTE.code,
            ctrlKey: true,
        });
        var stub = sinon.stub(os, 'isOSX').value(true);
        expect(keys_1.KeyCode.createKeyCode(event).toString()).to.be.equal('ctrl+`');
        sinon.stub(os, 'isOSX').value(false);
        expect(keys_1.KeyCode.createKeyCode(event).toString()).to.be.equal('ctrl+`');
        stub.restore();
    });
    it('should serialize a keycode properly with a + M4', function () {
        var stub = sinon.stub(os, 'isOSX').value(true);
        var keyCode = keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.MacCtrl] });
        var keyCodeString = keyCode.toString();
        expect(keyCodeString).to.be.equal('ctrl+a');
        var parsedKeyCode = keys_1.KeyCode.parse(keyCodeString);
        expect(equalKeyCode(parsedKeyCode, keyCode)).to.be.true;
        stub.restore();
    });
    it('it should parse a multi keycode keybinding', function () {
        var validKeyCodes = [];
        validKeyCodes.push(keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.CtrlCmd] }));
        validKeyCodes.push(keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_C, modifiers: [keys_1.KeyModifier.CtrlCmd, keys_1.KeyModifier.Shift] }));
        var parsedKeyCodes = keys_1.KeySequence.parse('ctrlcmd+a ctrlcmd+shift+c');
        expect(parsedKeyCodes).to.deep.equal(validKeyCodes);
    });
    it('it should parse a multi keycode keybinding with no modifiers', function () {
        var validKeyCodes = [];
        validKeyCodes.push(keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_A, modifiers: [keys_1.KeyModifier.CtrlCmd] }));
        validKeyCodes.push(keys_1.KeyCode.createKeyCode({ first: keys_1.Key.KEY_C }));
        var parsedKeyCodes = keys_1.KeySequence.parse('ctrlcmd+a c');
        expect(parsedKeyCodes).to.deep.equal(validKeyCodes);
    });
    it('should compare keysequences properly', function () {
        var a = keys_1.KeySequence.parse('ctrlcmd+a');
        var b = keys_1.KeySequence.parse('ctrlcmd+a t');
        expect(keys_1.KeySequence.compare(a, b)).to.be.equal(keys_1.KeySequence.CompareResult.PARTIAL);
        a = keys_1.KeySequence.parse('ctrlcmd+a t');
        b = keys_1.KeySequence.parse('ctrlcmd+a');
        expect(keys_1.KeySequence.compare(a, b)).to.be.equal(keys_1.KeySequence.CompareResult.SHADOW);
        a = keys_1.KeySequence.parse('ctrlcmd+a t');
        b = keys_1.KeySequence.parse('ctrlcmd+a b c');
        expect(keys_1.KeySequence.compare(a, b)).to.be.equal(keys_1.KeySequence.CompareResult.NONE);
        a = keys_1.KeySequence.parse('ctrlcmd+a t');
        b = keys_1.KeySequence.parse('ctrlcmd+a a');
        expect(keys_1.KeySequence.compare(a, b)).to.be.equal(keys_1.KeySequence.CompareResult.NONE);
        a = keys_1.KeySequence.parse('ctrlcmd+a t');
        b = keys_1.KeySequence.parse('ctrlcmd+a t');
        expect(keys_1.KeySequence.compare(a, b)).to.be.equal(keys_1.KeySequence.CompareResult.FULL);
        a = keys_1.KeySequence.parse('ctrlcmd+a t b');
        b = keys_1.KeySequence.parse('ctrlcmd+a t b');
        expect(keys_1.KeySequence.compare(a, b)).to.be.equal(keys_1.KeySequence.CompareResult.FULL);
    });
    it('should be a modifier only', function () {
        var keyCode = keys_1.KeyCode.createKeyCode({ modifiers: [keys_1.KeyModifier.CtrlCmd] });
        expect(keyCode).to.be.deep.equal(keys_1.KeyCode.createKeyCode({ modifiers: [keys_1.KeyModifier.CtrlCmd] }));
        expect(keyCode.isModifierOnly()).to.be.true;
    });
    it('should be multiple modifiers only', function () {
        var keyCode = keys_1.KeyCode.createKeyCode({ modifiers: [keys_1.KeyModifier.CtrlCmd, keys_1.KeyModifier.Alt] });
        expect(keyCode).to.be.deep.equal(keys_1.KeyCode.createKeyCode({ modifiers: [keys_1.KeyModifier.CtrlCmd, keys_1.KeyModifier.Alt] }));
        expect(keyCode.isModifierOnly()).to.be.true;
    });
    it('parse bogus keybinding', function () {
        var _a = __read(keys_1.KeySequence.parse('  Ctrl+sHiFt+F10     b '), 2), first = _a[0], second = _a[1];
        expect(first.ctrl).to.be.true;
        expect(first.shift).to.be.true;
        expect(first.key).is.equal(keys_1.Key.F10);
        expect(second.key).is.equal(keys_1.Key.KEY_B);
    });
    it('should parse minus as key', function () {
        var keycode = keys_1.KeyCode.parse('ctrl+-');
        expect(keycode.ctrl).to.be.true;
        expect(keycode.key).is.equal(keys_1.Key.MINUS);
    });
    it('should parse minus as key and separator', function () {
        var keycode = keys_1.KeyCode.parse('ctrl--');
        expect(keycode.ctrl).to.be.true;
        expect(keycode.key).is.equal(keys_1.Key.MINUS);
    });
    it('should parse plus as separator', function () {
        var keycode = keys_1.KeyCode.parse('ctrl-+-');
        expect(keycode.ctrl).to.be.true;
        expect(keycode.key).is.equal(keys_1.Key.MINUS);
    });
    it('should not parse plus as key but separator', function () {
        var keycode = keys_1.KeyCode.parse('ctrl++-');
        expect(keycode.ctrl).to.be.true;
        expect(keycode.key).is.equal(keys_1.Key.MINUS);
    });
});
//# sourceMappingURL=keys.spec.js.map
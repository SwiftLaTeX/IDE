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
var chai = require("chai");
var chai_1 = require("chai");
chai.use(require('chai-string'));
var diff_computer_1 = require("./diff-computer");
var content_lines_1 = require("./content-lines");
var diffComputer;
before(function () {
    diffComputer = new diff_computer_1.DiffComputer();
});
/* eslint-disable no-unused-expressions */
describe('dirty-diff-computer', function () {
    it('remove single line', function () {
        var dirtyDiff = computeDirtyDiff([
            'FIRST',
            'SECOND TO-BE-REMOVED',
            'THIRD'
        ], [
            'FIRST',
            'THIRD'
        ]);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            added: [],
            modified: [],
            removed: [0],
        });
    });
    [1, 2, 3, 20].forEach(function (lines) {
        it("remove " + formatLines(lines) + " at the end", function () {
            var dirtyDiff = computeDirtyDiff(sequenceOfN(2)
                .concat(sequenceOfN(lines, function () { return 'TO-BE-REMOVED'; })), sequenceOfN(2));
            chai_1.expect(dirtyDiff).to.be.deep.equal({
                modified: [],
                removed: [1],
                added: [],
            });
        });
    });
    it('remove all lines', function () {
        var dirtyDiff = computeDirtyDiff(sequenceOfN(10, function () { return 'TO-BE-REMOVED'; }), ['']);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            added: [],
            modified: [],
            removed: [0],
        });
    });
    [1, 2, 3, 20].forEach(function (lines) {
        it("remove " + formatLines(lines) + " at the beginning", function () {
            var dirtyDiff = computeDirtyDiff(sequenceOfN(lines, function () { return 'TO-BE-REMOVED'; })
                .concat(sequenceOfN(2)), sequenceOfN(2));
            chai_1.expect(dirtyDiff).to.be.deep.equal({
                modified: [],
                removed: [0],
                added: [],
            });
        });
    });
    [1, 2, 3, 20].forEach(function (lines) {
        it("add " + formatLines(lines), function () {
            var previous = sequenceOfN(3);
            var modified = insertIntoArray.apply(void 0, __spread([previous, 2], sequenceOfN(lines, function () { return 'ADDED LINE'; })));
            var dirtyDiff = computeDirtyDiff(previous, modified);
            chai_1.expect(dirtyDiff).to.be.deep.equal({
                modified: [],
                removed: [],
                added: [{ start: 2, end: 2 + lines - 1 }],
            });
        });
    });
    [1, 2, 3, 20].forEach(function (lines) {
        it("add " + formatLines(lines) + " at the beginning", function () {
            var dirtyDiff = computeDirtyDiff(sequenceOfN(2), sequenceOfN(lines, function () { return 'ADDED LINE'; })
                .concat(sequenceOfN(2)));
            chai_1.expect(dirtyDiff).to.be.deep.equal({
                modified: [],
                removed: [],
                added: [{ start: 0, end: lines - 1 }],
            });
        });
    });
    it('add lines to empty file', function () {
        var numberOfLines = 3;
        var dirtyDiff = computeDirtyDiff([''], sequenceOfN(numberOfLines, function () { return 'ADDED LINE'; }));
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            modified: [],
            removed: [],
            added: [{ start: 0, end: numberOfLines - 1 }],
        });
    });
    it('add empty lines', function () {
        var dirtyDiff = computeDirtyDiff([
            '1',
            '2'
        ], [
            '1',
            '',
            '',
            '2'
        ]);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            modified: [],
            removed: [],
            added: [{ start: 1, end: 2 }],
        });
    });
    it('add empty line after single line', function () {
        var dirtyDiff = computeDirtyDiff([
            '1'
        ], [
            '1',
            ''
        ]);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            modified: [],
            removed: [],
            added: [{ start: 1, end: 1 }],
        });
    });
    [1, 2, 3, 20].forEach(function (lines) {
        it("add " + formatLines(lines) + " (empty) at the end", function () {
            var dirtyDiff = computeDirtyDiff(sequenceOfN(2), sequenceOfN(2)
                .concat(new Array(lines).map(function () { return ''; })));
            chai_1.expect(dirtyDiff).to.be.deep.equal({
                modified: [],
                removed: [],
                added: [{ start: 2, end: 1 + lines }],
            });
        });
    });
    it('add empty and non-empty lines', function () {
        var dirtyDiff = computeDirtyDiff([
            'FIRST',
            'LAST'
        ], [
            'FIRST',
            '1. ADDED',
            '2. ADDED',
            '3. ADDED',
            '4. ADDED',
            '5. ADDED',
            'LAST'
        ]);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            modified: [],
            removed: [],
            added: [{ start: 1, end: 5 }],
        });
    });
    [1, 2, 3, 4, 5].forEach(function (lines) {
        it("add " + formatLines(lines) + " after single line", function () {
            var dirtyDiff = computeDirtyDiff(['0'], ['0'].concat(sequenceOfN(lines, function () { return 'ADDED LINE'; })));
            chai_1.expect(dirtyDiff).to.be.deep.equal({
                modified: [],
                removed: [],
                added: [{ start: 1, end: lines }],
            });
        });
    });
    it('modify single line', function () {
        var dirtyDiff = computeDirtyDiff([
            'FIRST',
            'TO-BE-MODIFIED',
            'LAST'
        ], [
            'FIRST',
            'MODIFIED',
            'LAST'
        ]);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            removed: [],
            added: [],
            modified: [{ start: 1, end: 1 }],
        });
    });
    it('modify all lines', function () {
        var numberOfLines = 10;
        var dirtyDiff = computeDirtyDiff(sequenceOfN(numberOfLines, function () { return 'TO-BE-MODIFIED'; }), sequenceOfN(numberOfLines, function () { return 'MODIFIED'; }));
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            removed: [],
            added: [],
            modified: [{ start: 0, end: numberOfLines - 1 }],
        });
    });
    it('modify lines at the end', function () {
        var dirtyDiff = computeDirtyDiff([
            '1',
            '2',
            '3',
            '4'
        ], [
            '1',
            '2-changed',
            '3-changed'
        ]);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            removed: [],
            added: [],
            modified: [{ start: 1, end: 2 }],
        });
    });
    it('multiple diffs', function () {
        var dirtyDiff = computeDirtyDiff([
            'TO-BE-CHANGED',
            '1',
            '2',
            '3',
            'TO-BE-REMOVED',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9'
        ], [
            'CHANGED',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'ADDED',
            ''
        ]);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            removed: [3],
            added: [{ start: 10, end: 11 }],
            modified: [{ start: 0, end: 0 }],
        });
    });
    it('multiple additions', function () {
        var dirtyDiff = computeDirtyDiff([
            'first line',
            '',
            'foo changed on master',
            'bar changed on master',
            '',
            '',
            '',
            '',
            '',
            'last line'
        ], [
            'first line',
            '',
            'foo changed on master',
            'bar changed on master',
            '',
            'NEW TEXT',
            '',
            '',
            '',
            'last line',
            '',
            ''
        ]);
        chai_1.expect(dirtyDiff).to.be.deep.equal({
            removed: [11],
            added: [{ start: 5, end: 5 }, { start: 9, end: 9 }],
            modified: [],
        });
    });
});
function computeDirtyDiff(previous, modified) {
    var a = content_lines_1.ContentLines.arrayLike({
        length: previous.length,
        getLineContent: function (line) {
            var value = previous[line];
            if (value === undefined) {
                console.log(undefined);
            }
            return value;
        },
    });
    var b = content_lines_1.ContentLines.arrayLike({
        length: modified.length,
        getLineContent: function (line) {
            var value = modified[line];
            if (value === undefined) {
                console.log(undefined);
            }
            return value;
        },
    });
    return diffComputer.computeDirtyDiff(a, b);
}
function sequenceOfN(n, mapFn) {
    if (mapFn === void 0) { mapFn = function (i) { return i.toString(); }; }
    return Array.from(new Array(n).keys()).map(function (value, index) { return mapFn(index); });
}
function formatLines(n) {
    return n + ' line' + (n > 1 ? 's' : '');
}
function insertIntoArray(target, start) {
    var items = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i];
    }
    var copy = target.slice(0);
    copy.splice.apply(copy, __spread([start, 0], items));
    return copy;
}
//# sourceMappingURL=diff-computer.spec.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsdiff = require("diff");
var DiffComputer = /** @class */ (function () {
    function DiffComputer() {
    }
    DiffComputer.prototype.computeDiff = function (previous, current) {
        var diffResult = diffArrays(previous, current);
        return diffResult;
    };
    DiffComputer.prototype.computeDirtyDiff = function (previous, current) {
        var added = [];
        var removed = [];
        var modified = [];
        var changes = this.computeDiff(previous, current);
        var lastLine = -1;
        for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            var next = changes[i + 1];
            if (change.added) {
                // case: addition
                var start = lastLine + 1;
                var end = lastLine + change.count;
                added.push({ start: start, end: end });
                lastLine = end;
            }
            else if (change.removed && next && next.added) {
                var isFirstChange = i === 0;
                var isLastChange = i === changes.length - 2;
                var isNextEmptyLine = next.value.length > 0 && current[next.value[0]].length === 0;
                var isPrevEmptyLine = change.value.length > 0 && previous[change.value[0]].length === 0;
                if (isFirstChange && isNextEmptyLine) {
                    // special case: removing at the beginning
                    removed.push(0);
                }
                else if (isFirstChange && isPrevEmptyLine) {
                    // special case: adding at the beginning
                    var start = 0;
                    var end = next.count - 1;
                    added.push({ start: start, end: end });
                    lastLine = end;
                }
                else if (isLastChange && isNextEmptyLine) {
                    removed.push(lastLine + 1 /* = empty line */);
                }
                else {
                    // default case is a modification
                    var start = lastLine + 1;
                    var end = lastLine + next.count;
                    modified.push({ start: start, end: end });
                    lastLine = end;
                }
                i++; // consume next eagerly
            }
            else if (change.removed && !(next && next.added)) {
                removed.push(Math.max(0, lastLine));
            }
            else {
                lastLine += change.count;
            }
        }
        return { added: added, removed: removed, modified: modified };
    };
    return DiffComputer;
}());
exports.DiffComputer = DiffComputer;
var ArrayDiff = /** @class */ (function (_super) {
    __extends(ArrayDiff, _super);
    function ArrayDiff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ArrayDiff.prototype.tokenize = function (value) {
        return value;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ArrayDiff.prototype.join = function (value) {
        return value;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ArrayDiff.prototype.removeEmpty = function (value) {
        return value;
    };
    return ArrayDiff;
}(jsdiff.Diff));
var arrayDiff = new ArrayDiff();
/**
 * Computes diff without copying data.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function diffArrays(oldArr, newArr) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return arrayDiff.diff(oldArr, newArr);
}
//# sourceMappingURL=diff-computer.js.map
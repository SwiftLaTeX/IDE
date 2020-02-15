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
/**
 * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
 */
function containsRange(range, otherRange) {
    if (otherRange.start.line < range.start.line || otherRange.end.line < range.start.line) {
        return false;
    }
    if (otherRange.start.line > range.end.line || otherRange.end.line > range.end.line) {
        return false;
    }
    if (otherRange.start.line === range.start.line && otherRange.start.character < range.start.character) {
        return false;
    }
    if (otherRange.end.line === range.end.line && otherRange.end.character > range.end.character) {
        return false;
    }
    return true;
}
exports.containsRange = containsRange;
function containsPosition(range, position) {
    return comparePosition(range.start, position) >= 0 && comparePosition(range.end, position) <= 0;
}
exports.containsPosition = containsPosition;
function sameStart(a, b) {
    var pos1 = a.start;
    var pos2 = b.start;
    return pos1.line === pos2.line
        && pos1.character === pos2.character;
}
function filterSame(locations, definition) {
    return locations.filter(function (candidate) { return candidate.uri !== definition.uri
        || !sameStart(candidate.range, definition.range); });
}
exports.filterSame = filterSame;
function comparePosition(left, right) {
    var diff = right.line - left.line;
    if (diff !== 0) {
        return diff;
    }
    return right.character - left.character;
}
exports.comparePosition = comparePosition;
function filterUnique(locations) {
    var e_1, _a;
    if (!locations) {
        return [];
    }
    var result = [];
    var set = new Set();
    try {
        for (var locations_1 = __values(locations), locations_1_1 = locations_1.next(); !locations_1_1.done; locations_1_1 = locations_1.next()) {
            var location_1 = locations_1_1.value;
            var json = JSON.stringify(location_1);
            if (!set.has(json)) {
                set.add(json);
                result.push(location_1);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (locations_1_1 && !locations_1_1.done && (_a = locations_1.return)) _a.call(locations_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
exports.filterUnique = filterUnique;
function startsAfter(a, b) {
    if (a.start.line > b.start.line) {
        return true;
    }
    if (a.start.line === b.start.line) {
        if (a.start.character > b.start.character) {
            return true;
        }
        if (a.start.character === b.start.character) {
            if (a.end.line > b.end.line) {
                return true;
            }
        }
    }
    return false;
}
exports.startsAfter = startsAfter;
function isSame(a, b) {
    return a.uri === b.uri
        && a.range.start.line === b.range.start.line
        && a.range.end.line === b.range.end.line
        && a.range.start.character === b.range.start.character
        && a.range.end.character === b.range.end.character;
}
exports.isSame = isSame;
//# sourceMappingURL=utils.js.map
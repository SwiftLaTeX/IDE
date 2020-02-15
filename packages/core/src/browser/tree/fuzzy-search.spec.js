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
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var fuzzy_search_1 = require("./fuzzy-search");
describe('fuzzy-search', function () {
    [
        {
            pattern: 'a',
            items: ['alma'],
            expected: [
                {
                    item: 'alma',
                    ranges: [
                        { offset: 0, length: 1 }
                    ]
                }
            ]
        },
        {
            pattern: 'a',
            items: ['körte'],
            expected: []
        },
        {
            pattern: 'bcn',
            items: ['baconing', 'narwhal', 'a mighty bear canoe'],
            expected: [
                {
                    item: 'baconing',
                    ranges: [
                        { offset: 0, length: 1 },
                        { offset: 2, length: 1 },
                        { offset: 4, length: 1 }
                    ]
                },
                {
                    item: 'a mighty bear canoe',
                    ranges: [
                        { offset: 9, length: 1 },
                        { offset: 14, length: 1 },
                        { offset: 16, length: 1 }
                    ]
                }
            ]
        }
    ].forEach(function (test) {
        var pattern = test.pattern, items = test.items, expected = test.expected;
        it("should match " + expected.length + " item" + (expected.length === 1 ? '' : 's') + " when filtering [" + items.join(', ') + "] with pattern: '" + pattern + "'", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expectSearch;
                        return [4 /*yield*/, search(pattern, items)];
                    case 1:
                        _a.apply(void 0, [_b.sent(), expected]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    [
        ['con', ['configs', 'base.tsconfig.json', 'tsconfig.json', 'base.nyc.json', 'CONTRIBUTING.MD']],
        ['bcn', ['baconing', 'narwhal', 'a mighty bear canoe'], ['baconing', 'a mighty bear canoe']]
    ].forEach(function (test) {
        var _a = __read(test, 3), pattern = _a[0], items = _a[1], expected = _a[2];
        it("should match the order of items after the filtering with pattern: '" + pattern + "'", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expectOrder;
                        return [4 /*yield*/, search(pattern, items)];
                    case 1:
                        _a.apply(void 0, [_b.sent(), expected || items]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    function expectOrder(actual, expected) {
        chai_1.expect(actual.map(function (result) { return result.item; })).to.be.deep.equal(expected);
    }
    function expectSearch(actual, expected) {
        chai_1.expect(actual).to.be.deep.equal(expected);
    }
    function search(pattern, items) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new fuzzy_search_1.FuzzySearch().filter({
                        items: items,
                        pattern: pattern,
                        transform: function (arg) { return arg; }
                    })];
            });
        });
    }
});
//# sourceMappingURL=fuzzy-search.spec.js.map
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
var ContentLines;
(function (ContentLines) {
    var NL = '\n'.charCodeAt(0);
    var CR = '\r'.charCodeAt(0);
    function fromString(content) {
        var computeLineStarts = function (s) {
            var result = [0];
            for (var i = 0; i < s.length; i++) {
                var chr = s.charCodeAt(i);
                if (chr === CR) {
                    if (i + 1 < s.length && s.charCodeAt(i + 1) === NL) {
                        result[result.length] = i + 2;
                        i++;
                    }
                    else {
                        result[result.length] = i + 1;
                    }
                }
                else if (chr === NL) {
                    result[result.length] = i + 1;
                }
            }
            return result;
        };
        var lineStarts = computeLineStarts(content);
        return {
            length: lineStarts.length,
            getLineContent: function (line) {
                if (line >= lineStarts.length) {
                    throw new Error('line index out of bounds');
                }
                var start = lineStarts[line];
                var end = (line === lineStarts.length - 1) ? undefined : lineStarts[line + 1] - 1;
                if (!!end && content.charCodeAt(end - 1) === CR) {
                    end--; // ignore CR at the end
                }
                var lineContent = content.substring(start, end);
                return lineContent;
            }
        };
    }
    ContentLines.fromString = fromString;
    function arrayLike(lines) {
        return new Proxy(lines, getProxyHandler());
    }
    ContentLines.arrayLike = arrayLike;
    function getProxyHandler() {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get: function (target, p) {
                switch (p) {
                    case 'prototype':
                        return undefined;
                    case 'length':
                        return target.length;
                    case 'slice':
                        return function (start, end) {
                            if (start !== undefined) {
                                return [start, (end !== undefined ? end - 1 : target.length - 1)];
                            }
                            return [0, target.length - 1];
                        };
                    case Symbol.iterator:
                        return function () {
                            var i;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < target.length)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, target.getLineContent(i)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var index = Number.parseInt(p);
                if (Number.isInteger(index)) {
                    if (index >= 0 && index < target.length) {
                        var value = target.getLineContent(index);
                        if (value === undefined) {
                            console.log(target);
                        }
                        return value;
                    }
                    else {
                        return undefined;
                    }
                }
                throw new Error("get " + String(p) + " not implemented");
            }
        };
    }
})(ContentLines = exports.ContentLines || (exports.ContentLines = {}));
//# sourceMappingURL=content-lines.js.map
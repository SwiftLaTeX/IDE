"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var application_protocol_1 = require("@theia/core/lib/common/application-protocol");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var terminal_linkmatcher_1 = require("./terminal-linkmatcher");
var core_1 = require("@theia/core");
var common_2 = require("@theia/filesystem/lib/common");
var TerminalLinkmatcherFiles = /** @class */ (function (_super) {
    __extends(TerminalLinkmatcherFiles, _super);
    function TerminalLinkmatcherFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerminalLinkmatcherFiles.prototype.init = function () {
        this.backendOs = this.appServer.getBackendOS();
    };
    TerminalLinkmatcherFiles.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var os, baseLocalLinkClause;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.backendOs];
                    case 1:
                        os = _a.sent();
                        baseLocalLinkClause = os === common_1.OS.Type.Windows ? winLocalLinkClause : unixLocalLinkClause;
                        return [2 /*return*/, new RegExp(baseLocalLinkClause + "(" + lineAndColumnClause + ")")];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.getValidate = function (terminalWidget) {
        var _this = this;
        return function (match) { return __awaiter(_this, void 0, void 0, function () {
            var toOpen, _a, _b, f, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        _a = this.toURI;
                        _b = [match];
                        return [4 /*yield*/, terminalWidget.cwd];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2:
                        toOpen = _c.sent();
                        if (!toOpen) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fileSystem.getFileStat(toOpen.toString())];
                    case 3:
                        f = _c.sent();
                        // eslint-disable-next-line no-null/no-null
                        return [2 /*return*/, f !== undefined && f !== null && !f.isDirectory];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _c.sent();
                        console.trace('Error validating ' + match);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, false];
                }
            });
        }); };
    };
    TerminalLinkmatcherFiles.prototype.getHandler = function (terminalWidget) {
        var _this = this;
        return function (event, fullMatch) { return __awaiter(_this, void 0, void 0, function () {
            var toOpen, _a, _b, position, options, opener_1, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.toURI;
                        _b = [fullMatch];
                        return [4 /*yield*/, terminalWidget.cwd];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2:
                        toOpen = _c.sent();
                        if (!toOpen) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.extractPosition(fullMatch)];
                    case 3:
                        position = _c.sent();
                        options = {};
                        if (position) {
                            options = {
                                selection: {
                                    start: position
                                }
                            };
                        }
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.openerService.getOpener(toOpen, options)];
                    case 5:
                        opener_1 = _c.sent();
                        opener_1.open(toOpen, options);
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _c.sent();
                        console.error('Cannot open link ' + fullMatch, err_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    };
    TerminalLinkmatcherFiles.prototype.toURI = function (match, cwd) {
        return __awaiter(this, void 0, void 0, function () {
            var path, pathObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.extractPath(match)];
                    case 1:
                        path = _a.sent();
                        if (!path) {
                            return [2 /*return*/];
                        }
                        pathObj = new core_1.Path(path);
                        return [2 /*return*/, pathObj.isAbsolute ? cwd.withPath(path) : cwd.resolve(path)];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.extractPosition = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var matches, info, lineAndColumnMatchIndex, i, lineMatchIndex, rowNumber, columnNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegExp()];
                    case 1:
                        matches = (_a.sent()).exec(link);
                        info = {
                            line: 1,
                            character: 1
                        };
                        if (!matches) {
                            return [2 /*return*/, info];
                        }
                        return [4 /*yield*/, this.backendOs];
                    case 2:
                        lineAndColumnMatchIndex = (_a.sent()) === common_1.OS.Type.Windows ? winLineAndColumnMatchIndex : unixLineAndColumnMatchIndex;
                        for (i = 0; i < lineAndColumnClause.length; i++) {
                            lineMatchIndex = lineAndColumnMatchIndex + (lineAndColumnClauseGroupCount * i);
                            rowNumber = matches[lineMatchIndex];
                            if (rowNumber) {
                                info.line = parseInt(rowNumber, 10) - 1;
                                columnNumber = matches[lineMatchIndex + 2];
                                if (columnNumber) {
                                    info.character = parseInt(columnNumber, 10) - 1;
                                }
                                break;
                            }
                        }
                        return [2 /*return*/, info];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.extractPath = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegExp()];
                    case 1:
                        matches = (_a.sent()).exec(link);
                        if (!matches) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, matches[1]];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(application_protocol_1.ApplicationServer),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "appServer", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalLinkmatcherFiles.prototype, "init", null);
    TerminalLinkmatcherFiles = __decorate([
        inversify_1.injectable()
    ], TerminalLinkmatcherFiles);
    return TerminalLinkmatcherFiles;
}(terminal_linkmatcher_1.AbstractCmdClickTerminalContribution));
exports.TerminalLinkmatcherFiles = TerminalLinkmatcherFiles;
// The following regular expressions are taken from:
// https://github.com/microsoft/vscode/blob/fbbc1aa80332189aa0d3006cb2159b79a9eba480/src/vs/workbench/contrib/terminal/browser/terminalLinkHandler.ts
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var pathPrefix = '(\\.\\.?|\\~)';
var pathSeparatorClause = '\\/';
// '":; are allowed in paths but they are often separators so ignore them
// Also disallow \\ to prevent a catastrophic backtracking case #24798
var excludedPathCharactersClause = '[^\\0\\s!$`&*()\\[\\]+\'":;\\\\]';
/** A regex that matches paths in the form /foo, ~/foo, ./foo, ../foo, foo/bar */
var unixLocalLinkClause = '((' + pathPrefix + '|(' + excludedPathCharactersClause + ')+)?(' + pathSeparatorClause + '(' + excludedPathCharactersClause + ')+)+)';
var winDrivePrefix = '[a-zA-Z]:';
var winPathPrefix = '(' + winDrivePrefix + '|\\.\\.?|\\~)';
var winPathSeparatorClause = '(\\\\|\\/)';
var winExcludedPathCharactersClause = '[^\\0<>\\?\\|\\/\\s!$`&*()\\[\\]+\'":;]';
/** A regex that matches paths in the form c:\foo, ~\foo, .\foo, ..\foo, foo\bar */
var winLocalLinkClause = '((' + winPathPrefix + '|(' + winExcludedPathCharactersClause + ')+)?(' + winPathSeparatorClause + '(' + winExcludedPathCharactersClause + ')+)+)';
/** As xterm reads from DOM, space in that case is non-breaking char ASCII code - 160, replacing space with nonBreakingSpace or space ASCII code - 32. */
var lineAndColumnClause = [
    // "(file path)", line 45 [see #40468]
    '((\\S*)", line ((\\d+)( column (\\d+))?))',
    // (file path) on line 8, column 13
    '((\\S*) on line ((\\d+)(, column (\\d+))?))',
    // (file path):line 8, column 13
    '((\\S*):line ((\\d+)(, column (\\d+))?))',
    // (file path)(45), (file path) (45), (file path)(45,18), (file path) (45,18), (file path)(45, 18), (file path) (45, 18), also with []
    '(([^\\s\\(\\)]*)(\\s?[\\(\\[](\\d+)(,\\s?(\\d+))?)[\\)\\]])',
    // (file path):336, (file path):336:9
    '(([^:\\s\\(\\)<>\'\"\\[\\]]*)(:(\\d+))?(:(\\d+))?)'
].join('|').replace(/ /g, "[" + '\u00A0' + " ]");
// Changing any regex may effect this value, hence changes this as well if required.
var winLineAndColumnMatchIndex = 12;
var unixLineAndColumnMatchIndex = 11;
// Each line and column clause have 6 groups (ie no. of expressions in round brackets)
var lineAndColumnClauseGroupCount = 6;
//# sourceMappingURL=terminal-linkmatcher-files.js.map
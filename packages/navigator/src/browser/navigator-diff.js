"use strict";
/********************************************************************************
 * Copyright (C) 2019 David Saunders and others.
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
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var common_1 = require("@theia/core/lib/common");
var opener_service_1 = require("@theia/core/lib/browser/opener-service");
var message_service_1 = require("@theia/core/lib/common/message-service");
var diff_uris_1 = require("@theia/core/lib/browser/diff-uris");
var NavigatorDiffCommands;
(function (NavigatorDiffCommands) {
    var COMPARE_CATEGORY = 'Compare';
    NavigatorDiffCommands.COMPARE_FIRST = {
        id: 'compare:first',
        category: COMPARE_CATEGORY,
        label: 'Select for Compare'
    };
    NavigatorDiffCommands.COMPARE_SECOND = {
        id: 'compare:second',
        category: COMPARE_CATEGORY,
        label: 'Compare with Selected'
    };
})(NavigatorDiffCommands = exports.NavigatorDiffCommands || (exports.NavigatorDiffCommands = {}));
var NavigatorDiff = /** @class */ (function () {
    function NavigatorDiff() {
        this._firstCompareFile = undefined;
    }
    Object.defineProperty(NavigatorDiff.prototype, "firstCompareFile", {
        get: function () {
            return this._firstCompareFile;
        },
        set: function (uri) {
            this._firstCompareFile = uri;
            this._isFirstFileSelected = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigatorDiff.prototype, "isFirstFileSelected", {
        get: function () {
            return this._isFirstFileSelected;
        },
        enumerable: true,
        configurable: true
    });
    NavigatorDiff.prototype.isDirectory = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileSystem.getFileStat(uri.path.toString())];
                    case 1:
                        stat = _a.sent();
                        if (!stat || stat.isDirectory) {
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    NavigatorDiff.prototype.getURISelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.isDirectory(uri)];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, uri];
                }
            });
        });
    };
    /**
     * Adds the initial file for comparison
     * @see SelectionService
     * @see compareFiles
     * @returns Promise<boolean> indicating whether the uri is valid
     */
    NavigatorDiff.prototype.addFirstComparisonFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uriSelected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getURISelection()];
                    case 1:
                        uriSelected = _a.sent();
                        if (uriSelected === undefined) {
                            return [2 /*return*/, false];
                        }
                        this.firstCompareFile = uriSelected;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Compare selected files.  First file is selected through addFirstComparisonFile
     * @see SelectionService
     * @see addFirstComparisonFile
     * @returns Promise<boolean> indicating whether the comparison was completed successfully
     */
    NavigatorDiff.prototype.compareFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uriSelected, diffUri;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getURISelection()];
                    case 1:
                        uriSelected = _a.sent();
                        if (this.firstCompareFile === undefined || uriSelected === undefined) {
                            return [2 /*return*/, false];
                        }
                        diffUri = diff_uris_1.DiffUris.encode(this.firstCompareFile, uriSelected);
                        opener_service_1.open(this.openerService, diffUri).catch(function (e) {
                            _this.notifications.error(e.message);
                        });
                        return [2 /*return*/, true];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], NavigatorDiff.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], NavigatorDiff.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], NavigatorDiff.prototype, "notifications", void 0);
    __decorate([
        inversify_1.inject(common_1.SelectionService),
        __metadata("design:type", common_1.SelectionService)
    ], NavigatorDiff.prototype, "selectionService", void 0);
    NavigatorDiff = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], NavigatorDiff);
    return NavigatorDiff;
}());
exports.NavigatorDiff = NavigatorDiff;
//# sourceMappingURL=navigator-diff.js.map
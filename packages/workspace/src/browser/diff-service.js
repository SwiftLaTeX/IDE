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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var diff_uris_1 = require("@theia/core/lib/browser/diff-uris");
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var browser_1 = require("@theia/core/lib/browser");
var message_service_1 = require("@theia/core/lib/common/message-service");
var DiffService = /** @class */ (function () {
    function DiffService() {
    }
    DiffService.prototype.openDiffEditor = function (left, right, label, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, leftExists, rightExists, _b, leftStat_1, rightStat_1, uri, details, uri;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(left.scheme === 'file' && right.scheme === 'file')) return [3 /*break*/, 6];
                        return [4 /*yield*/, Promise.all([
                                this.fileSystem.exists(left.toString()),
                                this.fileSystem.exists(right.toString())
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_c.sent(), 2]), leftExists = _a[0], rightExists = _a[1];
                        if (!(leftExists && rightExists)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Promise.all([
                                this.fileSystem.getFileStat(left.toString()),
                                this.fileSystem.getFileStat(right.toString()),
                            ])];
                    case 2:
                        _b = __read.apply(void 0, [_c.sent(), 2]), leftStat_1 = _b[0], rightStat_1 = _b[1];
                        if (!(leftStat_1 && rightStat_1)) return [3 /*break*/, 5];
                        if (!(!leftStat_1.isDirectory && !rightStat_1.isDirectory)) return [3 /*break*/, 4];
                        uri = diff_uris_1.DiffUris.encode(left, right, label);
                        return [4 /*yield*/, browser_1.open(this.openerService, uri, options)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        details = (function () {
                            if (leftStat_1.isDirectory && rightStat_1.isDirectory) {
                                return 'Both resource were a directory.';
                            }
                            else {
                                if (leftStat_1.isDirectory) {
                                    return "'" + left.path.base + "' was a directory.";
                                }
                                else {
                                    return "'" + right.path.base + "' was a directory.";
                                }
                            }
                        });
                        this.messageService.warn("Directories cannot be compared. " + details());
                        _c.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        uri = diff_uris_1.DiffUris.encode(left, right, label);
                        return [4 /*yield*/, browser_1.open(this.openerService, uri, options)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], DiffService.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], DiffService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], DiffService.prototype, "messageService", void 0);
    DiffService = __decorate([
        inversify_1.injectable()
    ], DiffService);
    return DiffService;
}());
exports.DiffService = DiffService;
//# sourceMappingURL=diff-service.js.map
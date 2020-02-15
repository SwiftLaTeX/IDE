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
var browser_1 = require("@theia/core/lib/browser/browser");
var environment_1 = require("@theia/application-package/lib/environment");
var selection_service_1 = require("@theia/core/lib/common/selection-service");
var uri_command_handler_1 = require("@theia/core/lib/common/uri-command-handler");
var file_download_service_1 = require("./file-download-service");
var FileDownloadCommandContribution = /** @class */ (function () {
    function FileDownloadCommandContribution() {
    }
    FileDownloadCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(FileDownloadCommands.DOWNLOAD, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            execute: function (uris) { return _this.executeDownload(uris); },
            isEnabled: function (uris) { return _this.isDownloadEnabled(uris); },
            isVisible: function (uris) { return _this.isDownloadVisible(uris); },
        }, { multi: true }));
        registry.registerCommand(FileDownloadCommands.COPY_DOWNLOAD_LINK, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            execute: function (uris) { return _this.executeDownload(uris, { copyLink: true }); },
            isEnabled: function (uris) { return browser_1.isChrome && _this.isDownloadEnabled(uris); },
            isVisible: function (uris) { return browser_1.isChrome && _this.isDownloadVisible(uris); },
        }, { multi: true }));
    };
    FileDownloadCommandContribution.prototype.executeDownload = function (uris, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.downloadService.download(uris, options);
                return [2 /*return*/];
            });
        });
    };
    FileDownloadCommandContribution.prototype.isDownloadEnabled = function (uris) {
        return !environment_1.environment.electron.is() && uris.length > 0 && uris.every(function (u) { return u.scheme === 'file'; });
    };
    FileDownloadCommandContribution.prototype.isDownloadVisible = function (uris) {
        return this.isDownloadEnabled(uris);
    };
    __decorate([
        inversify_1.inject(file_download_service_1.FileDownloadService),
        __metadata("design:type", file_download_service_1.FileDownloadService)
    ], FileDownloadCommandContribution.prototype, "downloadService", void 0);
    __decorate([
        inversify_1.inject(selection_service_1.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], FileDownloadCommandContribution.prototype, "selectionService", void 0);
    FileDownloadCommandContribution = __decorate([
        inversify_1.injectable()
    ], FileDownloadCommandContribution);
    return FileDownloadCommandContribution;
}());
exports.FileDownloadCommandContribution = FileDownloadCommandContribution;
var FileDownloadCommands;
(function (FileDownloadCommands) {
    FileDownloadCommands.DOWNLOAD = {
        id: 'file.download',
        category: 'File',
        label: 'Download'
    };
    FileDownloadCommands.COPY_DOWNLOAD_LINK = {
        id: 'file.copyDownloadLink',
        category: 'File',
        label: 'Copy Download Link'
    };
})(FileDownloadCommands = exports.FileDownloadCommands || (exports.FileDownloadCommands = {}));
//# sourceMappingURL=file-download-command-contribution.js.map
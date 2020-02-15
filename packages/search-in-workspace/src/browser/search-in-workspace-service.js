"use strict";
/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
var search_in_workspace_interface_1 = require("../common/search-in-workspace-interface");
var browser_1 = require("@theia/workspace/lib/browser");
var core_1 = require("@theia/core");
/**
 * Class that will receive the search results from the server.  This is separate
 * from the SearchInWorkspaceService class only to avoid a cycle in the
 * dependency injection.
 */
var SearchInWorkspaceClientImpl = /** @class */ (function () {
    function SearchInWorkspaceClientImpl() {
    }
    SearchInWorkspaceClientImpl.prototype.onResult = function (searchId, result) {
        this.service.onResult(searchId, result);
    };
    SearchInWorkspaceClientImpl.prototype.onDone = function (searchId, error) {
        this.service.onDone(searchId, error);
    };
    SearchInWorkspaceClientImpl.prototype.setService = function (service) {
        this.service = service;
    };
    SearchInWorkspaceClientImpl = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceClientImpl);
    return SearchInWorkspaceClientImpl;
}());
exports.SearchInWorkspaceClientImpl = SearchInWorkspaceClientImpl;
/**
 * Service to search text in the workspace files.
 */
var SearchInWorkspaceService = /** @class */ (function () {
    function SearchInWorkspaceService() {
        // All the searches that we have started, that are not done yet (onDone
        // with that searchId has not been called).
        this.pendingSearches = new Map();
        // Due to the asynchronicity of the node backend, it's possible that we
        // start a search, receive an event for that search, and then receive
        // the search id for that search.We therefore need to keep those
        // events until we get the search id and return it to the caller.
        // Otherwise the caller would discard the event because it doesn't know
        // the search id yet.
        this.pendingOnDones = new Map();
        this.lastKnownSearchId = -1;
    }
    SearchInWorkspaceService.prototype.init = function () {
        this.client.setService(this);
    };
    SearchInWorkspaceService.prototype.isEnabled = function () {
        return this.workspaceService.opened;
    };
    SearchInWorkspaceService.prototype.onResult = function (searchId, result) {
        var callbacks = this.pendingSearches.get(searchId);
        if (callbacks) {
            callbacks.onResult(searchId, result);
        }
    };
    SearchInWorkspaceService.prototype.onDone = function (searchId, error) {
        var callbacks = this.pendingSearches.get(searchId);
        if (callbacks) {
            this.pendingSearches.delete(searchId);
            callbacks.onDone(searchId, error);
        }
        else {
            if (searchId > this.lastKnownSearchId) {
                this.logger.debug("Got an onDone for a searchId we don't know about (" + searchId + "), stashing it for later with error = ", error);
                this.pendingOnDones.set(searchId, error);
            }
            else {
                // It's possible to receive an onDone for a search we have cancelled.  Just ignore it.
                this.logger.debug("Got an onDone for a searchId we don't know about (" + searchId + "), but it's probably an old one, error = ", error);
            }
        }
    };
    // Start a search of the string "what" in the workspace.
    SearchInWorkspaceService.prototype.search = function (what, callbacks, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var roots, searchId, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.workspaceService.open) {
                            throw new Error('Search failed: no workspace root.');
                        }
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _a.sent();
                        return [4 /*yield*/, this.searchServer.search(what, roots.map(function (r) { return r.uri; }), opts)];
                    case 2:
                        searchId = _a.sent();
                        this.pendingSearches.set(searchId, callbacks);
                        this.lastKnownSearchId = searchId;
                        this.logger.debug('Service launched search ' + searchId);
                        // Check if we received an onDone before search() returned.
                        if (this.pendingOnDones.has(searchId)) {
                            this.logger.debug('Ohh, we have a stashed onDone for that searchId');
                            error_1 = this.pendingOnDones.get(searchId);
                            this.pendingOnDones.delete(searchId);
                            // Call the client's searchId, but first give it a
                            // chance to record the returned searchId.
                            setTimeout(function () {
                                _this.onDone(searchId, error_1);
                            }, 0);
                        }
                        return [2 /*return*/, searchId];
                }
            });
        });
    };
    // Cancel an ongoing search.
    SearchInWorkspaceService.prototype.cancel = function (searchId) {
        this.pendingSearches.delete(searchId);
        this.searchServer.cancel(searchId);
    };
    __decorate([
        inversify_1.inject(search_in_workspace_interface_1.SearchInWorkspaceServer),
        __metadata("design:type", Object)
    ], SearchInWorkspaceService.prototype, "searchServer", void 0);
    __decorate([
        inversify_1.inject(SearchInWorkspaceClientImpl),
        __metadata("design:type", SearchInWorkspaceClientImpl)
    ], SearchInWorkspaceService.prototype, "client", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], SearchInWorkspaceService.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], SearchInWorkspaceService.prototype, "logger", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceService.prototype, "init", null);
    SearchInWorkspaceService = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceService);
    return SearchInWorkspaceService;
}());
exports.SearchInWorkspaceService = SearchInWorkspaceService;
//# sourceMappingURL=search-in-workspace-service.js.map
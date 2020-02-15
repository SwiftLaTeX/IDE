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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
var inversify_1 = require("inversify");
var common_1 = require("../common");
var uri_1 = require("@theia/core/lib/common/uri");
var git_repository_provider_1 = require("./git-repository-provider");
var git_resource_1 = require("./git-resource");
var GitResourceResolver = /** @class */ (function () {
    function GitResourceResolver(git, repositoryProvider) {
        this.git = git;
        this.repositoryProvider = repositoryProvider;
    }
    GitResourceResolver.prototype.resolve = function (uri) {
        if (uri.scheme !== git_resource_1.GIT_RESOURCE_SCHEME) {
            throw new Error("Expected a URI with " + git_resource_1.GIT_RESOURCE_SCHEME + " scheme. Was: " + uri + ".");
        }
        return this.getResource(uri);
    };
    GitResourceResolver.prototype.getResource = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRepository(uri)];
                    case 1:
                        repository = _a.sent();
                        return [2 /*return*/, new git_resource_1.GitResource(uri, repository, this.git)];
                }
            });
        });
    };
    GitResourceResolver.prototype.getRepository = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var fileUri, repositories, sortedRepositories, sortedRepositories_1, sortedRepositories_1_1, repository, localUri, localUriStr;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fileUri = uri.withScheme('file');
                        repositories = this.repositoryProvider.allRepositories;
                        if (!(repositories.length === 0)) return [3 /*break*/, 2];
                        // So let's make sure, the repository provider state is in sync with the backend.
                        return [4 /*yield*/, this.repositoryProvider.refresh()];
                    case 1:
                        // So let's make sure, the repository provider state is in sync with the backend.
                        _b.sent();
                        repositories.push.apply(repositories, __spread(this.repositoryProvider.allRepositories));
                        _b.label = 2;
                    case 2:
                        sortedRepositories = repositories.sort(function (a, b) { return b.localUri.length - a.localUri.length; });
                        try {
                            for (sortedRepositories_1 = __values(sortedRepositories), sortedRepositories_1_1 = sortedRepositories_1.next(); !sortedRepositories_1_1.done; sortedRepositories_1_1 = sortedRepositories_1.next()) {
                                repository = sortedRepositories_1_1.value;
                                localUri = new uri_1.default(repository.localUri);
                                localUriStr = localUri.withScheme('file').toString();
                                if (fileUri.toString().startsWith(localUriStr)) {
                                    return [2 /*return*/, { localUri: localUriStr }];
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (sortedRepositories_1_1 && !sortedRepositories_1_1.done && (_a = sortedRepositories_1.return)) _a.call(sortedRepositories_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    GitResourceResolver = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.Git)),
        __param(1, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __metadata("design:paramtypes", [Object, git_repository_provider_1.GitRepositoryProvider])
    ], GitResourceResolver);
    return GitResourceResolver;
}());
exports.GitResourceResolver = GitResourceResolver;
//# sourceMappingURL=git-resource-resolver.js.map
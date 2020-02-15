"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var common_2 = require("@theia/filesystem/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var user_storage_uri_1 = require("./user-storage-uri");
exports.THEIA_USER_STORAGE_FOLDER = '.swiftlatex';
var UserStorageServiceFilesystemImpl = /** @class */ (function () {
    function UserStorageServiceFilesystemImpl(fileSystem, watcher, logger) {
        var _this = this;
        this.fileSystem = fileSystem;
        this.watcher = watcher;
        this.logger = logger;
        this.toDispose = new common_1.DisposableCollection();
        this.onUserStorageChangedEmitter = new common_1.Emitter();
        this.userStorageFolder = this.fileSystem.getCurrentUserHome().then(function (home) {
            if (home) {
                var userStorageFolderUri = new uri_1.default(home.uri).resolve(exports.THEIA_USER_STORAGE_FOLDER);
                watcher.watchFileChanges(userStorageFolderUri).then(function (disposable) {
                    return _this.toDispose.push(disposable);
                });
                _this.toDispose.push(_this.watcher.onFilesChanged(function (changes) { return _this.onDidFilesChanged(changes); }));
                return new uri_1.default(home.uri).resolve(exports.THEIA_USER_STORAGE_FOLDER);
            }
        });
        this.toDispose.push(this.onUserStorageChangedEmitter);
    }
    UserStorageServiceFilesystemImpl_1 = UserStorageServiceFilesystemImpl;
    UserStorageServiceFilesystemImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    UserStorageServiceFilesystemImpl.prototype.onDidFilesChanged = function (event) {
        var _this = this;
        var uris = [];
        this.userStorageFolder.then(function (folder) {
            var e_1, _a;
            if (folder) {
                try {
                    for (var event_1 = __values(event), event_1_1 = event_1.next(); !event_1_1.done; event_1_1 = event_1.next()) {
                        var change = event_1_1.value;
                        if (folder.isEqualOrParent(change.uri)) {
                            var userStorageUri = UserStorageServiceFilesystemImpl_1.toUserStorageUri(folder, change.uri);
                            uris.push(userStorageUri);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (event_1_1 && !event_1_1.done && (_a = event_1.return)) _a.call(event_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (uris.length > 0) {
                    _this.onUserStorageChangedEmitter.fire({ uris: uris });
                }
            }
        });
    };
    UserStorageServiceFilesystemImpl.prototype.readContents = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var folderUri, filesystemUri, exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userStorageFolder];
                    case 1:
                        folderUri = _a.sent();
                        if (!folderUri) return [3 /*break*/, 3];
                        filesystemUri = UserStorageServiceFilesystemImpl_1.toFilesystemURI(folderUri, uri);
                        return [4 /*yield*/, this.fileSystem.exists(filesystemUri.toString())];
                    case 2:
                        exists = _a.sent();
                        if (exists) {
                            return [2 /*return*/, this.fileSystem.resolveContent(filesystemUri.toString()).then(function (_a) {
                                    var stat = _a.stat, content = _a.content;
                                    return content;
                                })];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, ''];
                }
            });
        });
    };
    UserStorageServiceFilesystemImpl.prototype.saveContents = function (uri, content) {
        return __awaiter(this, void 0, void 0, function () {
            var folderUri, filesystemUri, fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userStorageFolder];
                    case 1:
                        folderUri = _a.sent();
                        if (!folderUri) {
                            return [2 /*return*/];
                        }
                        filesystemUri = UserStorageServiceFilesystemImpl_1.toFilesystemURI(folderUri, uri);
                        return [4 /*yield*/, this.fileSystem.getFileStat(filesystemUri.toString())];
                    case 2:
                        fileStat = _a.sent();
                        if (fileStat) {
                            this.fileSystem.setContent(fileStat, content).then(function () { return Promise.resolve(); });
                        }
                        else {
                            this.fileSystem.createFile(filesystemUri.toString(), { content: content });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(UserStorageServiceFilesystemImpl.prototype, "onUserStorageChanged", {
        get: function () {
            return this.onUserStorageChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new user storage URI from the filesystem URI.
     * @param userStorageFolderUri User storage folder URI
     * @param fsPath The filesystem URI
     */
    UserStorageServiceFilesystemImpl.toUserStorageUri = function (userStorageFolderUri, rawUri) {
        var userStorageRelativePath = this.getRelativeUserStoragePath(userStorageFolderUri, rawUri);
        return new uri_1.default('').withScheme(user_storage_uri_1.UserStorageUri.SCHEME).withPath(userStorageRelativePath).withFragment(rawUri.fragment).withQuery(rawUri.query);
    };
    /**
     * Returns the path relative to the user storage filesystem uri i.e if the user storage root is
     * 'file://home/user/.theia' and the fileUri is 'file://home/user.theia/keymaps.json' it will return 'keymaps.json'
     * @param userStorageFolderUri User storage folder URI
     * @param fileUri User storage
     */
    UserStorageServiceFilesystemImpl.getRelativeUserStoragePath = function (userStorageFolderUri, fileUri) {
        /* + 1 so that it removes the beginning slash  i.e return keymaps.json and not /keymaps.json */
        return fileUri.toString().slice(userStorageFolderUri.toString().length + 1);
    };
    /**
     * Returns the associated filesystem URI relative to the user storage folder passed as argument.
     * @param userStorageFolderUri User storage folder URI
     * @param userStorageUri User storage URI to be converted in filesystem URI
     */
    UserStorageServiceFilesystemImpl.toFilesystemURI = function (userStorageFolderUri, userStorageUri) {
        return userStorageFolderUri.withPath(userStorageFolderUri.path.join(userStorageUri.path.toString()));
    };
    var UserStorageServiceFilesystemImpl_1;
    UserStorageServiceFilesystemImpl = UserStorageServiceFilesystemImpl_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_2.FileSystem)),
        __param(1, inversify_1.inject(filesystem_watcher_1.FileSystemWatcher)),
        __param(2, inversify_1.inject(common_1.ILogger)),
        __metadata("design:paramtypes", [Object, filesystem_watcher_1.FileSystemWatcher, Object])
    ], UserStorageServiceFilesystemImpl);
    return UserStorageServiceFilesystemImpl;
}());
exports.UserStorageServiceFilesystemImpl = UserStorageServiceFilesystemImpl;
//# sourceMappingURL=user-storage-service-filesystem.js.map
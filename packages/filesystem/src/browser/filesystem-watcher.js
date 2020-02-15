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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var filesystem_1 = require("../common/filesystem");
var filesystem_watcher_protocol_1 = require("../common/filesystem-watcher-protocol");
exports.FileChangeType = filesystem_watcher_protocol_1.FileChangeType;
var filesystem_preferences_1 = require("./filesystem-preferences");
var FileChange;
(function (FileChange) {
    function isUpdated(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.UPDATED && uri.toString() === change.uri.toString();
    }
    FileChange.isUpdated = isUpdated;
    function isAdded(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.ADDED && uri.toString() === change.uri.toString();
    }
    FileChange.isAdded = isAdded;
    function isDeleted(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.DELETED && change.uri.isEqualOrParent(uri);
    }
    FileChange.isDeleted = isDeleted;
    function isAffected(change, uri) {
        return isDeleted(change, uri) || uri.toString() === change.uri.toString();
    }
    FileChange.isAffected = isAffected;
    function isChanged(change, uri) {
        return !isDeleted(change, uri) && uri.toString() === change.uri.toString();
    }
    FileChange.isChanged = isChanged;
})(FileChange = exports.FileChange || (exports.FileChange = {}));
var FileChangeEvent;
(function (FileChangeEvent) {
    function isUpdated(event, uri) {
        return event.some(function (change) { return FileChange.isUpdated(change, uri); });
    }
    FileChangeEvent.isUpdated = isUpdated;
    function isAdded(event, uri) {
        return event.some(function (change) { return FileChange.isAdded(change, uri); });
    }
    FileChangeEvent.isAdded = isAdded;
    function isDeleted(event, uri) {
        return event.some(function (change) { return FileChange.isDeleted(change, uri); });
    }
    FileChangeEvent.isDeleted = isDeleted;
    function isAffected(event, uri) {
        return event.some(function (change) { return FileChange.isAffected(change, uri); });
    }
    FileChangeEvent.isAffected = isAffected;
    function isChanged(event, uri) {
        return !isDeleted(event, uri) && event.some(function (change) { return FileChange.isChanged(change, uri); });
    }
    FileChangeEvent.isChanged = isChanged;
})(FileChangeEvent = exports.FileChangeEvent || (exports.FileChangeEvent = {}));
var FileMoveEvent;
(function (FileMoveEvent) {
    function isRename(_a) {
        var sourceUri = _a.sourceUri, targetUri = _a.targetUri;
        return sourceUri.parent.toString() === targetUri.parent.toString();
    }
    FileMoveEvent.isRename = isRename;
})(FileMoveEvent = exports.FileMoveEvent || (exports.FileMoveEvent = {}));
var FileSystemWatcher = /** @class */ (function () {
    function FileSystemWatcher() {
        this.toDispose = new common_1.DisposableCollection();
        this.toRestartAll = new common_1.DisposableCollection();
        this.onFileChangedEmitter = new common_1.Emitter();
        this.onFilesChanged = this.onFileChangedEmitter.event;
        this.onDidMoveEmitter = new common_1.Emitter();
        this.onDidMove = this.onDidMoveEmitter.event;
        this.onWillMoveEmitter = new common_1.Emitter();
        this.onWillMove = this.onWillMoveEmitter.event;
    }
    FileSystemWatcher.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.onFileChangedEmitter);
        this.toDispose.push(this.onDidMoveEmitter);
        this.toDispose.push(this.onWillMoveEmitter);
        this.toDispose.push(this.server);
        this.server.setClient({
            onDidFilesChanged: function (e) { return _this.onDidFilesChanged(e); }
        });
        this.toDispose.push(this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'files.watcherExclude') {
                _this.toRestartAll.dispose();
            }
        }));
        this.filesystem.setClient({
            shouldOverwrite: this.shouldOverwrite.bind(this),
            onDidMove: this.fireDidMove.bind(this),
            onWillMove: this.fireWillMove.bind(this)
        });
    };
    /**
     * Stop watching.
     */
    FileSystemWatcher.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileSystemWatcher.prototype.onDidFilesChanged = function (event) {
        var changes = event.changes.map(function (change) { return ({
            uri: new uri_1.default(change.uri),
            type: change.type
        }); });
        this.onFileChangedEmitter.fire(changes);
    };
    /**
     * Start file watching under the given uri.
     *
     * Resolve when watching is started.
     * Return a disposable to stop file watching under the given uri.
     */
    FileSystemWatcher.prototype.watchFileChanges = function (uri) {
        var _this = this;
        return this.createWatchOptions(uri.toString())
            .then(function (options) {
            return _this.server.watchFileChanges(uri.toString(), options);
        })
            .then(function (watcher) {
            var toDispose = new common_1.DisposableCollection();
            var toStop = common_1.Disposable.create(function () {
                return _this.server.unwatchFileChanges(watcher);
            });
            var toRestart = toDispose.push(toStop);
            _this.toRestartAll.push(common_1.Disposable.create(function () {
                toRestart.dispose();
                toStop.dispose();
                _this.watchFileChanges(uri).then(function (disposable) {
                    return toDispose.push(disposable);
                });
            }));
            return toDispose;
        });
    };
    FileSystemWatcher.prototype.createWatchOptions = function (uri) {
        return this.getIgnored(uri).then(function (ignored) { return ({
            // always ignore temporary upload files
            ignored: ignored.concat('**/theia_upload_*')
        }); });
    };
    FileSystemWatcher.prototype.getIgnored = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var patterns;
            return __generator(this, function (_a) {
                patterns = this.preferences.get('files.watcherExclude', undefined, uri);
                return [2 /*return*/, Object.keys(patterns).filter(function (pattern) { return patterns[pattern]; })];
            });
        });
    };
    FileSystemWatcher.prototype.fireDidMove = function (sourceUri, targetUri) {
        this.onDidMoveEmitter.fire({
            sourceUri: new uri_1.default(sourceUri),
            targetUri: new uri_1.default(targetUri)
        });
    };
    FileSystemWatcher.prototype.fireWillMove = function (sourceUri, targetUri) {
        this.onWillMoveEmitter.fire({
            sourceUri: new uri_1.default(sourceUri),
            targetUri: new uri_1.default(targetUri)
        });
    };
    __decorate([
        inversify_1.inject(filesystem_watcher_protocol_1.FileSystemWatcherServer),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "server", void 0);
    __decorate([
        inversify_1.inject(filesystem_preferences_1.FileSystemPreferences),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileShouldOverwrite),
        __metadata("design:type", Function)
    ], FileSystemWatcher.prototype, "shouldOverwrite", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileSystemWatcher.prototype, "init", null);
    FileSystemWatcher = __decorate([
        inversify_1.injectable()
    ], FileSystemWatcher);
    return FileSystemWatcher;
}());
exports.FileSystemWatcher = FileSystemWatcher;
//# sourceMappingURL=filesystem-watcher.js.map
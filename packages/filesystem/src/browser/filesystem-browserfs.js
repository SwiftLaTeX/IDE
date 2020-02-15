"use strict";
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
/********************************************************************************
 * Copyright (C) 2019 Elliott Wen and Gerald Weber.
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
var inversify_1 = require("inversify");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var uri_1 = require("@theia/core/lib/common/uri");
var vscode_uri_1 = require("vscode-uri");
var lsp_types_1 = require("@theia/core/lib/common/lsp-types");
var filesystem_1 = require("../common/filesystem");
var s3storagesystem_1 = require("./s3storagesystem");
var FileSystemBrowserOptions = /** @class */ (function () {
    function FileSystemBrowserOptions() {
    }
    FileSystemBrowserOptions.DEFAULT = {
        encoding: 'utf8',
        overwrite: false,
        recursive: true,
        moveToTrash: false
    };
    FileSystemBrowserOptions = __decorate([
        inversify_1.injectable()
    ], FileSystemBrowserOptions);
    return FileSystemBrowserOptions;
}());
exports.FileSystemBrowserOptions = FileSystemBrowserOptions;
/* eslint-disable @typescript-eslint/no-explicit-any */
var FileUriLite;
(function (FileUriLite) {
    function create(fsPath_) {
        return new uri_1.default(vscode_uri_1.default.file(fsPath_));
    }
    FileUriLite.create = create;
    function fsPath(uri) {
        if (typeof uri === 'string') {
            return fsPath(new uri_1.default(uri));
        }
        else {
            var fsPathFromVsCodeUri = uri.codeUri.fsPath;
            return fsPathFromVsCodeUri;
        }
    }
    FileUriLite.fsPath = fsPath;
})(FileUriLite = exports.FileUriLite || (exports.FileUriLite = {}));
var BrowserFileSystem = /** @class */ (function () {
    // private _s3fs_lock: boolean;
    function BrowserFileSystem(options, _s3fs) {
        if (options === void 0) { options = FileSystemBrowserOptions.DEFAULT; }
        this.options = options;
        this._s3fs = _s3fs;
    }
    BrowserFileSystem.prototype.setClient = function (client) {
        this.client = client;
    };
    BrowserFileSystem.prototype.getFileStat = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var uri_, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri_ = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(uri_, 1)];
                    case 1:
                        stat = _a.sent();
                        return [2 /*return*/, stat];
                }
            });
        });
    };
    BrowserFileSystem.prototype.exists = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    BrowserFileSystem.prototype.resolveContent = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, encoding, contentBuffer, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(uri, 'Cannot resolve the content.');
                        }
                        encoding = this.doGetEncoding(options);
                        if (encoding !== 'utf8') {
                            throw filesystem_1.FileSystemError.FileExists(_uri, 'Unsupported File Encoding. ' + encoding);
                        }
                        return [4 /*yield*/, this._s3fs.readFile(FileUriLite.fsPath(_uri))];
                    case 2:
                        contentBuffer = _a.sent();
                        content = contentBuffer.toString();
                        return [2 /*return*/, { stat: stat, content: content }];
                }
            });
        });
    };
    BrowserFileSystem.prototype.setContent = function (file, content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, encoding, newStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(file.uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(file.uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(file.uri, 'Cannot set the content.');
                        }
                        encoding = this.doGetEncoding(options);
                        if (encoding !== 'utf8') {
                            throw filesystem_1.FileSystemError.FileExists(_uri, 'Unsupported File Encoding. ' + encoding);
                        }
                        // const encodedContent = iconv.encode(content, encoding);
                        return [4 /*yield*/, this._s3fs.writeFile(FileUriLite.fsPath(_uri), content)];
                    case 2:
                        // const encodedContent = iconv.encode(content, encoding);
                        _a.sent();
                        return [4 /*yield*/, this.doGetStat(_uri, 1)];
                    case 3:
                        newStat = _a.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        // this.fileSystemWatcherServer.kernel_notify(file.uri);
                        throw filesystem_1.FileSystemError.FileNotFound(file.uri, 'Error occurred while writing file content.');
                }
            });
        });
    };
    BrowserFileSystem.prototype.updateContent = function (file, contentChanges, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, encoding, contentBuffer, content, newContent, newStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(file.uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(file.uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(file.uri, 'Cannot set the content.');
                        }
                        if (contentChanges.length === 0 && !(options && options.overwriteEncoding)) {
                            return [2 /*return*/, stat];
                        }
                        encoding = this.doGetEncoding(options);
                        if (encoding !== 'utf8') {
                            throw filesystem_1.FileSystemError.FileExists(_uri, 'Unsupported File Encoding. ' + encoding);
                        }
                        return [4 /*yield*/, this._s3fs.readFile(FileUriLite.fsPath(_uri))];
                    case 2:
                        contentBuffer = _a.sent();
                        content = contentBuffer.toString();
                        newContent = this.applyContentChanges(content, contentChanges);
                        return [4 /*yield*/, this._s3fs.writeFile(FileUriLite.fsPath(_uri), newContent)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.doGetStat(_uri, 1)];
                    case 4:
                        newStat = _a.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        // this.fileSystemWatcherServer.kernel_notify(file.uri);
                        throw filesystem_1.FileSystemError.FileNotFound(file.uri, 'Error occurred while writing file content.');
                }
            });
        });
    };
    BrowserFileSystem.prototype.applyContentChanges = function (content, contentChanges) {
        var e_1, _a;
        var document = vscode_languageserver_types_1.TextDocument.create('', '', 1, content);
        try {
            for (var contentChanges_1 = __values(contentChanges), contentChanges_1_1 = contentChanges_1.next(); !contentChanges_1_1.done; contentChanges_1_1 = contentChanges_1.next()) {
                var change = contentChanges_1_1.value;
                var newContent = void 0;
                if (lsp_types_1.TextDocumentContentChangeDelta.is(change)) {
                    var start = document.offsetAt(change.range.start);
                    var end = document.offsetAt(change.range.end);
                    newContent = document.getText().substr(0, start) + change.text + document.getText().substr(end);
                }
                else {
                    newContent = change.text;
                }
                document = vscode_languageserver_types_1.TextDocument.create(document.uri, document.languageId, document.version, newContent);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (contentChanges_1_1 && !contentChanges_1_1.done && (_a = contentChanges_1.return)) _a.call(contentChanges_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return document.getText();
    };
    BrowserFileSystem.prototype.move = function (sourceUri, targetUri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.client) {
                            this.client.onWillMove(sourceUri, targetUri);
                        }
                        return [4 /*yield*/, this.doMove(sourceUri, targetUri, options)];
                    case 1:
                        result = _a.sent();
                        if (this.client) {
                            this.client.onDidMove(sourceUri, targetUri);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BrowserFileSystem.prototype.doMove = function (sourceUri, targetUri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _sourceUri, _targetUri, overwrite, _a, sourceStat, targetStat, stats;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _sourceUri = new uri_1.default(sourceUri);
                        _targetUri = new uri_1.default(targetUri);
                        overwrite = this.doGetOverwrite(options);
                        return [4 /*yield*/, Promise.all([this.doGetStat(_sourceUri, 1), this.doGetStat(_targetUri, 1)])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), sourceStat = _a[0], targetStat = _a[1];
                        if (!sourceStat) {
                            throw filesystem_1.FileSystemError.FileNotFound(sourceUri);
                        }
                        if (targetStat && !overwrite) {
                            throw filesystem_1.FileSystemError.FileExists(targetUri, "Did you set the 'overwrite' flag to true?");
                        }
                        // Different types. Files <-> Directory.
                        if (targetStat && sourceStat.isDirectory !== targetStat.isDirectory) {
                            if (targetStat.isDirectory) {
                                throw filesystem_1.FileSystemError.FileIsDirectory(targetStat.uri, "Cannot move '" + sourceStat.uri + "' file to an existing location.");
                            }
                            throw filesystem_1.FileSystemError.FileNotDirectory(targetStat.uri, "Cannot move '" + sourceStat.uri + "' directory to an existing location.");
                        }
                        return [4 /*yield*/, this._s3fs.ensureDirExist(FileUriLite.fsPath(_targetUri.parent))];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this._s3fs.rename(FileUriLite.fsPath(_sourceUri), FileUriLite.fsPath(_targetUri))];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.doGetStat(_targetUri, 1)];
                    case 4:
                        stats = _b.sent();
                        if (stats) {
                            return [2 /*return*/, stats];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(_targetUri, "Error occurred when doing recursive move '" + sourceUri + "' to '" + targetUri + "'.");
                }
            });
        });
    };
    BrowserFileSystem.prototype.copy = function (sourceUri, targetUri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _sourceUri, _targetUri, recursive, overwrite, _a, sourceStat, targetStat, newStat;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _sourceUri = new uri_1.default(sourceUri);
                        _targetUri = new uri_1.default(targetUri);
                        recursive = this.doGetRecursive(options);
                        overwrite = this.doGetOverwrite(options);
                        return [4 /*yield*/, Promise.all([
                                this.doGetStat(_sourceUri, 0),
                                this.doGetStat(_targetUri, 0),
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), sourceStat = _a[0], targetStat = _a[1];
                        if (!sourceStat) {
                            throw filesystem_1.FileSystemError.FileNotFound(sourceUri);
                        }
                        if (targetStat && !overwrite) {
                            throw filesystem_1.FileSystemError.FileExists(targetUri, "Did you set the 'overwrite' flag to true?");
                        }
                        if (targetStat && targetStat.uri === sourceStat.uri) {
                            throw filesystem_1.FileSystemError.FileExists(targetUri, 'Cannot perform copy, source and destination are the same.');
                        }
                        if (targetStat && !targetStat.isDirectory && sourceStat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileExists(targetUri, 'Cannot perform copy, source is directory and destination is a file.');
                        }
                        // await this.doCopyFile(_sourceUri, _targetUri, overwrite, recursive);
                        if (!recursive && sourceStat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileExists(targetUri, 'Cannot perform copy directory when recursive is off');
                        }
                        return [4 /*yield*/, this._s3fs.ensureDirExist(FileUriLite.fsPath(_targetUri.parent))];
                    case 2:
                        _b.sent();
                        if (!sourceStat.isDirectory) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._s3fs.copyFolder(FileUriLite.fsPath(_sourceUri), FileUriLite.fsPath(_targetUri))];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this._s3fs.copyFile(FileUriLite.fsPath(_sourceUri), FileUriLite.fsPath(_targetUri))];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [4 /*yield*/, this.doGetStat(_targetUri, 1)];
                    case 7:
                        newStat = _b.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(targetUri, "Error occurred while copying " + sourceUri + " to " + targetUri + ".");
                }
            });
        });
    };
    BrowserFileSystem.prototype.createFile = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, parentUri, _a, stat, parentStat, content, encoding, newStat;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        parentUri = _uri.parent;
                        return [4 /*yield*/, Promise.all([this.doGetStat(_uri, 0), this.doGetStat(parentUri, 0)])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), stat = _a[0], parentStat = _a[1];
                        if (stat) {
                            throw filesystem_1.FileSystemError.FileExists(uri, 'Error occurred while creating the file.');
                        }
                        if (!!parentStat) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._s3fs.ensureDirExist(FileUriLite.fsPath(parentUri))];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        content = this.doGetContent(options);
                        encoding = this.doGetEncoding(options);
                        if (encoding !== 'utf8') {
                            throw filesystem_1.FileSystemError.FileExists(uri, 'Unsupported File Encoding. ' + encoding);
                        }
                        // const encodedNewContent = iconv.encode(content, encoding);
                        return [4 /*yield*/, this._s3fs.writeFile(FileUriLite.fsPath(_uri), content)];
                    case 4:
                        // const encodedNewContent = iconv.encode(content, encoding);
                        _b.sent();
                        return [4 /*yield*/, this.doGetStat(_uri, 1)];
                    case 5:
                        newStat = _b.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(uri, 'Error occurred while creating the file.');
                }
            });
        });
    };
    BrowserFileSystem.prototype.createFolder = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, newStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (stat) {
                            if (stat.isDirectory) {
                                return [2 /*return*/, stat];
                            }
                            throw filesystem_1.FileSystemError.FileExists(uri, 'Error occurred while creating the directory: path is a file.');
                        }
                        return [4 /*yield*/, this._s3fs.ensureDirExist(FileUriLite.fsPath(_uri))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.doGetStat(_uri, 1)];
                    case 3:
                        newStat = _a.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(uri, 'Error occurred while creating the directory.');
                }
            });
        });
    };
    BrowserFileSystem.prototype.touchFile = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw filesystem_1.FileSystemError.FileExists(uri, 'Touchfile not implemented delete');
            });
        });
    };
    BrowserFileSystem.prototype.delete = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(uri);
                        }
                        return [4 /*yield*/, this._s3fs.delete(FileUriLite.fsPath(_uri))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserFileSystem.prototype.getEncoding = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(uri, 'Cannot get the encoding.');
                        }
                        return [2 /*return*/, this.options.encoding];
                }
            });
        });
    };
    BrowserFileSystem.prototype.guessEncoding = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('guessEncoding is dummy: ' + uri);
                return [2 /*return*/, 'utf8'];
            });
        });
    };
    BrowserFileSystem.prototype.getRoots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cwdRoot, rootUri, root;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cwdRoot = '/';
                        rootUri = FileUriLite.create(cwdRoot);
                        return [4 /*yield*/, this.doGetStat(rootUri, 1)];
                    case 1:
                        root = _a.sent();
                        if (root) {
                            return [2 /*return*/, [root]];
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    BrowserFileSystem.prototype.getCurrentUserHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getFileStat(FileUriLite.create('/').toString())];
            });
        });
    };
    BrowserFileSystem.prototype.getDrives = function () {
        return new Promise(function (resolve, reject) { resolve(['/']); });
    };
    BrowserFileSystem.prototype.dispose = function () {
        // NOOP
    };
    BrowserFileSystem.prototype.access = function (uri, mode) {
        if (mode === void 0) { mode = filesystem_1.FileAccess.Constants.F_OK; }
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    BrowserFileSystem.prototype.getFsPath = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!uri.startsWith('file:/')) {
                    return [2 /*return*/, undefined];
                }
                else {
                    return [2 /*return*/, FileUriLite.fsPath(uri)];
                }
                return [2 /*return*/];
            });
        });
    };
    BrowserFileSystem.prototype.doGetStat = function (uri, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var s3obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._s3fs.stat(FileUriLite.fsPath(uri))];
                    case 1:
                        s3obj = _a.sent();
                        if (s3obj) {
                            if (s3obj.isDir) {
                                return [2 /*return*/, this.doCreateDirectoryStat(uri, s3obj, depth)];
                            }
                            else {
                                return [2 /*return*/, this.doCreateFileStat(uri, s3obj)];
                            }
                        }
                        else {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserFileSystem.prototype.doCreateFileStat = function (uri, stat) {
        return {
            uri: uri.toString(),
            lastModification: stat.modifiedTime.getTime(),
            isDirectory: stat.isDir,
            size: stat.size
        };
    };
    BrowserFileSystem.prototype.doCreateDirectoryStat = function (uri, stat, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var children, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(depth > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doGetChildren(uri, depth)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = [];
                        _b.label = 3;
                    case 3:
                        children = _a;
                        return [2 /*return*/, {
                                uri: uri.toString(),
                                lastModification: stat.modifiedTime.getTime(),
                                isDirectory: true,
                                children: children
                            }];
                }
            });
        });
    };
    BrowserFileSystem.prototype.doGetChildren = function (uri, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var files, children;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._s3fs.readdir(FileUriLite.fsPath(uri))];
                    case 1:
                        files = _a.sent();
                        children = [];
                        files.forEach(function (v) {
                            // console.log(v.uri);
                            var _uri = new uri_1.default(v.uri);
                            // console.log(v.uri);
                            // console.log(v.isDir);
                            children.push(_this.doCreateFileStat(_uri, v));
                        });
                        return [2 /*return*/, children];
                }
            });
        });
    };
    BrowserFileSystem.prototype.doGetEncoding = function (option) {
        return option && typeof (option.encoding) !== 'undefined'
            ? option.encoding
            : this.options.encoding;
    };
    BrowserFileSystem.prototype.doGetOverwrite = function (option) {
        return option && typeof (option.overwrite) !== 'undefined'
            ? option.overwrite
            : this.options.overwrite;
    };
    BrowserFileSystem.prototype.doGetRecursive = function (option) {
        return option && typeof (option.recursive) !== 'undefined'
            ? option.recursive
            : this.options.recursive;
    };
    BrowserFileSystem.prototype.doGetContent = function (option) {
        return (option && option.content) || '';
    };
    BrowserFileSystem = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(FileSystemBrowserOptions)), __param(0, inversify_1.optional()),
        __param(1, inversify_1.inject(s3storagesystem_1.S3StorageSystem)),
        __metadata("design:paramtypes", [FileSystemBrowserOptions,
            s3storagesystem_1.S3StorageSystem])
    ], BrowserFileSystem);
    return BrowserFileSystem;
}());
exports.BrowserFileSystem = BrowserFileSystem;
//# sourceMappingURL=filesystem-browserfs.js.map
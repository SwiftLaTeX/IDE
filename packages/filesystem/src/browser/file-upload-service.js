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
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var cancellation_1 = require("@theia/core/lib/common/cancellation");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var message_service_1 = require("@theia/core/lib/common/message-service");
// import { Endpoint } from '@theia/core/lib/browser/endpoint';
var s3storagesystem_1 = require("./s3storagesystem");
var filesystem_browserfs_1 = require("./filesystem-browserfs");
var throttle = require("lodash.throttle");
var MAXFILESIZE = 2048 * 1023;
var MAXFILENUMBER = 128;
var FileUploadService = /** @class */ (function () {
    function FileUploadService() {
    }
    FileUploadService_1 = FileUploadService;
    FileUploadService.prototype.init = function () {
        this.uploadForm = this.createUploadForm();
    };
    FileUploadService.prototype.createUploadForm = function () {
        var _this = this;
        var targetInput = document.createElement('input');
        targetInput.type = 'text';
        targetInput.name = FileUploadService_1.TARGET;
        targetInput.classList.add('theia-input');
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.classList.add('theia-input');
        fileInput.name = FileUploadService_1.UPLOAD;
        fileInput.multiple = true;
        var form = document.createElement('form');
        form.style.display = 'none';
        form.enctype = 'multipart/form-data';
        form.append(targetInput);
        form.append(fileInput);
        document.body.appendChild(form);
        fileInput.addEventListener('change', function () {
            if (_this.deferredUpload && fileInput.value) {
                var source_1 = new FormData(form);
                // clean up to allow upload to the same folder twice
                fileInput.value = '';
                var targetUri_1 = new uri_1.default(source_1.get(FileUploadService_1.TARGET));
                var _a = _this.deferredUpload, resolve = _a.resolve, reject = _a.reject;
                _this.deferredUpload = undefined;
                var onDidUpload_1 = _this.uploadForm.onDidUpload;
                _this.withProgress(function (progress, token) { return _this.doUpload(targetUri_1, { source: source_1, progress: progress, token: token, onDidUpload: onDidUpload_1 }); }, _this.uploadForm.progress).then(resolve, reject);
            }
        });
        return { targetInput: targetInput, fileInput: fileInput };
    };
    FileUploadService.prototype.upload = function (targetUri, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var source, onDidUpload;
            var _this = this;
            return __generator(this, function (_a) {
                source = params.source, onDidUpload = params.onDidUpload;
                if (source) {
                    return [2 /*return*/, this.withProgress(function (progress, token) { return _this.doUpload(new uri_1.default(String(targetUri)), { source: source, progress: progress, token: token, onDidUpload: onDidUpload }); }, params.progress)];
                }
                this.deferredUpload = new promise_util_1.Deferred();
                this.uploadForm.targetInput.value = String(targetUri);
                this.uploadForm.fileInput.click();
                this.uploadForm.progress = params.progress;
                this.uploadForm.onDidUpload = params.onDidUpload;
                return [2 /*return*/, this.deferredUpload.promise];
            });
        });
    };
    FileUploadService.prototype.doUpload = function (targetUri, _a) {
        var source = _a.source, progress = _a.progress, token = _a.token, onDidUpload = _a.onDidUpload;
        return __awaiter(this, void 0, void 0, function () {
            var result, total, done, totalFiles, doneFiles, reportProgress, deferredUpload, urilist_1, filelist_1, _loop_1, this_1, i, e_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = { uploaded: [] };
                        total = 0;
                        done = 0;
                        totalFiles = 0;
                        doneFiles = 0;
                        reportProgress = throttle(function () { return progress.report({
                            message: doneFiles + " out of " + totalFiles,
                            work: { done: done, total: total }
                        }); }, 60);
                        deferredUpload = new promise_util_1.Deferred();
                        // const endpoint = new Endpoint({ path: '/file-upload' });
                        // const socketOpen = new Deferred<void>();
                        // const socket = new WebSocket(endpoint.getWebSocketUrl().toString());
                        // socket.onerror = e => {
                        //     socketOpen.reject(e);
                        //     deferredUpload.reject(e);
                        // };
                        // socket.onclose = ({ code, reason }) => deferredUpload.reject(new Error(String(reason || code)));
                        // socket.onmessage = ({ data }) => {
                        //     const response = JSON.parse(data);
                        //     if (response.uri) {
                        //         doneFiles++;
                        //         result.uploaded.push(response.uri);
                        //         reportProgress();
                        //         if (onDidUpload) {
                        //             onDidUpload(response.uri);
                        //         }
                        //         return;
                        //     }
                        //     if (response.done) {
                        //         done = response.done;
                        //         reportProgress();
                        //         return;
                        //     }
                        //     if (response.ok) {
                        //         deferredUpload.resolve(result);
                        //     } else if (response.error) {
                        //         deferredUpload.reject(new Error(response.error));
                        //     } else {
                        //         console.error('unknown upload response: ' + response);
                        //     }
                        //     socket.close();
                        // };
                        // socket.onopen = () => socketOpen.resolve();
                        // const rejectAndClose = (e: Error) => {
                        //     deferredUpload.reject(e);
                        //     if (socket.readyState === 1) {
                        //         socket.close();
                        //     }
                        // };
                        token.onCancellationRequested(function () { return deferredUpload.reject(cancellation_1.cancelled()); });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        urilist_1 = [];
                        filelist_1 = [];
                        return [4 /*yield*/, this.index(targetUri, source, {
                                token: token,
                                progress: progress,
                                accept: function (_a) {
                                    var uri = _a.uri, file = _a.file;
                                    return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_b) {
                                            if (totalFiles > MAXFILENUMBER) {
                                                return [2 /*return*/];
                                            }
                                            total += file.size;
                                            totalFiles++;
                                            urilist_1.push(uri);
                                            filelist_1.push(file);
                                            return [2 /*return*/];
                                        });
                                    });
                                }
                            })];
                    case 2:
                        _b.sent();
                        reportProgress();
                        _loop_1 = function (i) {
                            var uri, file_1, dstPathWithScheme, dstPath, content, _dstUri, e_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        cancellation_1.checkCancelled(token);
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 6, , 7]);
                                        uri = urilist_1[i];
                                        file_1 = filelist_1[i];
                                        if (!(file_1.size > 0 && file_1.size < MAXFILESIZE)) return [3 /*break*/, 5];
                                        dstPathWithScheme = uri.toString();
                                        dstPath = uri.toString().substr(7);
                                        console.log('uploading ' + dstPath);
                                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                var fr = new FileReader();
                                                fr.onload = function () {
                                                    resolve(fr.result);
                                                };
                                                fr.readAsArrayBuffer(file_1);
                                            })];
                                    case 2:
                                        content = _a.sent();
                                        _dstUri = new uri_1.default(dstPath);
                                        return [4 /*yield*/, this_1.s3fs.ensureDirExist(filesystem_browserfs_1.FileUriLite.fsPath(_dstUri.parent))];
                                    case 3:
                                        _a.sent();
                                        // console.log('writing ' + content);
                                        return [4 /*yield*/, this_1.s3fs.writeFile(filesystem_browserfs_1.FileUriLite.fsPath(_dstUri), new Uint8Array(content))];
                                    case 4:
                                        // console.log('writing ' + content);
                                        _a.sent();
                                        // await new Promise(resolve => setTimeout(resolve, 3000));
                                        done += file_1.size;
                                        doneFiles++;
                                        result.uploaded.push(dstPathWithScheme);
                                        reportProgress();
                                        if (onDidUpload) {
                                            onDidUpload(dstPathWithScheme);
                                        }
                                        _a.label = 5;
                                    case 5: return [3 /*break*/, 7];
                                    case 6:
                                        e_2 = _a.sent();
                                        deferredUpload.reject(e_2);
                                        return [3 /*break*/, 7];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _b.label = 3;
                    case 3:
                        if (!(i < totalFiles)) return [3 /*break*/, 6];
                        return [5 /*yield**/, _loop_1(i)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6:
                        deferredUpload.resolve(result);
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _b.sent();
                        deferredUpload.reject(e_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, deferredUpload.promise];
                }
            });
        });
    };
    FileUploadService.prototype.withProgress = function (cb, _a) {
        var text = (_a === void 0 ? { text: 'Uploading Files...' } : _a).text;
        return __awaiter(this, void 0, void 0, function () {
            var cancellationSource, token, progress;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cancellationSource = new cancellation_1.CancellationTokenSource();
                        token = cancellationSource.token;
                        return [4 /*yield*/, this.messageService.showProgress({ text: text, options: { cancelable: true } }, function () { return cancellationSource.cancel(); })];
                    case 1:
                        progress = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, cb(progress, token)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        progress.cancel();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.index = function (targetUri, source, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(source instanceof FormData)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.indexFormData(targetUri, source, context)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.indexDataTransfer(targetUri, source, context)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexFormData = function (targetUri, formData, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, file, e_3_1;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(formData.getAll(FileUploadService_1.UPLOAD)), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        file = _b.value;
                        if (!(file instanceof File)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.indexFile(targetUri, file, context)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexDataTransfer = function (targetUri, dataTransfer, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        if (!dataTransfer.items) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.indexDataTransferItemList(targetUri, dataTransfer.items, context)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.indexFileList(targetUri, dataTransfer.files, context)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexFileList = function (targetUri, files, context) {
        return __awaiter(this, void 0, void 0, function () {
            var i, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        file = files[i];
                        if (!file) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.indexFile(targetUri, file, context)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexFile = function (targetUri, file, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, context.accept({
                            uri: targetUri.resolve(file.name),
                            file: file
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexDataTransferItemList = function (targetUri, items, context) {
        return __awaiter(this, void 0, void 0, function () {
            var entries, i, entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        entries = [];
                        for (i = 0; i < items.length; i++) {
                            entry = items[i].webkitGetAsEntry();
                            entries.push(entry);
                        }
                        return [4 /*yield*/, this.indexEntries(targetUri, entries, context)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexEntry = function (targetUri, entry, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        if (!entry) {
                            return [2 /*return*/];
                        }
                        if (!entry.isDirectory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.indexDirectoryEntry(targetUri, entry, context)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.indexFileEntry(targetUri, entry, context)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  Read all entries within a folder by block of 100 files or folders until the
     *  whole folder has been read.
     */
    FileUploadService.prototype.indexDirectoryEntry = function (targetUri, entry, context) {
        return __awaiter(this, void 0, void 0, function () {
            var newTargetUri;
            var _this = this;
            return __generator(this, function (_a) {
                cancellation_1.checkCancelled(context.token);
                newTargetUri = targetUri.resolve(entry.name);
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var reader, getEntries;
                        var _this = this;
                        return __generator(this, function (_a) {
                            reader = entry.createReader();
                            getEntries = function () { return reader.readEntries(function (results) { return __awaiter(_this, void 0, void 0, function () {
                                var e_4;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 4, , 5]);
                                            if (!(!context.token.isCancellationRequested && results && results.length)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.indexEntries(newTargetUri, results, context)];
                                        case 1:
                                            _a.sent();
                                            getEntries(); // loop to read all getEntries
                                            return [3 /*break*/, 3];
                                        case 2:
                                            resolve();
                                            _a.label = 3;
                                        case 3: return [3 /*break*/, 5];
                                        case 4:
                                            e_4 = _a.sent();
                                            reject(e_4);
                                            return [3 /*break*/, 5];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); }, reject); };
                            getEntries();
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FileUploadService.prototype.indexEntries = function (targetUri, entries, context) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < entries.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.indexEntry(targetUri, entries[i], context)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexFileEntry = function (targetUri, entry, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                try {
                                    entry.file(function (file) { return _this.indexFile(targetUri, file, context).then(resolve, reject); }, reject);
                                }
                                catch (e) {
                                    reject(e);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var FileUploadService_1;
    FileUploadService.TARGET = 'target';
    FileUploadService.UPLOAD = 'upload';
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], FileUploadService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(s3storagesystem_1.S3StorageSystem),
        __metadata("design:type", s3storagesystem_1.S3StorageSystem)
    ], FileUploadService.prototype, "s3fs", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileUploadService.prototype, "init", null);
    FileUploadService = FileUploadService_1 = __decorate([
        inversify_1.injectable()
    ], FileUploadService);
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=file-upload-service.js.map
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var electron_1 = require("electron");
var os_1 = require("@theia/core/lib/common/os");
var message_service_1 = require("@theia/core/lib/common/message-service");
var filesystem_1 = require("../../common/filesystem");
var file_dialog_1 = require("../../browser/file-dialog");
//
// We are OK to use this here because the electron backend and frontend are on the same host.
// If required, we can move this single service (and its module) to a dedicated Theia extension,
// and at packaging time, clients can decide whether they need the native or the browser-based
// solution.
//
var file_uri_1 = require("@theia/core/lib/node/file-uri");
var ElectronFileDialogService = /** @class */ (function (_super) {
    __extends(ElectronFileDialogService, _super);
    function ElectronFileDialogService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronFileDialogService.prototype.showOpenDialog = function (props, folder) {
        return __awaiter(this, void 0, void 0, function () {
            var rootNode;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRootNode(folder)];
                    case 1:
                        rootNode = _a.sent();
                        if (rootNode) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    electron_1.remote.dialog.showOpenDialog(_this.toOpenDialogOptions(rootNode.uri, props), function (filePaths) {
                                        if (!filePaths || filePaths.length === 0) {
                                            resolve(undefined);
                                            return;
                                        }
                                        var uris = filePaths.map(function (path) { return file_uri_1.FileUri.create(path); });
                                        if (_this.canReadWrite(uris)) {
                                            resolve(uris.length === 1 ? uris[0] : uris);
                                        }
                                        else {
                                            resolve(undefined);
                                        }
                                    });
                                })];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    ElectronFileDialogService.prototype.showSaveDialog = function (props, folder) {
        return __awaiter(this, void 0, void 0, function () {
            var rootNode;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRootNode(folder)];
                    case 1:
                        rootNode = _a.sent();
                        if (rootNode) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    electron_1.remote.dialog.showSaveDialog(_this.toSaveDialogOptions(rootNode.uri, props), function (filename) {
                                        if (!filename) {
                                            resolve(undefined);
                                            return;
                                        }
                                        var uri = file_uri_1.FileUri.create(filename);
                                        if (_this.canReadWrite(uri)) {
                                            resolve(uri);
                                        }
                                        else {
                                            resolve(undefined);
                                        }
                                    });
                                })];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    ElectronFileDialogService.prototype.canReadWrite = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, uri, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(Array.isArray(uris) ? uris : [uris]), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        uri = _b.value;
                        return [4 /*yield*/, this.fileSystem.access(uri.toString(), filesystem_1.FileAccess.Constants.R_OK | filesystem_1.FileAccess.Constants.W_OK)];
                    case 2:
                        if (!(_d.sent())) {
                            this.messageService.error("Cannot access resource at " + uri.path + ".");
                            return [2 /*return*/, false];
                        }
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, true];
                }
            });
        });
    };
    ElectronFileDialogService.prototype.toDialogOptions = function (uri, props, dialogTitle) {
        var title = props.title || dialogTitle;
        var defaultPath = file_uri_1.FileUri.fsPath(uri);
        var filters = [{ name: 'All Files', extensions: ['*'] }];
        if (props.filters) {
            filters.push.apply(filters, __spread(Object.keys(props.filters).map(function (key) { return ({ name: key, extensions: props.filters[key] }); })));
        }
        return { title: title, defaultPath: defaultPath, filters: filters };
    };
    ElectronFileDialogService.prototype.toOpenDialogOptions = function (uri, props) {
        var properties = electron.dialog.toDialogProperties(props);
        var buttonLabel = props.openLabel;
        return __assign(__assign({}, this.toDialogOptions(uri, props, 'Open')), { properties: properties, buttonLabel: buttonLabel });
    };
    ElectronFileDialogService.prototype.toSaveDialogOptions = function (uri, props) {
        var buttonLabel = props.saveLabel;
        var defaultPath = props.inputValue;
        return __assign(__assign({}, this.toDialogOptions(uri, props, 'Save')), { buttonLabel: buttonLabel, defaultPath: defaultPath });
    };
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], ElectronFileDialogService.prototype, "messageService", void 0);
    ElectronFileDialogService = __decorate([
        inversify_1.injectable()
    ], ElectronFileDialogService);
    return ElectronFileDialogService;
}(file_dialog_1.DefaultFileDialogService));
exports.ElectronFileDialogService = ElectronFileDialogService;
var electron;
(function (electron) {
    var dialog;
    (function (dialog) {
        /**
         * Converts the Theia specific `OpenFileDialogProps` into an electron specific array.
         *
         * Note: On Windows and Linux an open dialog can not be both a file selector and a directory selector,
         * so if you set properties to ['openFile', 'openDirectory'] on these platforms, a directory selector will be shown.
         *
         * See: https://github.com/electron/electron/issues/10252#issuecomment-322012159
         */
        function toDialogProperties(props) {
            if (!os_1.isOSX && props.canSelectFiles !== false && props.canSelectFolders === true) {
                throw new Error("Illegal props. Cannot have 'canSelectFiles' and 'canSelectFolders' at the same times. Props was: " + JSON.stringify(props) + ".");
            }
            var properties = [];
            if (!os_1.isOSX) {
                if (props.canSelectFiles !== false && props.canSelectFolders !== true) {
                    properties.push('openFile');
                }
                if (props.canSelectFolders === true && props.canSelectFiles === false) {
                    properties.push('openDirectory');
                }
            }
            else {
                if (props.canSelectFiles !== false) {
                    properties.push('openFile');
                }
                if (props.canSelectFolders === true) {
                    properties.push('openDirectory');
                }
            }
            if (props.canSelectMany === true) {
                properties.push('multiSelections');
            }
            return properties;
        }
        dialog.toDialogProperties = toDialogProperties;
    })(dialog = electron.dialog || (electron.dialog = {}));
})(electron = exports.electron || (exports.electron = {}));
//# sourceMappingURL=electron-file-dialog-service.js.map
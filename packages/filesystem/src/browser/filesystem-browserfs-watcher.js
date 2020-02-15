"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var WorkspaceBrowserFileSystemWatcher = /** @class */ (function () {
    function WorkspaceBrowserFileSystemWatcher() {
        /**
         * Start file watching for the given param.
         * Resolve when watching is started.
         * Return a watcher id.
         */
        this.files2Watch = new Map();
    }
    WorkspaceBrowserFileSystemWatcher.prototype.watchFileChanges = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var currentItemCount;
            return __generator(this, function (_a) {
                if (!this.files2Watch.has(uri)) {
                    currentItemCount = this.files2Watch.size + 1;
                    console.log("Start watching " + uri + " with ID " + currentItemCount);
                    this.files2Watch.set(uri, currentItemCount);
                    return [2 /*return*/, currentItemCount];
                }
                else {
                    console.log("Already watching " + uri);
                    return [2 /*return*/, this.files2Watch.get(uri)];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Stop file watching for the given id.
     * Resolve when watching is stopped.
     */
    WorkspaceBrowserFileSystemWatcher.prototype.unwatchFileChanges = function (watcher) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, key;
            var e_1, _c;
            return __generator(this, function (_d) {
                try {
                    for (_a = __values(this.files2Watch.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        key = _b.value;
                        if (this.files2Watch.get(key) === watcher) {
                            console.log("Unwatch " + key + " with ID " + watcher);
                            this.files2Watch.delete(key);
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    WorkspaceBrowserFileSystemWatcher.prototype.kernel_notify = function (path, changeType) {
        if (changeType === void 0) { changeType = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var changes, _a, _b, key, thatClient;
            var e_2, _c;
            return __generator(this, function (_d) {
                // console.log(`Notify coming ${path}`);
                if (!this.client) {
                    return [2 /*return*/];
                }
                if (!path.startsWith('file://')) {
                    path = 'file://' + path;
                }
                changes = [];
                try {
                    for (_a = __values(this.files2Watch.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        key = _b.value;
                        if (path.startsWith(key)) {
                            if (changeType !== 0) {
                                /* Notify Unconditionally */
                                changes.push({ uri: key, type: changeType });
                            }
                            else {
                                /* Only Notify Non-Root One, Notify root will cause full refresh */
                                if (key !== 'file:///') {
                                    changes.push({ uri: key, type: changeType });
                                }
                            }
                            // console.log(key);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                changes.push({ uri: path, type: changeType });
                thatClient = this.client;
                setTimeout(function () {
                    thatClient.onDidFilesChanged({
                        changes: changes
                    });
                }, 100);
                return [2 /*return*/];
            });
        });
    };
    WorkspaceBrowserFileSystemWatcher.prototype.setClient = function (client) {
        this.client = client;
    };
    WorkspaceBrowserFileSystemWatcher.prototype.dispose = function () {
        this.files2Watch.clear();
    };
    WorkspaceBrowserFileSystemWatcher = __decorate([
        inversify_1.injectable()
    ], WorkspaceBrowserFileSystemWatcher);
    return WorkspaceBrowserFileSystemWatcher;
}());
exports.WorkspaceBrowserFileSystemWatcher = WorkspaceBrowserFileSystemWatcher;
//# sourceMappingURL=filesystem-browserfs-watcher.js.map
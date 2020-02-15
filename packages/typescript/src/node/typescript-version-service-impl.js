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
var fs = require("fs-extra");
var cp = require("child_process");
var commandExists = require("command-exists");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var common_1 = require("@theia/core/lib/common");
var node_1 = require("@theia/core/lib/node");
var application_package_1 = require("@theia/application-package");
var TypescriptVersionURI;
(function (TypescriptVersionURI) {
    var scheme = 'tsversion';
    function encodeCommand(command) {
        return new uri_1.default().withScheme(scheme).withPath(command);
    }
    TypescriptVersionURI.encodeCommand = encodeCommand;
    function getTsServerPath(version) {
        var uri = version && version.uri && new uri_1.default(version.uri);
        if (!uri) {
            return undefined;
        }
        if (uri.scheme === scheme) {
            return uri.path.toString();
        }
        return node_1.FileUri.fsPath(uri.resolve('tsserver.js'));
    }
    TypescriptVersionURI.getTsServerPath = getTsServerPath;
})(TypescriptVersionURI = exports.TypescriptVersionURI || (exports.TypescriptVersionURI = {}));
var TypescriptVersionServiceImpl = /** @class */ (function () {
    function TypescriptVersionServiceImpl() {
    }
    TypescriptVersionServiceImpl.prototype.getVersions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var versions, version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        versions = [];
                        return [4 /*yield*/, this.resolveBundledVersion()];
                    case 1:
                        version = _a.sent();
                        if (version) {
                            versions.push(version);
                        }
                        return [4 /*yield*/, this.resolveWorkspaceVersions(versions, options)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, versions];
                }
            });
        });
    };
    TypescriptVersionServiceImpl.prototype.resolveBundledVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.resolveBundledVersionInApplicationPath()];
                    case 1:
                        _a = (_b.sent());
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.resolveBundledVersionWithRequire()];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a ||
                            this.resolveBundledVersionAsExecutable()];
                }
            });
        });
    };
    TypescriptVersionServiceImpl.prototype.resolveBundledVersionInApplicationPath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = node_1.FileUri.create(this.applicationPackage.projectPath).resolve('node_modules/typescript/lib');
                        return [4 /*yield*/, this.readVersion(uri)];
                    case 1:
                        version = _a.sent();
                        if (version) {
                            return [2 /*return*/, {
                                    uri: uri.toString(),
                                    version: version,
                                    qualifier: 'Bundled'
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TypescriptVersionServiceImpl.prototype.resolveBundledVersionWithRequire = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, version, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        uri = node_1.FileUri.create(require.resolve('typescript')).parent;
                        return [4 /*yield*/, this.readVersion(uri)];
                    case 1:
                        version = _b.sent();
                        if (version) {
                            return [2 /*return*/, {
                                    uri: uri.toString(),
                                    version: version,
                                    qualifier: 'Bundled'
                                }];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TypescriptVersionServiceImpl.prototype.resolveBundledVersionAsExecutable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var command, output, matches, match;
            return __generator(this, function (_a) {
                command = common_1.isWindows ? 'tsserver.cmd' : 'tsserver';
                if (!commandExists.sync(command)) {
                    return [2 /*return*/, undefined];
                }
                try {
                    output = cp.spawnSync(common_1.isWindows ? 'tsc.cmd' : 'tsc', ['--version']).output.filter(function (_) { return !!_; }).map(function (_) { return String(_); }).join('');
                    matches = output.match(/(\d+\.\d+\.\d+)/g);
                    match = matches && matches[0];
                    if (match) {
                        return [2 /*return*/, {
                                uri: TypescriptVersionURI.encodeCommand(command).toString(),
                                version: match,
                                qualifier: 'Bundled'
                            }];
                    }
                }
                catch ( /* no-op */_b) { /* no-op */ }
                return [2 /*return*/];
            });
        });
    };
    TypescriptVersionServiceImpl.prototype.resolveWorkspaceVersions = function (versions, options) {
        return __awaiter(this, void 0, void 0, function () {
            var all, workspaceFolders, _a, _b, _c, uri, version;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        all = new Map();
                        workspaceFolders = options.workspaceFolders.map(function (uri) { return new uri_1.default(uri); });
                        if (!options.localTsdk) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.resolveVersions(workspaceFolders, all, options.localTsdk)];
                    case 1:
                        _e.sent();
                        _e.label = 2;
                    case 2: return [4 /*yield*/, this.resolveVersions(workspaceFolders, all, 'node_modules/typescript/lib')];
                    case 3:
                        _e.sent();
                        try {
                            for (_a = __values(all.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = __read(_b.value, 2), uri = _c[0], version = _c[1];
                                if (version) {
                                    versions.push({
                                        uri: uri,
                                        version: version,
                                        qualifier: 'Workspace'
                                    });
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TypescriptVersionServiceImpl.prototype.resolveVersions = function (roots, versions, rawPath) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = new common_1.Path(rawPath);
                        if (!path.isAbsolute) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.resolveVersion(versions, new uri_1.default().withPath(path))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Promise.all(roots.map(function (root) {
                            return _this.resolveVersion(versions, root.resolve(path));
                        }))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TypescriptVersionServiceImpl.prototype.resolveVersion = function (versions, uri) {
        return __awaiter(this, void 0, void 0, function () {
            var key, version, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        key = uri.toString();
                        if (versions.has(key)) {
                            return [2 /*return*/];
                        }
                        versions.set(key, undefined);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.readVersion(uri)];
                    case 2:
                        version = _b.sent();
                        versions.set(key, version);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TypescriptVersionServiceImpl.prototype.readVersion = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var packagePath, pck, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        packagePath = node_1.FileUri.fsPath(uri.parent.resolve('package.json'));
                        return [4 /*yield*/, fs.readJSON(packagePath)];
                    case 1:
                        pck = _b.sent();
                        return [2 /*return*/, pck && pck.version && typeof pck.version === 'string' ? pck.version : undefined];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, undefined];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(application_package_1.ApplicationPackage),
        __metadata("design:type", application_package_1.ApplicationPackage)
    ], TypescriptVersionServiceImpl.prototype, "applicationPackage", void 0);
    TypescriptVersionServiceImpl = __decorate([
        inversify_1.injectable()
    ], TypescriptVersionServiceImpl);
    return TypescriptVersionServiceImpl;
}());
exports.TypescriptVersionServiceImpl = TypescriptVersionServiceImpl;
//# sourceMappingURL=typescript-version-service-impl.js.map
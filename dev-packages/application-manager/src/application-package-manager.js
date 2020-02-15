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
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs-extra");
var application_package_1 = require("@theia/application-package");
var generator_1 = require("./generator");
var application_process_1 = require("./application-process");
var ApplicationPackageManager = /** @class */ (function () {
    function ApplicationPackageManager(options) {
        this.pck = new application_package_1.ApplicationPackage(options);
        this.process = new application_process_1.ApplicationProcess(this.pck, options.projectPath);
        this.__process = new application_process_1.ApplicationProcess(this.pck, path.join(__dirname, '..'));
        this.webpack = new generator_1.WebpackGenerator(this.pck);
        this.backend = new generator_1.BackendGenerator(this.pck);
        this.frontend = new generator_1.FrontendGenerator(this.pck);
    }
    ApplicationPackageManager.prototype.remove = function (fsPath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.pathExists(fsPath)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs.remove(fsPath)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApplicationPackageManager.prototype.clean = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.remove(this.pck.lib())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.remove(this.pck.srcGen())];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.remove(this.webpack.genConfigPath)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationPackageManager.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.webpack.generate()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.backend.generate()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.frontend.generate()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationPackageManager.prototype.copy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.ensureDir(this.pck.lib())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, fs.copy(this.pck.frontend('index.html'), this.pck.lib('index.html'))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationPackageManager.prototype.build = function (args) {
        if (args === void 0) { args = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generate()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.copy()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.__process.run('webpack', args)];
                }
            });
        });
    };
    ApplicationPackageManager.prototype.start = function (args) {
        if (args === void 0) { args = []; }
        if (this.pck.isElectron()) {
            return this.startElectron(args);
        }
        return this.startBrowser(args);
    };
    ApplicationPackageManager.prototype.startElectron = function (args) {
        var _a = this.adjustArgs(__spread([this.pck.frontend('electron-main.js')], args)), mainArgs = _a.mainArgs, options = _a.options;
        var electronCli = require.resolve('electron/cli.js', { paths: [this.pck.projectPath] });
        return this.__process.fork(electronCli, mainArgs, options);
    };
    ApplicationPackageManager.prototype.startBrowser = function (args) {
        var _a = this.adjustArgs(args), mainArgs = _a.mainArgs, options = _a.options;
        return this.__process.fork(this.pck.backend('main.js'), mainArgs, options);
    };
    ApplicationPackageManager.prototype.adjustArgs = function (args, forkOptions) {
        if (forkOptions === void 0) { forkOptions = {}; }
        var options = __assign(__assign({}, this.forkOptions), { forkOptions: forkOptions });
        var mainArgs = __spread(args);
        var inspectIndex = mainArgs.findIndex(function (v) { return v.startsWith('--inspect'); });
        if (inspectIndex !== -1) {
            var inspectArg = mainArgs.splice(inspectIndex, 1)[0];
            options.execArgv = ['--nolazy', inspectArg];
        }
        return {
            mainArgs: mainArgs,
            options: options
        };
    };
    Object.defineProperty(ApplicationPackageManager.prototype, "forkOptions", {
        get: function () {
            return {
                stdio: [0, 1, 2, 'ipc'],
                env: __assign(__assign({}, process.env), { THEIA_PARENT_PID: String(process.pid) })
            };
        },
        enumerable: true,
        configurable: true
    });
    return ApplicationPackageManager;
}());
exports.ApplicationPackageManager = ApplicationPackageManager;
//# sourceMappingURL=application-package-manager.js.map
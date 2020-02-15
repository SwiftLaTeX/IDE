"use strict";
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var collectFiles = require('mocha/lib/cli/collect-files');
function newTestPage(options) {
    return __awaiter(this, void 0, void 0, function () {
        var newPage, matchAppUrl, onWillRun, onDidRun, fileOptions, page, theiaLoaded, preLoad;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newPage = options.newPage, matchAppUrl = options.matchAppUrl, onWillRun = options.onWillRun, onDidRun = options.onDidRun;
                    fileOptions = {
                        ignore: options.files && options.files.ignore || [],
                        extension: options.files && options.files.extension || [],
                        file: options.files && options.files.file || [],
                        spec: options.files && options.files.spec || [],
                        recursive: options.files && options.files.recursive || false,
                        sort: options.files && options.files.sort || false
                    };
                    // quick check whether test files exist
                    collectFiles(fileOptions);
                    return [4 /*yield*/, newPage()];
                case 1:
                    page = _a.sent();
                    page.on('dialog', function (dialog) { return dialog.dismiss(); });
                    page.on('pageerror', console.error);
                    theiaLoaded = false;
                    page.exposeFunction('fireDidUnloadTheia', function () { return theiaLoaded = false; });
                    preLoad = function (frame) {
                        var frameUrl = frame.url();
                        if (matchAppUrl && !matchAppUrl(frameUrl)) {
                            return;
                        }
                        if (theiaLoaded) {
                            return;
                        }
                        console.log('loading chai...');
                        theiaLoaded = true;
                        page.addScriptTag({ path: require.resolve('chai/chai.js') });
                        page.evaluate(function () {
                            return window.addEventListener('beforeunload', function () { return window['fireDidUnloadTheia'](); });
                        });
                    };
                    page.on('frameattached', preLoad);
                    page.on('framenavigated', preLoad);
                    page.on('load', function () { return __awaiter(_this, void 0, void 0, function () {
                        var files, files_1, files_1_1, file, e_1_1, failures;
                        var e_1, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (matchAppUrl && !matchAppUrl(page.url())) {
                                        return [2 /*return*/];
                                    }
                                    console.log('loading mocha...');
                                    // replace console.log by theia logger for mocha
                                    return [4 /*yield*/, page.waitForFunction(function () { return !!window['theia']['@theia/core/lib/common/logger'].logger; }, {
                                            timeout: 30 * 1000
                                        })];
                                case 1:
                                    // replace console.log by theia logger for mocha
                                    _b.sent();
                                    return [4 /*yield*/, page.addScriptTag({ path: require.resolve('mocha/mocha.js') })];
                                case 2:
                                    _b.sent();
                                    return [4 /*yield*/, page.waitForFunction(function () { return !!window['chai'] && !!window['mocha'] && !!window['theia'].container; }, { timeout: 30 * 1000 })];
                                case 3:
                                    _b.sent();
                                    console.log('loading Theia...');
                                    return [4 /*yield*/, page.evaluate(function () {
                                            var FrontendApplicationStateService = window['theia']['@theia/core/lib/browser/frontend-application-state'].FrontendApplicationStateService;
                                            var PreferenceService = window['theia']['@theia/core/lib/browser/preferences/preference-service'].PreferenceService;
                                            var WorkspaceService = window['theia']['@theia/workspace/lib/browser/workspace-service'].WorkspaceService;
                                            var container = window['theia'].container;
                                            var frontendApplicationState = container.get(FrontendApplicationStateService);
                                            var preferenceService = container.get(PreferenceService);
                                            var workspaceService = container.get(WorkspaceService);
                                            return Promise.all([
                                                frontendApplicationState.reachedState('ready'),
                                                preferenceService.ready,
                                                workspaceService.roots
                                            ]);
                                        })];
                                case 4:
                                    _b.sent();
                                    console.log('loading test files...');
                                    return [4 /*yield*/, page.evaluate(function () {
                                            // replace require to load modules from theia namespace
                                            window['require'] = function (moduleName) { return window['theia'][moduleName]; };
                                            mocha.setup({
                                                reporter: 'spec',
                                                ui: 'bdd',
                                                useColors: true
                                            });
                                        })];
                                case 5:
                                    _b.sent();
                                    if (!onWillRun) return [3 /*break*/, 7];
                                    return [4 /*yield*/, onWillRun()];
                                case 6:
                                    _b.sent();
                                    _b.label = 7;
                                case 7:
                                    files = collectFiles(fileOptions);
                                    _b.label = 8;
                                case 8:
                                    _b.trys.push([8, 13, 14, 15]);
                                    files_1 = __values(files), files_1_1 = files_1.next();
                                    _b.label = 9;
                                case 9:
                                    if (!!files_1_1.done) return [3 /*break*/, 12];
                                    file = files_1_1.value;
                                    return [4 /*yield*/, page.addScriptTag({ path: file })];
                                case 10:
                                    _b.sent();
                                    _b.label = 11;
                                case 11:
                                    files_1_1 = files_1.next();
                                    return [3 /*break*/, 9];
                                case 12: return [3 /*break*/, 15];
                                case 13:
                                    e_1_1 = _b.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3 /*break*/, 15];
                                case 14:
                                    try {
                                        if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                    return [7 /*endfinally*/];
                                case 15:
                                    console.log('running test files...');
                                    return [4 /*yield*/, page.evaluate(function () {
                                            return new Promise(function (resolve) { return mocha.run(resolve); });
                                        })];
                                case 16:
                                    failures = _b.sent();
                                    if (!onDidRun) return [3 /*break*/, 18];
                                    return [4 /*yield*/, onDidRun(failures)];
                                case 17:
                                    _b.sent();
                                    _b.label = 18;
                                case 18: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/, page];
            }
        });
    });
}
exports.default = newTestPage;
//# sourceMappingURL=test-page.js.map
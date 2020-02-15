"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("@theia/core/lib/browser");
var core_1 = require("@theia/core");
var textmate_registry_1 = require("./textmate-registry");
var textmate_contribution_1 = require("./textmate-contribution");
var monaco_textmate_service_1 = require("./monaco-textmate-service");
var monaco_theme_registry_1 = require("./monaco-theme-registry");
var onigasm_1 = require("onigasm");
function fetchOnigasm() {
    return new Promise(function (resolve, reject) {
        var onigasmPath = require('onigasm/lib/onigasm.wasm'); // webpack doing its magic here
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(this.response);
                }
                else {
                    reject(new Error('Could not fetch onigasm'));
                }
            }
        };
        request.open('GET', onigasmPath, true);
        request.responseType = 'arraybuffer';
        request.send();
    });
}
exports.fetchOnigasm = fetchOnigasm;
var OnigasmLib = /** @class */ (function () {
    function OnigasmLib() {
    }
    OnigasmLib.prototype.createOnigScanner = function (sources) {
        return new onigasm_1.OnigScanner(sources);
    };
    OnigasmLib.prototype.createOnigString = function (sources) {
        return new onigasm_1.OnigString(sources);
    };
    return OnigasmLib;
}());
exports.OnigasmLib = OnigasmLib;
exports.default = (function (bind, unbind, isBound, rebind) {
    var onigasmPromise = browser_1.isBasicWasmSupported ? fetchOnigasm().then(function (buffer) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onigasm_1.loadWASM(buffer)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new OnigasmLib()];
            }
        });
    }); }) : Promise.reject(new Error('wasm not supported'));
    bind(monaco_textmate_service_1.OnigasmPromise).toConstantValue(onigasmPromise);
    bind(monaco_textmate_service_1.MonacoTextmateService).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_textmate_service_1.MonacoTextmateService);
    core_1.bindContributionProvider(bind, textmate_contribution_1.LanguageGrammarDefinitionContribution);
    bind(textmate_registry_1.TextmateRegistry).toSelf().inSingletonScope();
    bind(monaco_theme_registry_1.MonacoThemeRegistry).toDynamicValue(function () { return monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON; }).inSingletonScope();
});
//# sourceMappingURL=monaco-textmate-frontend-bindings.js.map
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
var path = require("path");
var application_package_1 = require("@theia/application-package");
var node_1 = require("@theia/languages/lib/node");
var common_1 = require("../common");
var vscode_ws_jsonrpc_1 = require("vscode-ws-jsonrpc");
var vscode_languageserver_protocol_1 = require("vscode-languageserver-protocol");
var typescript_version_service_impl_1 = require("./typescript-version-service-impl");
var TypeScriptContribution = /** @class */ (function (_super) {
    __extends(TypeScriptContribution, _super);
    function TypeScriptContribution() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = common_1.TYPESCRIPT_LANGUAGE_ID;
        _this.name = common_1.TYPESCRIPT_LANGUAGE_NAME;
        _this.plugins = [];
        return _this;
    }
    TypeScriptContribution.prototype.init = function () {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = __values(this.applicationPackage.extensionPackages), _d = _c.next(); !_d.done; _d = _c.next()) {
                var extension = _d.value;
                var _e = extension.raw, contributes = _e.contributes, installed = _e.installed;
                if (installed && contributes && contributes.typescriptServerPlugins && Array.isArray(contributes.typescriptServerPlugins)) {
                    try {
                        for (var _f = (e_2 = void 0, __values(contributes.typescriptServerPlugins)), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var plugin = _g.value;
                            this.plugins.push({
                                name: plugin.name,
                                location: installed.packagePath
                            });
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    TypeScriptContribution.prototype.start = function (clientConnection, _a) {
        var parameters = _a.parameters;
        return __awaiter(this, void 0, void 0, function () {
            var command, args, tsServerPath, serverConnection;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        command = process.execPath;
                        args = [
                            path.join(__dirname, 'startserver.js'),
                            '--stdio'
                        ];
                        tsServerPath = typescript_version_service_impl_1.TypescriptVersionURI.getTsServerPath(parameters && parameters.version);
                        if (tsServerPath) {
                            args.push("--tsserver-path=" + tsServerPath);
                        }
                        return [4 /*yield*/, this.createProcessStreamConnectionAsync(command, args, { env: application_package_1.environment.electron.runAsNodeEnv() })];
                    case 1:
                        serverConnection = _b.sent();
                        this.forward(clientConnection, serverConnection);
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptContribution.prototype.map = function (message) {
        var _a;
        if (vscode_ws_jsonrpc_1.isRequestMessage(message)) {
            if (message.method === vscode_languageserver_protocol_1.InitializeRequest.type.method) {
                var initializeParams = message.params;
                if (this.plugins.length) {
                    var options = __assign({ plugins: [] }, initializeParams.initializationOptions);
                    (_a = options.plugins).push.apply(_a, __spread(this.plugins));
                    initializeParams.initializationOptions = options;
                }
            }
        }
        return _super.prototype.map.call(this, message);
    };
    __decorate([
        inversify_1.inject(application_package_1.ApplicationPackage),
        __metadata("design:type", application_package_1.ApplicationPackage)
    ], TypeScriptContribution.prototype, "applicationPackage", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeScriptContribution.prototype, "init", null);
    TypeScriptContribution = __decorate([
        inversify_1.injectable()
    ], TypeScriptContribution);
    return TypeScriptContribution;
}(node_1.BaseLanguageServerContribution));
exports.TypeScriptContribution = TypeScriptContribution;
//# sourceMappingURL=typescript-contribution.js.map
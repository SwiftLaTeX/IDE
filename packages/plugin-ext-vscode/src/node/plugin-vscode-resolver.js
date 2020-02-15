"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var request = require("request");
var fs = require("fs");
var os = require("os");
var path = require("path");
/**
 * Resolver that handle the vscode: protocol
 */
var VsCodePluginDeployerResolver = /** @class */ (function () {
    function VsCodePluginDeployerResolver() {
        this.vscodeExtensionsFolder = process.env.VSCODE_PLUGINS || path.resolve(os.tmpdir(), 'vscode-extension-marketplace');
        if (!fs.existsSync(this.vscodeExtensionsFolder)) {
            fs.mkdirSync(this.vscodeExtensionsFolder);
        }
    }
    VsCodePluginDeployerResolver_1 = VsCodePluginDeployerResolver;
    /**
     * Download vscode extensions if available and add them as plugins.
     */
    VsCodePluginDeployerResolver.prototype.resolve = function (pluginResolverContext) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // download the file
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var originId = pluginResolverContext.getOriginId();
                        var extensionName = '';
                        if (originId.startsWith(VsCodePluginDeployerResolver_1.PREFIX_VSCODE_EXTENSION)) {
                            extensionName = originId.substring(VsCodePluginDeployerResolver_1.PREFIX_VSCODE_EXTENSION.length);
                        }
                        else if (originId.startsWith(VsCodePluginDeployerResolver_1.PREFIX_EXT_INSTALL)) {
                            extensionName = originId.substring(VsCodePluginDeployerResolver_1.PREFIX_EXT_INSTALL.length);
                        }
                        if (!extensionName) {
                            reject(new Error('Invalid extension' + originId));
                            return;
                        }
                        var wantedExtensionVersion = undefined;
                        var json = {
                            'filters': [{
                                    'criteria': [{ 'filterType': 7, 'value': extensionName }], 'pageNumber': 1,
                                    'pageSize': 1, 'sortBy': 0, 'sortOrder': 0
                                }], 'assetTypes': ['Microsoft.VisualStudio.Services.VSIXPackage'],
                            'flags': 131
                        };
                        var options = {
                            url: VsCodePluginDeployerResolver_1.MARKET_PLACE_ENDPOINT,
                            headers: VsCodePluginDeployerResolver_1.HEADERS,
                            method: 'POST',
                            json: json
                        };
                        request(options, function (error, response, body) {
                            if (error) {
                                reject(error);
                                return;
                            }
                            else if (response.statusCode === 200) {
                                var extension = body.results[0].extensions[0];
                                if (!extension) {
                                    reject(new Error('No extension'));
                                    return;
                                }
                                var asset = void 0;
                                if (wantedExtensionVersion !== undefined) {
                                    var extensionVersion = extension.versions.filter(function (value) { return value.version === wantedExtensionVersion; })[0];
                                    asset = extensionVersion.files.filter(function (f) { return f.assetType === 'Microsoft.VisualStudio.Services.VSIXPackage'; })[0];
                                }
                                else {
                                    // take first one
                                    asset = extension.versions[0].files.filter(function (f) { return f.assetType === 'Microsoft.VisualStudio.Services.VSIXPackage'; })[0];
                                }
                                var shortName = extensionName.replace(/\W/g, '_');
                                var extensionPath_1 = path.resolve(_this.vscodeExtensionsFolder, path.basename(shortName + '.vsix'));
                                var finish = function () {
                                    pluginResolverContext.addPlugin(originId, extensionPath_1);
                                    resolve();
                                };
                                var dest = fs.createWriteStream(extensionPath_1);
                                dest.addListener('finish', finish);
                                request.get(asset.source)
                                    .on('error', function (err) {
                                    reject(err);
                                }).pipe(dest);
                            }
                            else {
                                reject(new Error('Invalid status code' + response.statusCode + ' and message is ' + response.statusMessage));
                            }
                        });
                    })];
            });
        });
    };
    /**
     * Handle only the plugins that starts with vscode:
     */
    VsCodePluginDeployerResolver.prototype.accept = function (pluginId) {
        return pluginId.startsWith(VsCodePluginDeployerResolver_1.PREFIX_VSCODE_EXTENSION) ||
            pluginId.startsWith(VsCodePluginDeployerResolver_1.PREFIX_EXT_INSTALL);
    };
    var VsCodePluginDeployerResolver_1;
    VsCodePluginDeployerResolver.PREFIX_VSCODE_EXTENSION = 'vscode:extension/';
    VsCodePluginDeployerResolver.PREFIX_EXT_INSTALL = 'ext install ';
    VsCodePluginDeployerResolver.MARKET_PLACE_ENDPOINT = 'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery';
    VsCodePluginDeployerResolver.HEADERS = {
        'Content-Type': 'application/json',
        'Accept': 'application/json;api-version=3.0-preview.1'
    };
    VsCodePluginDeployerResolver = VsCodePluginDeployerResolver_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VsCodePluginDeployerResolver);
    return VsCodePluginDeployerResolver;
}());
exports.VsCodePluginDeployerResolver = VsCodePluginDeployerResolver;
//# sourceMappingURL=plugin-vscode-resolver.js.map
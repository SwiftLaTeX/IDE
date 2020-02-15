"use strict";
/********************************************************************************
 * Copyright (C) 2017-2018 TypeFox and others.
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
require("../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var common_2 = require("../common");
var filesystem_watcher_protocol_1 = require("../common/filesystem-watcher-protocol");
var filesystem_browserfs_watcher_1 = require("./filesystem-browserfs-watcher");
// import {
//     fileSystemWatcherPath, FileSystemWatcherServer,
//     FileSystemWatcherServerProxy, ReconnectingFileSystemWatcherServer
// } from '../common/filesystem-watcher-protocol';
var file_resource_1 = require("./file-resource");
var filesystem_preferences_1 = require("./filesystem-preferences");
var filesystem_watcher_1 = require("./filesystem-watcher");
var filesystem_frontend_contribution_1 = require("./filesystem-frontend-contribution");
// import { FileSystemProxyFactory } from './filesystem-proxy-factory';
var file_upload_service_1 = require("./file-upload-service");
var file_tree_label_provider_1 = require("./file-tree/file-tree-label-provider");
var uri_1 = require("@theia/core/lib/common/uri");
var filesystem_browserfs_1 = require("./filesystem-browserfs");
var s3storagesystem_1 = require("./s3storagesystem");
exports.default = new inversify_1.ContainerModule(function (bind) {
    filesystem_preferences_1.bindFileSystemPreferences(bind);
    // bind(FileSystemWatcherServerProxy).toDynamicValue(ctx =>
    //     WebSocketConnectionProvider.createProxy(ctx.container, fileSystemWatcherPath)
    // );
    bind(filesystem_watcher_protocol_1.FileSystemWatcherServer).to(filesystem_browserfs_watcher_1.WorkspaceBrowserFileSystemWatcher).inSingletonScope();
    bind(filesystem_watcher_1.FileSystemWatcher).toSelf().inSingletonScope();
    bind(common_2.FileShouldOverwrite).toDynamicValue(function (context) { return function (file, stat) { return __awaiter(void 0, void 0, void 0, function () {
        var labelProvider, dialog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    labelProvider = context.container.get(browser_1.LabelProvider);
                    dialog = new browser_1.ConfirmDialog({
                        title: "The file '" + labelProvider.getName(new uri_1.default(file.uri)) + "' has been changed on the file system.",
                        msg: "Do you want to overwrite the changes made to '" + labelProvider.getLongName(new uri_1.default(file.uri)) + "' on the file system?",
                        ok: 'Yes',
                        cancel: 'No'
                    });
                    return [4 /*yield*/, dialog.open()];
                case 1: return [2 /*return*/, !!(_a.sent())];
            }
        });
    }); }; }).inSingletonScope();
    // bind(FileSystemProxyFactory).toSelf();
    // bind(FileSystem).toDynamicValue(ctx => {
    //     const proxyFactory = ctx.container.get(FileSystemProxyFactory);
    //     return WebSocketConnectionProvider.createProxy(ctx.container, fileSystemPath, proxyFactory);
    // }).inSingletonScope();
    bind(s3storagesystem_1.S3StorageSystem).toSelf().inSingletonScope();
    bind(common_2.FileSystem).to(filesystem_browserfs_1.BrowserFileSystem).inSingletonScope();
    bindFileResource(bind);
    bind(file_upload_service_1.FileUploadService).toSelf().inSingletonScope();
    bind(filesystem_frontend_contribution_1.FileSystemFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(filesystem_frontend_contribution_1.FileSystemFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(filesystem_frontend_contribution_1.FileSystemFrontendContribution);
    bind(file_tree_label_provider_1.FileTreeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(file_tree_label_provider_1.FileTreeLabelProvider);
});
function bindFileResource(bind) {
    bind(file_resource_1.FileResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(file_resource_1.FileResourceResolver);
}
exports.bindFileResource = bindFileResource;
//# sourceMappingURL=filesystem-frontend-module.js.map
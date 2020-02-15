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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var chai_1 = require("chai");
var sinon = require("sinon");
var inversify_1 = require("inversify");
var signaling_1 = require("@phosphor/signaling");
var browser_1 = require("@theia/core/lib/browser");
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var test_1 = require("@theia/filesystem/lib/common/test");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var workspace_uri_contribution_1 = require("./workspace-uri-contribution");
var uri_1 = require("@theia/core/lib/common/uri");
var workspace_variable_contribution_1 = require("./workspace-variable-contribution");
var workspace_service_1 = require("./workspace-service");
after(function () { return disableJSDOM(); });
var container;
var labelProvider;
var roots;
beforeEach(function () {
    roots = [{
            uri: 'file:///workspace',
            lastModification: 0,
            isDirectory: true
        }];
    container = new inversify_1.Container();
    container.bind(browser_1.ApplicationShell).toConstantValue({
        currentChanged: new signaling_1.Signal({})
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    });
    var workspaceService = new workspace_service_1.WorkspaceService();
    workspaceService.tryGetRoots = function () { return roots; };
    container.bind(workspace_service_1.WorkspaceService).toConstantValue(workspaceService);
    container.bind(workspace_variable_contribution_1.WorkspaceVariableContribution).toSelf().inSingletonScope();
    container.bind(workspace_uri_contribution_1.WorkspaceUriLabelProviderContribution).toSelf().inSingletonScope();
    container.bind(filesystem_1.FileSystem).to(test_1.MockFilesystem).inSingletonScope();
    labelProvider = container.get(workspace_uri_contribution_1.WorkspaceUriLabelProviderContribution);
});
afterEach(function () {
    roots = undefined;
    labelProvider = undefined;
    container = undefined;
});
describe('WorkspaceUriLabelProviderContribution class', function () {
    var stubs = [];
    afterEach(function () {
        stubs.forEach(function (s) { return s.restore(); });
        stubs.length = 0;
    });
    describe('canHandle()', function () {
        it('should return 0 if the passed in argument is not a FileStat or URI with the "file" scheme', function () {
            chai_1.expect(labelProvider.canHandle(new uri_1.default('user_storage:settings.json'))).eq(0);
            chai_1.expect(labelProvider.canHandle({ uri: 'file:///home/settings.json' })).eq(0);
        });
        it('should return 10 if the passed in argument is a FileStat or URI with the "file" scheme', function () {
            chai_1.expect(labelProvider.canHandle(new uri_1.default('file:///home/settings.json'))).eq(10);
            chai_1.expect(labelProvider.canHandle({
                uri: 'file:///home/settings.json',
                lastModification: 0,
                isDirectory: false
            })).eq(10);
        });
    });
    describe('getIcon()', function () {
        it('should return folder icon from the FileStat of a folder', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                chai_1.expect(labelProvider.getIcon({
                    uri: 'file:///home/',
                    lastModification: 0,
                    isDirectory: true
                })).eq(labelProvider.defaultFolderIcon);
                return [2 /*return*/];
            });
        }); });
        it('should return file icon from a non-folder FileStat', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                stubs.push(sinon.stub(label_provider_1.DefaultUriLabelProviderContribution.prototype, 'getFileIcon').returns(undefined));
                chai_1.expect(labelProvider.getIcon({
                    uri: 'file:///home/test',
                    lastModification: 0,
                    isDirectory: false
                })).eq(labelProvider.defaultFileIcon);
                return [2 /*return*/];
            });
        }); });
        it('should return folder icon from a folder URI', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                stubs.push(sinon.stub(label_provider_1.DefaultUriLabelProviderContribution.prototype, 'getFileIcon').returns(undefined));
                chai_1.expect(labelProvider.getIcon({
                    uri: 'file:///home/test',
                    lastModification: 0,
                    isDirectory: true
                })).eq(labelProvider.defaultFolderIcon);
                return [2 /*return*/];
            });
        }); });
        it('should return file icon from a file URI', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                stubs.push(sinon.stub(label_provider_1.DefaultUriLabelProviderContribution.prototype, 'getFileIcon').returns(undefined));
                chai_1.expect(labelProvider.getIcon({
                    uri: 'file:///home/test',
                    lastModification: 0,
                    isDirectory: false
                })).eq(labelProvider.defaultFileIcon);
                return [2 /*return*/];
            });
        }); });
        it('should return what getFileIcon() returns from a URI or non-folder FileStat, if getFileIcon() does not return null or undefined', function () { return __awaiter(void 0, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = 'TestString';
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                stubs.push(sinon.stub(label_provider_1.DefaultUriLabelProviderContribution.prototype, 'getFileIcon').returns(ret));
                chai_1.expect(labelProvider.getIcon(new uri_1.default('file:///home/test'))).eq(ret);
                chai_1.expect(labelProvider.getIcon({
                    uri: 'file:///home/test',
                    lastModification: 0,
                    isDirectory: false
                })).eq(ret);
                return [2 /*return*/];
            });
        }); });
    });
    describe('getName()', function () {
        it('should return the display name of a file from its URI', function () {
            var file = new uri_1.default('file:///workspace-2/jacques.doc');
            var name = labelProvider.getName(file);
            chai_1.expect(name).eq('jacques.doc');
        });
        it('should return the display name of a file from its FileStat', function () {
            var file = {
                uri: 'file:///workspace-2/jacques.doc',
                lastModification: 0,
                isDirectory: false
            };
            var name = labelProvider.getName(file);
            chai_1.expect(name).eq('jacques.doc');
        });
    });
    describe('getLongName()', function () {
        it('should return the path of a file relative to the workspace from the file\'s URI if the file is in the workspace', function () {
            var file = new uri_1.default('file:///workspace/some/very-long/path.js');
            var longName = labelProvider.getLongName(file);
            chai_1.expect(longName).eq('some/very-long/path.js');
        });
        it('should return the path of a file relative to the workspace from the file\'s FileStat if the file is in the workspace', function () {
            var file = {
                uri: 'file:///workspace/some/very-long/path.js',
                lastModification: 0,
                isDirectory: false
            };
            var longName = labelProvider.getLongName(file);
            chai_1.expect(longName).eq('some/very-long/path.js');
        });
        it('should return the absolute path of a file from the file\'s URI if the file is not in the workspace', function () {
            var file = new uri_1.default('file:///tmp/prout.txt');
            var longName = labelProvider.getLongName(file);
            chai_1.expect(longName).eq('/tmp/prout.txt');
        });
        it('should return the absolute path of a file from the file\'s FileStat if the file is not in the workspace', function () {
            var file = {
                uri: 'file:///tmp/prout.txt',
                lastModification: 0,
                isDirectory: false
            };
            var longName = labelProvider.getLongName(file);
            chai_1.expect(longName).eq('/tmp/prout.txt');
        });
        it('should return the path of a file if WorkspaceService returns no roots', function () {
            roots = [];
            var file = new uri_1.default('file:///tmp/prout.txt');
            var longName = labelProvider.getLongName(file);
            chai_1.expect(longName).eq('/tmp/prout.txt');
        });
    });
});
//# sourceMappingURL=workspace-uri-contribution.spec.js.map
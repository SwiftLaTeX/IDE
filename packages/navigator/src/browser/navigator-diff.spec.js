"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (C) 2019 David Saunders and others.
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
/* eslint-disable no-unused-expressions */
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var chai_1 = require("chai");
var navigator_diff_1 = require("./navigator-diff");
var path = require("path");
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var mock_logger_1 = require("@theia/core/lib/common/test/mock-logger");
var uri_1 = require("@theia/core/lib/common/uri");
var common_2 = require("@theia/filesystem/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var mock_opener_service_1 = require("@theia/core/lib/browser/test/mock-opener-service");
var message_service_1 = require("@theia/core/lib/common/message-service");
var message_service_protocol_1 = require("@theia/core/lib/common/message-service-protocol");
var node_filesystem_1 = require("@theia/filesystem/lib/node/node-filesystem");
var file_uri_1 = require("@theia/core/lib/node/file-uri");
disableJSDOM();
var testContainer;
beforeEach(function () {
    testContainer = new inversify_1.Container();
    var module = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
        bind(common_1.ILogger).to(mock_logger_1.MockLogger).inSingletonScope();
        bind(common_1.SelectionService).toSelf().inSingletonScope();
        bind(navigator_diff_1.NavigatorDiff).toSelf().inSingletonScope();
        bind(browser_1.OpenerService).to(mock_opener_service_1.MockOpenerService);
        bind(common_2.FileSystem).to(node_filesystem_1.FileSystemNode).inSingletonScope();
        bind(message_service_1.MessageService).toSelf().inSingletonScope();
        bind(message_service_protocol_1.MessageClient).toSelf().inSingletonScope();
    });
    testContainer.load(module);
});
describe('NavigatorDiff', function () {
    it('should allow a valid first file to be added', function (done) {
        var diff = testContainer.get(navigator_diff_1.NavigatorDiff);
        testContainer.get(common_1.SelectionService).selection = [{
                uri: new uri_1.default(file_uri_1.FileUri.create(path.resolve(__dirname, '../../test-resources/testFileA.json')).toString())
            }];
        diff.addFirstComparisonFile()
            .then(function (result) {
            chai_1.expect(result).to.be.true;
            done();
        });
    });
    it('should reject invalid file when added', function (done) {
        var diff = testContainer.get(navigator_diff_1.NavigatorDiff);
        testContainer.get(common_1.SelectionService).selection = [{
                uri: new uri_1.default(file_uri_1.FileUri.create(path.resolve(__dirname, '../../test-resources/nonExistentFile.json')).toString())
            }];
        diff.addFirstComparisonFile()
            .then(function (result) {
            chai_1.expect(result).to.be.false;
            done();
        });
    });
    it('should run comparison when second file is added', function (done) {
        var diff = testContainer.get(navigator_diff_1.NavigatorDiff);
        testContainer.get(common_1.SelectionService).selection = [{
                uri: new uri_1.default(file_uri_1.FileUri.create(path.resolve(__dirname, '../../test-resources/testFileA.json')).toString())
            }];
        diff.addFirstComparisonFile()
            .then(function (result) {
            testContainer.get(common_1.SelectionService).selection = [{
                    uri: new uri_1.default(file_uri_1.FileUri.create(path.resolve(__dirname, '../../test-resources/testFileB.json')).toString())
                }];
            diff.compareFiles()
                .then(function (compareResult) {
                chai_1.expect(compareResult).to.be.true;
                done();
            });
        });
    });
    it('should fail to run comparison if first file not added', function (done) {
        var diff = testContainer.get(navigator_diff_1.NavigatorDiff);
        testContainer.get(common_1.SelectionService).selection = [{
                uri: new uri_1.default(file_uri_1.FileUri.create(path.resolve(__dirname, '../../test-resources/testFileA.json')).toString())
            }];
        diff.compareFiles()
            .then(function (compareResult) {
            chai_1.expect(compareResult).to.be.false;
            done();
        });
    });
});
//# sourceMappingURL=navigator-diff.spec.js.map
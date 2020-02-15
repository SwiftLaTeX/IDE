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
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var path = require("path");
var chai = require("chai");
var file_uri_1 = require("./file-uri");
var os_1 = require("../common/os");
var expect = chai.expect;
describe('file-uri', function () {
    var filePaths = ['with.txt', 'with spaces.txt', 'with:colon.txt', 'with_Ö.txt'].map(function (filePath) { return path.join(os.tmpdir(), 'file-uri-folder', filePath); });
    it('create -> fsPath -> create should be symmetric', function () {
        var orderedPaths = filePaths.map(function (filePath) { return filePath.toLowerCase(); }).sort();
        expect(orderedPaths.map(function (filePath) { return file_uri_1.FileUri.create(filePath); }).map(function (uri) { return file_uri_1.FileUri.fsPath(uri).toLowerCase(); }).sort()).to.be.deep.equal(orderedPaths);
    });
    it('fsPath -> create -> fsPath should be symmetric', function () {
        filePaths.forEach(function (filePath) {
            var expectedUri = file_uri_1.FileUri.create(filePath);
            var convertedPath = file_uri_1.FileUri.fsPath(expectedUri);
            var actualUri = file_uri_1.FileUri.create(convertedPath);
            expect(actualUri.toString()).to.be.equal(expectedUri.toString());
        });
    });
    it('from /', function () {
        var uri = file_uri_1.FileUri.create('/');
        expect(uri.toString(true)).to.be.equal('file:///');
    });
    it('from //', function () {
        var uri = file_uri_1.FileUri.create('//');
        expect(uri.toString(true)).to.be.equal('file:///');
    });
    it('from c:', function () {
        var uri = file_uri_1.FileUri.create('c:');
        expect(uri.toString(true)).to.be.equal('file:///c:');
    });
    it('from /c:', function () {
        var uri = file_uri_1.FileUri.create('/c:');
        expect(uri.toString(true)).to.be.equal('file:///c:');
    });
    it('from /c:/', function () {
        var uri = file_uri_1.FileUri.create('/c:/');
        expect(uri.toString(true)).to.be.equal('file:///c:/');
    });
    it('from file:///c%3A', function () {
        if (!os_1.isWindows) {
            this.skip();
            return;
        }
        var fsPath = file_uri_1.FileUri.fsPath('file:///c%3A');
        expect(fsPath).to.be.equal('c:\\');
    });
});
//# sourceMappingURL=file-uri.spec.js.map
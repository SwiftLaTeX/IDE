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
var chai = require("chai");
var uri_1 = require("./uri");
var expect = chai.expect;
describe('uri', function () {
    describe('#getAllLocations', function () {
        it('of /foo/bar/file.txt', function () {
            expect(new uri_1.default('/foo/bar/file.txt').allLocations.map(function (x) { return x.toString(); }))
                .deep.equals([
                new uri_1.default('/foo/bar/file.txt').toString(),
                new uri_1.default('/foo/bar').toString(),
                new uri_1.default('/foo').toString(),
                new uri_1.default('/').toString()
            ]);
        });
        it('of foo', function () {
            expect(new uri_1.default('foo').allLocations.map(function (x) { return x.toString(); }))
                .deep.equals([
                new uri_1.default('foo').toString(),
                new uri_1.default('/').toString()
            ]);
        });
        it('of foo:bar.txt', function () {
            expect(new uri_1.default().withScheme('foo').withPath('bar.txt').allLocations.map(function (x) { return x.toString(); }))
                .deep.equals([
                'foo:bar.txt'
            ]);
        });
        it('of foo:bar/foobar.txt', function () {
            expect(new uri_1.default().withScheme('foo').withPath('bar/foobar.txt').allLocations.map(function (x) { return x.toString(); }))
                .deep.equals([
                new uri_1.default().withScheme('foo').withPath('bar/foobar.txt').toString(),
                new uri_1.default().withScheme('foo').withPath('bar').toString()
            ]);
        });
    });
    describe('#getParent', function () {
        it('of file:///foo/bar.txt', function () {
            expect(new uri_1.default('file:///foo/bar.txt').parent.toString()).equals('file:///foo');
        });
        it('of file:///foo/', function () {
            expect(new uri_1.default('file:///foo/').parent.toString()).equals('file:///foo');
        });
        it('of file:///foo', function () {
            expect(new uri_1.default('file:///foo').parent.toString()).equals('file:///');
        });
        it('of file:///', function () {
            expect(new uri_1.default('file:///').parent.toString()).equals('file:///');
        });
        it('of file://', function () {
            expect(new uri_1.default('file://').parent.toString()).equals('file:///');
        });
    });
    describe('#lastSegment', function () {
        it('of file:///foo/bar.txt', function () {
            expect(new uri_1.default('file:///foo/bar.txt').path.base).equals('bar.txt');
        });
        it('of file:///foo', function () {
            expect(new uri_1.default('file:///foo').path.base).equals('foo');
        });
        it('of file:///', function () {
            expect(new uri_1.default('file:///').path.base).equals('');
        });
        it('of file://', function () {
            expect(new uri_1.default('file://').path.base).equals('');
        });
    });
    describe('#appendPath', function () {
        it("'' to file:///foo", function () {
            var uri = new uri_1.default('file:///foo');
            expect(uri.resolve('').toString()).to.be.equal(uri.toString());
        });
        it('bar to file:///foo', function () {
            expect(new uri_1.default('file:///foo').resolve('bar').toString()).to.be.equal('file:///foo/bar');
        });
        it('bar/baz to file:///foo', function () {
            expect(new uri_1.default('file:///foo').resolve('bar/baz').toString()).to.be.equal('file:///foo/bar/baz');
        });
        it("'' to file:///", function () {
            var uri = new uri_1.default('file:///');
            expect(uri.resolve('').toString()).to.be.equal(uri.toString());
        });
        it('bar to file:///', function () {
            expect(new uri_1.default('file:///').resolve('bar').toString()).to.be.equal('file:///bar');
        });
        it('bar/baz to file:///', function () {
            expect(new uri_1.default('file:///').resolve('bar/baz').toString()).to.be.equal('file:///bar/baz');
        });
    });
    describe('#path', function () {
        it('Should return with the FS path from the URI.', function () {
            expect(new uri_1.default('file:///foo/bar/baz.txt').path.toString()).equals('/foo/bar/baz.txt');
        });
        it('Should not return the encoded path', function () {
            expect(new uri_1.default('file:///foo 3/bar 4/baz 4.txt').path.toString()).equals('/foo 3/bar 4/baz 4.txt');
        });
    });
    describe('#withFragment', function () {
        it('Should replace the fragment.', function () {
            expect(new uri_1.default('file:///foo/bar/baz.txt#345345').withFragment('foo').toString()).equals('file:///foo/bar/baz.txt#foo');
            expect(new uri_1.default('file:///foo/bar/baz.txt?foo=2#345345').withFragment('foo').toString(true)).equals('file:///foo/bar/baz.txt?foo=2#foo');
        });
        it('Should remove the fragment.', function () {
            expect(new uri_1.default('file:///foo/bar/baz.txt#345345').withFragment('').toString()).equals('file:///foo/bar/baz.txt');
        });
    });
    describe('#toString()', function () {
        it('should produce the non encoded string', function () {
            function check(uri) {
                expect(new uri_1.default(uri).toString(true)).equals(uri);
            }
            check('file:///X?test=32');
            check('file:///X?test=32#345');
            check('file:///X test/ddd?test=32#345');
        });
    });
    describe('#Uri.with...()', function () {
        it('produce proper URIs', function () {
            var uri = new uri_1.default('').withScheme('file').withPath('/foo/bar.txt').withQuery('x=12').withFragment('baz');
            expect(uri.toString(true)).equals('file:///foo/bar.txt?x=12#baz');
            expect(uri.withScheme('http').toString(true)).equals('http:/foo/bar.txt?x=12#baz');
            expect(uri.withoutQuery().toString(true)).equals('file:///foo/bar.txt#baz');
            expect(uri.withoutFragment().toString(true)).equals(uri.withFragment('').toString(true));
            expect(uri.withPath('hubba-bubba').toString(true)).equals('file:///hubba-bubba?x=12#baz');
        });
    });
    describe('#relative()', function () {
        it('drive letters should be in lowercase', function () {
            var uri = new uri_1.default('file:///C:/projects/theia');
            var path = uri.relative(new uri_1.default(uri.resolve('node_modules/typescript/lib').toString()));
            expect(String(path)).equals('node_modules/typescript/lib');
        });
    });
});
//# sourceMappingURL=uri.spec.js.map
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
var endpoint_1 = require("./endpoint");
var expect = chai.expect;
describe('Endpoint', function () {
    describe('01 #getWebSocketUrl', function () {
        it('Should correctly join root pathname', function () {
            expectWsUri({
                httpScheme: 'ws',
                path: '/miau/'
            }, {
                host: 'example.org',
                pathname: '/',
                search: '',
                protocol: ''
            }, 'ws://example.org/miau/');
        });
        it('Should correctly join pathname and path', function () {
            expectWsUri({
                httpScheme: 'ws',
                path: '/miau/'
            }, {
                host: 'example.org',
                pathname: '/mainresource',
                search: '',
                protocol: ''
            }, 'ws://example.org/mainresource/miau/');
        });
        it('Should correctly join pathname and path, ignoring double slash in between', function () {
            expectWsUri({
                httpScheme: 'ws',
                path: '/miau/'
            }, {
                host: 'example.org',
                pathname: '/mainresource/',
                search: '',
                protocol: ''
            }, 'ws://example.org/mainresource/miau/');
        });
        it('Should correctly join pathname and path, without trailing slash', function () {
            expectWsUri({
                httpScheme: 'ws',
                path: '/miau'
            }, {
                host: 'example.org',
                pathname: '/mainresource',
                search: '',
                protocol: ''
            }, 'ws://example.org/mainresource/miau');
        });
    });
    describe('02 #httpScheme', function () {
        it('Should choose https:// if location protocol is https://', function () {
            expectRestUri({
                path: '/'
            }, {
                host: 'example.org',
                pathname: '/',
                search: '',
                protocol: 'https:'
            }, 'https://example.org/');
        });
        it("should return with the 'options.httpScheme' if defined", function () {
            expect(new endpoint_1.Endpoint({ httpScheme: 'foo:' }, {
                host: 'example.org',
                pathname: '/',
                search: '',
                protocol: 'https:'
            }).httpScheme).to.be.equal('foo:');
        });
        it('should return with the HTTP if the protocol is HTTP.', function () {
            expect(new endpoint_1.Endpoint({}, {
                host: 'example.org',
                pathname: '/',
                search: '',
                protocol: 'http:'
            }).httpScheme).to.be.equal('http:');
        });
        it('should return with the HTTPS if the protocol is HTTPS.', function () {
            expect(new endpoint_1.Endpoint({}, {
                host: 'example.org',
                pathname: '/',
                search: '',
                protocol: 'https:'
            }).httpScheme).to.be.equal('https:');
        });
        it('should return with the HTTP if the protocol is *not* HTTP or HTTPS.', function () {
            expect(new endpoint_1.Endpoint({}, {
                host: 'example.org',
                pathname: '/',
                search: '',
                protocol: 'file:'
            }).httpScheme).to.be.equal('http:');
        });
    });
});
function expectWsUri(options, mockLocation, expectedUri) {
    var cut = new endpoint_1.Endpoint(options, mockLocation);
    var uri = cut.getWebSocketUrl();
    expect(uri.toString()).to.eq(expectedUri);
}
function expectRestUri(options, mockLocation, expectedUri) {
    var cut = new endpoint_1.Endpoint(options, mockLocation);
    var uri = cut.getRestUrl();
    expect(uri.toString()).to.eq(expectedUri);
}
//# sourceMappingURL=endpoint.spec.js.map
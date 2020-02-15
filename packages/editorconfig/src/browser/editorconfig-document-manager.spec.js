"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc.
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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
/* eslint-disable no-unused-expressions */
var disableJSDOM = jsdom_1.enableJSDOM();
var chai_1 = require("chai");
var editorconfig_document_manager_1 = require("./editorconfig-document-manager");
var sinon = require("sinon");
disableJSDOM();
describe('Editorconfig document manager', function () {
    it('IsSet should return true', function () {
        var documentManager = new editorconfig_document_manager_1.EditorconfigDocumentManager();
        chai_1.expect(documentManager.isSet('value')).to.be.true;
    });
    it('IsSet should return false', function () {
        var documentManager = new editorconfig_document_manager_1.EditorconfigDocumentManager();
        chai_1.expect(documentManager.isSet('unset')).to.be.false;
    });
    it('Should handle all properties except `tab_width`', function () {
        var documentManager = new editorconfig_document_manager_1.EditorconfigDocumentManager();
        var stubIndentStyle = sinon.stub(documentManager, 'ensureIndentStyle');
        var stubIndentSize = sinon.stub(documentManager, 'ensureIndentSize');
        var stubEndOfLine = sinon.stub(documentManager, 'ensureEndOfLine');
        var properties = {
            indent_style: 'space',
            indent_size: 4,
            tab_width: 4,
            end_of_line: 'crlf',
            trim_trailing_whitespace: true,
            insert_final_newline: true
        };
        documentManager.applyProperties(properties, {});
        chai_1.expect(stubIndentStyle.called).to.be.true;
        chai_1.expect(stubIndentSize.called).to.be.true;
        chai_1.expect(stubEndOfLine.called).to.be.true;
    });
    it('Should handle `tab_width` property when `indent_size` is set to `tab`', function () {
        var documentManager = new editorconfig_document_manager_1.EditorconfigDocumentManager();
        var stubIndentSize = sinon.stub(documentManager, 'ensureIndentSize').callThrough();
        var stubTabWidth = sinon.stub(documentManager, 'ensureTabWidth');
        var properties = {
            indent_size: 'tab',
            tab_width: 4
        };
        documentManager.applyProperties(properties, {});
        chai_1.expect(stubIndentSize.called).to.be.true;
        chai_1.expect(stubTabWidth.called).to.be.true;
    });
    it('Should skip `tab_width` property when `indent_size` is set to `tab` but `tab_width` is not set', function () {
        var documentManager = new editorconfig_document_manager_1.EditorconfigDocumentManager();
        var stubIndentSize = sinon.stub(documentManager, 'ensureIndentSize').callThrough();
        var stubTabWidth = sinon.stub(documentManager, 'ensureTabWidth');
        var properties = {
            indent_size: 'tab'
        };
        documentManager.applyProperties(properties, {});
        chai_1.expect(stubIndentSize.called).to.be.true;
        chai_1.expect(stubTabWidth.called).to.be.false;
    });
    it('Should skip all properties', function () {
        var documentManager = new editorconfig_document_manager_1.EditorconfigDocumentManager();
        var stubIndentStyle = sinon.stub(documentManager, 'ensureIndentStyle');
        var stubIndentSize = sinon.stub(documentManager, 'ensureIndentSize');
        var stubEndOfLine = sinon.stub(documentManager, 'ensureEndOfLine');
        var properties = {};
        documentManager.applyProperties(properties, {});
        chai_1.expect(stubIndentStyle.called).to.be.false;
        chai_1.expect(stubIndentSize.called).to.be.false;
        chai_1.expect(stubEndOfLine.called).to.be.false;
    });
});
//# sourceMappingURL=editorconfig-document-manager.spec.js.map
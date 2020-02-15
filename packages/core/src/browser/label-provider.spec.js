"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var chai_1 = require("chai");
var label_provider_1 = require("./label-provider");
var uri_1 = require("../common/uri");
describe('DefaultUriLabelProviderContribution', function () {
    it('should return a short name', function () {
        var prov = new label_provider_1.DefaultUriLabelProviderContribution();
        var shortName = prov.getName(new uri_1.default('file:///tmp/hello/you.txt'));
        chai_1.expect(shortName).eq('you.txt');
    });
    it('should return a long name', function () {
        var prov = new label_provider_1.DefaultUriLabelProviderContribution();
        var longName = prov.getLongName(new uri_1.default('file:///tmp/hello/you.txt'));
        chai_1.expect(longName).eq('/tmp/hello/you.txt');
    });
    it('should return icon class for something that seems to be a file', function () {
        var prov = new label_provider_1.DefaultUriLabelProviderContribution();
        var icon = prov.getIcon(new uri_1.default('file:///tmp/hello/you.txt'));
        chai_1.expect(icon).eq('text-icon medium-blue theia-file-icons-js');
    });
    it('should return file icon class for something that seems to be a directory', function () {
        var prov = new label_provider_1.DefaultUriLabelProviderContribution();
        var icon = prov.getIcon(new uri_1.default('file:///tmp/hello'));
        chai_1.expect(icon).eq(prov.defaultFileIcon);
    });
    it('should return folder icon class for something that is a directory', function () {
        var prov = new label_provider_1.DefaultUriLabelProviderContribution();
        var icon = prov.getIcon(label_provider_1.URIIconReference.create('folder', new uri_1.default('file:///tmp/hello')));
        chai_1.expect(icon).eq(prov.defaultFolderIcon);
    });
});
//# sourceMappingURL=label-provider.spec.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var chai_1 = require("chai");
var semantic_highlighting_service_1 = require("./semantic-highlighting-service");
disableJSDOM();
describe('semantic-highlighting-service', function () {
    before(function () { return disableJSDOM = jsdom_1.enableJSDOM(); });
    after(function () { return disableJSDOM(); });
    it('encode-decode', function () {
        var input = [2, 5, 0, 12, 15, 1, 7, 1000, 1];
        var expected = semantic_highlighting_service_1.SemanticHighlightingService.Token.fromArray(input);
        var encoded = semantic_highlighting_service_1.SemanticHighlightingService.encode(expected);
        var actual = semantic_highlighting_service_1.SemanticHighlightingService.decode(encoded);
        chai_1.expect(actual).to.be.deep.equal(expected);
    });
    it('should fill with zeros when right shift for the decode phase', function () {
        this.timeout(10000);
        var input = [];
        for (var i = 0; i < 65536; i++) {
            input.push.apply(input, __spread([i, i, i]));
        }
        var expected = semantic_highlighting_service_1.SemanticHighlightingService.Token.fromArray(input);
        var encoded = semantic_highlighting_service_1.SemanticHighlightingService.encode(expected);
        var actual = semantic_highlighting_service_1.SemanticHighlightingService.decode(encoded);
        chai_1.expect(actual).to.be.deep.equal(expected);
    });
});
//# sourceMappingURL=semantic-highlighting-service.spec.js.map
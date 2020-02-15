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
var opener_service_1 = require("./opener-service");
var assert = require("assert");
var id = 'my-opener';
var openHandler = {
    id: id,
    label: 'My Opener',
    canHandle: function () {
        return Promise.resolve(1);
    },
    open: function () {
        return Promise.resolve(undefined);
    }
};
var openerService = new opener_service_1.DefaultOpenerService({
    getContributions: function () { return [openHandler]; }
});
describe('opener-service', function () {
    it('getOpeners', function () {
        return openerService.getOpeners().then(function (openers) {
            assert.deepStrictEqual([openHandler], openers);
        });
    });
});
//# sourceMappingURL=opener-service.spec.js.map
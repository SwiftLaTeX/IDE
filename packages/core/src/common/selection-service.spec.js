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
var selection_service_1 = require("./selection-service");
var chai = require("chai");
var expect = chai.expect;
describe('selection-service', function () {
    describe('01 #addListener and dispose', function () {
        it('Should be rejected when path argument is undefined.', function () {
            var service = createSelectionService();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var events = [];
            var disposable = service.onSelectionChanged(function (e) { return events.push(e); });
            service.selection = 'foo';
            disposable.dispose();
            service.selection = 'bar';
            expect(events.length).equals(1);
            expect(events[0]).equals('foo');
        });
    });
});
function createSelectionService() {
    return new selection_service_1.SelectionService();
}
//# sourceMappingURL=selection-service.spec.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var mock_logger_1 = require("./test/mock-logger");
var logger_1 = require("./logger");
/* eslint-disable no-unused-expressions */
describe('logger', function () {
    it('window is not defined', function () {
        chai_1.expect(function () { window; }).to.throw(ReferenceError, /window is not defined/);
    });
    it('window is not defined when converting to boolean', function () {
        chai_1.expect(function () { !!window; }).to.throw(ReferenceError, /window is not defined/);
    });
    it('window is not defined safe', function () {
        chai_1.expect(function () { typeof window !== 'undefined'; }).to.not.throw(ReferenceError);
    });
    it('setting the root logger should not throw an error when the window is not defined', function () {
        chai_1.expect(function () {
            try {
                logger_1.setRootLogger(new mock_logger_1.MockLogger());
            }
            finally {
                logger_1.unsetRootLogger();
            }
        }).to.not.throw(ReferenceError);
    });
});
//# sourceMappingURL=logger.spec.js.map
"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var prometheus_1 = require("./prometheus");
var expect = chai.expect;
/* eslint-disable no-unused-expressions */
describe('Prometheus helper module', function () {
    /* According to https://prometheus.io/docs/concepts/data_model/ */
    var validName = 'theia_extension3242-:';
    var invalidTheiaName = '@theia/something';
    var validTheiaName = 'theia_something';
    var invalidName2 = '@theia/?$%^ ';
    it('Should correctly validate a metric name', function () {
        expect(prometheus_1.PROMETHEUS_REGEXP.test(validName)).to.be.true;
        expect(prometheus_1.PROMETHEUS_REGEXP.test(invalidTheiaName)).to.be.false;
        expect(prometheus_1.PROMETHEUS_REGEXP.test(invalidName2)).to.be.false;
    });
    it('Should correctly return a valid name from an otherwise invalid prometheus string', function () {
        expect(prometheus_1.PROMETHEUS_REGEXP.test(invalidTheiaName)).to.be.false;
        var newName = prometheus_1.toPrometheusValidName(invalidTheiaName);
        expect(prometheus_1.PROMETHEUS_REGEXP.test(newName)).to.be.true;
        expect(newName).to.be.equal(validTheiaName);
        var newName2 = prometheus_1.toPrometheusValidName(invalidName2);
        expect(prometheus_1.PROMETHEUS_REGEXP.test(newName2)).to.be.true;
    });
});
//# sourceMappingURL=prometheus.spec.js.map
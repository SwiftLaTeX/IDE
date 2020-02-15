"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var mock_logger_1 = require("@theia/core/lib/common/test/mock-logger");
var variable_1 = require("./variable");
/* eslint-disable no-unused-expressions */
var expect = chai.expect;
var variableRegistry;
before(function () {
    chai.config.showDiff = true;
    chai.config.includeStack = true;
});
describe('variable api', function () {
    var testContainer;
    before(function () {
        testContainer = new inversify_1.Container();
        var module = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
            bind(common_1.ILogger).to(mock_logger_1.MockLogger);
            bind(variable_1.VariableRegistry).toSelf();
        });
        testContainer.load(module);
    });
    beforeEach(function () {
        variableRegistry = testContainer.get(variable_1.VariableRegistry);
    });
    it('should register and return variable', function () {
        registerTestVariable();
        var variable = variableRegistry.getVariable(TEST_VARIABLE.name);
        expect(variable).is.not.undefined;
        if (variable) {
            expect(variable.name).is.equal(TEST_VARIABLE.name);
        }
    });
    it('should not register a variable for already existed name', function () {
        var variables = [
            {
                name: 'workspaceRoot',
                description: 'workspace root URI',
                resolve: function () { return Promise.resolve(''); }
            },
            {
                name: 'workspaceRoot',
                description: 'workspace root URI 2',
                resolve: function () { return Promise.resolve(''); }
            }
        ];
        variables.forEach(function (v) { return variableRegistry.registerVariable(v); });
        var registeredVariables = variableRegistry.getVariables();
        expect(registeredVariables.length).to.be.equal(1);
        expect(registeredVariables[0].name).to.be.equal('workspaceRoot');
        expect(registeredVariables[0].description).to.be.equal('workspace root URI');
    });
    it('should dispose variable', function () {
        var disposable = registerTestVariable();
        disposable.dispose();
        var variable = variableRegistry.getVariable(TEST_VARIABLE.name);
        expect(variable).is.undefined;
    });
    it('should unregister variables on dispose', function () {
        registerTestVariable();
        var variables = variableRegistry.getVariables();
        expect(variables.length).to.be.equal(1);
        variableRegistry.dispose();
        variables = variableRegistry.getVariables();
        expect(variables.length).to.be.equal(0);
    });
});
var TEST_VARIABLE = {
    name: 'workspaceRoot',
    resolve: function () { return Promise.resolve(''); }
};
function registerTestVariable() {
    return variableRegistry.registerVariable(TEST_VARIABLE);
}
//# sourceMappingURL=variable.spec.js.map
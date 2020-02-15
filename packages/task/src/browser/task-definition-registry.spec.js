"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var task_definition_registry_1 = require("./task-definition-registry");
/* eslint-disable no-unused-expressions */
describe('TaskDefinitionRegistry', function () {
    var registry;
    var definitionContributionA = {
        taskType: 'extA',
        source: 'extA',
        required: ['extensionType'],
        properties: {
            required: ['extensionType'],
            all: ['extensionType', 'taskLabel'],
            schema: {
                type: 'extA',
                required: ['extensionType'],
                properties: {
                    extensionType: {},
                    taskLabel: {}
                }
            }
        }
    };
    var definitionContributionB = {
        taskType: 'extA',
        source: 'extA',
        properties: {
            required: ['extensionType', 'taskLabel', 'taskDetailedLabel'],
            all: ['extensionType', 'taskLabel', 'taskDetailedLabel'],
            schema: {
                type: 'extA',
                required: ['extensionType', 'taskLabel', 'taskDetailedLabel'],
                properties: {
                    extensionType: {},
                    taskLabel: {},
                    taskDetailedLabel: {}
                }
            }
        }
    };
    beforeEach(function () {
        registry = new task_definition_registry_1.TaskDefinitionRegistry();
    });
    describe('register function', function () {
        it('should transform the task definition contribution and store it in memory', function () {
            registry.register(definitionContributionA);
            chai_1.expect(registry['definitions'].get(definitionContributionA.taskType)).to.be.ok;
            chai_1.expect(registry['definitions'].get(definitionContributionA.taskType)[0]).to.deep.equal(definitionContributionA);
        });
    });
    describe('getDefinitions function', function () {
        it('should return all definitions associated with the given type', function () {
            registry.register(definitionContributionA);
            var defs1 = registry.getDefinitions(definitionContributionA.taskType);
            chai_1.expect(defs1.length).to.eq(1);
            registry.register(definitionContributionB);
            var defs2 = registry.getDefinitions(definitionContributionA.taskType);
            chai_1.expect(defs2.length).to.eq(2);
        });
    });
    describe('getDefinition function', function () {
        it('should return undefined if the given task configuration does not match any registered definitions', function () {
            registry.register(definitionContributionA);
            registry.register(definitionContributionB);
            var defs = registry.getDefinition({
                type: definitionContributionA.taskType, label: 'grunt task', task: 'build'
            });
            chai_1.expect(defs).to.be.not.ok;
        });
        it('should return the best match if there is one or more registered definitions match the given task configuration', function () {
            registry.register(definitionContributionA);
            registry.register(definitionContributionB);
            var defs = registry.getDefinition({
                type: definitionContributionA.taskType, label: 'extension task', extensionType: 'extensionType', taskLabel: 'taskLabel'
            });
            chai_1.expect(defs).to.be.ok;
            chai_1.expect(defs.taskType).to.be.eq(definitionContributionA.taskType);
            var defs2 = registry.getDefinition({
                type: definitionContributionA.taskType, label: 'extension task', extensionType: 'extensionType', taskLabel: 'taskLabel', taskDetailedLabel: 'taskDetailedLabel'
            });
            chai_1.expect(defs2).to.be.ok;
            chai_1.expect(defs2.taskType).to.be.eq(definitionContributionB.taskType);
        });
    });
});
//# sourceMappingURL=task-definition-registry.spec.js.map
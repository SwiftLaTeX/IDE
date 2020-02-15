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
import { Event, Emitter } from '@theia/core/lib/common';
import { TaskConfiguration, TaskCustomization, TaskDefinition } from '../common';
import { Disposable } from '@theia/core/lib/common/disposable';
export declare class TaskDefinitionRegistry {
    private definitions;
    protected readonly onDidRegisterTaskDefinitionEmitter: Emitter<void>;
    get onDidRegisterTaskDefinition(): Event<void>;
    protected readonly onDidUnregisterTaskDefinitionEmitter: Emitter<void>;
    get onDidUnregisterTaskDefinition(): Event<void>;
    /**
     * Returns all task definitions that are registered
     * @return the task definitions that are registered
     */
    getAll(): TaskDefinition[];
    /**
     * Finds the task definition(s) from the registry with the given `taskType`.
     *
     * @param taskType the type of the task
     * @return an array of the task definitions. If no task definitions are found, an empty array is returned.
     */
    getDefinitions(taskType: string): TaskDefinition[];
    /**
     * Finds the task definition from the registry for the task configuration.
     * The task configuration is considered as a "match" to the task definition if it has all the `required` properties.
     * In case that more than one task definition is found, return the one that has the biggest number of matched properties.
     *
     * @param taskConfiguration the task configuration
     * @return the task definition for the task configuration. If the task definition is not found, `undefined` is returned.
     */
    getDefinition(taskConfiguration: TaskConfiguration | TaskCustomization): TaskDefinition | undefined;
    /**
     * Add a task definition to the registry.
     *
     * @param definition the task definition to be added.
     */
    register(definition: TaskDefinition): Disposable;
    compareTasks(one: TaskConfiguration, other: TaskConfiguration): boolean;
}
//# sourceMappingURL=task-definition-registry.d.ts.map
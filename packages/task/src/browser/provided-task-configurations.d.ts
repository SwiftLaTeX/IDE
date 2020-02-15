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
import { TaskProviderRegistry } from './task-contribution';
import { TaskDefinitionRegistry } from './task-definition-registry';
import { TaskConfiguration, TaskCustomization } from '../common';
export declare class ProvidedTaskConfigurations {
    /**
     * Map of source (name of extension, or path of root folder that the task config comes from) and `task config map`.
     * For the second level of inner map, the key is task label.
     * For the third level of inner map, the key is the task scope and value TaskConfiguration.
     */
    protected tasksMap: Map<string, Map<string, Map<string | undefined, TaskConfiguration>>>;
    protected readonly taskProviderRegistry: TaskProviderRegistry;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    /** returns a list of provided tasks */
    getTasks(): Promise<TaskConfiguration[]>;
    /** returns the task configuration for a given source and label or undefined if none */
    getTask(source: string, taskLabel: string, scope?: string): Promise<TaskConfiguration | undefined>;
    /**
     * Finds the detected task for the given task customization.
     * The detected task is considered as a "match" to the task customization if it has all the `required` properties.
     * In case that more than one customization is found, return the one that has the biggest number of matched properties.
     *
     * @param customization the task customization
     * @return the detected task for the given task customization. If the task customization is not found, `undefined` is returned.
     */
    getTaskToCustomize(customization: TaskCustomization, rootFolderPath: string): Promise<TaskConfiguration | undefined>;
    protected getCachedTask(source: string, taskLabel: string, scope?: string): TaskConfiguration | undefined;
    protected cacheTasks(tasks: TaskConfiguration[]): void;
}
//# sourceMappingURL=provided-task-configurations.d.ts.map
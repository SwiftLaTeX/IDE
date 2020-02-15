/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { JsonSchemaStore } from '@theia/core/lib/browser/json-schema-store';
import { InMemoryResources, Emitter } from '@theia/core/lib/common';
import { IJSONSchema } from '@theia/core/lib/common/json-schema';
import { ProblemMatcherRegistry } from './task-problem-matcher-registry';
import { TaskDefinitionRegistry } from './task-definition-registry';
import { TaskServer } from '../common';
export declare const taskSchemaId = "vscode://schemas/tasks";
export declare class TaskSchemaUpdater {
    protected readonly jsonSchemaStore: JsonSchemaStore;
    protected readonly inmemoryResources: InMemoryResources;
    protected readonly problemMatcherRegistry: ProblemMatcherRegistry;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly taskServer: TaskServer;
    protected readonly onDidChangeTaskSchemaEmitter: Emitter<void>;
    readonly onDidChangeTaskSchema: import("@theia/core/src/common").Event<void>;
    protected init(): void;
    update(): void;
    /**
     * Adds given task schema to `taskConfigurationSchema` as `oneOf` subschema.
     * Replaces existed subschema by given schema if the corresponding `$id` properties are equal.
     *
     * Note: please provide `$id` property for subschema to have ability remove/replace it.
     * @param schema subschema for adding to `taskConfigurationSchema`
     */
    addSubschema(schema: IJSONSchema): void;
    /**
     * Removes task subschema from `taskConfigurationSchema`.
     *
     * @param arg `$id` property of subschema
     */
    removeSubschema(arg: string): void;
    /**
     * Removes task subschema from `customSchemas`, use `update()` to apply the changes for `taskConfigurationSchema`.
     *
     * @param arg `$id` property of subschema
     * @returns `true` if subschema was removed, `false` otherwise
     */
    protected doRemoveSubschema(arg: string): boolean;
    /** Returns an array of task types that are registered, including the default types */
    getRegisteredTaskTypes(): Promise<string[]>;
    private updateSchemasForRegisteredTasks;
    /** Returns the task's JSON schema */
    getTaskSchema(): IJSONSchema;
    /** Returns the task's JSON schema as a string */
    private getStringifiedTaskSchema;
    /** Gets the most up-to-date names of problem matchers from the registry and update the task schema */
    private updateProblemMatcherNames;
    private updateSupportedTaskTypes;
}
//# sourceMappingURL=task-schema-updater.d.ts.map
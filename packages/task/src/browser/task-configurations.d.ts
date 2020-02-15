/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
import { TaskConfiguration, TaskCustomization } from '../common';
import { TaskDefinitionRegistry } from './task-definition-registry';
import { ProvidedTaskConfigurations } from './provided-task-configurations';
import { TaskConfigurationManager } from './task-configuration-manager';
import { TaskSchemaUpdater } from './task-schema-updater';
import { TaskSourceResolver } from './task-source-resolver';
import { Disposable, DisposableCollection, ResourceProvider } from '@theia/core/lib/common';
import { FileChange } from '@theia/filesystem/lib/common/filesystem-watcher-protocol';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { OpenerService } from '@theia/core/lib/browser';
export interface TaskConfigurationClient {
    /**
     * The task configuration file has changed, so a client might want to refresh its configurations
     * @returns an array of strings, each one being a task label
     */
    taskConfigurationChanged: (event: string[]) => void;
}
/**
 * Watches a tasks.json configuration file and provides a parsed version of the contained task configurations
 */
export declare class TaskConfigurations implements Disposable {
    protected readonly toDispose: DisposableCollection;
    /**
     * Map of source (path of root folder that the task configs come from) and task config map.
     * For the inner map (i.e., task config map), the key is task label and value TaskConfiguration
     */
    protected tasksMap: Map<string, Map<string, TaskConfiguration>>;
    /**
     * Map of source (path of root folder that the task configs come from) and task customizations map.
     */
    protected taskCustomizationMap: Map<string, TaskCustomization[]>;
    /** last directory element under which we look for task config */
    protected readonly TASKFILEPATH = ".theia";
    /** task configuration file name */
    protected readonly TASKFILE = "tasks.json";
    protected client: TaskConfigurationClient | undefined;
    /**
     * Map of source (path of root folder that the task configs come from) and raw task configurations / customizations.
     * This map is used to store the data from `tasks.json` files in workspace.
     */
    private rawTaskConfigurations;
    protected readonly workspaceService: WorkspaceService;
    protected readonly resourceProvider: ResourceProvider;
    protected readonly openerService: OpenerService;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly providedTaskConfigurations: ProvidedTaskConfigurations;
    protected readonly taskConfigurationManager: TaskConfigurationManager;
    protected readonly taskSchemaUpdater: TaskSchemaUpdater;
    protected readonly taskSourceResolver: TaskSourceResolver;
    constructor();
    protected init(): void;
    setClient(client: TaskConfigurationClient): void;
    dispose(): void;
    /** returns the list of known task labels */
    getTaskLabels(): string[];
    /**
     * returns a collection of known tasks, which includes:
     * - all the configured tasks in `tasks.json`, and
     * - the customized detected tasks.
     *
     * The invalid task configs are not returned.
     */
    getTasks(): Promise<TaskConfiguration[]>;
    /**
     * returns a collection of invalid task configs as per the task schema defined in Theia.
     */
    getInvalidTaskConfigurations(): (TaskCustomization | TaskConfiguration)[];
    /** returns the task configuration for a given label or undefined if none */
    getTask(rootFolderPath: string, taskLabel: string): TaskConfiguration | undefined;
    /** removes tasks configured in the given task config file */
    private removeTasks;
    /**
     * Removes task customization objects found in the given task config file from the memory.
     * Please note: this function does not modify the task config file.
     */
    private removeTaskCustomizations;
    /**
     * Returns the task customizations by type from a given root folder in the workspace.
     * @param type the type of task customizations
     * @param rootFolder the root folder to find task customizations from. If `undefined`, this function returns an empty array.
     */
    getTaskCustomizations(type: string, rootFolder?: string): TaskCustomization[];
    /**
     * Returns the customization object in `tasks.json` for the given task. Please note, this function
     * returns `undefined` if the given task is not a detected task, because configured tasks don't need
     * customization objects - users can modify its config directly in `tasks.json`.
     * @param taskConfig The task config, which could either be a configured task or a detected task.
     */
    getCustomizationForTask(taskConfig: TaskConfiguration): TaskCustomization | undefined;
    /** returns the string uri of where the config file would be, if it existed under a given root directory */
    protected getConfigFileUri(rootDir: string): string;
    /**
     * Called when a change, to a config file we watch, is detected.
     */
    protected onDidTaskFileChange(fileChanges: FileChange[]): Promise<void>;
    /**
     * Read the task configs from the task configuration manager, and updates the list of available tasks.
     */
    protected refreshTasks(rootFolderUri: string): Promise<void>;
    /** parses a config file and extracts the tasks launch configurations */
    protected readTasks(rootFolderUri: string): Promise<(TaskCustomization | TaskConfiguration)[] | undefined>;
    /** Adds given task to a config file and opens the file to provide ability to edit task configuration. */
    configure(task: TaskConfiguration): Promise<void>;
    private getTaskCustomizationTemplate;
    /** Writes the task to a config file. Creates a config file if this one does not exist */
    saveTask(sourceFolderUri: string, task: TaskConfiguration): Promise<void>;
    /**
     * This function is called after a change in TaskDefinitionRegistry happens.
     * It checks all tasks that have been loaded, and re-organized them in `tasksMap` and `taskCustomizationMap`.
     */
    protected reorganizeTasks(): void;
    private getTransformedRawTask;
    /**
     * Returns `true` if the given task configuration is valid as per the task schema defined in Theia
     * or contributed by Theia extensions and plugins, `false` otherwise.
     */
    private isTaskConfigValid;
    /**
     * Updates the task config in the `tasks.json`.
     * The task config, together with updates, will be written into the `tasks.json` if it is not found in the file.
     *
     * @param task task that the updates will be applied to
     * @param update the updates to be applied
     */
    updateTaskConfig(task: TaskConfiguration, update: {
        [name: string]: any;
    }): Promise<void>;
    private getSourceFolderFromConfigUri;
    /** checks if the config is a detected / contributed task */
    private isDetectedTask;
    private getTaskDefinition;
}
//# sourceMappingURL=task-configurations.d.ts.map
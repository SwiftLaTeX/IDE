/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
import { ApplicationShell, FrontendApplication, WidgetManager } from '@theia/core/lib/browser';
import { OpenerService } from '@theia/core/lib/browser/opener-service';
import { ILogger, CommandService } from '@theia/core/lib/common';
import { MessageService } from '@theia/core/lib/common/message-service';
import { Deferred } from '@theia/core/lib/common/promise-util';
import { QuickPickService } from '@theia/core/lib/common/quick-pick-service';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
import { EditorManager } from '@theia/editor/lib/browser';
import { ProblemManager } from '@theia/markers/lib/browser/problem/problem-manager';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';
import { VariableResolverService } from '@theia/variable-resolver/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { NamedProblemMatcher, ProblemMatcher, RunTaskOption, TaskConfiguration, TaskCustomization, TaskInfo, TaskDefinition, TaskServer, TaskIdentifier } from '../common';
import { TaskWatcher } from '../common/task-watcher';
import { ProvidedTaskConfigurations } from './provided-task-configurations';
import { TaskConfigurationClient, TaskConfigurations } from './task-configurations';
import { TaskProviderRegistry, TaskResolverRegistry } from './task-contribution';
import { TaskDefinitionRegistry } from './task-definition-registry';
import { TaskNameResolver } from './task-name-resolver';
import { TaskSourceResolver } from './task-source-resolver';
import { ProblemMatcherRegistry } from './task-problem-matcher-registry';
import { TaskSchemaUpdater } from './task-schema-updater';
import { TaskConfigurationManager } from './task-configuration-manager';
import { TaskNode } from './task-node';
export interface QuickPickProblemMatcherItem {
    problemMatchers: NamedProblemMatcher[] | undefined;
    learnMore?: boolean;
}
interface TaskGraphNode {
    taskConfiguration: TaskConfiguration;
    node: TaskNode;
}
export declare enum TaskEndedTypes {
    TaskExited = 0,
    BackgroundTaskEnded = 1
}
export interface TaskEndedInfo {
    taskEndedType: TaskEndedTypes;
    value: number | boolean | undefined;
}
export declare class TaskService implements TaskConfigurationClient {
    /**
     * The last executed task.
     */
    protected lastTask: {
        source: string;
        taskLabel: string;
    } | undefined;
    protected cachedRecentTasks: TaskConfiguration[];
    protected runningTasks: Map<number, {
        exitCode: Deferred<number | undefined>;
        terminateSignal: Deferred<string | undefined>;
        isBackgroundTaskEnded: Deferred<boolean | undefined>;
    }>;
    protected readonly app: FrontendApplication;
    protected readonly shell: ApplicationShell;
    protected readonly taskServer: TaskServer;
    protected readonly logger: ILogger;
    protected readonly widgetManager: WidgetManager;
    protected readonly taskWatcher: TaskWatcher;
    protected readonly messageService: MessageService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly taskConfigurations: TaskConfigurations;
    protected readonly providedTaskConfigurations: ProvidedTaskConfigurations;
    protected readonly variableResolverService: VariableResolverService;
    protected readonly taskResolverRegistry: TaskResolverRegistry;
    protected readonly terminalService: TerminalService;
    protected readonly editorManager: EditorManager;
    protected readonly problemManager: ProblemManager;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly problemMatcherRegistry: ProblemMatcherRegistry;
    protected readonly quickPick: QuickPickService;
    protected readonly openerService: OpenerService;
    protected readonly taskNameResolver: TaskNameResolver;
    protected readonly taskSourceResolver: TaskSourceResolver;
    protected readonly taskSchemaUpdater: TaskSchemaUpdater;
    protected readonly taskConfigurationManager: TaskConfigurationManager;
    protected readonly commands: CommandService;
    protected readonly labelProvider: LabelProvider;
    /**
     * @deprecated To be removed in 0.5.0
     */
    protected readonly taskProviderRegistry: TaskProviderRegistry;
    protected init(): void;
    private getTaskIdentifier;
    /** Returns an array of the task configurations configured in tasks.json and provided by the extensions. */
    getTasks(): Promise<TaskConfiguration[]>;
    /** Returns an array of the valid task configurations which are configured in tasks.json files */
    getConfiguredTasks(): Promise<TaskConfiguration[]>;
    /** Returns an array of the task configurations which are provided by the extensions. */
    getProvidedTasks(): Promise<TaskConfiguration[]>;
    addRecentTasks(tasks: TaskConfiguration | TaskConfiguration[]): void;
    get recentTasks(): TaskConfiguration[];
    set recentTasks(recent: TaskConfiguration[]);
    /**
     * Clears the list of recently used tasks.
     */
    clearRecentTasks(): void;
    /**
     * Returns a task configuration provided by an extension by task source and label.
     * If there are no task configuration, returns undefined.
     */
    getProvidedTask(source: string, label: string, scope?: string): Promise<TaskConfiguration | undefined>;
    /** Returns an array of running tasks 'TaskInfo' objects */
    getRunningTasks(): Promise<TaskInfo[]>;
    /** Returns an array of task types that are registered, including the default types */
    getRegisteredTaskTypes(): Promise<string[]>;
    /**
     * Get the last executed task.
     *
     * @returns the last executed task or `undefined`.
     */
    getLastTask(): {
        source: string;
        taskLabel: string;
    } | undefined;
    /**
     * Runs a task, by task configuration label.
     * Note, it looks for a task configured in tasks.json only.
     */
    runConfiguredTask(source: string, taskLabel: string): Promise<void>;
    /**
     * Run the last executed task.
     */
    runLastTask(): Promise<TaskInfo | undefined>;
    /**
     * Runs a task, by the source and label of the task configuration.
     * It looks for configured and detected tasks.
     */
    run(source: string, taskLabel: string, scope?: string): Promise<TaskInfo | undefined>;
    /**
     * A recursive function that runs a task and all its sub tasks that it depends on.
     * A task can be executed only when all of its dependencies have been executed, or when it doesn’t have any dependencies at all.
     */
    runTasksGraph(task: TaskConfiguration, tasks: TaskConfiguration[], option?: RunTaskOption): Promise<TaskInfo | undefined>;
    /**
     * Creates a graph of dependencies tasks from the root task and verify there is no DAG (Directed Acyclic Graph).
     * In case of detection of a circular dependency, an error is thrown with a message which describes the detected circular reference.
     */
    detectDirectedAcyclicGraph(task: TaskConfiguration, taskNode: TaskNode, tasks: TaskConfiguration[]): void;
    createChildTaskNode(task: TaskConfiguration, taskNode: TaskNode, childTaskIdentifier: string | TaskIdentifier, tasks: TaskConfiguration[]): TaskGraphNode;
    /**
     * Gets task configuration by task label or by a JSON object which represents a task identifier
     *
     * @param taskIdentifier The task label (string) or a JSON object which represents a TaskIdentifier (e.g. {"type":"npm", "script":"script1"})
     * @param tasks an array of the task configurations
     * @returns the correct TaskConfiguration object which matches the taskIdentifier
     */
    getDependentTask(taskIdentifier: string | TaskIdentifier, tasks: TaskConfiguration[]): TaskConfiguration;
    /**
     * Gets the matched task from an array of task configurations by TaskDefinition and TaskIdentifier.
     * In case that more than one task configuration matches, we returns the first one.
     *
     * @param taskDefinition The task definition for the task configuration.
     * @param taskIdentifier The task label (string) or a JSON object which represents a TaskIdentifier (e.g. {"type":"npm", "script":"script1"})
     * @param tasks An array of task configurations.
     * @returns The correct TaskConfiguration object which matches the taskDefinition and taskIdentifier.
     */
    getTaskByTaskIdentifierAndTaskDefinition(taskDefinition: TaskDefinition | undefined, taskIdentifier: TaskIdentifier, tasks: TaskConfiguration[]): TaskConfiguration;
    runTask(task: TaskConfiguration, option?: RunTaskOption): Promise<TaskInfo | undefined>;
    /**
     * Terminates a task that is actively running.
     * @param activeTaskInfo the TaskInfo of the task that is actively running
     */
    terminateTask(activeTaskInfo: TaskInfo): Promise<void>;
    /**
     * Terminates a task that is actively running, and restarts it.
     * @param activeTaskInfo the TaskInfo of the task that is actively running
     */
    restartTask(activeTaskInfo: TaskInfo, option?: RunTaskOption): Promise<TaskInfo | undefined>;
    protected doRunTask(task: TaskConfiguration, option?: RunTaskOption): Promise<TaskInfo | undefined>;
    runTaskByLabel(taskLabel: string): Promise<TaskInfo | undefined>;
    runWorkspaceTask(workspaceFolderUri: string | undefined, taskIdentifier: string | TaskIdentifier): Promise<TaskInfo | undefined>;
    /**
     * Updates the task configuration in the `tasks.json`.
     * The task config, together with updates, will be written into the `tasks.json` if it is not found in the file.
     *
     * @param task task that the updates will be applied to
     * @param update the updates to be applied
     */
    updateTaskConfiguration(task: TaskConfiguration, update: {
        [name: string]: any;
    }): Promise<void>;
    protected getWorkspaceTasks(workspaceFolderUri: string | undefined): Promise<TaskConfiguration[]>;
    protected resolveProblemMatchers(task: TaskConfiguration, customizationObject: TaskCustomization): Promise<ProblemMatcher[] | undefined>;
    protected getTaskCustomization(task: TaskConfiguration): Promise<TaskCustomization>;
    private removeProblemMarks;
    private getResolvedTask;
    /**
     * Runs the resolved task and opens terminal widget if the task is based on a terminal process
     * @param resolvedTask the resolved task
     * @param option options to run the resolved task
     */
    private runResolvedTask;
    private getCustomizeProblemMatcherItems;
    /**
     * Run selected text in the last active terminal.
     */
    runSelectedText(): Promise<void>;
    attach(processId: number, taskId: number): Promise<void>;
    private getTerminalWidgetId;
    configure(task: TaskConfiguration): Promise<void>;
    protected isEventForThisClient(context: string | undefined): boolean;
    taskConfigurationChanged(event: string[]): void;
    protected getContext(): string | undefined;
    /** Kill task for a given id if task is found */
    kill(id: number): Promise<void>;
    isBackgroundTaskEnded(id: number): Promise<boolean | undefined>;
    getExitCode(id: number): Promise<number | undefined>;
    getTerminateSignal(id: number): Promise<string | undefined>;
}
export {};
//# sourceMappingURL=task-service.d.ts.map
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
import { JsonRpcServer } from '@theia/core/lib/common/messaging/proxy-factory';
import { IJSONSchema } from '@theia/core/lib/common/json-schema';
import { ProblemMatcher, ProblemMatch, WatchingPattern } from './problem-matcher-protocol';
export declare const taskPath = "/services/task";
export declare const TaskServer: unique symbol;
export declare const TaskClient: unique symbol;
export declare enum DependsOrder {
    Sequence = "sequence",
    Parallel = "parallel"
}
export declare enum RevealKind {
    Always = 0,
    Silent = 1,
    Never = 2
}
export interface TaskOutputPresentation {
    focus?: boolean;
    reveal?: RevealKind;
    [name: string]: any;
}
export declare namespace TaskOutputPresentation {
    function fromJson(task: any): TaskOutputPresentation;
}
export interface TaskCustomization {
    type: string;
    group?: 'build' | 'test' | 'none' | {
        kind: 'build' | 'test' | 'none';
        isDefault: true;
    };
    problemMatcher?: string | ProblemMatcherContribution | (string | ProblemMatcherContribution)[];
    presentation?: TaskOutputPresentation;
    /** Whether the task is a background task or not. */
    isBackground?: boolean;
    /** The other tasks the task depend on. */
    dependsOn?: string | TaskIdentifier | Array<string | TaskIdentifier>;
    /** The order the dependsOn tasks should be executed in. */
    dependsOrder?: DependsOrder;
    [name: string]: any;
}
export declare namespace TaskCustomization {
    function isBuildTask(task: TaskCustomization): boolean;
    function isDefaultBuildTask(task: TaskCustomization): boolean;
    function isTestTask(task: TaskCustomization): boolean;
    function isDefaultTestTask(task: TaskCustomization): boolean;
}
export interface TaskConfiguration extends TaskCustomization {
    /** A label that uniquely identifies a task configuration per source */
    readonly label: string;
    /**
     * For a provided task, it is the string representation of the URI where the task is supposed to run from. It is `undefined` for global tasks.
     * For a configured task, it is workspace URI that task belongs to.
     * This field is not supposed to be used in `tasks.json`
     */
    readonly _scope: string | undefined;
}
export interface ContributedTaskConfiguration extends TaskConfiguration {
    /**
     * Source of the task configuration.
     * For a configured task, it is the name of the root folder, while for a provided task, it is the name of the provider.
     * This field is not supposed to be used in `tasks.json`
     */
    readonly _source: string;
}
/** A task identifier */
export interface TaskIdentifier {
    type: string;
    [name: string]: string;
}
/** Runtime information about Task. */
export interface TaskInfo {
    /** internal unique task id */
    readonly taskId: number;
    /** terminal id. Defined if task is run as a terminal process */
    readonly terminalId?: number;
    /** context that was passed as part of task creation, if any */
    readonly ctx?: string;
    /** task config used for launching a task */
    readonly config: TaskConfiguration;
    /** Additional properties specific for a particular Task Runner. */
    readonly [key: string]: any;
}
export interface TaskServer extends JsonRpcServer<TaskClient> {
    /** Run a task. Optionally pass a context.  */
    run(task: TaskConfiguration, ctx?: string, option?: RunTaskOption): Promise<TaskInfo>;
    /** Kill a task, by id. */
    kill(taskId: number): Promise<void>;
    /**
     * Returns a list of currently running tasks. If a context is provided,
     * only the tasks started in that context will be provided. Using an
     * undefined context matches all tasks, no matter the creation context.
     */
    getTasks(ctx?: string): Promise<TaskInfo[]>;
    /** removes the client that has disconnected */
    disconnectClient(client: TaskClient): void;
    /** Returns the list of default and registered task runners */
    getRegisteredTaskTypes(): Promise<string[]>;
}
export interface TaskCustomizationData {
    type: string;
    problemMatcher?: ProblemMatcher[];
    [name: string]: any;
}
export interface RunTaskOption {
    customization?: TaskCustomizationData;
}
/** Event sent when a task has concluded its execution */
export interface TaskExitedEvent {
    readonly taskId: number;
    readonly ctx?: string;
    readonly code?: number;
    readonly signal?: string;
    readonly config?: TaskConfiguration;
    readonly terminalId?: number;
    readonly processId?: number;
}
export interface TaskOutputEvent {
    readonly taskId: number;
    readonly ctx?: string;
    readonly line: string;
}
export interface TaskOutputProcessedEvent {
    readonly taskId: number;
    readonly config: TaskConfiguration;
    readonly ctx?: string;
    readonly problems?: ProblemMatch[];
}
export interface BackgroundTaskEndedEvent {
    readonly taskId: number;
    readonly ctx?: string;
}
export interface TaskClient {
    onTaskExit(event: TaskExitedEvent): void;
    onTaskCreated(event: TaskInfo): void;
    onDidStartTaskProcess(event: TaskInfo): void;
    onDidEndTaskProcess(event: TaskExitedEvent): void;
    onDidProcessTaskOutput(event: TaskOutputProcessedEvent): void;
    onBackgroundTaskEnded(event: BackgroundTaskEndedEvent): void;
}
export interface TaskDefinition {
    taskType: string;
    source: string;
    properties: {
        required: string[];
        all: string[];
        schema: IJSONSchema;
    };
}
export interface WatchingMatcherContribution {
    activeOnStart?: boolean;
    beginsPattern: string | WatchingPattern;
    endsPattern: string | WatchingPattern;
}
export interface ProblemMatcherContribution {
    name?: string;
    label: string;
    deprecated?: boolean;
    owner: string;
    source?: string;
    applyTo?: string;
    fileLocation?: 'absolute' | 'relative' | string[];
    pattern: string | ProblemPatternContribution | ProblemPatternContribution[];
    severity?: string;
    watching?: WatchingMatcherContribution;
    background?: WatchingMatcherContribution;
}
export interface ProblemPatternContribution {
    name?: string;
    regexp: string;
    kind?: string;
    file?: number;
    message?: number;
    location?: number;
    line?: number;
    character?: number;
    column?: number;
    endLine?: number;
    endCharacter?: number;
    endColumn?: number;
    code?: number;
    severity?: number;
    loop?: boolean;
}
//# sourceMappingURL=task-protocol.d.ts.map
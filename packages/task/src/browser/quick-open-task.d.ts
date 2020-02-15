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
import { TaskService } from './task-service';
import { TaskInfo, TaskConfiguration } from '../common/task-protocol';
import { TaskDefinitionRegistry } from './task-definition-registry';
import { QuickOpenHandler, QuickOpenService, QuickOpenOptions, QuickOpenBaseAction, LabelProvider } from '@theia/core/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';
import { FileSystem } from '@theia/filesystem/lib/common';
import { QuickOpenModel, QuickOpenItem, QuickOpenActionProvider, QuickOpenMode, QuickOpenGroupItem, QuickOpenGroupItemOptions, QuickOpenAction } from '@theia/core/lib/common/quick-open-model';
import { PreferenceService } from '@theia/core/lib/browser';
import { TaskNameResolver } from './task-name-resolver';
import { TaskSourceResolver } from './task-source-resolver';
import { TaskConfigurationManager } from './task-configuration-manager';
export declare class ConfigureTaskAction extends QuickOpenBaseAction {
    protected readonly taskService: TaskService;
    constructor();
    run(item?: QuickOpenItem): Promise<void>;
    protected updateTheme(): void;
}
export declare class TaskActionProvider implements QuickOpenActionProvider {
    protected configureTaskAction: ConfigureTaskAction;
    hasActions(): boolean;
    getActions(): ReadonlyArray<QuickOpenAction>;
}
export declare class QuickOpenTask implements QuickOpenModel, QuickOpenHandler {
    protected items: QuickOpenItem[];
    protected actionProvider: QuickOpenActionProvider | undefined;
    readonly prefix: string;
    readonly description: string;
    protected readonly taskService: TaskService;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly taskActionProvider: TaskActionProvider;
    protected readonly workspaceService: WorkspaceService;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly taskNameResolver: TaskNameResolver;
    protected readonly taskSourceResolver: TaskSourceResolver;
    protected readonly fileSystem: FileSystem;
    protected readonly taskConfigurationManager: TaskConfigurationManager;
    protected readonly preferences: PreferenceService;
    /** Initialize this quick open model with the tasks. */
    init(): Promise<void>;
    open(): Promise<void>;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    attach(): void;
    configure(): Promise<void>;
    runBuildOrTestTask(buildOrTestType: 'build' | 'test'): Promise<void>;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[], actionProvider?: QuickOpenActionProvider) => void): void;
    protected getRunningTaskLabel(task: TaskInfo): string;
    private getFilteredTasks;
    private getGroupedTasksByWorkspaceFolder;
}
export declare class TaskRunQuickOpenItem extends QuickOpenGroupItem {
    protected readonly task: TaskConfiguration;
    protected taskService: TaskService;
    protected isMulti: boolean;
    readonly options: QuickOpenGroupItemOptions;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly taskNameResolver: TaskNameResolver;
    protected readonly taskSourceResolver: TaskSourceResolver;
    constructor(task: TaskConfiguration, taskService: TaskService, isMulti: boolean, options: QuickOpenGroupItemOptions, taskDefinitionRegistry: TaskDefinitionRegistry, taskNameResolver: TaskNameResolver, taskSourceResolver: TaskSourceResolver);
    getTask(): TaskConfiguration;
    getLabel(): string;
    getGroupLabel(): string;
    getDescription(): string;
    run(mode: QuickOpenMode): boolean;
}
export declare class ConfigureBuildOrTestTaskQuickOpenItem extends TaskRunQuickOpenItem {
    protected readonly task: TaskConfiguration;
    protected taskService: TaskService;
    protected isMulti: boolean;
    readonly options: QuickOpenGroupItemOptions;
    protected readonly taskNameResolver: TaskNameResolver;
    protected readonly isBuildTask: boolean;
    protected taskConfigurationManager: TaskConfigurationManager;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly taskSourceResolver: TaskSourceResolver;
    constructor(task: TaskConfiguration, taskService: TaskService, isMulti: boolean, options: QuickOpenGroupItemOptions, taskNameResolver: TaskNameResolver, isBuildTask: boolean, taskConfigurationManager: TaskConfigurationManager, taskDefinitionRegistry: TaskDefinitionRegistry, taskSourceResolver: TaskSourceResolver);
    run(mode: QuickOpenMode): boolean;
}
export declare class TaskAttachQuickOpenItem extends QuickOpenItem {
    protected readonly task: TaskInfo;
    protected readonly taskLabel: string;
    protected taskService: TaskService;
    constructor(task: TaskInfo, taskLabel: string, taskService: TaskService);
    getLabel(): string;
    run(mode: QuickOpenMode): boolean;
}
export declare class TaskConfigureQuickOpenItem extends QuickOpenGroupItem {
    protected readonly task: TaskConfiguration;
    protected readonly taskService: TaskService;
    protected readonly taskNameResolver: TaskNameResolver;
    protected readonly workspaceService: WorkspaceService;
    protected readonly isMulti: boolean;
    protected readonly options: QuickOpenGroupItemOptions;
    protected taskDefinitionRegistry: TaskDefinitionRegistry;
    constructor(task: TaskConfiguration, taskService: TaskService, taskNameResolver: TaskNameResolver, workspaceService: WorkspaceService, isMulti: boolean, options: QuickOpenGroupItemOptions);
    getLabel(): string;
    getGroupLabel(): string;
    getDescription(): string;
    run(mode: QuickOpenMode): boolean;
}
export declare class TaskTerminateQuickOpen implements QuickOpenModel {
    protected readonly quickOpenService: QuickOpenService;
    protected readonly taskService: TaskService;
    onType(_lookFor: string, acceptor: (items: QuickOpenItem[]) => void): Promise<void>;
    open(): Promise<void>;
}
export declare class TaskRunningQuickOpen implements QuickOpenModel {
    protected readonly quickOpenService: QuickOpenService;
    protected readonly taskService: TaskService;
    protected readonly terminalService: TerminalService;
    onType(_lookFor: string, acceptor: (items: QuickOpenItem[]) => void): Promise<void>;
    open(): Promise<void>;
}
export declare class TaskRestartRunningQuickOpenItem extends QuickOpenItem {
    protected readonly taskInfo: TaskInfo;
    protected readonly taskService: TaskService;
    protected readonly taskNameResolver: TaskNameResolver;
    protected readonly taskSourceResolver: TaskSourceResolver;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly labelProvider: LabelProvider;
    protected readonly isMulti: boolean;
    readonly options: QuickOpenGroupItemOptions;
    constructor(taskInfo: TaskInfo, taskService: TaskService, taskNameResolver: TaskNameResolver, taskSourceResolver: TaskSourceResolver, taskDefinitionRegistry: TaskDefinitionRegistry, labelProvider: LabelProvider, isMulti: boolean, options: QuickOpenGroupItemOptions);
    getLabel(): string;
    getDescription(): string;
    run(mode: QuickOpenMode): boolean;
}
export declare class TaskRestartRunningQuickOpen implements QuickOpenModel {
    protected readonly labelProvider: LabelProvider;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly taskNameResolver: TaskNameResolver;
    protected readonly taskSourceResolver: TaskSourceResolver;
    protected readonly taskService: TaskService;
    protected readonly workspaceService: WorkspaceService;
    onType(_lookFor: string, acceptor: (items: QuickOpenItem[]) => void): Promise<void>;
    open(): Promise<void>;
}
//# sourceMappingURL=quick-open-task.d.ts.map
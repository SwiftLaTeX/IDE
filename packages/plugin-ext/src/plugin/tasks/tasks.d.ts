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
import { TasksExt, TaskDto, TaskExecutionDto } from '../../common/plugin-api-rpc';
import * as theia from '@theia/plugin';
import { RPCProtocol } from '../../common/rpc-protocol';
import { Event } from '@theia/core/lib/common/event';
export declare class TasksExtImpl implements TasksExt {
    private proxy;
    private callId;
    private adaptersMap;
    private executions;
    private readonly onDidExecuteTask;
    private readonly onDidTerminateTask;
    private readonly onDidExecuteTaskProcess;
    private readonly onDidTerminateTaskProcess;
    constructor(rpc: RPCProtocol);
    get taskExecutions(): ReadonlyArray<theia.TaskExecution>;
    get onDidStartTask(): Event<theia.TaskStartEvent>;
    $onDidStartTask(execution: TaskExecutionDto): void;
    get onDidEndTask(): Event<theia.TaskEndEvent>;
    $onDidEndTask(id: number): void;
    get onDidStartTaskProcess(): Event<theia.TaskProcessStartEvent>;
    $onDidStartTaskProcess(processId: number, executionDto: TaskExecutionDto): void;
    get onDidEndTaskProcess(): Event<theia.TaskProcessEndEvent>;
    $onDidEndTaskProcess(exitCode: number, taskId: number): void;
    registerTaskProvider(type: string, provider: theia.TaskProvider): theia.Disposable;
    fetchTasks(filter?: theia.TaskFilter): Promise<theia.Task[]>;
    executeTask(task: theia.Task): Promise<theia.TaskExecution>;
    $provideTasks(handle: number, token?: theia.CancellationToken): Promise<TaskDto[] | undefined>;
    $resolveTask(handle: number, task: TaskDto, token?: theia.CancellationToken): Promise<TaskDto | undefined>;
    private addNewAdapter;
    private nextCallId;
    private createDisposable;
    private fetchTaskExecutions;
    private getTaskExecution;
}
//# sourceMappingURL=tasks.d.ts.map
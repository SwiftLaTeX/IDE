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
import { ILogger } from '@theia/core/lib/common/';
import { Process, IProcessExitEvent } from '@theia/process/lib/node';
import { Task, TaskOptions } from '../task';
import { TaskManager } from '../task-manager';
import { ProcessType, ProcessTaskInfo } from '../../common/process/task-protocol';
import { TaskExitedEvent } from '../../common/task-protocol';
export declare function removeAnsiEscapeCodes(str: string): string;
export declare const TaskProcessOptions: unique symbol;
export interface TaskProcessOptions extends TaskOptions {
    process: Process;
    processType: ProcessType;
}
export declare const TaskFactory: unique symbol;
export declare type TaskFactory = (options: TaskProcessOptions) => ProcessTask;
/** Represents a Task launched as a process by `ProcessTaskRunner`. */
export declare class ProcessTask extends Task {
    protected readonly taskManager: TaskManager;
    protected readonly logger: ILogger;
    protected readonly options: TaskProcessOptions;
    constructor(taskManager: TaskManager, logger: ILogger, options: TaskProcessOptions);
    kill(): Promise<void>;
    protected getTaskExitedEvent(evt: IProcessExitEvent): Promise<TaskExitedEvent>;
    getRuntimeInfo(): ProcessTaskInfo;
    get process(): Process;
    get processType(): ProcessType;
}
//# sourceMappingURL=process-task.d.ts.map
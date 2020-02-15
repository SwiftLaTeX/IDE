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
import { ILogger, Disposable, DisposableCollection, Emitter, Event, MaybePromise } from '@theia/core/lib/common/';
import { TaskManager } from './task-manager';
import { TaskInfo, TaskExitedEvent, TaskConfiguration, TaskOutputEvent } from '../common/task-protocol';
export interface TaskOptions {
    label: string;
    config: TaskConfiguration;
    context?: string;
}
export declare abstract class Task implements Disposable {
    protected readonly taskManager: TaskManager;
    protected readonly logger: ILogger;
    protected readonly options: TaskOptions;
    protected taskId: number;
    protected readonly toDispose: DisposableCollection;
    readonly exitEmitter: Emitter<TaskExitedEvent>;
    readonly outputEmitter: Emitter<TaskOutputEvent>;
    constructor(taskManager: TaskManager, logger: ILogger, options: TaskOptions);
    /** Terminates the task. */
    abstract kill(): Promise<void>;
    get onExit(): Event<TaskExitedEvent>;
    get onOutput(): Event<TaskOutputEvent>;
    /** Has to be called when a task has concluded its execution. */
    protected fireTaskExited(event: TaskExitedEvent): void;
    protected fireOutputLine(event: TaskOutputEvent): void;
    /** Returns runtime information about task. */
    abstract getRuntimeInfo(): MaybePromise<TaskInfo>;
    get id(): number;
    get context(): string | undefined;
    get label(): string;
    dispose(): void;
}
//# sourceMappingURL=task.d.ts.map
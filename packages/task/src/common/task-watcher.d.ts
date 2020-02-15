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
import { Emitter, Event } from '@theia/core/lib/common/event';
import { TaskClient, TaskExitedEvent, TaskInfo, TaskOutputProcessedEvent, BackgroundTaskEndedEvent } from './task-protocol';
export declare class TaskWatcher {
    getTaskClient(): TaskClient;
    protected onTaskCreatedEmitter: Emitter<TaskInfo>;
    protected onTaskExitEmitter: Emitter<TaskExitedEvent>;
    protected onDidStartTaskProcessEmitter: Emitter<TaskInfo>;
    protected onDidEndTaskProcessEmitter: Emitter<TaskExitedEvent>;
    protected onOutputProcessedEmitter: Emitter<TaskOutputProcessedEvent>;
    protected onBackgroundTaskEndedEmitter: Emitter<BackgroundTaskEndedEvent>;
    get onTaskCreated(): Event<TaskInfo>;
    get onTaskExit(): Event<TaskExitedEvent>;
    get onDidStartTaskProcess(): Event<TaskInfo>;
    get onDidEndTaskProcess(): Event<TaskExitedEvent>;
    get onOutputProcessed(): Event<TaskOutputProcessedEvent>;
    get onBackgroundTaskEnded(): Event<BackgroundTaskEndedEvent>;
}
//# sourceMappingURL=task-watcher.d.ts.map
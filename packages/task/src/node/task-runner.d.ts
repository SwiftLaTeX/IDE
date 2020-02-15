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
import { Disposable } from '@theia/core/lib/common/disposable';
import { ProcessTaskRunner } from './process/process-task-runner';
import { Task } from './task';
import { TaskConfiguration } from '../common/task-protocol';
export declare const TaskRunnerContribution: unique symbol;
/** Allows to contribute custom Task Runners. */
export interface TaskRunnerContribution {
    registerRunner(runners: TaskRunnerRegistry): void;
}
export declare const TaskRunner: unique symbol;
/** A Task Runner knows how to run and kill a Task of a particular type. */
export interface TaskRunner {
    /** Runs a task based on the given task configuration. */
    run(taskConfig: TaskConfiguration, ctx?: string): Promise<Task>;
}
export declare class TaskRunnerRegistry {
    protected runners: Map<string, TaskRunner>;
    /** A Task Runner that will be used for executing a Task without an associated Runner. */
    protected defaultRunner: TaskRunner;
    protected readonly processTaskRunner: ProcessTaskRunner;
    protected init(): void;
    /** Registers the given Task Runner to execute the Tasks of the specified type. */
    registerRunner(type: string, runner: TaskRunner): Disposable;
    /** Returns a Task Runner registered for the specified Task type or a default Task Runner if none. */
    getRunner(type: string): TaskRunner;
    getRunnerTypes(): string[];
}
//# sourceMappingURL=task-runner.d.ts.map
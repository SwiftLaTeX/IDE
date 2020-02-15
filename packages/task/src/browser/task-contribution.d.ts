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
import { TaskConfiguration } from '../common/task-protocol';
import { WaitUntilEvent, Emitter } from '@theia/core/lib/common/event';
export declare const TaskContribution: unique symbol;
/** Allows to contribute custom Task Resolvers, Task Providers. */
export interface TaskContribution {
    registerResolvers?(resolvers: TaskResolverRegistry): void;
    registerProviders?(providers: TaskProviderRegistry): void;
}
export interface TaskResolver {
    /** Resolves a Task Configuration before sending it for execution to the Task Server. */
    resolveTask(taskConfig: TaskConfiguration): Promise<TaskConfiguration>;
}
export interface TaskProvider {
    /** Returns the Task Configurations which are provides programmatically to the system. */
    provideTasks(): Promise<TaskConfiguration[]>;
}
export declare class TaskResolverRegistry {
    protected readonly onWillProvideTaskResolverEmitter: Emitter<WaitUntilEvent>;
    readonly onWillProvideTaskResolver: import("@theia/core/src/common/event").Event<WaitUntilEvent>;
    protected resolvers: Map<string, TaskResolver>;
    protected init(): void;
    /** Registers the given Task Resolver to resolve the Task Configurations of the specified type. */
    register(type: string, resolver: TaskResolver): Disposable;
    getResolver(type: string): Promise<TaskResolver | undefined>;
}
export declare class TaskProviderRegistry {
    protected readonly onWillProvideTaskProviderEmitter: Emitter<WaitUntilEvent>;
    readonly onWillProvideTaskProvider: import("@theia/core/src/common/event").Event<WaitUntilEvent>;
    protected providers: Map<string, TaskProvider>;
    protected init(): void;
    /** Registers the given Task Provider to return Task Configurations of the specified type. */
    register(type: string, provider: TaskProvider, handle?: number): Disposable;
    getProvider(type: string): Promise<TaskProvider | undefined>;
    /** Returns all registered Task Providers. */
    getProviders(): Promise<TaskProvider[]>;
}
//# sourceMappingURL=task-contribution.d.ts.map
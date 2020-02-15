import { Emitter, Event, ILogger } from '@theia/core/lib/common';
import { BackendApplicationContribution } from '@theia/core/lib/node';
import { Task } from './task';
export declare class TaskManager implements BackendApplicationContribution {
    protected readonly logger: ILogger;
    /** contains all running tasks */
    protected readonly tasks: Map<number, Task>;
    /** contains running tasks per context */
    protected readonly tasksPerCtx: Map<string, Task[]>;
    /** each task has this unique task id, for this back-end */
    protected id: number;
    protected readonly deleteEmitter: Emitter<number>;
    constructor(logger: ILogger);
    register(task: Task, ctx?: string): number;
    get(id: number): Task | undefined;
    /**
     * Returns all running tasks. If a context is provided, filter-down to
     * only tasks started from that context
     */
    getTasks(ctx?: string): Task[] | undefined;
    /** Deletes a task from the task manager */
    delete(task: Task): void;
    get onDelete(): Event<number>;
    /** When the application stops, clean-up all ongoing tasks */
    onStop(): void;
}
//# sourceMappingURL=task-manager.d.ts.map
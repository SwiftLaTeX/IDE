/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { Disposable, Event, Emitter, ILogger } from '@theia/core';
import { Git, Repository, WorkingDirectoryStatus } from '../common';
import { GitStatusChangeEvent } from '../common/git-watcher';
import { Deferred } from '@theia/core/lib/common/promise-util';
export declare const GitRepositoryWatcherFactory: unique symbol;
export declare type GitRepositoryWatcherFactory = (options: GitRepositoryWatcherOptions) => GitRepositoryWatcher;
export declare class GitRepositoryWatcherOptions {
    readonly repository: Repository;
}
export declare class GitRepositoryWatcher implements Disposable {
    protected readonly onGitStatusChangedEmitter: Emitter<GitStatusChangeEvent>;
    readonly onGitStatusChanged: Event<GitStatusChangeEvent>;
    protected readonly git: Git;
    protected readonly logger: ILogger;
    protected readonly options: GitRepositoryWatcherOptions;
    protected init(): void;
    watch(): void;
    protected syncWorkPromises: Deferred<void>[];
    sync(): Promise<void>;
    protected disposed: boolean;
    dispose(): void;
    protected watching: boolean;
    protected idle: boolean;
    protected interruptIdle: (() => void) | undefined;
    protected skipNextIdle: boolean;
    protected spinTheLoop(): Promise<void>;
    protected status: WorkingDirectoryStatus | undefined;
    protected syncStatus(): Promise<void>;
}
//# sourceMappingURL=git-repository-watcher.d.ts.map
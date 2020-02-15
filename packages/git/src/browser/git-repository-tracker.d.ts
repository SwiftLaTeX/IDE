/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
/// <reference types="lodash" />
import { Git, Repository, WorkingDirectoryStatus } from '../common';
import { Event, Emitter, DisposableCollection, CancellationToken } from '@theia/core';
import { GitRepositoryProvider } from './git-repository-provider';
import { GitWatcher, GitStatusChangeEvent } from '../common/git-watcher';
import URI from '@theia/core/lib/common/uri';
/**
 * The repository tracker watches the selected repository for status changes. It provides a convenient way to listen on status updates.
 */
export declare class GitRepositoryTracker {
    protected readonly git: Git;
    protected readonly repositoryProvider: GitRepositoryProvider;
    protected readonly gitWatcher: GitWatcher;
    protected toDispose: DisposableCollection;
    protected workingDirectoryStatus: WorkingDirectoryStatus | undefined;
    protected readonly onGitEventEmitter: Emitter<GitStatusChangeEvent | undefined>;
    constructor(git: Git, repositoryProvider: GitRepositoryProvider, gitWatcher: GitWatcher);
    protected init(): Promise<void>;
    protected updateStatus: (() => Promise<void>) & import("lodash").Cancelable;
    protected setStatus(event: GitStatusChangeEvent | undefined, token: CancellationToken): void;
    /**
     * Returns the selected repository, or `undefined` if no repositories are available.
     */
    get selectedRepository(): Repository | undefined;
    /**
     * Returns all known repositories.
     */
    get allRepositories(): Repository[];
    /**
     * Returns the last known status of the selected respository, or `undefined` if no repositories are available.
     */
    get selectedRepositoryStatus(): WorkingDirectoryStatus | undefined;
    /**
     * Emits when the selected repository has changed.
     */
    get onDidChangeRepository(): Event<Repository | undefined>;
    /**
     * Emits when status has changed in the selected repository.
     */
    get onGitEvent(): Event<GitStatusChangeEvent | undefined>;
    getPath(uri: URI): string | undefined;
    getUri(path: string): URI | undefined;
    get repositoryUri(): URI | undefined;
}
//# sourceMappingURL=git-repository-tracker.d.ts.map
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
import { MessageService, Emitter, Event } from '@theia/core';
import { QuickPickService } from '@theia/core/lib/browser';
import { GitRepositoryTracker } from './git-repository-tracker';
import { Git, Repository, WorkingDirectoryStatus } from '../common';
import { GitErrorHandler } from './git-error-handler';
export declare class GitSyncService {
    protected readonly git: Git;
    protected readonly repositoryTracker: GitRepositoryTracker;
    protected readonly messageService: MessageService;
    protected readonly gitErrorHandler: GitErrorHandler;
    protected readonly quickPickService: QuickPickService;
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: Event<void>;
    protected fireDidChange(): void;
    protected syncing: boolean;
    isSyncing(): boolean;
    setSyncing(syncing: boolean): void;
    canSync(): boolean;
    sync(): Promise<void>;
    protected getSyncMethod(status: WorkingDirectoryStatus): Promise<GitSyncService.SyncMethod | undefined>;
    canPublish(): boolean;
    publish(): Promise<void>;
    protected getRemote(repository: Repository, branch: string): Promise<string | undefined>;
    protected shouldPush(status: WorkingDirectoryStatus): boolean;
    protected shouldPull(status: WorkingDirectoryStatus): boolean;
    protected confirm(title: string, msg: string): Promise<boolean>;
}
export declare namespace GitSyncService {
    type SyncMethod = 'pull-push' | 'rebase-push' | 'force-push';
}
//# sourceMappingURL=git-sync-service.d.ts.map
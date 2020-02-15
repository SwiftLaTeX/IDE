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
import { QuickOpenService } from '@theia/core/lib/browser/quick-open/quick-open-service';
import { Git, Repository } from '../common';
import { GitRepositoryProvider } from './git-repository-provider';
import { MessageService } from '@theia/core/lib/common/message-service';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { FileSystem } from '@theia/filesystem/lib/common';
import { GitErrorHandler } from './git-error-handler';
import { ProgressService } from '@theia/core/lib/common/progress-service';
import { LabelProvider } from '@theia/core/lib/browser';
export declare enum GitAction {
    PULL = 0,
    PUSH = 1
}
/**
 * Service delegating into the `Quick Open Service`, so that the Git commands can be further refined.
 * For instance, the `remote` can be specified for `pull`, `push`, and `fetch`. And the branch can be
 * specified for `git merge`.
 */
export declare class GitQuickOpenService {
    protected readonly git: Git;
    protected readonly repositoryProvider: GitRepositoryProvider;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly messageService: MessageService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly fileSystem: FileSystem;
    protected readonly gitErrorHandler: GitErrorHandler;
    protected readonly progressService: ProgressService;
    protected readonly labelProvider: LabelProvider;
    constructor(git: Git, repositoryProvider: GitRepositoryProvider, quickOpenService: QuickOpenService, messageService: MessageService, workspaceService: WorkspaceService, fileSystem: FileSystem);
    clone(url?: string, folder?: string, branch?: string): Promise<string | undefined>;
    private buildDefaultProjectPath;
    private doBuildDefaultProjectPath;
    fetch(): Promise<void>;
    performDefaultGitAction(action: GitAction): Promise<void>;
    push(): Promise<void>;
    pull(): Promise<void>;
    merge(): Promise<void>;
    checkout(): Promise<void>;
    chooseTagsAndBranches(execFunc: (branchName: string, currentBranchName: string) => void, repository?: Repository | undefined): Promise<void>;
    commitMessageForAmend(): Promise<string>;
    stash(): Promise<void>;
    protected doStashAction(action: 'pop' | 'apply' | 'drop', text: string, getMessage?: () => Promise<string>): Promise<void>;
    applyStash(): Promise<void>;
    popStash(): Promise<void>;
    dropStash(): Promise<void>;
    applyLatestStash(): Promise<void>;
    popLatestStash(): Promise<void>;
    initRepository(): Promise<void>;
    private doInitRepository;
    private toRepositoryPathQuickOpenItem;
    private open;
    private getOptions;
    private getModel;
    private getRepository;
    private getRemotes;
    private getTags;
    private getBranches;
    private getCurrentBranch;
    protected withProgress<In, Out>(fn: (...arg: In[]) => Promise<Out>): Promise<Out>;
    protected readonly wrapWithProgress: <In, Out>(fn: (...args: In[]) => Promise<Out>) => (...args: In[]) => Promise<Out>;
    protected doWrapWithProgress<In, Out>(fn: (...args: In[]) => Promise<Out>): (...args: In[]) => Promise<Out>;
}
//# sourceMappingURL=git-quick-open-service.d.ts.map
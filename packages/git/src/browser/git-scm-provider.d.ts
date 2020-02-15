/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { interfaces } from 'inversify';
import URI from '@theia/core/lib/common/uri';
import { Emitter } from '@theia/core/lib/common/event';
import { CommandService } from '@theia/core/lib/common/command';
import { EditorOpenerOptions, EditorManager } from '@theia/editor/lib/browser/editor-manager';
import { FileSystem } from '@theia/filesystem/lib/common';
import { Repository, Git, GitFileChange, WorkingDirectoryStatus } from '../common';
import { GitErrorHandler } from './git-error-handler';
import { EditorWidget } from '@theia/editor/lib/browser';
import { ScmProvider, ScmCommand, ScmResourceGroup, ScmAmendSupport, ScmCommit } from '@theia/scm/lib/browser/scm-provider';
export declare class GitScmProviderOptions {
    repository: Repository;
}
export declare class GitScmProvider implements ScmProvider {
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: import("@theia/core/src/common/event").Event<void>;
    protected fireDidChange(): void;
    private readonly onDidChangeStatusBarCommandsEmitter;
    readonly onDidChangeStatusBarCommands: import("@theia/core/src/common/event").Event<ScmCommand[] | undefined>;
    private readonly toDispose;
    protected readonly editorManager: EditorManager;
    protected readonly gitErrorHandler: GitErrorHandler;
    protected readonly fileSystem: FileSystem;
    protected readonly git: Git;
    protected readonly commands: CommandService;
    protected readonly options: GitScmProviderOptions;
    readonly id = "git";
    readonly label = "Git";
    dispose(): void;
    protected init(): void;
    get repository(): Repository;
    get rootUri(): string;
    protected _amendSupport: GitAmendSupport;
    get amendSupport(): GitAmendSupport;
    get acceptInputCommand(): ScmCommand | undefined;
    protected _statusBarCommands: ScmCommand[] | undefined;
    get statusBarCommands(): ScmCommand[] | undefined;
    set statusBarCommands(statusBarCommands: ScmCommand[] | undefined);
    protected state: GitScmProvider.State;
    get groups(): ScmResourceGroup[];
    get stagedChanges(): GitFileChange[];
    get unstagedChanges(): GitFileChange[];
    get mergeChanges(): GitFileChange[];
    getStatus(): WorkingDirectoryStatus | undefined;
    setStatus(status: WorkingDirectoryStatus | undefined): void;
    protected createGroup(id: string, label: string, changes: GitFileChange[], hideWhenEmpty?: boolean): ScmResourceGroup;
    protected addScmResource(group: ScmResourceGroup, change: GitFileChange): void;
    open(change: GitFileChange, options?: EditorOpenerOptions): Promise<void>;
    getUriToOpen(change: GitFileChange): URI;
    openChange(change: GitFileChange, options?: EditorOpenerOptions): Promise<EditorWidget>;
    findChange(uri: URI): GitFileChange | undefined;
    stageAll(): Promise<void>;
    stage(uri: string): Promise<void>;
    unstageAll(): Promise<void>;
    unstage(uri: string): Promise<void>;
    discardAll(): Promise<void>;
    discard(uri: string): Promise<void>;
    protected confirm(path: string): Promise<boolean | undefined>;
    protected confirmAll(): Promise<boolean | undefined>;
    protected delete(uri: URI): Promise<void>;
    protected deleteAll(uris: string[]): Promise<void>;
}
export declare namespace GitScmProvider {
    interface State {
        status?: WorkingDirectoryStatus;
        stagedChanges: GitFileChange[];
        unstagedChanges: GitFileChange[];
        mergeChanges: GitFileChange[];
        groups: ScmResourceGroup[];
    }
    function initState(status?: WorkingDirectoryStatus): GitScmProvider.State;
    const Factory: unique symbol;
    type Factory = (options: GitScmProviderOptions) => GitScmProvider;
    function createFactory(ctx: interfaces.Context): Factory;
}
export declare class GitAmendSupport implements ScmAmendSupport {
    protected readonly repository: Repository;
    protected readonly git: Git;
    constructor(repository: Repository, git: Git);
    getInitialAmendingCommits(amendingHeadCommitSha: string, latestCommitSha: string | undefined): Promise<ScmCommit[]>;
    getMessage(commit: string): Promise<string>;
    reset(commit: string): Promise<void>;
    protected isHeadInitialCommit(): Promise<boolean>;
    getLastCommit(): Promise<ScmCommit | undefined>;
    private createScmCommit;
}
//# sourceMappingURL=git-scm-provider.d.ts.map
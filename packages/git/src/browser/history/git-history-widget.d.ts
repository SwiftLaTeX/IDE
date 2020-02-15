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
import { OpenerService, StatefulWidget, WidgetManager, ApplicationShell } from '@theia/core/lib/browser';
import { Message } from '@phosphor/messaging';
import { List, ListRowRenderer, IndexRange, ScrollParams, CellMeasurerCache } from 'react-virtualized';
import { Git, GitFileChange } from '../../common';
import { FileSystem } from '@theia/filesystem/lib/common';
import { GitDiffContribution } from '../diff/git-diff-contribution';
import { ScmAvatarService } from '@theia/scm/lib/browser/scm-avatar-service';
import { GitCommitDetailOpenHandler } from './git-commit-detail-open-handler';
import { GitCommitDetails } from './git-commit-detail-widget';
import { GitNavigableListWidget } from '../git-navigable-list-widget';
import { GitFileChangeNode } from '../git-file-change-node';
import * as React from 'react';
export interface GitCommitNode extends GitCommitDetails {
    fileChanges?: GitFileChange[];
    expanded: boolean;
    selected: boolean;
}
export declare namespace GitCommitNode {
    function is(node: any): node is GitCommitNode;
}
export declare type GitHistoryListNode = (GitCommitNode | GitFileChangeNode);
export declare class GitHistoryWidget extends GitNavigableListWidget<GitHistoryListNode> implements StatefulWidget {
    protected readonly openerService: OpenerService;
    protected readonly detailOpenHandler: GitCommitDetailOpenHandler;
    protected readonly shell: ApplicationShell;
    protected readonly fileSystem: FileSystem;
    protected readonly git: Git;
    protected readonly avatarService: ScmAvatarService;
    protected readonly widgetManager: WidgetManager;
    protected readonly diffContribution: GitDiffContribution;
    protected options: Git.Options.Log;
    protected singleFileMode: boolean;
    private cancelIndicator;
    protected listView: GitHistoryList | undefined;
    protected hasMoreCommits: boolean;
    protected allowScrollToSelected: boolean;
    protected status: {
        state: 'loading';
    } | {
        state: 'ready';
        commits: GitCommitNode[];
    } | {
        state: 'error';
        errorMessage: React.ReactNode;
    };
    constructor(openerService: OpenerService, detailOpenHandler: GitCommitDetailOpenHandler, shell: ApplicationShell, fileSystem: FileSystem, git: Git, avatarService: ScmAvatarService, widgetManager: WidgetManager, diffContribution: GitDiffContribution);
    protected init(): void;
    protected onAfterAttach(msg: Message): void;
    update(): void;
    setContent(options?: Git.Options.Log): Promise<void>;
    protected resetState(options?: Git.Options.Log): void;
    protected addCommits(options?: Git.Options.Log): Promise<void>;
    protected addOrRemoveFileChangeNodes(commit: GitCommitNode): Promise<void>;
    protected addFileChangeNodes(commit: GitCommitNode, gitNodesArrayIndex: number): Promise<void>;
    protected removeFileChangeNodes(commit: GitCommitNode, gitNodesArrayIndex: number): void;
    storeState(): object;
    restoreState(oldState: any): void;
    protected onDataReady(): void;
    protected render(): React.ReactNode;
    protected renderHistoryHeader(): React.ReactNode;
    protected renderCommitList(): React.ReactNode;
    protected readonly handleScroll: (info: ScrollParams) => void;
    protected doHandleScroll(info: ScrollParams): void;
    protected readonly loadMoreRows: (params: IndexRange) => Promise<any>;
    protected doLoadMoreRows(params: IndexRange): Promise<any>;
    protected readonly renderCommit: (commit: GitCommitNode) => React.ReactNode;
    protected doRenderCommit(commit: GitCommitNode): React.ReactNode;
    protected openDetailWidget(commit: GitCommitNode): Promise<void>;
    protected readonly renderFileChangeList: (fileChange: GitFileChangeNode) => React.ReactNode;
    protected doRenderFileChangeList(fileChange: GitFileChangeNode): React.ReactNode;
    protected renderGitItem(change: GitFileChangeNode, commitSha: string): React.ReactNode;
    protected navigateLeft(): void;
    protected navigateRight(): void;
    protected handleListEnter(): void;
    protected openFile(change: GitFileChange, commitSha: string): void;
}
export declare namespace GitHistoryList {
    interface Props {
        readonly rows: GitHistoryListNode[];
        readonly indexOfSelected: number;
        readonly hasMoreRows: boolean;
        readonly handleScroll: (info: {
            clientHeight: number;
            scrollHeight: number;
            scrollTop: number;
        }) => void;
        readonly loadMoreRows: (params: IndexRange) => Promise<any>;
        readonly renderCommit: (commit: GitCommitNode) => React.ReactNode;
        readonly renderFileChangeList: (fileChange: GitFileChangeNode) => React.ReactNode;
    }
}
export declare class GitHistoryList extends React.Component<GitHistoryList.Props> {
    list: List | undefined;
    protected readonly checkIfRowIsLoaded: (opts: {
        index: number;
    }) => boolean;
    protected doCheckIfRowIsLoaded(opts: {
        index: number;
    }): boolean;
    render(): React.ReactNode;
    componentWillUpdate(): void;
    protected measureCache: CellMeasurerCache;
    protected measureRowRenderer: ListRowRenderer;
    protected renderRow: ListRowRenderer;
}
//# sourceMappingURL=git-history-widget.d.ts.map
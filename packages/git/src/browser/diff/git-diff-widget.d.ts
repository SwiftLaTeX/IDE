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
import URI from '@theia/core/lib/common/uri';
import { StatefulWidget, Message } from '@theia/core/lib/browser';
import { EditorManager, EditorOpenerOptions, EditorWidget, DiffNavigatorProvider } from '@theia/editor/lib/browser';
import { GitFileChange, Git, WorkingDirectoryStatus } from '../../common';
import { GitWatcher } from '../../common';
import { GitNavigableListWidget } from '../git-navigable-list-widget';
import { GitFileChangeNode } from '../git-file-change-node';
import { Deferred } from '@theia/core/lib/common/promise-util';
import * as React from 'react';
import { MaybePromise } from '@theia/core/lib/common/types';
export declare const GIT_DIFF = "git-diff";
export declare class GitDiffWidget extends GitNavigableListWidget<GitFileChangeNode> implements StatefulWidget {
    protected readonly GIT_DIFF_TITLE = "Diff";
    protected fileChangeNodes: GitFileChangeNode[];
    protected options: Git.Options.Diff;
    protected gitStatus?: WorkingDirectoryStatus;
    protected listView?: GitDiffListContainer;
    protected deferredListContainer: Deferred<HTMLElement>;
    protected readonly git: Git;
    protected readonly diffNavigatorProvider: DiffNavigatorProvider;
    protected readonly editorManager: EditorManager;
    protected readonly gitWatcher: GitWatcher;
    constructor();
    protected init(): void;
    protected getScrollContainer(): MaybePromise<HTMLElement>;
    protected get toRevision(): string | undefined;
    protected get fromRevision(): string | number | undefined;
    setContent(options: Git.Options.Diff): Promise<void>;
    storeState(): object;
    restoreState(oldState: any): void;
    protected onActivateRequest(msg: Message): void;
    protected render(): React.ReactNode;
    protected renderDiffListHeader(): React.ReactNode;
    protected doRenderDiffListHeader(...children: React.ReactNode[]): React.ReactNode;
    protected renderRepositoryHeader(): React.ReactNode;
    protected renderPathHeader(): React.ReactNode;
    protected renderPath(): React.ReactNode;
    protected renderRevisionHeader(): React.ReactNode;
    protected renderRevision(): React.ReactNode;
    protected renderToolbar(): React.ReactNode;
    protected doRenderToolbar(...children: React.ReactNode[]): React.ReactNode;
    protected readonly showPreviousChange: () => void;
    protected doShowPreviousChange(): void;
    protected renderNavigationLeft(): React.ReactNode;
    protected readonly showNextChange: () => void;
    protected doShowNextChange(): void;
    protected renderNavigationRight(): React.ReactNode;
    protected renderFileChangeList(): React.ReactNode;
    protected setListContainer: (listContainerElement: HTMLDivElement) => void;
    protected addGitDiffListKeyListeners: (id: string) => void;
    protected doAddGitDiffListKeyListeners(id: string): void;
    protected renderGitItem(change: GitFileChangeNode): React.ReactNode;
    protected navigateRight(): void;
    protected navigateLeft(): void;
    protected selectNextNode(): void;
    protected selectPreviousNode(): void;
    protected handleListEnter(): void;
    protected openSelected(): void;
    getUriToOpen(change: GitFileChange): URI;
    openChanges(uri: URI, options?: EditorOpenerOptions): Promise<EditorWidget | undefined>;
    openChange(change: GitFileChange, options?: EditorOpenerOptions): Promise<EditorWidget | undefined>;
    protected revealChange(change: GitFileChange): Promise<void>;
}
export declare namespace GitDiffListContainer {
    interface Props {
        id: string;
        files: React.ReactNode[];
        addDiffListKeyListeners: (id: string) => void;
        setListContainer: (listContainer: HTMLDivElement) => void;
    }
}
export declare class GitDiffListContainer extends React.Component<GitDiffListContainer.Props> {
    protected listContainer?: HTMLDivElement;
    render(): JSX.Element;
    componentDidMount(): void;
    focus(): void;
}
//# sourceMappingURL=git-diff-widget.d.ts.map
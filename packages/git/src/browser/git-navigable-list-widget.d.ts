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
import { Widget } from '@theia/core/lib/browser';
import { GitFileStatus } from '../common';
import { GitRepositoryProvider } from './git-repository-provider';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
import { Message } from '@phosphor/messaging';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import * as React from 'react';
import { GitFileChangeLabelProvider } from './git-file-change-label-provider';
import { GitFileChangeNode } from './git-file-change-node';
export declare abstract class GitNavigableListWidget<T extends {
    selected?: boolean;
}> extends ReactWidget {
    protected gitNodes: T[];
    private _scrollContainer;
    protected readonly repositoryProvider: GitRepositoryProvider;
    protected readonly labelProvider: LabelProvider;
    protected readonly gitLabelProvider: GitFileChangeLabelProvider;
    constructor();
    protected onActivateRequest(msg: Message): void;
    protected set scrollContainer(id: string);
    protected get scrollContainer(): string;
    protected onUpdateRequest(msg: Message): void;
    protected onResize(msg: Widget.ResizeMessage): void;
    protected getAbbreviatedStatusCaption(status: GitFileStatus, staged?: boolean): string;
    protected getRepositoryLabel(uri: string): string | undefined;
    protected renderHeaderRow({ name, value, classNames, title }: {
        name: string;
        value: React.ReactNode;
        classNames?: string[];
        title?: string;
    }): React.ReactNode;
    protected addGitListNavigationKeyListeners(container: HTMLElement): void;
    protected navigateLeft(): void;
    protected navigateRight(): void;
    protected navigateUp(): void;
    protected navigateDown(): void;
    protected handleListEnter(): void;
    protected getSelected(): T | undefined;
    protected selectNode(node: T): void;
    protected selectNextNode(): void;
    protected selectPreviousNode(): void;
    protected get indexOfSelected(): number;
}
export declare namespace GitItemComponent {
    interface Props {
        labelProvider: LabelProvider;
        gitLabelProvider: GitFileChangeLabelProvider;
        change: GitFileChangeNode;
        revealChange: (change: GitFileChangeNode) => void;
        selectNode: (change: GitFileChangeNode) => void;
    }
}
export declare class GitItemComponent extends React.Component<GitItemComponent.Props> {
    render(): JSX.Element;
    protected readonly revealChange: () => void;
    protected readonly selectNode: () => void;
}
//# sourceMappingURL=git-navigable-list-widget.d.ts.map
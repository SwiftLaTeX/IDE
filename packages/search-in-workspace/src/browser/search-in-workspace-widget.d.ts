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
import { Widget, Message, BaseWidget, StatefulWidget } from '@theia/core/lib/browser';
import { SearchInWorkspaceResultTreeWidget } from './search-in-workspace-result-tree-widget';
import { SearchInWorkspaceOptions } from '../common/search-in-workspace-interface';
import * as React from 'react';
import { Event, Emitter } from '@theia/core/lib/common';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { SearchInWorkspaceContextKeyService } from './search-in-workspace-context-key-service';
import { ProgressLocationService } from '@theia/core/lib/browser/progress-location-service';
import { CancellationTokenSource } from '@theia/core';
export interface SearchFieldState {
    className: string;
    enabled: boolean;
    title: string;
}
export declare class SearchInWorkspaceWidget extends BaseWidget implements StatefulWidget {
    static ID: string;
    static LABEL: string;
    protected matchCaseState: SearchFieldState;
    protected wholeWordState: SearchFieldState;
    protected regExpState: SearchFieldState;
    protected includeIgnoredState: SearchFieldState;
    protected showSearchDetails: boolean;
    protected _hasResults: boolean;
    protected get hasResults(): boolean;
    protected set hasResults(hasResults: boolean);
    protected resultNumber: number;
    protected searchFieldContainerIsFocused: boolean;
    protected searchInWorkspaceOptions: SearchInWorkspaceOptions;
    protected searchTerm: string;
    protected replaceTerm: string;
    protected _showReplaceField: boolean;
    protected get showReplaceField(): boolean;
    protected set showReplaceField(showReplaceField: boolean);
    protected contentNode: HTMLElement;
    protected searchFormContainer: HTMLElement;
    protected resultContainer: HTMLElement;
    protected readonly onDidUpdateEmitter: Emitter<void>;
    readonly onDidUpdate: Event<void>;
    protected readonly resultTreeWidget: SearchInWorkspaceResultTreeWidget;
    protected readonly workspaceService: WorkspaceService;
    protected readonly contextKeyService: SearchInWorkspaceContextKeyService;
    protected readonly progressLocationService: ProgressLocationService;
    protected init(): void;
    storeState(): object;
    restoreState(oldState: any): void;
    findInFolder(uris: string[]): void;
    /**
     * Update the search term and input field.
     * @param term the search term.
     */
    updateSearchTerm(term: string): void;
    hasResultList(): boolean;
    hasSearchTerm(): boolean;
    refresh(): void;
    getCancelIndicator(): CancellationTokenSource | undefined;
    collapseAll(): void;
    clear(): void;
    protected onAfterAttach(msg: Message): void;
    protected onUpdateRequest(msg: Message): void;
    protected onResize(msg: Widget.ResizeMessage): void;
    protected onAfterShow(msg: Message): void;
    protected onAfterHide(msg: Message): void;
    protected onActivateRequest(msg: Message): void;
    protected focusInputField(): void;
    protected renderSearchHeader(): React.ReactNode;
    protected renderSearchAndReplace(): React.ReactNode;
    protected renderReplaceFieldToggle(): React.ReactNode;
    protected renderNotification(): React.ReactNode;
    protected readonly focusSearchFieldContainer: () => void;
    protected doFocusSearchFieldContainer(): void;
    protected readonly unfocusSearchFieldContainer: () => void;
    protected doUnfocusSearchFieldContainer(): void;
    protected readonly search: (e: React.KeyboardEvent<Element>) => void;
    protected doSearch(e: React.KeyboardEvent): void;
    protected renderSearchField(): React.ReactNode;
    protected handleFocusSearchInputBox: () => void;
    protected handleBlurSearchInputBox: () => void;
    protected readonly updateReplaceTerm: (e: React.KeyboardEvent<Element>) => void;
    protected doUpdateReplaceTerm(e: React.KeyboardEvent): void;
    protected renderReplaceField(): React.ReactNode;
    protected handleFocusReplaceInputBox: () => void;
    protected handleBlurReplaceInputBox: () => void;
    protected renderReplaceAllButtonContainer(): React.ReactNode;
    protected renderOptionContainer(): React.ReactNode;
    protected renderOptionElement(opt: SearchFieldState): React.ReactNode;
    protected handleOptionClick(option: SearchFieldState): void;
    protected updateSearchOptions(): void;
    protected renderSearchDetails(): React.ReactNode;
    protected renderGlobFieldContainer(): React.ReactNode;
    protected renderExpandGlobFieldsButton(): React.ReactNode;
    protected renderGlobField(kind: 'include' | 'exclude'): React.ReactNode;
    protected handleFocusIncludesInputBox: () => void;
    protected handleBlurIncludesInputBox: () => void;
    protected handleFocusExcludesInputBox: () => void;
    protected handleBlurExcludesInputBox: () => void;
    protected splitOnComma(patterns: string): string[];
    protected renderSearchInfo(): React.ReactNode;
}
//# sourceMappingURL=search-in-workspace-widget.d.ts.map
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
import { Disposable, DisposableCollection } from '../../common/disposable';
import { Event, Emitter } from '../../common/event';
import { Tree, TreeNode } from './tree';
import { TreeDecoration } from './tree-decorator';
import { FuzzySearch } from './fuzzy-search';
import { LabelProvider } from '../label-provider';
export declare class TreeSearch implements Disposable {
    protected readonly tree: Tree;
    protected readonly fuzzySearch: FuzzySearch;
    protected readonly labelProvider: LabelProvider;
    protected readonly disposables: DisposableCollection;
    protected readonly filteredNodesEmitter: Emitter<readonly Readonly<TreeNode>[]>;
    protected _filterResult: FuzzySearch.Match<TreeNode>[];
    protected _filteredNodes: ReadonlyArray<Readonly<TreeNode>>;
    protected init(): void;
    getHighlights(): Map<string, TreeDecoration.CaptionHighlight>;
    /**
     * Resolves to all the visible tree nodes that match the search pattern.
     */
    filter(pattern: string | undefined): Promise<ReadonlyArray<Readonly<TreeNode>>>;
    /**
     * Returns with the filtered nodes after invoking the `filter` method.
     */
    get filteredNodes(): ReadonlyArray<Readonly<TreeNode>>;
    /**
     * Event that is fired when the filtered nodes have been changed.
     */
    get onFilteredNodesChanged(): Event<ReadonlyArray<Readonly<TreeNode>>>;
    dispose(): void;
    protected fireFilteredNodesChanged(nodes: ReadonlyArray<Readonly<TreeNode>>): void;
    protected toCaptionHighlight(match: FuzzySearch.Match<TreeNode>): TreeDecoration.CaptionHighlight;
    protected mapRange(range: FuzzySearch.Range): TreeDecoration.CaptionHighlight.Range;
}
//# sourceMappingURL=tree-search.d.ts.map
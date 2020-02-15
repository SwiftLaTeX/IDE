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
import * as fuzzy from 'fuzzy';
export declare class FuzzySearch {
    private static readonly PRE;
    private static readonly POST;
    /**
     * Filters the input and returns with an array that contains all items that match the pattern.
     */
    filter<T>(input: FuzzySearch.Input<T>): Promise<FuzzySearch.Match<T>[]>;
    protected sortResults<T>(left: fuzzy.FilterResult<T>, right: fuzzy.FilterResult<T>): number;
    protected mapResult<T>(result: fuzzy.FilterResult<T>): FuzzySearch.Match<T>;
    protected mapRanges(input: string): ReadonlyArray<FuzzySearch.Range>;
}
/**
 * Fuzzy searcher.
 */
export declare namespace FuzzySearch {
    /**
     * A range representing the match region.
     */
    interface Range {
        /**
         * The zero based offset of the match region.
         */
        readonly offset: number;
        /**
         * The length of the match region.
         */
        readonly length: number;
    }
    /**
     * A fuzzy search match.
     */
    interface Match<T> {
        /**
         * The original item.
         */
        readonly item: T;
        /**
         * An array of ranges representing the match regions.
         */
        readonly ranges: ReadonlyArray<Range>;
    }
    /**
     * The fuzzy search input.
     */
    interface Input<T> {
        /**
         * The pattern to match.
         */
        readonly pattern: string;
        /**
         * The items to filter based on the `pattern`.
         */
        readonly items: ReadonlyArray<T>;
        /**
         * Function that extracts the string from the inputs which will be used to evaluate the fuzzy matching filter.
         */
        readonly transform: (item: T) => string;
    }
}
//# sourceMappingURL=fuzzy-search.d.ts.map
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
import { ContentLinesArrayLike } from './content-lines';
export declare class DiffComputer {
    computeDiff(previous: ContentLinesArrayLike, current: ContentLinesArrayLike): DiffResult[];
    computeDirtyDiff(previous: ContentLinesArrayLike, current: ContentLinesArrayLike): DirtyDiff;
}
export interface DiffResult {
    value: [number, number];
    count?: number;
    added?: boolean;
    removed?: boolean;
}
export interface DirtyDiff {
    /**
     * Lines added by comparison to previous revision.
     */
    readonly added: LineRange[];
    /**
     * Lines, after which lines were removed by comparison to previous revision.
     */
    readonly removed: number[];
    /**
     * Lines modified by comparison to previous revision.
     */
    readonly modified: LineRange[];
}
export interface LineRange {
    start: number;
    end: number;
}
//# sourceMappingURL=diff-computer.d.ts.map